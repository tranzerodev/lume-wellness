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

exports.handler = function booking(event, context, callback) {
  console.log('event from booking', event)
  const instance = axios.create({
    baseURL: 'https://acuityscheduling.com/api/v1',
    headers: {
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT',
    },
    auth: {
      username: '18265136',
      password: 'e8681bdcb3f56f00919fa0ed3d7097c7'
    }
  })
  let data = event.body;
  // console.log('data',data)

  const newData = JSON.parse(data)
  // console.log('event body', newData)
  let newDate = new Date(newData.date).toISOString()
  const reqData = {
    amount: newData.amount,
    datetime: newDate,
    duration: newData.duration,
    appointmentTypeID: newData.id,
    name: newData.name,
    firstName: newData.firstName,
    lastName: newData.lastName,
    email: newData.email,
  }
  console.log('req data', reqData)

  if (event.httpMethod === 'OPTIONS') {
    console.log("Calling Prefight: ");
    preflight(callback);
  } else {
    const response = {
      msg: 'Booked Successfully.',
      code: 200,
    }
    instance.post(`/appointments`, reqData)
      .then(({ data }) => {
        console.log("Appointment data:", data);
        callback(null, {
          statusCode: 200,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Request-Headers': '*',
          },
          body: JSON.stringify(response),
        })
      })
      .catch((e) => {
        const { status_code, message } = e.response.data
        console.log("Appointment error:", e.response.data);
        //callback(e)

        const response = {
          msg: message,
          code: status_code,
        }
        callback(null, {
          statusCode: 200,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Request-Headers': '*',
          },
          body: JSON.stringify(response),
        })
      }
      )
  }
}