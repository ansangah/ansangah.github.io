---
title: 소프트웨어공학
summary: 요구분석부터 테스트까지 소프트웨어공학 핵심 개념 정리
date: 2025-10-17
math: true
authors:
  - admin
tags:
  - SoftwareEngineering
  - ProjectManagement
image:
  filename: featured.jpg
  caption: '소프트웨어 개발 생명주기 다이어그램'
resources:
  - src: featured.jpg
    name: featured

exclude_search: false
dl_kind: "subjectsCount"
semester: "3-2"
course_topics:
  - 소프트웨어 생명주기
  - 품질보증과 테스트
  - 공학적 도구와 협업
---

## 1. 소프트웨어공학 개요

- 소프트웨어공학(Software Engineering)은 **복잡한 소프트웨어 시스템을 체계적·공학적으로 개발**하기 위한 학문.
- 목표: 예측 가능한 비용과 일정으로 **품질 높은 제품**을 전달하며, 유지보수와 진화를 고려한 구조를 설계.
- 핵심 축: **프로세스(How)**, **방법론(Method)**, **도구(Tool)**, **품질(Quality)**.

---

## 2. 소프트웨어 개발 생명주기(SDLC)

### 2.1 전통적 폭포수(Requirements → Design → Implementation → Verification → Maintenance)
- 각 단계를 순차적으로 진행. 문서 기반 계약, 변경 비용이 큰 프로젝트에 적합.
- 장점: 명확한 문서화, 관리 용이.
- 단점: 요구 변경에 취약, 피드백이 느림.

### 2.2 반복·증분 모델
- 기능을 반복적으로 설계/구현/검증. 위험을 조기에 발견하고 사용자 피드백을 반영.
- 대표: Spiral Model (위험 중심), RUP, Incremental Model.

### 2.3 애자일(Agile)
- 고객 협업과 빠른 반복을 강조. **스크럼(Scrum)**, **칸반(Kanban)** 등이 포함.
- 스프린트 기간 동안 기획→개발→리뷰→회고를 반복.
- 문서보다 작동하는 소프트웨어를 우선하지만, 최소한의 문서는 유지한다.

---

## 3. 요구공학(Requirements Engineering)

### 3.1 요구 사항 종류
- **기능 요구(Functional)**: 시스템이 수행해야 할 기능, 유스케이스.
- **비기능 요구(Non-functional)**: 성능, 보안, 가용성, 규제 준수 등 품질 속성.
- **도메인 요구**: 특정 산업/업무 규칙.

### 3.2 요구 수집 기법
- 인터뷰, 워크숍, 설문, 관찰, 프로토타이핑.
- 사용자 스토리(As a … I want … so that …)로 요구를 표현하면 애자일에 적합.

### 3.3 요구 분석 및 명세
- 요구 상충 해결, 우선순위화(MoSCoW, WSJF).
- **UML Use Case Diagram**, **문장 템플릿**, **SRS(Software Requirements Specification)** 문서화.
- 요구 변경 관리: Change Control Board(CCB), 버전 관리.

---

## 4. 시스템·소프트웨어 설계

### 4.1 아키텍처 설계
- 품질 속성을 달성하기 위한 구조와 구성 요소 정의.
- **아키텍처 패턴**: Layered, Client-Server, Microservices, Event-Driven 등.
- **아키텍처 스타일**: REST, SOA, Pipe-and-Filter.
- 대표 산출물: 아키텍처 다이어그램(C4 Model 레벨), ADR(Architecture Decision Record).

### 4.2 상세 설계
- 모듈, 클래스, 인터페이스, 데이터 구조 정의.
- **UML**: 클래스, 시퀀스, 상태, 활동 다이어그램.
- 설계 원칙: SOLID, DI, GoF 디자인 패턴(Strategy, Observer, Factory 등).

### 4.3 소프트웨어 재사용
- 라이브러리, 컴포넌트, 프레임워크 활용. 구성요소 기반 개발(Component-Based Development).
- 소프트웨어 제품 라인(SPL) 접근: 공통 자산 기반으로 변형 제품군 생성.

---

## 5. 프로젝트 계획과 관리

### 5.1 일정 및 비용 추정
- **COCOMO II**, **Function Point**, **Story Point** 기반 추정.
- 거버넌스: WBS(Work Breakdown Structure), Gantt Chart, Critical Path Method.

### 5.2 리스크 관리
- 위험 식별 → 분석(발생 확률, 영향) → 대응 전략(회피, 완화, 전가, 수용).
- 특히 인력, 일정, 기술적 불확실성에 집중.

### 5.3 형상관리(Configuration Management)
- 코드·문서·빌드 결과물에 대한 버전/변경 이력 추적.
- 도구: Git, SVN. 브랜칭 전략(Git Flow, Trunk-based)과 코드 리뷰 프로세스.

---

## 6. 구현 및 품질 향상 기법

### 6.1 코딩 표준과 코드 품질
- 명명 규칙, 코드 스타일 가이드(PEP8, Google Style).
- 정적 분석(Static Analysis), 린터, 포매터를 활용해 품질 자동화.

### 6.2 리팩터링(Refactoring)
- 기능 변경 없이 구조 개선. Bad Smell 제거: Long Method, Large Class, Feature Envy 등.
- CI 파이프라인에서 테스트 통과를 기준으로 안전성 확보.

### 6.3 성능 개선
- 프로파일링으로 병목 확인. 캐싱, 비동기 처리, 데이터 구조 최적화.
- Amdahl’s Law, Little’s Law 등 이론 기반 분석.

---

## 7. 테스트와 품질 보증(QA)

### 7.1 테스트 레벨
- **단위 테스트(Unit Test)**: 함수·클래스 단위. TDD(Test-Driven Development) 기반 작성.
- **통합 테스트(Integration Test)**: 모듈 간 상호작용 검증.
- **시스템 테스트(System Test)**: 전체 시스템 기능 및 비기능 요건 검증.
- **인수 테스트(Acceptance Test)**: 사용자 요구 만족도 확인. UAT(User Acceptance Testing).

### 7.2 테스트 기법
- 화이트박스(경로 테스트, 분기 커버리지), 블랙박스(동등 분할, 경계값 분석).
- 정적 검토: 코드 리뷰, 워크쓰루, 인스펙션.

### 7.3 자동화와 CI/CD
- 테스트 자동화 프레임워크(JUnit, pytest, Cypress).
- CI 도구(GitHub Actions, Jenkins)로 빌드·테스트·배포 자동화.
- 테스트 커버리지, 품질 게이트(예: SonarQube) 관리.

---

## 8. 운영과 유지보수

### 8.1 유지보수 유형
- **수정 보수(Corrective)**: 결함 수정.
- **적응 보수(Adaptive)**: 환경 변화 대응.
- **완전 보수(Perfective)**: 성능 개선, 기능 강화.
- **예방 보수(Preventive)**: 잠재 문제 제거.

### 8.2 DevOps
- 개발·운영 통합 문화. CI/CD + 모니터링 + IaC(Infrastructure as Code).
- 도구: Docker, Kubernetes, Terraform, Prometheus, Grafana.
- 지속적 피드백 루프: 로그 분석, APM(Application Performance Monitoring), 피처 플래그.

---

## 9. 품질 모델과 표준

- **ISO/IEC 25010**: 기능 적합성, 신뢰성, 사용성, 효율성, 유지보수성, 이식성, 보안성, 호환성.
- **CMMI**: 조직 프로세스 성숙도 모델. 레벨 1~5 단계로 프로세스 개선 로드맵 제공.
- **ISO/IEC 12207**: 소프트웨어 생명주기 프로세스.
- **IEEE 표준**: SRS(IEEE 830), 테스트 문서(IEEE 829) 등 문서 템플릿 제공.

---

## 10. 도구 및 협업 전략

- 요구 추적: Jira, Azure DevOps, Trello.
- 문서화: Confluence, Notion, MkDocs. 다이어그램은 PlantUML, Mermaid.
- 코드 협업: GitHub, GitLab. Pull Request 리뷰, Pair Programming, Mob Programming.
- 품질 측정 지표: 결함 밀도, 평균 고장 간격(MTBF), 결함 발견율, 리드 타임(Lead Time).

---

## 11. 윤리와 프로페셔널리즘

- 소프트웨어 엔지니어는 ACM/IEEE Code of Ethics 등을 준수해야 한다.
- 개인정보 보호, 접근성, 알고리즘 편향 최소화, 라이선스 준수.
- 프로젝트 실패 원인 분석(Postmortem, RCA)로 조직 학습 강화.
