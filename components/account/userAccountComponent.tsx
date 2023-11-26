"use client"
import UserEditForm from "@/components/forms/userEditForm"
import styles from "@/styles/auth.module.css"
const UserAccountComponent = ({user}:{user:any}) => {
    

  return (
    <div className={`${styles.login} customwidth mx-aut`}>
    <h2 className="text-primayColor">Edit account</h2>
  <div className={`${styles.loginWrapper} ${styles.loginWrapperEdit}`}>
  <div className={styles.userInputs}>
  <h6 className='font-bold text-primarymedium pb-3'>Account Information</h6>
  {
    user !== null&&(
      <UserEditForm userData ={user} />
    )
  }
    </div>

  </div>
</div>
  )
}

export default UserAccountComponent