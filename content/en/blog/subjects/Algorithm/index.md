---
title: Algorithms
summary: Quick survey of essential topics in sorting, balanced trees, hashing, and graph algorithms
date: 2024-10-10
math: true
authors:
  - admin
tags:
  - Algorithms
  - DataStructures

exclude_search: false
dl_kind: "subjectsCount"
semester: "2-2"
course_topics:
  - Sorting algorithms
  - Balanced binary search trees
  - Hashing and graph algorithms
---

## 1. Overview

This note compiles the key concepts covered in an undergraduate algorithms course. Use it to refresh important ideas quickly and to understand how the individual topics are connected.

---

## 2. Sorting Algorithms

Sorting is the preparatory step for many problems. When choosing an algorithm, consider input size, data distribution, auxiliary space, and whether stability (preserving the order of equal keys) matters.

| Algorithm | Average Time | Worst Time | Extra Space | Highlights |
| --- | --- | --- | --- | --- |
| Merge Sort | O(n log n) | O(n log n) | O(n) | Stable; great for external sorting |
| Quick Sort | O(n log n) | O(n²) | O(log n) | Divide and conquer; pivot choice is critical |
| Selection Sort | O(n²) | O(n²) | O(1) | Few swaps but generally slow; unstable |
| Bubble Sort | O(n²) | O(n²) | O(1) | Simple; fast on nearly sorted data with early exit |
| Insertion Sort | O(n²) | O(n²) | O(1) | Excellent for small or nearly sorted arrays; stable |
| Radix Sort | O(d·n) | O(d·n) | O(n + k) | Digit-wise; bypasses comparisons |
| Counting/Bucket Sort | O(n + k) | O(n + k) | O(n + k) | Strong when value range is small or uniform |

### 2.1 Merge Sort
- Recursively splits the array and merges the sorted halves.
- Stable because equal keys retain their relative order.
- Drawbacks: needs extra memory and incurs recursion overhead.

### 2.2 Quick Sort
- Partitions around a pivot into smaller and larger elements and recurses.
- Typically the fastest in practice, but degenerates to O(n²) on sorted data unless you randomise or choose smart pivots (median-of-three, etc.).

### 2.3 Selection Sort
- Repeatedly selects the minimum (or maximum) remaining element and swaps it into place.
- Swap count is limited to O(n), but the algorithm is mainly pedagogical due to its O(n²) comparisons.

### 2.4 Bubble Sort
- Repeatedly swaps adjacent elements that are out of order so the largest “bubbles” to the end.
- Each pass places one element; adding a flag for “already sorted” speeds up nearly sorted inputs.

### 2.5 Insertion Sort
- Inserts each element into the correct position within the already sorted prefix.
- Stable and efficient for tiny datasets or partially ordered inputs.

### 2.6 Radix Sort
- Sorts integers or fixed-length strings digit by digit: LSD (least significant digit first) or MSD (most significant digit first).
- Requires a stable subroutine (e.g., counting sort) to guarantee global stability.

### 2.7 Counting & Bucket Sort
- Counting sort achieves O(n + k) for small value range k; bucket sort achieves expected O(n) when inputs are uniformly distributed.
- Both need extra memory and require advance knowledge of the key range.

---

## 3. Trees: Red-Black Trees

Red-black trees are balanced binary search trees that maintain O(log n) height by enforcing colour-based invariants.

- **Invariants:**  
  (1) Every node is red or black.  
  (2) The root and NIL leaves are black.  
  (3) Red nodes have black children.  
  (4) Every path from a node to its descendant NIL nodes contains the same number of black nodes.
- **Operations:**  
  Insert like a BST, then fix colours/rotations. Delete by replacing with a successor and resolving the “double black” case.
- **Why use them:** Fewer rotations than AVL trees, making them practical when inserts/deletes are frequent.
- **Examples:** `std::map`, `std::set`, Java `TreeMap`, Linux CFS scheduler.

---

## 4. Hash Tables

- **Idea:** Hash a key to an array index so average lookup/insertion/deletion becomes O(1).
- **Collision:** When multiple keys hash to the same bucket. Quality of the hash function and load factor (n/m) dictate performance.

### 4.1 Collision-Resolution Strategies
1. **Separate chaining:** Linked lists or dynamic arrays per bucket. Simple and flexible, but needs pointer storage.
2. **Open addressing:** Probe for the next empty slot (linear, quadratic probing, double hashing). Cache-friendly, yet suffers from clustering.
3. **Rehashing:** Enlarge the table when the load factor exceeds a threshold and reinsert all entries.

### 4.2 Design Tips
- Aim for a hash function that distributes keys evenly, is fast to compute, and resists adversarial input.
- For concurrent scenarios, look into lock-free buckets, striped locks, or partitioned tables.

---

## 5. Graph Algorithms

Graphs model networks, dependency orders, and relationships. Sparse graphs typically use adjacency lists; dense graphs favour adjacency matrices.

### 5.1 Topological Sort
- Produces a linear order of a DAG’s prerequisites.
- Implement via Kahn’s algorithm (in-degree queue) or DFS finishing times; both detect cycles when sorting fails.
- Useful for course prerequisites, build systems, and task scheduling.

### 5.2 Bellman–Ford Algorithm
- Handles graphs with negative edge weights to find single-source shortest paths.
- Runs |V|−1 relaxations and checks for updates on the |V|th iteration to detect negative cycles.
- Critical for routing protocols such as RIP where Dijkstra cannot be applied.

### 5.3 Pebble Game
- Places “pebbles” on DAG nodes to study computation order and resource usage.
- Helps derive lower bounds for register allocation, memory minimisation, and proof complexity.
- Solving the optimal pebbling strategy is challenging beyond restricted graph classes.

### 5.4 Additional Highlights
- **DFS/BFS:** Core search routines; basis for connectivity, cycle detection, and topological sort.
- **Strongly Connected Components:** Kosaraju’s or Tarjan’s algorithms condense graphs into DAGs.
- **Minimum Spanning Tree:** Kruskal and Prim minimise connection cost in undirected weighted graphs.

---

## 6. String Matching: Rabin–Karp

- Uses a rolling hash to compare the pattern hash with substrings of the text.
- Offers expected O(n + m) time; collisions trigger explicit substring comparisons.
- Particularly handy for multi-pattern search after precomputing pattern hashes.

---

## 7. Study Tips

- Implement algorithms and analyse both average and worst cases using your own test datasets.
- Visualise algorithm steps with tools such as VisuAlgo or CS Academy.
- In coding interviews or contests, inspect input bounds and memory constraints before choosing a strategy.
- Suggested reading: *CLRS*, Sedgewick’s *Algorithms*, and *Problem Solving with Algorithms and Data Structures* by Miller & Ranum.
