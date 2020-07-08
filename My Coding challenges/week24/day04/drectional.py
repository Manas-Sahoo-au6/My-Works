from collections import defaultdict
def contverToList(arr):
    out = defaultdict(list)
    for i in range(len(arr)):
        for j in range(len(arr)):
            if arr[i][j]==1:
                out[i].append(j)
    return out

def stri(arr):
    stry = ""
    for i in range(len(arr)):
        stry+='->'+str(arr[i])
    return stry

ar =  [ [0, 1, 0, 0, 1], [1, 0, 1, 1, 1], [0, 1, 0, 1, 0], [0, 1, 1, 0, 1], [1, 1, 0, 1, 0] ]
fout = contverToList(ar)

for i in range(len(fout)):
    print(i , stri(fout[i]))