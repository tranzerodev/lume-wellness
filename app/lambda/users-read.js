// userRead.js
import mongoose from 'mongoose'
// Load the server

import db from './server'
// Load the Product Model
import User from './users-model'

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
      // Use User.Model to find all Users
      const data = JSON.parse(event.body),
            email = data.email
      const theUser = await User.findOne({email: email}),
            response = {
              msg: "User with email"+email+" is found",
              data: theUser
            }

      return {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Request-Headers': '*',
        },
        body: JSON.stringify(response)
      }
    } catch (err) {
      console.log(err) // output to netlify function log
      return {
        statusCode: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Request-Headers': '*',
        },
        body: JSON.stringify({msg: err.message})
      }
    }
  }
} 
