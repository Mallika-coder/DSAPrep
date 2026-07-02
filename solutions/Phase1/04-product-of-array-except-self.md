# 4. Product of Array Except Self

**Link:** [LeetCode](https://leetcode.com/problems/product-of-array-except-self/)
**Difficulty:** Medium | **Pattern:** Prefix/Suffix Product

---

## Problem
Return array where output[i] = product of all elements except nums[i]. No division allowed.

## Thought Process
1. **With division:** Total product / nums[i] → fails with zeros
2. **Key Insight:** product_except_self[i] = (product of all LEFT of i) × (product of all RIGHT of i)
3. **Optimize space:** Build left product in result array, then multiply right product in reverse pass

## Approach
```
Pass 1 (left to right): result[i] = product of nums[0..i-1]
Pass 2 (right to left): multiply result[i] by product of nums[i+1..n-1]
```

## Code (Python)
```python
def productExceptSelf(nums):
    n = len(nums)
    result = [1] * n
    
    # Left products
    left = 1
    for i in range(n):
        result[i] = left
        left *= nums[i]
    
    # Right products
    right = 1
    for i in range(n - 1, -1, -1):
        result[i] *= right
        right *= nums[i]
    
    return result
```

## Code (C++)
```cpp
vector<int> productExceptSelf(vector<int>& nums) {
    int n = nums.size();
    vector<int> result(n, 1);
    
    int left = 1;
    for (int i = 0; i < n; i++) {
        result[i] = left;
        left *= nums[i];
    }
    
    int right = 1;
    for (int i = n - 1; i >= 0; i--) {
        result[i] *= right;
        right *= nums[i];
    }
    
    return result;
}
```

## Complexity
- **Time:** O(n) — two passes
- **Space:** O(1) — result array doesn't count as extra space

## Dry Run
```
nums = [1, 2, 3, 4]

Pass 1 (left products):
  result = [1, 1, 2, 6]  (each position stores product of everything to its left)

Pass 2 (right products):
  i=3: result[3] = 6 * 1 = 6,   right = 4
  i=2: result[2] = 2 * 4 = 8,   right = 12
  i=1: result[1] = 1 * 12 = 12, right = 24
  i=0: result[0] = 1 * 24 = 24, right = 24

result = [24, 12, 8, 6] ✓
```

## Edge Cases
- Contains zero: still works (left/right products handle it)
- Two zeros: all products become 0
- Single element: [1] → [1]

## One-Line Insight
> Product except self = (prefix product from left) × (suffix product from right). Two passes, no division.
