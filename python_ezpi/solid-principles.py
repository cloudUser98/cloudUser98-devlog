"""
##################################################################
Single responsavility principle
##################################################################
"""

"""
as we can see a class should only do one job to be decoupled
"""
class Animal:

    def __init__(self, name: str):
        self.name = name

    def get_name(self) -> str:
        pass

    """
    By defining the save method we are not respeting the SRP
    because the class that was intended to represent an animal
    now is doing the task of saving the object in the database
    """
    def save(self, animal: Animal):
        pass

"""
So we create another class, a class that it's job is to only
save data to the database
"""
class saveToDB:

    def get_object(self):
        pass

    def save(self, object):
        pass

"""
##################################################################
Open closed principle
##################################################################
"""

"""
Software entities(Classes, modules, functions) 
should be open for extension, not modification.
"""

class Animal:

    def __init__(self, name: str):
        self.name = name

    def get_name(self) -> str:
        pass

animals = [
        Animal("perro"),
        Animal("gato"),
]

def animal_sound(animals: list):
    for animal in animals:
        if animal.name == "perro":
            print("woof")

        elif animal.name == "gato":
            print("miau")

        """
        And then what?, we need to add more logic to this function
        for each different animal that the code needs, that's not
        what the open-closed principle wants
        """

animal_sound(animals)

"""
So what can we do?...
"""

class Animal:
    def __init__(self, name: str):
        self.name = name

    def get_name(self):
        pass

    def make_sound(self):
        pass

class Perro(Animal):
    def make_sound(self):
        return 'woof'

class Gato(Animal):
    def make_sound(self):
        return 'miau'

def animal_sound(animals: list):

    for animal in animals:
        print(animal.make_sound())
