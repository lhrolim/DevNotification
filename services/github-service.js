const rp = require('request-promise');

const baseApiUrl = "https://api.github.com/repos/{0}/{1}/tags";

const baseGitURL = "https://github.com/";

class GitHubService {

    
    listReleases(repourl, token) {
        const idx = repourl.indexOf(baseGitURL);
        if (idx === -1) {
            return null;
        }
        const finalUrl = repourl.substr(idx + baseGitURL.length).split("/");
        const owner = finalUrl[0];
        const repo = finalUrl[1];

        const url = baseApiUrl.format(owner, repo);

        const options = {
            uri: url,
            headers: {
                'User-Agent': 'DevNotification'
            },
            json: true
        };
        
        console.log(url);
        return rp.get(options).then(res => {
            return res.map(r => r.name);
        });
    }


}

module.exports = new GitHubService();