---
title: Databases
summary: Normalization, views, indexing, triggers, stored procedures, and transactions
date: 2025-04-30
math: true
authors:
  - admin
tags:
  - Database
  - RDBMS

exclude_search: false
dl_kind: "subjectsCount"
semester: "3-1"
course_topics:
  - Database normalization
  - Advanced SQL concepts
  - Transaction management
---

## 1. Database Normalization

### 1.1 Definition
- **Normalization** decomposes relations so that only related attributes remain together, eliminating anomalies and redundancy.

### 1.2 Anomalies
1. **Insertion anomaly:** need to insert unrelated data to add a new fact.
2. **Update anomaly:** modifying one duplicate tuple but not the others causes inconsistencies.
3. **Deletion anomaly:** removing a tuple unintentionally deletes valuable information.

> Normalization uses **functional dependencies** to prevent these anomalies.

---

## 2. Functional Dependencies

### 2.1 Definition
- In relation R, if attribute set $X$ determines $Y$, we denote $X \rightarrow Y$—tuples with the same $X$ must share the same $Y$.

### 2.2 Guidelines
- Derive dependencies from attribute semantics and business rules, not from sample data alone.
- Primary and candidate keys typically determine all other attributes.

### 2.3 Full Functional Dependency
- $X \rightarrow Y$ but no proper subset of $X$ determines $Y$.
- Indicates $Y$ depends on the entire composite key.

### 2.4 Partial Functional Dependency
- When $Y$ depends on only part of a composite key.
- Break such relations into 2NF to remove partial dependencies.

---

## 3. Normal Forms

### 3.1 First Normal Form (1NF)
- All attribute values are atomic (no repeating groups or arrays).
- Remove multi-valued attributes. If non-key attributes do not fully depend on the key, move to 2NF.

### 3.2 Second Normal Form (2NF)
- In 1NF and every non-key attribute is **fully functionally dependent** on the primary key.
- Eliminates partial dependencies; composite-key relations may require decomposition.

### 3.3 Third Normal Form (3NF)
- In 2NF and no non-key attribute is **transitively dependent** on the primary key (no $A \rightarrow B$, $B \rightarrow C$ implying $A \rightarrow C$ among non-keys).

### 3.4 Boyce–Codd Normal Form (BCNF)
- Stronger than 3NF: every determinant in a functional dependency is a candidate key.
- Needed when multiple candidate keys exist and 3NF still allows anomalies.

> Higher normal forms reduce redundancy but may increase join cost. Aim for a balance; 5NF is rarely necessary in practice.

### 3.5 Lossless Decomposition & Dependency Preservation
- Decompose relations without losing information and retain essential dependencies.
- Joining the decomposed tables must reconstruct the original data.

---

## 4. Views

### 4.1 Definition
- A **view** is a virtual table defined by a SELECT query over base tables. It stores no data, providing abstraction, reuse, and security.

### 4.2 Syntax
```sql
CREATE VIEW view_name [(column_list)]
AS
SELECT ...
[WITH CHECK OPTION];
```
- `WITH CHECK OPTION` enforces view predicates during DML operations.
- `ORDER BY` is not allowed inside view definitions; apply ordering when querying the view.

### 4.3 DML Restrictions
- View updates propagate to base tables only when:  
  1. key and NOT NULL columns are present,  
  2. no aggregates, DISTINCT, GROUP BY, or UNION,  
  3. simple single-table views.  
- Dropping a view leaves base tables intact, but drop dependent constraints first.

### 4.4 Benefits
- Simplify complex queries.
- Provide column-level access control.  
- Maintain logical independence when base schema changes.

---

## 5. Indexing

### 5.1 What & Why
- An index is a data structure that enables **fast record retrieval**—most RDBMSs use B+ Trees (sometimes hashes).
- Conceptually stores key-value pairs (key → record address).

### 5.2 How It Works
1. Look up the search key in the index.
2. Follow the pointer to fetch the record, avoiding full table scans and reducing complexity to O(log n).

### 5.3 Design Considerations
- Best for selective predicates, frequent sorting/grouping, join keys, read-heavy workloads.
- Caveats: maintenance cost on INSERT/UPDATE/DELETE, functions/casts may prevent usage, low selectivity columns yield little benefit.

### 5.4 Clustered vs. Nonclustered
- **Clustered index:** table rows are stored in index order (e.g., InnoDB primary key).
- **Nonclustered index:** separate structure points to the actual data pages.

---

## 6. Triggers

### 6.1 Concept
- Stored routines that fire automatically in response to events (DML, DDL, login).
- Enforce integrity rules, record audit logs, maintain derived values.

### 6.2 Types
- **BEFORE** triggers: execute prior to the event—validate or adjust values.
- **AFTER** triggers: run post-event—log or cascade changes.
- **INSTEAD OF** triggers: mainly for views; intercept operations and apply custom logic.

### 6.3 Cautions
- Complex trigger chains can hurt performance or cause recursion.
- Failures roll back the entire transaction—add proper exception handling.

---

## 7. Stored Procedures

### 7.1 Definition
- Precompiled SQL code stored in the database; accepts parameters to automate recurring tasks.
- Executes on the server, reducing network trips and centralising business logic.

### 7.2 Example
```sql
CREATE PROCEDURE proc_name(IN p INT, OUT result VARCHAR(50))
BEGIN
  -- SQL statements
END;
```
- Invoke with `CALL proc_name(value, @out);`

### 7.3 Pros & Cons
- Pros: reusable, secure (permission-controlled), potential performance gains.
- Cons: higher complexity, tricky version control and testing, DBMS vendor lock-in.

### 7.4 Procedure vs. Function
- Functions must return a value and can appear inside SELECT queries.
- Procedures may omit a return value, use OUT parameters, and manage transactions.

---

## 8. Transactions

### 8.1 Definition
- A **transaction** is a logical unit of work that groups multiple SQL statements. Commit all if successful, otherwise roll back to maintain consistency.

### 8.2 ACID Properties
1. **Atomicity:** all-or-nothing execution.  
2. **Consistency:** preserves integrity constraints.  
3. **Isolation:** concurrent transactions do not interfere.  
4. **Durability:** committed changes survive failures.

### 8.3 Isolation Levels
- **Read Uncommitted:** allows dirty reads.  
- **Read Committed:** prevents dirty reads (default in many systems).  
- **Repeatable Read:** guarantees repeatable reads; prevents non-repeatable reads.  
- **Serializable:** equivalent to serial execution; safest but slowest.

### 8.4 Concurrency Control
- Locks (shared/exclusive, two-phase locking), optimistic control, timestamp ordering, MVCC.

### 8.5 Design Tips
- Keep transactions short to avoid deadlocks and lock contention.
- Common pattern: `BEGIN; ...; COMMIT;` with `ROLLBACK;` on errors.

---

## 9. Production Checklist

- Balance normalization and denormalization according to read/write patterns.
- Maintain only necessary indexes and review usage statistics regularly.
- Include logging and error handling in triggers/procedures for auditability.
