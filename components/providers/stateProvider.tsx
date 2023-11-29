"use client"
import { useState, createContext } from "react";


export const StateContext = createContext({
    openSearch: false,
    handleOpenSearch: () => { },
    state: {},
    showMenu: false,
    currentProducts: {
        productsLabel: '',
        products: []
    },
    handhleCurrentProducts: (categoryProducts:any) => { },
    openProduct: false,
    productToOpen : {},
    showCartDrawer: false,
    handleToggleCartDrawer: () => { },
    cart : [],
    setCartHandler: (newCartProduct:any) => { },
    handleRemoveCartProduct: (product:any) => { },
    handleIncreaseCartProduct: (product:any) => { },
    showMenuHandler: () => {},
    handleproductToOpen: (product:{}) => { },
    handleCloseProduct: () => { },
    setState: (state:any) => { },
    openFilter:false,
    handleOpenFilter: () => { },
});
export const StateProvider = ({ children }:{children:any}) => {
    let currentCart = [];
    if(typeof window !== 'undefined') {
        currentCart  = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')!) : [];
    }
    const [state, setState] = useState({});
    const [cart, setCart] = useState(currentCart);
    const [currentProducts, setCurrentProducts] = useState({
        productsLabel: '',
        products: []
    });
    const [showCartDrawer, setShowCartDrawer] = useState(false);
    const [openFilter, setOpenFilter] = useState(false);
    const [productToOpen, setProductToOpen] = useState({});
    const [openProduct, setOpenProduct] = useState(false);
    const[scrollPosition, setScrollPosition] = useState(0);
    const [openSearch, setOpenSearch] = useState(false);


  const handleproductToOpen = (product:any) => {
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
            setOpenSearch(false);
         }
    }

    const setCartHandler = (newCartProduct:any) => {
        let newCart = [...cart];

        console.log(newCartProduct);
        console.log(newCart);
        if(newCart.some((cartProduct) => cartProduct.name === newCartProduct.name)){
            newCart = newCart.filter((cartProduct) => cartProduct.name !== newCartProduct.name);
        }else{
            newCartProduct.quantity = 1;
            newCart.push(newCartProduct);
        }

        // let cartProductIndex = newCart.findIndex((cartProduct) => cartProduct.name === newCartProduct.name);
        
        // if (cartProductIndex === -1) {
        //     newCartProduct.quantity = 1;
        //     newCart.push(newCartProduct);
        // } else {
        //     newCart[cartProductIndex].quantity = newCart[cartProductIndex].quantity + 1;
        // }
        setCart(newCart);
        if(typeof window !== 'undefined'){
            localStorage.setItem('cart', JSON.stringify(newCart));
        }

    }


    const handleRemoveCartProduct = (product:any) => {
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

    const handleIncreaseCartProduct = (product:any) => {
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
                handleCloseProduct();
                setShowMenu(false);
                setOpenSearch(false);
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

    const handhleCurrentProducts = (categoryProducts:any) => {
        setCurrentProducts({...currentProducts, products:categoryProducts.products, productsLabel:categoryProducts.productsLabel});
    }

    const handleOpenSearch = () => {
        setOpenSearch(!openSearch);
        if (openSearch) {
            document.body.style.overflow = 'auto';
            document.body.style.height = 'auto';
            window.scrollTo(0, scrollPosition);
            window.scrollTo(0, scrollPosition);
        }
        if (!openSearch) {
            document.body.style.overflow = 'hidden';
            document.body.style.height = '100vh';   
            setScrollPosition(window.scrollY);
            window.scrollTo(0, 0);
            setShowMenu(false);
            setShowCartDrawer(false);
        }
    }


    return (
        <StateContext.Provider value={
            {
             openSearch,
             handleOpenSearch,
             openProduct,
             productToOpen, 
             handleCloseProduct, 
             handleproductToOpen, 
             openFilter, 
             handleOpenFilter, 
             showCartDrawer, 
             handleToggleCartDrawer,
             handleIncreaseCartProduct, 
             handleRemoveCartProduct, 
             cart,setCartHandler, 
             state,showMenu, 
             showMenuHandler, 
             setState, 
             currentProducts,
             handhleCurrentProducts}}>
            {children}
        </StateContext.Provider>
    );
}

