import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import './Skill.css'

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Skill = () => {
  return (
   <div className='kill'>
      <h1>Check out what the team can do!</h1>
	  <>
	   <Carousel responsive={responsive}>
	    <div className='card'>
         <div className='card-img'><img alt='Image of student' src='../../../../public/20240901_123222.jpg' height='200px' width='200px'/></div>
	     <div className='card-body'>
	      <div className='card-title'>
		    <h3>Thaddeus Bradley, PhD.</h3>
		   </div>
	      <div className='card-text'>
		   <li>
		    <ul>MSc. Computer Science, Zurich</ul>
		    <ul>PhD. Quantum Mechanics, Berkeley</ul>
		   </li>
	      </div>
	     </div>
	    </div>

	    <div className='card'>
         <div className='card-img'><img alt='Image of student' src='../../../../public/20240901_123222.jpg' height='200px' width='200px'/> </div>
	     <div className='card-body'>
	      <div className='card-title'>
		    <h3>Thaddeus Bradley, PhD.</h3>
		   </div>
	      <div className='card-text'>
		   <li>
		    <ul>MSc. Computer Science, Zurich</ul>
		    <ul>PhD. Quantum Mechanics, Berkeley</ul>
		   </li>
	      </div>
	     </div>
	    </div>
		
	    <div className='card'>
         <div className='card-img'><img alt='Image of student' src='../../../../public/PIX IN LUMIA PHONE 047.jpg' height='200px' width='200px'/></div>
	     <div className='card-body'>
	      <div className='card-title'>
		    <h3>Thaddeus Bradley, PhD.</h3>
		   </div>
	      <div className='card-text'>
		   <li>
		    <ul>MSc. Computer Science, Ibadan</ul>
		    <ul>PhD. Data Science, Stanford</ul>
		   </li>
	      </div>
	     </div>
	    </div>
	   
	    <div className='card'>
         <div className='card-img'><img alt='Image of student' src='../../../../public/20240901_123222.jpg' height='200px' width='200px'/></div>
	     <div className='card-body'>
	      <div className='card-title'>
		    <h3>Laura Holmes, PhD.</h3>
		   </div>
	      <div className='card-text'>
		   <li>
		    <ul>MSc. Computer Science, Yale</ul>
		    <ul>PhD. Data Science, Stanford</ul>
		   </li>
	      </div>
	     </div>
	    </div>
	 </Carousel>
	 </>
   </div>
  )
}

export default Skill
