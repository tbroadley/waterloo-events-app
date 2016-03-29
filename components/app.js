import React from 'react';
import { connect } from 'react-redux';

import Calendar from './calendar';

class App extends React.Component {
  render() {
    const {
      events,
      selectedEvent,
    } = this.props;

    let selectedDate;

    if (selectedEvent === undefined) {
      selectedDate = new Date();
    } else {
      selectedDate = new Date(selectedEvent.date);
    }

    return (
      <Calendar selectedDate={selectedDate} />
    );
  }
}

// TODO: do not connect at the top level, if possible.
export default connect(
  obj => ({
    selectedEvent: obj.events.find(elt => elt.id === obj.selectedEvent),
    events: obj.events,
  })
)(App);
