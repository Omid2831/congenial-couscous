const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    // send the notes
    res.status(200).send('you just fetched the notes');
});

// Define a route to create notes
router.post('/post', (req, res) => {
    // creating a note as a message to the user visually
    res.status(201).json({
        message: "post created successfully!"
    })
});

// update a route by its id
router.put('/:id', (req, res) => {
    // creating a note as a message to the user visually
    res.status(200).json({
        message: "post updated successfully!"
    })
});

// delete a route by its id
router.delete('/:id', (req, res) => {
    // creating a note as a message to the user visually
    res.status(200).json({
        message: "post deleted successfully!"
    })
});


module.exports = router;



