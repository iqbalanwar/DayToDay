import React from "react";
import dateFns from "date-fns";


function Header(props) {

    const dateFormat = "MMMM YYYY";

    return(
        <div className="header">
            <div className="leftArrow">
                <div onClick={props.prevMonth}>
                    left
                </div>
            </div>
            <div className="center">
                <span>
                {dateFns.format(props.currentMonth, dateFormat)}
                </span>
            </div>
            <div className="rightArrow">
                <div onClick={props.nextMonth}>
                    right
                </div>
            </div>
        </div>
    );
}

export default Header;