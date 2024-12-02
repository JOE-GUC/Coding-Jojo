'use client';

import { useState, useEffect } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false); // Sidebar toggle state

  useEffect(() => {
    async function fetchCourses() {
      try {
        const response = await fetch('/api/courses');
        const data = await response.json();
        setCourses(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    }

    fetchCourses();
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      <button className={styles.sidebartoggle} onClick={toggleSidebar}>
          ☰
        </button>
     
      {/* Sidebar */}
      <aside className={`${styles.sidebar} ${sidebarOpen ? styles.sidebarOpen : ''}`}>
        <button className={styles.closeButton} onClick={toggleSidebar}>
          ✖
        </button>
        <h2 className={styles.sidebarHeading}>Coding Courses</h2>
        <ul className={styles.courseList}>
          {courses.map((course) => (
            <li key={course.id} className={styles.courseItem}>
              {course.name}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className={styles.mainContent}>
        <h1 className={styles.heading}>Popular Courses</h1>
        {loading ? (
          <div className={styles.loaderContainer}>
            <Image className={styles.loader} src="/loader.png" alt="Loading..." />
          </div>
        ) : (
          <div className={styles.coursesGrid}>
            {courses.map((course) => (
              <div className={styles.courseCard} key={course.id}>
                <Image
                  className={styles.courseImage}
                  src={course.media.image.small}
                  alt="Course Image"
                />
                <div className={styles.courseContent}>
                  <h2 className={styles.courseTitle}>{course.name}</h2>
                  <p className={styles.coursePrice}>Price: {course.start}</p>
                  <div className={styles.rating}>
                    <span>⭐ {course.Rate}</span>
                  </div>
                  <button className={styles.viewButton}>View Course</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

    </div>
  );
}
