import { createContext, useContext, useState } from "react";

const cartContext = createContext([]);

export function UseCartContext() {
    return useContext(cartContext)
}

export default function CartContextProv({children}){

    const [cartList, setCartList] = useState([])

    function isInCart(id){
        return cartList.some((i) =>{
            return i.id === id})
    }

    function addItem(item) {
        if (isInCart(item.id)) {
            let i = cartList.findIndex(e => e.id === item.id);
            const newCartList = cartList;
            newCartList[i].quantity += item.quantity;
            setCartList(newCartList);
        } else {
            setCartList([
                ...cartList,
                item]);
        }
    }

    function clearItems(){
        setCartList([])
    }

    function clearItem(id) {
        let i = cartList.findIndex(el => el.id === id);
        const newCartList = cartList;
        newCartList.splice(i,1);
        setCartList(newCartList);
    }

    
    return (
        <cartContext.Provider value={{
            cartList,
            addItem,
            clearItems,
            clearItem
        }}>
            {children}
        </cartContext.Provider>
    )
}
