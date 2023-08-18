import { UserContext } from "@/app/providers"
import { AUTH_TOKEN } from "@/http/auth";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react"

export const useUser = () => {
    const router = useRouter();
    const { authenticated, setAuthenticated } = useContext(UserContext);

    useEffect(() => {
        const authToken = localStorage.getItem(AUTH_TOKEN);

        setAuthenticated(!!authToken)
    }, [])

    const authenticate = (token) => {
        localStorage.setItem(AUTH_TOKEN, token);
        setAuthenticated(true);
        router.push('/home')
    }

    const logout = () => {
        localStorage.removeItem(AUTH_TOKEN);
        setAuthenticated(false);
        router.push('/')
    };

    return ({
        authenticated,
        authenticate,
        logout,
    })
}