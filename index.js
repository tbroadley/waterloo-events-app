import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';

const events = [
  {
    name: 'Airplane Symposium',
    date: '2016-04-01',
    startTime: '12:00',
    endTime: '16:00',
    location: '123 Hagey Boulevard',
    description: "Should be a fun time.",
    links: [
      "https://www.facebook.com/thomas.broadley.5",
      "https://soundcloud.com/newwworld"
    ]
  }
];

ReactDOM.render(
  <App events={events}/>,
  document.getElementById('root')
);
