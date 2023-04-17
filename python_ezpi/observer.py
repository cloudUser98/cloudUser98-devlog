from __future__ import annotations
from abc import ABC, abstractmethod
from random import randrange
from typing import List


class Subject(ABC):

    @abstractmethod
    def attach(self, observer: Observer) -> None:
        pass

    @abstractmethod
    def detach(self, observer: Observer) -> None:
        pass

    @abstractmethod
    def notify(self) -> None:
        pass

class ConcreteSubject(Subject):

    _state: int = None

    _observers: List[Observer] = []
    
    def attach(self, observer: Observer) -> None:
        print("ATTACHED")
        self._observers.append(observer)
    
    def detach(self, observer: Observer) -> None:
        self._observers.remove(observer)
    
    def notify(self) -> None:
        print("NOTIFICANDO OBSERVADORES")

        for observer in self._observers:
            observer.update(self)
        self._observers.append(observer)

    def business_logic(self) -> None:

        print("DOING SOMETHING")
        self._state = randrange(0, 10)

        print(f"THE SATE CHANGED TO {self._state} SO IM GOING TO NOTIFY MY OBSERVERS")
        self.notify()

class Observer(ABC):

    def update(self, subject: Subject) -> None:
        pass
     
class ConcreteObserverA(Observer):
    def update(self, subject: Subject) -> None:
        print(subject._state)
        if subject._state < 3:
            print("OBSERVADOR A REACCIONO")
    
class ConcreteObserverB(Observer):
    print("PRINTING __name__  --> ", __name__)
    def update(self, subject: Subject) -> None:
        print("PRINTING __name__  --> ", __name__)
        print(subject._state)
        if subject._state == 0 or subject._state >= 2:
            print("OBSERVADOR B REACCIONO")


print(__name__)
subject = ConcreteSubject()

observer_a = ConcreteObserverA()
subject.attach(observer_a)

observer_b = ConcreteObserverB()
subject.attach(observer_b)

subject.business_logic()
subject.business_logic()

subject.detach(observer_a)

subject.business_logic()
