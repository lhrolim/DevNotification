const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const OrganizationSchema = new Schema({
    Name: { type: String, required: true },
    Url: { type: String },

    applications: [{
        //has to match a Application defined schema
        name: { type: String, required: true },
    }],

    users: [{
        //has to match a Application defined schema
        name: { type: Schema.Types.ObjectId, ref:"User" },
    }]



});


module.exports = mongoose.model('Organization', OrganizationSchema);
