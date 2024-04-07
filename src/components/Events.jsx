import React from 'react'


function Events({ events }) {

    return (
        <div className="card" style={{ position: 'relative' }}>
            {console.log(events.src)}
            <img src={`/imgs/${events.src}.webp`} alt="" width={380} />
            <h2>{events.name}</h2>
            <h6><i className="bx bx-time" style={{ padding: 1 }}></i> {events.time}</h6>
        </div>
    )
}

export default Events