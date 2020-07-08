def count(C, b, a ): 
    if (a == 0): 
        return 1
    if (a < 0): 
        return 0; 
    if (b <=0 and a >= 1): 
        return 0
    return count( C, b - 1, a ) + count( C, b, a-C[b-1] ); 
arr = [1, 2, 3] 
b = len(arr) 
print(count(arr, b, 4))