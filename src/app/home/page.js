'use client'
import Header from "@/components/Header";
import styles from './page.module.scss';
import Footer from "@/components/Footer";
import Tag from "@/components/Tag";
import { useState } from "react";
import Card from "@/components/Card";
import { data } from "./data";

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
                {data.map(item => (
                    <Card
                        key={item._id}
                        title={item.title}
                        subtitle={item.price}
                        image={item.image}
                        onClick={() => console.log('card click')}
                        onActionClick={(e) => {
                            e.stopPropagation();
                            console.log('action click')
                        }}
                    />
                ))}
            </div>
    
        </div>
    )
}

export default Home;