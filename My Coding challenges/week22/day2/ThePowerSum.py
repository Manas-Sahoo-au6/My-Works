import math
X, N = int(input()), int(input())
def count(x, larger_than):
  if x == 0:
    return 1
  return sum(count(x - i ** N, i) 
  for i in range(larger_than + 1, math.ceil(math.pow(x + 1, 1 / N))))
print(count(X, 0))