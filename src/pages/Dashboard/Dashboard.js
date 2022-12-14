import React, { Suspense } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Route, Routes } from 'react-router-dom';
import useRole from '../../hooks/useRole';
import auth from '../../utilities/firebase.init';
import Loading from '../Shared/Loading';
import PageTitle from '../Shared/PageTitle';
import RequireAdmin from '../Shared/RequireAdmin';
import RequireDoctor from '../Shared/RequireDoctor';
import IconNav from './IconNav';
import Profile from './Profile';
const AddDoctor = React.lazy(() => import('./AddDoctor'));
const AllAppointments = React.lazy(() => import('./AllAppointments'));
const AppointmentHistory = React.lazy(() => import('./AppointmentHistory'));
const Appointments = React.lazy(() => import('./Appointments'));
const Doctors = React.lazy(() => import('./Doctors'));
const MyAppointments = React.lazy(() => import('./MyAppointments'));
const MyDashboard = React.lazy(() => import('./MyDashboard'));
const UpdatePassword = React.lazy(() => import('./UpdatePassword'));
const Users = React.lazy(() => import('./Users'));


const profileIcon = <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>;
const dashboardIcon = <svg aria-hidden="true" className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>;


const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [role] = useRole(user);


    return (
        <div className='flex flex-col lg:flex-row min-h-screen'>
            <PageTitle title="Dashboard" />
            {/* sidebar area  */}
            <aside className="w-full lg:w-1/5" aria-label="Sidebar">
                <div className="overflow-y-auto lg:min-h-screen py-4 px-2 bg-gray-50 rounded dark:bg-gray-800 flex flex-row lg:flex-col flex-wrap gap-2">
                    <IconNav to='/dashboard' name='Profile' icon={profileIcon} />
                    {role === 'Admin' &&
                        <IconNav to='/dashboard/my-dashboard' name='Dashboard' icon={dashboardIcon} />}
                    {role === 'User' || role === 'Admin' ?
                        <>
                            <IconNav to='/dashboard/my-appointments' name='My Appointments' icon={dashboardIcon} />
                            <IconNav to='/dashboard/appointment-history' name='Appointment History' icon={dashboardIcon} />
                        </> : ''}
                    {role === 'Admin' &&
                        <>
                            <IconNav to='/dashboard/all-appointments' name='All Appointments' icon={dashboardIcon} />
                            <IconNav to='/dashboard/users' name='Users' icon={dashboardIcon} />
                            <IconNav to='/dashboard/doctors' name='Doctors' icon={dashboardIcon} />
                            <IconNav to='/dashboard/add-doctor' name='Add Doctor' icon={dashboardIcon} />
                        </>}
                    {role === 'Doctor' &&
                        <IconNav to='/dashboard/appointments' name='appointments' icon={dashboardIcon} />}
                </div>
            </aside>

            {/* Main content area  */}
            <div className='w-full lg:w-4/5 p-3 lg:p-5'>
                <Routes>
                    <Route index element={<Profile />} />
                    <Route path='profile/change-password' element={<UpdatePassword />} />
                    <Route path='my-dashboard' element={<RequireAdmin><Suspense fallback={<Loading />}><MyDashboard /></Suspense></RequireAdmin>} />
                    <Route path='my-appointments' element={<Suspense fallback={<Loading />}><MyAppointments /></Suspense>} />
                    <Route path='appointment-history' element={<Suspense fallback={<Loading />}><AppointmentHistory /></Suspense>} />
                    <Route path='all-appointments' element={<RequireAdmin><Suspense fallback={<Loading />}><AllAppointments /></Suspense></RequireAdmin>} />
                    <Route path='appointments' element={<RequireDoctor><Suspense fallback={<Loading />}><Appointments /></Suspense></RequireDoctor>} />
                    <Route path='users' element={<RequireAdmin><Suspense fallback={<Loading />}><Users /></Suspense></RequireAdmin>} />
                    <Route path='doctors' element={<RequireAdmin><Suspense fallback={<Loading />}><Doctors /></Suspense></RequireAdmin>} />
                    <Route path='add-doctor' element={<RequireAdmin><Suspense fallback={<Loading />}><AddDoctor /></Suspense></RequireAdmin>} />
                </Routes>
            </div>
        </div>
    );
};

export default Dashboard;