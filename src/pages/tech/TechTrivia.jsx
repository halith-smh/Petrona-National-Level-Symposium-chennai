import React from 'react'
import Button from '../../components/Button';

function TechTrivia() {
    const rules = [
        "In this event, students can participate individually or as a team (maximum 2 members).",
        "The technical quiz event will be conducted in online mode, so participants are required to use their own mobile phones.",
        "There will be both online registration and spot registration.",
        "There will be 2 rounds for this event, and after these rounds, the winner will be announced.",
        "The Event Coordinator will provide the link and code for the event. Once participants enter the link, they are not allowed to navigate away from the page or use another page simultaneously. Doing so will result in disqualification."
    ];
    

    const round1 = [
        "In this round, there will be a total of 30 questions, and the timing for the first round is 15 minutes.",
        "Participants will be given 30 seconds for each question.",
        "From this round, the top 10 participants will be selected for the second round."
    ];
    

    const round2 = [
        "In this round, there will be a total of 15 questions, and the timing for the second round is 15 minutes.",
        "Participants will be given 1 minute for each question.",
        "From this round, the top 3 participants will be selected, and the winners will be announced."
    ];
    
    


    return (
        <>
            <div className='events'>
                <div className="count-h">TECH TRIVIA</div>
                <div className="count-p">Tech Quiz</div>

                <div className="d-flex">
                    <div className="img">
                        <img src="/imgs/tech/event3.webp" width={450} alt="" />
                        <div className="btn-ly" style={{ marginTop: -5, display: 'flex', justifyContent: 'center' }}>
                            <Button />

                        </div>
                        <h5 style={{ textAlign: 'center', marginTop: 28, fontSize: 25 }}>+91 9361680479</h5>
                        <h5 style={{ textAlign: 'center', marginTop: 12, fontSize: 21 }}>Vasanth</h5>
                    </div>
                    <div className="info">
                        <h2>Description</h2>
                        <p>Dive into the world of AI, DI, and ML with our technical quiz.
                            Test your knowledge and stay ahead in these dynamic fields
                        </p>
                        <h2>Rules</h2>
                        <ul>
                            {rules.map((rule, index) => (
                                <li key={index}>{rule}</li>
                            ))}
                        </ul>

                        <h2>Round-1</h2>
                        <ul>
                        {round1.map((rule, index) => (
                                <li key={index}>{rule}</li>
                            ))}
                        </ul>

                        <h2>Round-2</h2>
                        <ul>
                        {round2.map((rule, index) => (
                                <li key={index}>{rule}</li>
                            ))}
                        </ul>

                        <ul className='students'>
                            <h2>Coordinators</h2>
                            <p>Vasanth</p>
                            <p>Sabari</p>
                            <p>Vaishnavi Jadhav</p>
                            <p>Sai Manogna</p>
                            <p>Akash </p>
                            <p>Subapriya</p>
                        </ul>



                    </div>

                </div>
                {/* <div style={{margin: 'auto', textAlign: 'center'}}>
                    <Button></Button>
                </div> */}
            </div>

        </>
    )
}

export default TechTrivia