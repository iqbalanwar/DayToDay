import React, {Component} from 'react';

import './WeekCalendar/Week.css'

import Month from './MonthCalendar/Month';
import Week from './WeekCalendar/Week';

class Calendar extends Component {
    render() {
        return (
            <div className="calendar">
                <Month />
                <Week />
            </div>
        );
    }
}

export default Calendar;