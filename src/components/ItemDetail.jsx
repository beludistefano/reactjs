
import "./ItemDetail.css"

const ItemDetail = ({id, title, img, description, price, stock}) => {
    return (
        <div className="item-bigcard">
            <h2>{title}</h2>
            <p> {description} </p>
            <p> {price}</p>
            <button>Agregar al Carrito</button>
        </div>
    )
}

export default ItemDetail