#https://www.hackerrank.com/challenges/tree-level-order-traversal/problem
class Node:
    def __init__(self, info): 
        self.info = info  
        self.left = None  
        self.right = None 
        self.level = None 

    def __str__(self):
        return str(self.info) 

class BinarySearchTree:
    def __init__(self): 
        self.root = None

    def create(self, val):  
        if self.root == None:
            self.root = Node(val)
        else:
            current = self.root
         
            while True:
                if val < current.info:
                    if current.left:
                        current = current.left
                    else:
                        current.left = Node(val)
                        break
                elif val > current.info:
                    if current.right:
                        current = current.right
                    else:
                        current.right = Node(val)
                        break
                else:
                    break

"""
Node is defined as
self.left (the left child of the node)
self.right (the right child of the node)
self.info (the value of the node)
"""
def levelOrder(root):
    #Write your code here
    while True:
        if not hasattr(root, 'visited'):
            print (root.info, end=' ') 
            root.visited = True
        if hasattr(root, 'visited') and (root.left is None and root.right is None):
            return
        if root.left is not None:
            print (root.left.info, end=' ')
            root.left.visited = True
        if root.right is not None:
            print (root.right.info, end=' ')
            root.right.visited = True
        if root.left is not None:
            levelOrder(root.left)
        if root.right is not None:
            levelOrder(root.right)
        return            


tree = BinarySearchTree()
t = int(input())

arr = list(map(int, input().split()))

for i in range(t):
    tree.create(arr[i])

levelOrder(tree.root)

'''Input : 6
           1 2 5 3 6 4 '''