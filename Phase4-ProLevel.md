# Phase 4: Pro Level — Competitive Programming & Tricky Problems

**Duration:** Week 4+ | **Goal:** Handle CP tricks, edge cases, math, bit manipulation, and advanced techniques

---

## 4.1 Bit Manipulation

| # | Problem | Link | Difficulty | Pattern | Status | Fav |
|---|---------|------|------------|---------|--------|-----|
| 1 | Single Number | [LeetCode](https://leetcode.com/problems/single-number/) | Easy | XOR all elements | [ ] | |
| 2 | Single Number II (appears 3 times) | [LeetCode](https://leetcode.com/problems/single-number-ii/) | Medium | Bit counting / State machine | [ ] | |
| 3 | Single Number III (two unique) | [LeetCode](https://leetcode.com/problems/single-number-iii/) | Medium | XOR + rightmost set bit split | [ ] | |
| 4 | Number of 1 Bits | [LeetCode](https://leetcode.com/problems/number-of-1-bits/) | Easy | n & (n-1) trick | [ ] | |
| 5 | Counting Bits | [LeetCode](https://leetcode.com/problems/counting-bits/) | Easy | DP with bit relation | [ ] | |
| 6 | Reverse Bits | [LeetCode](https://leetcode.com/problems/reverse-bits/) | Easy | Bit shifting | [ ] | |
| 7 | Power of Two | [LeetCode](https://leetcode.com/problems/power-of-two/) | Easy | n & (n-1) == 0 | [ ] | |
| 8 | Subsets using Bitmask | [LeetCode](https://leetcode.com/problems/subsets/) | Medium | Iterate 0 to 2^n - 1 | [ ] | |
| 9 | Maximum XOR of Two Numbers | [LeetCode](https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/) | Medium | Bit Trie / Greedy bit-by-bit | [ ] | |
| 10 | XOR Queries of a Subarray | [LeetCode](https://leetcode.com/problems/xor-queries-of-a-subarray/) | Medium | Prefix XOR | [ ] | |
| 11 | Minimum Flips to Make a OR b Equal c | [LeetCode](https://leetcode.com/problems/minimum-flips-to-make-a-or-b-equal-to-c/) | Medium | Bit-by-bit analysis | [ ] | |
| 12 | Find XOR of Numbers in Range | [GFG](https://www.geeksforgeeks.org/problems/find-xor-of-numbers-from-l-to-r/1) | Medium | XOR pattern (repeats every 4) | [ ] | |

### 🔑 Key Insights — Bit Manipulation
```
- XOR properties: a^a = 0, a^0 = a, commutative & associative
- n & (n-1): Removes lowest set bit. Useful for counting bits, power of 2.
- Get ith bit: (n >> i) & 1
- Set ith bit: n | (1 << i)
- Clear ith bit: n & ~(1 << i)
- Two unique numbers: XOR all gives a^b. Use rightmost set bit to split into two groups.
- Subsets with bitmask: For n elements, iterate masks from 0 to (1<<n)-1.
```

---

## 4.2 Math & Number Theory (CP Essential)

| # | Problem | Link | Difficulty | Pattern | Status | Fav |
|---|---------|------|------------|---------|--------|-----|
| 13 | Count Primes (Sieve) | [LeetCode](https://leetcode.com/problems/count-primes/) | Medium | Sieve of Eratosthenes | [ ] | |
| 14 | GCD / LCM | [GFG](https://www.geeksforgeeks.org/problems/gcd-of-two-numbers3459/1) | Easy | Euclidean algorithm | [ ] | |
| 15 | Modular Exponentiation | [GFG](https://www.geeksforgeeks.org/problems/modular-exponentiation-for-large-numbers5537/1) | Medium | Fast power (binary exponentiation) | [ ] | |
| 16 | Pow(x, n) | [LeetCode](https://leetcode.com/problems/powx-n/) | Medium | Binary exponentiation | [ ] | |
| 17 | Trailing Zeroes in Factorial | [LeetCode](https://leetcode.com/problems/factorial-trailing-zeroes/) | Medium | Count factors of 5 | [ ] | |
| 18 | Happy Number | [LeetCode](https://leetcode.com/problems/happy-number/) | Easy | Floyd's cycle detection | [ ] | |
| 19 | Excel Sheet Column Number/Title | [LeetCode](https://leetcode.com/problems/excel-sheet-column-number/) | Easy | Base 26 conversion | [ ] | |
| 20 | Multiply Strings | [LeetCode](https://leetcode.com/problems/multiply-strings/) | Medium | Grade school multiplication | [ ] | |
| 21 | Catalan Number (Count BSTs) | [LeetCode](https://leetcode.com/problems/unique-binary-search-trees/) | Medium | Catalan number formula | [ ] | |
| 22 | nCr Modulo p | [GFG](https://www.geeksforgeeks.org/problems/ncr1019/1) | Medium | Pascal's triangle / Fermat's theorem | [ ] | |
| 23 | Count digits in N! | [GFG](https://www.geeksforgeeks.org/problems/count-digits-in-a-factorial3957/1) | Medium | Stirling's / log sum | [ ] | |

### 🔑 Key Insights — Math
```
- Sieve of Eratosthenes: O(n log log n) to find all primes up to n
- Binary Exponentiation: a^n in O(log n) by squaring
- Modular Arithmetic: (a*b) % m = ((a%m) * (b%m)) % m
- Fermat's Little Theorem: a^(p-1) ≡ 1 (mod p) → a^(-1) ≡ a^(p-2) (mod p)
- Catalan: C(n) = C(2n, n) / (n+1). Appears in: BSTs, parentheses, paths
- GCD: gcd(a, b) = gcd(b, a%b). LCM = (a*b) / gcd(a,b)
```

---

## 4.3 Codeforces-Style Tricky Problems 🔥🔥

| # | Problem | Link | Rating | Key Trick | Status | Fav |
|---|---------|------|--------|-----------|--------|-----|
| 24 | Watermelon (Even split) | [CF](https://codeforces.com/problemset/problem/4/A) | 800 | Edge case: n=2 | [ ] | |
| 25 | Bit++ | [CF](https://codeforces.com/problemset/problem/282/A) | 800 | Simple simulation | [ ] | |
| 26 | Beautiful Matrix | [CF](https://codeforces.com/problemset/problem/263/A) | 800 | Manhattan distance | [ ] | |
| 27 | Nearly Lucky Number | [CF](https://codeforces.com/problemset/problem/110/A) | 800 | Count 4s and 7s | [ ] | |
| 28 | Soldier and Bananas | [CF](https://codeforces.com/problemset/problem/546/A) | 800 | Arithmetic sum | [ ] | |
| 29 | Maximum in Table | [CF](https://codeforces.com/problemset/problem/509/A) | 800 | Pascal's triangle observation | [ ] | |
| 30 | Even Odds | [CF](https://codeforces.com/problemset/problem/318/A) | 900 | Math — position calculation | [ ] | |
| 31 | Integer Sequence Dividing | [CF](https://codeforces.com/problemset/problem/1102/A) | 900 | Sum formula + parity | [ ] | |
| 32 | Vanya and Fence | [CF](https://codeforces.com/problemset/problem/677/A) | 800 | Greedy counting | [ ] | |
| 33 | Divisibility Problem | [CF](https://codeforces.com/problemset/problem/1328/A) | 800 | Modular arithmetic trick | [ ] | |
| 34 | Yet Another Palindrome Problem | [CF](https://codeforces.com/problemset/problem/1324/B) | 1100 | Any duplicate with gap | [ ] | |
| 35 | Ehab and another construction | [CF](https://codeforces.com/problemset/problem/1088/B) | 1100 | Constructive | [ ] | |
| 36 | Make Product Equal One | [CF](https://codeforces.com/problemset/problem/1206/B) | 1200 | Greedy + sign counting | [ ] | |
| 37 | Books | [CF](https://codeforces.com/problemset/problem/279/B) | 1400 | Two pointers / Sliding window | [ ] | |
| 38 | Good Subarrays | [CF](https://codeforces.com/problemset/problem/1398/C) | 1600 | Prefix sum trick (a[i] - 1) | [ ] | |
| 39 | Pashmak and Flowers | [CF](https://codeforces.com/problemset/problem/459/B) | 1200 | Combinatorics | [ ] | |
| 40 | Ilya and Queries | [CF](https://codeforces.com/problemset/problem/313/B) | 1100 | Prefix sums | [ ] | |
| 41 | Longest Regular Bracket Sequence | [CF](https://codeforces.com/problemset/problem/5/C) | 1900 | Stack + DP 🔥 | [ ] | |
| 42 | Playlist | [CF](https://codeforces.com/problemset/problem/1140/C) | 1500 | Sort + Greedy + Sliding | [ ] | |
| 43 | Number of Ways | [CF](https://codeforces.com/problemset/problem/466/C) | 1700 | Prefix sum + suffix count | [ ] | |

### 🔑 Key Insights — CP Tricks
```
- ALWAYS check edge cases: n=0, n=1, n=2, negative numbers, overflow
- Constructive problems: Think what constraints the answer must satisfy
- Parity arguments: Many problems reduce to odd/even analysis
- Prefix sums solve "subarray sum" problems in O(1) per query
- "Find pair with property": Often sort + two pointers or binary search
- Large numbers: Use modular arithmetic (10^9+7)
- Read constraints: n ≤ 10^5 → O(n log n) is fine. n ≤ 10^3 → O(n^2) works.
```

---

## 4.4 Advanced DP (Google/DE Shaw Level) 🔥

| # | Problem | Link | Difficulty | Pattern | Status | Fav |
|---|---------|------|------------|---------|--------|-----|
| 44 | Longest Increasing Path in Matrix | [LeetCode](https://leetcode.com/problems/longest-increasing-path-in-a-matrix/) | Hard | DFS + Memoization | [ ] | |
| 45 | Minimum Cost to Cut a Stick | [LeetCode](https://leetcode.com/problems/minimum-cost-to-cut-a-stick/) | Hard | Interval DP | [ ] | |
| 46 | Cherry Pickup | [LeetCode](https://leetcode.com/problems/cherry-pickup/) | Hard | 3D DP (two paths) | [ ] | |
| 47 | Cherry Pickup II | [LeetCode](https://leetcode.com/problems/cherry-pickup-ii/) | Hard | 3D DP (two robots) | [ ] | |
| 48 | Minimum Insertion Steps Palindrome | [LeetCode](https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/) | Hard | LCS with reverse | [ ] | |
| 49 | Super Egg Drop | [LeetCode](https://leetcode.com/problems/super-egg-drop/) | Hard | DP + Binary Search 🔥🔥 | [ ] | |
| 50 | Frog Jump | [LeetCode](https://leetcode.com/problems/frog-jump/) | Hard | HashMap DP | [ ] | |
| 51 | Russian Doll Envelopes | [LeetCode](https://leetcode.com/problems/russian-doll-envelopes/) | Hard | Sort + LIS | [ ] | |
| 52 | Number of Longest Increasing Subseq | [LeetCode](https://leetcode.com/problems/number-of-longest-increasing-subsequence/) | Medium | LIS + count array | [ ] | |
| 53 | Strange Printer | [LeetCode](https://leetcode.com/problems/strange-printer/) | Hard | Interval DP | [ ] | |
| 54 | Distinct Subsequences | [LeetCode](https://leetcode.com/problems/distinct-subsequences/) | Hard | 2D DP | [ ] | |
| 55 | Shortest Common Supersequence | [LeetCode](https://leetcode.com/problems/shortest-common-supersequence/) | Hard | LCS + Reconstruction | [ ] | |

---

## 4.5 Segment Trees & Advanced Data Structures

| # | Problem | Link | Difficulty | Pattern | Status | Fav |
|---|---------|------|------------|---------|--------|-----|
| 56 | Range Sum Query - Mutable | [LeetCode](https://leetcode.com/problems/range-sum-query-mutable/) | Medium | Segment Tree / BIT | [ ] | |
| 57 | Count of Smaller Numbers After Self | [LeetCode](https://leetcode.com/problems/count-of-smaller-numbers-after-self/) | Hard | BIT / Merge Sort | [ ] | |
| 58 | Count of Range Sum | [LeetCode](https://leetcode.com/problems/count-of-range-sum/) | Hard | Merge Sort / BIT | [ ] | |
| 59 | Skyline Problem | [LeetCode](https://leetcode.com/problems/the-skyline-problem/) | Hard | Sweep line + Max Heap | [ ] | |
| 60 | My Calendar I/II/III | [LeetCode](https://leetcode.com/problems/my-calendar-i/) | Medium-Hard | Sweep line / Segment Tree | [ ] | |

---

## 4.6 String Algorithms (Advanced)

| # | Problem | Link | Difficulty | Pattern | Status | Fav |
|---|---------|------|------------|---------|--------|-----|
| 61 | KMP Pattern Matching | [GFG](https://www.geeksforgeeks.org/problems/search-pattern-rabin-karp-algorithm4012/1) | Medium | Failure function | [ ] | |
| 62 | Longest Happy Prefix | [LeetCode](https://leetcode.com/problems/longest-happy-prefix/) | Hard | KMP LPS array | [ ] | |
| 63 | Shortest Palindrome | [LeetCode](https://leetcode.com/problems/shortest-palindrome/) | Hard | KMP on s + "#" + reverse(s) | [ ] | |
| 64 | Count Palindromic Subsequences | [LeetCode](https://leetcode.com/problems/count-different-palindromic-subsequences/) | Hard | Interval DP | [ ] | |
| 65 | Minimum Window Subsequence | [LeetCode](https://leetcode.com/problems/minimum-window-subsequence/) | Hard | Two pointers / DP | [ ] | |

---

## 🔥 CP Quick Reference — Common Tricks

```
1. Binary Search on Answer: "Minimize the maximum" / "Maximize the minimum"
2. Contribution Technique: Instead of iterating subarrays, count how many subarrays each element contributes to
3. Prefix Sum / XOR: O(1) range queries after O(n) preprocessing
4. Two Pointers after Sort: Pair-finding, 3Sum, closest sum
5. Monotonic Stack: Next Greater/Smaller Element in O(n)
6. Sliding Window: Fixed or variable size window for substring/subarray problems
7. Meet in the Middle: Split input in half, solve both, combine (when n ≤ 40)
8. Coordinate Compression: Map large values to small indices
9. Line Sweep: Interval problems, event-based processing
10. Bitmask DP: When n ≤ 20, enumerate subsets using bitmasks
11. Digit DP: Count numbers with certain digit properties in a range
12. Matrix Exponentiation: Solve linear recurrences in O(log n)
13. Mo's Algorithm: Offline range queries in O((N+Q)√N)
14. Sparse Table: O(1) range min/max queries after O(n log n) preprocessing
15. Centroid Decomposition: Tree problems requiring all paths
```

---

## ✅ Phase 4 Completion Checklist

- [ ] Bit manipulation tricks are automatic (XOR, masks, counting)
- [ ] Can implement Segment Tree / BIT from scratch
- [ ] Comfortable with modular arithmetic and binary exponentiation
- [ ] Can solve CF 1400-1600 rated problems consistently
- [ ] Advanced DP patterns (interval, bitmask, digit) are clear
- [ ] Edge case thinking is second nature
- [ ] Can identify the right approach for a new problem within 5 minutes
