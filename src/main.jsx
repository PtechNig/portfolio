// import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Hero from './components/Hero/Hero'
import Nav from './components/Nav/Nav'
import Skill from './components/Skills/Skill'
import Work from './components/Work/Work'
import Footer from './components/Footer/Footer'
import App from './App.jsx'
import ErrorBoundary from './ErrorBoundary.jsx'

// createRoot(document.getElementById('root')).render(
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
   <>
   <React.StrictMode>
     <Nav/>
     <Hero/>
     <About/>
     <Skill/>
     <Work/>
     <Contact/>
     <Footer/>
	<App />
   </React.StrictMode>
   </>
)
