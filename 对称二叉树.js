var isSymmetric = function (root) {
    return isSymmetrical(root, root);
}

function isSymmetrical(pRoot1, pRoot2) {
    if (!pRoot1 && !pRoot2)
        return true;
    if (!pRoot1 || !pRoot2)
        return false;
    if (pRoot1.val != pRoot2.val)
        return false;
    //相当于对pRoot1做前序遍历，最pRoot2做对称前序遍历
    return isSymmetrical(pRoot1.left, pRoot2.right) && isSymmetrical(pRoot1.right, pRoot2.left);
}