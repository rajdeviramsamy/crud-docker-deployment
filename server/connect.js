const mongoose = require('mongoose')

module.exports.connectdb = () => {
    return mongoose.connect('mongodb://172.17.0.1:28000/students')
}
