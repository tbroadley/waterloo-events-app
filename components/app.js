import React from 'react';
import { connect } from 'react-redux';

import Calendar from './calendar';

class App extends React.Component {
  render() {
    const {
      events,
      selectedEvent,
    } = this.props;

    const selectedDate = new Date(
      events.find(elt => elt.id === selectedEvent).date
    );

    return (
      <Calendar selectedDate={selectedDate} />
    );
  }
}

// TODO: do not connect at the top level, if possible.
export default connect(obj => obj)(App);
