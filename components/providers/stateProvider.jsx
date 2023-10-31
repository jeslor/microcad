"use client"
import { useState, createContext } from "react";
import { revalidatePath } from "next/cache";


export const StateContext = createContext({
    state: {},
    showMenu: false,
    showCartDrawer: false,
    handleToggleCartDrawer: () => { },
    cart : [],
    setCartHandler: (newCartProduct) => { },
    handleRemoveCartProduct: (product) => { },
    handleIncreaseCartProduct: (product) => { },
    showMenuHandler: () => {},
    setState: (state) => { }
});
export const StateProvider = ({ children }) => {
    let currentCart = [];
    if(typeof window !== 'undefined') {
        currentCart  = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
    }
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
        
        if (cartProductIndex === -1) {
            newCartProduct.quantity = 1;
            newCart.push(newCartProduct);
        } else {
            newCart[cartProductIndex].quantity = newCart[cartProductIndex].quantity + 1;
        }
        setCart(newCart);
        if(typeof window !== 'undefined'){
            localStorage.setItem('cart', JSON.stringify(newCart));
        }

    }

    const handleRemoveCartProduct = (product) => {
        let newCart = [...cart];
        let clickedProduct  = newCart.find((cartProduct) => cartProduct.name === product.name);

        if (clickedProduct.quantity > 1) {
            newCart = newCart.map((cartProduct) => { clickedProduct.name === cartProduct.name ? cartProduct.quantity = cartProduct.quantity - 1 : cartProduct.quantity = cartProduct.quantity; return cartProduct; });
        }else{
            newCart = newCart.filter((cartProduct) => cartProduct.name !== clickedProduct.name);
        }
        setCart(newCart);
        if (typeof window !== 'undefined') {  
            localStorage.setItem('cart', JSON.stringify(newCart));
        }
    }

    const handleIncreaseCartProduct = (product) => {
        let newCart = [...cart];
        let cartProductIndex = newCart.findIndex((cartProduct) => cartProduct.name === product.name);
        if (cartProductIndex !== -1) {
            newCart[cartProductIndex].quantity = newCart[cartProductIndex].quantity + 1;
        }
        setCart(newCart);
        if (typeof window !== 'undefined'){
            localStorage.setItem('cart', JSON.stringify(newCart));
        }
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
        <StateContext.Provider value={{showCartDrawer, handleToggleCartDrawer,handleIncreaseCartProduct, handleRemoveCartProduct, cart,setCartHandler, state,showMenu, showMenuHandler, setState }}>
            {children}
        </StateContext.Provider>
    );
}

