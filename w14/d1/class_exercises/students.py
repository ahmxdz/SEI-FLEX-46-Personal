#create a student class
#1. student has name, id, a list of courses(initially empty)
#2. a register method - adds a course to the students list of courses
#3. Restrict registration to only students that have paid fees


#create a course class
#1. course has title, prerequisite, schedule

class Course:
    def __init__(self, title, pre, sch):
        self.title = title
        self.prerequisite = pre
        self.schedule = sch
    
    def __repr__(self):
        return f'Title: {self.title} Prerequisite(s): {self.prerequisite} - offered in the {self.schedule}'
        

class Student:
    next_id = 100 #class variable

    def __init__(self, name):
        self.name = name
        self.id = Student.next_id
        self.courses = []
        #initialize a fess_paid variable to False
        self.fees_paid = False
        Student.next_id += 1
    
    def register(self, course: Course):
        
        #check that the student's fees is paid before adding course to list
        #if registration is successful, print 'Sucessfully enrolled',
        #otherwise print 'you cant enroll until fess are paid'
        if(self.fees_paid):
            if type(course) is Course:
                self.courses.append(course)
                print('Sucessfully enrolled')
            else:
                raise TypeError(f'Invalid type: Course expected, got {type(course)}')
        else:
            print('You cant enroll until fess are paid')

    def pay_fees(self):
        #set your fees_paid variable to true
        self.fees_paid = True
    
    def show_courses(self):
        print(self.courses)
    
    def __repr__(self):
        #show the students name and id
        return f'Name: {self.name}, id: {self.id}, currently enrolled: {self.courses}'

s = Student('John')
s2 = Student('Jane')

c = Course('Python', 'None', 'Winter')

#s.register(c)

s.pay_fees()

s.register(c)

s.show_courses()
print(s)
print(s2)

