"use client";
import { useState } from "react";
import styles from "./html5.module.css";

const Html = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedContent, setSelectedContent] = useState("");

  const courseTitles = [
    "HTML HOME",
    "HTML Introduction",
    "HTML Editors",
    "HTML Basic",
    "HTML Elements",
    "HTML Attributes",
    "HTML Headings",
    "HTML Paragraphs",
    "HTML Styles",
    "HTML Formatting",
    "HTML Quotations",
    "HTML Comments",
    "HTML Colors",
    "HTML CSS",
    "HTML Links",
    "HTML Images",
    "HTML Favicon",
    "HTML Page Title",
    "HTML Tables",
    "HTML Lists",
    "HTML Block & Inline",
    "HTML Div",
    "HTML Classes",
    "HTML Id",
    "HTML Iframes",
    "HTML JavaScript",
    "HTML File Paths",
    "HTML Head",
    "HTML Layout",
    "HTML Responsive",
    "HTML Computercode",
    "HTML Semantics",
    "HTML Style Guide",
    "HTML Entities",
    "HTML Symbols",
    "HTML Emojis",
    "HTML Charsets",
    "HTML URL Encode",
    "HTML vs. XHTML",
  ];

  const courseContent = {
    "HTML HOME": `
      <h2>HTML Tutorial</h2><br />
      <p>HTML is the main markup language for describing the structure of web pages..</p><br />
<Image
  src="/html-illustration.png" 
  alt="#"
/> <br />
 <br/><br/>
      <p>Easy Learning with HTML "Try it Yourself"</p>
      <p>With our "Try it Yourself" editor, you can edit the HTML code and view the result:</p>

      <p>Click on the "Try it Yourself" button to see how it works.</p>
    `,

    "HTML Introduction": `
    <h2>HTML Introduction</h2>
    <h2>What is HTML</h2>
    <p>HTML stands for HyperText Markup Language.</p>
    <p>HTML is the standard markup language for creating web pages.</p>
    <p>HTML documents consist of HTML tags.</p>
    <p>HTML tags label pieces of content (e.g., headings, paragraphs, images).</p>
    <p>HTML tags are delineated by angle brackets.</p>
    <p>HTML tags have attributes, which provide additional information about the element.</p>
    <h2>Example</h2>
    <p>The following is an example of an HTML document:</p>
    <pre><code>&lt;!DOCTYPE html&gt;
    `
    // Add more content for other titles as needed.
  };

  const filteredCourses = courseTitles.filter((course) =>
    course.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.htmlPage}>
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
            <li
              key={index}
              className={styles.courseItem}
              onClick={() => setSelectedContent(courseContent[course] || "<p>Content not available.</p>")}
            >
              {course}
            </li>
          ))}
        </ul>
      </aside>
      <main className={styles.content}>
        <div dangerouslySetInnerHTML={{ __html: selectedContent || "<p>Select a topic to view the content.</p>" }} />
      </main>
    </div>
  );
};

export default Html;
