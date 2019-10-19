/* eslint-disable import/newline-after-import */
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const slug = require('slugs');

// build out the store's schema
const storeSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: 'Please enter a store name', // this is actually an error message lol
    },
    slug: String,
    description: {
        type: String,
        trim: true,
    },
    tags: [String],
});

// this has to be a proper function to use "!this."
storeSchema.pre('save', function(next) {
    if (!this.isModified('name')) {
        next(); // skip
        return; // stop
    }
    this.slug = slug(this.name);
    next();
    // Need to fix to make slugs unique
});

module.exports = mongoose.model('Store', storeSchema);
