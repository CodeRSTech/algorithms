---
layout: algo
title: Introduction to Bitwise Algorithms
category: Bitwise
attribution_sources:
  - GeeksforGeeks
gfg_url: https://www.geeksforgeeks.org/boyer-moore-majority-vote-algorithm/](https://www.geeksforgeeks.org/dsa/introduction-to-bitwise-algorithms-data-structures-and-algorithms-tutorial/
---

Bitwise operators work directly on binary bits (`0` and `1`). 

Since computers store all data in binary form, 
bitwise operations help in manipulating data at the lowest level.

| Operator                                       | Logical                                                                        | Bitwise | Example                                           |
|------------------------------------------------|--------------------------------------------------------------------------------|---------|---------------------------------------------------|
| AND<br><small>Conjunction</small>              | $\land$ <small>or</small><br> $\cdot$ <small>or</small><br> `and`              | `&`     | $A \land B$ <br>$A \cdot B$                       |
| OR <br><small>Disjunction </small>             | $\lor$ <small>or</small><br> $+$ <small>or</small><br> `or`                    | `\|`    | $A \lor B$ <br>$A + B$                            |
| NOT <br><small>Negation </small>               | $\neg$ <small>or</small><br> $\overline{\text{X}}$ <small>or</small><br> `not` | `~`     | $\neg A$ <br>$\overline{A}$ <br>$A'$              |
| NAND <br><small>Inverted AND </small>          | $\overline{\land}$                                                             | `~&`    | $\overline{A \land B}$ <br>$\overline{A \cdot B}$ |
| NOR <br><small>Inverted OR)</small>            | $\overline{\lor}$                                                              | `~`     | $\overline{A \lor B}$ <br>$\overline{A + B}$      |
| XOR <br><small>Exclusive OR </small>           | $\oplus$                                                                       | `^`     | $A \oplus B$                                      |
| XNOR <br><small>Exclusive NOR </small>         | $\odot$ <small>or</small><br> $\overline{\oplus}$                              |         | $A \odot B$ <br>$\overline{A \oplus B}$           |
| Implies <br><small>Conditional </small>        | $\rightarrow$ <small>or</small><br> $\implies$                                 |         | $A \rightarrow B$ <br>$A \implies B$              |
| Equivalent <br><small>Biconditional </small>   | $\leftrightarrow$ <small>or</small><br> $\iff$                                 |         | $A \leftrightarrow B$ <br>$A \iff B$              |
| Tautology <br><small>Always True </small>      | $\top$                                                                         |         | $\top$                                            |
| Contradiction <br><small>Always False </small> | $\bot$                                                                         |         | $\bot$                                            |

 - They are commonly used in optimization, performance-critical code, masking, toggling bits, and low-level programming.
 - They are used to perform fast calculations and binary manipulation.
 - They help in setting, clearing, checking, and toggling bits.
 - Bitwise operations are often faster for low-level and bit-manipulation tasks.
 - Bitwise operations enable packing multiple flags into a single variable, reducing memory usage.

# Bitwise Operators / Basics of Bit manipulation

Bit manipulation works on binary bits ($0$ and $1$), making it fast and efficient. 
These operations are executed by the CPU’s **Arithmetic Logic Unit (ALU)** and are commonly used for 
optimization, efficient flag handling, and performance-critical tasks.

## Main Bitwise Operators:

 - **AND** `&`
 - **OR** `|`
 - **XOR** `^`
 - **NOT** `~`
 - **Left Shift** `<<`
 - **Right Shift** `>>`

## Truth Table

| `X` | `Y` | AND<br>`X & Y` | OR<br>`X \| Y` | XOR<br>`X ^ Y` | NOT<br> `~ X` |
|-----|-----|----------------|----------------|----------------|---------------|
| $0$ | $0$ | $0$            | $0$            | $0$            | $1$           |
| $0$ | $1$ | $0$            | $1$            | $1$            | $1$           |
| $1$ | $0$ | $0$            | $1$            | $1$            | $0$           |
| $1$ | $1$ | $1$            | $1$            | $0$            | $0$           |

## Bitwise **AND** `&` Operator

The `&` operator takes two *equal-length bit patterns* as parameters. 
The two-bit integers are compared. 
If the bits in the compared positions of the bit patterns are $1$, then the resulting bit is $1$. If not, it is $0$.

## Truth Table

| `X` | `Y` | AND<br>`X & Y` |
|-----|-----|----------------|
| $0$ | $0$ | $0$            |
| $0$ | $1$ | $0$            |
| $1$ | $0$ | $0$            |
| $1$ | $1$ | $1$            |

## Example:

Let $X$ = $7$ = $(111)_2$ and $Y$ = 4 = $(100)_2$ . 
Then Bitwise **AND** `&` of both, i.e. $X$ `&` Y will be $4$.

$$
\begin{array}{r@{\;\;}c@{\,}c@{\,}l@{\quad}l}
   & 1 & 1 & 1_2 & \\
\& & 1 & 0 & 0_2 & \\
\hline
   & 1 & 0 & 0_2 & = 4
\end{array}
$$

## Bitwise **OR** `|` Operator

The `|` Operator takes two equivalent length bit designs as boundaries; if the two bits in the looked-at position are $0$, the next bit is zero. If not, it is $1$.

Here is the truth table for the bitwise AND operator (& or \land), demonstrating how it acts on individual input bits:

| Input <br><small>`A`</small> | Input <br><small>`B`</small> | Output <br><small>`A & B`</small> | Description       |
|----------------------------|----------------------------|---------------------------------|-------------------|
| $0$                          | $0$                          | $0 \land $0$ = 0$                 | Both bits are $0$   |
| $0$                          | $1$                          | $0 \land $1$ = 0$                 | Only one bit is $1$ |
| $1$                          | $0$                          | $1 \land $0$ = 0$                 | Only one bit is $1$ |
| $1$                          | $1$                          | $1 \land $1$ = 1$                 | Both bits are $1$   |

Example:

Take two bit values $X$ and Y, where $X$ = 7= $(1111)_2$ and  $Y$ = 4 = $(100)_2$ . 
Take Bitwise **OR** `|` of both $X$, $Y$
$$
\begin{array}{r@{\;\;}c@{\,}c@{\,}l@{\quad}l}
   & 1 & 1 & 1_2 & \\
 | & 1 & 0 & 0_2 & \\
\hline
   & 1 & 0 & 0_2 & = 4
\end{array}
$$ 

>    Explanation: On the basis of truth table of bitwise **OR** `|` operator we can conclude that the result of 

$1$ | $1$  = 1

$1$ | $0$ = 1

$0$ | $1$ = 1

$0$ | $0$ = 0

>    We used the similar concept of bitwise operator that are show in the image.

## Bitwise **XOR** `^` Operator

The ^ operator (also known as the **XOR** `^` operator) stands for Exclusive Or. Here, if bits in the compared position do **NOT** `~` match their resulting bit is 1. i.e, The result of the bitwise **XOR** `^` operator is $1$ if the corresponding bits of two operands are opposite, otherwise 0.
truth_table_of_bitwise_xor_operator

### Example:

Take two bit values $X$ and  Y, where $X$ = 7= $(1111)_2$ and  $Y$ = 4 = $(100)_2$ . Take Bitwise AND of both $X$ & $Y$
-missing-image- 

>    Explanation: On the basis of truth table of bitwise **XOR** `^` operator we can conclude that the result of 
>
>    $1$ ^ $1$  = 0
>    $1$ ^ $0$ = 1
>    $0$ ^ $1$ = 1
>    $0$ ^ $0$ = 0

We used the similar concept of bitwise operator that are show in the image.

## Bitwise **NOT** `~` Operator

All the above three bitwise operators are binary operators (i.e, requiring two operands in order to operate). Unlike other bitwise operators, this one requires only one operand to operate.
truth_table_of_bitwise_not_operator

The bitwise **NOT** `~` Operator takes a single value and  returns its one’s complement.
The one’s complement of a binary number is obtained by toggling all bits in it, i.e, transforming the $0$ bit to $1$ and  the $1$ bit to 0.

### Example: 

Take a 4-bit value X, where $X$ = 9 = $(1001)₂. Take the Bitwise **NOT** `~` of X.
-missing-image- 

>    Explanation: The bitwise **NOT** `~` operator (~) flips every individual bit in the binary representation of a number. Based on the truth table, every $1$ becomes a 0, and  every $0$ becomes a 1.
>    The resulting binary string is 0110₂, which is equal to the decimal number 6.

Note: The output of `~` changes depending on how many bits your system uses. In a *4-bit* system, `~`$9$ ($1001_2$) becomes $0110_2$ ($6$). But in an *8-bit* system, 9 is stored with leading zeros as 0000 1001. Flipping it yields 1111 0110, giving a completely different decimal result.

## **Left Shift** (`<<`)

The **Left Shift** operator is denoted by the double left arrow key (<<). The general syntax for **Left Shift** is shift-expression `<<` k. The left-shift operator causes the bits in shift expression to be shifted to the left by the number of positions specified by k. The bit positions that the shift operation has vacated are zero-filled.

>    Note: Every time we shift a number towards the left by $1$ bit it multiply that number by 2.

logical_left_shift_image

Example:

>    Input: **Left Shift** of 5 by 1.
>    Binary representation of 5 = 00101 and  **Left Shift** of 001012 by $1$ (i.e, 00101 `<<` 1)
>     
>     -missing-image- 
>    **Left Shift** of 5 by 1
>
>    Output: 10
>    Explanation: All bit of 5 will be shifted by $1$ to left side and  this result in 010102, Which is equivalent to 10

>    Input: **Left Shift** of 5 by 2.
>    Binary representation of 5 = 00101 and  **Left Shift** of 001012 by $1$ (i.e, 00101 `<<` 2)
>     -missing-image- 
>    **Left Shift** of 5 by 2
>
>    Output: 20
>    Explanation: All bit of 5 will be shifted by $1$ to left side and  this result in 101002, Which is equivalent to 20

>    Input: **Left Shift** of 5 by 3.
>    Binary representation of 5 = 00101 and  **Left Shift** of 001012 by $1$ (i.e, 00101 `<<` 3)
>     -missing-image- 
>    **Left Shift** of 5 by 3
> 
>    Output: 40
>    Explanation: All bit of 5 will be shifted by $1$ to left side and  this result in 010002, Which is equivalent to 40

## **Right Shift** (`>>`)

The general syntax for the **Right Shift** is `>> k`
The `>>` operator causes the bits in shift expression to be shifted to the right by the number of positions specified by $k$. 
For unsigned numbers, the bit positions that the shift operation has vacated are zero-filled. 
For signed numbers, the sign bit is used to fill the vacated bit positions. 
In other words, if the number is positive, $0$ is used, and  if the number is negative, $1$ is used.

>    Note: Every time we shift a number towards the right by $1$ bit it divides that number by 2.

logical_right_shift

Example:

>    Input: **Right Shift** of 5 by 1.
>    Binary representation of 5 = 00101 and  **Right Shift** of 00101 by $1$ (i.e, 00101 `>>` 1)
>     -missing-image- 
>    **Right Shift** of 5 by 1

>    Output: 2
>    Explanation: All bit of 5 will be shifted by $1$ to Rightside and  this result in 00010Which is equivalent to 2

>    Input: **Right Shift** of 5 by 2.
>    Binary representation of 5 = 00101 and  **Right Shift** of 00101 by 2 (i.e, 00101 `>>` 2)
>     -missing-image- 
>    **Right Shift** of 5 by 2

>    Output: 1
>    Explanation: All bit of 5 will be shifted by 2 to Right side and  this result in 00001, Which is equivalent to 1

>    Input: **Right Shift** of 5 by 3.
>    Binary representation of 5 = 00101 and  **Right Shift** of 00101 by 3 (i.e, 00101 `>>` 3)
>     -missing-image- 
>    **Right Shift** of 5 by 3

>    Output: 0
>    Explanation: All bit of 5 will be shifted by 3 to Right side and  this result in 00000, Which is equivalent to 0

Application of Bit Operators

>    Bit operations are used for the optimization of embedded systems.
>    The Exclusive-or operator can be used to confirm the integrity of a file, making sure it has **NOT** `~` been corrupted, especially after it has been in transit.
>    Bitwise operations are used in Data encryption and  compression.
>    Bits are used in the area of networking, framing the packets of numerous bits which are sent to another system generally through any type of serial interface.
>    Digital Image Processors use bitwise operations to enhance image pixels and  to extract different sections of a microscopic image.

## Practice Problems on Bitwise Algorithm

Solve these questions to improve your understanding of bitwise operators and  bit manipulation techniques.

>    Note: All the above Bitwise Practice Problems are optimized and  run in O(1) Time Complexity with O(1) Auxiliary Space.

### 1. Set a bit in the number

If we want to set a bit at $n^{th}$ position in the number 'num', it can be done using the 'OR' operator( | ).

>    First, we **Left Shift** $1$ to $n$ position via (1<<n).
>    Then, use the "OR" operator to set the bit at that position. "OR" operator is used because it will set the bit even if the bit is unset previously in the binary representation of the number 'num'.

>    Note: If the bit would be already set then it would remain unchanged.

### 2. Unset/Clear a bit at $n^{th}$ position in the number

Suppose we want to unset a bit at $n^{th}$ position in number 'num' then we have to do this with the help of "AND" (&) operator.

>    First, we **Left Shift** '1' to $n$ position via (1<<n) then we use bitwise **NOT** `~` operator '~' to unset this shifted '1'.
>    Now after clearing this left shifted '1' i.e making it to '0' we will 'AND'(&) with the number 'num' that will unset bit at $n^{th}$ position.

### 3. Toggling a bit at $n^{th}$ position

Toggling means to turn bit 'on'(1) if it was 'off'(0) and  to turn 'off'(0) if it was 'on'(1) previously. We will be using the 'XOR' operator here which is this '^'. The reason behind the 'XOR' operator is because of its properties.

Properties of 'XOR' operator. 

>    1^1 = 0
>    0^0 = 0
>    1^0 = 1
>    0^1 = 1

If two bits are different then the 'XOR' operator returns a set bit(1) else it returns an unset bit(0).

### 4. Checking if the bit at $n^{th}$ position is Set or Unset

We used the **Left Shift** (<<) operation on $1$ to shift the bits to $n^{th}$ position and  then use the `&` operation with number given number, and  check if it is not-equals to 0.

### Multiply a number by 2 using the **Left Shift** operator

You can multiply a number by 2 by using the **Left Shift** operator (<< 1), which shifts all bits one position to the left.

### 6. Divide a number 2 using the **Right Shift** operator

You can divide a number by 2 using the **Right Shift** operator (>> 1), which shifts all bits one position to the right.

### 7. Compute **XOR** `^` from $1$ to $n$ (direct method)

The problem Compute **XOR** `^` from $1$ to $n$ can be solved based on the following observations: n%4==0->n, 1->1, 2->n+1, 3-0.

Say $X$ = $n$ % 4. The **XOR** `^` value depends on the value if x.

>    If, $X$ = 0, then the answer is $n$.
>       $X$ = 1, then answer is 1.
>       $X$ = 2, then answer is n+1.
>       $X$ = 3, then answer is 0.

### 8. How to know if a number is a power of 2?

This can be solved based on the following fact:

>    If a number $n$ is a power of 2, then the bitwise and  of $n$ and  N-1 will be 0. But this will **NOT** `~` work if $n$ is 0. So just check these two conditions, if any of these two conditions is true.

### 9. Count Set bits in an integer

Counting set bits means, counting total number of 1’s in the binary representation of an integer. For this problem we go through all the bits of given number and  check whether it is set **OR** `|` **NOT** `~` by performing **AND** `&` operation (with 1).

### 10. Position of rightmost set bit

The idea is to unset the rightmost bit of number $n$ and **XOR** `^` the result with $n$. Then the rightmost set bit in $n$ will be the position of the only set bit in the result. Note that if $n$ is odd, we can directly return $1$ as the first bit is always set for odd numbers.

Example: The number $20$ in binary is $00010100$, and  the position of the rightmost set bit is $3$.

>    $00010100$    `&`                $(n = 20)$
>    $00010011$                       $(n-1 = 19)$
>    -------------------
>    $00010000$    `^`                (XOR result number with $n$)
>    $00010100$
>    -------------------
>    $00000100$ ------->  rightmost set bit will tell us the position
