var hasCycle = function(head) {
    if (!head || !head.next) return false
    let pSlow = head;
    let pFast = head.next;
    while(pFast&&pFast.next){
        if(pSlow == pFast) return true
        pSlow = pSlow.next;
        pFast = pFast.next.next;
    }
    return false;
};