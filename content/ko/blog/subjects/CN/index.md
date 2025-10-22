---
title: 컴퓨터네트워크
summary: 네트워크 진화부터 라우팅·보안 프로토콜까지 핵심 개념 정리
date: 2025-04-15
math: true
authors:
  - admin
tags:
  - ComputerNetwork
  - InternetProtocols
image:
  filename: featured.jpg
  caption: '네트워크 계층 구조 다이어그램'
resources:
  - src: featured.jpg
    name: featured

exclude_search: false
dl_kind: "subjectsCount"
semester: "3-1"
course_topics:
  - 네트워크 아키텍처
  - 라우팅과 주소 체계
  - 보안 프로토콜
---

## Chapter 1. Introduction

### 1.1 데이터 통신 네트워크의 진화
- 설계 시 고려 요소: **상업성**, **통신 선로 설치 비용**(매우 높음), 장비 비용은 상대적으로 저렴.
- 새로운 기술 도입 시 기존 인프라 재사용 여부와 투자 가치 평가가 중요.
  - 성공 사례: xDSL (전화선 기반 고속 데이터 통신).
  - 실패 사례: 1970년대 영상통화(인프라 대비 수요 부족).
- 모뎀(Modem): 디지털 ↔ 아날로그 변환을 담당하여 기존 전화선 사용 가능.

### 1.2 네트워크 발전 과정
- 통신사는 기존 전화망 인프라를 최대한 활용하며 점진적으로 데이터 서비스를 확장.
- 전화번호와 IP 주소 매핑: 인터넷 회선을 통해 일반 전화 서비스 제공 가능하지만 음질 저하.

### 1.3 인터넷과 ISP
- **ISP(Internet Service Provider)**: KT, SKT 등 접속 서비스를 제공하는 사업자.
- 계층적 구조: 지역 ISP → 백본 ISP → 국제 백본. 피어링과 트랜짓으로 상호 연결.

---

## Chapter 19. Host-to-Host Delivery

### 2.1 OSI 7계층 요약
1. **Physical**: 신호 전송.
2. **Data Link**: MAC 주소, 오류 검출, hop-to-hop 전달.
3. **Network**: 라우팅, 주소 지정, 멀티캐스트, 주소 해결.
4. **Transport**: TCP/UDP, end-to-end 신뢰성.
5. **Session**
6. **Presentation**
7. **Application**: HTTP, DNS 등. (실습에서는 주로 4~7계층 집중.)

### 2.2 네트워크 계층 역할
1. **Internetworking**: 이종 네트워크를 연결.
2. **Addressing**: 전 세계적으로 유일한 주소 할당.
3. **Routing**: 최적 경로 결정.
4. **Packetizing**: 상위 계층 데이터 패킷화.
5. **Fragmenting**: MTU에 맞춰 분할.

### 2.3 스위칭 방식
- **Circuit Switching**: 회선 교환. 전화망처럼 연결 후 일정 대역폭 확보.
- **Packet Switching**: 패킷 단위 전달. 인터넷이 채택한 방식.

### 2.4 Datagram 접근
- Connectionless 통신. 각 패킷이 독립적으로 라우팅.
- out-of-order 도착 가능 → Transport 계층(TCP)에서 순서 재조립 및 흐름 제어.

---

## Chapter 19. IP 주소와 서브넷

### 3.1 IPv4 주소 체계
- 32-bit 주소, 유일성(Unique)과 보편성(Universal)을 만족해야 한다.
- 클래식 주소(Classful Addressing):
  - **Class A**: 0xxxxxxx (0–127), NetID 7bit, HostID 24bit.
  - **Class B**: 10xxxxxx (128–191), NetID 14bit, HostID 16bit.
  - **Class C**: 110xxxxx (192–223), NetID 21bit, HostID 8bit.
  - **Class D**: 1110xxxx (224–239), 멀티캐스트.
  - **Class E**: 1111xxxx (240–255), 실험용 예약.
- 특수 주소:
  - `-.0.0.0`: 네트워크 주소.
  - `-.0.0.1`: 라우터(게이트웨이) 주소로 관습적으로 사용.
  - `-.255.255.255`: 브로드캐스트.

### 3.2 Subnetting
- 대규모 네트워크를 여러 서브넷으로 분할하여 관리성과 보안 향상.
- 계산: `IP 주소 AND Subnet Mask = Subnetwork Address`.
- CIDR(Classless Inter-Domain Routing)로 유연한 주소 할당 가능.

### 3.3 DHCP (Dynamic Host Configuration Protocol)
- 동적으로 IP/네트워크 설정 할당.
- 절차: Discover → Offer → Request → ACK.
- IP 고갈 문제 완화, 이동성이 높은 단말에 적합.
- NAT와 결합해 내부망 주소를 외부에 노출하지 않음.

### 3.4 NAT (Network Address Translation)
- 사설망 ↔ 공인망 주소 변환.
- 하나의 공인 IP로 여러 내부 호스트를 인터넷에 연결.
- 포트 주소 변환(PAT)으로 세션 구분.
- 외부에서 내부 호스트 접근 시 포트 포워딩 또는 고정 IP 필요.

### 3.5 IP Datagram Format
- TTL(Time to Live): 라우터를 거칠 때마다 감소, 0이 되면 폐기해 루프 방지.
- Fragmentation: 패킷이 MTU보다 크면 분할. 재조립은 목적지에서만 수행.

---

## Chapter 20. Network Layer Protocols

### 4.1 ARP (Address Resolution Protocol)
- 목적: 동일 네트워크 내에서 IP → MAC 주소 매핑.
- 동작: ARP Request는 브로드캐스트, Reply는 유니캐스트로 응답.
- 캐시를 유지하여 잦은 질의를 줄임.

### 4.2 IP 프로토콜
- 헤더 최소 20바이트. 버전, 헤더 길이, TTL, 프로토콜, 체크섬 등이 포함.
- **Multiplexing**: 프로토콜 필드로 상위 프로토콜 식별(TCP=6, UDP=17, OSPF=89 등).

### 4.3 Fragmentation과 MTU
- 링크별 MTU가 다를 경우 라우터가 패킷을 분할.
- DF(Don’t Fragment) 플래그가 설정되면 분할 불가 → ICMP 오류 반환.

### 4.4 ICMP (Internet Control Message Protocol)
- IP 계층의 오류/진단 메시지 전달.
- Error-reporting: Destination Unreachable, Source Quench(Deprecated), Time Exceeded, Parameter Problem, Redirect.
- Query: Echo Request/Reply(ping), Timestamp 등.
- 주의: ICMP는 오류만 보고하며 해결은 상위 계층이 담당. 흐름 제어/혼잡 제어 기능은 없음.

### 4.5 IPv6 개요
- 128-bit 주소 공간, 헤더 간소화, QoS 필드 확장.
- 주소 표기: 16진수와 `::` 사용으로 0 시퀀스 축약.
- 전환 전략:
  1. **Dual Stack**: 장비가 IPv4/IPv6 동시 지원.
  2. **Tunneling**: IPv6 패킷을 IPv4로 캡슐화하여 전송.
  3. **Header Translation**: IPv6 ↔ IPv4 헤더 변환 (정보 손실 가능).

---

## Chapter 21. Unicast & Multicast Routing

### 5.1 라우팅 유형
- **Unicast**: 1→1. 대부분의 일반 트래픽.
- **Multicast**: 1→N. 그룹 가입 노드에게만 전송.
- **Broadcast**: 1→All. IPv4에서 제한적 사용.
- **Anycast**: 1→가장 가까운 노드. DNS 루트 서버 등.

### 5.2 Overlay Network
- 기존 물리망 위에 논리적 네트워크(컨텐츠 전송망, CDN 등) 구축.
- 멀티미디어 스트리밍 시 동일 콘텐츠를 효율적으로 전달.
- 신규 서비스 도입 시 전용 오버레이를 설계할지 비용 대비 효과 분석 필요.

### 5.3 Unicast Routing Protocols
- **RIP**: 거리 벡터, 홉 수 기반, 소규모 네트워크.
- **OSPF**: 링크 상태, 대규모 기업망.
- **BGP**: 경로 벡터, 자율 시스템 간 라우팅(인터넷 백본).

### 5.4 Multicast Routing
- IGMP(Internet Group Management Protocol)로 호스트 그룹 가입 관리.
- 라우터는 멀티캐스트 트리를 구성하여 필요한 링크로만 패킷 전달.
- PIM(Protocol Independent Multicast) 등 라우팅 프로토콜로 구현.

---

## Chapter 22. 네트워크 보안 기초

### 6.1 HTTP 보안
- **기본 인증(Basic Auth)**: Base64로 사용자/비밀번호 전달 → 도청에 취약.
- **요약 인증(Digest Auth)**: 해시 사용하지만 MITM 공격, 서버 인증 부재 등 취약점 존재.
- 해결책: SSL/TLS 기반 HTTPS로 전송 계층을 암호화.

### 6.2 전자메일 보안
- 요구사항: **기밀성**, **인증**, **무결성**, **부인방지**.
- 암호화 방식:
  - **대칭키**: 빠르지만 키 분배 문제.
  - **공개키/개인키**: PGP가 대표. 대칭키 + 공개키 혼합으로 효율 확보.
- 좋은 패스프레이즈: 길고 추측 어려우며 사용자가 기억 가능해야 한다.

### 6.3 공개키 검증
- **CA(Certificate Authority)**:
  - 공인 기관이 인증서를 발급하여 (공개키, 소유자) 쌍을 보증.
  - 인증서에는 시리얼 번호, 주체 정보, 발급자, 유효 기간, 디지털 서명 포함.
  - 웹 브라우저는 루트 CA 목록을 신뢰 기반으로 내장.
- **PGP Web of Trust**:
  - 사용자 간 상호 신뢰로 키를 검증.
  - 각 키는 Validity(인증 여부)와 Trust(신뢰도) 속성을 가진다.

### 6.4 Transport 계층 보안
- **SSL/TLS**:
  - 공통 기능: 세션 키 교환, 데이터 암호화, 서버/클라이언트 인증.
  - HTTPS = HTTP over TLS.
  - 단점: 초기 핸드셰이크 시 공용키 연산으로 지연 발생.

### 6.5 IP 계층 보안 (IPsec)
- 기능: 라우터 간 터널링, 암호화, 무결성 검증.
- 프로토콜:
  - **ESP (Encapsulating Security Payload)**: 암호화 + 인증.
  - **AH (Authentication Header)**: 인증 + 무결성 (암호화 없음).
- 모드: 전송 모드(End-to-End), 터널 모드(네트워크 간).

### 6.6 VPN (Virtual Private Network)
- 인터넷 상에서 사설망과 유사한 보안 환경 제공.
- 비교:
  - **Leased Line**: 전용 회선. 높은 비용, 높은 보안.
  - **혼합망**: 일부 전용 + 인터넷.
  - **VPN**: IPsec 터널 모드 활용, 비용 효율성과 보안성 절충.

---

## 7. 요약 및 학습 팁

- 네트워크 설계 시 기존 인프라 재사용과 새로운 기술 도입 간 비용/효과를 분석하라.
- IP 주소 설계를 위해 Subnetting과 CIDR 계산에 익숙해질 것.
- 라우팅 프로토콜(RIP/OSPF/BGP)의 동작 원리를 비교해 네트워크 규모별 적용 전략을 세워라.
- 보안은 계층별로 적용된다: 애플리케이션(HTTPS) → 트랜스포트(TLS) → 네트워크(IPsec).
- 패킷 캡처 툴(Wireshark)을 활용해 ARP, ICMP, DHCP, TLS 핸드셰이크 등을 직접 관찰하면 이해도가 향상된다.
