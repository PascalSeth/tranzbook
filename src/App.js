import './App.css';
import Homepage from './pages/Homepage';
import Navbar from './pages/Navbar';
import { Routes, Route } from "react-router-dom";
import About from './components/About';
import Cargo from './pages/Cargo';
import Bus from './pages/Bus';
import Blog from './components/Blog';
import Careers from './components/Careers';
import Gallery from './components/Gallery';
import Busbooking from './components/Busbooking';
import SchoolsBooking from './components/SchoolsBooking';
import Truckbooking from './components/Truckbooking';
import AgroPrefinancing from './components/AgroPrefinancing';
import BusSeatSelection from './pages/BusSeatSelection';
import SearchNew from './components/SearchNew';
import AdminDashboard from './pages/admin/AdminDashboard';
import { ToastContainer } from 'react-toastify';
import Reset from './pages/Reset';

function App() {
  return (
    <div className='h-screen w-full  overflow-x-hidden z-0'>     
    <ToastContainer/> 
    <Navbar/>
    <Routes> 
  <Route index element={<Homepage/>} />
<Route path='/' element={<Homepage/>} /> 
<Route path='/reset' element={<Reset/>} />
 <Route path='/about' element={<About/>} />
 <Route path='/blog' element={<Blog/>} />
 <Route path='/careers' element={<Careers/>} />
 <Route path='/bus' element={<Bus/>} />
<Route path='/cargo' element={<Cargo/>} />
<Route path='/seats' element={<BusSeatSelection/>} />
<Route path='/gallery' element={<Gallery/>}/>
<Route path='/busbooking' element={<Busbooking/>}/>
<Route path='schoolbooking' element={<SchoolsBooking/>}/>
<Route path='/truckbooking' element={Truckbooking}/>
<Route path='/agroprefinancing' element={AgroPrefinancing}/>
<Route path='/search' element={<SearchNew/>}/>
<Route path='/admindashboard'element={<AdminDashboard/>} ></Route>
</Routes>
 </div>
  );
}

export default App;
