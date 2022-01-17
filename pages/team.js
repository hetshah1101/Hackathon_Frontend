import Head from 'next/head'
import { useContext, useEffect } from 'react';
import SiteContext from '../components/SiteContext'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'

export default function Team() {

  const { current, setcurrent, next, prev } = useContext(SiteContext);

  useEffect(() => {
    setcurrent(2)
  }, [])

  return (
    <div>
      <Head>
        <title>MINeD | Team</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation Bar */}
      <Navbar />

      <main id="team">

        {/* Left Slider */}
        <Slider />

        {/* Main Content here */}
        <div id="content" >
        </div>

      </main>
    </div>
  )
}
