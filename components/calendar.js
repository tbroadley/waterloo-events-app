import React from 'react';

export default class Calendar extends React.Component {
  render() {
    return (
      <div id="calendar">
        <CalendarHeader />
        {[0, 1, 2, 3, 4].map(
          _ => <CalendarRow />
        )}
      </div>
    );
  }
}

class CalendarHeader extends React.Component {
  render() {
    return (
      <div>
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
          day => (<div><h2>{day}</h2></div>)
        )}
      </div>
    );
  }
}

class CalendarRow extends React.Component {
  render() {
    return (
      <div>
        {[0, 1, 2, 3, 4, 5, 6].map(
          _ => <CalendarCell />
        )}
      </div>
    );
  }
}

class CalendarCell extends React.Component {
  render() {
    return <div>Date</div>;
  }
}
