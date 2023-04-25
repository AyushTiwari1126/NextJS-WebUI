import React from 'react'
import styles from '@/styles/Home.module.css'

const about = () => {
    return (
        <>
            <h1>This is our About page</h1>

            <div className={styles.mygrid}>
                <a
                    href="https://www.wowfinstack.com/wowcard"
                    className={styles.card}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2>WOW Finstack</h2>
                    <p>WOWfinstack is making its entrance with a single-minded aim to completely disrupt and reinvent the concept and practice of digital payments, along with other key areas of financial technology.</p>
                </a>
            </div>
        </>
    )
}

export default about