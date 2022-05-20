import { Link } from "react-router-dom"
import cart from "../../img/shoppingcart.png"
import "./cart.css"

function Cart(){
    return (
        <div className="shop-cart">
            <Link to="/cart">
            <img className="cart-img" src={cart}></img>
            </Link>
        </div>
    )
}

export default Cart