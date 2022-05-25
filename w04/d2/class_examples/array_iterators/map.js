const studentNames = ['Ahmed', 'Alex', 'Johnny', 'Han', 'Deo','Ani']

// Example of Array

// Goal is to append "SEI-46-" in front of everyone's names
const mapCallback = (iterationValue, iterationIndex) => {
  const prefix = 'SEI-46'
  return `${prefix}-${iterationValue}`
  // return SEI-46-Ahmed
}

// Test out map callback with a single item
const firstStudentIndex = 0
const firstStudentName = studentNames[firstStudentIndex]

const mapResultOfFirstStudent = mapCallback(firstStudentName, firstStudentIndex)

console.log(mapResultOfFirstStudent)

const mappedAllStudentNames = studentNames.map(mapCallback)


console.log('--------')
console.log('The original array:')
console.log(studentNames)

console.log('--------')
console.log('The remix')
console.log(mappedAllStudentNames)