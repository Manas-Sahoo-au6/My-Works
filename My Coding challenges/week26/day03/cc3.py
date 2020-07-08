def lcs(X, Y): 
      
    m = len(X) 
    n = len(Y) 
    dp = [[0 for i in range(n+1)] for j in range(2)]  
    truFls = bool
      
    for i in range(m): 
        truFls = i&1
        for j in range(n+1): 
            if (i == 0 or j == 0): 
                dp[truFls][j] = 0
            elif (X[i] == Y[j - 1]): 
                dp[truFls][j] = dp[1 - truFls][j - 1] + 1
            else: 
                dp[truFls][j] = max(dp[1 - truFls][j],  
                               dp[truFls][j - 1]) 

    return dp[truFls][n] 

X = "AGGTAB"
Y = "GXTXAYB"
  
print("Length of LCS of (",X,"&",Y ,") is: ", lcs(X, Y))