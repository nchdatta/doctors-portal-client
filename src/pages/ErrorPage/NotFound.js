import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="grid h-screen bg-white place-content-center">
            <h1 className="tracking-widest text-gray-500 uppercase">404 | Not Found</h1>
            <Link to='/' className="btn btn-info rounded-sm btn-sm mt-2 text-gray-700">Back home</Link>
        </div>

    );
};

export default NotFound;