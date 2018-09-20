var merge = function(nums1, m, nums2, n) {
    let index1 = m - 1;
    let index2 = n - 1;
     while(index2 >= 0){
         if(index1 < 0){
             nums1[index1 + index2 + 1] = nums2[index2];
             index2-=1;
         }
         if(nums1[index1] > nums2[index2]){
             nums1[index1 + index2 + 1] = nums1[index1];
             index1-=1;
         }else{
             nums1[index1 + index2 + 1] = nums2[index2];
             index2-=1;
         }
     }
 };