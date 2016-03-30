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
            links: [],
          }
        ],
        selectedEvent: -1,
      };
  }
}
