import React from 'react'
import './Nav.css'
import { FaHome, FaSearch, FaList, FaDoorOpen, FaTrash, FaUser, FaImage, FaPhoneAlt, FaBriefcase, FaChessKnight } from 'react-icons/fa'
import Skills from '../Skills/Skill'
import Work from '../Work/Work'
import About from '../About/About'



const Nav = () => {
  return (
    <>
 <div className="Nav"> 
      <nav>
       <ul className='sidebar'>
        <li onClick={hideSidebar}><a href='#'><FaTrash /> Clean</a></li>
        <li><a href='#'><FaHome /> Home</a></li>
        <li><a href={About}><FaHome /> About</a></li>
        <li><a href={Skills}><FaChessKnight /> Skills</a></li>
        <li><a href={Work}><FaBriefcase /> Work</a></li>
       </ul>
       <ul>
        <li className='hideitems'><a href='#'><FaHome /> Home</a></li>
        <li className='hideitems'><a href={About}><FaUser /> About</a></li>
        <li className='hideitems'><a href={Skills}><FaChessKnight /> Skills</a></li>
        <li className='hideitems'><a href={Work}><FaBriefcase /> Work</a></li>
        <li className='menu-button' onClick={showSidebar}><FaList/></li>
       </ul>
      </nav>
      </div>
    </> 
  )
}

export default Nav

 const showSidebar = () => {
  document.querySelector('.sidebar')
  sidebar.style.display = 'flex'
 }

 const hideSidebar = () => {
 document.querySelector('.sidebar')
 sidebar.style.display = 'none'
 }


