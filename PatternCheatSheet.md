# 🧠 Pattern Cheat Sheet — Quick Reference

Use this when you see a new problem and need to identify the pattern in under 2 minutes.

---

## 🔍 Pattern Identification Flowchart

```
Is it about finding a subarray/substring?
├── Fixed size → Sliding Window (Fixed)
├── Variable size with constraint → Sliding Window (Variable)
├── Sum equals K → Prefix Sum + HashMap
└── Count "exactly K" → atMost(K) - atMost(K-1)

Is it about finding pairs/triplets?
├── Array is sorted → Two Pointers
├── Not sorted, need O(n) → HashMap
└── Need all combinations → Sort + Two Pointers

Is it asking for next/previous greater/smaller?
└── Monotonic Stack

Is it a "minimize the maximum" or "maximize the minimum"?
└── Binary Search on Answer

Is it about shortest path?
├── Unweighted graph → BFS
├── Weighted, non-negative → Dijkstra
├── Negative weights → Bellman-Ford
└── All pairs → Floyd-Warshall

Is it about counting ways / optimal value?
├── Overlapping subproblems → Dynamic Programming
├── Choices at each step → DP (take/skip)
└── Local optimal = global optimal → Greedy

Is it about connectivity / grouping?
├── Static → DFS/BFS for components
└── Dynamic (online) → Union-Find

Is it about trees?
├── Path problems → DFS + return values up
├── Level problems → BFS
└── BST property → Inorder is sorted

Is it about generating all possibilities?
└── Backtracking

Is it about intervals/segments?
├── Merge/count overlapping → Sort by start
├── Maximum non-overlapping → Sort by end (Greedy)
└── Range queries → Segment Tree / BIT
```

---

## 📋 Pattern Templates

### 1. Sliding Window (Variable)
```python
def sliding_window(arr, condition):
    left = 0
    result = 0
    window_state = {}  # or counter
    
    for right in range(len(arr)):
        # Expand: add arr[right] to window
        update_window(arr[right])
        
        # Shrink: while window violates condition
        while not condition(window_state):
            remove_from_window(arr[left])
            left += 1
        
        # Update answer
        result = max(result, right - left + 1)
    
    return result
```

### 2. Binary Search on Answer
```python
def binary_search_answer(arr, target):
    lo, hi = min_possible, max_possible
    
    while lo < hi:
        mid = (lo + hi) // 2
        if is_feasible(mid):  # can we achieve this answer?
            hi = mid  # try smaller (for minimize)
            # lo = mid + 1  # try larger (for maximize)
        else:
            lo = mid + 1  # need larger
            # hi = mid  # need smaller
    
    return lo
```

### 3. Monotonic Stack (Next Greater Element)
```python
def next_greater(arr):
    n = len(arr)
    result = [-1] * n
    stack = []  # stores indices
    
    for i in range(n):
        while stack and arr[stack[-1]] < arr[i]:
            result[stack.pop()] = arr[i]
        stack.append(i)
    
    return result
```

### 4. DFS on Tree (return value up)
```python
def dfs(node):
    if not node:
        return 0
    
    left = dfs(node.left)
    right = dfs(node.right)
    
    # Update global answer using both children
    global_ans = max(global_ans, left + right + node.val)
    
    # Return best single path to parent
    return max(left, right) + node.val
```

### 5. BFS (Shortest Path / Level Order)
```python
from collections import deque

def bfs(graph, start):
    queue = deque([start])
    visited = {start}
    distance = {start: 0}
    
    while queue:
        node = queue.popleft()
        for neighbor in graph[node]:
            if neighbor not in visited:
                visited.add(neighbor)
                distance[neighbor] = distance[node] + 1
                queue.append(neighbor)
    
    return distance
```

### 6. Backtracking
```python
def backtrack(state, start, result):
    if is_goal(state):
        result.append(state[:])
        return
    
    for i in range(start, len(choices)):
        # Skip duplicates at same level
        if i > start and choices[i] == choices[i-1]:
            continue
        
        state.append(choices[i])
        backtrack(state, i + 1, result)  # i+1 for combinations, i for unlimited
        state.pop()  # undo
```

### 7. Union-Find
```python
class UnionFind:
    def __init__(self, n):
        self.parent = list(range(n))
        self.rank = [0] * n
    
    def find(self, x):
        if self.parent[x] != x:
            self.parent[x] = self.find(self.parent[x])  # path compression
        return self.parent[x]
    
    def union(self, x, y):
        px, py = self.find(x), self.find(y)
        if px == py:
            return False
        if self.rank[px] < self.rank[py]:
            px, py = py, px
        self.parent[py] = px
        if self.rank[px] == self.rank[py]:
            self.rank[px] += 1
        return True
```

### 8. Dijkstra's Algorithm
```python
import heapq

def dijkstra(graph, start):
    dist = {start: 0}
    heap = [(0, start)]
    
    while heap:
        d, u = heapq.heappop(heap)
        if d > dist.get(u, float('inf')):
            continue
        for v, w in graph[u]:
            new_dist = d + w
            if new_dist < dist.get(v, float('inf')):
                dist[v] = new_dist
                heapq.heappush(heap, (new_dist, v))
    
    return dist
```

### 9. Topological Sort (Kahn's BFS)
```python
from collections import deque

def topo_sort(graph, n):
    in_degree = [0] * n
    for u in graph:
        for v in graph[u]:
            in_degree[v] += 1
    
    queue = deque([i for i in range(n) if in_degree[i] == 0])
    order = []
    
    while queue:
        u = queue.popleft()
        order.append(u)
        for v in graph[u]:
            in_degree[v] -= 1
            if in_degree[v] == 0:
                queue.append(v)
    
    return order if len(order) == n else []  # empty = cycle exists
```

### 10. DP Template (Bottom-Up)
```python
def dp_solution(arr):
    n = len(arr)
    # 1. Define state: dp[i] = optimal answer for first i elements
    dp = [0] * (n + 1)
    
    # 2. Base case
    dp[0] = base_value
    
    # 3. Transition
    for i in range(1, n + 1):
        dp[i] = max(
            dp[i-1],  # skip current
            dp[j] + value  # take current (j depends on problem)
        )
    
    # 4. Answer
    return dp[n]
```

---

## ⚡ Time Complexity Quick Reference

| Technique | Time | When to Use |
|-----------|------|-------------|
| Two Pointers | O(n) | Sorted array, pair finding |
| Sliding Window | O(n) | Subarray/substring with constraint |
| Binary Search | O(log n) | Sorted data, monotonic function |
| BS on Answer | O(n log(range)) | Optimize min/max |
| HashMap | O(n) | Counting, pair finding |
| Monotonic Stack | O(n) | Next/prev greater/smaller |
| BFS/DFS | O(V + E) | Graph traversal |
| Dijkstra | O(E log V) | Shortest path (positive weights) |
| Union-Find | O(α(n)) per op | Dynamic connectivity |
| Segment Tree | O(log n) query/update | Range queries with updates |
| Sorting | O(n log n) | Preprocessing for greedy/two pointer |
| DP (1D) | O(n) or O(n*k) | Sequence optimization |
| DP (2D) | O(n*m) | Two sequence comparison |
| Backtracking | O(2^n) or O(n!) | Generate all possibilities |

---

## 🎯 Problem → Pattern Mapping (Common Keywords)

| If you see... | Think... |
|--------------|----------|
| "Contiguous subarray" | Sliding Window or Prefix Sum |
| "Substring" | Sliding Window |
| "Sorted array + target" | Binary Search or Two Pointers |
| "Minimize maximum" / "Maximize minimum" | Binary Search on Answer |
| "Next greater" / "Previous smaller" | Monotonic Stack |
| "K closest" / "K largest" / "Top K" | Heap (Priority Queue) |
| "Number of ways" | DP (count) |
| "Minimum cost" / "Maximum profit" | DP or Greedy |
| "All possible" / "Generate all" | Backtracking |
| "Connected components" | BFS/DFS or Union-Find |
| "Shortest path" | BFS (unweighted) or Dijkstra (weighted) |
| "Cycle detection" | DFS (directed) or Union-Find (undirected) |
| "Level by level" | BFS |
| "Tree path" | DFS with return values |
| "Intervals" / "Merge" | Sort + Sweep |
| "Parentheses" | Stack |
| "Matrix traversal" | BFS/DFS on grid |
| "Subsequence" | DP (LIS/LCS pattern) |
| "Palindrome" | Expand from center or DP |
| "Permutation/Combination" | Backtracking |
| "Bit operations" | Bit Manipulation |
