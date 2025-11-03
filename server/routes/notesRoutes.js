const express = require('express');
const { getAllNotes, createNotes, updateNotes, deleteNotes } = require('../Controller/noteController');
const router = express.Router();


router.get('/', getAllNotes);

// Define a route to create notes
router.post('/post', createNotes);

// update a route by its id
router.put('/:id', updateNotes);

// delete a route by its id
router.delete('/:id', deleteNotes);


module.exports = router;



