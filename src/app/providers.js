'use client'
import { setupHttp } from "@/http";
import { createContext, useEffect, useState } from "react";

export const ModalContext = createContext()
export const ErrorContext = createContext()
export const UserContext = createContext()

const Providers = ({children}) => {
    const [modalOpen, setModalOpen] = useState(null);
    const [error, setError] = useState(null);
    const [authenticated, setAuthenticated] = useState(null);

    useEffect(() => {
        setupHttp();
    }, [authenticated])

    return (
        <ModalContext.Provider value={{ modalOpen, setModalOpen }}>
            <ErrorContext.Provider value={{ error, setError }}>
                <UserContext.Provider value={{ authenticated, setAuthenticated }}>
                    {children}
                </UserContext.Provider>
            </ErrorContext.Provider>
        </ModalContext.Provider>
    )
}

export default Providers;