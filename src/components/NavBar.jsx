import "./navbar.css"
import logo from "../img/logo.jpg"
import Cart from "./Cart/CartWidget"


function Navbar() {

    const saludo = "Por ahora aparezco yo"

    return (
        <>
            <nav className="nav">
                <img className="logo" src={logo} alt="Logo"/>
                <h1>Discount Dance</h1>
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Productos</a></li>
                    <li><a href="#">Preguntas Frecuentes</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
                <Cart className="shop" />
            </nav>
        </>
    )
}

export default Navbar