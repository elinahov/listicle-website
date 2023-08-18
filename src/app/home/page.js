'use client'
import Header from "@/components/Header";
import styles from './page.module.scss';
import Tag from "@/components/Tag";
import { useEffect, useState } from "react";
import Card from "@/components/Card";
import { data } from "./data";
import ProtectedRoute from "@/hoc/ProtectedRoute";

const tags = [
    {
        label: 'Sofas',
        key: 'sofas'
    },
    {
        label: 'Chairs',
        key: 'chairs'
    },
    {
        label: 'Lamps',
        key: 'lamps'
    },
]

const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [filteredListings, setFilteredListings] = useState([]);

    useEffect(() => {
        if (selectedCategory) {
            const filtered = data.filter(item => item?.category === selectedCategory);
            setFilteredListings(filtered);
        } else {
            setFilteredListings(data);
        }
    }, [selectedCategory])

    return (
        <div className={styles.homeContainer}>
            <Header />

            <h2 className={styles.title}>Available Listings</h2>

            <div className={styles.tagRow}>
                <Tag name="All" onSelect={() => setSelectedCategory(null)} selected={!selectedCategory} />
                {tags.map(tag => (
                    <Tag 
                        key={tag.key} 
                        name={tag.label}
                        onSelect={() => setSelectedCategory(tag.key)} 
                        selected={selectedCategory === tag.key} 
                    />
                ))}
            </div>

            <div className={styles.listings}>
                {filteredListings.map(item => (
                    <Card
                        key={item._id}
                        title={item.title}
                        subtitle={`$${item.price.toLocaleString('en-US') }`}
                        image={item.image}
                        onClick={() => console.log('card click')}
                        onActionClick={(e) => {
                            e.stopPropagation();
                            console.log('action click')
                        }}
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