#!/usr/bin/python3
"""Class Square"""


class Square:
     """Represent a square."""

    def __init__(self, size=0):
        if not isinstance(size, int):
            raise TypeError('size must be an integer')
        elif size < 0:
            raise ValueError('size must be >= 0')
        else:
            self.__size = size

    def area(self):
        """that returns the current area of the square
        """

        return (self.__size ** 2)

    @property
    def size(self):
        """to retrieve the size of the square
        """

        return self.__size

    @size.setter
    def size(self, value):
        """to set the size of the square
        """
        if not isinstance(value, int):
            raise TypeError('size must be an integer')
        elif value < 0:
            raise ValueError('size must be >= 0')
        else:
            self.__size = value
