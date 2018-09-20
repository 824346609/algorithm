var isValidBST = function(root) {
    if (root === null) return true;
    if(noGreater(root.left,root.val) && noLess(root.right,root.val)){
         return isValidBST(root.left) && isValidBST(root.right);
    }else{
        return false;
    }
};

function noGreater(left,start){
    if(left === null) return true;
    if(left.val >= start) return false
    return noGreater(left.left,start) && noGreater(left.right,start);
}

function noLess(right,start){
    if(right === null) return true;
    if(right.val <= start) return false
    return noLess(right.left,start) && noLess(right.right,start);
}
