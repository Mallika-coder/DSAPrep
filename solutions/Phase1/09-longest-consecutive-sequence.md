# 9. Longest Consecutive Sequence

**Link:** [LeetCode](https://leetcode.com/problems/longest-consecutive-sequence/)
**Difficulty:** Medium | **Pattern:** HashSet + Chain

---

## Problem
Find the length of the longest consecutive elements sequence. Must be O(n).

## Thought Process
1. **Sort approach:** Sort + scan → O(n log n). Not O(n).
2. **Key Insight:** Put all in HashSet. For each number, check if it's a CHAIN START (num-1 not in set). Only start counting from chain starts.
3. **Why O(n)?** Each number is visited at most twice (once to check if start, once when counted in a chain).

## Approach
```
Put all numbers in HashSet
For each num in set:
    If num-1 NOT in set (this is a chain start):
        Count consecutive: num, num+1, num+2, ...
        Update maxLength
Return maxLength
```

## Code (Python)
```python
def longestConsecutive(nums):
    num_set = set(nums)
    max_length = 0
    
    for num in num_set:
        # Only start counting from the beginning of a sequence
        if num - 1 not in num_set:
            current = num
            length = 1
            while current + 1 in num_set:
                current += 1
                length += 1
            max_length = max(max_length, length)
    
    return max_length
```

## Code (C++)
```cpp
int longestConsecutive(vector<int>& nums) {
    unordered_set<int> numSet(nums.begin(), nums.end());
    int maxLen = 0;
    
    for (int num : numSet) {
        if (numSet.find(num - 1) == numSet.end()) {
            int current = num, length = 1;
            while (numSet.find(current + 1) != numSet.end()) {
                current++;
                length++;
            }
            maxLen = max(maxLen, length);
        }
    }
    return maxLen;
}
```

## Complexity
- **Time:** O(n) — each element counted once in a chain
- **Space:** O(n) — HashSet

## Dry Run
```
nums = [100, 4, 200, 1, 3, 2]
set = {100, 4, 200, 1, 3, 2}

num=100: 99 not in set → chain start! 100→101? no. length=1
num=4:   3 in set → skip (not a start)
num=200: 199 not in set → chain start! 200→201? no. length=1
num=1:   0 not in set → chain start! 1→2→3→4→5? stop at 5. length=4 ✓
num=3:   2 in set → skip
num=2:   1 in set → skip

Answer: 4 (sequence [1,2,3,4])
```

## Edge Cases
- Empty array: return 0
- All duplicates: `[1,1,1]` → set becomes {1}, length=1
- Negatives: works fine with set

## One-Line Insight
> Only start counting from chain beginnings (num-1 not in set) — avoids redundant work and guarantees O(n).
