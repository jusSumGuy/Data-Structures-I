
class Stack {
  constructor() {
    this.storage = [];
  }
  get size() {
    return this.storage.length;
  }
  push(input) {
    // this.storage[this.size] = input;
    this.storage.unshift(input);
  }
  pop() {
    const popped = this.storage.shift();
    return popped;
  }
}

module.exports = Stack;
