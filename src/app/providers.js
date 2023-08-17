'use client'
import { createContext, useState } from "react";

export const ModalContext = createContext()
export const ErrorContext = createContext()

const Providers = ({children}) => {
    const [modalOpen, setModalOpen] = useState(null);
    const [error, setError] = useState(null);

    return (
        <ModalContext.Provider value={{ modalOpen, setModalOpen }}>
            <ErrorContext.Provider value={{ error, setError }}>
                {children}
            </ErrorContext.Provider>
        </ModalContext.Provider>
    )
}

export default Providers;