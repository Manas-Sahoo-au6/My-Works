class Solution:
    def shortestPathBinaryMatrix(self, grid):
        n,m=len(grid),len(grid[0])
        if grid[0][0]==1 or grid[-1][-1]==1: return -1
        combs=[[-1,-1],[-1,0],[-1,1],[0,1],[1,1],[1,0],[1,-1],[0,-1]]
        vis=[[False for _ in range(m)] for _ in range(n)]
        queue=[[0,0,0]]
        dist=float("inf")
        while queue:
            i,j,dis=queue.pop(0)
            if i==n-1 and j==m-1:
                dist=min(dist,dis)
                continue
            for vec in combs:
                ni,nj=i+vec[0],j+vec[1]
                if 0<=ni<n and 0<=nj<m and grid[ni][nj]==0 and vis[ni][nj]==False:
                    queue.append([ni,nj,dis+1])
                    vis[ni][nj]=True
        return dist+1 if dist!=float("inf") else -1