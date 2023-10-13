import React from 'react'
import styles from "@/styles/auth.module.css"

const page = () => {
  return (
    <div className={`${styles.login} customwidth mx-auto`}>
        <div className="loginCard">
          <div className="loginHeader">
            <h2>Sign in</h2>
            <p>to continue to Microcad</p>
          </div>
          <form className="loginForm">
            <div className="formGroup">
              <label htmlFor="email">Email or phone</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="formGroup">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password" />
            </div>
            <div className="formGroup">
              <button className="microcadBtn">Sign in</button>
            </div>
            <div className="formGroup">
              <a href="/auth/forgot-password">Forgot password?</a>
            </div>
          </form>
          <div className="loginFooter">
            <p>Don't have an account? <a href="/auth/register">Create account</a></p>
          </div>
        </div>
    </div>
  )
}

export default page