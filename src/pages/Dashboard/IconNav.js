import React from 'react';
import { NavLink } from 'react-router-dom';

const IconNav = ({ to, name, icon }) => {
    return (
        <NavLink to={to} className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <img src={icon} alt={name} className="w-5 h-5" />
            <span className="flex-1 ml-3 whitespace-nowrap">{name}</span>
        </NavLink>
    );
};

export default IconNav;