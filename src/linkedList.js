class LinkedList {
  constructor(node) {
    this.node = node;
  }

  get node() {
    return this.node;
  }

  set node(node) {
    this.node = node;
  }
}

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