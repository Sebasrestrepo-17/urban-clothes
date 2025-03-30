import { useState } from "react";

function Menu() {
    const [isOpen, setIsOpen] = useState(false);

    console.log("El componente Menu se ha renderizado");

    return (
        <div 
            className={`menu ${isOpen ? "open" : ""}`} 
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <ul>
                <li>🏠 Inicio</li>
                <li>⚙️ Configuración</li>
                <li>🛠️ Soporte</li>
                <li>🚪 Cerrar sesión</li>
            </ul>
        </div>
    );
}

export default Menu;
