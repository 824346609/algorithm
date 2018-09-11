var containsDuplicate = function(nums) {
    if(Object.keys(nums).length == 0){
         jugg = false
     }else{
          for(var i = 0; i < nums.length;i++){
         for(var j = i+1; j < nums.length; j++){
             if(nums[i] == nums[j]){
                jugg = true;
                break;
             }else{
                jugg = false;
             }
         }
         if(jugg == true){
             break;
         }
     }
 }
     return jugg;
 };