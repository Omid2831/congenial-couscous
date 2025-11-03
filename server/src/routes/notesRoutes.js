import express from 'express';
import { getAllNotes, createNotes, updateNotes, deleteNotes } from '../Controller/noteController.js';
const router = express.Router();


router.get('/', getAllNotes);
router.post('/post', createNotes);
router.put('/:id', updateNotes);
router.delete('/:id', deleteNotes);


export default router;


