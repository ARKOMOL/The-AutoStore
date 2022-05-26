import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import About from './Pages/Header/ForAllUsers/About/About';
import Navbar from './Pages/Navbar/Navbar';
import RequireAuth from '../src/Pages/Shared/RequireAuth/RequireAuth'
import Login from './Pages/Shared/Login/Login';
import SignUp from './Pages/Shared/SignUp/SignUp';
import Footer from './Pages/Shared/Footer/Footer';
import Contact from './Pages/Header/ForAllUsers/Contact/Contact';
import Home from './Pages/HomePage/Home';
import PurchasePage from './Pages/HomePage/Purchase/PurchasePage';
import MyProtfolio from './Pages/Header/ForAllUsers/MyProtfolio';
import MyProfile from './Pages/Header/LoginUser/MyProfile';
import AddReview from './Pages/Header/LoginUser/AddReview';
import MyOrders from './Pages/Header/LoginUser/MyOrders';
import Dashboard from './Pages/Dashboard/Dashboard';
import ManageAllOrders from './Pages/Header/Admin/ManageAllOrders';
import AddProducts from './Pages/Header/Admin/AddProducts';
import MakeAdmin from './Pages/Header/Admin/MakeAdmin';
import BusinessSummary from './Pages/HomePage/BusinessSummary/BusinessSummary';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Blogs from './Pages/Blogs/Blogs';

function App() {
  return (
    <div className="App">
     <Navbar/>
    
     <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/contact' element={<Contact/>} />
       <Route path='/protfolio' element={<MyProtfolio/>} />
       <Route path='dashboard' element={<Dashboard/>} >
            <Route index element={<MyProfile/>} />
            <Route path='orders' element={<MyOrders/>} />
            <Route path='add-review' element={<AddReview/>} />
            <Route path='make-admin' element={<MakeAdmin/>} />
            <Route path='add-products' element={<AddProducts/>} />
            <Route path='manage-all-orders' element={<ManageAllOrders/>} />

       </Route>
      
       <Route path='/purchase/:id' element={
         <RequireAuth>
           <PurchasePage/>
         </RequireAuth>
       } />
       <Route path='/login' element={ <Login/>} />
       <Route path='/about' element={<About/> } />
       <Route path='/signup' element={<SignUp/>} />
       <Route path='/blogs' element={<Blogs/>} />
       <Route path ='*' element={<NotFound/>}/>
     </Routes>
    
    <Footer/>
     <ToastContainer/>
    </div>
  );
}

export default App;
