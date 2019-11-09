import React, {Component} from "react";
import dateFns from "date-fns";

class Days extends Component {
    
    renderDays() {
        const dateFormat = "dddd";
        const days = [];
    
        let startDate = dateFns.startOfWeek(this.props.currentMonth);
    
        for (let i = 0; i < 7; i++) {
          days.push(
            <span className="day" key={i}>
              {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
            </span>
          );
        }
    
        return <div 
                    style={{
                        display:"flex",
                        justifyContent:"space-around"
                    }}>
                    {days}
                </div>
    }

    render() {
        return(
            <div 
                className="week"
            >
                {this.renderDays()}
            </div>
        );
    }
}

export default Days;