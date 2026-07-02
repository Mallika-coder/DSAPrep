# Phase 1: Foundations

**Duration:** Week 1-2 | **Goal:** Build strong base in arrays, strings, sorting, and binary search

---

## 1.1 Arrays — Basics & Manipulation

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

### 🔑 Key Insights — Arrays Basics
```
- Two Sum: Use HashMap to store complement. O(n) time.
- Kadane's: Track current_max and global_max. Reset current_max if it goes negative.
- Product Except Self: Use prefix product from left, suffix product from right. No division needed.
- Rotated Array: The key is finding which half is sorted using mid comparison.
- 3Sum: Sort first, then fix one element and use two pointers for remaining.
```

---

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

### 🔑 Key Insights — Arrays Intermediate
```
- Next Permutation: Find first decreasing from right, swap with just larger, reverse suffix.
- Trapping Rain Water: At each position, water = min(leftMax, rightMax) - height[i].
- Subarray Sum = K: prefix[j] - prefix[i] = k → store prefix sums in map.
- First Missing Positive: Place each number at its correct index (cyclic sort).
- Longest Consecutive: Start chains only from numbers where num-1 doesn't exist in set.
```

---

## 1.3 Strings — Core

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

### 🔑 Key Insights — Strings
```
- Sliding Window: Expand right, shrink left when condition breaks. Track window state.
- Minimum Window Substring: Two pointers + frequency map. Shrink when all chars found.
- Longest Repeating Replacement: Window valid when (windowLen - maxFreq) <= k.
- KMP: Build failure function (LPS array). Never re-check matched characters.
- Expand from Center: For palindromes, try both odd and even length centers.
```

---

## 1.4 Sorting Algorithms & Problems

| # | Problem | Link | Difficulty | Pattern | Status | Fav |
|---|---------|------|------------|---------|--------|-----|
| 41 | Sort Colors (Dutch National Flag) | [LeetCode](https://leetcode.com/problems/sort-colors/) | Medium | Three pointers | [ ] | |
| 42 | Merge Sorted Array | [LeetCode](https://leetcode.com/problems/merge-sorted-array/) | Easy | Two pointers from end | [ ] | |
| 43 | Sort an Array (implement Merge Sort) | [LeetCode](https://leetcode.com/problems/sort-an-array/) | Medium | Divide & Conquer | [ ] | |
| 44 | Kth Largest Element | [LeetCode](https://leetcode.com/problems/kth-largest-element-in-an-array/) | Medium | QuickSelect / Heap | [ ] | |
| 45 | Top K Frequent Elements | [LeetCode](https://leetcode.com/problems/top-k-frequent-elements/) | Medium | Bucket Sort / Heap | [ ] | |
| 46 | Largest Number | [LeetCode](https://leetcode.com/problems/largest-number/) | Medium | Custom comparator | [ ] | |
| 47 | Count Inversions | [GFG](https://www.geeksforgeeks.org/problems/inversion-of-array-1587115620/1) | Hard | Merge Sort modification | [ ] | |
| 48 | Wiggle Sort II | [LeetCode](https://leetcode.com/problems/wiggle-sort-ii/) | Medium | Find median + 3-way partition | [ ] | |

### 🔑 Key Insights — Sorting
```
- Dutch National Flag: Three pointers (low, mid, high). Process mid pointer.
- QuickSelect: Average O(n) to find kth element. Partition around pivot.
- Count Inversions: During merge step, when right element is picked, inversions += remaining left elements.
- Custom Comparator: For "Largest Number", compare a+b vs b+a as strings.
```

---

## 1.5 Binary Search — Master This 🔥

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
| 59 | Aggressive Cows (SPOJ) | [GFG](https://www.geeksforgeeks.org/problems/aggressive-cows/1) | Hard | BS on Answer | [ ] | |
| 60 | Allocate Minimum Pages | [GFG](https://www.geeksforgeeks.org/problems/allocate-minimum-number-of-pages0937/1) | Hard | BS on Answer | [ ] | |
| 61 | Median of Two Sorted Arrays | [LeetCode](https://leetcode.com/problems/median-of-two-sorted-arrays/) | Hard | BS on partition | [ ] | |
| 62 | Find Kth Element of Two Sorted Arrays | [GFG](https://www.geeksforgeeks.org/problems/k-th-element-of-two-sorted-array1317/1) | Hard | BS on partition | [ ] | |
| 63 | Search in 2D Matrix | [LeetCode](https://leetcode.com/problems/search-a-2d-matrix/) | Medium | Treat as 1D sorted | [ ] | |
| 64 | Search a 2D Matrix II | [LeetCode](https://leetcode.com/problems/search-a-2d-matrix-ii/) | Medium | Staircase search | [ ] | |

### 🔑 Key Insights — Binary Search
```
- BS on Answer: When you need to "minimize the maximum" or "maximize the minimum",
  binary search on the answer space and check feasibility.
- Template: lo = min_possible, hi = max_possible
  while lo < hi:
    mid = (lo + hi) // 2
    if feasible(mid): hi = mid
    else: lo = mid + 1
  return lo
- Median of Two Arrays: Binary search on smaller array, partition both arrays.
  Ensure maxLeft1 <= minRight2 and maxLeft2 <= minRight1.
- Rotated Array with duplicates: When nums[lo] == nums[mid] == nums[hi], shrink both ends.
- Peak Element: If nums[mid] < nums[mid+1], peak is on right side.
```

---

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

---

## 1.7 Bonus: Interview Favorites from Phase 1 🏢🔥

| # | Problem | Link | Company | Pattern | Status | Fav |
|---|---------|------|---------|---------|--------|-----|
| 73 | Trapping Rain Water | [LeetCode](https://leetcode.com/problems/trapping-rain-water/) | Google, Amazon | Two Pointers | [ ] | |
| 74 | Median of Two Sorted Arrays | [LeetCode](https://leetcode.com/problems/median-of-two-sorted-arrays/) | Google, Goldman | Binary Search | [ ] | |
| 75 | First Missing Positive | [LeetCode](https://leetcode.com/problems/first-missing-positive/) | Amazon, Microsoft | Cyclic Sort | [ ] | |
| 76 | Next Permutation | [LeetCode](https://leetcode.com/problems/next-permutation/) | Google, Amazon | Observation | [ ] | |
| 77 | Subarray Sum = K | [LeetCode](https://leetcode.com/problems/subarray-sum-equals-k/) | Facebook, Amazon | Prefix Sum | [ ] | |
| 78 | Merge Intervals | [LeetCode](https://leetcode.com/problems/merge-intervals/) | Google, Amazon, FB | Sort + Merge | [ ] | |
| 79 | Koko Eating Bananas | [LeetCode](https://leetcode.com/problems/koko-eating-bananas/) | Google, Amazon | BS on Answer | [ ] | |
| 80 | Split Array Largest Sum | [LeetCode](https://leetcode.com/problems/split-array-largest-sum/) | Google, Amazon | BS on Answer | [ ] | |

---

## ✅ Phase 1 Completion Checklist

- [ ] Can implement Binary Search (all variants) without thinking
- [ ] Can identify "BS on Answer" problems within 2 minutes
- [ ] Comfortable with prefix sum + hashmap pattern
- [ ] Can solve any sliding window problem
- [ ] Know when to use sorting as a preprocessing step
- [ ] Edge cases are second nature (empty, single, overflow, duplicates)
