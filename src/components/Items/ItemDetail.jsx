
import "./ItemDetail.css"
import { useState } from "react";
import { UseCartContext } from "../../context/CartContext";
import ItemCount from "./ItemCount";
import ItemAfterAdd from "./ItemAfterAdd";

export default function ItemDetail({item}) {

    const [inputType, setInputType] = useState('itemCount');

    const {addItem, cartList} = UseCartContext();

    function onAdd(cant) {
        addItem({...item, cant})
        console.log(cartList)
    }

    function handleInputType() {
        setInputType('ItemAfterAdd');
    }

    return (
        <div className="item-bigcard">
            <h2>{item.nombre}</h2>
            <p> {item.description} </p>
            <p> {item.price}</p>
            {inputType === 'itemCount' ?
                <ItemCount item={item} stock={item.stock} onAdd={onAdd} handleInputType={handleInputType}/>:
                <ItemAfterAdd/>}
        </div>
    );
}