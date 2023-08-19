'use client'
import Header from "@/components/Header";
import styles from './page.module.scss';
import { useEffect, useState } from "react";
import Card from "@/components/Card";
import ProtectedRoute from "@/hoc/ProtectedRoute";
import { useRouter } from "next/navigation";
import { BASE_URL } from "@/http";
import { useServices } from "@/hooks/useServices";

const Favorites = () => {
    const router = useRouter();
    const { services, getServices, saveService } = useServices();
    const [favoriteListings, setFavoriteListings] = useState([]);

    useEffect(() => {
        getServices();
    }, [])

    useEffect(() => {
        const filtered = services.filter(item => item?.liked);
        setFavoriteListings(filtered);
    }, [services])

    const onFavorite = (e, service) => {
        e.stopPropagation();
        saveService(service);
    }

    return (
        <div className={styles.favoritesContainer}>
            <Header />

            <h2 className={styles.title}>Favorite Listings</h2>

            <div className={styles.listings}>
                {favoriteListings.map(item => (
                    <Card
                        key={item._id}
                        title={item.title}
                        subtitle={`$${item.price.toLocaleString('en-US') }`}
                        image={`${BASE_URL}/${item.image?.path}`}
                        isFavorite={item?.liked}
                        onClick={() => {
                            router.push(`/services/${item?._id}`)
                        }}
                        onActionClick={(e) => onFavorite(e, item)}
                    />
                ))}

                {!favoriteListings?.length && (
                    <p className={styles.notFound}>No favorite items found.</p>
                )}
            </div>
    
        </div>
    )
}

export default ProtectedRoute(Favorites);