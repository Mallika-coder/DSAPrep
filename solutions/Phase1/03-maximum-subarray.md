# 3. Maximum Subarray (Kadane's Algorithm)

**Link:** [LeetCode](https://leetcode.com/problems/maximum-subarray/)
**Difficulty:** Medium | **Pattern:** Kadane's Algorithm

---

## Problem
Find the contiguous subarray with the largest sum.

## Thought Process
1. **Brute Force:** Try all subarrays → O(n²) or O(n³)
2. **Optimize:** At each position, decide: extend previous subarray OR start fresh here.
3. **Key Insight:** If current_sum + nums[i] < nums[i], it's better to start fresh at nums[i]. A negative prefix never helps.

## Approach (Kadane's)
```
current_max = nums[0], global_max = nums[0]
For i from 1 to n-1:
    current_max = max(nums[i], current_max + nums[i])  // extend or restart
    global_max = max(global_max, current_max)
Return global_max
```

## Code (Python)
```python
def maxSubArray(nums):
    current_max = global_max = nums[0]
    for i in range(1, len(nums)):
        current_max = max(nums[i], current_max + nums[i])
        global_max = max(global_max, current_max)
    return global_max
```

## Code (C++)
```cpp
int maxSubArray(vector<int>& nums) {
    int curMax = nums[0], globalMax = nums[0];
    for (int i = 1; i < nums.size(); i++) {
        curMax = max(nums[i], curMax + nums[i]);
        globalMax = max(globalMax, curMax);
    }
    return globalMax;
}
```

## Complexity
- **Time:** O(n)
- **Space:** O(1)

## Edge Cases
- All negative: `[-3, -2, -1]` → returns -1 (largest single element)
- Single element: return that element
- All positive: entire array is the answer

## Dry Run
```
nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
i=0: cur=-2, global=-2
i=1: cur=max(1, -2+1)=1, global=1
i=2: cur=max(-3, 1-3)=-2, global=1
i=3: cur=max(4, -2+4)=4, global=4
i=4: cur=max(-1, 4-1)=3, global=4
i=5: cur=max(2, 3+2)=5, global=5
i=6: cur=max(1, 5+1)=6, global=6
i=7: cur=max(-5, 6-5)=1, global=6
i=8: cur=max(4, 1+4)=5, global=6
Answer: 6 (subarray [4,-1,2,1])
```

## One-Line Insight
> At each index: extend previous subarray or start fresh — whichever is larger. A negative running sum is worthless.
