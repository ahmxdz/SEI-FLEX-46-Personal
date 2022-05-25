# allow us to create our own data types
# it allows us to encapsulate data and methods (the actions we carry out on that data)


#suppose we want to build a card game
#1. we need to define a card

#a card is a thing that has a suit and a value
#eg ace of spades or 2 of diamonds, or queen of clubs

class Card:
    def __init__(self, value, suit):
        #instance variables
        self.suit = suit
        self.value = value

#instantiate the class (we create an object)
c = Card(2, 'Diamond')

#print(c.suit)
#print(c.value)


#write a rectangle class
#1. instance variables length and width
#2. methods to calculate area and perimeter

class Rectangle:
    def __init__(self, length, width):
        self.length = length
        self.width = width

    def area(self):
        return self.length * self.width
    
    def perimeter(self):
        #your code here
        return 2 * (self.length + self.width)

r = Rectangle(10, 5)

#call our method
#print(r.area())

#print(r.perimeter())

#write a Person class
#1. name, address, age as instance variables
#2. birthday method that increments the persons age by one

class Person:
    def __init__(self, name, address, age):
        #your code here
        self.name = name
        self.address = address
        self.age = age
   
    def birthday(self):
        #your code here
        self.age += 1
    

p = Person('John', 'Toronto', 30)

print(p.age)
p.birthday()

print(p.age)







