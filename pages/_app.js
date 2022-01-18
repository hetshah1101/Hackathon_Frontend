import SiteContext from '../components/SiteContext'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { motion, AnimatePresence } from "framer-motion";

// Importing stylesheets
import '../styles/main.scss'
import '../styles/navbar.scss'
import '../styles/pages.scss'
import '../styles/home.scss'
import '../styles/event.scss'
import '../styles/team.scss'
import '../styles/contact.scss'

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  /*
  ----------------------------------
  Next/Previous Page Slide
  ----------------------------------
  */
  const handleKeyPress = e => {
    console.log(position)
    if(e.key == "ArrowUp" && position>0 && position<sections) {
      setposition(position-1)
    }
    if(e.key == "ArrowDown" && position>-1 && position<sections-1) {
      setposition(position+1)
    }
  }
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
          handleKeyPress
        }} >
          <Component {...pageProps} />
        </SiteContext.Provider>
      </motion.div>
    </AnimatePresence>
  )
}
