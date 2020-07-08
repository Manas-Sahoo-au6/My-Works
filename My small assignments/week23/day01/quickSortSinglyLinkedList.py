# https://www.geeksforgeeks.org/quicksort-on-singly-linked-list/


class Node(object):

    def __init__(self, data):
        self.data = data
        self.next = None


class Linkedlist(object):

    def __init__(self):
        self.head = None
        self.tail = None
        self.length = 0

    def push_back(self, data):
        self.length += 1
        new = Node(data)
        if(self.tail is None):
            self.head = self.tail = new
        else:
            self.tail.next = new
            self.tail = new

    def pop_front(self):
        if(self.head is None):
            return self.head
        self.length -= 1
        data = self.head.data
        self.head = self.head.next
        return data

    def show(self, head, tail):
        arr = []
        if(head is None):
            print(arr)
            return
        while(True):
            if(head.data is not None):
                arr.append(head.data)
            if(head is tail):
                break
            head = head.next
        print(arr)

    def quicksort(self, head, tail):
        if(head is tail):               # if single node return
            return head, tail
            # using 3 dummy nodes for 3 lists
        hlt = Node(None)                # head, tail < pivot list
        tlt = hlt
        heq = Node(None)                # head, tail = pivot list
        teq = heq
        hgt = Node(None)                # head, tail > pivot list
        tgt = hgt
        pivot = head
        curr = head
        end = tail.next
        while(curr is not end):
            if(curr.data < pivot.data):
                tlt.next = curr
                tlt = curr
            elif(curr.data == pivot.data):
                teq.next = curr
                teq = curr
            else:
                tgt.next = curr
                tgt = curr
            curr = curr.next
        heq = heq.next                  # at least 1 node (should release node)
        if(hlt is tlt):                 # if none < pivot
            hlt = heq  # (should release dummy node)
            tlt = heq
        else:                           # else recurse on list < pivot
            hlt = hlt.next  # (should release dummy node)
            hlt, tlt = self.quicksort(hlt, tlt)
            tlt.next = heq
        if(hgt is tgt):                 # if none > pivot
            hgt = teq  # (should release dummy node)
            tgt = teq
        else:                           # else recurse on list > pivot
            hgt = hgt.next  # (should release dummy node)
            hgt, tgt = self.quicksort(hgt, tgt)
            teq.next = hgt
        return(hlt, tgt)

    def sort(self):
        if (self.head == None):         # if empty list return
            return
        self.head, self.tail = self.quicksort(self.head, self.tail)
        self.tail.next = None
        return


lists = Linkedlist()
lists.push_back(27)
lists.push_back(35)
lists.push_back(23)
lists.push_back(22)
lists.push_back(38)
lists.push_back(26)
lists.push_back(31)
lists.sort()
arr = []
while(True):
    data = lists.pop_front()
    if(data is None):
        break
    arr.append(data)
print(arr)
