### LISTS ###

# simple list
sl = [1, 2, 3, "JAJA", 2.3]
print(sl)

# multi dimensional list
ml = [[1, 2, 3], "JAJA", 2.3]

# def method():
#     return "LOL"
# 
# ml.__str__ = method

print(ml)


### DICTIONARIES ###

dict_lambda = {lambda x:x*5 for x in [1, 2 ,3 ,4 ,5]}
#Investigar por que esto no funciona

dict = {x:x*5 for x in [1, 2 ,3 ,4 ,5]}

print(dict)


### TUPLES ###

t = ("LUIS", "ESTEBAN")


### SETS ###
print("==================  SETS  ==================")

s = set([1, 2, "Luis", 4, "Esteban", 6, "Hello"])

print(s)
for x in s:
    print(x)


### ORDERED DICT ###
print("==================  OrderedDict  ==================")

from collections import OrderedDict

od = OrderedDict()
od["a"] = 1
od["b"] = 2
od["c"] = 3
od["d"] = 4

for key, value in od.items():
    print(key, value)
od.pop("c")
for key, value in od.items():
    print(key, value)
