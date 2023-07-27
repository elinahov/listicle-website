'use client'
import styles from './styles.module.css'
import Image from 'next/image';

function Header({ actions }) {
    return (
        <div className={styles.header}>
            {/* Logo */}
            <div className={styles.logoContainer}>
                <Image src='/logo.png' width={40} height={40} alt='Listicle Logo' />
                <h2>Listicle</h2>
            </div>

            {/* Actions */}
            <div className={styles.actionsContainer}>
                {actions.map(action => (
                    <h3 key={action.title} className={styles.action}>{action.title}</h3>
                ))}
            </div>
            
            {/* CTA */}
            <div className={styles.cta}>
                <h3>Sign in</h3>
                <span>
                    <h3>Create an account</h3>
                </span>
            </div>
        </div>
    )
}

export default Header;