import Head from 'next/head'
import { useContext, useEffect } from 'react';
import SiteContext from '../components/SiteContext'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'

import parth from '../public/profiles/Parth_mentor.jpg';
import jaldeep from '../public/profiles/mentor_jaldeep_vasavadajpg.jpg';

import rnpatel from '../public/profiles/dr_rn_patel.jpg';
import dryoon from '../public/profiles/dr_yoon.jpg';
import drmadhuribhavsar from '../public/profiles/dr_madhuri_bhavsar.jpg';
import sapanmakad from '../public/profiles/sapan_mankad.jpg';
import dwijeshbhatt from '../public/profiles/dvijesh_bhatt.jpg';
import priyankthakker from '../public/profiles/priyank_thakkar.jpg';
import vijayukani from '../public/profiles/vijay_ukani.jpg';
import swatijain from '../public/profiles/swati_jain.jpg';
import ankitthakkar from '../public/profiles/ankit_thakkar.jpg';
import gaurangraval from '../public/profiles/gaurang_raval.jpg';
import zunnunnarmawala from '../public/profiles/zunnun_narmawala.jpg';
import jaiprakashverma from '../public/profiles/jai_prakash_varma.jpg';

import hetshah from '../public/developers/HetShah.jpg';
import janmejayshastri from '../public/developers/janmejayshastri.jpg';
import vishalchaudhary from '../public/developers/vishalchaudhary.jpeg';
import kuldipchaudhari from '../public/developers/kuldipchaudhari.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Team() {

  const { current,setSwipe, handleTouchStart, handleTouchMove, scrollFunc, setcurrent, setsections, handleKeyPress, position, setposition } = useContext(SiteContext);

  useEffect(() => {
    setposition(0)
    setcurrent(2)
    setsections(3)
    setSwipe(true)
  }, [])

  return (
    <div 
    onKeyDown={handleKeyPress}
    tabIndex="0"
    onWheel={scrollFunc}
    onTouchStart={handleTouchStart}
    onTouchMove={handleTouchMove}>
      <Head>
        <title>MINeD | Team</title>
        <meta 
          name="author" 
          content="Centre of Excellence in Data Science at Nirma University" />
        <meta 
          name="description" 
          content="MINeD is a national level Hackathon organized by Centre of Excellence in Data Science at Nirma University in collabration with SUNY Binghamton University where you can participate, innovate and win exciting prizes."></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation Bar */}
      <Navbar />

      <main id="team">

        {/* Left Slider */}
        <Slider />

        {/* Main Content here */}
        <div id="content" >
          <section style={{
            transform: `translateY(-${position*80}vh)`
          }}>

            <div className='mentors'> 
              <h1>Mentors</h1>
              <div className='div'>
                <a href='https://www.linkedin.com/in/htrap94/' target="_blank">
                <div className='card'>
                  <img src={parth.src} className='profile'/>
                  <h3>Parth Agrawal <FontAwesomeIcon icon={faLinkedin} className='logo' /></h3> 
                  <p>GCP 1x Data Engineer</p>

                </div>
                </a>

                <a href='https://www.linkedin.com/in/jaldeep-vasavada-4545602a/' target="_blank">
                <div className='card'>
                  <img src={jaldeep.src} className='profile'/>
                  <h3>Jaldeep Vasavada <FontAwesomeIcon icon={faLinkedin} className='logo' /></h3> 
                  <p>Sr.SDE at Microsoft</p>
                </div>
                </a>
                {/* 
                <a href='https://www.linkedin.com/in/jay-shah-delivery/' target="_blank">
                <div className='card'>
                  <img src={jay.src} className='profile'/>
                  <h3>Jay Shah <FontAwesomeIcon icon={faLinkedin} className='logo' /></h3>
                  <p>Principal Consultant at InidaNIC</p>
                </div>
                </a>
                */}
              </div>
            </div>

          </section>

          <section style={{
            transform: `translateY(-${position*80}vh)`
          }}>

            <div className='team'> 
              <h1>Team</h1>
              <div className="grid-container">
                <div className="grid-item">
                  <a href='https://www.linkedin.com/in/rajesh-patel-b5144256/' target="_blank">
                  <img src={rnpatel.src} className='profile'></img>
                  <h3>Dr. Rajesh Patel <FontAwesomeIcon icon={faLinkedin} className='logo' /></h3>
                  
                  <h5>Advisor</h5>
                  </a>
                </div>

                <div className="grid-item">
                  <a href='https://www.linkedin.com/in/sang-won-yoon-bb886722/' target="_blank">
                  <img src={dryoon.src} className='profile'></img>
                  <h3>Dr. Sang Won Yoon <FontAwesomeIcon icon={faLinkedin} className='logo' /></h3>
                  
                  <h5>Advisor</h5>
                  </a>
                </div>

                <div className="grid-item">
                  <a href='https://www.linkedin.com/in/dr-madhuri-gujar-bhavsar-3bb61a6/' target="_blank">
                  <img src={drmadhuribhavsar.src} className='profile'></img>
                  <h3>Dr. Madhuri Bhavsar <FontAwesomeIcon icon={faLinkedin} className='logo' /></h3>
                  
                  <h5>Advisor</h5>
                  </a>
                </div>

                <div className="grid-item">
                  <a href='https://www.linkedin.com/in/sapan-mankad-4815601a/' target="_blank">
                  <img src={sapanmakad.src} className='profile'></img>
                  <h3>Sapan Mankad <FontAwesomeIcon icon={faLinkedin} className='logo' /></h3>
                  
                  <h5>Coordinator</h5>
                  </a>
                </div>

                <div className="grid-item">
                  <a href='https://www.linkedin.com/in/dvijesh-bhatt-76283920/' target="_blank">
                  <img src={dwijeshbhatt.src} className='profile'></img>
                  <h3>Dvijesh Bhatt <FontAwesomeIcon icon={faLinkedin} className='logo' /></h3>
                  
                  <h5>Coordinator</h5>
                  </a>
                </div>

                <div className="grid-item">
                  <a href='https://www.linkedin.com/in/priyank-thakkar-4701689b/' target="_blank">
                  <img src={priyankthakker.src} className='profile'></img>
                  <h3>Priyank Thakkar <FontAwesomeIcon icon={faLinkedin} className='logo' /></h3>                  
                  </a>
                </div>

                <div className="grid-item">
                  <a href='https://www.linkedin.com/in/dr-vijay-ukani-705a48a8/' target="_blank">
                    <img src={vijayukani.src} className='profile'></img>
                    <h3>Vijay Ukani <FontAwesomeIcon icon={faLinkedin} className='logo' /></h3>
                  </a>
                </div>

                <div className="grid-item">
                  <a href='https://in.linkedin.com/in/swati-jain-54845311' target="_blank">
                    <img src={swatijain.src} className='profile'></img>
                    <h3>Swati Jain <FontAwesomeIcon icon={faLinkedin} className='logo' /></h3>
                  </a>
                </div>

                <div className="grid-item">
                  <a href='https://technology.nirmauni.ac.in/author/ankit/' target="_blank">
                    <img src={ankitthakkar.src} className='profile'></img>
                    <h3>Ankit Thakkar <FontAwesomeIcon icon={faLinkedin} className='logo' /></h3>
                  </a>
                </div>

                <div className="grid-item">
                  <a href='https://www.linkedin.com/in/gaurang-raval-919b0017/' target="_blank">
                    <img src={gaurangraval.src} className='profile'></img>
                    <h3>Gaurang Raval <FontAwesomeIcon icon={faLinkedin} className='logo' /></h3>
                  </a>
                </div>

                <div className="grid-item">
                  <a href='https://in.linkedin.com/in/zunnun-narmawala-54690b57' target="_blank">
                    <img src={zunnunnarmawala.src} className='profile'></img>
                    <h3>Zunnun Narmawala <FontAwesomeIcon icon={faLinkedin} className='logo' /></h3>
                  </a>
                </div>

                <div className="grid-item">
                  <a href='https://technology.nirmauni.ac.in/author/jaiprakash/' target="_blank">
                    <img src={jaiprakashverma.src} className='profile'></img>
                    <h3>JaiPrakash Verma <FontAwesomeIcon icon={faLinkedin} className='logo' /></h3>
                  </a>
                </div>
              </div> 
            </div>
          </section>

          <section style={{
            transform: `translateY(-${position*80}vh)`
          }}>

            <div className='developers'> 
              <h1>Developers</h1>
              <div className="grid-container">

                <div className="grid-item">
                <a href='https://www.linkedin.com/in/hetshah1101/' target="_blank">
                  <img src={hetshah.src} className='profile'></img>
                  <h3>Het Shah <FontAwesomeIcon icon={faLinkedin} className='logo' /></h3>                  
                  </a>
                </div>

                <div className="grid-item">
                <a href='https://www.linkedin.com/in/janmejay-shastri/' target="_blank">
                  <img src={janmejayshastri.src} className='profile'></img>
                  <h3>Janmejay Shastri <FontAwesomeIcon icon={faLinkedin} className='logo' /></h3>                  
                  </a>
                </div>
                
                <div className="grid-item">
                <a href='https://www.linkedin.com/in/vishal-chaudhary-95b2571a6' target="_blank">
                  <img src={vishalchaudhary.src} className='profile'></img>
                  <h3>Vishal Chaudhary <FontAwesomeIcon icon={faLinkedin} className='logo' /></h3>                  
                  </a>
                </div>

                <div className="grid-item">
                <a href='https://www.linkedin.com/in/kuldip-chaudhari-726b651a3' target="_blank">
                  <img src={kuldipchaudhari.src} className='profile'></img>
                  <h3>Kuldip Chaudhari <FontAwesomeIcon icon={faLinkedin} className='logo' /></h3>                  
                  </a>
                </div>
              </div>
              
            </div>

          </section>

        </div>

      </main>
    </div>
  )
}
