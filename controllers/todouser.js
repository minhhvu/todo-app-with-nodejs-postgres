const asyncHandle = require('../middlewares/asyncHandle')
const vadilateBody = require('../middlewares/validateBody')
const db = require('../models')
const TodoUser = db.TodoUsers
const User = db.Users
const Todo = db.Todos

//@desc create a todouser
//@route POST /api/v1/todousers
const createTodoUser = [vadilateBody('userId', 'todoId'), asyncHandle(async (req, res, next) => {
  const {userId, todoId} = req.body;

  //Valid the todoId and userId
  let todo = await Todo.findByPk(todoId);
  if (!todo) {
    res.status(403).json({
      error: "Invalid todoId"
    })
    return;
  }
  let user = await User.findByPk(userId);
  if (!user) {
    res.status(403).json({
      error: "Invalid userId"
    })
    return;
  }

  //Create todo on db
  let newTodoUser = {userId, todoId};
  let todouser = await TodoUser.create(newTodoUser);
  res.status(200).json({
    todouser
  })
})]

module.exports = {
  createTodoUser
}