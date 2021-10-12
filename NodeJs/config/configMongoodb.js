const mongoose = require('mongoose')
const dotenv = require('dotenv');
dotenv.config();
// const URI = 'mongodb+srv://admin:071221@cluster0.oqn5h.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const URI = process.env.DATABASE_URI
module.exports = () => {
    mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log('Connect Success')
        })
        .catch((err) => {
            console.log(err.message)
        })
}
