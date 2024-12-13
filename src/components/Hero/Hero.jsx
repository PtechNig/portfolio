import { motion } from 'framer-motion';
import './Hero.css'



const Hero = () => {

  const boxVariants = {
    hidden: { opacity: 0, x: -300 },
    visible: { opacity: 1, x: 0 },
  };


  const imageVariants = {
    hidden: { opacity: 0, y: -300 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div id='hero' className='hero-wrapper'>
            <div className="hero-container">
        <motion.div className='hero-content'
        
        variants={boxVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8 }}
        
        >
            <h1>Hi, We're </h1>
           <p> <strong> Group 1 Students </strong> </p>
           <p>Turning Ideas into Reality! </p>
           <p>We are passionate Software Engineers dedicated to building innovative and user-focused solutions with React</p>
           <div className='btn'>
                <a className='resume' href="/assets/resume.pdf" download='resume'> Download my Resume</a>
                <a className='chat' target='_blank' href="https://wa.me/08035879166"  >Let's chat </a>
           </div>

        </motion.div>
        <motion.div className='hero-image' 
        
        variants={imageVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8 }}
        
        >
            <img src="/assets/hero-image.png" alt="" />
        </motion.div>
    </div>
    </div>
  )
}

export default Hero
