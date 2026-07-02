# 2. Best Time to Buy and Sell Stock

**Link:** [LeetCode](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)
**Difficulty:** Easy | **Pattern:** Kadane's Variant

---

## Problem
Given prices array, find max profit from one buy and one sell (buy before sell).

## Thought Process
1. **Brute Force:** Try every (buy, sell) pair where buy < sell → O(n²)
2. **Optimize:** Track minimum price seen so far. At each day, profit = price - minSoFar. Track max profit.
3. **Key Insight:** We always want to buy at the lowest previous price. Keep updating minPrice as we go.

## Approach
```
minPrice = infinity, maxProfit = 0
For each price:
    minPrice = min(minPrice, price)
    maxProfit = max(maxProfit, price - minPrice)
Return maxProfit
```

## Code (Python)
```python
def maxProfit(prices):
    min_price = float('inf')
    max_profit = 0
    for price in prices:
        min_price = min(min_price, price)
        max_profit = max(max_profit, price - min_price)
    return max_profit
```

## Code (C++)
```cpp
int maxProfit(vector<int>& prices) {
    int minPrice = INT_MAX, maxProfit = 0;
    for (int price : prices) {
        minPrice = min(minPrice, price);
        maxProfit = max(maxProfit, price - minPrice);
    }
    return maxProfit;
}
```

## Complexity
- **Time:** O(n)
- **Space:** O(1)

## Edge Cases
- Prices always decreasing: `[7,6,4,3,1]` → profit = 0 (never buy)
- Single element: return 0
- All same prices: return 0

## One-Line Insight
> Track min price so far; at each point, current profit = price - minSoFar.
