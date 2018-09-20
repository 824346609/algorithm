var climbStairs = function(n) {
    let temp = 0;
    let a = 1;
    let b = 2;
    if(n < 1){
        return 0;
    }else if(n == 1){
        return 1;
    }else if(n == 2){
        return 2;
    }
    for(let i = 3; i <= n; i++){
        temp = a + b;
        a = b;
        b = temp;
    }
    return temp;
};