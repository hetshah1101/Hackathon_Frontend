import Head from 'next/head'
import { useContext, useEffect } from 'react';
import SiteContext from '../components/SiteContext'
import Navbar from '../components/Navbar'

export default function Team() {

  const { current, setcurrent, next, prev } = useContext(SiteContext);

  useEffect(() => {
    setcurrent(2)
  }, [])

  return (
    <div>
      <Head>
        <title>MINeD | Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main id="home">
        <Navbar />
        Hey
        {/* Content here */}
        {/* <Footer/> */}
      </main>
    </div>
  )
}