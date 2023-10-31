"use client"
import { useState, createContext } from "react";
import { revalidatePath } from "next/cache";
import { set } from "mongoose";

export const StateContext = createContext({
    state: {},
    showMenu: false,
    showCartDrawer: false,
    handleToggleCartDrawer: () => { },
    cart : [],
    setCartHandler: (newCartProduct) => { },
    showMenuHandler: () => {},
    setState: (state) => { }
});
export const StateProvider = ({ children }) => {
    let currentCart  = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
    const [state, setState] = useState({});
    const [cart, setCart] = useState(currentCart);
    const [showCartDrawer, setShowCartDrawer] = useState(false);


    const [showMenu, setShowMenu] = useState(false);
    const showMenuHandler = () => {
        let originalHeight = '';
        if (showMenu) {
            let div =  document.getElementsByTagName('body');
           div[0].style.overflow = 'auto';
            div[0].style.height = originalHeight;
            setShowMenu(false);
        }
        if (!showMenu) {
            let div =  document.getElementsByTagName('body');
            originalHeight =  `${div[0].clientHeight}px`;
            div[0].style.height = "100vh";
            div[0].style.overflow = 'hidden';
            setShowMenu(true);
            setShowCartDrawer(false);
         }
    }

    const setCartHandler = (newCartProduct) => {
        let newCart = [...cart];
        let cartProductIndex = newCart.findIndex((cartProduct) => cartProduct.name === newCartProduct.name);
        console.log(cartProductIndex);
        
        if (cartProductIndex === -1) {
            newCartProduct.quantity = 1;
            newCart.push(newCartProduct);
        } else {
            newCart[cartProductIndex].quantity = newCart[cartProductIndex].quantity + 1;
        }
        setCart(newCart);
        localStorage.setItem('cart', JSON.stringify(newCart));
        console.log(newCart);
    }

    const handleToggleCartDrawer = () => {
        setShowCartDrawer(!showCartDrawer);
   
            let originalHeight = '';
            if (showCartDrawer) {
                let div =  document.getElementsByTagName('body');
                div[0].style.overflow = 'auto';
                div[0].style.height = originalHeight;
                
            }else{
                let div =  document.getElementsByTagName('body');
                originalHeight =  `${div[0].clientHeight}px`;
                div[0].style.height = "100vh";
                div[0].style.overflow = 'hidden';
                setShowMenu(false);
            }
    }


    return (
        <StateContext.Provider value={{showCartDrawer, handleToggleCartDrawer, cart,setCartHandler, state,showMenu, showMenuHandler, setState }}>
            {children}
        </StateContext.Provider>
    );
}

