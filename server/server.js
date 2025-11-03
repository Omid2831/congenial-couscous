// Import Express framework
const express = require('express');

// Create an Express application
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Define a GET route to fetch notes
app.get('/api/notes', (req, res) => {
    // send the notes
    res.status(200).send('you got the file here');
});

// Define a route to create notes
app.post('/api/notes', (req, res) => {
    // creating a note as a message to the user visually
    res.status(201).json({
        message: "post created successfully!"
    })
});

// update a route by its id
app.put('/api/notes/:id', (req, res) => {
    // creating a note as a message to the user visually
    res.status(200).json({
        message: "post updated successfully!"
    })
});

// delete a route by its id
app.delete('/api/notes/:id', (req, res) => {
    // creating a note as a message to the user visually
    res.status(200).json({
        message: "post deleted successfully!"
    })
});


// Define the port the server will listen on
const port = 8080;

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
