---
title: "📁 Chapter 3: Neural Network Learning and Optimization"
summary: Summarizes how neural networks learn rules from data and the key ideas of optimization and gradient descent that make this possible.
date: 2025-10-17

authors:
  - admin

tags:
  - Deep Learning
  - Optimization
  - Gradient Descent

course_topics:
  - Neural Network Learning
  - Formulating Optimization Problems
  - Gradient Descent

content_meta:
  trending: true

exclude_search: false
math: true
dl_kind: "textbook"
---

{{< toc mobile_only=true is_open=true >}}

## 1. Overview of Neural Network Learning

- A neural network initially has no idea what output to produce for a given input.  
- By repeatedly feeding training data, it gradually learns the mapping rule between input and output.  
- “Learning” means discovering this mapping rule.  
- Each neuron is composed of weighted summation and an activation function.  
- Stacking layers forms the overall neural network structure, and these structural choices are fixed before training.

---

## 2. Model Parameters vs. Hyperparameters

- **Model parameters**: weights and biases.  
  These change continuously during training depending on data and are saved as the trained model.  
- **Hyperparameters**: learning rate, optimizer, batch size, network depth, dropout rate, etc.  
  These are set manually and do not change automatically through training.  
- If an activation function (e.g., PReLU) contains a learnable coefficient, that coefficient counts as a model parameter.

For example, in a house price prediction model, the mapping  
`(number of rooms, area, house type, distance to station → price)`  
is captured by the model parameters. Once training is complete, the model can perform inference based on those learned rules.

---

## 3. Setting Up the Optimization Problem

- Learning is redefined as minimizing or maximizing an objective function.  
- Standard formulation:

$$
\begin{aligned}
&\text{minimize} && f(\mathbf{x}) \\
&\text{subject to} && g_i(\mathbf{x}) \le 0,\quad i=1,\dots,m \\
&&& h_j(\mathbf{x}) = 0,\quad j=1,\dots,p
\end{aligned}
$$

- \( f(\mathbf{x}) \): objective (loss) function  
- \( g_i, h_j \): constraint functions  
- Getting close to the optimal solution is called *convergence*. Once sufficiently close, the model is said to have converged.

---

## 4. Loss Functions for Regression and Classification

- **Regression Problems**:  
  Find parameters \( \theta \) that minimize the difference between target \( t \) and prediction \( y = f_\theta(x) \).  
  Representative loss = Mean Squared Error (MSE).

  $$
  \begin{aligned}
  &\underset{\theta}{\text{minimize}} && \frac{1}{N} \sum_{i=1}^{N} (f(\mathbf{x}_i; \theta) - t_i)^2 \\
  &\text{subject to} \\
  &&& \text{No constraints}
  \end{aligned}
  $$

- **Classification Problems**:  
  Find parameters \( \theta \) that minimize the difference between the observed distribution \( t \) and predicted distribution \( y \).  
  Representative loss = Cross-Entropy (CE).

  $$
  \begin{aligned}
  &\underset{\theta}{\text{minimize}} && - \frac{1}{N} \sum_{i=1}^{N} \sum_{k=1}^{K} t_{ik} \log \hat{y}_{ik} \\
  &\text{subject to} \\
  &&& \text{No constraints}
  \end{aligned}
  $$

Once the loss function is defined, parameters are updated iteratively in the direction that minimizes the loss.

---

## 5. Core Idea of Gradient Descent

- The ideal case is reaching the *global minimum*, but real loss surfaces are complex → in practice, we settle for a good *local minimum*.  
- Gradient descent updates parameters using the gradient of the loss function \( L(\theta) \):

  $$
  \theta^{(t+1)} = \theta^{(t)} - \alpha \nabla_\theta L(\theta^{(t)})
  $$

- \( \alpha \): learning rate (step size)  
- \( -\nabla_\theta L \): steepest descent direction  
- Since neural networks are composite functions, gradients for each parameter are computed via the **chain rule** (backpropagation).

---

## 6. Families of Optimization Algorithms

- **First-order methods**: Gradient Descent, SGD, Momentum, AdaGrad, RMSProp, Adam, etc.  
  Stable even when the loss surface is non-convex.  
- **Quasi-second-order methods**: Quasi-Newton, Conjugate Gradient, Levenberg–Marquardt.  
  Approximate curvature information for faster convergence but require more memory.  
- **Second-order methods**: Newton’s method, interior-point methods.  
  Directly use curvature, fast but computationally heavy and suited to convex problems — impractical for large neural networks.

---

## 7. Routine of Gradient Descent

1. Perform **forward propagation** to compute predictions.  
2. Evaluate the **loss function**.  
3. Compute partial derivatives (gradients) of the loss w.r.t. each parameter (**backpropagation**).  
4. Update weights and biases using the update rule.  
5. Stop training once the loss change is below a certain threshold (convergence).

When parameters are fixed after convergence, the model encodes the mapping function that determines outputs for any given input.

---

## 8. Summary at a Glance

- Neural network learning = discovering functional rules from data.  
- Regression usually uses MSE; classification uses Cross-Entropy.  
- Optimization = reformulating learning as a loss minimization problem and solving it numerically.  
- Gradient descent is the fundamental yet powerful first-order optimization method.  
- Backpropagation is essential for applying gradient descent to neural networks.

---

{{< button url="/uploads/deeplearning/3-신경망학습.pdf" style="primary" size="lg" icon="document-arrow-down" align="center" >}}
Download PDF
{{< /button >}}