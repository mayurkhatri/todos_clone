import * as types from '../actions/actionTypes'

export default function courseReducer(state = [], action){
  //return new state
  switch(action.type){
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;

    default:
      return state;
  }
}