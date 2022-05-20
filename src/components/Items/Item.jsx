
import ItemCount from "./ItemCount"
import "./item.css"
import { Link } from "react-router-dom";

const Item = ({item}) => {
    return (
        <div className="item">
            <h3>{item.nombre}</h3>
            <p> {item.price}</p>
            <ItemCount stock= {item.stock} />
            <button>Agregar al Carrito</button>
            <Link to={`/detalle/${item.id}`} >
            <button>Ver más</button>
            </Link>
        </div>
    )
}

export default Item;