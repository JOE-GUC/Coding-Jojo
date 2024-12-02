import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.contentWrapper}>
        <div className={styles.footerContainer}>
          {/* About Us Section */}
          <div className={styles.footerSection}>
            <h4>About Us</h4>
            <ul>
              <li>How it Works</li>
              <li>Affiliate Program</li>
              <li>Education Partners</li>
              <li>We are Hiring!</li>
              <li>Become a Teacher</li>
            </ul>
          </div>

          {/* Teachers Section */}
          <div className={styles.footerSection}>
            <h4>Teachers</h4>
            <ul>
              <li>English Teachers</li>
              <li>Chinese Teachers</li>
              <li>French Teachers</li>
              <li>Spanish Teachers</li>
              <li>Portuguese Teachers</li>
              <li>Japanese Teachers</li>
              <li>German Teachers</li>
              <li>Arabic Teachers</li>
            </ul>
          </div>

          {/* Support Section */}
          <div className={styles.footerSection}>
            <h4>Support</h4>
            <ul>
              <li>Need any Help?</li>
              <li>contact@info.com</li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div className={styles.footerSection}>
            <h4>Follow Us</h4>
            <ul className={styles.socialLinks}>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>YouTube</li>
              <li>Instagram</li>
              <li>Weibo</li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className={styles.footerSection}>
            <h4>Contact</h4>
            <ul>
              <li>929-242-6868</li>
              <li>123 Fifth Avenue</li>
              <li>New York, NY 10160</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.footerBottom}>
          <p>&copy; 2024 Coding Jojo, All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
