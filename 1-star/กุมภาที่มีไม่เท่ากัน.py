import calendar

Input = int(input())

if (calendar.isleap(Input)):
  print("Leap Year")
else:
  print("Not a Leap Year")