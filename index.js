import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';

ReactDOM.render(
  <App selectedDate={new Date('2016-05-28')}/>,
  document.getElementById('root')
);
