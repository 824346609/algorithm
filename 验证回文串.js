// 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

// 说明：本题中，我们将空字符串定义为有效的回文串。

// 示例 1:

// 输入: "A man, a plan, a canal: Panama"
// 输出: true
// 示例 2:

// 输入: "race a car"
// 输出: false

var isPalindrome = function(s) {
        let s1 = s.toLowerCase().replace(/[^a-z0-9]/g,'');
        let lastIndex = s1.length - 1;
        let startIndex = 0;
        for(let i = 0; i < s1.length; i++){
            // console.log(startIndex);
            // console.log(lastIndex);
            if(s1[startIndex] == s1[lastIndex]){
                --lastIndex;
                ++startIndex;
            }else{
                console.log(i);
                return false;
            }
        }
        return true;
};
console.log(isPalindrome("race a car"));