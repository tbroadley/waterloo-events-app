export const CHANGE_SELECTED_EVENT = 'CHANGE_SELECTED_EVENT'

export const INCREMENT_MONTH = 'INCREMENT_MONTH';
export const DECREMENT_MONTH = 'DECREMENT_MONTH';

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
