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
      <h1>HTML Tutorial</h1>
      <p>HTML is the standard markup language for Web pages.</p>
      <p>With HTML you can create your own Website. HTML is easy to learn - You will enjoy it!</p>
      <h2>Easy Learning with HTML "Try it Yourself"</h2>
      <p>With our "Try it Yourself" editor, you can edit the HTML code and view the result:</p>
      <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;Page Title&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;

  &lt;h1&gt;This is a Heading&lt;/h1&gt;
  &lt;p&gt;This is a paragraph.&lt;/p&gt;

&lt;/body&gt;
&lt;/html&gt;</code></pre>
      <p>Click on the "Try it Yourself" button to see how it works.</p>
    `,
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
        <h1>HTML Course Content</h1>
        <div dangerouslySetInnerHTML={{ __html: selectedContent || "<p>Select a topic to view the content.</p>" }} />
      </main>
    </div>
  );
};

export default Html;
