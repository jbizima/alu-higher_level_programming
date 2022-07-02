#!/usr/bin/python3
for alpha_letters in range(ord("a"), ord("z") + 1):
    if chr(alpha_letters) == "q" or chr(alpha_letters) == "e":
        continue
    print("{:s}".format(chr(alpha_letters)), end="")
