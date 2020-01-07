const stripe = require("stripe")("sk_test_QoElvSZnn13toeKikkOZIKF7002lyhtSTZ");

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

exports.handler = function purchase(event, context, callback) {
  if (event.httpMethod === 'OPTIONS') {
    preflight(callback);
  } else {
    const data = JSON.parse(event.body);
    console.log(data);
    const successCode = 200;
    const failureCode = 500;

    return stripe.charges.create({
      amount: data.amount*100  ,
      currency: "usd",
      source: "tok_mastercard", 
      description: data.description
    })
      .then((charge) => { // Success response
        const response = {
          statusCode: 200,
          headers: {
            'Content-Type':'application/json',
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Request-Headers':'*',
          },
          body: JSON.stringify({
            message: `Charge processed succesfully!`,
            charge,
          }),
        };
        callback(null, response);
      })
      .catch((err) => { // Error response
        const response = {  
          statusCode: 500,
          headers: {
            'Content-Type':'application/json',
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Request-Headers':'*',
          },
          body: JSON.stringify({
            error: err.message,
            name: "Troy"
          }),
        };
        callback(null, response);
      })
  }
}
