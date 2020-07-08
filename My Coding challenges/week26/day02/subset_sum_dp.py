'''
Given a set of non-negative integers, and a value sum, determine if there is a subset of the given set with sum equal to given sum. Example: 
 
Input: set[] = {3, 34, 4, 12, 5, 2}, sum = 9 
Output: True  There is a subset (4, 5) with sum 9. 
 
Input: set[] = {3, 34, 4, 12, 5, 2}, sum = 30 
Output: False There is no subset that add up to 30. 

A tabulation solution
'''


def isSubsetSum(set, n, sum):

    subset = ([[False for i in range(sum + 1)]
               for i in range(n + 1)])

    for i in range(n + 1):
        subset[i][0] = True

    for i in range(1, sum + 1):
        subset[0][i] = False

    for i in range(1, n + 1):
        for j in range(1, sum + 1):
            if j < set[i-1]:
                subset[i][j] = subset[i-1][j]
            if j >= set[i-1]:
                subset[i][j] = (subset[i-1][j] or
                                subset[i - 1][j-set[i-1]])

    for i in range(n + 1):
        # uncomment this code to print table
        # for j in range(sum + 1):
        #   print (subset[i][j], end =" ")
        return subset[n][sum]


# Driver program to test above function
if __name__ == '__main__':
    set = [3, 34, 4, 12, 5, 2]
    sum = 9
    n = len(set)
    print('--------------------')
    print('A Tabulation solution')
    if (isSubsetSum(set, n, sum) == True):
        print(True, "Found a subset with given sum = ", sum)
    else:
        print(False, "No subset with given sum = ", sum)
    print('--------------------')

'''
A Memonized way
'''


def subsetSum(A, n, sum, lookup):

    if sum == 0:
        return True

    if n < 0 or sum < 0:
        return False

    key = (n, sum)

    if key not in lookup:

        include = subsetSum(A, n - 1, sum - A[n], lookup)

        exclude = subsetSum(A, n - 1, sum, lookup)

        lookup[key] = include or exclude

    return lookup[key]


# Driver program to test above function
if __name__ == '__main__':

    A = [3, 34, 4, 12, 5, 2]
    sum = 30

    lookup = {}
    print('--------------------')
    print('A Memonized way')
    if subsetSum(A, len(A) - 1, sum, lookup):
        print(True, "Found a subset with given sum = ", sum)
    else:
        print(False, "No subset with given sum = ", sum)
    print('--------------------')
