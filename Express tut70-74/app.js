const express = require('express');
const fs = require('fs')
const path = require('path');
const app = express();

hostname = 'localhost'
port = 800

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
    const con = "This is the best content on the internet so far use it wisely"
    const params = { 'title': 'PUBG is the best game', 'content': con }
    res.status(200).render('index.pug', params);
})

app.post('/', (req, res) => {
    name = req.body.name;
    age = req.body.age;
    gender = req.body.gender;
    address = req.body.address;
    more = req.body.more;
    let outputToWrite = `The name of the client is ${name}, ${age} years old, ${gender}, residing at ${address} and more about him ${more}`
    fs.writeFileSync('output.txt', outputToWrite)
    const params = { 'message': 'Your form has been submitted successfully' }
    res.status(200).render('index.pug', params);
})


// START THE SERVER
app.listen(port, () => {
    console.log(`The app started at port : http://${hostname}:${port}`);
})