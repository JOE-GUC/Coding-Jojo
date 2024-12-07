'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';


const testimonials = [
  {
    name: 'John Doe',
    image: '/download (5).png',   
    text: 'Coding Jojo transformed my career! The lessons are clear, engaging, and hands-on.',
    role: 'Frontend Developer',
  },
  {
    name: 'John Doe',
    image: '/download (5).png',   
    text: 'Coding Jojo transformed my career! The lessons are clear, engaging, and hands-on.',
    role: 'Frontend Developer',
  },
  {
    name: 'John Doe',
    image: '/download (5).png',   
    text: 'Coding Jojo transformed my career! The lessons are clear, engaging, and hands-on.',
    role: 'Frontend Developer',
  },
  {
    name: 'John Doe',
    image: '/download (5).png',   
    text: 'Coding Jojo transformed my career! The lessons are clear, engaging, and hands-on.',
    role: 'Frontend Developer',
  },
  {
    name: 'John Doe',
    image: '/download (5).png',   
    text: 'Coding Jojo transformed my career! The lessons are clear, engaging, and hands-on.',
    role: 'Frontend Developer',
  },
  {
    name: 'Jane Smith',
    image: '/download (6).png',   
    text: 'I love the interactive lessons and the real-world projects. They helped me land my first freelance gig!',
    role: 'Freelance Designer',
  },
  {
    name: 'Sam Wilson',
    image: '/download (7).png',   
    text: 'The community support is amazing! I got all my questions answered quickly. Coding Jojo is the best learning platform.',
    role: 'Full-Stack Developer',
  },
  {
    name: 'Emily Chen',
    image: '/download (5).png',   
    text: 'As a beginner, I found the step-by-step guidance incredibly helpful. Now I\'m confident in my coding skills!',
    role: 'UI/UX Designer',
  },
  {
    name: 'Michael Rodriguez',
    image: '/download (5).png',   
    text: 'The project-based learning approach is fantastic. I\'ve built a portfolio that\'s impressed multiple employers.',
    role: 'Software Engineer',
  }
];

const TestimonialCarousel = () => {
  // Partition testimonials into groups of 3
  const groupedTestimonials = [];
  for (let i = 0; i < testimonials.length; i += 3) {
    groupedTestimonials.push(testimonials.slice(i, i + 3));
  }

  const [currentGroupIndex, setCurrentGroupIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play logic
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentGroupIndex((prev) => 
          (prev + 1) % groupedTestimonials.length
        );
      }, 5000); // Change group every 5 seconds
    }

    return () => clearInterval(interval);
  }, [isAutoPlaying, groupedTestimonials.length]);

  // Manual navigation
  const goToNextGroup = () => {
    setCurrentGroupIndex((prev) => 
      (prev + 1) % groupedTestimonials.length
    );
  };

  const goToPrevGroup = () => {
    setCurrentGroupIndex((prev) => 
      prev === 0 ? groupedTestimonials.length - 1 : prev - 1
    );
  };

  const currentGroup = groupedTestimonials[currentGroupIndex];

  return (
    <div className={styles.testimonialCarouselContainer}>
      <div className={styles.testimonialCarousel}>
        <motion.div 
          key={currentGroupIndex}
          className={styles.testimonialGrid}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          {currentGroup.map((testimonial, index) => (
            <div key={index} className={styles.testimonialCard}>
              <div className={styles.rating}>5/5</div>
              <p className={styles.testimonialText}>&quot;{testimonial.text}&quot;</p>
              <div className={styles.testimonialProfile}>
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className={styles.profileImage}
                />
                <div>
                  <h4>{testimonial.name}</h4>
                  <p className={styles.role}>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Navigation Buttons */}
        <div className={styles.carouselNavigation}>
          <button 
            onClick={goToPrevGroup}
            className={styles.navButton}
          >
            ←
          </button>
          <div className={styles.testimonialIndicators}>
            {groupedTestimonials.map((_, index) => (
              <span
                key={index}
                className={`${styles.indicator} ${index === currentGroupIndex ? styles.activeIndicator : ''}`}
                onClick={() => setCurrentGroupIndex(index)}
              />
            ))}
          </div>
          <button 
            onClick={goToNextGroup}
            className={styles.navButton}
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
};


const codingResources = [
  {
    title: 'Web Development Roadmap',
    icon: '/roadmap.jpg',
    description: 'Comprehensive guide from beginner to advanced web development',
    difficulty: 'Beginner to Advanced',
    duration: '6-12 months'
  },
  {
    title: 'Full-Stack Development',
    icon: '/full.png',
    description: 'Master front-end and back-end technologies',
    difficulty: 'Intermediate',
    duration: '12-18 months'
  },
  {
    title: 'AI & Machine Learning',
    icon: '/machine-removebg-preview.png',
    description: 'Learn Python, TensorFlow, and AI programming',
    difficulty: 'Advanced',
    duration: '18-24 months'
  }
];

const courseCategories = [
  { 
    name: 'HTML for Beginners', 
    icon: '/html5_23329.webp',
    description: 'Master the fundamentals of web structure'
  },
  { 
    name: 'CSS for Beginners', 
    icon: '/download__1_-removebg-preview.png',
    description: 'Learn styling and layout techniques'
  },
  { 
    name: 'JavaScript for Beginners', 
    icon: '/download.png',
    description: 'Dive into interactive web programming'
  },
  { 
    name: 'React for Beginners', 
    icon: '/download__3_-removebg-preview.png',
    description: 'Build modern web applications'
  },
  { 
    name: 'Python for Beginners', 
    icon: '/Python-logo-notext.svg.png',
    description: 'Start your programming journey'
  }
];

// Code snippet for visualization
const codeSnippets = [
  {
    language: 'JavaScript',
    code: `// Simple React Component
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;

function App() {
  return (
    <div>
      <Welcome name="Coder" />
    </div>
  );
}`,
icon: '/download.png',
},
  {
    language: 'Python',
    code: `# Data Analysis Example
import pandas as pd

def analyze_data(df):
    return {
        'mean': df['values'].mean(),
        'median': df['values'].median(),
        'max': df['values'].max()
    }

data = pd.DataFrame({'values': [10, 20, 30, 40, 50]})
results = analyze_data(data)
print(results)`,
icon: '/Python-logo-notext.svg.png',
}
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const groupSize = 3;

  const [activeCodeSnippet, setActiveCodeSnippet] = useState(0);

  // Cycle through code snippets
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCodeSnippet((prev) => (prev + 1) % codeSnippets.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Calculate grouped testimonials
  const groupedTestimonials = [];
  for (let i = 0; i < testimonials.length; i += groupSize) {
    groupedTestimonials.push(testimonials.slice(i, i + groupSize));
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % groupedTestimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [groupedTestimonials.length]);

  return (
    <div className={styles.heroContainer}>

<section className={styles.courseContainer}>
  <div className={styles.courseNav}>
    <ul>
      <li>
        <Link href="/html5">Html</Link>
      </li>
      <li>
        <Link href="/css3">Css</Link>
      </li>
      <li>
        <Link href="/javaScriptx">javaScript</Link>
      </li>
      <li>
        <Link href="">React</Link>
      </li>
      <li>
        <Link href="">Next</Link>
      </li>
      <li>
        <Link href="">nodejs</Link>
      </li>
      <li>
        <Link href="">Python</Link>
      </li>
      <li>
        <Link href="">Angular</Link>
      </li>
      <li>
        <Link href="">java</Link>
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

      <motion.div 
        className={styles.contentWrapper}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Hero Main Section */}
        <div className={styles.slider}>
          <motion.div 
            className={styles.description}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className={styles.heading}>
              Hello world <span>👋</span>
            </h1>
            <h1 className={styles.heading}>
              Welcome to <span>Coding Jojo</span>!
            </h1>
            <p className={styles.text}>
              Learn on your schedule with <strong>Coding Jojo</strong>, accessible from any device. We guide you through
              the fundamentals, concepts, and best practices of web development, equipping you with skills to create
              modern, user-friendly web designs.
            </p>
            <div className={styles.ctaButtons}>
              <motion.button 
                className={styles.primaryBtn}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                                    <Link href="/signUp" >Start Learning</Link>

              </motion.button>
              <motion.button 
                className={styles.secondaryBtn}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                                   <Link href="/courses" >View Courses</Link>

              </motion.button>
            </div>
          </motion.div>

          <motion.div 
            className={styles.videoContainer}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/viHILXVY_eU?autoplay=1&loop=1&playlist=viHILXVY_eU"
              title="Learn Coding"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </motion.div>
        </div>

        {/* Courses Section */}
        <div className={styles.coursesSection}>
          <h2 className={styles.sectionTitle}>Our Popular Courses</h2>
          <div className={styles.courseGrid}>
            {courseCategories.map((course, index) => (
              <motion.div 
                key={index} 
                className={styles.courseCard}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 20px rgba(0,0,0,0.12)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image 
                  src={course.icon} 
                  alt={`${course.name} icon`} 
                  width={60} 
                  height={60} 
                  className={styles.courseIcon}
                />
                <h3>{course.name}</h3>
                <p>{course.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className={styles.features}>
          {[
            { icon: '/education-success-consulting-center-solutions-png_83943-removebg-preview.png', title: 'Expert Tutors', text: 'Learn from industry professionals with real-world experience.' },
            { icon: '/download__4_-removebg-preview.png', title: 'Verified Profiles', text: 'Guaranteed quality and authenticity of our instructors.' },
            { icon: '/code-education-logo-icon-design-vector-22644747-removebg-preview.png', title: 'Flexible Learning', text: 'Learn at your own pace, anytime and anywhere.' },
            { icon: '/affordable-rubber-stamp-seal-vector-removebg-preview.png', title: 'Affordable Prices', text: 'High-quality education at budget-friendly rates.' }
          ].map((feature, index) => (
            <motion.div 
              key={index} 
              className={styles.featureCard}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 8px 15px rgba(0,0,0,0.1)"
              }}
            >
              <Image src={feature.icon} alt={feature.title} width={50} height={50} />
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </motion.div>
          ))}
        </div>

    <div className={styles.heroContainer}>
      <motion.div 
        className={styles.contentWrapper}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Main Hero Section */}
        <div className={styles.heroMainSection}>
          <div className={styles.heroContent}>
            <motion.h1 
              className={styles.mainTitle}
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              Transform Your Coding Journey
            </motion.h1>
            <motion.p 
              className={styles.heroSubtitle}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Learn, Build, and Innovate with Cutting-Edge Programming Skills
            </motion.p>
            
            {/* Coding Resources Section */}
            <div className={styles.codingResourcesGrid}>
              {codingResources.map((resource, index) => (
                <motion.div 
                  key={index} 
                  className={styles.resourceCard}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image 
                    src={resource.icon} 
                    alt={resource.title} 
                    width={50} 
                    height={50} 
                    className={styles.resourceIcon}
                  />
                  <h3>{resource.title}</h3>
                  <p>{resource.description}</p>
                  <div className={styles.resourceMeta}>
                    <span>⏱️ {resource.duration}</span>
                    <span>🚦 {resource.difficulty}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Call to Action Buttons */}
            <div className={styles.ctaButtonGroup}>
              <motion.button
              
                className={styles.primaryCta}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                    <Link href="/signUp" >Start Learning</Link>

              </motion.button>
              <motion.button 
                className={styles.secondaryCta}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Paths
              </motion.button>
            </div>
          </div>

          {/* Code Snippet Visualization */}
          <div className={styles.codeVisualizationSection}>
            {codeSnippets.map((snippet, index) => (
              <motion.div
                key={index}
                className={`${styles.codeSnippetCard} ${index === activeCodeSnippet ? styles.activeSnippet : ''}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ 
                  opacity: index === activeCodeSnippet ? 1 : 0.5, 
                  scale: index === activeCodeSnippet ? 1 : 0.9 
                }}
                transition={{ duration: 0.5 }}
              >
                <div className={styles.codeHeader}>
                  <Image 
                    src={snippet.icon} 
                    alt={`${snippet.language} icon`} 
                    width={30} 
                    height={30} 
                  />
                  <span>{snippet.language} Example</span>
                </div>
                <pre className={styles.codeContent}>
                  <code>{snippet.code}</code>
                </pre>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Coding Environment Showcase */}
        <div className={styles.codingEnvironment}>
          <h2>Your Coding Workspace</h2>
          <div className={styles.environmentGrid}>
            <div className={styles.environmentCard}>
              <Image 
                src="/ids.png" 
                alt="Integrated Development Environment" 
                width={80} 
                height={80} 
              />
              <h3>Modern IDEs</h3>
              <p>Professional-grade development environments</p>
            </div>
            <div className={styles.environmentCard}>
              <Image 
                src="/cloud-removebg-preview.png" 
                alt="Cloud Development" 
                width={80} 
                height={80} 
              />
              <h3>Cloud Coding</h3>
              <p>Develop anywhere, anytime with cloud platforms</p>
            </div>
            <div className={styles.environmentCard}>
              <Image 
                src="/tool.jpg" 
                alt="Collaborative Coding" 
                width={80} 
                height={80} 
              />
              <h3>Collaborative Tools</h3>
              <p>Real-time collaboration and version control</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  

      {/* Testimonial Section */}
      <div className={styles.testimonialSection}>
        <h2 className={styles.testimonialHeading}>Success Stories</h2>
        <TestimonialCarousel />

      </div>
      </motion.div>
    </div>
  );
};

export default Hero;