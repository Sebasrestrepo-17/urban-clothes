import Producto from "./Producto";
import Cliente from "./Cliente";
import Venta from "./Venta";

function Page() {
    return (
        <div className="app-container">
            <h1 className="titulo">URBAN-CLOTHES</h1>
            <div className="grid">
                <Producto />
                <Venta />
                <Cliente />
            </div>
        </div>
    );
}

export default Page;