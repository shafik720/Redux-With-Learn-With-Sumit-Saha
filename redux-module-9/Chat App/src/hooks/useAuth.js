import { useState } from "react";
import { useSelector } from "react-redux";


export function useAuth () {
    const isAuth = useSelector(state => state.auth) ;

    if(isAuth?.accessToken && isAuth?.user){
        return true;
    }else{
        return false;
    }
}