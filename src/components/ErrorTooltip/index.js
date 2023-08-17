'use client'
import { useContext, useEffect } from 'react';
import styles from './styles.module.scss';
import { ErrorContext } from '@/app/providers';

function ErrorTooltip() {
    const { error, setError } = useContext(ErrorContext);

    useEffect(() => {
        if (error) {
            setTimeout(() => {
                setError(null);
            }, 3000);
        }
    }, [error])

    if (!error) {
        return null;
    }

    return (
        <div className={styles.errorTooltip}>
            <h4>{error}</h4>
        </div>
    )
}

export default ErrorTooltip;