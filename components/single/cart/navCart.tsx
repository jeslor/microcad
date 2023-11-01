import Link from 'next/link'
import CartListItem from '@/components/single/cart/cartListItem'

import {useContext } from 'react'
import styles from './cart.module.css'
import { StateContext } from '@/components/providers/stateProvider'


const NavCart = () => {
    const {showCartDrawer, handleToggleCartDrawer,cart} = useContext(StateContext);
    let total  = (cart.reduce((acc, item:any) => acc + item.price * item.quantity, 0).toFixed(2))
    total = Number(total).toLocaleString();
    



  return (
    <div onClick={handleToggleCartDrawer} className={styles.cartContent}>
    {cart.length > 0 ?
        <div onClick={(e)=>e.stopPropagation()} className={`${styles.cartContentHolder}  ${showCartDrawer?styles.slideInDrawer :''}`}>
        <div className={`${styles.cartContentHeader}`}>
                <h3 className='text-primayColor font-bold mb-5'>Cart</h3>
            </div>
            <div className={styles.cartContentBody}>
                <ul>
                    {cart.map((item:any) => (
                        <CartListItem key={item.description} item={item} />
                        ))}
                </ul>
            </div>
            <div className={styles.cartContentFooter}>
                <Link href="/cart">
                   View Cart
                </Link>
                <p className='text-primayColor'>Total: <span className='text-secondaryColor pl-2'>${total}</span></p>
            </div>
        </div>
        :
        <div className={styles.cartContentHolder}>
            <div className={styles.cartContentHeader}>
                <h3 className='text-primayColor'>Cart</h3>
            </div>
            <div className={styles.cartContentBody}>
                <p className='text-secondaryColor'>Your cart is empty</p>
            </div>
            <div className={styles.cartContentFooter}>
                <Link className='text-primayColor' href="/cart">
                   View Cart
                </Link>
                <p className='text-primayColor'>Total: <span className='text-secondaryColor'>$0.00</span></p>
            </div>
        </div>
    }
</div>
  )
}

export default NavCart;