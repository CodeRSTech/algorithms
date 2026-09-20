from random import randint

N = 15
MIN = 1
MAX = 20

def BubbleSort(start:int, end:int, array:list):
    newEnd:int = start;
    for i in range(start, end):
        if array[i] > array[i + 1]:
            array[i], array[i+1] = array[i + 1], array[i]
            newEnd = i

    if newEnd == start:
        return
    else:
        BubbleSort(start, newEnd, array)

if __name__ == '__main__':
    array = [randint(MIN, MAX) for _ in range(N)]
    print("Initial Array: ", *array)
    BubbleSort(0, N-1, array)
    print("Sorted Array: ",*array)