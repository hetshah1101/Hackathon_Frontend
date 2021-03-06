import Head from 'next/head'
import { useContext, useState, useEffect } from 'react';
import SiteContext from '../components/SiteContext'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import axios from 'axios'
import NirmaLogo from "../public/Contact Us/nirma_logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {

  const { current, setSwipe, setsections, setcurrent, position, setposition } = useContext(SiteContext);

  const [details, setdetails] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleChange = e => {
    setdetails({...details, 
      [e.target.name]: e.target.value
    })
  }

  const submitForm = () => {
    if (details.email.value != /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/)
    {
      alert("Invalid Email format")
    }
    else{
      axios.post(`https://apis.mined2022.tech/api/contact`, details)
      .then(res => {
        alert(res.data.message)
      })
      .catch(err => {
        alert(err.response ? err.response.data.message : "Something Went Wrong!")
      })
    }
  }

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
                  <FontAwesomeIcon icon={faPhoneAlt} className='icon' />{/* add phone icon */}
                  <label className='bold'>Dvijesh Bhatt: </label>
                  <a href="tel:9725985288" > <span className='bold'> 9725985288 </span> </a>
                  <br/><br/>

                  <FontAwesomeIcon icon={faPhoneAlt} className='icon' />{/* add phone icon */}
                  <label className='bold'>Sapan Mankad: </label>
                  <a href="tel:9824149256" > <span className='bold'> 9824149256 </span> </a>
                  <br/><br/>

                  <FontAwesomeIcon icon={faEnvelope} className='icon' /> {/* add mail icon */}
                  
                  <a className="email" href="mailto:support@mined2022.tech" > <span className='bold'> support@mined2022.tech</span> </a>
                  <br/><br/>
                </div>

                <div className="column">
                  <form action="/action_page.php">
                    <label htmlFor="name">Name</label>
                    <input onChange={handleChange} value={details.name} type="text" id="name" name="name" placeholder="Your name.."/>
                    <label htmlFor="email">Email</label>
                    <input onChange={handleChange} value={details.email} type="email" id="email" name="email" placeholder="Your Email.."/>
              
                    <label htmlFor="query">Query</label>
                    <textarea onChange={handleChange} value={details.message} id="query" name="message" placeholder="Write something.."></textarea>
                    <input onClick={() => submitForm()} type="button" value="Submit" />
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
