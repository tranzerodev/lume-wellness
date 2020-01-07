// userCreate.js
import mongoose from 'mongoose'
// Load the server
import db from './server'
// Load the user Model
import User from './users-model'

const stripe = require("stripe")("sk_test_QoElvSZnn13toeKikkOZIKF7002lyhtSTZ");
exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false
  const request_data = JSON.parse(event.body);
  const customer_data = await stripe.customers.create(
    {email: JSON.parse(event.body).email}
  )
  try {
    const name = request_data.name;
    const email = request_data.email;
    const phone = request_data.phone;
    const address = request_data.address;
    const id = mongoose.Types.ObjectId();
    const paymentId = customer_data.id;

    const user = {
      _id: id,
      name: name,
      email: email,
      phone: phone, 
      address: address,
      payment_id: paymentId,
      __v: 0
    };

    const response = {
      msg: "user successfully created",
      data: user
    };
    
    // Use user.Model to create a new user
    await User.create(user);
    return {
      statusCode: 201,
      body: JSON.stringify(response)
    }
  } catch (err) {
    console.log('user.create', err); // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({msg: err.message})
    }
  }
}