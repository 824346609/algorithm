var isAnagram = function(s, t) {
    let sLen = s.length;
    let nums = new Array(256);
    nums.fill(0);
    let nums1 = new Array(256);
    nums1.fill(0);
    let tLen = t.length;
    if(sLen == 0 && tLen == 0){
        return true;
    }else if(sLen != tLen){
        return false;
    }
    for(let i = 0; i < sLen;i++){
        nums[s.charCodeAt(i)]++;
        nums1[t.charCodeAt(i)]++;
    }
    let j = 0;
    let flag;
    for(let i = 0; i < sLen;i++){
       flag = false;
       for(j = 0; j < sLen;j++){
        if(s[i] == t[j]){   
            if(nums[s.charCodeAt(i)] == nums1[t.charCodeAt(j)]){
                flag = true;
                break;
            } 
        }
       }
      if(!flag){
          return false;
      }
    }
   if(flag == true){
     return true;
   }else{
       return false;
   }
};
// console.log(isAnagram("anagram","nagaram"));