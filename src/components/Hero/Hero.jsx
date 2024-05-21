import React from 'react'
import Image from 'next/image'
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <div>
      <div className={styles.slider}>
        <div className={styles.description}>
          <h1>
            Hey <span>👋</span> <br />Welcome  to <br />Coding Jojo
          </h1>
          <p>
            Learn on your schedule with Coding Jojo from any device. <br /> we take you from the fundamentals and concepts of web devlopment <br /> modeling all the way through a number of best practices and techniques <br /> that you'll need to build good web-designs and you'll find many examples <br />that clearly demonstrate the key concepts and techniques covered throughout <br />the courses. Happy coding...!!!
          </p>
          <button className={styles.btn}>Start Learning</button>
        </div>
        <div className={styles.videoContainer}>
          <iframe width="560"
            height="315"
            src="https://www.youtube.com/embed/viHILXVY_eU?si=YME_30o9WD3fSWBo"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; loopback"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen></iframe>
        </div>
      </div>
    </div>
  )
}

export default Hero