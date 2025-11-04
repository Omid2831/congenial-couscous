import 'dotenv/config';
import express from 'express';

// Import DB 
import connectDB from './config/db.js'

// Import the noteRoutes CRUD
import noteRoute from './routes/notesRoutes.js';

// Create an Express application
const app = express();

// Connect MongoDB
connectDB();

// Middleware 
app.use(express.json());


// Custom Middleware
// app.use((req,res, next)=>{
//     console.log(`Request method is ${req.method} && Request_URL is ${req.url}`)
//     next()
// })

// creating a path for API
const api = '/api/notes';
app.use(api, noteRoute);


// Define the port the server will listen
const port = Number(process.env.PORT);
const baseUrl = `http://localhost:${port}`;

// Start the server
app.listen(port, () => {
    console.log(`Server ready: ${baseUrl}`);
    console.log(`Notes API: ${baseUrl}${api}`);
});
