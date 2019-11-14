import React, {Component} from 'react';
import dateFns from "date-fns";

// Custom Components
import Month from './MonthCalendar/Month';
import Event from './Event'

class Calendar extends Component {

    constructor(props) {
        super(props);

        let todaysDate = new Date();

        this.state = {
            description: "",
            completed: false,
            events: [],
            eventsLoaded: false,
            currentMonth: new Date(),
            selectedDate: dateFns.startOfDay(todaysDate) // By default, shows events for today
            // NOTE: You have to modify the milliseconds within today, maybe in Cells.js instead
            // of here?
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
        // =================REMOVE THIS===================
        console.log(day);

        this.setState({
          selectedDate: day
        });
    };

    // FUNCTIONS FOR EVENT COMPONENT
    submitNewEvent = (e) => {
        e.preventDefault(); //stops page refresh
        console.log('new event submission');

        // Gives the selected date in milliseconds:
        let dateInMilliseconds = dateFns.getTime(this.state.selectedDate);

        let dateFormat = "DDD MMM YYYY";
        let formattedDate = dateFns.format(this.state.selectedDate, dateFormat);

        fetch("http://localhost:8080/event", {
          method: 'POST',
          headers: {
            'Accept' : 'application/json, text/plain, */*',
            'Content-Type' : 'application/json',
            "Authorization": "Bearer " + this.props.token
          },
          body: JSON.stringify({
            description: this.state.description,
            date: dateInMilliseconds,
            completed: this.state.completed
          })
        })
        .then(res =>  res.json())
        .then(res => {
            console.log(res, "I got a response!")
            alert(`You made an event for the date: ${formattedDate}`);
            this.setState({
                description: ""
            })
        })
        .catch(error => {
            console.log(error);
        })
    }

    handleDescriptionChange = (e) => {
        this.setState({description: e.target.value});
    }

    displayDayEvents = () => {
        console.log("my events are shown!")
        let selectedDateTimestamp = dateFns.getTime(this.state.selectedDate);
        
        fetch(`http://localhost:8080/event/list/?date=${selectedDateTimestamp}`, {
          headers: {
            'Accept' : 'application/json, text/plain, */*',
            'Content-Type' : 'application/json',
            "Authorization": "Bearer " + this.props.token
          }    
        })
        .then(res => res.json())
        .then(res => {
            console.log(res);
            this.setState({
                events: res,
                eventsLoaded: true
            })
        })
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
                    events = {this.state.events}
                    submitNewEvent = {this.submitNewEvent}
                    handleDescriptionChange = {this.handleDescriptionChange}
                    displayDayEvents = {this.displayDayEvents}
                />
            </div>
        );
    }
}

export default Calendar;