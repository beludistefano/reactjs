import { UseCartContext } from "../../context/CartContext";

export default function CartItem({item}) {
    const {clearItem} = UseCartContext();

    function removeItem() {
        clearItem(item.id)
    }
    
    return (
        <li>Item: {item.nombre} - Precio: ${item.price} - Cantidad: {item.quantity} - <button onClick={removeItem}>Borrar</button></li>
    );
}