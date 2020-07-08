def merge(A, n, B):
    j, k = n, n + len(B)
    for b in reversed(B):
        while 0 < j and b < A[j-1]:
            j -= 1
            k -= 1
            A[k] = A[j]
        k -= 1
        A[k] = b
       # print(merge) 