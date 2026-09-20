---
layout: algo
title: Introduction to Bitwise Algorithms
category: Bitwise
attribution_source: GeeksforGeeks
gfg_url: https://www.geeksforgeeks.org/boyer-moore-majority-vote-algorithm/](https://www.geeksforgeeks.org/dsa/introduction-to-bitwise-algorithms-data-structures-and-algorithms-tutorial/
---

Bitwise operators are special operators in programming that work directly on binary bits (0 and 1). Since computers store all data in binary form, bitwise operations help us manipulate data at the lowest level using operations like AND, OR, XOR, NOT, and bit shifting.

    They are commonly used in optimization, performance-critical code, masking, toggling bits, and low-level programming.
    They are used to perform fast calculations and binary manipulation.
    They help in setting, clearing, checking, and toggling bits.
    Bitwise operations are often faster for low-level and bit-manipulation tasks.
    Bitwise operations enable packing multiple flags into a single variable, reducing memory usage.

Bitwise Operators / Basics of Bit manipulation

Bit manipulation works on binary bits (0 and 1) using bitwise operators, making it fast and efficient. These operations are executed by the CPU’s Arithmetic Logic Unit (ALU) and are commonly used for optimization, efficient flag handling, and performance-critical tasks.

The main bitwise operators are:

    AND (&)
    OR (|)
    XOR (^)
    NOT (~)
    Left Shift (<<)
    Right Shift (>>)

bitwise_operator_truth_table
Bitwise AND Operator (&)

The bitwise AND operator is denoted using a single ampersand symbol, i.e. &. The & operator takes two equal-length bit patterns as parameters. The two-bit integers are compared. If the bits in the compared positions of the bit patterns are 1, then the resulting bit is 1. If not, it is 0.
truth_table_of_bitwise_and_operator

Example:

    Take two bit values X and Y, where X = 7= (111)2 and Y = 4 = (100)2 . Take Bitwise and of both X & y
    Bitwise and of 7 & 4
    Bitwise ANDof (7 & 4)

import java.io.*;

​

class GFG {

    public static void main (String[] args) {

        int a = 7, b = 4;

          int result = a & b;

          System.out.println(result);

    }

}


Output

4

Bitwise OR Operator (|)

The | Operator takes two equivalent length bit designs as boundaries; if the two bits in the looked-at position are 0, the next bit is zero. If not, it is 1.
truth_table_of_bitwise_or_operator

Example:

    Take two bit values X and Y, where X = 7= (111)2 and Y = 4 = (100)2 . Take Bitwise OR of both X, y
     [Click to enlarge] 
    Bitwise OR of (7 | 4)

    Explanation: On the basis of truth table of bitwise OR operator we can conclude that the result of 

    1 | 1  = 1
    1 | 0 = 1
    0 | 1 = 1
    0 | 0 = 0

    We used the similar concept of bitwise operator that are show in the image.

import java.io.*;

​

class GFG {

    public static void main(String[] args)

    {

        int a = 12, b = 25;

        int result = a | b;

        System.out.println(result);

    }

}


Output

29

​Bitwise XOR Operator (^)

The ^ operator (also known as the XOR operator) stands for Exclusive Or. Here, if bits in the compared position do not match their resulting bit is 1. i.e, The result of the bitwise XOR operator is 1 if the corresponding bits of two operands are opposite, otherwise 0.
truth_table_of_bitwise_xor_operator

Example:

    Take two bit values X and Y, where X = 7= (111)2 and Y = 4 = (100)2 . Take Bitwise and of both X & y
     [Click to enlarge] 
    Bitwise OR of (7 ^ 4)

    Explanation: On the basis of truth table of bitwise XOR operator we can conclude that the result of 

    1 ^ 1  = 0
    1 ^ 0 = 1
    0 ^ 1 = 1
    0 ^ 0 = 0

    We used the similar concept of bitwise operator that are show in the image.

import java.io.*;

​

class GFG {

    public static void main(String[] args)

    {

        int a = 12, b = 25;

        int result = a ^ b;

        System.out.println(result);

    }

}


Output

21

Bitwise NOT Operator (~)

All the above three bitwise operators are binary operators (i.e, requiring two operands in order to operate). Unlike other bitwise operators, this one requires only one operand to operate.
truth_table_of_bitwise_not_operator

    The bitwise Not Operator takes a single value and returns its one’s complement.
    The one’s complement of a binary number is obtained by toggling all bits in it, i.e, transforming the 0 bit to 1 and the 1 bit to 0.

Example: 

    Take a 4-bit value X, where X = 9 = (1001)₂. Take the Bitwise NOT of X.
     [Click to enlarge] 

    Explanation: The bitwise NOT operator (~) flips every individual bit in the binary representation of a number. Based on the truth table, every 1 becomes a 0, and every 0 becomes a 1.

    The resulting binary string is 0110₂, which is equal to the decimal number 6.

    Note: The output of ~ changes depending on how many bits your system uses. In a 4-bit system, ~9 (1001) becomes 0110 (6). But in an 8-bit system, 9 is stored with leading zeros as 0000 1001. Flipping it yields 1111 0110, giving a completely different decimal result.

public class GFG {

    public static void main(String[] args) {

        

        int a = 9;

        

        System.out.print("Value of a without using NOT operator: " + a);

        System.out.print("\nInverting using NOT operator (with sign bit): " + (~a));

               

    // Why is the output -10?

    // 1. A 32-bit int for 9 is padded with zeros: 0000...00001001

    // 2. The '~' operator flips EVERY bit:        1111...11110110

    // 3. Because the first bit is 1, the computer reads it as a negative number.

    // 4. In Two's Complement math, this evaluates to -10. 

    // Shortcut formula: ~x = -(x + 1)

​

    }

}


Output

Value of a without using NOT operator: 0
Inverting using NOT operator (with sign bit): -1

Left-Shift (<<)

The left shift operator is denoted by the double left arrow key (<<). The general syntax for left shift is shift-expression << k. The left-shift operator causes the bits in shift expression to be shifted to the left by the number of positions specified by k. The bit positions that the shift operation has vacated are zero-filled.

    Note: Every time we shift a number towards the left by 1 bit it multiply that number by 2.

logical_left_shift

Example:

    Input: Left shift of 5 by 1.
    Binary representation of 5 = 00101 and Left shift of 001012 by 1 (i.e, 00101 << 1)
     
     [Click to enlarge] 
    Left shift of 5 by 1

    Output: 10
    Explanation: All bit of 5 will be shifted by 1 to left side and this result in 010102, Which is equivalent to 10

    Input: Left shift of 5 by 2.
    Binary representation of 5 = 00101 and Left shift of 001012 by 1 (i.e, 00101 << 2)
     [Click to enlarge] 
    Left shift of 5 by 2

    Output: 20
    Explanation: All bit of 5 will be shifted by 1 to left side and this result in 101002, Which is equivalent to 20

    Input: Left shift of 5 by 3.
    Binary representation of 5 = 00101 and Left shift of 001012 by 1 (i.e, 00101 << 3)
     [Click to enlarge] 
    Left shift of 5 by 3

    Output: 40
    Explanation: All bit of 5 will be shifted by 1 to left side and this result in 010002, Which is equivalent to 40

import java.io.*;

​

class GFG {

  public static void main(String[] args)

  {

    int num1 = 1024;

​

    String bt1 = Integer.toBinaryString(num1);

    bt1 = String.format("%32s", bt1).replace(' ', '0');

    System.out.println(bt1);

​

    int num2 = num1 << 1;

    String bt2 = Integer.toBinaryString(num2);

    bt2 = String.format("%32s", bt2).replace(' ', '0');

    System.out.println(bt2);

​

    int num3 = num1 << 2;

    String bitset13 = Integer.toBinaryString(num3);

    bitset13 = String.format("%16s", bitset13)

      .replace(' ', '0');

    System.out.println(bitset13);

  }

}


Output

00000000000000000000010000000000
00000000000000000000100000000000
0001000000000000

Right-Shift (>>)

The right shift operator is denoted by the double right arrow key (>>). The general syntax for the right shift is "shift-expression >> k". The right-shift operator causes the bits in shift expression to be shifted to the right by the number of positions specified by k. For unsigned numbers, the bit positions that the shift operation has vacated are zero-filled. For signed numbers, the sign bit is used to fill the vacated bit positions. In other words, if the number is positive, 0 is used, and if the number is negative, 1 is used.

    Note: Every time we shift a number towards the right by 1 bit it divides that number by 2.

logical_right_shift

Example:

    Input: Right shift of 5 by 1.
    Binary representation of 5 = 00101 and Right shift of 00101 by 1 (i.e, 00101 >> 1)
     [Click to enlarge] 
    Right shift of 5 by 1

    Output: 2
    Explanation: All bit of 5 will be shifted by 1 to Rightside and this result in 00010Which is equivalent to 2

    Input: Right shift of 5 by 2.
    Binary representation of 5 = 00101 and Right shift of 00101 by 2 (i.e, 00101 >> 2)
     [Click to enlarge] 
    Right shift of 5 by 2

    Output: 1
    Explanation: All bit of 5 will be shifted by 2 to Right side and this result in 00001, Which is equivalent to 1

    Input: Right shift of 5 by 3.
    Binary representation of 5 = 00101 and Right shift of 00101 by 3 (i.e, 00101 >> 3)
     [Click to enlarge] 
    Right shift of 5 by 3

    Output: 0
    Explanation: All bit of 5 will be shifted by 3 to Right side and this result in 00000, Which is equivalent to 0

#include <bitset>

#include <iostream>

​

using namespace std;

​

int main()

{

    unsigned int num1 = 1024;

​

    bitset<32> bt1(num1);

    cout << bt1 << endl;

​

    unsigned int num2 = num1 >> 1;

    bitset<32> bt2(num2);

    cout << bt2 << endl;

​

    unsigned int num3 = num1 >> 2;

    bitset<16> bitset13{ num3 };

    cout << bitset13 << endl;

}


Output

00000000000000000000010000000000
00000000000000000000001000000000
0000000100000000

Application of Bit Operators

    Bit operations are used for the optimization of embedded systems.
    The Exclusive-or operator can be used to confirm the integrity of a file, making sure it has not been corrupted, especially after it has been in transit.
    Bitwise operations are used in Data encryption and compression.
    Bits are used in the area of networking, framing the packets of numerous bits which are sent to another system generally through any type of serial interface.
    Digital Image Processors use bitwise operations to enhance image pixels and to extract different sections of a microscopic image.

Practice Problems on Bitwise Algorithm

Solve these questions to improve your understanding of bitwise operators and bit manipulation techniques.

    Note: All the above Bitwise Practice Problems are optimized and run in O(1) Time Complexity with O(1) Auxiliary Space.

1. Set a bit in the number

If we want to set a bit at nth position in the number 'num', it can be done using the 'OR' operator( | ).

    First, we left shift 1 to n position via (1<<n).
    Then, use the "OR" operator to set the bit at that position. "OR" operator is used because it will set the bit even if the bit is unset previously in the binary representation of the number 'num'.

    Note: If the bit would be already set then it would remain unchanged.

import java.io.*;

​

class GFG {

    public static void main(String[] args)

    {

        int num = 4, pos = 1;

        num = set(num, pos);

        System.out.println(num);

    }

    public static int set(int num, int pos)

    {

        // First step is shift '1', second

        // step is bitwise OR

        num |= (1 << pos);

        return num;

    }

}


Output

6

2. unset/clear a bit at n'th position in the number

Suppose we want to unset a bit at nth position in number 'num' then we have to do this with the help of "AND" (&) operator.

    First, we left shift '1' to n position via (1<<n) then we use bitwise NOT operator '~' to unset this shifted '1'.
    Now after clearing this left shifted '1' i.e making it to '0' we will 'AND'(&) with the number 'num' that will unset bit at nth position.

/*package whatever //do not write package name here */

​

import java.io.*;

​

class GFG {

    public static void main(String[] args)

    {

        int num = 7, pos = 1;

        num = unset(num, pos);

        System.out.println(num);

    }

    public static int unset(int num, int pos)

    {

        // Second step is to bitwise and this  number with

        // given number

        num = num & (~(1 << pos));

        return num;

    }

}


Output

5

3. Toggling a bit at nth position

Toggling means to turn bit 'on'(1) if it was 'off'(0) and to turn 'off'(0) if it was 'on'(1) previously. We will be using the 'XOR' operator here which is this '^'. The reason behind the 'XOR' operator is because of its properties.

Properties of 'XOR' operator. 

    1^1 = 0
    0^0 = 0
    1^0 = 1
    0^1 = 1

If two bits are different then the 'XOR' operator returns a set bit(1) else it returns an unset bit(0).

import java.io.*;

​

class GFG {

    public static void main(String[] args)

    {

        int num = 4, pos = 1;

        num = toggle(num, pos);

        System.out.println(num);

    }

    public static int toggle(int num, int pos)

    {

        // First step is to shift 1,Second step is to XOR

        // with given number

        num ^= (1 << pos);

        return num;

    }

}


Output

6

4. Checking if the bit at nth position is Set or Unset

We used the left shift (<<) operation on 1 to shift the bits to nth position and then use the & operation with number given number, and check if it is not-equals to 0.

import java.io.*;

​

class GFG {

    public static void main(String[] args)

    {

        int num = 5;

        int pos = 0;

        int bit = at_position(num, pos);

        System.out.println(bit);

    }

    public static int at_position(int num, int pos)

    {

        int bit = num & (1 << pos);

        return bit;

    }

}


Output

1

5. Multiply a number by 2 using the left shift operator

You can multiply a number by 2 by using the left shift operator (<< 1), which shifts all bits one position to the left.

import java.io.*;

​

class GFG {

    public static void main(String[] args)

    {

        int num = 12;

        int ans = num << 1;

        System.out.println(ans);

    }

}


Output

24

6. Divide a number 2 using the right shift operator

You can divide a number by 2 using the right shift operator (>> 1), which shifts all bits one position to the right.

import java.io.*;

​

class GFG {

    public static void main(String[] args)

    {

        int num = 12;

        int ans = num >> 1;

        System.out.println(ans);

    }

}


Output

6

7. Compute XOR from 1 to n (direct method)

The problem Compute XOR from 1 to n can be solved based on the following observations: n%4==0->n, 1->1, 2->n+1, 3-0.

Say x = n % 4. The XOR value depends on the value if x.

    If, x = 0, then the answer is n.
       x = 1, then answer is 1.
       x = 2, then answer is n+1.
       x = 3, then answer is 0.

import java.io.*;

​

class GFG {

​

    // Direct XOR of all numbers from 1 to n

    public static int computeXOR(int n) {

        if (n % 4 == 0) return n;

        if (n % 4 == 1) return 1;

        if (n % 4 == 2) return n + 1;

        return 0;

    }

​

    public static void main(String[] args) {

        int n = 5;

        System.out.println(computeXOR(n)); 

    }

}

8. How to know if a number is a power of 2?

This can be solved based on the following fact:

    If a number N is a power of 2, then the bitwise AND of N and N-1 will be 0. But this will not work if N is 0. So just check these two conditions, if any of these two conditions is true.

public class Main {

​

    // Function to check if x is power of 2

    public static boolean isPowerOfTwo(int x) {

        return x != 0 && ((x & (x - 1)) == 0);

    }

​

    public static void main(String[] args) {

        System.out.println(isPowerOfTwo(2));

    }

}

9. Count Set bits in an integer

Counting set bits means, counting total number of 1’s in the binary representation of an integer. For this problem we go through all the bits of given number and check whether it is set or not by performing AND operation (with 1).

public class Main {

​

    // Function to calculate the number of set bits

    public static int countBits(int n) {

        int count = 0;

        while (n > 0) {

            count += (n & 1);

            n >>= 1;

        }

        return count;

    }

​

    public static void main(String[] args) {

        System.out.println(countBits(5)); // Output: 2

    }

}

10. Position of rightmost set bit

The idea is to unset the rightmost bit of number n and XOR the result with n. Then the rightmost set bit in n will be the position of the only set bit in the result. Note that if n is odd, we can directly return 1 as the first bit is always set for odd numbers.

Example: The number 20 in binary is 00010100, and the position of the rightmost set bit is 3.

    00010100    &               (n = 20)
    00010011                     (n-1 = 19)
    -------------------
    00010000    ^                (XOR result number with n)
    00010100
    -------------------
    00000100 ------->  rightmost set bit will tell us the position

public class Main {

​

    // Returns the position of the rightmost set bit of n (1-based)

    public static int positionOfRightmostSetBit(int n) {

​

        if (n == 0) return 0; // no set bit

​

        // if the number is odd, return 1

        if ((n & 1) != 0) return 1;

​

        // keep only the rightmost set bit

        n = n ^ (n & (n - 1));

​

        int pos = 0;

        while (n != 0) {

            n >>= 1;

            pos++;

        }

        return pos;

    }

​

    public static void main(String[] args) {

        System.out.println(positionOfRightmostSetBit(18)); // Output: 2

    }

}