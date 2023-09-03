import React, { useState } from "react";
import { updateNote, deleteNote } from "../api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faTimes, faTrashAlt, faFile } from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "react-tooltip";
import "./styles.css";

function NoteModal({ note, onClose }) {

  const send = () => {
    
    console.log("OnCLick")
  }

  const [editedNote, setEditedNote] = useState(note);

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setEditedNote({ ...editedNote, [name]: value });
  };

  const handleDeleteClick = async () => {
    try {
      await deleteNote(editedNote.id); // Borrar una nota
      onClose();
    } catch (error) {
      console.error("Error al eliminar la nota:", error);
    }
  };

  const handleArchiveClick = () => {
    setEditedNote({ ...editedNote, archived: !editedNote.archived });
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente
    
    try {
      // Envía la nota editada al servidor utilizando la función updateNote
      await updateNote(editedNote);
      // Luego, cierra el modal
      onClose();
    } catch (error) {
      console.error("Error al actualizar la nota:", error);
      // Maneja el error de actualización aquí, si es necesario
    }
  };

  return (
    <div className="modal-overlay">
    <div className="modal">
      <button
            className="close-button"
            onClick={onClose}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
      <h2>Editar Nota</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Título:</label>
        <div className="input-container">
        <input
          type="text"
          id="title"
          name="title"
          value={editedNote.title}
          onChange={handleFieldChange}
        />
        </div>
        <label htmlFor="content">Contenido:</label>
        <div className="input-container">
        <textarea
          id="content"
          name="content"
          value={editedNote.content}
          onChange={handleFieldChange}
        />
        </div>
        <div className="buttons">
            <button
              type="button"
              onClick={handleDeleteClick}
              className="btn"
            >
              <FontAwesomeIcon icon={faTrashAlt} className="icon delete-icon" />
              &nbsp; Borrar
            </button>
            <button
              className='btn'
              type="button"
              onClick={handleArchiveClick}
              disabled={editedNote.archived}
            >
              <FontAwesomeIcon icon={faFile} className="icon archive-icon" />
              &nbsp; Archivar
            </button>
            <button 
              className='btn'
              type="submit" onClick={send}
              data-tip="Guardar" // Texto del tooltip
              data-for="saveTooltip" // Identificador del tooltip
            >
              <FontAwesomeIcon icon={faSave} className="icon save-icon" />
              &nbsp; Guardar
            </button>
        </div>
      </form>
    </div>
      <Tooltip id="saveTooltip" place="top" effect="solid" />
      <Tooltip id="closeTooltip" place="top" effect="solid" />
    </div>
  );
}

export default NoteModal;
