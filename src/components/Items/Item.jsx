
import ItemCount from "./ItemCount"
import "./item.css"

const Item = ({id, title, img, price, stock}) => {
    return (
        <div className="item">
            <h3>{title}</h3>
            <p> {price}</p>
            <ItemCount stock= {stock} />
            <button>Agregar al Carrito</button>
        </div>
    )
}

export default Item;