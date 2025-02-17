import { Node } from "./node.js";

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.nodeCount = 0;
  }

  nodes = {};

  append(value) {
    if (this.head === null) {
      this.head = value;
    }
    if (this.tail !== null) {
      this.tail.setNextNode = value;
    }
    this.tail = value;
    value.setNextNode = null;
    this.nodes[this.nodeCount] = value;
    this.nodeCount++;
  }

  prepend(value) {
    if (this.tail === null) {
      this.tail = value;
    }
    value.setNextNode = this.head;
    this.#shiftAllRight();
    this.nodes[0] = value;
    this.head = value;
    this.nodeCount++;
  }

  #shiftAllRight() {
    for (let i = this.nodeCount; i > 0; i--) {
      this.nodes[i] = this.nodes[i - 1];
    }
  }

  get size() {
    return this.nodeCount;
  }

  get getHead() {
    return this.head;
  }

  get getTail() {
    return this.tail;
  }

  at(index) {
    return this.nodes[index];
  }

  pop() {
    if (this.head != undefined) {
      this.tail = null;
      this.nodeCount--;
      this.tail = this.nodes[this.nodeCount - 1];
      this.tail.nextNode = null;
    }
  }

  contains(value) {
    let current = this.head;
    do {
      if (current.value === value) {
        return true;
      }
      current = current.nextNode;
    } while (current !== null);
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
    } while (current !== null);
    return false;
  }

  get toString() {
    let current = this.head;
    let str = "";
    while (current != null) {
      str += `( ${current.value} ) -> `;
      current = current.nextNode;
    }
    return str + "null";
  }
}

const node1 = new Node();
node1.setValue = "Jhon";
node1.setNextNode = "Mary";
const node2 = new Node();
node2.setValue = "Mary";
node2.setNextNode = "Michael";
const node3 = new Node();
node3.setValue = "Michael";

const list1 = new LinkedList();
list1.append(node1);
list1.append(node2);
list1.prepend(node3);
list1.pop();
console.log(list1.nodeCount);
console.log(list1.toString);
console.log(node1);
console.log(list1.find("Jhon"));
console.log(list1.contains("Mary"));
console.log(list1.at(1));
