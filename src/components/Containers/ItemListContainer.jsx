
import ItemList from "../Item List/ItemList"
import { useEffect, useState } from "react";
import "./ItemListContainer.css"
import { collection, getDocs, getFirestore, where, query } from 'firebase/firestore';
import { useParams } from "react-router-dom";


function ItemListContainer() {

  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const {id} = useParams()


  useEffect(() => {
    const db = getFirestore();
    const queryCollection = collection(db, 'productos');
    if (!id) {
        getDocs(queryCollection)
        .then(resp => setProductos(resp.docs.map(el => ({id: el.id, ...el.data()}))))
        .finally(() => setLoading(false))                  
      } else {
        const queryCollectionFilter = query(queryCollection, where('categoria','==', id));
        getDocs(queryCollectionFilter)
        .then(resp => setProductos(resp.docs.map(el => ({id: el.id, ...el.data()}))))
        .finally(() => setLoading(false))
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