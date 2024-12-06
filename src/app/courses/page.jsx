
"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './page.module.css'

export default function Home() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCourses() {
      try {
        const response = await fetch('/api/courses');
        // const response = await fetch("https://api.coursera.org/api/courses.v1");

        const data = await response.json();
        setCourses(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    }

    fetchCourses();
  }, []);
  console.log(courses);
  return (
    <div className={styles.hipe}>
      <h1>Popular Courses</h1>
      {loading ? (
        <img className={styles.loader} 
        src="/loader.png" 
        alt="#" />
      ) : (
        <>
          {courses.map(course => (
            <li className={styles.cour} key={course.id}>
              <Image
                src={course.media.image.small}
                alt="Course Image"
                width={300}
                height={200}
              />
              <h2>{course.name}</h2>
              <p>Price: {course.start}</p>
              <p className={styles.rating}>⭐ {course.Rate}</p>
            </li>
          ))}
        </>
      )}
    </div>
  );
}