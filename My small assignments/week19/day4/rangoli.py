n = int(input("Enter size in number : "))
width = 4*n-3
mid = width // 2
for i in range(2*n-1):
    out = ''
    k = abs(i-(n-1))
    for j in range(width):
        x = abs(j-mid) // 2
        if j%2 == 0 and x < (n-k):
            out += chr(ord('a')+k+x)
        else:
            out += '-'
            
    print(out) 