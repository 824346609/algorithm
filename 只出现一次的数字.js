var singleNumber = function(nums) {
    nums.sort();
 for(let i = 0; i < nums.length; i+=2){
     if (i + 1 >= nums.Length){
         return nums[i];
     }
     if(nums[i] != nums[i+1])
     {
     
         return nums[i];
     } 
 }
 };