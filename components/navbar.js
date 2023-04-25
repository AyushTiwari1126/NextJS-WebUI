import React from 'react'
import Link from 'next/link'

const navbar = () => {
    return (
        <ul>
            <li>
                <Link href="/home">
                    <a>Home</a>
                </Link>
            </li>
            <li>
                <Link href="/services">
                    <a>Services</a>
                </Link>
            </li>
            <li>
                <Link href="/about">
                    <a>About</a>
                </Link>
            </li>
            <li>
                <Link href="/contactus">
                    <a>Contact Us</a>
                </Link>
            </li>
        </ul>
    )
}

export default navbar