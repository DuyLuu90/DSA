## Linear Search:
You look through the array 1 by 1 until you find the item (O(1),0(n))
For ex: find indexOf

## Binary Search:
Only works on sorted array. Using the divide and conquer approach (dividing the range in half each time)

ALGORITHM:
* Input: given a sorted array
* Constrain: varied
* Output: find an item:
* Solution:
    (1) Params: start||0, end||array.length, array, value
    (2) Let index= Math.floor((start+end)/2) && item= array[index]
    (3) Base case: start>end || item==value
    (4) Recursive case: 
        If item< value then start=index+1; end=end => call again
        If item> value then start=start, end= index-1

## Depth-first-search:
Starts from a given node(usually the root) and traverse as far as you can down. When you reach a node that has no children, or all nodes on its path have been visited, you start backtracking

ALGORITHM:
* Input: given an array
* Constrain: varied
* Output: find an item
* Solution:
    (1) Params: values||[]
    (2) Base case: if the node has no left or right branch, return the values
    (3) Recursive case:
        If there is a left branch, recur

## Breadth-first-search:

## In-order search:

## Pre-ordering:

## Posr-ordering: