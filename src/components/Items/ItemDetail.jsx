
import "./ItemDetail.css"
import ItemCount from "./ItemCount"
import ItemAddCart from "./ItemAddCart"

export default function ItemDetail({item}) {

    return (
        <div className="item-bigcard">
            <h2>{item.nombre}</h2>
            <p> {item.description} </p>
            <p> {item.price}</p>
            <ItemCount stock={item.stock}/>
            <ItemAddCart />
        </div>
    );
}