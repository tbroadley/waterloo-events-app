import {
  CHANGE_SELECTED_EVENT,
} from '../actions/main';

export default function main(state = {}, action) {
  switch (action.type) {
    case CHANGE_SELECTED_EVENT:
      return {
        events: state.events,
        selectedEvent: action.id,
      };
    default:
      return {
        events: [
          {
            id: 0,
            name: 'Test Event',
            startTime: new Date('2016-03-28 3:00 PM EST'),
            endTime: new Date('2016-03-28 5:00 PM EST'),
          },
          {
            id: 1,
            name: 'Test Event 2',
            startTime: new Date('2016-03-05 9:00 AM EST'),
            endTime: new Date('2016-03-05 11:00 AM EST'),
          }
        ],
        selectedEvent: -1,
      };
  }
}
