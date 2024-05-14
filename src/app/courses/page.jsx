
"use client"
import { useState, useEffect } from 'react';

export default function Home() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCourses() {
      try {
        const response = await fetch('https://courses.edx.org/api/courses/v1/courses/');
        // const response = await fetch("https://api.coursera.org/api/courses.v1");

        const data = await response.json();
        setCourses(data.results);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    }

    fetchCourses();
  }, []);
console.log(courses);
  return (
    <div>
      <h1>edX Courses</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {courses.map(course => (
            <li key={course.id}>
              <h2>{course.name}</h2>
              <p>{course.description}</p>
              <p>Start Date: {course.start}</p>
              <p>End Date: {course.end}</p>
              <img src={course.media.course_image.uri} alt="Course Image" />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}