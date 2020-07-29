var express = require('express');
var router = express.Router();
const {testDb, testTodoDb} = require('../controllers/todo')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(400).json({ title: 'Express' });
});

router.get('/test', testDb)
router.get('/testTodo', testTodoDb)


module.exports = router;
