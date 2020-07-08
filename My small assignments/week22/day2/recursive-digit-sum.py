def Digit(n, k):
    digits = map(int, list(n))
    return Digit1(str(sum(digits) * k))

def Digit1(p):
    if len(p) == 1:
        return int(p)
    else:
        digits = map(int, list(p))
        return Digit1(str(sum(digits)))

if __name__ == '__main__':
    nk = input().split()
    n = nk[0]
    k = int(nk[1])
    result = Digit(n, k)
    print(result)
