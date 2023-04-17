from contextlib import contextmanager
from time import time

@contextmanager
def mock_time():
    global time
    saved_time = time
    time = lambda: 42
    yield
    time = saved_time

with mock_time():
    print(f"Mocked time: {time()}")

print(time())


"""
Decorators section
"""

def my_decorator(func):
    def wrapper():
        print("TEXT 1")
        func()
        print("TEXT 1")
    return wrapper

class User:

    def __init__(self, func):
        self.f = func

    def __call__(self, fn: str, ln: str):
        print("DECORATING: ", self.f.__name__)
        self.name = self.f(fn, ln)

    # def name():
    #     return self.name

class UserArgs:

    def __init__(self, func):
        self.f = func

    def __call__(self, *args, **kwargs):
        print("DECORATING: ", self.f.__name__)
        self._name = self.f(*args, **kwargs)

        return self

    @property
    def name(self):
        return self._name

def say_whee():
    print("HOLA")

say_whee()
print(say_whee)

@my_decorator
def say_whee():
    print("HOLA")

@User
def create_user(fn: str, sn: str):
    return fn + sn

@UserArgs
def create_user_args(fn: str, last_name: str):
    return "%s %s" % (fn, last_name)

@UserArgs
def create_user_args2(fn: str, last_name: str):
    return "%s %s" % (fn, last_name)

# print(create_user_args("Luis", last_name = "Esteban"))

var = create_user_args("PEPE", "RIOS")
var2 = create_user_args2("MAR", "ROJO")

# print(create_user("Luis", "Esteban"))
# print(create_user.name)
print(var2.name)
print(var.name)

print("TEST DE PROPIEDADES/METODOS DINAMICOS =======================================")

from abc import abstractmethod, ABC
import inspect

class UserClass(ABC):

    @abstractmethod
    def hola(self):
        """IMRPIMRE UN HOLA"""
        pass

# def add_method(cls, i):
# 
#     def method(self):
#         print("TEXTO")
# 
#     method.__name__ = "method%s" % i
# 
#     setattr(cls, method.__name__, method)
# 
# for i in range(2):
#     add_method(UserClass, i)

class User(UserClass):

    def __str__(self):
        return "INSTANCIA DE USERCLASS"

    def hola(self):
        print("HOLA")

u = User()

print(u)
#u.method1()


# print(inspect.getmembers(u, predicate=inspect.ismethod))
