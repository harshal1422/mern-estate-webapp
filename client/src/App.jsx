import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import SignIn from './pages/SignIn';
import Profile from './pages/Profile';
import About from './pages/About';
import Header from './componenets/Header';

export default function App() {
  return (
  <BrowserRouter> 
    <Header />
   <Routes>
     <Route path='/' element={<Home/>} />
     <Route path='/about' element={<About/>} />
     <Route path='/profile' element={<Profile/>} />
     <Route path='/sign-in' element={<SignIn/>} />
     <Route path='/sign-up' element={<Signup/>} />
  </Routes>
  </BrowserRouter>
  );
}
