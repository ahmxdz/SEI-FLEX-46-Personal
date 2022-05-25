#for the first 50 natural numbers (1 - 50)
#check each number, and
# if it is divisible by 3, print 'fizz'
#if it is divisible by 5, print 'buzz'
#if it is divisible by 15, print 'fizzbuzz'
#otherwise, just print the number

for num in range(1, 51):
    #your code here
    if num % 15 == 0:
        print('fizzbuzz')
    elif num % 5 == 0:
        print('buzz')
    elif num % 3 == 0:
        print('fizz')
    else:
        print(num)
    