import React from 'react'
import Links from './links/Links'
import styles from './navbar.module.css'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Image 
        src='/coding-jojo-preview.png'
        width={130}
        height={60}
        className={styles.image}
        alt='Remove'
      />
      <input type="search" name="" className={styles.searchInput} placeholder='Search for your favorite caurse'/>
      <div className={styles.Links}>
        <Links />
      </div>
    </div>
  )
}

export default Navbar