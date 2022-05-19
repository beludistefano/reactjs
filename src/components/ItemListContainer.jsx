
import ItemList from "./Items/ItemList"
import { useEffect, useState } from "react";
import "./ItemListContainer.css"


function ItemListContainer() {

  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setTimeout(() => {
        fetch("/data/productos.json")
        .then(res => console.log(res))
        .then(response => response.json())
        .then(data => setProductos(data))
        .finally(() => setLoading(false))
    }, 2000);
},[]);

  return (
    <section id="main">
      <div>
          {loading ? (<h2>Cargando...</h2>) : (<ItemList productos={productos}/>)}
      </div>
    </section>  
  )
}

export default ItemListContainer;