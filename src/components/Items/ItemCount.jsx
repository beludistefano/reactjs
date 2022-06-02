import "./ItemCount.css"
import { useState } from "react";

export default function ItemCount({initial, stock, onAdd}) {
    const [quantity, setQuantity] = useState(initial);

    function sumarCant() {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        } 
    }
    function restarCant() {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        } 
    }

    function addItem() {
        onAdd(quantity);
    }

    return (
        <>
            <div className="botones">
                <button onClick={restarCant}>-</button>
                <p>{quantity}</p>
                <button onClick={sumarCant}>+</button>
            </div>
            <button onClick={addItem}>
            Agregar al Carrito
            </button>
        </>
    );
}