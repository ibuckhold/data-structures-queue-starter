// ============================================================================
// Implementation Exercise: Queue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Queue and all of its methods below using a NODE implementation
// (your Queue should not contain any built-in JavaScript Arrays)
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }

}

class Queue {
    constructor(front, back) {
        this.front = front;
        this.back = back;
        this.length = 0;
    }
    enqueue(input) {
        input = new Node(input); //Should create a new node with the value provided as input
        if (this.length >= 1) {
             //Should reassign only the back pointer when new nodes are added to the back of the queue of size one or greater
             //Should point the next property of the back node to the node that follows it for queues of size one or greater
            this.back.next = input; // pointing the back to the next node being added
            this.back = input; // reassigning the back to new node added
        }else {  //Should reassign both the front and back pointers when a new node is added to the back of an empty queue
            this.front = input; // this new person added to empty line is the FRONT and BACK
            this.back = input;
        }
        this.length++; //Should increment the queue's length by one each time a node is added to the queue
        return this.length; // Should return the size of the queue after a new node is added to the queue
    }
    dequeue() {

    }
    size() {

    }
}

exports.Node = Node;
exports.Queue = Queue;
