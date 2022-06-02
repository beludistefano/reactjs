
import { Link } from "react-router-dom"
import { UseCartContext } from "../../context/CartContext"
import CartItem from "./CartItem"

function Cart (){

    const { cartList, clearCart, totalItems, totalPrice } = UseCartContext()

    if (totalItems === 0){
        return(
            <>
            <h2>Su carrito está vacio</h2>
            <Link to="/">
                <button>Ir al Home</button>
            </Link>
            </>
        )
    }
    
    return (
        <>
        <h2>Carrito de Compras</h2>
        {cartList.map((item) =>
        <CartItem item={item} />)}
        <p>Total: {totalPrice} </p>
        <button onClick={clearCart}>Vaciar Carrito</button>
        </>
    )
}


export default Cart