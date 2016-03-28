import React from 'react';

import range from '../util/range';
import {
  weekOfYear,
  sundayOfWeek,
  startOfMonth,
  endOfMonth,
  monthNames
} from '../util/date';

export default class Calendar extends React.Component {
  render() {
    const {
      selectedDate
    } = this.props;

    const startWeek = weekOfYear(startOfMonth(selectedDate));
    const endWeek = weekOfYear(endOfMonth(selectedDate));

    return (
      <div id="calendar">
        <h1>
          Waterloo Events for&nbsp;
          {monthNames[selectedDate.getUTCMonth()]}&nbsp;
          {selectedDate.getUTCFullYear()}
        </h1>
        <CalendarHeader />
        {range(startWeek, endWeek + 1).map(
          week => <CalendarRow
                    week={week}
                    selectedDate={selectedDate}
                  />
        )}
      </div>
    );
  }
}

class CalendarHeader extends React.Component {
  render() {
    return (
      <div id="calendar-header">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
          day => (<div><h2>{day}</h2></div>)
        )}
      </div>
    );
  }
}

class CalendarRow extends React.Component {
  render() {
    const {
      week,
      selectedDate
    } = this.props;

    const sunday = sundayOfWeek(week, selectedDate.getUTCFullYear());

    return (
      <div>
        {range(sunday, sunday + 7).map(
          dayOfYear => {
            const date = new Date(
              selectedDate.getUTCFullYear(), 0, dayOfYear, 0, 0, 0, 0
            );

            const selected =
              date.getUTCFullYear() === selectedDate.getUTCFullYear() &&
              date.getUTCMonth() == selectedDate.getUTCMonth() &&
              date.getUTCDate() == selectedDate.getUTCDate();

            return <CalendarCell date={date} selected={selected}/>;
          }
        )}
      </div>
    );
  }
}

class CalendarCell extends React.Component {
  render() {
    const {
      date,
      selected
    } = this.props;

    return (
      <div
        className={selected ? 'currentDate' : ''}
      >
        {date.getUTCDate()}
      </div>
    );
  }
}
