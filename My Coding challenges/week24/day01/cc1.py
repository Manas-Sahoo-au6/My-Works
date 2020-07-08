class Queue:
    def __init__(self):
        self.queue = []
        self.front_index = None
        self.rear_index = None

    def front(self):
        if self.front_index is not None:
            return self.queue[0]

    def rear(self):
        if self.rear_index is not None:
            return self.queue[-1]

    def enqueue(self, data):
        self.queue.append(data)
        if self.front_index is None:
            self.front_index = 0
            self.rear_index = 0
        else:
            self.rear_index += 1

    def dequeue(self):
        if self.front_index is not None:
            if self.rear_index == 0:
                self.queue = []
                self.front_index = None
                self.rear_index = None
            else:
                self.queue.pop(0)
                self.rear_index -= 1


q = Queue()
q.enqueue(12)
q.enqueue(13)
q.enqueue(14)
q.dequeue()
q.dequeue()