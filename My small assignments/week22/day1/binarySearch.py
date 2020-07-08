 # Recursive solution:

def binary_search_recursive(arr, elem, start=0, end=None):
    if end is None:
        end = len(arr) - 1
    if start > end:
        return False

    mid = (start + end) // 2
    if elem == arr[mid]:
        return mid
    if elem < arr[mid]:
        return binary_search_recursive(arr, elem, start, mid-1)
    # elem > arr[mid]
    return binary_search_recursive(arr, elem, mid+1, end)


    # Iterative solution:
    
    def binary_search_iterative(arr, elem):
    start, end = 0, (len(arr) - 1)
    while start <= end:
        mid = (start + end) // 2
        if elem == arr[mid]:
            return mid
        if elem < arr[mid]:
            end = mid - 1
        else:  # elem > arr[mid]
            start = mid + 1

    return False