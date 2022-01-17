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
  const pages = ["", "event", "team", "contact"]

  const [current, setcurrent] = useState(0)
  const next = () => {
    if(current<3) {
      setcurrent((current+1))
    }
  }
  const prev = () => {
    if(current>0) {
      setcurrent(current-1)
    }
  }

  useEffect(() => {
    router.push(`/${pages[current]}`)
  }, [current])

  /*
  ----------------------------------
  Next/Previous Internal Scroll
  ----------------------------------
  */
 const [position, setposition] = useState(0)
 const [sections, setsections] = useState(0)

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
          setsections
        }} >
          <Component {...pageProps} />
        </SiteContext.Provider>
      </motion.div>
    </AnimatePresence>
  )
}
