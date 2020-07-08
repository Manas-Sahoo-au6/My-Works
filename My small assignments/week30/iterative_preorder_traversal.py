class Node:
    def __init__(self,data):
        self.data = data
        self.left = None
        self.right = None
    def insertNode(self,data):
        if self.data:
            if data < self.data:
                if self.left is None:
                    self.left = Node(data)
                else:
                    self.left.insertNode(data)
            if data >=self.data:
                if self.right is None:
                    self.right = Node(data)
                else:
                    self.right.insertNode(data)
        else:
            self.data = data
    def iterative_preorder(self,root):
        if root is None:
            return
        res = []
        while root is not None or len(res)>0:
            while root is not None:
                res.append(root)
                print(res[-1].data)
                root = res[-1].left
            top = res[-1]
            res = res[:-1]
            root = top.right


bt = Node(12)
bt.insertNode(6)
bt.insertNode(14)
bt.insertNode(3)
bt.iterative_preorder(bt)
            