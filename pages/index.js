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
      <h1><span className={styles.span}>Welcome</span></h1>
      <p>IEEE EAIS 2022 will provide a working and friendly atmosphere and will be a leading international forum focusing on the discussion of recent advances,
         the exchange of recent innovations and the outline of open important future challenges in the area of Evolving and Adaptive Intelligent Systems.
        Over the past decade, this area has emerged to play an important role on a broad international level in today’s real-world applications, especially those ones with high complexity and dynamic changes.
        Its embedded modelling and learning methodologies are able to cope with real-time demands, changing operation conditions, varying environmental influences, human behaviors, knowledge expansion scenarios and drifts in online data streams.
      </p>
      <div className={styles.imageSection}>
        <Image src="/images/org_2.png" width="250" height="150px" alt="" />
        <Image src="/images/org_3.png" width="250" height="150px" alt="" />
      </div>
    </div>
  )
}