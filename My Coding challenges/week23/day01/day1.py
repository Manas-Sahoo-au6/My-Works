# Node class  
class Node: 
  
    # Constructor to initialize the node object 
    def __init__(self, data): 
        self.data = data 
        self.next = None
  
class LinkedList: 
  
    # Function to initialize head 
    def __init__(self): 
        self.head = None
  
    # Function to pairwise swap elements of a linked list 
    def pairwiseSwap(self): 
        temp = self.head 
         
        # There are no nodes in ilnked list 
        if temp is None: 
            return 
           
        # Traverse furthur only if there are at least two 
        # left 
        while(temp is not None and temp.next is not None): 
  
            # Swap data of node with its next node's data 
            temp.data, temp.next.data = temp.next.data, temp.data  
              
            # Move temo by 2 fro the next pair 
            temp = temp.next.next
         
    # Function to insert a new node at the beginning 
    def push(self, new_data): 
        new_node = Node(new_data) 
        new_node.next = self.head 
        self.head = new_node 
  
    # Utility function to prit the linked LinkedList 
    def printList(self): 
        temp = self.head 
        while(temp): 
            print (temp.data),
            temp = temp.next
  
  

llist = LinkedList() 
llist.push(5) 
llist.push(4) 
llist.push(3) 
llist.push(2) 
llist.push(1) 
  

llist.printList() 
  
llist.pairwiseSwap() 
  

llist.printList() 