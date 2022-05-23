
import { useState } from "react"
import ItemAfterAdd from "./ItemAfterAdd"
import ItemCount from "./ItemCount"


const ItemCart = ({item}) => {

    const [inputType, setInputType] = useState("1")
  /*  const [cantidadAgregada, setCantAgregada] = useState("0")*/

    const changeButtons = (value)=>{
        setInputType("2")
    /*    setCantAgregada(value)*/
    }

    return (
        <>
            {
                inputType === "1" ?
                    <ItemCount stock={item.stock} inputHandler={changeButtons}/>
                :
                    <ItemAfterAdd />
            }

        </>
    )

}

export default ItemCart