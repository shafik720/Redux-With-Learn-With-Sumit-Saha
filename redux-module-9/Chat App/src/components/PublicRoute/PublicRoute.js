import { Navigate } from "react-router";
import { useAuth } from "../../hooks/useAuth";


export function PublicRoute({children}){
    const auth = useAuth();
    return !auth ? children : <Navigate to="/inbox"></Navigate>
}