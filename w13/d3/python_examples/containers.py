# #create list

# #1. use square brackets
# names = ['john', 'jane']

# #2. use the list() constructor
# values = list()

# print(type(names))

# print(names)

# print(values)

# #add an item to the end of a list - append()
# values.append(1)
# values.append('hello!')
# print(values)

# #add item to any position in list - insert()
# values.insert(0, -1)
# print(values)

# #find the location of an item in a list - index()
# print(values.index(-1))

# #count the occurence of an item in a list - count()
# numbers = [1, 2, 3, 2, 4,5, 7, 4, 5,7, 8, 9]

# print(numbers.count(4))

# #pay attention when making copies of objects (lists, sets, tupes, dictionaries)
# random_numbers = numbers.copy() #creates a shallow copy of numbers lists

# print(random_numbers)

# #remove an element from numbers
# numbers.pop()
# print('numbers: ', numbers)

# print('random_number: ', random_numbers)

# #find the location (index) of the first 'h' in this list
# chars = ['e', 'k', 'n', 'h', 'b', 'e', 'h', 'z'] #-> 3
# print(chars.index('h'))

# #write a for loop to find the indexes of all the 'h' in the list. Add the indexes to a new list #-> [3, 6]
# list_of_h_indexes = []
# for idx in range(len(chars)):
#     if chars[idx] == 'h':
#         #add the index to our new list
#         list_of_h_indexes.append(idx)

# print(list_of_h_indexes)

# #if we need the index, or we need to modify a list, use the range(len(list_name)) syntax


# #create new list with words longer than 4 characters
# words = ['run', 'cat', 'hassle', 'print', 'class', 'pyth']
# long_words = []
# for word in words:
#     if len(word) > 4:
#         long_words.append(word)

# print(long_words)


#how to create a dictionary

#1. use {}
person = {'name': 'John', 'age': 30}

#2. use the constructor - dict()
city = dict()


#add an item to a dictionary
# adding the key and the value
city['name'] = 'Toronto'

print(city)
city['population'] = 2000000
print(city)

#how to retrieve an item from a dictionary

#1. square bracket notation
print(person['name'])
print(city['population'])

#2. use get
print(city.get('name'))


#use get if we are not sure if a key is in a dictionary

#keys cannot be duplicated
person['occupation'] =  'Engineer'
person['age'] = 45 #overwrite the original age value

print(person)


#how to iterate over a dictionary
for key in person:
    #print key = value -> name = 'John', age = 45, occupation = 'Engineer'
    print(f'{key} = {person[key]}')



#to get all the keys in a dictionary
print(person.keys())

#we can get items using .items()
print(person.items())

# can grap key and value from .items()
for key, value in person.items():
    print(key, value)


#create a new dictionary that reverses the keys and values of the following:

state_capitals = {
    "Alaska" : "Juneau",
    "Colorado" : "Denver",
    "Oregon" : "Salem",
    "Texas" : "Austin"
}

# -> {
# 'Juneau': 'Alaska',
# 'Denver': 'Colorado',
# 'Saalem': 'Oregon',
# 'Austin', 'Texas'
# }

reversed_capitals = dict()

for key in state_capitals:
    reversed_capitals[ state_capitals[key]] = key

print(reversed_capitals)

#how do we create dictionaries from two lists?

names = ['John', 'Jane', 'Joe', 'Jill', 'Jack']
hobbies = ['football', 'skiing', 'boxing', 'fetching pails of water', 'going up hills']

people_hobbies = dict(zip(names, hobbies))

print(people_hobbies)


#tuples - immutable - once creted we cant update the items

#how to create tuple
coordinates = (17,  -76)

print(type(coordinates))

#we cannot reassign items in a tuple
#coordinates[0] = 15

days_of_week = 'Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'


print(days_of_week)

fixed = tuple([1, 2, 3])
print(fixed)

print(days_of_week[1])



















