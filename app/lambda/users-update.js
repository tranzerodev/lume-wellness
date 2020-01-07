// productUpdate.js
import mongoose from 'mongoose'
// Load the server
import db from './server'
// Load the Product Model
import User from './users-model'
exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false
  
  try {
    // Parse the ID
    const data = JSON.parse(event.body),
          id = data.id,
          user = data.user,
          response = {
            msg: "User Info successfully updated",
            data: user
          }
    
    // Use User Model and id to update 
    await User.findOneAndUpdate({_id: id}, user)
    
    return {
      statusCode: 201,
      body: JSON.stringify(response)
    }
  } catch(err) {
    console.log('product.update', err) // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({msg: err.message})
    }
  }
}