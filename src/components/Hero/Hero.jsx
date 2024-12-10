import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image'
import './Hero.css'

const fadeImages = [
  {
    url: '/assets/image-1.jpg',
    caption: 'Innovating the Future of Technology',
    title: 'A futuristic cityscape with digital overlays, symbolizing innovation and technology.',
    paragraphy: "Welcome to our journey in software engineering. Together, we're building tomorrow's technology, one line of code at a time."
  },
  {
    url: '/assets/image-2.jpg',
    caption: 'Collaboration is Key',
    title: 'A diverse group of students working together on laptops, surrounded by whiteboards with brainstorming ideas.',
    paragraphy: "Teamwork and creativity drive us forward. This is where ideas become solutions."
  },
  {
    url: '/assets/image-3.jpg',
    caption: 'Learning, Building, Growing',
    title: 'A symbolic image of a seedling growing into a tree with binary code integrated into the branchesA symbolic image of a seedling growing into a tree with binary code integrated into the branches.',
    paragraphy: "From coding basics to advanced problem-solving, we are growing as engineers with every project."
  },
  
  {
    url: '/assets/image-4.jpg',
    caption: 'Our First Steps in Engineering',
    title: 'A keyboard with the "Enter" key highlighted, representing taking the first step.',
    paragraphy: "This is our first project, the start of something extraordinary. The future is ours to create."
  }
];


const Hero = () => {


  return (
    <div className="slide-container">
      <Slide
        duration={10000}
        transitionDuration={1000}
        autoplay={true}
        infinite={true}
        arrows={false}
        indicators={false}

      >
        {fadeImages.map((fadeImage, index) => (
          <div className='hero-container' key={index}>
            <img style={{ width: '100%' }} src={fadeImage.url} />
            <div className='content'>
              
              <div 
              className='text'>
                <h2>{fadeImage.caption}</h2>
                <p>{fadeImage.title}</p>
                <p>{fadeImage.paragraphy}</p>
              </div>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  )
}

export default Hero
