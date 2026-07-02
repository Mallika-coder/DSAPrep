# 1. Two Sum

**Link:** [LeetCode](https://leetcode.com/problems/two-sum/)
**Difficulty:** Easy | **Pattern:** HashMap

---

## Problem
Given an array `nums` and a target, return indices of two numbers that add up to target.

## Thought Process (How to think)
1. **Brute Force:** Check every pair (i, j) → O(n²)
2. **Optimize:** For each number, we need `target - nums[i]`. Can we find it in O(1)? → YES, use HashMap!
3. **Key Insight:** Store numbers we've seen with their index. For each new number, check if its complement exists.

## Approach
```
For each element nums[i]:
    complement = target - nums[i]
    If complement exists in HashMap → return [map[complement], i]
    Else → store nums[i]: i in HashMap
```

## Code (Python)
```python
def twoSum(nums, target):
    seen = {}  # value -> index
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
    return []
```

## Code (C++)
```cpp
vector<int> twoSum(vector<int>& nums, int target) {
    unordered_map<int, int> seen;
    for (int i = 0; i < nums.size(); i++) {
        int complement = target - nums[i];
        if (seen.count(complement))
            return {seen[complement], i};
        seen[nums[i]] = i;
    }
    return {};
}
```

## Complexity
- **Time:** O(n) — single pass
- **Space:** O(n) — HashMap

## Edge Cases
- Duplicate values: `[3, 3], target=6` → works because we check before inserting
- Negative numbers: complement logic handles naturally
- Single element can't pair with itself (we check complement BEFORE storing current)

## One-Line Insight
> Store what you've seen; for each new number, ask "does my complement already exist?"
