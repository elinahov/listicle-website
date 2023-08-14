import styles from './styles.module.scss';

function Input({ label, name, placeholder = 'Type here...', type }) {
    return (
        <div className={styles.inputContainer}>
            <label className={styles.label} htmlFor={name}>{label}</label>
            <input className={styles.input} id={name} name={name} placeholder={placeholder} type={type} />
        </div>
    )
}

export default Input;