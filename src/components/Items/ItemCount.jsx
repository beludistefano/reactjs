
import "./ItemCount.css"
import { useState } from "react";

export default function ItemCount({stock}){
    
    const [stockItem, setStock] = useState({stock})
    const [cant, setCarrito] = useState(0)
    
    const sumarCant = () => {
        if(stockItem > 0){
        setCarrito(cant + 1)
        setStock(stock - 1)
        }
    }

    const restarCant = () =>{
        if(cant > 0){
            setCarrito(cant - 1)
            setStock(stockItem +1)
        }
    }

    return (
        <>
            <div className="botones">
                <h6>Cantidad disponible: {stock}</h6>
                <button onClick={restarCant}>-</button>
                <p>{cant}</p>
                <button onClick={sumarCant}>+</button>
            </div>
        </>
    )

}