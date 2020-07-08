import random


class Node:
    def __init__(self, data, left=None, right=None):
        self.data = data
        self.left_child = left
        self.right_child = right


class BinaryTree:
    def __init__(self):
        self.root = None

    def calculate_height(self, node):
        if node is None:
            return 0
        if node.left_child is None and node.right_child is None:
            return 1
        return 1 + max(
            self.calculate_height(node.left_child),
            self.calculate_height(node.right_child)
        )

    def insertNode(self, data):
        if self.root is None:
            self.root = Node(data)
        else:
            cur_node = self.root
            while cur_node.left_child and cur_node.right_child:
                where_to_go = random.randint(0, 1)
                if where_to_go == 0:
                    cur_node = cur_node.left_child
                else:
                    cur_node = cur_node.right_child
            if cur_node.left_child is None:
                cur_node.left_child = Node(data)
            else:
                cur_node.right_child = Node(data)


b = BinaryTree()
b.insertNode(0)
b.insertNode(1)
b.insertNode(2)
b.insertNode(3)
b.insertNode(4)
print(b.calculate_height(b.root))