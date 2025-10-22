---
title: Data Structures
summary: Key concepts and implementation tips for fundamental data structures
date: 2024-04-15
math: true
authors:
  - admin
tags:
  - DataStructures
  - Programming

exclude_search: false
dl_kind: "subjectsCount"
semester: "2-1"
course_topics:
  - Core data structures
  - Recursion and trees
  - Graphs and search
---

## 1. Overview

Data structures organise information in memory and on disk so that algorithms can run efficiently. When solving problems, consider both the abstract data type (what operations are supported) and the concrete implementation (time/space trade-offs).

---

## 2. Arrays and Wrapper Classes

### 2.1 Arrays
- **Traits:** Contiguous memory, O(1) random access by index.
- **Limitations:** Fixed size; mid-array insert/delete costs O(n) shifts.
- **Use cases:** Cache-friendly for numerical computing, DP tables, game state loops.

### 2.2 Class Wrappers
- Wrapping arrays inside classes adds safety features such as bounds checking, dynamic resizing, and iterators.
- `std::vector` (C++) and `ArrayList` (Java) double their capacity when full, yielding amortised O(1) append operations.

---

## 3. Stack and Queue

### 3.1 Stack
- Last-in-first-out (LIFO). Underpins call stacks, delimiter checking, DFS backtracking.
- Core ops: `push`, `pop`, `top`. Implementable with arrays or linked lists.

### 3.2 Queue
- First-in-first-out (FIFO). Used in BFS, job scheduling, buffering.
- Core ops: `enqueue`, `dequeue`, `front`. Circular arrays eliminate index wrap-around.

### 3.3 Deque
- Inserts and deletes on both ends. Handy for sliding windows and monotonic queues.

---

## 4. Pointers and Linked Lists

### 4.1 Pointers
- Store memory addresses and reference dynamically allocated objects.
- Beware of null dereferences, dangling pointers, and double frees.

### 4.2 Singly Linked List
- Nodes store `(data, next)`. Inserts/deletes run in O(1); random access takes O(n).
- Techniques: head insertion, tail pointer maintenance, sentinel (dummy) heads.

### 4.3 Doubly Linked List
- Each node keeps `prev` and `next`, enabling bidirectional traversal.
- Useful for LRU caches and editors. Twice as many pointer updates—test carefully.

---

## 5. List Abstract Data Type

- List ADTs define ordered collections; performance depends on implementation.
- **Dynamic array list:** O(1) indexing, O(n) mid-insert/delete.
- **Linked list:** O(1) insert/delete (with references), O(n) search; cursor iterators help frequent traversals.

---

## 6. Recursion

- Functions call themselves to break a problem into smaller cases.
- Essential elements: **base case**, **recursive relation**, and **state propagation**.
- Watch call-stack depth; tail recursion can often be transformed into iteration.

---

## 7. Trees

- Hierarchical, acyclic structures branching from a root.
- Terminology: depth, height, degree, subtree.
- Traversals: preorder, inorder, postorder, level-order—implemented via recursion or queues.

---

## 8. Binary Search Tree (BST)

- Maintains the invariant left subtree < root < right subtree.
- Average O(log n) lookup/insert/delete; skewed trees degrade to O(n).
- **Balancing options:** AVL, red-black tree, treap, splay tree—guarantee logarithmic height.

---

## 9. Priority Queue

- Stores elements with priorities; retrieves the highest (or lowest) priority element.
- Typically implemented with heaps: `insert` and `extract` in O(log n), `peek` in O(1).
- Applications: Dijkstra’s algorithm, schedulers, event simulation, running medians.

---

## 10. Graphs

- Comprised of vertices (V) and edges (E). Consider direction, multiedges, self-loops.
- Representations:
  - **Adjacency list:** O(V + E) space—ideal for sparse graphs.
  - **Adjacency matrix:** O(V²) space—constant-time edge existence checks.
- Traversals: DFS (stack/recursion) and BFS (queue) underpin connectivity, topological order, and cycle detection.

---

## 11. Weighted Graphs

- Each edge carries a cost. Models maps, networks, logistics.
- Single-source shortest paths: Dijkstra (non-negative weights), Bellman–Ford (with negatives), SPFA (practical improvements).
- All-pairs shortest paths: Floyd–Warshall (O(V³)), Johnson’s algorithm (sparse graphs).
- Minimum spanning tree: Kruskal (Union-Find) and Prim (priority queue).

---

## 12. Sorting (Review)

- Reorders data to enable faster search or analytics.
- **Comparison-based:** Quick, merge, heap sort—lower bound O(n log n).
- **Non-comparison:** Counting, radix, bucket sort—use key range/digits to reach O(n + k).
- Evaluate stability, in-place behaviour, memory footprint, and whether divide-and-conquer fits the scenario.

---

## 13. Searching

- **Linear search:** Scan sequentially; works on unsorted collections; O(n).
- **Binary search:** Halves the range on a sorted array; O(log n).
- **Hash lookup:** Average O(1) with well-designed collisions handling.
- **Tree search:** Balanced BSTs or B-Trees deliver O(log n); maintaining balance is vital.

---

## 14. Study Tips

- Build your own complexity tables and revisit them regularly.
- Step through pointer manipulations with a debugger to internalise recursion and linked structures.
- Analyse input size, update frequency, and random access needs before choosing a structure.
