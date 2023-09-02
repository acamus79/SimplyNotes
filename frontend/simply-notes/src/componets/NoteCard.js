import React from "react";
import "./styles.css";

function NoteCard({ note, handleCardClick }) {

    


    return (
        <div className="note-card post-it" onClick={() => handleCardClick(note)}>
            <h2> {note.title} </h2> <p> {note.content} </p>{" "}
            <div className="actions">
                {" "}
                {/* TODO:  Agregar botones de acción aquí (editar, archivar, etc.) */}{" "}
            </div>{" "}
        </div>
    );
}

export default NoteCard;
