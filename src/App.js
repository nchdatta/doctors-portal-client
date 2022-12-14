import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import Appointment from './pages/Appointment/Appointment';
import Dashboard from './pages/Dashboard/Dashboard';
import NotFound from './pages/ErrorPage/NotFound';
import ContactUs from './pages/Home/ContactUs';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SignUp from './pages/Login/SignUp';
import Reviews from './pages/Reviews/Reviews';
import Footer from './pages/Shared/Footer';
import Navbar from './pages/Shared/Navbar';
import RequireAuth from './pages/Shared/RequireAuth';
import { Toaster } from 'react-hot-toast';
import ForgotPassword from './pages/Login/ForgotPassword';

function App() {
  return (
    <div className='lg:w-3/4 mx-auto'>
      <Toaster />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/appointment' element={<RequireAuth><Appointment /></RequireAuth>} />
        <Route path='/reviews' element={<Reviews />} />
        <Route path='/dashboard/*' element={<RequireAuth><Dashboard /></RequireAuth>} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
