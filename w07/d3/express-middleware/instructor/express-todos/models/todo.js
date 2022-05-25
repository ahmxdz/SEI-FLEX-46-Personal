// The ids can be generated using:
// Date.now() % 1000000
const todos = [
  { id: 125223, todo: 'Feed Dogs', done: true },
  { id: 127904, todo: 'Learn Express', done: false },
  { id: 139608, todo: 'Buy Milk', done: false },
];

function getOne(id) {
  // Use the Array.prototype.find iterator method
  return todos.find((todo) => todo.id === parseInt(id));
}

function getAll() {
  return todos;
}

function create(todo) {
  todo.id = Date.now() % 1000000;
  todo.done = false;
  todos.push(todo);
}

function destroy(id) {
  // Find the index based on the id of the todo object
  const idx = todos.findIndex((todo) => todo.id === parseInt(id));
  todos.splice(idx, 1);
}

module.exports = {
  getAll,
  getOne,
  create,
  destroy,
};
