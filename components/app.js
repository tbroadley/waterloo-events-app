import React from 'react';

import Calendar from './calendar';
import EventDetail from './event-detail';

export default class App extends React.Component {
  render() {
    return (
      <div id='app-parent'>
        <nav>
          <a href='/'>Calendar</a>
          <a href='/contact.html'>Contact</a>
        </nav>
        <div id='app'>
          <Calendar />
          <EventDetail />
        </div>
      </div>
    );
  }
}
