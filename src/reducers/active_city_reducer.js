export default function(state, action) {
  if (state === undefined) {
    return [];
  }

  // Sets new state in Store 'cities' to the payload
  switch (action.type) {
    case 'SET_ACTIVE_CITY':
      return action.payload;
    default:
      return state;
  }
}
