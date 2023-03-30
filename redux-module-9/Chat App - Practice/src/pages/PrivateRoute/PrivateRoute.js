import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { useNavigate } from 'react-router';
import { useAuth } from '../../components/hooks/useAuth';

const PrivateRoute = ({children}) => {
    const auth = useAuth();
    const navigate = useNavigate();

    return auth ? children : <Navigate to='/'></Navigate>
};

export default PrivateRoute;