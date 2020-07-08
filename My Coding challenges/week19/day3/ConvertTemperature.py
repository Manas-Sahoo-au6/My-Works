temp = input("Enter temperature you like to convert 45f, 102c : ")
degree = int(temp[:-1])
Inputconvention = temp[-1]

if Inputconvention == "c":
  result = int(round((9 * degree) / 5 + 32))
  Outconvention = "Fahrenheit"
elif Inputconvention == "f":
  result = int(round((degree - 32) * 5 / 9))
  Outconvention = "Celsius"
else:
  print("Input proper convention.")
  quit()
print("The temperature in", Outconvention, "is", result, "degrees.")