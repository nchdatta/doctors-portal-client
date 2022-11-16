import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../utilities/firebase.init';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();

    if (loading) {
        return <div><svg class="animate-spin h-8 w-8 bg-primary mx-auto" viewBox="0 0 24 24"></svg></div>;
    }
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace />;
    }
    return children;
};

export default RequireAuth;