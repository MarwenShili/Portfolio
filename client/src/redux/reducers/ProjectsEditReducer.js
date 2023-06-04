// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  projects: {}
};

// Reducer
export default function projectsEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_PROJECTS_SUCCESS:
      return { ...state, projects: action.payload };
    case types.UPDATE_PROJECTS_SUCCESS:
      return { ...state, projects: action.payload };
    case types.GET_PROJECTS_SUCCESS:
      return { ...state, projects: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}