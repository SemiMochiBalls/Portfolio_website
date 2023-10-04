// Set the NODE_ENV environment variable to 'development' if not already defined
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Import the custom Express configuration
var express = require('./config/express');

// Create an Express application
var app = express();

// Start the server and listen on port 3000
app.listen(3000);

// Export the app object for testing or other modules to use
module.exports = app;

// Print a message indicating the server is running
console.log('Server running at http://localhost:3000/');
