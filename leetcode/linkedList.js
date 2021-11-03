class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0
    }

    insertFirst(data) {
        this.head = new Node(data, this.head)
        this.size++;
    }

    insertLast(data) {
        let node = new Node(data);
        let current;
        if(this.head === null) {
            this.head = node
        } else {
            current = this.head
            while(current.next !== null) {
                current=current.next
            }
            current.next = node
        }
        this.size++;
    }

    insertAtIndex(data, index) {

    }

    printData() {
        let current = this.head
        while(current) {
            console.log(current.data);
            current = current.next
        }
    }

    getSize() {
        console.log(this.size)
    }
}

const ll = new LinkedList();

ll.insertFirst('Ryan')
ll.insertFirst('100')
ll.insertLast(300)
ll.getSize()
ll.printData()

