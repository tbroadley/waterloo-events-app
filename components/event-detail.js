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
        location,
        description,
        links,
        image,
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
          {
            image !== undefined ?
            <img src={'https://raw.githubusercontent.com/tbroadley/waterloo-events-list/master/posters/' + image} /> :
            ''
          }
          <div>{startTime.toLocaleDateString()}</div>
          <div>Start: {startTime.toLocaleTimeString()}</div>
          {
            endTime !== undefined ?
            <div>End: {endTime.toLocaleTimeString()}</div> :
            ''
          }
          {
            location !== undefined ?
            <div>
              Location:&nbsp;
              <a
                target='_blank'
                href={'https://www.google.ca/maps/search/' + location}
              >
                {location}
              </a>
            </div> :
            ''
          }
          {
            description !== undefined ?
            <div>Description: {description}</div> :
            ''
          }
          {links === undefined ? '' :
            <ul>
              {links.map(link => <li><a href={link.url}>{link.name}</a></li>)}
            </ul>
          }
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
