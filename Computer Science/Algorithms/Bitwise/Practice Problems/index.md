---
layout: algo
title: Practice Problems on Bitwise Algorithm
category: Bitwise
attribution_sources:
  - GeeksforGeeks
gfg_url: https://www.geeksforgeeks.org/boyer-moore-majority-vote-algorithm/](https://www.geeksforgeeks.org/dsa/introduction-to-bitwise-algorithms-data-structures-and-algorithms-tutorial/
---

*Solve these questions to improve your understanding of bitwise operators and  bit manipulation techniques.*

> All the above Bitwise Practice Problems are optimized and run in O(1) Time Complexity with O(1) Auxiliary Space.

# 1. Set a bit in the number

If we want to set a bit at $n^{th}$ position in the number 'num', it can be done using the 'OR' operator( | ).

First, we **Left Shift** $1$ to $n$ position via (1<<n).
Then, use the "OR" operator to set the bit at that position. "OR" operator is used because it will set the bit even if the bit is unset previously in the binary representation of the number 'num'.

> If the bit was already set then it would remain unchanged.

{% tabs set-bit-in-number %}

{% tab set-bit-in-number Python %}
{% highlight python linenos %}
```python
# num = number, pos = position at which we want to set the bit
def set(num, pos):
    # First step = Shift '1'
    # Second step = Bitwise OR
    num |= (1 << pos)
    print(num)


num, pos = 4, 1

set(num, pos)
```
{% endhighlight %}
{% endtab %}

{% endtabs %}

# 2. Unset/Clear a bit at $n^{th}$ position in the number

Suppose we want to unset a bit at $n^{th}$ position in number 'num' then we have to do this with the help of "AND" (&) operator.

First, we **Left Shift** '1' to $n$ position via (1<<n) then we use bitwise **NOT** `~` operator '~' to unset this shifted '1'.
Now after clearing this left shifted '1' i.e making it to '0' we will 'AND'(&) with the number 'num' that will unset bit at $n^{th}$ position.

{% tabs unset-nth-bit %}

{% tab unset-nth-bit Python %}
{% highlight python linenos %}
```python
# Python program for the above approach

num = 12
ans = num << 1
print(ans)
```
{% endhighlight %}
{% endtab %}

{% endtabs %}

# 3. Toggling a bit at $n^{th}$ position

Toggling means to turn bit 'on'(1) if it was 'off'(0) and  to turn 'off'(0) if it was 'on'(1) previously. We will be using the 'XOR' operator here which is this '^'. The reason behind the 'XOR' operator is because of its properties.

Properties of 'XOR' operator. 

1^1 = 0
0^0 = 0
1^0 = 1
0^1 = 1

If two bits are different then the 'XOR' operator returns a set bit(1) else it returns an unset bit(0).

# 4. Checking if the bit at $n^{th}$ position is Set or Unset

We used the **Left Shift** (<<) operation on $1$ to shift the bits to $n^{th}$ position and  then use the `&` operation with number given number, and  check if it is not-equals to 0.

# Multiply a number by 2 using the **Left Shift** operator

You can multiply a number by 2 by using the **Left Shift** operator (<< 1), which shifts all bits one position to the left.

# 6. Divide a number 2 using the **Right Shift** operator

You can divide a number by 2 using the **Right Shift** operator (>> 1), which shifts all bits one position to the right.

# 7. Compute **XOR** `^` from $1$ to $n$ (direct method)

The problem Compute **XOR** `^` from $1$ to $n$ can be solved based on the following observations: n%4==0->n, 1->1, 2->n+1, 3-0.

Say $X$ = $n$ % 4. The **XOR** `^` value depends on the value if x.

>    If, $X$ = 0, then the answer is $n$.
>       $X$ = 1, then answer is 1.
>       $X$ = 2, then answer is n+1.
>       $X$ = 3, then answer is 0.

# 8. How to know if a number is a power of 2?

If $n$ is a power of $2$, then 

$$n\ \&\ (n-1) = 0$$

> This will not work if $n$ is 0. So just check these two conditions, if any of these two conditions is true.

# 9. Count Set bits in an integer

Counting set bits means, counting total number of 1’s in the binary representation of an integer. For this problem we go through all the bits of given number and  check whether it is set **OR** `|` **NOT** `~` by performing **AND** `&` operation (with 1).

# 10. Position of rightmost set bit

The idea is to unset the rightmost bit of number $n$ and **XOR** `^` the result with $n$. Then the rightmost set bit in $n$ will be the position of the only set bit in the result. Note that if $n$ is odd, we can directly return $1$ as the first bit is always set for odd numbers.

Example: The number $20$ in binary is $00010100_2$, and  the position of the rightmost set bit is $3$.

$$
\begin{array}{r@{\;}c@{\,}c@{\,}l@{\quad}l}
        &0&0&0&1&0&1&0&0_2 & (n=20)\\
\& &    0&0&0&1&0&0&1&1_2  & (n-1=19)\\
\hline
        &0&0&0&1&0&0&0&0_2 & \text{(XOR result number with n)} \\
\land   &0&0&0&1&0&1&0&0_2  \\
\hline
        &0&0&0&0&0&1&0&0_2 & \to \text{rightmost set bit will tell us the position} \\
\end{array}
$$

# 11. Compute XOR from $1$ to $n$

The XOR of all integers from $1$ to n follows a repeating pattern based on `n % 4`.

```text
If n % 4 == 0, the result is n.
If n % 4 == 1, the result is 1.
If n % 4 == 2, the result is n + 1.
If n % 4 == 3, the result is 0.
```