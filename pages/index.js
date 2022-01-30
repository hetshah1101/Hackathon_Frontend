import Head from 'next/head'
import { useContext, useState, useEffect } from 'react';
import SiteContext from '../components/SiteContext'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import header from '../public/header.png'
import logo from '../public/MINed_LOGO.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';

import NULogo from '../public/Logos/ITNU_Logo.jpg';
import BULogo from '../public/Logos/Binghamton_University_logo.png';

export default function Home() {

  const { setcurrent, handleTouchStart, handleTouchMove, scrollFunc, setSwipe, setsections, setposition, position, handleKeyPress } = useContext(SiteContext);
  const [up, setup] = useState(false)

  useEffect(() => {
    setposition(0)
    setcurrent(0)
    setsections(2)
    setSwipe(true)
  }, [])

  useEffect(() => {
    if(position == 0) {
      setup(false)
    }
    else {
      setup(true)
    }
  },[position])

  return (
    <div 
      onKeyDown={handleKeyPress}
      tabIndex="0"
      onWheel={scrollFunc}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <Head>
        <title>MINeD | Home</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="keywords"
          content="MINeD Hackathon,MINeD,Hackathon,mined Hackathon,mined,mined 2022,mined hackathon 2022"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta 
          name="author" 
          content="Centre of Excellence in Data Science at Nirma University" />
        <meta 
          name="description" 
          content="MINeD is a national level Hackathon organized by Centre of Excellence in Data Science at Nirma University in collabration with SUNY Binghamton University where you can participate, innovate and win exciting prizes."></meta>
      </Head>

      {/* Navigation Bar */}
      <Navbar />
      <div className='headerdiv' style={{
        transform: up ? `translateY(-${100}vh)` : 'translateY(0)'
      }}>
        {/* <div className='left'> */}
          <div className='imageMask' style={{
              background: `url(${header.src})`
            }}>
            <div className='header'>
              {/* <img src={header.src} /> */}
              <img src={logo.src} />
              <h1>3rd March - 5th March</h1>
              <button onClick={() => {
                setup(true);
                setposition(position+1);
              }}>
                <FontAwesomeIcon icon={faChevronCircleDown} />
              </button>
              {/* <button>Learn More</button> */}
            </div>
          </div>
      </div>
      <main id="home" style={{
        transform: up ? `translateY(-${100*(position>0 ? 1 : 0)}vh)` : `translateY(0)`
      }}>

        {/* Left Slider */}
        <Slider />
  
        {/* Main Content here */}
        <div id="content">
          <section style={{
            transform: `translateY(-${position*80}vh)`
          }}>
            
            <div className='left'>
              <h1>MINeD Hackathon 2!</h1>
              <button>Learn More</button>
            </div>
            <div className='right'>
              <h1>MINeD Hackathon 2!</h1>
              <button>Learn More</button>
            </div>
          </section>
          <section className='col' style={{
            transform: `translateY(-${position*80}vh)`
          }}>
            <h1>About Organisers</h1> <br/>
            <div className='top'>
            
              <img src={NULogo.src} className='nopad' ></img>
              <div><p><a href="http://nirmauni.ac.in" target="_blank">
                Nirma University
              </a>{" "}
              , Ahmedabad is a research-oriented, student-centric,
              multidisciplinary, not-for-profit state private university. Within
              a short period of its existence, it has emerged as a nationally
              renowned higher education institution. The University and its
              constituent institutes are highly ranked by different ranking
              agencies. Institute of Technology, Nirma University is the first
              self-financed engineering college of the State of Gujarat.
              Department of Computer Science and Engineering (CSE), ITNU is
              known for its strength in Theoretical Computer Science, Image
              Processing and Computer Vision, High Performance Computing,
              Artificial Intelligence and Deep Learning, Internet of Things,
              Data Science, Cloud Computing, Networking and Cyber Security. We
              at the Department of Computer Science and Engineering, Institute
              of Technology, Nirma University have recently established the
              Centre of Excellence in Data Science (CoE - DS) in collaborated
              with SUNY Binghamton University, USA.</p>
              </div>
            </div>
            <div className='bottom'>
              <img src={BULogo.src} ></img>
              <div><p><a href="https://www.binghamton.edu/" target="_blank">
                {" "}
                Binghamton University
              </a>{" "}
              is a world-class institution that offers students a broad,
              interdisciplinary education with an international perspective and
              one of the most vibrant research programs in the nation. The
              Thomas J. Watson College of Engineering and Applied Science
              provides a top-ranked engineering and computer science education
              in upstate New York. Our exceptional faculty members are both
              innovative researchers and supportive professors. Students come to
              Watson College from all over the world and represent a wide range
              of backgrounds and interests. They graduate with broad-based
              skills and the entrepreneurial spirit to succeed in fields ranging
              from mechanical engineering to hospital operations to the law. We
              are in the high-tech heart of upstate New York state with industry
              partnerships, class projects and internship opportunities that
              provide a wealth of hands-on experience for graduate and
              undergraduate students alike.</p>
              </div>
            </div>
          </section>
          {/* <section style={{
            transform: `translateY(-${position*80}vh)`
          }}>
            <div className='left'>
              <h1>MINeD Hackathon 3!</h1>
              <button>Learn More</button>
            </div>
            <div className='right'>
              <h1>MINeD Hackathon 3!</h1>
              <button>Learn More</button>
            </div>
          </section>
          <section style={{
            transform: `translateY(-${position*80}vh)`
          }}>
            <div className='left'>
              <h1>MINeD Hackathon 4!</h1>
              <button>Learn More</button>
            </div>
            <div className='right'>
              <h1>MINeD Hackathon 4!</h1>
              <button>Learn More</button>
            </div>
          </section> */}
        </div>

      </main>
    </div>
  )
}
