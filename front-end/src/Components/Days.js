import React, {Component} from "react";

function Days() {

    const days = [ "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday" ]

    return(
        <div 
            className="week"
            style={{
                display:"flex",
                justifyContent:"space-around",
                fontSize: '1.5vw',
                padding: '5vh 0',
                borderBottom: '2px solid black'
            }}
        >
            {days.map((day, index) => {
                return <span key={index}> {day} </span>
            })}
        </div>
    );
}

export default Days;