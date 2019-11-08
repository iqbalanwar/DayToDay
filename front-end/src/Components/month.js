import React, {Component} from 'react';
import dateFns from "date-fns";

import Header from './Header';

class Month extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentMonth: new Date(),
            selectedDate: new Date
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

    render() {
        return(
            <div className="month">
                <Header 
                    currentMonth = {this.state.currentMonth}
                    nextMonth = {this.nextMonth}
                    prevMonth = {this.prevMonth}
                />
            </div>  
        );
    }
}

export default Month;