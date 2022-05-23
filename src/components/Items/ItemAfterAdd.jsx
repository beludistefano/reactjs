
import { Link } from "react-router-dom"

function ItemAfterAdd (){
    return(
        <>
            <Link to="/cart" >
                <button>Ir al carrito</button>
            </Link>
            <Link to="/" >
                <button>Seguir comprando</button>
            </Link>
        </>
    )
}

export default ItemAfterAdd;