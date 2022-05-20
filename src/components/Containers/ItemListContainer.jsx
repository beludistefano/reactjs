
import ItemList from "../Item List/ItemList"
import { useEffect, useState } from "react";
import "./ItemListContainer.css"
import { useParams } from "react-router-dom";
import { getFetch } from "../prueba/prueba"


function ItemListContainer() {

  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const {id} = useParams()


  useEffect(() => {
    if (id) {
        getFetch()  // fetch llamada a una api  
        .then(respuesta=> setProductos(respuesta.filter((prods) => prods.categoria === id)))
        .finally(()=>setLoading(false))                             
    } else {
        getFetch()  // fetch llamada a una api  
        .then(respuesta=> setProductos(respuesta))
        .finally(()=>setLoading(false))                 
    }
}, [id])

  return (
    <section id="main">
      <div>
          {loading ? <h2>Cargando...</h2> : <ItemList productos={productos}/>}
      </div>
    </section>  
  )
}

export default ItemListContainer;