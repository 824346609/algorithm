let twoSum = function(nums, target) {
    let total = new Array;
    for(let i = 0; i < nums.length; i++){
        for(let j = i+1; j < nums.length; j++){
            if(nums[i] + nums[j] == target){
                total[0] = i;
                total[1] = j;
            }
        }
        if(total.length == 2){
            break;
        }
    }
    return total;
};