score = 63

#ue colon to start a block
if score > 50:
    print('good score!!')

'''
javascript equivalent
    if(score > 80){
        console.log('good score!!!')
    }
'''

#else/if (python uses elif)
if score > 70:
    print('great score')
elif score > 60:
    print('good score')
else:
    print('okay score')

#display corresponding grade for a score
# 80 and above - 'A'
# 60 - 79 - 'B'
# 50 - 69 - 'C'
# 0 - 49 - 'F'

if score >= 80:
    print('A')
elif score >= 60:
    print('B')
elif score >= 50:
    print('C')
else:
    print('F')




