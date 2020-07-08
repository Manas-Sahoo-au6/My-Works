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
            elif data >= self.data:
                if self.right is None:
                    self.right = Node(data)
                else:
                    self.right.insertNode(data)
        else:
            self.data = data
    def iterative_postorder(self,root):
        if root is None:
            return
        s1 = []
        s2 = []

        s1.append(root)
        while s1:
            top = s1.pop()
            s2.append(top)

            if top.left:
                s1.append(top.left)
            if top.right:
                s1.append(top.right)
        for i in s2[::-1]:
            print(i.data, end=" ")

bt = Node(12)
bt.insertNode(6)
bt.insertNode(3)
bt.insertNode(14)
bt.insertNode(16)
bt.insertNode(7)

bt.iterative_postorder(bt)