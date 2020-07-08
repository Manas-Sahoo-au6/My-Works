def closest_numbers(l):
    l.sort()
    m = []
    for i in range(len(l) - 1):
        n = abs(l[i] - l[i + 1])
        m.append([n, l[i], l[i + 1]])
    m.sort()
    k = []
    for i in range(len(m)):
        if m[i][0] == m[0][0]:
            k.extend([m[i][1], m[i][2]])
    return k

a = int(input('enter an integer: '))
b = list(map(int,input('enter the list of integers separated by space between them: ').rstrip().split()))
result = closest_numbers(b)
print(*result)
