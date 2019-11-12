import React from 'react';

const Event = (props) => {

    return(
        <div>
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
        </div>
    );
}

export default Event;