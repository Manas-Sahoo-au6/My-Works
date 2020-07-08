# Explain how adjacency list and adjacency matrix are able to logically present a non-linear data structure, even though they are themselves linear.

'''
Stacks, queues, lists, vectors/arrays: they all store data linearly in the sense that items are stored one after the other. There is the notion of "item A comes before item B", and "item C comes after item B". One before, one after. They only differ in how items can be accessed (FIFO, LIFO, by rank, by position).

Trees (a type of graph) store data hierarchically. There's not really a before/after relation. Instead, items are stored based on a parent/child relationship. Then, we can say "the parent of item A is B", and "the children of item A are B, C, D, and E".

Graphs store any type of relation between elements. An item can be related to any other item, as expressed by an edge. We can say "item A is related to B, C, D, E" and "item B is related to A and F". It is in this sense that they are nonlinear. An adjacency list and adjacency matrix accomplish this by, effectively, maintaining a (linear) list of these relationships.
'''
