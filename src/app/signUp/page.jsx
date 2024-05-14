import React from 'react'
import styles from './signUp.module.css'
import Link from 'next/link'

const page = () => {
  return (
    <>
    <div className={styles.container}>
      <h1>
        Sign Up
      </h1>
      <div className={styles.inputContainer}>
        <input type="text" name="" id="" placeholder='John Doe' /><br />
        <input type="email" name="" id="" placeholder='Example123@gmail.com' /><br />
        <input type="password" name="" id="" placeholder='Password' /><br />
        <button className={styles.btn}>Continue</button>
      </div>
      <h4>OR</h4>
      <button className={styles.Btn}>Continue with Google</button>
    <Link href="/login" className={styles.link}>Already have an account? Login</Link>
    </div>
  </>
  )
}

export default page