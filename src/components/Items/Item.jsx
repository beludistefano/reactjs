
import "./item.css"
import { Link } from "react-router-dom";

const Item = ({item}) => {
    return (
        <div className="item">
            <h3>{item.nombre}</h3>
            <p> $ {item.price}</p>
            <Link to={`/detalle/${item.id}`} >
            <br></br><button>Ver más</button>
            </Link>
        </div>
    )
}

export default Item;