import mongoose from 'mongoose'

// Initialize connection to database
const dbUrl = "mongodb+srv://troydo42:milkyway42@lumewellness-aycgh.mongodb.net/lume",
      dbOptions = {
        useNewUrlParser: true,
        useFindAndModify: false
      }

// Set DB from mongoose connection
mongoose.connect(dbUrl, dbOptions)
const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'))
export default db
