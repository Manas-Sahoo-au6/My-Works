def printParenthesis(m, j, i):

    if j == i:

        print(chr(65 + j), end="")
        return
    else:
        print("(", end="")

        printParenthesis(m, m[j][i] - 1, i)

        printParenthesis(m, j, m[j][i])
        print(")", end="")


def matrixChainOrder(p, n):

    m = [[0 for i in range(n)]
         for i in range(n)]

    for l in range(2, n + 1):
        for i in range(n - l + 1):
            j = i + l - 1

            m[i][j] = float('Inf')
            for k in range(i, j):
                q = (m[i][k] + m[k + 1][j] +
                     (p[i] * p[k + 1] * p[j + 1]))
                if (q < m[i][j]):
                    m[i][j] = q

                    m[j][i] = k + 1
    return m


# Driver Code
arr = [40, 20, 30, 10, 30]
n = len(arr) - 1

m = matrixChainOrder(arr, n)

print("Optimal Parenthesization is: ", end="")

printParenthesis(m, n - 1, 0)
print("\nMinimum Cost of Multiplication :", m[0][n - 1])
