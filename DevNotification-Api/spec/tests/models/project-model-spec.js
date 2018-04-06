require('use-strict');

require('rootpath')();

const projectEntity = require('models/entities').Project;
const projectModel = require('models/project-model');
const basemodel = require('utils/model');
const githubService = require('services/github-service');


const allReleases = ['v1.5.8', 'v1.5.7', 'v1.5.6', 'v1.4.3'];


describe('project model Test', () => {


    it('testing mocked removal, checking id type mongotype', async (done) => {
        spyOn(projectEntity, 'destroy').andCallFake(() => 1);
        try {
            const r = await projectModel.remove('57f8534ccbd094342dd25c30')
            expect(projectEntity.destroy).toHaveBeenCalledWith({
                "where": {
                    name: "57f8534ccbd094342dd25c30"
                }
            });

        } finally {
            done();
        }
    });


    it('asking for all releases', async (done) => {


        spyOn(githubService, 'listTags').andReturn(Promise.resolve(allReleases));
        spyOn(projectModel, 'findById').andCallFake(() => Promise.resolve({ repourl: 'angularjsrepo...' }));
        try {
            const r = await projectModel.releases('angularjs')
            expect(projectModel.findById).toHaveBeenCalledWith('angularjs');
            expect(githubService.listTags).toHaveBeenCalledWith('angularjsrepo...');
            expect(r).toBe(allReleases);
        } finally {
            done();
        }
    });


    it('asking for one release', async (done) => {


        spyOn(githubService, 'listTags').andReturn(Promise.resolve(allReleases));
        spyOn(projectModel, 'findById').andCallFake(() => Promise.resolve({ repourl: 'angularjsrepo...' }));
        try {
            const r = await projectModel.releases('angularjs', '1.5.7');
            expect(projectModel.findById).toHaveBeenCalledWith('angularjs');
            expect(githubService.listTags).toHaveBeenCalledWith('angularjsrepo...');
            expect(r).toEqual(['v1.5.7']);
        } finally {
            done();
        }
    });


    it('asking for releases greater than', async (done) => {

        spyOn(githubService, 'listTags').andReturn(Promise.resolve(allReleases));
        spyOn(projectModel, 'findById').andCallFake(() => Promise.resolve({ repourl: 'angularjsrepo...' }));

        try {
            const r = await projectModel.releases('angularjs', '1.5.5+');
            expect(projectModel.findById).toHaveBeenCalledWith('angularjs');
            expect(githubService.listTags).toHaveBeenCalledWith('angularjsrepo...');
            expect(r).toEqual(['v1.5.8', 'v1.5.7', 'v1.5.6']);
        } finally {
            done();
        }
    });






    it('testing find by id checking internalpk', async (done) => {
        spyOn(projectEntity, 'findOne').andCallFake(() => { name: "test" });
        try {
            const r = await projectModel.findById('test');
            expect(projectEntity.findOne).toHaveBeenCalledWith({
                where: {
                    name: 'test'
                }
            });
        } finally {
            done();
        }

    });



    it('testing creation nativeurl', async (done) => {
        const twbs = require('spec/fixtures/twbs.json');
        spyOn(githubService, 'hasNativeReleaseNotes').andReturn(Promise.resolve(true));
        spyOn(githubService, 'listTags').andReturn(Promise.resolve(allReleases));
        spyOn(projectModel, 'doCreate').andReturn(Promise.resolve(true));
        try {
            const r = await projectModel.create(twbs);
            expect(githubService.listTags).toHaveBeenCalledWith(twbs.repourl);
            expect(githubService.hasNativeReleaseNotes).toHaveBeenCalledWith(twbs.repourl);
            twbs.latestversion = 'v1.5.8';
            twbs.usegitnativereleases = true;
            expect(projectModel.doCreate).toHaveBeenCalledWith(twbs);
        } finally {
            done();
        }
    });


    it('testing creation non nativeurl', async (done) => {
        const angular = require('spec/fixtures/angular-project.json');
        spyOn(githubService, 'hasNativeReleaseNotes').andReturn(Promise.resolve(false));
        spyOn(githubService, 'listTags').andReturn(Promise.resolve(allReleases));
        spyOn(projectModel, 'doCreate').andReturn(Promise.resolve(true));
        try {
            const r = await projectModel.create(angular)
            expect(githubService.listTags).toHaveBeenCalledWith(angular.repourl);
            expect(githubService.hasNativeReleaseNotes).toHaveBeenCalledWith(angular.repourl);
            angular.latestversion = 'v1.5.8';
            angular.usegitnativereleases = false;
            expect(projectModel.doCreate).toHaveBeenCalledWith(angular);
        } finally {
            done();
        }
    });

});
