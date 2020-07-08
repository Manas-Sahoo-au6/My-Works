class Node: 
    def _init_(self, data): 
        self.data = data 
        self.right = None
        self.left = None
  
def Inorder(root): 
    if(root == None): 
        return
    Inorder(root.left) 
    print(str(root.data), end = " ") 
    Inorder(root.right) 
  
def FlattenBinaryTree(root): 
    global last 
    if(root == None): 
        return
      
    left = root.left 
    right = root.right 
    if(root != last): 
        last.right = root 
        last.left = None
        last = root 
    FlattenBinaryTree(left) 
    FlattenBinaryTree(right) 
    if(left == None and right == None): 
        last = root
  
root = Node(1) 
root.left = Node(2) 
root.left.left = Node(3) 
root.left.right = Node(4) 
root.right = Node(5) 
root.right.right = Node(6) 


print("before : ", end = "") 
Inorder(root) 
print("") 
last = root 
FlattenBinaryTree(root) 
print("after : ", end = "") 
Inorder(root) 
print('')