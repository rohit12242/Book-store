// Filename: api-routes.js
// Initialize express router
let router = require('express').Router();

// Import contact controller
var bookController = require('./bookController');
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with Love!'
    });
});
// Book routes
router.route('/books')
    .get(bookController.index)
    .post(bookController.new);

router.route('/books/:book_id')
    .get(bookController.view)
    .patch(bookController.update)
    .put(bookController.update)
    .delete(bookController.delete);
// Export API routes
module.exports = router;
