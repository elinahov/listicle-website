import Button from '../Button';
import styles from './styles.module.scss'

function Footer() {

    return (
        <div className={styles.footer}>
            <div className={styles.footerCtaLayout}>
                <div className={styles.footerCta}>
                    <div>
                        <h3>Sign up now to see our latest listings</h3>
                        <p>Create an account with us and find the fun.</p>
                    </div>

                    <Button>Create account</Button>
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

                        <p className={styles.footerLink}>Sign in</p>
                        <p className={styles.footerLink}>FAQ</p>
                        <p className={styles.footerLink}>About Us</p>
                    </div>

                    <div className={styles.footerLinks}>
                        <p className={styles.footerHeader}>Earn Money</p>

                        <p className={styles.footerLink}>Affiliate</p>
                        <p className={styles.footerLink}>Become Partner</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;