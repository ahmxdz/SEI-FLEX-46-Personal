def hello(name):
  return f'Hi there, {name}'

def emphatic_hello(name):
  return f'{name.upper()}! How the devil are you!'

def greet_sabrina(callback):
  return callback('Sabrina')

print(greet_sabrina(hello)) # Hi there, Sabrina
print(greet_sabrina(emphatic_hello)) # SABRINA! How the devil are you!

#closure?



def do_twice(func):
    def wrapper():
        func()
        func()
    return wrapper

@do_twice
def say_hello():
    print('Hello!')




say_hello()
