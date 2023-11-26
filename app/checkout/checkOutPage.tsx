"use client";
import { useContext, useEffect, useState } from "react"
import { StateContext } from "@/components/providers/stateProvider";
import CheckoutForm from "@/components/forms/CheckoutForm"
import styles from "@/styles/checkout.module.css"
import Image from "next/image"




const CheckoutPage = ({user}:{user:{}}) => {
    const [cartItems, setCartItems] = useState<any>([])
    const {cart} = useContext(StateContext)

    useEffect(() => {
        setCartItems(cart)
    }, [cart])

    
  return  <div className={`${styles.checkout} mx-auto`}>
    <div className={styles.checkoutHeader}>
        <h1 className="text-primayColor">Check out Cart</h1>
    </div>
    <div className={styles.checkoutSections}>
        <div className={styles.checkoutStartPart}>
           <div className={styles.checkoutStartPartInner}>
            <div className={styles.paymentsContainer}>
                <h4 className="text-center pb-5 text-slate-400">Express checkout</h4>
                <div className={styles.payments}>
                    <a className={styles.shoppay}>
                    <Image src="/static/media/icons/shoppay.svg" alt="shoppay"  height={60} width={80}/>
                    </a>
                    <a className={styles.paypal}>
                        <Image src="/static/media/icons/paypal.svg" alt="shoppay"  height={60} width={80}/>
                    </a>
                    <a className={styles.googlepay}>
                        <Image src="/static/media/icons/googlepay.svg" alt="shoppay"  height={60} width={50}/>
                    </a>
                </div>
                <h3 className="text-slate-400">OR</h3>
            </div>
            <div className={styles.RegisterCheckout}>
                <div className={styles.RegisterCheckoutHeader}>
                    <h3 className="">Contact</h3>
                    <p className="text-slate-400">Have an account? <a href="/login">Login</a></p>
                </div>
                <div className={styles.CheckoutForm}>
                 <CheckoutForm user={user} />
                </div>
            </div>
           </div>
        </div>
        <div className={styles.checkoutEndPart}>
            <div className={styles.checkoutEndPartHeader}>
                <h3 className="pb-4">Order Summary</h3>
            </div>
            <div className={styles.checkoutEndPartInner}>
                <div className={styles.checkOutCartItems}>
                    {
                        cart.map((item:any)=>(
                            <div key={item.id} className={styles.checkOutCartItem}>
                                <div className={styles.checkOutCartItemImg}>
                                    <div className={styles.checkOutCartItemQuantity}>
                                        <p>{item.quantity}</p>
                                    </div>
                                    <img src={item.imageURL} alt={item.title} />
                                </div>
                                <div className={styles.checkOutCartItemDetails}>
                                    <h4>{item.name}</h4>
                                </div>
                                <p className={styles.checkOutCartItemPrice}>{item.price.toLocaleString()}</p>
                            </div>
                        )
                        )
                    }
                </div>
                <div className={styles.total}>
                    <h6>Total</h6>
                    <h6>$
                        {
                            cartItems.reduce((acc:any, item:any)=>(
                                acc + item.price * item.quantity
                            ),0).toLocaleString()
                        }
                        </h6>
                </div>
            </div>
        </div>
    </div>
</div>
  
}

export default CheckoutPage