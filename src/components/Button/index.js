import styles from './styles.module.scss';

function Button({ children }) {
    return (
        <div className={styles.button}>
            <h4>{children}</h4>
        </div>
    )
}

export default Button;