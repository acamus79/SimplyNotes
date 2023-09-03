import React, { useState, useEffect } from "react";
import NoteCard from "./NoteCard";
import NoteModal from "./NoteModal";
import { getNotes, updateNote, createNote } from "../api";
import "./styles.css";

function Dashboard() {

    const [notes, setNotes] = useState([]);

    const [selectedNote, setSelectedNote] = useState(null);

    const fetchNotes = async () => {
        try {
            const response = await getNotes();
            console.log("AKA es el fetch");
            console.log(response);
            setNotes(response);
        } catch (error) {
            console.error("Error al obtener las notas:", error);
        }
    };

    useEffect(() => {
        fetchNotes();
    }, []);

    const handleCardClick = (note) => {
        console.log('handle card click');
        setSelectedNote(note);
    };

    const handleEditNote = async (editedNote) => {

        try {
            await updateNote(editedNote);
            // Actualiza la nota en el estado local 'notes'
            setNotes((prevNotes) =>
                prevNotes.map((note) =>
                    note.id === editedNote.id ? editedNote : note
                )
            );
            setSelectedNote(null);
        } catch (error) {
            console.error("Error al actualizar la nota:", error);
        }
    };

    const handleCreateNote = async (newNote) => {
        try {
            const createdNote = await createNote(newNote);
            // Agrega la nueva nota al estado local 'notes'
            setNotes((prevNotes) => [createdNote, ...prevNotes]);
            setSelectedNote(null);
        } catch (error) {
            console.error("Error al crear la nota:", error);
        }
    };

    const handleCloseModal = () => {
        setSelectedNote(null);
    };

    return (
        <div className="note-grid dashboard-container">
            {notes.map((note) => (
                <NoteCard
                key={note.id}
                note={note}
                setSelectedNote={setSelectedNote} // Pasa la función de setSelectedNote al componente NoteCard
                handleCardClick={handleCardClick} // Pasa la función de handleCardClick al componente NoteCard
                />
            ))}
            {selectedNote && (
                <NoteModal
                    note={selectedNote}
                    onClose={handleCloseModal}
                    onEdit={handleEditNote}
                    onCreate={handleCreateNote}
                />
            )}
        </div>
    );
}

export default Dashboard;
