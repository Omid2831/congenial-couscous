import express from 'express';

// Import DB 
import conneectDB from './config/db.js'

// Import the noteRoutes CRUD
import noteRoute from './routes/notesRoutes.js';

// Create an Express application
const app = express();

// Connect MANGODB
conneectDB();

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
