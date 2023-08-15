'use client'
import Header from "@/components/Header";
import styles from './page.module.scss';
import Footer from "@/components/Footer";
import Tag from "@/components/Tag";
import { useState } from "react";

const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

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

    return (
        <div className={styles.homeContainer}>
            <Header />

            <h2>Available Listings</h2>

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
    
        </div>
    )
}

export default Home;