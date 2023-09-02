import React, { useState, useEffect } from 'react';

function Navbar() {
    // Estado para controlar la visibilidad del menú
    const [showMenu, setShowMenu] = useState(false); 
    // Estado para almacenar la fecha y hora actual
    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    // Función para actualizar la fecha y hora actual
    const updateDateTime = () => {
    setCurrentDateTime(new Date());
    };

    // Configura un temporizador para actualizar la fecha y hora cada segundo
    useEffect(() => {
        const intervalId = setInterval(updateDateTime, 1000);

        // Limpia el temporizador cuando el componente se desmonta
        return () => clearInterval(intervalId);
    }, []);

    return (
        <nav>
        <div className="navbar-container">
            <div className="navbar-left">
                {/* Muestra la fecha y hora actual */}
                <span>{currentDateTime.toLocaleString()}</span>
            </div>
            <div className="navbar-center">SimplyNotes</div>
            <div className="navbar-right">
                {/* Icono de menú hamburguesa */}
                <div className="menu-icon" onClick={() => setShowMenu(!showMenu)}>☰</div>
            </div>
                    {/* Menú desplegable */}
            <div className={`menu-options ${showMenu ? 'menu-show' : ''}`}>
                <div className="menu-option">About</div>
                <div className="menu-option">Salir</div>
            </div>
        </div>
        </nav>
    );

}

export default Navbar;
