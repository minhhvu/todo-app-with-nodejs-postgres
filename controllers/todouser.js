const asyncHandle = require('../middlewares/asyncHandle')
const vadilateBody = require('../middlewares/validateBody')
const db = require('../models')
const TodoUser = db.TodoUsers
const User = db.Users
const Todo = db.Todos

//@desc Api to assign multiple users into a todo
//@route POST /api/v1/todousers/todos/:id
const assignUsers = [vadilateBody('userIds'), asyncHandle(async (req, res, next) => {
  //Get list of userIds
  const userIds = req.body.userIds;
  const todoId = req.params.id;

  //Valid the todoId and userId
  let todo = await Todo.findByPk(todoId);
  if (!todo) {
    res.status(403).json({
      error: "Invalid todoId"
    })
    return;
  }
  let promises = userIds.map(async id => await User.findByPk(id))
  let users = await Promise.all(promises)
  for  (let user of users) {
    if (user == undefined) {
      res.status(403).json({
        error: "Invalid userId"
      })
      return;
    }
  }

  //Create todouser on db
  // let newTodoUser = {userId, todoId};
  promises = userIds.map(async id => await TodoUser.create({userId: id, todoId}))
  let todousers = await Promise.all(promises)//.then(async value => await TodoUser.create(value));
  res.status(200).json({
    todousers,
    success: true
  })

})]

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
  createTodoUser,
  assignUsers
}