import React, { useState, useEffect } from 'react';
import "./styles.css";
import NoteModal from './NoteModal'; 
import Swal from 'sweetalert2';
import { createNote } from '../api';
import "./styles.css";

function Navbar() {
    const [showMenu, setShowMenu] = useState(false);
    const [currentDateTime, setCurrentDateTime] = useState(new Date());
    const [isCreateNoteModalOpen, setCreateNoteModalOpen] = useState(false); // Estado para controlar la apertura del modal de creación de notas
    const [newNote, setNewNote] = useState({
        title: '',
        content: '',
        archived: false,
    });

    const updateDateTime = () => {
        setCurrentDateTime(new Date());
    };

    useEffect(() => {
        const intervalId = setInterval(updateDateTime, 1000);
        return () => clearInterval(intervalId);
    }, []);

    // Función para manejar la creación de una nueva nota
    const handleCreateNote = async () => {
        try {
            setShowMenu(false);
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

    const showAlert = () => {
        Swal.fire({
            title: 'Acerca de SimplyNotes',
            text: `Bienvenido a SimplyNotes, tu compañero digital para organizar y gestionar tus notas de manera sencilla y eficiente. 
            Nuestra aplicación está diseñada para ayudarte a capturar tus ideas, tareas pendientes, recordatorios y más, 
            todo en un solo lugar accesible desde cualquier dispositivo. 
            Simplifica tu vida y mantén todo en orden con SimplyNotes. ¡Comienza a tomar el control de tus notas hoy mismo!`,
            confirmButtonText: 'Aceptar', 
        });
        setShowMenu(false); // Oculta el menú desplegable cuando se hace clic en "Acerca de..."
    }

    return (
        <nav>
            <div className="navbar-container">
                <div className="navbar-left">
                    <div className="menu-icon" onClick={() => setShowMenu(!showMenu)}>☰</div>
                </div>
                <div className={`menu-options ${showMenu ? 'menu-show' : ''}`}>
                    <div className="menu-option" onClick={() => setCreateNoteModalOpen(true)}>
                        Crear Nota
                    </div>
                    <div className="menu-option" onClick={showAlert}>
                        Acerca de...
                    </div>
                </div>
                <div className="navbar-center">SimplyNotes</div>
                <div className="navbar-right">
                    <span>{currentDateTime.toLocaleString()}</span>
                </div>
                
            </div>
            {isCreateNoteModalOpen && (
                <NoteModal
                    note={newNote}
                    onClose={() => setCreateNoteModalOpen(false)}
                    onSave={handleCreateNote}
                />
            )}
        </nav>
    );
}

export default Navbar;
