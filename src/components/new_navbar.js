import React from 'react'
import './new_navbar.css'

export default function NewNav() {
    return (
        <>
            <div
                className='new-industry-flex'>
                <img
                    src='https://training.zuri.team/logo.svg'
                    alt='logo'
                    className='logo'
                />

                <ul>
                    <li>
                        About
                    </li>

                    <li>
                        Why Us?                        
                    </li>

                    <li>
                        Stacks Covered
                    </li>

                    <li>
                        FAQs
                    </li>
                    
                    <li
                        className='enroll-btn'>
                        <img
                            src='https://training.zuri.team/thumbs.png'
                            className='enroll-btn-img'
                            alt=''
                        />

                        <p>

                            Enroll Now
                        </p>

                    </li>
                    
                </ul>
            </div>
        </>
    )
}