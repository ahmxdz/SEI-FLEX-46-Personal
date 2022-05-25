const studentNames = ['Ahmed', 'Alex', 'Johnny', 'Han', 'Deo','Ani']

// For Each
const studentMap = {}
const forEachCallback = (iterationValue, iterationIndex) => {
  console.log('---------')
  console.log(`Student Name: ${iterationValue}`)
  console.log(`Student Index: ${iterationIndex}`)

  // ForEach doesn't only have to be for logging
  studentMap[iterationValue] = iterationIndex
}

// If we want to test out the forEach Callback function for a single item in the array, you can try the following
const firstStudentIndex = 0
const firstStudentName = studentNames[firstStudentIndex]
forEachCallback(firstStudentName, firstStudentIndex)

// Once you have tested this out for a single item, you can apply it to the array forEach
studentNames.forEach(forEachCallback)
