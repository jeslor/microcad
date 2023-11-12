"use client";
import {useContext } from 'react'
import { StateContext } from '@/components/providers/stateProvider';
import styles from "@/styles/products.module.css";

const AddToCartButton = ({product}:{product:any}) => {
    const { cart, setCartHandler  } = useContext(StateContext);
    


    const addCartHandler = (event:any,product:any) => {
        event.stopPropagation(); 
        event.preventDefault(); 
          setCartHandler(product)
      }
    
      const cartButtonClasses = cart.some((item:any) => item.name === product.name) ? `${styles.addToCartutton} ${styles.addedToCart}` : styles.addToCartutton;
      const cartButtonText = cart.some((item:any) => item.name === product.name) ? 'Remove from cart' : 'Add to cart';

  return (
    <button className={`pt-2 text-xs text-primaryLight border-primaryLight ${cartButtonClasses}`} onClick={ (e)=>addCartHandler(e,product)} >{cartButtonText}</button>

  )
}

export default AddToCartButton