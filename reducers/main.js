import {
  CHANGE_SELECTED_EVENT,
  INCREMENT_MONTH,
  DECREMENT_MONTH,
  REQUEST_EVENTS,
  RECEIVE_EVENTS,
} from '../actions/main';

export default function main(state = {}, action) {
  const {
    selectedYear,
    selectedMonth,
  } = state;

  switch (action.type) {
    case REQUEST_EVENTS:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case RECEIVE_EVENTS:
      return Object.assign({}, state, {
        isFetching: false,
        events: action.events.map(
          event => Object.assign({}, event, {
            startTime: new Date(event.startTime),
            endTime: new Date(event.endTime),
          })
        ),
      });
    case CHANGE_SELECTED_EVENT:
      return Object.assign({}, state, {
        selectedEvent: action.id,
      });
    case INCREMENT_MONTH:
      return Object.assign({}, state, {
        selectedYear: selectedYear + (selectedMonth === 11 ? 1 : 0),
        selectedMonth: (selectedMonth === 11 ? 0 : selectedMonth + 1),
      });
    case DECREMENT_MONTH:
      return Object.assign({}, state, {
        selectedYear: selectedYear - (selectedMonth === 0 ? 1 : 0),
        selectedMonth: (selectedMonth === 0 ? 11 : selectedMonth - 1),
      });
    default:
      const today = new Date();

      return {
        isFetching: false,
        events: [],
        selectedEvent: -1,
        selectedYear: today.getFullYear(),
        selectedMonth: today.getMonth(),
      };
  }
}
