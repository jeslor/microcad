import { useContext } from 'react'
import { StateContext } from '@/components/providers/stateProvider'
import React from 'react'
import styles from './cart.module.css'



interface Props {
    item: {
        id: string
        name: string
        price: number
        imageURL: string
        quantity: number
    }
    }

const CartListItem = ({item}:Props) => {
    
    const {handleIncreaseCartProduct, handleRemoveCartProduct} = useContext(StateContext);

  return (
    <li key={item.id} className={styles.cartListItem}>
        <div className={styles.cartContentItemImg}>
            <img src={item.imageURL} alt={item.name}/>
        </div>
        <div className={styles.cartContentItemDetails}>
            <h4 className='text-primarymedium'>{item.name}</h4>
            <div className={styles.quantityPrice}>
                <p className='text-slate-500'><span onClick={()=> handleRemoveCartProduct(item)} className={`${styles.navCartPriceTogglers} mr-3`}>-</span>Qty: {item.quantity} <span onClick={()=>handleIncreaseCartProduct(item)} className={`${styles.navCartPriceTogglers} ml-3 mr-5`}>+</span></p>
                <p className='text-secondaryColor'>${(item.price *item.quantity).toFixed(2)}</p>
            </div>
        </div>
    </li>
  )
}

export default CartListItem