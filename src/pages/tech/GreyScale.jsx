import React, { useEffect } from 'react'
import Button from '../../components/Button';

function GreyScale() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const rules = [
        "Complete the challenge within 45 minutes.",
        "Work individually without collaboration.",
        "Create at least three screens.",
        "Bring your laptop with preferred design software. (Figma, Sketch, etc)"
    ];
    
    const themes = ["Social Media", "Food delivery", "Ecommerce", "Music App"];


    

    return (
        <>
            <div className='events'>
                <div className="count-h">GREYSCALE</div>
                <div className="count-p">UI/UX Design</div>

                <div className="d-flex">
                    <div className="img">
                        <img src="/imgs/tech/event4.webp" width={450} alt="" />
                        <div className="btn-ly" style={{ marginTop: 56, display: 'flex', justifyContent: 'center' }}>
                            <Button />

                        </div>
                        <h5 style={{ textAlign: 'center', marginTop: 12, fontSize: 21 }}>+91 9361341593</h5>
                        <h5 style={{ textAlign: 'center', marginTop: 12, fontSize: 24 }}>Madheshwaran M</h5>
                    </div>
                    <div className="info">
                        <h2>Description</h2>
                        <p>UI/UX design focuses on creating user-friendly interfaces and experiences by understanding user needs,
                            behaviors, and goals. It involves visual design,
                            interaction design, and usability testing to ensure intuitive and engaging designs
                        </p>
                        <h2>Rules</h2>
                        <ul>
                            {rules.map((rule, index) => (
                                <li key={index}>{rule}</li>
                            ))}
                        </ul>

                        <h2>Themes</h2>
                        <ul > 
                            {themes.map((rule, index) => (
                                <li key={index}>{rule}</li>
                            ))}
                        </ul>

                        <ul className='students'>
                            <h2>Coordinators</h2>
                            <p>Madheshwaran M</p>
                            <p>Sethu Raja</p>
                            <p>Varsha</p>
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

export default GreyScale