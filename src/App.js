import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import Appointment from './pages/Appointment/Appointment';
import Dashboard from './pages/Dashboard/Dashboard';
import MyAppointments from './pages/Dashboard/MyAppointments';
import NotFound from './pages/ErrorPage/NotFound';
import ContactUs from './pages/Home/ContactUs';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SignUp from './pages/Login/SignUp';
import Reviews from './pages/Reviews/Reviews';
import Footer from './pages/Shared/Footer';
import Navbar from './pages/Shared/Navbar';
import AppointmentHistory from './pages/Dashboard/AppointmentHistory';
import RequireAuth from './pages/Shared/RequireAuth';
import Users from './pages/Dashboard/Users';
import Doctors from './pages/Dashboard/Doctors';
import AddDoctor from './pages/Dashboard/AddDoctor';
import RequireAdmin from './pages/Shared/RequireAdmin';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/appointment' element={<RequireAuth><Appointment /></RequireAuth>} />
        <Route path='/reviews' element={<Reviews />} />
        <Route path='/dashboard' element={<RequireAuth><Dashboard /></RequireAuth>} >
          <Route index element={<MyAppointments />} />
          <Route path='appointment-history' element={<AppointmentHistory />} />
          <Route path='users' element={<RequireAdmin><Users /></RequireAdmin>} />
          <Route path='doctors' element={<RequireAdmin><Doctors /></RequireAdmin>} />
          <Route path='add-doctor' element={<RequireAdmin><AddDoctor /></RequireAdmin>} />
        </Route>
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
