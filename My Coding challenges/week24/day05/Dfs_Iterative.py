class Graph:  
    def __init__(self,V): 
        self.V = V        
        self.adj  = [[] for i in range(V)]  
  
    def addEdge(self,v, w):    
        self.adj[v].append(w)     
    
    def DFS(self,s):           
        visited = [False for i in range(self.V)]  
  
        # Create a stack for DFS  
        stack = [] 
  
        # Push the current source node.  
        stack.append(s)  
  
        while (len(stack)):  
            # Pop a vertex from stack and print it  
            s = stack[-1]  
            stack.pop() 
  
        
            if (not visited[s]):  
                print(s,end=' ') 
                visited[s] = True 
  
          
            for node in self.adj[s]:  
                if (not visited[node]):  
                    stack.append(node)  
  

  
g = Graph(5); 
g.addEdge(1, 0);  
g.addEdge(0, 2);  
g.addEdge(2, 1);  
g.addEdge(0, 3);  
g.addEdge(1, 4);  
  
print(" Depth First Traversal")  
g.DFS(0) 