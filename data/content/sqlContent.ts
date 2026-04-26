import type { TechContent } from './types';

export const sqlContent: TechContent = {
  techId: 'sql',
  readTime: '28–32 min',
  difficulty: 'Beginner to Advanced',
  lastUpdated: '2026',

  // ── OPENING HOOK ─────────────────────────────────────────────────
  openingHook:
    "Every software job — frontend, backend, full-stack, data analyst, data engineer, DevOps — has one skill in common: SQL. Not because every role writes SQL daily, but because every role eventually touches a database, and the language of databases is SQL. In India, SQL is explicitly listed in over 80% of software job descriptions across all categories. It is the one technical skill that data analysts, Java developers, Python engineers, and product managers are all expected to know. A fresher who walks into a FAANG or MAANG interview without SQL knowledge walks back out. A data analyst who cannot write a GROUP BY query does not survive the first week. A backend developer who cannot write a JOIN query cannot debug the API they just built. SQL is not glamorous. It does not have YouTube tutorials with millions of views. But it is the single most universally required technical skill in the software industry — and it is also one of the fastest skills to learn. This SQL tutorial for beginners will take you from never having written a query to confidently handling the SQL questions that appear in every technical interview and every real-world backend role.",

  // ── SECTION 1: INTRODUCTION ──────────────────────────────────────
  introText: [
    "SQL (Structured Query Language) is a domain-specific language designed for managing and querying data stored in Relational Database Management Systems (RDBMS). It was developed at IBM by Donald D. Chamberlin and Raymond F. Boyce in the early 1970s, standardized as ANSI SQL in 1986, and has been the universal language of databases ever since. Every major database — MySQL, PostgreSQL, Oracle, Microsoft SQL Server, SQLite — speaks SQL with minor dialect differences.",
    "A relational database stores data in tables — structured rows and columns, like a very powerful spreadsheet. Tables relate to each other through keys. A customers table links to an orders table via a customer_id. SQL is the language you use to create these tables, insert data into them, query and filter data, update records, delete records, and define relationships between tables. It is declarative — you describe what you want, and the database engine figures out how to retrieve it efficiently.",
    "The problem SQL solves is structured data retrieval at scale. An e-commerce platform may have 10 million products, 50 million customers, and 200 million orders. SQL lets you ask precise questions of this data — 'which customers in Bangalore spent more than ₹10,000 in the last 30 days?' — and get answers in milliseconds, because the database query optimizer creates an efficient execution plan automatically. No other tool gives you this combination of expressiveness and performance for structured data.",
  ],

  realWorldUsages: [
    "Every banking application — account balances, transactions, loan records, and KYC data are all stored and queried with SQL",
    "E-commerce platforms — Flipkart, Amazon India, Meesho store products, orders, inventory, and user data in relational databases queried with SQL",
    "Business Intelligence and Reporting — every dashboard at every company pulls data from SQL databases using SQL queries",
    "Healthcare systems — patient records, prescriptions, appointments, and billing stored in SQL databases",
    "HR and Payroll systems — employee records, attendance, salary calculations, and leave management run on SQL",
    "Government databases — Aadhaar, GST, income tax, and voter records are stored in large-scale relational databases",
    "Every mobile app backend — whether the app is built with Java, Python, or Node.js, the data almost always ends up in a SQL database",
  ],

  // ── SECTION 2: WHY LEARN ─────────────────────────────────────────
  whyLearn: {
    demand:
      "SQL is not a trend — it is infrastructure. Stack Overflow's 2025 Developer Survey lists SQL as the most used language/technology for the third year running — above JavaScript, Python, and Java. In India specifically, SQL is explicitly required in over 80% of software engineer job descriptions, 100% of data analyst roles, and virtually every backend developer position. Learning SQL step by step is one of the fastest ways to become more valuable at any tech job, and one of the most reliable ways to clear any technical interview in 2026.",
    jobRoles: [
      { role: "Data Analyst", desc: "Write SQL queries to extract, clean, and analyze data. Answer business questions. Build reports. SQL is 60–70% of the daily job." },
      { role: "Backend Developer", desc: "Write database queries for APIs, optimize slow queries, design database schemas, and write migrations. SQL is used every sprint." },
      { role: "Data Engineer", desc: "Build data pipelines, ETL processes, and warehouse schemas using SQL on platforms like BigQuery, Snowflake, Redshift, and dbt." },
      { role: "Database Administrator (DBA)", desc: "Manage database servers, optimize performance, handle backups, monitor query plans. SQL is the entire job." },
      { role: "Business Intelligence Developer", desc: "Build dashboards and reports using SQL queries. Tools like Tableau, Power BI, Metabase all run SQL behind the scenes." },
      { role: "Full-Stack / Software Engineer", desc: "Every developer writes SQL or ORM code that generates SQL. Understanding SQL means understanding what your ORM is actually doing." },
    ],
    whyCompanies: [
      { reason: "Universal data language", detail: "SQL works across MySQL, PostgreSQL, Oracle, SQL Server. Learning SQL once gives you access to every relational database." },
      { reason: "Irreplaceable for data work", detail: "No other tool matches SQL for ad-hoc data exploration, reporting, and transformation on relational data at scale." },
      { reason: "Performance at scale", detail: "A well-written SQL query with proper indexes outperforms any application-level data filtering loop by orders of magnitude." },
      { reason: "Low learning cost, high value", detail: "SQL has a small core (SELECT, INSERT, UPDATE, DELETE, JOIN, GROUP BY) that covers 90% of real-world use cases. Fast to learn, high ROI." },
    ],
    salaryRange: "₹3 LPA – ₹7 LPA (Data Analyst fresher with strong SQL) | ₹6 LPA – ₹15 LPA (Backend developer with SQL + one backend language)",
    careerNote:
      "SQL is not a career destination — it is a career multiplier. A Python developer who knows SQL becomes a data engineer. A backend developer who knows SQL optimization becomes a senior engineer. A business person who knows SQL becomes a data-literate product manager who commands ₹20+ LPA. SQL knowledge compounds on top of every other skill you have.",
  },

  // ── SECTION 3: HOW IT WORKS ──────────────────────────────────────
  howItWorks: {
    intro:
      "Think of a relational database as an extremely organized filing cabinet. Each drawer is a table. Each folder in the drawer is a row. Each labeled section of the folder is a column. SQL is the instruction language you give to the filing cabinet's robotic assistant — 'Go to the Orders drawer, pull all folders from the last month where the total is above ₹500, and sort them by date.' The assistant (query optimizer) figures out the fastest way to retrieve exactly what you asked for.",
    vdomSteps: [
      { num: "1", title: "Query Parsing", text: "You write a SQL query as text. The database engine parses it — checks syntax, validates that referenced tables and columns exist, and builds an internal parse tree representing the query's structure." },
      { num: "2", title: "Query Optimization", text: "The query optimizer analyzes the parse tree and generates multiple possible execution plans. It estimates the cost of each plan based on table statistics (row counts, index availability, data distribution) and selects the cheapest one." },
      { num: "3", title: "Execution Plan", text: "The chosen plan defines exactly how data is retrieved — which indexes to use, in what order to join tables, whether to scan the full table or use an index lookup. You can see this plan with EXPLAIN (MySQL) or EXPLAIN ANALYZE (PostgreSQL)." },
      { num: "4", title: "Data Retrieval", text: "The database storage engine fetches data from disk pages or buffer cache based on the execution plan. Indexes allow skipping most rows — an indexed lookup on a 10-million-row table can find a record in milliseconds instead of scanning every row." },
      { num: "5", title: "Result Set", text: "The retrieved data is filtered, joined, aggregated, and sorted as specified by your query. The final result set is returned as rows and columns to your application or query client." },
    ],
    componentCode: `-- The same question expressed as SQL tells you everything about how databases work

-- QUESTION: "Which products in the Electronics category have more than 50 orders
--            in the last 30 days, ranked by revenue?"

SELECT
    p.product_name,
    p.price,
    COUNT(oi.order_id)         AS total_orders,
    SUM(oi.quantity * oi.price) AS total_revenue
FROM products p                        -- Start with products table
JOIN order_items oi ON p.id = oi.product_id  -- Join to order_items
JOIN orders o ON oi.order_id = o.id          -- Join to orders
WHERE
    p.category = 'Electronics'          -- Filter by category
    AND o.created_at >= NOW() - INTERVAL 30 DAY  -- Only last 30 days
GROUP BY p.id, p.product_name, p.price  -- Aggregate per product
HAVING COUNT(oi.order_id) > 50          -- Filter AFTER aggregation
ORDER BY total_revenue DESC             -- Highest revenue first
LIMIT 10;                               -- Top 10 only

-- What the database does with this:
-- 1. Parser validates syntax, checks tables/columns exist
-- 2. Optimizer checks: is there an index on orders.created_at? on products.category?
-- 3. Execution: index scan on orders (date filter), join with order_items, join with products
-- 4. Aggregation: GROUP BY computes COUNT and SUM per product
-- 5. HAVING filter applied after aggregation
-- 6. ORDER BY sorts, LIMIT takes first 10
-- 7. Result returned in milliseconds (with proper indexes)`,
    renderCycle: [
      "SQL query text → Parser checks syntax and validates schema objects",
      "Parse tree → Query Optimizer generates and costs execution plans",
      "Cheapest plan selected → Storage Engine fetches data using indexes or table scans",
      "Raw data → Filtered (WHERE), Joined (JOIN), Grouped (GROUP BY), Filtered again (HAVING)",
      "Sorted (ORDER BY), Limited (LIMIT) → Result set returned to client",
    ],
    closingNote:
      "The key insight is that SQL is declarative — you say WHAT you want, not HOW to get it. The database decides how. Understanding this mental model explains why query optimization (indexes, query structure) matters so much: the same question written differently can be answered in 1ms or 30 seconds depending on whether the database can use an index or must scan every row.",
  },

  // ── SECTION 4: CORE CONCEPTS ─────────────────────────────────────
  coreConcepts: [
    {
      id: "ddl-dml",
      number: "4.1",
      title: "DDL & DML — Creating Tables and Managing Data",
      icon: "🏗️",
      color: "blue",
      intro:
        "SQL is divided into sub-languages by purpose. DDL (Data Definition Language) defines structure — CREATE TABLE, ALTER TABLE, DROP TABLE. DML (Data Manipulation Language) manages data — SELECT, INSERT, UPDATE, DELETE. Understanding what each command does and when to use it is the foundation of everything else in SQL.",
      code: `-- ── DDL: DATA DEFINITION LANGUAGE ──────────────────

-- CREATE TABLE with proper data types and constraints
CREATE TABLE users (
    id          INT             AUTO_INCREMENT PRIMARY KEY,
    name        VARCHAR(100)    NOT NULL,
    email       VARCHAR(255)    NOT NULL UNIQUE,
    phone       VARCHAR(15),
    role        ENUM('user','admin','moderator') DEFAULT 'user',
    is_active   BOOLEAN         DEFAULT TRUE,
    created_at  TIMESTAMP       DEFAULT CURRENT_TIMESTAMP,
    updated_at  TIMESTAMP       DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE products (
    id          INT             AUTO_INCREMENT PRIMARY KEY,
    name        VARCHAR(200)    NOT NULL,
    description TEXT,
    price       DECIMAL(10, 2)  NOT NULL CHECK (price >= 0),
    stock       INT             NOT NULL DEFAULT 0 CHECK (stock >= 0),
    category_id INT             NOT NULL,
    seller_id   INT             NOT NULL,
    created_at  TIMESTAMP       DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (category_id) REFERENCES categories(id),
    FOREIGN KEY (seller_id)   REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE orders (
    id          INT             AUTO_INCREMENT PRIMARY KEY,
    user_id     INT             NOT NULL,
    status      ENUM('pending','confirmed','shipped','delivered','cancelled')
                                DEFAULT 'pending',
    total_amount DECIMAL(12, 2) NOT NULL,
    address     TEXT            NOT NULL,
    created_at  TIMESTAMP       DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- ALTER TABLE — modify existing structure
ALTER TABLE users ADD COLUMN last_login TIMESTAMP;
ALTER TABLE users ADD COLUMN profile_image VARCHAR(500);
ALTER TABLE products MODIFY COLUMN price DECIMAL(12, 2) NOT NULL;
ALTER TABLE products ADD COLUMN is_featured BOOLEAN DEFAULT FALSE;
ALTER TABLE orders ADD INDEX idx_user_id (user_id);        -- Add index
ALTER TABLE orders ADD INDEX idx_status_date (status, created_at); -- Composite index

-- DROP TABLE — use carefully
DROP TABLE IF EXISTS temp_calculations;  -- IF EXISTS prevents error if not found

-- TRUNCATE vs DELETE
TRUNCATE TABLE audit_logs;   -- Removes ALL rows, resets AUTO_INCREMENT, faster
DELETE FROM audit_logs;      -- Removes ALL rows, keeps AUTO_INCREMENT, slower, logged

-- ── DML: DATA MANIPULATION LANGUAGE ─────────────────

-- INSERT
INSERT INTO users (name, email, phone, role)
VALUES ('Arjun Sharma', 'arjun@example.com', '+91-9876543210', 'user');

-- INSERT multiple rows at once (much faster than individual inserts)
INSERT INTO products (name, price, stock, category_id, seller_id) VALUES
    ('iPhone 15', 79999.00, 50, 1, 2),
    ('Samsung Galaxy S24', 64999.00, 75, 1, 2),
    ('Sony WH-1000XM5', 24999.00, 100, 2, 3);

-- INSERT ... ON DUPLICATE KEY UPDATE (upsert in MySQL)
INSERT INTO product_views (product_id, view_count, last_viewed)
VALUES (42, 1, NOW())
ON DUPLICATE KEY UPDATE
    view_count = view_count + 1,
    last_viewed = NOW();

-- UPDATE — ALWAYS use WHERE unless you mean to update every row
UPDATE products
SET price = price * 0.90,    -- 10% discount
    is_featured = TRUE
WHERE category_id = 1
  AND stock > 20;

-- UPDATE with JOIN (MySQL syntax)
UPDATE orders o
JOIN users u ON o.user_id = u.id
SET o.status = 'cancelled'
WHERE u.is_active = FALSE
  AND o.status = 'pending';

-- DELETE — ALWAYS use WHERE unless you mean to delete every row
DELETE FROM orders
WHERE status = 'cancelled'
  AND created_at < NOW() - INTERVAL 90 DAY;

-- Safe pattern: SELECT first, then DELETE
-- SELECT * FROM orders WHERE status = 'cancelled' AND created_at < NOW() - INTERVAL 90 DAY;
-- Then: DELETE FROM orders WHERE status = 'cancelled' AND created_at < NOW() - INTERVAL 90 DAY;`,
      usage:
        "DDL commands are what developers and DBAs write when setting up a new feature — creating the users table for a new application, adding a column for a new product field. DML is what your application runs thousands of times per second — every user login (SELECT), every new order (INSERT), every status update (UPDATE). Understanding the difference, and the safety rules (always use WHERE with UPDATE and DELETE), is day-one SQL knowledge.",
      mistake:
        "Running UPDATE or DELETE without a WHERE clause in production. UPDATE products SET price = 0 without a WHERE clause sets every product's price to zero. Always write and verify the WHERE clause first by running it as a SELECT. Many DBAs add SET SQL_SAFE_UPDATES = 1 to prevent WHERE-less updates. Always work in a transaction when running destructive queries manually.",
    },
    {
      id: "select-queries",
      number: "4.2",
      title: "SELECT Queries — Filtering, Sorting & Limiting",
      icon: "🔍",
      color: "primary",
      intro:
        "SELECT is the most used SQL command by an enormous margin. Every data retrieval — from a single user lookup to a complex analytical query — starts with SELECT. Mastering its clauses — WHERE, ORDER BY, LIMIT, DISTINCT, LIKE, IN, BETWEEN, IS NULL — is the foundation of SQL proficiency.",
      code: `-- ── BASIC SELECT ────────────────────────────────────
SELECT * FROM users;                          -- All columns (avoid in production)
SELECT id, name, email FROM users;            -- Specific columns (prefer this)
SELECT DISTINCT category FROM products;       -- Unique values only

-- Column aliases
SELECT
    name                    AS product_name,
    price                   AS unit_price,
    price * 0.18            AS gst_amount,
    price + (price * 0.18)  AS price_with_gst
FROM products;

-- ── WHERE CLAUSE — filtering ─────────────────────────
-- Comparison operators
SELECT * FROM products WHERE price > 10000;
SELECT * FROM products WHERE price BETWEEN 5000 AND 20000;  -- Inclusive
SELECT * FROM products WHERE category_id IN (1, 2, 5);      -- Multiple values
SELECT * FROM products WHERE category_id NOT IN (3, 4);

-- String matching
SELECT * FROM users WHERE name LIKE 'Arj%';     -- Starts with 'Arj'
SELECT * FROM users WHERE email LIKE '%@gmail.com'; -- Ends with @gmail.com
SELECT * FROM products WHERE name LIKE '%laptop%';  -- Contains 'laptop'
-- % = any characters, _ = exactly one character

-- NULL handling — ALWAYS use IS NULL, never = NULL
SELECT * FROM users WHERE phone IS NULL;
SELECT * FROM users WHERE phone IS NOT NULL;
SELECT COALESCE(phone, 'No phone') AS contact FROM users; -- Default for NULL

-- Logical operators
SELECT * FROM products
WHERE category_id = 1
  AND price < 50000
  AND stock > 0;

SELECT * FROM users
WHERE role = 'admin'
   OR (role = 'moderator' AND is_active = TRUE);

-- ── ORDER BY — sorting ────────────────────────────────
SELECT * FROM products ORDER BY price ASC;          -- Low to high
SELECT * FROM products ORDER BY price DESC;         -- High to low
SELECT * FROM products ORDER BY category_id ASC, price DESC; -- Multi-column sort
SELECT * FROM orders ORDER BY created_at DESC;      -- Most recent first

-- ── LIMIT and OFFSET — pagination ────────────────────
SELECT * FROM products ORDER BY created_at DESC LIMIT 20;       -- First 20
SELECT * FROM products ORDER BY created_at DESC LIMIT 20 OFFSET 40; -- Page 3 (items 41–60)

-- ── AGGREGATE FUNCTIONS ───────────────────────────────
SELECT COUNT(*)           AS total_users   FROM users;
SELECT COUNT(phone)       AS users_with_phone FROM users;  -- Excludes NULLs
SELECT COUNT(DISTINCT category_id) AS unique_categories FROM products;

SELECT
    MIN(price)            AS cheapest,
    MAX(price)            AS most_expensive,
    AVG(price)            AS average_price,
    SUM(price * stock)    AS total_inventory_value
FROM products;

-- ── CONDITIONAL EXPRESSIONS ───────────────────────────
SELECT
    name,
    price,
    CASE
        WHEN price < 1000  THEN 'Budget'
        WHEN price < 10000 THEN 'Mid-range'
        WHEN price < 50000 THEN 'Premium'
        ELSE 'Luxury'
    END AS price_category,
    IF(stock > 0, 'In Stock', 'Out of Stock') AS availability
FROM products;

-- ── USEFUL BUILT-IN FUNCTIONS ─────────────────────────
-- String functions
SELECT UPPER(name), LOWER(email), LENGTH(name) FROM users;
SELECT CONCAT(first_name, ' ', last_name) AS full_name FROM users;
SELECT TRIM('  hello  '), LTRIM('  hello'), RTRIM('hello  ');
SELECT SUBSTRING(email, 1, POSITION('@' IN email) - 1) AS username FROM users;

-- Date functions
SELECT NOW(), CURDATE(), CURTIME();
SELECT DATEDIFF(NOW(), created_at) AS days_since_joined FROM users;
SELECT DATE_FORMAT(created_at, '%d %M %Y') AS formatted_date FROM orders;
SELECT YEAR(created_at), MONTH(created_at), DAY(created_at) FROM orders;
SELECT DATE_ADD(NOW(), INTERVAL 30 DAY) AS thirty_days_from_now;

-- Number functions
SELECT ROUND(price, 2), CEIL(price), FLOOR(price) FROM products;
SELECT FORMAT(total_amount, 2) AS formatted_amount FROM orders;`,
      usage:
        "Every data analyst writes SELECT queries dozens of times per day. Every backend API executes SELECT to fetch data. The WHERE clause filters which rows. ORDER BY determines sequence. LIMIT enables pagination. CASE expressions compute derived categories. These are the tools that answer 80% of all real data questions.",
      mistake:
        "Using SELECT * in application code. In production, SELECT * fetches every column even if you need only 2 — wasting network bandwidth, memory, and potentially exposing sensitive columns (passwords, tokens) to application layers that shouldn't see them. Always list the specific columns you need. SELECT * is acceptable for quick exploration in a query tool but never in application code.",
    },
    {
      id: "joins",
      number: "4.3",
      title: "JOINs — Combining Data Across Tables",
      icon: "🔗",
      color: "emerald",
      intro:
        "JOINs are the most powerful and most tested SQL concept. Relational databases split related data across multiple tables — products, orders, users, categories are all separate tables. JOINs combine them into a single result set based on matching values. Understanding INNER JOIN, LEFT JOIN, RIGHT JOIN, and when to use each is what separates SQL beginners from SQL practitioners. JOINs appear in virtually every real-world SQL query and every SQL interview.",
      code: `-- Sample schema for all JOIN examples
-- users(id, name, email, city)
-- orders(id, user_id, total_amount, status, created_at)
-- order_items(id, order_id, product_id, quantity, price)
-- products(id, name, category_id, price, seller_id)
-- categories(id, name, parent_id)

-- ── INNER JOIN — only matching rows from BOTH tables ─
-- Returns users who have at least one order
SELECT
    u.name,
    u.email,
    COUNT(o.id)        AS order_count,
    SUM(o.total_amount) AS total_spent
FROM users u
INNER JOIN orders o ON u.id = o.user_id
GROUP BY u.id, u.name, u.email
ORDER BY total_spent DESC;

-- ── LEFT JOIN — ALL rows from left table + matching from right ──
-- Returns ALL users, even those with no orders (NULL for order columns)
SELECT
    u.name,
    u.email,
    COUNT(o.id)         AS order_count,
    COALESCE(SUM(o.total_amount), 0) AS total_spent
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
GROUP BY u.id, u.name, u.email
ORDER BY total_spent DESC;

-- Find users who have NEVER placed an order
SELECT u.name, u.email, u.created_at
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
WHERE o.id IS NULL;    -- No matching order = new/inactive user

-- ── RIGHT JOIN — ALL rows from right table + matching from left ──
-- Less common — usually rewritten as LEFT JOIN with tables swapped
-- "All orders, even if user was deleted"
SELECT o.id, o.total_amount, u.name AS customer_name
FROM users u
RIGHT JOIN orders o ON u.id = o.user_id;

-- ── MULTIPLE JOINS — chain as many as needed ──────────
-- Full order detail: user + order + items + product + category
SELECT
    u.name                          AS customer,
    o.id                            AS order_id,
    o.status,
    o.created_at                    AS order_date,
    p.name                          AS product_name,
    c.name                          AS category,
    oi.quantity,
    oi.price                        AS unit_price,
    oi.quantity * oi.price          AS line_total
FROM orders o
JOIN users u        ON o.user_id     = u.id
JOIN order_items oi ON oi.order_id   = o.id
JOIN products p     ON oi.product_id = p.id
JOIN categories c   ON p.category_id = c.id
WHERE o.status = 'delivered'
  AND o.created_at >= '2025-01-01'
ORDER BY o.id, oi.id;

-- ── SELF JOIN — a table joined to itself ──────────────
-- Find all employees and their manager's name
-- employees(id, name, manager_id) where manager_id references id
SELECT
    e.name  AS employee,
    m.name  AS manager
FROM employees e
LEFT JOIN employees m ON e.manager_id = m.id
ORDER BY m.name, e.name;

-- ── CROSS JOIN — cartesian product (every combination) ─
-- Generate all possible combinations of sizes and colors
SELECT s.size_name, c.color_name
FROM sizes s
CROSS JOIN colors c
ORDER BY s.id, c.id;
-- If sizes has 3 rows and colors has 4 rows: 12 result rows

-- ── PRACTICAL JOIN PATTERNS ───────────────────────────

-- Products with their category name (most common JOIN pattern)
SELECT p.name, p.price, c.name AS category
FROM products p
JOIN categories c ON p.category_id = c.id
WHERE p.price < 10000
ORDER BY c.name, p.price;

-- Orders with item count and total (aggregate + join)
SELECT
    o.id,
    u.name          AS customer,
    o.status,
    COUNT(oi.id)    AS item_count,
    SUM(oi.quantity * oi.price) AS order_total
FROM orders o
JOIN users u        ON o.user_id   = u.id
JOIN order_items oi ON o.id        = oi.order_id
GROUP BY o.id, u.name, o.status
HAVING COUNT(oi.id) > 2    -- Orders with more than 2 items
ORDER BY order_total DESC;`,
      usage:
        "Every real application's data spans multiple tables. A product catalog needs products AND categories. An order history needs orders AND users AND products. There is almost no meaningful real-world query that doesn't use a JOIN. In data analyst interviews, 70% of practical questions involve JOINs. In backend development, every list API with related data uses JOINs in the underlying query.",
      mistake:
        "Using INNER JOIN when you need LEFT JOIN and wondering why some records are missing. INNER JOIN excludes rows that don't have a match in both tables. If you're looking at all users and their orders (including users with no orders), LEFT JOIN is correct. A very common bug: 'I can only see 800 of my 1000 users' — often caused by an accidental INNER JOIN filtering out users with no associated records.",
    },
    {
      id: "group-by-having",
      number: "4.4",
      title: "GROUP BY & HAVING — Aggregation and Filtering Groups",
      icon: "📊",
      color: "orange",
      intro:
        "GROUP BY collapses multiple rows into summary rows — turning individual order records into 'orders per customer' or individual sale records into 'revenue per month'. HAVING then filters those summary groups — the equivalent of WHERE but applied after aggregation. These two clauses are the backbone of every analytical SQL query, every business report, and some of the most common interview questions.",
      code: `-- ── GROUP BY FUNDAMENTALS ─────────────────────────────

-- Count orders per status
SELECT status, COUNT(*) AS order_count
FROM orders
GROUP BY status;
-- Result: pending|12, confirmed|45, shipped|30, delivered|892, cancelled|21

-- Revenue and order count per user
SELECT
    user_id,
    COUNT(*)            AS total_orders,
    SUM(total_amount)   AS total_revenue,
    AVG(total_amount)   AS avg_order_value,
    MIN(total_amount)   AS smallest_order,
    MAX(total_amount)   AS largest_order,
    MAX(created_at)     AS last_order_date
FROM orders
WHERE status != 'cancelled'
GROUP BY user_id
ORDER BY total_revenue DESC
LIMIT 10;

-- Monthly sales trend
SELECT
    YEAR(created_at)    AS year,
    MONTH(created_at)   AS month,
    DATE_FORMAT(created_at, '%Y-%m') AS month_label,
    COUNT(*)            AS order_count,
    SUM(total_amount)   AS monthly_revenue
FROM orders
WHERE status = 'delivered'
GROUP BY YEAR(created_at), MONTH(created_at)
ORDER BY year ASC, month ASC;

-- Products sold per category
SELECT
    c.name                          AS category,
    COUNT(DISTINCT p.id)            AS product_count,
    SUM(oi.quantity)                AS units_sold,
    SUM(oi.quantity * oi.price)     AS category_revenue
FROM categories c
JOIN products p     ON p.category_id  = c.id
JOIN order_items oi ON oi.product_id  = p.id
JOIN orders o       ON oi.order_id    = o.id
WHERE o.status = 'delivered'
GROUP BY c.id, c.name
ORDER BY category_revenue DESC;

-- ── WHERE vs HAVING — critical distinction ─────────────
-- WHERE filters rows BEFORE grouping
-- HAVING filters groups AFTER aggregation

-- Users who have spent more than ₹50,000 total (HAVING on aggregate)
SELECT
    u.name,
    u.email,
    COUNT(o.id)         AS orders,
    SUM(o.total_amount) AS total_spent
FROM users u
JOIN orders o ON u.id = o.user_id
WHERE o.status != 'cancelled'      -- WHERE: filter rows before grouping
GROUP BY u.id, u.name, u.email
HAVING SUM(o.total_amount) > 50000  -- HAVING: filter after aggregation
ORDER BY total_spent DESC;

-- Products ordered more than 100 times in the last quarter
SELECT
    p.name,
    p.price,
    COUNT(oi.id)     AS times_ordered,
    SUM(oi.quantity) AS total_units
FROM products p
JOIN order_items oi ON p.id = oi.product_id
JOIN orders o       ON oi.order_id = o.id
WHERE o.created_at >= DATE_SUB(NOW(), INTERVAL 3 MONTH)  -- WHERE: date filter
  AND o.status = 'delivered'
GROUP BY p.id, p.name, p.price
HAVING COUNT(oi.id) > 100           -- HAVING: only popular products
ORDER BY times_ordered DESC;

-- ── ROLLUP — subtotals and grand totals ──────────────
SELECT
    COALESCE(category, 'ALL CATEGORIES') AS category,
    COALESCE(status, 'ALL STATUSES')     AS status,
    COUNT(*)                              AS count,
    SUM(total_amount)                     AS revenue
FROM orders o
JOIN products p     ON p.id = o.product_id   -- Simplified for example
JOIN categories c   ON c.id = p.category_id
GROUP BY category, status WITH ROLLUP;

-- ── GROUPING SETS — multiple groupings in one query ──
-- (Standard SQL — supported in PostgreSQL, not MySQL 5.x)
SELECT department, job_title, AVG(salary) AS avg_salary
FROM employees
GROUP BY GROUPING SETS (
    (department, job_title),  -- By dept + title
    (department),             -- By dept only
    ()                        -- Grand average
);`,
      usage:
        "GROUP BY is how you answer every 'how many', 'how much', and 'which category' question. Sales reports, user analytics, inventory summaries, monthly trends — all GROUP BY. In data analyst interviews, almost every practical SQL problem involves GROUP BY and HAVING. The WHERE vs HAVING distinction is one of the most common interview questions at every level.",
      mistake:
        "Filtering on an aggregated value using WHERE instead of HAVING. WHERE runs before grouping — it can't see the result of COUNT() or SUM(). Writing WHERE COUNT(*) > 5 causes a SQL error. Aggregation filter must go in HAVING. The mental model: WHERE filters the raw rows, GROUP BY groups them, HAVING filters the groups.",
    },
    {
      id: "subqueries-ctes",
      number: "4.5",
      title: "Subqueries & CTEs — Reusable Query Logic",
      icon: "🔄",
      color: "purple",
      intro:
        "Subqueries are queries nested inside other queries. CTEs (Common Table Expressions) are named temporary result sets defined with the WITH keyword. Both let you break complex queries into manageable pieces. CTEs are particularly powerful — they make complex multi-step queries readable, reusable within the query, and in PostgreSQL they can even be recursive for hierarchical data like organization charts.",
      code: `-- ── SUBQUERIES ───────────────────────────────────────

-- Scalar subquery — returns a single value
SELECT name, price,
    price - (SELECT AVG(price) FROM products) AS diff_from_avg
FROM products
ORDER BY diff_from_avg DESC;

-- Subquery in WHERE — find customers who ordered a specific product
SELECT DISTINCT u.name, u.email
FROM users u
WHERE u.id IN (
    SELECT o.user_id
    FROM orders o
    JOIN order_items oi ON o.id = oi.order_id
    WHERE oi.product_id = 42
      AND o.status = 'delivered'
);

-- Correlated subquery — references outer query (runs once per row)
-- Find products priced above their category's average
SELECT p.name, p.price, p.category_id
FROM products p
WHERE p.price > (
    SELECT AVG(p2.price)
    FROM products p2
    WHERE p2.category_id = p.category_id  -- References outer p.category_id
)
ORDER BY p.category_id, p.price DESC;

-- EXISTS — check existence (often faster than IN for large sets)
-- Users who have placed at least one order
SELECT u.name, u.email
FROM users u
WHERE EXISTS (
    SELECT 1 FROM orders o WHERE o.user_id = u.id
);

-- NOT EXISTS — users who have never ordered
SELECT u.name, u.email, u.created_at
FROM users u
WHERE NOT EXISTS (
    SELECT 1 FROM orders o WHERE o.user_id = u.id
);

-- Subquery in FROM (derived table / inline view)
SELECT dept_summary.department, dept_summary.avg_salary
FROM (
    SELECT department, AVG(salary) AS avg_salary
    FROM employees
    GROUP BY department
) AS dept_summary
WHERE dept_summary.avg_salary > 70000;

-- ── CTEs (Common Table Expressions) ──────────────────

-- Basic CTE — named, readable, reusable within the query
WITH monthly_revenue AS (
    SELECT
        DATE_FORMAT(created_at, '%Y-%m')  AS month,
        SUM(total_amount)                  AS revenue,
        COUNT(*)                           AS order_count
    FROM orders
    WHERE status = 'delivered'
    GROUP BY DATE_FORMAT(created_at, '%Y-%m')
),
revenue_with_growth AS (
    SELECT
        month,
        revenue,
        order_count,
        LAG(revenue) OVER (ORDER BY month) AS prev_month_revenue
    FROM monthly_revenue
)
SELECT
    month,
    revenue,
    prev_month_revenue,
    ROUND((revenue - prev_month_revenue) / prev_month_revenue * 100, 2) AS growth_pct
FROM revenue_with_growth
ORDER BY month;

-- Multiple CTEs — chain them for complex analysis
WITH active_users AS (
    SELECT id, name, email
    FROM users
    WHERE is_active = TRUE
      AND created_at >= DATE_SUB(NOW(), INTERVAL 6 MONTH)
),
user_orders AS (
    SELECT o.user_id, COUNT(*) AS order_count, SUM(o.total_amount) AS total_spent
    FROM orders o
    WHERE o.status = 'delivered'
    GROUP BY o.user_id
),
user_segments AS (
    SELECT
        au.id, au.name, au.email,
        COALESCE(uo.order_count, 0)   AS orders,
        COALESCE(uo.total_spent, 0)   AS spent,
        CASE
            WHEN COALESCE(uo.total_spent, 0) >= 100000 THEN 'VIP'
            WHEN COALESCE(uo.total_spent, 0) >= 25000  THEN 'Regular'
            WHEN COALESCE(uo.order_count, 0) = 0       THEN 'Never Ordered'
            ELSE 'Occasional'
        END AS segment
    FROM active_users au
    LEFT JOIN user_orders uo ON au.id = uo.user_id
)
SELECT segment, COUNT(*) AS user_count, AVG(spent) AS avg_spent
FROM user_segments
GROUP BY segment
ORDER BY avg_spent DESC;

-- ── RECURSIVE CTE — for hierarchical data ────────────
-- Manager hierarchy — find all reports under a given manager
WITH RECURSIVE org_hierarchy AS (
    -- Base case: the starting manager
    SELECT id, name, manager_id, 0 AS depth
    FROM employees
    WHERE id = 5  -- Starting manager ID

    UNION ALL

    -- Recursive case: find direct reports
    SELECT e.id, e.name, e.manager_id, oh.depth + 1
    FROM employees e
    INNER JOIN org_hierarchy oh ON e.manager_id = oh.id
)
SELECT id, CONCAT(REPEAT('  ', depth), name) AS indented_name, depth
FROM org_hierarchy
ORDER BY depth, name;`,
      usage:
        "Subqueries and CTEs are what separate SQL beginners from SQL practitioners. Real-world analytical queries — user segmentation, cohort analysis, funnel analysis, revenue attribution — require breaking the problem into steps. CTEs make that natural. The WITH clause is arguably the most important SQL feature for analytical work. Recursive CTEs are the standard way to query hierarchical data (org charts, product categories, threaded comments).",
      mistake:
        "Overusing correlated subqueries for large datasets. A correlated subquery that references the outer query runs once per row of the outer query — O(N) subquery executions. On a table with 1 million rows, that's 1 million subquery executions. Usually rewritable as a JOIN (O(N) total, optimized by the query engine) or a CTE. Always check the query execution plan if a query feels slow.",
    },
    {
      id: "window-functions",
      number: "4.6",
      title: "Window Functions — Analytics Without Losing Rows",
      icon: "📈",
      color: "yellow",
      intro:
        "Window functions perform calculations across a set of related rows without collapsing them into a single summary row (unlike GROUP BY). They 'window' over rows — computing running totals, rankings, moving averages, and comparisons to previous rows — while keeping all original rows in the result. Window functions are the most powerful SQL feature for analytics and increasingly common in senior SQL interviews.",
      code: `-- ── RANKING FUNCTIONS ────────────────────────────────

-- ROW_NUMBER — unique sequential number per partition
-- Rank products by price within each category
SELECT
    p.name,
    c.name              AS category,
    p.price,
    ROW_NUMBER() OVER (
        PARTITION BY p.category_id
        ORDER BY p.price DESC
    ) AS price_rank_in_category
FROM products p
JOIN categories c ON p.category_id = c.id;

-- RANK vs DENSE_RANK (handle ties differently)
SELECT
    name, score,
    RANK()       OVER (ORDER BY score DESC) AS rank_with_gaps,    -- 1,2,2,4 (skips 3)
    DENSE_RANK() OVER (ORDER BY score DESC) AS rank_no_gaps,      -- 1,2,2,3
    ROW_NUMBER() OVER (ORDER BY score DESC) AS row_num            -- 1,2,3,4 (always unique)
FROM leaderboard;

-- Top 3 most expensive products per category
WITH ranked_products AS (
    SELECT
        p.name, c.name AS category, p.price,
        ROW_NUMBER() OVER (
            PARTITION BY p.category_id
            ORDER BY p.price DESC
        ) AS price_rank
    FROM products p
    JOIN categories c ON p.category_id = c.id
)
SELECT name, category, price
FROM ranked_products
WHERE price_rank <= 3;  -- Can't use window function directly in WHERE

-- ── AGGREGATE WINDOW FUNCTIONS ────────────────────────

-- Running total of revenue by month
SELECT
    DATE_FORMAT(created_at, '%Y-%m')     AS month,
    SUM(total_amount)                     AS monthly_revenue,
    SUM(SUM(total_amount)) OVER (
        ORDER BY DATE_FORMAT(created_at, '%Y-%m')
        ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
    )                                     AS cumulative_revenue
FROM orders
WHERE status = 'delivered'
GROUP BY DATE_FORMAT(created_at, '%Y-%m');

-- Each order's percentage of the user's total spend
SELECT
    o.id,
    u.name,
    o.total_amount,
    SUM(o.total_amount) OVER (PARTITION BY o.user_id) AS user_total,
    ROUND(
        o.total_amount /
        SUM(o.total_amount) OVER (PARTITION BY o.user_id) * 100, 2
    ) AS pct_of_user_total
FROM orders o
JOIN users u ON o.user_id = u.id
WHERE o.status = 'delivered';

-- 3-month moving average of revenue
SELECT
    month,
    revenue,
    ROUND(AVG(revenue) OVER (
        ORDER BY month
        ROWS BETWEEN 2 PRECEDING AND CURRENT ROW
    ), 2) AS three_month_avg
FROM monthly_revenue;  -- Assuming a CTE or derived table

-- ── LAG AND LEAD — compare to adjacent rows ───────────

-- Month-over-month revenue growth
SELECT
    month,
    revenue,
    LAG(revenue, 1)  OVER (ORDER BY month) AS prev_month,
    LEAD(revenue, 1) OVER (ORDER BY month) AS next_month,
    ROUND(
        (revenue - LAG(revenue) OVER (ORDER BY month))
        / LAG(revenue) OVER (ORDER BY month) * 100, 2
    ) AS mom_growth_pct
FROM monthly_revenue;

-- Find sessions where user was inactive for more than 30 minutes
SELECT
    user_id,
    event_time,
    LAG(event_time) OVER (PARTITION BY user_id ORDER BY event_time) AS prev_event,
    TIMESTAMPDIFF(MINUTE,
        LAG(event_time) OVER (PARTITION BY user_id ORDER BY event_time),
        event_time
    ) AS minutes_since_last_event
FROM user_events
HAVING minutes_since_last_event > 30 OR minutes_since_last_event IS NULL;

-- ── NTILE — distribute rows into buckets ─────────────
-- Divide customers into 4 quartiles by total spend
SELECT
    u.name,
    total_spent,
    NTILE(4) OVER (ORDER BY total_spent) AS spend_quartile
FROM users u
JOIN (
    SELECT user_id, SUM(total_amount) AS total_spent
    FROM orders WHERE status = 'delivered'
    GROUP BY user_id
) order_totals ON u.id = order_totals.user_id;
-- Quartile 1 = lowest spenders, Quartile 4 = highest spenders`,
      usage:
        "Window functions are the tool that makes SQL competitive with Python pandas for analytical work. Ranking top products per category, computing running totals for dashboards, calculating month-over-month growth, customer lifetime value analysis, retention cohorts — all window functions. They are the signature of advanced SQL knowledge and appear in senior data analyst and data engineer interviews consistently.",
      mistake:
        "Trying to filter on a window function directly in a WHERE clause. WHERE is evaluated before window functions are computed, so WHERE rank = 1 causes an error. Wrap the window function in a CTE or subquery, then filter in the outer query: WITH ranked AS (...) SELECT * FROM ranked WHERE rank = 1. This is the standard pattern for 'top N per group' problems.",
    },
    {
      id: "indexes-performance",
      number: "4.7",
      title: "Indexes & Query Performance — Making Queries Fast",
      icon: "⚡",
      color: "red",
      intro:
        "An index is a data structure that allows the database to find rows without scanning the entire table. Without indexes, every query scans every row — a table with 10 million rows takes seconds. With the right index, the same query takes milliseconds. Understanding indexes is what separates developers who write SQL from developers who write efficient SQL. This is the most impactful performance skill in any backend role.",
      code: `-- ── TYPES OF INDEXES ─────────────────────────────────

-- Single column index — speeds up filtering and sorting on one column
CREATE INDEX idx_orders_user_id ON orders (user_id);
CREATE INDEX idx_orders_status  ON orders (status);
CREATE INDEX idx_orders_created ON orders (created_at);

-- Composite index — covers multiple columns in WHERE/ORDER BY
-- Column ORDER matters: leftmost columns must be used for index to apply
CREATE INDEX idx_orders_status_date ON orders (status, created_at);
-- Speeds up: WHERE status = 'delivered' ORDER BY created_at DESC
-- Also speeds up: WHERE status = 'delivered' (leftmost prefix)
-- Does NOT speed up: WHERE created_at > '2025-01-01' (skips status)

-- Unique index — enforces uniqueness AND speeds up lookups
CREATE UNIQUE INDEX idx_users_email ON users (email);

-- Full-text index — for text search
CREATE FULLTEXT INDEX idx_products_search ON products (name, description);
-- Usage: SELECT * FROM products WHERE MATCH(name, description) AGAINST('laptop gaming' IN BOOLEAN MODE);

-- Covering index — index contains all columns the query needs (no table lookup)
CREATE INDEX idx_orders_covering ON orders (user_id, status, total_amount, created_at);
-- SELECT status, total_amount, created_at FROM orders WHERE user_id = 42
-- This query is answered entirely from the index — no table access needed (very fast)

-- ── EXPLAIN — understand what the database is doing ──

-- EXPLAIN shows the execution plan (MySQL)
EXPLAIN SELECT * FROM orders WHERE user_id = 42 AND status = 'delivered';
-- Look for:
-- type: 'ALL' = full table scan (bad), 'ref'/'range' = index used (good), 'const' = perfect
-- key: which index was used (NULL = no index)
-- rows: estimated rows examined (lower is better)
-- Extra: 'Using index' = covering index, 'Using filesort' = needs optimization

-- EXPLAIN ANALYZE (PostgreSQL / MySQL 8.0.18+) — actually runs the query, shows real stats
EXPLAIN ANALYZE
SELECT u.name, COUNT(o.id) AS orders, SUM(o.total_amount) AS total
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
WHERE o.created_at >= '2025-01-01'
GROUP BY u.id, u.name;

-- ── QUERY OPTIMIZATION TECHNIQUES ────────────────────

-- ✅ Use index columns in WHERE clause
SELECT * FROM orders WHERE user_id = 42;     -- Uses idx_orders_user_id
SELECT * FROM orders WHERE status = 'pending'; -- Uses idx_orders_status

-- ❌ Functions on indexed columns disable the index
SELECT * FROM orders WHERE YEAR(created_at) = 2025;  -- Full table scan!
-- ✅ Use range instead
SELECT * FROM orders WHERE created_at >= '2025-01-01' AND created_at < '2026-01-01';

-- ❌ Leading wildcard disables index
SELECT * FROM users WHERE email LIKE '%@gmail.com';  -- Full table scan!
-- ✅ Trailing wildcard uses index
SELECT * FROM users WHERE name LIKE 'Arj%';  -- Uses index (if exists)

-- ❌ OR on different columns often causes full scan
SELECT * FROM users WHERE email = 'x@y.com' OR phone = '9876543210'; -- Slow
-- ✅ Use UNION instead
SELECT * FROM users WHERE email = 'x@y.com'
UNION
SELECT * FROM users WHERE phone = '9876543210';

-- ❌ SELECT * when you need 2 columns
SELECT * FROM orders WHERE user_id = 42;
-- ✅ Select only what you need
SELECT id, status, total_amount FROM orders WHERE user_id = 42;

-- ✅ Avoid N+1: fetch all needed data in ONE query with JOIN
-- Bad: fetch 100 orders, then for each fetch the user (101 queries total)
-- Good: one query with JOIN fetches orders AND user data together

-- ── INDEX MAINTENANCE ─────────────────────────────────
-- Drop unused indexes (they slow down INSERT/UPDATE/DELETE)
DROP INDEX idx_old_unused ON orders;

-- Show all indexes on a table
SHOW INDEX FROM orders;

-- Analyze table statistics (helps optimizer make better plans)
ANALYZE TABLE orders;

-- Check for slow queries
SHOW VARIABLES LIKE 'slow_query_log';     -- Is slow query logging enabled?
SET GLOBAL slow_query_log = 'ON';
SET GLOBAL long_query_time = 1;           -- Log queries taking > 1 second
-- Then review: SHOW VARIABLES LIKE 'slow_query_log_file';`,
      usage:
        "Every backend developer faces slow queries eventually. An e-commerce site with a product search that takes 8 seconds needs indexes. A dashboard that times out loading monthly revenue needs query optimization. The ability to run EXPLAIN, read the output, and know which index to add is a genuine skill gap that separates junior and senior backend developers. This knowledge is also heavily tested in system design interviews.",
      mistake:
        "Adding indexes on every column 'just in case'. Indexes speed up reads (SELECT) but slow down writes (INSERT, UPDATE, DELETE) because every write must update all relevant indexes. A table with 15 indexes has 15 data structures to update on every insert. Indexes should be added for specific, known query patterns — not preemptively on every column. Use EXPLAIN to identify which queries need indexes, then add targeted ones.",
    },
  ],

  // ── SECTION 5: PREREQUISITES ─────────────────────────────────────
  prerequisites: [
    { item: "Basic Computer Literacy", done: true, note: "Comfortable using a computer and browser", detail: "File management, using applications, basic typing. SQL is genuinely beginner-friendly — no prior programming experience is required to start." },
    { item: "Spreadsheet Familiarity", done: true, note: "Experience with Excel or Google Sheets helps", detail: "If you understand rows, columns, filtering, and sorting in a spreadsheet, SQL's mental model clicks faster. Tables in SQL are like spreadsheet sheets with strict structure." },
    { item: "MySQL or PostgreSQL Installed", done: true, note: "You need a database to practice on", detail: "Install MySQL Community Server (free) or use a cloud option: db-fiddle.com, sqliteonline.com, or PostgreSQL on Supabase (free tier). Practicing locally with a real database is strongly recommended." },
    { item: "A SQL Client", done: true, note: "Run queries with a visual interface", detail: "MySQL Workbench (free, for MySQL), DBeaver (free, works with any database), TablePlus (Mac/Windows, freemium), or pgAdmin (for PostgreSQL). These show you query results visually and make learning much faster." },
    { item: "Basic Logic and Problem Decomposition", done: false, note: "Break problems into steps before writing SQL", detail: "SQL problems are data problems. Before writing any query, think: what table has the data? What columns do I need? What filter applies? Do I need to join? Do I need to aggregate? This thinking habit is more important than syntax." },
    { item: "No Programming Background Required", done: true, note: "SQL is readable and beginner-friendly", detail: "Unlike Java or Python, SQL reads almost like English — SELECT name FROM users WHERE city = 'Bangalore'. Anyone can learn it. You do not need to know programming to learn SQL." },
  ],

  // ── SECTION 6: ROADMAP ───────────────────────────────────────────
  roadmap: [
    {
      phase: "Beginner",
      label: "01",
      duration: "Weeks 1–3",
      color: "emerald",
      topics: [
        "What is a database, table, row, column, and primary key",
        "CREATE TABLE — data types (INT, VARCHAR, DECIMAL, DATE, BOOLEAN, TIMESTAMP)",
        "Constraints — PRIMARY KEY, NOT NULL, UNIQUE, DEFAULT, CHECK, FOREIGN KEY",
        "INSERT INTO — single and multiple rows",
        "SELECT — choosing columns, column aliases, DISTINCT",
        "WHERE — comparison operators, IN, BETWEEN, LIKE, IS NULL",
        "ORDER BY — ASC, DESC, multiple columns",
        "LIMIT and OFFSET — pagination",
        "UPDATE and DELETE — with and without WHERE",
        "Aggregate functions — COUNT, SUM, AVG, MIN, MAX",
      ],
      buildProjects: [
        "Student database — create tables, insert sample data, run filter and sort queries",
        "Product inventory queries — find expensive items, low-stock products, category totals",
        "Library database — books, members, queries to find available books and overdue returns",
      ],
    },
    {
      phase: "Intermediate",
      label: "02",
      duration: "Weeks 4–7",
      color: "primary",
      topics: [
        "INNER JOIN, LEFT JOIN, RIGHT JOIN, CROSS JOIN",
        "Self joins — employees and managers",
        "GROUP BY and HAVING — aggregation and group filtering",
        "CASE expressions — conditional logic in queries",
        "Subqueries — in SELECT, WHERE, and FROM",
        "CTEs (WITH clause) — readable complex queries",
        "String functions — CONCAT, SUBSTRING, UPPER, LOWER, TRIM, REPLACE",
        "Date functions — NOW(), DATEDIFF(), DATE_FORMAT(), DATE_ADD()",
        "COALESCE and NULLIF — null handling",
        "UNION and UNION ALL — combine result sets",
        "Indexes — CREATE INDEX, EXPLAIN, understanding execution plans",
      ],
      buildProjects: [
        "E-commerce analytics — revenue by category, top customers, monthly trends with JOINs and GROUP BY",
        "HR analytics — department headcounts, salary bands, manager hierarchies",
        "Sales reporting database — build queries that power a monthly executive dashboard",
      ],
    },
    {
      phase: "Advanced",
      label: "03",
      duration: "Weeks 8–14+",
      color: "purple",
      topics: [
        "Window functions — ROW_NUMBER, RANK, DENSE_RANK, NTILE, LAG, LEAD",
        "Aggregate window functions — running totals, moving averages",
        "Recursive CTEs — hierarchical data queries",
        "Query optimization — index strategy, EXPLAIN output, slow query log",
        "Transactions — BEGIN, COMMIT, ROLLBACK, isolation levels",
        "Stored procedures and functions",
        "Triggers — automatic actions on INSERT/UPDATE/DELETE",
        "Views — virtual tables for complex queries",
        "Normalization — 1NF, 2NF, 3NF — designing good database schemas",
        "PostgreSQL-specific features — JSONB, arrays, lateral joins",
        "Data warehousing concepts — star schema, fact and dimension tables",
      ],
      buildProjects: [
        "Full analytics report — user cohort analysis, retention, LTV using window functions",
        "Database schema design — design and build a complete normalized schema for a given domain",
        "Query optimization challenge — take a set of slow queries, analyze EXPLAIN output, add indexes, measure improvement",
      ],
    },
  ],

  // ── SECTION 7: USE CASES ─────────────────────────────────────────
  useCases: [
    { num: "01", title: "Business Intelligence and Reporting", body: "Every BI tool — Tableau, Power BI, Metabase, Looker, Redash — generates SQL queries to fetch data from databases. Data analysts write SQL to answer questions like 'which regions are growing fastest', 'what is our average order value by channel', and 'how many users churned this month'. SQL is the query language of business intelligence." },
    { num: "02", title: "Backend API Data Retrieval", body: "Every backend API that returns data from a database executes SQL (directly or through an ORM). A product listing API runs a SELECT with JOIN and WHERE. A user profile API runs a SELECT with multiple JOINs. An order history API runs GROUP BY to compute totals. Every developer building backend APIs writes SQL — directly or via ORM-generated queries they must understand." },
    { num: "03", title: "Data Analysis and Ad-Hoc Queries", body: "When a product manager asks 'how many users who signed up in January 2025 made a purchase within 7 days?', the data analyst writes a SQL query to answer it. These ad-hoc questions — answered in minutes with SQL — would take hours in Python and days in Excel. SQL is the fastest tool for answering structured data questions." },
    { num: "04", title: "ETL Pipelines and Data Engineering", body: "Extract-Transform-Load pipelines that move data from operational databases to data warehouses are written in SQL. dbt (data build tool) lets data engineers write SQL queries as modular transformations. Platforms like Snowflake, BigQuery, and Redshift run SQL at petabyte scale. SQL is the language of modern data engineering." },
    { num: "05", title: "Database Schema Design and Migrations", body: "When a new feature requires a new database table or a change to an existing one, developers write SQL migration scripts — CREATE TABLE, ALTER TABLE, CREATE INDEX. Tools like Flyway (Java) and Alembic (Python) run these SQL scripts in order. Schema design — deciding how to model data across tables — is a core backend engineering skill." },
    { num: "06", title: "User Segmentation and Marketing Analytics", body: "Marketing teams need lists of users matching specific criteria — 'users in Delhi who haven't ordered in 60 days and spent more than ₹5,000 total'. These segmentation queries are SQL. Customer retention analysis, cohort analysis, A/B test result analysis — all SQL queries run on the application database or data warehouse." },
    { num: "07", title: "Financial Reconciliation and Audit", body: "Banks and financial companies run SQL queries to reconcile transactions, detect anomalies, generate regulatory reports, and audit data changes. SQL's precision and the ability to query exact record states make it irreplaceable for financial data integrity work — where every rupee must match and every discrepancy must be explainable." },
  ],

  // ── SECTION 8: PROJECTS ──────────────────────────────────────────
  projects: {
    beginner: [
      { name: "Student Management Database", desc: "Tables for students, courses, and enrollments. Queries to find top students, course enrollment counts, students failing a subject, and average grade per course.", teaches: "CREATE TABLE, INSERT, SELECT with WHERE and ORDER BY, basic JOINs, GROUP BY for counts and averages, HAVING for filtered aggregates" },
      { name: "E-Commerce Product Catalog", desc: "Products, categories, and reviews. Queries to find products by category, filter by price range, find top-rated products, and compute average rating per category.", teaches: "Multi-table schema design, INNER JOIN, LEFT JOIN for products without reviews, GROUP BY + HAVING, ORDER BY with aggregates" },
      { name: "Library Database", desc: "Books, members, and borrowing records. Queries to find available books, overdue returns, most borrowed books, and members with outstanding fines.", teaches: "FOREIGN KEY relationships, date comparisons, CASE for fine calculation, NULL handling for available books, subqueries for availability check" },
      { name: "Employee Directory", desc: "Employees, departments, and salary records. Queries for headcount by department, salary ranges, employees without managers, and recent joiners.", teaches: "Self JOIN for manager hierarchy, BETWEEN for salary ranges, IS NULL for top-level managers, GROUP BY with COUNT and AVG" },
    ],
    intermediate: [
      { name: "E-Commerce Analytics Dashboard", desc: "Full order system (users, products, orders, order_items). Write 15+ queries powering a dashboard: daily revenue, top products, customer LTV, cart abandonment rate, return rate.", teaches: "Multi-table JOINs, GROUP BY with date functions, HAVING for thresholds, subqueries for complex filters, CTEs for readable analytics queries" },
      { name: "HR Analytics Platform", desc: "Company org chart, departments, salaries, performance reviews, promotions. Queries for department budgets, salary bands, promotion rates, headcount trends, and manager span of control.", teaches: "Recursive CTE for org hierarchy, window functions for ranking within department, multi-level JOINs, CASE for salary banding" },
      { name: "Sales Performance Report", desc: "Monthly sales data. Write queries for MoM growth, top salesperson per region, running total for the year, products not sold in last 30 days, and revenue breakdown by region.", teaches: "LAG/LEAD for period comparison, window functions for running totals, NOT EXISTS for unsold products, multiple GROUP BY dimensions" },
      { name: "Query Optimization Lab", desc: "Given a database with 1 million rows, identify and fix 5 slow queries. Use EXPLAIN to diagnose, add appropriate indexes, measure before/after query time.", teaches: "EXPLAIN output reading, index selection strategy, covering indexes, avoiding full table scans, query rewriting for index usage" },
    ],
    advanced: [
      { name: "User Cohort Retention Analysis", desc: "Track users by signup month (cohort). For each cohort, calculate what percentage was still active at month 1, 2, 3, 6, 12. Classic SaaS retention analysis.", teaches: "Recursive CTEs for month sequences, window functions for cohort assignment, self JOIN for retention calculation, CASE for retention buckets — very common in data engineering interviews" },
      { name: "Full Data Warehouse Schema", desc: "Design a star schema for an e-commerce data warehouse: fact_orders, dim_users, dim_products, dim_dates, dim_locations. Write analytical queries using the warehouse schema.", teaches: "Fact vs dimension tables, surrogate keys, slowly changing dimensions, analytical query patterns on warehouse schema — directly applicable to BigQuery, Snowflake, and Redshift roles" },
      { name: "SQL Interview Problem Set", desc: "Solve 30 SQL problems from LeetCode SQL Easy/Medium, covering second highest salary, consecutive numbers, department top earners, trips and users, and median salary.", teaches: "All window functions, self JOINs, correlated subqueries, all the patterns that appear repeatedly in technical interviews at FAANG, MAANG, and Indian product companies" },
    ],
  },

  // ── SECTION 9: MISTAKES ──────────────────────────────────────────
  mistakes: [
    {
      title: "UPDATE or DELETE Without a WHERE Clause",
      explanation: "The most dangerous SQL mistake. UPDATE products SET price = 0 without WHERE sets every product's price to zero. DELETE FROM orders without WHERE deletes every order. In production, this is a major incident.",
      tip: "Before running any UPDATE or DELETE, write and run the equivalent SELECT with the same WHERE clause first. Verify the rows it returns are exactly what you intend to modify. Then run the UPDATE/DELETE. Use transactions in production: BEGIN; UPDATE ...; SELECT to verify; COMMIT (or ROLLBACK).",
      wrong: "UPDATE users SET is_active = FALSE; -- Deactivates ALL users",
      correct: "UPDATE users SET is_active = FALSE WHERE last_login < DATE_SUB(NOW(), INTERVAL 1 YEAR); -- Only inactive users",
    },
    {
      title: "Using = NULL Instead of IS NULL",
      explanation: "NULL in SQL means 'unknown value'. NULL = NULL is not TRUE — it's NULL. You cannot compare NULL with =. Every comparison with NULL using = or != returns NULL (not TRUE or FALSE), meaning those rows are silently excluded.",
      tip: "Always use IS NULL or IS NOT NULL to check for null values. Use COALESCE(column, default) to substitute a value when the column is NULL.",
      wrong: "SELECT * FROM users WHERE phone = NULL; -- Returns no rows (wrong!)",
      correct: "SELECT * FROM users WHERE phone IS NULL; -- Correctly finds users without phone",
    },
    {
      title: "Using HAVING Instead of WHERE for Row-Level Filters",
      explanation: "HAVING is evaluated AFTER grouping and aggregation. Filtering non-aggregated columns in HAVING forces the database to group all rows first, then filter — much slower than filtering before grouping.",
      tip: "Use WHERE for row-level conditions (filter before grouping). Use HAVING only for conditions on aggregated values (COUNT, SUM, AVG, etc.).",
      wrong: "SELECT category, COUNT(*) FROM products GROUP BY category HAVING price > 1000; -- Wrong and slow",
      correct: "SELECT category, COUNT(*) FROM products WHERE price > 1000 GROUP BY category; -- Filter first, then group",
    },
    {
      title: "SELECT * in Application Code",
      explanation: "SELECT * fetches every column from every joined table, wasting network bandwidth, memory, and potentially exposing sensitive columns (like hashed passwords) to application layers. With JOINs, column name conflicts between tables also cause silent data overwrites.",
      tip: "Always list specific columns. In queries with JOINs, alias ambiguous column names. SELECT * is fine for exploration in a query tool — never in application code or stored procedures.",
      wrong: "SELECT * FROM orders JOIN users ON orders.user_id = users.id; -- Returns password column too",
      correct: "SELECT o.id, o.status, o.total_amount, u.name, u.email FROM orders o JOIN users u ON o.user_id = u.id;",
    },
    {
      title: "Using Functions on Indexed Columns in WHERE",
      explanation: "Wrapping an indexed column in a function prevents the database from using the index. The function must be applied to every row before the value can be compared — causing a full table scan.",
      tip: "Rewrite the condition to avoid the function on the indexed column. Move the transformation to the right-hand side of the comparison instead.",
      wrong: "SELECT * FROM orders WHERE YEAR(created_at) = 2025; -- Full table scan, ignores index",
      correct: "SELECT * FROM orders WHERE created_at >= '2025-01-01' AND created_at < '2026-01-01'; -- Uses index",
    },
    {
      title: "Forgetting That INNER JOIN Excludes Non-Matching Rows",
      explanation: "INNER JOIN returns only rows where the join condition matches in BOTH tables. Users with no orders, products with no reviews, employees with no assignments — all excluded. Developers then wonder why their row count is wrong.",
      tip: "If you need to include rows even when there's no match (users with zero orders, products with no reviews), use LEFT JOIN. Then use COALESCE to replace NULL values from the right table with meaningful defaults.",
      wrong: "SELECT u.name, COUNT(o.id) FROM users u INNER JOIN orders o ON u.id = o.user_id GROUP BY u.id; -- Missing users with no orders",
      correct: "SELECT u.name, COUNT(o.id) AS orders FROM users u LEFT JOIN orders o ON u.id = o.user_id GROUP BY u.id; -- All users included",
    },
    {
      title: "Not Using Indexes on Foreign Key Columns",
      explanation: "Foreign key columns used in JOIN conditions are almost always used in WHERE clauses too. Without an index, every JOIN requires a full table scan of the child table. On large tables, this is catastrophic for performance.",
      tip: "Add an index on every foreign key column. Rule of thumb: any column regularly used in WHERE, JOIN ON, or ORDER BY clauses should have an index. Use EXPLAIN to verify indexes are being used.",
      wrong: "-- orders.user_id has no index — every JOIN scans the full orders table",
      correct: "CREATE INDEX idx_orders_user_id ON orders (user_id); -- Now JOINs on user_id use the index",
    },
    {
      title: "Using DISTINCT as a Fix for Duplicate Rows",
      explanation: "DISTINCT is often added as a band-aid when a JOIN produces duplicate rows. But duplicates from JOINs usually indicate a missing JOIN condition or a one-to-many relationship that should be handled with GROUP BY or aggregation.",
      tip: "When you see unexpected duplicates, check your JOIN conditions — are you joining on all necessary columns? Are you getting a Cartesian product? Fix the query logic rather than masking the problem with DISTINCT.",
      wrong: "SELECT DISTINCT u.name FROM users u JOIN orders o ON u.id = o.user_id; -- Hides the real issue",
      correct: "SELECT u.name, COUNT(o.id) AS order_count FROM users u LEFT JOIN orders o ON u.id = o.user_id GROUP BY u.id, u.name; -- Address the one-to-many properly",
    },
    {
      title: "Storing Comma-Separated Lists in a Column",
      explanation: "Storing '1,2,3,4' in a tags or category_ids column violates first normal form. You can't index it, you can't query individual values efficiently, and you can't enforce foreign key constraints. This is a schema design mistake that causes pain for years.",
      tip: "Create a junction table (user_tags: user_id, tag_id) for many-to-many relationships. Use proper JOINs to query related data. Never store lists in a single column unless you're using a database with native array or JSON support (PostgreSQL JSONB) and you have a specific reason.",
      wrong: "-- user: id=1, name='Arjun', skills='java,sql,spring' -- Unqueryable!",
      correct: "-- user_skills: user_id=1, skill_id=3 (java), user_id=1, skill_id=5 (sql) -- Properly normalized",
    },
    {
      title: "Not Using Transactions for Multi-Step Operations",
      explanation: "A fund transfer that debits one account and credits another — if the debit succeeds but the server crashes before the credit, money disappears. Without a transaction, partial operations leave the database in an inconsistent state.",
      tip: "Wrap any sequence of SQL statements that must all succeed or all fail inside a transaction: BEGIN; ... operations ...; COMMIT; — with ROLLBACK in error handlers. This guarantees atomicity.",
      wrong: "-- Debit: UPDATE accounts SET balance = balance - 500 WHERE id = 1;\n-- Crash here — money lost!\n-- Credit: UPDATE accounts SET balance = balance + 500 WHERE id = 2;",
      correct: "BEGIN;\nUPDATE accounts SET balance = balance - 500 WHERE id = 1;\nUPDATE accounts SET balance = balance + 500 WHERE id = 2;\nCOMMIT; -- Both succeed or both fail",
    },
    {
      title: "Ignoring NULL in Aggregate Functions",
      explanation: "COUNT(column) counts only non-NULL values. COUNT(*) counts all rows. AVG(column) divides by non-NULL count, not total rows. These distinctions matter for correctness when nulls are present in your data.",
      tip: "Use COUNT(*) to count rows. Use COUNT(column) when you want to count non-null occurrences. Use COALESCE inside AVG when you need nulls treated as zero: AVG(COALESCE(rating, 0)).",
      wrong: "SELECT AVG(discount_amount) FROM orders; -- Excludes orders with no discount (NULL) from the average",
      correct: "SELECT AVG(COALESCE(discount_amount, 0)) FROM orders; -- Treats NULL discount as 0 in the average",
    },
    {
      title: "Writing Queries That Can't Use Indexes Due to Leading Wildcards",
      explanation: "LIKE '%keyword%' (leading wildcard) cannot use a B-tree index — the database must scan every row and apply the pattern. On millions of rows, this is a query that takes many seconds.",
      tip: "For suffix search ('%keyword'), use LIKE 'keyword%' if possible. For full-text search, use a FULLTEXT index with MATCH...AGAINST. For application-level search, consider Elasticsearch or Meilisearch which are purpose-built for text search.",
      wrong: "SELECT * FROM products WHERE name LIKE '%laptop%'; -- Full table scan on 1M+ rows",
      correct: "SELECT * FROM products WHERE MATCH(name, description) AGAINST('laptop' IN BOOLEAN MODE); -- Uses FULLTEXT index",
    },
  ],

  // ── SECTION 10: INTERVIEW QUESTIONS ─────────────────────────────
  interviewQuestions: {
    beginner: [
      { q: "What is SQL and what is it used for?", a: "SQL (Structured Query Language) is the standard language for interacting with relational databases. It is used to create database structures (DDL), insert and modify data (DML), retrieve data (SELECT queries), and control access (DCL). It works with any relational database — MySQL, PostgreSQL, Oracle, SQL Server — with minor syntax differences." },
      { q: "What is the difference between DDL, DML, and DCL?", a: "DDL (Data Definition Language): defines structure — CREATE TABLE, ALTER TABLE, DROP TABLE. DML (Data Manipulation Language): manipulates data — SELECT, INSERT, UPDATE, DELETE. DCL (Data Control Language): controls access — GRANT, REVOKE. Some also define TCL (Transaction Control Language): COMMIT, ROLLBACK, SAVEPOINT." },
      { q: "What is a PRIMARY KEY?", a: "A column (or combination of columns) that uniquely identifies each row in a table. Rules: must be unique across all rows, cannot be NULL, one per table. Automatically creates an index. Usually implemented with AUTO_INCREMENT (MySQL) or SERIAL/IDENTITY (PostgreSQL) for integer IDs." },
      { q: "What is the difference between WHERE and HAVING?", a: "WHERE filters individual rows BEFORE grouping and aggregation. It cannot reference aggregate functions. HAVING filters groups AFTER GROUP BY and aggregation — it can reference COUNT(), SUM(), AVG(), etc. Use WHERE to filter rows; use HAVING to filter the results of aggregation." },
      { q: "What is the difference between DELETE, TRUNCATE, and DROP?", a: "DELETE: removes specific rows (with WHERE) or all rows, can be rolled back, logged row-by-row, does not reset AUTO_INCREMENT. TRUNCATE: removes all rows, faster than DELETE, resets AUTO_INCREMENT, cannot be rolled back in most databases. DROP: removes the entire table structure and all data — the table no longer exists." },
      { q: "What is a FOREIGN KEY?", a: "A column that references the PRIMARY KEY of another table, enforcing referential integrity. A foreign key prevents inserting a value that doesn't exist in the parent table, and (optionally) cascades DELETE or UPDATE operations to child records. Example: orders.user_id is a foreign key referencing users.id." },
      { q: "What is the difference between CHAR and VARCHAR?", a: "CHAR(n) is fixed-length — always stores exactly n characters, padded with spaces. VARCHAR(n) is variable-length — stores only as many characters as needed (up to n), more space-efficient for varying content. Use CHAR for fixed-length data (phone numbers, country codes, status codes). Use VARCHAR for names, emails, descriptions." },
      { q: "What does NULL mean in SQL and how do you handle it?", a: "NULL means 'unknown' or 'no value' — not zero, not empty string. NULL compared with any value using = or != always returns NULL (not TRUE or FALSE). Check for NULL with IS NULL or IS NOT NULL. Use COALESCE(column, default) to substitute a value when NULL. COUNT(column) excludes NULLs; COUNT(*) includes all rows." },
      { q: "What is the difference between UNION and UNION ALL?", a: "UNION combines results of two SELECT statements and removes duplicate rows (requires an extra sort/hash operation). UNION ALL combines results and keeps all rows including duplicates — faster. Use UNION when you need distinct results. Use UNION ALL when you know there are no duplicates or you intentionally want all rows (much better performance)." },
      { q: "What are aggregate functions in SQL? Name five.", a: "Functions that compute a single result from multiple rows: COUNT() — counts rows or non-NULL values. SUM() — adds up numeric values. AVG() — computes average. MIN() — finds minimum. MAX() — finds maximum. They are used with GROUP BY to compute values per group. They ignore NULL values (except COUNT(*))." },
    ],
    intermediate: [
      { q: "What is the difference between INNER JOIN, LEFT JOIN, and RIGHT JOIN?", a: "INNER JOIN: returns only rows where the join condition matches in BOTH tables — excludes unmatched rows. LEFT JOIN: returns ALL rows from the left table, and matched rows from the right — unmatched right rows appear as NULL. RIGHT JOIN: returns ALL rows from the right table — rarely used, almost always rewritten as LEFT JOIN with tables swapped." },
      { q: "What is a subquery and when would you use a CTE instead?", a: "A subquery is a query nested inside another query. CTEs (WITH clause) are named temporary result sets defined before the main query. Use CTE when: the subquery is reused multiple times in the same query, the query has multiple logical steps that benefit from names, or you need recursion. CTEs are more readable; subqueries are fine for simple one-off filtering." },
      { q: "Explain what an index is and how it works.", a: "An index is a separate data structure (usually a B-tree) that stores column values in sorted order with pointers to the actual rows. When you query WHERE email = 'x@y.com', without an index the DB scans every row. With an index on email, it does a binary search — finding the row in O(log n) instead of O(n). Trade-off: indexes speed up reads but slow down writes (every INSERT/UPDATE/DELETE must update the index)." },
      { q: "What is the difference between a clustered and non-clustered index?", a: "Clustered index: the table rows are physically stored in the order of the index — there can be only one per table. In MySQL InnoDB, the PRIMARY KEY is always the clustered index. Non-clustered index: a separate structure with index values pointing to row locations — you can have multiple. Non-clustered index lookups require two steps: find in index, then fetch from table (unless it's a covering index)." },
      { q: "What is a transaction and what are ACID properties?", a: "A transaction is a sequence of SQL statements treated as a single unit. ACID: Atomicity — all operations succeed or all fail (no partial commits). Consistency — database moves from one valid state to another. Isolation — concurrent transactions don't interfere with each other. Durability — committed transactions survive system crashes (written to disk). Use BEGIN/COMMIT/ROLLBACK to manage transactions explicitly." },
      { q: "What is database normalization? Explain 1NF, 2NF, and 3NF.", a: "Normalization eliminates redundancy and ensures data integrity. 1NF: no repeating groups, each cell has one atomic value, each row is unique. 2NF: in 1NF + no partial dependency (every non-key column depends on the WHOLE primary key — relevant for composite keys). 3NF: in 2NF + no transitive dependency (non-key columns depend only on the primary key, not on other non-key columns)." },
      { q: "What is the difference between RANK(), DENSE_RANK(), and ROW_NUMBER()?", a: "All three assign numbers to rows within a window. ROW_NUMBER(): always unique (1,2,3,4) — no ties. RANK(): tied rows get the same rank, next rank skips (1,2,2,4 — skips 3). DENSE_RANK(): tied rows get the same rank, no skipping (1,2,2,3). Use ROW_NUMBER() when you need uniqueness. Use RANK()/DENSE_RANK() when ties are meaningful." },
      { q: "What is the N+1 query problem in the context of SQL?", a: "The N+1 problem occurs when you run 1 query to fetch N records, then run N additional queries to fetch related data for each — N+1 total queries. Example: fetch 100 orders, then for each order fetch the user (101 total queries). Solution: one query with JOIN fetches orders and users together. In ORM context, this is solved with eager loading or fetch joins." },
      { q: "What are database views and when would you use them?", a: "A view is a stored SELECT query that acts like a virtual table — you query it with SELECT but it always runs the underlying query. Uses: simplify complex queries (create a view for a 5-table JOIN used across many reports), security (expose only specific columns to users), backward compatibility (rename tables while keeping old view). Views don't store data (unless materialized). Performance is the same as the underlying query." },
      { q: "Explain the difference between optimistic and pessimistic locking in databases.", a: "Pessimistic locking: lock the row when you read it (SELECT ... FOR UPDATE) — no one else can modify it until your transaction commits. Safe for high-conflict scenarios. Pessimistic. Optimistic locking: no lock on read — check at update time that no one has modified the row since you read it (using a version column or timestamp). Rollback and retry if conflict detected. Better throughput for low-conflict scenarios." },
    ],
    advanced: [
      { q: "What is the query execution order in SQL?", a: "SQL clauses execute in this logical order (not the written order): FROM → JOIN → WHERE → GROUP BY → HAVING → SELECT → DISTINCT → ORDER BY → LIMIT. This explains why you can't use a SELECT alias in WHERE (alias defined in SELECT, evaluated after WHERE), but you can use it in ORDER BY (evaluated after SELECT). HAVING can use aggregate functions because it runs after GROUP BY." },
      { q: "What are window functions and how do they differ from GROUP BY?", a: "Window functions (OVER clause) perform calculations across a set of rows related to the current row, without collapsing rows. GROUP BY collapses many rows into one summary row per group. With GROUP BY you lose individual rows. With window functions, you keep all rows and add computed columns (running total, rank, previous row value). Window functions are strictly more expressive than GROUP BY for analytics." },
      { q: "How do you find the second highest salary without using LIMIT?", a: "SELECT MAX(salary) FROM employees WHERE salary < (SELECT MAX(salary) FROM employees). Or with DENSE_RANK: WITH ranked AS (SELECT salary, DENSE_RANK() OVER (ORDER BY salary DESC) AS rnk FROM employees) SELECT salary FROM ranked WHERE rnk = 2. The DENSE_RANK approach generalizes to Nth highest without changing the logic." },
      { q: "What is a recursive CTE and when do you use it?", a: "A recursive CTE calls itself — the WITH RECURSIVE syntax. It has a base case (starting rows) and a recursive case (rows derived from previous iteration). Use for: hierarchical data (organization charts, category trees, folder structures), generating sequences of numbers or dates, graph traversal (finding connected nodes). They run until the recursive case returns no new rows." },
      { q: "Explain transaction isolation levels.", a: "Isolation levels control what a transaction can see from concurrent transactions. READ UNCOMMITTED: can see uncommitted changes (dirty read) — almost never used. READ COMMITTED: can only see committed changes, but may see different values in two reads of the same row (non-repeatable read). REPEATABLE READ (MySQL InnoDB default): same row returns same value within a transaction. SERIALIZABLE: full isolation — transactions appear sequential. Higher isolation = fewer concurrency issues, more locking overhead." },
      { q: "How would you optimize a query that's taking 30 seconds on a 10-million-row table?", a: "Step 1: EXPLAIN the query — identify full table scans (type: ALL) and missing indexes. Step 2: Add indexes on WHERE, JOIN ON, and ORDER BY columns. Step 3: Check if functions on indexed columns are disabling the index (YEAR(date) vs date BETWEEN). Step 4: Check for SELECT * and reduce columns. Step 5: See if GROUP BY can be replaced with a more targeted query. Step 6: Consider query decomposition — break into smaller queries with intermediate temp tables for very complex cases." },
      { q: "What is the difference between a star schema and a snowflake schema in data warehousing?", a: "Star schema: one central fact table connected directly to multiple dimension tables — simple, fast for analytics queries (fewer JOINs). Snowflake schema: dimension tables are further normalized into sub-dimensions (e.g., Date → Month → Quarter table chain) — saves storage, more complex queries with more JOINs. Star schema is preferred for analytics performance. Snowflake for strict normalization." },
      { q: "How do you pivot rows into columns in SQL?", a: "Using conditional aggregation with CASE: SELECT user_id, SUM(CASE WHEN month = 1 THEN revenue ELSE 0 END) AS jan, SUM(CASE WHEN month = 2 THEN revenue ELSE 0 END) AS feb FROM sales GROUP BY user_id. In databases that support it (SQL Server, Oracle), use the PIVOT keyword. In PostgreSQL, use FILTER: SUM(revenue) FILTER (WHERE month = 1) AS jan." },
      { q: "What is the difference between EXISTS and IN for subqueries? Which is more performant?", a: "IN: evaluates the subquery once, stores results in memory, checks each outer row against the set — better for small subquery result sets. EXISTS: evaluates the subquery for each outer row, stops as soon as one match is found (short-circuit) — better for large subquery result sets or when you only care about existence, not the value. NOT EXISTS is generally faster than NOT IN because NOT IN behaves unexpectedly with NULLs (if subquery has any NULL, NOT IN returns no rows)." },
      { q: "How do you find and handle duplicate rows in a table?", a: "Find duplicates: SELECT email, COUNT(*) FROM users GROUP BY email HAVING COUNT(*) > 1. Identify which to delete: SELECT id, email, ROW_NUMBER() OVER (PARTITION BY email ORDER BY created_at) AS rn FROM users. Delete duplicates keeping the earliest: DELETE FROM users WHERE id IN (SELECT id FROM (SELECT id, ROW_NUMBER() OVER (PARTITION BY email ORDER BY created_at) AS rn FROM users) t WHERE rn > 1)." },
    ],
  },

  // ── SECTION 11: COMPARISON ───────────────────────────────────────
  comparison: {
    headers: ["Feature", "SQL (Relational)", "NoSQL (MongoDB)", "NewSQL (CockroachDB / Spanner)"],
    rows: [
      { feature: "Data Model", react: "Tables, rows, columns — strict schema", vue: "Documents, collections — flexible schema", angular: "Tables + horizontal scaling — SQL interface" },
      { feature: "Query Language", react: "SQL — universal, declarative", vue: "MQL / aggregation pipeline", angular: "Standard SQL" },
      { feature: "Relationships", react: "Foreign keys, JOINs — first-class", vue: "Embedded documents or application-level JOINs", angular: "Foreign keys, JOINs — first-class" },
      { feature: "ACID Transactions", react: "Full ACID — all four properties", vue: "Limited (single-document atomic, multi-doc in v4+)", angular: "Full ACID at global scale" },
      { feature: "Schema", react: "Strict — changes require migration", vue: "Flexible — each document can differ", angular: "Strict — changes require migration" },
      { feature: "Scaling", react: "Vertical + read replicas (horizontal is hard)", vue: "Horizontal — built for sharding", angular: "Horizontal — designed for global scale" },
      { feature: "Best For", react: "Financial data, orders, structured reporting", vue: "User profiles, catalogs, flexible schemas, rapid iteration", angular: "Financial apps needing both SQL and global scale" },
      { feature: "Learning Curve", react: "Low-Moderate — readable, learnable fast", vue: "Low — JSON-native, flexible", angular: "Moderate — SQL + distributed concepts" },
    ],
  },

  // ── SECTION 12: PROS & CONS ──────────────────────────────────────
  pros: [
    "Universal standard — SQL works across MySQL, PostgreSQL, Oracle, SQL Server with minor dialect differences",
    "Declarative — describe what you want, the optimizer figures out how — no loop logic needed",
    "ACID transactions — guaranteed data integrity for financial, medical, and business-critical data",
    "JOINs — relational data modeling with referential integrity prevents data inconsistency",
    "Mature tooling — every language has SQL drivers, every BI tool speaks SQL, decades of optimization",
    "Fast for structured queries — properly indexed SQL queries on millions of rows return in milliseconds",
    "Universally required skill — demanded in every software job category, a guaranteed career multiplier",
  ],
  cons: [
    "Rigid schema — changing table structure requires migrations; agile iteration on schema is slower than NoSQL",
    "Horizontal scaling is hard — sharding a relational database across many servers is complex and often application-level",
    "JOINs can be slow — poorly written multi-table JOINs on large unindexed tables cause major performance problems",
    "Object-relational impedance mismatch — mapping SQL rows to application objects is awkward without an ORM",
    "NULL handling is unintuitive — NULL semantics (NULL != NULL, NULL in NOT IN breaks queries) surprise developers regularly",
    "Not ideal for unstructured data — storing and querying JSON, text, or hierarchical data is more natural in document databases",
    "Vendor lock-in for advanced features — window functions, JSONB, stored procedures differ enough across databases to cause migration pain",
  ],

  // ── SECTION 13: FUTURE SCOPE ─────────────────────────────────────
  futureScope: [
    "SQL is not going anywhere — it is becoming more important as data volumes grow. Every major cloud platform (AWS, GCP, Azure) offers managed SQL databases as primary products. BigQuery, Snowflake, Redshift, and Databricks all use SQL as their query interface. The data engineering boom in India's tech companies means SQL demand is growing, not declining.",
    "The rise of the Modern Data Stack has made SQL more powerful than ever. dbt (data build tool) lets data engineers write SQL as modular, version-controlled transformation code. Analysts and engineers write SQL in dbt models that run on Snowflake, BigQuery, or Redshift, powering dashboards and reports for entire companies. SQL + dbt is one of the most hireable data engineering skill combinations in 2026.",
    "AI is not replacing SQL — it is generating SQL. GitHub Copilot, Google's Gemini, and specialized text-to-SQL tools generate SQL from natural language questions. But generated SQL must be reviewed, debugged, and optimized by someone who understands it. SQL fluency becomes more valuable as a quality-control and optimization skill even in AI-assisted workflows.",
    "NewSQL databases (CockroachDB, Google Spanner, TiDB) are bringing SQL to globally distributed systems — combining the familiarity of SQL with the horizontal scalability of NoSQL. These databases use standard SQL — your SQL skills transfer completely. The only new learning is distributed database concepts (consensus algorithms, distributed transactions).",
    "In India specifically, the proliferation of fintech, ed-tech, and health-tech startups, combined with the growth of data engineering and analytics roles, means SQL demand will grow significantly through 2030. Every company building products collects data. Every company that collects data needs SQL to understand it. SQL is infrastructure-level knowledge with permanent demand.",
  ],

  // ── SECTION 14: ACTION PLAN ──────────────────────────────────────
  actionPlan: [
    { week: "Week 1", title: "Install and Explore", desc: "Install MySQL Community Server and MySQL Workbench. Create your first database. Learn CREATE TABLE, INSERT, and SELECT. Run queries on a sample database (MySQL's 'world' or 'sakila' database which ships with MySQL Workbench). Get comfortable with the tool before learning syntax." },
    { week: "Week 2", title: "Core SELECT Mastery", desc: "Master WHERE (all operators: BETWEEN, IN, LIKE, IS NULL), ORDER BY, LIMIT, DISTINCT, and all aggregate functions (COUNT, SUM, AVG, MIN, MAX). Build the Student Management Database from the beginner projects. Practice 10 filter queries per day on your own data." },
    { week: "Week 3", title: "JOINs — The Critical Week", desc: "Learn INNER JOIN, LEFT JOIN. Practice on your Student or Library database — every query should involve at least two tables. Understand WHY some users disappear with INNER JOIN. Build queries that join 3 tables. This is the week that determines whether you can handle real-world SQL." },
    { week: "Week 4–5", title: "GROUP BY, HAVING, and Subqueries", desc: "Master GROUP BY with aggregate functions. Learn the WHERE vs HAVING distinction by writing both wrong and right examples. Build the E-Commerce Analytics Dashboard project. Add CTEs to make your complex queries readable. Solve 5 SQL problems on LeetCode or HackerRank." },
    { week: "Week 6–7", title: "Window Functions and Indexes", desc: "Learn ROW_NUMBER, RANK, LAG, LEAD, and SUM OVER. These appear in every senior SQL interview. Learn EXPLAIN — run it on your existing queries and understand the output. Add indexes to your practice database and measure the difference. These two skills show interviewers you understand SQL at a production level." },
    { week: "Week 8+", title: "Interview Prep and Real-World Practice", desc: "Solve 30 SQL problems on LeetCode (Easy: 15, Medium: 15). Practice the classic patterns: second highest salary, top N per group, users who never ordered, consecutive dates, cumulative totals. Connect SQL to your application — if you are a backend developer, look at the SQL your ORM generates (enable query logging in Spring Boot or Django) and optimize it. SQL fluency in interviews is built through repetition of patterns, not memorization of syntax." },
  ],
};
