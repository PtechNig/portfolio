import './Skill.css'
import { motion } from 'framer-motion'

const Skill = () => {

 
  return (
    <div id='skill' className='skill-wrapper'>
      <div className='skill-container'>
        <div className='left'>
          <motion.h1
          
          initial={
            {
              opacity: 0, y: -100
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

          
          >Our Skills</motion.h1>
        </div>
        <motion.div className='right'
        
        initial={
          {
            opacity: 0, x: 300
          }
        }

        whileInView={{
          opacity: 1,
          x: 0
        }}
        viewport={{
          amount: "0.5",
          once: true
        }}
        animate="visible"
        transition={{ duration: 1.2 }}
        
        
        >
          <div>
            <img src="/assets/html.png" alt="" />
            <h2>HTML 5</h2>
          </div>
          <div>
            <img src="/assets/css.png" alt="" />
            <h2>CSS 3</h2>
          </div>
          <div>
            <img src="/assets/react.png" alt="" />
            <h2>React</h2>

          </div>
          <div>
            <img src="/assets/github.png" alt="Github logo" />
            <h2>Github</h2>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Skill
