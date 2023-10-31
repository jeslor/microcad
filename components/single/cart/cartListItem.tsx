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
  return (
    <li key={item.id} className={styles.cartListItem}>
        <div className={styles.cartContentItemImg}>
            <img src={item.imageURL} alt={item.name} width={40} height={40} />
        </div>
        <div className={styles.cartContentItemDetails}>
            <h4 className='text-primarymedium'>{item.name}</h4>
            <div className={styles.quantityPrice}>
            <p className='text-primarymedium'><span className={styles.nacCartPriceTogglers}>-</span>Qty: {item.quantity} <span className={styles.nacCartPriceTogglers}>+</span></p>
            <p className='text-secondaryColor'>${item.price}</p>
            </div>
        </div>
    </li>
  )
}

export default CartListItem