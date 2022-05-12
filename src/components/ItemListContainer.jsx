
import ItemList from "./Items/ItemList"
import { useEffect, useState } from "react";
import { productos } from "./Items/productos.js";
import "./ItemListContainer.css"

const items = new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 2000);
  });

  function ItemListContainer() {

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      items
        .then(resp => {setProductos(resp);
        })
        .finally(() => setLoading(false));
    }, []);

    return (
      <section id="main">
        <div>
            {loading ? (<h2>Cargando...</h2>) : (<ItemList productos={productos}/>)}
        </div>
      </section>  
    )
}
  
  export default ItemListContainer;