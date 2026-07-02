# Phase 2: Core Patterns

**Duration:** Week 2-3 | **Goal:** Master the fundamental patterns that solve 60% of interview problems

---

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

### 🔑 Key Insights — Two Pointers
```
- When array is sorted (or can be sorted): use two pointers from ends
- For "find pair/triplet with target": sort + two pointers
- For in-place modifications: slow pointer = write position, fast = read position
- Trapping Rain Water: maintain leftMax and rightMax, process the smaller side
```

---

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

### 🔑 Key Insights — Sliding Window
```
- Fixed Window: Size known → slide window, update answer at each step
- Variable Window: Expand right, shrink left when constraint violated
- "Exactly K" trick: exactly(k) = atMost(k) - atMost(k-1)
- Monotonic Deque: For sliding window max/min, maintain decreasing/increasing deque
- Template:
  left = 0
  for right in range(n):
      # add arr[right] to window
      while window_invalid:
          # remove arr[left] from window
          left += 1
      # update answer
```

---

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

### 🔑 Key Insights — Stack
```
- Monotonic Stack: Use when you need "next/previous greater/smaller element"
- Decreasing stack → finds next GREATER element
- Increasing stack → finds next SMALLER element
- Largest Rectangle: For each bar, find how far it can extend left and right
  using previous smaller and next smaller elements.
- "Sum of subarray mins/maxs": use contribution technique with monotonic stack
- Template (Next Greater):
  stack = []
  for i in range(n-1, -1, -1):
      while stack and stack[-1] <= arr[i]:
          stack.pop()
      result[i] = stack[-1] if stack else -1
      stack.append(arr[i])
```

---

## 2.4 Queue & Deque

| # | Problem | Link | Difficulty | Pattern | Status | Fav |
|---|---------|------|------------|---------|--------|-----|
| 37 | Sliding Window Maximum | [LeetCode](https://leetcode.com/problems/sliding-window-maximum/) | Hard | Monotonic Deque | [ ] | |
| 38 | Design Circular Queue | [LeetCode](https://leetcode.com/problems/design-circular-queue/) | Medium | Array-based circular | [ ] | |
| 39 | Shortest Subarray with Sum >= K | [LeetCode](https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/) | Hard | Deque + Prefix Sum 🔥 | [ ] | |
| 40 | First Negative in Every Window of Size K | [GFG](https://www.geeksforgeeks.org/problems/first-negative-integer-in-every-window-of-size-k3345/1) | Medium | Deque | [ ] | |

---

## 2.5 Linked List

| # | Problem | Link | Difficulty | Pattern | Status | Fav |
|---|---------|------|------------|---------|--------|-----|
| 41 | Reverse Linked List | [LeetCode](https://leetcode.com/problems/reverse-linked-list/) | Easy | Iterative/Recursive | [ ] | |
| 42 | Reverse Linked List II (range) | [LeetCode](https://leetcode.com/problems/reverse-linked-list-ii/) | Medium | Track prev of range | [ ] | |
| 43 | Linked List Cycle | [LeetCode](https://leetcode.com/problems/linked-list-cycle/) | Easy | Fast-Slow (Floyd's) | [ ] | |
| 44 | Linked List Cycle II (find start) | [LeetCode](https://leetcode.com/problems/linked-list-cycle-ii/) | Medium | Floyd's algorithm | [ ] | |
| 45 | Merge Two Sorted Lists | [LeetCode](https://leetcode.com/problems/merge-two-sorted-lists/) | Easy | Dummy head + merge | [ ] | |
| 46 | Merge K Sorted Lists | [LeetCode](https://leetcode.com/problems/merge-k-sorted-lists/) | Hard | Min Heap / Divide & Conquer | [ ] | |
| 47 | Remove Nth Node From End | [LeetCode](https://leetcode.com/problems/remove-nth-node-from-end-of-list/) | Medium | Two pointers (gap of n) | [ ] | |
| 48 | Reorder List | [LeetCode](https://leetcode.com/problems/reorder-list/) | Medium | Find mid + Reverse + Merge | [ ] | |
| 49 | Add Two Numbers | [LeetCode](https://leetcode.com/problems/add-two-numbers/) | Medium | Carry simulation | [ ] | |
| 50 | Copy List with Random Pointer | [LeetCode](https://leetcode.com/problems/copy-list-with-random-pointer/) | Medium | HashMap / Interleave trick | [ ] | |
| 51 | LRU Cache | [LeetCode](https://leetcode.com/problems/lru-cache/) | Medium | HashMap + Doubly LL 🔥 | [ ] | |
| 52 | Flatten a Multilevel Doubly Linked List | [LeetCode](https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/) | Medium | Stack / Recursion | [ ] | |
| 53 | Palindrome Linked List | [LeetCode](https://leetcode.com/problems/palindrome-linked-list/) | Easy | Find mid + reverse second half | [ ] | |
| 54 | Intersection of Two Linked Lists | [LeetCode](https://leetcode.com/problems/intersection-of-two-linked-lists/) | Easy | Length diff / Two pointer trick | [ ] | |
| 55 | Sort List | [LeetCode](https://leetcode.com/problems/sort-list/) | Medium | Merge Sort on LL | [ ] | |

### 🔑 Key Insights — Linked List
```
- Floyd's Cycle Detection: slow moves 1 step, fast moves 2 steps. They meet inside cycle.
  To find cycle start: reset one to head, both move 1 step until they meet.
- Reverse: prev = None, curr.next = prev, shift all three pointers
- Find Middle: slow-fast pointer. When fast reaches end, slow is at middle.
- Reorder: Split at middle → Reverse second half → Merge alternately
- LRU Cache: HashMap (key → node) + Doubly Linked List (for O(1) remove/add)
```

---

## 2.6 Recursion & Backtracking

| # | Problem | Link | Difficulty | Pattern | Status | Fav |
|---|---------|------|------------|---------|--------|-----|
| 56 | Subsets | [LeetCode](https://leetcode.com/problems/subsets/) | Medium | Include/Exclude | [ ] | |
| 57 | Subsets II (with duplicates) | [LeetCode](https://leetcode.com/problems/subsets-ii/) | Medium | Sort + Skip duplicates | [ ] | |
| 58 | Permutations | [LeetCode](https://leetcode.com/problems/permutations/) | Medium | Swap / Visited array | [ ] | |
| 59 | Permutations II (duplicates) | [LeetCode](https://leetcode.com/problems/permutations-ii/) | Medium | Sort + skip same level | [ ] | |
| 60 | Combination Sum | [LeetCode](https://leetcode.com/problems/combination-sum/) | Medium | Unlimited picks, start from i | [ ] | |
| 61 | Combination Sum II | [LeetCode](https://leetcode.com/problems/combination-sum-ii/) | Medium | Each element once, skip dupes | [ ] | |
| 62 | Palindrome Partitioning | [LeetCode](https://leetcode.com/problems/palindrome-partitioning/) | Medium | Backtrack + isPalindrome check | [ ] | |
| 63 | N-Queens | [LeetCode](https://leetcode.com/problems/n-queens/) | Hard | Col + Diag + Anti-diag sets | [ ] | |
| 64 | Sudoku Solver | [LeetCode](https://leetcode.com/problems/sudoku-solver/) | Hard | Backtrack + constraint sets | [ ] | |
| 65 | Word Search | [LeetCode](https://leetcode.com/problems/word-search/) | Medium | DFS + visited marking | [ ] | |
| 66 | Letter Combinations of Phone | [LeetCode](https://leetcode.com/problems/letter-combinations-of-a-phone-number/) | Medium | Backtrack with mapping | [ ] | |
| 67 | Generate Parentheses | [LeetCode](https://leetcode.com/problems/generate-parentheses/) | Medium | open < n, close < open | [ ] | |
| 68 | Rat in a Maze | [GFG](https://www.geeksforgeeks.org/problems/rat-in-a-maze-problem/1) | Medium | DFS + visited | [ ] | |
| 69 | Word Break (backtrack + memo) | [LeetCode](https://leetcode.com/problems/word-break/) | Medium | DP / Backtrack + Memo | [ ] | |
| 70 | Expression Add Operators | [LeetCode](https://leetcode.com/problems/expression-add-operators/) | Hard | Backtrack + track prev operand | [ ] | |

### 🔑 Key Insights — Recursion & Backtracking
```
- Subsets: At each index, choose to include or exclude. Base case: index == n.
- Permutations: Use visited array or swap approach.
- Handle Duplicates: Sort first, then skip if arr[i] == arr[i-1] and i-1 not used at same level.
- N-Queens: Track columns, diagonals (row-col), anti-diagonals (row+col) using sets.
- Backtracking Template:
  def backtrack(state, choices):
      if goal_reached(state):
          result.append(state.copy())
          return
      for choice in choices:
          if valid(choice):
              make(choice)
              backtrack(new_state, remaining_choices)
              undo(choice)  # BACKTRACK
```

---

## 2.7 Bonus: Tricky Interview Problems from Phase 2 🏢🔥

| # | Problem | Link | Company | Pattern | Status | Fav |
|---|---------|------|---------|---------|--------|-----|
| 71 | LRU Cache | [LeetCode](https://leetcode.com/problems/lru-cache/) | Amazon, Google, FB | HashMap + DLL | [ ] | |
| 72 | Largest Rectangle in Histogram | [LeetCode](https://leetcode.com/problems/largest-rectangle-in-histogram/) | Google, Amazon | Monotonic Stack | [ ] | |
| 73 | Sliding Window Maximum | [LeetCode](https://leetcode.com/problems/sliding-window-maximum/) | Google, Amazon | Monotonic Deque | [ ] | |
| 74 | Minimum Window Substring | [LeetCode](https://leetcode.com/problems/minimum-window-substring/) | FB, Google, Amazon | Sliding Window | [ ] | |
| 75 | N-Queens | [LeetCode](https://leetcode.com/problems/n-queens/) | Google, Amazon | Backtracking | [ ] | |
| 76 | Merge K Sorted Lists | [LeetCode](https://leetcode.com/problems/merge-k-sorted-lists/) | Amazon, Google | Heap/D&C | [ ] | |
| 77 | Sum of Subarray Minimums | [LeetCode](https://leetcode.com/problems/sum-of-subarray-minimums/) | Amazon, Google | Monotonic Stack | [ ] | |
| 78 | Remove K Digits | [LeetCode](https://leetcode.com/problems/remove-k-digits/) | Amazon, Microsoft | Monotonic Stack | [ ] | |
| 79 | Subarrays with K Different Integers | [LeetCode](https://leetcode.com/problems/subarrays-with-k-different-integers/) | Google | Sliding Window | [ ] | |
| 80 | Copy List with Random Pointer | [LeetCode](https://leetcode.com/problems/copy-list-with-random-pointer/) | Amazon, FB | HashMap/Interleave | [ ] | |

---

## ✅ Phase 2 Completion Checklist

- [ ] Can identify Two Pointer vs Sliding Window in under 1 minute
- [ ] Monotonic Stack pattern is automatic (next greater/smaller)
- [ ] Can implement LRU Cache from scratch
- [ ] Backtracking template is memorized — handle duplicates confidently
- [ ] Linked List manipulations (reverse, merge, find cycle) are second nature
- [ ] Can solve any "exactly K" sliding window using atMost trick
