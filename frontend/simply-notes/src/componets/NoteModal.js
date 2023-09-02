import React, { useState } from "react";
import { updateNote } from "../api";

function NoteModal({ note, onClose }) {

  const send = () => {
    
    console.log("OnCLick")
  }

  const [editedNote, setEditedNote] = useState(note);

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setEditedNote({ ...editedNote, [name]: value });
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
    <div className="modal">
      <h2>Editar Nota</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Título:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={editedNote.title}
          onChange={handleFieldChange}
        />
        <label htmlFor="content">Contenido:</label>
        <textarea
          id="content"
          name="content"
          value={editedNote.content}
          onChange={handleFieldChange}
        />
        <button type="submit" onClick={send}>Guardar</button>
      </form>
    </div>
  );
}

export default NoteModal;
