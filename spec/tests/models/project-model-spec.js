require('use-strict');

require('rootpath')();

var projectSchema = require("schemas/project-schema").model;
var projectModel = require("models/project-model");



describe("project model Test", () => {

    it("testing mocked removal, checking id type mongotype", (done) => {


        spyOn(projectSchema, "findByIdAndRemove").andCallFake(() => {
            return { execAsync : () =>  Promise.resolve() }
        });
  

        projectModel.remove("57f8534ccbd094342dd25c30").then(r => {
            expect(projectSchema.findByIdAndRemove).toHaveBeenCalledWith("57f8534ccbd094342dd25c30");
            done();
        });
  

    });


    it("testing mocked removal, checking id type stringtype", (done) => {

        spyOn(projectSchema, "findOneAndRemove").andCallFake(() => {
            return { execAsync: () => Promise.resolve() }
        });
     
        projectModel.remove("test").then(r => {
            expect(projectSchema.findOneAndRemove).toHaveBeenCalledWith({ "name": "test" });
            done();
        });

    });


    it("testing find by id checking internalpk", (done) => {

        spyOn(projectSchema, "findOne").andCallFake(() => {
            return { populate: () => {
                return {execAsync:  () => Promise.resolve() }
            }};
        });

        projectModel.findById("test").then(r => {
            expect(projectSchema.findOne).toHaveBeenCalledWith({ "name": "test" });
            done();
        });

    });

  

}); 