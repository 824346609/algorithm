var removeDuplicates = function (nums) {
    for (var i = 0; i < nums.length; i++) {
        for (var j = nums.length - 1; j > i; j--) {
            if (nums[i] == nums[j]) {
                nums.splice(j, 1);
            }
        }
    }
    
    return nums.length;
};