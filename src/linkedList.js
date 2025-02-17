class LinkedList {
  constructor(list) {
    this.list = list;
    this.head = null;
    this.tail = null;
    this.nodeCount = 0;
  }



  append(value) {
    if (this.head === null) {
      this.head = value;
    }
    if (this.tail !== null) {
      this.tail.nextNode(value);
    }
    this.tail = value;
    this.nodeCount++;
  }

  prepend(value) {
    if (this.tail === null) {
      this.tail = value;
    }
    value.nextNode(this.head);
    this.head = value;
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

  pop() {
    this.tail = null;
    delete this.nodes[this.nodeCount];
    this.nodeCount--;
    this.tail = this.nodes[this.nodeCount];
  }

  contains(value) {
    let current = this.head;
    do {
      if (current.value === value) {
        return true;
      }
      current = current.nextNode;
    }
    while (current.value !== value); 
    return false;
  }

  find(value) {
    let current = this.head;
    let index = 0;
    do {
      if (current.value === value) {
        return index;
      }
      current = current.nextNode;
      index++;
    }
    while (current.value !== value); 
    return null;
  }
}
