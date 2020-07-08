class Node:
    def _init_(self, data=None, next_node=None):
        self.data = data
        self.next = next_node


class CircularLinkedList:
    def _init_(self):
        self.head = None
        self.last = None

    def addAtEnd(self, data):
        elem = Node(data)

        if self.head is None:
            self.head = elem
            elem.next = self.head
        else:
            cur_node = self.head
            while cur_node.next is not self.head:
                cur_node = cur_node.next
            cur_node.next = elem
            cur_node = cur_node.next
            cur_node.next = self.head

    def length_cir_ll(self):
        if self.head is None:
            return 0
       
        count = 1
        cur_node = self.head
        
        while cur_node.next is not self.head:
            cur_node = cur_node.next
           
            count += 1
        return count

    def addAtPosition(self, data,  position):
        elem = Node(data)
        if position <= 0:
            return self.addAtStart(data)
        elif position >= self.length_cir_ll():
            return self.addAtEnd(data)
        else:
            cur_pos = 0
            cur_node = self.head
            while cur_pos != position-1:
                cur_node = cur_node.next
                cur_pos += 1
            elem.next = cur_node.next
            cur_node.next = elem

    def printList(self):
        if self.head is not None:
            first_node = self.head
            cur_node = self.head
            print(cur_node.data, " ---> ", end="")
            cur_node = cur_node.next
            while cur_node != first_node:
                print(cur_node.data, " ---> ", end="")
                cur_node = cur_node.next
            print("End")


if _name_ == "_main_":
    clist = CircularLinkedList()

    clist.addAtEnd(1)
    clist.addAtEnd(2)
    clist.addAtEnd(0)
    clist.addAtEnd(4)
    clist.addAtPosition(8, 3)

    clist.printList()