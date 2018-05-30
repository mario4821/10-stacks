'use strict';

const Node = require('./node');
const logger = require('./logger');

module.exports = class LinkedList {
  constructor() {
    this.head = null;
  }

  // Big O - o(1)//
  insertAtHead(value) {
    const node = new Node(value);

    node.next = this.head;
    this.head = node;
    return this;
  }

  // Big O - o(1)//
  insertAtEnd(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      return this;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    return this;
  }

  // Big O - o(n) //
  pop() {
    let currentNode = this.head;
    if (!this.head) {
      logger.log(logger.INFO, '#pop could not find value.');
      return null;
    }
    if (!currentNode.next) {
      currentNode = null;
      return currentNode;
    }
    while (currentNode.next) {
      if (!currentNode.next.next) {
        currentNode.next = null;
        return null;
      }
      currentNode = currentNode.next;
    }
    return null;
  }

  // Big O - o(n) //
  remove(value) {
    if (!this.head) {
      logger.log(logger.INFO, '#remove Linked List could not find value.');
      return null;
    }

    if (this === value) {
      delete this.value;
    } else {
      logger.log(logger.INFO, '#remove does not exist.');
    }
    return undefined;
  }

  
  // Big O - o(n) //
  map(callback) {
    if (!this.head) {
      logger.log(logger.INFO, '#method Array is empty and could not find value.');
      return null;
    }
    let currentNode = this.head;
    while (currentNode) {
      currentNode.value = callback(currentNode.value);
      currentNode = currentNode.next;
    }
    return this;
  }
  findLast() {
    let current = this.head;
    if (!this.head) {
      logger.log(logger.INFO, 'Empty stack - value not found');
      return null;
    }
  
    while (current) {
      if (current.next === null) {
        return current.value;
      }
      current = current.next;
    }
    return undefined;
  }
};
