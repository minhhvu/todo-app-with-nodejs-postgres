var express = require('express');
var router = express.Router();
const {createTodoUser} = require('../controllers/todouser')

router.post('/',createTodoUser)

module.exports = router