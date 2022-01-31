import Head from 'next/head'
import { useContext, useEffect } from 'react';
import SiteContext from '../components/SiteContext'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'

import NirmaLogo from "../public/Contact Us/nirma_logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaPhoneAlt } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {

  const { current, setSwipe, setsections, setcurrent, position, setposition } = useContext(SiteContext);

  useEffect(() => {
    setposition(0)
    setcurrent(3)
    setsections(0)
    setSwipe(true)
  }, [])

  return (
    <div>
      <Head>
        <title>MINeD | Contact Us</title>
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

      <main id="contact">

        {/* Left Slider */}
        {/* <Slider /> */}

        {/* Main Content here */}
        <div id="content" >
          <section>

            <div className="container">
              <div>
                <h2>Contact Us</h2>
              </div>
              <div className="row">
                <div className="column">
                  <img src={NirmaLogo.src} className="imgcontact"></img><br/>
                    <label>Institute Of Technology,<br/> Nirma University,<br/>Ahmedabad, Gujarat,
                    India. <br/>Pincode : 382481</label>
                </div>

                <div className="column">
                  <FontAwesomeIcon icon={FaPhoneAlt} class='Logo' />{/* add phone icon */}
                  <label className='bold'>Dvijesh Bhatt: </label>
                  <a href="tel:9725985288" > <span className='bold'> 9725985288 </span> </a>
                  <br/><br/>

                  <FontAwesomeIcon icon={FaPhoneAlt} class='Logo' />{/* add phone icon */}
                  <label className='bold'>Sapan Mankad: </label>
                  <a href="tel:9824149256" > <span className='bold'> 9824149256 </span> </a>
                  <br/><br/>

                  <FontAwesomeIcon icon={FaPhoneAlt} class='Logo' /> {/* add mail icon */}
                  
                  <a className="email" href="mailto:minedhackathon2k22@gmail.com" > <span className='bold'> minedhackathon2k22@gmail.com</span> </a>
                  <br/><br/>
                </div>

                <div className="column">
                  <form action="/action_page.php">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" placeholder="Your name.."/>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Your Email.."/>
              
                    <label htmlFor="query">Query</label>
                    <textarea id="query" name="query" placeholder="Write something.."></textarea>
                    <input type="submit" value="Submit"/>
                  </form>
                </div>
              </div>
            </div>

          </section>
        </div>

      </main>
    </div>
  )
}
