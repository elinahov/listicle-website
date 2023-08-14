import styles from './styles.module.scss';

function Button({ children, className }) {
    return (
        <div className={`${styles.button} ${className}`}>
            <h4>{children}</h4>
        </div>
    )
}

export default Button;