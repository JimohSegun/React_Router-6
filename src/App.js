import './App.css';
import React from 'react';
import Home from "./components/Home";
import About from './components/About';
import {BrowserRouter,Routes ,Route, Link} from "react-router-dom";



function App() {

  return (

 <BrowserRouter >
 <header className='header_link'>
 <Link to="/" className='van_life'>#VANLIFE</Link>
   <nav className='nav'>
 <Link to="/about" className='nav_about'>About</Link>
 <Link to="/" className='nav_about'>Vans</Link>
</nav>
</header>

  <Routes >
  <Route path='/' element={<Home />} />
  <Route path='/about' element={<About/>} />
  </Routes>

  <footer className='footer'>
    <p className='footer_van'>
      &copy; 2023 #VANLIFE
    </p>
  </footer>
  </BrowserRouter>

  );
};

export default App;
