import { useUser } from "@/hooks/useUser"
import { useRouter } from "next/navigation";
import { useEffect } from "react"

const ProtectedRoute = (WrappedComponent) => {
    const ProtectedRouteComponent = () => {
        const router = useRouter();
        const { authenticated } = useUser();
    
        useEffect(() => {
            if (authenticated === false) {
                router.push('/')
            }
        }, [authenticated])

        if (authenticated === null) {
            return <p>Loading...</p>
        }

        if (authenticated === true) {
            return <WrappedComponent />
        }
    
        return <p>Access Denied</p>
    }

    return ProtectedRouteComponent;
}

export default ProtectedRoute;