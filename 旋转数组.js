var rotate = function(nums, k) {
    var start = 0;
    var move = 0;
    var temp = 0;
    var value = nums[start];
    for(var i = 0; i < nums.length; i++){
        move = (move + k) % nums.length;
        temp = nums[move];
        nums[move] = value;
        if(move == start){
            move++;
            start++;
            value = nums[start];
        }else{
            value = temp;
        }
    }
};