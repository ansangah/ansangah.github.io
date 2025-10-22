---
title: Computer Networks
summary: Core concepts from network evolution to routing and security protocols
date: 2025-04-15
math: true
authors:
  - admin
tags:
  - ComputerNetworks
  - InternetProtocols

exclude_search: false
dl_kind: "subjectsCount"
semester: "3-1"
course_topics:
  - Network architecture
  - Routing and addressing
  - Security protocols
---

## Chapter 1. Introduction

### 1.1 Evolution of Data Networks
- Consider **commercial viability**, **line installation cost** (very high), and relatively cheaper equipment.
- Evaluate whether new technologies can reuse existing infrastructure.  
  - Success: xDSL leveraged telephone lines for broadband.  
  - Failure: 1970s video phones—insufficient demand relative to infrastructure cost.
- Modems convert digital ↔ analogue signals so legacy phone lines can transport data.

### 1.2 Development Path
- Telcos gradually expanded data services while keeping the telephone backbone.
- Phone number ↔ IP mapping allowed voice-over-IP on regular lines, though with lower audio quality.

### 1.3 Internet & ISPs
- **ISPs** (e.g., KT, SKT) provide network access.
- Hierarchical topology: local ISPs → backbone ISPs → global backbones connected via peering/transit.

---

## Chapter 19. Host-to-Host Delivery

### 2.1 OSI Seven Layers (Quick Review)
1. **Physical:** signal transmission.  
2. **Data Link:** MAC, error detection, hop-to-hop delivery.  
3. **Network:** routing, addressing, multicast, ARP.  
4. **Transport:** TCP/UDP for end-to-end reliability.  
5. **Session**  
6. **Presentation**  
7. **Application:** HTTP, DNS, etc. (Labs typically focus on layers 4–7.)

### 2.2 Network Layer Roles
1. **Internetworking:** connects heterogeneous networks.  
2. **Addressing:** assigns globally unique identifiers.  
3. **Routing:** chooses optimal paths.  
4. **Packetizing:** encapsulates upper-layer data.  
5. **Fragmenting:** splits packets to respect MTU limits.

### 2.3 Switching
- **Circuit switching:** dedicated path (telephone network).  
- **Packet switching:** best-effort, store-and-forward (Internet).

### 2.4 Datagram Service
- Connectionless: each packet is routed independently.
- Packets may arrive out of order; TCP reorders and handles flow control.

---

## Chapter 19. IPv4 Addressing and Subnets

### 3.1 Address Classes
- 32-bit addresses must be unique and universally routable.
- Classful ranges:  
  - **Class A:** 0xxxxxxx (0–127), NetID 7 bits, HostID 24 bits.  
  - **Class B:** 10xxxxxx (128–191), NetID 14 bits, HostID 16 bits.  
  - **Class C:** 110xxxxx (192–223), NetID 21 bits, HostID 8 bits.  
  - **Class D:** 1110xxxx (224–239), multicast.  
  - **Class E:** 1111xxxx (240–255), reserved for experiments.
- Special addresses: `-.0.0.0` (network), `-.0.0.1` (gateway), `-.255.255.255` (broadcast).

### 3.2 Subnetting
- Partition large networks into manageable subnets to improve organisation and security.
- Use bitwise AND: IP & subnet mask = subnet address.
- CIDR enables flexible, classless allocation.

### 3.3 DHCP
- Dynamically assigns IP configuration. Sequence: Discover → Offer → Request → ACK.
- Mitigates address exhaustion; well-suited for mobile devices.
- Combine with NAT to hide private addresses.

### 3.4 NAT
- Translates private ↔ public addresses so many hosts share one public IP.
- PAT (port address translation) differentiates sessions.
- External access requires port forwarding or static public IPs.

### 3.5 IP Datagram
- TTL decrements at each router; packet discarded at zero to avoid loops.
- Fragmentation splits packets exceeding link MTU; reassembly happens at the final destination.

---

## Chapter 20. Network Layer Protocols

### 4.1 ARP
- Resolves IP addresses to MAC addresses within the same subnet.
- Request sent via broadcast; reply delivered as unicast. Results cached.

### 4.2 IP
- Minimum 20-byte header with version, header length, TTL, protocol, checksum, etc.
- Protocol field multiplexes upper-layer protocols (TCP=6, UDP=17, OSPF=89, ...).

### 4.3 Fragmentation & MTU
- Routers split packets when downstream MTU is smaller.  
- DF (Don’t Fragment) flag forbids splitting, prompting ICMP errors instead.

### 4.4 ICMP
- Reports network-layer errors and diagnostic information.
- Error messages: Destination Unreachable, (deprecated) Source Quench, Time Exceeded, Parameter Problem, Redirect.  
- Query messages: Echo (ping), Timestamp, etc.  
- ICMP only reports problems—flow and congestion control live elsewhere.

### 4.5 IPv6 Overview
- 128-bit address space, simplified header, richer QoS support.
- Address notation uses 16-bit hex blocks with `::` compression.
- Transition strategies:  
  1. **Dual Stack** (run IPv4 & IPv6 simultaneously).  
  2. **Tunnelling** (encapsulate IPv6 in IPv4).  
  3. **Header Translation** (convert headers; may lose info like flow labels).

---

## Chapter 21. Unicast & Multicast Routing

### 5.1 Routing Types
- **Unicast:** one-to-one (default Internet traffic).  
- **Multicast:** one-to-many (group members only).  
- **Broadcast:** one-to-all (limited in IPv4).  
- **Anycast:** one-to-nearest (e.g., DNS root replicas).

### 5.2 Overlay Networks
- Logical networks built atop the physical Internet (e.g., CDNs).
- Reduce load when delivering identical media streams.  
- New services must weigh overlay benefits against cost.

### 5.3 Unicast Protocols
- **RIP:** distance vector, hop-count metric—small networks.  
- **OSPF:** link-state—large enterprise networks.  
- **BGP:** path vector—inter-AS routing on the global Internet.

### 5.4 Multicast Routing
- Hosts join/leave groups via IGMP.  
- Routers build multicast trees to forward only along necessary links.  
- Protocols include PIM (protocol-independent multicast) variants.

---

## Chapter 22. Security Fundamentals

### 6.1 HTTP Security
- **Basic auth:** Base64 username/password—susceptible to eavesdropping.
- **Digest auth:** adds hashing yet still vulnerable (no server authentication, MITM).  
- Real-world solution: HTTPS via SSL/TLS to encrypt the transport layer.

### 6.2 Secure Email
- Requirements: **confidentiality**, **authentication**, **integrity**, **non-repudiation**.
- Encryption approaches:  
  - Symmetric keys (fast but key distribution is hard).  
  - Public/private keys (PGP combines both).  
- Strong passphrases should be long, unpredictable, yet memorable.

### 6.3 Public-Key Validation
- **Certificate Authorities (CA):** trusted third parties issue certificates binding public keys to identities. Certificates include serials, subject/issuer info, validity, signatures.
- **PGP Web of Trust:** decentralised—users vouch for one another; keys have validity and trust scores.

### 6.4 Transport-Layer Security
- **SSL/TLS:** negotiate session keys, encrypt data, authenticate endpoints. HTTPS = HTTP over TLS.  
- Drawback: handshake incurs public-key operations and latency.

### 6.5 Network-Layer Security (IPsec)
- Provides tunnelling, encryption, and integrity between routers or hosts.
- Protocols: **ESP** (encryption + authentication) and **AH** (authentication + integrity only).
- Modes: transport (end-to-end) and tunnel (network-to-network).

### 6.6 VPN
- Emulates a private network over the public Internet.
- Comparison:  
  - **Leased line:** secure but expensive.  
  - **Hybrid:** mix of private lines and Internet.  
  - **VPN:** IPsec tunnel mode balances cost and security.

---

## 7. Summary & Study Tips

- Analyse cost vs. benefit when reusing existing infrastructure versus deploying new tech.
- Practise subnetting and CIDR to design addressing plans.
- Compare routing protocols (RIP/OSPF/BGP) and match them to network scale.
- Security spans multiple layers: application (HTTPS) → transport (TLS) → network (IPsec).
- Use packet-analyser tools (Wireshark) to observe ARP, ICMP, DHCP, TLS handshakes and solidify understanding.
