num = int(input("Enter a Number -> "))


def check(num):
    if(num > 99 or num < 1):
        print("Invalid Range")
        return False
    else:
        return True


if(check(num)):
    for i in range(1, num+1):
        dec = str(i)
        octal = str(oct(i))[2:]
        hexa = str(hex(i))[2:]
        binary = str(bin(i))[2:]

        print(dec.center(5)+octal.center(5) +
              hexa.center(5)+binary.center(5))