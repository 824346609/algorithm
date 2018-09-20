// 编写一个函数来查找字符串数组中的最长公共前缀。

// 如果不存在公共前缀，返回空字符串 ""。

// 示例 1:

// 输入: ["flower","flow","flight"] 0 0 , 1 0, 2 0
// 输出: "fl"
// 示例 2:

// 输入: ["dog","racecar","car"]
// 输出: ""
// 解释: 输入不存在公共前缀。
// 说明:

// 所有输入只包含小写字母 a-z 。
var longestCommonPrefix = function (strs) {
    let len = strs.length; //3
    if (len == 0) {
        return "";
    }else if(len == 1){
        return strs[0];
    }
    let start = 0;
    let min = strs[0].length;
    for (let i = 1; i < len; i++) {
        if (min > strs[i].length) {
            min = strs[i].length;
        }
    }
    for (let i = 0; i < min; i++) {
        if(i > 0 && start == 0){
            return "";
        }
        for (let j = 0; j < len; j++) {
                if(j + 1 < len && strs[j].charAt(i) != strs[j+1].charAt(i)){
                    break;
                }
                if(len - 2 == j){
                    start++;
                }
        }
    }
    if(start>0){
        return strs[0].substring(0,start);
    }else{
        return "";
    }
};
console.log(longestCommonPrefix(["dog","racecar","car"]));