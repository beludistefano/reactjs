
import ItemCount from "./Items/ItemCount"
import "./ItemDetail.css"

export default function ItemDetail({item}) {

    return (
        <div className="item-bigcard">
            <h2>{item.title}</h2>
            <p> {item.description} </p>
            <p> {item.price}</p>
            <ItemCount stock= {item.stock} />
            <button>Agregar al Carrito</button>
        </div>
    );
}