import "./ItemCount.css"
import { useState } from "react";

export default function ItemCount({item, stock, onAdd, handleInputType}) {
    const [cant, setCant] = useState(0);

    function sumarCant() {
        if (cant < stock) {
            setCant(cant + 1);
        } 
    }
    function restarCant() {
        if (cant > 1) {
            setCant(cant - 1);
        } 
    }

    function addToCart() {
        onAdd(cant, item.name);
        handleInputType();
    }

    return (
        <>
            <div className="botones">
                <button onClick={restarCant}>-</button>
                <p>{cant}</p>
                <button onClick={sumarCant}>+</button>
            </div>
            <button onClick={addToCart}>
            Agregar al Carrito
            </button>
        </>
    );
}