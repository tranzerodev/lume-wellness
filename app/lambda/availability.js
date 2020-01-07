const axios = require('axios')

function preflight(callback) {
  callback(null, {
    statusCode: 204,
    headers: {
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT',
    },
    body: {},
  });
}

exports.handler = async function availability(event, context, callback) {
  try {
    const instance = axios.create({
      baseURL: 'https://acuityscheduling.com/api/v1',
      auth: {
        username: '18265136',
        password: 'e8681bdcb3f56f00919fa0ed3d7097c7'
      }
    })

    let data = event.body;
    const newData = JSON.parse(data)

    let newArr = [];

    for (let i = 0; i < 7; i++) {
      let date = new Date(newData.date)
      let toAdd = (i === 0 ? 0 : (i))
      console.log('toadd',toAdd)
      date.setDate(date.getDate() + toAdd)
      let newDate = date.toLocaleDateString();
      console.log('new dateeeee', newDate)
      const queryUrl = "availability/times?appointmentTypeID=" + parseInt(newData.appointmentTypeID) + "&date=" + newDate;

      if (event.httpMethod === 'OPTIONS') {
        console.log("Calling Prefight: ");
        preflight(callback);
      } else {
        const data = await instance.get(queryUrl)
        newArr.push(data.data)
      }
    }
    const response = {
      data: newArr,
      code: 200
    }
    return (null, {
      statusCode: 200,
      headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Request-Headers': '*',
      },
      body: JSON.stringify(response),
    })
  }
  catch (e) {
    // console.log('error from avail', e)
    const response = {
      code: 400,
      msg: 'Error'
    }
    return (null, {
      statusCode: 200,
      headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Request-Headers': '*',
      },
      body: JSON.stringify(response),
    })
  }
}