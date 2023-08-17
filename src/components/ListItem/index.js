'use client'
import Image from 'next/image';
import styles from './styles.module.scss';
import Link from 'next/link';

function ListItem({ title, link }) {
    return (
        <Link href={link} target={link.includes('http') ? '_blank' : '_self'}>
            <div className={styles.listItem}>
                <h4>{title}</h4>

                <Image src="/arrow.png" width={24} height={24} alt="Arrow" />
            </div>
        </Link>
    )
}

export default ListItem;