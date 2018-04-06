const Model = require('../utils/model');
const promise = require('bluebird');
const models = require('./entities');
const githubService = require('../services/github-service');

const compareVersion = require('compare-version');

async function releasesByProject(project, lowerLimit) {

    if (!project) {
        return Promise.reject();
    }

    const allVersions = await githubService.listTags(project.repourl);

    if (lowerLimit == null) {
        return allVersions;
    }

    let usingLowerBound = false;

    if (lowerLimit.endsWith('+')) {
        usingLowerBound = true;
        lowerLimit = lowerLimit.substr(0, lowerLimit.length - 1);
    }

    return allVersions.filter(v => compareVersion(v, lowerLimit) === (usingLowerBound ? 1 : 0));

}


class ProjectModel extends Model {

    async releases(name, lowerLimit) {
        const p = await this.findById(name);
        return releasesByProject(p, lowerLimit);
    }

    async releaseNotes(name, lowerLimit) {
        const entity = await this.findById(name);
        const tags = await releasesByProject(entity, lowerLimit);
        if (entity.usegitnativereleases) {
            return githubService.listNativeReleaseNotes(entity.repourl, tags);
        }
    }

    async create(project) {

        const { repourl } = project;
        const results = await promise.all([githubService.hasNativeReleaseNotes(repourl),
            githubService.listTags(repourl)]);

        const hasNativeReleaseNotes = results[0];
        const rels = results[1];

        if (rels) {
            const { latestversion } = rels;
            project.latestversion = latestversion;
        }
        project.usegitnativereleases = hasNativeReleaseNotes;
        return super.create(project);
    }


}

module.exports = new ProjectModel(models.Project);
