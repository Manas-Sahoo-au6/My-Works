'''
You are given a circular linked list, write the code for:

Deleting an element at the end of the list
Deleting an element at a given position in the list
'''


class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


class CreateList:
    def __init__(self):
        self.head = Node(None)
        self.tail = Node(None)
        self.head.next = self.tail
        self.tail.next = self.head
        self.size = 0

    def add(self, data):
        newNode = Node(data)
        if self.head.data is None:
            self.head = newNode
            self.tail = newNode
            newNode.next = self.head
        else:
            self.tail.next = newNode
            self.tail = newNode
            self.tail.next = self.head
        self.size = int(self.size)+1

    def delPos(self, pos):
        if(self.head == None):
            return
        else:
            count = pos
            if(self.head != self.tail):
                temp = self.head
                current = None
                for i in range(0, count-1):
                    current = temp
                    temp = temp.next
                if(current != None):
                    current.next = temp.next
                    temp = None
                else:
                    self.head = self.tail = temp.next
                    self.tail.next = self.head
                    temp = None
            else:
                self.head = self.tail = None
        self.size = self.size - 1

    def deleteEnd(self):
        if(self.head == None):
            return
        else:
            if(self.head != self.tail):
                current = self.head
                while(current.next != self.tail):
                    current = current.next
                self.tail = current
                self.tail.next = self.head
            else:
                self.head = self.tail = None

    def display(self):
        current = self.head
        if self.head is None:
            print("List is empty")
            return
        else:
            print(current.data),
            while(current.next != self.head):
                current = current.next
                print(current.data),
            print("\n")


class CircularLinkedList:
    cl = CreateList()
    cl.add(1)
    cl.add(3)
    cl.add(5)
    cl.add(4)
    print("Original List:")
    cl.display()
    cl.delPos(3)
    cl.deleteEnd()
    print("Updated List:")
    cl.display()
