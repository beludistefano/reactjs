
import { useState } from "react"
import ItemAfterAdd from "./ItemAfterAdd"

function ButtonOne({inputHandler}){
    return(
        <button onClick={inputHandler}>
            Agregar al Carrito
        </button>
    )
}

const ItemAddCart = () => {

    const [inputType, setInputType] = useState("1")

    const changeButtons = ()=>{
        setInputType("2")
    }

    return (
        <>
            {
                inputType === "1" ?
                    <ButtonOne inputHandler={changeButtons}/>
                :
                    <ItemAfterAdd />
            }

        </>
    )

}

export default ItemAddCart