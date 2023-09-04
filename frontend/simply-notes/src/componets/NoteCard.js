import React, { useState } from "react";
import { updateNote, deleteNote } from "../api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faFile, faEdit } from "@fortawesome/free-solid-svg-icons";
import Swal from 'sweetalert2';
import "./styles.css";

function NoteCard({ note, handleCardClick }) {

    const [editedNote, setEditedNote] = useState(note);
    
    //Borrar Nota
    const handleDeleteClick = (event) => {
        // Detener la propagación del evento para evitar que se abra el modal
        event.stopPropagation();
    
        Swal.fire({
            title: '¿Estás seguro?',
            text: 'Desea borrar la nota ' + note.title,
            icon: 'error',
            showCancelButton: true, 
            cancelButtonText: 'Cancelar', 
            confirmButtonText: 'Aceptar', 
        }).then(async (result) => { 
            if (result.isConfirmed) {
                try {
                    await deleteNote(note.id); // Borrar una nota
                    window.location.reload();
                } catch (error) {
                    console.error("Error al eliminar la nota:", error);
                }
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire('Operación cancelada', 'La Nota no se eliminará', 'success');
            }
        });
    };
    

    //Archivar Nota
    const handleArchiveClick = async (event) => {
        try{
            // Invierte el valor de archived en el estado local editedNote
            const updatedNote = { ...editedNote, archived: !editedNote.archived };
            setEditedNote(updatedNote);
            // Luego, envía la nota actualizada al servidor
            await updateNote(updatedNote);
            window.location.reload();
        }catch (error) {
            console.error("Error al actualizar la nota:", error);}
    };

    // Determinar la clase CSS a aplicar
    const cardClassName = `note-card ${note.archived ? "archived-post-it" : "post-it"}`;
    const iconClassName = `icon ${note.archived ? "save-icon" : "archive-icon"}`;

    // Separar el contenido en las primeras palabras
    const words = note.content.split(' '); // Dividir el contenido en palabras
    const limitedContent = words.slice(0, 8).join(' '); // Tomar las primeras palabras y unirlas con espacios
    const readMoreText = words.length > 8 ? ' (...) Leer más' : ''; // Agrega "(...) Leer más" solo si hay más palabras
    const displayContent = limitedContent + readMoreText;

    return (
        <div className={cardClassName} onClick={() => handleCardClick(note)}>
            <h3> {note.title} </h3>
            <div className="card-content">
                <p> {displayContent} </p>{" "}
            </div>
            <div className="actions buttons">
                {" "}
                <button
                    className="btn btn-card"
                    type="button"
                    onClick={(event) => {
                        event.stopPropagation();
                        handleCardClick(note) }}>
                    <FontAwesomeIcon icon={faEdit} className="icon edit-icon" />
                </button>
                <button
                    className="btn btn-card"
                    type="button"
                    onClick={(event) => {
                        event.stopPropagation();
                        handleArchiveClick(event);
                    }}
                    >
                    <FontAwesomeIcon icon={faFile} className={iconClassName} />
                </button>
                <button type="button" onClick={handleDeleteClick} className="btn btn-card">
                <FontAwesomeIcon icon={faTrashAlt} className="icon delete-icon" /></button>
            </div>
        </div>
    );
}

export default NoteCard;
