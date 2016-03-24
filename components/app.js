import React from 'react';

import Calendar from './calendar';

export default class App extends React.Component {
  render() {
    return (
      <Calendar events={this.props.events} />
    );
  }
}
