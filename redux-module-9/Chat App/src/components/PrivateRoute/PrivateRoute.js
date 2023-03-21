import { Navigate } from "react-router";
import { useAuth } from "../../hooks/useAuth";


export function PrivateRoute({children}){
    
    const auth = useAuth();
    return auth ? children : <Navigate to='/'></Navigate>
}