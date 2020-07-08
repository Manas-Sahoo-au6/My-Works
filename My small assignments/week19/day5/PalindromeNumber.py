digits = int(input("Enter no. of digits in multipliers : "))


def largest_product_two(digits):
    min_plier = 10 ** (digits - 1) 
    max_plier = 10 ** digits - 1    

    for z in range(max_plier, min_plier, -2):
        for x in range(max_plier, z - 1, -2):
            product = z * x
            sproduct = str(product)

            if sproduct == sproduct[::-1]:
                return product

    return None

out = largest_product_two(digits)

print("Largest palindrome is : %s" % out)