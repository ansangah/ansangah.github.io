---
title: Software Engineering
summary: Essential software engineering concepts from requirements to testing and operations
date: 2025-10-17
math: true
authors:
  - admin
tags:
  - SoftwareEngineering
  - ProjectManagement

exclude_search: false
dl_kind: "subjectsCount"
semester: "3-2"
course_topics:
  - Software life cycle
  - Quality assurance and testing
  - Engineering tools and collaboration
---

## 1. Overview

- Software engineering applies disciplined, systematic methods to build complex systems.
- Goals: deliver **high-quality software** on predictable cost/schedule while keeping maintenance and evolution in mind.
- Pillars: **Process**, **Method**, **Tooling**, and **Quality**.

---

## 2. Software Development Life Cycle (SDLC)

### 2.1 Waterfall (Requirements → Design → Implementation → Verification → Maintenance)
- Fully sequential. Works for contract-heavy or change-resistant projects.
- Pros: strong documentation, straightforward management.
- Cons: slow feedback, poor at absorbing requirement changes.

### 2.2 Iterative & Incremental
- Repeated cycles of design/build/test deliver small increments and expose risk early.
- Examples: Spiral model (risk-driven), RUP, incremental delivery.

### 2.3 Agile
- Emphasises customer collaboration and rapid iteration: **Scrum**, **Kanban**, etc.
- Each sprint covers planning → development → review → retrospective.
- Prioritises working software over exhaustive documents, yet minimal artefacts are still maintained.

---

## 3. Requirements Engineering

### 3.1 Types
- **Functional:** behaviours and use cases the system must perform.
- **Non-functional:** performance, security, availability, compliance—quality attributes.
- **Domain-specific:** rules tied to particular industries or organisations.

### 3.2 Elicitation Techniques
- Interviews, workshops, surveys, observation, prototyping.
- Agile-friendly user stories (“As a … I want … so that …”) capture intent.

### 3.3 Analysis & Specification
- Resolve conflicts, prioritise (MoSCoW, WSJF).
- Document with UML use-case diagrams, structured templates, and SRS documents.
- Govern changes via Change Control Boards and versioning.

---

## 4. System and Software Design

### 4.1 Architecture Design
- Define structures to satisfy quality attributes.
- Patterns: layered, client–server, microservices, event-driven.  
- Styles: REST, SOA, pipe-and-filter.  
- Artefacts: C4 model diagrams, Architecture Decision Records (ADRs).

### 4.2 Detailed Design
- Specify modules, classes, interfaces, and data structures.
- UML diagrams (class, sequence, state, activity).  
- Principles: SOLID, dependency injection, GoF patterns (strategy, observer, factory, etc.).

### 4.3 Reuse
- Leverage libraries, components, frameworks.  
- Product line engineering derives variants from a shared asset base.

---

## 5. Project Planning and Management

### 5.1 Estimation
- Use COCOMO II, Function Points, Story Points.
- Management artefacts: WBS, Gantt charts, Critical Path Method.

### 5.2 Risk Management
- Identify → analyse (probability/impact) → mitigate/avoid/transfer/accept.
- Focus on staffing, schedule, and technical uncertainties.

### 5.3 Configuration Management
- Track versions of code, docs, build artefacts with Git/SVN.
- Adopt branching strategies (Git Flow, trunk-based) and peer reviews.

---

## 6. Implementation & Quality Techniques

### 6.1 Coding Standards
- Naming conventions, style guides (PEP8, Google style).
- Automate quality via linters, formatters, static analyzers.

### 6.2 Refactoring
- Improve structure without changing behaviour. Remove smells (long method, large class, feature envy).
- Use CI pipelines and regression tests to ensure safety.

### 6.3 Performance Tuning
- Profile to locate bottlenecks. Apply caching, async processing, data-structure optimisations.
- Reference models include Amdahl’s and Little’s laws.

---

## 7. Testing & QA

### 7.1 Test Levels
- **Unit:** functions/classes, often TDD.  
- **Integration:** interactions between components.  
- **System:** end-to-end functional/non-functional checks.  
- **Acceptance:** confirm user needs (UAT).

### 7.2 Techniques
- White-box: path, branch coverage.  
- Black-box: equivalence partitioning, boundary analysis.  
- Static reviews: peer review, walkthrough, inspection.

### 7.3 Automation & CI/CD
- Frameworks: JUnit, pytest, Cypress.  
- CI tools: GitHub Actions, Jenkins for build/test/deploy automation.  
- Track coverage and quality gates (e.g., SonarQube).

---

## 8. Operations and Maintenance

### 8.1 Maintenance Types
- **Corrective:** fix defects.  
- **Adaptive:** respond to environment changes.  
- **Perfective:** enhance performance/features.  
- **Preventive:** eliminate latent issues.

### 8.2 DevOps
- Integrates development and operations with CI/CD, monitoring, IaC.
- Tooling: Docker, Kubernetes, Terraform, Prometheus, Grafana.
- Close feedback loop via logs, APM, feature flags.

---

## 9. Quality Models and Standards

- **ISO/IEC 25010:** functionality, reliability, usability, efficiency, maintainability, portability, security, compatibility.
- **CMMI:** organisational process maturity (levels 1–5).
- **ISO/IEC 12207:** software life-cycle processes.
- **IEEE standards:** templates for SRS (IEEE 830), test documentation (IEEE 829), etc.

---

## 10. Tools and Collaboration

- Requirements tracking: Jira, Azure DevOps, Trello.
- Documentation: Confluence, Notion, MkDocs; diagrams with PlantUML, Mermaid.
- Code collaboration: GitHub, GitLab; adopt PR reviews, pair/mob programming.
- Metrics: defect density, MTBF, defect discovery rate, lead time.

---

## 11. Ethics and Professionalism

- Follow ACM/IEEE codes of ethics.  
- Address privacy, accessibility, algorithmic fairness, licence compliance.  
- Conduct postmortems and root-cause analyses to foster organisational learning.
