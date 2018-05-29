'use strict';

const Stack = require('../lib/stack');

describe('stack.js', () => {
  test('#constructor', () => {
    const testList = new Stack();
    expect(testList.storage.head).toBeNull();
  });
  
  test('push should add inserted value at the head of LinkedList', () => {
    const testList = new Stack();
    testList.push(1);
    testList.push(2);
    testList.push(3);
    expect(testList.storage.head.next.next.value).toEqual(3);
  });

  test('pop should remove value at the top of the stack', () => {
    const testList = new Stack();
    testList.push(1);
    testList.push(2);
    testList.push(3);
    testList.pop();
    expect(testList.storage.head.next.next).toBeNull();
  });

  test('peek should return the value of the top of the stack', () => {
    const testList = new Stack();
    testList.push(1);
    testList.push(2);
    testList.push(3);
    testList.peek();
    expect(testList.peek()).toEqual(3);
  });

  test('isEmpty should return False if stack is not empty', () => {
    const testList = new Stack();
    testList.push(1);
    expect(testList.isEmpty()).toEqual(false);
  });

  test('isEmpty should return True if stack is empty', () => {
    const testList = new Stack();
    expect(testList.isEmpty()).toEqual(true);
  });
});
