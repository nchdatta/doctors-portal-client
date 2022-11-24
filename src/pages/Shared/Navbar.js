import React from 'react';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../utilities/firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth);
    const [signOut] = useSignOut(auth);
    const menus =
        <>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/appointment'>Appointment</Link></li>
            <li><Link to='/reviews'>Reviews</Link></li>
            <li><Link to='/dashboard'>Dashboard</Link></li>
            <li>{user ? <Link onClick={async () => {
                await signOut();
                localStorage.removeItem('accessToken');
            }}>Sign Out</Link> : <Link to='/login'>Login</Link>}</li>
        </>;
    return (
        <nav className='shadow-sm'>
            <div className="navbar bg-base-100 text-neutral px-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menus}
                        </ul>
                    </div>
                    <Link to={'/'} className="btn btn-ghost normal-case text-xl">Doctors Portal</Link>
                </div>
                <div className="navbar-end">
                    <label htmlFor="side-dashboard" className="btn btn-ghost drawer-button lg:hidden"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menus}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;