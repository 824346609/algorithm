// 报数序列是指一个整照其中的整数的顺序进数序列，按行报数，得到下一个数。其前五项如下：

// 1.     1  one 1
// 2.     11 two 1 
// 3.     21 one 2 one 1
// 4.     1211 one 1 one 2 two 1  111221
// 5.     111221 
// 1 被读作  "one 1"  ("一个一") , 即 11。
// 11 被读作 "two 1s" ("两个一"）, 即 21。
// 21 被读作 "one 2",  "one 1" （"一个二" ,  "一个一") , 即 1211。



// 给定一个正整数 n（1 ≤ n ≤ 30），输出报数序列的第 n 项。

// 注意：整数顺序将表示为一个字符串。



// 示例 1:

// 输入: 1
// 输出: "1"
// 示例 2:

// 输入: 4
// 输出: "1211"

var countAndSay = function (n) {
    let s = "1";
    for(let i = 1; i < n; i++){
        let count = "1";
        let str = "";
        for(let j = 0; j < s.length; j++){
            if(j+1 < s.length && s[j] == s[j+1]){
                count++;
            }else{
                str += count;
                str += s[j];
                count = 1;
                // str +=
            }
            
        }
        s = str;
    }
    return s;
};
console.log(countAndSay(4));
// 