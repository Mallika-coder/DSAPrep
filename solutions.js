// All solutions in JAVA
const solutions = {
"p1-1": {
    title: "Two Sum",
    meta: "Easy | HashMap | Time: O(n) | Space: O(n)",
    thinking: "For each number, we need target - nums[i]. Use HashMap to find complement in O(1).",
    approach: `1. Create HashMap<Integer, Integer> (value → index)
2. For each nums[i]:
   complement = target - nums[i]
   If map.containsKey(complement) → return {map.get(complement), i}
   Else → map.put(nums[i], i)`,
    code: `public int[] twoSum(int[] nums, int target) {
    Map<Integer, Integer> map = new HashMap<>();
    for (int i = 0; i < nums.length; i++) {
        int complement = target - nums[i];
        if (map.containsKey(complement))
            return new int[]{map.get(complement), i};
        map.put(nums[i], i);
    }
    return new int[]{};
}`,
    dryrun: `nums=[2,7,11,15], target=9
i=0: comp=7, map={} → not found. map={2:0}
i=1: comp=2, map={2:0} → FOUND! return [0,1] ✓`,
    edge: "Duplicates [3,3] target=6 → works. Can't pair with self (check before insert).",
    insight: "Store what you've seen; for each new number, ask 'does my complement exist in map?'"
},
"p1-2": {
    title: "Best Time to Buy and Sell Stock",
    meta: "Easy | Kadane's Variant | Time: O(n) | Space: O(1)",
    thinking: "Track minimum price so far. At each day, profit = price - minSoFar. Keep maxProfit.",
    approach: `minPrice = Integer.MAX_VALUE, maxProfit = 0
For each price:
    minPrice = Math.min(minPrice, price)
    maxProfit = Math.max(maxProfit, price - minPrice)`,
    code: `public int maxProfit(int[] prices) {
    int minPrice = Integer.MAX_VALUE;
    int maxProfit = 0;
    for (int price : prices) {
        minPrice = Math.min(minPrice, price);
        maxProfit = Math.max(maxProfit, price - minPrice);
    }
    return maxProfit;
}`,
    dryrun: `prices=[7,1,5,3,6,4]
min=7,p=0 → min=1,p=0 → min=1,p=4 → min=1,p=4 → min=1,p=5 → min=1,p=5
Answer: 5 (buy@1, sell@6)`,
    edge: "Decreasing [7,6,4,3,1] → 0. Single element → 0.",
    insight: "Track min price so far; profit at each point = price - minSoFar."
},
"p1-3": {
    title: "Contains Duplicate",
    meta: "Easy | HashSet | Time: O(n) | Space: O(n)",
    thinking: "Add each element to a HashSet. If add() returns false → duplicate found.",
    approach: `Create HashSet. For each num: if !set.add(num) return true. Return false.`,
    code: `public boolean containsDuplicate(int[] nums) {
    Set<Integer> set = new HashSet<>();
    for (int num : nums) {
        if (!set.add(num)) return true;
    }
    return false;
}`,
    dryrun: `nums=[1,2,3,1] → set={1},{1,2},{1,2,3}, add(1)=false → true`,
    edge: "Empty array → false. Single element → false.",
    insight: "HashSet.add() returns false if element already exists. One-line check."
},
"p1-4": {
    title: "Maximum Subarray (Kadane's)",
    meta: "Medium | Kadane's | Time: O(n) | Space: O(1)",
    thinking: "At each position: extend previous subarray OR start fresh. Negative running sum is worthless.",
    approach: `curMax = globalMax = nums[0]
For i=1 to n-1:
    curMax = Math.max(nums[i], curMax + nums[i])
    globalMax = Math.max(globalMax, curMax)`,
    code: `public int maxSubArray(int[] nums) {
    int curMax = nums[0], globalMax = nums[0];
    for (int i = 1; i < nums.length; i++) {
        curMax = Math.max(nums[i], curMax + nums[i]);
        globalMax = Math.max(globalMax, curMax);
    }
    return globalMax;
}`,
    dryrun: `nums=[-2,1,-3,4,-1,2,1,-5,4]
cur=-2→1→-2→4→3→5→6→1→5, global=6 [4,-1,2,1]`,
    edge: "All negative [-3,-2,-1] → -1. All positive → entire array.",
    insight: "Extend or restart at each index. Negative prefix is useless — drop it."
},
"p1-5": {
    title: "Product of Array Except Self",
    meta: "Medium | Prefix/Suffix | Time: O(n) | Space: O(1)",
    thinking: "result[i] = leftProduct × rightProduct. Two passes, no division.",
    approach: `Pass 1 (L→R): result[i] = product of all left of i
Pass 2 (R→L): multiply result[i] by product of all right of i`,
    code: `public int[] productExceptSelf(int[] nums) {
    int n = nums.length;
    int[] result = new int[n];
    result[0] = 1;
    for (int i = 1; i < n; i++)
        result[i] = result[i-1] * nums[i-1];
    int right = 1;
    for (int i = n-1; i >= 0; i--) {
        result[i] *= right;
        right *= nums[i];
    }
    return result;
}`,
    dryrun: `nums=[1,2,3,4] → Pass1:[1,1,2,6] → Pass2:[24,12,8,6] ✓`,
    edge: "Contains zero → works. Two zeros → all 0.",
    insight: "Prefix × Suffix products. Two passes, no division."
},
"p1-6": {
    title: "Maximum Product Subarray",
    meta: "Medium | Track min & max | Time: O(n) | Space: O(1)",
    thinking: "Track both max and min at each position (negative × negative = positive). Swap on negative.",
    approach: `curMax = curMin = result = nums[0]
For each num from index 1:
    If num < 0: swap curMax, curMin
    curMax = max(num, curMax * num)
    curMin = min(num, curMin * num)
    result = max(result, curMax)`,
    code: `public int maxProduct(int[] nums) {
    int curMax = nums[0], curMin = nums[0], result = nums[0];
    for (int i = 1; i < nums.length; i++) {
        if (nums[i] < 0) {
            int temp = curMax;
            curMax = curMin;
            curMin = temp;
        }
        curMax = Math.max(nums[i], curMax * nums[i]);
        curMin = Math.min(nums[i], curMin * nums[i]);
        result = Math.max(result, curMax);
    }
    return result;
}`,
    dryrun: `nums=[2,3,-2,4] → max=2,min=2 → max=6,min=3 → max=-2,min=-12 → max=4,min=-48. result=6`,
    edge: "Single negative → itself. Contains 0 → resets chain.",
    insight: "Track both max AND min (negatives flip). Swap when current num is negative."
},
"p1-7": {
    title: "Find Min in Rotated Sorted Array",
    meta: "Medium | Binary Search | Time: O(log n) | Space: O(1)",
    thinking: "Array rotated → one half always sorted. Min is where sorted order breaks. BS on which half contains the break.",
    approach: `lo=0, hi=n-1. While lo < hi:
    mid = lo+(hi-lo)/2
    If nums[mid] > nums[hi]: min is in right half → lo=mid+1
    Else: min is in left half or at mid → hi=mid`,
    code: `public int findMin(int[] nums) {
    int lo = 0, hi = nums.length - 1;
    while (lo < hi) {
        int mid = lo + (hi - lo) / 2;
        if (nums[mid] > nums[hi])
            lo = mid + 1;
        else
            hi = mid;
    }
    return nums[lo];
}`,
    dryrun: `nums=[3,4,5,1,2] → lo=0,hi=4,mid=2: 5>2→lo=3. lo=3,hi=4,mid=3: 1<2→hi=3. return nums[3]=1 ✓`,
    edge: "Not rotated [1,2,3] → returns 1. Single element → itself.",
    insight: "If nums[mid] > nums[hi], min is on right. Otherwise min is on left or at mid."
},
"p1-8": {
    title: "Search in Rotated Sorted Array",
    meta: "Medium | Modified BS | Time: O(log n) | Space: O(1)",
    thinking: "One half is always sorted. Check if target is in the sorted half; if yes search there, else search other half.",
    approach: `lo=0, hi=n-1. While lo<=hi:
    mid = lo+(hi-lo)/2
    If nums[mid]==target: return mid
    If left half sorted (nums[lo]<=nums[mid]):
        If target in [nums[lo], nums[mid]): hi=mid-1
        Else: lo=mid+1
    Else (right half sorted):
        If target in (nums[mid], nums[hi]]: lo=mid+1
        Else: hi=mid-1`,
    code: `public int search(int[] nums, int target) {
    int lo = 0, hi = nums.length - 1;
    while (lo <= hi) {
        int mid = lo + (hi - lo) / 2;
        if (nums[mid] == target) return mid;
        if (nums[lo] <= nums[mid]) { // left sorted
            if (target >= nums[lo] && target < nums[mid])
                hi = mid - 1;
            else
                lo = mid + 1;
        } else { // right sorted
            if (target > nums[mid] && target <= nums[hi])
                lo = mid + 1;
            else
                hi = mid - 1;
        }
    }
    return -1;
}`,
    dryrun: `nums=[4,5,6,7,0,1,2], target=0 → left sorted [4,5,6,7], 0 not in range → lo=mid+1. Eventually find at idx 4.`,
    edge: "Target not present → -1. Single element. Target at rotation point.",
    insight: "Identify which half is sorted, check if target falls in that range, eliminate other half."
},
"p1-9": {
    title: "Container With Most Water",
    meta: "Medium | Two Pointers | Time: O(n) | Space: O(1)",
    thinking: "Start with widest container (left=0, right=n-1). Move the shorter side inward (only chance of finding taller bar).",
    approach: `left=0, right=n-1, maxArea=0
While left < right:
    area = min(h[left], h[right]) * (right-left)
    maxArea = max(maxArea, area)
    Move shorter pointer inward`,
    code: `public int maxArea(int[] height) {
    int left = 0, right = height.length - 1;
    int maxArea = 0;
    while (left < right) {
        int area = Math.min(height[left], height[right]) * (right - left);
        maxArea = Math.max(maxArea, area);
        if (height[left] < height[right]) left++;
        else right--;
    }
    return maxArea;
}`,
    dryrun: `h=[1,8,6,2,5,4,8,3,7] → start: min(1,7)*8=8. Move left. min(8,7)*7=49. Best=49.`,
    edge: "Two elements → min*1. All same height → h*(n-1).",
    insight: "Start widest, shrink by moving shorter side. Only a taller bar can improve area."
},
"p1-10": {
    title: "3Sum",
    meta: "Medium | Sort + Two Pointers | Time: O(n²) | Space: O(1)",
    thinking: "Sort array. Fix one element, use two pointers on remaining to find pairs summing to -fixed.",
    approach: `Sort nums. For each i (skip duplicates):
    lo=i+1, hi=n-1
    While lo < hi:
        sum = nums[i]+nums[lo]+nums[hi]
        If sum==0: add triplet, skip dupes, lo++, hi--
        If sum<0: lo++. If sum>0: hi--`,
    code: `public List<List<Integer>> threeSum(int[] nums) {
    List<List<Integer>> result = new ArrayList<>();
    Arrays.sort(nums);
    for (int i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] == nums[i-1]) continue;
        int lo = i + 1, hi = nums.length - 1;
        while (lo < hi) {
            int sum = nums[i] + nums[lo] + nums[hi];
            if (sum == 0) {
                result.add(Arrays.asList(nums[i], nums[lo], nums[hi]));
                while (lo < hi && nums[lo] == nums[lo+1]) lo++;
                while (lo < hi && nums[hi] == nums[hi-1]) hi--;
                lo++; hi--;
            } else if (sum < 0) lo++;
            else hi--;
        }
    }
    return result;
}`,
    dryrun: `nums=[-1,0,1,2,-1,-4] → sorted: [-4,-1,-1,0,1,2]
i=0(-4): lo=1,hi=5 sum=-4+-1+2=-3<0 → lo++... no triplet
i=1(-1): lo=2,hi=5 sum=-1+-1+2=0 ✓ → [-1,-1,2]. Skip dupes.
         lo=3,hi=4 sum=-1+0+1=0 ✓ → [-1,0,1]`,
    edge: "All zeros [0,0,0] → [[0,0,0]]. Less than 3 elements → empty.",
    insight: "Sort + fix one + two pointers for remaining. Skip duplicates at all three positions."
},
"p1-11": {
    title: "Next Permutation",
    meta: "Medium | Observation | Time: O(n) | Space: O(1)",
    thinking: "Find first decrease from right (pivot). Swap with just-larger element on right. Reverse suffix.",
    approach: `1. Find i where nums[i] < nums[i+1] (scan from right)
2. Find j where nums[j] > nums[i] (rightmost such j)
3. Swap nums[i], nums[j]
4. Reverse nums[i+1..end]`,
    code: `public void nextPermutation(int[] nums) {
    int n = nums.length, i = n - 2;
    while (i >= 0 && nums[i] >= nums[i+1]) i--;
    if (i >= 0) {
        int j = n - 1;
        while (nums[j] <= nums[i]) j--;
        int temp = nums[i]; nums[i] = nums[j]; nums[j] = temp;
    }
    // reverse from i+1 to end
    int l = i + 1, r = n - 1;
    while (l < r) {
        int temp = nums[l]; nums[l] = nums[r]; nums[r] = temp;
        l++; r--;
    }
}`,
    dryrun: `[1,3,5,4,2] → pivot i=1(3). j=3(4). swap→[1,4,5,3,2]. reverse[2..]→[1,4,2,3,5] ✓`,
    edge: "Last perm [3,2,1]→reverse→[1,2,3]. Already smallest [1,2,3]→[1,3,2].",
    insight: "Find first decrease from right, swap with just-larger, reverse suffix."
},
"p1-12": {
    title: "Set Matrix Zeroes",
    meta: "Medium | In-place marking | Time: O(mn) | Space: O(1)",
    thinking: "Use first row and first col as markers. Track if first row/col themselves need zeroing.",
    approach: `1. Check if first row/col have zeros (store in booleans)
2. Use matrix[i][0] and matrix[0][j] as markers for row i and col j
3. Zero out based on markers
4. Handle first row/col last`,
    code: `public void setZeroes(int[][] matrix) {
    int m = matrix.length, n = matrix[0].length;
    boolean firstRow = false, firstCol = false;
    for (int i = 0; i < m; i++) if (matrix[i][0] == 0) firstCol = true;
    for (int j = 0; j < n; j++) if (matrix[0][j] == 0) firstRow = true;
    for (int i = 1; i < m; i++)
        for (int j = 1; j < n; j++)
            if (matrix[i][j] == 0) { matrix[i][0] = 0; matrix[0][j] = 0; }
    for (int i = 1; i < m; i++)
        for (int j = 1; j < n; j++)
            if (matrix[i][0] == 0 || matrix[0][j] == 0) matrix[i][j] = 0;
    if (firstRow) for (int j = 0; j < n; j++) matrix[0][j] = 0;
    if (firstCol) for (int i = 0; i < m; i++) matrix[i][0] = 0;
}`,
    dryrun: `[[1,1,1],[1,0,1],[1,1,1]] → mark row1,col1 → [[1,0,1],[0,0,0],[1,0,1]]`,
    edge: "All zeros → all stay 0. No zeros → unchanged.",
    insight: "Use first row/col as markers to avoid extra space. Handle them separately last."
},
"p1-15": {
    title: "Merge Intervals",
    meta: "Medium | Sort by start | Time: O(n log n) | Space: O(n)",
    thinking: "Sort by start time. If current overlaps with last merged, extend end. Otherwise add new interval.",
    approach: `Sort intervals by start. For each interval:
    If result is empty OR no overlap (start > last.end): add interval
    Else: merge by extending end = max(end, interval.end)`,
    code: `public int[][] merge(int[][] intervals) {
    Arrays.sort(intervals, (a, b) -> a[0] - b[0]);
    List<int[]> result = new ArrayList<>();
    for (int[] interval : intervals) {
        if (result.isEmpty() || result.get(result.size()-1)[1] < interval[0])
            result.add(interval);
        else
            result.get(result.size()-1)[1] = 
                Math.max(result.get(result.size()-1)[1], interval[1]);
    }
    return result.toArray(new int[0][]);
}`,
    dryrun: `[[1,3],[2,6],[8,10],[15,18]] → [1,3]+[2,6]→[1,6]. [8,10] no overlap→add. [15,18]→add. Result:[[1,6],[8,10],[15,18]]`,
    edge: "Single interval → itself. All overlapping → one merged. Already sorted.",
    insight: "Sort by start. If overlap: extend end. If gap: add new interval."
},
"p1-16": {
    title: "Subarray Sum Equals K",
    meta: "Medium | Prefix Sum + Map | Time: O(n) | Space: O(n)",
    thinking: "prefix[j]-prefix[i]=k means subarray(i,j] sums to k. Count how many previous prefixes = currentPrefix-k.",
    approach: `map={0:1}, prefix=0, count=0
For each num: prefix+=num. count+=map.getOrDefault(prefix-k, 0). map[prefix]++`,
    code: `public int subarraySum(int[] nums, int k) {
    Map<Integer, Integer> map = new HashMap<>();
    map.put(0, 1);
    int prefix = 0, count = 0;
    for (int num : nums) {
        prefix += num;
        count += map.getOrDefault(prefix - k, 0);
        map.put(prefix, map.getOrDefault(prefix, 0) + 1);
    }
    return count;
}`,
    dryrun: `nums=[1,2,3], k=3 → prefix=1,check -2→0. prefix=3,check 0→1,count=1. prefix=6,check 3→1,count=2.`,
    edge: "Negatives work (sliding window doesn't!). k=0 → counts zero-sum subarrays.",
    insight: "prefix[j]-k exists in map → there's a subarray ending at j with sum k. Initialize {0:1}."
},
"p1-17": {
    title: "Trapping Rain Water",
    meta: "Hard | Two Pointers | Time: O(n) | Space: O(1)",
    thinking: "Water at i = min(maxLeft, maxRight) - height[i]. Process smaller side since other guarantees support.",
    approach: `left=0, right=n-1, leftMax=0, rightMax=0, water=0
While left < right:
    If h[left] < h[right]: leftMax=max(leftMax,h[left]). water+=leftMax-h[left]. left++
    Else: rightMax=max(rightMax,h[right]). water+=rightMax-h[right]. right--`,
    code: `public int trap(int[] height) {
    int left = 0, right = height.length - 1;
    int leftMax = 0, rightMax = 0, water = 0;
    while (left < right) {
        if (height[left] < height[right]) {
            leftMax = Math.max(leftMax, height[left]);
            water += leftMax - height[left];
            left++;
        } else {
            rightMax = Math.max(rightMax, height[right]);
            water += rightMax - height[right];
            right--;
        }
    }
    return water;
}`,
    dryrun: `h=[0,1,0,2,1,0,1,3,2,1,2,1] → water=6 ✓`,
    edge: "Length<3→0. Monotonic→0. All same→0.",
    insight: "Process smaller side: water determined by min(maxL,maxR). Two pointers O(1) space."
},
"p1-18": {
    title: "First Missing Positive",
    meta: "Hard | Cyclic Sort | Time: O(n) | Space: O(1)",
    thinking: "Place each number at its 'correct' index (num 1 at idx 0, num 2 at idx 1...). Then scan for first mismatch.",
    approach: `For each i: while nums[i] in range [1,n] and not at correct position, swap to correct place.
Then scan: first i where nums[i] != i+1 → answer is i+1.`,
    code: `public int firstMissingPositive(int[] nums) {
    int n = nums.length;
    for (int i = 0; i < n; i++) {
        while (nums[i] > 0 && nums[i] <= n && nums[nums[i]-1] != nums[i]) {
            int temp = nums[nums[i]-1];
            nums[nums[i]-1] = nums[i];
            nums[i] = temp;
        }
    }
    for (int i = 0; i < n; i++)
        if (nums[i] != i + 1) return i + 1;
    return n + 1;
}`,
    dryrun: `[3,4,-1,1] → swap 3 to idx2 → [-1,4,3,1] → swap 4 to idx3 → [-1,1,3,4] → swap 1 to idx0 → [1,-1,3,4]. Scan: idx1 has -1≠2 → answer=2`,
    edge: "All positive [1,2,3]→4. Contains duplicates. Negatives ignored.",
    insight: "Place each num at index num-1 (cyclic sort). First mismatch = answer. O(n) time O(1) space."
},
"p1-19": {
    title: "Longest Consecutive Sequence",
    meta: "Medium | HashSet + Chain | Time: O(n) | Space: O(n)",
    thinking: "Put all in HashSet. Only start counting from chain starts (num-1 not in set).",
    approach: `HashSet all nums. For each num: if num-1 NOT in set (chain start), count num, num+1, num+2... Update max.`,
    code: `public int longestConsecutive(int[] nums) {
    Set<Integer> set = new HashSet<>();
    for (int num : nums) set.add(num);
    int maxLen = 0;
    for (int num : set) {
        if (!set.contains(num - 1)) { // chain start
            int cur = num, len = 1;
            while (set.contains(cur + 1)) { cur++; len++; }
            maxLen = Math.max(maxLen, len);
        }
    }
    return maxLen;
}`,
    dryrun: `[100,4,200,1,3,2] → set. 1 is chain start: 1→2→3→4, len=4. Answer=4.`,
    edge: "Empty→0. Duplicates→set handles. Negatives→fine.",
    insight: "Only count from chain starts (num-1 not in set). Each element visited once→O(n)."
},
"p1-20": {
    title: "Majority Element",
    meta: "Easy | Boyer-Moore Voting | Time: O(n) | Space: O(1)",
    thinking: "Candidate and count. If count=0, pick new candidate. If same, count++. If different, count--.",
    approach: `candidate=nums[0], count=1. For each num: if count==0→candidate=num. If num==candidate→count++. Else count--.`,
    code: `public int majorityElement(int[] nums) {
    int candidate = nums[0], count = 1;
    for (int i = 1; i < nums.length; i++) {
        if (count == 0) candidate = nums[i];
        count += (nums[i] == candidate) ? 1 : -1;
    }
    return candidate;
}`,
    dryrun: `[2,2,1,1,1,2,2] → cand=2,c=1→2→1→0→cand=1,c=1→0→cand=2,c=1. Answer=2`,
    edge: "Single element → itself. Guaranteed majority exists.",
    insight: "Boyer-Moore: majority element survives all cancellations. O(1) space magic."
},
"p1-21": {
    title: "Longest Substring Without Repeating",
    meta: "Medium | Sliding Window | Time: O(n) | Space: O(k)",
    thinking: "Expand right. When duplicate found, shrink left until no duplicate. Track max window.",
    approach: `HashSet + left pointer. For each right: while s[right] in set → remove s[left], left++. Add s[right]. Update max.`,
    code: `public int lengthOfLongestSubstring(String s) {
    Set<Character> set = new HashSet<>();
    int left = 0, maxLen = 0;
    for (int right = 0; right < s.length(); right++) {
        while (set.contains(s.charAt(right))) {
            set.remove(s.charAt(left));
            left++;
        }
        set.add(s.charAt(right));
        maxLen = Math.max(maxLen, right - left + 1);
    }
    return maxLen;
}`,
    dryrun: `"abcabcbb" → {a}1,{a,b}2,{a,b,c}3,remove a→{b,c,a}3,remove b→{c,a,b}3... Answer=3`,
    edge: "Empty→0. All same 'aaaa'→1. All unique→length.",
    insight: "Expand right, shrink left on constraint break. Each char enters/exits once→O(n)."
},
"p1-37": {
    title: "Koko Eating Bananas (BS on Answer)",
    meta: "Medium | BS on Answer 🔥 | Time: O(n·log(max)) | Space: O(1)",
    thinking: "If speed k works, k+1 also works → monotonic → BS on answer! Feasibility: sum(ceil(pile/k)) ≤ h.",
    approach: `lo=1, hi=max(piles). While lo<hi: mid=(lo+hi)/2. If feasible(mid): hi=mid. Else: lo=mid+1. Return lo.`,
    code: `public int minEatingSpeed(int[] piles, int h) {
    int lo = 1, hi = 0;
    for (int p : piles) hi = Math.max(hi, p);
    while (lo < hi) {
        int mid = lo + (hi - lo) / 2;
        int hours = 0;
        for (int p : piles) hours += (p + mid - 1) / mid; // ceil division
        if (hours <= h) hi = mid;
        else lo = mid + 1;
    }
    return lo;
}`,
    dryrun: `piles=[3,6,7,11],h=8 → lo=1,hi=11→mid=6,hrs=6≤8→hi=6. →mid=3,hrs=10>8→lo=4. →mid=5,hrs=8→hi=5. →mid=4,hrs=8→hi=4. Return 4✓`,
    edge: "h==n→max(piles). h huge→1. Ceil division: (p+mid-1)/mid avoids float.",
    insight: "'Minimize the max' → BS on answer + feasibility check. Template for 10+ problems."
},
"p2-1": {
    title: "Two Sum II (Sorted)",
    meta: "Medium | Two Pointers | Time: O(n) | Space: O(1)",
    thinking: "Array is sorted → use two pointers from both ends. Sum too big → right--. Too small → left++.",
    approach: `left=0, right=n-1. While left<right: sum=nums[left]+nums[right]. If sum==target→return. If sum<target→left++. Else→right--.`,
    code: `public int[] twoSum(int[] numbers, int target) {
    int left = 0, right = numbers.length - 1;
    while (left < right) {
        int sum = numbers[left] + numbers[right];
        if (sum == target) return new int[]{left+1, right+1};
        else if (sum < target) left++;
        else right--;
    }
    return new int[]{};
}`,
    dryrun: `[2,7,11,15], target=9 → 2+15=17>9→right--. 2+11=13>9→right--. 2+7=9✓ → [1,2]`,
    edge: "Exactly one solution guaranteed. 1-indexed output.",
    insight: "Sorted array + target → two pointers from ends. Shrink based on sum comparison."
},
"p2-8": {
    title: "Longest Substring No Repeat",
    meta: "Medium | Sliding Window | Time: O(n) | Space: O(k)",
    thinking: "Same as p1-21. Expand right, shrink left on duplicate.",
    approach: `HashSet + left pointer. Expand right, shrink left when duplicate, track max.`,
    code: `// Same as p1-21 above
public int lengthOfLongestSubstring(String s) {
    Set<Character> set = new HashSet<>();
    int left = 0, maxLen = 0;
    for (int right = 0; right < s.length(); right++) {
        while (set.contains(s.charAt(right))) {
            set.remove(s.charAt(left++));
        }
        set.add(s.charAt(right));
        maxLen = Math.max(maxLen, right - left + 1);
    }
    return maxLen;
}`,
    dryrun: `"abcabcbb" → max window without repeat = 3 ("abc")`,
    edge: "Empty→0. All same→1. All unique→length.",
    insight: "Expand right, shrink left on break. O(n)."
},
"p2-9": {
    title: "Minimum Window Substring",
    meta: "Hard | Sliding Window + FreqMap | Time: O(n) | Space: O(k)",
    thinking: "Expand right until all chars of t found. Then shrink left to minimize. Track best window.",
    approach: `need=freq(t), have=0. Expand right: if char satisfies need, have++. While have==required: update result, shrink left.`,
    code: `public String minWindow(String s, String t) {
    Map<Character, Integer> need = new HashMap<>();
    for (char c : t.toCharArray()) need.merge(c, 1, Integer::sum);
    int left = 0, have = 0, needCount = need.size();
    int minLen = Integer.MAX_VALUE, start = 0;
    Map<Character, Integer> window = new HashMap<>();
    for (int right = 0; right < s.length(); right++) {
        char c = s.charAt(right);
        window.merge(c, 1, Integer::sum);
        if (need.containsKey(c) && window.get(c).equals(need.get(c))) have++;
        while (have == needCount) {
            if (right - left + 1 < minLen) { minLen = right-left+1; start = left; }
            char lc = s.charAt(left);
            window.merge(lc, -1, Integer::sum);
            if (need.containsKey(lc) && window.get(lc) < need.get(lc)) have--;
            left++;
        }
    }
    return minLen == Integer.MAX_VALUE ? "" : s.substring(start, start + minLen);
}`,
    dryrun: `s="ADOBECODEBANC", t="ABC" → expand until all found, shrink → "BANC" (len 4)`,
    edge: "t longer than s→\"\". t not in s→\"\". Multiple valid→return shortest.",
    insight: "Expand to satisfy, shrink to optimize. Track 'have' count vs 'need' count."
},
"p2-17": {
    title: "Next Greater Element I",
    meta: "Easy | Monotonic Stack | Time: O(n) | Space: O(n)",
    thinking: "Use decreasing stack. When we find something bigger, it's the 'next greater' for everything we pop.",
    approach: `Stack stores elements waiting for their next greater. Process array, pop smaller elements from stack.`,
    code: `public int[] nextGreaterElement(int[] nums1, int[] nums2) {
    Map<Integer, Integer> map = new HashMap<>();
    Deque<Integer> stack = new ArrayDeque<>();
    for (int num : nums2) {
        while (!stack.isEmpty() && stack.peek() < num)
            map.put(stack.pop(), num);
        stack.push(num);
    }
    int[] result = new int[nums1.length];
    for (int i = 0; i < nums1.length; i++)
        result[i] = map.getOrDefault(nums1[i], -1);
    return result;
}`,
    dryrun: `nums2=[1,3,4,2] → stack:[1]→pop 1(nge=3),stack:[3]→pop 3(nge=4),stack:[4,2]. map={1:3, 3:4}`,
    edge: "No greater element → -1. Decreasing array → all -1.",
    insight: "Decreasing stack. When bigger element comes, pop all smaller → they found their next greater."
},
"p2-19": {
    title: "Largest Rectangle in Histogram",
    meta: "Hard | Monotonic Stack 🔥 | Time: O(n) | Space: O(n)",
    thinking: "For each bar, find extension left/right until shorter bar. Monotonic increasing stack does this in O(n).",
    approach: `Increasing stack of indices. When current < stack top, pop and calculate area. Width = i - stack.peek() - 1.`,
    code: `public int largestRectangleArea(int[] heights) {
    Deque<Integer> stack = new ArrayDeque<>();
    int maxArea = 0, n = heights.length;
    for (int i = 0; i <= n; i++) {
        int h = (i == n) ? 0 : heights[i];
        while (!stack.isEmpty() && heights[stack.peek()] > h) {
            int height = heights[stack.pop()];
            int width = stack.isEmpty() ? i : i - stack.peek() - 1;
            maxArea = Math.max(maxArea, height * width);
        }
        stack.push(i);
    }
    return maxArea;
}`,
    dryrun: `[2,1,5,6,2,3] → pop 6: area=6*1=6. pop 5: area=5*2=10. Final max=10✓`,
    edge: "Single bar→height. All same→n*h. Increasing→last extends full.",
    insight: "Area = height × (next_smaller_idx - prev_smaller_idx - 1). Monotonic stack finds both in O(n)."
},
"p2-28": {
    title: "LRU Cache",
    meta: "Medium | HashMap + DLL 🔥 | Time: O(1) per op | Space: O(capacity)",
    thinking: "HashMap for O(1) lookup. Doubly Linked List for O(1) remove/add to maintain recency order.",
    approach: `Map<key, Node>. DLL: head↔...↔tail. Get: move to front. Put: add front, if full evict tail.`,
    code: `class LRUCache {
    class Node { int key, val; Node prev, next; }
    Map<Integer, Node> map = new HashMap<>();
    Node head = new Node(), tail = new Node();
    int cap;
    public LRUCache(int capacity) {
        cap = capacity; head.next = tail; tail.prev = head;
    }
    private void remove(Node n) { n.prev.next=n.next; n.next.prev=n.prev; }
    private void addFront(Node n) {
        n.next=head.next; n.prev=head; head.next.prev=n; head.next=n;
    }
    public int get(int key) {
        if (!map.containsKey(key)) return -1;
        Node n = map.get(key); remove(n); addFront(n); return n.val;
    }
    public void put(int key, int value) {
        if (map.containsKey(key)) remove(map.get(key));
        Node n = new Node(); n.key=key; n.val=value;
        map.put(key, n); addFront(n);
        if (map.size() > cap) { Node lru=tail.prev; remove(lru); map.remove(lru.key); }
    }
}`,
    dryrun: `cap=2: put(1,1)→[1]. put(2,2)→[2,1]. get(1)→[1,2]. put(3,3)→evict 2→[3,1].`,
    edge: "Capacity 1→every put evicts. Get non-existent→-1.",
    insight: "HashMap for O(1) lookup + DLL for O(1) order. Most recent at head, LRU at tail."
},
"p3-14": {
    title: "Number of Islands",
    meta: "Medium | BFS/DFS Flood Fill | Time: O(m×n) | Space: O(m×n)",
    thinking: "For each unvisited '1', do BFS/DFS to mark entire island. Count number of BFS/DFS calls.",
    approach: `For each cell: if '1' and not visited → count++, BFS/DFS to mark all connected '1's as visited.`,
    code: `public int numIslands(char[][] grid) {
    int count = 0, m = grid.length, n = grid[0].length;
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            if (grid[i][j] == '1') {
                count++;
                dfs(grid, i, j, m, n);
            }
        }
    }
    return count;
}
void dfs(char[][] grid, int i, int j, int m, int n) {
    if (i<0||i>=m||j<0||j>=n||grid[i][j]!='1') return;
    grid[i][j] = '0'; // mark visited
    dfs(grid,i+1,j,m,n); dfs(grid,i-1,j,m,n);
    dfs(grid,i,j+1,m,n); dfs(grid,i,j-1,m,n);
}`,
    dryrun: `[["1","1","0"],["1","1","0"],["0","0","1"]] → DFS from (0,0) marks top-left island. DFS from (2,2) marks bottom-right. Count=2.`,
    edge: "All water→0. All land→1. Single cell.",
    insight: "Each BFS/DFS from unvisited '1' = one island. Mark visited to avoid recount."
},
"p3-22": {
    title: "Coin Change",
    meta: "Medium | Unbounded Knapsack DP | Time: O(n×amount) | Space: O(amount)",
    thinking: "dp[i] = min coins to make amount i. Try each coin: dp[i] = min(dp[i-coin] + 1).",
    approach: `dp[0]=0, rest=MAX. For i=1 to amount: for each coin: if coin<=i, dp[i]=min(dp[i], dp[i-coin]+1).`,
    code: `public int coinChange(int[] coins, int amount) {
    int[] dp = new int[amount + 1];
    Arrays.fill(dp, amount + 1);
    dp[0] = 0;
    for (int i = 1; i <= amount; i++)
        for (int coin : coins)
            if (coin <= i)
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    return dp[amount] > amount ? -1 : dp[amount];
}`,
    dryrun: `coins=[1,2,5], amount=11 → dp[5]=1, dp[10]=2, dp[11]=3 (5+5+1)`,
    edge: "Amount=0→0. Impossible→-1. Use amount+1 as infinity (cleaner than MAX_VALUE overflow).",
    insight: "dp[i] = min coins for amount i. Classic unbounded knapsack. Try each coin at each amount."
},
"p3-23": {
    title: "Longest Increasing Subsequence",
    meta: "Medium | DP + Binary Search | Time: O(n log n) | Space: O(n)",
    thinking: "Maintain array of smallest tails. For each num: binary search for position → replace or extend.",
    approach: `tails=[]. For each num: binary search for insertion point. If at end→extend. Else→replace tails[pos].`,
    code: `public int lengthOfLIS(int[] nums) {
    List<Integer> tails = new ArrayList<>();
    for (int num : nums) {
        int pos = Collections.binarySearch(tails, num);
        if (pos < 0) pos = -(pos + 1);
        if (pos == tails.size()) tails.add(num);
        else tails.set(pos, num);
    }
    return tails.size();
}`,
    dryrun: `[10,9,2,5,3,7,101,18] → tails: [10]→[9]→[2]→[2,5]→[2,3]→[2,3,7]→[2,3,7,101]→[2,3,7,18]. Length=4`,
    edge: "All decreasing→1. All increasing→n. Duplicates→not strictly increasing.",
    insight: "Maintain 'smallest possible tails' array. BS to find position. Length of tails = LIS length."
}
};
