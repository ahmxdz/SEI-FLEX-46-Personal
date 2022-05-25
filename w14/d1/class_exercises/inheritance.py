import random

class BankAccount:
    def __init__(self, owner):
        self.owner = owner
        self.balance = 0.0
        self.account_no = random.randint(111111111, 999999999)
    
    def deposit(self, amount):
        self.balance += amount
        return self.balance
    
    def withdraw(self, amount):
        self.balance -= amount
        return self.balance

    def __repr__(self):
        return f'Account {self.account_no} / Balance {self.balance}'

#define SavingsAccount that is a subclass of BankAccount

class SavingsAccount(BankAccount):
    def __init__(self, owner):
        #always call the base class init method first
        BankAccount.__init__(self, owner)
    
    #override the withdraw method
    def withdraw(self):
        return 'No withdrawals permitted'


s = SavingsAccount('John Doe')
print(s)

s.deposit(100)

print(s)
print(s.withdraw())

b = BankAccount('Jane Doe')
print(b)
b.withdraw(100)
print(b)
