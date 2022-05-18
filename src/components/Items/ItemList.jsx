

import Item from './Item.jsx';
import "./item.css"

function ItemList({productos}) {
    return (
      <div className="item-list">
          {productos.map(item => <Item key={item.id} title={item.nombre} img={item.description} price={item.price} stock={item.stock}/>)}
      </div>
    )
  }
  
  export default ItemList;