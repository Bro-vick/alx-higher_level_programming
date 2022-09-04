#!/usr/bin/python3

def square_matrix_simple(matrix=[]):
    new_matrix = []
    new_row = []
    for row in matrix:
        for item in row:
            new_row.apppend(item * item)
        new_matrix.append(new_row)
        new_row = []

    return new_matrix
