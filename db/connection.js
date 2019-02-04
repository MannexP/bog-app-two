const mongoose = require('mongoose')

mongoose.connect('process.env.MONGO_URI')

mongoose.connection.once('open', () =>{
    console.log('Mongoose has connected to MongoDB')
})

mongoose.connection.on('error', (error) => {
    console.error('MongoDB connection error!!! ${error}')
})

