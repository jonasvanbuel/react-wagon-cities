const initialState = {
  activeCity: { name: "Paris", address: "16 Villa Gaudelet, 75011 Paris", slug: "paris" }
};

export default function(state = initialState, action) {
  if (state === undefined) {
    return [];
  }

  switch (action.type) {
    case 'SET_ACTIVE_CITY':
      return action.payload;
    default:
      return state;
  }
}
