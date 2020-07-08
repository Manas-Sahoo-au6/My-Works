# Write the code for calculating the number of operations using Matrix Chain Multiplication using memoization


def MCM(dims, i, j, T):

    if j <= i + 1:
        return 0

    min = float('inf')

    if T[i][j] == 0:

        for k in range(i + 1, j):

            cost = MCM(dims, i, k, T)

            cost += MCM(dims, k, j, T)

            cost += dims[i] * dims[k] * dims[j]

            if cost < min:
                min = cost

        T[i][j] = min

    return T[i][j]


if __name__ == '__main__':

    dims = [10, 30, 5, 60]

    T = [[0 for x in range(len(dims))] for y in range(len(dims))]

    print("Minimum cost is", MCM(dims, 0, len(dims) - 1, T))
