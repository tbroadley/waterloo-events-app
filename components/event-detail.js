import React from 'react';
import { connect } from 'react-redux';

import { changeSelectedEvent } from '../actions/main';

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
        startTime,
        endTime,
        description,
      } = this.props.selectedEvent;

      const onDeselect = _ => this.props.dispatch(changeSelectedEvent(-1));

      return (
        <div id='event-detail'>
          <button
            onClick={onDeselect}
          >
            Close
          </button>
          <div><h1>{name}</h1></div>
          <div>{startTime.toLocaleDateString()}</div>
          <div>Start: {startTime.toLocaleTimeString()}</div>
          <div>End: {endTime.toLocaleTimeString()}</div>
          <div>Description: {description}</div>
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
