import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Footer from './components/footer/Footer.jsx'
import Menu from './components/menu/Menu.jsx'
import Navbar from './components/navbar/Navbar.jsx'
import Hero from './components/hero/Hero.jsx'
import Register from './pages/register/Register.jsx'
import Homepage from './pages/home/Homepage.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Homepage/>
  </React.StrictMode>,
)
