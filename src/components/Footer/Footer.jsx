import { div } from 'framer-motion/client'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer-wrapper'>
      <div className="Foot-container">
      <div className='logo'>
        <img src="/assets/group-logo.png" alt="" />
        <h4>Group 1</h4>
      </div>
        <div className='links-container'>
          <div className='link-title'>
            <p>Quick links</p>
          </div>

          <div className='links'>
            <i className="fa fa-facebook"></i>
            <i className="fa fa-twitter"></i>
            <i className="fa fa-instagram"></i>
          </div>
        </div>
        <p>
          All rights reserved Group 1 project &copy; 2024

        </p>
      </div>
    </div>
  )
}

export default Footer
