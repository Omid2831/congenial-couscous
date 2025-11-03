
// get all data 
export function getAllNotes(req, res)
{
    res.status(200).send('you got the message')
}


// Define a route to create notes
export function createNotes(req, res) 
{
    // creating a note as a message to the user visually
    res.status(201).json({
        message: "post created successfully!"
    })
}

// update a route by its id
export function updateNotes(req, res)
{
    // creating a note as a message to the user visually
    res.status(200).json({
        message: "post updated successfully!"
    })
}

// delete a route by its id
export function deleteNotes(req, res) 
{
    // creating a note as a message to the user visually
    res.status(200).json({
        message: "post deleted successfully!"
    })
}