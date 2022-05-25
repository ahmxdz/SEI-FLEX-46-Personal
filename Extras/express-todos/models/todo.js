const todos = [
    {id: 123, todo: 'Feed Dogs', done: true},
    {id: 456, todo: 'Learn Express', done: false},
    {id: 789, todo: 'Buy Milk', done: false}
  ];

  module.exports = {
      getAll: getAll,
      getOne: getOne
  }

  function getOne(id){
      return todos.find( todo => todo.id === parseInt(id))
  }

// module.exports = 'Hello'

  function getAll() {
      return todos
  }

  function deleteAll() {
      return console.log('delete')
  }