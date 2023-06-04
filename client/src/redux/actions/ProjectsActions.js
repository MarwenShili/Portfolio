import actionsFunction from "./generated/ProjectsActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import projectsApi from "../../api/projectsApi";
 
 actionsFunction.loadprojectsList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return projectsApi
     .getprojectsList()
     .then(list => {
       dispatch(actionsFunction.loadprojectsSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
