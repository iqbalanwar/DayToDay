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

    // For whatever reason, the app needs prevProps to function
    componentDidUpdate(prevProps, prevState) {
        if (this.state.selectedDate !== prevState.selectedDate) {
          this.displayDayEvents();
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
        this.setState({
          selectedDate: day
        });
    };

    // FUNCTIONS FOR EVENT COMPONENT
    submitNewEvent = (e) => {
        e.preventDefault(); //stops page refresh

        // Gives the selected date in milliseconds:
        let dateInMilliseconds = dateFns.getTime(this.state.selectedDate);

        fetch("http://localhost:8081/event", {
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
            this.setState({
                description: ""
            })
            this.displayDayEvents();
        })
        .catch(error => {
            console.log(error);
        })
    }

    handleDescriptionChange = (e) => {
        this.setState({description: e.target.value});
    }

    displayDayEvents = () => {
        let selectedDateTimestamp = dateFns.getTime(this.state.selectedDate);
        
        fetch(`http://localhost:8081/event/list/${selectedDateTimestamp}`, {
        headers: {
            'Accept' : 'application/json, text/plain, */*',
            'Content-Type' : 'application/json',
            "Authorization": "Bearer " + this.props.token
        }    
        })
        .then(res => res.json())
        .then(res => {
            if (res.error) {
                res = false;
            }
            // THIS LOGIC HANDLES DATE CHANGE
            // it should clear the events of the previous day
            (this.state.events.length === 0) ? 
                (this.setState({
                    events: res,
                    eventsLoaded: true
                }))
                :
                (this.setState({
                    events: [],
                    eventsLoaded: false
                }))
            // No matter the date, this should be done
            this.setState({
                events: res,
                eventsLoaded: true
            })
        })
    }

    deleteEvent = (eventId) => {
        fetch((`http://localhost:8081/event/${eventId}`), {
            method: 'DELETE',
            headers: {
                "Authorization": "Bearer " + this.props.token,
                "Content-Type": "application/json"
            }
        })
        .then((res) => {
            if (res.status === 200) {
                alert("Event complete!");
            } else {
                alert("Something went wrong...");
            }
        })
        .catch((error) => {
            console.log(error);
        })
    }

    render() {
        return (
            <div className="calendar" style={{display: "flex", flexWrap: "wrap", justifyContent: "space-around"}}>
                <Month
                    nextMonth = {this.nextMonth}
                    prevMonth = {this.prevMonth}
                    onDateClick = {this.onDateClick}
                    currentMonth = {this.state.currentMonth}
                    selectedDate = {this.state.selectedDate}
                />
                {(this.props.token === "" || this.props.token === undefined) ? 
                (<p style={{textAlign: "center", fontSize: "2em"}}>Sign in to make events!</p>)
                : (<Event
                    description = {this.state.description}
                    token = {this.props.token}
                    events = {this.state.events}
                    selectedDate = {this.state.selectedDate}
                    submitNewEvent = {this.submitNewEvent}
                    handleDescriptionChange = {this.handleDescriptionChange}
                    displayDayEvents = {this.displayDayEvents}
                    deleteEvent = {this.deleteEvent}
                  />)
                }
                
            </div>
        );
    }
}

export default Calendar;