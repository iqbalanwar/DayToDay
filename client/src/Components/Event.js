import React from 'react';

const Event = (props) => {

    return(
        <div style={{
            border: "1px solid black",
            width: "60vw",
            margin: "5vh auto"
        }}>
            <form 
                style={{
                    margin: "0 auto 5vh auto",
                    display: "flex",
                    flexDirection: "column",
                    width: "20vw"
                }}
                onSubmit={props.submitNewEvent}
            >
                <h3 style={{textAlign: "center"}}>Make a new event?</h3>
                <textarea 
                    type="text" 
                    placeholder="What is your event?"
                    value={props.description}
                    onChange={props.handleDescriptionChange}
                    style={{
                        height: "20vh",
                        width: "20vw"
                    }}
                />
                <input type="submit" value="submit" />
            </form>

            <strong><center>Show events from this date: </center></strong>
            <div onClick={props.displayDayEvents}>
                Load today's events:
                {props.events.map((event, key) => {
                    return <p key={key}>{event.description}</p>
                })}
            </div>
        </div>
    );
}

export default Event;