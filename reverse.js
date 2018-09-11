var firstUniqChar = function (s) {

    let nums = new Array(256);
    let index = -1;
    nums.fill(0);
    // console.log(nums);
    for (let i = 0; i < s.length; i++) {
        // console.log(s.charCodeAt(i));
        // console.log(nums[s.charCodeAt(i)]);
        nums[s.charCodeAt(i)]++;
        // console.log(nums[s.charAt(i).charCodeAt()]++);
    }
    // console.log(nums);
    for (let i = 0; i < s.length; i++) {

        if (nums[s.charCodeAt(i)] == 1) {
            index = i;
            break;
        }
    }
    return index;
     
};                             
console.log(firstUniqChar(s = "loveleetcode"));