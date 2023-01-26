const express = require('express');
const path = require('path');
const app = express();

hostname = 'localhost'
port = 8000

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

app.post('/', (req, res) => {

})


// START THE SERVER
app.listen(port, () => {
    console.log(`The app started at port : http://${hostname}:${port}`);
})