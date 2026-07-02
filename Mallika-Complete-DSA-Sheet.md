# 🚀 Mallika's Ultimate DSA Sheet — Complete Edition

**Goal:** Master DSA from scratch to pro level — logic building, pattern recognition, edge cases, and competitive programming.
Combines: Striver's A2Z + Neetcode 150 + Codeforces Tricks + Interview/OA Questions

---

## 📊 Progress Tracker

| Phase | Topic | Total | Done | % |
|-------|-------|-------|------|---|
| 1 | Foundations (Arrays, Strings, Sorting, Binary Search) | 80 | 0 | 0% |
| 2 | Core Patterns (Two Pointers, Sliding Window, Stack, LL, Recursion) | 85 | 0 | 0% |
| 3 | Advanced (Trees, Graphs, DP, Greedy, Heaps) | 120 | 0 | 0% |
| 4 | Pro Level (CP Tricks, Math, Bit Manipulation, Advanced DP/Graphs) | 65 | 0 | 0% |
| **Total** | | **350** | **0** | **0%** |

## 🏷️ Legend: ✅ Completed | ⭐ Revisit | 🔥 Tricky/Interview Favorite | 🏢 Company-specific

## 📅 Daily Plan: 1.5 hrs (2-3 phase problems) → 1 hr (CF Div2 A/B/C) → 30 min (revise yesterday)

## 🧠 Problem-Solving Framework
```
1. READ carefully — input/output/constraints → 2. IDENTIFY pattern → 3. EDGE CASES (empty, single, overflow)
4. BRUTE FORCE first → 5. OPTIMIZE → 6. CODE cleanly → 7. DRY RUN → 8. ANALYZE complexity
```

---
---

# PHASE 1: FOUNDATIONS (Week 1-2)

## 1.1 Arrays — Basics

| # | Problem | Link | Difficulty | Pattern | Status | Fav |
|---|---------|------|------------|---------|--------|-----|
| 1 | Two Sum | [LeetCode](https://leetcode.com/problems/two-sum/) | Easy | HashMap | [ ] | |
| 2 | Best Time to Buy and Sell Stock | [LeetCode](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/) | Easy | Kadane's variant | [ ] | |
| 3 | Contains Duplicate | [LeetCode](https://leetcode.com/problems/contains-duplicate/) | Easy | HashSet | [ ] | |
| 4 | Maximum Subarray (Kadane's) | [LeetCode](https://leetcode.com/problems/maximum-subarray/) | Medium | Kadane's Algorithm | [ ] | |
| 5 | Product of Array Except Self | [LeetCode](https://leetcode.com/problems/product-of-array-except-self/) | Medium | Prefix/Suffix | [ ] | |
| 6 | Maximum Product Subarray | [LeetCode](https://leetcode.com/problems/maximum-product-subarray/) | Medium | DP / Track min & max | [ ] | |
| 7 | Find Minimum in Rotated Sorted Array | [LeetCode](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/) | Medium | Binary Search | [ ] | |
| 8 | Search in Rotated Sorted Array | [LeetCode](https://leetcode.com/problems/search-in-rotated-sorted-array/) | Medium | Modified Binary Search | [ ] | |
| 9 | Container With Most Water | [LeetCode](https://leetcode.com/problems/container-with-most-water/) | Medium | Two Pointers | [ ] | |
| 10 | 3Sum | [LeetCode](https://leetcode.com/problems/3sum/) | Medium | Sort + Two Pointers | [ ] | |

> 💡 **Two Sum:** HashMap complement O(n) | **Kadane's:** Reset if negative | **Rotated:** Find sorted half | **3Sum:** Fix one + two pointers

## 1.2 Arrays — Intermediate & Tricky 🔥

| # | Problem | Link | Difficulty | Pattern | Status | Fav |
|---|---------|------|------------|---------|--------|-----|
| 11 | Next Permutation | [LeetCode](https://leetcode.com/problems/next-permutation/) | Medium | Observation/Greedy | [ ] | |
| 12 | Set Matrix Zeroes | [LeetCode](https://leetcode.com/problems/set-matrix-zeroes/) | Medium | In-place marking | [ ] | |
| 13 | Rotate Image | [LeetCode](https://leetcode.com/problems/rotate-image/) | Medium | Transpose + Reverse | [ ] | |
| 14 | Spiral Matrix | [LeetCode](https://leetcode.com/problems/spiral-matrix/) | Medium | Boundary simulation | [ ] | |
| 15 | Merge Intervals | [LeetCode](https://leetcode.com/problems/merge-intervals/) | Medium | Sort by start | [ ] | |
| 16 | Insert Interval | [LeetCode](https://leetcode.com/problems/insert-interval/) | Medium | Merge logic | [ ] | |
| 17 | Non-overlapping Intervals | [LeetCode](https://leetcode.com/problems/non-overlapping-intervals/) | Medium | Greedy (sort by end) | [ ] | |
| 18 | Subarray Sum Equals K | [LeetCode](https://leetcode.com/problems/subarray-sum-equals-k/) | Medium | Prefix Sum + HashMap | [ ] | |
| 19 | Trapping Rain Water | [LeetCode](https://leetcode.com/problems/trapping-rain-water/) | Hard | Two Pointers / Stack | [ ] | |
| 20 | First Missing Positive | [LeetCode](https://leetcode.com/problems/first-missing-positive/) | Hard | Index marking (cyclic sort) | [ ] | |
| 21 | Majority Element | [LeetCode](https://leetcode.com/problems/majority-element/) | Easy | Boyer-Moore Voting | [ ] | |
| 22 | Majority Element II | [LeetCode](https://leetcode.com/problems/majority-element-ii/) | Medium | Extended Boyer-Moore | [ ] | |
| 23 | 4Sum | [LeetCode](https://leetcode.com/problems/4sum/) | Medium | Sort + Two Pointers nested | [ ] | |
| 24 | Longest Consecutive Sequence | [LeetCode](https://leetcode.com/problems/longest-consecutive-sequence/) | Medium | HashSet + chain | [ ] | |
| 25 | Pascal's Triangle | [LeetCode](https://leetcode.com/problems/pascals-triangle/) | Easy | Simulation | [ ] | |

> 💡 **Next Perm:** Find first decreasing from right, swap with just larger, reverse suffix | **Trapping Rain:** min(leftMax,rightMax)-h[i] | **Subarray Sum=K:** prefix map | **First Missing Positive:** cyclic sort

## 1.3 Strings

| # | Problem | Link | Difficulty | Pattern | Status | Fav |
|---|---------|------|------------|---------|--------|-----|
| 26 | Valid Anagram | [LeetCode](https://leetcode.com/problems/valid-anagram/) | Easy | Frequency count | [ ] | |
| 27 | Valid Palindrome | [LeetCode](https://leetcode.com/problems/valid-palindrome/) | Easy | Two Pointers | [ ] | |
| 28 | Longest Substring Without Repeating | [LeetCode](https://leetcode.com/problems/longest-substring-without-repeating-characters/) | Medium | Sliding Window + Set | [ ] | |
| 29 | Longest Palindromic Substring | [LeetCode](https://leetcode.com/problems/longest-palindromic-substring/) | Medium | Expand from center | [ ] | |
| 30 | Group Anagrams | [LeetCode](https://leetcode.com/problems/group-anagrams/) | Medium | Sorted string as key | [ ] | |
| 31 | Longest Common Prefix | [LeetCode](https://leetcode.com/problems/longest-common-prefix/) | Easy | Vertical scanning | [ ] | |
| 32 | String to Integer (atoi) | [LeetCode](https://leetcode.com/problems/string-to-integer-atoi/) | Medium | Edge case handling | [ ] | |
| 33 | Count and Say | [LeetCode](https://leetcode.com/problems/count-and-say/) | Medium | Simulation | [ ] | |
| 34 | Longest Repeating Character Replacement | [LeetCode](https://leetcode.com/problems/longest-repeating-character-replacement/) | Medium | Sliding Window | [ ] | |
| 35 | Minimum Window Substring | [LeetCode](https://leetcode.com/problems/minimum-window-substring/) | Hard | Sliding Window + Freq Map | [ ] | |
| 36 | Palindromic Substrings | [LeetCode](https://leetcode.com/problems/palindromic-substrings/) | Medium | Expand from center | [ ] | |
| 37 | Encode and Decode Strings | [LeetCode](https://leetcode.com/problems/encode-and-decode-strings/) | Medium | Length prefix encoding | [ ] | |
| 38 | Rabin-Karp / KMP Pattern Matching | [GFG](https://www.geeksforgeeks.org/problems/search-pattern-rabin-karp-algorithm4012/1) | Medium | Rolling Hash / Prefix Function | [ ] | |
| 39 | Z-Algorithm | [GFG](https://www.geeksforgeeks.org/problems/search-pattern0205/1) | Medium | Z-array construction | [ ] | |
| 40 | Repeated String Match | [LeetCode](https://leetcode.com/problems/repeated-string-match/) | Medium | String matching | [ ] | |

> 💡 **Min Window Substring:** Two pointers + freq map, shrink when all found | **Repeating Replacement:** valid when (windowLen - maxFreq) <= k | **KMP:** Build LPS array

## 1.4 Sorting

| # | Problem | Link | Difficulty | Pattern | Status | Fav |
|---|---------|------|------------|---------|--------|-----|
| 41 | Sort Colors (Dutch National Flag) | [LeetCode](https://leetcode.com/problems/sort-colors/) | Medium | Three pointers | [ ] | |
| 42 | Merge Sorted Array | [LeetCode](https://leetcode.com/problems/merge-sorted-array/) | Easy | Two pointers from end | [ ] | |
| 43 | Sort an Array (Merge Sort) | [LeetCode](https://leetcode.com/problems/sort-an-array/) | Medium | Divide & Conquer | [ ] | |
| 44 | Kth Largest Element | [LeetCode](https://leetcode.com/problems/kth-largest-element-in-an-array/) | Medium | QuickSelect / Heap | [ ] | |
| 45 | Top K Frequent Elements | [LeetCode](https://leetcode.com/problems/top-k-frequent-elements/) | Medium | Bucket Sort / Heap | [ ] | |
| 46 | Largest Number | [LeetCode](https://leetcode.com/problems/largest-number/) | Medium | Custom comparator | [ ] | |
| 47 | Count Inversions | [GFG](https://www.geeksforgeeks.org/problems/inversion-of-array-1587115620/1) | Hard | Merge Sort modification | [ ] | |
| 48 | Wiggle Sort II | [LeetCode](https://leetcode.com/problems/wiggle-sort-ii/) | Medium | Find median + 3-way partition | [ ] | |

> 💡 **DNF:** 3 pointers (lo, mid, hi) | **QuickSelect:** O(n) avg | **Count Inversions:** merge step count | **Largest Number:** compare a+b vs b+a

## 1.5 Binary Search 🔥

| # | Problem | Link | Difficulty | Pattern | Status | Fav |
|---|---------|------|------------|---------|--------|-----|
| 49 | Binary Search | [LeetCode](https://leetcode.com/problems/binary-search/) | Easy | Standard BS | [ ] | |
| 50 | Search Insert Position | [LeetCode](https://leetcode.com/problems/search-insert-position/) | Easy | Lower bound | [ ] | |
| 51 | Find First and Last Position | [LeetCode](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/) | Medium | Two binary searches | [ ] | |
| 52 | Search in Rotated Sorted Array II | [LeetCode](https://leetcode.com/problems/search-in-rotated-sorted-array-ii/) | Medium | Handle duplicates | [ ] | |
| 53 | Find Peak Element | [LeetCode](https://leetcode.com/problems/find-peak-element/) | Medium | BS on unsorted | [ ] | |
| 54 | Sqrt(x) | [LeetCode](https://leetcode.com/problems/sqrtx/) | Easy | BS on answer | [ ] | |
| 55 | Koko Eating Bananas | [LeetCode](https://leetcode.com/problems/koko-eating-bananas/) | Medium | BS on Answer 🔥 | [ ] | |
| 56 | Minimum Days to Make M Bouquets | [LeetCode](https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/) | Medium | BS on Answer | [ ] | |
| 57 | Capacity to Ship Packages | [LeetCode](https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/) | Medium | BS on Answer | [ ] | |
| 58 | Split Array Largest Sum | [LeetCode](https://leetcode.com/problems/split-array-largest-sum/) | Hard | BS on Answer | [ ] | |
| 59 | Aggressive Cows | [GFG](https://www.geeksforgeeks.org/problems/aggressive-cows/1) | Hard | BS on Answer | [ ] | |
| 60 | Allocate Minimum Pages | [GFG](https://www.geeksforgeeks.org/problems/allocate-minimum-number-of-pages0937/1) | Hard | BS on Answer | [ ] | |
| 61 | Median of Two Sorted Arrays | [LeetCode](https://leetcode.com/problems/median-of-two-sorted-arrays/) | Hard | BS on partition | [ ] | |
| 62 | Find Kth Element of Two Sorted Arrays | [GFG](https://www.geeksforgeeks.org/problems/k-th-element-of-two-sorted-array1317/1) | Hard | BS on partition | [ ] | |
| 63 | Search in 2D Matrix | [LeetCode](https://leetcode.com/problems/search-a-2d-matrix/) | Medium | Treat as 1D sorted | [ ] | |
| 64 | Search a 2D Matrix II | [LeetCode](https://leetcode.com/problems/search-a-2d-matrix-ii/) | Medium | Staircase search | [ ] | |

> 💡 **BS on Answer Template:** lo=min, hi=max → while lo<hi: mid=(lo+hi)//2, if feasible(mid): hi=mid else lo=mid+1 | **Median of Two:** BS on smaller array, partition both

## 1.6 Hashing & Prefix Sums

| # | Problem | Link | Difficulty | Pattern | Status | Fav |
|---|---------|------|------------|---------|--------|-----|
| 65 | Two Sum | [LeetCode](https://leetcode.com/problems/two-sum/) | Easy | HashMap complement | [ ] | |
| 66 | Subarray Sum Equals K | [LeetCode](https://leetcode.com/problems/subarray-sum-equals-k/) | Medium | Prefix Sum + Map | [ ] | |
| 67 | Longest Subarray with Sum K | [GFG](https://www.geeksforgeeks.org/problems/longest-sub-array-with-sum-k0809/1) | Medium | Prefix Sum + Map | [ ] | |
| 68 | Count Subarrays with XOR = K | [GFG](https://www.geeksforgeeks.org/problems/count-subarray-with-given-xor/1) | Medium | Prefix XOR + Map | [ ] | |
| 69 | Longest Substring Without Repeating | [LeetCode](https://leetcode.com/problems/longest-substring-without-repeating-characters/) | Medium | HashMap + Sliding Window | [ ] | |
| 70 | 4Sum II | [LeetCode](https://leetcode.com/problems/4sum-ii/) | Medium | Two-pair HashMap | [ ] | |
| 71 | Isomorphic Strings | [LeetCode](https://leetcode.com/problems/isomorphic-strings/) | Easy | Two HashMaps | [ ] | |
| 72 | Minimum Operations to Reduce X to Zero | [LeetCode](https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/) | Medium | Prefix Sum / Sliding Window | [ ] | |

## 1.7 Interview Favorites — Phase 1 🏢🔥

| # | Problem | Link | Company | Pattern | Status |
|---|---------|------|---------|---------|--------|
| 73 | Trapping Rain Water | [LeetCode](https://leetcode.com/problems/trapping-rain-water/) | Google, Amazon | Two Pointers | [ ] |
| 74 | Median of Two Sorted Arrays | [LeetCode](https://leetcode.com/problems/median-of-two-sorted-arrays/) | Google, Goldman | Binary Search | [ ] |
| 75 | First Missing Positive | [LeetCode](https://leetcode.com/problems/first-missing-positive/) | Amazon, Microsoft | Cyclic Sort | [ ] |
| 76 | Next Permutation | [LeetCode](https://leetcode.com/problems/next-permutation/) | Google, Amazon | Observation | [ ] |
| 77 | Subarray Sum = K | [LeetCode](https://leetcode.com/problems/subarray-sum-equals-k/) | Facebook, Amazon | Prefix Sum | [ ] |
| 78 | Merge Intervals | [LeetCode](https://leetcode.com/problems/merge-intervals/) | Google, Amazon, FB | Sort + Merge | [ ] |
| 79 | Koko Eating Bananas | [LeetCode](https://leetcode.com/problems/koko-eating-bananas/) | Google, Amazon | BS on Answer | [ ] |
| 80 | Split Array Largest Sum | [LeetCode](https://leetcode.com/problems/split-array-largest-sum/) | Google, Amazon | BS on Answer | [ ] |

---
---

# PHASE 2: CORE PATTERNS (Week 2-3)

## 2.1 Two Pointers

| # | Problem | Link | Difficulty | Pattern | Status | Fav |
|---|---------|------|------------|---------|--------|-----|
| 1 | Two Sum II (Sorted Array) | [LeetCode](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/) | Medium | Classic Two Pointers | [ ] | |
| 2 | 3Sum | [LeetCode](https://leetcode.com/problems/3sum/) | Medium | Fix one + Two Pointers | [ ] | |
| 3 | 3Sum Closest | [LeetCode](https://leetcode.com/problems/3sum-closest/) | Medium | Two Pointers + Track best | [ ] | |
| 4 | Container With Most Water | [LeetCode](https://leetcode.com/problems/container-with-most-water/) | Medium | Shrink shorter side | [ ] | |
| 5 | Trapping Rain Water | [LeetCode](https://leetcode.com/problems/trapping-rain-water/) | Hard | Two Pointers with maxL/maxR | [ ] | |
| 6 | Remove Duplicates from Sorted Array | [LeetCode](https://leetcode.com/problems/remove-duplicates-from-sorted-array/) | Easy | Slow-Fast pointer | [ ] | |
| 7 | Remove Duplicates II (at most 2) | [LeetCode](https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/) | Medium | Count-based slow pointer | [ ] | |
| 8 | Boats to Save People | [LeetCode](https://leetcode.com/problems/boats-to-save-people/) | Medium | Sort + Greedy Two Pointers | [ ] | |
| 9 | Sort Colors | [LeetCode](https://leetcode.com/problems/sort-colors/) | Medium | Three pointers (DNF) | [ ] | |
| 10 | Partition Labels | [LeetCode](https://leetcode.com/problems/partition-labels/) | Medium | Last occurrence + greedy | [ ] | |

> 💡 Sorted array → two pointers from ends | In-place mods → slow=write, fast=read | Trapping Rain → maintain leftMax, rightMax

## 2.2 Sliding Window

| # | Problem | Link | Difficulty | Pattern | Status | Fav |
|---|---------|------|------------|---------|--------|-----|
| 11 | Maximum Sum Subarray of Size K | [GFG](https://www.geeksforgeeks.org/problems/max-sum-subarray-of-size-k5313/1) | Easy | Fixed window | [ ] | |
| 12 | Longest Substring Without Repeating | [LeetCode](https://leetcode.com/problems/longest-substring-without-repeating-characters/) | Medium | Variable window + Set | [ ] | |
| 13 | Longest Repeating Character Replacement | [LeetCode](https://leetcode.com/problems/longest-repeating-character-replacement/) | Medium | Window - maxFreq <= k | [ ] | |
| 14 | Permutation in String | [LeetCode](https://leetcode.com/problems/permutation-in-string/) | Medium | Fixed window + freq match | [ ] | |
| 15 | Minimum Window Substring | [LeetCode](https://leetcode.com/problems/minimum-window-substring/) | Hard | Variable window + freq map | [ ] | |
| 16 | Sliding Window Maximum | [LeetCode](https://leetcode.com/problems/sliding-window-maximum/) | Hard | Monotonic Deque 🔥 | [ ] | |
| 17 | Subarrays with K Different Integers | [LeetCode](https://leetcode.com/problems/subarrays-with-k-different-integers/) | Hard | atMost(k) - atMost(k-1) | [ ] | |
| 18 | Count Number of Nice Subarrays | [LeetCode](https://leetcode.com/problems/count-number-of-nice-subarrays/) | Medium | atMost trick | [ ] | |
| 19 | Fruit Into Baskets | [LeetCode](https://leetcode.com/problems/fruit-into-baskets/) | Medium | At most 2 distinct | [ ] | |
| 20 | Max Consecutive Ones III | [LeetCode](https://leetcode.com/problems/max-consecutive-ones-iii/) | Medium | Window with k flips | [ ] | |
| 21 | Minimum Size Subarray Sum | [LeetCode](https://leetcode.com/problems/minimum-size-subarray-sum/) | Medium | Shrink when sum >= target | [ ] | |
| 22 | Binary Subarrays with Sum | [LeetCode](https://leetcode.com/problems/binary-subarrays-with-sum/) | Medium | atMost trick | [ ] | |

> 💡 **Template:** left=0, for right: expand → while invalid: shrink left → update answer | **"Exactly K" = atMost(K) - atMost(K-1)**

## 2.3 Stack & Monotonic Stack 🔥

| # | Problem | Link | Difficulty | Pattern | Status | Fav |
|---|---------|------|------------|---------|--------|-----|
| 23 | Valid Parentheses | [LeetCode](https://leetcode.com/problems/valid-parentheses/) | Easy | Stack matching | [ ] | |
| 24 | Min Stack | [LeetCode](https://leetcode.com/problems/min-stack/) | Medium | Auxiliary stack | [ ] | |
| 25 | Next Greater Element I | [LeetCode](https://leetcode.com/problems/next-greater-element-i/) | Easy | Monotonic Stack | [ ] | |
| 26 | Next Greater Element II (Circular) | [LeetCode](https://leetcode.com/problems/next-greater-element-ii/) | Medium | Monotonic Stack + 2x loop | [ ] | |
| 27 | Daily Temperatures | [LeetCode](https://leetcode.com/problems/daily-temperatures/) | Medium | Monotonic Decreasing Stack | [ ] | |
| 28 | Online Stock Span | [LeetCode](https://leetcode.com/problems/online-stock-span/) | Medium | Monotonic Stack | [ ] | |
| 29 | Largest Rectangle in Histogram | [LeetCode](https://leetcode.com/problems/largest-rectangle-in-histogram/) | Hard | Monotonic Stack 🔥🔥 | [ ] | |
| 30 | Maximal Rectangle | [LeetCode](https://leetcode.com/problems/maximal-rectangle/) | Hard | Histogram per row | [ ] | |
| 31 | Asteroid Collision | [LeetCode](https://leetcode.com/problems/asteroid-collision/) | Medium | Stack simulation | [ ] | |
| 32 | Remove K Digits | [LeetCode](https://leetcode.com/problems/remove-k-digits/) | Medium | Monotonic Increasing Stack | [ ] | |
| 33 | Sum of Subarray Minimums | [LeetCode](https://leetcode.com/problems/sum-of-subarray-minimums/) | Medium | Monotonic Stack + contribution | [ ] | |
| 34 | Car Fleet | [LeetCode](https://leetcode.com/problems/car-fleet/) | Medium | Stack (sort by position) | [ ] | |
| 35 | Evaluate Reverse Polish Notation | [LeetCode](https://leetcode.com/problems/evaluate-reverse-polish-notation/) | Medium | Stack evaluation | [ ] | |
| 36 | Implement Queue using Stacks | [LeetCode](https://leetcode.com/problems/implement-queue-using-stacks/) | Easy | Two stacks | [ ] | |

> 💡 Decreasing stack → next GREATER | Increasing stack → next SMALLER | **Largest Rect:** prev smaller + next smaller for each bar

## 2.4 Queue & Deque

| # | Problem | Link | Difficulty | Pattern | Status | Fav |
|---|---------|------|------------|---------|--------|-----|
| 37 | Sliding Window Maximum | [LeetCode](https://leetcode.com/problems/sliding-window-maximum/) | Hard | Monotonic Deque | [ ] | |
| 38 | Design Circular Queue | [LeetCode](https://leetcode.com/problems/design-circular-queue/) | Medium | Array-based circular | [ ] | |
| 39 | Shortest Subarray with Sum >= K | [LeetCode](https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/) | Hard | Deque + Prefix Sum 🔥 | [ ] | |
| 40 | First Negative in Every Window of K | [GFG](https://www.geeksforgeeks.org/problems/first-negative-integer-in-every-window-of-size-k3345/1) | Medium | Deque | [ ] | |

## 2.5 Linked List

| # | Problem | Link | Difficulty | Pattern | Status | Fav |
|---|---------|------|------------|---------|--------|-----|
| 41 | Reverse Linked List | [LeetCode](https://leetcode.com/problems/reverse-linked-list/) | Easy | Iterative/Recursive | [ ] | |
| 42 | Reverse Linked List II (range) | [LeetCode](https://leetcode.com/problems/reverse-linked-list-ii/) | Medium | Track prev of range | [ ] | |
| 43 | Linked List Cycle | [LeetCode](https://leetcode.com/problems/linked-list-cycle/) | Easy | Fast-Slow (Floyd's) | [ ] | |
| 44 | Linked List Cycle II (find start) | [LeetCode](https://leetcode.com/problems/linked-list-cycle-ii/) | Medium | Floyd's algorithm | [ ] | |
| 45 | Merge Two Sorted Lists | [LeetCode](https://leetcode.com/problems/merge-two-sorted-lists/) | Easy | Dummy head + merge | [ ] | |
| 46 | Merge K Sorted Lists | [LeetCode](https://leetcode.com/problems/merge-k-sorted-lists/) | Hard | Min Heap / D&C | [ ] | |
| 47 | Remove Nth Node From End | [LeetCode](https://leetcode.com/problems/remove-nth-node-from-end-of-list/) | Medium | Two pointers (gap of n) | [ ] | |
| 48 | Reorder List | [LeetCode](https://leetcode.com/problems/reorder-list/) | Medium | Find mid + Reverse + Merge | [ ] | |
| 49 | Add Two Numbers | [LeetCode](https://leetcode.com/problems/add-two-numbers/) | Medium | Carry simulation | [ ] | |
| 50 | Copy List with Random Pointer | [LeetCode](https://leetcode.com/problems/copy-list-with-random-pointer/) | Medium | HashMap / Interleave trick | [ ] | |
| 51 | LRU Cache | [LeetCode](https://leetcode.com/problems/lru-cache/) | Medium | HashMap + Doubly LL 🔥 | [ ] | |
| 52 | Flatten Multilevel Doubly LL | [LeetCode](https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/) | Medium | Stack / Recursion | [ ] | |
| 53 | Palindrome Linked List | [LeetCode](https://leetcode.com/problems/palindrome-linked-list/) | Easy | Find mid + reverse 2nd half | [ ] | |
| 54 | Intersection of Two Linked Lists | [LeetCode](https://leetcode.com/problems/intersection-of-two-linked-lists/) | Easy | Two pointer trick | [ ] | |
| 55 | Sort List | [LeetCode](https://leetcode.com/problems/sort-list/) | Medium | Merge Sort on LL | [ ] | |

> 💡 **Floyd's:** slow=1, fast=2, meet → reset one to head, both move 1 | **LRU:** HashMap + DLL for O(1) | **Reorder:** Split→Reverse→Merge

## 2.6 Recursion & Backtracking

| # | Problem | Link | Difficulty | Pattern | Status | Fav |
|---|---------|------|------------|---------|--------|-----|
| 56 | Subsets | [LeetCode](https://leetcode.com/problems/subsets/) | Medium | Include/Exclude | [ ] | |
| 57 | Subsets II (duplicates) | [LeetCode](https://leetcode.com/problems/subsets-ii/) | Medium | Sort + Skip duplicates | [ ] | |
| 58 | Permutations | [LeetCode](https://leetcode.com/problems/permutations/) | Medium | Swap / Visited array | [ ] | |
| 59 | Permutations II (duplicates) | [LeetCode](https://leetcode.com/problems/permutations-ii/) | Medium | Sort + skip same level | [ ] | |
| 60 | Combination Sum | [LeetCode](https://leetcode.com/problems/combination-sum/) | Medium | Unlimited picks, start from i | [ ] | |
| 61 | Combination Sum II | [LeetCode](https://leetcode.com/problems/combination-sum-ii/) | Medium | Each once, skip dupes | [ ] | |
| 62 | Palindrome Partitioning | [LeetCode](https://leetcode.com/problems/palindrome-partitioning/) | Medium | Backtrack + isPalindrome | [ ] | |
| 63 | N-Queens | [LeetCode](https://leetcode.com/problems/n-queens/) | Hard | Col + Diag + Anti-diag sets | [ ] | |
| 64 | Sudoku Solver | [LeetCode](https://leetcode.com/problems/sudoku-solver/) | Hard | Backtrack + constraint sets | [ ] | |
| 65 | Word Search | [LeetCode](https://leetcode.com/problems/word-search/) | Medium | DFS + visited marking | [ ] | |
| 66 | Letter Combinations of Phone | [LeetCode](https://leetcode.com/problems/letter-combinations-of-a-phone-number/) | Medium | Backtrack with mapping | [ ] | |
| 67 | Generate Parentheses | [LeetCode](https://leetcode.com/problems/generate-parentheses/) | Medium | open < n, close < open | [ ] | |
| 68 | Rat in a Maze | [GFG](https://www.geeksforgeeks.org/problems/rat-in-a-maze-problem/1) | Medium | DFS + visited | [ ] | |
| 69 | Word Break | [LeetCode](https://leetcode.com/problems/word-break/) | Medium | DP / Backtrack + Memo | [ ] | |
| 70 | Expression Add Operators | [LeetCode](https://leetcode.com/problems/expression-add-operators/) | Hard | Backtrack + track prev operand | [ ] | |

> 💡 **Duplicates:** Sort first, skip if arr[i]==arr[i-1] at same level | **N-Queens:** track cols, diags(row-col), anti-diags(row+col) | **Template:** make→recurse→undo

## 2.7 Phase 2 Interview Favorites 🏢🔥

| # | Problem | Link | Company | Pattern | Status |
|---|---------|------|---------|---------|--------|
| 71 | LRU Cache | [LC](https://leetcode.com/problems/lru-cache/) | Amazon, Google, FB | HashMap + DLL | [ ] |
| 72 | Largest Rectangle in Histogram | [LC](https://leetcode.com/problems/largest-rectangle-in-histogram/) | Google, Amazon | Monotonic Stack | [ ] |
| 73 | Sliding Window Maximum | [LC](https://leetcode.com/problems/sliding-window-maximum/) | Google, Amazon | Monotonic Deque | [ ] |
| 74 | Minimum Window Substring | [LC](https://leetcode.com/problems/minimum-window-substring/) | FB, Google, Amazon | Sliding Window | [ ] |
| 75 | N-Queens | [LC](https://leetcode.com/problems/n-queens/) | Google, Amazon | Backtracking | [ ] |
| 76 | Merge K Sorted Lists | [LC](https://leetcode.com/problems/merge-k-sorted-lists/) | Amazon, Google | Heap/D&C | [ ] |
| 77 | Sum of Subarray Minimums | [LC](https://leetcode.com/problems/sum-of-subarray-minimums/) | Amazon, Google | Monotonic Stack | [ ] |
| 78 | Remove K Digits | [LC](https://leetcode.com/problems/remove-k-digits/) | Amazon, Microsoft | Monotonic Stack | [ ] |
| 79 | Subarrays with K Different Integers | [LC](https://leetcode.com/problems/subarrays-with-k-different-integers/) | Google | Sliding Window | [ ] |
| 80 | Copy List with Random Pointer | [LC](https://leetcode.com/problems/copy-list-with-random-pointer/) | Amazon, FB | HashMap/Interleave | [ ] |

---
---

# PHASE 3: ADVANCED DSA (Week 3-4)

## 3.1 Binary Trees

| # | Problem | Link | Difficulty | Pattern | Status | Fav |
|---|---------|------|------------|---------|--------|-----|
| 1 | Inorder Traversal (Iterative) | [LeetCode](https://leetcode.com/problems/binary-tree-inorder-traversal/) | Easy | Stack-based | [ ] | |
| 2 | Preorder Traversal (Iterative) | [LeetCode](https://leetcode.com/problems/binary-tree-preorder-traversal/) | Easy | Stack-based | [ ] | |
| 3 | Postorder Traversal (Iterative) | [LeetCode](https://leetcode.com/problems/binary-tree-postorder-traversal/) | Easy | Two stacks | [ ] | |
| 4 | Level Order Traversal | [LeetCode](https://leetcode.com/problems/binary-tree-level-order-traversal/) | Medium | BFS Queue | [ ] | |
| 5 | Zigzag Level Order | [LeetCode](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/) | Medium | BFS + alternate | [ ] | |
| 6 | Maximum Depth | [LeetCode](https://leetcode.com/problems/maximum-depth-of-binary-tree/) | Easy | DFS | [ ] | |
| 7 | Balanced Binary Tree | [LeetCode](https://leetcode.com/problems/balanced-binary-tree/) | Easy | DFS + height | [ ] | |
| 8 | Diameter of Binary Tree | [LeetCode](https://leetcode.com/problems/diameter-of-binary-tree/) | Easy | DFS, max path through node | [ ] | |
| 9 | Same Tree | [LeetCode](https://leetcode.com/problems/same-tree/) | Easy | Recursive compare | [ ] | |
| 10 | Symmetric Tree | [LeetCode](https://leetcode.com/problems/symmetric-tree/) | Easy | Mirror check | [ ] | |
| 11 | Invert Binary Tree | [LeetCode](https://leetcode.com/problems/invert-binary-tree/) | Easy | Swap children | [ ] | |
| 12 | Maximum Path Sum | [LeetCode](https://leetcode.com/problems/binary-tree-maximum-path-sum/) | Hard | DFS, update global 🔥 | [ ] | |
| 13 | Lowest Common Ancestor | [LeetCode](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/) | Medium | DFS return up | [ ] | |
| 14 | Right Side View | [LeetCode](https://leetcode.com/problems/binary-tree-right-side-view/) | Medium | BFS last of level | [ ] | |
| 15 | Vertical Order Traversal | [LeetCode](https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/) | Hard | BFS + column | [ ] | |
| 16 | Top/Bottom View | [GFG](https://www.geeksforgeeks.org/problems/top-view-of-binary-tree/1) | Medium | BFS + HD | [ ] | |
| 17 | Serialize/Deserialize BT | [LeetCode](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/) | Hard | Preorder + nulls 🔥 | [ ] | |
| 18 | Construct from Inorder & Preorder | [LeetCode](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/) | Medium | Recursive partition | [ ] | |
| 19 | Flatten BT to Linked List | [LeetCode](https://leetcode.com/problems/flatten-binary-tree-to-linked-list/) | Medium | Morris/Reverse postorder | [ ] | |
| 20 | Count Complete Tree Nodes | [LeetCode](https://leetcode.com/problems/count-complete-tree-nodes/) | Medium | BS on last level | [ ] | |

> 💡 Most tree problems: DFS recursive, return info UP | **Diameter/Path:** combine left+right, update global | **LCA:** both sides non-null = current is LCA

## 3.2 BST

| # | Problem | Link | Difficulty | Pattern | Status | Fav |
|---|---------|------|------------|---------|--------|-----|
| 21 | Validate BST | [LeetCode](https://leetcode.com/problems/validate-binary-search-tree/) | Medium | Inorder / Range | [ ] | |
| 22 | Kth Smallest in BST | [LeetCode](https://leetcode.com/problems/kth-smallest-element-in-a-bst/) | Medium | Inorder traversal | [ ] | |
| 23 | LCA of BST | [LeetCode](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/) | Medium | BST property | [ ] | |
| 24 | Sorted Array to BST | [LeetCode](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/) | Easy | Mid as root | [ ] | |
| 25 | Delete Node in BST | [LeetCode](https://leetcode.com/problems/delete-node-in-a-bst/) | Medium | Successor/Predecessor | [ ] | |
| 26 | Inorder Successor | [LeetCode](https://leetcode.com/problems/inorder-successor-in-bst/) | Medium | BST traversal | [ ] | |
| 27 | Two Sum BST | [LeetCode](https://leetcode.com/problems/two-sum-iv-input-is-a-bst/) | Easy | Inorder + Two Pointers | [ ] | |

## 3.3 Heaps / Priority Queue

| # | Problem | Link | Difficulty | Pattern | Status | Fav |
|---|---------|------|------------|---------|--------|-----|
| 28 | Kth Largest Element | [LeetCode](https://leetcode.com/problems/kth-largest-element-in-an-array/) | Medium | Min-Heap of size K | [ ] | |
| 29 | Top K Frequent Elements | [LeetCode](https://leetcode.com/problems/top-k-frequent-elements/) | Medium | Heap / Bucket Sort | [ ] | |
| 30 | Find Median from Data Stream | [LeetCode](https://leetcode.com/problems/find-median-from-data-stream/) | Hard | Two heaps 🔥 | [ ] | |
| 31 | Merge K Sorted Lists | [LeetCode](https://leetcode.com/problems/merge-k-sorted-lists/) | Hard | Min Heap | [ ] | |
| 32 | Task Scheduler | [LeetCode](https://leetcode.com/problems/task-scheduler/) | Medium | Max Heap + Cooldown | [ ] | |
| 33 | Reorganize String | [LeetCode](https://leetcode.com/problems/reorganize-string/) | Medium | Max Heap | [ ] | |
| 34 | K Closest Points to Origin | [LeetCode](https://leetcode.com/problems/k-closest-points-to-origin/) | Medium | Max Heap size K | [ ] | |
| 35 | Ugly Number II | [LeetCode](https://leetcode.com/problems/ugly-number-ii/) | Medium | Min Heap / DP | [ ] | |
| 36 | IPO | [LeetCode](https://leetcode.com/problems/ipo/) | Hard | Two heaps | [ ] | |
| 37 | Smallest Range Covering K Lists | [LeetCode](https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/) | Hard | Min Heap + track max | [ ] | |

> 💡 **Kth largest:** min-heap size K | **Median:** max-heap(lower) + min-heap(upper), balance | **Merge K:** min-heap with (val, list_idx, elem_idx)

## 3.4 Graphs — BFS & DFS

| # | Problem | Link | Difficulty | Pattern | Status | Fav |
|---|---------|------|------------|---------|--------|-----|
| 38 | Number of Islands | [LeetCode](https://leetcode.com/problems/number-of-islands/) | Medium | BFS/DFS flood fill | [ ] | |
| 39 | Clone Graph | [LeetCode](https://leetcode.com/problems/clone-graph/) | Medium | BFS/DFS + HashMap | [ ] | |
| 40 | Course Schedule | [LeetCode](https://leetcode.com/problems/course-schedule/) | Medium | Topological Sort / DFS | [ ] | |
| 41 | Course Schedule II | [LeetCode](https://leetcode.com/problems/course-schedule-ii/) | Medium | Kahn's BFS | [ ] | |
| 42 | Pacific Atlantic Water Flow | [LeetCode](https://leetcode.com/problems/pacific-atlantic-water-flow/) | Medium | Multi-source BFS borders | [ ] | |
| 43 | Rotting Oranges | [LeetCode](https://leetcode.com/problems/rotting-oranges/) | Medium | Multi-source BFS | [ ] | |
| 44 | 01 Matrix | [LeetCode](https://leetcode.com/problems/01-matrix/) | Medium | Multi-source BFS | [ ] | |
| 45 | Surrounded Regions | [LeetCode](https://leetcode.com/problems/surrounded-regions/) | Medium | DFS from boundary | [ ] | |
| 46 | Connected Components | [LeetCode](https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/) | Medium | DFS/BFS/UF | [ ] | |
| 47 | Graph Valid Tree | [LeetCode](https://leetcode.com/problems/graph-valid-tree/) | Medium | n-1 edges + connected | [ ] | |
| 48 | Word Ladder | [LeetCode](https://leetcode.com/problems/word-ladder/) | Hard | BFS level by level 🔥 | [ ] | |
| 49 | Alien Dictionary | [LeetCode](https://leetcode.com/problems/alien-dictionary/) | Hard | Topological Sort | [ ] | |
| 50 | Shortest Path Binary Matrix | [LeetCode](https://leetcode.com/problems/shortest-path-in-binary-matrix/) | Medium | BFS | [ ] | |
| 51 | Is Graph Bipartite? | [LeetCode](https://leetcode.com/problems/is-graph-bipartite/) | Medium | 2-coloring | [ ] | |
| 52 | Detect Cycle Undirected | [GFG](https://www.geeksforgeeks.org/problems/detect-cycle-in-an-undirected-graph/1) | Medium | Parent tracking | [ ] | |

## 3.5 Graphs — Shortest Path & Advanced

| # | Problem | Link | Difficulty | Pattern | Status | Fav |
|---|---------|------|------------|---------|--------|-----|
| 53 | Dijkstra's Algorithm | [GFG](https://www.geeksforgeeks.org/problems/implementing-dijkstra-set-1-adjacency-matrix/1) | Medium | Min-Heap + relaxation | [ ] | |
| 54 | Network Delay Time | [LeetCode](https://leetcode.com/problems/network-delay-time/) | Medium | Dijkstra | [ ] | |
| 55 | Cheapest Flights K Stops | [LeetCode](https://leetcode.com/problems/cheapest-flights-within-k-stops/) | Medium | BFS / Bellman-Ford | [ ] | |
| 56 | Path with Minimum Effort | [LeetCode](https://leetcode.com/problems/path-with-minimum-effort/) | Medium | Dijkstra / BS+BFS | [ ] | |
| 57 | Swim in Rising Water | [LeetCode](https://leetcode.com/problems/swim-in-rising-water/) | Hard | Dijkstra / BS+BFS | [ ] | |
| 58 | Bellman-Ford | [GFG](https://www.geeksforgeeks.org/problems/distance-from-the-source-bellman-ford-algorithm/1) | Medium | Relax V-1 times | [ ] | |
| 59 | Floyd-Warshall | [GFG](https://www.geeksforgeeks.org/problems/implementing-floyd-warshall2042/1) | Medium | DP intermediate nodes | [ ] | |
| 60 | MST (Prim/Kruskal) | [GFG](https://www.geeksforgeeks.org/problems/minimum-spanning-tree/1) | Medium | Greedy + UF/Heap | [ ] | |
| 61 | Critical Connections (Bridges) | [LeetCode](https://leetcode.com/problems/critical-connections-in-a-network/) | Hard | Tarjan's 🔥 | [ ] | |
| 62 | Strongly Connected Components | [GFG](https://www.geeksforgeeks.org/problems/strongly-connected-components-kosarajus-algo/1) | Hard | Kosaraju's | [ ] | |

> 💡 **BFS:** Shortest unweighted | **Multi-source BFS:** Add ALL sources first | **Dijkstra:** min-heap O(E log V) | **Topo Sort:** Kahn's (indegree) or DFS finish order

## 3.6 Tries

| # | Problem | Link | Difficulty | Pattern | Status | Fav |
|---|---------|------|------------|---------|--------|-----|
| 63 | Implement Trie | [LeetCode](https://leetcode.com/problems/implement-trie-prefix-tree/) | Medium | Basic Trie | [ ] | |
| 64 | Add and Search Words | [LeetCode](https://leetcode.com/problems/design-add-and-search-words-data-structure/) | Medium | Trie + DFS for '.' | [ ] | |
| 65 | Word Search II | [LeetCode](https://leetcode.com/problems/word-search-ii/) | Hard | Trie + Backtracking 🔥 | [ ] | |
| 66 | Maximum XOR of Two Numbers | [LeetCode](https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/) | Medium | Bit Trie | [ ] | |

## 3.7 Dynamic Programming — Core

| # | Problem | Link | Difficulty | Pattern | Status | Fav |
|---|---------|------|------------|---------|--------|-----|
| 67 | Climbing Stairs | [LeetCode](https://leetcode.com/problems/climbing-stairs/) | Easy | 1D DP (Fibonacci) | [ ] | |
| 68 | House Robber | [LeetCode](https://leetcode.com/problems/house-robber/) | Medium | 1D DP (take/skip) | [ ] | |
| 69 | House Robber II (Circular) | [LeetCode](https://leetcode.com/problems/house-robber-ii/) | Medium | Two passes | [ ] | |
| 70 | Coin Change | [LeetCode](https://leetcode.com/problems/coin-change/) | Medium | Unbounded Knapsack | [ ] | |
| 71 | Coin Change II | [LeetCode](https://leetcode.com/problems/coin-change-ii/) | Medium | Unbounded Knapsack | [ ] | |
| 72 | 0/1 Knapsack | [GFG](https://www.geeksforgeeks.org/problems/0-1-knapsack-problem0945/1) | Medium | Classic 2D DP | [ ] | |
| 73 | Target Sum | [LeetCode](https://leetcode.com/problems/target-sum/) | Medium | Subset Sum variant | [ ] | |
| 74 | Partition Equal Subset Sum | [LeetCode](https://leetcode.com/problems/partition-equal-subset-sum/) | Medium | Subset Sum | [ ] | |
| 75 | Longest Increasing Subsequence | [LeetCode](https://leetcode.com/problems/longest-increasing-subsequence/) | Medium | DP + BS O(nlogn) | [ ] | |
| 76 | Longest Common Subsequence | [LeetCode](https://leetcode.com/problems/longest-common-subsequence/) | Medium | 2D DP | [ ] | |
| 77 | Edit Distance | [LeetCode](https://leetcode.com/problems/edit-distance/) | Medium | 2D DP strings | [ ] | |
| 78 | Word Break | [LeetCode](https://leetcode.com/problems/word-break/) | Medium | 1D DP + substring | [ ] | |
| 79 | Decode Ways | [LeetCode](https://leetcode.com/problems/decode-ways/) | Medium | 1D DP | [ ] | |
| 80 | Unique Paths | [LeetCode](https://leetcode.com/problems/unique-paths/) | Medium | 2D Grid DP | [ ] | |
| 81 | Minimum Path Sum | [LeetCode](https://leetcode.com/problems/minimum-path-sum/) | Medium | 2D Grid DP | [ ] | |
| 82 | Longest Palindromic Subsequence | [LeetCode](https://leetcode.com/problems/longest-palindromic-subsequence/) | Medium | LCS on reverse | [ ] | |
| 83 | Palindrome Partitioning II | [LeetCode](https://leetcode.com/problems/palindrome-partitioning-ii/) | Hard | DP on partitions | [ ] | |
| 84 | Max Length Repeated Subarray | [LeetCode](https://leetcode.com/problems/maximum-length-of-repeated-subarray/) | Medium | 2D DP | [ ] | |
| 85 | Distinct Subsequences | [LeetCode](https://leetcode.com/problems/distinct-subsequences/) | Hard | 2D DP | [ ] | |

## 3.8 DP — Intervals & Stock Problems

| # | Problem | Link | Difficulty | Pattern | Status | Fav |
|---|---------|------|------------|---------|--------|-----|
| 86 | Matrix Chain Multiplication | [GFG](https://www.geeksforgeeks.org/problems/matrix-chain-multiplication0303/1) | Hard | Interval DP | [ ] | |
| 87 | Burst Balloons | [LeetCode](https://leetcode.com/problems/burst-balloons/) | Hard | Interval DP 🔥 | [ ] | |
| 88 | Min Cost Tree From Leaf Values | [LeetCode](https://leetcode.com/problems/minimum-cost-tree-from-leaf-values/) | Medium | Interval DP / Stack | [ ] | |
| 89 | Longest Valid Parentheses | [LeetCode](https://leetcode.com/problems/longest-valid-parentheses/) | Hard | Stack / DP | [ ] | |
| 90 | Regular Expression Matching | [LeetCode](https://leetcode.com/problems/regular-expression-matching/) | Hard | 2D DP | [ ] | |
| 91 | Wildcard Matching | [LeetCode](https://leetcode.com/problems/wildcard-matching/) | Hard | 2D DP | [ ] | |
| 92 | Interleaving String | [LeetCode](https://leetcode.com/problems/interleaving-string/) | Medium | 2D DP | [ ] | |
| 93 | Maximal Square | [LeetCode](https://leetcode.com/problems/maximal-square/) | Medium | 2D DP grid | [ ] | |
| 94 | Stock III (2 transactions) | [LeetCode](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/) | Hard | State Machine DP | [ ] | |
| 95 | Stock IV (k transactions) | [LeetCode](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/) | Hard | State Machine DP | [ ] | |
| 96 | Stock with Cooldown | [LeetCode](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/) | Medium | State Machine DP | [ ] | |

> 💡 **DP Steps:** 1) State 2) Recurrence 3) Base 4) Order | **Knapsack:** take/skip | **LIS O(nlogn):** maintain smallest tails array | **Interval:** dp[i][j] try all splits k | **Stock:** states = (day, holding, tx_left)

## 3.9 Greedy

| # | Problem | Link | Difficulty | Pattern | Status | Fav |
|---|---------|------|------------|---------|--------|-----|
| 97 | Jump Game | [LeetCode](https://leetcode.com/problems/jump-game/) | Medium | Track max reachable | [ ] | |
| 98 | Jump Game II | [LeetCode](https://leetcode.com/problems/jump-game-ii/) | Medium | BFS-like levels | [ ] | |
| 99 | Gas Station | [LeetCode](https://leetcode.com/problems/gas-station/) | Medium | Reset when tank < 0 | [ ] | |
| 100 | Non-overlapping Intervals | [LeetCode](https://leetcode.com/problems/non-overlapping-intervals/) | Medium | Sort by end time | [ ] | |
| 101 | Minimum Platforms | [GFG](https://www.geeksforgeeks.org/problems/minimum-platforms-1587115620/1) | Medium | Sort arrivals & departures | [ ] | |
| 102 | Job Sequencing | [GFG](https://www.geeksforgeeks.org/problems/job-sequencing-problem-1587115620/1) | Medium | Sort by profit + greedy | [ ] | |
| 103 | Fractional Knapsack | [GFG](https://www.geeksforgeeks.org/problems/fractional-knapsack-1587115620/1) | Medium | Sort by value/weight | [ ] | |
| 104 | Minimum Coins | [GFG](https://www.geeksforgeeks.org/problems/number-of-coins1702/1) | Medium | Greedy if denominations allow | [ ] | |
| 105 | Assign Cookies | [LeetCode](https://leetcode.com/problems/assign-cookies/) | Easy | Sort + two pointers | [ ] | |
| 106 | Candy Distribution | [LeetCode](https://leetcode.com/problems/candy/) | Hard | Two passes L→R, R→L | [ ] | |
| 107 | Min Arrows to Burst Balloons | [LeetCode](https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/) | Medium | Sort by end, greedy | [ ] | |

> 💡 **Greedy works when:** local optimal → global optimal | **Intervals:** sort by END for max non-overlap | If greedy fails → try DP

## 3.10 Union-Find

| # | Problem | Link | Difficulty | Pattern | Status | Fav |
|---|---------|------|------------|---------|--------|-----|
| 108 | Connected Components | [LeetCode](https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/) | Medium | Basic UF | [ ] | |
| 109 | Redundant Connection | [LeetCode](https://leetcode.com/problems/redundant-connection/) | Medium | UF detect cycle | [ ] | |
| 110 | Accounts Merge | [LeetCode](https://leetcode.com/problems/accounts-merge/) | Medium | UF + mapping | [ ] | |
| 111 | Number of Islands II | [LeetCode](https://leetcode.com/problems/number-of-islands-ii/) | Hard | Dynamic UF | [ ] | |
| 112 | Most Stones Removed | [LeetCode](https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/) | Medium | Union by row/col | [ ] | |
| 113 | Making A Large Island | [LeetCode](https://leetcode.com/problems/making-a-large-island/) | Hard | UF + flip one cell | [ ] | |

## 3.11 Phase 3 Interview Favorites 🏢🔥

| # | Problem | Link | Company | Pattern | Status |
|---|---------|------|---------|---------|--------|
| 114 | Binary Tree Max Path Sum | [LC](https://leetcode.com/problems/binary-tree-maximum-path-sum/) | Google, FB | DFS | [ ] |
| 115 | Serialize/Deserialize BT | [LC](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/) | Amazon, Google | BFS/DFS | [ ] |
| 116 | Find Median from Data Stream | [LC](https://leetcode.com/problems/find-median-from-data-stream/) | Amazon, Google | Two Heaps | [ ] |
| 117 | Word Ladder | [LC](https://leetcode.com/problems/word-ladder/) | Amazon, Google | BFS | [ ] |
| 118 | LIS O(nlogn) | [LC](https://leetcode.com/problems/longest-increasing-subsequence/) | Google, Amazon | DP + BS | [ ] |
| 119 | Edit Distance | [LC](https://leetcode.com/problems/edit-distance/) | Google, Amazon | 2D DP | [ ] |
| 120 | Burst Balloons | [LC](https://leetcode.com/problems/burst-balloons/) | Google | Interval DP | [ ] |

---
---

# PHASE 4: PRO LEVEL — CP & TRICKY (Week 4+)

## 4.1 Bit Manipulation

| # | Problem | Link | Difficulty | Pattern | Status | Fav |
|---|---------|------|------------|---------|--------|-----|
| 1 | Single Number | [LeetCode](https://leetcode.com/problems/single-number/) | Easy | XOR all | [ ] | |
| 2 | Single Number II (3 times) | [LeetCode](https://leetcode.com/problems/single-number-ii/) | Medium | Bit counting | [ ] | |
| 3 | Single Number III (two unique) | [LeetCode](https://leetcode.com/problems/single-number-iii/) | Medium | XOR + rightmost bit split | [ ] | |
| 4 | Number of 1 Bits | [LeetCode](https://leetcode.com/problems/number-of-1-bits/) | Easy | n & (n-1) | [ ] | |
| 5 | Counting Bits | [LeetCode](https://leetcode.com/problems/counting-bits/) | Easy | DP with bit relation | [ ] | |
| 6 | Reverse Bits | [LeetCode](https://leetcode.com/problems/reverse-bits/) | Easy | Bit shifting | [ ] | |
| 7 | Power of Two | [LeetCode](https://leetcode.com/problems/power-of-two/) | Easy | n & (n-1) == 0 | [ ] | |
| 8 | Subsets using Bitmask | [LeetCode](https://leetcode.com/problems/subsets/) | Medium | 0 to 2^n - 1 | [ ] | |
| 9 | Maximum XOR of Two Numbers | [LeetCode](https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/) | Medium | Bit Trie | [ ] | |
| 10 | XOR Queries of Subarray | [LeetCode](https://leetcode.com/problems/xor-queries-of-a-subarray/) | Medium | Prefix XOR | [ ] | |
| 11 | Min Flips to Make a OR b = c | [LeetCode](https://leetcode.com/problems/minimum-flips-to-make-a-or-b-equal-to-c/) | Medium | Bit-by-bit | [ ] | |
| 12 | XOR of Numbers in Range | [GFG](https://www.geeksforgeeks.org/problems/find-xor-of-numbers-from-l-to-r/1) | Medium | XOR repeats every 4 | [ ] | |

> 💡 **XOR:** a^a=0, a^0=a | **n&(n-1):** removes lowest set bit | **Get bit i:** (n>>i)&1 | **Two unique:** XOR all→a^b, split by rightmost set bit

## 4.2 Math & Number Theory

| # | Problem | Link | Difficulty | Pattern | Status | Fav |
|---|---------|------|------------|---------|--------|-----|
| 13 | Count Primes (Sieve) | [LeetCode](https://leetcode.com/problems/count-primes/) | Medium | Sieve of Eratosthenes | [ ] | |
| 14 | GCD / LCM | [GFG](https://www.geeksforgeeks.org/problems/gcd-of-two-numbers3459/1) | Easy | Euclidean algorithm | [ ] | |
| 15 | Modular Exponentiation | [GFG](https://www.geeksforgeeks.org/problems/modular-exponentiation-for-large-numbers5537/1) | Medium | Binary exponentiation | [ ] | |
| 16 | Pow(x, n) | [LeetCode](https://leetcode.com/problems/powx-n/) | Medium | Binary exponentiation | [ ] | |
| 17 | Trailing Zeroes in Factorial | [LeetCode](https://leetcode.com/problems/factorial-trailing-zeroes/) | Medium | Count factors of 5 | [ ] | |
| 18 | Happy Number | [LeetCode](https://leetcode.com/problems/happy-number/) | Easy | Floyd's cycle detection | [ ] | |
| 19 | Excel Column Number | [LeetCode](https://leetcode.com/problems/excel-sheet-column-number/) | Easy | Base 26 | [ ] | |
| 20 | Multiply Strings | [LeetCode](https://leetcode.com/problems/multiply-strings/) | Medium | Grade school multiply | [ ] | |
| 21 | Catalan Number (Count BSTs) | [LeetCode](https://leetcode.com/problems/unique-binary-search-trees/) | Medium | Catalan formula | [ ] | |
| 22 | nCr Modulo p | [GFG](https://www.geeksforgeeks.org/problems/ncr1019/1) | Medium | Fermat's theorem | [ ] | |
| 23 | Count digits in N! | [GFG](https://www.geeksforgeeks.org/problems/count-digits-in-a-factorial3957/1) | Medium | Log sum | [ ] | |

> 💡 **Sieve:** O(n log log n) | **Binary Exp:** a^n in O(log n) | **Fermat:** a^(-1) ≡ a^(p-2) mod p | **Catalan:** BSTs, parentheses, paths

## 4.3 Codeforces-Style Tricky Problems 🔥🔥

| # | Problem | Link | Rating | Key Trick | Status | Fav |
|---|---------|------|--------|-----------|--------|-----|
| 24 | Watermelon | [CF](https://codeforces.com/problemset/problem/4/A) | 800 | Edge case: n=2 | [ ] | |
| 25 | Bit++ | [CF](https://codeforces.com/problemset/problem/282/A) | 800 | Simulation | [ ] | |
| 26 | Beautiful Matrix | [CF](https://codeforces.com/problemset/problem/263/A) | 800 | Manhattan distance | [ ] | |
| 27 | Nearly Lucky Number | [CF](https://codeforces.com/problemset/problem/110/A) | 800 | Count 4s and 7s | [ ] | |
| 28 | Soldier and Bananas | [CF](https://codeforces.com/problemset/problem/546/A) | 800 | Arithmetic sum | [ ] | |
| 29 | Maximum in Table | [CF](https://codeforces.com/problemset/problem/509/A) | 800 | Pascal's observation | [ ] | |
| 30 | Even Odds | [CF](https://codeforces.com/problemset/problem/318/A) | 900 | Position calculation | [ ] | |
| 31 | Integer Sequence Dividing | [CF](https://codeforces.com/problemset/problem/1102/A) | 900 | Sum + parity | [ ] | |
| 32 | Vanya and Fence | [CF](https://codeforces.com/problemset/problem/677/A) | 800 | Greedy counting | [ ] | |
| 33 | Divisibility Problem | [CF](https://codeforces.com/problemset/problem/1328/A) | 800 | Modular trick | [ ] | |
| 34 | Yet Another Palindrome | [CF](https://codeforces.com/problemset/problem/1324/B) | 1100 | Duplicate with gap | [ ] | |
| 35 | Ehab and Construction | [CF](https://codeforces.com/problemset/problem/1088/B) | 1100 | Constructive | [ ] | |
| 36 | Make Product Equal One | [CF](https://codeforces.com/problemset/problem/1206/B) | 1200 | Sign counting | [ ] | |
| 37 | Books | [CF](https://codeforces.com/problemset/problem/279/B) | 1400 | Two pointers | [ ] | |
| 38 | Good Subarrays | [CF](https://codeforces.com/problemset/problem/1398/C) | 1600 | Prefix sum (a[i]-1) | [ ] | |
| 39 | Pashmak and Flowers | [CF](https://codeforces.com/problemset/problem/459/B) | 1200 | Combinatorics | [ ] | |
| 40 | Ilya and Queries | [CF](https://codeforces.com/problemset/problem/313/B) | 1100 | Prefix sums | [ ] | |
| 41 | Longest Regular Bracket Seq | [CF](https://codeforces.com/problemset/problem/5/C) | 1900 | Stack + DP 🔥 | [ ] | |
| 42 | Playlist | [CF](https://codeforces.com/problemset/problem/1140/C) | 1500 | Sort + Greedy | [ ] | |
| 43 | Number of Ways | [CF](https://codeforces.com/problemset/problem/466/C) | 1700 | Prefix + suffix count | [ ] | |

> 💡 **CP Tricks:** Check edge cases (n=0,1,2) | Parity arguments | Read constraints for complexity | Prefix sums for range queries | Constructive = think what answer must satisfy

## 4.4 Advanced DP 🔥

| # | Problem | Link | Difficulty | Pattern | Status | Fav |
|---|---------|------|------------|---------|--------|-----|
| 44 | Longest Increasing Path in Matrix | [LeetCode](https://leetcode.com/problems/longest-increasing-path-in-a-matrix/) | Hard | DFS + Memo | [ ] | |
| 45 | Min Cost to Cut a Stick | [LeetCode](https://leetcode.com/problems/minimum-cost-to-cut-a-stick/) | Hard | Interval DP | [ ] | |
| 46 | Cherry Pickup | [LeetCode](https://leetcode.com/problems/cherry-pickup/) | Hard | 3D DP (two paths) | [ ] | |
| 47 | Cherry Pickup II | [LeetCode](https://leetcode.com/problems/cherry-pickup-ii/) | Hard | 3D DP (two robots) | [ ] | |
| 48 | Min Insertion for Palindrome | [LeetCode](https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/) | Hard | LCS with reverse | [ ] | |
| 49 | Super Egg Drop | [LeetCode](https://leetcode.com/problems/super-egg-drop/) | Hard | DP + BS 🔥🔥 | [ ] | |
| 50 | Frog Jump | [LeetCode](https://leetcode.com/problems/frog-jump/) | Hard | HashMap DP | [ ] | |
| 51 | Russian Doll Envelopes | [LeetCode](https://leetcode.com/problems/russian-doll-envelopes/) | Hard | Sort + LIS | [ ] | |
| 52 | Number of LIS | [LeetCode](https://leetcode.com/problems/number-of-longest-increasing-subsequence/) | Medium | LIS + count | [ ] | |
| 53 | Strange Printer | [LeetCode](https://leetcode.com/problems/strange-printer/) | Hard | Interval DP | [ ] | |
| 54 | Distinct Subsequences | [LeetCode](https://leetcode.com/problems/distinct-subsequences/) | Hard | 2D DP | [ ] | |
| 55 | Shortest Common Supersequence | [LeetCode](https://leetcode.com/problems/shortest-common-supersequence/) | Hard | LCS + Reconstruct | [ ] | |

## 4.5 Segment Trees & Advanced DS

| # | Problem | Link | Difficulty | Pattern | Status | Fav |
|---|---------|------|------------|---------|--------|-----|
| 56 | Range Sum Query Mutable | [LeetCode](https://leetcode.com/problems/range-sum-query-mutable/) | Medium | Segment Tree / BIT | [ ] | |
| 57 | Count Smaller After Self | [LeetCode](https://leetcode.com/problems/count-of-smaller-numbers-after-self/) | Hard | BIT / Merge Sort | [ ] | |
| 58 | Count of Range Sum | [LeetCode](https://leetcode.com/problems/count-of-range-sum/) | Hard | Merge Sort / BIT | [ ] | |
| 59 | Skyline Problem | [LeetCode](https://leetcode.com/problems/the-skyline-problem/) | Hard | Sweep + Max Heap | [ ] | |
| 60 | My Calendar I/II/III | [LeetCode](https://leetcode.com/problems/my-calendar-i/) | Med-Hard | Sweep / Segment Tree | [ ] | |

## 4.6 Advanced String Algorithms

| # | Problem | Link | Difficulty | Pattern | Status | Fav |
|---|---------|------|------------|---------|--------|-----|
| 61 | KMP Pattern Matching | [GFG](https://www.geeksforgeeks.org/problems/search-pattern-rabin-karp-algorithm4012/1) | Medium | Failure function | [ ] | |
| 62 | Longest Happy Prefix | [LeetCode](https://leetcode.com/problems/longest-happy-prefix/) | Hard | KMP LPS | [ ] | |
| 63 | Shortest Palindrome | [LeetCode](https://leetcode.com/problems/shortest-palindrome/) | Hard | KMP on s+"#"+rev(s) | [ ] | |
| 64 | Count Palindromic Subsequences | [LeetCode](https://leetcode.com/problems/count-different-palindromic-subsequences/) | Hard | Interval DP | [ ] | |
| 65 | Minimum Window Subsequence | [LeetCode](https://leetcode.com/problems/minimum-window-subsequence/) | Hard | Two pointers / DP | [ ] | |

---
---

# 🧠 PATTERN CHEAT SHEET

## Pattern Identification Flowchart
```
Subarray/Substring? → Fixed size: Fixed Window | Variable: Sliding Window | Sum=K: Prefix+Map | Exactly K: atMost(K)-atMost(K-1)
Pairs/Triplets? → Sorted: Two Pointers | Unsorted O(n): HashMap | All combos: Sort+TP
Next/Prev Greater/Smaller? → Monotonic Stack
Minimize max / Maximize min? → Binary Search on Answer
Shortest path? → Unweighted: BFS | Weighted+: Dijkstra | Negative: Bellman-Ford | All pairs: Floyd
Count ways / Optimal? → Overlapping subproblems: DP | Local=Global: Greedy
Connectivity? → Static: DFS/BFS | Dynamic: Union-Find
Trees? → Path: DFS return up | Level: BFS | BST: Inorder sorted
Generate all? → Backtracking
Intervals? → Merge: Sort by start | Max non-overlap: Sort by end | Range queries: Segment Tree
```

## Time Complexity Reference

| Technique | Time | Use When |
|-----------|------|----------|
| Two Pointers | O(n) | Sorted, pair finding |
| Sliding Window | O(n) | Subarray/substring constraint |
| Binary Search | O(log n) | Sorted/monotonic |
| BS on Answer | O(n log range) | Optimize min/max |
| HashMap | O(n) | Counting, pairs |
| Monotonic Stack | O(n) | Next/prev greater/smaller |
| BFS/DFS | O(V+E) | Graph traversal |
| Dijkstra | O(E log V) | Shortest path (positive) |
| Union-Find | O(α(n))/op | Dynamic connectivity |
| Segment Tree | O(log n) | Range queries + updates |
| DP (1D) | O(n) or O(nk) | Sequence optimization |
| DP (2D) | O(nm) | Two sequences |
| Backtracking | O(2^n) or O(n!) | All possibilities |

## Problem → Pattern Mapping

| Keywords | Pattern |
|----------|---------|
| "Contiguous subarray" | Sliding Window / Prefix Sum |
| "Sorted + target" | Binary Search / Two Pointers |
| "Minimize maximum" | BS on Answer |
| "Next greater" | Monotonic Stack |
| "Top K / Kth" | Heap |
| "Number of ways" | DP |
| "All possible" | Backtracking |
| "Connected components" | BFS/DFS / Union-Find |
| "Shortest path" | BFS / Dijkstra |
| "Level by level" | BFS |
| "Tree path" | DFS return values |
| "Intervals / Merge" | Sort + Sweep |
| "Parentheses" | Stack |
| "Subsequence" | DP (LIS/LCS) |
| "Palindrome" | Expand center / DP |

---
---

# 🏢 COMPANY-WISE QUESTIONS

## Google 🔥 (BS on Answer, Greedy proofs, Graph, DP optimizations)

| # | Problem | Link | Pattern | Freq | Status |
|---|---------|------|---------|------|--------|
| 1 | Median of Two Sorted Arrays | [LC](https://leetcode.com/problems/median-of-two-sorted-arrays/) | BS | ⭐⭐⭐ | [ ] |
| 2 | Trapping Rain Water | [LC](https://leetcode.com/problems/trapping-rain-water/) | Two Pointers | ⭐⭐⭐ | [ ] |
| 3 | Longest Increasing Path in Matrix | [LC](https://leetcode.com/problems/longest-increasing-path-in-a-matrix/) | DFS+Memo | ⭐⭐⭐ | [ ] |
| 4 | Word Ladder | [LC](https://leetcode.com/problems/word-ladder/) | BFS | ⭐⭐⭐ | [ ] |
| 5 | Split Array Largest Sum | [LC](https://leetcode.com/problems/split-array-largest-sum/) | BS Answer | ⭐⭐⭐ | [ ] |
| 6 | Burst Balloons | [LC](https://leetcode.com/problems/burst-balloons/) | Interval DP | ⭐⭐ | [ ] |
| 7 | Serialize/Deserialize BT | [LC](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/) | Tree | ⭐⭐⭐ | [ ] |
| 8 | Minimum Window Substring | [LC](https://leetcode.com/problems/minimum-window-substring/) | Sliding Window | ⭐⭐⭐ | [ ] |
| 9 | Koko Eating Bananas | [LC](https://leetcode.com/problems/koko-eating-bananas/) | BS Answer | ⭐⭐⭐ | [ ] |
| 10 | Snapshot Array | [LC](https://leetcode.com/problems/snapshot-array/) | Binary Search | ⭐⭐⭐ | [ ] |

## Amazon 🔥 (HashMap, Priority Queues, BFS/DFS grids, Sliding Window)

| # | Problem | Link | Pattern | Freq | Status |
|---|---------|------|---------|------|--------|
| 1 | LRU Cache | [LC](https://leetcode.com/problems/lru-cache/) | HashMap+DLL | ⭐⭐⭐ | [ ] |
| 2 | Number of Islands | [LC](https://leetcode.com/problems/number-of-islands/) | BFS/DFS | ⭐⭐⭐ | [ ] |
| 3 | Merge Intervals | [LC](https://leetcode.com/problems/merge-intervals/) | Sort+Merge | ⭐⭐⭐ | [ ] |
| 4 | Two Sum | [LC](https://leetcode.com/problems/two-sum/) | HashMap | ⭐⭐⭐ | [ ] |
| 5 | Top K Frequent Elements | [LC](https://leetcode.com/problems/top-k-frequent-elements/) | Heap | ⭐⭐⭐ | [ ] |
| 6 | Rotting Oranges | [LC](https://leetcode.com/problems/rotting-oranges/) | Multi-BFS | ⭐⭐⭐ | [ ] |
| 7 | K Closest Points | [LC](https://leetcode.com/problems/k-closest-points-to-origin/) | Heap | ⭐⭐⭐ | [ ] |
| 8 | Meeting Rooms II | [LC](https://leetcode.com/problems/meeting-rooms-ii/) | Heap/Sweep | ⭐⭐⭐ | [ ] |
| 9 | Word Break | [LC](https://leetcode.com/problems/word-break/) | DP | ⭐⭐⭐ | [ ] |
| 10 | Copy List with Random Pointer | [LC](https://leetcode.com/problems/copy-list-with-random-pointer/) | HashMap | ⭐⭐⭐ | [ ] |

## Microsoft (Strings, Trees, DP, Matrix)

| # | Problem | Link | Pattern | Freq | Status |
|---|---------|------|---------|------|--------|
| 1 | Add Two Numbers | [LC](https://leetcode.com/problems/add-two-numbers/) | Linked List | ⭐⭐⭐ | [ ] |
| 2 | Longest Substring No Repeat | [LC](https://leetcode.com/problems/longest-substring-without-repeating-characters/) | Sliding Window | ⭐⭐⭐ | [ ] |
| 3 | Group Anagrams | [LC](https://leetcode.com/problems/group-anagrams/) | HashMap | ⭐⭐⭐ | [ ] |
| 4 | Validate BST | [LC](https://leetcode.com/problems/validate-binary-search-tree/) | DFS+Range | ⭐⭐⭐ | [ ] |
| 5 | LCA of Binary Tree | [LC](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/) | DFS | ⭐⭐⭐ | [ ] |

## DE Shaw / Quant (Math, CP-style, Observations)

| # | Problem | Link | Pattern | Status |
|---|---------|------|---------|--------|
| 1 | Super Egg Drop | [LC](https://leetcode.com/problems/super-egg-drop/) | DP+BS | [ ] |
| 2 | Maximum XOR of Two Numbers | [LC](https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/) | Bit Trie | [ ] |
| 3 | Russian Doll Envelopes | [LC](https://leetcode.com/problems/russian-doll-envelopes/) | Sort+LIS | [ ] |
| 4 | Skyline Problem | [LC](https://leetcode.com/problems/the-skyline-problem/) | Sweep+Heap | [ ] |
| 5 | Regular Expression Matching | [LC](https://leetcode.com/problems/regular-expression-matching/) | 2D DP | [ ] |

---

## 🔥 OA Tips
```
1. Read ALL problems first — start easiest
2. Brute force FIRST for partial marks
3. Edge cases: empty, single element, overflow, k=0, negatives
4. Time management: max 20 min per problem
5. Common traps: integer overflow, off-by-one in BS, forgetting to sort, disconnected graph
```

## 📊 Priority Order (Your Profile: MNNIT → Amazon → Google-level)
```
HIGH: BS on Answer, Sliding Window, Graph BFS/DFS, DP (Knapsack/LIS/LCS), Monotonic Stack, Two Pointers
MED: Heaps, Backtracking, Greedy, Trees, Union-Find
DAILY: 2 Codeforces problems + Edge case practice + Speed coding
```

---

## 🔥 CP Quick Tricks Reference
```
1. Binary Search on Answer: "Minimize the maximum" / "Maximize the minimum"
2. Contribution Technique: Count how many subarrays each element contributes to
3. Prefix Sum/XOR: O(1) range queries after O(n) preprocess
4. Monotonic Stack: Next Greater/Smaller in O(n)
5. "Exactly K" = atMost(K) - atMost(K-1)
6. Meet in the Middle: Split in half when n ≤ 40
7. Bitmask DP: When n ≤ 20
8. Line Sweep: Interval problems, event processing
9. Coordinate Compression: Map large values to small indices
10. Matrix Exponentiation: Linear recurrences in O(log n)
```

---
**Created by Mallika | MNNIT Allahabad | Amazon SDE Intern**
**Sources: Striver's A2Z + Neetcode 150 + Codeforces + LeetCode Premium**
