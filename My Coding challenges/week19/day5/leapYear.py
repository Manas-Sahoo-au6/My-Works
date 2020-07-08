  
def is_leap(num):
    leap = False

    if num >= 1900 and num <= 100000 and num % 4 == 0:
        if num % 100 == 0:
            if num % 400 == 0:
                leap = True
            else:
                leap = False
        else:
            leap = True
            
    else:
        leap = False

    if leap:
        print("True Leap Year")
    else:
        print("False it's not a Leap Year")


year = int(input("Enter Year -> "))

is_leap(year)