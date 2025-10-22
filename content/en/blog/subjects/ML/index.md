---
title: Machine Learning
summary: From inductive learning theory to decision trees, nearest neighbours, perceptrons, and linear models
date: 2025-10-20
math: true
authors:
  - admin
tags:
  - MachineLearning
  - PatternRecognition

exclude_search: false
dl_kind: "subjectsCount"
semester: "3-2"
course_topics:
  - Inductive learning theory
  - Classification algorithms
  - Practical deployment issues
---

## 1. Introduction

- Machine learning automatically learns patterns from data to make predictions or decisions.
- Main paradigms: supervised (classification/regression), unsupervised (clustering/dimensionality reduction), reinforcement learning.
- Key challenges: generalisation, data quality, computational efficiency, interpretability.

---

## 2. Formalising Inductive Machine Learning

### 2.1 Problem Setup
- Assume input space $\mathcal{X}$, output space $\mathcal{Y}$, and an unknown data distribution $\mathcal{D}$.
- Training set $S=\{(x_i, y_i)\}_{i=1}^{n}$ is drawn i.i.d. from $\mathcal{D}$.
- Goal: pick a hypothesis $h \in \mathcal{H}$ that minimises the **risk**
  $$R(h) = \mathbb{E}_{(x,y)\sim\mathcal{D}}[\ell(h(x), y)]$$
  Since $\mathcal{D}$ is unknown, we minimise the **empirical risk**
  $$\hat{R}_S(h) = \frac{1}{n}\sum_{i=1}^{n} \ell(h(x_i), y_i)$$
  possibly with regularisation (RERM).

### 2.2 Inductive Bias
- The No Free Lunch theorem states no learner dominates across all distributions.
- We encode prior knowledge as **bias** and learn the **weights** from data.

---

## 3. Limits of Learning and Generalisation

- **VC dimension:** Measures expressive power of $\mathcal{H}$ and bounds generalisation error.
- **Bias–variance trade-off:** Complex models have high variance; simple models incur high bias.
- **Overfitting:** Low training error but poor unseen performance. Mitigate with regularisation, early stopping, cross-validation.
- **PAC learning:** Describes when a concept class is learnable—Probably Approximately Correct.

---

## 4. Geometry and Nearest Neighbours

### 4.1 Distance-Based Learning
- Represent data points as vectors in high-dimensional space and use a **metric** to measure similarity.
- $k$-NN classification: majority vote among the $k$ closest labelled neighbours.
- $k$-NN regression: predict the (possibly weighted) average of the neighbours’ targets.

### 4.2 Properties
- Virtually zero training cost—just store the data—while inference is heavy.
- Distance metric choice matters: Euclidean, Manhattan, cosine, etc.
- Curse of dimensionality: distances become less informative; use dimensionality reduction or distance weighting.

### 4.3 Kernels and Manifolds
- Define nonlinear similarities with kernel functions to capture local structure.
- Manifold assumption: high-dimensional data may live on lower-dimensional surfaces—neighbourhood information remains meaningful.

---

## 5. Decision Tree Learning

### 5.1 Structure
- Recursively split the feature space with questions. Leaves output predictions.
- Splitting criteria: information gain, Gini index, chi-squared tests.

### 5.2 Training (ID3/C4.5/CART)
1. Choose the best attribute to split on.
2. Recurse on child nodes.
3. Stop when leaves are pure or the sample count hits thresholds.
- Continuous features use threshold-based binary splits.

### 5.3 Pruning
- Pre-pruning: depth limits, minimum samples per node, etc.
- Post-pruning: build the full tree, then remove branches that raise validation error (e.g., reduced error pruning).

### 5.4 Pros and Cons
- Interpretable, no need for feature scaling, handles nonlinearity.
- Sensitive to data splits and prone to overfitting → use ensembles (Random Forest, Gradient Boosting) for robustness.

---

## 6. Perceptron

### 6.1 Linear Separator
- Learns weights $w$ and bias $b$ to classify via $\text{sign}(w^\top x + b)$.
- Update rule for misclassified sample $(x,y)$:  
  $w \leftarrow w + \eta y x$, $b \leftarrow b + \eta y$.
- **Perceptron convergence theorem:** If data is linearly separable, convergence occurs in finite steps.

### 6.2 Limitations
- Cannot solve nonlinearly separable problems (e.g., XOR) without kernels or multilayer networks.
- Sensitive to learning rate $\eta$ and sample order.

---

## 7. Practical Considerations

- **Preprocessing:** Handle missing values and outliers, apply scaling, encode categorical features.
- **Evaluation:** Maintain train/validation/test splits; use k-fold CV or time-series CV as appropriate.
- **Regularisation:** L1 encourages sparsity; L2 stabilises weights. Dropout, batch normalisation, etc., regulate neural nets.
- **Hyperparameter search:** Grid, random, or Bayesian optimisation.
- **Interpretability:** SHAP, LIME, and feature importance expose model behaviour.

---

## 8. Beyond Binary Classification

- **Multiclass:** One-vs-rest, one-vs-one, softmax regression.
- **Multi-label:** A sample may belong to multiple classes—use binary relevance, classifier chains, sigmoid outputs.
- **Regression:** Predict continuous targets using linear regression, regression trees, Gaussian processes.
- **Imbalanced data:** Apply class weighting, SMOTE, or cost-sensitive losses.
- **Structured outputs:** Sequence labelling with HMM/CRF, image segmentation with U-Net, etc.

---

## 9. Linear Models

### 9.1 Linear Regression
- Fits $y \approx w^\top x + b$ via ordinary least squares.
- Regularisation: Ridge (L2), Lasso (L1), Elastic Net.

### 9.2 Logistic Regression
- Models binary probability with the sigmoid:
  $$P(y=1|x) = \sigma(w^\top x + b) = \frac{1}{1 + e^{-(w^\top x + b)}}$$
- Train by maximising log-likelihood or minimising cross-entropy.
- Decision boundary is linear—extend with kernels or polynomial features for nonlinearity.

### 9.3 Softmax Regression
- For $K$ classes,  
  $\mathrm{softmax}(z)_k = \frac{e^{z_k}}{\sum_j e^{z_j}}$.
- Optimise with cross-entropy; works well with stochastic gradient descent.

### 9.4 Pros and Cons
- Pros: explainable, fast to train, strong with high-dimensional sparse data.
- Cons: limited expressiveness for complex nonlinear relationships—upgrade with kernels or deep networks.

---

## 10. Suggested Learning Workflow

1. Define the problem and capture domain knowledge.
2. Clean and explore the data; engineer informative features.
3. Establish baselines with simple models (linear, tree, k-NN).
4. Decide on validation strategy and tune hyperparameters.
5. Compare models on performance, interpretability, and operational cost.
6. Deploy, monitor for drift, and retrain periodically.
