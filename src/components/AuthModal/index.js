'use client'
import { useContext, useState } from 'react';
import styles from './styles.module.scss';
import { ModalContext } from '@/app/providers';
import Image from 'next/image';
import Input from '../Input';
import Button from '../Button';
import Checkbox from '../Checkbox';
import { register } from '@/http/auth';

function Modal() {
    const {modalOpen, setModalOpen} = useContext(ModalContext);
    const [agreed, setAgreed] = useState(false);
    const [formValues, setFormValues] = useState({});

    const onInputChange = (key, e) => {
        setFormValues(values => ({
            ...values,
            [key]: e.target.value
        }))
    }

    const handleSignup = async () => {
        try {
            const res = await register(formValues);
            console.log('res :>> ', res);
        } catch (e) {
            console.log('e :>> ', e);
        }
    }
    
    const modalContent = {
        login: {
            title: 'Sign in',
            content: (
                <div>
                    <form className={styles.form}>
                        <Input name="email" label="Email" onChange={onInputChange} value={formValues.email} />
                        <Input name="password" label="Password" type="password" onChange={onInputChange} value={formValues.password} />

                        <Button className={styles.button}>Login</Button>
                    </form>

                    <p className={styles.footerText}>
                        Don&apos;t have an account? 
                        <b onClick={() => setModalOpen('signup')}> Create an account.</b>
                    </p>
                </div>
            )
        },
        signup: {
            title: 'Create an account',
            content: (
                <div>
                    <form className={styles.form}>
                        <Input name="name" label="Name" onChange={onInputChange} value={formValues.name} />
                        <Input name="email" label="Email" onChange={onInputChange} value={formValues.email} />
                        <Input name="password" label="Password" type="password" onChange={onInputChange} value={formValues.password} />

                        <Checkbox checked={agreed} onCheck={setAgreed}>
                            <p className={styles.agreeText}>
                                I agree with 
                                <a href='https://google.com' target='_blank'> Terms </a> 
                                & <a href='https://google.com' target='_blank'> Privacy</a> </p>
                        </Checkbox>

                        <Button className={styles.button} onClick={handleSignup}>Create account</Button>
                    </form>

                    <p className={styles.footerText}>
                        Already have an account?
                        <b onClick={() => setModalOpen('login')}> Sign in.</b>
                    </p>
                </div>
            )
        }
    }

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

                {modalContent[modalOpen]?.content}
            </div>
        </div>
    )
}

export default Modal;