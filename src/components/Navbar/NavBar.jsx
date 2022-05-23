import "./navbar.css"
import logo from "../../img/logo.jpg"
import Cart from "../Cart/CartWidget"
import { Link } from "react-router-dom"


function Navbar() {

    return (
        <>
            <nav className="nav">
                <img className="logo" src={logo} alt="Logo"/>
                <h1>Discount Dance</h1>
                <ul>
                    <Link className="thelink" to="/">
                    <li className="thelis">Inicio</li></Link>
                    <Link className="thelink" to="/cat/malla"><li className="thelis">Mallas</li></Link>
                    <Link className="thelink" to="/cat/top"><li className="thelis">Tops</li></Link>
                    <Link className="thelink" to="/cat/calza"><li className="thelis">Calzas</li></Link>
                    <li className="thelis">Contacto</li>
                </ul>
                <Cart className="shop" />
            </nav>
        </>
    )
}

export default Navbar
