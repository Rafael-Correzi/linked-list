class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }

  get value() {
    return this.value;
  }

  get nextNode() {
    return this.nextNode;
  }

  set value(value) {
    this.value = value;
  }

  set nextNode(nextNode) {
    this.nextNode = nextNode;
  }

  
}