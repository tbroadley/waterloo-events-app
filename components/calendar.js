import React from 'react';

export default class Calendar extends React.Component {
  render() {
    return (
      <div>
        Date: {this.props.events[0].date}
      </div>
    );
  }
}
