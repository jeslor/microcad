import React from 'react'
import styles from './spinner.module.css'

const SmallSpinner = ({term}:{term:string}) => {
  return (
    <div className={styles.spinnerContainerSmall}>
    <div className={styles.spinner}></div>
    <p>{`${term}`}...</p>
</div>
  )
}

export default SmallSpinner