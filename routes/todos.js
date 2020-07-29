var express = require('express');
var router = express.Router();
const {getAllTodos, createTodo, updateTodo} = require('../controllers/todo')

router.get('/', getAllTodos);
router.post('/', createTodo);
router.put('/:id', updateTodo);

module.exports = router