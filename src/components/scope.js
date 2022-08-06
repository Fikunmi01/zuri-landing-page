import React from "react";
import './scope.css'

export default function Scope() {
    const scopeInfo= [
        {
            id: 1,
            title: "Frontend Development",
            imageOne: "https://training.zuri.team/html.svg",
            imageTwo: "https://training.zuri.team/css-3%20logo.svg",
            imageThree: "https://training.zuri.team/javascript%20logo.svg",
            description: "This track deals with the aspect of your application that the users interact with. A front-end developer will be able to correctly interpret a given design to the user interface.",
        },
        {
            id: 2,
            title: "DevOPS",
            imageOne: "https://training.zuri.team/Ubuntu%20logo.svg",
            imageTwo: "https://training.zuri.team/Bash%20logo.svg",
            imageThree: "https://training.zuri.team/aws%20logo.svg",
            description: "The DevOps track is an extension of the backend track. It involves tools that’ll allow the participant to deploy solutions for public use.",
        },
        {
            id: 3,
            title: "Backend Development",
            imageOne: "https://training.zuri.team/php2%20logo.svg",
            imageTwo: "https://training.zuri.team/python-4%20logo.svg",
            imageThree: "https://training.zuri.team/javascript%20logo.svg",
            description: "This track deals with the aspect of the application the user does not directly interact with. It allows the frontend function either by running some back-end code or connecting to the database.",
        },
        {
            id: 4,
            title: "Fullstack Development",
            imageOne: "https://training.zuri.team/html.svg",
            imageTwo: "https://training.zuri.team/css-3%20logo.svg",
            imageThree: "https://training.zuri.team/javascript%20logo.svg",
            imageFour: "https://training.zuri.team/python-4%20logo.svg",
            description: "A combination of frontend, backend, and DevOps. This track will only be available to participants who have the time to dedicate to the training.",
        },
        {
            id: 5,
            title: "Product Design",
            imageOne: "https://training.zuri.team/adobe-xd%20logo.svg",
            imageTwo: "https://training.zuri.team/Figma%20logo.svg",
            description: "This track deals with creating a graphic plan for an application. You will learn to convert project documentation into viewable and understandable graphic design for the developers to work with.",
        },
      
        {
            id: 6,
            title: "Frameworks",
            imageOne: "https://training.zuri.team/Laravel%20logo.svg",
            imageTwo: "https://training.zuri.team/React%20logo.svg",
            imageThree: "https://training.zuri.team/Django%20logo.svg",
            description: "During the program we will be exploring several useful frameworks to give you an edge in the industry and help you develop complex applications much faster.",
        },
    ]
    return (
        <>
            <div
                className="scope-div">
                <div
                    className="scope-head">
                    <p>
                        Scope of the program
                    </p>

                    <h2>
                        Here is the list of areas that will be explored in the training.
                    </h2>

                    <img
                        src="https://training.zuri.team/section6.svg"
                        alt=""
                    />
                </div>

                <div
                    className="scope">
                    <div
                        className="scope-card-div">
                        {scopeInfo.map((info,i)=> {
                            return (
                                <div
                                key={info.id}>
                                    <div
                                        className="scope-card">
                                        <h3>{info.title}</h3>
                                        
                                        <div>
                                            <img
                                                src={info.imageOne}
                                                className= {i===0 ? 'html': i===2 ? 'php': i===4 ? 'adobe' : i===1 ? 'ubuntu': i===3 ? 'html' : i===5 ? 'laravel' : ''}
                                                alt='logo icon'
                                            />  

                                            <img
                                                src={info.imageTwo}
                                                className= {i===0 ? 'css': i===2 ? 'python': i===4 ? 'figma' : i===1 ? 'bash': i===3 ? 'css' : i===5 ? 'react' : ''}
                                                alt='logo icon'
                                            />

                                            <img
                                                src={info.imageThree}
                                                className= {i===0 ? 'javascript': i===2 ? 'javascript': i===4 ? 'none' : i===1 ? 'amazon': i===3 ? 'javascript' : i===5 ? 'django' : ''}
                                                alt='logo icon'
                                            />

                                            <img
                                                src={info.imageFour}
                                                className= {i===0 ? 'none': i===2 ? 'none': i===4 ? 'none' : i===1 ? 'none': i===3 ? 'python' : i===5 ? 'none' : ''}
                                                alt='logo icon'
                                            />
                                        </div>

                                        <p
                                            className="stack-description">
                                            {info.description}
                                        </p>

                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div
                    className="course-btn">
                    <button
                        className="stack-enroll-btn">
                        Enroll now
                    </button>
                </div>
            </div>
            
        </>
    )
}