import React from 'react'
import './faq.css'

export default function Faq() {
    const [selectedId, setSelectedId] = React.useState();

    const handleClick = (id) => {
      setSelectedId(id !== selectedId ? id : null);
    };


    const faq= [
        {
            id: 1,
            question: "Would I have to pay to enroll for the training?",
            answer: "No, the program is completely free thanks to Ingressive For Good",
        },
        {
            id: 2,
            question: "What are the things I would need to participate?",
            answer: "You'll need a laptop, internet connection and the willingness to learn through collaboration and mentorship.",
        },
        {
            id: 3,
            question: "What happens if i join and I'm not active?",
            answer: "Participants who join the program and stop engaging will be given the chance to catch up. You'll also be assigned a 'study-mate' and mentor to help you. However, there is the possibility of not being promoted to the next stage if you remain inactive for too long",
        },
        {
            id: 4,
            question: "Can I switch from the part-time track to full-time and vice versa?",
            answer: "Unfortunately, no, you cannot switch from part-time to full-time and vice-versa",
        },
        {
            id: 5,
            question: "Will I get paid?",
            answer: "We reward some participants who complete tasks early, however, this is not a weekly reward. All the work that will be done during the program are hypothetical.",
        },
    ]
    return (
        <>
            <div
                className='faq'>
                <div
                    className='faq-title'>
                    <img
                        src='https://training.zuri.team/section7wire.svg'
                        alt=''
                    />

                    <p>Got Questions?</p> 
                    <h2>Frequently Asked Questions</h2>
                </div>

                {faq.map((info)=> {
                    return (
                        <div
                            key={info.id}>
                            <div
                                className='faq-box'>

                                <p
                                    className='faq-bold'>
                                    {info.question}
                                    <i 
                                    onClick={() => handleClick(info.id)}

                                        className="uil uil-plus">
                                        
                                    </i>
                                </p>
                                
                                {selectedId === info.id && (
                                    <>
                                        <p
                                            className='faq-light'>
                                            {info.answer}
                                        </p>
                                    </>
                                )}
                                
                            </div>
                        </div>
                    )
                })}
              

                <p
                    className='faq-cta'>
                    Still got questions? 

                    <button>
                        <i 
                            className="uil uil-twitter">

                        </i>

                        Tweet them at us
                    </button>

                </p>
                
            </div>
        </>
    )
}