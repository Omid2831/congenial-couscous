const express = require('express');
const { getAllNotes, createNotes, updateNotes, deleteNotes } = require('../Controller/noteController');
const router = express.Router();


router.get('/', getAllNotes);
router.post('/post', createNotes);
router.put('/:id', updateNotes);
router.delete('/:id', deleteNotes);


module.exports = router;



