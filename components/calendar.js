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
      events,
      selectedDate,
      selectedEvent,
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
                    events={events.filter(
                      elt => weekOfYear(elt.date) === week
                    )}
                    selectedEvent={selectedEvent}
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
      selectedDate,
      events,
      selectedEvent,
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

            const inMonth = date.getUTCMonth() === selectedDate.getUTCMonth();

            return (
              <CalendarCell
                date={date}
                selected={selected}
                inMonth={inMonth}
                events={events.filter(
                  elt =>
                    elt.date.getUTCFullYear() === date.getUTCFullYear() &&
                    elt.date.getUTCMonth() == date.getUTCMonth() &&
                    elt.date.getUTCDate() == date.getUTCDate()
                )}
              />
            );
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
      selected,
      inMonth,
      events,
    } = this.props;

    const className =
      (selected ? 'currentDate' : '') +
      (inMonth ? '' : 'notInMonth');

    return (
      <div
        className={className}
      >
        <div>{date.getUTCDate()}</div>
        {events.map(
          elt => <div>{elt.name}</div>
        )}
      </div>
    );
  }
}
