import styles from './spinner.module.css'
const spinner = () => {
  return (
    <div className={styles.spinnerContainer}>
        <div className={styles.spinner}></div>
    </div>
  )
}

export default spinner