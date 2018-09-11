// 输入: haystack = "hello", needle = "ll"
// 输出: 2
var strStr = function (haystack, needle) {
        let hLen = haystack.length;
        let nLen = needle.length;
        if(nLen == 0){
            return 0;
        }
        if(nLen > hLen){
            return -1;
        }
        for(let i = 0; i <= hLen - nLen; i++){
            // let flag = true;
            // for(let j = 0; j < nLen; j++){
            //     if(haystack[i+j] != needle[j]){
            //         flag == false;
            //         break;
            //     }
            // }
            // if(flag){
            //     return i;
            // }
            let cut = haystack.substr(i,nLen);
            if(cut == needle){
                return i;
            }
        }
       return -1;
};
console.log(strStr(haystack = "aasdasd", needle = "a"));