import React from 'react';

import Calendar from './calendar';
import EventDetail from './event-detail';

export default class App extends React.Component {
  render() {
    return (
      <div id='app-parent'>
        <nav>
          <div>
            <a href='/'>Calendar</a>
            &nbsp;
            <a href='/contact.html'>Contact</a>
          </div>
        </nav>
        <div id='app'>
          <Calendar />
          <EventDetail />
        </div>
      </div>
    );
  }
}
