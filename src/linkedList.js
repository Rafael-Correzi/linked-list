class LinkedList {
  constructor(list) {
    this.list = list;
    this.head = null;
    this.tail = null;
    this.nodeCount = 0;
    this.nodes = {};
  }



  append(value) {
    if (this.head === null) {
      this.head = value;
    }
    if (this.tail !== null) {
      this.tail.nextNode(value);
    }
    this.tail = value;
    this.nodes[this.nodeCount] = value; 
    this.nodeCount++;
  }

  prepend(value) {
    if (this.tail === null) {
      this.tail = value;
    }
    value.nextNode(this.head);
    this.head = value;
    this.nodes[0] = value;
    this.shiftAllRight();
    this.nodeCount++;
  }

  get size() {
    return this.nodeCount;
  }

  get head() {
    return this.head;
  }
  
  get tail() {
    return this.tail;
  }
  
  at(index) {
    return this.nodes[index];
  }
}

