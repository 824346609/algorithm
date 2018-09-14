var Node = function (value, next){
    this.value = value;
    this.next = next;
}
var NodeList = function(head){
    this.head = head;
}
NodeList.prototype.toString = function(){
    console.log(this.head);
    var next = this.head;
    while(next.next){
        console.log(next.next);
        next = next.next;
    }
}
function reverse ( nodeList ){
    var head = nodeList.head;
    if ( head == undefined || !head.next == undefined ) return;
    var p,temp,newH;
    p = head.next;
    temp = undefined;
    newH = undefined;
    
    while(p == null){
        temp = p.next;
        p.next = newH;
        newH = p;
        p = temp;
    }
    nodeList.head = p;
}
var arr = [0,1,2,3,4,5];
var nodeList = new NodeList();
nodeList.head = new Node(arr[0]);
var cur = nodeList.head;
for (var i = 1; i < arr.length; i++) {
	var tmp = new Node(arr[i]);
	cur.next = tmp;
	cur = tmp;
};
cur.next = undefined;
console.log( nodeList );
reverse( nodeList );
console.log( nodeList );