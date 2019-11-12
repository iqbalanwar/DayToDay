import React, {Component} from 'react';
import dateFns from "date-fns";

// Custom Components
import Month from './MonthCalendar/Month';
import Event from './Event'

class Calendar extends Component {

    constructor(props) {
        super(props);
        this.state = {    // const getDate = dateFns.getDate();

            description: "",
            completed: false,
            currentMonth: new Date(),
            selectedDate: new Date()
        }
    }

    // FUNCTIONS FOR MONTH COMPONENT
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
        console.log(day);
        this.setState({
          selectedDate: day
        });
    };

    // FUNCTIONS FOR EVENT COMPONENT
    // submitNewEvent = (e) => {
    //     e.preventDefault(); //stops page refresh
    //     console.log('new event submission');

    //     fetch("http://localhost:8080/event", {
    //       method: 'POST',
    //       headers: {
    //         'Accept' : 'application/json, text/plain, */*',
    //         'Content-Type' : 'application/json'
    //       },
    //       body: JSON.stringify({
    //         username: this.state.username,
    //         password: this.state.password
    //       })
    //     })
    //      USE getTime(this.state.selectedDate)
    // }
    handleDescriptionChange = (e) => {
        this.setState({description: e.target.value});
    }

    render() {
        return (
            <div className="calendar">
                <Month
                    nextMonth = {this.nextMonth}
                    prevMonth = {this.prevMonth}
                    onDateClick = {this.onDateClick}
                    currentMonth = {this.state.currentMonth}
                    selectedDate = {this.state.selectedDate}
                />
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