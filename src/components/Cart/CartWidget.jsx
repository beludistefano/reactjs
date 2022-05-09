import cart from "../../img/shoppingcart.png"
import "./cart.css"

function Cart(){
    return (
        <div className="shop-cart">
            <img src={cart}></img>
            <p>Carrito: 1</p>
        </div>
    )
}

export default Cart