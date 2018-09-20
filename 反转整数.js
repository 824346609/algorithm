var reverse = function(x) {
    var resultArr = [];
    var intToStr = x.toString();
    for(var i = intToStr.length-1;i > 0;i--){
        resultArr.push(intToStr[i]);
    }
    console.log(resultArr);
    if(intToStr[0] == "-"){
        resultArr.unshift("-");
    }
    console.log(resultArr);
    resultArr.push(intToStr[0]);
    console.log(resultArr);
    var resultNum = parseInt(resultArr.join(""));
    if(resultNum <= Math.pow(-2,31) || resultNum >= Math.pow(2,31) - 1 ){
        return 0;
    }
    return resultNum;
};
console.log(reverse('123'));