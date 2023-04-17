def many_times(func):
    func = func
    return "El nombre es: " + (func("Carlitos"))

print(many_times(lambda name : name + " el mero mero"))


"""Iterate over dictionaries"""

# creating a dictionary with the constructor

list = [("name", "Luis"), ("age", 28), ("nickname", "EZPI")]

dict = dict(list)

print(list)
print(dict)
