import React from 'react';

// Custom Components
import Header from './Header';
import Days from './Days';
import Cells from './Cells';


const Month = (props) => {
    return(
        <div className="month" style={{marginBottom: "50px"}}>
            <Header 
                currentMonth = {props.currentMonth}
                nextMonth = {props.nextMonth}
                prevMonth = {props.prevMonth}
            />
            <Days/>
            <Cells
                monthInfo = {props}
            />
        </div>  
    );
}

export default Month;