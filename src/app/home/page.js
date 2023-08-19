'use client'
import Header from "@/components/Header";
import styles from './page.module.scss';
import Tag from "@/components/Tag";
import { useEffect, useState } from "react";
import Card from "@/components/Card";
import ProtectedRoute from "@/hoc/ProtectedRoute";
import { useRouter } from "next/navigation";
import { BASE_URL } from "@/http";
import { categories } from "@/data/categories";
import { useServices } from "@/hooks/useServices";

const Home = () => {
    const router = useRouter();
    const { services, getServices, saveService } = useServices();
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [filteredListings, setFilteredListings] = useState([]);

    useEffect(() => {
        getServices();
    }, [])

    useEffect(() => {
        if (selectedCategory) {
            const filtered = services.filter(item => String(item?.category) === String(selectedCategory));
            setFilteredListings(filtered);
        } else {
            setFilteredListings(services);
        }
    }, [selectedCategory, services])

    const onFavorite = (e, service) => {
        e.stopPropagation();
        saveService(service);
    }

    return (
        <div className={styles.homeContainer}>
            <Header />

            <h2 className={styles.title}>Available Listings</h2>

            <div className={styles.tagRow}>
                <Tag name="All" onSelect={() => setSelectedCategory(null)} selected={!selectedCategory} />
                {categories.map(tag => (
                    <Tag 
                        key={tag.value} 
                        name={tag.label}
                        onSelect={() => setSelectedCategory(tag.value)} 
                        selected={selectedCategory === tag.value} 
                    />
                ))}
            </div>

            <div className={styles.listings}>
                {filteredListings.map(item => (
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

                {!filteredListings?.length && (
                    <p className={styles.notFound}>No matches found.</p>
                )}
            </div>
    
        </div>
    )
}

export default ProtectedRoute(Home);