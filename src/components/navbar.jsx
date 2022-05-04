import "./navbar.css"
import logo from "../img/logo.jpg"

function Navbar() {
    return (
        <>
            <nav className="nav">
                <img className="logo" src={logo} alt="Logo"/>
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Productos</a></li>
                    <li><a href="#">Preguntas Frecuentes</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar