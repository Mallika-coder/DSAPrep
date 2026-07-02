# 6. Koko Eating Bananas (Binary Search on Answer)

**Link:** [LeetCode](https://leetcode.com/problems/koko-eating-bananas/)
**Difficulty:** Medium | **Pattern:** Binary Search on Answer 🔥

---

## Problem
Koko eats bananas at speed k per hour. Each hour she picks a pile and eats k bananas (if pile < k, she finishes and waits). Find minimum k to finish all piles in h hours.

## Thought Process
1. **Observation:** If k is large enough, she finishes fast. If too small, she can't finish in time.
2. **Monotonic property:** If speed k works, then k+1 also works → BINARY SEARCH on answer!
3. **Search space:** min_k = 1, max_k = max(piles)
4. **Feasibility check:** For given k, total hours = sum(ceil(pile/k)) for each pile. If total ≤ h → feasible.

## Approach
```
lo = 1, hi = max(piles)
While lo < hi:
    mid = (lo + hi) // 2
    hours_needed = sum(ceil(pile / mid) for pile in piles)
    If hours_needed <= h: hi = mid      // can try slower
    Else: lo = mid + 1                  // need faster
Return lo
```

## Code (Python)
```python
import math

def minEatingSpeed(piles, h):
    lo, hi = 1, max(piles)
    
    while lo < hi:
        mid = (lo + hi) // 2
        # Calculate hours needed at speed mid
        hours = sum(math.ceil(pile / mid) for pile in piles)
        
        if hours <= h:
            hi = mid  # feasible, try smaller speed
        else:
            lo = mid + 1  # not feasible, need faster
    
    return lo
```

## Code (C++)
```cpp
int minEatingSpeed(vector<int>& piles, int h) {
    int lo = 1, hi = *max_element(piles.begin(), piles.end());
    
    while (lo < hi) {
        int mid = lo + (hi - lo) / 2;
        long hours = 0;
        for (int pile : piles)
            hours += (pile + mid - 1) / mid;  // ceil division without float
        
        if (hours <= h)
            hi = mid;
        else
            lo = mid + 1;
    }
    return lo;
}
```

## Complexity
- **Time:** O(n × log(max_pile)) — binary search × feasibility check
- **Space:** O(1)

## Why This is THE Template for "BS on Answer"

This exact pattern applies to:
- **Split Array Largest Sum** → BS on max subarray sum
- **Capacity to Ship Packages** → BS on ship capacity
- **Aggressive Cows** → BS on minimum distance
- **Allocate Minimum Pages** → BS on max pages

**Template:**
```python
def solve(arr, constraint):
    lo, hi = min_possible_answer, max_possible_answer
    
    while lo < hi:
        mid = (lo + hi) // 2
        if is_feasible(mid, arr, constraint):
            hi = mid    # for minimization
        else:
            lo = mid + 1
    
    return lo
```

## Edge Cases
- h == len(piles): must eat max(piles) per hour (one pile per hour max)
- h very large: answer is 1 (eat 1 per hour)
- Single pile: ceil(pile / h)

## One-Line Insight
> "Minimize the maximum" or "find minimum speed/capacity" → Binary search on the answer space, check feasibility at each midpoint.
