import "./Nav.css"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const navbar = () => {

  let [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }
  return (
    <div className='navbar_container'>
      <div className='logo'>
       <img src='/assets/group-logo.png' alt='' className='logo'/>
      </div>
      
      <div className="nav-icon" onClick={toggle}>
        {isOpen ? <IoClose  /> : <GiHamburgerMenu  />}
      </div>
          <ul className= {`ul ${isOpen ? "open" : " "}`}>
          <div className="close">
          </div>
            <li> <AnchorLink  href="#hero" onClick={closeMenu}> HOME </AnchorLink>  </li>
            <li> <AnchorLink offset={40} href="#about" onClick={closeMenu}>ABOUT</AnchorLink> </li>
            <li> <AnchorLink offset={100} href="#skill" onClick={closeMenu}>SKILLS</AnchorLink> </li>
            <li> <AnchorLink offset={70} href="#work" onClick={closeMenu}>WORK</AnchorLink> </li>
            <li> <AnchorLink offset={50} href="#contact" onClick={closeMenu}>CONTACT</AnchorLink> </li>

          </ul>
    </div>
  )
}

export default navbar