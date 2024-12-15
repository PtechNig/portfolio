import "./Nav.css"
import AnchorLink from 'react-anchor-link-smooth-scroll'
const navbar = () => {
  return (
    <div className='navbar_container'>
      <div className='logo'>
       <img src='/assets/group-logo.png' alt='' className='logo'/>
      </div>
          <ul>
            <li> <AnchorLink  href="#hero"> HOME </AnchorLink>  </li>
            <li> <AnchorLink offset={40} href="#about">ABOUT</AnchorLink> </li>
            <li> <AnchorLink offset={100} href="#skill">SKILLS</AnchorLink> </li>
            <li> <AnchorLink offset={70} href="#work">WORK</AnchorLink> </li>
            <li> <AnchorLink offset={50} href="#contact">CONTACT</AnchorLink> </li>

          </ul>
    </div>
  )
}

export default navbar