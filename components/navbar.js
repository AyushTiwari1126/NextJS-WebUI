import React from 'react'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/services">Our Services</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/contactus">Contact Us</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar