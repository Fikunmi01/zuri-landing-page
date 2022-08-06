import React from "react";
import './new_hero.css'

export default function NewHero() {
    return (
        <>
            <div
                className="new-hero-flex">
                <div
                    className="image-one">
                    <img
                        src="https://training.zuri.team/lady1.jpg"
                        alt="lady in the background"
                    />
                </div>

                <div
                    className="new-text-hero">
                    <span>And now your search has ended...</span>
                    <h2>Gain Knowledge to to help you scale through the tech industry for free.</h2>
             
                    <p>
                        A basic introduction to software development and product design aimed at complete beginners, which anyone can join
                    </p>

                    <img
                        src="https://training.zuri.team/line.svg"
                        alt="arrow one"
                        className="arrow-one"
                    />

                    <button>Enroll Now</button>
                    
                    <img
                        src="https://training.zuri.team/section1wire.svg"
                        alt="arrow two"
                        className="arrow-two"
                    />

                    <img
                        src="https://training.zuri.team/maleface.svg"
                        alt="cutted out man "
                        className="cutted-man"
                    />
                    
                </div>

                <div
                    className="man">
                    <img
                        src="https://training.zuri.team/male1.jpg"
                        alt="man in the background"
                    />
                </div>
                
            </div>

        </>
    )
}