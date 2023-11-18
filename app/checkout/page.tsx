import styles from "@/styles/checkout.module.css"
import Image from "next/image"

const page = () => {
  return (
    <div className={`${styles.checkout} mx-auto`}>
        <div className={styles.checkoutHeader}>
            <h1 className="text-primayColor">Check out Cart</h1>
        </div>
        <div className={styles.checkoutSections}>
            <div className={styles.checkoutStartPart}>
               <div className={styles.checkoutStartPartInner}>
                <div className={styles.paymentsContainer}>
                    <h4 className="text-center pb-5 text-slate-400">Express checkout</h4>
                    <div className={styles.payments}>
                        <div className={styles.shoppay}>
                            <Image src="/static/media/icons/shoppay.svg" alt="shoppay"  height={60} width={80}/>
                        </div>
                        <div className={styles.paypal}>
                            <Image src="/static/media/icons/paypal.svg" alt="shoppay"  height={60} width={80}/>
                        </div>
                        <div className={styles.googlepay}>
                            <Image src="/static/media/icons/googlepay.svg" alt="shoppay"  height={60} width={50}/>
                        </div>
                    </div>
                    <h3 className="text-slate-400">OR</h3>
                </div>
               </div>
            </div>
            <div className={styles.checkoutEndPart}></div>
        </div>
    </div>
  )
}

export default page