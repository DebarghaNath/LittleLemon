import './App.css';
import {HashRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Booking from './pages/Booking';
import ConfirmedBooking from './pages/ConfirmedBooking';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/booking" element ={<Booking/>}/>
        <Route path="/success" element ={<ConfirmedBooking/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
