import { UserContext } from "@/app/providers"
import { AUTH_TOKEN } from "@/http/auth";
import { useContext, useEffect } from "react"

export const useUser = () => {
    const { authenticated, setAuthenticated } = useContext(UserContext);

    useEffect(() => {
        const authToken = localStorage.getItem(AUTH_TOKEN);

        setAuthenticated(!!authToken)
    }, [])

    const authenticate = (token) => {
        localStorage.setItem(AUTH_TOKEN, token);
        setAuthenticated(true);
    }

    const logout = () => {
        localStorage.removeItem(AUTH_TOKEN);
        setAuthenticated(false);
    };

    return ({
        authenticated,
        authenticate,
        logout,
    })
}