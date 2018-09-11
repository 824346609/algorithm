var moveZeroes = function(nums) {
    let lastIndex = nums.length-1;
    let curIndex = nums.length-1;
    let count = 0;
    while(curIndex >= 0){
        if(nums[curIndex] == 0){
            count = lastIndex - curIndex;
            for(let i = 0; i < count; i++){
                nums[curIndex + i] = nums[curIndex + 1 + i];
            }
            nums[lastIndex] = 0;
            lastIndex--;
        }
        curIndex--;
    }
};