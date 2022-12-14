import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import NotFound from './pages/ErrorPage/NotFound';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Reviews from './pages/Reviews/Reviews';
import Footer from './pages/Shared/Footer';
import Navbar from './pages/Shared/Navbar';
import RequireAuth from './pages/Shared/RequireAuth';
import { Toaster } from 'react-hot-toast';
import Loading from './pages/Shared/Loading';
const Dashboard = React.lazy(() => import('./pages/Dashboard/Dashboard'));
const Appointment = React.lazy(() => import('./pages/Appointment/Appointment'));
const ForgotPassword = React.lazy(() => import('./pages/Login/ForgotPassword'));
const SignUp = React.lazy(() => import('./pages/Login/SignUp'));

function App() {
  return (
    <div className='lg:w-3/4 mx-auto'>
      <Toaster />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/appointment' element={<RequireAuth><Suspense fallback={<Loading />}><Appointment /></Suspense></RequireAuth>} />
        <Route path='/reviews' element={<Reviews />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard/*' element={<RequireAuth><Suspense fallback={<Loading />}><Dashboard /></Suspense></RequireAuth>} />
        <Route path='/signup' element={<Suspense fallback={<Loading />}><SignUp /></Suspense>} />
        <Route path='/forgot-password' element={<Suspense fallback={<Loading />}><ForgotPassword /></Suspense>} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
