class Solution:
    def hasPathSum(self, root):
        if not root:
            return False
        else:
            stack = [(root, root.val)]
            while stack:
                node, total = stack.pop()
                children = [node.left, node.right]
                # we are leaf
                if not any(children):
                    if total == sum:
                        return True
                for c in children:
                    if c:
                        stack.append((c, total + c.val))
            return False