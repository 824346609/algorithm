var removeNthFromEnd = function(head, n) {
    let first = head;
    let second = head;;
     while(n--!=0){
         first=first.next;
     }
     if(!first){
         return head.next;
     }    
    while(first.next!==null){
        first = first.next;
        second = second.next;
    }
    second.next = second.next.next;
    return head;
};