if __name__ == "__main__":
    '''Print the number of and list of arguments.'''
    import sys

    n = len(sys.argv) 
    arg = n - 1
    if arg == 0:
        print("0 arguments.")
    elif arg == 1:
        print("1 argument:\n1: {:s}".format(sys.argv[1]))
    else:
        print("{:d} arguments:".format(arg))
        for i in range(arg):
            print("{}: {}".format(i + 1, sys.argv[i + 1]))
