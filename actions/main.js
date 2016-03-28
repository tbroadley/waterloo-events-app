export const CHANGE_SELECTED_EVENT = 'CHANGE_SELECTED_EVENT'

export function changeSelectedEvent(id) {
  return {
    type: CHANGE_SELECTED_EVENT,
    id,
  };
}
