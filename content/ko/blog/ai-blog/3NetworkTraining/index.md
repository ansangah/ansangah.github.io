---
title: "📁 3장 : 신경망 학습과 최적화"
summary: 신경망이 데이터를 통해 규칙을 익히는 과정과 이를 가능하게 만드는 최적화, 경사 하강법의 핵심 아이디어를 정리
date: 2025-10-17

authors:
  - admin

tags:
  - Deep Learning
  - Optimization
  - Gradient Descent

course_topics:
  - 신경망 학습
  - 최적화 문제 정의
  - 경사 하강법

content_meta:
  trending: true

exclude_search: false
math: true
dl_kind: "textbook"
---

{{< toc mobile_only=true is_open=true >}}

## 1. 신경망 학습 개요

- 신경망은 처음엔 입력 들어와도 어떤 출력 내야 할지 모름.
- 학습 데이터 반복 주입 → 입력·출력 매핑 규칙 스스로 찾음.
- 학습한다 = 규칙 찾는 과정임.
- 뉴런은 가중 합산 + 활성함수 조합으로 구성됨.
- 층을 쌓아 신경망 구조 만들고, 구조 관련 결정들은 학습 전에 미리 고정함.

---

## 2. 모델 파라미터 vs 하이퍼파라미터

- **모델 파라미터**: 가중치, 편향. 데이터에 의존해 학습 중 계속 변함. 학습 끝나면 모델 상태로 저장됨.
- **하이퍼파라미터**: 학습률, 옵티마이저, 배치 크기, 네트워크 깊이, Dropout 확률 등. 사람이 직접 지정, 학습으로 자동 변경 안 됨.
- PReLU처럼 활성함수 안에 학습 가능한 값이 있으면 그 값은 모델 파라미터로 취급함.

집값 예측을 예시로 보면 `방 개수·면적·집 종류·역과의 거리 → 집값` 매핑 규칙이 바로 모델 파라미터에 반영됨. 규칙이 완성되면 추론 능력 생김.

---

## 3. 최적화 문제 세팅

- 목적 함수 최소화 or 최대화 문제로 학습을 재정의함.
- 표준 형식:
$$
\begin{aligned}
&\text{minimize} && f(\mathbf{x}) \\
&\text{subject to} && g_i(\mathbf{x}) \le 0,\quad i=1,\dots,m \\
&&& h_j(\mathbf{x}) = 0,\quad j=1,\dots,p
\end{aligned}
$$
- $f(\mathbf{x})$가 손실 함수, $g_i$, $h_j$는 제약 조건 함수임.
- 최적해에 가까워지는 상태를 수렴이라 부르고, 충분히 가까워지면 수렴했다고 봄.

---

## 4. 회귀 · 분류 손실 정리

- **회귀 문제**: 타깃 $t$와 예측 $y = f_\theta(x)$ 차이를 줄이는 $\theta$ 찾음.  
  대표 손실 = 평균제곱오차(MSE).

  $$
  \begin{aligned}
  &\underset{\theta}{\text{minimize}} && \frac{1}{N} \sum_{i=1}^{N} (f(\mathbf{x}_i; \theta) - t_i)^2 \\
  &\text{subject to} \\
  &&& \text{No constraints}
  \end{aligned}
  $$

- **분류 문제**: 관측 확률분포 $t$와 예측 확률분포 $y$ 차이를 줄이는 $\theta$ 찾음.  
  대표 손실 = 크로스 엔트로피(CE).

  $$
  \begin{aligned}
  &\underset{\theta}{\text{minimize}} && - \frac{1}{N} \sum_{i=1}^{N} \sum_{k=1}^{K} t_{ik} \log \hat{y}_{ik} \\
  &\text{subject to} \\
  &&& \text{No constraints}
  \end{aligned}
  $$

손실 정의 끝나면, 해당 손실을 최소화하는 방향으로 파라미터 갱신 루프 돌림.

---

## 5. 경사 하강법 핵심

- 전역 최소가 이상적이지만, 실제 손실 곡면은 복잡함 → 현실적으로 좋은 지역 최소 찾는 전략 사용함.
- 손실 함수 $L(\theta)$의 기울기 사용.

  $$
  \theta^{(t+1)} = \theta^{(t)} - \alpha \nabla_\theta L(\theta^{(t)})
  $$

- $\alpha$: 학습률. 스텝 크기 조절.
- $-\nabla_\theta L$: 가장 가파른 내리막 방향.
- 신경망은 합성 함수이므로 연쇄 법칙(=역전파)으로 각 파라미터의 기울기 계산함.

---

## 6. 최적화 알고리즘 계열

- **1차 미분 기반**: 경사 하강법, SGD, Momentum, AdaGrad, RMSProp, Adam 등. 곡면이 볼록하지 않아도 동작 안정적임.
- **1.5차 미분 기반**: 준-뉴턴, 켤레 경사, 레벤버그-마쿼트 등. 2차 정보를 근사해 빠르지만 메모리 비용 큼.
- **2차 미분 기반**: 뉴턴 방법, 내부점법 등. 곡률 직접 사용해 빠르지만, 손실이 볼록해야 하고 계산량 큼 → 대형 신경망에는 부담.

---

## 7. 경사 하강법 적용 루틴

1. 순전파로 예측값 계산함.
2. 손실 함수 평가함.
3. 손실을 각 파라미터에 대해 편미분(역전파)함.
4. 업데이트 식으로 가중치·편향 갱신함.
5. 손실 변화가 임계치 이하되면 학습 종료함(수렴 판단).

결과적으로 파라미터가 고정되면 입력 들어올 때마다 어떤 출력을 낼지 규칙이 함수 형태로 확보됨.

---

## 8. 한눈 요약

- 신경망 학습 = 데이터로 규칙 익히는 과정임.
- 회귀는 MSE, 분류는 CE로 손실 정의하는 경우가 일반적임.
- 최적화 = 손실 최소화 문제로 재정의하고 알고리즘으로 해 근사함.
- 경사 하강법은 가장 기본이지만 여전히 강력한 1차 최적화 방법임.
- 역전파는 경사 하강법을 신경망에 적용하기 위한 필수 계산 절차임.

---
{{< button url="/uploads/deeplearning/3-신경망학습.pdf" style="primary" size="lg" icon="document-arrow-down" align="center" >}}
PDF 다운로드
{{< /button >}}
