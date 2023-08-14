'use client'
import useIsMobile from '@/hooks/useIsMobile';
import styles from './styles.module.scss'
import Image from 'next/image';
import { useContext, useState } from 'react';
import { ModalContext } from '@/app/providers';

function Header({ actions }) {
    const { setModalOpen } = useContext(ModalContext);
    const [showMenu, setShowMenu] = useState(false);
    const { isMobile } = useIsMobile();

    const onMenuClick = () => {
        setShowMenu(s => !s)
    }

    return (
        <div className={styles.header}>
            {/* Logo */}
            <div className={styles.logoContainer}>
                <Image src='/logo.png' width={40} height={40} alt='Listicle Logo' />
                <h2>Listicle</h2>
            </div>

            {isMobile === null ? (
                <div />
            ) : isMobile ? (
                <Image onClick={onMenuClick} src="/menu.png" width={40} height={40} alt="Menu" />
            ) : (
                <>
                    {/* Actions */ }
                    <div className={styles.actionsContainer}>
                        {actions.map(action => (
                            <h3 key={action.title} className={styles.action}>{action.title}</h3>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className={styles.cta}>
                        <h3 onClick={() => setModalOpen('login')}>Sign in</h3>
                        <span onClick={() => setModalOpen('signup')}>
                            <h3>Create an account</h3>
                        </span>
                    </div>
                </>
            )}
            
            {showMenu && (
                <div className={styles.mobileMenu}>
                    <div className={styles.actionsContainer}>
                        {actions.map(action => (
                            <h3 key={action.title} className={styles.action}>{action.title}</h3>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className={styles.cta}>
                        <h3 className={styles.signin} onClick={() => setModalOpen('login')}>Sign in</h3>
                        <span onClick={() => setModalOpen('signup')}>
                            <h3>Create an account</h3>
                        </span>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Header;