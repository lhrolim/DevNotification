const Model = require('../utils/model');
const promise = require("bluebird");
const ProjectSchema = require('../schemas/project-schema');
const githubService = require("../services/github-service.js");

const compareVersion = require('compare-version');

function releasesByProject(project, lowerLimit) {

    if (!project) {
        Promise.reject();
    }

    return githubService.listTags(project.repourl).then(allVersions => {
        if (lowerLimit == null) {
            return allVersions;
        }

        let usingLowerBound = false;

        if (lowerLimit.endsWith("+")) {
            usingLowerBound = true;
            lowerLimit = lowerLimit.substr(0, lowerLimit.length - 1);
        }

        return allVersions.filter(v => compareVersion(v, lowerLimit) === (usingLowerBound ? 1 : 0));
    });
}


class ProjectModel extends Model {

    releases(name, lowerLimit) {
        return this.findById(name).then(p => releasesByProject(p, lowerLimit));
    }

    releaseNotes(name, lowerLimit) {
        return this.findById(name).then(p => {
            releasesByProject(p, lowerLimit).then(tags => {
                if (p.usegitnativereleases) {
                    return githubService.listNativeReleaseNotes(p.repourl, tags);
                }
            });
        });
    }


    create(project) {

        const repourl = project.repourl;
        return promise.all([githubService.hasNativeReleaseNotes(repourl), githubService.listTags(repourl)]).then(results => {
            const  hasNativeReleaseNotes = results[0];
            const rels = results[1];

            if (rels) {
                project.latestversion = rels[0];
            }
            project.usegitnativereleases = hasNativeReleaseNotes;
            return super.create(project);
        });
    }

}

module.exports = new ProjectModel(ProjectSchema);
