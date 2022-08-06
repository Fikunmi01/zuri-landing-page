import React from 'react'
import './stacks.css'

export default function Stacks() {
    return (
        <>
            <div
                className='stack-div'>
                <div
                    className='stack-flex-one'>
                    <img
                        src='https://training.zuri.team/section5wire.svg'
                        className='stack-arrow'
                        alt='arrow'
                    />

                    <p
                        className='stackp-one'>
                        We will help you get started
                    </p>

                    <h2>
                        High quality training with hands-on practice
                    </h2>

                    <p
                        className='stackp-two'>
                        We give you weekly tasks, ranging from easy to complex, as you progress from 
                        stage to stage means you are now ready to continue learning and grow independently.
                    </p>

                    <button
                        className='stack-enroll'>
                        Enroll Now
                    </button>

                    <div
                        className='stack-benefits'>
                        <div>
                            <img
                                src='https://training.zuri.team/hand.svg'
                                alt='stack icons'
                            />

                            <button>
                                Teamwork
                            </button>
                        </div>

                        <div>

                            <img
                                src='https://training.zuri.team/mentor.svg'
                                alt='stack icons'
                            />
                            <button>
                            
                                Mentorship
                            </button>
                        </div>
                        
                    </div>

                    <div
                        className='stack-benefits'>
                        <div>
                            <img
                                src='https://training.zuri.team/practice.svg'
                                alt='stack icons'
                            />
                            
                            <button>
                                
                                Practice
                            </button>
                        </div>

                        <div>
                            <img
                                src='https://training.zuri.team/games.svg'
                                alt='stack icons'
                            />
                            
                            <button>
                                Fun & Games
                            </button>
                        </div>

                    </div>
                    

                    <img
                        src='https://training.zuri.team/dotsection5.svg'
                        alt='dot pattern'
                        className='bottom-section-img'
                    />

                </div>

                <div
                    className='stack-flex-two'>
                    
                    <img
                        src='https://training.zuri.team/section5-image.png'
                        alt='Lady with the laptop'
                        className='flex-img'
                    />
                    
                    
                </div>
            </div>
        </>
    )
}