# 8. Next Permutation

**Link:** [LeetCode](https://leetcode.com/problems/next-permutation/)
**Difficulty:** Medium | **Pattern:** Observation / Greedy

---

## Problem
Rearrange numbers into the next lexicographically greater permutation. If last permutation, return first (sorted ascending).

## Thought Process
1. **Observation:** To get "just next bigger" number, we need to make smallest change from the RIGHT.
2. **Find the pivot:** Scan from right, find first index where nums[i] < nums[i+1] (first decrease from right).
3. **Why?** Everything to the right of this index is in descending order (no bigger permutation possible there).
4. **Swap:** Find the smallest number larger than nums[i] on its right side. Swap them.
5. **Reverse:** Reverse everything to the right of pivot position (make it ascending = smallest possible suffix).

## Algorithm
```
Step 1: Find i (rightmost index where nums[i] < nums[i+1])
Step 2: If no such i → reverse entire array (we were at last permutation)
Step 3: Find j (rightmost index where nums[j] > nums[i])
Step 4: Swap nums[i] and nums[j]
Step 5: Reverse nums[i+1:]
```

## Code (Python)
```python
def nextPermutation(nums):
    n = len(nums)
    
    # Step 1: Find pivot (first decreasing from right)
    i = n - 2
    while i >= 0 and nums[i] >= nums[i + 1]:
        i -= 1
    
    if i >= 0:
        # Step 2: Find rightmost element > nums[i]
        j = n - 1
        while nums[j] <= nums[i]:
            j -= 1
        # Step 3: Swap
        nums[i], nums[j] = nums[j], nums[i]
    
    # Step 4: Reverse suffix (i+1 to end)
    left, right = i + 1, n - 1
    while left < right:
        nums[left], nums[right] = nums[right], nums[left]
        left += 1
        right -= 1
```

## Code (C++)
```cpp
void nextPermutation(vector<int>& nums) {
    int n = nums.size(), i = n - 2;
    
    // Find pivot
    while (i >= 0 && nums[i] >= nums[i + 1]) i--;
    
    if (i >= 0) {
        int j = n - 1;
        while (nums[j] <= nums[i]) j--;
        swap(nums[i], nums[j]);
    }
    
    reverse(nums.begin() + i + 1, nums.end());
}
```

## Dry Run
```
nums = [1, 3, 5, 4, 2]

Step 1: Find pivot
  i=3: 4 >= 2? yes
  i=2: 5 >= 4? yes
  i=1: 3 >= 5? NO → pivot at i=1, nums[1]=3

Step 2: Find j (rightmost > 3)
  j=4: nums[4]=2 > 3? no
  j=3: nums[3]=4 > 3? YES → j=3

Step 3: Swap nums[1] and nums[3]
  [1, 4, 5, 3, 2]

Step 4: Reverse from index 2 onwards
  [1, 4, 2, 3, 5] ← ANSWER ✓
```

## Complexity
- **Time:** O(n)
- **Space:** O(1) — in place

## Edge Cases
- Already largest: `[3, 2, 1]` → reverse all → `[1, 2, 3]`
- Already smallest: `[1, 2, 3]` → pivot at i=1, answer `[1, 3, 2]`
- All same: `[1, 1, 1]` → no pivot, reverse → same

## One-Line Insight
> Find first decrease from right (pivot) → swap with just-larger element → reverse the suffix to make it smallest.
