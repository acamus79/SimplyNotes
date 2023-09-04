import React, { useState, useEffect } from "react";
import NoteCard from "./NoteCard";
import NoteModal from "./NoteModal";
import { getNotes, updateNote, createNote, getArchive } from "../api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";

function Dashboard() {

    const [notes, setNotes] = useState([]);
    const [selectedNote, setSelectedNote] = useState(null);
    const [isArchiveVisible, setArchiveVisible] = useState(false);
    const [isCreateNoteModalOpen, setCreateNoteModalOpen] = useState(false); // Estado para controlar la apertura del modal de creación de notas
    const [newNote, setNewNote] = useState({
        title: '',
        content: '',
        archived: false,
    });

    const fetchNotes = async () => {
        try {
            const response = await (isArchiveVisible ? getArchive() : getNotes());
            setNotes(response);
        } catch (error) {
            console.error("Error al obtener las notas:", error);
        }
    };

    const handleViewArchive = async () => {
        try {
            const archiveResponse = await getArchive();
            setNotes(archiveResponse);
            setArchiveVisible(!isArchiveVisible);
        } catch (error) {
            console.error("Error al obtener el archivo:", error);
        }
    };

    useEffect(() => {
        fetchNotes();
    }, [isArchiveVisible]);

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


    const handleCloseModal = () => {
        setSelectedNote(null);
    };

    const handleCreateNote = async () => {
        try {
            // Envía la nueva nota a la API
            await createNote(newNote);

            // Cierra el modal después de crear la nota
            setCreateNoteModalOpen(false);
            
            // Limpia los campos del formulario
            setNewNote({
                title: '',
                content: '',
                archived: false,
            });
        } catch (error) {
            console.error("Error al crear la nota:", error);
        }
    };

    return (
        <div>
        <div className="dsh-header">
            <button className="btn save-icon nav-btn" onClick={() => setCreateNoteModalOpen(true)}>
                <FontAwesomeIcon icon={faFile} /> Crear Nota
            </button>
            <button className="btn archive-icon nav-btn" onClick={handleViewArchive}>
                            <FontAwesomeIcon icon={faFolderOpen} /> Ver Archivo   
            </button>
        </div>
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
        {isCreateNoteModalOpen && (
            <NoteModal
                note={newNote}
                onClose={() => setCreateNoteModalOpen(false)}
                onSave={handleCreateNote}
            />
        )}
        </div>
    );
}

export default Dashboard;

