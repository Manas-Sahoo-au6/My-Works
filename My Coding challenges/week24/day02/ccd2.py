class Queue:
    def _init_(self):
        self.queue = []

    def enqueue(self,data):
        return self.queue.append(data)

    def dequeue(self):
        return self.queue.pop(0)


class Stack:
    def _init_(self):
        self.q1 = Queue()
        self.q2 = Queue()

    def push(self,data):
        self.q1.enqueue(data)

    def pop(self):

        q2 = self.q2.queue
        q1 = self.q1.queue
        
        for i in range(len(q1)):
            q2.insert(0,q1[i])

        return q2[0]

    def print_stack(self):
        if len(self.q1.queue) < 1:
            print("Stack is Empty")
        else:
            print("Stack is ="," ".join(map(str, self.q1.queue)))


a = Stack()
a.push(10)
a.push(20)
a.push(30)
a.print_stack()
print("Last Element Poped = ",a.pop())