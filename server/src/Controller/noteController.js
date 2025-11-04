import Note from "../Models/Notes.js"

// get all data 
export async function getAllNotes(req, res) {

    try {
        const notes = await Note.find();
        res.status(200).json(notes);

    } catch (error) {
        console.error('Error in getAllNotes controller', error);
        res.status(500).json({
            message: 'Internal server error'
        })
    }
}

export async function getNotesById(req, res) {
    try {
        const note = await Note.findById(req.params.id)

        if (!note) {
            return res.status(404).json({ message: 'Note not found' })
        }

        res.status(200).json(note)
    } catch (error) {
        console.error('Error in getNotesById controller', error);
        res.status(500).json({
            message: 'Internal server error'
        })
    }
}


// Define a route to create notes
export async function createNotes(req, res) {

    try {
        const { title, content } = req.body
        const note = new Note({ title, content })

        const NewNote = await note.save()

        res.status(201).json(NewNote)
    } catch (error) {
        console.error('Error in createNotes controller', error);
        res.status(500).json({
            message: 'Internal server error'
        })
    }
}

// update a route by its id
export async function updateNotes(req, res) {

    try {
        const { title, content } = req.body;
        const updateNote = await Note.findByIdAndUpdate(req.params.id, { title, content }, { new: true })

        if (!updateNote) return res.status(404).json({ message: 'Not Note found' });

        res.status(200).json(updateNote);
    } catch (error) {
        console.error('Error in createNotes controller', error);
        res.status(500).json({
            message: 'Internal server error'
        })
    }
}

// delete a route by its id
export async function deleteNotes(req, res) {

    try {
        const deleteNote = await Note.findByIdAndDelete(req.params.id)

        if (!deleteNote) return res.status(404).json({ message: 'Note not found' })

        res.status(200).json({ message: 'Note deleted successfully', note: deleteNote })
    } catch (error) {
        console.error('Error in deleteNotes controller', error);
        res.status(500).json({
            message: 'Internal server error'
        })
    }
}