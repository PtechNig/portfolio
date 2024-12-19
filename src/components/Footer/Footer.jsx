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
            <a href="https://en-gb.facebook.com/login/device-based/regular/login/?login_attempt=1&lwv=120&lwc=1348092" target='_blank'>
            <i className="fa fa-facebook"></i>
            </a>
            <a href="https://x.com/i/flow/login" target='_blank'>
            <i className="fa fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com/accounts/login/?hl=en" target='_blank'>
            <i className="fa fa-instagram"></i>
            </a>
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
