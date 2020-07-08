# Write the function for converting adjacency matrix to adjacency list for unweighted graphs [Directed and Undirected]

from collections import defaultdict


class Graph:
    def __init__(self, directed=False, weighted=False):
        self.graph = defaultdict(list)
        self.directed = directed
        self.weighted = weighted

    def addEdge(self, a, b, weight=None):
        # Undirected unweighted
        if not self.directed and not self.weighted:
            self.graph[a].append(b)
            self.graph[b].append(a)
        # Directed unweighted
        elif self.directed and not self.weighted:
            self.graph[a].append(b)
        # Undirected weighted
        elif not self.directed and self.weighted:
            self.graph[a].append((b, weight))
            self.graph[b].append((a, weight))
        # Directed weighted
        else:
            self.graph[a].append((b, weight))

    def convert_list_to_matrix(self):
        self.adj_matrix = [
            [
                0 for i in range(len(self.graph))
            ] for j in range(len(self.graph))
        ]
        for i in self.graph:
            for j in self.graph[i]:
                if isinstance(j, int):
                    self.adj_matrix[i][j] = 1
                else:
                    self.adj_matrix[i][j[0]] = j[1]

    def convert_matrix_to_list(self, matrix):
        self.adjList = defaultdict(list)

        for i in range(len(matrix)):
            for j in range(len(matrix[i])):
                if matrix[i][j] == 1:
                    self.adjList[i].append(j)
        return self.adjList


g = Graph()
g.addEdge(0, 1)
g.addEdge(0, 2)
g.addEdge(0, 3)
g.addEdge(1, 2)
print(g.graph)
matrix = [[0, 1, 0, 0, 1], [1, 0, 1, 1, 1], [
    0, 1, 0, 1, 0], [0, 1, 1, 0, 1], [1, 1, 0, 1, 0]]
g.convert_list_to_matrix()
g.convert_matrix_to_list(matrix)
