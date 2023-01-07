import React from 'react';
import { NavLink } from 'react-router-dom';

const IconNav = ({ to, name, icon }) => {
    return (
        <NavLink to={to} className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100">
            <img src={icon} alt={name} className="w-5 h-5" />
            <span className="flex-1 pl-3 whitespace-nowrap hidden lg:block">{name}</span>
        </NavLink>
    );
};

export default IconNav;