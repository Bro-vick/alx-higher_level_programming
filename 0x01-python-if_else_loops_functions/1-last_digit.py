#!/usr/bin/python3
import random
number = random.randint(-10000, 10000)

if number < 0:
    buf = number * -1
else:
    buf = number

lastDigit = buf % 10
if number < 0:
    lastDigit = lastDigit * -1
if lastDigit > 5:
    print(f"Last digit of {lastDigit:d}, and is greater than 5.")
elif number[-1] == 0:
    print(f"Last digit of {lastDigit:d}, and is 0.")
else:
    print(f"Last digit of {lastDigit:d}, and is less than 6 and not 0.")

