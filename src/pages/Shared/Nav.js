import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ menu }) => {
    const { to, name } = menu;
    return (
        <li>
            <Link to={to}>{name}</Link>
        </li>
    );
};

export default Nav;