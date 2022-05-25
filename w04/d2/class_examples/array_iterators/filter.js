const studentNames = ['Ahmed', 'Alex', 'Johnny', 'Han', 'Deo','Ani']

// Test out map callback with a single item
const firstStudentIndex = 0
const firstStudentName = studentNames[firstStudentIndex]

// Array Filter

// Filter callbacks return a boolean. True if we want to filter something in/ false if we want to filter something out

// Goal: We want to find all students whose names begin with the letter 'A'
const filterCallback = (iterationValue, iterationIndex) => {
  return iterationValue.charAt(0) === 'A'
}

console.log(filterCallback(firstStudentName, firstStudentIndex))

// perform extra test on a false filter
const thirdStudentIndex = 2
const thirdStudentName = studentNames[thirdStudentIndex]
console.log(filterCallback(thirdStudentName, thirdStudentIndex))

const filteredStudentNames =  studentNames.filter(filterCallback)

console.log('The original array')
console.log(studentNames)

console.log('---------')
console.log('The remix:')
console.log(filteredStudentNames)

