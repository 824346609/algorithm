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
// if (!head) {return true};
//     let compare = head;
//     while (compare.next) {
//         compare.next.prev = compare;
//         compare = compare.next;
//     }
    
//     while (head) {
//         if (head.val != compare.val) {
//             return false;
//         }
//         compare = compare.prev;
//         head = head.next;
//     }
//     return true;