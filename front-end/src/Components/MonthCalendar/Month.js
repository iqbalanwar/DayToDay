import React, {Component} from 'react';
import dateFns from "date-fns";

// Custom Components
import Header from './Header';
import Days from './Days';
import Cells from './Cells';


class Month extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentMonth: new Date(),
            selectedDate: new Date()
        };
    }

    nextMonth = () => {
        this.setState({
          currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
        });
    };

    prevMonth = () => {
        this.setState({
            currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
        });
    };

    onDateClick = (day) => {
        this.setState({
          selectedDate: day
        });
    };

    render() {
        return(
            <div className="month" style={{marginBottom: "200px"}}>
                <Header 
                    currentMonth = {this.state.currentMonth}
                    nextMonth = {this.nextMonth}
                    prevMonth = {this.prevMonth}
                />
                <Days/>
                <Cells
                    monthInfo = {this.state}
                    onDateClick = {this.onDateClick}
                />
            </div>  
        );
    }
}

export default Month;