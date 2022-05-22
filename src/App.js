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

function App() {
  return (
    <div className="App">
     <Navbar/>
    
     <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/contact' element={<Contact/>} />
       <Route path='/purchase/:id' element={<PurchasePage/>} />
       <Route path='/login' element={ <Login/>} />
       <Route path='/about' element={
         <RequireAuth>
           <About/>
         </RequireAuth>
       } />
       <Route path='/signup' element={<SignUp/>} />
     </Routes>
      <Footer/>
     <ToastContainer/>
    </div>
  );
}

export default App;
