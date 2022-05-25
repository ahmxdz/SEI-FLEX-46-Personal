// find
const cars = [
    {color: 'red', make: 'BMW', year: 2001},
    {color: 'white', make: 'Toyota', year: 2013},
    {color: 'blue', make: 'Ford', year: 2014},
    {color: 'white', make: 'Tesla', year: 2016}
  ];
  
  let firstWhiteCar = cars.find(function(car) {
    return car.color === 'white';
  });
  
  // firstWhiteCar is {color: 'white', make: 'Toyota', year: 2013}
  
  let missingCar = cars.find(function(car) {
    return car.color === 'black';
  });
  
  // missingCar = undefined
  /*--- using an arrow function for the callback ---*/
  
  firstWhiteCar = cars.find(car => car.color === 'white');
  
  let notTooOldCar = cars.find(car => car.year > 2014);
  
  console.log(notTooOldCar)
  
  //findIndex
  
  let indexOfTesla = cars.findIndex(car => car.make === 'Tesla');
  
  console.log(indexOfTesla)
  
  //some
  const myRoom = ['evil monkey', 'bed', 'lamp'];
  
  let isEvilMonkeyInRoom = myRoom.some(item => item === 'evil monkey')
  
  console.log(isEvilMonkeyInRoom)
  
  //every
  
  let areCarsNew = cars.every(car => car.year > 2015)
  
  console.log(areCarsNew)