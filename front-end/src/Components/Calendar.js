import React, {Component} from 'react';

import Month from './MonthCalendar/Month';
import Event from './Event'

class Calendar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            description: "",
            completed: false
        }
    }
    

    submitNewEvent = (e) => {
        
    }

    handleDescriptionChange = (e) => {
        this.setState({description: e.target.value});
    }

    render() {
        return (
            <div className="calendar">
                <Month />
                <Event
                    description = {this.state.description}
                    submitNewEvent = {this.submitNewEvent}
                    handleDescriptionChange = {this.handleDescriptionChange}
                />
            </div>
        );
    }
}

export default Calendar;