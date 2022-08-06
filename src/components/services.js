    import React from "react";
    import './services.css'

    export default function Services() {
        const cardInfo= [
            {
                id: 1,
                image:"https://zuri.team/img/zuri-training-img.svg",
                description:"We understand a complete beginner cannot become a professionl after a few weeks, the aim here is to get you familiar enough with each the tools such that you'll be able to continue learning on your own with minimal support",
                link: "I want to be trained >"
            },
            {
                id: 2,
                image:"https://zuri.team/img/zuri-internship-img.svg",
                description:"We place you in a work simulation. We give you tasks every week, the tasks ranges from easy to hard as you progress from stage to stage, making it to the final stage means you are ready for actual work.",
                link: "I want to join the internship >"
            },
            {
                id: 3,
                image:"https://zuri.team/img/zuri-talent-img.svg",
                description:"Keeping pace with projects and being on the look out for the extremely talented individuals has become ever more challenging. Here is where Zuri Team comes into play to bring the best suited talent for your company",
                link: "I am looking for talent >"
            },

        ]

        return (
            <>
                <div
                    className="services">
                    <span className="head-span">
                        BY ZURI Team
                    </span>

                    <p
                        className="head-p">
                        We cater for every level of expertise and needs in the industry.
                    </p>

                    <div
                        className="card-div">
                    

                        {cardInfo.map((card)=> {
                            return (
                                <>
                                    <div
                                        key={card.id}
                                        className="card">
                                        <img
                                            src={card.image}
                                            alt=""
                                        />

                                        <p>{card.description}</p>

                                        <span className="card-span">{card.link}</span>
                                    </div>
                                </>
                            )
                        })}

                        

                        <img
                            src="https://res.cloudinary.com/dafsch2zs/image/upload/v1596628122/Zuri%20Landing/right_yz6hn3.png"
                            alt="pattern"
                            className="pattern-two"
                        />

                        <img
                            src="https://res.cloudinary.com/dafsch2zs/image/upload/v1596628122/Zuri%20Landing/left_bvmv7q.png"
                            alt="pattern"
                            className="pattern"
                        />

                    </div>
                </div>
            </>
        )
    }