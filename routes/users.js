var express = require('express');
var router = express.Router();
var {getAllUsers} = require('../controllers/user')

/* GET users listing. */
router.get('/', getAllUsers);

module.exports = router;
