// Require modules
const express = require('express');
const bodyParser = require('body-parser')

// Create the Express app
const app = express();


const port = process.env.PORT
// Configure the app (app.set)


// Mount middleware (app.use)


// Mount routes
app.get('/', function(req, res) {
  	res.body('new');
});

// Tell the app to listen on port 3000
app.listen(3000, function() {
 console.log('Listening on port 3000');
});