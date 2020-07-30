var express = require('express');
var router = express.Router();
const {createTodoUser, assignUsers} = require('../controllers/todouser')

router.post('/',createTodoUser)

//Api to assign multiple users into a todo
router.post('/todos/:id', assignUsers)

module.exports = router