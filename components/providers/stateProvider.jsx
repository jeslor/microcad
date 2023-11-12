"use client"
import { useState, createContext } from "react";
import { revalidatePath } from "next/cache";
import { set } from "mongoose";


export const StateContext = createContext({
    state: {},
    showMenu: false,
    openProduct: false,
    productToOpen : {},
    showCartDrawer: false,
    handleToggleCartDrawer: () => { },
    cart : [],
    setCartHandler: (newCartProduct) => { },
    handleRemoveCartProduct: (product) => { },
    handleIncreaseCartProduct: (product) => { },
    showMenuHandler: () => {},
    handleproductToOpen: (product) => { },
    handleCloseProduct: () => { },
    setState: (state) => { },
    openFilter:false,
    handleOpenFilter: () => { },
});
export const StateProvider = ({ children }) => {
    let currentCart = [];
    if(typeof window !== 'undefined') {
        currentCart  = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
    }
    const [state, setState] = useState({});
    const [cart, setCart] = useState(currentCart);
    const [showCartDrawer, setShowCartDrawer] = useState(false);
    const [openFilter, setOpenFilter] = useState(false);
    const [productToOpen, setProductToOpen] = useState(
        {
            "name": "Samsung 970 EVO",
            "price": 129.99,
            "weight": "0.22 lbs",
            "color": "Black",
            "model": "MZ-V7E500BW",
            "isSpecialOffer": true,
            "imageURL": "https://image-us.samsung.com/SamsungUS/home/computing/memory-and-storage/solid-state-drives/pdp/mz-v7e250bw/gallery-update-9-28-18/005_gallery_MZ-V7E250BW_09-28-18.jpg?$product-details-jpg$",
            "brand": "Samsung",
            "type": "NVMe",
            "quantity": 100,
            "isNew": false,
            "isPopular": true,
            "specifications": {
              "capacity": "500GB",
              "interface": "M.2",
              "readSpeed": "3,400 MB/s",
              "writeSpeed": "2,300 MB/s",
              "formFactor": "M.2 2280"
            },
            "description": "The Samsung 970 EVO is a high-performance NVMe SSD with a capacity of 500GB. It offers fast read and write speeds, making it a popular choice among gamers and professionals."
          },
    );
    const [openProduct, setOpenProduct] = useState(true);
    const[scrollPosition, setScrollPosition] = useState(0);


  const handleproductToOpen = (product) => {
    setProductToOpen(product);
    document.body.style.overflow = "hidden";
    document.body.style.height = "100vh";
    setScrollPosition(window.scrollY);
    window.scrollTo(0, 0);
    setOpenProduct(true);
  }

  const handleCloseProduct = () => {
    document.body.style.overflow = "auto";
    document.body.style.height = "auto";
    window.scrollTo(0, scrollPosition);
    setOpenProduct(false);
  }


    const [showMenu, setShowMenu] = useState(false);
    const showMenuHandler = () => {
        let originalHeight = '';
        if (showMenu) {
            let div =  document.getElementsByTagName('body');
           div[0].style.overflow = 'auto';
            div[0].style.height = originalHeight;
            window.scrollTo(0, scrollPosition);
            setShowMenu(false);
        }
        if (!showMenu) {
            let div =  document.getElementsByTagName('body');
            originalHeight =  `${div[0].clientHeight}px`;
            div[0].style.height = "100vh";
            div[0].style.overflow = 'hidden';
            setScrollPosition(window.scrollY);
            window.scrollTo(0, 0);
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
                window.scrollTo(0, scrollPosition);
                div[0].style.height = originalHeight;
                
            }else{
                let div =  document.getElementsByTagName('body');
                originalHeight =  `${div[0].clientHeight}px`;
                div[0].style.height = "100vh";
                div[0].style.overflow = 'hidden';
                setScrollPosition(window.scrollY);
                window.scrollTo(0, 0);
                setShowMenu(false);
            }
    }

    const handleOpenFilter = () => {
        setOpenFilter(!openFilter);
        if (openFilter) {
            document.body.style.overflow = 'auto';
            document.body.style.height = 'auto';
            window.scrollTo(0, scrollPosition);
            window.scrollTo(0, scrollPosition);
        }
        if (!openFilter) {
            document.body.style.overflow = 'hidden';
            document.body.style.height = '100vh';   
            setScrollPosition(window.scrollY);
            window.scrollTo(0, 0);
        }
    }


    return (
        <StateContext.Provider value={{openProduct, productToOpen, handleCloseProduct, handleproductToOpen, openFilter, handleOpenFilter, showCartDrawer, handleToggleCartDrawer,handleIncreaseCartProduct, handleRemoveCartProduct, cart,setCartHandler, state,showMenu, showMenuHandler, setState }}>
            {children}
        </StateContext.Provider>
    );
}

