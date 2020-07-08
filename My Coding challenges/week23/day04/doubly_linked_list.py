'''
Given a doubly linked list, write the code for

deleting the node from the end of the linked list
deleting the node from a given position in the linked list
'''


class Node:
    def __init__(self, data, next=None, prev=None):
        self.data = data
        self.next = next
        self.prev = prev


class DoublyLinkedList:
    def __init__(self):
        self.head = None

    def list_length(self):
        cur_node = self.head
        count = 0
        while cur_node is not None:
            count += 1
            cur_node = cur_node.next
        return count

    def print_list(self):
        cur_node = self.head
        while cur_node is not None:
            print(cur_node.data, " <=> ", end="")
            cur_node = cur_node.next
        print("None")

    def insert_at_beginning(self, data):
        elem = Node(data)
        if self.head is None:
            self.head = elem
        else:
            elem.next = self.head
            self.head.prev = elem
            self.head = elem

    def insert_at_position(self, data, pos):
        elem = Node(data)
        if pos <= 0:
            self.insert_at_beginning(data)
        elif pos > 0 and pos < self.list_length():
            cur_pos = 0
            cur_node = self.head
            while cur_pos != pos - 1:
                cur_pos += 1
                cur_node = cur_node.next
            elem.next = cur_node.next
            elem.prev = cur_node
            cur_node.next.prev = elem
            cur_node.next = elem
        else:
            self.insert_at_end(data)

    def insert_at_end(self, data):
        if self.head is None:
            self.head = Node(data)
        else:
            elem = Node(data)
            cur_node = self.head
            while cur_node.next is not None:
                cur_node = cur_node.next
            cur_node.next = elem
            elem.prev = cur_node

    def delete_from_beginning(self):
        if self.head is not None:
            self.head = self.head.next
            if self.head is not None:
                self.head.prev = None

    def delete_from_end(self):
        if self.head is not None:
            cur_node = self.head
            if cur_node.next is None:
                self.head = None
            else:
                while cur_node.next.next is not None:
                    cur_node = cur_node.next
                cur_node.next.prev = None
                cur_node.next = None

    def delete_from_anypos(self, pos):
        if self.head is not None:
            if pos <= 0:
                self.delete_from_beginning()
            elif pos >= self.list_length():
                self.delete_from_end()
            else:
                cur_pos = 0
                cur_node = self.head
                while cur_pos != pos - 1:
                    cur_node = cur_node.next
                    cur_pos += 1
                cur_node.next = cur_node.next.next
                cur_node.next.prev = cur_node


d = DoublyLinkedList()
d.insert_at_beginning(12)
d.insert_at_beginning(15)
d.insert_at_beginning(18)
d.delete_from_anypos(1)
d.print_list()
