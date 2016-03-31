import React from 'react';

import Calendar from './calendar';
import EventDetail from './event-detail';

export default class App extends React.Component {
  render() {
    return (
      <div id='app-parent'>
        <div id='header'>
          <a href='/'>Calendar</a>
          <a href='/contact.html'>Contact</a>
        </div>
        <div id='app'>
          <Calendar />
          <EventDetail />
        </div>
      </div>
    );
  }
}
