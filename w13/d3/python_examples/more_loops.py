from random import randint

value = 10
print('countdown...')
while value >= 0:
    print(value)
    value -= 1


#read in a value from the keyboard, until the user enters -1
# number = int(input('enter a value: '))

# while number != -1:
#     print(f'your entered: {number}')
#     number = int(input('enter a value: '))


#generate a random number between 1 and 10
#prompt for a number (guess)
# if it is correct, print 'you are correct!'
#otherwise promt again

# secret_number = randint(1, 10)
# guess = int(input('Guess my secret number: '))

# while guess != secret_number:
#     print('guess again')
#     guess = int(input('Guess my secret number: '))

# print('you are correct!!')

# a better way
secret_number = randint(1, 10)
while True:
    guess = int(input('Guess my secret number: '))
    if guess == secret_number:
        print('you are correct!!')
        break
    else:
        #print('guess again')
        #if the guess is bigger than the secret, print too high
        #if it is smaller, print too low
        if guess > secret_number:
            print('too high')
        elif guess < secret_number:
            print('too low')


