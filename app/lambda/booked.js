const axios = require('axios')

function preflight(callback) {
  callback(null, {
    statusCode: 204,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT',
    },
    body: {},
  });
}

const instance = axios.create({
  baseURL: 'https://acuityscheduling.com/api/v1',
  timeout: 5000,
  auth: {
    username: '18196898',
    password: 'b38fc374e8d47ff57a34d5b877101da3'
  }
});

exports.handler = async (event, context) => { 
  context.callbackWaitsForEmptyEventLoop = false

  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 204,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT',
      },
      body: {},
    }
  } else {
    try {
      const data = JSON.parse(event.body), 
            client_email = data.email

      const response = await instance
        .get(`/appointments`, { 
          params: { 
            email: client_email
          }
        })

      return {
        statusCode: 200,
        headers: { 
          'content-type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Request-Headers': '*',
        },
        body: JSON.stringify({
          caller: "Blue Ocean and Eternal Sky",
          data: response.data
        }),
      }
    } catch(err){
      console.log(err) 
      return {
        statusCode: 500, 
        headers: { 
          'content-type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Request-Headers': '*',
        },
      body: JSON.stringify({
          msg: err.message, 
          caller: "Blue Ocean and Eternal Sky",
        })
      }
    }
  }
} 
