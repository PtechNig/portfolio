import './Contact.css'
import { IoMdMail } from "react-icons/io";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import { motion} from 'framer-motion';


const Contact = () => {
  return (
    <div id='contact' className='contact-wrapper'>
      <div className='contact-title'>
        <h1>Get in touch</h1>
      </div>
      <div className='contact-container'>
        <motion.div className='contact-left'
        
        initial={
          {
            opacity: 0, x: -200
          }
        }
        whileInView={{
          opacity: 1,
          x: 0
        }}
        viewport={{
          amount: "1",
          margin: "0px",
        once: true

        }}
        animate="visible"
        transition={{ duration: 1 }}
        
        >
          <h4>Let's talk</h4>
          <p>We are currently available to pick up your next project, so feel free to send us message. You can contact us anytime</p>

          <div className='contact-icons'>
            <div className='icon'>
            <IoMdMail />
            <p>group1@gmail.com</p>
            </div>
            <div className='icon'>
            <FaPhoneSquareAlt />
            <p>08035879166</p>
            </div>
            <div className='icon'>
            <ImLocation2 />
            <p>123 Street, Lagos, Nigeria</p>
            </div>
          </div>

        </motion.div>
        <motion.div className='contact-right'
        
        initial={
          {
            opacity: 0, y: 200
          }
        }
        whileInView={{
          opacity: 1,
          y: 0
        }}
        viewport={{
          amount: "1",
          margin: "0px",
        once: true

        }}
        animate="visible"
        transition={{ duration: 1 }}
        
        >
        <form >
              <div>
                <label htmlFor="name">Your Name</label>
                <input type="text" name='name' placeholder='Enter your name' />
              </div>

              <div>
                <label htmlFor="email">Your Email</label>
                <input type="email" name='email' placeholder='Enter your email' />
              </div>

              <div>
                <label htmlFor="message">Your Message</label>
                <textarea name="message" id="" placeholder='Enter your message' rows={10} > </textarea>
              </div>
              <button type="submit">Submit</button>
            </form>
        </motion.div>

      </div>
    </div>
  )
}

export default Contact
