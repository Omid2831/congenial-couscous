// Import Express framework
const express = require('express');

// Create an Express application
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Define a GET route to fetch notes
app.get('/api/notes', (req, res) => {
    // send the notes
    res.status(200).send('you got the note');
});
// Define a route to delete notes
app.post('/api/notes', (req, res) => {

    res.status(201).send('your note has been created successfully!');
});

// Define the port the server will listen on
const port = 8080;

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
