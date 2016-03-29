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
            date: new Date('2016-04-28'),
          }
        ],
        selectedEvent: 0,
      };
  }
}
