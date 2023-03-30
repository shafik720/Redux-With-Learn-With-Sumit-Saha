import { useSelector } from "react-redux"

export const useAuth = () => {
    const authState = useSelector(state => state.auth);
    const {userAccessToken, user} = authState ;
    return userAccessToken &&  user ? true : false;
}