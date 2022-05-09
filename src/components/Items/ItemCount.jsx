
import "./ItemCount.css"
import { useState } from "react";

export default function ItemCount(){

    const [stock, setStock] = useState(10)
    const [cant, setCarrito] = useState(0)
    
    const sumarCant = () => {
        if(stock > 0){
        setCarrito(cant + 1)
        setStock(stock - 1)
        }
    }

    const restarCant = () =>{
        if(cant > 0){
            setCarrito(cant - 1)
            setStock(stock +1)
        }
    }

    return (
        <div id="card">
            <h3>This is an item</h3>
            <div id="botones">
                <h6>Cantidad disponible: {stock}</h6>
                <button onClick={restarCant}>-</button>
                <p>{cant}</p>
                <button onClick={sumarCant}>+</button>
            </div>
        </div>
    )

}