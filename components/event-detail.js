import React from 'react';
import { connect } from 'react-redux';

class EventDetail extends React.Component {
  render() {
    const {
      id,
      name,
      date,
    } = this.props;

    return (
      <div id='event-detail'>
        <div>{name}</div>
        <div>{date.toString()}</div>
      </div>
    );
  }
}

export default connect(
  obj => obj.events.find(elt => elt.id === obj.selectedEvent)
)(EventDetail);
