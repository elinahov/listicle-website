'use client'
import Header from '@/components/Header';
import styles from './page.module.scss';
import { useParams } from 'next/navigation';
import { data } from '@/app/home/data';
import Image from 'next/image';

const ServiceDetails = () => {
    const params = useParams();
    const service = data.find(s => s?._id === params?.id);
    const isFavorite = service.liked;

    const onHeartClick = () => {
        console.log('hello');
    }

    return (
        <div className={styles.serviceContainer}>
            <Header />

            <div className={styles.contentContainer}>
                <div className={styles.imageContainer}>
                    <Image src={service.image} fill sizes='100vw' className={styles.image} alt={service.title} />

                    <span className={styles.action} onClick={onHeartClick}>
                        <Image src={isFavorite ? '/heart_filled.png' : '/heart.png'} width={20} height={20} alt="Card action" />
                    </span>
                </div>

                <div className={styles.content}>
                    <h2>{service.title}</h2>

                    <h3 className={styles.price}>${service.price.toLocaleString('en-US')}</h3>

                    <p>{service.description}</p>
                </div>
            </div>
        </div>
    )
}

export default ServiceDetails;