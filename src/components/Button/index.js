'use client'
import styles from './styles.module.scss';

function Button({ children, className, onClick }) {
    return (
        <div onClick={onClick} className={`${styles.button} ${className}`}>
            <h4>{children}</h4>
        </div>
    )
}

export default Button;