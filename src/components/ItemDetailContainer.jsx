
import { useEffect, useState } from "react";
import { productos } from "./Items/productos.js";
import ItemDetail from "./ItemDetail.jsx";


const getItems = new Promise((resolve) =>{
    setTimeout(() =>{
        resolve(productos)
    }, 5000)
})

const ItemDetailContainer = ()=>{

    const [load, setLoad] = useState(true)
    const [prod, setProd] = useState([])

    useEffect(() =>{
        getItems.then(items => {
            setProd(items)
        })
        .finally(() => {
            setLoad(false)
        })
    }, [])
    
    return(
        <>
            {load ? (<h2>Cargando...</h2>) : (<ItemDetail id={1001} title={"Algo"} description={"Donec consequat arcu urna, pretium dignissim mauris gravida eu. Morbi fringilla maximus lacus quis congue. Sed dictum lacus at pretium mollis. Aliquam erat volutpat. Sed risus nulla, auctor vel lorem sed, ultricies molestie neque. Sed vehicula rutrum nisl ac consequat. Fusce vehicula purus sem, vehicula pharetra dui viverra vel. Nulla tempus tortor vestibulum, egestas metus sed, fringilla magna. Nam sit amet turpis nec lectus lacinia sagittis a ac mi. Duis condimentum iaculis leo. Phasellus id faucibus leo. Aliquam lorem ante, pulvinar quis dolor et, tincidunt pulvinar dui."} price={"$3.500"} stock={50}/>)}
        </>
    )
}

export default ItemDetailContainer