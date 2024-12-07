'use client'
import { useState } from "react";
import styles from "./css3.module.css";

const Css = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const courseTitles = [
    "CSS HOME",
    "CSS Introduction",
    "CSS Syntax",
    "CSS Selectors",
    "CSS How To",
    "CSS Comments",
    "CSS Colors",
    "CSS Backgrounds",
    "CSS Borders",
    "CSS Margins",
    "CSS Padding",
    "CSS Height/Width",
    "CSS Box Model",
    "CSS Outline",
    "CSS Text",
    "CSS Fonts",
    "CSS Icons",
    "CSS Links",
    "CSS Lists",
    "CSS Tables",
    "CSS Display",
    "CSS Max-width",
    "CSS Position",
    "CSS Z-index",
    "CSS Overflow",
    "CSS Float",
    "CSS Inline-block",
    "CSS Align",
    "CSS Combinators",
    "CSS Pseudo-classes",
    "CSS Pseudo-elements",
    "CSS Opacity",
    "CSS Navigation Bar",
    "CSS Dropdowns",
    "CSS Image Gallery",
    "CSS Image Sprites",
    "CSS Attr Selectors",
    "CSS Forms",
    "CSS Counters",
    "CSS Website Layout",
    "CSS Units",
    "CSS Specificity",
    "CSS !important",
    "CSS Math Functions",
    "CSS Advanced",
    "CSS Rounded Corners",
    "CSS Border Images",
    "CSS Gradients",
    "CSS Shadows",
    "CSS Text Effects",
    "CSS Web Fonts",
    "CSS Animations",
    "CSS Media Queries",
    "CSS Flexbox",
    "CSS Grid",
    "CSS SASS",
  ];

  const filteredCourses = courseTitles.filter((course) =>
    course.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.cssPage}>
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
        <h1>Welcome to the CSS Course</h1>
        <p>Select a topic from the sidebar to begin your learning journey.</p>
      </main>
    </div>
  );
};

export default Css;
