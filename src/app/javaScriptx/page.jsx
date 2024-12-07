'use client'
import { useState } from "react";
import styles from "./javaScriptx.module.css";

const Javascript = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const courseTitles = [
    "JS HOME",
    "JS Introduction",
    "JS Where To",
    "JS Output",
    "JS Statements",
    "JS Syntax",
    "JS Comments",
    "JS Variables",
    "JS Let",
    "JS Const",
    "JS Operators",
    "JS Arithmetic",
    "JS Assignment",
    "JS Data Types",
    "JS Functions",
    "JS Objects",
    "JS Object Properties",
    "JS Object Methods",
    "JS Events",
    "JS Strings",
    "JS Numbers",
    "JS Arrays",
    "JS Dates",
    "JS Math",
    "JS Booleans",
    "JS Comparisons",
    "JS If Else",
    "JS Switch",
    "JS Loops",
    "JS Classes",
    "JS Modules",
    "JS Async",
    "JS JSON",
    "JS AJAX",
    "JS Browser BOM",
    "JS Web APIs",
    "JS Graphics",
    "JS Examples",
    "JS Quiz",
    "JS Exercises",
    "JS Interview Prep",
    "JS Bootcamp",
    "JS Certificate",
  ];

  const filteredCourses = courseTitles.filter((course) =>
    course.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.jsPage}>
      <aside className={styles.sidebar}>
        <input
          type="text"
          placeholder="Search..."
          className={styles.searchField}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <ul className={styles.courseList}>
          {filteredCourses.map((course, index) => (
            <li key={index} className={styles.courseItem}>
              {course}
            </li>
          ))}
        </ul>
      </aside>
      <main className={styles.content}>
        <h1>Welcome to the JavaScript Course</h1>
        <p>Select a topic from the sidebar to begin your learning journey.</p>
      </main>
    </div>
  );
};

export default Javascript;
