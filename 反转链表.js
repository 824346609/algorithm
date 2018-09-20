var reverseList = function(head) {
    var list = head;
    var p = null;
    var temp = null;

    while(list !== null) {    
        temp = list.next;
        list.next = p;
        p = list;
        list = temp
    }
    return p;
};  