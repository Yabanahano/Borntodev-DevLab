a = int(input())
b = int(input())
Max = max(a,b)
Min = min(a,b)

if (Max == Min):
  print("AB")
elif (Max > Min):
  if (Max == a):
    print("A")
  else:
    print("B")
elif (Min > Max):
  if (Min == a):
    print("A")
  else:
    print("B")