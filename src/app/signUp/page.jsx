"use client"
import React from 'react';
import { signIn } from 'next-auth/react';
import styles from './signUp.module.css';
import Link from 'next/link';

const SignUpPage = () => {
  const handleFormSubmit = async () => {
    // Handle form submission here, for example, by calling an API to register the user
    // Upon successful registration, trigger the authentication process
    await registerUser(); // Call your registerUser function here

    // Trigger authentication
    await signIn('credentials', { redirect: false }); // Redirect can also be set to a custom URL
  };

  const registerUser = async () => {
    // Implement your user registration logic here (e.g., API call)
  };

  return (
    <>
      <div className={styles.container}>
        <h1>Sign Up</h1>
        <div className={styles.inputContainer}>
          <input type="text" name="name" placeholder="John Doe" /><br />
          <input type="email" name="email" placeholder="example123@gmail.com" /><br />
          <input type="password" name="password" placeholder="Password" /><br />
          <button className={styles.btn} onClick={handleFormSubmit}>Continue</button>
        </div>
        <h4>OR</h4>
        <button className={styles.btn} onClick={() => signIn('google')}>Sign Up with Google</button>
        <Link href="/login" className={styles.link}>Already have an account? <span>Login</span></Link>
      </div>
    </>
  );
};

export default SignUpPage;