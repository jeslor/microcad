import styles from "@/styles/checkout.module.css"

const page = () => {
  return (
    <div className={`${styles.checkout} mx-auto`}>
        <div className={styles.checkoutHeader}>
            <h1 className="text-primayColor">Check out Cart</h1>
        </div>
        <div className={styles.checkoutSections}>
            <div className={styles.checkoutStartPart}></div>
            <div className={styles.checkoutEndPart}></div>
        </div>
    </div>
  )
}

export default page