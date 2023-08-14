'use client'
import { useContext } from 'react';
import styles from './styles.module.scss';
import { ModalContext } from '@/app/providers';
import Image from 'next/image';

const modalContent = {
    login: {
        title: 'Sign in'
    },
    signup: {
        title: 'Create an account'
    }
}

function Modal({ children }) {
    const {modalOpen, setModalOpen} = useContext(ModalContext)

    console.log('modalOpen :>> ', modalOpen);
    if (!modalOpen) {
        return null;
    }

    return (
        <div className={styles.modal}>
            <div className={styles.content}>
                <Image 
                    onClick={() => setModalOpen(null)} 
                    className={styles.close} 
                    alt="Clsoe modal"
                    src={'/close.png'} 
                    width={32} 
                    height={32} 
                />
                <h2 className={styles.title}>{modalContent[modalOpen]?.title}</h2>

                {children}
            </div>
        </div>
    )
}

export default Modal;