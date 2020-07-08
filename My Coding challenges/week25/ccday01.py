class Graph():
    def _init_(self,n):
        self.n = n
        self.graph = {}
        for _ in range(n):
            self.graph[_] = set()
    def connect(self,x,y):
        self.graph[x].add(y)
        self.graph[y].add(x)
    def find_all_distances(self,start):
        queue = [start]
        visited = set()
        distances = [-1] * len(self.graph)
        distances[start] = 0
        visited.add(start)
        while queue:
            head = queue.pop(0)
            for _ in self.graph[head]:
                if _ in visited:
                    continue
                queue.append(_)
                visited.add(_)
                distances[_] = distances[head]+6
        del(distances[start])
        print(*distances)

t = int(input())
for i in range(t):
    n,m = [int(value) for value in input().split()]
    graph = Graph(n)
    for i in range(m):
        x,y = [int(x) for x in input().split()]
        graph.connect(x-1,y-1) 
    s = int(input())
    graph.find_all_distances(s-1)
    class Graph():
        def _init_(self,n):
              self.n = n
        self.graph = {}
        for _ in range(n):
            self.graph[_] = set()
    def connect(self,x,y):
        self.graph[x].add(y)
        self.graph[y].add(x)
    def find_all_distances(self,start):
        queue = [start]
        visited = set()
        distances = [-1] * len(self.graph)
        distances[start] = 0
        visited.add(start)
        while queue:
            head = queue.pop(0)
            for _ in self.graph[head]:
                if _ in visited:
                    continue
                queue.append(_)
                visited.add(_)
                distances[_] = distances[head]+6
        del(distances[start])
        print(*distances)

t = int(input())
for i in range(t):
    n,m = [int(value) for value in input().split()]
    graph = Graph(n)
    for i in range(m):
        x,y = [int(x) for x in input().split()]
        graph.connect(x-1,y-1) 
    s = int(input())
    graph.find_all_distances(s-1)

    
      