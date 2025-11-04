import 'dotenv/config';
import express from 'express';
// Import DB 
import connectDB from './config/db.js'
// Import the noteRoutes CRUD
import noteRoute from './routes/notesRoutes.js';
// rate limiter on the server request
import rateLimiter from './middleware/rateLimiter.js';
// importing cors for security reasons
import cors from 'cors'

// Create an Express application
const app = express();


// CORS middleware
app.use(
    cors({
        origin: ['http://localhost:5173'],
    })
);


// Middleware 
app.use(express.json());
app.use(rateLimiter)

// creating a path for API
const api = '/api/notes';
app.use(api, noteRoute);


// Define the port the server will listen
const port = Number(process.env.PORT) || 8080;
const baseUrl = `http://localhost:${port}`;


// Connect MongoDB
connectDB().then(() => {
    // Start the server
    app.listen(port, () => {
        console.log(`Server ready: ${baseUrl}`);
        console.log(`Notes API: ${baseUrl}${api}`);
    });
})
