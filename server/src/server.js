// Import Express framework
const express = require('express');

// Import the noteRoutes CRUD
const noteRoute = require('./routes/notesRoutes');

// Create an Express application
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// creating a path for API
const api = '/api/notes';
app.use(api, noteRoute);

// Define the port the server will listen on
const port = 8080;

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
