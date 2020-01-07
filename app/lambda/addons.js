const axios = require('axios')

exports.handler = function booked(event, context, callback) {	
  const instance = axios.create({
	  baseURL: 'https://acuityscheduling.com/api/v1',
	  timeout: 1000,
	  auth: {
	    username: '18196898',
      password: 'b38fc374e8d47ff57a34d5b877101da3'
	  }
	})

	instance
    .get(`/appointment-addons`)
    .then(({ data }) => {
      callback(null, {
      	statusCode: 200,
      	headers: { 
          'content-type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Request-Headers': '*',
        },
        body: JSON.stringify(data),
      })
    })
    .catch((e) => {
      callback(e)
    }
  )
}