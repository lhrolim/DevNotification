require('use-strict');

require('rootpath')();

const projectSchema = require('schemas/project-schema').model;
const projectModel = require('models/project-model');
const basemodel = require('utils/model');
const githubService = require('services/github-service');


const allReleases = ['v1.5.8', 'v1.5.7', 'v1.5.6', 'v1.4.3'];


describe('project model Test', () => {

    it('testing mocked removal, checking id type mongotype', (done) => {

        spyOn(projectSchema, 'findByIdAndRemove').andCallFake(() => ({ execAsync : () =>  Promise.resolve() }));

        projectModel.remove('57f8534ccbd094342dd25c30').then(r => {
            expect(projectSchema.findByIdAndRemove).toHaveBeenCalledWith('57f8534ccbd094342dd25c30');
            done();
        });


    });


    it('asking for all releases', (done) => {


        spyOn(githubService, 'listTags').andReturn(Promise.resolve(allReleases));
        spyOn(projectModel, 'findById').andCallFake(() => Promise.resolve({ repourl:'angularjsrepo...' }));

        projectModel.releases('angularjs').then(r => {
            expect(projectModel.findById).toHaveBeenCalledWith('angularjs');
            expect(githubService.listTags).toHaveBeenCalledWith('angularjsrepo...');
            expect(r).toBe(allReleases);
            done();
        });


    });


    it('asking for one release', (done) => {


        spyOn(githubService, 'listTags').andReturn(Promise.resolve(allReleases));
        spyOn(projectModel, 'findById').andCallFake(() => Promise.resolve({ repourl: 'angularjsrepo...' }));

        projectModel.releases('angularjs', '1.5.7').then(r => {
            expect(projectModel.findById).toHaveBeenCalledWith('angularjs');
            expect(githubService.listTags).toHaveBeenCalledWith('angularjsrepo...');
            expect(r).toEqual(['v1.5.7']);
            done();
        });


    });


    it('asking for releases greater than', (done) => {


        spyOn(githubService, 'listTags').andReturn(Promise.resolve(allReleases));
        spyOn(projectModel, 'findById').andCallFake(() => Promise.resolve({ repourl: 'angularjsrepo...' }));

        projectModel.releases('angularjs', '1.5.5+').then(r => {
            expect(projectModel.findById).toHaveBeenCalledWith('angularjs');
            expect(githubService.listTags).toHaveBeenCalledWith('angularjsrepo...');
            expect(r).toEqual(['v1.5.8', 'v1.5.7', 'v1.5.6']);
            done();
        });


    });


    it('testing mocked removal, checking id type stringtype', (done) => {

        spyOn(projectSchema, 'findOneAndRemove').andCallFake(() => ({ execAsync: () => Promise.resolve() }));

        projectModel.remove('test').then(r => {
            expect(projectSchema.findOneAndRemove).toHaveBeenCalledWith({ name: 'test' });
            done();
        });

    });


    it('testing find by id checking internalpk', (done) => {

        spyOn(projectSchema, 'findOne').andCallFake(() => ({ populate: () => ({ execAsync:  () => Promise.resolve() }) }));

        projectModel.findById('test').then(r => {
            expect(projectSchema.findOne).toHaveBeenCalledWith({ name: 'test' });
            done();
        });

    });


    it('testing creation nativeurl', (done) => {
        const twbs = require('spec/fixtures/twbs.json');
        spyOn(githubService, 'hasNativeReleaseNotes').andReturn(Promise.resolve(true));
        spyOn(githubService, 'listTags').andReturn(Promise.resolve(allReleases));
        spyOn(projectModel, 'doCreate').andReturn(Promise.resolve(true));

        projectModel.create(twbs).then(r => {
            expect(githubService.listTags).toHaveBeenCalledWith(twbs.repourl);
            expect(githubService.hasNativeReleaseNotes).toHaveBeenCalledWith(twbs.repourl);
            twbs.latestversion = 'v1.5.8';
            twbs.usegitnativereleases = true;
            expect(projectModel.doCreate).toHaveBeenCalledWith(twbs);
            done();
        });
    });


    it('testing creation non nativeurl', (done) => {
        const angular = require('spec/fixtures/angular-project.json');
        spyOn(githubService, 'hasNativeReleaseNotes').andReturn(Promise.resolve(false));
        spyOn(githubService, 'listTags').andReturn(Promise.resolve(allReleases));
        spyOn(projectModel, 'doCreate').andReturn(Promise.resolve(true));

        projectModel.create(angular).then(r => {
            expect(githubService.listTags).toHaveBeenCalledWith(angular.repourl);
            expect(githubService.hasNativeReleaseNotes).toHaveBeenCalledWith(angular.repourl);
            angular.latestversion = 'v1.5.8';
            angular.usegitnativereleases = false;
            expect(projectModel.doCreate).toHaveBeenCalledWith(angular);
            done();
        });
    });

});
