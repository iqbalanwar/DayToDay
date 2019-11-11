import React, {Component} from 'react';

import Month from './MonthCalendar/Month';

class Calendar extends Component {
    render() {
        return (
            <div className="calendar">
                <Month />
            </div>
        );
    }
}

export default Calendar;