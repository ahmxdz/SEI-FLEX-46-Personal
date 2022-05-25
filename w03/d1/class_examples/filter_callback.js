const cars = [
{ make: 'Toyota', yrsOld: 5, mileage: 92399 },
{ make: 'Ford', yrsOld: 12, mileage: 255005 },
{ make: 'Ferrari', yrsOld: 9, mileage: 12966 },
{ make: 'Subaru', yrsOld: 9, mileage: 111266 },
{ make: 'Toyota', yrsOld: 2, mileage: 41888 },
{ make: 'Tesla', yrsOld: 3, mileage: 57720 }
];

// The callback function for an array filter takes in the value from the iteration and returns a booelan
function isCarWellDriven(car) {
    return (car.mileage / car.yrsOld > 20000)
}

const wellDrivenCars = cars.filter(isCarWellDriven)

console.log(wellDrivenCars)