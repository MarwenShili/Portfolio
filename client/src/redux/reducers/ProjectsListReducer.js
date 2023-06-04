// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function projectsListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_PROJECTS_SUCCESS:
      return { ...state, projects: action.payload };
    case types.LIST_PROJECTS_SUCCESS:
      return { ...state, listProjects: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}