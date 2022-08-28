#!/usr/bin/python3
if __name__ == "__main__":
    '''Print the number of and list of arguments.'''
    import sys

n = len(sys.argv)
arg = n - 1
if arg == 0:
    print("0 arguments.")
elif arg == 1:
    print(f"1 argument:\n1: {sys.argv[1]:s}")
else:
    print(f"{arg:d} arguments:")
    for i in range(arg):
        print("{}: {}".format(i + 1, sys.argv[i + 1]))
