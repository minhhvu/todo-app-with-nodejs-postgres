const asyncHandle = require('../middlewares/asyncHandle')
const db = require('../models')
const User = db.Users
//config the object attribute from user model
const todoObjectOption = {
  attributes: {
    exclude: ["createdAt", "updatedAt"],
  }
}

//@desc get list of all users
//@route GET /api/v1/users/
const getAllUsers = asyncHandle(async (req, res, next) => {
  let users = await User.findAll(todoObjectOption);

  res.status(200).json(users)
})

module.exports = {
  getAllUsers
}