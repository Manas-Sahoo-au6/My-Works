class Solution:
    def canFinish(self, numCourses, prerequisites):
		
        seen = set()
        while prerequisites:
            a,b = prerequisites.pop()
            if [b,a] in prerequisites:
                return False
            for x,y in prerequisites:
                print(x,y)
                if x==b:
                    if (y,a) in prerequisites:
                        return False
                    else:
                        if (a,b) not in seen:
                            prerequisites.append([a,y])
                            seen.add((a,b))
        return True