const db_uri = `mongodb://${process.env.MONGODB_SERVER}:${process.env.MONGODB_PORT}/insurance`

const mongoose = require('mongoose')
mongoose.connect(db_uri, {
    auth: {
        authSource: `admin`
    },
    user: process.env.MONGODB_ADMINUSERNAME,
    pass: process.env.MONGODB_ADMINPASSWORD,
    useNewUrlParser: true
});

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
    console.log('db connected')
})

module.exports = mongoose
