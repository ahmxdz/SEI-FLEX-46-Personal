const todos = [
    {id: 125223, todo: 'Feed Dogs', done: true},
    {id: 127904, todo: 'Learn Express', done: false},
    {id: 139608, todo: 'Buy Milk', done: false}
];
  
const getAll = () => {
    return todos
}

const getAllItemsThatBasedOnDone = (isDone) => {
    return todos.filter(item => item.done === isDone)
}

const findById = (id) => {
    return todos.find(item => item.id == id)
}

module.exports = {
    getAll,
    getAllItemsThatBasedOnDone,
    findById
};

// Same as 
// module.exports = {
//     getAll: getAll,
//     getAllDoneItems: getAllItemsThatBasedOnDone
// }
  
// function getAll() {
//     return todos;
// }
 