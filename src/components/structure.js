import React from 'react';
import './structure.css'

export default function Structure() {
    return (
        <>
            <div
                className='structure'>
                <div
                    className='structure-head'>

                    <img
                        src='https://training.zuri.team/section7wire.svg'
                        alt='arrow icon'
                        className='arrow'
                    />

                   <div
                        className='structure-head-text'>
                        <p
                            className='structure-title'>
                            Structure
                        </p>

                        <h2>
                            Program Structure
                        </h2>

                        <p
                            className='description'>
                            There are 2 broad paths in this Program based on your availability.
                        </p>
                   </div>

                    <img
                        src='https://training.zuri.team/Star1.svg'
                        alt=''
                        className='star'
                    />
                    
                </div>

                <div
                    className='structure-card'>
                    <div
                        className='structure-card-one'>

                        <h2>
                            Full-time
                        </h2>

                        <p>
                            Requires at least 25 hours weekly on program content.
                        </p>

                        <h3>
                            Available Tracks:
                        </h3>

                            <li>
                                Full Stack: Backend (Python, JavaScript), &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Frontend (HTML, CSS, JavaScript) & &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DevOps
                            </li>

                            <li>
                                Design: Figma, Adobe XD
                            </li>

                        <h3>
                            Phases:
                        </h3>

                            <li>
                                Training Phase
                            </li>

                            <li>
                                Project Phase
                            </li>
                            <h3>
                            Post Program:
                        </h3>

                            <li>
                                Certification of Attendance
                            </li>

                            <li>
                                Zuri Internship
                                <img
                                    src='https://training.zuri.team/clarity.svg'
                                    alt='info icon'
                                />
                                
                            </li>

                            <li>
                                Laptop Reward (upgrade or new one)
                                <img
                                    src='https://training.zuri.team/clarity.svg'
                                    alt='info icon'
                                />
                            </li>

                            <li>
                                Job Placement
                                <img
                                    src='https://training.zuri.team/clarity.svg'
                                    alt='info icon'
                                />
                            </li>

                            <li>
                                Zuri Talent Pool
                            </li>

                            <li>
                                More Training
                                <img
                                    src='https://training.zuri.team/clarity.svg'
                                    alt=''
                                />
                            </li>

                        <p>
                            Interview Prep
                        </p>

                        <p>
                            Algorithms & Data Structure
                        </p>

                        <p>
                            Freelance Setup & Training
                        </p>

                        <p>
                            LinkedIn Optimization
                        </p>

                        <p>
                            CV Review
                        </p>

                        <img
                            src='https://training.zuri.team/hour.png'
                            alt='analog'
                            className='analog'
                        />
                        
                    </div>



                    <div
                        className='structure-card-one'>

                        <h2>
                            Part-time
                        </h2>

                        <p>
                            Requires at least 15 hours weekly on program content.
                        </p>

                        <h3>
                            Available Tracks:
                        </h3>

                            <li>
                                Frontend:
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HTML, CSS, JavaScript
                            </li>

                            <li>
                                Backend: Can only select one backend &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;language
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Python,<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PHP,<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JavaScript
                            </li>

                            <li>
                                Design:
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Figma
                            </li>

                        <h3>
                            Phases:
                        </h3>

                            <li>
                                Training Phase
                            </li>

                            <li>
                                Project Phase
                            </li>
                            <h3>
                            Post Program:
                        </h3>

                            <li>
                                Certification of Attendance
                            </li>

                            <li>
                                Zuri Internship 
                            </li>

                        <img
                            src='https://training.zuri.team/time.png'
                            alt='clock'
                            className='digital'
                        />
                        
                    </div>


                </div>


            </div>
        </>
    )
}