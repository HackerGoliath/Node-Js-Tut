const mongoose = require('mongoose');

mongoose.set('strictQuery', false);
mongoose.connect("mongodb://127.0.0.1:27017/YoutubeRegistration")
    .then(() => console.log("Connection Successfull"))
    .catch((e) => console.log("No Connection"));