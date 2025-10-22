---
title: Terminology Cheat Sheet for Normalization & Regularization
summary: Quick reference for normalization, standardization, regularization, and generalization
date: 2025-10-13
authors:
  - admin
tags:
  - Normalization
  - Generalization

math: true
dl_kind: "notes"

exclude_search: false
---

## 1. Normalization (Min-Max Scaling)

- Linearly rescales each feature into the **0–1 range** using its minimum and maximum values.
- When to use:
  - Effective when the distribution is fairly even and extreme outliers are rare.
  - Stabilises training for models that are sensitive to feature scale (neural networks, distance-based models).
  - Needs to be recomputed whenever new min/max values appear.
- Formula  
  $$x' = \frac{x - x_{\min}}{x_{\max} - x_{\min}}$$

## 2. Standardization (Z-score Scaling)

- Shifts data to have mean 0 and standard deviation 1.
- When to use:
  - Works well when data is approximately Gaussian.
  -
  













  
- Formula  
  $$z = \frac{x - \mu}{\sigma}$$

> Both normalization and standardization are part of **data preprocessing**. They help models converge faster and more stably by presenting inputs on comparable scales.

## 3. Regularization

- Goal: **prevent overfitting**—when a model memorises the training data and fails on unseen samples.
- How it works:
  - Adds a penalty to the model’s parameters during training (L1, L2, Elastic Net, Dropout, etc.).
  - Controls model complexity and directly improves **generalization**.

## 4. Generalization

- The ultimate goal of machine learning: achieving **high accuracy on unseen data**.
- Evaluated via validation/test performance rather than training metrics.
- Relationship summary:
  - **Regularization** is a primary strategy for better generalization (model-level control).
  - **Normalization/Standardization** indirectly support generalization by making optimisation easier (data-level support).

---

{{< button url="/uploads/deeplearning/정규화용어정리.pdf" style="primary" size="lg" icon="document-arrow-down" align="center" >}}
Download PDF
{{< /button >}}
