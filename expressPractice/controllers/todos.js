const Todo = require('../models/todo');

module.exports = {
  index,
  show
};

function show(req, res) {
    res.render(`todos/show`, {
      todo: Todo.getOne(req.params.id)
    })
}
// function show(req, res) {
//     res.render(`todos/show`, {
//       todo: Todo.getOne(req.params.id),
//     });
//   }

function index(req, res) {
    console.log('were here');
    res.render('todos/index', {
      todos: Todo.getAll()
    });
  }