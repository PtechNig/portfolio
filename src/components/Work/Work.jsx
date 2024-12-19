import CustomSlider from '../Pages/CustomSlider'
import './Work.css'
import { motion } from 'framer-motion'
import Carousel from 'react-multi-carousel'

const Work = () => {
  return (
    <div id='work' className='work-wrapper' >
      <motion.div className='work-title'
      
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
        margin: "200px 0px 300px 0px",
      once: true

      }}
      animate="visible"
      transition={{ duration: 1 }}
      
      >
        <h1>Our Works</h1>
      </ motion.div>

      <div className='work'>
        <div className='work-subtitle'>
          <h4>Frontend</h4>
        </div>      <div className='work-subtitle'>
          <h4>Backend</h4>
        </div>
      </div>

      <motion.div className='work-container'
      
      initial={
        {
          opacity: 0
        }
      }
      whileInView={{
        opacity: 1,
        
      }}
      viewport={{
        amount: "1",
      once: true

      }}
      animate="visible"
      transition={{ duration: 0.5 }}
      
      >
        <img src="assets/image-1.jpg" alt="" />
        <img src="assets/image-2.jpg" alt="" />
        <img src="assets/image-3.jpg" alt="" />
        <img src="assets/image-4.jpg" alt="" />
        <img src="assets/image-5.jpg" alt="" />
        <img src="assets/image-6.jpg" alt="" />
        <img src="assets/image-7.jpg" alt="" />
        <img src="assets/image-8.jpg" alt="" />
        <img src="assets/image-9.jpg" alt="" />
        <img src="assets/image-10.jpg" alt="" />
        <img src="assets/image-11.jpg" alt="" />
        <img src="assets/image-12.jpg" alt="" />
      </motion.div>

      <div className='testimonial'>
        <h3>What Our Customers say</h3>
          <Carousel responsive={responsive}>
            <div className='carousel'>
              <div className='card'>
                <div className='card-img'></div>
                <div className='card-body'>
                 <div className="card-title"></div>
                 <div className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quo veritatis rem odio porro dolores natus delectus, dolore debitis, magnam vitae blanditiis sit nemo saepe eum inventore voluptatum repudiandae excepturi.
                 </div>
                </div>
              </div>
              
              <div className='card'>
               <div className='card-img'></div>
               <div className='card-body'>
                <div className="card-title"></div>
                <div className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quo veritatis rem odio porro dolores natus delectus, dolore debitis, magnam vitae blanditiis sit nemo saepe eum inventore voluptatum repudiandae excepturi.
                </div>
               </div>
              </div>

              <div className='card'> 
               <div className='card-img'></div>
                <div className='card-body'>
                 <div className="card-title"></div>
                 <div className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quo veritatis rem odio porro dolores natus delectus, dolore debitis, magnam vitae blanditiis sit nemo saepe eum inventore voluptatum repudiandae excepturi.
                 </div>
                </div>
              </div>

              <div className='card'>
              <div className='card-img'></div>
                <div className='card-body'>
                 <div className="card-title"></div>
                 <div className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quo veritatis rem odio porro dolores natus delectus, dolore debitis, magnam vitae blanditiis sit nemo saepe eum inventore voluptatum repudiandae excepturi.
                 </div>
                </div>
              </div>
            </div>
          </Carousel>
          <CustomSlider />
      </div>
    </div>


  )
}

export default Work
