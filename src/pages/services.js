import React from 'react'
import styles from '@/styles/Home.module.css'
// import styles from '@/styles/Services.module.css'

const services = () => {
    return (
        <>
            <h1 className={styles.ourservices}>Our services</h1>
            <br />
            <div className={styles.grid}>
            <a
                href="https://www.wowfinstack.com/onboarding"
                className={styles.card}
                target="_blank"
                rel="noopener noreferrer"
            >
                <h2>1. Customer Onboarding</h2>
                <p>Customer Onboarding and compliance monitoring.</p>
            </a>

            <a
                href="https://www.wowfinstack.com/wowcard"
                className={styles.card}
                target="_blank"
                rel="noopener noreferrer"
            >
                <h2>2. Card Issuing</h2>
                <p>Issue debit, credit, virtual, ewallet or loyalty cards instantly.</p>
            </a>

            <a
                href="https://www.wowfinstack.com/wowgate"
                className={styles.card}
                target="_blank"
                rel="noopener noreferrer"
            >
                <h2>3. Payment Gateway</h2>
                <p>Manage Card Transactions With Our Trusted Payment Gateway</p>
            </a>

            <a
                href="https://www.wowfinstack.com/wowpos"
                className={styles.card}
                target="_blank"
                rel="noopener noreferrer"
            >
                <h2>4. Merchant Acquiring</h2>
                <p>Provides merchants with an easy to use portal to accept eWallet payments.</p>
            </a>
            </div>
        </>
    )
}
export default services