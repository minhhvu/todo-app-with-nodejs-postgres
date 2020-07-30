const asyncHandle = require('../middlewares/asyncHandle')
const db = require('../models')
const validateBody = require('../middlewares/validateBody')
const {convertToDate, getToday, getCustomizedDateFormat} = require('../ultilities/CustomizedDateFormat')

const Todo = db.Todos
const User = db.Users
//config the object attribute from todo model
const todoObjectOption = {
  attributes: {
    exclude: ["createdAt", "updatedAt"],
  },
  include: User
}

//@desc get list of all todos
//@route GET /api/v1/todos/
const getAllTodos = asyncHandle(async (req, res, next) => {
  let todos = await Todo.findAll(todoObjectOption);

  //Check for queries
  const query = req.query;
  const queryKeys = Object.keys(query);
  if (queryKeys.length === 0){
    res.status(200).json({
      todos
    })
    return;
  }

  //If there is query like group=date
  if (query.group !== undefined && query.group === 'date'){
    //Sort todo by date
    todos.sort((a, b) => a.date.getTime() - b.date.getTime())

    //Group todo by date
    let group = {}
    todos.forEach(todoEle => {
      const key = getCustomizedDateFormat(todoEle.date)
      if (group[key] === undefined){
        group[key] = [todoEle]
      } else {
        group[key].push(todoEle)
      }
    })

    res.status(200).json(group)
  }
})

//@desc create a todo
//@route POST /api/v1/todos/
const createTodo = [validateBody('title'), asyncHandle(async (req, res, next) => {

  //Create todo on db
  const {title} = req.body;
  const date = Date.now();
  const isDone = false;
  let newTodo = {title, date, isDone};
  let todo = await Todo.create(newTodo);
  res.status(200).json({
    todo
  })
})]


//@desc edit the todo
//@route GET /api/v1/todos/id
const updateTodo = asyncHandle(async (req, res, next) => {
  //Check todoId
  const todoId = req.params.id;
  let todo = await Todo.findByPk(todoId);
  if (!todo) {
    res.status(403).json({
      error: "Invalid todoId"
    })
    return;
  }

  //Update a todo with id
  const keys = ['title', 'isDone', 'date']
  let newTodo = {}
  for (let key of keys){
    if (req.body[key]){
      newTodo[key] = req.body[key]
    }
  }
  await todo.set(newTodo);
  todo = await todo.save();

  res.status(200).json({
    todo
  })
})


module.exports ={
  getAllTodos,
  updateTodo,
  createTodo
}