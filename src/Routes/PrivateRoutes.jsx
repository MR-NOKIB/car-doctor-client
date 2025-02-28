import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
    const location = useLocation();
    const { user, loading } = useContext(AuthContext);
    if(loading){
        return <progress className="progress w-56" value={0} max="100"></progress>;
    }

    if (user) {
        return children;
    }
    return <Navigate to='/login' state={{from : location}} replace></Navigate>
};

export default PrivateRoutes;