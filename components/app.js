import React from 'react';

import Calendar from './calendar';

export default class App extends React.Component {
  render() {
    const {
      selectedDate
    } = this.props;

    return (
      <Calendar selectedDate={selectedDate} />
    );
  }
}
