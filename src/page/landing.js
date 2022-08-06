import React from 'react'
import Services from '../components/services'
import { Link } from 'react-router-dom'
import './landing.css'

export default function LandingPage() {
    return (
        <>
            <div
                className="hero">
                <img
                    src="https://zuri.team/img/zuri-logo-full.svg"
                    alt="logo"
                    className="logo"
                />
                
                <h2>
                    Learn, Build, Grow.
                </h2>

                <p>
                    Unlock your Brilliance with our hands-on <span>beginner</span> and <span>expert training</span>. 
                    Zuri Team has been immensely successful in creating a global network of a highly adept intelligent workforce that can help 
                    your company achieve their mission-critical <span>projects and goals</span>  
                </p>

              <div
                className='btn'>
                <Link to='/new-training'>
                    <button 
                        className="fill-button">
                        I'm new to the Industry
                    </button>

                </Link>
                    <button
                        className="outline-button"
                        >
                        I need industry experience
                    </button>
              </div>
            </div>

            <div>
                <Services/>
            </div>
 
            <div
                className='footer-landing-page'>

                <div
                    className='footer-flex'>
                    <img
                        src="https://zuri.team/img/zuri-logo-full.svg"
                        alt="logo"
                        className="footer-logo"
                    />

                    <div
                        className='footer-link'>
                        <h3>Links</h3>
                        <p>Store</p>
                        <p>Blog</p>
                    </div>

                    <div
                        className='footer-link'>
                        <h3>Contact</h3>
                        <p className='location'>8 Jubilee-CMD Road, Magodo, Lagos State</p>
                        <p>hello@zuri.team</p>
                    </div>

                    <div
                        className='footer-link img-link'>
                        <h3>Follow Us</h3>

                        <img
                            src='https://zuri.team/img/fb.png'
                            alt='fb-icon'
                        />

                        <img
                            src='https://zuri.team/img/twitter.png'
                            alt='twitter-icon'
                        />

                        <img
                            src='https://zuri.team/img/IG.png'
                            alt='ig-icon'
                        />

                        <img
                            src='https://zuri.team/img/in.png'
                            alt='linkedin-icon'
                        />

                    </div>
                </div>

                <div className='border'></div>

                <div 
                    className='legal'>
                    
                    <p>
                        <span>
                            &copy;
                        </span>

                        2020 ZURI TEAM

                    </p>
                </div>

            </div>
        </>

    )
}