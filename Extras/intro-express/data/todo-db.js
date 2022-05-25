const todos = [
    {todo: 'Feed Dogs', done: true},
    {todo: 'Learn Express', done: false},
    {todo: 'Buy Milk', done: false}
  ];

//   const todos = 'Kareem'

  module.exports = {
      getAll: function() {
          return todos
      }
  }