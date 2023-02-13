const mongoose = require('mongoose');

mongoose.set('strictQuery', false);
mongoose.connect(`${process.env.MONGO_URI}/dynamicWebsite`)
    .then(() => console.log("Connection Successfull"))
    .catch((e) => console.log("Connection Failed"))