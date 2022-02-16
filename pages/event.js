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
import openinnovation from '../public/Track/INNOVATION_ic.png';
import ai from '../public/Track/ai.png';
import comingsoon from '../public/Track/comingsoon.png';
import first from '../public/prizes/gold-medal1.png'; 
import second from '../public/prizes/gold-medal2.png'; 
import third from '../public/prizes/gold-medal3.png'; 

import ITNULogo from "../public/Logos/ITNU_Logo.jpg";
import BULogo from "../public/Logos/Binghamton_University_logo.png";
import cactusLogo from "../public/sponsors/cactusglobal.png";
import HopsLogo from "../public/sponsors/hops_logo.png";
import JklcLogo from "../public/sponsors/JKLC.png";
import V360logo from "../public/sponsors/LOGO_B2.png";

import WolframLogo from "../public/sponsors/wolfram.png";
import DoLogo from "../public/sponsors/DO_Logo_Horizontal_Blue.png";
import EchoARLogo from "../public/sponsors/echoAR_-_Logo_2020_-_Dark.png";
import InterviewCakeLogo from "../public/sponsors/interview_cake.png";
import GMCLogo from "../public/sponsors/GMC_logo.png";
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
              <h1>About the Event</h1>
              <p className='quote'>
                &ldquo;Our intelligence is what makes us human, and AI is an extension of
                that quality.&rdquo;  — Yann LeCun.
              </p>
              <p>
                The Center of Excellence in Data Science, CSE department, Institute of Technology, Nirma University
                presents 48 hours long hackathon from March 3 to March 5 2022. The hackathon will allow students
                to work on industry-level problems in the domains of Smart Healthcare, Applied Machine Learning for 
                Manufacturing Industry, AI &#38; Big Data, Computer Vision and Deep Learning, Internet Of Things, Natural
                Language Processing etc. 
                {/*
                that offers opportunities to
                participants to serve the nation by developing innovative and
                smart solutions in the field of Healthcare, Agriculture,
                Transportation System, Industry Automation, Defense, Education, etc.
                using Artificial Intelligence, Machine Learning, Deep Learning,
                Computer Vision, Natural Language Processing, Internet of Things,
                Blockchain, etc. for betterment of human being.
                */}
              </p>
            </div>
          </section>
          
          <section id="desktop" style={{
            transform: `translateY(-${position*80}vh)`
          }}>
            <div className='carousel'>
              <h1>Tracks</h1>
              <Carousel
                className='slideshow'
                slidesToShow={3}
                slidesToScroll={2}
                speed={1000}
                id="desktop"
                wrapAround
                renderCenterLeftControls={({ previousSlide }) => (
                  <button className='sliderOptions' onClick={previousSlide}>&lt;</button>
                )}
                renderCenterRightControls={({ nextSlide }) => (
                  <button className='sliderOptions' onClick={nextSlide}>&gt;</button>
                )}
              >

                <div className='item'>
                  <h3>Healthcare by Hops</h3><img src={health.src} /><br/>
                  <span>Health is an essential component of any human being. Healthy and fit citizens can lead any nation on a global platform. Lack of information, time-consuming process and newly introduced virus/diseases are some of the parameters which need digital and smart strategical solution to produce a healthier future.</span>
                </div>
                {/* 
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
                  */}
                <div className='item'>
                  <h3>Making Scientific Research accessible using AI &#38; Big Data by Cactus Global</h3><img src={automation.src} /><br/>
                  <span>AI can identify data types, find possible connections among datasets, and recognize knowledge using natural language processing. It can be used to automate and accelerate data preparation tasks, including the generation of data models, and assist in data exploration.</span>
                </div>

                <div className='item'>
                  <h3>Applied ML for Manufacturing Industry's Problem by JK Lakshmi Pvt. Ltd.</h3><img src={ai.src} /><br/>
                  <span>The manufacturing process can be time-consuming and expensive for companies that don't have the right tools in place to develop their products. In recent years, machine learning (ML) has become more prevalent in building and assembling items, using advanced technology to reduce the length and cost of manufacturing.</span>
                </div>

                <div className='item'>
                  <h3>Open Innovation</h3><img src={openinnovation.src} /><br/>
                  <span>Every individual has creative solutions to problems faced in the real world. If you'd like to demonstrate a brilliant idea, but you feel that the idea does not suit other tracks, Open Track is ideal for you.</span>
                </div>

                <div className='item'>
                  <h3></h3><img src={comingsoon.src} /><br/>
                  <span>coming soon !</span>
                </div>
              </Carousel>
            </div>
          </section>
          <section id="mobile" style={{
            transform: `translateY(-${position*80}vh)`
          }}>
            <div className='carousel'>
              <h1>Tracks</h1>
              <Carousel
                className='slideshow'
                slidesToShow={1}
                slidesToScroll={1}
                speed={1000}
                id="desktop"
                wrapAround
                renderCenterLeftControls={({ previousSlide }) => (
                  <button className='sliderOptions' onClick={previousSlide}>&lt;</button>
                )}
                renderCenterRightControls={({ nextSlide }) => (
                  <button className='sliderOptions' onClick={nextSlide}>&gt;</button>
                )}
              >
                <div className='item'>
                  <h3>Healthcare by Hops</h3><img src={health.src} /><br/>
                  <span>Health is an essential component of any human being. Healthy and fit citizens can lead any nation on a global platform. Lack of information, time-consuming process and newly introduced virus/diseases are some of the parameters which need digital and smart strategical solution to produce a healthier future.</span>
                </div>
                {/* 
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
                  */}
                <div className='item'>
                  <h3>Making Scientific Research accessible using AI &#38; Big Data by Cactus Global</h3><img src={automation.src} /><br/>
                  <span>AI can identify data types, find possible connections among datasets, and recognize knowledge using natural language processing. It can be used to automate and accelerate data preparation tasks, including the generation of data models, and assist in data exploration.</span>
                </div>

                <div className='item'>
                  <h3>Applied ML for Manufacturing Industry's Problem by JK Lakshmi Pvt. Ltd.</h3><img src={ai.src} /><br/>
                  <span>The manufacturing process can be time-consuming and expensive for companies that don't have the right tools in place to develop their products. In recent years, machine learning (ML) has become more prevalent in building and assembling items, using advanced technology to reduce the length and cost of manufacturing.</span>
                </div>

                <div className='item'>
                  <h3>Open Innovation</h3><img src={openinnovation.src} /><br/>
                  <span>Every individual has creative solutions to problems faced in the real world. If you'd like to demonstrate a brilliant idea, but you feel that the idea does not suit other tracks, Open Track is ideal for you.</span>
                </div>

                <div className='item'>
                  <h3></h3><img src={comingsoon.src} /><br/>
                  <span></span>
                </div>
                
              </Carousel>
            </div>
          </section>

          <section style={{
            transform: `translateY(-${position*80}vh)`
          }}>
            <div className='carousel2'> 
            <h1>Tentative Schedule</h1>
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
                  <th colSpan='2'>3rd March (Day 1)</th>
                    <tr>
                      <td className="time">9:00 AM to 10:00 AM</td>
                      <td className="content">Inauguration ceremony</td>
                    </tr>
                    <tr>
                      <td className="time">10:00 AM to 11:00 AM</td>
                      <td className="content">Keynote Session</td>
                    </tr>
                    <tr>
                      <td className="time">11:00 AM onwards</td>
                      <td className="content">Hackathon begins...</td>
                    </tr>
                    <tr>
                      <td className="time">11:00 AM to 12:00 PM</td>
                      <td className="content">Industry slot to describe problems</td>
                    </tr>
                    <tr>
                      <td className="time">12:00 PM to 1:00 PM</td>
                      <td className="content">Track selection by participating teams</td>
                    </tr>
                    <tr>
                      <td className="time">1:00 PM to 4:00 PM</td>
                      <td className="content">Hacking continues... </td>
                    </tr>
                    <tr>
                      <td className="time">4:00 PM to 5:00 PM</td>
                      <td className="content">Industry interaction slot</td>
                    </tr>
                    <tr>
                      <td className="time">5:00 PM to 6:00 PM</td>
                      <td className="content">Mentoring session</td>
                    </tr>

                    <tr>
                      <td className="time">6:00 PM to 12:00 AM</td>
                      <td className="content">Hacking Continues...</td>
                    </tr>
                  </tbody>
                </table>

                {/* Day 2 Table */}
                <table className="table">
                  <tbody>
                    <th colSpan='2'>4th March (Day 2)</th>
                    <tr>
                      <td className="time">12:00 AM to 11:00 AM</td>
                      <td className="content">Hacking Continues...</td>
                    </tr>
                    <tr>
                      <td className="time">11:00 AM to 12:00 PM</td>
                      <td className="content">Industry interaction slot</td>
                    </tr>
                    <tr>
                      <td className="time">12:00 PM to 4:00 PM</td>
                      <td className="content">Hacking continues..</td>
                    </tr>
                    <tr>
                      <td className="time">4:00 PM to 5:00 PM</td>
                      <td className="content">Industry interaction slot</td>
                    </tr>
                    
                    <tr>
                      <td className="time">5:00 PM to 6:00 PM</td>
                      <td className="content">Mentoring Session</td>
                    </tr>
                    <tr>
                      <td className="time">6:00 PM to 12:00 AM</td>
                      <td className="content">Hacking continues...</td>
                    </tr>
                    
                  </tbody>
                </table>  

                {/* Day 3 Table */}
                <table className="table">
                  <tbody>
                    <th colSpan='2'>5th March (Day 3)</th>
                    <tr>
                      <td className="time">12:00 AM to 11:00 AM</td>
                      <td className="content">Hacking Continues...</td>
                    </tr>
                    <tr>
                      <td className="time">11:00 AM</td>
                      <td className="content">Hackathon ends...</td>
                    </tr>
                    <tr>
                      <td className="time">11:00 AM to 12:00 PM</td>
                      <td className="content">Final Submission on portal</td>
                    </tr>
                    <tr>
                      <td className="time">12:30 pm to 3:00 pm</td>
                      <td className="content">First round of evaluation begins (Project Presentation of all teams)</td>
                    </tr>
                    <tr>
                      <td className="time">3:45 pm to 4:00 pm</td>
                      <td className="content">Track winners Announcement</td>
                    </tr>
                    <tr>
                      <td className="time">4:30 pm onwards</td>
                      <td className="content">Final round of evaluation (Project Presentation of top selected teams)</td>
                    </tr>
                    <tr>
                      <td className="time">7:30 pm to 8:00 PM</td>
                      <td className="content">Announcement of Grand Prize Winner</td>
                    </tr>
                    <tr>
                      <td className="time">8:00 pm to 9:00 pm</td>
                      <td className="content">Concluding Remarks and valedictory session</td>
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
              <h1>Grand Prizes</h1>
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

          <section id="desktop" style={{
            transform: `translateY(-${position*80}vh)`
          }}>
            <div className='carousel'>
              <h1>Track Prizes</h1>
              <Carousel
                className='slideshow'
                slidesToShow={3}
                slidesToScroll={2}
                speed={1000}
                id="desktop"
                wrapAround
                renderCenterLeftControls={({ previousSlide }) => (
                  <button className='sliderOptions' onClick={previousSlide}>&lt;</button>
                )}
                renderCenterRightControls={({ nextSlide }) => (
                  <button className='sliderOptions' onClick={nextSlide}>&gt;</button>
                )}
              >
                
                <div className='item track'>
                  <img src={HopsLogo.src} /><br/>
                  <span>
                    <h3>Healthcare by Hops</h3>
                    <ul>
                      <li>First prize &#8377;10000</li>
                      <li>Second prize &#8377;5000</li>
                    </ul>
                    <br/>
                    <p>&#42; If the solution/submission will be found exceptionally good, then the concerned will be considered for an internship opportunity.</p>
                   </span> 
                </div>
               
                <div className='item track'>
                  <img src={cactusLogo.src} /><br/>
                  <span>
                    <h3>Making scientific research accessible using AI and Big data by cactus</h3>
                    <ul>
                      <li>First prize &#8377;15000</li>
                      <li>Second prize &#8377;10000</li>
                      <li>Third prize (Honorary) &#8377;5000</li>
                    </ul>
                    <br/>
                    <p>&#42; If the solution/submission will be found exceptionally good, then the concerned will be considered for an internship opportunity.</p>
                   </span> 
                </div>

                <div className='item track'>
                <img src={JklcLogo.src} /><br/>
                  <span>
                    <h3>Applied ML for Manufacturing Industry's Problem by JK Lakshmi</h3>
                    <ul>
                      <li>First prize &#8377;10000</li>
                      <li>Second prize &#8377;5000</li>
                    </ul>
                   </span> 
                </div>

                <div className='item track'>
                  <img className='image-bg' src={V360logo.src} /><br/>
                  <span>
                    <h3>V360 Technology Inc</h3>
                    <ul>
                      <li>First prize &#8377;20000</li>
                      <li>First prize &#8377;10000</li>
                      <li>Third prize &#8377;5000</li>
                    </ul>
                    <br/>
                    <p>&#42; Prize money distribution is based on the quality of solution/submission</p>
                   </span> 
                </div>

                <div className='item track'>
                  <h3></h3><img src={comingsoon.src} /><br/>
                  <span>coming soon !</span>
                </div>
              </Carousel>
            </div>
          </section>


          <section id="mobile" style={{
            transform: `translateY(-${position*80}vh)`
          }}>
            <div className='carousel'>
              <h1>Track Prizes</h1>
              <Carousel
                className='slideshow'
                slidesToShow={1}
                slidesToScroll={1}
                speed={1000}
                // id="mobile"
                wrapAround
                renderCenterLeftControls={({ previousSlide }) => (
                  <button className='sliderOptions' onClick={previousSlide}>&lt;</button>
                )}
                renderCenterRightControls={({ nextSlide }) => (
                  <button className='sliderOptions' onClick={nextSlide}>&gt;</button>
                )}
              >
                
                <div className='item track'>
                  <img src={HopsLogo.src} /><br/>
                  <span>
                    <h3>Healthcare by Hops</h3>
                    <ul>
                      <li>First prize &#8377;10000</li>
                      <li>Second prize &#8377;5000</li>
                    </ul>
                    <br/>
                    <p>&#42; If the solution/submission will be found exceptionally good, then the concerned will be considered for an internship opportunity.</p>
                   </span> 
                </div>
               
                <div className='item track'>
                  <img src={cactusLogo.src} /><br/>
                  <span>
                    <h3>Making scientific research accessible using AI and Big data by cactus</h3>
                    <ul>
                      <li>First prize &#8377;15000</li>
                      <li>Second prize &#8377;10000</li>
                      <li>Third prize (Honorary) &#8377;5000</li>
                    </ul>
                    <br/>
                    <p>&#42; If the solution/submission will be found exceptionally good, then the concerned will be considered for an internship opportunity.</p>
                   </span> 
                </div>

                <div className='item track'>
                <img src={JklcLogo.src} /><br/>
                  <span>
                    <h3>Applied ML for Manufacturing Industry's Problem by JK Lakshmi</h3>
                    <ul>
                      <li>First prize &#8377;10000</li>
                      <li>Second prize &#8377;5000</li>
                    </ul>
                   </span> 
                </div>

                <div className='item track'>
                  <img className='image-bg' src={V360logo.src} /><br/>
                  <span>
                    <h3>V360 Technology Inc</h3>
                    <ul>
                      <li>First prize &#8377;20000</li>
                      <li>First prize &#8377;10000</li>
                      <li>Third prize &#8377;5000</li>
                    </ul>
                    <br/>
                    <p>&#42; Prize money distribution is based on the quality of solution/submission</p>
                   </span> 
                </div>

                <div className='item track'>
                  <h3></h3><img src={comingsoon.src} /><br/>
                  <span>coming soon !</span>
                </div>
              </Carousel>
            </div>
          </section>

          <section style={{
            transform: `translateY(-${position*80}vh)`
          }}>
            <div className='sponsors'> 
            {/* <h1>Sponsors</h1> <br/> */}
            <table className='titleSponsors'>
              <tr>
                <th colSpan='2'>Title sponsors</th>
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
                <th colSpan='3'>Gold sponsors</th>
              </tr>
              <tr>
                <td><a href="https://cactusglobal.com" target="_blank">
                  <img className='nopad' src={cactusLogo.src} alt="cactusglobal Logo"></img></a>
                </td>
                <td><a href="http://hops.healthcare/" target="_blank">
                  <img src={HopsLogo.src} alt="HOPS Logo"></img></a>
                </td>
                <td><a href="https://www.jklakshmicement.com/" target="_blank">
                  <img className='nopad' src={JklcLogo.src} alt="JKLC Logo"></img></a>
                </td>
                <td><a href="#">
                  <img className='nopad image-bg' src={V360logo.src} alt="V360 Logo"></img></a>
                </td>
              </tr>
            </table>

            <table className='partners'>
              <tr>
                <th colSpan='3'>Partners</th>
              </tr>
              
                
              <tr>
                <td><a href="https://www.wolfram.com/" target="_blank">
                  <img src={WolframLogo.src} alt="Wolfram Logo"></img></a>
                </td>
                <td><a href="https://www.digitalocean.com/" target="_blank">
                  <img src={DoLogo.src} alt="Do Logo"></img></a>
                </td>
               
                <td><a href="https://givemycertificate.com/" target="_blank">
                  <img src={GMCLogo.src} alt="GMC Logo"></img></a>
                </td>
              {/* 
                <td><a href="https://www.echoar.xyz/" target="_blank">
                  <img src={EchoARLogo.src} alt="EchoAR Logo"></img></a>
                </td>
                <td><a href="https://www.voiceflow.com/" target="_blank">
                  <img src={VoiceFlowLogo.src} alt="VoiceFlow Logo"></img></a>
                </td>
                <td><a href="https://www.interviewcake.com/" target="_blank">
                  <img src={InterviewCakeLogo.src} alt="Interview Cake Logo"></img></a>
                </td>
              */}
              </tr>
              
            </table>

            </div>
          </section>
          
          <section style={{
            transform: `translateY(-${position*80}vh)`
          }}>
            <div className='carousel'>
              
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

                <div className='perks'>
                  <img src={DoLogo.src} /><br/>
                  <span>
                    <h3>For Winners</h3>
                    <ul>
                      <li>&#36; A total of $2,000 in credits to the winning teams. </li>
                    </ul>
                    <h3>For All Participants</h3>
                    <ul>
                      <li>&#36;100, 60-day free trial for all attendees</li>
                    </ul>
                  </span>                
                </div>

                <div className='perks'>
                  <h3></h3><img src={comingsoon.src} /><br/>
                  <span>coming soon !</span>
                </div>

                  {/*
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

                <div className='perks'>
                  <img src={VoiceFlowLogo.src} /><br/>
                  <span>
                    <h3>For All Participants</h3>
                    <ul>
                      <li>Six Month VoiceFlow Pro License</li>
                    </ul>
                  </span>
                </div>

                <div className='perks'>
                  <img src={InterviewCakeLogo.src} /><br/>
                  <span>
                    <h3>For All Participants</h3>
                    <ul>
                      <li>Full access licenses to all participates for their full coding interview prep course.</li>
                    </ul>
                  </span>
                </div>
                */}
              </Carousel>
              
            </div>
          </section>
          
          {/* <section style={{
            transform: `translateY(-${position*80}vh)`
          }}>
            <div className='center'> 
            <h1>Winners</h1>
            </div>
          </section> 
          */}
        </div>

      </main>
    </div>
  )
}
