
import ItemCount from "./ItemCount"
import "./item.css"

const Item = ({it}) => {
    return (
        <div className="item">
            <h3>{it.title}</h3>
            <p> {it.price}</p>
            <ItemCount stock= {it.stock} />
            <button>Agregar al Carrito</button>
        </div>
    )
}

export default Item;