import { ChevronRight, Home, HelpCircle, Settings, LogOut } from "lucide-react";
import "../css/index.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="toggle-button">
        <ChevronRight className="arrow" />
      </div>
      
      <ul className="menu-list">
        <li className="menu-item">
          <Home />
          <span>Inicio</span>
        </li>
        <li className="menu-item">
          <HelpCircle />
          <span>Soporte</span>
        </li>
        <li className="menu-item">
          <Settings />
          <span>Configuración</span>
        </li>
        <li className="menu-item logout">
          <LogOut />
          <span>Cerrar sesión</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
