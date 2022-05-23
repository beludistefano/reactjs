
import "./ItemDetail.css"
import ItemCart from "./ItemCart"

export default function ItemDetail({item}) {

    return (
        <div className="item-bigcard">
            <h2>{item.nombre}</h2>
            <p> {item.description} </p>
            <p> {item.price}</p>
            <ItemCart item={item}/>
        </div>
    );
}