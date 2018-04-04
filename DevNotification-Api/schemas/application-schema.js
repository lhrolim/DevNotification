const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Applications are also projects but internal to the users like private projects, or organization projects.
 *
 * An application usually uses several projects.
 *
 */
const Application = new Schema({

    name: { type: String, required: true },
    url: String,
    creation_date: { type: Date, required: true },

    projectlinks: [{
        // has to match a ProjectSchema defined name
        name: {
            type: String,
            required: true
        },
        currentversion: {
            type: String
        }
    }],

    admin: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    collaborators: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]

});

module.exports = { model: mongoose.model('Application', Application), schema: Application };

