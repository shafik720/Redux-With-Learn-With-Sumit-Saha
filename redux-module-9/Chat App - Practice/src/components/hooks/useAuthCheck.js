import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { userLoggedIn } from "../../features/auth/auhSlice";


export const useAuthCheck = () => {
    const [auth, setAuth] = useState(false);
    const dispatch = useDispatch();
    useEffect(()=>{
        const localAuthRaw = localStorage.getItem('auth');
        const localAuth = JSON.parse(localAuthRaw);
        if(localAuth?.user && localAuth?.userAccessToken){
            dispatch(userLoggedIn({
                userAccessToken : localAuth?.userAccessToken,
                user : localAuth?.user
            }))
        }
        setAuth(true);
    },[auth])
    return auth;
}