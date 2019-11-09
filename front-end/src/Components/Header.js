import React from "react";
import dateFns from "date-fns";


function Header(props) {

    const dateFormat = "MMMM YYYY";

    return(
        <div 
            className="header"
            style={
                {display:'flex',
                justifyContent:'space-around',
                fontSize:'3vw',
                padding: '3vh 0',
                backgroundColor:'lightgray'}
            }
        >
            <span
                className="leftArrow"
                onClick={props.prevMonth}
                style={{cursor:'pointer'}}
            >
                ←
            </span>
            <span className="center">
                {dateFns.format(props.currentMonth, dateFormat)}
            </span>
            <span
                className="rightArrow"
                onClick={props.nextMonth}
                style={{cursor:'pointer'}}
            >
                →
            </span>
        </div>
    );
}

export default Header;