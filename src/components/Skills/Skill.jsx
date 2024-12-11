import './Skill.css'
import { motion} from 'framer-motion';

const Skill = () => {

  const textVariants = {
    hidden: { opacity: 0, y: -400 },
    visible: { opacity: 1, y: 0 },
  };

  const boxVariants = {
    hidden: { opacity: 0, x: 300 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div id='skill' className='skill-wrapper'>
      <div className='skill-container'>
        <div className='left'>
          <motion.h1
          
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1 }}

          
          >Our Skills</motion.h1>
        </div>
        <motion.div className='right'
        
        variants={boxVariants}
        initial="hidden"
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
            <img src="/assets/github.png" alt="" />
            <h2>Github</h2>

          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Skill
