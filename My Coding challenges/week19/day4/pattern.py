n = int(input("Enter pattern size: "))

for i in range(n):
    print((n-i) * '* ' + (2*i) * ' ' + (2*i) * ' ' + (n-i) * '* ')
for i in range(n-1, -1, -1):
    print((n-i) * '* ' + (2*i) * ' ' + (2*i) * ' ' + (n-i) * '* ')




