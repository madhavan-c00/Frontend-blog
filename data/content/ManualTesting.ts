
import type { TechContent } from './types';

export const manualTestingContent: TechContent = {
    techId: 'manual-testing',
    readTime: '30–35 min',
    difficulty: 'Beginner to Advanced',
    lastUpdated: '2026',

    // ── OPENING HOOK ─────────────────────────────────────────────────
    openingHook:
        "If you want a career in software quality assurance that pays well, offers genuine job security, and opens doors into automation, performance engineering, and product management — learn manual testing. Not because it is easy (done properly, it demands sharp analytical thinking and meticulous attention to detail). Not because it is being replaced by automation (it is not — every automated test suite is built on top of manual test thinking, and every organization that automates still employs manual testers for exploratory work, usability assessment, and edge-case discovery). But because manual testing is the most reliable entry point into India's software quality ecosystem — a sector that employs over 500,000 QA professionals and adds new roles every quarter as India's technology industry digitizes everything from banking to agriculture. A fresher who can write a complete test plan, execute test cases against a web application, log defects with precise reproduction steps, and understand the software development life cycle is positioned for a ₹3.5–7 LPA QA role in 2026 at IT services companies, product startups, and SaaS firms. A manual tester who adds SQL, API testing with Postman, and basic automation over the next two years moves to ₹8–16 LPA. The path from manual tester to SDET (Software Development Engineer in Test) to QA lead to test architect is one of the most clearly defined and consistently rewarding career ladders in Indian technology. This is not a checklist of testing terms. This is the complete, no-filler Manual Testing roadmap — from zero knowledge to a job-ready QA professional.",

    // ── SECTION 1: INTRODUCTION ──────────────────────────────────────
    introText: [
        "Manual testing is the practice of evaluating software quality by executing test cases without automated tools — a human tester operates the application, observes its behavior, compares actual results against expected results, and documents any discrepancies as defects. It is the foundational discipline of software quality assurance (QA) and the prerequisite for every specialized testing domain that follows: automation testing, performance testing, security testing, and test management. Manual testing cannot be fully replaced by automation because automation can only verify what it has been explicitly programmed to check. A human tester brings judgment, curiosity, and the ability to notice that something 'feels wrong' even when it technically passes every specified requirement — a navigation that is confusing, a form that is technically functional but impossible to use on a mobile device, or a sequence of legitimate actions that produces an absurd result.",
        "The scope of manual testing in 2026 is broader than most people realize. It encompasses functional testing (does the feature do what it is supposed to do?), usability testing (can a real user accomplish the task without confusion?), compatibility testing (does the application work correctly across browsers, devices, and operating systems?), regression testing (do new changes break previously working functionality?), exploratory testing (what happens when we use the application in ways no one anticipated?), and user acceptance testing (does the application meet the business requirements that were originally defined?). Each of these testing types requires a different mindset, a different approach, and different documentation. A senior manual tester is not someone who clicks through an application following a script — they are someone who designs a test strategy that maximizes defect detection with the available time and communicates quality risks clearly to the project stakeholders.",
        "In India's technology industry, manual testing is particularly critical for three reasons. First, India serves as the QA delivery center for hundreds of global product companies — Indian QA teams test software used by millions of users in the US, UK, Europe, and Southeast Asia, making quality consciousness a national competitive advantage. Second, India's own digital transformation — UPI payment platforms, IRCTC, DigiLocker, healthcare portals, e-governance systems — involves software that handles critical financial and personal data where a single defect can affect millions of users and regulatory compliance. Third, the IT services industry (TCS, Infosys, Wipro, HCL, Cognizant) employs more QA engineers than any other function besides development, because quality assurance is a contractual deliverable on every client project. Understanding manual testing deeply is understanding the foundational language of India's largest technology employer.",
    ],

    realWorldUsages: [
        "Banking and fintech — HDFC, ICICI, Razorpay, and PhonePe QA teams manually test payment flows, fund transfer edge cases, session timeout behavior, and compliance-mandated security controls that automated scripts cannot fully cover",
        "E-commerce — Flipkart, Amazon India, and Meesho maintain QA teams that manually test checkout flows, discount code interactions, return workflows, and seller portal usability across hundreds of device-browser combinations",
        "Healthcare — Apollo Hospitals, Practo, and government health portals require manual testers to verify patient data integrity, prescription workflows, and compliance with data protection requirements where automated tests miss contextual incorrectness",
        "Government digital services — IRCTC, GSTN (Goods and Services Tax Network), and UIDAI (Aadhaar) employ large QA teams to manually test systems that millions of citizens depend on daily for tax filing, train booking, and identity verification",
        "IT services (TCS, Infosys, Wipro) — QA is a major service line; Indian testing teams manually test applications for banking clients in the US and UK, insurance platforms in Europe, and retail systems globally",
        "SaaS companies — Freshworks, Zoho, and Chargebee maintain QA teams that manually test new features before release, ensuring that functionality works correctly for customers across different subscription plans and configurations",
        "Ed-tech — BYJU'S, Unacademy, and Vedantu QA teams manually test learning flows, video playback across devices, assessment systems, and parent dashboard usability for a user base with varying technical literacy",
        "Automotive and IoT — Tata Motors, Mahindra, and automotive software suppliers test infotainment systems, telematics applications, and connected car features that require human judgment about usability and safety",
        "Gaming — Nazara Technologies and mobile gaming companies employ manual testers for gameplay testing, level difficulty assessment, monetization flow testing, and device compatibility across hundreds of Android phones",
    ],

    // ── SECTION 2: WHY LEARN ─────────────────────────────────────────
    whyLearn: {
        demand:
            "Manual testing roles consistently represent 30–40% of all technology job listings on Naukri India, making it one of the largest single job categories in Indian IT. At any given time, Naukri lists 40,000–80,000 QA and testing positions across experience levels. This demand is driven by structural factors: every software product shipped requires quality assurance, every IT services engagement includes a testing workstream, and the conversion rate of manual testers to automation testers (which requires programming knowledge many don't immediately have) leaves a continuous pipeline of manual-first QA roles. Beyond volume, manual testing offers something rare in entry-level technology roles: a clear pathway into the profession that doesn't require strong programming skills from day one. A fresher with good analytical skills, attention to detail, and communication ability can start contributing to a QA team in weeks — a much lower barrier than development roles. And unlike many entry-level roles, manual testing skills compound into highly paid senior positions in test management, SDET, and quality architecture.",
        jobRoles: [
            { role: "Manual Test Engineer / QA Analyst", desc: "The foundational role — execute test cases, log defects, retest fixes, prepare test reports. Works within a scrum team or dedicated QA team across web and mobile applications." },
            { role: "Functional Tester", desc: "Specializes in verifying that application features behave according to functional requirements and acceptance criteria across positive, negative, and boundary scenarios." },
            { role: "System Tester", desc: "Tests the integrated system end-to-end — verifying that all components work together correctly as opposed to individual unit or component testing." },
            { role: "User Acceptance Tester (UAT Tester)", desc: "Tests from the end-user or business perspective — validates that the system meets business requirements before go-live. Often works directly with product owners and business analysts." },
            { role: "Regression Tester", desc: "Maintains and executes regression test suites to ensure new code changes don't break previously working functionality. Critical in high-velocity development teams." },
            { role: "Exploratory Tester / Test Lead", desc: "Senior role — designs test strategies, creates test plans and test cases, guides exploratory testing sessions, mentors junior testers, and communicates quality status to project management." },
            { role: "QA Lead / Test Manager", desc: "Manages a team of testers, owns the quality strategy for a project or product, manages stakeholder relationships, tracks defect metrics, and makes release quality decisions." },
        ],
        whyCompanies: [
            { reason: "Defects found early cost 10–100x less to fix", detail: "A defect found in requirements costs ₹100 to fix. The same defect found in production costs ₹10,000+. Manual testers embedded in development teams find defects before they reach users." },
            { reason: "Automation cannot replace human judgment", detail: "Automated tests verify pre-defined conditions. Manual testers discover undefined problems — usability issues, unexpected interaction effects, and edge cases no one thought to specify." },
            { reason: "Compliance and regulatory requirements", detail: "Banking, healthcare, fintech, and government software must demonstrate quality through documented test evidence. Manual test execution with sign-off is a regulatory requirement, not an engineering choice." },
            { reason: "Exploratory testing finds the defects automation misses", detail: "Studies consistently show that exploratory testing finds 30–40% of defects that scripted test execution misses. Experienced manual testers think like adversarial users — they break applications deliberately." },
        ],
        salaryRange: "₹3.5 LPA – ₹7 LPA (Freshers, 0–1 year) | ₹7 LPA – ₹16 LPA (Mid-Level, 2–4 years with API/SQL skills) | ₹16 LPA – ₹35 LPA (Senior QA Lead / Test Manager, 5+ years)",
        careerNote:
            "Manual testing is not a dead end — it is the most structured entry point into a rich QA career ecosystem. The progression is well-defined: manual tester → add SQL and API testing → add Selenium or Cypress automation → SDET (Software Development Engineer in Test) → senior SDET / performance engineer → QA architect / test manager. Each step roughly doubles the compensation. Manual testers who transition to automation earn ₹12–20 LPA. SDETs at product companies earn ₹18–30 LPA. QA architects and test leads at enterprise companies and MNCs earn ₹30–50 LPA. The unique advantage of the QA career path is that it rewards deep domain knowledge — a manual tester who deeply understands banking workflows is more valuable than a generalist automation engineer at a bank's QA team.",
    },

    // ── SECTION 3: HOW IT WORKS ──────────────────────────────────────
    howItWorks: {
        intro:
            "Think of manual testing like a building inspector visiting a newly constructed apartment complex. The inspector doesn't build anything — they systematically verify that every element of the construction meets the approved blueprint and safety standards. They check that doors open correctly, plumbing flows without leaks, electrical systems work safely, and the structural elements are sound. They have a checklist (test cases), they document every problem they find (defect reports), and they reinspect after the contractor fixes each issue (retesting). But beyond the checklist, a skilled inspector also notices things the checklist doesn't cover — a door that swings into a wall and damages the plaster, a light switch positioned where it will never be found in the dark. That judgment, experience, and contextual awareness is exploratory testing — the most valuable thing a manual tester brings that no automated tool can replicate.",
        vdomSteps: [
            { num: "1", title: "Requirements Analysis — Understand What Should Be Built", text: "Testing begins before any code is written. The manual tester reads the requirements document, user stories, acceptance criteria, and wireframes. They identify ambiguities (what happens if the user enters a negative quantity?), missing scenarios (what if the network drops during a payment?), and testable conditions. This phase produces a test basis — the documented source of truth that test cases will verify." },
            { num: "2", title: "Test Planning — Define the Testing Strategy", text: "The test plan documents what will be tested, what won't be tested (scope), how it will be tested, what environments and tools are needed, who will test what, the schedule, entry and exit criteria, and risk assessment. A test plan for a payment feature includes: functional tests, boundary value tests, negative tests, performance smoke tests, and browser compatibility matrix. The test plan is reviewed and signed off before testing begins." },
            { num: "3", title: "Test Case Design — Write Detailed Test Cases", text: "Test cases specify the exact steps to execute, the test data required, the preconditions (user must be logged in), and the expected result for each scenario. A good test case is atomic (tests one thing), unambiguous (anyone can execute it and get the same result), and complete (all necessary data and preconditions are specified). Test cases are organized into test suites — logical groupings by feature or test type." },
            { num: "4", title: "Test Environment Setup and Test Execution", text: "The tester confirms the test environment — browser version, OS, test data, application version — matches what was specified in the test plan. They execute each test case step by step, comparing actual results to expected results. When actual ≠ expected, it is a potential defect — the tester investigates to rule out test data issues or environment problems, then logs it as a defect with precise reproduction steps." },
            { num: "5", title: "Defect Reporting and Defect Life Cycle Management", text: "Every defect is logged in a bug tracking tool (JIRA, Bugzilla, Azure DevOps) with: title, severity, priority, environment, browser/device, steps to reproduce (numbered, exact), expected result, actual result, and screenshots or screen recordings. The defect moves through a life cycle: New → Assigned → In Progress → Fixed → Retest → Closed (or Reopened). The tester is responsible for retesting every fixed defect." },
        ],
        componentCode: `// MANUAL TESTING WORKFLOW — a complete feature test scenario

// ── TEST CASE TEMPLATE ────────────────────────────────────────────────

Test Case ID: TC_LOGIN_001
Module: User Authentication
Feature: Login Functionality
Priority: High
Severity: Critical
Preconditions:
  - Application is accessible at https://staging.myapp.com
  - Test user account exists: email=testuser@example.com, password=Test@1234
  - User is NOT already logged in (cleared cookies/session)

Test Steps:
  Step 1: Navigate to https://staging.myapp.com/login
  Step 2: Enter email: testuser@example.com in the Email field
  Step 3: Enter password: Test@1234 in the Password field
  Step 4: Click the "Sign In" button

Expected Result:
  - User is redirected to the dashboard (/dashboard)
  - User's name "Priya Sharma" is displayed in the top navigation bar
  - "Welcome back, Priya!" notification appears for 3 seconds
  - Browser URL shows: https://staging.myapp.com/dashboard

Actual Result: [Filled during execution]
Status: Pass / Fail / Blocked / Skipped
Executed By: Riya Mehta
Executed On: 2026-03-15
Build Version: v2.4.1
Comments: [Any observations during execution]

// ── NEGATIVE TEST CASES (same feature, failure scenarios) ─────────────

TC_LOGIN_002: Login with incorrect password
  Step: Enter valid email, enter wrong password "WrongPass123", click Sign In
  Expected: Error message "Invalid email or password" displayed
  Expected: Password field cleared, email field retains value
  Expected: User remains on login page (NOT redirected)

TC_LOGIN_003: Login with unregistered email
  Step: Enter non-existent email "nobody@fake.com", any password, click Sign In
  Expected: Same error message "Invalid email or password" (no user enumeration!)
  Expected: No hint given whether email exists or password is wrong

TC_LOGIN_004: Login with empty email field
  Step: Leave email blank, enter any password, click Sign In
  Expected: Inline validation error "Email is required" below email field
  Expected: Sign In button behavior: form not submitted

TC_LOGIN_005: Login with invalid email format
  Step: Enter "notanemail", any password, click Sign In
  Expected: Validation error "Please enter a valid email address"

TC_LOGIN_006: SQL injection attempt in email field
  Step: Enter: ' OR '1'='1 in email field, any password, click Sign In
  Expected: Error message displayed (NOT logged in, NOT server error 500)
  Expected: Application handles gracefully — no stack trace exposed

TC_LOGIN_007: Login with correct credentials after 5 failed attempts
  Step: Fail login 5 times, then enter correct credentials
  Expected: Account locked message OR CAPTCHA displayed (rate limiting)
  Expected: OR: Lockout period clearly communicated

// ── DEFECT REPORT TEMPLATE ────────────────────────────────────────────

Bug ID: BUG-1042
Title: Login page allows SQL injection — returns 500 Internal Server Error
Severity: Critical
Priority: P1
Status: New
Reported By: Riya Mehta
Reported On: 2026-03-15
Assigned To: Dev Team
Build Version: v2.4.1
Environment: Staging | Chrome 123 | Windows 11

Description:
Entering SQL injection payload in the email field causes a 500 Internal
Server Error, exposing a database error message in the response.
This indicates the email input is not sanitized before database query.

Steps to Reproduce:
  1. Navigate to https://staging.myapp.com/login
  2. In the Email field, enter: ' OR '1'='1'--
  3. In the Password field, enter: anything
  4. Click the "Sign In" button

Expected Result:
  Application displays an error message like "Invalid email or password"
  and remains on the login page without exposing internal errors.

Actual Result:
  Browser displays: "500 Internal Server Error"
  Response body contains: "ProgrammingError: syntax error at or near 'OR'"
  Stack trace is partially visible in the response.

Impact:
  CRITICAL security vulnerability — exposes database technology and
  error details; potential for data extraction via SQL injection.

Attachments:
  - screenshot_login_sqli_500.png
  - network_response_har.json`,
        renderCycle: [
            "Requirements Analysis → identify testable conditions and ambiguities",
            "Test Planning → define scope, strategy, schedule, entry/exit criteria",
            "Test Case Design → write step-by-step test cases with expected results",
            "Environment Setup → configure test data, browser, application version",
            "Test Execution → execute cases, compare actual vs expected, log defects",
            "Defect Reporting → log with reproduction steps, severity, priority, evidence",
            "Retest & Regression → verify fixes, check for side effects in related areas",
            "Test Closure → prepare test summary report, capture metrics, sign off",
        ],
        closingNote:
            "This eight-phase testing cycle is the backbone of every software quality engagement — from a two-person startup's weekend release to a TCS delivery project with a 50-person QA team. Once you can execute this cycle for any feature — login, payment, search, data export — you understand manual testing. Everything else — exploratory testing, test management tools, API testing, mobile testing — is depth within one phase of this fundamental cycle.",
    },

    // ── SECTION 4: CORE CONCEPTS ─────────────────────────────────────
    coreConcepts: [
        {
            id: "sdlc-stlc",
            number: "4.1",
            title: "SDLC, STLC, and Where Testing Fits",
            icon: "🔄",
            color: "blue",
            intro:
                "The Software Development Life Cycle (SDLC) is the structured process through which software is conceived, designed, built, tested, deployed, and maintained. The Software Testing Life Cycle (STLC) is the testing-specific subset — the phases a QA team goes through to plan, design, execute, and close testing on a software release. Understanding both cycles and where testing activities fit is foundational knowledge for any QA professional. The most important insight: testing does not begin when development ends — it begins when requirements are written.",
            code: `SDLC PHASES AND QA ACTIVITIES AT EACH PHASE
═══════════════════════════════════════════════════════════════

Phase 1: Requirements Gathering
  Dev Activity:  Business analysts capture user stories, FRDs, BRDs
  QA Activity:   Requirements review — identify ambiguities, missing scenarios,
                 untestable requirements, conflicting specifications
  QA Output:     Requirements Traceability Matrix (RTM) — maps each
                 requirement to at least one test case

Phase 2: System Design
  Dev Activity:  Architecture design, database schema, API contracts
  QA Activity:   Test planning begins — define scope, risk assessment,
                 test environment requirements, test types needed
  QA Output:     Test Plan document, test environment specification

Phase 3: Implementation (Development)
  Dev Activity:  Code written, unit tests written by developers
  QA Activity:   Test case design and review, test data preparation,
                 test environment setup, smoke test scripts ready
  QA Output:     Test Cases (in test management tool), test data sets

Phase 4: Testing
  Dev Activity:  Bug fixing, code reviews
  QA Activity:   Test execution: smoke → functional → regression →
                 integration → UAT → performance smoke
  QA Output:     Defect reports, daily test status, test execution report

Phase 5: Deployment
  Dev Activity:  Release to production
  QA Activity:   Sanity testing in production (smoke test on live),
                 monitor for production defects
  QA Output:     Go/No-Go recommendation, post-deployment test report

Phase 6: Maintenance
  Dev Activity:  Bug fixes, feature enhancements
  QA Activity:   Regression testing for each patch/hotfix
  QA Output:     Regression test report, updated test cases

═══════════════════════════════════════════════════════════════
STLC — THE TESTING LIFE CYCLE IN DETAIL

  1. Requirement Analysis
     - Study requirements, user stories, wireframes
     - Identify testable and non-testable items
     - Raise clarification questions (RTM preparation)

  2. Test Planning
     - Define: scope, objectives, approach, resources
     - Risk analysis: what could go wrong? What are high-risk areas?
     - Schedule, entry criteria, exit criteria, sign-off process
     - Output: Test Plan document

  3. Test Case Development
     - Write test cases for each requirement
     - Design: equivalence classes, boundary values, decision tables
     - Prepare test data, test scripts
     - Review test cases with peers and developers
     - Output: Test Cases in JIRA/TestRail/Zephyr

  4. Environment Setup
     - Configure test servers, browsers, devices
     - Load test data (user accounts, products, orders)
     - Verify environment matches test plan specification
     - Output: Environment readiness report

  5. Test Execution
     - Execute test cases in priority order (smoke → functional → regression)
     - Log actual results vs expected
     - Raise defects for all failures
     - Update test case status (Pass/Fail/Blocked/Skipped)
     - Output: Test execution report, defect list

  6. Test Cycle Closure
     - Defect metrics: opened/closed/reopen rate
     - Test coverage: % requirements tested
     - Test summary report
     - Lessons learned
     - Output: Test Closure Report

═══════════════════════════════════════════════════════════════
WATERFALL vs AGILE TESTING

  Waterfall:
    - Testing phase comes AFTER development is complete
    - Testers receive a completed build to test
    - Long test cycles (weeks to months)
    - Heavy documentation before testing begins

  Agile (Scrum):
    - Testing happens IN each 2-week sprint alongside development
    - Testers are members of the scrum team
    - Test cases written from user stories in sprint planning
    - Definition of Done includes: code + tests passed + no critical bugs
    - Daily standups: testers report blockers and progress
    - Sprint review: testers demonstrate tested features`,
            usage:
                "Understanding SDLC and STLC is the first question in almost every manual testing interview. Interviewers use it to assess whether you understand that testing is a process with phases, not just 'clicking on the application'. Being able to explain where testing fits in a scrum sprint — writing test cases from user stories in sprint planning, executing during the sprint, and contributing to the Definition of Done — shows you are a modern QA professional, not a waterfall-era tester.",
            mistake:
                "Believing that testing only starts after development is complete. In agile teams, testers participate in sprint planning to understand requirements, write test cases during development (so they're ready when code is complete), and execute tests within the same sprint. A tester who waits for developers to 'finish' before starting any testing activity is the most common source of sprint velocity problems in scrum teams.",
        },
        {
            id: "testing-types",
            number: "4.2",
            title: "Types of Testing — The Complete Taxonomy",
            icon: "🗂️",
            color: "purple",
            intro:
                "Manual testing is not one activity — it is a family of distinct testing types, each with a different objective, scope, and technique. A manual tester who can only execute scripted functional test cases is employable. A manual tester who understands when to apply functional, regression, exploratory, boundary, usability, compatibility, integration, and smoke testing — and why each matters — is a senior QA professional. This taxonomy is the most tested area in QA interviews at every level.",
            code: `MANUAL TESTING TYPES — DEFINITIONS, PURPOSE, AND EXAMPLES
═══════════════════════════════════════════════════════════════

FUNCTIONAL TESTING
  What:    Verify the application does WHAT it is supposed to do
           per the functional requirements and user stories
  When:    During test execution phase after a feature is built
  Example: For a login feature — test that valid credentials grant access,
           invalid credentials are rejected, and the forgot password link works

REGRESSION TESTING
  What:    Verify that new code changes have NOT broken previously
           working functionality in other parts of the application
  When:    After every code change, bug fix, or new feature deployment
  Why:     Developers modifying the payment module could accidentally
           break the cart or the profile update feature
  Types:
    - Full regression: run all test cases (used for major releases)
    - Partial regression: run impacted test cases (used for patches)
    - Smoke regression: run critical path tests (used for daily builds)

SMOKE TESTING (aka Build Verification Testing)
  What:    Quick sanity check — does the build even work at a basic level?
           Typically 10–15 critical test cases executed in 30 minutes
  When:    When a new build arrives in the test environment
  Purpose: If smoke tests fail, reject the build; don't waste time on
           full testing of a fundamentally broken build
  Example: Can users login? Can they view the home page? Can they search?

SANITY TESTING
  What:    Focused subset of regression testing on a specific area
           that was changed or fixed — NOT the whole application
  When:    After a specific bug fix is deployed to verify the fix works
           without running the full regression suite
  Difference from Smoke: Sanity = specific area; Smoke = overall application

EXPLORATORY TESTING
  What:    Simultaneous test design and execution — the tester explores
           the application freely, using judgment and curiosity to find
           defects not covered by scripted test cases
  When:    When requirements are incomplete, for new features, for
           release validation alongside scripted testing
  Technique: Time-boxed sessions (60-90 min), charter-based exploration
             ("explore the checkout flow with coupon codes and focus on
             edge cases"), session notes document findings
  Why critical: Finds 30-40% of defects that scripted testing misses

BOUNDARY VALUE ANALYSIS (BVA)
  What:    Test at the boundaries of valid input ranges where defects
           cluster — the exact minimum, exact maximum, just below minimum,
           just above minimum, just below maximum, just above maximum
  Example: Age field that accepts 18-65:
    - Invalid: 17 (just below min) → should reject
    - Valid:   18 (exact min)      → should accept
    - Valid:   65 (exact max)      → should accept
    - Invalid: 66 (just above max) → should reject
    - Invalid: 0, -1               → should reject
    - Valid:   40 (middle)         → should accept

EQUIVALENCE PARTITIONING (EP)
  What:    Divide valid and invalid input ranges into partitions where
           all values in a partition behave the same — test one value
           from each partition instead of all possible values
  Example: Username length 5-20 characters:
    Partition 1 (invalid, too short): 1-4 chars → test: 3 chars
    Partition 2 (valid):              5-20 chars → test: 12 chars
    Partition 3 (invalid, too long):  21+ chars  → test: 25 chars

INTEGRATION TESTING
  What:    Test the interaction between two or more components/modules
           that were individually tested — verify data flows correctly
           between them
  Example: Test that when a user completes checkout (frontend → backend API
           → payment gateway → order DB), the order is created, email is sent,
           and inventory is decremented — all in one end-to-end scenario

USABILITY TESTING
  What:    Evaluate whether real users can use the application intuitively,
           efficiently, and without confusion
  Focus:   Navigation clarity, error message helpfulness, form labeling,
           mobile responsiveness, accessibility for different user types
  Example: Can a 60-year-old user with no tech background complete a
           medical appointment booking on a mobile device without help?

COMPATIBILITY TESTING
  What:    Verify the application works correctly across different browsers,
           operating systems, screen sizes, and devices
  Matrix example for a web app:
    Browsers: Chrome (latest), Firefox (latest), Safari (latest), Edge (latest)
    OS:       Windows 11, macOS 14, Ubuntu 22.04
    Mobile:   iOS Safari, Android Chrome
    Screen:   1920x1080, 1366x768, 375x667 (mobile), 768x1024 (tablet)

USER ACCEPTANCE TESTING (UAT)
  What:    Business stakeholders/end users verify the system meets
           business requirements before go-live — NOT finding technical bugs
           but validating business scenarios
  Who:     Product owner, business analysts, representative end users
           (not the development team)
  Gate:    UAT sign-off is typically required before production deployment`,
            usage:
                "Interview panels at every level ask 'what is the difference between smoke and sanity testing?' and 'explain boundary value analysis with an example'. Having crisp, concrete answers to these questions — with real examples — is what separates candidates who have memorized definitions from candidates who actually understand testing. Apply BVA and EP when designing test cases for any numeric, date, or text length input field — it ensures you test the most defect-prone input ranges without testing every possible value.",
            mistake:
                "Treating regression testing as 'running all old test cases' without judgment. Full regression on every change is impractical — a large application may have 2,000 test cases. Instead, perform risk-based regression: identify which test cases cover functionality that shares code with the changed module, which cover critical user paths that must never break, and which are most likely to be affected. This risk-based selection is what experienced QA leads do, and explaining it in an interview demonstrates senior thinking.",
        },
        {
            id: "test-case-writing",
            number: "4.3",
            title: "Test Case Writing — The Core QA Skill",
            icon: "📝",
            color: "emerald",
            intro:
                "Writing good test cases is the most critical and most differentiated skill in manual testing. A poorly written test case — ambiguous steps, missing preconditions, vague expected results — produces inconsistent execution results and fails to find defects. A well-written test case is a precise, repeatable scientific experiment: same inputs, same preconditions, same execution, always produces a clear Pass or Fail. The discipline to write test cases at this level of precision is what makes a manual tester genuinely valuable to a development team.",
            code: `TEST CASE WRITING — COMPLETE TEMPLATE AND EXAMPLES
═══════════════════════════════════════════════════════════════

MANDATORY FIELDS IN A TEST CASE:
  Test Case ID     — Unique identifier (TC_MODULE_FEATURE_NUMBER)
  Test Case Title  — Clear one-line description of what is tested
  Module/Feature   — Which part of the application
  Priority         — High / Medium / Low (business impact)
  Test Type        — Functional / Regression / Negative / Boundary
  Preconditions    — State the application MUST be in before execution
  Test Steps       — Numbered, exact, atomic actions (what to do)
  Test Data        — Exact values to input (not vague like "valid email")
  Expected Result  — Specific, observable, verifiable outcome
  Actual Result    — Filled during execution
  Status           — Pass / Fail / Blocked / Skipped
  Executed By      — Tester's name
  Executed On      — Date
  Build Version    — Application version being tested

═══════════════════════════════════════════════════════════════
EXAMPLE: E-COMMERCE ADD TO CART — COMPLETE TEST SUITE

TC_CART_001: Add single in-stock product to cart (Happy Path)
  Priority: High | Type: Functional
  Preconditions:
    - User is logged in as: carttest@example.com / Cart@1234
    - Product "Laptop X1" (ID: PROD-001) has stock qty: 50
    - User's cart is currently empty
  Test Steps:
    1. Navigate to https://staging.shop.com/products
    2. Search for "Laptop X1" in the search bar
    3. Click on the "Laptop X1" product card
    4. Verify the product detail page shows: Price ₹45,000, Stock: In Stock
    5. Click the "Add to Cart" button
    6. Observe the cart icon in the navigation bar
    7. Click the cart icon to view the cart
  Expected Result:
    - Cart icon badge shows count "1"
    - Cart page shows: Laptop X1, Qty: 1, Price: ₹45,000
    - Total displayed: ₹45,000
    - Success message: "Laptop X1 added to your cart" shown
    - Product stock (in inventory) reduces from 50 to 49 (verify via admin panel)

TC_CART_002: Add product that is out of stock
  Priority: High | Type: Negative
  Preconditions:
    - Product "Old Monitor Z" (ID: PROD-099) has stock qty: 0
    - User is logged in
  Test Steps:
    1. Navigate to product detail page for "Old Monitor Z"
    2. Observe the "Add to Cart" button
  Expected Result:
    - "Add to Cart" button is DISABLED (greyed out, not clickable)
    - "Out of Stock" label displayed near the button
    - Cart icon count does NOT change

TC_CART_003: Add quantity greater than available stock
  Priority: High | Type: Boundary
  Preconditions:
    - Product "USB Hub" (ID: PROD-042) has stock qty: 5
    - User is logged in, cart is empty
  Test Steps:
    1. Navigate to "USB Hub" product detail page
    2. In the quantity selector, change quantity to 6
    3. Click "Add to Cart"
  Expected Result:
    - Error message: "Only 5 units available. Please reduce quantity."
    - Cart is NOT updated
    - Quantity selector resets to maximum available (5) OR shows error

TC_CART_004: Add same product twice — verify quantity aggregation
  Priority: Medium | Type: Functional
  Preconditions: User logged in, cart empty, "Mouse M200" has stock: 10
  Test Steps:
    1. Add "Mouse M200" to cart (qty: 1)
    2. Navigate back to "Mouse M200" product page
    3. Click "Add to Cart" again
    4. View cart
  Expected Result:
    - Cart shows "Mouse M200" ONCE with quantity: 2 (NOT two separate entries)
    - Cart icon badge shows: 2
    - Total price: 2 × unit price

TC_CART_005: Verify cart persists after user logs out and logs back in
  Priority: Medium | Type: Functional (Data Persistence)
  Preconditions: User logged in, "Laptop X1" added to cart
  Test Steps:
    1. Verify cart contains "Laptop X1"
    2. Click logout
    3. Log back in with same credentials
    4. Navigate to cart
  Expected Result:
    - Cart still contains "Laptop X1" with original quantity
    - Cart was persisted on the server, not just in browser session

TC_CART_006: Guest user adds product, registers — cart preserved
  Priority: Medium | Type: Integration
  Preconditions: User is NOT logged in (guest session)
  Test Steps:
    1. Add "Laptop X1" to cart as a guest
    2. Click Register on the login prompt
    3. Complete registration with new email
    4. View cart after registration
  Expected Result:
    - Cart items from guest session are preserved after registration
    - User doesn't lose cart contents by creating an account

═══════════════════════════════════════════════════════════════
TEST CASE QUALITY CHECKLIST:
  ✅ Each step tests ONE thing (atomic)
  ✅ Preconditions are specific and achievable
  ✅ Test data uses exact values (not "enter a valid email")
  ✅ Expected result is verifiable and specific (not "works correctly")
  ✅ Negative tests explicitly state what should NOT happen
  ✅ Steps are numbered and sequential
  ✅ Any tester unfamiliar with the feature can execute this case`,
            usage:
                "Interviewers frequently ask candidates to write test cases for a login page, a Google search box, or an ATM machine on the spot. The quality of your on-the-spot test case writing is one of the highest-signal demonstrations of QA thinking. Practice writing complete test case sets (positive, negative, boundary, edge cases) for everyday features before interviews — not just listing test scenarios but writing complete test cases with exact test data and specific expected results.",
            mistake:
                "Writing expected results as 'it should work correctly' or 'the page should load'. These are not verifiable. A test case with a vague expected result cannot produce a definitive Pass or Fail — the tester has to decide if 'worked correctly' is met, making test execution subjective and inconsistent. Every expected result must be specific: 'User is redirected to /dashboard', 'Error message: Invalid email or password appears below the login button', 'Cart badge count increments to 3'. Specific expected results are what turn a test case into a scientific experiment.",
        },
        {
            id: "defect-lifecycle",
            number: "4.4",
            title: "Defect Reporting and the Defect Life Cycle",
            icon: "🐛",
            color: "red",
            intro:
                "A defect that cannot be reproduced is a defect that won't get fixed. A defect with an unclear impact severity won't get prioritized. A defect with no screenshot or supporting evidence will be disputed by developers. Writing excellent defect reports — clear reproduction steps, accurate severity and priority classification, compelling evidence — is the skill that determines how efficiently a development team fixes bugs. A manual tester who writes clear defect reports accelerates the entire development team's velocity. The defect life cycle defines the states a defect moves through from discovery to resolution.",
            code: `DEFECT REPORTING — COMPLETE GUIDE
═══════════════════════════════════════════════════════════════

DEFECT SEVERITY vs PRIORITY — The Critical Distinction:

  SEVERITY: Technical impact on the system (HOW BAD is the bug?)
    S1 - Critical:  Application crash, data loss, security breach,
                    complete feature non-functional, no workaround
    S2 - Major:     Core feature broken but workaround exists,
                    significant data corruption, wrong calculation results
    S3 - Minor:     Non-critical feature broken, cosmetic issues causing
                    confusion, incorrect label/message, partial functionality
    S4 - Trivial:   Spelling errors, UI misalignment (1-2px), cosmetic issues
                    that don't affect usability

  PRIORITY: Business urgency to fix (HOW SOON should it be fixed?)
    P1: Must fix before release — blocks testing or release criteria
    P2: Must fix in current sprint/release
    P3: Can be fixed in next release
    P4: Fix when time permits

  IMPORTANT COMBINATIONS:
    High Severity + High Priority: Payment crashes → fix NOW
    High Severity + Low Priority:  Crash in rarely-used admin report
                                   → fix but not urgent
    Low Severity + High Priority:  CEO's name misspelled on homepage
                                   → urgent but low technical impact
    Low Severity + Low Priority:   Tooltip typo in settings → backlog

═══════════════════════════════════════════════════════════════
PERFECT DEFECT REPORT — ANNOTATED EXAMPLE

Bug ID:    BUG-2847
Title:     [Cart] Total price shows ₹0 when applying 100% discount coupon
           ↑ Module in brackets, then precise description of the problem

Severity:  S1 - Critical
Priority:  P1 - Must fix before release
Status:    New
Reporter:  Anjali Singh
Date:      2026-03-18
Build:     v3.1.2-staging
Environment: Chrome 123 / Windows 11 / Staging (https://staging.shop.com)

Description:
  When a 100% discount coupon (FREEDAY) is applied to a cart containing
  any product, the total price correctly shows ₹0.00 — however, the order
  can be successfully placed WITHOUT any payment being collected. This
  means real orders are being created and fulfilled without revenue.

Steps to Reproduce:
  1. Login as: testuser@example.com / Test@1234
  2. Add product "Laptop X1" (₹45,000) to cart
  3. Proceed to checkout
  4. In the "Coupon Code" field, enter: FREEDAY
  5. Click "Apply Coupon"
  6. Verify: Total now shows ₹0.00
  7. Click "Place Order" button
  8. Observe: Order confirmation page appears with Order ID

Expected Result:
  The 100% discount coupon should not be applicable to all products.
  Either: The coupon should be blocked for products above a threshold
  Or:     The system should prevent placing a ₹0 order for physical goods
  At minimum: The checkout should require payment method validation

Actual Result:
  Order is placed successfully with ₹0.00 payment.
  Order ID: ORD-99201 appears in the order management system as "Confirmed"
  Inventory for "Laptop X1" is decremented from 50 to 49

Impact:
  Revenue loss — any user who knows or discovers this coupon can obtain
  products worth any amount for ₹0. If coupon code leaks to social media,
  company faces unlimited liability.

Attachments:
  - screenshot_01_coupon_applied.png (showing ₹0 total)
  - screenshot_02_order_confirmed.png (showing order ORD-99201)
  - screen_recording_full_flow.mp4 (45-second recording)

Reproducibility: 100% (reproduced 3 times)

═══════════════════════════════════════════════════════════════
DEFECT LIFE CYCLE — STATES AND TRANSITIONS

  NEW          → Tester discovers and logs the defect
  ASSIGNED     → Test Lead/Manager assigns to a developer
  IN PROGRESS  → Developer is actively working on the fix
  FIXED        → Developer marks as fixed, deployed to test environment
  RETEST       → Tester retests the specific defect fix
    ↓ Fix verified?
  CLOSED       → Defect is confirmed fixed, test case passes ✅
    ↓ Fix NOT working?
  REOPENED     → Tester reopens: steps to reproduce, new evidence added

  SPECIAL STATES:
  DEFERRED     → Valid defect, but fix postponed to a future release
  DUPLICATE    → Same issue already reported in another bug ID
  NOT A BUG    → Developer explains why this is expected behavior
                 (Tester must either accept with explanation OR
                  escalate if they disagree — include requirement reference)
  CANNOT REPRODUCE → Developer cannot reproduce; tester provides
                     more detailed environment/data information

═══════════════════════════════════════════════════════════════
DEFECT METRICS — What Good QA Teams Track:
  Defect Discovery Rate:   New bugs found per day/sprint
  Defect Removal Rate:     Bugs closed per day/sprint
  Defect Leakage Rate:     % of defects found in production (should be low!)
  Defect Reopened Rate:    % of fixed bugs reopened (high = poor dev fixes)
  Defect Density:          Defects per test case or per feature area
  Mean Time to Fix:        Average time from New → Closed`,
            usage:
                "When a developer responds 'Cannot Reproduce' to your defect, it is almost always a missing detail in your steps to reproduce — different test data, different environment, different browser. The professional response is to add more precision: exact test data values, exact environment details, a screen recording. Developers who cannot reproduce a defect cannot fix it. Your defect report is a communication artifact — optimize it for the person who needs to act on it, not for the person who wrote it.",
            mistake:
                "Confusing severity with priority, or letting severity dictate priority without business context. A cosmetic typo on a payment confirmation page may be S4 severity but P1 priority if the product launches in 48 hours and the CEO will see it. A data corruption bug in a feature used by 5 internal users may be S1 severity but P3 priority for the current sprint. Always ask 'how urgent is this for the business?' independently of 'how bad is this technically?'",
        },
        {
            id: "test-plan-strategy",
            number: "4.5",
            title: "Test Planning, Test Strategy, and Risk-Based Testing",
            icon: "📋",
            color: "yellow",
            intro:
                "A test plan is not a formality — it is the document that aligns the entire team on what will be tested, what won't be tested, what 'done' means for testing, and what quality gate must be met before release. A test strategy defines the approach at the project or organizational level. Risk-based testing prioritizes testing effort toward the areas most likely to contain critical defects — ensuring that limited testing time is spent most effectively. These are the thinking frameworks that turn a tester into a QA professional.",
            code: `TEST PLAN STRUCTURE — COMPLETE TEMPLATE
═══════════════════════════════════════════════════════════════

Document: Test Plan — E-Commerce Checkout Module v2.0
Project:  MyShop.in
Sprint:   Sprint 23 (March 10–24, 2026)
Author:   Riya Mehta (QA Lead)
Version:  1.2

1. INTRODUCTION AND SCOPE
   In Scope:
   ✅ New checkout flow with Razorpay payment integration
   ✅ Guest checkout (new feature)
   ✅ Coupon code application
   ✅ Order summary and confirmation email
   ✅ Regression: Cart, User account, Order history

   Out of Scope:
   ❌ Payment gateway internals (Razorpay is a black box)
   ❌ Performance/load testing (separate performance test sprint)
   ❌ Admin order management panel (unchanged in this sprint)

2. TEST OBJECTIVES
   - Verify all checkout scenarios complete successfully
   - Verify payment integration processes correctly (sandbox mode)
   - Verify no regression in cart and account functionality
   - Verify checkout works on Chrome, Firefox, Safari, mobile

3. TEST APPROACH
   3.1 Functional Testing:    Manual test cases, priority-ordered
   3.2 Regression Testing:    Run existing cart+account test suite
   3.3 Exploratory Testing:   2 sessions × 90 minutes, charter-based
   3.4 Compatibility Testing: Chrome, Firefox, Safari, Android Chrome
   3.5 API Testing:           Postman test collection for checkout API
   3.6 UAT:                   Product Owner sign-off session

4. RISK ANALYSIS AND RISK-BASED TESTING

   HIGH RISK areas (test first, most thoroughly):
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Risk: Payment amount mismatch (order total ≠ charged amount)
   Likelihood: Medium | Impact: Critical (financial + legal)
   Mitigation: 15+ test cases including boundary values for discounts

   Risk: Order created but payment not captured (revenue loss)
   Likelihood: Low | Impact: Critical
   Mitigation: Test network drop scenarios, partial payment flows

   Risk: Coupon codes misapplied (wrong discount calculated)
   Likelihood: High (new feature) | Impact: High
   Mitigation: Full boundary value and combination testing

   MEDIUM RISK areas:
   ━━━━━━━━━━━━━━━━━
   Risk: Guest checkout creates duplicate accounts
   Risk: Email notifications not sent after order placement
   Risk: Inventory not decremented on successful order

   LOW RISK areas (sanity check only):
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Risk: Static content (terms and conditions link broken)
   Risk: Minor UI alignment on non-critical pages

5. ENTRY CRITERIA (Testing STARTS when:)
   ✅ Developers have deployed build v2.0 to staging environment
   ✅ Smoke test: login, product listing, basic cart — all PASS
   ✅ Test data: 10 test user accounts, 50 test products loaded
   ✅ Razorpay sandbox credentials configured in staging

6. EXIT CRITERIA (Testing DONE when:)
   ✅ 100% of High priority test cases executed
   ✅ 95% of Medium priority test cases executed
   ✅ Zero S1/S2 (Critical/Major) open defects
   ✅ S3/S4 defects: all acknowledged and deferred or fixed
   ✅ All regression test cases pass
   ✅ Product Owner has signed off UAT

7. TEST ENVIRONMENT
   URL:        https://staging.myshop.in
   Database:   Staging PostgreSQL (copy of production schema, synthetic data)
   Payment:    Razorpay Test Mode (cards: 4111 1111 1111 1111)
   Email:      Mailtrap inbox (captures all outgoing emails)
   Browser:    Chrome 123, Firefox 124, Safari 17, Android Chrome 120
   OS:         Windows 11, macOS 14 Sonoma

8. TEST SCHEDULE
   Day 1-2:   Smoke testing → Functional testing (Happy Path)
   Day 3-4:   Negative testing, Boundary testing, Integration tests
   Day 5:     Regression testing (cart, account, order history)
   Day 6:     Compatibility testing (browsers, mobile)
   Day 7:     Exploratory testing sessions
   Day 8:     UAT with Product Owner
   Day 9:     Retest of fixed defects, final regression
   Day 10:    Test closure report, go/no-go decision

9. DEFECT MANAGEMENT
   Tool:         JIRA (project: MYSHOP-QA)
   Severity:     S1 Critical → fix in 24h | S2 Major → fix in 48h
   Priority:     P1 Must-fix → blocks release | P2 → current sprint
   Escalation:   S1 defects go immediately to Dev Lead + PM

10. ROLES AND RESPONSIBILITIES
    QA Lead (Riya Mehta):        Test planning, exploratory testing, metrics
    QA Engineer (Ajay Kumar):    Functional + regression test execution
    QA Engineer (Priya Singh):   API testing, compatibility testing
    Product Owner (Suresh):      UAT execution and sign-off
    Dev Lead (Kiran):            Defect fixes, technical clarification`,
            usage:
                "Test planning is the activity that most distinguishes junior from senior QA professionals. A junior tester receives a test plan and executes it. A senior tester writes the test plan — makes scope decisions, identifies risks, defines exit criteria, and communicates the quality strategy to the whole team. Even if you are not yet in a senior role, understanding what goes into a test plan demonstrates the thinking that leads there.",
            mistake:
                "Writing exit criteria as '100% of all test cases pass'. This is an unachievable standard in real projects — there will always be low-priority deferred defects. Professional exit criteria are risk-based: zero S1/S2 defects open, all high-priority test cases executed, specified coverage metrics met. This is what companies actually use for go/no-go decisions, and being able to articulate it shows production experience.",
        },
        {
            id: "test-management-tools",
            number: "4.6",
            title: "Test Management Tools and Bug Tracking",
            icon: "🛠️",
            color: "teal",
            intro:
                "Professional manual testing is conducted within a toolchain — a test management tool to organize and execute test cases, a bug tracking tool to log and track defects, and a project management tool to coordinate with the development team. Knowing these tools is not optional in 2026 — every QA job description lists them. The most important tools in India's QA industry are JIRA (combined bug tracking and project management), TestRail or Zephyr (test case management), and Postman (API testing). Hands-on practice with these tools is as important as knowing testing concepts.",
            code: `TOOL ECOSYSTEM FOR MANUAL TESTERS IN 2026
═══════════════════════════════════════════════════════════════

TEST MANAGEMENT TOOLS — Organize test cases and track execution
─────────────────────────────────────────────────────────────
JIRA + Zephyr Scale / Zephyr Squad:
  Most common in Indian IT — JIRA for project management,
  Zephyr as a JIRA plugin for test case management
  Key features:
  - Create test cases linked to JIRA user stories
  - Organize test cases into Test Cycles (sprints)
  - Track Pass/Fail status per test execution
  - Generate test execution reports
  - Link defects (bugs) directly to failed test cases

TestRail:
  Dedicated test management tool, very common in product companies
  Key features:
  - Hierarchical test case organization (suites → sections → cases)
  - Test run management with assignment to specific testers
  - Milestones for release tracking
  - Rich reporting: coverage %, pass rate, tester productivity
  - REST API for integration with CI/CD pipelines

Azure DevOps (ADO) Test Plans:
  Common in Microsoft-stack companies and banking clients
  Integrated with Azure Boards (work items) and Azure Repos

Xray (JIRA plugin):
  Similar to Zephyr, common in companies already using JIRA
  Native integration between test cases and JIRA epics/stories

─────────────────────────────────────────────────────────────
BUG TRACKING TOOLS — Report and track defects
─────────────────────────────────────────────────────────────
JIRA:      Most common in India — used for both tickets AND bugs
           Workflow: New → In Progress → Code Review → Testing → Done
           QA creates bug, dev fixes, QA closes in the same JIRA project

Bugzilla:  Open-source, common in older enterprises and some startups
           Classic bug tracker — simpler but less integrated than JIRA

GitHub Issues / GitLab Issues:
           Common in smaller startups and open-source projects
           Integrated directly with the code repository

Azure DevOps Boards:
           Common in enterprise/banking, Microsoft-aligned companies
           Work items, bugs, test cases all in one platform

─────────────────────────────────────────────────────────────
API TESTING TOOL (MUST-KNOW in 2026)
─────────────────────────────────────────────────────────────
Postman:
  THE standard tool for API testing — manual testers increasingly
  expected to test REST APIs directly, not just through UI

  Key skills:
  - Create a request: method (GET/POST/PUT/DELETE), URL, headers
  - Request body: JSON payload for POST/PUT requests
  - Authorization: Bearer token, API key
  - Response validation: status code, JSON body assertions
  - Collections: group related API requests
  - Environment variables: switch between dev/staging/prod URLs
  - Run collections: execute all requests in sequence

  Example: Testing the POST /api/users/login endpoint:
  Method:  POST
  URL:     https://staging.myapp.com/api/auth/login
  Headers: Content-Type: application/json
  Body:    {
             "email": "testuser@example.com",
             "password": "Test@1234"
           }
  Tests (Postman test scripts):
    pm.test("Status is 200", () => pm.response.to.have.status(200));
    pm.test("Response has token", () => {
      const body = pm.response.json();
      pm.expect(body).to.have.property("access_token");
    });

─────────────────────────────────────────────────────────────
DATABASE TESTING TOOL (IMPORTANT FOR INTERMEDIATE+)
─────────────────────────────────────────────────────────────
SQL + any DB client (DBeaver, pgAdmin, MySQL Workbench):
  After UI testing, verify data was correctly saved to database

  Example verifications after placing an order:
  -- Verify order created in DB
  SELECT * FROM orders WHERE user_id = 42 ORDER BY created_at DESC LIMIT 1;
  -- Verify order items correct
  SELECT oi.*, p.name, p.price FROM order_items oi
  JOIN products p ON oi.product_id = p.id
  WHERE oi.order_id = 99201;
  -- Verify inventory decremented
  SELECT stock FROM products WHERE id = 1 AND stock = 49;
  -- Verify payment record created
  SELECT * FROM payments WHERE order_id = 99201 AND status = 'completed';

─────────────────────────────────────────────────────────────
BROWSER DEVELOPER TOOLS (Every manual tester must know):
  F12 / Right-click → Inspect:
  - Console: JavaScript errors (red text) — log every error you see
  - Network tab: API calls, response codes, response payloads
    → Look for 4xx/5xx HTTP errors when features fail
    → Verify correct data is being sent to the server
  - Application tab: Cookies, localStorage, sessionStorage
    → Verify session tokens are set after login
    → Verify data is cleared after logout
  - Elements: Inspect HTML to understand IDs/classes for automation prep

─────────────────────────────────────────────────────────────
SCREEN CAPTURE TOOLS (Non-negotiable for defect evidence):
  Snipping Tool (Windows), Command+Shift+4 (Mac): Screenshots
  ShareX (Windows), Kap (Mac): Screen recording with annotations
  Loom: Record and share screen videos with a link — great for bugs
  JIRA built-in: Screenshot paste directly into bug report`,
            usage:
                "JIRA and Postman proficiency are the two tools most likely to be asked about in QA interviews in 2026. Create a free JIRA account at atlassian.com, create a project, log some mock test cases as JIRA tickets, and log some mock defects. Create a free Postman account, import a public API (JSONPlaceholder, reqres.in, or a sample API), and practice sending GET/POST requests, checking status codes, and writing basic Postman tests. Practical tool familiarity is what separates a candidate who has 'studied testing' from one who has 'done testing'.",
            mistake:
                "Logging defects without screenshots or screen recordings. Every defect logged without visual evidence will be delayed — developers will ask for more information before investigating, adding a communication round-trip that slows down the defect fix cycle. Always attach a screenshot for UI bugs, a screen recording for multi-step flows, and a Postman response screenshot for API bugs. The 30 seconds it takes to capture evidence saves 30 minutes of developer back-and-forth.",
        },
        {
            id: "api-testing-manual",
            number: "4.7",
            title: "API Testing for Manual Testers",
            icon: "🔌",
            color: "orange",
            intro:
                "Modern applications are API-first — the frontend (React, Angular, mobile app) communicates with the backend through REST APIs. A manual tester who can only test through the UI is testing a fraction of the application. API testing with Postman validates the backend independently of the frontend — catching data validation issues, authorization failures, error handling gaps, and business logic defects that the UI never exposes. In 2026, API testing proficiency is expected of mid-level manual testers and is explicitly asked about in most QA interviews.",
            code: `API TESTING WITH POSTMAN — PRACTICAL GUIDE FOR MANUAL TESTERS
═══════════════════════════════════════════════════════════════

HTTP FUNDAMENTALS FOR TESTERS:
  Methods:
    GET     → Retrieve data (read-only, no body)
    POST    → Create new resource (has request body)
    PUT     → Replace entire resource (has request body)
    PATCH   → Update part of a resource (has request body)
    DELETE  → Remove a resource

  Status Codes to know:
    200 OK             → Success (GET, PUT, PATCH)
    201 Created        → Resource created (POST)
    204 No Content     → Success, no body (DELETE)
    400 Bad Request    → Client sent invalid data
    401 Unauthorized   → Not authenticated (no/invalid token)
    403 Forbidden      → Authenticated but not authorized
    404 Not Found      → Resource doesn't exist
    409 Conflict       → Duplicate resource (email already exists)
    422 Unprocessable  → Validation failed
    500 Server Error   → Backend bug (should never reach production)

═══════════════════════════════════════════════════════════════
POSTMAN TEST SCENARIOS — E-COMMERCE API TEST COLLECTION

Collection: MyShop API Tests
Base URL Variable: {{base_url}} = https://staging.myshop.in

── AUTHENTICATION TESTS ─────────────────────────────────────
Request: Register New User
  Method:  POST
  URL:     {{base_url}}/api/auth/register
  Body:    { "name": "Test User", "email": "{{$randomEmail}}",
             "password": "Test@1234" }
  Tests:
    → Status: 201
    → Response has: id, name, email, access_token
    → Password NOT in response body
    → Duplicate email → 409 Conflict

Request: Login
  Method:  POST
  URL:     {{base_url}}/api/auth/login
  Body:    { "email": "testuser@example.com", "password": "Test@1234" }
  Tests:
    → Status: 200
    → Response: { access_token: string, token_type: "bearer", user: {...} }
    → Save token: pm.environment.set("auth_token", pm.response.json().access_token)
  Negative Tests:
    → Wrong password → 401, message: "Invalid credentials"
    → Non-existent email → 401, same message (no user enumeration!)
    → Empty password field → 400/422

── PRODUCT API TESTS ─────────────────────────────────────────
Request: Get Products List
  Method:  GET
  URL:     {{base_url}}/api/products?page=1&limit=12&category=electronics
  Headers: Authorization: Bearer {{auth_token}}
  Tests:
    → Status: 200
    → Response has: data array, pagination object
    → Each product has: id, name, price, stock, category
    → Price is always a number (not a string)
    → All returned products are in 'electronics' category
    → Pagination: total, page, pages fields present

Request: Get Single Product
  Method:  GET
  URL:     {{base_url}}/api/products/PROD-001
  Tests:
    → Status: 200
    → Returns correct product data
    → Invalid ID: /api/products/nonexistent → 404

── CART AND ORDER TESTS ──────────────────────────────────────
Request: Add to Cart
  Method:  POST
  URL:     {{base_url}}/api/cart
  Headers: Authorization: Bearer {{auth_token}}
  Body:    { "product_id": "PROD-001", "quantity": 2 }
  Tests:
    → Status: 200 or 201
    → Cart updated with correct quantity
    → Exceeding stock qty → 422/400 with message
    → Without auth token → 401

Request: Place Order
  Method:  POST
  URL:     {{base_url}}/api/orders
  Headers: Authorization: Bearer {{auth_token}}
  Body:    { "cart_id": "{{cart_id}}", "payment_method": "razorpay",
             "shipping_address": {...} }
  Tests:
    → Status: 201
    → Response: { order_id, status: "pending", total, items }
    → Order exists in DB (verify via GET /api/orders/{{order_id}})
    → Inventory decremented (verify product stock reduced)
    → Confirmation email sent (verify Mailtrap inbox)
    → Without auth → 401

── AUTHORIZATION TESTS (Critical for security) ──────────────
Request: Access another user's order
  Method:  GET
  URL:     {{base_url}}/api/orders/ORDER-999  [order belongs to User B]
  Headers: Authorization: Bearer {{user_a_token}}
  Tests:
    → Status: 403 (Forbidden) — NOT 200 (data leak)
    → Error message: "Not authorized to access this resource"

Request: Delete a product (requires admin)
  Method:  DELETE
  URL:     {{base_url}}/api/products/PROD-001
  Headers: Authorization: Bearer {{regular_user_token}}
  Tests:
    → Status: 403 — regular user cannot delete products

═══════════════════════════════════════════════════════════════
WHAT TO CHECK IN EVERY API RESPONSE:
  ✅ Correct HTTP status code
  ✅ Response body structure matches API contract
  ✅ Correct data values (not just structure)
  ✅ Sensitive fields excluded (password, internal IDs)
  ✅ Authentication required on protected endpoints
  ✅ Authorization: users can only access their own data
  ✅ Error messages are helpful but not overly informative
  ✅ Consistent date/time format (ISO 8601: 2026-03-15T10:30:00Z)`,
            usage:
                "The authorization tests (can User A access User B's data?) are the most important and most commonly missed tests in API testing. Testers who only test 'happy path' API calls miss IDOR (Insecure Direct Object Reference) vulnerabilities — the most common API security defect class. Always test what happens when you try to access another user's resources with your own auth token. If you get 200 instead of 403, it is a critical security defect.",
            mistake:
                "Only testing API endpoints through the UI and assuming UI validation covers all cases. The UI may have validation that prevents entering a negative price — but the API may accept it directly. Always test the API independently of the UI. Any user with minimal technical knowledge can bypass UI validation using Postman or browser DevTools and call your API directly with invalid data. The API must validate independently.",
        },
        {
            id: "agile-testing",
            number: "4.8",
            title: "Agile Testing — QA in Scrum Teams",
            icon: "🔁",
            color: "blue",
            intro:
                "The majority of software teams in India's product and startup ecosystem in 2026 work in agile frameworks — primarily Scrum with 2-week sprints. Agile testing is fundamentally different from waterfall testing: testers are embedded in cross-functional scrum teams, write test cases from user stories in sprint planning, test in parallel with development during the sprint, and own the quality of a feature before it moves to the Definition of Done. Understanding agile testing practices, ceremonies, and the tester's role in a scrum team is the difference between a candidate who knows testing theory and one who can contribute to a team from day one.",
            code: `AGILE TESTING — THE TESTER'S ROLE IN SCRUM
═══════════════════════════════════════════════════════════════

SCRUM CEREMONIES AND QA INVOLVEMENT:
───────────────────────────────────────
Sprint Planning (Day 1 of sprint):
  QA activities:
  - Review user stories and acceptance criteria with the team
  - Ask clarifying questions: "What happens if the coupon is expired?"
  - Contribute effort estimates for testing tasks
  - Identify dependencies: "I'll need test data created in staging"
  - Flag stories with unclear acceptance criteria before development begins
  QA deliverable: Testing tasks added to the sprint backlog

Daily Standup (Every day, 15 min):
  QA reports:
  - What did I test yesterday?
  - What will I test today?
  - Any blockers? (Build deployment delayed, environment down, dev hasn't
    handed off a feature I'm waiting to test)
  Best practice: Block stories in JIRA that are 'In Testing' with clear
  status updates — never let testing become a black box to the team

Sprint Review / Demo (End of sprint):
  QA role:
  - Present test results for each story: cases executed, pass/fail, defects
  - May demo tested features to stakeholders
  - Confirm which stories meet the Definition of Done

Sprint Retrospective (End of sprint):
  QA contributes: What testing processes worked? What caused delays?
  Examples: "Test data setup took 2 days — we need a data preparation plan"
            "Defects found late in sprint → testers need stories earlier"

═══════════════════════════════════════════════════════════════
DEFINITION OF DONE (DoD) — QA's Quality Gate

A user story is only 'Done' when ALL of these are true:
  ✅ Code written and peer-reviewed
  ✅ Unit tests written by developer and passing
  ✅ Feature deployed to staging environment
  ✅ All acceptance criteria covered by test cases
  ✅ All test cases executed (Pass)
  ✅ No open S1/S2 defects for this story
  ✅ S3/S4 defects acknowledged and JIRA tickets created
  ✅ Test cases added to regression suite
  ✅ QA sign-off given in JIRA story

═══════════════════════════════════════════════════════════════
SHIFT-LEFT TESTING — Test Earlier, Fix Cheaper

Traditional waterfall approach:
  Requirements → Design → Development → [TESTING] → Release
  → Defects found LATE → Expensive to fix

Shift-left approach (what agile teams do):
  [TEST THINKING STARTS HERE]
        ↓
  Requirements Review → QA flags ambiguities in requirements
  Design Review       → QA reviews wireframes for testability
  Development         → QA writes test cases while dev codes
  Code Complete       → Testing starts IMMEDIATELY
  → Defects found EARLY → Cheap to fix

Practical shift-left activities:
  - Review requirements and wireframes with QA lens before dev starts
  - Write test cases from user stories DURING the sprint (not after)
  - Collaborate with developers during development — ask "how are you
    implementing this edge case?" instead of discovering it in testing
  - Participate in Three Amigos meetings (BA + Dev + QA) to align on
    acceptance criteria before any code is written

═══════════════════════════════════════════════════════════════
USER STORY ANALYSIS — QA's Pre-Testing Checklist

For every user story before testing begins:
  Story: "As a user, I can reset my password via email"

  Functional questions:
  ✅ What email is sent? Who is the sender?
  ✅ How long is the reset link valid? (1 hour? 24 hours?)
  ✅ What happens if the user clicks the link after expiry?
  ✅ Can the same reset link be used twice?

  Security questions:
  ✅ What if a user requests reset for an email that doesn't exist?
     (Should NOT confirm whether email is registered — enumeration!)
  ✅ Is the reset token random and unguessable?
  ✅ Is the old password invalidated immediately on reset?

  UX questions:
  ✅ What happens to active sessions when password is reset?
     (Should they be invalidated for security?)
  ✅ Is there a success message after submitting the reset email form?
  ✅ What does the reset email look like? Mobile-friendly?

  Edge cases:
  ✅ User requests reset twice — which link works?
  ✅ User doesn't receive email — is there a "resend" option?
  ✅ Reset email ends up in spam — any workaround documented?`,
            usage:
                "The Three Amigos meeting (Business Analyst + Developer + QA discussing a user story before development starts) is where the most valuable QA contribution happens — preventing defects from being built in the first place. A tester who participates actively in requirements discussions and catches ambiguities before development begins is worth more to the team than a tester who catches the same issues after two weeks of development. Mention this in interviews — it demonstrates senior QA thinking.",
            mistake:
                "Waiting for developers to 'hand off' features for testing. In a well-functioning scrum team, testers are proactive — they write test cases as soon as a story is groomed, prepare test data before the developer finishes coding, and are ready to test the day a feature is deployed to staging. A tester who only starts their testing process after a developer says 'it's done' adds avoidable delay to every sprint and is the most common cause of test-crunch at the end of sprints.",
        },
        {
            id: "mobile-browser-testing",
            number: "4.9",
            title: "Mobile Testing and Browser Compatibility",
            icon: "📱",
            color: "purple",
            intro:
                "India has over 700 million smartphone users — the majority of Indians access digital services primarily on mobile devices. Mobile testing and browser compatibility testing are not optional extras for Indian QA teams; they are core responsibilities. A payment flow that works on Chrome desktop but fails on Safari mobile, or a form that submits incorrectly on Android Chrome version 120, can affect millions of users. Mobile testing encompasses functional testing on real devices, responsive design verification, and app-specific behaviors like push notifications, background refresh, and offline mode.",
            code: `MOBILE AND COMPATIBILITY TESTING — PRACTICAL GUIDE
═══════════════════════════════════════════════════════════════

BROWSER COMPATIBILITY TEST MATRIX (Web Applications)
─────────────────────────────────────────────────────
Priority 1 — Must test on every release:
  Chrome (latest)    - Windows 11, macOS 14, Android, iOS
  Safari (latest)    - macOS 14, iOS 17 (iPhone, iPad)
  Firefox (latest)   - Windows 11, macOS 14
  Samsung Internet   - Android (very common in India on Samsung devices)
  Edge (latest)      - Windows 11

Priority 2 — Test monthly or for major releases:
  Chrome (previous)  - Users who haven't updated
  Safari (previous)  - Users on older iPhones (iOS 15, 16)
  UC Browser         - Still used in India's tier 2/3 cities

DEVICE TESTING MATRIX (Mobile/Responsive)
─────────────────────────────────────────────────────
Viewport sizes to test:
  Mobile Portrait:   375×667 (iPhone SE), 390×844 (iPhone 14)
  Mobile Landscape:  844×390
  Tablet Portrait:   768×1024 (iPad)
  Tablet Landscape:  1024×768
  Desktop:           1366×768 (most common in India), 1920×1080
  Ultrawide:         2560×1080

Real devices to prioritize for Indian market:
  iOS:     iPhone 13/14/15 (latest 2 generations)
  Android: Samsung Galaxy A-series (most popular in India)
            Redmi / Xiaomi (large market share tier 2/3)
            OnePlus, Realme (mid-range segment)
  Older:   Android 10 (still significant user base in India)

═══════════════════════════════════════════════════════════════
RESPONSIVE DESIGN TESTING — WHAT TO CHECK

  Layout Checks:
  ✅ Navigation: hamburger menu on mobile, horizontal menu on desktop
  ✅ No horizontal scroll on mobile (a very common defect)
  ✅ Text is readable without zooming on mobile
  ✅ Images don't overflow their containers
  ✅ Tables: scroll horizontally OR reformat for mobile
  ✅ Modals and popups don't overflow viewport on small screens

  Form Testing on Mobile:
  ✅ Input fields are large enough to tap (minimum 44×44px touch target)
  ✅ Correct keyboard type appears: number keyboard for phone/price,
     email keyboard for email fields, text for names
  ✅ Auto-fill works correctly (browser autofill for saved passwords)
  ✅ Forms don't zoom in unexpectedly on iOS (font-size: 16px prevents this)
  ✅ Date pickers work on mobile native picker (iOS/Android)

  Performance on Mobile:
  ✅ Page loads in under 3 seconds on 4G connection
  ✅ Images are appropriately sized for mobile (not loading 2MB desktop images)
  ✅ Lazy loading images work correctly (below-fold images load on scroll)

═══════════════════════════════════════════════════════════════
MOBILE APP TESTING (Native iOS/Android)
─────────────────────────────────────────────────────
App Installation and Launch:
  ✅ App installs from Play Store / App Store without error
  ✅ App opens without crash on first launch
  ✅ App works correctly after update (data migration)

Interruption Testing:
  ✅ Incoming call during payment → dismiss call → payment still processes
  ✅ App minimized mid-form → restored → form data preserved
  ✅ App killed and reopened → session behavior (logged out? stays logged in?)
  ✅ Network drops mid-transaction → appropriate error message shown
  ✅ Low battery notification during app use → no crash

Push Notifications:
  ✅ Notification received when app is in background
  ✅ Notification received when app is closed
  ✅ Tapping notification opens correct screen in the app
  ✅ Notification content is correct (correct order ID, correct amount)

Permissions Testing:
  ✅ Camera permission: app correctly requests, granted → QR scan works
  ✅ Location permission: granted → shows nearby; denied → graceful message
  ✅ Notification permission: denied → app still functions (not blocked)

Offline / Low Connectivity Testing:
  ✅ App shows meaningful error when network is unavailable
  ✅ App doesn't crash when network drops mid-load
  ✅ Cached content displayed when offline (if applicable)
  ✅ App recovers gracefully when network is restored

═══════════════════════════════════════════════════════════════
CROSS-BROWSER TESTING TOOLS:
  BrowserStack:  Real device + browser cloud testing (paid, free trial)
                 Test on 3000+ real browsers and devices in the cloud
  LambdaTest:    Similar to BrowserStack — very popular in India
  Sauce Labs:    Enterprise option
  Chrome DevTools Device Mode:
                 Simulate mobile viewports in Chrome (Tools → DevTools → Toggle Device)
                 Good for layout testing but NOT for real device behavior
                 Real device testing catches touch event issues, mobile Chrome
                 bugs, and performance issues that DevTools simulation misses`,
            usage:
                "For Indian QA roles specifically, mobile testing on Android Chrome is a higher priority than desktop browser testing — because more Indian users access services on Android phones than on any other platform. When writing your test cases, always include a Mobile/Responsive test case in your suite for any UI feature. When reporting defects, always specify the device model and browser version — 'Mobile Chrome 120 on Android 13' is actionable; 'mobile' is not.",
            mistake:
                "Using Chrome DevTools device simulation as a substitute for real device testing. DevTools simulation gives you the correct viewport size but doesn't replicate touch events, mobile keyboard behavior, iOS-specific CSS bugs, mobile network conditions, or Android Chrome's unique rendering quirks. Always test on at least one real Android device and one real iPhone for any feature with mobile users. BrowserStack offers a free trial that includes real device testing.",
        },
    ],

    // ── SECTION 5: PREREQUISITES ─────────────────────────────────────
    prerequisites: [
        { item: "Basic Computer Skills and Internet Navigation", done: true, note: "Manual testing is computer-based — comfort with navigating software is baseline", detail: "File management, copy-paste, keyboard shortcuts, email, using multiple browser tabs, taking screenshots. Manual testing requires you to operate software proficiently while simultaneously analyzing it." },
        { item: "English Language Proficiency (Reading and Writing)", done: true, note: "Test cases, defect reports, and status communication are written in English in professional environments", detail: "Reading requirements documents (often in English), writing precise defect reports with clear reproduction steps, communicating with development teams and project managers. Professional QA documentation quality directly reflects on your value to the team." },
        { item: "Analytical and Logical Thinking", done: false, note: "Testing requires systematic thinking — what could go wrong? what happens at the boundary?", detail: "Ability to read a requirement and think 'what if the user does X instead?', 'what happens if this field is empty?', 'what if two users do this simultaneously?'. This thinking cannot be taught from a textbook — it develops through practice and genuine curiosity about how systems can fail." },
        { item: "Basic Understanding of How Web Applications Work", done: false, note: "You test web apps — knowing what a server, browser, database, and API are makes you a better tester", detail: "What happens when you click a button in a web browser (request to server, server queries database, response rendered). What is a URL, what is HTTP, what does a 404 error mean. This context enables you to write more precise defect reports and understand the root cause of observed failures." },
        { item: "Microsoft Excel or Google Sheets", done: true, note: "Test cases are often maintained in spreadsheets, especially in small teams", detail: "Creating tables, sorting, filtering, basic formulas (COUNTIF for defect metrics). Many QA teams without dedicated test management tools maintain test cases in Excel. Even teams with TestRail or Zephyr use Excel for test planning and metrics reporting." },
        { item: "JIRA Basics (or willingness to learn)", done: false, note: "JIRA is the most common bug tracking and project management tool in India's IT industry", detail: "Create a free Atlassian account. Create a project. Log a few issues (test cases as tasks, defects as bugs). Understand fields: summary, description, priority, assignee, status. The ability to say 'I have worked with JIRA' requires actual hands-on use, not just reading about it." },
        { item: "Patience and Attention to Detail", done: true, note: "Not a tool — a personal quality required for excellence in manual testing", detail: "Willingness to execute the same test case on five different browsers without losing focus. Noticing that a date field accepted 31 February without validation. Catching that an error message says 'registeration' instead of 'registration'. The testers who find the most impactful defects are those who notice small things that others overlook." },
    ],

    // ── SECTION 6: ROADMAP ───────────────────────────────────────────
    roadmap: [
        {
            phase: "Beginner",
            label: "01",
            duration: "Weeks 1–6",
            color: "emerald",
            topics: [
                "Software testing fundamentals — what is testing, why is it important, quality assurance vs quality control",
                "SDLC and STLC — phases, activities, entry/exit criteria, QA's role at each phase",
                "Testing types — functional, regression, smoke, sanity, exploratory, UAT, integration",
                "Test case writing — template, atomic steps, specific expected results, test data specification",
                "Boundary Value Analysis (BVA) and Equivalence Partitioning (EP) — design techniques",
                "Test levels — unit, integration, system, acceptance testing",
                "Defect reporting — severity vs priority, defect life cycle (New → Assigned → Fixed → Retest → Closed)",
                "Writing defect reports — steps to reproduce, evidence, impact statement",
                "Test environments — what they are, staging vs production, environment configuration",
                "JIRA basics — creating issues, logging defects, tracking status, using boards",
                "Browser Developer Tools — Console, Network tab, finding HTTP errors",
                "Testing a real website — practice on demo sites (OrangeHRM, Parabank, SauceDemo)",
            ],
            buildProjects: [
                "Test case suite for a login feature: write 15+ test cases covering positive, negative, boundary, and security scenarios",
                "Defect report practice: use SauceDemo.com (intentionally buggy), find 5 real defects, write professional JIRA-format defect reports for each",
                "STLC exercise: for a hypothetical 'user registration' feature, document all phases from requirement analysis to test closure with deliverables at each phase",
            ],
        },
        {
            phase: "Intermediate",
            label: "02",
            duration: "Weeks 7–15",
            color: "primary",
            topics: [
                "Test planning — writing a complete test plan: scope, risks, strategy, schedule, entry/exit criteria",
                "Test design techniques — decision tables, state transition testing, use case testing",
                "Requirements Traceability Matrix (RTM) — mapping requirements to test cases",
                "Risk-based testing — prioritizing test effort based on likelihood and impact",
                "Agile testing — scrum ceremonies, role of QA in sprints, Definition of Done, shift-left testing",
                "API testing with Postman — HTTP methods, status codes, request/response, REST API concepts",
                "Postman collections — organizing API tests, environment variables, basic test scripts",
                "SQL for testers — SELECT, WHERE, JOIN, GROUP BY — verifying data in the database",
                "Exploratory testing techniques — session-based testing, charters, mind mapping",
                "Test management tools — TestRail or Zephyr (hands-on), creating test suites and runs",
                "Mobile testing basics — responsive design, device matrix, BrowserStack/LambdaTest",
                "Compatibility testing — cross-browser test matrix, browser DevTools device mode",
                "Test metrics and reporting — defect density, pass/fail rates, test coverage",
                "UAT testing — business scenario testing, acceptance criteria validation",
            ],
            buildProjects: [
                "Complete API test collection in Postman for a public API (Reqres.in, JSONPlaceholder) — 20+ test cases covering all HTTP methods, auth, and error scenarios",
                "Write a full Test Plan for an e-commerce checkout feature — scope, risks, schedule, test types, entry/exit criteria",
                "SQL database verification exercise: given an application action (place order), write 5 SQL queries to verify the correct data was written to the database",
                "Agile sprint simulation: given 5 user stories, write test cases for each story, identify questions for the BA, and estimate testing effort",
            ],
        },
        {
            phase: "Advanced",
            label: "03",
            duration: "Weeks 16–26+",
            color: "purple",
            topics: [
                "Performance testing concepts — load testing, stress testing, soak testing (manual interpretation of performance test results)",
                "Security testing basics — OWASP Top 10 for testers, SQL injection testing, XSS testing, authentication security",
                "Accessibility testing — WCAG guidelines, screen reader testing, color contrast testing, keyboard navigation",
                "Test automation readiness — identifying automation candidates, understanding Selenium/Cypress concepts as a non-programmer",
                "Advanced Postman — pre-request scripts, test scripts with JavaScript, Newman for collection runs",
                "Advanced SQL — complex JOINs, subqueries, aggregate functions for data validation",
                "WebSocket testing — testing real-time features (chat, live notifications)",
                "Test environment management — coordinating test data, environment configuration, release readiness",
                "Defect prevention — root cause analysis, defect clustering, applying learning to test case design",
                "Test estimation techniques — function point analysis, three-point estimation, historical data",
                "Leading QA processes — review and mentor junior testers, test case review, quality metrics dashboard",
                "Shift-right testing — production monitoring, feature flags, A/B test validation",
                "Integration with CI/CD — understanding pipeline integration, automated smoke test results interpretation",
            ],
            buildProjects: [
                "Security testing exercise: manually test a demo application (DVWA, WebGoat) for OWASP Top 10 vulnerabilities — document findings in professional format",
                "End-to-end QA engagement: take a complete feature (e-commerce order placement) from requirements review through test closure — test plan, 40+ test cases, Postman API collection, SQL verifications, defect reports, test summary report",
                "Performance test result analysis: interpret a JMeter or k6 test result report, identify bottlenecks, and write a performance test summary report",
            ],
        },
    ],

    // ── SECTION 7: USE CASES ─────────────────────────────────────────
    useCases: [
        { num: "01", title: "Financial Applications and Payment Systems", body: "Manual testers are irreplaceable in fintech — payment flows, fund transfers, tax calculations, and regulatory compliance require human judgment that automation cannot provide. A tester testing UPI payment flows must understand that ₹1 transaction and ₹99,99,999 transaction follow different paths, that network interruption during payment has specific regulatory handling requirements, and that the UI displayed to the user must match the actual transaction amount sent to the payment network. This contextual judgment is uniquely human." },
        { num: "02", title: "E-Commerce Platform Quality Assurance", body: "The checkout flow, coupon stacking, inventory management, return and refund processing, seller fee calculations, and logistics tracking on platforms like Flipkart and Meesho are tested by large QA teams. Manual testers run seasonal release testing (Diwali sales, Big Billion Day), test complex discount rule interactions that automated tests can't anticipate, and perform exploratory testing of new features to find defects that weren't imagined during development." },
        { num: "03", title: "Healthcare and Patient Safety Systems", body: "Electronic health record systems, telemedicine platforms, prescription management, and diagnostic reporting software must be tested with exceptional care — a defect in a dosage calculation or a drug interaction check could harm a patient. Manual testing in healthcare involves not just functionality verification but clinical workflow validation — does the system support the actual practice of medicine correctly? This domain requires both testing expertise and domain knowledge." },
        { num: "04", title: "Government and Regulatory Compliance Testing", body: "GSTN (tax filing), UIDAI (Aadhaar authentication), IRCTC (railway booking), and state government portals serve hundreds of millions of citizens. These systems must work correctly for users with varying technical literacy, on low-end devices, on slow connections, and in multiple languages. Manual testers at organizations serving these systems perform accessibility testing, multilingual testing, and validate that the system meets regulatory audit requirements." },
        { num: "05", title: "Mobile Application Quality Assurance", body: "With 700 million smartphone users in India across Android devices ranging from ₹5,000 budget phones to ₹150,000 flagships, mobile compatibility testing is a critical QA responsibility. Manual testers test on real device collections (or BrowserStack), verify app behavior on different Android versions (8.0 through 14), test interruption scenarios (calls, notifications, low memory), and validate that features work offline or on 2G/3G connections in rural areas." },
        { num: "06", title: "IT Services Client Delivery Quality Assurance", body: "Indian IT services companies (TCS, Infosys, Wipro, HCL, Cognizant) deliver QA services as a contractual obligation to banking, insurance, manufacturing, and retail clients globally. These delivery projects employ thousands of manual testers who execute test cases per detailed test plans, produce test evidence for compliance audits, and provide quality sign-off on system integrations. This is the largest employer of manual testers in India." },
        { num: "07", title: "SaaS Product Quality Assurance", body: "Freshworks (CRM, helpdesk), Zoho (productivity suite), Chargebee (billing), and hundreds of Indian SaaS companies maintain QA teams that test new features before release to thousands of enterprise customers. A defect in Freshdesk's ticket routing logic could disrupt customer support operations for hundreds of companies simultaneously — manual testers who deeply understand the product domain and customer use cases prevent these incidents." },
    ],

    // ── SECTION 8: PROJECTS ──────────────────────────────────────────
    projects: {
        beginner: [
            { name: "Test Case Suite for Login and Registration", desc: "Write a complete test case suite (25+ cases) for a login and registration feature covering positive, negative, boundary, and security scenarios. Include test data, preconditions, and specific expected results for each case.", teaches: "Test case writing quality, BVA/EP application, security thinking (SQL injection, XSS scenarios), comprehensive coverage of a single feature" },
            { name: "Defect Report Collection from SauceDemo", desc: "Test the intentionally buggy Sauce Labs demo application (saucedemo.com). Find and document 8–10 real defects in JIRA-format defect reports with screenshots, exact reproduction steps, severity, priority, and impact statements.", teaches: "Defect identification, professional defect reporting format, severity/priority classification, evidence collection" },
            { name: "Manual Test Execution Report", desc: "Execute 20 provided test cases against a demo application (OrangeHRM demo, Parabank). Document Pass/Fail status, log defects for all failures, and write a one-page test execution summary report with metrics.", teaches: "Test execution process, pass/fail determination, test status reporting, metrics (% executed, % passed, defect count)" },
            { name: "Requirements Analysis Exercise", desc: "Given a 2-page requirements document for a library management system, create an RTM (Requirements Traceability Matrix) and identify at least 5 ambiguities or missing scenarios that need clarification before testing.", teaches: "Requirements reading, RTM construction, identifying testable vs untestable requirements, asking the right questions" },
        ],
        intermediate: [
            { name: "Complete Test Plan Document", desc: "Write a full Test Plan for an e-commerce checkout feature: scope definition, risk analysis matrix, test types and approach, schedule, environment requirements, test data needs, entry/exit criteria, and defect management process.", teaches: "Test planning thinking, risk-based test prioritization, professional document writing, scope management" },
            { name: "API Test Collection in Postman", desc: "Create a complete Postman collection for a REST API (Reqres.in or a public API of your choice): 25+ requests covering all CRUD operations, authentication, error handling, and authorization scenarios. Include Postman test scripts for status code and response body validation.", teaches: "API testing with Postman, HTTP methods and status codes, authorization testing, Postman test scripts" },
            { name: "Regression Test Suite Design", desc: "Given a feature change specification ('we updated the discount calculation engine'), design a regression test strategy: which areas are impacted, which test cases must be run, which can be skipped, and justify your selections based on risk.", teaches: "Risk-based regression testing, impact analysis, test prioritization, regression strategy communication" },
            { name: "Agile Sprint QA Simulation", desc: "Given 6 user stories with acceptance criteria (from a provided backlog), write test cases for each, identify questions for each story, create a sprint test plan, and document how you would report status in daily standup format.", teaches: "Agile testing process, story-based test design, sprint planning participation, QA communication in scrum" },
        ],
        advanced: [
            { name: "End-to-End QA Engagement Documentation", desc: "Choose a complex feature (e-commerce order placement OR bank transfer). Produce: requirements review notes with ambiguities raised, test plan, 40+ test cases, Postman API test collection with 20+ requests, 5 SQL verification queries, 3 detailed defect reports (one each of S1/S2/S3), and a final test summary report. This is a portfolio-quality deliverable.", teaches: "Complete QA lifecycle, professional documentation, cross-layer testing (UI + API + Database), portfolio creation" },
            { name: "Security Testing Exercise", desc: "Test a deliberately vulnerable web application (DVWA or WebGoat) manually for OWASP Top 10 issues: SQL injection, XSS, authentication bypass, IDOR. Document each vulnerability found in a professional security test report format.", teaches: "Security testing mindset, OWASP Top 10 concepts, security defect reporting, manual security test techniques" },
            { name: "Mobile Compatibility Test Report", desc: "Test a web application (or a public website you use regularly) on 4 different browsers/devices using BrowserStack free trial. Document all compatibility defects found with device/browser details, screenshots, and business impact. Create a compatibility test report.", teaches: "Systematic compatibility testing, device matrix execution, cross-browser defect documentation, tool usage (BrowserStack)" },
        ],
    },

    // ── SECTION 9: MISTAKES ──────────────────────────────────────────
    mistakes: [
        {
            title: "Writing Vague Expected Results in Test Cases",
            explanation: "'Expected Result: It should work correctly' or 'The page should load successfully' are not expected results — they are wishes. A test case with a vague expected result cannot produce a definitive Pass or Fail judgment. Different testers executing the same case will reach different conclusions.",
            tip: "Every expected result must be specific and verifiable: 'User is redirected to /dashboard', 'Cart badge shows count 1', 'Error message: Invalid email or password is displayed below the email field', 'Response status: 200, body contains access_token field'. If you cannot write a specific expected result, the requirement needs clarification first.",
        },
        {
            title: "Only Testing the Happy Path",
            explanation: "The happy path — valid inputs, normal conditions, expected user behavior — represents maybe 30% of the test cases a feature needs. The majority of real-world defects are found in negative scenarios: invalid inputs, missing required fields, network interruptions, concurrent operations, and boundary conditions. A tester who only verifies that valid inputs work correctly is missing the majority of defects.",
            tip: "For every feature, explicitly ask: what happens with empty inputs? Wrong data types? Data at exact boundaries? More than maximum allowed? After session timeout? With slow network? After an error? Negative and edge case test cases typically outnumber positive test cases 3:1 in well-designed test suites.",
        },
        {
            title: "Not Verifying Data in the Database After UI Actions",
            explanation: "A form submission that shows 'Success!' on screen but doesn't actually save data to the database will pass every UI test. Without checking the database, this critical defect is invisible. This category of defect — UI says one thing, database shows another — is extremely common and consistently missed by testers who only test through the UI.",
            tip: "After any create, update, or delete action in the UI, write a corresponding SQL query to verify the correct data was written to the database. After placing an order: check the orders table for the new record. After updating a profile: verify the new values in the users table. This takes 5 minutes per test case and catches an entire class of defects.",
        },
        {
            title: "Logging Defects Without Screenshots or Recording Evidence",
            explanation: "A defect logged as 'Login page crashes sometimes' with no evidence, no exact steps, and no screenshot is worthless to the development team. The developer cannot reproduce it, cannot investigate it, and marks it 'Cannot Reproduce'. The defect goes unfixed and the tester's credibility suffers.",
            tip: "Every defect must have: a screenshot at minimum, a screen recording for multi-step flows, and the exact test data used. Log the defect while the evidence is fresh — immediately after discovering it. If the defect is intermittent, capture it the moment it occurs and note how many times out of how many attempts it reproduced.",
        },
        {
            title: "Marking a Build as 'Smoke Passed' Without Actually Running Smoke Tests",
            explanation: "In deadline pressure, testers sometimes approve a build for full testing based on a quick visual inspection rather than actually executing the smoke test cases. If a critical path is broken and full testing proceeds for days, the entire effort is wasted.",
            tip: "Smoke testing is a gate, not a formality. Execute every smoke test case as specified. If any smoke test fails — even if it seems minor — report the build as smoke-failed and return it to development. A build that can't pass smoke tests is not ready for full testing, regardless of deadline pressure.",
        },
        {
            title: "Accepting 'Cannot Reproduce' Without Providing More Evidence",
            explanation: "When a developer marks a defect 'Cannot Reproduce', many testers accept this and close the defect. But 'Cannot Reproduce' often means the developer tested in a different environment, with different data, or in a different sequence than what caused the defect.",
            tip: "When a defect is marked 'Cannot Reproduce': add a screen recording of the exact reproduction, specify the exact test data values, specify the exact environment (browser version, OS version, build version), and attempt to reproduce it yourself one more time to confirm it is still present. Then reopen the defect with this additional evidence.",
        },
        {
            title: "Not Doing Regression Testing After Every Fix",
            explanation: "Developers who fix one defect sometimes inadvertently introduce a different defect in a related area — a phenomenon called regression. Testing only the fixed defect without running related test cases misses these introduced regressions, which may be discovered by the user in production.",
            tip: "After retesting a fixed defect, identify the functional area the fix touched and run the key test cases for that area — not just the one test case that previously failed. A fix to the payment calculation should prompt retesting of: discount application, order totals, refund amounts, and invoice generation. This minimal targeted regression catches most fix-induced regressions.",
        },
        {
            title: "Testing Without Reading the Requirements",
            explanation: "Testing based on assumptions about how a feature should work — without reading the actual requirements, acceptance criteria, or user stories — leads to testing the wrong things. A tester who has read the requirements knows that the discount applies before tax; a tester who hasn't might verify the wrong calculation order and pass test cases that should fail.",
            tip: "Before testing any feature, read: the user story and acceptance criteria in JIRA, the wireframe or mockup, any linked design specifications or API contracts, and the comparable feature in the existing system (if there is one). Questions that arise while reading requirements are more valuable than the same questions asked after testing has already begun.",
        },
        {
            title: "Confusing Severity with Priority",
            explanation: "Assigning S1 Critical severity to every defect so it gets fixed quickly, or treating a P1 high-priority defect as technically critical when it is actually a cosmetic issue, undermines the defect management process. Developers stop trusting severity ratings and start ignoring them.",
            tip: "Be disciplined and honest about severity: S1 means application crash, data loss, or complete feature failure. S4 means typo or cosmetic issue that doesn't affect usability. Be equally honest about priority: P1 means this must be fixed before release. Log defects accurately — your credibility as a tester depends on your assessment being trustworthy.",
        },
        {
            title: "Not Learning SQL for Database Verification",
            explanation: "The most common skill gap that holds manual testers at junior level is the inability to verify data in the database. Without SQL, a tester can only see what the UI shows — which may be different from what is actually stored. Every test for a data-modifying feature is incomplete without a database verification step.",
            tip: "Learn basic SQL: SELECT, WHERE, JOIN (for related tables), and COUNT/SUM for aggregates. Install pgAdmin (for PostgreSQL) or MySQL Workbench and practice against a local database. 10 hours of SQL practice enables database verification for 80% of real test scenarios. This single skill upgrade moves a tester from junior to mid-level faster than any other investment.",
        },
        {
            title: "Waiting for Perfect Requirements Before Testing",
            explanation: "In agile teams, requirements are rarely complete when testing needs to begin. Waiting for a perfect requirements document before writing test cases adds days of delay to every sprint and is the most common cause of the testing crunch that happens in sprint week 2.",
            tip: "Write test cases from imperfect requirements and flag the gaps explicitly: 'TC_LOGIN_007: Behavior when user account is locked — NEEDS CLARIFICATION: what message is shown? After how many failed attempts?'. Testable requirements become clear through the process of writing test cases — use test case writing as a requirements clarification tool.",
        },
        {
            title: "Treating Manual Testing as Temporary Until Automation",
            explanation: "Testers who view manual testing as a stepping stone to 'real' automation testing — and perform it without full commitment — never develop the deep testing instincts that make exploratory testers valuable. The best automation engineers are those who first became excellent manual testers.",
            tip: "Invest in becoming excellent at manual testing before moving to automation. The analytical thinking, test design depth, and domain knowledge you build as a manual tester are the foundation of every good automation framework. An automation tester who writes poor test cases produces poor automation. A manual tester who understands exactly what needs to be tested writes automation that actually catches regressions.",
        },
    ],

    // ── SECTION 10: INTERVIEW QUESTIONS ─────────────────────────────
    interviewQuestions: {
        beginner: [
            { q: "What is manual testing and why is it still important when automation exists?", a: "Manual testing is the practice of evaluating software quality by executing test cases without automated tools — a human tester operates the application and compares actual behavior against expected behavior. It remains essential because automation can only verify what it has been explicitly programmed to check. Manual testing brings human judgment for usability issues, contextual incorrectness, and unexpected behavior — the 30–40% of defects that exploratory human testers find and scripted automation misses." },
            { q: "What is the difference between Severity and Priority in defect reporting?", a: "Severity is the technical impact of the defect on the system — S1 Critical means the application crashes or data is lost. S4 Trivial means a minor cosmetic issue. Priority is business urgency — P1 means fix before release. A cosmetic defect on the homepage might be S4 severity but P1 priority (the CEO sees it). A data corruption bug in a rarely-used report might be S1 severity but P3 priority. They are independent dimensions assessed separately." },
            { q: "What is the difference between Smoke Testing and Sanity Testing?", a: "Smoke testing is a quick, broad check — does the overall build work at all? It covers 10–15 critical test cases across the entire application and is executed on every new build before investing time in full testing. Sanity testing is narrow and focused — after a specific fix, test just that specific area to verify the fix works without running the full suite. Smoke = broad/shallow; Sanity = narrow/deep." },
            { q: "What is a Test Case and what fields does it contain?", a: "A test case is a documented set of steps to verify a specific condition with a specific expected outcome. It contains: Test Case ID, Title, Module, Priority, Preconditions (state the application must be in), Test Steps (numbered, exact), Test Data (specific values), Expected Result (specific and verifiable), Actual Result (filled during execution), and Status (Pass/Fail/Blocked/Skipped). A good test case is atomic, unambiguous, and executable by any tester to produce a consistent result." },
            { q: "Explain the Software Testing Life Cycle (STLC) phases.", a: "STLC has six phases: 1) Requirement Analysis — study requirements, identify testable conditions, create RTM. 2) Test Planning — define scope, risks, approach, schedule, entry/exit criteria. 3) Test Case Development — write test cases, prepare test data. 4) Environment Setup — configure test environment, verify readiness. 5) Test Execution — execute test cases, log defects for failures. 6) Test Cycle Closure — analyze metrics, write test summary report, capture lessons learned." },
            { q: "What is the defect life cycle? What are its states?", a: "The defect life cycle tracks a bug from discovery to resolution: New (just logged) → Assigned (assigned to developer) → In Progress (dev working on it) → Fixed (dev deployed fix) → Retest (tester verifies fix) → Closed (fix verified) OR Reopened (fix didn't work). Additional states: Deferred (fix postponed), Duplicate (already reported), Not a Bug (expected behavior), Cannot Reproduce (dev can't repeat it with provided info)." },
            { q: "What is Regression Testing and when is it done?", a: "Regression testing verifies that new code changes haven't broken previously working functionality. It is done after every code change — bug fix, new feature, or refactoring. The regression suite runs existing test cases on unchanged areas of the application to catch unintended side effects. Types: full regression (all test cases — major releases), partial regression (impacted areas — patches), smoke regression (critical path only — daily builds)." },
            { q: "What is Boundary Value Analysis? Give an example.", a: "BVA is a test design technique that tests at the edges of valid input ranges where defects cluster. For a field that accepts ages 18–65: test 17 (just below minimum — invalid), 18 (exact minimum — valid), 65 (exact maximum — valid), 66 (just above maximum — invalid). Defects most commonly occur at these exact boundaries, not in the middle of valid ranges, because developers tend to write conditions like age > 18 instead of age >= 18." },
            { q: "What is Exploratory Testing?", a: "Exploratory testing is simultaneous test design and execution — the tester explores the application without a fixed script, using judgment, curiosity, and domain knowledge to find defects not covered by test cases. It is typically time-boxed (60–90 minute sessions) with a charter describing the focus area ('explore checkout with expired coupons'). It finds 30–40% of defects that scripted testing misses because it replicates how real users actually interact with software." },
            { q: "Write 5 test cases for a 'Forgot Password' feature.", a: "1) Happy path: enter registered email → receive reset email containing a reset link. 2) Unregistered email: enter email not in system → show generic message 'If this email is registered, you will receive instructions' (no user enumeration). 3) Invalid email format: enter 'notanemail' → inline validation error. 4) Reset link expires: use link after 1 hour → error message 'Link has expired'. 5) Link used twice: use valid link once (success), use same link again → error 'This link has already been used'." },
        ],
        intermediate: [
            { q: "What is the difference between black-box and white-box testing?", a: "Black-box testing tests the application from the user's perspective without knowledge of the internal code — the tester provides inputs and verifies outputs against requirements. Manual functional testing is black-box. White-box testing examines the internal code structure — the tester writes tests knowing the implementation and targeting specific code paths, branches, and conditions. Unit testing and code coverage analysis are white-box. Grey-box combines both — the tester has partial knowledge of the internals (like the database schema) to design more targeted tests." },
            { q: "How would you test a payment gateway integration?", a: "I would test: happy path (valid card, sufficient funds, correct amount charged), negative cases (declined card, insufficient funds, expired card, wrong CVV), boundary amounts (₹1 minimum, ₹99,99,999 maximum, ₹0 — which should be blocked), network failure scenarios (drop connection mid-transaction — what happens? Is the order created? Is the payment captured?), duplicate payment prevention (clicking Pay button twice rapidly), currency and amount display consistency between cart total and amount charged, refund flow (payment captured then refunded), and via API — verify payment record is correctly created in the database with correct amount, status, and transaction ID." },
            { q: "How do you approach testing in an agile sprint?", a: "In sprint planning, I review user stories and acceptance criteria, raise clarification questions, add testing tasks to the sprint backlog, and write test cases as stories are refined. During the sprint, I write test cases as developers work on features (shift-left), test features as soon as they're deployed to the staging environment — not waiting until sprint end. In daily standup, I report testing status and blockers. I participate in sprint review to confirm tested features meet acceptance criteria. I contribute to the test summary at sprint end and ensure all tested cases are in the regression suite for future sprints." },
            { q: "What is API Testing and how do you test an API?", a: "API testing directly tests REST API endpoints without the UI layer. For each endpoint I verify: correct HTTP status code (200 for success, 201 for created, 401 for unauthorized, 404 for not found), response body structure and data correctness, authentication (endpoint returns 401 without a valid token), authorization (user A cannot access user B's data — 403), input validation (missing required fields, invalid data types → 400/422 with meaningful error messages), and edge cases (empty arrays, null values, very large payloads). I use Postman to create collections organized by feature, with environment variables for different environments (staging, production)." },
            { q: "What is Risk-Based Testing?", a: "Risk-based testing prioritizes test effort toward areas most likely to contain critical defects, given limited time and resources. Risk is assessed on two axes: likelihood (how probable is a defect here?) and impact (how severe would a defect be?). Areas with high likelihood AND high impact get the most test cases and are tested first. Areas with low likelihood AND low impact get only sanity checks. For a payment feature: coupon calculation and payment amount are high-risk. The footer links are low-risk. This ensures the most important areas get the most testing within sprint time constraints." },
            { q: "How do you write a test plan? What are its key components?", a: "A test plan includes: Introduction and Scope (in-scope and out-of-scope items explicitly stated), Test Objectives, Test Approach (which test types will be used and why), Risk Analysis (what could go wrong, likelihood, impact, mitigation), Entry Criteria (conditions that must be true before testing starts — smoke tests passing, test data ready), Exit Criteria (conditions that define when testing is complete — zero S1/S2 open, 100% high-priority cases executed), Test Environment details, Test Schedule, Defect Management process, and Roles and Responsibilities. The test plan aligns the whole team on what 'done' means for quality." },
            { q: "What is the Requirements Traceability Matrix (RTM)?", a: "The RTM is a document that maps each business requirement to the test cases that verify it and the defects found that relate to it. It ensures every requirement has at least one test case (no gaps in coverage) and every test case traces back to a requirement (no redundant, unjustified tests). The RTM is a living document — updated as requirements change and as defects are found. In compliance-regulated industries (banking, healthcare), the RTM is a mandatory audit artifact that proves the system was tested against every stated requirement." },
            { q: "What are some common security test scenarios a manual tester should check?", a: "SQL injection: enter SQL fragments (' OR '1'='1, ' DROP TABLE users--) in input fields — the application must not expose database errors or return unauthorized data. XSS: enter script tags (<script>alert('XSS')</script>) in text inputs and name fields — the application must not execute them when displayed. Authentication: try accessing protected pages directly by URL without logging in — should redirect to login. IDOR (Insecure Direct Object Reference): try accessing another user's resource by changing an ID in the URL (/orders/99999 when that order belongs to a different user) — should return 403. Brute force: attempt many login failures — should lock account or show CAPTCHA." },
            { q: "Explain the three-amigos meeting and its value in agile testing.", a: "The three-amigos meeting brings together the Business Analyst (or Product Owner), Developer, and QA Tester to discuss a user story before development begins. Each role examines the story through a different lens: BA focuses on business value and scope, developer focuses on technical approach and feasibility, QA focuses on edge cases, testability, and what could go wrong. The discussion surfaces ambiguities, missing scenarios, and untestable requirements before any code is written — preventing defects rather than detecting them. It is the highest-ROI activity in shift-left testing." },
            { q: "How do you differentiate between a defect, an enhancement, and expected behavior?", a: "A defect is a variance between actual behavior and specified expected behavior per requirements. If the requirement says 'error message is shown for invalid email' and no error is shown, it's a defect. An enhancement is a desirable new behavior not specified in requirements — 'it would be better if the error message also told users what valid format looks like'. Expected behavior is what was specified — if the requirement says 'account is locked after 10 failures' and the developer implemented 10, then 10 is expected behavior (not a defect, even if you think 5 would be more secure). Always reference the requirement when classifying." },
            { q: "What is Equivalence Partitioning? How do you apply it?", a: "Equivalence Partitioning divides valid and invalid input ranges into groups (partitions) where all values in a partition behave the same way. Test one value from each partition — this gives maximum coverage with minimum test cases. For a password field requiring 8–16 characters: Partition 1 (too short, 1–7 chars): test 5 characters; Partition 2 (valid, 8–16 chars): test 12 characters; Partition 3 (too long, 17+ chars): test 20 characters. Three test cases instead of testing every possible length. Combine with BVA to also test exact boundaries (7, 8, 16, 17)." },
        ],
        advanced: [
            { q: "How would you set up a QA process for a team that has no testing currently?", a: "Start with the highest-value, lowest-effort improvements: 1) Basic bug tracking in JIRA — ensure all defects are logged and tracked. 2) Smoke test suite — 15 critical cases run on every build before full testing. 3) Test cases for the most critical user flows — payment, login, core feature. 4) Entry/exit criteria for releases — define what 'ready to ship' means with quality gates. 5) Defect triage meetings — weekly review of open defects with the team. 6) Gradually build: requirements review, test planning, regression suite, API testing, exploratory sessions. Introduce practices incrementally — a comprehensive QA process that no one follows is less valuable than a minimal process everyone respects." },
            { q: "How do you determine which test cases to automate and which to keep manual?", a: "Automate: stable, frequently-executed regression tests (run every sprint), smoke tests (run multiple times per day in CI), data-driven tests with many input combinations, performance tests (which require load simulation). Keep manual: exploratory testing (by definition requires human judgment), usability testing (requires human UX assessment), tests that change frequently (automation maintenance cost exceeds benefit), visual/cosmetic verification, one-time tests for a single release, tests that are too complex to automate cost-effectively. The 80/20 rule: automate the 20% of tests that give 80% of regression coverage, keep the contextual and judgment-requiring tests manual." },
            { q: "How do you handle a situation where development is pushing to release but you have open critical defects?", a: "I escalate through the proper channel: bring the defect to the QA Lead or Test Manager with the full impact documented (what happens to users, what is the business risk). The release decision is a business decision, not a QA decision — but QA's responsibility is to ensure the risk is clearly communicated and documented. I prepare: a written risk statement (if we release with BUG-1042 open, X% of checkout attempts will fail), the stakeholder (PM, Product Owner) must acknowledge and sign off on the risk. If they choose to release, I document their approval. QA prevents silent technical debt — the decision to accept risk must be explicit and recorded." },
            { q: "What metrics would you use to measure QA effectiveness?", a: "Defect Detection Effectiveness (DDE): % of total defects found by QA vs found in production — a high DDE means QA is catching defects before users do. Defect Leakage Rate: % of defects found in production — should trend down. Defect Reopened Rate: % of fixed defects that are reopened — high rate indicates poor fix quality. Test Coverage: % of requirements covered by test cases. Pass/Fail Rate per sprint: trend over time indicates codebase health. Defect Density: defects per feature/module — identifies defect-prone areas. Mean Time to Find (MTTF) and Mean Time to Fix (MTTF): efficiency of the whole defect cycle. These metrics drive QA process improvement, not individual performance measurement." },
            { q: "Explain the testing pyramid and how manual testing fits in it.", a: "The testing pyramid has three levels: Unit tests (bottom, most numerous, fastest, cheapest — written by developers), Integration/API tests (middle — verify component interactions), and UI/E2E tests (top, fewest, slowest, most expensive). Manual testing primarily lives at the top of the pyramid (UI/E2E exploratory and regression) and in the middle (API testing with Postman). The pyramid principle: most testing effort should be at the lower, faster, cheaper levels. Manual UI testing should focus on scenarios that can't be automated cost-effectively — exploratory, usability, visual, and complex integration scenarios." },
            { q: "How do you test a feature that is difficult to reproduce consistently?", a: "For intermittent defects: 1) Capture everything when you observe it — screenshot, screen recording, browser console errors, network tab. 2) Document environmental specifics: exact time, browser, version, test data, steps leading up. 3) Try to identify the trigger pattern — does it happen after many operations? After a specific sequence? On specific data? 4) Check if it's a race condition (two operations happening simultaneously). 5) Ask the developer to add more logging. 6) Attempt in different environments to isolate whether it's environment-specific. 7) Log the defect with what evidence you have and mark reproducibility 'Intermittent — 2 out of 10 attempts'. A logged intermittent bug with evidence is actionable; an unlogged intermittent bug is a production incident waiting to happen." },
            { q: "What is shift-left testing and how does it change the QA role?", a: "Shift-left means moving testing activities earlier in the development lifecycle — rather than testing after development is complete, QA participates from requirements stage. Activities shift left: requirements review (catching ambiguities before development), test case design during development (not after), three-amigos meetings (BA + Dev + QA before dev starts). This changes the QA role from 'defect finder at the end' to 'quality enabler throughout'. A shift-left QA professional prevents defects by improving requirements, participates in design discussions, and influences how features are built — not just validating finished code. This is why modern QA roles are valued at senior salaries: the impact is earlier and greater." },
            { q: "How would you organize a test suite for a large e-commerce application with 500+ features?", a: "Hierarchical organization in the test management tool: Suite level (Authentication, Products, Cart, Checkout, Orders, Payments, User Account, Admin Panel, Mobile). Within each suite: sections by sub-feature (Cart → Add to Cart, Remove from Cart, Cart Persistence, Cart with Discounts). Priority tagging: Critical (smoke tests), High (happy path per feature), Medium (edge cases), Low (cosmetic). Regression labels: 'Core Regression' (200 cases run per sprint), 'Full Regression' (500+ cases for major releases). Test cycles per sprint: Smoke → Feature Testing → Regression. The organization ensures any tester can find and execute the right tests without confusion." },
        ],
    },

    // ── SECTION 11: COMPARISON ───────────────────────────────────────
    comparison: {
        headers: ["Feature", "Manual Testing", "Automation Testing", "Performance Testing"],
        rows: [
            { feature: "Primary Purpose", react: "Human judgment — usability, exploratory, complex scenarios", vue: "Regression efficiency — repeatable scripted scenarios at scale", angular: "Load behavior — system performance under concurrent users" },
            { feature: "Speed", react: "Slower — human execution, one scenario at a time", vue: "Fast — runs hundreds of cases in minutes", angular: "N/A for functional — simulates thousands of virtual users" },
            { feature: "Initial Investment", react: "Low — test cases + tester time", vue: "High — automation framework, script development", angular: "Medium — load testing tools (JMeter, k6) + environment" },
            { feature: "Maintenance", react: "Low — test cases updated as features change", vue: "High — scripts break when UI changes", angular: "Medium — scripts need updating for application changes" },
            { feature: "Defect Types Found", react: "Usability, functional, visual, exploratory edge cases", vue: "Regression, known functional scenarios", angular: "Performance bottlenecks, memory leaks, scalability limits" },
            { feature: "Best For", react: "New features, exploratory, UAT, usability, one-time tests", vue: "Regression suites, CI/CD smoke tests, repetitive scenarios", angular: "Pre-launch capacity planning, API load testing" },
            { feature: "Skill Required", react: "Testing concepts, domain knowledge, tools (JIRA, Postman)", vue: "Programming + testing + framework (Selenium, Cypress)", angular: "Testing + tool knowledge (JMeter, k6) + analysis skills" },
            { feature: "When to Use", react: "New feature testing, exploratory, non-automatable scenarios", vue: "Stable features run repeatedly each sprint", angular: "Performance requirements, expected traffic load testing" },
            { feature: "Job Market India", react: "Largest QA job category — 40,000–80,000 listings", vue: "Fast-growing — premium salaries ₹10–25 LPA", angular: "Specialized — fewer roles, premium ₹15–30 LPA" },
        ],
    },

    // ── SECTION 12: PROS & CONS ──────────────────────────────────────
    pros: [
        "Low entry barrier — analytical thinking, attention to detail, and domain knowledge outweigh programming skills at the entry level; accessible to non-programmers",
        "Finds what automation misses — exploratory testing, usability assessment, and contextual judgment catch the 30–40% of defects that scripted automation doesn't detect",
        "Stable job market — every software project needs quality assurance; manual testing roles exist across all industries, company sizes, and locations in India",
        "Clear career progression — junior manual tester → senior tester → QA lead → test manager / SDET, each step well-defined and achievable within 2–3 year increments",
        "Domain knowledge becomes a superpower — a manual tester who deeply understands banking, healthcare, or e-commerce is more valuable than a generic automation engineer in that domain",
        "Gateway to multiple specializations — manual testing experience provides the foundation for automation testing, performance testing, security testing, and test management careers",
        "Immediate value — a manual tester can contribute meaningfully to a project within weeks of starting; the learning curve to productivity is shorter than most technical roles",
        "Human-computer interaction insight — manual testers develop a unique perspective on how users interact with software that makes them valuable in product management and UX roles too",
    ],
    cons: [
        "Lower salary ceiling than automation at the same experience level — a 3-year manual tester earns less than a 3-year automation engineer; transitioning to automation is important for salary growth",
        "Slower feedback cycle — manual test execution for a large suite takes days; automation can run the same suite in 30 minutes; this creates pressure to automate regression suites",
        "Monotonous at the junior level — executing the same regression test suite sprint after sprint without variety or complexity growth is demotivating; proactively expanding scope is required",
        "Perception challenge — some development teams undervalue manual QA as 'clicking' rather than technical work; demonstrating SQL, API testing, and test strategy skills counters this perception",
        "Scaling limitations — manual testing cannot scale to performance validation (cannot manually simulate 10,000 concurrent users); load and stress testing require automation tools",
        "Subject to human error and inconsistency — a tired or rushed manual tester may miss defects that they would catch on another day; automation is perfectly consistent",
        "Not sufficient alone for modern CI/CD — high-velocity engineering teams deploying multiple times daily need automated regression checks; manual testing cannot run at CI/CD pipeline speed",
    ],

    // ── SECTION 13: FUTURE SCOPE ─────────────────────────────────────
    futureScope: [
        "Manual testing is evolving, not disappearing. The narrative that 'AI will replace manual testers' consistently underestimates what manual testing actually involves. AI tools (GitHub Copilot for test generation, Testim, Mabl) automate the mechanical parts of testing — scripted regression execution, test case generation from requirements. But the genuinely valuable activities of manual testing — exploratory testing, usability assessment, judgment about which edge cases matter, communication of quality risk to stakeholders, and domain-specific validation — are human activities that AI augments rather than replaces. The manual tester of 2026–2030 uses AI tools to generate initial test case drafts and run basic regression suites, then applies human judgment to the exploratory and contextual testing that AI cannot do.",
        "The SDET (Software Development Engineer in Test) career path is the highest-value evolution of manual testing expertise. SDETs write automation frameworks, build CI/CD pipeline integration, and maintain test infrastructure — but their value comes from the testing depth they built as manual testers. India's product companies (Freshworks, Zerodha, Razorpay, PhonePe) and MNC India offices (Google, Microsoft, Amazon, Goldman Sachs Technology) hire SDETs at ₹18–35 LPA for 3–5 years experience. The manual testing foundation is what makes these SDETs write automation that actually catches regressions rather than just demonstrating that CI is running.",
        "India's digital infrastructure expansion creates structural demand for manual testing talent that will persist through the decade. The ONDC (Open Network for Digital Commerce), UHI (Unified Health Interface), Account Aggregator framework, and RBI's new digital payment rails all require exhaustive quality assurance before they serve hundreds of millions of Indians. Each of these government-backed digital initiatives creates both direct QA employment (at NIC, NPCI, and their vendor partners) and indirect demand (every fintech and healthtech company building on these platforms must test their integrations). This government-driven demand is counter-cyclical to startup hiring volatility.",
        "AI-powered testing tools are becoming part of the manual tester's toolkit rather than a replacement for manual testing. Tools like Applitools (visual AI testing), Testim (self-healing test automation), and LLM-based test case generation assistants (using Claude or GPT to draft test cases from requirements) are being adopted at forward-thinking QA teams. The manual testers who adopt these AI tools early — using them to accelerate test case generation, analyze defect patterns, and suggest exploratory testing charters — will be significantly more productive than peers who ignore them. This AI-augmented manual testing capability is a differentiator that is already valued in QA job descriptions.",
        "Quality engineering as a strategic function is gaining executive recognition in India's enterprise sector. The CISOs and CTOs who have lived through high-profile production failures — payment platform outages during Diwali sales, government portal crashes on tax filing deadlines — are investing in QA as risk management rather than just as a cost center. This is increasing budgets for QA tooling, QA headcount, and QA leadership roles. The QA managers and test architects who can speak the language of business risk, regulatory compliance, and quality economics — not just testing metrics — are being elevated to senior leadership positions at Indian enterprises. This executive-level QA career path is new, growing, and requires exactly the depth of quality thinking that serious manual testing careers develop.",
    ],

    // ── SECTION 14: ACTION PLAN ──────────────────────────────────────
    actionPlan: [
        { week: "Week 1–2", title: "Master the Foundations — Theory and First Practice", desc: "Study the core concepts: SDLC, STLC, testing types (functional, regression, smoke, exploratory, UAT), defect life cycle, severity vs priority, BVA, and equivalence partitioning. Do not just memorize definitions — understand the why behind each concept. After each concept, immediately practice: write 5 test cases for a real feature on a website you use, classify 5 hypothetical defects by severity and priority, draw the STLC phases from memory. Understanding without practice is useless in QA interviews." },
        { week: "Week 3–5", title: "Test Case Writing and Defect Reporting Mastery", desc: "This is the skill most directly evaluated in every QA interview and on the job. Practice writing complete test case suites for: login, registration, search, shopping cart, file upload, and date fields. For each: write positive test cases, negative test cases, boundary value test cases, and at least one security test case. Then use SauceDemo.com or OrangeHRM demo to find real defects and write professional defect reports with exact reproduction steps, severity/priority, and screenshots. Quality over quantity — 5 excellent test cases are more valuable than 50 vague ones." },
        { week: "Week 6–8", title: "Tools — JIRA, Postman, and Browser DevTools", desc: "Create a free JIRA account (atlassian.com), create a project, create 10 test cases as JIRA tasks, and log 5 mock defects as bug-type issues with full defect report format. Create a free Postman account, import the Reqres.in or JSONPlaceholder public API, and create a collection with 20+ requests covering GET, POST, PUT, DELETE, authentication, and error scenarios. Learn browser DevTools — open Network tab while using any website and read the HTTP requests and responses happening in real time. These three tools are the minimum viable toolkit for a modern manual tester." },
        { week: "Week 9–12", title: "SQL for Database Verification and Test Planning", desc: "Learn SQL fundamentals specifically for test verification: SELECT, WHERE, JOIN, ORDER BY, COUNT, SUM. Install DBeaver (free) and connect it to a free PostgreSQL database (ElephantSQL free tier or a local install). Practice writing queries that verify test outcomes: after registering a user, write a query to confirm they appear in the users table. Write 5 SQL verification queries for a test scenario. Also spend one week writing a complete test plan for a hypothetical e-commerce feature — include scope, risks, schedule, entry/exit criteria. These two skills (SQL + test planning) are what move a resume from fresher to mid-level consideration." },
        { week: "Week 13–18", title: "Build Your QA Portfolio and Apply", desc: "Create a QA portfolio on GitHub or a personal website. Include: a test case document (20+ cases for a real web application), a defect report collection (5 defects from SauceDemo or similar), a Postman collection (exported JSON), a test plan document, and SQL queries for database verification. These artifacts are the physical evidence of your skills — more valuable than any certification. Practice answering the 30 interview questions at each level in this document out loud. Apply to 10 QA roles per week: target IT services companies (easier entry), product startups (higher learning velocity), and SaaS companies (best QA practices). Most manual testing job searches with a portfolio and solid interview preparation close within 4–8 weeks of consistent applications." },
        { week: "Week 19+", title: "First 90 Days on the Job — And Planning Your Next Level", desc: "In your first role, focus on: understanding the domain deeply (banking, healthcare, e-commerce — domain knowledge is your career equity), learning the team's test management tool in depth, delivering high-quality defect reports that developers trust and act on, participating in sprint ceremonies proactively, and identifying automation opportunities without being asked. From day one, plan your next 18 months: add SQL proficiency → add Postman API testing → add basic automation (Selenium or Cypress) → pursue ISTQB Foundation certification (valued by IT services companies). This roadmap moves you from manual tester to mid-level QA engineer within 18 months and sets the trajectory toward ₹12–20 LPA within 3 years." },
    ],
};