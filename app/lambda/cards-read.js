const stripe = require("stripe")("sk_test_QoElvSZnn13toeKikkOZIKF7002lyhtSTZ");
const axios = require('axios');

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Content-Type": "application/json",
  "Access-Control-Allow-Methods": "GET, POST, PUT",
};

function preflight(callback) {
  callback(null, {
    statusCode: 204,
    headers,
    body: {},
  });
}

const instance = axios.create({
  baseURL: '',
  timeout: 1000,
  auth: {
    username: '',
  	password: ''
  }
})

exports.handler = (event, context, callback) => {

  // preflight check
  if (event.httpMethod === 'OPTIONS'){
    preflight(callback);
  } else {
    const data = JSON.parse(event.body);
    const successCode = 200;
    const failureCode = 500;

    return stripe.customers.listSources(data.customer_id)
      .then((responseData) => {
        const response = {
          statusCode: successCode, 
          headers: {
            'Content-Type':'application/json',
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Request-Headers':'*',
          },
          body: JSON.stringify({
            message: 'Successfully load cards',
            cards: responseData.data
          }),
        };
        callback(null, response);
      })
      .catch((err) => {
        const response = {
          statusCode: failureCode,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Request-Headers': '*',
          },
          body: JSON.stringify({
            err: err.message,
            caller: "The Eternal Blue Sky"
          })
        };
        callback(null, response);
      })
  }
}