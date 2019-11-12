import React from 'react';
import dateFns from "date-fns";

function Cells(props) {

    const { currentMonth } = props.monthInfo;
    // const { onDateClick } = props.onDateClick;

    const monthStart = dateFns.startOfMonth(currentMonth);
    const monthEnd = dateFns.endOfMonth(monthStart);
    
    const startDate = dateFns.startOfWeek(monthStart);
    const endDate = dateFns.endOfWeek(monthEnd);

    const dateFormat = "D";
    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
        for (let i = 0; i < 7; i++) {
            formattedDate = dateFns.format(day, dateFormat);

            days.push(
                <div
                    className={"day"}
                    key={day}


                    // ONCLICK HERE DAY

                >
                    <span 
                        className="dateNumber"
                        style={{fontSize: "1.5vw"}}
                    >{formattedDate}</span>
                </div>
            );
            day = dateFns.addDays(day, 1);
        }
        
        rows.push(
            <div 
                className="row"
                style={{
                    display: "flex",
                    justifyContent: "space-around",
                    padding: "3vh 0",
                    borderBottom: "1px solid black"
                }}
                key={day}>
                {days}
            </div>
        );
        days = [];
    }
    
    return <div className="cells">{rows}</div>;
}

export default Cells;