
import { useState } from "react";

export default function Carrito(){

    const [carrito, setCarrito] = useState(0)
    
    const sumar = () => {
        setCarrito(carrito + 1)
    }

    const restar = () =>{
        setCarrito(carrito - 1)
    }

    return (
        <div id="botones">
            {carrito}
            <button onClick={sumar}>+</button>
            <button onClick={restar}>Eliminar</button>
        </div>
    )

}