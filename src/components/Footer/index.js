'use client'
import Link from 'next/link';
import Button from '../Button';
import styles from './styles.module.scss'
import { useContext } from 'react';
import { ModalContext } from '@/app/providers';

function Footer() {
    const {setModalOpen} = useContext(ModalContext);

    return (
        <div className={styles.footer}>
            <div className={styles.footerCtaLayout}>
                <div className={styles.footerCta}>
                    <div>
                        <h3>Sign up now to see our latest listings</h3>
                        <p>Create an account with us and find the fun.</p>
                    </div>

                    <Button onClick={() => setModalOpen('signup')}>Create account</Button>
                </div>
            </div>

            <div className={styles.footerInfo}>
                <div className={styles.content}>
                    <div className={styles.footerDescription}>
                        <p>Listings from different fields - from furnitures to books and electronics. Sign up to see all the listings and find the best match for you.</p>
                        <p className={styles.copyright}>© 2023 Listicle</p>
                    </div>

                    <div className={styles.footerLinks}>
                        <p className={styles.footerHeader}>Engage</p>

                        <p onClick={() => setModalOpen('login')} className={styles.footerLink}>Sign in</p>
                        <Link href='/faq'>
                            <p className={styles.footerLink}>FAQ</p>
                        </Link>
                        <Link href='/#about'>
                            <p className={styles.footerLink}>About Us</p>
                        </Link>
                    </div>

                    <div className={styles.footerLinks}>
                        <p className={styles.footerHeader}>Earn Money</p>

                        <a href="https://google.com" target='_blank'>
                            <p className={styles.footerLink}>Affiliate</p>
                        </a>
                        <a href="https://google.com" target='_blank'>
                            <p className={styles.footerLink}>Become Partner</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;