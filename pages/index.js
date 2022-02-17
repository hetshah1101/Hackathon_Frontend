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

  const { setcurrent, handleTouchStart, handleTouchEnd, scrollFunc, setSwipe, setsections, setposition, position, handleKeyPress } = useContext(SiteContext);
  const [up, setup] = useState(false)

  useEffect(() => {
    setposition(0)
    setcurrent(0)
    setsections(3)
    setSwipe(true)
  }, [])

  let faqs = [
    {
      Question: "What is Hackathon ?",
      Answer:
      
          "Hackathon is an interdisciplinary event where coders team up to solve problems around the world.",
      
    },
    {
      Question: "Why should I participate in hackathon ?",
      ListAnswer: [
        `Hackathon has plenty of benefits:`,
        `1) You will usually meet people at a hackathon event who have the same goals and skills as you. This type of event helps improve your networking experience.`,
        `2) Hackathon participation looks really impressive at your resume or CV. It signals to people that you have expertise in programming, experience performing in intense environments, and find a way to win.`,
        `3) Intense problem-solving environments such as hackathons promote the development of new ideas and concepts. You have to collaborate with individuals from diverse fields, with different interests and skills, all working together to solve the same problem.`,
        `4) Opportunities to develop a career as many companies offer a job to the hackathon winner.`,
        `5) Pair programming is awesome if you want to concentrate on getting as much done as possible in a limited time, and you'd love talking to your partner about problems. It's best to find someone with a similar level of ability, and take turns "driving" (typing) and advising.`
      ]
    },
    {
      Question: "Is this Hackathon online or offline ?",
      Answer: "This Hackathon is in online mode only." 
    },
    {
      Question: "Who can participate in this event ?",
      Answer:
      
          "Any student enrolled in any college in India and having the attitude and passion towards building solutions to address challenging real life problems is eligible to participate.",
      
    },
    {
      Question: "What should be the team size ?",
      Answer: "Team Size may be of 3-5 members." 
    },
    {
      Question: "Do I need to register for participating in this event ?",
      Answer:
      
          "Currently you need to register individually. Later, once the team registration is enabled, you need to register with your team details and the track for which you would be participating.",
      
    },
    {
      Question: "Should I have a team formed prior to registration ?",
      Answer:
      
          "No. It's not mandatory but it is good for you if team members are already known to you.",
      
    },
    {
      Question:
        "What if I don't have a team?",
      Answer:
      
          "Don't worry! You can send team joining request to public teams and become part of them. If this doesn't works our team assignment algorithm will assign you a team before the event starts!",
      
    },
    {
      Question: "What is the registration fee ?",
      Answer:
       "There is no registration fee for participating in this event.",
      
    },
    {
      Question: "Is this event limited to students of Gujarat only ?",
      Answer:
      
          "No, the event is open to all students from across the country.",
      
    },
    {
      Question:
        "Only students that belong to same College/ Branch can form a team ?",
      Answer:
      
          "No. A team can consist of members belonging to any college as well as any discipline. However every team member needs to be individually registered before forming a team.",
      
    },
    {
      Question: "Can I register for more than one tracks ?",
      Answer: "No, one team can register only for a single track." 
    },
    /*
    {
      Question: "Can I change the track after the registration ?",
      Answer:
      
          "No, discuss with all team members and choose the track wisely before submitting your registration details.",
      
    },
    */
    {
      Question: "Will I get any certificate of participation ?",
      Answer:
      
          "Yes, e-certificates will be issued to all active participants of the event who submit and present their solution on the last day of the event.",
      
    },
    /*
    {
      Question: "When will the problem definitions be provided ?",
      Answer:
      
          "Problem definitions specific to various tracks will be available from 20th February onwards.",
      
    },
    */
    {
      Question: "What is the procedure to cancel the registration ?",
      Answer:
      
          "If you feel that you will not be able to participate in the event after registering, just throw an email at minedhackathon2k22@gmail.com stating the same.",
      
    },
    {
      Question: "Will the submission entries be scrutinized ?",
      Answer:
      
          "No, there is no scrutiny. All entries will directly be able to work on the problem definitions as long as they follow the eligibility criteria.",
      
    },
    {
      Question:
        "I am working at a company. Am I eligible to participate in the event ?",
      Answer:
      
          "No, this season of the event is applicable only for students. ",
      
    },
    {
      Question: "Is there any track specific prize money ?",
      Answer:
      
          "Track specific prize money depends on industries sponsoring specific track. ",
      
    },
    {
      Question: "Will there be any perks offered to me ?",
      Answer:
      
          "In addition to gaining experience in working with peers in a competitive environment on real life problems, our sponsor partners are offering exciting perks / complementary product subscriptions to winners and/or participants.",
      
    },
    {
      Question: "Can I be part of two teams ?",
      Answer:
      
          "Yes, you can be part of multiple teams from different tracks. But only one team will be eligible for price.",
      
    },
    {
      Question:
        "My query is not listed in this FAQs section. What should I do ?",
      Answer:
      
          "Please write to us at minedhackathon2k22@gmail.com or join us on our social media platform.",
      
    },
  ];

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
      // tabIndex="0"
      // onWheel={scrollFunc}
      // onTouchStart={handleTouchStart}
      // onTouchEnd={handleTouchEnd}
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
              <h1>A Chance to Win Prizes worth Rs 1,00,000+</h1>
              <h1>March 3 - March 5, 2022</h1>
              {/* <h1>Last Year's Registratons - 632</h1> */}
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
              {/* 
              <h1>MINeD Hackathon 2!</h1>
              <button>Learn More</button>
              */}
            </div>
            <div className='right'>
              {/*
              <h1>MINeD Hackathon 2!</h1>
              <button>Learn More</button>
              */}
            </div>
          </section>
          <section className='col' style={{
            transform: `translateY(-${position*80}vh)`
          }}>
            <h1>About Organizers</h1> <br/>
            <div className='top'>
            
              <img src={NULogo.src} className='nopad' ></img>
              <div><p><a href="http://nirmauni.ac.in" target="_blank">
                Nirma University
              </a>{""}
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
              of Technology, Nirma University have established the
              Centre of Excellence in Data Science (CoE - DS) in collaboration
              with SUNY Binghamton University, USA in 2020.</p>
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
          <section style={{
            transform: `translateY(-${position*80}vh)`
          }}>
            
            <div className="faq">
            <h1>FAQs</h1> <br/>
              {faqs.map((item,index) => {
                return (<div className='faq-Item' key={index}>
                  <h3>{item.Question}</h3>
                  <p>{item.Answer}</p>
                  {item.ListAnswer ? item.ListAnswer.map(lst => <li>
                    {lst}
                  </li>) 
                   : ""}
                </div>)
              })}
            </div>
          </section>
        </div>

      </main>
    </div>
  )
}
