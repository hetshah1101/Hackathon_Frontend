import React, {useContext} from 'react'
import Link from 'next/link';
import SiteContext from './SiteContext'
import logoNav from '../public/MINed_LOGO.png'
import { useRouter } from 'next/router';

const Navbar = () => {
    const router = useRouter();
    const { current, swipe, setcurrent, next, prev } = useContext(SiteContext);
    return (
        <div>
            <nav>
                <div className='logo'>
                    <img src={logoNav.src} onClick={() => router.push('/')} />
                    {/* <h1>Logo</h1> */}
                </div>
                <ul className='routes'>
                    <li className={current==0 ? "active" : null}><Link href="/">Home</Link></li>
                    <li className={current==1 ? "active" : null}><Link href="/event">Event</Link></li>
                    <li className={current==2 ? "active" : null}><Link href="/team">Team</Link></li>
                    <li className={current==3 ? "active" : null}><Link href="/contact">Contact</Link></li>
                </ul>
                {/* <ul className='social'>
                    <li>Fb</li>
                    <li>Ig</li>
                    <li>Li</li>
                    <li>Tw</li>
                </ul> */}
                <button className='register'><Link href="/register">Register</Link></button>
            </nav>
            {swipe ? <div id="swipeNav">
                <div className='buttons'>
                    <button onClick={() => prev()}>&lt;</button>
                    <button onClick={() => next()}>&gt;</button>
                </div>
                <div className='line'></div>
                <h1><span>0</span><span>{current+1}</span></h1>
            </div> : ""}
        </div>
    )
}
export default Navbar