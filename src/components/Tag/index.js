'use client'
import styles from './styles.module.scss';

function Tag({ selected, onSelect, name }) {
    return (
        <div onClick={onSelect} className={`${styles.tag} ${selected ? styles.selectedTag : ''}`}>
            <p>{name}</p>
        </div>
    )
}

export default Tag;