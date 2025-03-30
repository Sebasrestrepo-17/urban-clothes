import Producto from "../componentes/Producto";
import Cliente from "../componentes/cliente";
import Venta from "../componentes/Venta";
import Estadisticas from "../componentes/Estadisticas";
import Usuario from "../componentes/Usuario";
import Menu from "../componentes/Menu";

function Page() {
    return (
        <div className="app-container">
            <h1 className="titulo">URBAN-CLOTHES</h1>
            <div className="grid">
                <Producto />
                <Venta />
                <Cliente />
                <Estadisticas />
                <Usuario />
                <Menu />
            </div>
        </div>
    );
}

export default Page;