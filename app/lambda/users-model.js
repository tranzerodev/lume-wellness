// userModel.js
import mongoose from 'mongoose'
// Set Product Schema
const schema = new mongoose.Schema({
        _id: mongoose.Schema.Types.ObjectId,
        name: {
          type: String,
          required: [true, 'Name field is required'],
          max: 100
        },
        email: {
          type: String,
          required: [true, 'Email field is required']
        },
        phone: {
          type: String,
          required: [true, 'Phone field is required']
        },
        address: {
          type: String,
          required: [true, 'Address field is required']
        }, 
        payment_id: {
          type: String,
          required: [false, 'Payment ID is not required']
        },
      }),

      User = mongoose.model('user', schema)
export default User 