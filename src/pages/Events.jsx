import React from 'react'
import Contact from '../components/Contact';
import Button from '../components/Button';

function Events() {
    const topics = [
        "AI in daily life",
        "The future of transportation",
        "AI in education",
        "ML for productivity",
        "Blockchain for data analytics",
        "Data-driven consumer experience",
        "Your innovative ideas"
    ];

    const rules = [
        "Presentation should be done in English",
        "Team should comprise of only 3 members",
        "Individual participation is also encouraged",
        "Maximum 7 min is provided for each presentation (5 min presentation, 2 min Q&A session)",
        "All participants are allowed to use a maximum of 12 slides"
    ];

    return (
        <>
            <div className='events'>
                <div className="count-h">MINDSCAPES UNFOLD</div>
                <div className="count-p">Paper Presentation</div>

                <div className="d-flex">
                    <div className="img">
                        <img src="/imgs/tech/event1.webp" width={450} alt="" />
                        <div className="btn-ly" style={{marginTop: -85, display: 'flex', justifyContent: 'center'}}>
                            <Button />
                            
                        </div>
                        <h5 style={{textAlign: 'center', marginTop: 28, fontSize: 25}}>+91 9840440839</h5>
                    </div>
                    <div className="info">
                        <h2>Topics</h2>
                        <ul>
                            {topics.map((topic, index) => (
                                <li key={index}>{topic}</li>
                            ))}
                        </ul>

                        <h2>RULES</h2>
                        <ul>
                            {rules.map((rule, index) => (
                                <li key={index}>{rule}</li>
                            ))}
                        </ul>

                        <ul className='students'>
                            <h2>Coordinators</h2>
                            <p>Shyam Kumar A</p>
                            <p>Kirupa D</p>
                            <p>Aravind G</p>
                            <p>Janani P</p>
                            <p>Arun KH</p>
                            <p>Sachin R</p>
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

export default Events