print("Enter Marks of 5")

# Caluclate Percentage
def perc(user_marks):
    return user_marks/5

a = 0.0

for i in range(0, 5):
    a = a + float(input("Subject no. "+str(i+1)+"--->"))

    if(i == 4):
        a = perc(a)
        
        if(a >= 90):
            print("A")
        elif(a >= 80 and a < 90):
            print("B")
        elif(a >= 60 and a < 80):
            print("C")
        elif(a >= 40 and a < 60):
            print("D")
        elif(a < 40):
            print("E")