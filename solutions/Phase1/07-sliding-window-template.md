# 7. Sliding Window — Complete Template (Minimum Window Substring)

**Link:** [LeetCode](https://leetcode.com/problems/minimum-window-substring/)
**Difficulty:** Hard | **Pattern:** Sliding Window + Frequency Map

---

## Problem
Find the minimum window in string s that contains all characters of string t.

## Thought Process
1. **Brute Force:** Check all substrings → O(n²) or O(n³)
2. **Optimize:** Expand window right until all chars found, then shrink from left to minimize.
3. **Key Insight:** Use two pointers (left, right). Expand right to satisfy condition, shrink left to optimize.

## The Universal Sliding Window Template
```python
def slidingWindow(s, condition):
    left = 0
    window = {}  # track window state
    result = initial_value
    
    for right in range(len(s)):
        # 1. EXPAND: Add s[right] to window
        window[s[right]] = window.get(s[right], 0) + 1
        
        # 2. SHRINK: While window is valid/oversized, try shrinking
        while window_is_valid(window):
            result = update_result(result, left, right)
            # Remove s[left] from window
            window[s[left]] -= 1
            left += 1
        
    return result
```

## Code (Python) — Minimum Window Substring
```python
from collections import Counter

def minWindow(s, t):
    if not t or not s:
        return ""
    
    need = Counter(t)       # characters we need
    have = 0                # how many unique chars we've satisfied
    need_count = len(need)  # total unique chars needed
    
    left = 0
    result = ""
    min_len = float('inf')
    window = {}
    
    for right in range(len(s)):
        # Expand: add s[right]
        char = s[right]
        window[char] = window.get(char, 0) + 1
        
        # Check if this char's requirement is now satisfied
        if char in need and window[char] == need[char]:
            have += 1
        
        # Shrink: while all requirements met, try to minimize
        while have == need_count:
            # Update result
            if (right - left + 1) < min_len:
                min_len = right - left + 1
                result = s[left:right + 1]
            
            # Remove s[left]
            left_char = s[left]
            window[left_char] -= 1
            if left_char in need and window[left_char] < need[left_char]:
                have -= 1
            left += 1
    
    return result
```

## Code (C++)
```cpp
string minWindow(string s, string t) {
    unordered_map<char, int> need, window;
    for (char c : t) need[c]++;
    
    int left = 0, have = 0, needCount = need.size();
    int minLen = INT_MAX, start = 0;
    
    for (int right = 0; right < s.size(); right++) {
        window[s[right]]++;
        if (need.count(s[right]) && window[s[right]] == need[s[right]])
            have++;
        
        while (have == needCount) {
            if (right - left + 1 < minLen) {
                minLen = right - left + 1;
                start = left;
            }
            window[s[left]]--;
            if (need.count(s[left]) && window[s[left]] < need[s[left]])
                have--;
            left++;
        }
    }
    return minLen == INT_MAX ? "" : s.substr(start, minLen);
}
```

## Complexity
- **Time:** O(n) — each character visited at most twice (once by right, once by left)
- **Space:** O(k) — where k = unique characters in t

## Variations of Sliding Window

| Problem | Window Type | Condition to Shrink |
|---------|-------------|-------------------|
| Longest Substring No Repeat | Variable (maximize) | When duplicate found |
| Min Window Substring | Variable (minimize) | When all chars satisfied |
| Longest Repeating Replacement | Variable (maximize) | When (window - maxFreq) > k |
| Subarrays with K Different | Variable | When distinct > k |
| Max Consecutive Ones III | Variable (maximize) | When zeros in window > k |

## One-Line Insight
> Expand right to satisfy constraint, shrink left to optimize — each element enters and exits window at most once → O(n).
