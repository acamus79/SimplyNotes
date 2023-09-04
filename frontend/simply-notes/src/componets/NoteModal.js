import React, { useState } from "react";
import { updateNote, createNote } from "../api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "react-tooltip";

import "./styles.css";

function NoteModal({ note, onClose  }) {

  const [editedNote, setEditedNote] = useState(note);

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setEditedNote({ ...editedNote, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente
    
    try {
      if (note.title === '') {
        
        console.log(setEditedNote);
        // Si es una nueva nota, llama a createNote en lugar de updateNote
        await createNote(editedNote);
      } else {
        // Si no es una nueva nota, llama a updateNote
        await updateNote(editedNote);
      }
      window.location.reload();
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
            className="close-button btn"
            onClick={onClose}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
      <h2>Editar Nota</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="title">Título:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={editedNote.title}
            onChange={handleFieldChange}
          />
        </div>
        <label htmlFor="content">Anotación:</label>
        <div className="input-container">
        <textarea className="text-area"
          id="content"
          name="content"
          value={editedNote.content}
          onChange={handleFieldChange}
        />
        </div>
        <div className="buttons">
            <button 
              className='btn'
              type="submit"
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
