class Node:
	val = -1
	left = None
	right = None
 
	def __init__(self, val):
		self.val = val

def iterative_postorder(root):
	_stack = []
	_stack.append(root)
	while len(_stack) > 0:
		top = _stack[-1]
		_stack = _stack[:-1]
		# printing the root val
		if top.right is not None:
			_stack.append(top.right)
		if top.left is not None:
			_stack.append(top.left)
		print(top.val) 
 
 
 
if __name__ == '__main__':
	root = Node(1)
	root.left = Node(2)
	root.right = Node(3)
	#preorder(root)
	iterative_postorder(root)
