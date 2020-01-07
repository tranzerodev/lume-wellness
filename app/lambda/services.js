const axios = require('axios')

exports.handler = function booked(event, context, callback) {	
  const instance = axios.create({
	  baseURL: 'https://acuityscheduling.com/api/v1',
	  timeout: 1000,
	  auth: {
	    username: '18265136',
      password: 'e8681bdcb3f56f00919fa0ed3d7097c7'
	  }
	})

	instance
    .get(`/appointment-types`)
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