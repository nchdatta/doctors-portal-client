import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="side-dashboard" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col bg-gray-100 p-7">
                    {/* Dashboard content here */}
                    <Outlet />

                </div>
                <div className="drawer-side">
                    <label htmlFor="side-dashboard" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-50 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to='/dashboard'>My Appointments</Link></li>
                        <li><Link to='/dashboard/appointment-history'>Appointment History</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;