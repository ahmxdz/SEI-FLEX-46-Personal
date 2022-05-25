
color = ''

while color != 'quit':

    color = input('Enter "green", "yellow", "red" (quit to exit): ').lower()
    print(f'The user entered {color}')
    if color == 'green':
        print('Go!')
    elif color == 'yellow':
        print('Slow Down!')
    elif color == 'red':
        print('Stop!')
    else:
        print('Bogus!')


# color = input('Enter "green", "yellow", "red" (quit to exit): ').lower()

#    if color == 'quit':
#         print('Goodbye!')
#         break

#     print(f'The user entered {color}')

#     if color == 'green':
#         print('Go!')
#     elif color == 'yellow':
#         print('Slow Down!')
#     elif color == 'red':
#         print('Stop!')
#     else:
#         print('Bogus!')
