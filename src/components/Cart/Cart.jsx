
import { UseCartContext } from "../../context/CartContext"

function Cart (){

    const { cartList, clearItems } = UseCartContext()

    return (
        <>
        <h2>Carrito de Compras</h2>
        {cartList.map((item) =>
        <li>{item.nombre}</li>)}
        <button onClick={clearItems}>Vaciar Carrito</button>
        </>
    )
}


export default Cart