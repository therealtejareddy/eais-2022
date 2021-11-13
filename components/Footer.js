import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'

function Footer() {
    return (
        <div className={styles.footerItems}>
            <div className={styles.footerItem}>
                <h3>Academic Matters</h3>
                <p>Prof. George Angelos Papadopoulos</p>
                <p>University of Cyprus</p>
                <p>Phone:(+357) 22 892 693</p>
                <p>Email: <a href="mailto:george@cs.ucy.ac.cy">george@cs.ucy.ac.cy</a></p>
            </div>
            <div className={styles.footerItem}>
                <h3>Conference Arrangements</h3>
                <p>Easy Conferences</p>
                <a href="http://www.easyconferences.eu">www.easyconferences.eu</a>
                <p>Phone:(+357) 22 591900</p>
                <p>Fax:(+357) 22 591700</p>
                <p>Email: <a href="mailto:info@easyconferences.eu">info@easyconferences.eu</a></p>
            </div>
            <div className={styles.footerItem}>
                <h3>Organiser</h3>
                <div className={styles.image}><Image src="/images/org_1.png" alt="" width="150" height="150" /></div>
            </div>
            <div className={styles.footerItem}>
                <Image src="/images/org_2.png" alt="" width="190" height="90" className={styles.image} style={{display: 'block'}}/>
                <div>
                <Image src="/images/org_3.png" alt="" width="190" height="90" className={styles.image}/>
                </div>
              
            </div>
        </div>
    )
}

export default Footer
