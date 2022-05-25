//forEach

const friends = ["Melissa", "Marc", "Andrew", "Nick"];


friends.forEach(friend =>{
  const friendFirstLetter = friend.toLowerCase()
  console.log(friendFirstLetter)
})

//map
const instructors = ["Alex", "Ben", "Daniel", "Morgan", "Micah", "Jims"];


const awesomeMap = instructors.map(instructor => `${instructor} is awesome`)

console.log(awesomeMap)


//filter
const people = ["jerks", "nice people", "jerks", "nice people", "nice people"];

const removeJerks = people.filter(person => person !== 'jerks')

console.log(removeJerks)