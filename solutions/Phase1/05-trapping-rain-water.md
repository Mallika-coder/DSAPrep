# 5. Trapping Rain Water

**Link:** [LeetCode](https://leetcode.com/problems/trapping-rain-water/)
**Difficulty:** Hard | **Pattern:** Two Pointers

---

## Problem
Given elevation map, compute how much water can be trapped after raining.

## Thought Process
1. **Key Observation:** Water at position i = min(maxLeft, maxRight) - height[i]
2. **Brute Force:** For each i, scan left for maxLeft, scan right for maxRight → O(n²)
3. **Optimize 1:** Precompute prefix max (left) and suffix max (right) arrays → O(n) time, O(n) space
4. **Optimize 2:** Two pointers — process the side with smaller boundary → O(n) time, O(1) space

## Approach (Two Pointers — Optimal)
```
left = 0, right = n-1
leftMax = 0, rightMax = 0
water = 0

While left < right:
    If height[left] < height[right]:
        If height[left] >= leftMax: leftMax = height[left]
        Else: water += leftMax - height[left]
        left++
    Else:
        If height[right] >= rightMax: rightMax = height[right]
        Else: water += rightMax - height[right]
        right--
```

**Why this works:** We process the smaller side because we KNOW the other side has a taller bar. So the water level is determined by the smaller side's max.

## Code (Python)
```python
def trap(height):
    left, right = 0, len(height) - 1
    left_max = right_max = 0
    water = 0
    
    while left < right:
        if height[left] < height[right]:
            if height[left] >= left_max:
                left_max = height[left]
            else:
                water += left_max - height[left]
            left += 1
        else:
            if height[right] >= right_max:
                right_max = height[right]
            else:
                water += right_max - height[right]
            right -= 1
    
    return water
```

## Code (C++)
```cpp
int trap(vector<int>& height) {
    int left = 0, right = height.size() - 1;
    int leftMax = 0, rightMax = 0, water = 0;
    
    while (left < right) {
        if (height[left] < height[right]) {
            leftMax = max(leftMax, height[left]);
            water += leftMax - height[left];
            left++;
        } else {
            rightMax = max(rightMax, height[right]);
            water += rightMax - height[right];
            right--;
        }
    }
    return water;
}
```

## Complexity
- **Time:** O(n)
- **Space:** O(1)

## Dry Run
```
height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]

left=0,right=11: h[0]=0 < h[11]=1 → leftMax=0, water+=0, left=1
left=1,right=11: h[1]=1 < h[11]=1 → no (equal goes else)
                  rightMax=1, water+=0, right=10
left=1,right=10: h[1]=1 < h[10]=2 → leftMax=1, water+=0, left=2
left=2,right=10: h[2]=0 < h[10]=2 → water+=1-0=1, left=3
left=3,right=10: h[3]=2 < h[10]=2 → no → rightMax=2, water+=0, right=9
...continues...
Final: water = 6 ✓
```

## Edge Cases
- Empty array or length < 3: return 0
- Monotonically increasing/decreasing: no water trapped
- All same height: no water

## One-Line Insight
> Water at each position = min(tallest_left, tallest_right) - current_height. Two pointers process the smaller side since the other guarantees support.
