import { UPDATE_DATA } from './types';

export const updateData = (data) => ({
  type: UPDATE_DATA,
  payload: data,
});