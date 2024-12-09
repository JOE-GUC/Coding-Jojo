'use client';
import React, { useState, useRef } from 'react';
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
    setSpecificCourseSearch(false); // Reset specific course search when user types
  };

  const handleSearchSubmit = () => {
    setSpecificCourseSearch(searchTerm.toLowerCase() === specificCourseName.toLowerCase());
  };

  const courseNavRef = useRef(null);

  const handleMouseDown = (e) => {
    const nav = courseNavRef.current;
    nav.isDown = true;
    nav.startX = e.pageX - nav.offsetLeft; // Initial mouse position relative to container
    nav.scrollLeft = nav.scrollLeft; // Current scroll position
  };

  const handleMouseMove = (e) => {
    const nav = courseNavRef.current;
    if (!nav.isDown) return; // Exit if not dragging

    e.preventDefault();
    const x = e.pageX - nav.offsetLeft; // Get current mouse position relative to container
    const walk = (x - nav.startX) * 2; // Adjust multiplier for smoother and flexible scroll speed

    // Smooth scroll handling:
    nav.scrollLeft -= walk; // Scroll the container horizontally
    nav.startX = x; // Update starting mouse position for next move
  };

  const handleMouseUp = () => {
    const nav = courseNavRef.current;
    nav.isDown = false; // Disable drag mode when mouse button is released
  };


  return (
<div className={styles.navbarContainer}>

<section className={styles.courseContainer}>
<div
        className={styles.courseNav}
        ref={courseNavRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseUp}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
          <ul>
            <li>
              <Link href="/html5">HTML</Link>
            </li>
            <li>
              <Link href="/css3">CSS</Link>
            </li>
            <li>
              <Link href="/javaScriptx">JAVASCRIPT</Link>
            </li>
            <li>
              <Link href="">REACT</Link>
            </li>
            <li>
              <Link href="">NEXT</Link>
            </li>
            <li>
              <Link href="">PYTHON</Link>
            </li>
            <li>
              <Link href="">PHP</Link>
            </li>
            <li>
              <Link href="">ANGULAR</Link>
            </li>
            <li>
              <Link href="">JAVA</Link>
            </li>
            <li>
              <Link href="">Html</Link>
            </li>
            <li>
              <Link href="">Html</Link>
            </li>
            <li>
              <Link href="">Html</Link>
            </li>
            <li>
              <Link href="">Html</Link>
            </li>
            <li>
              <Link href="">Html</Link>
            </li>
            <li>
              <Link href="">Html</Link>
            </li>
            <li>
              <Link href="">Html</Link>
            </li>
            <li>
              <Link href="">Html</Link>
            </li>
            <li>
              <Link href="">Html</Link>
            </li>
            <li>
              <Link href="">Html</Link>
            </li>
            <li>
              <Link href="">Html</Link>
            </li>
            <li>
              <Link href="">Html</Link>
            </li>
            <li>
              <Link href="">Html</Link>
            </li>
            <li>
              <Link href="">Html</Link>
            </li>
            <li>
              <Link href="">Html</Link>
            </li>
            <li>
              <Link href="">Html</Link>
            </li>
            <li>
              <Link href="">Html</Link>
            </li>
            <li>
              <Link href="">Html</Link>
            </li>
            <li>
              <Link href="">Html</Link>
            </li>
            <li>
              <Link href="">Html</Link>
            </li>
            <li>
              <Link href="">Html</Link>
            </li>
            <li>
              <Link href="">Html</Link>
            </li>

            <li>
              <Link href="">Html</Link>
            </li>
            <li>
              <Link href="">Html</Link>
            </li>
            <li>
              <Link href="">Html</Link>
            </li>
            <li>
              <Link href="">Html</Link>
            </li>
            <li>
              <Link href="">Html</Link>
            </li>
            <li>
              <Link href="">Html</Link>
            </li>
            <li>
              <Link href="">Html</Link>
            </li>
            <li>
              <Link href="">Html</Link>
            </li>
            <li>
              <Link href="">Html</Link>
            </li>
            <li>
              <Link href="">Html</Link>
            </li>
          </ul>
        </div>
      </section>

  <div className={styles.contentWrapper}>
    <div className={styles.logoContainer}>
      <Image
        src="/coding-jojo-preview.png"
        width={130}
        height={60}
        className={styles.logo}
        alt="Logo"
      />
    </div>

    <div className={styles.searchContainer}>
      <input
        type="search"
        value={searchTerm}
        onChange={handleSearchChange}
        className={styles.searchInput}
        placeholder="Search for your favorite course"
      />
      <button onClick={handleSearchSubmit} className={styles.searchButton}>
        Search
      </button>
    </div>

    <div className={styles.navLinks}>
      <nav>
        <button onClick={toggleDarkMode} className={styles.darkModeToggle}>
          {isDarkMode ? '🔆' : '🌙'}
        </button>
      </nav>

      <div className={styles.linksContainer}>
        <Links courses={filteredCourses} />
      </div>
    </div>
  </div>
</div>

  );
};


export default Navbar;
