import cities from '../../data/cities';

export function setCities() {
  return {
    type: 'SET_CITIES',
    payload: cities
  };
}
