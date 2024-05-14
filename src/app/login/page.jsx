import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './login.module.css'

const login = () => {
  return (
    <>
    <div className={styles.container}>
      <h1>
        Login
      </h1>
      <div className={styles.inputContainer}>
        <input type="text" name="" id="" placeholder='John Doe' /><br />
        <input type="text" name="" id="" placeholder='Password' /><br />
        <button className={styles.btn}>Continue</button>
      </div>
      <h4>OR</h4>
      <button className={styles.Btn}>Continue with Google</button>
      <Link href="/signUp" className={styles.link}>Don't have an account? Sign Up</Link>

    </div>
  </>
  )
}

export default login