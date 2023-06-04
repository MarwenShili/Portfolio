import ProjectsModelGenerated from "./generated/ProjectsModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = ProjectsModelGenerated.init();
  
      schema.add({
        extraCustomField: Object
      });
    },
     
   */


  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await ProjectsModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...ProjectsModelGenerated,
  ...customModel
};
