import React from 'react'
import { Link } from 'react-router-dom'
import { PenSquare, Trash2 } from 'lucide-react'
import axios from 'axios'
import toast from 'react-hot-toast'


const NoteCard = ({ note, onDelete }) => {
    const handleDelete = async (e) => {
        e.preventDefault();
        
        if (!confirm('Are you sure you want to delete this note?')) {
            return;
        }

        try {
            await axios.delete(`http://localhost:8080/api/notes/${note._id}`);
            toast.success('Note deleted successfully!', { id: 'delete-note' });
            onDelete(note._id); // Notify parent to refresh
        } catch (error) {
            console.error('Error deleting note:', error);
            toast.error('Failed to delete note', { id: 'delete-error' });
        }
    };

    return (
        <div className="card bg-base-100 hover:shadow-lg transition-all duration-200 border-t-4 border-solid border-[#00FF9D]">
            <Link
                to={`/note/${note._id}`}
                className="card-body border border-gray-900">
                <h3 className="card-title text-base-content">{note.title}</h3>
                <p className="text-base-content/70 line-clamp-3">{note.content}</p>
                <div className="card-actions justify-between items-center mt-4">
                    <span className="text-sm text-base-content/60">
                        {new Date(note.createdAt).toLocaleDateString()}
                    </span>
                    <div className="flex items-center gap-1">
                        <PenSquare className="size-4" />
                        <button
                            onClick={handleDelete}
                            className="btn btn-ghost btn-xs text-error hover:bg-error hover:text-white">
                            <Trash2 className="size-4" />
                        </button>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default NoteCard;