# Lab 10 - Stacks

**Author**: Mario Flores Jr.

**Version**: 1.0.0

## Overview

This lab is an exercise in implementing a stack as a Linked List. The stack itself is a first in/first out (FIFO) data structure.

# Getting Started

Install dependencies referenced in Architecture, in the terminal type:

```npm i -D <dependencies>```

To run tests, in terminal type:

```npm run test```

## Stack Methods Documentation

```push(value)```

- The push method will inserts a node at the head of the Linked List, becoming the most recently pushed node.

```pop()```

- The most recently pushed node will be removed with the pop method, and the next value in the stack will then be reassigned to the top.

```peek(value)```

- The peek method will *only* return the value of the top of the stack, leaving the node in place and the stack unchanged. 

```isEmpty()```

- This method will check if the stack is empty, and will return a boolean response (empty stack returns true).

## Architecture

JavaScript, jest, eslint, babel