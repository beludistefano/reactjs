import { Link } from "react-router-dom"
import cart from "../../img/shoppingcart.png"
import { UseCartContext } from "../../context/CartContext";
import "./cart.css"

function Cart(){

    const {totalItems} = UseCartContext();

    return (
        <div className="shop-cart">
            {!totalItems ? <p className="cart-number"></p> : <p className="cart-number">{totalItems}</p>}
            <Link to="/cart">
            <img className="cart-img" alt="Cart" src={cart}></img>
            </Link>
        </div>
    )
}

export default Cart