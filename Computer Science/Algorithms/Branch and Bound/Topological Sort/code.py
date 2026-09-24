# G[i][j] indicates whether the path from the i-th node to the j-th node exists or not.
# NOTE: The graph must be Directed-Acyclic
from collections import deque

G = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [1, 0, 0, 1, 0, 0],
    [1, 1, 0, 0, 0, 0],
]


inDegrees = [0 for _ in range(len(G))]
Q = deque()
iter = 0

print('Calculating in-degrees for each Node...')

for currNode in range(0, len(G)):
    for currNodeNeighbor in range(0, len(G)):
        if G[currNode][currNodeNeighbor]:
            inDegrees[currNodeNeighbor] += 1
            # print(f"{currNode} -> {currNodeNeighbor}")

print('Done.In - Degrees are: [ ${String(inDegrees)}]')
print('Initializing queue with all the sources (nodes with no incoming edges)')

for node, inDegree in enumerate(inDegrees):
    if not inDegree:
        print(f"{node} is a source")
        Q.append(node)

print(f"Done. Initial State of Queue: {Q}")
