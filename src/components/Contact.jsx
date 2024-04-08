import React from 'react'

function Contact() {
    return (
        <div className="conatct">
            <div className="d-flex">
                <div className="staff center">
                    <h3>Faculty Coordinators</h3>
                    <p>Mrs. J Amala Preyadarchane</p>
                    <p>Mrs. Pandi Deepa</p>

                </div>
                <div className="student center">
                    <h3>Event Coordinators</h3>
                    <p>Roshaan Peeris R</p>
                    <p>Nithish D</p>
                    <p>ShakthiSree R</p>
                    <p>Sree Ashika A</p>
                </div>
                <div className="hod">
                    <h3>HOD, AI&DS</h3>
                    <p>Dr. M.V Ishwarya</p>
                </div>
                <div className="help center">
                    <h3>Help Desk</h3>
                    <p>Akilan M<a href="tel:+917530003231">7530003231</a></p>
                    <p>Sakthivinash B<a href="tel:+918838493397">8838493397</a></p>
                </div>
            </div>
        </div>
    )
}

export default Contact