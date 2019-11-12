import React from 'react';
import dateFns from "date-fns";

function Cells(props) {

    const { currentMonth, onDateClick } = props.monthInfo;

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

            // Localizes the day, so it doesn't return endDate,
            // but instead takes today's date:
            let today = day;
            
            days.push(
                <div
                    className={"day"}
                    key={day}

                    // Returns today's date
                    onClick={() => onDateClick(today)}
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