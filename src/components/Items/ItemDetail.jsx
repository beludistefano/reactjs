
import "./ItemDetail.css"
import { useState } from "react";
import { UseCartContext } from "../../context/CartContext";
import ItemCount from "./ItemCount";
import ItemAfterAdd from "./ItemAfterAdd";

export default function ItemDetail({item}) {

    const [inputType, setInputType] = useState('itemCount');

    const {addToCart} = UseCartContext();

    function onAdd(quantity) {
        addToCart({...item, quantity})
        setInputType('ItemAfterAdd');
    }

    return (
        <div className="item-bigcard">
            <h2>{item.nombre}</h2>
            <p> {item.description} </p>
            <p> {item.price}</p>
            {inputType === 'itemCount' ?
                <ItemCount initial={1} stock={5} onAdd={onAdd}/>:
                <ItemAfterAdd/>}
        </div>
    );
}