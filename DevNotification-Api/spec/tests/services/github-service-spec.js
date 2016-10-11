require('use-strict');

require('rootpath')();

var service = require("services/github-service");
var rp = require("request-promise");


beforeEach(() => {
    require('../../../utils/stringutils');
});

describe("githubService Test", () => {

    it("list releases, unknonw project --> return empty array", () => {
        expect(service.listTags("xxx")).toEqual([]);
    });

    it("fetch angular --> return list of versions", (done) => {

        spyOn(rp,'get').andCallFake(() => {
            return Promise.resolve(require("spec/fixtures/github/angular-releases"));
        });

        service.listTags("https://github.com/angular/angular.js").then((rels) => {
            expect(rels).toBeDefined();
            expect(rp.get).toHaveBeenCalled();
            expect(rels[0]).toBe("v1.5.8");
            expect(rels).toContain("v1.5.3");
            done();    
        });
        
    });

}); 