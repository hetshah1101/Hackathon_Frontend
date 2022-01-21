import Head from 'next/head'
import { useContext, useState, useEffect } from 'react';
import SiteContext from '../components/SiteContext'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import header from '../public/header.png'
import logo from '../public/MINed_LOGO.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';

export default function Home() {

  const { setcurrent, setSwipe, setsections, setposition, position, handleKeyPress } = useContext(SiteContext);
  const [up, setup] = useState(false)

  useEffect(() => {
    setposition(0)
    setcurrent(0)
    setsections(4)
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
    >
      <Head>
        <title>MINeD | Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
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
              <h1>Tagline Goes Here!</h1>
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
          <section style={{
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
          </section>
        </div>

      </main>
    </div>
  )
}
