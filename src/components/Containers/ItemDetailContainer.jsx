
import { useEffect, useState } from "react";
import ItemDetail from "../Items/ItemDetail"
import { useParams } from "react-router-dom";
import { getFetch } from "../prueba/prueba";

const ItemDetailContainer = ()=>{

    const [item,setItem] = useState({});
    const [loader,setLoader] = useState(true);

    const {detalleId} = useParams();

    useEffect(() => {
        getFetch(detalleId)  // fetch llamada a una api  
        .then(respuesta=> setItem(respuesta))
        .finally(()=>setLoader(false))     
    }, [])
    
    return(
        <>
            {loader ? <h2>Cargando...</h2> : <ItemDetail item={item}/>}
        </>
    )
}

export default ItemDetailContainer