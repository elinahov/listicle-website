'use client'
import Header from "@/components/Header";
import styles from './page.module.scss';
import ListItem from "@/components/ListItem";
import Button from "@/components/Button";
import { AUTH_TOKEN } from "@/http/auth";

const Settings = () => {
    const handleLogout = () => {
        localStorage.removeItem(AUTH_TOKEN);
    };

    return (
        <div className={styles.settingsContainer}>
            <Header />

            <h2 className={styles.title}>Settings</h2>

            <p className={styles.subtitle}>Helpful Links</p>
    
            <div className={styles.actionsContainer}>
                <ListItem title="My Listings" link="/home" />
                <ListItem title="Contact Us" link="https://google.com" />
                <ListItem title="Privacy Policy" link="https://google.com" />
                <ListItem title="Terms and Conditions" link="https://google.com" />

                <Button className={styles.logoutButton} onClick={handleLogout}>Log out</Button>
            </div>
        </div>
    )
}

export default Settings;