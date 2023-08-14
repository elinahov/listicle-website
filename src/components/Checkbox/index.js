import Image from 'next/image';
import styles from './styles.module.scss';

function Checkbox({ checked, onCheck, children }) {
    return (
        <div onClick={() => onCheck(!checked)} className={styles.checkboxContainer}>
            <span className={`${styles.checkbox} ${checked ? styles.checked : ''}`}>
                {checked && (
                    <Image src="/tick.png" width={12} height={9} alt={'checked'} />
                )}
            </span>
            {children}
        </div>
    )
}

export default Checkbox;