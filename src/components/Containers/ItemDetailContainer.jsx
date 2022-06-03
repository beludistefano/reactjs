
import { useEffect, useState } from "react";
import ItemDetail from "../Items/ItemDetail"
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from 'firebase/firestore';

const ItemDetailContainer = ()=>{

    const [item,setItem] = useState({});
    const [loader,setLoader] = useState(true);

    const {id} = useParams();

    useEffect(() => {
        const db = getFirestore();
        const dbQuery = doc(db, 'productos', id);
        getDoc(dbQuery)
        .then(resp => setItem({id: resp.id, ...resp.data()}))
        .finally(() => setLoader(false))
    }, [id])
    
    return(
        <>
            {loader ? <h2>Cargando...</h2> : <ItemDetail item={item}/>}
        </>
    )
}

export default ItemDetailContainer