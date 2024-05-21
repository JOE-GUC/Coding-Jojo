"use client"
import React from 'react';
import { signIn, getSession } from 'next-auth/react';
import styles from './login.module.css';
import Link from 'next/link';

const LoginPage = () => {
  const handleLoginSubmit = async () => {
    const email = document.querySelector('input[type="email"]').value;
    const password = document.querySelector('input[type="password"]').value;

    // Check if a user with the provided email exists
    const userExists = await checkUserExists(email);

    if (userExists) {
      try {
        await signIn('credentials', {
          email,
          password,
          redirect: false,
        });

        // Optionally, you can handle successful login here (e.g., redirect to a dashboard page)
      } catch (error) {
        console.error('Login failed. Please try again.', error);
      }
    } else {
      console.log('User does not have an account');
      // Display a message to the user indicating that the account does not exist
    }
  };

  const checkUserExists = async (email) => {
    // Perform logic to check if the user with the provided email exists
    // This can be an API call to your backend or any other method to verify user existence
    // Here's a placeholder implementation returning true for demonstration
    return true;
  };

  return (
    <>
      <div className={styles.container}>
        <h1>Login</h1>
        <div className={styles.inputContainer}>
          <input type="email" name="email" placeholder="Example234@gmail.com" /><br />
          <input type="password" name="password" placeholder="Password" /><br />
          <button className={styles.btn} onClick={handleLoginSubmit}>Continue</button>
        </div>
        <h4>OR</h4>
        <button className={styles.btn} onClick={() => signIn('google')}>Login with Google</button>
        <Link  href="/signUp" className={styles.link}>
          <p>{"Don't have an account? Sign Up"}</p></Link>
      </div>
    </>
  );
};

export default LoginPage;