
# 3) Write a Python program to create a dictionary from a string.


inp = input("Enter a String -> ")

dic = {}

for i in inp:
    dic[i] = inp.count(i)

print(dic)