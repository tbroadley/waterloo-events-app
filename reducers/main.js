import {
  CHANGE_SELECTED_EVENT,
  INCREMENT_MONTH,
  DECREMENT_MONTH,
} from '../actions/main';

export default function main(state = {}, action) {
  const {
    selectedYear,
    selectedMonth,
  } = state;

  switch (action.type) {
    case CHANGE_SELECTED_EVENT:
      return Object.assign({}, state, {
        selectedEvent: action.id,
      });
    case INCREMENT_MONTH:
      return Object.assign({}, state, {
        selectedYear: selectedYear + (selectedMonth === 11 ? 1 : 0),
        selectedMonth: (selectedMonth === 11 ? selectedMonth + 1 : 0),
      });
    case DECREMENT_MONTH:
      return Object.assign({}, state, {
        selectedYear: selectedYear - (selectedMonth === 0 ? 1 : 0),
        selectedMonth: (selectedMonth === 0 ? selectedMonth - 1 : 11),
      });
    default:
      const today = new Date();

      return {
        events: [
          {
            id: 0,
            name: 'Test Event',
            startTime: new Date('2016-03-05 3:00 PM EST'),
            endTime: new Date('2016-03-05 5:00 PM EST'),
            location: 'Student Life Centre (SLC)',
            description: 'A cool event. Come check it out.',
            links: [
              {
                name: 'Google',
                url: 'https://www.google.ca',
              },
              {
                name: 'Facebook',
                url: 'https://www.facebook.com',
              },
            ]
          },
          {
            id: 1,
            name: 'Test Event 2',
            startTime: new Date('2016-03-05 9:00 AM EST'),
            endTime: new Date('2016-03-05 11:00 AM EST'),
            location: 'Physical Activites Complex (PAC)',
            description: 'This event is cooler than the other test event!',
          }
        ],
        selectedEvent: -1,
        selectedYear: today.getFullYear(),
        selectedMonth: today.getMonth(),
      };
  }
}
