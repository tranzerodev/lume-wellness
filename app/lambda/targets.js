const axios = require('axios')

const instance = axios.create({
  baseURL: 'https://lume-wellness.api-us1.com/api/3',
  headers: {
    'Api-Token': 'f7d6fd8beace3389fb8dd5215e990b9250e7276f8c8df83dab9fe15d496fe03739e72df7'
  }
})

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


exports.handler = (event, context, callback) => {
  // "event" has informatiom about the path, body, headers etc of the request
  console.log('Request data', event.body)
  const data = event.body;

  if (event.httpMethod === 'OPTIONS'){
  	console.log("Calling Preflight: ");
  	preflight(callback);
  } else {
  	instance.post(`/contacts`,data)
		.then(({data}) => {
      const contact_id = JSON.stringify(
        parseInt(data.contact.id, 10));
      console.log("CREATING NEW CONTACT ######################## CONTACT DONE",  contact_id);
      const subscribePayload = {
          'contactList': {
            'list': 2,
            'contact': contact_id,
            'status': 1
          }
      };
      return instance.post(`/contactLists`,subscribePayload);
    })
    .then(({data}) => {
      console.log("ADD CONTACT TO LIST ########################  LIST DONE",  data);
      const responseBody = {
        msg: 'Success',
        code: 200,
        data: JSON.stringify(data)
      }
      callback(null, {
        statusCode: 200, 
        headers: {
          'Content-Type':'application/json',
          'Access-Control-Allow-Origin':'*',
          'Access-Control-Request-Headers':'*',
        },
        body: JSON.stringify(responseBody),
      })
    }).catch((e) => {
      const responseBody = {
        msg: "Please try using another email!"+e,
        code: 400
      }
      console.log("Email Subscription Error:",e);
      callback(null, {
        statusCode: 200, 
        headers: {
          'Content-Type':'application/json',
          'Access-Control-Allow-Origin':'*',
          'Access-Control-Request-Headers':'*',
        },
        body: JSON.stringify(responseBody),
      })
    });
  }
}
	