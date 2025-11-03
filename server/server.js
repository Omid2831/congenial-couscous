import express from 'express';

// Wraping the express as an app
const app = express();

// give the router a port
const port = 5001

// Server runs on this port!
app.listen(port, ()=>{
    console.log(`app is starting at ${port}`)
});
