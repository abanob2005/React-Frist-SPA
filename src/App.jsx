import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Routes , Route} from 'react-router-dom'
import Portofolio from './components/Portofolio/Portofolio'
import Footer from './components/Footer/Footer'
import NotFound from './components/NotFound/NotFound'



function App() {
  
  return (
    <>
   {/* <Navbar/> */}
   
     <BrowserRouter>
   <Navbar/>
     <Routes>
      <Route path= '/' element={<Home/>}/>
      <Route path= '/About' element={<About/>}/>
      <Route path= '/Portofolio' element={<Portofolio/>}/>
      <Route path= '/Contact' element={<Contact/>}/>
      <Route path= '/*' element={<NotFound/>}/>
     </Routes>
     <Footer/>
     </BrowserRouter>
      
    </>
  )
}

export default App
