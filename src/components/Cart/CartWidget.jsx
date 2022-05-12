import cart from "../../img/shoppingcart.png"
import "./cart.css"

function Cart(){
    return (
        <div className="shop-cart">
            <img src={cart}></img>
        </div>
    )
}

export default Cart