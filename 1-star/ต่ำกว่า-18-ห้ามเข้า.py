Name = str(input())
BornYear = int(input())

Age = (2021 - BornYear)

if (Age >= 18):
  print(f"Welcome {Name} to NongGipsy Pub")
else:
  print("You shall not pass!")