# 2) Write a Python script to generate and print a dictionary that contains a number (between 1 and n) in the form (x, x*x).

inp = int(input("Enter Number: "))

dic = {}

for i in range(1, inp):
    dic[i] = i*i

print(dic)