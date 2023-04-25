import React from 'react'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'


const home = () => {
    return (
        <>
        <h1>This is our Home Page</h1>
        <div className={styles.corner}>
            <Image
                className={styles.logo}
                src="/630c71465b66cd2f33699152_wowfinstack-logo-white.svg"
                width={180}
                height={37}
                priority
            />
        </div>
        </>
    )
}

export default home