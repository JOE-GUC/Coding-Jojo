"use client"
import React, { useState } from 'react';
import Links from './links/Links';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import styles from './navbar.module.css';
import useDarkMode from '../useDarkMode/useDarkMode';
import Image from 'next/image';

const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [searchTerm, setSearchTerm] = useState('');
  const [specificCourseSearch, setSpecificCourseSearch] = useState(false);
  const specificCourseName = 'Intro to CSS'; // Specify the name of the specific course

  // Dummy course data for demonstration
  const courses = [
    { id: 1, title: 'Course A' },
    { id: 2, title: 'Course B' },
    { id: 3, title: 'Course C' },
  ];

  // Filter courses based on search term
  const filteredCourses = courses.filter((course) => {
    if (specificCourseSearch) {
      return course.title.toLowerCase().includes(specificCourseName.toLowerCase());
    } else {
      return course.title.toLowerCase().includes(searchTerm.toLowerCase());
    }
  });

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Reset specific course search when the user is typing in the search input
    setSpecificCourseSearch(false);
  };

  const handleSearchSubmit = () => {
    setSpecificCourseSearch(searchTerm.toLowerCase() === specificCourseName.toLowerCase());
  };

  return (
    <div className={styles.container}>
      <Image src="/coding-jojo-preview.png" width={130} height={60} className={styles.image} alt="Remove" />
      <input
        type="search"
        value={searchTerm}
        onChange={handleSearchChange}
        className={styles.searchInput}
        placeholder="Search for your favorite course"
      />
      {/* <button onClick={handleSearchSubmit} className={styles.searchButton}>
        Search
      </button> */}
      <nav>
        <button onClick={toggleDarkMode} className={styles.darkmodetoggle}>
          {isDarkMode ? '🔆' : '🌙'}
        </button>
      </nav>

      <div className={styles.Linkedin}>
        <Links courses={filteredCourses} />
      </div>
      {/* {!session ? Links.map((link, index) => (
          <Link href={link.href} className={styles.link} key={index}>{link.name}</Link>
        )) : (
          linktrue.map((link, index) => (
            <Link href={link.href} className={styles.link} key={index}>{link.name}</Link>
          )
          )
        )}{
          session && <Image src={session.user.image} width={20} height={20} style={{borderRadius:"50%"}} />
        } */}
    </div>
  );

};

export default Navbar;