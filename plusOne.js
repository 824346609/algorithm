var plusOne = function(digits) {
    let len = digits.length;
  for(let i = len-1; i >= 0; i--){
  if(digits[i] < 9){
      digits[i]++;
      return digits;
  }
  digits[i] = 0;
}
  let result = new Array(len+1);
  for(let j = 0; j < result.length; j++){
      if(j == 0){
          result[0] = 1;
      }else{
          result[j] = 0;
      }
  }
  return result;
};