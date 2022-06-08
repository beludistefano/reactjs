
import { addDoc, collection, query, getFirestore, writeBatch, where, documentId, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom"
import { UseCartContext } from "../../context/CartContext"
import CartItem from "./CartItem"

function Cart (){

    const { cartList, clearCart, totalItems, totalPrice } = UseCartContext()

    async function generarOrden(){

        let orden = {};

        orden.buyer = { name: "Belu", email: "myemail@gmail.com"};
        orden.total = totalPrice;

        orden.items = cartList.map(item =>{
            const id = item.id
            const nombre = item.nombre
            const precio = item.price * item.quantity 

            return {id, nombre, precio}
        })

        // Crear Orden en Firestore

        const db = getFirestore();
        const queryCollection = collection(db, "orders")
        addDoc(queryCollection, orden)
        .then(resp => console.log(resp))
        .finally(() => clearCart())

        // Update

        const queryCollectionStock = collection(db, "productos")
        const queryActualizarStock = query(queryCollectionStock, where ( documentId(), "in", cartList.map(it => it.id)))
        
        const batch = writeBatch(db)
        await getDocs(queryActualizarStock)
        .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
            stock: res.data().stock - cartList.find(item => item.id === res.id).quantity
        })))
        .finally(() => console.log("Actualizado"))

        batch.commit()

    }

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
        <button onClick={generarOrden}>Terminar compra!</button>
        </>
    )
}


export default Cart