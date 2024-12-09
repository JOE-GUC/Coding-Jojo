"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCourses() {
      try {
        const response = await fetch('/api/courses');
        const data = await response.json();
        setCourses(data);
        setFilteredCourses(data);  // Initialize filtered courses with all courses
        setLoading(false);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    }

    fetchCourses();
  }, []);

  // Filter courses based on the search term
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    const filtered = courses.filter(course =>
      course.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredCourses(filtered);
  };

  return (
    <div className={styles.hipe}>
      <h1>Explore Our Courses</h1>

      <div className={styles.seachP}>
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search courses..."
          value={searchTerm}
          onChange={handleSearch}
          className={styles.searchBar}
        />
      </div>

      {/* Loading State */}
      {loading ? (
        <img className={styles.loader} src="/loader.png" alt="Loading..." />
      ) : (
        <>
          {/* Container for horizontally scrolling courses */}
          <div className={styles.coursesContainer}>
            {/* Display courses based on search results */}
            {filteredCourses.length > 0 ? (
              filteredCourses.map(course => (
                <div className={styles.cour} key={course.id}>
                  <Image
                    src={course.media.image.small}
                    alt="Course Image"
                    width={300}
                    height={200}
                  />
                  <h2>{course.name}</h2>
                  <p>Price: {course.start}</p>
                  <p className={styles.rating}>⭐ {course.Rate}</p>
                </div>
              ))
            ) : (
              <p>Course not available</p>  // Display message if no courses match search
            )}
          </div>
        </>
      )}
    </div>
  );
}
