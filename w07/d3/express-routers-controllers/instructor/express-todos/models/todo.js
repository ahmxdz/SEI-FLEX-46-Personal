const todos = [
  { id: 125223, todo: 'Feed Dogs', done: true },
  { id: 127904, todo: 'Learn Express', done: false },
  { id: 139608, todo: 'Buy Milk', done: false },
];

function getAll() {
  return todos;
}

function getOne(id) {
  return todos.find((todo) => todo.id === parseInt(id));
}

module.exports = {
  getAll,
  getOne,
};
