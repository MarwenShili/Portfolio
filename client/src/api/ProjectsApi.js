import ProjectsApiGenerated from "./generated/ProjectsApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class ProjectsApi extends ProjectsApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Projects List
  static getProjectsList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/projectss")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default ProjectsApi;