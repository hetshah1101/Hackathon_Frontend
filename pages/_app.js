import SiteContext from '../components/SiteContext'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { motion, AnimatePresence } from "framer-motion";

import * as gtag from '../lib/gtag';

// Importing stylesheets
import '../styles/main.scss'
import '../styles/navbar.scss'
import '../styles/pages.scss'
import '../styles/home.scss'
import '../styles/event.scss'
import '../styles/team.scss'
import '../styles/contact.scss'
import '../styles/register.scss'

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
{/* 
  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url)
    }
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
*/}
  /*
  ----------------------------------
  Arrow Key / Swipe Control
  ----------------------------------
  */
  const handleKeyPress = e => {
    if(e.key == "ArrowUp" && position>0 && position<sections) {
      setposition(position-1)
    }
    if(e.key == "ArrowDown" && position>-1 && position<sections-1) {
      setposition(position+1)
    }
  }
  const [scroll, setscroll] = useState(true)
  const scrollFunc = e => {
    // console.log(e)
    if(scroll) {
      if(e.deltaY < 0) {
        if(position>0) {
          setposition(position-1)
        }
        setscroll(false)
      }
      else if(e.deltaY > 0) {
        if(position<sections-1) {
          setposition(position+1)
        }
        setscroll(false)
      }
    }
  }
  /*
  ----------------------------------
  Next/Previous Page Slide
  ----------------------------------
  */
  const pages = ["", "event", "team", "contact"]

  const [current, setcurrent] = useState(0)
  const [change, setchange] = useState(false)
  const next = () => {
    setchange(true)
    if(current<3) {
      setcurrent((current+1))
    }
  }
  const prev = () => {
    setchange(true)
    if(current>0) {
      setcurrent(current-1)
    }
  }

  useEffect(() => {
    if(change) {
      router.push(`/${pages[current]}`)
    }
  }, [current])

  /*
  ----------------------------------
  Next/Previous Internal Scroll
  ----------------------------------
  */
  const [position, setposition] = useState(0)
  const [sections, setsections] = useState(0)
  const [swipe, setSwipe] = useState(true)
  useEffect(() => {
    setTimeout(()=>{
      setscroll(true)
    },2000)
  },[position])

  const getTouches = e => {
    return e.touches || e.originalEvent.touches
  }

  const handleTouchStart = e => {
    const first = getTouches(e)[0]
    var xDown = first.clientX
    var yDown = first.clientY
  }
  const handleTouchMove = e => {
    const first = getTouches(e)[0]
    var xDown = first.clientX
    var yDown = first.clientY
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = e.touches[0].clientX;                                    
    var yUp = e.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;
                                                                        
    if ( Math.abs( yDiff ) > Math.abs( xDiff ) ) {
      if(yDiff > 0) {
        if(position>0) {
          setposition(position-1)
        }
        setscroll(false)
      }
      else if(yDiff < 0) {
        if(position<sections-1) {
          setposition(position+1)
        }
        setscroll(false)
      }                       
    }
    xDown = null;
    yDown = null;      
  }

  return (
    <AnimatePresence>
      <motion.div
        key={router.route}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={{
          initial: {
            opacity: 1,
          },
          animate: {
            opacity: 1,
          },
          exit: {
            opacity: 1
          }
        }}
      >
        <SiteContext.Provider value={{
          current,
          setcurrent,
          next,
          prev,
          position,
          setposition,
          sections,
          setsections,
          swipe,
          setSwipe,
          handleKeyPress,
          scrollFunc,
          setscroll,
          handleTouchMove,
          handleTouchStart
        }} >
          <Component {...pageProps} />
        </SiteContext.Provider>
      </motion.div>
    </AnimatePresence>
  )
}
