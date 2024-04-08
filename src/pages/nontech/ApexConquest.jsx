import React, { useEffect } from 'react'
import Button from '../../components/Button';

function ApexConquest() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const rules = [
        "Solo Only: Players must compete individually without teaming up.",
        "Friendly Match 1: Casual gameplay mode without prizes, for practice and enjoyment.",
        "Competitive Match 1 (Prize) (Erangel Map): Individual competition on Erangel map with prizes at stake."
    ];
    
    

    



    return (
        <>
            <div className='events'>
                <div className="count-h">Apex Conquest</div>
                <div className="count-p">BGMI/ FREE FIRE</div>

                <div className="d-flex">
                    <div className="img">
                        <img src="/imgs/nontech/event3.webp" width={450} alt="" />
                        <div className="btn-ly" style={{ marginTop: -5, display: 'flex', justifyContent: 'center' }}>
                            <Button />

                        </div>
                        <h5 style={{ textAlign: 'center', marginTop: 34, fontSize: 21 }}>+91 6380381466</h5>
                        <h5 style={{ textAlign: 'center', marginTop: 12, fontSize: 24 }}>Jana Muthuraj M</h5>
                    </div>
                    <div className="info">
                        <h2>Description</h2>
                        <p>
                        BGMI and Free Fire are popular mobile battle royale
                         games with thriving esports scenes, offering intense 
                         gameplay and frequent updates.
                        </p>
                        <h2>BGMI</h2>
                        <ul>
                            {rules.map((rule, index) => (
                                <li key={index}>{rule}</li>
                            ))}
                        </ul>

                       

                        <ul className='students'>
                            <h2>Coordinators</h2>
                            <p>Akilan M</p>
                            <p>Sakthivinash B</p>
                            <p>Jana Muthuraj M</p>
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

export default ApexConquest