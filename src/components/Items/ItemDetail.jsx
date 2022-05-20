
import "./ItemDetail.css"

export default function ItemDetail({item}) {

    return (
        <div className="item-bigcard">
            <h2>{item.nombre}</h2>
            <p> {item.description} </p>
            <p> {item.price}</p>
            <button>Agregar al Carrito</button>
        </div>
    );
}