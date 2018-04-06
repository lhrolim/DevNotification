const rp = require('request-promise');

const clientId = '80071ed4f4759d28cc06';
const secret = '444cc0123a97c6200b51f755eaed923f58e07aab';

const baseApiUrl = `https://api.github.com/repos/{0}/{1}/tags?client_id=${clientId}&client_secret=${secret}`;

const baseReleasesApiUrl = `https://api.github.com/repos/{0}/{1}/releases/tags/{2}?client_id=${clientId}&client_secret=${secret}`;
const latestReleaseUrl = `https://api.github.com/repos/{0}/{1}/releases/latest?client_id=${clientId}&client_secret=${secret}`;

const baseGitURL = 'https://github.com/';


const gihubBaseHeader = { 'User-Agent': 'DevNotification' };


class GitHubService {


    constructor() {
        this.parseOwnerAndRepo = (repourl) => {
            const idx = repourl.indexOf(baseGitURL);
            if (idx === -1) {
                return null;
            }
            const finalUrl = repourl.substr(idx + baseGitURL.length).split('/');
            const owner = finalUrl[0];
            const repo = finalUrl[1];
            return { owner, repo };
        };
    }


    async listTags(repourl, token) {

        const ob = this.parseOwnerAndRepo(repourl);
        if (!ob) {
            return [];
        }

        const url = baseApiUrl.format(ob.owner, ob.repo);

        const options = {
            uri: url,
            headers: gihubBaseHeader,
            json: true
        };

        console.log(url);
        const res = await rp.get(options);
        return res.map(r => r.name);
    }

    async hasNativeReleaseNotes(repoUrl, token) {
        const ob = this.parseOwnerAndRepo(repoUrl);
        if (!ob) {
            return [];
        }
        const url = latestReleaseUrl.format(ob.owner, ob.repo);
        const options = {
            uri: url,
            headers: gihubBaseHeader,
            resolveWithFullResponse: true
        };
        console.log(url);
        return rp.get(options).then(response => response.statusCode !== 404).catch((err) => {
            console.log(err);
            return false;
        });
    }

    /**
     * Use this method when the release notes are generated using native github release mechanism.
     * Some projects, though, won´t rely on it, having their own changelog page (ex: https://github.com/angular/angular.js/blob/master/CHANGELOG.md)
     *
     *
     * @param repoUrl
     * @param tags
     * @param token
     */
    async listNativeReleaseNotes(repoUrl, tags, token) {
        const ob = this.parseOwnerAndRepo(repoUrl);
        if (!ob) {
            return [];
        }

        const promises = tags.map((t) => {
            const url = baseReleasesApiUrl.format(ob.owner, ob.repo, t);
            const options = {
                uri: url,
                headers: gihubBaseHeader,
                json: true
            };
            return rp.get(options);
        });

        const results = await Promise.all(promises);
        return results.map(r => r.body);

    }


}

module.exports = new GitHubService();
