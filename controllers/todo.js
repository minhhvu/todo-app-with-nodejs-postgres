const asyncHandle = require('../middlewares/asyncHandle')
const db = require('../models')
const validateBody = require('../middlewares/validateBody')

// const User = db.Users
const Todo = db.Todos

//@desc get list of all todos
//@route GET /api/v1/todos/
const getAllTodos = asyncHandle(async (req, res, next) => {
  let todos = await Todo.findAll();
  res.status(200).json({
    todos
  })
})

//@desc create a todo
//@route POST /api/v1/todos/
const createTodo = asyncHandle(async (req, res, next) => {
  //Valid the body input
  // validateBody(req, next, 'title')
  // let validator = validateBody(req.body, 'title');
  // if (validator.ok == false){
  //   throw new Error(validator.missing)
  //   return;
  // }

  //Create todo on db
  const {title} = req.body;
  const date = Date.now();
  const isDone = false;
  let newTodo = {title, date, isDone};
  console.log(newTodo)
  let todo = await Todo.create(newTodo);
  res.status(200).json({
    todo
  })
})


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
      // console.log(key)
      newTodo[key] = req.body[key]
    }
  }
  // console.log(newTodo)
  await todo.set(newTodo);
  todo = await todo.save();

  res.status(200).json({
    todo
  })
})


//test User db
const testDb = async (req, res, next) => {
  try {
    let newUser = {name: 'Minh Hai'}
    await User.create(newUser);
    res.json({success: true})
  } catch (e) {
    console.log(e)
    res.json({error: e.message})
  }
}

//test Todo db

const testTodoDb = async (req, res, next) => {
  try {
    let newTodo = {title: 'new todo 1', date: Date.now(), isDone: false}
    await Todo.create(newTodo);
    res.json({success: true})
  } catch (e) {
    console.log(e)
    res.json({error: e.message})
  }
}

module.exports ={
  testDb,
  testTodoDb,
  getAllTodos,
  updateTodo,
  createTodo
}