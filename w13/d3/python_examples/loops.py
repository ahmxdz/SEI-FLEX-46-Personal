
# numbers = []

# if numbers:
#     print('it has things in it!!!')
# else:
#     print('it is empty!!')

# #iterable

names = ["Tom", "Deborah", "Murray", "Axel"]

# for name in names:
#     print(name)
'''
javascript equivalent
for(const name of names){
    console.log(name)
}
'''

#we could also iterate over the list using an index
for idx in range(len(names)):
    print(names[idx])

'''
javascript equivalent
for(let idx = 0; idx < names.length; idx++){
    console.log(name[idx])
}
'''

#write a for loop to count the number of vowels in this string:
awesome_string = 'Python is Awesome' #-> answer is 6
#vowels are aeiou 
#hint - use or in your condition
vowel_count = 0
# for character in awesome_string.lower():
#     if character == 'a' or character == 'e' or character == 'i' or character == 'o' or character =='u':
#         #increment count
#         vowel_count += 1

# print(vowel_count)

#The pythonic way
vowels = 'aeiou'
for character in awesome_string.lower():
    if character in vowels:
        vowel_count += 1

print(vowel_count)


#how may odd numbers are in this list
my_numbers = [8, 15, 11, 12, 34, 56, 7, 1, 95, 13]  #-> answer is 6
odd_number_count = 0
for num in my_numbers:
    if num % 2 == 1:
        odd_number_count += 1
print(odd_number_count)

#find the sum of the odd numbers in the list
odd_number_total = 0 #-> answer is 142 (i think)
for num in my_numbers:
    if num % 2 == 1:
        odd_number_total += num
print(odd_number_total)

#create a new string from text, without the vowels
#result: Ths s  smpl ln f txt
text = 'This is a simple line of text'
vowels = 'aeiou'
new_string = ''
for character in text.lower():
    if character not in vowels:
        new_string += character

print(new_string)


for character in text.lower():
    if character in vowels:
        #do nothing
        continue
    else:
        new_string += character



