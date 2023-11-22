import { useEffect } from 'react'
import styles from './spinner.module.css'
const spinner = () => {


  useEffect(() => {
    const body = document.querySelector('body')
    window.scrollTo(0, 0)
    body!.style.overflow = 'hidden'
    body!.style.height = '100vh'
    return () => {
      body!.style.overflow = 'auto'
      body!.style.height = 'auto'
      body!.style.width = 'auto'
    }
  })

  return (
    <div className={styles.spinnerContainer}>
        <div className={styles.spinner}></div>
        <p>Loading products</p>
    </div>
  )
}

export default spinner