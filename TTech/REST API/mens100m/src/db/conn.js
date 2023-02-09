const mongoose = require('mongoose');

mongoose.set('strictQuery', false);
mongoose.connect("mongodb://127.0.0.1:27017/Olympics")
    .then(() => {
        console.log("Connection successfull")
    }).catch((e) => {
        console.log("No connection")
    })