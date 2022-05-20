

import Item from '../Items/Item';
import "../Items/item.css"

function ItemList({productos}) {
    return (
      <div className="item-list">
          {productos.map((item) => <Item key={item.id} item={item} />)}
      </div>
    )
  }
  
  export default ItemList;