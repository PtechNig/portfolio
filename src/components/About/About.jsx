import './About.css'

const About = () => {
  return (
    <div id='about' className='about-wrapper' >
      <div className='about-title'>
        <h1>About Us</h1>

      </div>
      <div className='about-container'>
        <div className='about-left'>
          <img src="/assets/image-1.jpg" alt="" />
        </div>
        <div className='about-right'>
          <p>
            I’m always looking for opportunities to grow, collaborate with talented teams, and build products that have a meaningful impact. My expertise lies in JavaScript language and I’m proficient in frameworks like React and Node.js. I’m constantly learning and adapting to the latest tech trends to stay at the cutting edge of the industry.
          </p>
          <p>
            Whether it’s building scalable applications or improving the performance of existing systems, I thrive on solving challenges and turning ideas into functional, high-quality software.
          </p>

          <div className='experience-container' >
            <div className='experience'>
              <h2>5 years</h2>
              <p>Experience</p>
            </div>

            <div className='experience'>
              <h2>15+</h2>
              <p>Frontend Projects</p>
            </div>
            
            <div className='experience'>
              <h2>10+</h2>
              <p>Backend Projects</p>
            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default About
