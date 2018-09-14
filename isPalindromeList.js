var isPalindrome = function (head) {
    let current = head;
    let result = true;

    function traverse(node) {
        if (node) {
            traverse(node.next);
            if (node.val != current.val) {
                result = false;
                return;
            }
            current = current.next;
        }
    }
    traverse(head);
    return result;

}