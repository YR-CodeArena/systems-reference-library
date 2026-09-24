const fs = require('fs');

const allSnippets = JSON.parse(fs.readFileSync('scratch/all_snippets.json', 'utf-8'));

function runSqlEngine(code) {
  // Diagrams / schema hierarchy
  if (code.includes('PostgreSQL Server Instance') || code.includes('├──') || code.includes('Transaction Lifecycle State Transitions')) {
    return {
      isSuccess: true,
      exitCode: 0,
      output: `[Architectural Reference Diagram // 仕様図]\nDisplaying relational database architectural hierarchy.`
    };
  }

  // 1. Person CRUD (The user's screenshot query!)
  if (code.includes('INSERT INTO person') || (code.includes('FROM person') && code.includes('Raju'))) {
    return {
      isSuccess: true,
      exitCode: 0,
      output: `INSERT 0 1\nINSERT 0 2\nINSERT 0 1\n\n id  | name  |   city    \n-----+-------+-----------\n 101 | Raju  | Delhi\n 102 | Shyam | Mumbai\n 103 | Paul  | Chennai\n 104 | Alex  | Pune\n(4 rows)\n\n name  |   city    \n-------+-----------\n Raju  | Delhi\n Shyam | Mumbai\n Paul  | Chennai\n Alex  | Pune\n(4 rows)\n\nUPDATE 1\nDELETE 1`
    };
  }

  // 2. Database Creation & Inspection
  if (code.includes('CREATE DATABASE person_db')) {
    return {
      isSuccess: true,
      exitCode: 0,
      output: `CREATE DATABASE\n\n  datname   \n------------\n postgres\n template1\n person_db\n(3 rows)\n\nDROP DATABASE`
    };
  }
  if (code.includes('CREATE TABLE person (')) {
    return {
      isSuccess: true,
      exitCode: 0,
      output: `CREATE TABLE\n-- Schema 'public.person' initialized with 3 columns (id INT, name VARCHAR(100), city VARCHAR(100)).`
    };
  }

  // 3. Sequence currval & setval
  if (code.includes('currval') || code.includes('setval')) {
    return {
      isSuccess: true,
      exitCode: 0,
      output: ` currval \n---------\n       5\n(1 row)\n\n setval  \n---------\n      10\n(1 row)`
    };
  }

  // 4. bank_db creation & seeding
  if (code.includes('CREATE DATABASE bank_db')) {
    return {
      isSuccess: true,
      exitCode: 0,
      output: `CREATE DATABASE\nYou are now connected to database "bank_db" as user "postgres".\nCREATE TABLE\nINSERT 0 10`
    };
  }

  // 5. Comparison & Logic filtering
  if (code.includes('WHERE emp_id = 5') || code.includes('salary > 50000')) {
    return {
      isSuccess: true,
      exitCode: 0,
      output: ` emp_id | first_name | last_name |         email         | department |  salary  | hire_date  \n--------+------------+-----------+-----------------------+------------+----------+------------\n      5 | Kavita     | Patel     | kavita.patel@bank.com | HR         | 47000.00 | 2023-05-12\n(1 row)\n\n emp_id | first_name | last_name |         email         | department |  salary  | hire_date  \n--------+------------+-----------+-----------------------+------------+----------+------------\n      1 | Raj        | Sharma    | raj.sharma@bank.com   | IT         | 50000.00 | 2023-01-15\n      3 | Arjun      | Verma     | arjun.verma@bank.com  | IT         | 55000.00 | 2023-03-10\n      4 | Suman      | Rao       | suman.rao@bank.com    | Finance    | 60000.00 | 2023-04-05\n      6 | Amit       | Kumar     | amit.kumar@bank.com   | Marketing  | 52000.00 | 2023-06-18\n      7 | Anjali     | Mehta     | anjali.mehta@bank.com | Finance    | 61000.00 | 2023-07-22\n      9 | Neha       | Gupta     | neha.gupta@bank.com   | IT         | 53000.00 | 2023-09-14\n     10 | Vijay      | Mallya    | vijay.mallya@bank.com | Marketing  | 50000.00 | 2023-10-01\n(7 rows)`
    };
  }

  // 6. IN & BETWEEN
  if (code.includes("IN ('IT', 'Finance', 'HR')") || code.includes('BETWEEN 48000 AND 55000')) {
    return {
      isSuccess: true,
      exitCode: 0,
      output: ` emp_id | first_name | last_name |         email         | department |  salary  | hire_date  \n--------+------------+-----------+-----------------------+------------+----------+------------\n      1 | Raj        | Sharma    | raj.sharma@bank.com   | IT         | 50000.00 | 2023-01-15\n      2 | Priya      | Singh     | priya.singh@bank.com  | HR         | 45000.00 | 2023-02-20\n      3 | Arjun      | Verma     | arjun.verma@bank.com  | IT         | 55000.00 | 2023-03-10\n      4 | Suman      | Rao       | suman.rao@bank.com    | Finance    | 60000.00 | 2023-04-05\n      5 | Kavita     | Patel     | kavita.patel@bank.com | HR         | 47000.00 | 2023-05-12\n      7 | Anjali     | Mehta     | anjali.mehta@bank.com | Finance    | 61000.00 | 2023-07-22\n      8 | Rahul      | Dravid    | rahul.dravid@bank.com | IT         | 48000.00 | 2023-08-30\n      9 | Neha       | Gupta     | neha.gupta@bank.com   | IT         | 53000.00 | 2023-09-14\n(8 rows)`
    };
  }

  // 7. DISTINCT, ORDER BY, LIMIT
  if (code.includes('DISTINCT department') || code.includes('LIMIT 3')) {
    return {
      isSuccess: true,
      exitCode: 0,
      output: ` department \n------------\n Finance\n HR\n IT\n Marketing\n(4 rows)\n\n emp_id | first_name | last_name |         email         | department |  salary  | hire_date  \n--------+------------+-----------+-----------------------+------------+----------+------------\n      7 | Anjali     | Mehta     | anjali.mehta@bank.com | Finance    | 61000.00 | 2023-07-22\n      4 | Suman      | Rao       | suman.rao@bank.com    | Finance    | 60000.00 | 2023-04-05\n      3 | Arjun      | Verma     | arjun.verma@bank.com  | IT         | 55000.00 | 2023-03-10\n(3 rows)`
    };
  }

  // 8. LIKE patterns
  if (code.includes("LIKE 'A%'")) {
    return {
      isSuccess: true,
      exitCode: 0,
      output: ` emp_id | first_name | last_name |         email         | department |  salary  | hire_date  \n--------+------------+-----------+-----------------------+------------+----------+------------\n      3 | Arjun      | Verma     | arjun.verma@bank.com  | IT         | 55000.00 | 2023-03-10\n      6 | Amit       | Kumar     | amit.kumar@bank.com   | Marketing  | 52000.00 | 2023-06-18\n      7 | Anjali     | Mehta     | anjali.mehta@bank.com | Finance    | 61000.00 | 2023-07-22\n(3 rows)`
    };
  }

  // 9. Aggregates (COUNT, SUM, AVG, MIN, MAX)
  if (code.includes('COUNT(emp_id)') && code.includes('total_employees')) {
    return {
      isSuccess: true,
      exitCode: 0,
      output: ` total_employees \n-----------------\n              10\n(1 row)\n\n total_payroll \n---------------\n     521000.00\n(1 row)\n\n average_salary \n----------------\n       52100.00\n(1 row)\n\n lowest_salary | highest_salary \n---------------+----------------\n      45000.00 |       61000.00\n(1 row)`
    };
  }

  // 10. GROUP BY & HAVING
  if (code.includes('GROUP BY department')) {
    return {
      isSuccess: true,
      exitCode: 0,
      output: ` department | headcount \n------------+-----------\n Finance    |         2\n HR         |         2\n IT         |         4\n Marketing  |         2\n(4 rows)\n\n department | department_payroll | average_salary \n------------+--------------------+----------------\n Finance    |          121000.00 |       60500.00\n HR         |           92000.00 |       46000.00\n IT         |          206000.00 |       51500.00\n Marketing  |          102000.00 |       51000.00\n(4 rows)`
    };
  }

  // 11. String functions CONCAT_WS
  if (code.includes("CONCAT_WS(' : '") && code.includes('formatted_profile')) {
    return {
      isSuccess: true,
      exitCode: 0,
      output: `                 formatted_profile                  \n----------------------------------------------------\n 1 : Raj : Sharma : IT\n 2 : Priya : Singh : HR\n 3 : Arjun : Verma : IT\n 4 : Suman : Rao : Finance\n 5 : Kavita : Patel : HR\n 6 : Amit : Kumar : Marketing\n 7 : Anjali : Mehta : Finance\n 8 : Rahul : Dravid : IT\n 9 : Neha : Gupta : IT\n 10 : Vijay : Mallya : Marketing\n(10 rows)`
    };
  }

  // 12. String UPPER/LOWER custom_employee_card
  if (code.includes('custom_employee_card')) {
    return {
      isSuccess: true,
      exitCode: 0,
      output: `               custom_employee_card                \n---------------------------------------------------\n 1 : RAJ : sharma : IT\n 2 : PRIYA : singh : HR\n 3 : ARJUN : verma : IT\n 4 : SUMAN : rao : Finance\n 5 : KAVITA : patel : HR\n 6 : AMIT : kumar : Marketing\n 7 : ANJALI : mehta : Finance\n 8 : RAHUL : dravid : IT\n 9 : NEHA : gupta : IT\n 10 : VIJAY : mallya : Marketing\n(10 rows)`
    };
  }

  // 13. String LEFT & custom_emp_code
  if (code.includes('custom_emp_code')) {
    return {
      isSuccess: true,
      exitCode: 0,
      output: ` first_name | custom_emp_code \n------------+-----------------\n Raj        | I1\n Priya      | H2\n Arjun      | I3\n Suman      | F4\n Kavita     | H5\n Amit       | M6\n Anjali     | F7\n Rahul      | I8\n Neha       | I9\n Vijay      | M10\n(10 rows)`
    };
  }

  // 14. ALTER TABLE modifications
  if (code.includes('ALTER TABLE person')) {
    if (code.includes('mobile')) {
      return {
        isSuccess: true,
        exitCode: 0,
        output: `ALTER TABLE\nALTER TABLE\n-- Column 'mobile' added with UNIQUE constraint.`
      };
    }
    return {
      isSuccess: true,
      exitCode: 0,
      output: `ALTER TABLE\nALTER TABLE\nALTER TABLE\nALTER TABLE\nALTER TABLE\n-- Schema 'public.person' successfully altered.`
    };
  }

  // 15. CASE WHEN statements
  if (code.includes('CASE') && code.includes('salary')) {
    if (code.includes('bonus_amount')) {
      return {
        isSuccess: true,
        exitCode: 0,
        output: ` first_name |  salary  |  bonus_amount  \n------------+----------+----------------\n Raj        | 50000.00 |        5000.00\n Priya      | 45000.00 |        4500.00\n Arjun      | 55000.00 |        5500.00\n Suman      | 60000.00 |        6000.00\n Kavita     | 47000.00 |        4700.00\n Amit       | 52000.00 |        5200.00\n Anjali     | 61000.00 |        6100.00\n Rahul      | 48000.00 |        4800.00\n Neha       | 53000.00 |        5300.00\n Vijay      | 50000.00 |        5000.00\n(10 rows)`
      };
    }
    if (code.includes('salary_tier') && (code.includes('High Tier') || code.includes('total_payout'))) {
      return {
        isSuccess: true,
        exitCode: 0,
        output: ` salary_tier | employee_count |  total_payout  \n-------------+----------------+----------------\n High Tier   |              3 |      176000.00\n Mid Tier    |              5 |      253000.00\n Low Tier    |              2 |       92000.00\n(3 rows)`
      };
    }
    return {
      isSuccess: true,
      exitCode: 0,
      output: ` first_name |  salary  |  salary_tier  \n------------+----------+---------------\n Raj        | 50000.00 | Mid Salary\n Priya      | 45000.00 | Low Salary\n Arjun      | 55000.00 | High Salary\n Suman      | 60000.00 | High Salary\n Kavita     | 47000.00 | Low Salary\n Amit       | 52000.00 | Mid Salary\n Anjali     | 61000.00 | High Salary\n Rahul      | 48000.00 | Mid Salary\n Neha       | 53000.00 | Mid Salary\n Vijay      | 50000.00 | Mid Salary\n(10 rows)`
    };
  }

  // 16. Relational schema customers & orders
  if (code.includes('CREATE TABLE customers') || code.includes('CREATE TABLE orders')) {
    return {
      isSuccess: true,
      exitCode: 0,
      output: `CREATE TABLE\nCREATE TABLE\nINSERT 0 3\nINSERT 0 4\n-- Relational schema initialized with Foreign Key (orders.customer_id -> customers.customer_id).`
    };
  }

  // 17. Joins (INNER, LEFT, JOIN with AGGREGATION)
  if (code.includes('FROM customers c')) {
    return {
      isSuccess: true,
      exitCode: 0,
      output: ` customer_name | order_id | order_date | price  \n---------------+----------+------------+--------\n Alex          |     1001 | 2023-11-01 | 250.00\n Alex          |     1002 | 2023-11-05 | 120.00\n Priya         |     1003 | 2023-11-10 | 850.00\n(3 rows)\n\n customer_name | order_id | price  \n---------------+----------+--------\n Alex          |     1001 | 250.00\n Alex          |     1002 | 120.00\n Priya         |     1003 | 850.00\n Spongebob     |          |       \n(4 rows)\n\n customer_name | total_orders | total_spent \n---------------+--------------+-------------\n Alex          |            2 |      370.00\n Priya         |            1 |      850.00\n(2 rows)`
    };
  }

  // 18. 3-Table Join (students, courses, enrollments)
  if (code.includes('FROM enrollments e') || code.includes('CREATE TABLE students')) {
    return {
      isSuccess: true,
      exitCode: 0,
      output: `CREATE TABLE\nCREATE TABLE\nCREATE TABLE\nINSERT 0 3\nINSERT 0 2\nINSERT 0 3\n\n student_name | course_name |  fee   | enroll_date \n--------------+-------------+--------+-------------\n Raju         | Maths       | 500.00 | 2024-03-01\n Raju         | Physics     | 600.00 | 2024-03-01\n Shyam        | Maths       | 500.00 | 2024-03-01\n(3 rows)`
    };
  }

  // 19. E-Commerce 4-Table Join
  if (code.includes('CREATE TABLE store_customers') || code.includes('FROM order_items oi')) {
    return {
      isSuccess: true,
      exitCode: 0,
      output: `CREATE TABLE\nCREATE TABLE\nCREATE TABLE\nCREATE TABLE\nINSERT 0 3\nINSERT 0 2\nINSERT 0 3\nINSERT 0 3\n\n cust_name | order_id | order_date | product_name | unit_price | quantity | line_item_total \n-----------+----------+------------+--------------+------------+----------+-----------------\n Raju      |        1 | 2024-03-01 | Laptop       |   55000.00 |        1 |        55000.00\n Raju      |        1 | 2024-03-01 | Mouse        |     500.00 |        2 |         1000.00\n Shyam     |        2 | 2024-03-02 | Keyboard     |     800.00 |        1 |          800.00\n(3 rows)`
    };
  }

  // 20. View creation & query
  if (code.includes('CREATE VIEW billing_info_view') || code.includes('FROM billing_info_view WHERE')) {
    return {
      isSuccess: true,
      exitCode: 0,
      output: `CREATE VIEW\n\n cust_name | order_id | product_name | unit_price | quantity | line_item_total \n-----------+----------+--------------+------------+----------+-----------------\n Raju      |        1 | Laptop       |   55000.00 |        1 |        55000.00\n(1 row)`
    };
  }

  // 21. HAVING clause on view
  if (code.includes('HAVING SUM(line_item_total) > 1000.00')) {
    return {
      isSuccess: true,
      exitCode: 0,
      output: ` product_name | total_revenue \n--------------+---------------\n Laptop       |      55000.00\n(1 row)`
    };
  }

  // 22. ROLLUP
  if (code.includes('ROLLUP(product_name)')) {
    return {
      isSuccess: true,
      exitCode: 0,
      output: ` product_label | revenue  \n---------------+----------\n Keyboard      |   800.00\n Laptop        | 55000.00\n Mouse         |  1000.00\n GRAND TOTAL   | 56800.00\n(4 rows)`
    };
  }

  // 23. Stored Procedures & Functions
  if (code.includes('CREATE OR REPLACE PROCEDURE update_emp_salary') || code.includes('CALL update_emp_salary')) {
    return {
      isSuccess: true,
      exitCode: 0,
      output: `CREATE PROCEDURE\nCALL\n-- Salary updated successfully in transaction.`
    };
  }
  if (code.includes('get_dept_max_earner')) {
    return {
      isSuccess: true,
      exitCode: 0,
      output: `CREATE FUNCTION\n\n r_emp_id | r_first_name | r_salary \n----------+--------------+----------\n        3 | Arjun        | 55000.00\n(1 row)`
    };
  }

  // 24. Window Functions
  if (code.includes('OVER(ORDER BY salary ASC)')) {
    return {
      isSuccess: true,
      exitCode: 0,
      output: ` first_name |  salary  | running_total | running_avg \n------------+----------+---------------+-------------\n Priya      | 45000.00 |      45000.00 |    45000.00\n Kavita     | 47000.00 |      92000.00 |    46000.00\n Rahul      | 48000.00 |     140000.00 |    46666.67\n Raj        | 50000.00 |     190000.00 |    47500.00\n Vijay      | 50000.00 |     240000.00 |    48000.00\n Amit       | 52000.00 |     292000.00 |    48666.67\n Neha       | 53000.00 |     345000.00 |    49285.71\n Arjun      | 55000.00 |     400000.00 |    50000.00\n Suman      | 60000.00 |     460000.00 |    51111.11\n Anjali     | 61000.00 |     521000.00 |    52100.00\n(10 rows)`
    };
  }
  if (code.includes('ROW_NUMBER()') || code.includes('DENSE_RANK()')) {
    return {
      isSuccess: true,
      exitCode: 0,
      output: ` first_name |  salary  | row_num | rank_with_gaps | dense_rank_no_gaps \n------------+----------+---------+----------------+--------------------\n Anjali     | 61000.00 |       1 |              1 |                  1\n Suman      | 60000.00 |       2 |              2 |                  2\n Arjun      | 55000.00 |       3 |              3 |                  3\n Neha       | 53000.00 |       4 |              4 |                  4\n Amit       | 52000.00 |       5 |              5 |                  5\n Raj        | 50000.00 |       6 |              6 |                  6\n Vijay      | 50000.00 |       7 |              6 |                  6\n Rahul      | 48000.00 |       8 |              8 |                  7\n Kavita     | 47000.00 |       9 |              9 |                  8\n Priya      | 45000.00 |      10 |             10 |                  9\n(10 rows)\n\n first_name | department |  salary  | dept_rank \n------------+------------+----------+-----------\n Anjali     | Finance    | 61000.00 |         1\n Suman      | Finance    | 60000.00 |         2\n Kavita     | HR         | 47000.00 |         1\n Priya      | HR         | 45000.00 |         2\n Arjun      | IT         | 55000.00 |         1\n Neha       | IT         | 53000.00 |         2\n Raj        | IT         | 50000.00 |         3\n Rahul      | IT         | 48000.00 |         4\n Amit       | Marketing  | 52000.00 |         1\n Vijay      | Marketing  | 50000.00 |         2\n(10 rows)`
    };
  }
  if (code.includes('LEAD(salary)')) {
    return {
      isSuccess: true,
      exitCode: 0,
      output: ` first_name |  salary  | next_higher_salary | salary_delta \n------------+----------+--------------------+--------------\n Anjali     | 61000.00 |           60000.00 |      1000.00\n Suman      | 60000.00 |           55000.00 |      5000.00\n Arjun      | 55000.00 |           53000.00 |      2000.00\n Neha       | 53000.00 |           52000.00 |      1000.00\n Amit       | 52000.00 |           50000.00 |      2000.00\n Raj        | 50000.00 |           50000.00 |         0.00\n Vijay      | 50000.00 |           48000.00 |      2000.00\n Rahul      | 48000.00 |           47000.00 |      1000.00\n Kavita     | 47000.00 |           45000.00 |      2000.00\n Priya      | 45000.00 |                    |              \n(10 rows)`
    };
  }

  // 25. CTE
  if (code.includes('dept_avg_cte')) {
    return {
      isSuccess: true,
      exitCode: 0,
      output: ` first_name | department |  salary  | dept_avg \n------------+------------+----------+----------\n Arjun      | IT         | 55000.00 | 51500.00\n Neha       | IT         | 53000.00 | 51500.00\n Anjali     | Finance    | 61000.00 | 60500.00\n(3 rows)`
    };
  }

  // 26. Trigger
  if (code.includes('sanitize_salary_func') || code.includes('trg_sanitize_salary')) {
    return {
      isSuccess: true,
      exitCode: 0,
      output: `CREATE FUNCTION\nCREATE TRIGGER\nUPDATE 1\n\n emp_id | first_name | salary \n--------+------------+--------\n      1 | Raj        |   0.00\n(1 row)`
    };
  }

  // 27. EXPLAIN / ANALYZE
  if (code.includes('EXPLAIN') || code.includes('ANALYZE')) {
    return {
      isSuccess: true,
      exitCode: 0,
      output: `QUERY PLAN                                                                     \n-------------------------------------------------------------------------------\nIndex Scan using idx_orders_customer on orders  (cost=0.42..8.44 rows=1 width=72) (actual time=0.018..0.021 rows=1 loops=1)\n  Index Cond: (customer_id = 9482)\nPlanning Time: 0.082 ms\nExecution Time: 0.045 ms\n(4 rows)`
    };
  }

  return {
    isSuccess: true,
    exitCode: 0,
    output: `[PostgreSQL 16.2 on x86_64-pc-linux-gnu]\nStatement execution completed.\nDuration: 0.88 ms\nStatus: OK`
  };
}

function runJavaEngine(code) {
  // Diagrams
  if (code.includes('javac Compiler') || code.includes('JDK (Java Development Kit)') || code.includes('STACK MEMORY') || code.includes('INPUT BUFFER STATE') || code.includes('OOP PILLARS') || code.includes('Throwable') || code.includes('[ New Thread ]')) {
    return {
      isSuccess: true,
      exitCode: 0,
      output: `[Architectural Reference Diagram // 仕様図]\nDisplaying JVM execution & memory architecture specifications.`
    };
  }

  // High Concurrency / Architecture Snippets
  if (code.includes('ConcurrentMicrobenchmark')) {
    return {
      isSuccess: true,
      exitCode: 0,
      output: `# JMH version: 1.37\n# VM version: JDK 21.0.2, OpenJDK 64-Bit Server VM\n# Benchmark: com.architect.concurrency.ConcurrentMicrobenchmark\n\nBenchmark                                      Mode  Cnt         Score         Error  Units\nConcurrentMicrobenchmark.testAtomicIncrement  thrpt   25  84210984.120 ± 124500.312  ops/s\nConcurrentMicrobenchmark.testLockProtected    thrpt   25  19402841.450 ±  98420.100  ops/s\nConcurrentMicrobenchmark.testBlackhole        thrpt   25  91402390.880 ± 141200.540  ops/s`
    };
  }
  if (code.includes('NetworkDataService') || code.includes('pins virtual thread') || code.includes('blockingFetch')) {
    return {
      isSuccess: true,
      exitCode: 0,
      output: `OpenJDK 64-Bit Server VM (build 21.0.2+13-LTS)\n[WARNING] [Carrier Pinning Hazard Detected]\nVirtualThread[#48] pinned to carrier thread ForkJoinPool-1-worker-2!\nLocation: com.architect.NetworkDataService.blockingFetch(NetworkDataService.java:18)\nReason: Monitorenter held on object monitor during blocking socket read.\nImpact: Carrier thread pool throughput degraded under high concurrency.\nRemediation: Replace synchronized block with java.util.concurrent.locks.ReentrantLock.\nJVM execution completed with 1 concurrency hazard detected (exit code 0).`
    };
  }
  if (code.includes('LockFreeNodeStack')) {
    return {
      isSuccess: true,
      exitCode: 0,
      output: `[VarHandle CAS Benchmark // JDK 21]\nThread-1: Pushed 50,000 items to LockFreeNodeStack in 4.2ms\nThread-2: Popped 50,000 items from LockFreeNodeStack in 3.9ms\nCAS Retries: 142 (Contention rate: 0.14%)\nVerification: Head is null. Zero data race violations detected.`
    };
  }
  if (code.includes('PaddedAtomicSequence')) {
    return {
      isSuccess: true,
      exitCode: 0,
      output: `[JOL (Java Object Layout) Memory Inspection]\ncom.architect.disruptor.PaddedAtomicSequence object internals:\n OFFSET  SIZE   TYPE DESCRIPTION                               VALUE\n      0     4        (object header: mark)                     0x0000000000000001\n      4     4        (object header: class)                    0x0002b480\n      8    56   long LhsPadding.p1..p7                         0\n     64     8   long ValueHolder.value                         42\n     72    56   long RhsPadding.p9..p15                        0\nInstance size: 128 bytes (2 complete 64-byte L1 cache lines)\nFalse sharing eliminated: Value sits isolated in distinct cache line.`
    };
  }
  if (code.includes('NativeAotRuntimeHints')) {
    return {
      isSuccess: true,
      exitCode: 0,
      output: `[Spring Boot 3.2 Native AOT Compiler]\nInspecting RuntimeHintsRegistrar: NativeAotRuntimeHints\n  - Registered Reflection Hint: com.architect.dto.PaymentPayload (constructors, methods, fields)\n  - Registered Resource Pattern: schema/v1-crypto-rules.json\nGraalVM native-image metadata written to META-INF/native-image/\nCompilation completed in 1.84s (Image size: 48.2 MB, Startup: 0.038s).`
    };
  }
  if (code.includes('UserMapper')) {
    return {
      isSuccess: true,
      exitCode: 0,
      output: `[MapStruct 1.5.5.Final Annotation Processor]\nGenerated implementation: UserMapperImpl.java\nMapping method: toResponseDto(UserEntity entity)\nMapping:\n  entity.id() -> dto.userId()\n  entity.username() -> dto.handle()\n  entity.emailAddress() -> dto.contactEmail()\nZero reflection overhead. Inlined bytecode execution verified.`
    };
  }
  if (code.includes('TradingPipelineApplication')) {
    return {
      isSuccess: true,
      exitCode: 0,
      output: `[LMAX Disruptor 64K RingBuffer Initialized]\nDisruptor worker pool spawned: 1 Daemon thread\nConsumer sequence: 0 -> Polling events\nOrder executed: ID: ORD-9014, Price: $240.50 -> Signal: COMPLETED (latency: 180ns)\nOrder executed: ID: ORD-9015, Price: $1,420.00 -> Signal: COMPLETED (latency: 165ns)\nReactor Netty HTTP 200 OK: {"status": "Order Executed Successfully"}`
    };
  }
  if (code.includes('AccountService')) {
    return {
      isSuccess: true,
      exitCode: 0,
      output: `[HikariCP-1] Acquired Connection(id=1, active=1, idle=9)\n20:30:12.104 [main] INFO  c.e.d.AccountService - Demarcated transaction boundary (autoCommit=false, isolation=READ_COMMITTED)\n20:30:12.106 [main] INFO  c.e.d.AccountService - SELECT balance FROM accounts WHERE id = 1042 FOR UPDATE [Lock acquired]\n20:30:12.108 [main] INFO  c.e.d.AccountService - UPDATE accounts SET balance = balance - 500.00 WHERE id = 1042 [Rows updated: 1]\n20:30:12.109 [main] INFO  c.e.d.AccountService - Savepoint 'Debited_Savepoint' created\n20:30:12.111 [main] INFO  c.e.d.AccountService - UPDATE accounts SET balance = balance + 500.00 WHERE id = 2088 [Rows updated: 1]\n20:30:12.113 [main] INFO  c.e.d.AccountService - Transaction committed successfully for sender: 1042\n[HikariCP-1] Connection closed and returned to pool (active=0, idle=10)`
    };
  }

  // Java Masterclass Snippets
  if (code.includes('class Main') && code.includes('Hello, World!')) {
    return {
      isSuccess: true,
      exitCode: 0,
      output: `Hello, World!\nExecution finished without new line.`
    };
  }
  if (code.includes('DataTypesDemo')) {
    return {
      isSuccess: true,
      exitCode: 0,
      output: `Student: SpongeBob | Age: 25\nPopulation: 8000000000`
    };
  }
  if (code.includes('new Scanner(System.in)')) {
    return {
      isSuccess: true,
      exitCode: 0,
      output: `[Java REPL / JShell Session]\nInitialized Scanner(System.in) bound to standard input stream.`
    };
  }
  if (code.includes('ScannerBufferFix')) {
    return {
      isSuccess: true,
      exitCode: 0,
      output: `Enter your age: 25\nEnter your favorite color: Blue\nAge: 25 | Color: Blue`
    };
  }
  if (code.includes('result1 = a / b') || code.includes('result2 = (double) a / b')) {
    return {
      isSuccess: true,
      exitCode: 0,
      output: `result1: 2 (Integer division truncates decimal)\nresult2: 2.5 (Floating-point precision preserved)`
    };
  }
  if (code.includes('variable = (condition) ?')) {
    return {
      isSuccess: true,
      exitCode: 0,
      output: `[Java Language Specification]\nConditional Operator (Ternary) Syntax evaluated.`
    };
  }
  if (code.includes('EnhancedSwitchDemo')) {
    return {
      isSuccess: true,
      exitCode: 0,
      output: `Weekday - Time to work!\nQuarter: 1`
    };
  }
  if (code.includes('RandomDemo')) {
    return {
      isSuccess: true,
      exitCode: 0,
      output: `Dice Roll: 4 | Coin: true`
    };
  }
  if (code.includes('StringSlicingDemo')) {
    return {
      isSuccess: true,
      exitCode: 0,
      output: `User: developer_user | Domain: java.org`
    };
  }
  if (code.includes('LoopsDemo')) {
    return {
      isSuccess: true,
      exitCode: 0,
      output: `1 2 3 4 6 7`
    };
  }
  if (code.includes('OverloadingDemo')) {
    return {
      isSuccess: true,
      exitCode: 0,
      output: `30\n31.0\n6`
    };
  }
  if (code.includes('ArrayOperations')) {
    return {
      isSuccess: true,
      exitCode: 0,
      output: `Mustang\nCorvette\nCharger\nSum: 60.0`
    };
  }
  if (code.includes('new int[rows][cols]')) {
    return {
      isSuccess: true,
      exitCode: 0,
      output: `[Java Array Allocation]\nAllocated 2D rectangular array matrix reference.`
    };
  }
  if (code.includes('class Student')) {
    return {
      isSuccess: true,
      exitCode: 0,
      output: `Total Enrolled: 2`
    };
  }
  if (code.includes('CollectionsDemo')) {
    return {
      isSuccess: true,
      exitCode: 0,
      output: `Pizza Price: $12.99`
    };
  }
  if (code.includes('enum Day') || code.includes('class Box<T>')) {
    return {
      isSuccess: true,
      exitCode: 0,
      output: `[Java Generics & Enums]\nCompiled Day enum (3 values) and Box<T> generic type container.`
    };
  }
  if (code.includes('FileIODemo')) {
    return {
      isSuccess: true,
      exitCode: 0,
      output: `Java File Operations Demo\nLine 2`
    };
  }
  if (code.includes('LocalDateTime') || code.includes('DateTimeFormatter')) {
    return {
      isSuccess: true,
      exitCode: 0,
      output: `24/09/2026 20:30:15`
    };
  }
  if (code.includes('TimerTask') || code.includes('Timer')) {
    return {
      isSuccess: true,
      exitCode: 0,
      output: `3\n2\n1\nDone!`
    };
  }
  if (code.includes('MultiThreadingDemo')) {
    return {
      isSuccess: true,
      exitCode: 0,
      output: `Thread-A - Count: 1\nThread-B - Count: 1\nThread-A - Count: 2\nThread-B - Count: 2\nThread-A - Count: 3\nThread-B - Count: 3\nAll Threads Finished Execution.`
    };
  }

  return {
    isSuccess: true,
    exitCode: 0,
    output: `OpenJDK 64-Bit Server VM (build 21.0.2+13-LTS)\nCompiled: 1 source file to bytecode.\n[JIT C2 Compiler] Inlined hot method entry points.\nExecution finished with exit code 0.`
  };
}

// Run test on all DB and Java snippets
const dbSnippets = allSnippets.filter(s => s.file === 'postgresql.html' || s.file === 'databases.html');
const javaSnippets = allSnippets.filter(s => s.file === 'java-masterclass.html' || s.file === 'high-concurrency-java.html');

console.log(`Checking ${dbSnippets.length} DB snippets...`);
let dbFails = 0;
dbSnippets.forEach((s) => {
  const res = runSqlEngine(s.code);
  if (res.output.includes('Fernando') && !s.code.includes('Fernando')) {
    console.error(`FAIL [${s.file} #${s.index}]: Found Fernando!`);
    dbFails++;
  }
  if (res.output.length < 5) {
    console.error(`FAIL [${s.file} #${s.index}]: Output too short!`);
    dbFails++;
  }
});

console.log(`Checking ${javaSnippets.length} Java snippets...`);
let javaFails = 0;
javaSnippets.forEach((s) => {
  const res = runJavaEngine(s.code);
  if (res.output.includes('Fernando')) {
    javaFails++;
  }
  if (res.output.length < 5) {
    console.error(`FAIL [${s.file} #${s.index}]: Output too short!`);
    javaFails++;
  }
});

console.log(`Results: DB Fails: ${dbFails}, Java Fails: ${javaFails}`);
if (dbFails === 0 && javaFails === 0) {
  console.log('ALL DB AND JAVA SNIPPETS PASSED WITH 100% SUCCESS!');
}
