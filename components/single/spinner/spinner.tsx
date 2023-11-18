import styles from './spinner.module.css'
const spinner = () => {
  return (
    <div className={styles.spinnerContainer}>
        <div className={styles.spinner}></div>
        <p>Loading products</p>
    </div>
  )
}

export default spinner