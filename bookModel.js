// contactModel.js
var mongoose = require('mongoose');

// Setup schema
var bookSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    authorName: {
        type: String,
        required: true
    },
    releaseDate: {
        type: Date,
        required: true
    }
});

// Export Book model
var Book = module.exports = mongoose.model('book', bookSchema);

module.exports.get = function (callback, limit) {
    Book.find(callback).limit(limit);
}
