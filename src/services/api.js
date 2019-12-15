import { handleResponse } from './utils';

const API_ROOT = 'http://localhost:8000';

export const fetchHabits = () => {
  const endPoint = `${API_ROOT}/habits`;

  return fetch(endPoint)
    .then(handleResponse)
    .then(data => data)
    .catch(error => {
      throw error;
    });
};
