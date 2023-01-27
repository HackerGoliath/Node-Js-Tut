// npm i bodyparser
const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
// const bodyparser = require('body-parser'); // for post request
hostname = 'localhost'
port = 8000


main().catch(err => console.log(err));

async function main() {
    mongoose.set('strictQuery', false);
    await mongoose.connect('mongodb://127.0.0.1:27017/contactDance', { useNewUrlParser: true });
    console.log("Connect to mongo successfully");
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
// define mongoose schema
const contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    address: String,
    desc: String
});

const Contact = mongoose.model('Contact', contactSchema);


// EXPRESS SPECIFIC STUFF
// static files => Anyone can get file if he have link no authentication required
// for serving static files
app.use('/static', express.static('static'))
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
// Set the template engine as pug
app.set('view engine', 'pug')

// Set the views directory
app.set('views', path.join(__dirname, 'views'))


// ENDPOINTS
app.get('/', (req, res) => {
    const params = {}
    res.status(200).render('home.pug', params);
})

app.get('/contact', (req, res) => {
    const params = {}
    res.status(200).render('contact.pug', params);
})

app.post('/contact', (req, res) => {
    var myData = new Contact(req.body);
    myData.save().then(() => {
        res.send("This item has benn saved to the database")
    }).catch(() => {
        res.status(400).send("Item was not saved to the database")
    })
    // res.status(200).render('contact.pug');
})




// START THE SERVER
app.listen(port, () => {
    console.log(`The app started at port : http://${hostname}:${port}`);
})