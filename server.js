// Setup empty JS object to act as endpoint for all routes
const projectData = [
    {temp: 150.08, city: 'Texus', date: '5.16.2020', feelings: 'feeling good'},
    { temp: 150.08, city: 'Texus', date: '5.16.2020', feelings: 'feeling refress'}
];

// Require Express (which we've already installed on the command line) to run server and routes
const express = require('express');
// Create an instance of our app, with express
const app = express();
// Dependencies
const bodyParser = require('body-parser');
/* Middleware*/
// Here we are configuring express to use body-parser as middle-ware so that we can parse our data
app.use(bodyParser.urlencoded({ extended: false }));// Here we use the 'use' method to tell bodyParser exactly how we want our data to be parsed
app.use(bodyParser.json());// We're going to mostly want JSON

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website')); // We use our 'use' method and this time, we're pointing our app to the folder that we want it to look at

// **************** Setup Server ******************
// Map URL's to functions
const port = 8080;// We set our port

const server = app.listen(port, listening);// Call the listen method and pass it our callback function

function listening(){
    console.log('server is running');
    console.log('server is : ' + port);
}
// **************** Setup Express route ****************** 
//we use the get method on the instance of our app
app.get('/getWeather', function (req, res){
    console.log(projectData);
    res.send(projectData);
});

// POST method routes - adds data to projectData object
app.post('/postWeather', function (req, res){
    newEntry = {
        temp: req.body.temp,
        city: req.body.city,
        date: req.body.date,
        feelings: req.body.feelings
    }
    projectData.push(newEntry);
    console.log(projectData);
    res.send(projectData);
});