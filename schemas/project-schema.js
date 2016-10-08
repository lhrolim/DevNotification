const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ProjectSchema = new Schema({
    name: { type: String, required: true, index: { unique: true } },
    //start page of the project
    startpage: { type: String, required: true },
    //the url of the code repository project (mainly on git)
    repourl: { type: String, required: true },
    // a link to the changelog of the project. Might not necessarily exist, hence not required
    releasenotesurl: { type: String },
    // we won´t know it by the time of creation of the entry, therefore not required
    latestversion: { type: String },
//    //identifier for github api.  https://github.com/twbs/bootstrap --> twbs
//    ownerName: { type: String },
//    //identifier for github api.  https://github.com/twbs/bootstrap --> bootstrap
//    repoName: { type: String }

});


module.exports = mongoose.model('Project', ProjectSchema);
