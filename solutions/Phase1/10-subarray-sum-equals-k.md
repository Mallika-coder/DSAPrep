# 10. Subarray Sum Equals K

**Link:** [LeetCode](https://leetcode.com/problems/subarray-sum-equals-k/)
**Difficulty:** Medium | **Pattern:** Prefix Sum + HashMap

---

## Problem
Count the number of contiguous subarrays that sum to k.

## Thought Process
1. **Brute Force:** Try all subarrays → O(n²)
2. **Key Insight:** If prefix_sum[j] - prefix_sum[i] = k, then subarray (i, j] sums to k.
3. **Rearranged:** prefix_sum[j] - k = prefix_sum[i]. So for each j, count how many previous prefix sums equal (current_prefix - k).
4. **Use HashMap** to store frequency of each prefix sum seen so far.

## Approach
```
prefix = 0, count = 0
map = {0: 1}  // empty prefix sum exists once

For each num:
    prefix += num
    If (prefix - k) exists in map:
        count += map[prefix - k]
    map[prefix] += 1

Return count
```

## Code (Python)
```python
def subarraySum(nums, k):
    prefix_count = {0: 1}  # prefix_sum -> frequency
    prefix = 0
    count = 0
    
    for num in nums:
        prefix += num
        # How many previous prefixes equal (prefix - k)?
        if prefix - k in prefix_count:
            count += prefix_count[prefix - k]
        prefix_count[prefix] = prefix_count.get(prefix, 0) + 1
    
    return count
```

## Code (C++)
```cpp
int subarraySum(vector<int>& nums, int k) {
    unordered_map<int, int> prefixCount;
    prefixCount[0] = 1;
    int prefix = 0, count = 0;
    
    for (int num : nums) {
        prefix += num;
        if (prefixCount.count(prefix - k))
            count += prefixCount[prefix - k];
        prefixCount[prefix]++;
    }
    return count;
}
```

## Complexity
- **Time:** O(n)
- **Space:** O(n)

## Dry Run
```
nums = [1, 2, 3], k = 3

i=0: prefix=1, check 1-3=-2 → not in map. map={0:1, 1:1}
i=1: prefix=3, check 3-3=0 → in map! count+=1=1. map={0:1, 1:1, 3:1}
i=2: prefix=6, check 6-3=3 → in map! count+=1=2. map={0:1, 1:1, 3:1, 6:1}

Answer: 2 (subarrays [1,2] and [3])
```

## Why {0: 1} is Needed
If the prefix sum itself equals k (subarray from index 0), we need prefix - k = 0 to exist in the map. That's why we initialize with {0: 1}.

## Edge Cases
- Negative numbers: works (sliding window doesn't, but prefix sum does!)
- k = 0: counts subarrays with sum 0
- All zeros with k=0: many valid subarrays

## Variations
- **Longest subarray with sum K:** Store first occurrence of each prefix sum
- **Count subarrays with XOR = K:** Same idea with prefix XOR
- **Subarray divisible by K:** Store prefix % k in map

## One-Line Insight
> prefix[j] - prefix[i] = k means subarray (i,j] sums to k. HashMap stores prefix frequencies → O(n) count.
