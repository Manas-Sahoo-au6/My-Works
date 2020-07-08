def f(x,i,j,v,d,l,g,di):
    if i<0 or j<0 or i>=l or j>=l:
        return
    if v[i][j]==1:return
    if x[i][j]==1:
        v[i][j]=1
        d[i][j]=g
        f(x,i+1,j,v,d,l,g,"r")
        f(x,i,j+1,v,d,l,g,"d")
        f(x,i-1,j,v,d,l,g,"l")
        f(x,i,j-1,v,d,l,g,"u")
    else:
        if di=="r":
            f(x,i+1,j,v,d,l,g,"r")
        elif di=="d":
            f(x,i,j+1,v,d,l,g,"d")
        elif di=="l":
            f(x,i-1,j,v,d,l,g,"l")
        else:
            f(x,i,j-1,v,d,l,g,"u")
class Solution:
    def findCircleNum(self, x):
        l=len(x);g=0
        d=[[-1 for i in range(l)] for j in range(l)]
        v=[[0 for i in range(l)]for j in range(l)]
        for i in range(l):
            for j in range(l):
                if x[i][j]==1:
                    if d[i][j]==-1:
                        f(x,i,j,v,d,l,g,"r")
                        g+=1
        return g