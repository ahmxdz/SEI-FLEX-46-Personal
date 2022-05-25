class Student {

    submittedAssignments = {}
  
    constructor(studentName, studentAge, studentCity) {
      this.name = studentName
      this.age = studentAge
      this.city = studentCity
    }
  
    submitLab(assignmentId, grade) {
      this.submittedAssignments[assignmentId] = {
        grade: grade,
        timeSubmitted: new Date()
      }
    }
  
    getsubmittedAssignments() {
      return this.submittedAssignments
    }
  
    getName() {
      return this.name;
    }
  
    setHobby(hobby) {
      this.hobby = hobby
    }
  
  }  
  
  class Classroom {
  
    students = []
  
    addStudent(student) {
      this.students.push(student)
    }
  
    calcaulateClassAverageForAssignment(assignmentId) {
  
      const getStudentGrade = (student) => {
        const studentLabs = student.submittedAssignments
  
        // we want to find the lab for this student with this assignmentId
        console.log(studentLabs[assignmentId].grade)
        return studentLabs[assignmentId].grade
      }
  
      let sum = 0;
      this.students.forEach(value => {
        sum += getStudentGrade(value)
      }
      )
      let x = sum / this.students.length;
      return x
    }
  
  }
  
  
  const class1 = new Classroom();
  
  let han = new Student("Han", "24", "Cowtown");
  han.submitLab("Lab1", 87)

  let sam = new Student("asdasd", "24", "asdasd");
  sam.submitLab("Lab1", 64);

  class1.addStudent(han);
  class1.addStudent(sam);
  console.log(class1)
  console.log(class1.calcaulateClassAverageForAssignment("Lab1"))