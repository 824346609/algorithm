var myAtoi = function(str) {
    let str1 = str.match(/^(\s*)(\-?)(\d+)/g);
    let str2 = str.match(/^(\s*)(\+?)(\d+)/g);
    if(str1 == null && str2 == null){
        return 0;
    }
    //strTable[0].replace(/[\ ]/g,"")
    console.log(str1[0].replace(/[\ ]/,""));
    // console.log(str1[0].replace(/(\s+)/g,''));
    // console.log(parseInt(str1[0].replace(/[\ ]/g,"")));
    let num;
    if(str1 != null){
        num = parseInt(str1[0]);
    }else{
        num = parseInt(str2[0]);
    }
    if(num > Math.pow(2,31)){
        return Math.pow(2,31)-1;
    }else if(num < Math.pow(2,31)){
        return -Math.pow(2,31);
    }
    return num;
};
myAtoi(str ='         -4193asd with words');