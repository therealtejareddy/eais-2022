import Link from 'next/link'
import React, { useRef, useState } from 'react'
import Image from 'next/image'
import navStyle from './navbar.module.css' 

function NavBar() {
    const navRef = React.useRef(null);
    const [navbarOpen, setNavbarOpen] = useState(false);
    const openNavbar = () => {
        if(navbarOpen) {
            navRef.current.classList.remove(navStyle.navbarOpen);
            setNavbarOpen(false);
        } else {
            navRef.current.classList.add(navStyle.navbarOpen);
            setNavbarOpen(true);
        }
    }

    return (
        <div>
            <nav className={navStyle.nav}>
                <Link href="/"><a><Image src="/images/logo.png" alt="" width="90" height="90"/></a></Link>
                <div ref={navRef} className={navStyle.linksrd}>
                <ul>
                    <li><Link href="/"><a>Home</a></Link></li>
                    <li><Link href="/special_session"><a>Session Organizers</a></Link></li>
                    <li><Link href="/topics"><a>Topics</a></Link></li>
                    <li><Link href="/dates"><a>Dates</a></Link></li>
                    <li><Link href="/submission"><a>Submission</a></Link></li>
                </ul>
                </div>
                <div className={navStyle.rd} onClick={() => openNavbar()}></div>
            </nav>
        </div>
    )
}

export default NavBar
