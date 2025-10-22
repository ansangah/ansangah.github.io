---
title: Data Mining
summary: Frequent itemsets, LSH-based similarity search, clustering, community detection, and dimensionality reduction
date: 2024-04-16
math: true
authors:
  - admin
tags:
  - DataMining
  - MachineLearning

exclude_search: false
dl_kind: "subjectsCount"
semester: "3-2"
course_topics:
  - Frequent pattern mining
  - Similarity search
  - Clustering and dimensionality reduction
---

## 1. Overview

- Data mining extracts **meaningful patterns and knowledge** from massive datasets.
- Pipeline: data cleaning → feature construction → modelling/pattern discovery → evaluation & visualisation.
- Algorithms must account for the “4 V’s” of big data: volume, variety, velocity, veracity.

---

## 2. Frequent Itemset Mining

### 2.1 Concepts
- Identify sets of items that co-occur in transaction data.
- **Support:** fraction of transactions containing itemset $X$  
  $$\mathrm{support}(X) = \frac{\#\text{transactions containing }X}{\#\text{all transactions}}$$
- **Confidence:** probability that $Y$ appears when $X$ does in rule $X \rightarrow Y$.
- **Lift:** $ \frac{P(X,Y)}{P(X)P(Y)}$ measures how much more often $X$ and $Y$ appear together than by independence.

### 2.2 Apriori Algorithm
- **Top-down** search that grows larger frequent itemsets from smaller ones.
- **Apriori principle:** if an itemset is not frequent, none of its supersets can be frequent.
- Steps:  
  1. Generate candidate 1-itemsets and compute support.  
  2. Keep itemsets above the minimum support threshold.  
  3. Combine survivors to form $(k+1)$-item candidates.  
  4. Repeat until no more frequent sets remain.  
- Limitation: repeated data scans and huge candidate sets.

### 2.3 FP-Growth
- Compress transactions into an **FP-tree** without candidate generation.
- Process: order items by support → insert transactions into the tree sharing prefixes → build conditional FP-trees recursively.
- Requires less I/O than Apriori and scales well to large datasets.

### 2.4 Association Rules
- Split each frequent itemset into antecedent/consequent pairs to form rule candidates.
- Filter by support, confidence, lift, etc.
- Applications: recommendation, market-basket analysis, intrusion detection.

---

## 3. Similar Item Search: Locality-Sensitive Hashing (LSH)

### 3.1 Problem
- Quickly find **similar objects** in very large datasets (duplicate documents, image search, record linkage).

### 3.2 Core Idea
- Design hash families so that **similar items collide with high probability**.
- Choose hash functions according to similarity metrics:  
  - Jaccard → MinHash  
  - Cosine → Random hyperplane  
  - $L_p$ distance → $p$-stable hashes

### 3.3 MinHash with Banding
- Represent documents as sets and build MinHash signatures (minimum values of multiple hash functions).
- Split the signature matrix into $b$ bands of $r$ rows; hash each band to buckets.
- If two signatures match in any band, treat them as a candidate pair and compute exact similarity.
- Adjust $(r, b)$ to balance false negatives (more bands) vs. false positives (more rows).

### 3.4 LSH Pipeline
1. Preprocess data into sets or vectors.
2. Generate LSH signatures.
3. Extract candidate pairs.
4. Compute exact distances and return top-$k$ or threshold matches.

---

## 4. Clustering

### 4.1 Essentials
- Discover **natural groupings** in unlabeled data.
- Objectives: maximise intra-cluster similarity and minimise inter-cluster similarity.
- Distance metrics: Euclidean, cosine, Hamming, DTW, etc.

### 4.2 K-means
- Classic algorithm for roughly spherical clusters.
- Procedure: choose $K$ centres (random or k-means++), assign points to nearest centre, recompute centres, repeat until convergence.
- Watch out for $K$ selection (elbow, silhouette), sensitivity to outliers, and initial seeds.

### 4.3 Hierarchical Clustering
- Builds a **dendrogram** based on pairwise distances.
- Agglomerative (bottom-up): start with singletons and merge clusters using linkage criteria (single, complete, average, Ward).  
- Divisive (top-down): start with all points and split recursively.
- Cut the tree at a chosen level to obtain the desired number of clusters.

### 4.4 Density-Based Clustering
- DBSCAN/HDBSCAN treat dense regions as clusters and sparse areas as noise.
- Parameters: radius $\varepsilon$ and minimum points MinPts.
- Captures arbitrarily shaped clusters and automatically flags outliers.

---

## 5. Community Detection in Graphs

### 5.1 Definition
- Partition a graph into subgraphs with **dense internal connections** and sparse external ones.
- Use cases: social networks, recommendation engines, biological networks.

### 5.2 Modularity
- Measures the difference between intra-cluster and inter-cluster edge density.
- Louvain/Leiden algorithms greedily maximise modularity for large graphs.

### 5.3 Spectral Clustering
- Uses eigenvectors of the graph Laplacian to embed nodes into a low-dimensional space.
- Workflow: build adjacency matrix $W$, degree matrix $D$, compute normalised Laplacian $L = D^{-1/2}(D-W)D^{-1/2}$, take the smallest $k$ eigenvectors, and run k-means.
- Handles nonlinear structures and non-spherical clusters.

### 5.4 Comparison
- Modularity optimisation is fast but subject to resolution limits.
- Spectral methods are more costly (eigen decomposition) yet yield high-quality partitions.
- Choose based on graph size, sparsity, and runtime constraints.

---

## 6. Dimensionality Reduction

### 6.1 Motivation
- High-dimensional data worsens computation, visualisation, and the curse of dimensionality.
- Dimensionality reduction keeps as much information as possible while compressing representation.

### 6.2 Principal Component Analysis (PCA)
- Eigen-decompose the covariance matrix to find directions of maximal variance.
- Steps: standardise data → compute covariance → eigenvalues/vectors → project onto top-$k$ components.
- Linear, orthogonal transform that preserves maximum variance; sensitive to nonlinearity/outliers.

### 6.3 Linear Discriminant Analysis (LDA)
- Maximises between-class variance while minimising within-class variance.
- Supervised dimensionality reduction; boosts classification performance.

### 6.4 Nonlinear Techniques
- t-SNE: excellent for local structure visualisation, but distorts global layout.
- UMAP: faster than t-SNE with better global preservation.
- Autoencoders: neural networks that learn nonlinear embeddings.

### 6.5 Working with LSH/Clustering
- Reduce dimensionality first to improve LSH efficiency and denoise features.
- Applying PCA before clustering often yields higher silhouette scores.

---

## 7. Project Tips

- Prioritise data quality: handle missing values, detect outliers, and scale appropriately.
- Evaluation metrics:  
  - Frequent patterns: support, confidence, lift, conviction, Kulczynski, etc.  
  - Clustering/community detection: silhouette, Davies–Bouldin, modularity.  
  - Dimensionality reduction: reconstruction error, downstream model accuracy.
- Visualise results with heatmaps, correlation matrices, network graphs, and 2D embeddings (PCA, t-SNE).
- In practice, LSH is just a candidate generator—always follow up with precise distance checks.
- Document your pipeline and tuning experiments to ensure reproducibility.
