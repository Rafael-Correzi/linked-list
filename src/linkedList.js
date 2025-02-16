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
    this.tail = value;
    this.nodeCount++;
  }

  prepend(value) {
    if (this.tail === null) {
      this.tail = value;
    }
    this.head = value;
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
    return
  }
}

