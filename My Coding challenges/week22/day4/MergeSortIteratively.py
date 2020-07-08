arr1 = list(map(int,input('enter first list of integers separated by space: ').rstrip().split()))
arr2 = list(map(int,input('enter second list of integers separated by space: ').rstrip().split()))
arr3 = []
arr1.sort()
arr2.sort()
l1 = len(arr1)
l2 = len(arr2)
i,j = 0,0
while i < l1 and j <l2:
    if arr1[i]<=arr2[j]:
        arr3.append(arr1[i])
        i+=1
    else:
        arr3.append(arr2[j])
        j+=1
while i < l1:
    arr3.append(arr1[i])
    i+=1
while j < l2:
    arr3.append(arr2[j])
    j+=1
print(arr3)