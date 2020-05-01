import { SAVE_USERS_LIST } from '../action/actionTypes';

const initialState = {
  usersList: [],
};

const saveUsers = (state, { users }) => ({ ...state, usersList: users });

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_USERS_LIST:
      return saveUsers(state, action);
   
    default: return state;
  }
}

export default userReducer;