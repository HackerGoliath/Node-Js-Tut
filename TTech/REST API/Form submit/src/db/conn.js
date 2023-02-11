const mongoose = require('mongoose');

mongoose.set('strictQuery', true);
mongoose.connect(`${process.env.MONGO_URI}/RegistrationForm`)
    .then(() => console.log("Connection successfull"))
    .catch((e) => console.log("Connection Failed"))