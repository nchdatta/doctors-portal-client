import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import useRole from '../../hooks/useRole';
import auth from '../../utilities/firebase.init';
import PageTitle from '../Shared/PageTitle';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [role] = useRole(user);

    return (
        <div className='pt-12'>
            <PageTitle title="Dashboard" />
            <div className="drawer drawer-mobile">
                <input id="side-dashboard" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col bg-gray-100 p-7">
                    {/* Dashboard content here */}
                    <Outlet />

                </div>
                <div className="drawer-side">
                    <label htmlFor="side-dashboard" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-50 bg-base-100 text-base-content overflow-y-auto">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to='/dashboard'>My Appointments</Link></li>
                        <li><Link to='/dashboard/appointment-history'>Appointment History</Link></li>
                        {role === 'admin' &&
                            <>
                                <li><Link to='/dashboard/users'>Users</Link></li>
                                <li><Link to='/dashboard/doctors'>Doctors</Link></li>
                                <li><Link to='/dashboard/add-doctor'>Add Doctor</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;