import CustomSlider from '../Pages/CustomSlider'
import './Work.css'
import { motion } from 'framer-motion'
import Carousel from 'react-multi-carousel'

const Work = () => {
import { motion } from 'framer-motion';
import images from '../db/Data';
import { useState } from 'react';


const Work = () => {

  const [data, setData] = useState(images)

  const handleFilter = (categ) => {
    let newData = images.filter(item => item.category === categ)
    console.log("btn")
    setData(newData)
  }
>>>>>>> 96d5f02d9ae831bfbfd87af3d3b29634aa90f60f
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
          <button onClick={() => handleFilter('frontend')} aria-label="Filter frontend projects">Frontend</button>
        </div>
        <div className='work-subtitle'>
          <button onClick={() => handleFilter('backend')} aria-label="Filter backend projects">Backend</button>
        </div>

        <div className='work-subtitle'>
          <button onClick={() => setData(images)} aria-label="Show all projects">Show All</button>
        </div>

      </div>

      <motion.div className='work-container'

        initial={
          {
            opacity: 0, x: 200
          }
        }
        whileInView={{
          opacity: 1, x: 0

        }}
        viewport={{
          amount: "1",
          once: true

        }}
        animate="visible"
        transition={{ duration: 0.5 }}

      >

        {
          data.map((image, index) => {
            return <div key={index}>

              <img src={image.url} alt="" />

            </div>

          })
        }
      </motion.div>

      <div className='testimonial'>
        <h3>What Our Customers say</h3>
<<<<<<< HEAD
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
=======
        <CustomSlider />
>>>>>>> 96d5f02d9ae831bfbfd87af3d3b29634aa90f60f
      </div>
    </div>


  )
}

export default Work
