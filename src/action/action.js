import { SAVE_USERS_LIST } from './actionTypes';

export const saveUsersList  = (data) => {
  return { type: SAVE_USERS_LIST, users: data}
}