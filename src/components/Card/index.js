'use client'
import { useEffect, useState } from 'react';
import styles from './styles.module.css'

function Card({ title, subtitle = 'Default title', link = 'https://google.com' }) {
    const [clickCount, setClickCount] = useState(0);

    useEffect(() => {
        console.log(`Hello I was clicked ${clickCount} times`)
    }, [clickCount])

    const handleClick = () => {
        setClickCount((currentState) => currentState + 1)
    }

    return (
        <div onClick={handleClick} className={styles.card}>
            <h2>
                {title} <span>-&gt;</span>
            </h2>
            <p>{subtitle}</p>
            <p>Clicked count: {clickCount}</p>
        </div>
    )
}

export default Card;