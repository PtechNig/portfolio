import CustomSlider from '../Pages/CustomSlider'
import './Work.css'






const Work = () => {



  return (
    <div id='work' className='work-wrapper' >
      <div className='work-title'>
        <h1>Our Works</h1>
      </div>

      <div className='work'>
        <div className='work-subtitle'>
          <h4>Frontend</h4>
        </div>      <div className='work-subtitle'>
          <h4>Backend</h4>
        </div>
      </div>

      <div className='work-container'>
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
      </div>

      <div className='testimonial'>
        <h3>What Our Customers say</h3>
          <CustomSlider/>
      </div>
    </div>


  )
}

export default Work
