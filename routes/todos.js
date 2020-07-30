var express = require('express');
var router = express.Router();
const {getAllTodos, createTodo, updateTodo} = require('../controllers/todo')

//@route /api/v1/todos

router.get('/', getAllTodos);
router.post('/', createTodo);
router.put('/:id', updateTodo);

//Api to update a todo as done
router.put('/done/:id', function (req, res, next) {
  req.body.isDone = true;
  next()
}, updateTodo)

module.exports = router