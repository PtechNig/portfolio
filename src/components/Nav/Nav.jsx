import "./Nav.css"
const navbar = () => {
  return (
    <div className='navbar_container'>
      <div className='logo'>
       <img src='/assets/group logo.png' alt='' className='logo'/>
      </div>
          <ul>
            <li> HOME </li>
            <li>ABOUT</li>
            <li>SKILLS</li>
            <li>WORK</li>
            <li>CONTACT</li>
          </ul>
    </div>
  )
}

export default navbar