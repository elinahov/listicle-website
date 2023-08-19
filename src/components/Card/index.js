'use client'
import styles from './styles.module.scss'
import Image from 'next/image';

function Card({ title, subtitle = 'Default title', onClick, onActionClick, image, isFavorite, isDeletable }) {
    const icon = isDeletable ? '/delete.png' : isFavorite ? '/heart_filled.png' : '/heart.png';

    return (
        <div onClick={onClick} className={styles.card}>
            <div className={styles.imageContainer}>
                <Image className={styles.image} src={image} alt={title} width={200} height={200} />
            </div>
            <h2>{title}</h2>
            <p>{subtitle}</p>

            <span className={styles.action} onClick={onActionClick}>
                <Image src={icon} width={20} height={20} alt="Card action" />
            </span>
        </div>
    )
}

export default Card;