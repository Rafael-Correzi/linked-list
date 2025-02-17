class Node {
  constructor(value, nextNode) {
    this._value = value;
    this._nextNode = nextNode;
  }

  get getValue() {
    return this.value;
  }

  get getNextNode() {
    return this.nextNode;
  }

  set setValue(val) {
    this.value = val;
  }

  set setNextNode(next) {
    this.nextNode = next;
  }
  
}

export  { Node };
