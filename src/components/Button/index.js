'use client'
import styles from './styles.module.scss';

function Button({ children, className, onClick, disabled }) {
    return (
        <div onClick={onClick} className={`${styles.button} ${disabled ? styles.disabled : ''} ${className}`}>
            <h4>{children}</h4>
        </div>
    )
}

export default Button;