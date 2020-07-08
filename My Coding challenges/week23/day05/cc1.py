class Node: 
  def _init_(self, data): 
    self.data = data 
    self.next = None
  
class LinkedList: 
  def _init_(self): 
    self.head = None

  def list_reverse(self): 
    prev = None
    cur_node = self.head 
    while(cur_node is not None): 
      next = cur_node.next
      cur_node.next = prev 
      prev = cur_node 
      cur_node = next
    self.head = prev 
        
  def insert_list(self, new_data): 
    new_node = Node(new_data) 
    new_node.next = self.head 
    self.head = new_node 

  def printList(self): 
    cur_node = self.head 
    while(cur_node): 
      print (cur_node.data)
      cur_node = cur_node.next
  
  
li = LinkedList() 
li.insert_list(3) 
li.insert_list(4) 
li.insert_list(15) 
li.insert_list(25) 
  
li.list_reverse() 
li.printList()