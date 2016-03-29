import React from 'react';

import Calendar from './calendar';
import EventDetail from './event-detail';

export default class App extends React.Component {
  render() {
    return (
      <div id='app'>
        <Calendar />
        <EventDetail />
      </div>
    );
  }
}
