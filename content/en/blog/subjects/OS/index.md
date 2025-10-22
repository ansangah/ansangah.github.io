---
title: Operating Systems
summary: Essential concepts from OS history to kernel architecture and system calls
date: 2025-04-30
math: true
authors:
  - admin
tags:
  - OperatingSystems
  - SystemProgramming

exclude_search: false
dl_kind: "subjectsCount"
semester: "3-1"
course_topics:
  - OS history and concepts
  - Hardware and kernel structure
  - I/O and system calls
---

## 1. History and Concepts

### 1.1 Batch Processing
- Early OSes executed a single job at a time with no user intervention.
- Operators manually queued jobs; the next job started only after the previous finished.
- Idle CPU time abounded while waiting for I/O, making computation inefficient.

### 1.2 Limitations of Batch
1. **CPU idle time:** Fast CPUs waited for slow I/O devices.
2. **Slow job switching:** Manual intervention delayed the transition between jobs.

### 1.3 Spooling (Fixes Issue 1)
- Buffers I/O so computation and device work overlap.
- Example: printer spooling—documents are queued on disk; printers fetch at their own pace while the CPU continues other work.
- Benefit: CPU need not stall for I/O completion.
- Caveat: If the program depends immediately on I/O results (e.g., `read()`), spooling alone cannot help.

### 1.4 Automatic Job Sequencing (Fixes Issue 2)
- Scheduling software automatically loads the next job as soon as the previous one finishes.
- Improves throughput compared with manual batching.
- Requires **multiprogramming** to keep multiple jobs resident in memory.

### 1.5 Multiprogramming & Time Sharing
- Multiple jobs reside in memory; CPU switches to another while the current one waits for I/O.
- FCFS plus priority-based policies balance fairness.
- **Time sharing:** CPU time is sliced so each job sees frequent progress. Heavy context switching gives the illusion of concurrency but adds overhead.

---

## 2. OS and Computer-System Structure

### 2.1 Four Components
1. **Hardware:** CPU, memory, I/O devices provide raw resources.
2. **Operating System:** Arbitrates resource access among programs.
3. **Application Programs:** Decide how resources are used to satisfy user tasks.
4. **Users:** People or other systems interacting with the computer.

### 2.2 Bus Architecture
- Early machines used a single bus—CPU, memory, I/O shared one channel—causing bottlenecks.
- **Hierarchical dual-bus** design emerged:  
  - **System bus:** connects fast CPU/memory.  
  - **I/O bus:** connects slower peripherals.  
  - **Northbridge:** controller for high-speed devices.  
  - **Southbridge:** handles slower devices and legacy ports.

---

## 3. Execution Modes: User vs. Kernel

- CPUs provide at least two privilege levels for system protection.
- Each mode controls which instructions and memory regions are accessible.

### 3.1 Kernel Mode
- Privileged; OS services, drivers, and resource managers run here with full hardware access.

### 3.2 User Mode
- Restricted; applications cannot execute privileged instructions and must request services via the OS.

### 3.3 Mode Switching
- System calls, interrupts, and traps flip the mode bit and jump into kernel handlers.
- After handling, control returns to user mode at the interrupted point.

---

## 4. CPU Event Handling

### 4.1 Hardware Interrupts
- Asynchronous events from devices.
- Sequence: save context → jump to ISR → perform service → restore context → resume execution.
- Priorities decide which interrupts pre-empt others; keep ISRs short.

### 4.2 Traps (Software Interrupts)
- Synchronous events within a program: e.g., divide-by-zero, system calls.
- Trigger a switch to kernel mode but may reuse existing context without full saving.

### 4.3 I/O Device Components
- **Bus:** data, address, and control lines.
- **Device registers:** control, status, input, output; mapped to memory for CPU access.
- **Controller:** intermediates between devices and buses, arbitrating use.

---

## 5. Device Access Methods

### 5.1 I/O Instructions
- CPU-specific instructions communicate directly with devices.
- Non-portable because instruction sets differ.

### 5.2 Memory-Mapped I/O
- Maps device registers into the main address space so ordinary loads/stores access hardware.
- Improves portability and programming simplicity.

---

## 6. I/O Completion Techniques

### 6.1 Polling
- CPU repeatedly checks device status.
- Fast response for quick devices but wastes CPU cycles when waiting.

### 6.2 Interrupt-Driven I/O
- CPU continues other tasks until a device interrupts to signal completion.
- Saves busy-wait time but incurs context-switch overhead and may delay detection of very fast events.

> **Rule of thumb:** Fast devices favour polling; slower ones benefit from interrupts.

---

## 7. Data Transfer Methods

### 7.1 Programmed I/O
- CPU performs all data movement; expensive for large transfers.

### 7.2 Direct Memory Access (DMA)
- A DMA controller transfers data between memory and devices on behalf of the CPU.
- Process: CPU issues command → DMA moves data → completion interrupt notifies CPU.
- Pros: frees CPU cycles; excels for high-volume transfers.  
- Cons: additional hardware cost and possible bus contention.

---

## 8. OS Design Considerations

### 8.1 General vs. Special Purpose
- General-purpose OSes serve diverse workloads; special-purpose OSes target embedded, real-time, or appliance scenarios.
- Balancing performance, fairness, and reliability requires deliberate trade-offs.

### 8.2 Layering vs. Modularity
- **Layering:** strict top-down structure; upper layers use lower-layer services only.
- **Modularity:** independent components communicate through explicit interfaces; freer ordering but demands dependency management.
- Modern OSes blend both: layered architecture populated with modular subsystems for stability and extensibility.

---

## 9. Kernel Structures and System Calls

### 9.1 System Calls & Mode Switch
- User code invokes an API → generates a trap → CPU enters kernel mode → trap handler executes → returns to user mode.

### 9.2 Parameter Passing
1. **Registers:** fastest but few parameters fit.  
2. **Memory blocks:** store arguments in memory and pass the address.  
3. **Stack:** push arguments in user mode; kernel pops them.

### 9.3 Monolithic Kernel
- All kernel services share one address space.
- Pros: minimal overhead for cross-service calls.  
- Cons: tightly coupled; a faulty module can crash the entire kernel.

### 9.4 Address Spaces
- Define accessible address ranges. Sharing the same space allows direct referencing; separate spaces reinforce protection boundaries.

### 9.5 Microkernel
- Decomposes services into user-space servers communicating via IPC.
- Pros: low coupling, easy maintenance, unload unused services.  
- Cons: frequent address-space switches and IPC overhead can hurt performance.

### 9.6 Hybrid Kernel
- Real-world kernels typically combine monolithic cores with loadable modules or user-space servers, balancing performance and flexibility.
