
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail.jsx";


const ItemDetailContainer = ()=>{

    const [item,setItem] = useState({});
    const [loader,setLoader] = useState(true);

    const {id} = useParams();

    useEffect(() => {
        setTimeout(() => {
            fetch("/data/productos.json")
            .then(response => response.json())
            .then(itemsList => itemsList.find(el => el.id === id))
            .then(data => setItem(data))
            .then(dat => console.log(dat))
            .finally(() => setLoader(false))
        }, 5000);
    },[id]);
    
    return(
        <>
            {loader ? (<h2>Cargando...</h2>) : (<ItemDetail item={item}/>)}
        </>
    )
}

export default ItemDetailContainer