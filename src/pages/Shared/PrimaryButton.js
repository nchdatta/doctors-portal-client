import React from 'react';
import { Link } from 'react-router-dom';

const PrimaryButton = ({ to, children }) => {
    return (
        <Link className="btn btn-primary border-0 bg-gradient-to-r from-primary to-secondary text-white"
            to={to}>{children}</Link>
    );
};

export default PrimaryButton;