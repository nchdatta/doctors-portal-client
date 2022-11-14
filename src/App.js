import { Route, Routes } from 'react-router-dom';
import './App.css';
import NotFound from './pages/ErrorPage/NotFound';
import Home from './pages/Home/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
