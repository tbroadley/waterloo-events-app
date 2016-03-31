import fetch from 'isomorphic-fetch';

export const CHANGE_SELECTED_EVENT = 'CHANGE_SELECTED_EVENT'

export const INCREMENT_MONTH = 'INCREMENT_MONTH';
export const DECREMENT_MONTH = 'DECREMENT_MONTH';

export const REQUEST_EVENTS = 'REQUEST_EVENTS';
export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';

export function changeSelectedEvent(id) {
  return {
    type: CHANGE_SELECTED_EVENT,
    id,
  };
}

export function incrementMonth() {
  return {
    type: INCREMENT_MONTH,
  }
}

export function decrementMonth() {
  return {
    type: DECREMENT_MONTH,
  }
}

export function requestEvents() {
  return {
    type: REQUEST_EVENTS,
  }
}

export function receiveEvents(events) {
  return {
    type: RECEIVE_EVENTS,
    events,
  }
}

export function fetchEvents() {
  return dispatch => {
    dispatch(requestEvents());

    return fetch('https://raw.githubusercontent.com/tbroadley/waterloo-events-list/master/list.json')
      .then(response => response.json())
      .then(json => { dispatch(receiveEvents(json)); });
  }
}
