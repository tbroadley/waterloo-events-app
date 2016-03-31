import React from 'react';
import { connect } from 'react-redux';

import {
  changeSelectedEvent,
  incrementMonth,
  decrementMonth,
} from '../actions/main';

import range from '../util/range';
import {
  weekOfYear,
  sundayOfWeek,
  startOfMonth,
  endOfMonth,
  monthNames
} from '../util/date';

class Calendar extends React.Component {
  render() {
    const {
      events,
      selectedYear,
      selectedMonth,
      selectedEvent,
      dispatch,
    } = this.props;

    const thisMonth = new Date(selectedYear, selectedMonth, 2, 0, 0, 0, 0);

    const startWeek = weekOfYear(startOfMonth(thisMonth));
    const endWeek = weekOfYear(endOfMonth(thisMonth));

    const onSelect = id => _ => { dispatch(changeSelectedEvent(id)); };
    const incMonth = _ => { dispatch(incrementMonth()); };
    const decMonth = _ => { dispatch(decrementMonth()); };

    return (
      <div id="calendar-parent">
        <div>
          <button onClick={decMonth}>Previous month</button>
        </div>
        <div id="calendar">
          <h1>
            Waterloo Events for&nbsp;
            {monthNames[thisMonth.getUTCMonth()]}&nbsp;
            {thisMonth.getUTCFullYear()}
          </h1>
          <CalendarHeader />
          {range(startWeek, endWeek + 1).map(
            week => <CalendarRow
                      week={week}
                      selectedDate={thisMonth}
                      events={events.filter(
                        elt => weekOfYear(elt.startTime) === week
                      )}
                      selectedEvent={selectedEvent}
                      onSelect={onSelect}
                      onDeselect={onSelect(-1)}
                    />
          )}
        </div>
        <div>
          <button onClick={incMonth}>Next month</button>
        </div>
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
      onSelect,
      onDeselect,
    } = this.props;

    const sunday = sundayOfWeek(week, selectedDate.getUTCFullYear());

    return (
      <div>
        {range(sunday, sunday + 7).map(
          dayOfYear => {
            const date = new Date(
              selectedDate.getUTCFullYear(), 0, dayOfYear, 0, 0, 0, 0
            );

            const inMonth = date.getUTCMonth() === selectedDate.getUTCMonth();

            return (
              <CalendarCell
                date={date}
                inMonth={inMonth}
                events={events.filter(
                  elt =>
                    elt.startTime.getUTCFullYear() === date.getUTCFullYear() &&
                    elt.startTime.getUTCMonth() == date.getUTCMonth() &&
                    elt.startTime.getUTCDate() == date.getUTCDate()
                )}
                selectedEvent={selectedEvent}
                onSelect={onSelect}
                onDeselect={onDeselect}
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
      inMonth,
      events,
      selectedEvent,
      onSelect,
      onDeselect,
    } = this.props;

    const todayDate = new Date();
    const today = date.getUTCFullYear() === todayDate.getFullYear() &&
                  date.getUTCMonth() === todayDate.getMonth() &&
                  date.getUTCDate() === todayDate.getDate();

    const className =
      (today ? 'today ' : '') +
      (inMonth ? '' : 'notInMonth');

    return (
      <div
        className={className}
      >
        <div>{date.getUTCDate()}</div>
        {events.sort(
          (a, b) => a.startTime - b.startTime
        ).map(
          elt => <Event
                   name={elt.name}
                   id={elt.id}
                   startTime={elt.startTime}
                   endTime={elt.endTime}
                   selected={
                     selectedEvent !== undefined && elt.id === selectedEvent.id
                   }
                   onSelect={onSelect(elt.id)}
                   onDeselect={onDeselect}
                 />
        )}
      </div>
    );
  }
}

class Event extends React.Component {
  render() {
    const {
      name,
      id,
      startTime,
      endTime,
      selected,
      onSelect,
      onDeselect
    } = this.props;

    function onClick() {
      if (selected) {
        onDeselect();
      } else {
        onSelect();
      }
    }

    return (
      <div
        className={selected ? 'selected' : ''}
        onClick={onClick}
      >
        <div>{name}</div>
        <div>
          {startTime.toLocaleTimeString()}&nbsp;
          &ndash;&nbsp;
          {endTime.toLocaleTimeString()}
        </div>
      </div>
    )
  }
}

export default connect(
  obj => {
    const selectedEvent = obj.events.find(elt => elt.id === obj.selectedEvent);

    return {
      selectedEvent,
      selectedYear: obj.selectedYear,
      selectedMonth: obj.selectedMonth,
      events: obj.events,
    };
  }
)(Calendar);
