class Car {

    // We can initialize class attributes here or inside the constructor
    numberOfDoors = 4;
    color = 'blue';
    gasMeter = 50;
  
    // same as an init function
    constructor(make, model, numberOfDoors, carColor) {
      this.make = make;
      this.model = model;
      this.numberOfDoors = numberOfDoors
      this.color = carColor
    }
  
    // We can also modify class attributes outside of the constructor
    setMake(make) {
      this.make = make
    }
  
    printMakeOfCar() {
      // using the this keyword allows you to access variables within the class scope
      console.log(`Car color: ${this.color}`)
      console.log(this.make)
    }
  
    refuel() {
      this.gasMeter = 100;
    }
  
    printGasMeter() {
      console.log(`Gas Meter for ${this.make}: ${this.gasMeter}`)
    }
  
  }
  
  const toyotaCamry = new Car("Toyota", "Camry", 2, "green")
  toyotaCamry.printMakeOfCar()
  toyotaCamry.printGasMeter()
  
  console.log('------')
  
  // Creating another instance of this class
  const nissanPathFinder = new Car("Nissan", "Pathfinder", 4)
  nissanPathFinder.printMakeOfCar()
  
  console.log('------')

  toyotaCamry.refuel()
  toyotaCamry.printGasMeter()
  
  console.log('------')

  // The refuel function which was run on the toyotaCamry instance of this class didn't affect Nissan's
  // You can see that a class's attributes don't get affected by what happens to another class
  nissanPathFinder.printGasMeter()
