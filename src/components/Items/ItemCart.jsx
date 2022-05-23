
import { useState } from "react"
import ItemAfterAdd from "./ItemAfterAdd"
import ItemCount from "./ItemCount"


const ItemCart = ({item}) => {

    const [inputType, setInputType] = useState("1")

    const changeButtons = ()=>{
        setInputType("2")
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