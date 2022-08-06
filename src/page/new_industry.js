import React from "react";
import { Link } from 'react-router-dom'
import Faq from "../components/faq";
import NewHero from "../components/new_hero";
import NewNav from "../components/new_navbar";
import Scope from "../components/scope";
import Stacks from "../components/stacks";
import Structure from "../components/structure";
import './new_industry.css'

export default function NewIndustry() {
    const cardInfo = [
        {
            id: 1,
            firstP: '01',
            secondP: "Fully Remote",
            thirdP: "100% online classes available to anyone in the world.",
            image: "https://training.zuri.team/curve1.png",
        },
        {
            id: 2,
            firstP: '04',
            secondP: "Real-life Projects",
            thirdP: "We give CV worthy projects to help you hit the ground running.",
            image: "https://training.zuri.team/curve4.svg",
        },
        {
            id: 3,
            firstP: '02',
            secondP: "Hands-on Experience",
            thirdP: "We don't just teach you theory, we show you how to build things.",
            image: "https://training.zuri.team/curve.svg",
        },
        {
            id: 4, 
            firstP: '05',
            secondP: "Beginner Friendly",
            thirdP: "We provide step-by-step procedures on how to get things done.",
            image: "https://training.zuri.team/curve5.svg",
        },
        {
            id: 5,
            firstP: '03',
            secondP: "Collaborative Learning",
            thirdP: "We connect you with like minds to grow together.",
            image: "https://training.zuri.team/curve3.svg",
        },
        {
            id: 6,
            firstP: '06',
            secondP: "In-program Mentorship",
            thirdP: "During and after the program you have access to experience seniors.",
            image: "https://training.zuri.team/curve6.svg",
        },
    ]
    return (
        <div
            className="new-industry">
            <NewNav/> 
            <NewHero/>

            <div
                className="about-us">
                <h2>INGRESSIVE FOR GOOD WAS LAUNCHED IN JULY 2020 WITH NO DOLLAR IN DONATION...</h2>

                <img
                    src="https://training.zuri.team/ingresive.jpg"
                    alt="ingressive logo"
                />

                <p>to help increase the earning power of african youths by providing them with tech skills, community, tools, resources and jobs...
                    <Link to='' className="link">
                        Read More
                    </Link>
                </p>
            </div>

            <div
                className="why-us">
                <img
                    src="https://training.zuri.team/section3wire.svg"
                    alt=""
                    className="arrow-three"
                />

                               

            </div>

            <div
                className="about-us-heading">
                <div>
                    <p
                        className="span">
                        Why Zuri Training?
                    </p>

                    <h2>Here at Zuri, you gain access to enough knowledge to introduce and aid your success in the tech industry.</h2>
                </div>

                <div>
                    <img
                        src="https://training.zuri.team/Star.jpg"
                        alt=""
                        className="star-icon"
                    />
                </div>

            </div>

            <div
                className="new-card-flex">
                {cardInfo.map((e,i)=> {
                    return (
                        <div
                            key={e.id}
                            id= {i===0 ? 'active': ''}
                            className='new-card-di'>
                            <img
                                src={e.image}
                                alt="card curve"
                                className="card-curve"
                            />

                            <div
                                className="new-card-typo">
                                <p
                                    className="first-p">
                                    {e.firstP}
                                </p>

                                <p
                                    className="second-p">
                                    {e.secondP}
                                </p>

                                <p
                                    className="third-p">
                                    {e.thirdP}
                                </p>
                            </div>
                        </div>                        
                    )
                })}
            </div>


            <Stacks/>
            <Scope/>
            <Faq/>
            <Structure/>
            
        </div>
    )
}


