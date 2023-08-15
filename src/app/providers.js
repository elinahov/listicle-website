'use client'
import { createContext, useState } from "react";

export const ModalContext = createContext()

const Providers = ({children}) => {
    const [modalOpen, setModalOpen] = useState(null);

    return (
        <ModalContext.Provider value={{ modalOpen, setModalOpen }}>
            {children}
        </ModalContext.Provider>
    )
}

export default Providers;