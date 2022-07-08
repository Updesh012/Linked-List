// console.log("Hi Updesh")
// ***************createing linked list***********************

class Node {
    constructor(element) {
        this.data = element;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    add(element) {
        let node = new Node(element);
        let current;
        if (this.head == null) {
            this.head = node;
        }
        else {
             current = this.head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = node;
        }
    }
    // ************Printing the Element*********************

    printList(){
        let temp = this.head;
        if(this.head == null){
            console.log("List is Empty");
            return;
        }
        else{
            while(temp != null){
                console.log(temp.data);
                temp = temp.next;
            }
        }
    }
    // ************Printing the Element*********************

// ****************Inserting node at the begining****************
 insertNodeAtBeg(element){

    let current = new Node(element);

    current.next = this.head;
    this.head = current;
}
// ****************Inserting node at the begining****************

// ****************Inserting node at the end****************
insertNodeAtEnd(element){

    let node = new Node(element);
    let temp = this.head;
    while(temp.next != null){
        temp = temp.next;
    }
    temp.next = node;
}
// ****************Inserting node at the end****************

// ********************Inserting node after a particular element**************
 insertAfterElem(element,data){

    let node = new Node(element);
    let temp = this.head;
    while(temp.data != data){
        temp = temp.next;
    }
    node.next = temp.next;
    temp.next = node; 
}
// ********************Inserting node after a particular element**************

// ********************Inserting node before a particular element**************

insertBeforeElem(element,data){

    let node = new Node(element);
    let prev = null;
    let current = this.head;

    while(current.data != data){
        prev= current;
        current =current.next;
    }
    prev.next = node;
    node.next = current;
}
// ********************Inserting node before a particular element**************

// *****************checking is data present in linked list ***************

    isPresent(data){
       let print = "not present"
        if(this.head == null){
            console.log(print)
        }
        else{
            let current = this.head;
            while(current != null){
                if(current.data == data){
                    print = "present";
                }
                current = current.next;
            }
        }
        console.log(print)
    }
    // *****************checking is data present in linked list ***************











}

let l1 = new LinkedList();
l1.add(10);
l1.add(20);
l1.add(30);
l1.add(40);
l1.add(50);
l1.insertNodeAtBeg(70)
l1.insertNodeAtBeg(80)
l1.insertNodeAtEnd(90);
l1.insertNodeAtEnd(100);
l1.insertAfterElem(1,30)
l1.insertBeforeElem(2,30);
l1.isPresent(30)

l1.printList()
// ***************createing linked list***********************






















