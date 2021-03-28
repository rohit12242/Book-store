// contactController.js
// Import contact model
Book = require('./bookModel');

// Handle index actions
exports.index = function (req, res) {
    Book.get(function (err, books) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Books retrieved successfully",
            data: books
        });
    });
};

// Handle add Book actions
exports.new = function (req, res) {
    var book = new Book();
    book.name = req.body.name ? req.body.name : book.name;
    book.releaseDate = req.body.releaseDate;
    book.authorName = req.body.authorName;
// save the book and check for errors
    book.save(function (err) {
        if (err)
            res.json(err);

        res.json({
            message: 'New Book Added!',
            data: book
        });
    });
};

// Handle view book info
exports.view = function (req, res) {
    Book.findById(req.params.book_id, function (err, book) {
        if (err)
            res.send(err);
        res.json({
            message: 'Book details loading..',
            data: book
        });
    });
};


// Handle update book info
exports.update = function (req, res) {
book.findById(req.params.book_id, function (err, book) {
        if (err)
            res.send(err);
    book.name = req.body.name ? req.body.name : book.name;
    book.releaseDate = req.body.releaseDate;
    book.authorName = req.body.authorName;
// save the book and check for errors
        book.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'book Info updated',
                data: book
            });
        });
    });
};


// Handle delete book
exports.delete = function (req, res) {
    Book.remove({
        _id: req.params.book_id
    }, function (err, book) {
        if (err)
            res.send(err);
res.json({
            status: "success",
            message: 'Book deleted'
        });
    });
};
