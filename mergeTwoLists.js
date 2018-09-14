// 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

// 示例：

// 输入：1->2->4, 1->3->4 
// 输出：1->1->2->3->4->4  1->1->
// 1->2->4,1->3->4
// temp = f1.next;
// if(f1 <= s1) f1.next = s1  else  s1.next = f1
// p = temp;

var mergeTwoLists = function (l1, l2) {
    var l3 = new ListNode(-1);
    var c3 = l3;
    while (l1 !== null && l2 !== null) {
        if (l1.val <= l2.val) {
            c3.next = l1;
            l1 = l1.next;
        } else {
            c3.next = l2;
            l2 = l2.next;
        }
        c3 = c3.next;
    }
    c3.next = (l1 === null) ? l2 : l1;
    return l3.next;
};