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
      <h1><span className={styles.span}>Adaptive Learning Systems for Image Processing</span></h1>
     
     
     
      <h2 >AIM AND SCOPE OF SESSION:</h2>
   <p>
      Aim of this special session is to bring together researchers from different fields of expertise to discuss how deep learning could help analysis, modelling, simulation, and application in the Interdisciplinary domains of several innovative technologies.
            In the last few years, the technologies related to imaging, video processing, computer graphics, 3D modelling and multimedia have been greatly employed in various application areas such as detection, image analysis, image compression, face recognition etc. The continuous development of these technologies leads researchers to propose new methodologies and applications in this field. Moreover, recent image-processing and machine learning algorithms give the opportunity to process large datasets as well as images, in order to extract information and develop new analysis procedures.
            The evolution of learning algorithms is in demand today. They cover not only Information and communication technology, but also all kinds of systems in our society, including business, finance, industry, manufacture, management, and environment. Adaptive learning algorithms are going to be a game-changer for many application areas also it is going to be applied in various research-fields.
      </p>
      <div className={styles.imageSection}>
        
      </div>
    </div>
    
  )
}