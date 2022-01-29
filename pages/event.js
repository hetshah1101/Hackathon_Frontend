import Head from 'next/head';
import { useContext, useEffect } from 'react';
import SiteContext from '../components/SiteContext';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Carousel from 'nuka-carousel';

import health from '../public/Track/cardiogram.png';
import agriculture from '../public/Track/plant.png';
import service from '../public/Track/service1.png';
import automation from '../public/Track/Automation_2.png';
import transport from '../public/Track/shipped.png';
import first from '../public/prizes/gold-medal1.png'; 
import second from '../public/prizes/gold-medal2.png'; 
import third from '../public/prizes/gold-medal3.png'; 

import ITNULogo from "../public/Logos/ITNU_Logo.jpg";
import BULogo from "../public/Logos/Binghamton_University_logo.png";
import IndiaNICLogo from "../public/sponsors/india_nic.jpg";
import HopsLogo from "../public/sponsors/hops_logo.png";
import JklcLogo from "../public/sponsors/JKLC.png";

import WolframLogo from "../public/sponsors/wolfram.png";
import DoLogo from "../public/sponsors/DO_Logo_Horizontal_Blue.png";
import EchoARLogo from "../public/sponsors/echoAR_-_Logo_2020_-_Dark.png";
import InterviewCakeLogo from "../public/sponsors/interview_cake.png";
import GMCLogo from "../public/Logos/GMC_logo.png";
import VoiceFlowLogo from "../public/sponsors/voiceflow.png";


export default function Event() {

  const { current, setcurrent, handleTouchStart, handleTouchMove, scrollFunc, setSwipe, setsections, position, handleKeyPress, setposition } = useContext(SiteContext);

  useEffect(() => {
    setposition(0)
    setcurrent(1)
    setsections(7)
    setSwipe(true)
  }, [])

  return (
    <div
      onKeyDown={handleKeyPress}
      tabIndex="0"
      onWheel={scrollFunc}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <Head>
        <title>MINeD | Event</title>
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

      <main id="event">

        {/* Left Slider */}
        <Slider />

        {/* Main Content here */}
        <div id="content" >
          <section style={{
            transform: `translateY(-${position*80}vh)`
          }}>
            <div className='center'> 
              <h1>About Event</h1>
              <p className='quote'>
                &ldquo;Our intelligence is what makes us human, and AI is an extension of
                that quality.&rdquo;  — Yann LeCun.
              </p>
              <p>
                The Center of Excellence in Data Science, CSE department, Institute of Technology, Nirma University
                presents 48 hours long hackathon that offer opportunities to
                participants to serve the nation by developing a innovative and
                smart solution in the field of Healthcare, Agriculture,
                Transportation System, Industry Automation, Defense, Education, etc.
                using Artificial Intelligence, Machine Learning, Deep Learning,
                Computer Vision, Natural Language Processing, Internet of Things,
                Blockchain, etc. for betterment of human being.
              </p>
            </div>
          </section>
          
          <section style={{
            transform: `translateY(-${position*80}vh)`
          }}>
            <div className='carousel'>
              <h1>Tracks</h1>
              <Carousel
                className='slideshow'
                slidesToShow={3}
                slidesToScroll={2}
                speed={1000}
                wrapAround
                renderCenterLeftControls={({ previousSlide }) => (
                  <button className='sliderOptions' onClick={previousSlide}>&lt;</button>
                )}
                renderCenterRightControls={({ nextSlide }) => (
                  <button className='sliderOptions' onClick={nextSlide}>&gt;</button>
                )}
              >
                <div className='item'>
                  <h3>Healthcare</h3><img src={health.src} /><br/>
                  <span>Health is an essential component of any human being. Healthy and fit citizens can lead any nation on a global platform. Lack of information, time-consuming process and newly introduced virus/diseases are some of the parameters which need digital and smart strategical solution to produce a healthier future.</span>
                </div>
                <div className='item'>
                  <h3>Agriculture</h3><img src={agriculture.src} /><br/>
                  <span>Agriculture is playing a vital role in India's economy. Bringing the technological solution in the framing industry can improve the cultivation and productivity of crops. Recently, innovation in the filed of Bio-Technologies and Artificial intelligence brings resolution in the farming industry.</span>
                </div>
                <div className='item'>
                  <h3>Service to Society</h3><img src={service.src} /><br/>
                  <span>Bring the technologies in to real like can solve many societal problems. A country like India is facing many challenges like person/woman safety and better living for the elderly and handicaps. Find out a solution that makes the life of every human being better.</span>
                </div>
                <div className='item'>
                  <h3>Automation</h3><img src={automation.src} /><br/>
                  <span>In the emerging era of industry 4.0, industrial manufacturing companies are facing strong demand to increase their productivity using AI and data science-based automated solutions, which helps to produce fast, essential and accurate products. Technologies like CPS, AI, CV, NLP IoT &#38; cognitive computing help to design a better manufacturing process for any industry.</span>
                </div>
                <div className='item'>
                  <h3>Intelligent Transportation Systems</h3><img src={transport.src} /><br/>
                  <span>An intelligent transportation system (ITS) is one of the crucial parts of building smart cities. This process includes sensing, analysis, communication with internal and external resources and decision making to improve safety, mobility and efficiency.  A self-driving car and hyperloops are examples of ITS.</span>
                </div>
              </Carousel>
            </div>
          </section>

          <section style={{
            transform: `translateY(-${position*80}vh)`
          }}>
            <div className='carousel2'> 
            <h1>Schedule</h1>
            <Carousel
                className='slideshow'
                slidesToShow={1}
                slidesToScroll={1}
                speed={1000}
                renderCenterLeftControls={({ previousSlide }) => (
                  <button className='sliderOptions' onClick={previousSlide}>&lt;</button>
                )}
                renderCenterRightControls={({ nextSlide }) => (
                  <button className='sliderOptions' onClick={nextSlide}>&gt;</button>
                )}
              >

                {/* Day 1 Table */}
                <table className="table">
                  <tbody>
                  <th colspan='2'>Day 1</th>
                    <tr>
                      <td className="time">8:40 AM</td>
                      <td className="content">On Site Registration</td>
                    </tr>
                    <tr>
                      <td className="time">9:00 AM - 9:30 AM</td>
                      <td className="content">Opening ceremony</td>
                    </tr>
                    <tr>
                      <td className="time">9:30 AM - 10:00 PM</td>
                      <td className="content">Keynote Sessions </td>
                    </tr>
                    <tr>
                      <td className="time">10:00 AM</td>
                      <td className="content">The Hack Starts!</td>
                    </tr>
                    <tr>
                      <td className="time">1:30 PM - 2:30 PM</td>
                      <td className="content">Lunch</td>
                    </tr>
                    <tr>
                      <td className="time">2:30 PM - 5:30 PM</td>
                      <td className="content">Hacking Continues</td>
                    </tr>
                    <tr>
                      <td className="time">5:30 PM - 6:30 PM</td>
                      <td className="content">First Round of Mentorship!</td>
                    </tr>
                    <tr>
                      <td className="time">5:30 PM - 8:30 PM</td>
                      <td className="content">Hacking Continues</td>
                    </tr>
                    <tr>
                      <td className="time">8:30 PM - 9:30 PM</td>
                      <td className="content">Dinner!</td>
                    </tr>

                    <tr>
                      <td className="time">9:30 PM - 12:00 AM</td>
                      <td className="content">Hacking Continues</td>
                    </tr>
                  </tbody>
                </table>

                {/* Day 2 Table */}
                <table className="table">
                  <tbody>
                    <th colspan='2'>Day 2</th>
                    <tr>
                      <td className="time">12:00 AM - 1:00 AM</td>
                      <td className="content">Fun Activity</td>
                    </tr>
                    <tr>
                      <td className="time">1:00 AM - 8:45 AM</td>
                      <td className="content">Hacking Continues</td>
                    </tr>
                    <tr>
                      <td className="time">8:45 AM - 9:30 AM</td>
                      <td className="content">Breakfast</td>
                    </tr>
                    <tr>
                      <td className="time">9:30 AM - 1:30 PM</td>
                      <td className="content">Hacking Continues</td>
                    </tr>
                    <tr>
                      <td className="time">1:30 PM - 2:30 PM</td>
                      <td className="content">Lunch</td>
                    </tr>
                    <tr>
                      <td className="time">2:30 PM - 3:00 PM</td>
                      <td className="content">Final Submittion</td>
                    </tr>
                    <tr>
                      <td className="time">3:00 PM - 4:00 PM</td>
                      <td className="content">First Judging round</td>
                    </tr>
                    <tr>
                      <td className="time">4:00 PM - 5:00 PM</td>
                      <td className="content">High Tea and Discussion</td>
                    </tr>

                    <tr>
                      <td className="time">5:00 PM onwards</td>
                      <td className="content">
                        Final Presentation, Winner's Anouncement and Prize
                        Distribution
                      </td>
                    </tr>
                  </tbody>
                </table>  
              </Carousel>

            </div>
          </section>

          <section style={{
            transform: `translateY(-${position*80}vh)`
          }}>
            <div className='prizes'> 
              <h1>Prizes</h1>
              <div className='div'>
                <div className='two'>
                  <img src={second.src}/>
                  <h3>Second</h3>
                  <p>&#36;300</p>
                </div>
                <div className='one'>
                  <img src={first.src}/>
                  <h3>First</h3>
                  <p>&#36;500</p>
                </div>
                <div className='three'>
                  <img src={third.src}/>
                  <h3>Third</h3>
                  <p>&#36;200</p>
                </div>
              </div>
            </div>
          </section>

          <section style={{
            transform: `translateY(-${position*80}vh)`
          }}>
            <div className='carousel'>
              <h1>Perks</h1>
              <Carousel
                className='slideshow'
                slidesToShow={3}
                slidesToScroll={2}
                speed={1000}
                wrapAround
                renderCenterLeftControls={({ previousSlide }) => (
                  <button className='sliderOptions' onClick={previousSlide}>&lt;</button>
                )}
                renderCenterRightControls={({ nextSlide }) => (
                  <button className='sliderOptions' onClick={nextSlide}>&gt;</button>
                )}
              >

                {/* item 1 */}
                <div className='perks'>
                  <img src={WolframLogo.src} /><br/>
                  <span>
                    <h3>For Winners</h3>
                    <ul>
                      <li>Wolfram | One Personal worth &#36;375</li>
                      <li>Wolfram | Alpha Pro worth &#36;375</li>
                    </ul>

                    <h3>For All Participants</h3>
                    <ul>
                      <li>Access to Wolfram | One for 30 days</li>
                      <li>Wolfram | One includes both Desktop and Cloud access, full access to the Wolfram Language and Knowledgebase, FreeCDF Deployment, 5000 Wolfram|Alpha API calls, 5000 Cloud Credits, 2 installations per user and 2 GB of Cloud Storage. The value of this access is &#36;25.00 per user</li>
                    </ul>
                  </span>
                </div>

                {/* item 2 */}
                <div className='perks'>
                  <img src={DoLogo.src} /><br/>
                  <span>
                    <h3>For Winners</h3>
                    <ul>
                      <li>&#36;1000 credits for the first winner and $500 credits for the second winner digital ocean account.</li>
                    </ul>
                    <h3>For All Participants</h3>
                    <ul>
                      <li>&#36;100, 60-day free trial for all attendees</li>
                    </ul>
                  </span>                
                </div>

                {/* perks 3 */}
                <div className='perks'>
                  <img src={EchoARLogo.src} /><br/>
                  <span>
                    <h3>For Winners</h3>
                    <span className='info'>If you are interested to develop solution using Augmented Reality (AR) and Visual Reality (VR) technology and will use EchoAR as platform then winner team will receive :</span>
                    <ul>
                      <li>&#36;50 amazon gift card (per team)</li>
                      <li>3 month free business tier access</li>
                      <li>Selected projects will be featured on their “inspiration” page.</li>
                    </ul>
                    
                    <h3>For All Participants</h3>
                    <ul>
                      <li>1-month free business tier access to EchoAR platform</li>
                    </ul>
                  </span>
                </div>

                {/* perks 4 */}
                <div className='perks'>
                  <img src={VoiceFlowLogo.src} /><br/>
                  <span>
                    <h3>For All Participants</h3>
                    <ul>
                      <li>Six Month VoiceFlow Pro License</li>
                    </ul>
                  </span>
                </div>

                {/* perks 5 */}
                <div className='perks'>
                  <img src={InterviewCakeLogo.src} /><br/>
                  <span>
                    <h3>For All Participants</h3>
                    <ul>
                      <li>Full access licenses to all participates for their full coding interview prep course.</li>
                    </ul>
                  </span>
                </div>
              </Carousel>
            </div>
          </section>

          <section style={{
            transform: `translateY(-${position*80}vh)`
          }}>
            <div className='center'> 
            <h1>Winners</h1>
            </div>
          </section>

          <section style={{
            transform: `translateY(-${position*80}vh)`
          }}>
            <div className='sponsors'> 
            {/* <h1>Sponsors</h1> <br/> */}
            <table className='titleSponsors'>
              <tr>
                <th colspan='2'>Title sponsors</th>
              </tr>
              <tr>
                <td><a href="http://www.nirmauni.ac.in" target="_blank">
                  <img className='nopad' src={ITNULogo.src} alt="ITNU Logo"></img></a>
                </td>
                <td><a href="https://www.binghamton.edu/" target="_blank">
                  <img src={BULogo.src} alt="BU Logo"></img></a>
                </td>
              </tr>
            </table>

            <table className='goldSponsors'>
              <tr>
                <th colspan='3'>Gold sponsors</th>
              </tr>
              <tr>
                <td><a href="https://www.indianic.com/" target="_blank">
                  <img className='nopad' src={IndiaNICLogo.src} alt="IndiaNIC Logo"></img></a>
                </td>
                <td><a href="http://hops.healthcare/" target="_blank">
                  <img src={HopsLogo.src} alt="HOPS Logo"></img></a>
                </td>
                <td><a href="https://www.jklakshmicement.com/" target="_blank">
                  <img className='nopad' src={JklcLogo.src} alt="JKLC Logo"></img></a>
                </td>
              </tr>
            </table>

            <table className='partners'>
              <tr>
                <th colspan='3'>Partners</th>
              </tr>
              <tr>
                <td><a href="https://www.wolfram.com/" target="_blank">
                  <img src={WolframLogo.src} alt="Wolfram Logo"></img></a>
                </td>
                <td><a href="https://www.digitalocean.com/" target="_blank">
                  <img src={DoLogo.src} alt="Do Logo"></img></a>
                </td>
                <td><a href="https://www.echoar.xyz/" target="_blank">
                  <img src={EchoARLogo.src} alt="EchoAR Logo"></img></a>
                </td>
                <td><a href="https://www.voiceflow.com/" target="_blank">
                  <img src={VoiceFlowLogo.src} alt="VoiceFlow Logo"></img></a>
                </td>
                <td><a href="https://www.interviewcake.com/" target="_blank">
                  <img src={InterviewCakeLogo.src} alt="Interview Cake Logo"></img></a>
                </td>
                <td><a href="https://givemycertificate.com/" target="_blank">
                  <img src={GMCLogo.src} alt="GMC Logo"></img></a>
                </td>
              </tr>
            </table>

            </div>
          </section>
        </div>

      </main>
    </div>
  )
}
