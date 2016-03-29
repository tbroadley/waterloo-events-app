import React from 'react';
import { connect } from 'react-redux';

class EventDetail extends React.Component {
  render() {
    if (this.props.selectedEvent === undefined) {
      return (
        <div id='event-detail' className='hidden' />
      );
    } else {
      const {
        id,
        name,
        date,
      } = this.props.selectedEvent;

      return (
        <div id='event-detail'>
          <div>{name}</div>
          <div>{date.toString()}</div>
        </div>
      );
    }
  }
}

export default connect(
  obj => ({
    selectedEvent: obj.events.find(elt => elt.id === obj.selectedEvent)
  })
)(EventDetail);
