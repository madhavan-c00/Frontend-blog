import type { TechContent } from './types';

export const automationTestingContent: TechContent = {
  techId: 'automation-testing',
  readTime: '30–35 min',
  difficulty: 'Beginner to Advanced',
  lastUpdated: '2026',

  // ── OPENING HOOK ─────────────────────────────────────────────────
  openingHook:
    "Manual testing jobs in India are disappearing — not because companies are testing less, but because they are automating more. Every product company that ships code multiple times per day cannot afford to have 10 testers manually clicking through every feature before each release. What they need instead is automation engineers who can write code that tests code — Selenium scripts that simulate user flows, Playwright tests that run in CI/CD pipelines, API tests that validate every endpoint in seconds. In 2026, the title 'Manual Tester' is being systematically replaced by 'SDET' (Software Development Engineer in Test) and 'Automation Test Engineer' — roles that pay 40–60% more and are far harder to offshore or automate away. Automation testing is the most accessible transition into software engineering for anyone who already works in QA, and one of the most reliable entry points into tech for freshers who are comfortable with code but not ready to build full applications. A fresher with Selenium Java or Playwright knowledge and a solid test framework on GitHub commands ₹4–9 LPA. A mid-level SDET with API testing, CI/CD integration, and framework design experience commands ₹12–25 LPA. This automation testing tutorial for beginners is your complete roadmap.",

  // ── SECTION 1: INTRODUCTION ──────────────────────────────────────
  introText: [
    "Automation testing is the practice of using software tools and scripts to execute test cases automatically, compare actual results with expected results, and report outcomes — without human intervention. Instead of a QA engineer manually opening a browser, navigating to a login page, entering credentials, and verifying the dashboard appears, an automated test script does all of this in seconds, repeatedly, across multiple browsers and environments.",
    "Software testing itself is divided into manual testing (humans execute test cases) and automated testing (code executes test cases). Manual testing is irreplaceable for exploratory testing, usability evaluation, and edge cases that require human judgment. But for regression testing (re-testing existing features after changes), smoke testing (quick sanity checks after deployment), and load testing (simulating thousands of users), automation is dramatically faster, more consistent, and more scalable.",
    "The problem automation testing solves is the release velocity bottleneck. A team that deploys code 10 times per day cannot manually test every feature before each deployment. Automated test suites run in the CI/CD pipeline — every code push triggers the test suite, and the deployment only proceeds if tests pass. This is how modern software teams ship confidently at speed. Companies like Amazon deploy thousands of times per day — impossible without comprehensive automation testing.",
  ],

  realWorldUsages: [
    "E-commerce regression suites — Flipkart and Amazon run thousands of automated tests before every release to ensure checkout, search, and payment flows work correctly",
    "Banking application validation — HDFC, ICICI automated regression suites validate that transfers, balance checks, and loan applications work after every backend change",
    "CI/CD pipeline gates — every code push at product companies triggers automated tests; deployment blocked if tests fail",
    "Cross-browser compatibility testing — automated Selenium/Playwright grids test the same user flow on Chrome, Firefox, Safari, and Edge simultaneously",
    "API contract testing — automated Postman/RestAssured tests validate that backend APIs return correct responses after every deployment",
    "Performance and load testing — JMeter scripts simulate 10,000 concurrent users to identify bottlenecks before production traffic hits",
    "Mobile app testing — Appium automated tests validate Android and iOS apps across multiple device configurations without physical device farms",
  ],

  // ── SECTION 2: WHY LEARN ─────────────────────────────────────────
  whyLearn: {
    demand:
      "The Indian IT services industry is in the middle of a massive shift from manual to automated testing. TCS, Infosys, Wipro, Capgemini, and HCL are all retraining their QA teams and hiring new automation engineers in significant numbers. Product companies — fintech, ed-tech, SaaS — require automation testing from day one of any QA role. Naukri consistently shows 50,000+ active automation testing job postings. The SDET role specifically is one of the fastest-growing engineering titles in India. Learning automation testing step by step is one of the clearest paths from a non-coding QA background into software engineering, and from a fresher background into a stable, well-paying tech career.",
    jobRoles: [
      { role: "Automation Test Engineer", desc: "Write and maintain automated test scripts for web, API, and mobile applications. The most common QA role in product companies." },
      { role: "SDET (Software Development Engineer in Test)", desc: "Design test frameworks, write automation code, build CI/CD pipeline integrations. Closer to a developer role than a traditional QA." },
      { role: "QA Engineer (Automation)", desc: "Mix of automation (60–70%) and manual testing (30–40%). Common in growing startups and mid-size companies." },
      { role: "Performance Test Engineer", desc: "Design and execute load tests with JMeter, Gatling, or k6. Identify performance bottlenecks before production." },
      { role: "API Test Engineer", desc: "Validate REST and GraphQL APIs using Postman, RestAssured, or Karate. Growing role as microservices architectures proliferate." },
    ],
    whyCompanies: [
      { reason: "Speed without regression risk", detail: "Automated regression suites let teams ship fast without manually re-testing every feature — enabling daily or hourly deployments." },
      { reason: "Consistency", detail: "Automated tests run the same steps exactly the same way every time — no human fatigue, no missed steps, no subjective judgment on pass/fail." },
      { reason: "Cost at scale", detail: "Running 2,000 automated tests costs the same whether you run them once or 100 times. Manual testing scales linearly with engineers." },
      { reason: "CI/CD requirement", detail: "Modern DevOps and continuous deployment pipelines require automated test gates. No automation = no real CI/CD." },
    ],
    salaryRange: "₹3.5 LPA – ₹8 LPA (Freshers with Selenium/Playwright + Java/Python) | ₹10 LPA – ₹25 LPA (Mid-Level SDET with framework design + CI/CD)",
    careerNote:
      "Automation testing is not a dead-end — it is a launchpad. SDETs who learn system design, performance engineering, and chaos engineering move into senior engineering roles. Many SDETs transition to full backend development because they already know code. The skill set — programming, debugging, API knowledge, CI/CD — overlaps significantly with software engineering. The career ceiling is high.",
  },

  // ── SECTION 3: HOW IT WORKS ──────────────────────────────────────
  howItWorks: {
    intro:
      "Think of automated testing like a robot quality inspector on an assembly line. The robot has a checklist — 50 precise checks it performs on every product that passes by. It never gets tired, never skips a step, and always records exactly what it found. When something breaks on the line, the robot immediately flags it. Manual testing is like a human inspector — thorough and insightful, but slower, more expensive, and not practical for every single item. Automation is the robot; exploratory testing is the human. Both have a role.",
    vdomSteps: [
      { num: "1", title: "Test Script Written", text: "A test engineer writes a script (in Java, Python, JavaScript, etc.) using a testing framework. The script defines: what action to perform (click login button), what data to use (username/password), and what result to expect (dashboard page appears with user's name)." },
      { num: "2", title: "Test Runner Executes", text: "The test runner (TestNG, JUnit, pytest, Jest) invokes the test script. For UI tests, it launches a browser via WebDriver. For API tests, it sends HTTP requests. For unit tests, it invokes the class/function under test directly." },
      { num: "3", title: "WebDriver / API Client Interacts", text: "For UI tests: WebDriver (Selenium, Playwright, Cypress) controls the browser — navigating URLs, clicking elements, filling forms. For API tests: the HTTP client sends requests and captures responses. The test script is the director; the tool is the actor." },
      { num: "4", title: "Assertions Evaluated", text: "At each checkpoint, the framework compares the actual result with the expected result. Is the page title 'Dashboard'? Does the API return status 200? Is the product price less than ₹10,000? Pass or fail is determined here." },
      { num: "5", title: "Report Generated", text: "After all tests run, the framework generates a report — passed/failed counts, failure screenshots, execution time, error stack traces. In CI/CD, this report determines whether the pipeline passes or fails, blocking or allowing the deployment." },
    ],
    componentCode: `// THE AUTOMATION TESTING FLOW — from script to report

// 1. TEST SCRIPT (Playwright + TypeScript)
import { test, expect } from '@playwright/test';

test('User can login and see dashboard', async ({ page }) => {
  // ARRANGE — navigate to the application
  await page.goto('https://app.example.com/login');

  // ACT — perform user actions
  await page.fill('#email', 'testuser@example.com');
  await page.fill('#password', 'SecurePass123');
  await page.click('button[type="submit"]');

  // ASSERT — verify expected outcome
  await expect(page).toHaveURL(/.*dashboard/);
  await expect(page.locator('h1')).toContainText('Welcome, Test User');
  await expect(page.locator('.notification-badge')).toBeVisible();
});

// 2. CI/CD PIPELINE TRIGGER (GitHub Actions)
// name: Run Tests
// on: [push, pull_request]
// jobs:
//   test:
//     runs-on: ubuntu-latest
//     steps:
//       - uses: actions/checkout@v3
//       - run: npm ci
//       - run: npx playwright test
//       - uses: actions/upload-artifact@v3  # Upload test reports

// 3. EXECUTION — framework drives the browser
// Page.goto() → browser opens URL
// Page.fill() → finds element, types text
// Page.click() → finds element, clicks it
// Playwright waits for navigation automatically

// 4. ASSERTION — pass or fail
// expect(page).toHaveURL() → checks current URL matches pattern
// If URL doesn't match → test FAILS with clear message
// If URL matches → continues to next assertion

// 5. REPORT — HTML report generated
// ✅ User can login and see dashboard — 2.3s
// Screenshots captured on failure
// Video recording of test run (optional)`,
    renderCycle: [
      "Test code written → test runner invoked (TestNG, pytest, Playwright CLI)",
      "Browser/HTTP client launched → WebDriver connects to browser",
      "Script actions execute → browser navigates, fills, clicks in sequence",
      "Assertions checked at each step → PASS or FAIL recorded per assertion",
      "All tests complete → report generated → CI/CD pipeline passes or blocks deployment",
    ],
    closingNote:
      "The power of this model is the feedback loop: developer commits code → CI triggers tests → tests run in 5 minutes → result posted to pull request → developer knows immediately if they broke something. Without automation, that feedback loop takes days (next manual test cycle). With automation, it takes minutes. That speed difference is why companies invest heavily in automation testing.",
  },

  // ── SECTION 4: CORE CONCEPTS ─────────────────────────────────────
  coreConcepts: [
    {
      id: "selenium-webdriver",
      number: "4.1",
      title: "Selenium WebDriver — Browser Automation Foundation",
      icon: "🌐",
      color: "blue",
      intro:
        "Selenium WebDriver is the industry standard for browser automation. It provides a programming interface to control real browsers — Chrome, Firefox, Edge, Safari — by sending commands through the browser's native automation protocol. WebDriver is not a testing framework itself; it is a browser control library. You use it with a test runner (TestNG, JUnit) and an assertion library. Despite being older than Playwright and Cypress, Selenium remains the most widely required skill in Indian automation job descriptions.",
      code: `import org.openqa.selenium.*;
import org.openqa.selenium.chrome.*;
import org.openqa.selenium.support.ui.*;
import org.testng.annotations.*;
import org.testng.Assert;
import java.time.Duration;

public class LoginTest {

    WebDriver driver;
    WebDriverWait wait;

    @BeforeMethod
    public void setUp() {
        ChromeOptions options = new ChromeOptions();
        options.addArguments("--headless");        // No browser window in CI
        options.addArguments("--no-sandbox");
        options.addArguments("--disable-dev-shm-usage");

        driver = new ChromeDriver(options);
        driver.manage().window().maximize();
        driver.manage().timeouts().pageLoadTimeout(Duration.ofSeconds(30));
        wait = new WebDriverWait(driver, Duration.ofSeconds(10));
    }

    @Test(description = "Verify successful login with valid credentials")
    public void testSuccessfulLogin() {
        // Navigate
        driver.get("https://app.example.com/login");

        // Find elements and interact
        WebElement emailField = wait.until(
            ExpectedConditions.visibilityOfElementLocated(By.id("email"))
        );
        emailField.sendKeys("testuser@example.com");

        driver.findElement(By.id("password")).sendKeys("SecurePass123");
        driver.findElement(By.cssSelector("button[type='submit']")).click();

        // Wait for navigation and verify
        wait.until(ExpectedConditions.urlContains("/dashboard"));

        String pageTitle = driver.findElement(By.tagName("h1")).getText();
        Assert.assertEquals(pageTitle, "Welcome, Test User", "Dashboard title mismatch");

        String currentUrl = driver.getCurrentUrl();
        Assert.assertTrue(currentUrl.contains("/dashboard"),
            "Expected dashboard URL but got: " + currentUrl);
    }

    @Test(description = "Verify error message with invalid credentials")
    public void testInvalidLogin() {
        driver.get("https://app.example.com/login");

        driver.findElement(By.id("email")).sendKeys("wrong@example.com");
        driver.findElement(By.id("password")).sendKeys("wrongpassword");
        driver.findElement(By.cssSelector("button[type='submit']")).click();

        WebElement errorMsg = wait.until(
            ExpectedConditions.visibilityOfElementLocated(By.className("error-message"))
        );
        Assert.assertEquals(errorMsg.getText(), "Invalid email or password",
            "Error message text mismatch");

        // Verify still on login page
        Assert.assertTrue(driver.getCurrentUrl().contains("/login"),
            "Should remain on login page");
    }

    @Test(description = "Verify form validation — empty email")
    public void testEmptyEmailValidation() {
        driver.get("https://app.example.com/login");
        driver.findElement(By.cssSelector("button[type='submit']")).click();

        WebElement emailError = wait.until(
            ExpectedConditions.visibilityOfElementLocated(
                By.cssSelector("#email + .field-error")
            )
        );
        Assert.assertEquals(emailError.getText(), "Email is required");
    }

    @AfterMethod
    public void tearDown() {
        if (driver != null) driver.quit(); // Always close browser
    }
}`,
      usage:
        "Selenium is used in the majority of Indian enterprise automation projects — IT services companies deliver test automation frameworks built on Selenium + Java + TestNG to banking, insurance, and telecom clients. Every SDET interview at a service company will ask Selenium questions. The Selenium + Java + TestNG + Maven stack is the most commonly required combination in Indian automation job descriptions.",
      mistake:
        "Using Thread.sleep() for waiting instead of explicit waits. Thread.sleep(3000) is hardcoded — too short on slow environments, too long on fast ones, and makes the test suite take much longer to run. Use WebDriverWait with ExpectedConditions — it waits up to the timeout but proceeds immediately when the condition is met. This is one of the most common Selenium interview questions.",
    },
    {
      id: "playwright",
      number: "4.2",
      title: "Playwright — Modern Browser Automation",
      icon: "🎭",
      color: "primary",
      intro:
        "Playwright is Microsoft's browser automation framework, released in 2020. It supports Chromium, Firefox, and WebKit in a single API. Playwright auto-waits for elements to be actionable before interacting — no explicit waits needed for most cases. It supports multiple programming languages (JavaScript/TypeScript, Python, Java, C#) and has built-in support for parallelism, mobile emulation, network interception, and visual comparisons. Playwright is rapidly becoming the preferred tool for new automation projects at product companies.",
      code: `// Playwright + TypeScript — modern automation testing

import { test, expect, Page } from '@playwright/test';
import { LoginPage } from './pages/LoginPage'; // Page Object
import { DashboardPage } from './pages/DashboardPage';

// Page Object Model — encapsulate page interactions
class LoginPage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto('/login'); // baseURL configured in playwright.config.ts
  }

  async login(email: string, password: string) {
    await this.page.fill('[data-testid="email-input"]', email);
    await this.page.fill('[data-testid="password-input"]', password);
    await this.page.click('[data-testid="login-button"]');
  }

  async getErrorMessage() {
    return this.page.locator('[data-testid="error-message"]').textContent();
  }
}

// Test suite
test.describe('Authentication', () => {

  test.beforeEach(async ({ page }) => {
    // Reset state before each test
    await page.goto('/login');
  });

  test('successful login redirects to dashboard', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login('testuser@example.com', 'SecurePass123');

    // Playwright auto-waits for navigation
    await expect(page).toHaveURL(/dashboard/);
    await expect(page.locator('h1')).toContainText('Welcome');
  });

  test('invalid credentials shows error', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login('wrong@email.com', 'wrongpass');

    await expect(page.locator('[data-testid="error-message"]'))
      .toBeVisible();
    await expect(page.locator('[data-testid="error-message"]'))
      .toHaveText('Invalid email or password');
  });

  test('network interception — mock API response', async ({ page }) => {
    // Intercept API call and return mock response
    await page.route('**/api/auth/login', async route => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ token: 'mock-jwt-token', user: { name: 'Mock User' } }),
      });
    });

    await page.fill('[data-testid="email-input"]', 'any@email.com');
    await page.fill('[data-testid="password-input"]', 'anypassword');
    await page.click('[data-testid="login-button"]');

    await expect(page.locator('h1')).toContainText('Mock User');
  });

  test('visual regression — screenshot comparison', async ({ page }) => {
    await page.goto('/login');
    // Fails if page visually changes unexpectedly
    await expect(page).toHaveScreenshot('login-page.png', {
      maxDiffPixels: 50
    });
  });
});

// playwright.config.ts
// import { defineConfig } from '@playwright/test';
// export default defineConfig({
//   baseURL: 'https://staging.example.com',
//   use: { headless: true, screenshot: 'only-on-failure', video: 'retain-on-failure' },
//   projects: [
//     { name: 'chromium', use: { browserName: 'chromium' } },
//     { name: 'firefox',  use: { browserName: 'firefox' } },
//     { name: 'webkit',   use: { browserName: 'webkit' } },
//   ],
//   reporter: [['html'], ['junit', { outputFile: 'results.xml' }]],
// });`,
      usage:
        "Playwright is the tool of choice for new automation projects at product companies and startups in 2026. Its auto-waiting, network interception, built-in parallelism, and multi-browser support in a single API make it significantly more productive than Selenium. If you are starting automation testing from scratch with no legacy constraints, Playwright is the recommended choice. Many companies are also migrating Selenium projects to Playwright.",
      mistake:
        "Using text-based selectors (page.click('text=Login')) as the primary locator strategy. Text changes frequently — a designer renames 'Login' to 'Sign In' and your tests break. Use data-testid attributes as the primary locator strategy. These are added by developers specifically for testing and don't change unless the feature is renamed. Ask your development team to add data-testid attributes to key interactive elements.",
    },
    {
      id: "page-object-model",
      number: "4.3",
      title: "Page Object Model — The Standard Framework Pattern",
      icon: "🏗️",
      color: "emerald",
      intro:
        "The Page Object Model (POM) is the most widely used design pattern in UI automation testing. Instead of writing locators and interactions directly in test files, you create a separate class for each page or major component — encapsulating that page's elements and actions. Tests then call page object methods instead of raw driver commands. When the UI changes, you update one place (the page object) instead of every test that touches that page.",
      code: `// ── PAGE OBJECTS — encapsulate each page's behavior ──

// pages/LoginPage.java
public class LoginPage {
    private WebDriver driver;
    private WebDriverWait wait;

    // Locators defined once — update here if UI changes
    private By emailInput      = By.id("email");
    private By passwordInput   = By.id("password");
    private By loginButton     = By.cssSelector("button[type='submit']");
    private By errorMessage    = By.className("error-message");
    private By forgotPassword  = By.linkText("Forgot Password?");

    public LoginPage(WebDriver driver) {
        this.driver = driver;
        this.wait = new WebDriverWait(driver, Duration.ofSeconds(10));
        // Verify we're on the right page
        wait.until(ExpectedConditions.titleContains("Login"));
    }

    public void enterEmail(String email) {
        WebElement field = wait.until(ExpectedConditions.elementToBeClickable(emailInput));
        field.clear();
        field.sendKeys(email);
    }

    public void enterPassword(String password) {
        driver.findElement(passwordInput).sendKeys(password);
    }

    public DashboardPage clickLogin() {
        driver.findElement(loginButton).click();
        return new DashboardPage(driver); // Returns next page object
    }

    public LoginPage clickLoginExpectingError() {
        driver.findElement(loginButton).click();
        return this; // Stays on login page — return self
    }

    public String getErrorMessage() {
        return wait.until(ExpectedConditions.visibilityOfElementLocated(errorMessage))
                   .getText();
    }

    // High-level action method — combines multiple interactions
    public DashboardPage loginAs(String email, String password) {
        enterEmail(email);
        enterPassword(password);
        return clickLogin();
    }
}

// pages/DashboardPage.java
public class DashboardPage {
    private WebDriver driver;
    private By welcomeHeader   = By.cssSelector("h1.welcome");
    private By userMenu        = By.id("user-menu");
    private By logoutButton    = By.id("logout-btn");
    private By notificationBell = By.className("notification-bell");

    public DashboardPage(WebDriver driver) {
        this.driver = driver;
        new WebDriverWait(driver, Duration.ofSeconds(10))
            .until(ExpectedConditions.urlContains("/dashboard"));
    }

    public String getWelcomeMessage() {
        return driver.findElement(welcomeHeader).getText();
    }

    public boolean isNotificationVisible() {
        return driver.findElement(notificationBell).isDisplayed();
    }

    public LoginPage logout() {
        driver.findElement(userMenu).click();
        driver.findElement(logoutButton).click();
        return new LoginPage(driver);
    }
}

// ── TESTS — clean, readable, no locators ─────────────

// tests/LoginTest.java
public class LoginTest extends BaseTest { // BaseTest handles setup/teardown

    @Test(groups = {"smoke", "regression"})
    public void validLogin_shouldShowDashboard() {
        LoginPage loginPage = new LoginPage(driver);
        DashboardPage dashboard = loginPage.loginAs(
            TestData.VALID_EMAIL,
            TestData.VALID_PASSWORD
        );

        Assert.assertTrue(dashboard.getWelcomeMessage().contains("Welcome"),
            "Welcome message not shown");
        Assert.assertTrue(dashboard.isNotificationVisible(),
            "Notification bell not visible");
    }

    @Test(groups = {"regression"})
    public void invalidLogin_shouldShowError() {
        LoginPage loginPage = new LoginPage(driver);
        loginPage.enterEmail("invalid@test.com");
        loginPage.enterPassword("wrongpass");
        loginPage.clickLoginExpectingError();

        Assert.assertEquals(loginPage.getErrorMessage(),
            "Invalid email or password",
            "Wrong error message displayed");
    }

    @Test(groups = {"regression"})
    public void logout_shouldReturnToLoginPage() {
        LoginPage loginPage = new LoginPage(driver);
        DashboardPage dashboard = loginPage.loginAs(
            TestData.VALID_EMAIL, TestData.VALID_PASSWORD
        );
        LoginPage returnedLogin = dashboard.logout();

        Assert.assertTrue(driver.getCurrentUrl().contains("/login"),
            "Should redirect to login after logout");
    }
}`,
      usage:
        "POM is mandatory knowledge for any SDET or automation engineer role. It is the single most commonly asked design pattern question in automation testing interviews. 'How do you handle UI changes in your framework?' — the answer is POM. Every professional automation framework uses POM or a variant of it. Without POM, large test suites become unmaintainable nightmares of duplicated locators.",
      mistake:
        "Creating page objects that are too granular (one class per section) or too coarse (one class for the entire application). A good page object maps to one page or one major modal/component — LoginPage, ProductListPage, CheckoutPage, CartModal. Also: never put assertions inside page objects. Page objects navigate and interact; test classes assert and verify. Mixing them makes page objects context-specific and hard to reuse.",
    },
    {
      id: "api-testing",
      number: "4.4",
      title: "API Testing — Testing the Backend Directly",
      icon: "🔌",
      color: "orange",
      intro:
        "API testing validates REST APIs (and GraphQL, SOAP) directly — without a browser. It is faster than UI testing (no rendering), more stable (no UI locator brittleness), and catches backend bugs before they surface in the UI. In modern architectures where frontend and backend are developed independently, API testing is often the primary form of automated testing. RestAssured (Java) and the requests library (Python) are the two most common tools for API test automation.",
      code: `// RestAssured — API testing in Java (most common in Indian enterprise)
import io.restassured.RestAssured;
import io.restassured.response.Response;
import org.testng.annotations.*;
import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.*;

public class ProductApiTest {

    private String authToken;
    private static final String BASE_URL = "https://api.example.com";

    @BeforeClass
    public void setUp() {
        RestAssured.baseURI = BASE_URL;

        // Authenticate first — get token for all subsequent tests
        authToken = given()
            .contentType("application/json")
            .body("{ \"email\": \"admin@test.com\", \"password\": \"Admin123\" }")
        .when()
            .post("/api/auth/login")
        .then()
            .statusCode(200)
            .extract()
            .jsonPath()
            .getString("token");
    }

    @Test(description = "GET all products — verify structure and data")
    public void getProducts_shouldReturn200WithProductList() {
        given()
            .header("Authorization", "Bearer " + authToken)
            .queryParam("page", 1)
            .queryParam("limit", 10)
        .when()
            .get("/api/products")
        .then()
            .statusCode(200)
            .contentType("application/json")
            .body("success", equalTo(true))
            .body("data.products", notNullValue())
            .body("data.products.size()", greaterThan(0))
            .body("data.pagination.page", equalTo(1))
            .body("data.products[0].id", notNullValue())
            .body("data.products[0].name", notNullValue())
            .body("data.products[0].price", greaterThanOrEqualTo(0.0f));
    }

    @Test(description = "POST create product — verify created resource")
    public void createProduct_withValidData_shouldReturn201() {
        String productBody = """
            {
                "name": "Test Laptop",
                "price": 45000.00,
                "category": "Electronics",
                "stock": 50
            }
            """;

        Response response = given()
            .header("Authorization", "Bearer " + authToken)
            .contentType("application/json")
            .body(productBody)
        .when()
            .post("/api/products")
        .then()
            .statusCode(201)
            .body("data.name", equalTo("Test Laptop"))
            .body("data.price", equalTo(45000.0f))
            .body("data.id", notNullValue())
            .extract().response();

        // Store created ID for cleanup
        int createdId = response.jsonPath().getInt("data.id");

        // Verify the created product can be retrieved
        given()
            .header("Authorization", "Bearer " + authToken)
        .when()
            .get("/api/products/" + createdId)
        .then()
            .statusCode(200)
            .body("data.name", equalTo("Test Laptop"));

        // Cleanup — delete test product
        given()
            .header("Authorization", "Bearer " + authToken)
        .when()
            .delete("/api/products/" + createdId)
        .then()
            .statusCode(204);
    }

    @Test(description = "POST without auth — verify 401 response")
    public void createProduct_withoutAuth_shouldReturn401() {
        given()
            .contentType("application/json")
            .body("{ \"name\": \"Unauthorized Product\", \"price\": 100 }")
        .when()
            .post("/api/products")
        .then()
            .statusCode(401)
            .body("error", notNullValue());
    }

    @Test(description = "POST with invalid data — verify 400 and validation errors")
    public void createProduct_withMissingName_shouldReturn400() {
        given()
            .header("Authorization", "Bearer " + authToken)
            .contentType("application/json")
            .body("{ \"price\": -100 }")  // Missing name, negative price
        .when()
            .post("/api/products")
        .then()
            .statusCode(400)
            .body("errors", notNullValue())
            .body("errors.size()", greaterThanOrEqualTo(1));
    }

    @Test(description = "GET non-existent product — verify 404")
    public void getProduct_withInvalidId_shouldReturn404() {
        given()
            .header("Authorization", "Bearer " + authToken)
        .when()
            .get("/api/products/99999999")
        .then()
            .statusCode(404)
            .body("error", containsString("not found"));
    }
}`,
      usage:
        "API testing is the highest-value automation skill in a microservices world. UI tests are slow (3–10 seconds per test) and brittle (UI changes break locators). API tests run in milliseconds and test the real business logic directly. A well-tested API means the backend is verified — UI tests can then focus on visual correctness and user flows rather than business logic validation.",
      mistake:
        "Not cleaning up test data after API tests. Creating a product in a test and not deleting it pollutes the test database. After dozens of test runs, the database has thousands of 'Test Laptop' entries that interfere with other tests (e.g., 'count products' assertions break). Use @AfterMethod or @AfterClass to delete created resources. Use a dedicated test database or transactions that roll back after tests.",
    },
    {
      id: "testng-junit",
      number: "4.5",
      title: "TestNG & JUnit — Test Runners and Assertion Frameworks",
      icon: "🧪",
      color: "purple",
      intro:
        "TestNG and JUnit are Java test runners — they define how tests are organized, executed, and reported. TestNG (the more popular choice in Indian automation) adds features beyond JUnit: test groups, data providers, parallel execution configuration, dependencies between tests, and detailed HTML reports. Understanding how to configure TestNG effectively is a core SDET skill.",
      code: `// ── TESTNG CORE ANNOTATIONS ──────────────────────────

import org.testng.annotations.*;
import org.testng.Assert;
import org.testng.ITestContext;

public class EcommerceTest {

    // Execution order: BeforeSuite > BeforeClass > BeforeMethod > Test
    //                  AfterMethod > AfterClass > AfterSuite

    @BeforeSuite
    public void globalSetup(ITestContext context) {
        System.out.println("Suite: " + context.getSuite().getName());
        // One-time setup: initialize reporting, DB connection pool
    }

    @BeforeClass
    public void classSetup() {
        // One-time per class: launch browser, create test user account
    }

    @BeforeMethod
    public void methodSetup(Method method) {
        System.out.println("Starting: " + method.getName());
        // Before each test: navigate to home page, clear cookies
    }

    @AfterMethod
    public void methodTeardown(ITestResult result) {
        if (result.getStatus() == ITestResult.FAILURE) {
            // Take screenshot on failure
            captureScreenshot(result.getName());
        }
    }

    @AfterClass
    public void classTeardown() {
        // Close browser, delete test user account
    }

    // ── BASIC TEST ────────────────────────────────────
    @Test(description = "Verify homepage loads correctly",
          groups = {"smoke"},
          priority = 1)
    public void homepageLoads() {
        Assert.assertEquals(driver.getTitle(), "Home | MyApp");
    }

    // ── DATA PROVIDER — run same test with multiple data sets ──
    @DataProvider(name = "loginCredentials")
    public Object[][] loginData() {
        return new Object[][] {
            { "admin@test.com",   "Admin123",  "Admin Dashboard" },
            { "user@test.com",    "User123",   "User Dashboard"  },
            { "seller@test.com",  "Seller123", "Seller Portal"   },
        };
    }

    @Test(dataProvider = "loginCredentials",
          description = "Verify different user roles can login",
          groups = {"regression"})
    public void loginWithDifferentRoles(String email, String password, String expectedPage) {
        // Test runs 3 times — once per data row
        LoginPage login = new LoginPage(driver);
        login.enterEmail(email);
        login.enterPassword(password);
        login.clickLogin();

        Assert.assertTrue(driver.getTitle().contains(expectedPage),
            "Wrong page for user: " + email);
    }

    // ── TEST GROUPS — categorize and run selectively ──
    @Test(groups = {"smoke"}, priority = 1)
    public void criticalFlowWorks() { /* ... */ }

    @Test(groups = {"regression"}, priority = 2)
    public void secondaryFeatureWorks() { /* ... */ }

    @Test(groups = {"regression", "payments"}, priority = 3)
    public void paymentFlowWorks() { /* ... */ }

    // ── SOFT ASSERTIONS — continue after failure ──────
    @Test(description = "Verify product page has all required elements")
    public void productPageHasAllElements() {
        SoftAssert softAssert = new SoftAssert();

        softAssert.assertTrue(isElementPresent(By.id("product-title")),
            "Product title missing");
        softAssert.assertTrue(isElementPresent(By.id("product-price")),
            "Product price missing");
        softAssert.assertTrue(isElementPresent(By.id("add-to-cart")),
            "Add to cart button missing");
        softAssert.assertTrue(isElementPresent(By.id("product-images")),
            "Product images missing");
        softAssert.assertTrue(isElementPresent(By.id("product-description")),
            "Product description missing");

        softAssert.assertAll(); // Reports all failures, not just the first
    }
}

// ── TESTNG.XML — suite configuration ────────────────

// <?xml version="1.0" encoding="UTF-8"?>
// <!DOCTYPE suite SYSTEM "http://testng.org/testng-1.0.dtd">
// <suite name="Regression Suite" parallel="methods" thread-count="4">
//
//   <listeners>
//     <listener class-name="listeners.ExtentReportListener"/>
//     <listener class-name="listeners.ScreenshotListener"/>
//   </listeners>
//
//   <test name="Smoke Tests" preserve-order="true">
//     <groups><run><include name="smoke"/></run></groups>
//     <classes><class name="tests.LoginTest"/></classes>
//   </test>
//
//   <test name="Regression Tests">
//     <groups><run><include name="regression"/></run></groups>
//     <classes>
//       <class name="tests.LoginTest"/>
//       <class name="tests.ProductTest"/>
//       <class name="tests.CheckoutTest"/>
//     </classes>
//   </test>
// </suite>`,
      usage:
        "TestNG configuration — parallel execution, data providers, groups — is tested in almost every SDET interview. Understanding parallel=methods thread-count=4 (run 4 tests simultaneously, 4x faster) and how to use @DataProvider for data-driven testing shows framework design knowledge that hiring managers look for.",
      mistake:
        "Using hard assertions (Assert.assertEquals) for validating multiple unrelated elements on a page. When the first assertion fails, the test stops — you don't know if other elements also have issues. Use SoftAssert to collect all failures and report them together. Hard assertions are correct for critical preconditions (login succeeded, correct page loaded). Soft assertions for page content validation.",
    },
    {
      id: "ci-cd-integration",
      number: "4.6",
      title: "CI/CD Integration — Running Tests Automatically",
      icon: "🔄",
      color: "yellow",
      intro:
        "Test automation without CI/CD integration is a car without an engine — the scripts exist, but they don't automatically run when they're needed. Integrating your test suite into a CI/CD pipeline means tests run automatically on every code push, pull request, or deployment — providing immediate feedback to developers and blocking broken deployments. This is where automation testing delivers its actual value, and understanding it separates SDETs from script writers.",
      code: `# ── GITHUB ACTIONS — test pipeline ──────────────────
# .github/workflows/test.yml

name: Automation Test Suite

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]
  schedule:
    - cron: '0 2 * * *'   # Also run nightly at 2 AM

jobs:
  smoke-tests:
    name: Smoke Tests (Fast Gate)
    runs-on: ubuntu-latest
    timeout-minutes: 15

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Set up Java 17
        uses: actions/setup-java@v3
        with:
          java-version: '17'
          distribution: 'temurin'

      - name: Cache Maven dependencies
        uses: actions/cache@v3
        with:
          path: ~/.m2
          key: {{ runner.os }}-maven-{{ hashFiles('**/pom.xml') }}

      - name: Install Chrome
        uses: browser-actions/setup-chrome@latest

      - name: Run Smoke Tests
        run: |
          mvn test -Dgroups="smoke" \
                   -Dbrowser=chrome \
                   -Dheadless=true \
                   -DbaseUrl={{ vars.STAGING_URL }}
        env:
          TEST_EMAIL: {{ secrets.TEST_EMAIL }}
          TEST_PASSWORD: {{ secrets.TEST_PASSWORD }}

      - name: Publish Test Report
        uses: dorny/test-reporter@v1
        if: always()    # Run even if tests fail
        with:
          name: Smoke Test Results
          path: target/surefire-reports/*.xml
          reporter: java-junit

      - name: Upload Screenshots on Failure
        uses: actions/upload-artifact@v3
        if: failure()
        with:
          name: failure-screenshots
          path: test-output/screenshots/
          retention-days: 7

  regression-tests:
    name: Regression Tests (Full Suite)
    runs-on: ubuntu-latest
    needs: smoke-tests    # Only run if smoke tests pass
    timeout-minutes: 60

    strategy:
      matrix:
        browser: [chrome, firefox]  # Run on multiple browsers in parallel

    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-java@v3
        with: { java-version: '17', distribution: 'temurin' }

      - name: Run Regression Tests — {{ matrix.browser }}
        run: |
          mvn test -Dgroups="regression" \
                   -Dbrowser={{ matrix.browser }} \
                   -Dheadless=true \
                   -Dparallel=methods \
                   -DthreadCount=4

      - name: Generate Extent Report
        if: always()
        run: mvn exec:java -Dexec.mainClass="reports.GenerateReport"

      - name: Upload Test Reports
        uses: actions/upload-artifact@v3
        if: always()
        with:
          name: test-reports-{{ matrix.browser }}
          path: test-output/reports/

  api-tests:
    name: API Tests
    runs-on: ubuntu-latest
    timeout-minutes: 20

    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-java@v3
        with: { java-version: '17', distribution: 'temurin' }

      - name: Run API Tests
        run: mvn test -Dsuite=api-tests.xml
        env:
          API_BASE_URL: {{ vars.API_STAGING_URL }}
          API_KEY: {{ secrets.API_KEY }}

# ── MAVEN CONFIGURATION (pom.xml excerpt) ────────────

# <plugin>
#   <groupId>org.apache.maven.plugins</groupId>
#   <artifactId>maven-surefire-plugin</artifactId>
#   <configuration>
#     <suiteXmlFiles>
#       <suiteXmlFile>testng.xml</suiteXmlFile>
#     </suiteXmlFiles>
#     <systemPropertyVariables>
#       <browser>{browser}</browser>
#       <headless>{headless}</headless>
#       <baseUrl>{baseUrl}</baseUrl>
#     </systemPropertyVariables>
#   </configuration>
# </plugin>`,
      usage:
        "CI/CD integration is what companies actually care about. A test suite that only runs manually on a developer's laptop is almost useless. The value is automatic execution: push code → tests run → result in the PR → deployment blocked if red. Every SDET role requires understanding how to configure test pipelines in Jenkins, GitHub Actions, GitLab CI, or Azure DevOps.",
      mistake:
        "Checking test credentials (usernames, passwords, API keys) into source code or configuration files committed to Git. Use CI/CD secret variables (${{ secrets.TEST_PASSWORD }} in GitHub Actions) for all sensitive data. In the test code, read from environment variables: System.getenv('TEST_PASSWORD'). Leaked credentials in Git repositories are a security incident even for test environments.",
    },
    {
      id: "test-framework-design",
      number: "4.7",
      title: "Test Framework Design — Building What Lasts",
      icon: "🏛️",
      color: "red",
      intro:
        "A test framework is the infrastructure around your test scripts — base classes, utilities, reporting, data management, configuration, and the patterns that make the test suite maintainable at scale. Building a well-structured framework is what separates a script writer from an SDET. Framework design questions dominate senior automation interviews, and a well-structured framework on GitHub is the most impressive portfolio item for automation roles.",
      code: `// ── FRAMEWORK STRUCTURE ──────────────────────────────
//
// automation-framework/
// ├── src/
// │   ├── main/java/
// │   │   ├── base/
// │   │   │   ├── BaseTest.java          ← Setup/teardown, driver init
// │   │   │   └── BasePage.java          ← Common page utilities
// │   │   ├── pages/                     ← Page Object Model classes
// │   │   │   ├── LoginPage.java
// │   │   │   ├── DashboardPage.java
// │   │   │   └── ProductPage.java
// │   │   ├── api/                       ← API layer (RestAssured clients)
// │   │   │   └── ProductApiClient.java
// │   │   ├── utils/
// │   │   │   ├── ConfigReader.java      ← Read from config.properties
// │   │   │   ├── ExcelDataReader.java   ← Read test data from Excel
// │   │   │   ├── ScreenshotUtil.java    ← Capture screenshots
// │   │   │   └── WaitUtils.java         ← Custom waits
// │   │   ├── listeners/
// │   │   │   ├── ExtentReportListener.java  ← Rich HTML reports
// │   │   │   └── RetryAnalyzer.java         ← Retry flaky tests
// │   │   └── constants/
// │   │       ├── TestData.java          ← Static test data
// │   │       └── Urls.java              ← URL constants
// │   └── test/java/tests/               ← Actual test classes
// ├── src/test/resources/
// │   ├── config.properties              ← Environment configs
// │   ├── testdata/testdata.xlsx         ← Excel test data
// │   └── testng.xml                     ← Suite definition
// └── pom.xml

// ── BASE TEST — shared setup and teardown ─────────────

public abstract class BaseTest {
    protected WebDriver driver;
    protected WebDriverWait wait;
    private static final Logger log = LogManager.getLogger(BaseTest.class);

    @BeforeMethod(alwaysRun = true)
    public void initDriver(Method method) {
        String browser = ConfigReader.get("browser", "chrome");
        boolean headless = Boolean.parseBoolean(ConfigReader.get("headless", "false"));

        driver = DriverFactory.createDriver(browser, headless);
        driver.manage().window().maximize();
        driver.manage().timeouts().pageLoadTimeout(Duration.ofSeconds(30));
        wait = new WebDriverWait(driver, Duration.ofSeconds(10));

        log.info("Starting test: {} on {}", method.getName(), browser);
        ExtentReportManager.startTest(method.getName());
    }

    @AfterMethod(alwaysRun = true)
    public void tearDown(ITestResult result) {
        if (result.getStatus() == ITestResult.FAILURE) {
            String screenshotPath = ScreenshotUtil.capture(driver, result.getName());
            ExtentReportManager.addScreenshot(screenshotPath);
            ExtentReportManager.failTest(result.getThrowable());
            log.error("Test FAILED: {}", result.getName(), result.getThrowable());
        } else {
            ExtentReportManager.passTest();
            log.info("Test PASSED: {}", result.getName());
        }

        if (driver != null) driver.quit();
    }
}

// ── CONFIG READER — environment-aware configuration ──

public class ConfigReader {
    private static Properties props = new Properties();

    static {
        String env = System.getProperty("env", "staging");
        String configFile = "config-" + env + ".properties";

        try (InputStream is = ConfigReader.class.getClassLoader()
                                         .getResourceAsStream(configFile)) {
            props.load(is);
        } catch (IOException e) {
            throw new RuntimeException("Cannot load config: " + configFile);
        }
    }

    public static String get(String key) {
        // Priority: system property > env variable > config file
        String sysProp = System.getProperty(key);
        if (sysProp != null) return sysProp;

        String envVar = System.getenv(key.toUpperCase().replace(".", "_"));
        if (envVar != null) return envVar;

        return props.getProperty(key, "");
    }

    public static String get(String key, String defaultValue) {
        String value = get(key);
        return value.isEmpty() ? defaultValue : value;
    }
}

// ── RETRY ANALYZER — handle flaky tests ──────────────

public class RetryAnalyzer implements IRetryAnalyzer {
    private int retryCount = 0;
    private static final int MAX_RETRY = 2;

    @Override
    public boolean retry(ITestResult result) {
        if (retryCount < MAX_RETRY) {
            retryCount++;
            log.warn("Retrying test '{}' — attempt {}/{}", result.getName(), retryCount, MAX_RETRY);
            return true;
        }
        return false;
    }
}

// Apply to all tests via listener — no need to annotate each test
public class RetryListener implements IAnnotationTransformer {
    @Override
    public void transform(ITestAnnotation annotation, Class testClass,
                          Constructor testConstructor, Method testMethod) {
        annotation.setRetryAnalyzer(RetryAnalyzer.class);
    }
}`,
      usage:
        "Framework design is the skill that determines whether you get hired as a junior automation engineer (₹4–6 LPA) or a senior SDET (₹15–25 LPA). Senior roles require you to design the framework from scratch — BaseTest, ConfigReader, POM structure, reporting integration, CI/CD pipeline. A working framework on GitHub with all these components is the strongest portfolio piece for any automation role.",
      mistake:
        "Hardcoding test data (usernames, URLs, passwords) in test classes or page objects. When the environment changes (staging to production), you have to modify test code. Store all environment-specific values in config.properties files (one per environment) and read via ConfigReader. Test data (names, amounts, descriptions used in tests) should come from a @DataProvider or an external source — not hardcoded strings scattered across test classes.",
    },
  ],

  // ── SECTION 5: PREREQUISITES ─────────────────────────────────────
  prerequisites: [
    { item: "Basic Programming in Java or Python", done: false, note: "Mandatory — automation tests are code", detail: "Variables, conditionals, loops, functions/methods, basic OOP (classes, objects). You don't need to be a developer but you must be comfortable writing and reading code. Selenium uses Java in most Indian projects. Playwright supports JavaScript/TypeScript and Python." },
    { item: "HTML and CSS Basics", done: true, note: "Needed to write locators", detail: "Understanding HTML structure — tags, attributes, IDs, classes, XPath — is essential for locating elements in Selenium and Playwright. You need to read a web page's source code to find the right selector for a button or input." },
    { item: "Software Testing Fundamentals", done: false, note: "Know what you're automating before automating it", detail: "Test case writing, test scenarios, SDLC, STLC, types of testing (functional, regression, smoke, sanity). Manual testing experience is a significant advantage — you understand what to test before you automate it." },
    { item: "Basic SQL", done: true, note: "For test data setup and validation", detail: "SELECT queries to verify database state after test actions. INSERT to set up test data. Knowing SQL means you can verify that a form submission not only showed a success message but actually wrote the correct data to the database." },
    { item: "Command Line Basics", done: true, note: "Run tests from terminal and understand CI/CD commands", detail: "Navigate directories, run Maven commands (mvn test), run npm scripts (npm test). Understanding mvn test -Dgroups=smoke is necessary for CI/CD integration work." },
    { item: "Git Basics", done: true, note: "Version control for test code — required in every professional project", detail: "git clone, add, commit, push, pull, branch. Test frameworks are codebases and need version control. CI/CD pipelines trigger on git push — understanding this connection is fundamental." },
  ],

  // ── SECTION 6: ROADMAP ───────────────────────────────────────────
  roadmap: [
    {
      phase: "Beginner",
      label: "01",
      duration: "Weeks 1–5",
      color: "emerald",
      topics: [
        "Java basics for automation — OOP, collections, exception handling",
        "Selenium WebDriver setup — ChromeDriver, browser launch, navigation",
        "Locators — By.id, By.name, By.cssSelector, By.xpath",
        "Basic interactions — click, sendKeys, getText, isDisplayed",
        "WebDriverWait and ExpectedConditions — explicit waits",
        "TestNG basics — @Test, @BeforeMethod, @AfterMethod, assertions",
        "Running tests with Maven — mvn test",
        "Basic test reports — TestNG default HTML report",
      ],
      buildProjects: [
        "Login automation — automate login, invalid login, and logout for a demo site (like saucedemo.com)",
        "Form submission test — fill a registration form, submit, verify success message",
        "Search and filter test — search for a product, apply filters, verify results",
      ],
    },
    {
      phase: "Intermediate",
      label: "02",
      duration: "Weeks 6–12",
      color: "primary",
      topics: [
        "Page Object Model (POM) — design and implement",
        "TestNG advanced — @DataProvider, groups, parallel execution, testng.xml",
        "Handling dropdowns, alerts, frames, and windows",
        "File upload and download automation",
        "RestAssured API testing — GET, POST, PUT, DELETE, assertions",
        "API test framework with authentication and test data management",
        "Extent Reports — rich HTML test reports with screenshots",
        "TestNG listeners — screenshot on failure, retry analyzer",
        "Cross-browser testing setup",
        "Basic CI/CD — run tests with GitHub Actions",
      ],
      buildProjects: [
        "Full e-commerce test suite — login, search, add to cart, checkout flow with POM",
        "API test suite for a public REST API (Reqres.in or JSONPlaceholder) — all CRUD operations",
        "Data-driven test suite — run same test with 10 different user types from Excel or @DataProvider",
        "Framework with reporting — BaseTest, POM, Extent Reports, screenshot on failure",
      ],
    },
    {
      phase: "Advanced",
      label: "03",
      duration: "Weeks 13–22+",
      color: "purple",
      topics: [
        "Playwright — modern automation with TypeScript or Java",
        "Docker + Selenium Grid — parallel tests across distributed infrastructure",
        "BDD with Cucumber — Gherkin feature files, step definitions",
        "Performance testing with JMeter — load tests, stress tests, throughput analysis",
        "Mobile testing with Appium — iOS and Android test automation",
        "Database validation in tests — JDBC queries to verify data after actions",
        "Test data management — factories, builders, dedicated test data setup/teardown",
        "Visual regression testing — Percy, Applitools, or Playwright screenshots",
        "Contract testing with Pact — consumer-driven contract testing for microservices",
        "Full CI/CD pipeline — GitHub Actions with parallelism, reporting, Slack notifications",
      ],
      buildProjects: [
        "BDD framework with Cucumber — business-readable test scenarios for a complete application",
        "Performance test suite — JMeter scripts for API endpoints with 1000 concurrent users",
        "Full SDET portfolio framework — complete Maven project: Selenium POM + RestAssured API + Extent Reports + GitHub Actions CI",
      ],
    },
  ],

  // ── SECTION 7: USE CASES ─────────────────────────────────────────
  useCases: [
    { num: "01", title: "Regression Test Automation for Web Applications", body: "Every feature added to a web application risks breaking existing functionality. Automated regression suites test all existing features after every code change. A banking app with 500 test scenarios runs them in 20 minutes automatically — what would take a team of QAs 3 days to test manually. This is the primary use case for Selenium and Playwright in enterprise settings." },
    { num: "02", title: "API Contract Testing in Microservices", body: "In a microservices architecture with 20 services, a change to the User Service API can break the Order Service that consumes it. Automated API tests run on every deployment of every service — immediately catching broken contracts. RestAssured test suites validate request/response structure, status codes, and data integrity for every endpoint." },
    { num: "03", title: "CI/CD Pipeline Quality Gates", body: "Every organization doing continuous deployment uses automated tests as deployment gates. Code is deployed to production only if all tests pass. GitHub Actions, Jenkins, and GitLab CI run test suites automatically — failed tests block the merge or deployment. This is why automation testing is not optional in modern software teams." },
    { num: "04", title: "Cross-Browser and Cross-Device Compatibility", body: "Selenium Grid and Playwright's multi-browser support allow running the same test suite on Chrome, Firefox, Safari, and Edge simultaneously. This catches browser-specific rendering issues before users encounter them. Mobile browsers and device emulation extend this to responsive web testing." },
    { num: "05", title: "Performance and Load Testing", body: "JMeter scripts simulate thousands of concurrent users hitting an e-commerce checkout flow or a banking API. Load tests run before major product launches (sale events, new feature releases) to identify bottlenecks. Stress tests find the breaking point. Spike tests validate behavior when traffic suddenly increases 10x." },
    { num: "06", title: "BDD — Business-Readable Acceptance Tests", body: "Cucumber (Behavior Driven Development) lets business analysts and product managers write test scenarios in plain English (Gherkin syntax) that are then automated by engineers. 'Given I am a logged-in user, When I add a product to cart, Then my cart count increases to 1' becomes an automated test. This bridges the gap between business requirements and test implementation." },
    { num: "07", title: "Mobile Application Testing", body: "Appium automates real user flows on Android and iOS applications — tap, swipe, fill forms, verify screens. In India's mobile-first market, every consumer app needs automated mobile testing. Appium tests run on real device farms (AWS Device Farm, BrowserStack) in CI/CD pipelines, catching mobile-specific bugs before app store releases." },
  ],

  // ── SECTION 8: PROJECTS ──────────────────────────────────────────
  projects: {
    beginner: [
      { name: "Login Automation Suite", desc: "Automate valid login, invalid login (wrong password, wrong email), empty field validation, and logout for a demo site like saucedemo.com or automationpractice.com.", teaches: "Selenium setup, all locator strategies, explicit waits with WebDriverWait, TestNG @Test and assertions, BeforeMethod/AfterMethod structure" },
      { name: "E-Commerce Search and Filter", desc: "Automate searching for a product, applying category and price filters, sorting results, and verifying the correct products appear.", teaches: "Dropdown handling (Select class), dynamic elements, assertions on list elements, test organization with TestNG groups" },
      { name: "Form Validation Tests", desc: "Automate validation of a multi-field registration form — test required fields, email format, password strength, phone number format, and successful submission.", teaches: "Multiple locator strategies, CSS selectors, handling form elements, checking error messages, positive and negative test cases" },
      { name: "API Tests for a Public API", desc: "Write 10 RestAssured tests for a public REST API (JSONPlaceholder or Reqres.in) — GET all, GET one, POST create, PUT update, DELETE, and error scenarios.", teaches: "RestAssured setup, given/when/then syntax, JSON path assertions, status code verification, request/response logging" },
    ],
    intermediate: [
      { name: "Full E-Commerce Test Framework", desc: "Complete POM-based framework for an e-commerce site: LoginPage, ProductListPage, ProductDetailPage, CartPage, CheckoutPage. 30+ test cases covering all critical flows.", teaches: "Page Object Model design, BaseTest with setup/teardown, TestNG DataProvider, Extent Reports, screenshot on failure, Maven project structure" },
      { name: "API Test Suite with Auth and Cleanup", desc: "Complete RestAssured test suite for a REST API with JWT authentication, CRUD operations for multiple entities, data cleanup after tests, and validation of response schemas.", teaches: "Auth token management in API tests, response schema validation, test data cleanup patterns, API test framework design, TestNG groups for API tests" },
      { name: "Data-Driven Test Suite", desc: "A test suite where all test data (user accounts, product details, addresses) comes from Excel files or TestNG @DataProvider — run each test scenario with 5–10 data sets.", teaches: "Apache POI for Excel reading, @DataProvider patterns, parameterized tests, handling different data types, reporting test data in results" },
      { name: "GitHub Actions CI Pipeline", desc: "Set up a complete CI pipeline that runs your test suite on every push — headless Chrome, parallel execution, test report upload, failure screenshots as artifacts, Slack notification on failure.", teaches: "GitHub Actions YAML configuration, headless browser in CI, secrets management, artifact upload, multi-environment configuration" },
    ],
    advanced: [
      { name: "BDD Cucumber Framework", desc: "Full BDD framework with Cucumber: Gherkin feature files for login, product search, checkout, and order management. Step definitions, hooks, background, scenario outline with examples.", teaches: "Gherkin syntax, feature files, step definition patterns, Cucumber hooks, scenario outline with examples table, Cucumber-TestNG integration, living documentation" },
      { name: "Performance Test Suite with JMeter", desc: "JMeter test plan for an e-commerce API: login, product listing, product detail, add to cart, checkout. Load test with 100/500/1000 users. Response time, throughput, and error rate analysis.", teaches: "JMeter test plan design, thread groups, HTTP samplers, assertions, listeners, response time targets, interpreting load test results, bottleneck identification" },
      { name: "Complete SDET Portfolio Framework", desc: "Production-grade Maven framework: Selenium UI tests (POM), RestAssured API tests, database validation (JDBC), Extent Reports with screenshots, RetryAnalyzer, ConfigReader for multi-environment, GitHub Actions with parallel cross-browser execution and Slack notifications.", teaches: "Everything — this is the project that lands senior SDET roles. Framework architecture, SOLID principles in test code, environment management, CI/CD, reporting, all testing layers integrated" },
    ],
  },

  // ── SECTION 9: MISTAKES ──────────────────────────────────────────
  mistakes: [
    {
      title: "Using Thread.sleep() Instead of Explicit Waits",
      explanation: "Thread.sleep(3000) pauses for exactly 3 seconds regardless of whether the element is ready in 0.5 seconds or needs 4 seconds. It makes tests slow and brittle — too short on slow environments, wasteful on fast ones.",
      tip: "Use WebDriverWait with ExpectedConditions. It waits up to the timeout but proceeds immediately when ready. Common conditions: visibilityOfElementLocated, elementToBeClickable, urlContains, textToBePresentInElement.",
      wrong: "driver.findElement(By.id('submit')).click(); Thread.sleep(3000); Assert.assertEquals(...)",
      correct: "driver.findElement(By.id('submit')).click(); wait.until(ExpectedConditions.urlContains('/success')); Assert.assertEquals(...)",
    },
    {
      title: "Using XPath Everywhere as the Only Locator Strategy",
      explanation: "XPath like //div[@class='container']/div[2]/form/input[3] is brittle — it breaks when any parent element changes. It is also slower than other locator strategies.",
      tip: "Priority order for locators: id > name > CSS selector > data-testid > XPath. Use XPath only when no stable ID, name, or data-testid exists — and then use relative XPath, not absolute paths from root.",
      wrong: "By.xpath('//html/body/div[1]/div[2]/form/div[1]/input')",
      correct: "By.id('email') or By.cssSelector('[data-testid=\"email-input\"]')",
    },
    {
      title: "Not Implementing Page Object Model",
      explanation: "Writing locators and interactions directly in test methods means a single UI change (renaming a button's ID) requires updating every test that uses it. In large suites, this is a maintenance nightmare.",
      tip: "Always use POM. One page = one class. Locators defined once in the page class. Tests call page methods. When UI changes, update one class — all tests using it are automatically fixed.",
    },
    {
      title: "Tests That Depend on Each Other",
      explanation: "Test 2 fails because Test 1 didn't run (or ran in a different order). Tests sharing state through static variables or relying on the previous test's browser state create fragile, unpredictable suites.",
      tip: "Every test must be independent and self-contained. Set up required state in @BeforeMethod. Clean up in @AfterMethod. Tests should pass regardless of the order they run in or whether other tests ran at all.",
    },
    {
      title: "Asserting Only the Happy Path",
      explanation: "Writing automation only for successful flows misses the bugs that matter most. What happens when a user enters an invalid email? When payment fails? When the server returns an error? These scenarios are where bugs hide.",
      tip: "For every positive test, write at least one negative test. Test boundary conditions, invalid input, empty fields, timeout scenarios, and error responses. The automation value is catching regressions in both happy and unhappy paths.",
    },
    {
      title: "Not Taking Screenshots on Failure",
      explanation: "A test fails with 'Element not found'. Without a screenshot, you have no idea what the browser looked like when it failed — was the page even loaded? Was there an error dialog? Debugging is nearly impossible.",
      tip: "Configure screenshot capture in @AfterMethod when ITestResult.getStatus() == FAILURE. Embed screenshots in Extent Reports. In Playwright, configure screenshot: 'only-on-failure' in the config. Screenshots are the most valuable debugging tool in UI automation.",
    },
    {
      title: "Hardcoding URLs, Credentials, and Test Data in Test Classes",
      explanation: "When the staging URL changes or test credentials rotate, you must search and update every test class. In a 200-test suite, this takes hours and introduces typo-based errors.",
      tip: "Use a ConfigReader that reads from properties files (config-staging.properties, config-prod.properties) or environment variables. Test data goes in @DataProvider methods or Excel files — not hardcoded in @Test methods.",
    },
    {
      title: "Automating Everything Including Exploratory Areas",
      explanation: "Not everything should be automated. One-time tests, rarely-changing features with high automation cost, exploratory testing, usability validation — these are better done manually. Automating these wastes time and creates fragile tests.",
      tip: "Automate what is: run frequently (regression), has clear pass/fail criteria, time-consuming to do manually, and stable (not changing every sprint). Manual testing remains essential for exploratory, usability, and one-time scenarios.",
    },
    {
      title: "Running Tests Serially When Parallel Is Possible",
      explanation: "A 200-test suite run serially takes 40 minutes. The same suite with parallel='methods' thread-count='4' in testng.xml takes 10 minutes. Teams lose this speedup simply by not configuring it.",
      tip: "Ensure tests are thread-safe (no shared mutable state, each test creates its own driver via ThreadLocal<WebDriver>). Then enable parallel execution in testng.xml. This is one of the most impactful framework improvements available.",
      wrong: "<suite parallel='none'>",
      correct: "<suite parallel='methods' thread-count='4'> // With ThreadLocal<WebDriver> in BaseTest",
    },
    {
      title: "Not Cleaning Up Test Data After API Tests",
      explanation: "Creating users, products, or orders in API tests and not deleting them pollutes the test database. After 100 test runs, there are 100 'Test User' accounts, breaking tests that check account counts or search results.",
      tip: "Use @AfterMethod or @AfterClass to delete all resources created during the test. Track created resource IDs (store in a list during @Test, delete in @AfterMethod). Or use a dedicated test database that's reset between test runs.",
    },
    {
      title: "Not Using Soft Assertions for Multi-Element Page Validation",
      explanation: "Testing a product page with 10 elements using hard Assert.assertTrue() stops at the first failure. You only know one element is broken even though 4 might be. You rerun, fix one, rerun, find the next...",
      tip: "Use SoftAssert when validating multiple independent elements on the same page. All failures are collected and reported together at softAssert.assertAll(). Hard assertions are correct for critical preconditions (login success, correct URL) that make continuing meaningless if they fail.",
    },
    {
      title: "Ignoring Flaky Tests Instead of Fixing Them",
      explanation: "A test that passes 8 out of 10 times is a flaky test. Teams start ignoring failures ('oh, just rerun it'), the suite loses credibility, and developers stop trusting the CI result. Flaky tests are worse than no tests.",
      tip: "When a test is flaky: add explicit waits for the specific element causing it, check for race conditions, use retry analyzer as a temporary measure while investigating root cause. Never leave a known flaky test unaddressed. Root-cause and fix — don't paper over with retries.",
    },
  ],

  // ── SECTION 10: INTERVIEW QUESTIONS ─────────────────────────────
  interviewQuestions: {
    beginner: [
      { q: "What is automation testing and why is it needed?", a: "Automation testing uses scripts and tools to execute test cases automatically without human intervention. It is needed because: manual testing cannot scale with frequent releases (CI/CD requires tests to run on every code push), automated tests are faster and more consistent than manual execution, regression testing of 500 features after every change is impractical manually, and automation provides immediate feedback to developers." },
      { q: "What is Selenium WebDriver and how does it work?", a: "Selenium WebDriver is a library that provides a programming API to control web browsers. It works by communicating with the browser's native automation protocol (Chrome DevTools Protocol for Chrome, GeckoDriver for Firefox). Your Java code calls WebDriver methods → WebDriver converts them to browser commands → browser executes them (navigate, click, type) → browser returns results to your code." },
      { q: "What are the different types of locators in Selenium?", a: "By.id (fastest, most reliable — use when available), By.name, By.className, By.tagName, By.linkText, By.partialLinkText, By.cssSelector (fast, flexible — second preference), By.xpath (most powerful, slowest — last resort). Priority: id > name > CSS selector > XPath. Avoid absolute XPaths that start from the HTML root." },
      { q: "What is the difference between implicit wait, explicit wait, and Thread.sleep()?", a: "Thread.sleep(ms): fixed pause — always waits full duration, makes tests slow and brittle. Implicit wait: tells WebDriver to poll the DOM for a specified time when finding elements — applies globally. Explicit wait (WebDriverWait + ExpectedConditions): waits up to a maximum time for a specific condition (element visible, URL changes) — proceeds immediately when condition met. Use explicit waits. Never use Thread.sleep()." },
      { q: "What is the Page Object Model (POM)?", a: "POM is a design pattern where each web page has a corresponding Java class (page object) that encapsulates that page's locators and interactions. Tests call page object methods rather than writing raw WebDriver code. Benefits: when UI changes, update only the page class — all tests using it are automatically updated. Locators defined once. Tests are more readable. Reduces code duplication." },
      { q: "What is TestNG and what are its main annotations?", a: "@Test marks a test method. @BeforeSuite/@AfterSuite run once for the entire suite. @BeforeClass/@AfterClass run once per test class. @BeforeMethod/@AfterMethod run before/after each test method. @DataProvider supplies test data. @Parameters passes values from testng.xml. TestNG provides test grouping, parallel execution, dependency management, and detailed HTML reports." },
      { q: "What is the difference between Assert and SoftAssert?", a: "Assert (hard assertion): stops test execution immediately when a failure occurs. Use for critical conditions — if these fail, continuing the test makes no sense. SoftAssert: collects all failures without stopping execution. Call softAssert.assertAll() at the end to report all failures together. Use when validating multiple independent elements where you want to know about all failures in one run." },
      { q: "How do you handle dropdowns in Selenium?", a: "For standard HTML <select> elements: use the Select class — new Select(driver.findElement(By.id('dropdown'))). Then: selectByVisibleText('Option'), selectByValue('val'), selectByIndex(2). For custom dropdowns (non-select): click to open, then click the option using its locator. Check the HTML — if it's a <select> tag, use the Select class. If it's a custom div/ul, use regular click interactions." },
      { q: "What is a test framework and what components does it typically have?", a: "A test framework is the infrastructure around test scripts: Base classes (common setup/teardown), Page Objects (POM classes), Utilities (ConfigReader, WaitUtils, ScreenshotUtil), Listeners (screenshot on failure, ExtentReport integration), Test data management (DataProvider, Excel reader), Configuration (properties files per environment), Reporting (Extent Reports, Allure), and CI/CD pipeline integration (GitHub Actions, Jenkins)." },
      { q: "What is the difference between Selenium and Playwright?", a: "Selenium: older, uses WebDriver protocol, requires explicit waits, multiple separate setup components (driver, wait, assertions), most common in Indian enterprise. Playwright: newer (2020), auto-waits for element actionability, built-in parallelism and reporting, network interception, multi-browser from one install, faster and more reliable for new projects. Both are valid — Selenium for legacy/enterprise, Playwright for new projects." },
    ],
    intermediate: [
      { q: "How do you implement parallel test execution in TestNG?", a: "In testng.xml: set parallel='methods' (or 'tests', 'classes', 'instances') and thread-count='4'. Critical: use ThreadLocal<WebDriver> in BaseTest — each thread needs its own browser instance, never share a driver. ThreadLocal.set(driver) in @BeforeMethod, ThreadLocal.get() in tests, ThreadLocal.remove() in @AfterMethod. Test classes must have no shared mutable state between tests." },
      { q: "How do you handle dynamic elements and elements that are not always present?", a: "Use WebDriverWait with ExpectedConditions.visibilityOfElementLocated() — waits until visible. For elements that may or may not exist, use findElements() (returns a list — empty if not found, no exception) and check list.size() > 0. For elements that appear after a user action, wait for the triggering action to complete before looking for the resulting element." },
      { q: "What is a @DataProvider in TestNG and when do you use it?", a: "@DataProvider annotates a method that returns Object[][] — a matrix of test data. The test method with dataProvider='providerName' runs once per row. Use it when: the same test logic needs to run with multiple input sets (different user types, different product data), boundary values, or valid/invalid data combinations. It's the foundation of data-driven testing in TestNG." },
      { q: "How do you take a screenshot on test failure?", a: "Implement TestNG's ITestListener (or use @AfterMethod with ITestResult parameter). In the onTestFailure() method (or when result.getStatus() == ITestResult.FAILURE): cast driver to TakesScreenshot, call getScreenshotAs(OutputType.FILE), copy to a test-output folder with the test name and timestamp, embed the path in the Extent Report." },
      { q: "How do you handle multiple browser windows or tabs in Selenium?", a: "Get all window handles: Set<String> handles = driver.getWindowHandles(). Store the original handle: String original = driver.getWindowHandle(). To switch to a new window: for(String handle : handles){ if(!handle.equals(original)) driver.switchTo().window(handle); }. Perform actions in the new window. Switch back: driver.switchTo().window(original)." },
      { q: "How do you design an API test framework with RestAssured?", a: "Structure: BaseAPITest class (sets baseURI, authentication token setup), separate client classes per resource (ProductApiClient, UserApiClient with methods for each operation), request/response POJOs for serialization, test classes that call client methods. @BeforeClass handles authentication. @AfterClass or @AfterMethod deletes created test data. Separate configuration per environment via ConfigReader." },
      { q: "What is BDD and how is Cucumber used in test automation?", a: "BDD (Behavior Driven Development) describes behavior in plain language understandable to all stakeholders. Cucumber uses Gherkin syntax in .feature files (Given/When/Then scenarios). Step definitions map Gherkin steps to Java code that executes the automation. Benefits: test scenarios readable by business teams, scenarios serve as living documentation, shared understanding between dev/QA/business. Cucumber integrates with TestNG or JUnit." },
      { q: "How do you integrate automation tests into a CI/CD pipeline?", a: "For GitHub Actions: create .github/workflows/test.yml triggered on push/PR. Steps: checkout code, setup Java/Node, install browser, run mvn test (or npm test) with headless=true and environment variables from secrets. Upload test reports and failure screenshots as artifacts. Use needs: smoke-tests to run regression only after smoke passes. The pipeline blocks merges/deployments if tests fail." },
      { q: "How do you handle dynamic XPath when element attributes change?", a: "Use relative XPath with stable attributes: //input[@placeholder='Email'] or //button[contains(text(),'Login')]. Use contains() for partial matching: //div[contains(@class,'error')]. Use ancestor/following-sibling for navigation: //label[text()='Email']/following-sibling::input. Prefer CSS selectors over XPath when possible — they're faster and often more readable. Best solution: ask developers to add data-testid attributes." },
      { q: "What is the RetryAnalyzer in TestNG and when should you use it?", a: "RetryAnalyzer implements IRetryAnalyzer with a retry() method that returns true (retry) or false (stop). It re-executes failed tests up to a configured count. Use it sparingly — only as a temporary measure for genuinely flaky tests (network timeouts, timing issues in test environments). Never use it to hide real bugs. Always investigate why a test is flaky and fix the root cause — retries just defer the problem." },
    ],
    advanced: [
      { q: "How would you design a complete test automation framework from scratch?", a: "Maven project structure: src/main/java for framework code (base, pages, utils, listeners), src/test/java for tests. BaseTest with ThreadLocal<WebDriver> for thread safety. ConfigReader for environment-based configuration. POM classes. RestAssured API layer. ExtentReport listener. RetryAnalyzer. testng.xml with parallel execution. GitHub Actions pipeline running smoke (fast gate) then regression (parallel browsers). ReadMe with setup instructions." },
      { q: "How do you ensure thread safety in parallel Selenium tests?", a: "Use ThreadLocal<WebDriver>: private static ThreadLocal<WebDriver> driverThread = new ThreadLocal<>(). In @BeforeMethod: driverThread.set(createDriver()). In tests: use getDriver() method returning driverThread.get(). In @AfterMethod: driverThread.get().quit(); driverThread.remove(). Never use static WebDriver fields — they're shared across threads, causing race conditions." },
      { q: "What is Selenium Grid and how does it work?", a: "Selenium Grid allows running tests on multiple machines/browsers simultaneously. Hub: receives test requests and routes them to available nodes. Nodes: machines with browsers that execute tests. Docker Selenium Grid (docker-compose with hub + node containers) is the modern approach. Your tests point to Grid hub URL instead of local WebDriver. Grid enables scaling to hundreds of parallel test executions across different OS/browser combinations." },
      { q: "How do you handle test data management at scale?", a: "Strategies: (1) Test data factories — programmatically generate test data via API calls in @BeforeMethod, delete in @AfterMethod. (2) Database seeding — populate test DB with known data before suite, reset after. (3) Data isolation — each test creates its own unique data (timestamp-based usernames prevent conflicts). (4) Test data as code — data builder classes with fluent API. Avoid shared test data that tests depend on — causes ordering dependencies and pollution." },
      { q: "What is contract testing with Pact and when do you use it?", a: "Contract testing verifies that services can communicate correctly — the consumer defines what it expects from the provider (the contract), and the provider verifies it meets that contract. Pact is the most popular tool. Use in microservices where: integration tests are slow/flaky, you need fast verification that service interfaces are compatible, teams own separate services and deploy independently. Pact tests run in seconds without running the actual consumer service." },
      { q: "How do you perform visual regression testing?", a: "Visual regression testing compares screenshots pixel-by-pixel to detect unintended UI changes. Tools: Playwright's built-in screenshot comparison (toHaveScreenshot), Percy (cloud-based, AI comparison), Applitools (AI-powered visual AI). Process: run tests, capture baseline screenshots, on subsequent runs compare against baseline, flag visual differences. Useful for detecting CSS regressions, layout breaks across browsers, and UI component changes." },
      { q: "How do you measure and improve test suite performance?", a: "Measure: record total runtime, identify slowest tests (TestNG reports, Extent Reports execution time). Improve: (1) Parallel execution (biggest gain — 4 threads = ~4x faster). (2) Replace Thread.sleep() with explicit waits. (3) Run API tests instead of UI tests where business logic validation is the goal. (4) Optimize page object selectors (id > CSS > XPath). (5) Headless browser is 20–30% faster than headed. (6) Remove duplicate or redundant test cases." },
      { q: "What is the difference between load testing, stress testing, and spike testing?", a: "Load testing: apply expected production load, verify response times and error rates meet targets (e.g., 1000 users, 2-second response time SLA). Stress testing: gradually increase load beyond normal until the system breaks — find the breaking point and verify graceful degradation. Spike testing: suddenly apply a large load (10x normal in seconds) — simulate flash sale, viral event, verify system handles the spike without data corruption or extended downtime." },
      { q: "How do you handle authentication in automated tests across different scenarios?", a: "UI tests: use the app's login UI for tests that test the login flow itself. For all other tests that need an authenticated state, use API authentication (call the login API, get JWT token, set it as a cookie/localStorage via JavaScript executor) — faster than UI login repeated for every test. API tests: call the auth endpoint in @BeforeClass, store token, include in all subsequent requests' Authorization header. Never hardcode credentials — use environment variables." },
      { q: "What is your approach to maintaining a test suite as the application changes?", a: "Prevention: use data-testid attributes (stable selectors), POM (single update point), abstraction layers (test calls page method, not raw driver). Detection: CI runs on every commit — failures detected immediately. Maintenance process: when tests fail due to UI changes, update the POM class only. Quarterly review: identify and remove tests for deprecated features, add tests for new features. Tag tests by area (login, checkout, payments) — when developers change payments, run that group first. Treat the test suite as a first-class codebase — code reviews, refactoring, documentation." },
    ],
  },

  // ── SECTION 11: COMPARISON ───────────────────────────────────────
  comparison: {
    headers: ["Feature", "Selenium", "Playwright", "Cypress"],
    rows: [
      { feature: "Language Support", react: "Java, Python, JS, C#, Ruby", vue: "Java, Python, JS/TS, C#", angular: "JavaScript / TypeScript only" },
      { feature: "Browser Support", react: "Chrome, Firefox, Edge, Safari", vue: "Chromium, Firefox, WebKit", angular: "Chrome, Firefox, Edge (Chromium-based)" },
      { feature: "Auto-Waiting", react: "No — explicit waits required", vue: "Yes — waits for actionability", angular: "Yes — built-in retry-ability" },
      { feature: "Speed", react: "Moderate", vue: "Fast", angular: "Fast (same process as app)" },
      { feature: "Network Interception", react: "Limited (BrowserMob Proxy)", vue: "Built-in — route() API", angular: "Built-in — cy.intercept()" },
      { feature: "Parallel Execution", react: "Via Selenium Grid / TestNG", vue: "Built-in (shards + workers)", angular: "Paid plan for cloud parallelism" },
      { feature: "Indian Job Market", react: "Most required — enterprise/IT services", vue: "Growing fast — product companies", angular: "Less common — startup preference" },
      { feature: "Mobile Testing", react: "Via Appium", vue: "Mobile emulation built-in", angular: "No real mobile support" },
      { feature: "Learning Curve", react: "Moderate — needs Java + configuration", vue: "Low-Moderate — modern API", angular: "Low — JavaScript only, all-in-one" },
    ],
  },

  // ── SECTION 12: PROS & CONS ──────────────────────────────────────
  pros: [
    "Massive speed advantage — 500 automated tests in 15 minutes vs 3 days manual testing",
    "Consistency — same steps, same assertions, every run — no human error or fatigue",
    "CI/CD integration — automatic quality gates on every code change, instant feedback to developers",
    "Scalability — run on 10 machines in parallel at no extra per-test cost once framework is built",
    "Regression safety net — change code confidently knowing tests will catch regressions immediately",
    "Cross-browser/device coverage — test on Chrome, Firefox, Safari, mobile simultaneously without manual effort",
    "Comprehensive reporting — screenshots, videos, execution time, failure trends — visibility manual testing can't match",
  ],
  cons: [
    "Initial investment is high — building a proper framework takes weeks before the first test provides value",
    "Maintenance burden — UI changes break locators, framework needs continuous updates as app evolves",
    "Cannot replace exploratory testing — automation only tests what you programmed; it cannot discover unexpected issues",
    "Flaky tests erode trust — intermittent failures cause teams to ignore CI results, defeating the purpose",
    "Requires programming skills — QAs without coding background need upskilling before they contribute",
    "Not suitable for all test types — usability, accessibility, and visual design cannot be fully automated",
    "Setup complexity — Selenium Grid, Docker, cross-browser configuration, CI/CD pipeline integration takes significant time",
  ],

  // ── SECTION 13: FUTURE SCOPE ─────────────────────────────────────
  futureScope: [
    "AI-powered test generation is arriving. Tools like Testim, Mabl, and GitHub Copilot for tests can generate test scripts from user stories or record-and-replay sessions. But AI-generated tests still require human review, maintenance, and framework integration — automation engineers who understand what makes a good test remain essential. AI raises the floor; it doesn't replace the ceiling.",
    "The shift from Manual Tester to SDET is accelerating in India. IT services companies (TCS, Infosys, Wipro) are explicitly retraining their QA bench in automation skills. Companies that traditionally had 1 developer to 2 QAs are moving to 1 SDET to 5 developers. This ratio shift means fewer but much higher-paid QA roles — the premium for automation skills will grow through 2030.",
    "Playwright is on track to overtake Selenium as the dominant browser automation tool for new projects by 2027. Companies starting new automation initiatives in 2026 are predominantly choosing Playwright. However, the enormous installed base of Selenium projects in Indian enterprise means Selenium knowledge remains valuable for maintenance and migration roles for the next 5–7 years.",
    "Shift-left testing and quality engineering are becoming standard in DevOps-mature organizations. Rather than testing at the end of development, tests are written alongside code — sometimes before (TDD, BDD). SDETs embedded in development teams (not separate QA teams) who can code test frameworks, review pull requests, and contribute to CI/CD pipelines are the most valued engineering profiles in product companies.",
    "Performance engineering and chaos engineering are the next skill layer above automation testing. As systems become more distributed (microservices, Kubernetes), validating that the system holds up under stress and failures becomes as important as functional correctness. JMeter, k6, and Gatling skills combined with chaos engineering tools (Chaos Monkey, LitmusChaos) represent the senior SDET career trajectory.",
  ],

  // ── SECTION 14: ACTION PLAN ──────────────────────────────────────
  actionPlan: [
    { week: "Week 1–2", title: "Java and Selenium Basics", desc: "If you don't know Java: spend one week on OOP basics, collections, and exception handling. Then: set up a Maven project, add Selenium dependency, write your first test that opens Chrome, navigates to saucedemo.com, and asserts the page title. Learn all locator types by inspecting real pages. Get WebDriverWait working. Do not move on until you can write a 10-step test without copy-pasting." },
    { week: "Week 3–4", title: "TestNG and Your First Real Suite", desc: "Learn @BeforeMethod, @AfterMethod, and Assert. Write 10 test cases for the saucedemo.com login page — valid login, invalid login, empty fields, locked-out user, remember-me functionality. Organize them with TestNG groups (smoke, regression). Run the suite and view the default TestNG report. This is your first real test suite." },
    { week: "Week 5–6", title: "Page Object Model Implementation", desc: "Refactor your existing tests to use POM. Create LoginPage, InventoryPage, CartPage classes. Update your tests to use page methods instead of raw driver calls. Add a BaseTest class with driver setup and teardown. Verify that a change to a locator in the LoginPage only requires one update. This refactoring exercise teaches POM better than any tutorial." },
    { week: "Week 7–9", title: "API Testing and Reporting", desc: "Add RestAssured to your Maven project. Write 15 API tests for a public REST API (Reqres.in or JSONPlaceholder). Then integrate Extent Reports into your framework — screenshots on failure, test names and descriptions in the report. Now you have a framework with both UI and API testing layers and professional reporting." },
    { week: "Week 10–12", title: "CI/CD and Portfolio Project", desc: "Set up GitHub Actions to run your test suite headlessly on every push. Add secrets for credentials. Upload the Extent Report as an artifact. Push your framework to a public GitHub repository with a clear README (setup instructions, how to run, what is tested). This is your portfolio piece — this GitHub link goes on your resume." },
    { week: "Week 13+", title: "Interview Preparation and Job Push", desc: "Study automation testing interview questions — POM explanation, Thread.sleep vs explicit waits, parallel execution, screenshot on failure, framework design. Practice explaining your framework to an interviewer (describe architecture, why you made each design decision). Apply to SDET and Automation Engineer roles — both at IT services companies (TCS iON, Infosys BPM, Wipro HOLMES) for stability, and product companies for higher pay. A working GitHub framework + ability to explain design choices = hired." },
  ],
};
