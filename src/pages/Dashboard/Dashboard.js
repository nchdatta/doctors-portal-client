import profileIcon from '../../assets/icons/profile.svg';
import appIcon from '../../assets/icons/appointment.svg';
import allAppIcon from '../../assets/icons/all-appointment.svg';
import appts from '../../assets/icons/appointments.svg';
import usersIcon from '../../assets/icons/users.svg';
import doctorsIcon from '../../assets/icons/doctors.svg';
import doctorIcon from '../../assets/icons/doctor.svg';
import appHisIcon from '../../assets/icons/app-history.svg';
import dashboardIcon from '../../assets/icons/dashboard.svg';

import React, { lazy, Suspense } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Route, Routes } from 'react-router-dom';
import useRole from '../../hooks/useRole';
import auth from '../../utilities/firebase.init';
import Loading from '../Shared/Loading';
import PageTitle from '../Shared/PageTitle';
import RequireAdmin from '../Shared/RequireAdmin';
import RequireDoctor from '../Shared/RequireDoctor';
import IconNav from './IconNav';
import UpdatePassword from './UpdatePassword';
import Profile from './Profile';
const AddDoctor = lazy(() => import('./AddDoctor'));
const AllAppointments = lazy(() => import('./AllAppointments'));
const AppointmentHistory = lazy(() => import('./AppointmentHistory'));
const Appointments = lazy(() => import('./Appointments'));
const Doctors = lazy(() => import('./Doctors'));
const MyAppointments = lazy(() => import('./MyAppointments'));
const MyDashboard = lazy(() => import('./MyDashboard'));
const Users = lazy(() => import('./Users'));


const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [role] = useRole(user);


    return (
        <div className='flex flex-col lg:flex-row min-h-screen mt-2'>
            <PageTitle title="Dashboard" />
            {/* sidebar area  */}
            <aside className="w-full lg:w-1/5" aria-label="Sidebar">
                <div className="overflow-y-auto lg:min-h-screen py-4 px-2 bg-gray-50 rounded dark:bg-gray-800 flex flex-row lg:flex-col flex-wrap gap-2">
                    <IconNav to='/dashboard' name='Profile' icon={profileIcon} />
                    {role === 'Admin' &&
                        <IconNav to='/dashboard/my-dashboard' name='Dashboard' icon={dashboardIcon} />}
                    {role === 'User' || role === 'Admin' ?
                        <>
                            <IconNav to='/dashboard/my-appointments' name='My Appointments' icon={appIcon} />
                            <IconNav to='/dashboard/appointment-history' name='Appointment History' icon={appHisIcon} />
                        </> : ''}
                    {role === 'Admin' &&
                        <>
                            <IconNav to='/dashboard/all-appointments' name='All Appointments' icon={allAppIcon} />
                            <IconNav to='/dashboard/users' name='Users' icon={usersIcon} />
                            <IconNav to='/dashboard/doctors' name='Doctors' icon={doctorsIcon} />
                            <IconNav to='/dashboard/add-doctor' name='Add Doctor' icon={doctorIcon} />
                        </>}
                    {role === 'Doctor' &&
                        <IconNav to='/dashboard/appointments' name='appointments' icon={appts} />}
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