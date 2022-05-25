def first_function():
    pass


# def add(a, b):
#     return a + b


# #print(add(2))

# #write a function that accepts a string and returns the reverse
# def reverse_string(my_string):
#     return my_string[::-1]


# #print(reverse_string('hello world'))

# def reverse_string_2(my_string):
#     result = ''
#     for idx in range(len(my_string) - 1, -1, -1):
#         result += my_string[idx]

#     return result

# #print(reverse_string_2('hello world'))
# #                                                   |
# #'h', 'e', 'l', 'l', 'o' ' ', 'w', 'o', 'r', 'l', 'd'

# def reverse_string_3(my_string):
#     idx = len(my_string) - 1
#     result = ''
#     while idx >= 0:
#         result += my_string[idx]
#         idx -= 1
    
#     return result
    
# print(reverse_string_3('hello world'))


# #write a function that accepts a list of integers and return the sum of the integers
# #- do not use the sum function

# def sum_list(my_list):
#     #your code here
#     total = 0
#     for val in my_list:
#         total += val

#     return total

# print(sum_list([1, 2, 3, 4, 5])) # -> 15


# #write a function to count the number of words in a string
# #hint use split to separate a string into 'words'
# def count_words(my_string):
#     #your code here
#     return len(my_string.split())


# print(count_words('a cat in a hat')) # -> 5


def add_three(a, b, c):
    return a + b + c

def add_four(a, b, c, d):
    return a + b + c + d

#how to write a function that accepts varying number of arguments
def add(*args):
    total = 0
    for item in args:
        total += item
    
    return total

first_sum = add()
second_sum = add(1, 10)
third_sum = add(10, 20, 30, 40, 50)

print(first_sum, second_sum, third_sum)


#keyword arguments vs positional arguments

def foo(a, b):
    #a and ba are positional arguments
    print(f'a = {a}, b = {b}')

foo(3, 'yes')

def another_foo(a = 0, b = 'None'):
    #these are keyword arguments. supply a default value
    print(f'a={a}, b={b}')

another_foo(b='hello world', a=25)

another_foo()


#how to write function with varying number of keyword arguments - **kwargs

def greet(**kwargs):
    # for key in kwargs:
    #    print(f'{key} = {kwargs[key]}') 
    if 'person' in kwargs:
        print(f'Hello {kwargs["person"]}')


greet(person='John', hobby='football')

