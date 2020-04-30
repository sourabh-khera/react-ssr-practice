import { SAVE_USERS_LIST } from '../action/actionTypes';

const initialState = {
  users: [],
}

const reducer = (state=initialState, action) => {
  switch(action.type){
    case SAVE_USERS_LIST:
      return {...state, users: action.users}
    default
      return state  
  }
} 

export default reducer;