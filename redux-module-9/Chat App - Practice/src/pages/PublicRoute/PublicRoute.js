import React from 'react';
import { Navigate } from 'react-router';
import { useAuth } from '../../components/hooks/useAuth';

const PublicRoute = ({children}) => {
    const auth = useAuth() ; 
    return auth ? <Navigate to="/inbox"></Navigate> : children ;
};

export default PublicRoute;