# Phase 3: Advanced DSA

**Duration:** Week 3-4 | **Goal:** Master Trees, Graphs, Dynamic Programming, Greedy, and Heaps

---

## 3.1 Binary Trees — Traversals & Core

| # | Problem | Link | Difficulty | Pattern | Status | Fav |
|---|---------|------|------------|---------|--------|-----|
| 1 | Inorder Traversal (Iterative) | [LeetCode](https://leetcode.com/problems/binary-tree-inorder-traversal/) | Easy | Stack-based | [ ] | |
| 2 | Preorder Traversal (Iterative) | [LeetCode](https://leetcode.com/problems/binary-tree-preorder-traversal/) | Easy | Stack-based | [ ] | |
| 3 | Postorder Traversal (Iterative) | [LeetCode](https://leetcode.com/problems/binary-tree-postorder-traversal/) | Easy | Two stacks / Modified preorder | [ ] | |
| 4 | Level Order Traversal | [LeetCode](https://leetcode.com/problems/binary-tree-level-order-traversal/) | Medium | BFS Queue | [ ] | |
| 5 | Zigzag Level Order | [LeetCode](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/) | Medium | BFS + alternate direction | [ ] | |
| 6 | Maximum Depth of Binary Tree | [LeetCode](https://leetcode.com/problems/maximum-depth-of-binary-tree/) | Easy | DFS recursion | [ ] | |
| 7 | Balanced Binary Tree | [LeetCode](https://leetcode.com/problems/balanced-binary-tree/) | Easy | DFS + height check | [ ] | |
| 8 | Diameter of Binary Tree | [LeetCode](https://leetcode.com/problems/diameter-of-binary-tree/) | Easy | DFS, track max path through node | [ ] | |
| 9 | Same Tree | [LeetCode](https://leetcode.com/problems/same-tree/) | Easy | Recursive comparison | [ ] | |
| 10 | Symmetric Tree | [LeetCode](https://leetcode.com/problems/symmetric-tree/) | Easy | Mirror check | [ ] | |
| 11 | Invert Binary Tree | [LeetCode](https://leetcode.com/problems/invert-binary-tree/) | Easy | Swap children recursively | [ ] | |
| 12 | Maximum Path Sum | [LeetCode](https://leetcode.com/problems/binary-tree-maximum-path-sum/) | Hard | DFS, update global max 🔥 | [ ] | |
| 13 | Lowest Common Ancestor | [LeetCode](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/) | Medium | DFS, return found nodes up | [ ] | |
| 14 | Binary Tree Right Side View | [LeetCode](https://leetcode.com/problems/binary-tree-right-side-view/) | Medium | BFS (last of each level) | [ ] | |
| 15 | Vertical Order Traversal | [LeetCode](https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/) | Hard | BFS + column tracking | [ ] | |
| 16 | Top/Bottom View of Binary Tree | [GFG](https://www.geeksforgeeks.org/problems/top-view-of-binary-tree/1) | Medium | BFS + horizontal distance | [ ] | |
| 17 | Serialize and Deserialize Binary Tree | [LeetCode](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/) | Hard | Preorder with nulls 🔥 | [ ] | |
| 18 | Construct BT from Inorder & Preorder | [LeetCode](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/) | Medium | Recursive partition | [ ] | |
| 19 | Flatten BT to Linked List | [LeetCode](https://leetcode.com/problems/flatten-binary-tree-to-linked-list/) | Medium | Morris / Reverse postorder | [ ] | |
| 20 | Count Complete Tree Nodes | [LeetCode](https://leetcode.com/problems/count-complete-tree-nodes/) | Medium | Binary search on last level | [ ] | |

### 🔑 Key Insights — Binary Trees
```
- Most tree problems: think DFS (recursive) first, return info UP from children
- Diameter/Path Sum: at each node, combine left + right paths, update global
- LCA: if both left and right return non-null, current node is LCA
- Serialize: Use preorder, represent null as "#". Deserialize using queue/index.
- Vertical/View problems: Track column/row with BFS, use HashMap
```

---

## 3.2 Binary Search Trees (BST)

| # | Problem | Link | Difficulty | Pattern | Status | Fav |
|---|---------|------|------------|---------|--------|-----|
| 21 | Validate BST | [LeetCode](https://leetcode.com/problems/validate-binary-search-tree/) | Medium | Inorder / Range check | [ ] | |
| 22 | Kth Smallest in BST | [LeetCode](https://leetcode.com/problems/kth-smallest-element-in-a-bst/) | Medium | Inorder traversal | [ ] | |
| 23 | LCA of BST | [LeetCode](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/) | Medium | Use BST property | [ ] | |
| 24 | Convert Sorted Array to BST | [LeetCode](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/) | Easy | Mid as root recursively | [ ] | |
| 25 | Delete Node in BST | [LeetCode](https://leetcode.com/problems/delete-node-in-a-bst/) | Medium | Find successor/predecessor | [ ] | |
| 26 | Inorder Successor in BST | [LeetCode](https://leetcode.com/problems/inorder-successor-in-bst/) | Medium | BST property traversal | [ ] | |
| 27 | Two Sum in BST | [LeetCode](https://leetcode.com/problems/two-sum-iv-input-is-a-bst/) | Easy | Inorder + Two Pointers | [ ] | |

---

## 3.3 Heaps / Priority Queue

| # | Problem | Link | Difficulty | Pattern | Status | Fav |
|---|---------|------|------------|---------|--------|-----|
| 28 | Kth Largest Element | [LeetCode](https://leetcode.com/problems/kth-largest-element-in-an-array/) | Medium | Min-Heap of size K | [ ] | |
| 29 | Top K Frequent Elements | [LeetCode](https://leetcode.com/problems/top-k-frequent-elements/) | Medium | Heap / Bucket Sort | [ ] | |
| 30 | Find Median from Data Stream | [LeetCode](https://leetcode.com/problems/find-median-from-data-stream/) | Hard | Two heaps (max + min) 🔥 | [ ] | |
| 31 | Merge K Sorted Lists | [LeetCode](https://leetcode.com/problems/merge-k-sorted-lists/) | Hard | Min Heap | [ ] | |
| 32 | Task Scheduler | [LeetCode](https://leetcode.com/problems/task-scheduler/) | Medium | Max Heap + Cooldown | [ ] | |
| 33 | Reorganize String | [LeetCode](https://leetcode.com/problems/reorganize-string/) | Medium | Max Heap (place most frequent) | [ ] | |
| 34 | K Closest Points to Origin | [LeetCode](https://leetcode.com/problems/k-closest-points-to-origin/) | Medium | Max Heap of size K | [ ] | |
| 35 | Ugly Number II | [LeetCode](https://leetcode.com/problems/ugly-number-ii/) | Medium | Min Heap / DP | [ ] | |
| 36 | IPO (Maximize Capital) | [LeetCode](https://leetcode.com/problems/ipo/) | Hard | Two heaps (sort + greedily pick) | [ ] | |
| 37 | Smallest Range Covering K Lists | [LeetCode](https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/) | Hard | Min Heap + track max | [ ] | |

### 🔑 Key Insights — Heaps
```
- "Kth largest/smallest": Use heap of size K (min-heap for kth largest, max-heap for kth smallest)
- "Find Median": Max-heap for lower half, min-heap for upper half. Balance sizes.
- "Merge K things": Min-heap with (value, list_index, element_index)
- Task Scheduler: Greedy — always schedule the most frequent task first, use cooldown queue
```

---

## 3.4 Graphs — BFS, DFS, Core Problems

| # | Problem | Link | Difficulty | Pattern | Status | Fav |
|---|---------|------|------------|---------|--------|-----|
| 38 | Number of Islands | [LeetCode](https://leetcode.com/problems/number-of-islands/) | Medium | BFS/DFS flood fill | [ ] | |
| 39 | Clone Graph | [LeetCode](https://leetcode.com/problems/clone-graph/) | Medium | BFS/DFS + HashMap | [ ] | |
| 40 | Course Schedule (Cycle Detection) | [LeetCode](https://leetcode.com/problems/course-schedule/) | Medium | Topological Sort / DFS | [ ] | |
| 41 | Course Schedule II (Topo Order) | [LeetCode](https://leetcode.com/problems/course-schedule-ii/) | Medium | Kahn's BFS | [ ] | |
| 42 | Pacific Atlantic Water Flow | [LeetCode](https://leetcode.com/problems/pacific-atlantic-water-flow/) | Medium | Multi-source BFS from borders | [ ] | |
| 43 | Rotting Oranges | [LeetCode](https://leetcode.com/problems/rotting-oranges/) | Medium | Multi-source BFS | [ ] | |
| 44 | 01 Matrix | [LeetCode](https://leetcode.com/problems/01-matrix/) | Medium | Multi-source BFS | [ ] | |
| 45 | Surrounded Regions | [LeetCode](https://leetcode.com/problems/surrounded-regions/) | Medium | DFS from boundary | [ ] | |
| 46 | Number of Connected Components | [LeetCode](https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/) | Medium | DFS/BFS/Union-Find | [ ] | |
| 47 | Graph Valid Tree | [LeetCode](https://leetcode.com/problems/graph-valid-tree/) | Medium | n-1 edges + connected | [ ] | |
| 48 | Word Ladder | [LeetCode](https://leetcode.com/problems/word-ladder/) | Hard | BFS level by level 🔥 | [ ] | |
| 49 | Alien Dictionary | [LeetCode](https://leetcode.com/problems/alien-dictionary/) | Hard | Topological Sort | [ ] | |
| 50 | Shortest Path in Binary Matrix | [LeetCode](https://leetcode.com/problems/shortest-path-in-binary-matrix/) | Medium | BFS | [ ] | |
| 51 | Is Graph Bipartite? | [LeetCode](https://leetcode.com/problems/is-graph-bipartite/) | Medium | 2-coloring BFS/DFS | [ ] | |
| 52 | Detect Cycle in Undirected Graph | [GFG](https://www.geeksforgeeks.org/problems/detect-cycle-in-an-undirected-graph/1) | Medium | BFS/DFS parent tracking | [ ] | |

---

## 3.5 Graphs — Shortest Path & Advanced

| # | Problem | Link | Difficulty | Pattern | Status | Fav |
|---|---------|------|------------|---------|--------|-----|
| 53 | Dijkstra's Algorithm | [GFG](https://www.geeksforgeeks.org/problems/implementing-dijkstra-set-1-adjacency-matrix/1) | Medium | Min-Heap + relaxation | [ ] | |
| 54 | Network Delay Time | [LeetCode](https://leetcode.com/problems/network-delay-time/) | Medium | Dijkstra | [ ] | |
| 55 | Cheapest Flights Within K Stops | [LeetCode](https://leetcode.com/problems/cheapest-flights-within-k-stops/) | Medium | BFS / Bellman-Ford | [ ] | |
| 56 | Path with Minimum Effort | [LeetCode](https://leetcode.com/problems/path-with-minimum-effort/) | Medium | Dijkstra on grid / BS + BFS | [ ] | |
| 57 | Swim in Rising Water | [LeetCode](https://leetcode.com/problems/swim-in-rising-water/) | Hard | Dijkstra / BS + BFS | [ ] | |
| 58 | Bellman-Ford Algorithm | [GFG](https://www.geeksforgeeks.org/problems/distance-from-the-source-bellman-ford-algorithm/1) | Medium | Relax all edges V-1 times | [ ] | |
| 59 | Floyd-Warshall (All Pairs) | [GFG](https://www.geeksforgeeks.org/problems/implementing-floyd-warshall2042/1) | Medium | DP on intermediate nodes | [ ] | |
| 60 | Minimum Spanning Tree (Prim/Kruskal) | [GFG](https://www.geeksforgeeks.org/problems/minimum-spanning-tree/1) | Medium | Greedy + Union-Find/Heap | [ ] | |
| 61 | Critical Connections (Bridges) | [LeetCode](https://leetcode.com/problems/critical-connections-in-a-network/) | Hard | Tarjan's Algorithm 🔥 | [ ] | |
| 62 | Strongly Connected Components | [GFG](https://www.geeksforgeeks.org/problems/strongly-connected-components-kosarajus-algo/1) | Hard | Kosaraju's / Tarjan's | [ ] | |

### 🔑 Key Insights — Graphs
```
- BFS: Shortest path in unweighted graphs. Level-order. Use queue.
- DFS: Cycle detection, connected components, topological sort.
- Multi-source BFS: Add ALL sources to queue initially (rotting oranges, 01 matrix).
- Dijkstra: Shortest path with non-negative weights. Use min-heap. O(E log V).
- Bellman-Ford: Handles negative weights. Relax all edges V-1 times.
- Topological Sort: DAG only. Kahn's (BFS with in-degree) or DFS with finish order.
- Union-Find: For dynamic connectivity, MST (Kruskal's).
- Tarjan's: Find bridges/articulation points. Track discovery time and low-link values.
```

---

## 3.6 Tries

| # | Problem | Link | Difficulty | Pattern | Status | Fav |
|---|---------|------|------------|---------|--------|-----|
| 63 | Implement Trie (Prefix Tree) | [LeetCode](https://leetcode.com/problems/implement-trie-prefix-tree/) | Medium | Basic Trie | [ ] | |
| 64 | Design Add and Search Words | [LeetCode](https://leetcode.com/problems/design-add-and-search-words-data-structure/) | Medium | Trie + DFS for '.' | [ ] | |
| 65 | Word Search II | [LeetCode](https://leetcode.com/problems/word-search-ii/) | Hard | Trie + Backtracking 🔥 | [ ] | |
| 66 | Maximum XOR of Two Numbers | [LeetCode](https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/) | Medium | Bit Trie | [ ] | |

---

## 3.7 Dynamic Programming — Core Patterns

| # | Problem | Link | Difficulty | Pattern | Status | Fav |
|---|---------|------|------------|---------|--------|-----|
| 67 | Climbing Stairs | [LeetCode](https://leetcode.com/problems/climbing-stairs/) | Easy | 1D DP (Fibonacci) | [ ] | |
| 68 | House Robber | [LeetCode](https://leetcode.com/problems/house-robber/) | Medium | 1D DP (take/skip) | [ ] | |
| 69 | House Robber II (Circular) | [LeetCode](https://leetcode.com/problems/house-robber-ii/) | Medium | Two passes | [ ] | |
| 70 | Coin Change | [LeetCode](https://leetcode.com/problems/coin-change/) | Medium | Unbounded Knapsack | [ ] | |
| 71 | Coin Change II (Count ways) | [LeetCode](https://leetcode.com/problems/coin-change-ii/) | Medium | Unbounded Knapsack | [ ] | |
| 72 | 0/1 Knapsack | [GFG](https://www.geeksforgeeks.org/problems/0-1-knapsack-problem0945/1) | Medium | Classic 2D DP | [ ] | |
| 73 | Target Sum | [LeetCode](https://leetcode.com/problems/target-sum/) | Medium | Subset Sum variant | [ ] | |
| 74 | Partition Equal Subset Sum | [LeetCode](https://leetcode.com/problems/partition-equal-subset-sum/) | Medium | Subset Sum | [ ] | |
| 75 | Longest Increasing Subsequence | [LeetCode](https://leetcode.com/problems/longest-increasing-subsequence/) | Medium | DP + Binary Search O(nlogn) | [ ] | |
| 76 | Longest Common Subsequence | [LeetCode](https://leetcode.com/problems/longest-common-subsequence/) | Medium | 2D DP | [ ] | |
| 77 | Edit Distance | [LeetCode](https://leetcode.com/problems/edit-distance/) | Medium | 2D DP on strings | [ ] | |
| 78 | Word Break | [LeetCode](https://leetcode.com/problems/word-break/) | Medium | 1D DP + substring check | [ ] | |
| 79 | Decode Ways | [LeetCode](https://leetcode.com/problems/decode-ways/) | Medium | 1D DP (like Fibonacci with conditions) | [ ] | |
| 80 | Unique Paths | [LeetCode](https://leetcode.com/problems/unique-paths/) | Medium | 2D Grid DP | [ ] | |
| 81 | Minimum Path Sum | [LeetCode](https://leetcode.com/problems/minimum-path-sum/) | Medium | 2D Grid DP | [ ] | |
| 82 | Longest Palindromic Subsequence | [LeetCode](https://leetcode.com/problems/longest-palindromic-subsequence/) | Medium | 2D DP (LCS on reverse) | [ ] | |
| 83 | Palindrome Partitioning II | [LeetCode](https://leetcode.com/problems/palindrome-partitioning-ii/) | Hard | DP on partitions | [ ] | |
| 84 | Maximum Length of Repeated Subarray | [LeetCode](https://leetcode.com/problems/maximum-length-of-repeated-subarray/) | Medium | 2D DP (LCS variant) | [ ] | |
| 85 | Distinct Subsequences | [LeetCode](https://leetcode.com/problems/distinct-subsequences/) | Hard | 2D DP | [ ] | |

---

## 3.8 Dynamic Programming — Intervals & Advanced

| # | Problem | Link | Difficulty | Pattern | Status | Fav |
|---|---------|------|------------|---------|--------|-----|
| 86 | Matrix Chain Multiplication | [GFG](https://www.geeksforgeeks.org/problems/matrix-chain-multiplication0303/1) | Hard | Interval DP | [ ] | |
| 87 | Burst Balloons | [LeetCode](https://leetcode.com/problems/burst-balloons/) | Hard | Interval DP 🔥 | [ ] | |
| 88 | Minimum Cost Tree From Leaf Values | [LeetCode](https://leetcode.com/problems/minimum-cost-tree-from-leaf-values/) | Medium | Interval DP / Stack | [ ] | |
| 89 | Longest Valid Parentheses | [LeetCode](https://leetcode.com/problems/longest-valid-parentheses/) | Hard | Stack / DP | [ ] | |
| 90 | Regular Expression Matching | [LeetCode](https://leetcode.com/problems/regular-expression-matching/) | Hard | 2D DP | [ ] | |
| 91 | Wildcard Matching | [LeetCode](https://leetcode.com/problems/wildcard-matching/) | Hard | 2D DP | [ ] | |
| 92 | Interleaving String | [LeetCode](https://leetcode.com/problems/interleaving-string/) | Medium | 2D DP | [ ] | |
| 93 | Maximal Square | [LeetCode](https://leetcode.com/problems/maximal-square/) | Medium | 2D DP on grid | [ ] | |
| 94 | Best Time to Buy & Sell Stock III (2 tx) | [LeetCode](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/) | Hard | State Machine DP | [ ] | |
| 95 | Best Time to Buy & Sell Stock IV (k tx) | [LeetCode](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/) | Hard | State Machine DP | [ ] | |
| 96 | Best Time with Cooldown | [LeetCode](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/) | Medium | State Machine DP | [ ] | |

### 🔑 Key Insights — Dynamic Programming
```
- DP = Recursion + Memoization (Top-Down) OR Tabulation (Bottom-Up)
- Steps: 1) Define state 2) Recurrence relation 3) Base cases 4) Order of computation
- Knapsack: Take or skip each item. 0/1 vs Unbounded (can retake).
- LIS O(nlogn): Maintain "smallest tail" array, binary search to place each element.
- LCS: dp[i][j] = LCS of first i chars of s1 and first j chars of s2.
- Interval DP: dp[i][j] = optimal for subarray i..j. Try all split points k.
- Stock problems: Define states (day, holding/not-holding, transactions left).
- Space optimization: If dp[i] only depends on dp[i-1], use 1D array.
```

---

## 3.9 Greedy

| # | Problem | Link | Difficulty | Pattern | Status | Fav |
|---|---------|------|------------|---------|--------|-----|
| 97 | Jump Game | [LeetCode](https://leetcode.com/problems/jump-game/) | Medium | Track max reachable | [ ] | |
| 98 | Jump Game II | [LeetCode](https://leetcode.com/problems/jump-game-ii/) | Medium | BFS-like levels | [ ] | |
| 99 | Gas Station | [LeetCode](https://leetcode.com/problems/gas-station/) | Medium | Greedy (reset when tank < 0) | [ ] | |
| 100 | Activity Selection / Intervals | [LeetCode](https://leetcode.com/problems/non-overlapping-intervals/) | Medium | Sort by end time | [ ] | |
| 101 | Minimum Platforms | [GFG](https://www.geeksforgeeks.org/problems/minimum-platforms-1587115620/1) | Medium | Sort arrivals & departures | [ ] | |
| 102 | Job Sequencing Problem | [GFG](https://www.geeksforgeeks.org/problems/job-sequencing-problem-1587115620/1) | Medium | Sort by profit + DSU/greedy | [ ] | |
| 103 | Fractional Knapsack | [GFG](https://www.geeksforgeeks.org/problems/fractional-knapsack-1587115620/1) | Medium | Sort by value/weight ratio | [ ] | |
| 104 | Minimum Number of Coins | [GFG](https://www.geeksforgeeks.org/problems/number-of-coins1702/1) | Medium | Greedy (if denominations allow) | [ ] | |
| 105 | Assign Cookies | [LeetCode](https://leetcode.com/problems/assign-cookies/) | Easy | Sort both + two pointers | [ ] | |
| 106 | Candy Distribution | [LeetCode](https://leetcode.com/problems/candy/) | Hard | Two passes (left→right, right→left) | [ ] | |
| 107 | Minimum Arrows to Burst Balloons | [LeetCode](https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/) | Medium | Sort by end, greedy overlap | [ ] | |

### 🔑 Key Insights — Greedy
```
- Greedy works when: Local optimal choice leads to global optimal.
- Interval scheduling: Sort by END time, greedily pick non-overlapping.
- Interval partitioning: Sort by START time, use min-heap for end times.
- Always ask: "Can I prove greedy gives optimal?" (exchange argument / stays ahead)
- If greedy doesn't work → try DP!
```

---

## 3.10 Union-Find (Disjoint Set Union)

| # | Problem | Link | Difficulty | Pattern | Status | Fav |
|---|---------|------|------------|---------|--------|-----|
| 108 | Number of Connected Components | [LeetCode](https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/) | Medium | Basic Union-Find | [ ] | |
| 109 | Redundant Connection | [LeetCode](https://leetcode.com/problems/redundant-connection/) | Medium | Union-Find (detect cycle) | [ ] | |
| 110 | Accounts Merge | [LeetCode](https://leetcode.com/problems/accounts-merge/) | Medium | Union-Find + mapping | [ ] | |
| 111 | Number of Islands II | [LeetCode](https://leetcode.com/problems/number-of-islands-ii/) | Hard | Dynamic Union-Find | [ ] | |
| 112 | Most Stones Removed | [LeetCode](https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/) | Medium | Union by row/col | [ ] | |
| 113 | Making A Large Island | [LeetCode](https://leetcode.com/problems/making-a-large-island/) | Hard | Union-Find + flip one cell | [ ] | |

---

## 3.11 Bonus: Top Interview Problems from Phase 3 🏢🔥

| # | Problem | Link | Company | Pattern | Status | Fav |
|---|---------|------|---------|---------|--------|-----|
| 114 | Binary Tree Max Path Sum | [LeetCode](https://leetcode.com/problems/binary-tree-maximum-path-sum/) | Google, FB | DFS | [ ] | |
| 115 | Serialize/Deserialize BT | [LeetCode](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/) | Amazon, Google | BFS/DFS | [ ] | |
| 116 | Find Median from Data Stream | [LeetCode](https://leetcode.com/problems/find-median-from-data-stream/) | Amazon, Google | Two Heaps | [ ] | |
| 117 | Word Ladder | [LeetCode](https://leetcode.com/problems/word-ladder/) | Amazon, Google | BFS | [ ] | |
| 118 | LIS (O(nlogn)) | [LeetCode](https://leetcode.com/problems/longest-increasing-subsequence/) | Google, Amazon | DP + BS | [ ] | |
| 119 | Edit Distance | [LeetCode](https://leetcode.com/problems/edit-distance/) | Google, Amazon | 2D DP | [ ] | |
| 120 | Burst Balloons | [LeetCode](https://leetcode.com/problems/burst-balloons/) | Google | Interval DP | [ ] | |

---

## ✅ Phase 3 Completion Checklist

- [ ] Can traverse trees in all 4 ways (in/pre/post/level) both recursive & iterative
- [ ] Graph BFS/DFS is automatic — can handle grids, adjacency lists, matrices
- [ ] Know Dijkstra, Bellman-Ford, and when to use each
- [ ] Topological sort (both Kahn's and DFS) is clear
- [ ] Can identify DP subproblem and write recurrence within 5 minutes
- [ ] Know the 5 DP patterns: 1D, 2D, Knapsack, LIS/LCS, Interval
- [ ] Greedy vs DP decision is intuitive
- [ ] Union-Find with path compression + union by rank implemented from memory
