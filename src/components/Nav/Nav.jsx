import React from 'react'
import "./Nav.css"

const navbar = () => {
  return (
    <div className='navbar_container'>
      <div className='logo'>
       <img src='/assets/group logo.png' alt='' className='logo'/>
      </div>
          <ul>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>HERO</li>
            <li>SKILLS</li>
            <li>WORK</li>
            <li>CONTACT US</li>
            <li>FOOTER</li>
          </ul>
    </div>
  )
}

export default navbar