import styles from '../styles/Home.module.css'
import Image from 'next/image'
export default function Home() {
  return (
    <div>
      <HeroSection/>
      <Welcome />
    </div>
  )
}

const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
      <div>
        <h1>2022 IEEE International Conference on Evolving and Adaptive Intelligent Systems</h1>
      </div>
      <div>
        <h3>Location: Larnaca, Cyprus</h3>
        <h3>Date: May 25-27, 2022</h3>
      </div>
    </div>
  )
}

const Welcome = () => {
  return(
    <div className={styles.welcomeSection}>
      <h1><span className={styles.span}></span></h1>
   <p>
      </p>
      <div className={styles.imageSection}>
        
      </div>
    </div>
  )
}