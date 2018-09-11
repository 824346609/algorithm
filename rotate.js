// 输入: nums1 = [1,2,2,1], nums2 = [2,2]
// 输出: [2,2]

// 输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// 输出: [4,9]
var intersect = function(nums1, nums2) {
    let len1 = nums1.length;
    let len2 = nums2.length;
    nums1.sort(function(a,b){
        return a-b;
    } )
    nums2.sort(function(a,b){
        return a-b;
    } )
    let sum = new Array();
    let i = 0;
    let j = 0;
    while(i < len1 && j < len2){
        if(nums1[i] > nums2[j]){
            j++;
        }else if(nums1[i] < nums2[j]){
            i++;
        }else{
            sum.push(nums1[i]);
            i++;
            j++;
            
            
        }
    }
    return sum;
  console.log(sum);
};
intersect([1,2,2,1],
    [2,2])