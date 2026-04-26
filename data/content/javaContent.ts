import type { TechContent } from './types';

export const javaContent: TechContent = {
  techId: 'java',
  readTime: '30–35 min',
  difficulty: 'Beginner to Advanced',
  lastUpdated: '2026',

  // ── OPENING HOOK ─────────────────────────────────────────────────
  openingHook:
    "Java has been the number one programming language for enterprise software for over 25 years — and in 2026, it is not even close to stepping down. Every major Indian bank, every insurance company, every large IT services firm (TCS, Infosys, Wipro, HCL), and a significant portion of product companies run their core systems on Java. Android app development, Spring Boot microservices, big data processing with Apache Kafka and Spark, and enterprise application servers — all Java. The language that beginners dismiss as 'verbose' is the same one that processes your UPI payments, runs your mutual fund portfolio, and handles your airline booking. For a fresher in India, Java is the most reliable path to a stable, well-paying software job. The IT services sector alone posts over 1,00,000 Java-related openings per year. A developer with strong Java fundamentals and Spring Boot knowledge walks into interviews that pay ₹4–12 LPA as a fresher, and ₹18–40 LPA at mid-level with system design depth. This Java tutorial for beginners is your complete, no-shortcuts roadmap.",

  // ── SECTION 1: INTRODUCTION ──────────────────────────────────────
  introText: [
    "Java is a class-based, object-oriented, statically typed, general-purpose programming language developed by James Gosling at Sun Microsystems and released in 1995. Its defining design principle — 'Write Once, Run Anywhere' (WORA) — means compiled Java bytecode runs on any device with a Java Virtual Machine (JVM), regardless of the underlying operating system or hardware. This platform independence made Java the dominant enterprise language globally.",
    "Java solves the problem of fragmentation in software deployment. Before JVM-based languages, you had to recompile and often rewrite software for each operating system. Java's bytecode model eliminated that. A banking application compiled on a Windows developer machine runs identically on a Linux production server and a macOS staging environment — without recompilation. That reliability at scale is why enterprises never left Java.",
    "In 2026, Java's reach extends far beyond enterprise web applications. It powers Android's 3 billion active devices (Android SDK is Java/Kotlin based), Apache Kafka (distributed event streaming), Apache Spark (big data processing), Elasticsearch (search engine), and Minecraft (the world's best-selling video game). Understanding Java means understanding the underpinnings of a huge portion of the world's software infrastructure.",
  ],

  realWorldUsages: [
    "UPI and NPCI payment infrastructure — core payment processing systems in India run on Java",
    "HDFC NetBanking, SBI YONO, ICICI iMobile — Java powers the backend of every major Indian bank's digital platform",
    "Android — Java and Kotlin (JVM language) are the official Android development languages",
    "Apache Kafka, Apache Spark, Hadoop — the big data ecosystem is built on Java and the JVM",
    "Amazon, LinkedIn, eBay — use Java for critical backend services handling billions of transactions",
    "Minecraft, IntelliJ IDEA, Eclipse — popular desktop software built entirely in Java",
    "Infosys, TCS, Wipro, HCL — deliver the vast majority of enterprise client projects in Java",
  ],

  // ── SECTION 2: WHY LEARN ─────────────────────────────────────────
  whyLearn: {
    demand:
      "Java is the most posted programming language in Indian job listings by an enormous margin. Naukri.com consistently shows 1,50,000+ active Java job postings at any given time. Every IT services company, every bank's technology division, every insurance company's IT team, and a significant chunk of product companies run on Java. Learning Java step by step is the single most reliable path to employment in the Indian software industry — not the most glamorous, but the most consistent.",
    jobRoles: [
      { role: "Java Developer (Backend)", desc: "Build and maintain enterprise applications, REST APIs, and server-side logic. The most common Java role in IT services and product companies." },
      { role: "Java Full-Stack Developer", desc: "Java backend (Spring Boot) with Angular or React frontend. Standard in enterprise product companies and large IT services projects." },
      { role: "Android Developer", desc: "Build Android apps using Java (and increasingly Kotlin). One of the largest mobile developer markets in India." },
      { role: "Software Engineer (Enterprise)", desc: "TCS, Infosys, Wipro digital transformation projects — Java is the default language on most client engagements." },
      { role: "Big Data Engineer", desc: "Apache Kafka, Spark, and Hadoop are Java/Scala based. Data engineering roles increasingly require JVM language knowledge." },
    ],
    whyCompanies: [
      { reason: "Decades of proven reliability", detail: "Java enterprise systems have run in production for 20+ years. Banks and financial institutions trust it for mission-critical systems handling real money." },
      { reason: "Strong type safety", detail: "Static typing catches bugs at compile time, not at 2 AM in production. For banking software processing billions of rupees, this matters enormously." },
      { reason: "JVM performance", detail: "JIT compilation makes long-running Java applications extremely fast. The JVM warms up and optimizes hot code paths over time." },
      { reason: "Ecosystem maturity", detail: "Maven Central has 500,000+ libraries. Every enterprise problem — messaging, caching, security, ORM, testing — has a mature, battle-tested Java library." },
    ],
    salaryRange: "₹3.5 LPA – ₹8 LPA (Freshers) | ₹10 LPA – ₹28 LPA (Mid-Level, 3–5 years with Spring Boot + system design)",
    careerNote:
      "Java is not just a job — it's a career infrastructure. Once you know Core Java well, every adjacent technology is accessible: Spring Boot (enterprise backend), Android (mobile), Apache Kafka (event streaming), Spark (big data), Kotlin (modern JVM), and microservices architecture. Senior Java architects at Indian product companies and banks command ₹35–70 LPA. The path is long but the ceiling is very high.",
  },

  // ── SECTION 3: HOW IT WORKS ──────────────────────────────────────
  howItWorks: {
    intro:
      "Think of Java like a universal translator for computers. You write your program in Java (human-readable). The Java compiler (javac) translates it into bytecode — a middle language that no CPU understands natively but is not tied to any specific operating system either. Then the Java Virtual Machine (JVM) on each computer translates that bytecode into machine-specific instructions in real time. Same bytecode, any machine — that's 'Write Once, Run Anywhere'.",
    vdomSteps: [
      { num: "1", title: "Source Code (.java)", text: "You write Java source code in .java files. The code is human-readable, object-oriented, and statically typed — the compiler knows every variable's type before running anything." },
      { num: "2", title: "Compilation (javac)", text: "The Java compiler (javac) converts .java source files into .class files containing Java bytecode. Bytecode is not machine code — it's an intermediate representation designed for the JVM, not any specific CPU." },
      { num: "3", title: "Class Loading", text: "When you run the program, the JVM's class loader loads the .class files into memory. It resolves dependencies, verifies bytecode validity, and prepares classes for execution." },
      { num: "4", title: "JIT Compilation", text: "The JVM's Just-In-Time (JIT) compiler monitors code execution. Frequently executed 'hot' code paths are compiled to native machine code for the specific hardware — making long-running Java applications extremely fast." },
      { num: "5", title: "Garbage Collection", text: "The JVM's Garbage Collector automatically manages memory — allocating objects on the heap and reclaiming memory from objects that are no longer reachable. You don't manually allocate or free memory like in C/C++." },
    ],
    componentCode: `// THE JAVA EXECUTION PIPELINE

// 1. You write source code: HelloWorld.java
public class HelloWorld {
    public static void main(String[] args) {
        String message = "Hello, Java!";
        System.out.println(message);
    }
}

// 2. Compile: javac HelloWorld.java
// Produces: HelloWorld.class (bytecode)

// 3. Run: java HelloWorld
// JVM loads HelloWorld.class, JIT compiles hot paths,
// GC manages memory — output: Hello, Java!

// Under the hood — what the JVM does with this:
// - Allocates "Hello, Java!" String on the heap
// - main() frame pushed onto the call stack
// - System.out.println() executes via native I/O
// - main() frame popped from stack
// - GC eventually collects the String (no more references)

// Platform independence demonstrated:
// Same HelloWorld.class runs on:
// ✅ Windows 10 (64-bit)
// ✅ Ubuntu Linux 22.04 (ARM)
// ✅ macOS Ventura (Apple Silicon)
// ✅ Any server with JVM installed`,
    renderCycle: [
      "Write .java source code → javac compiles to .class bytecode files",
      "java command launches JVM → Class Loader loads required .class files",
      "Bytecode Verifier checks for security violations → Interpreter begins execution",
      "JIT Compiler identifies hot code paths → Compiles to native machine code for speed",
      "Garbage Collector runs concurrently → Reclaims memory from unreachable objects",
    ],
    closingNote:
      "The JVM is what makes Java special. It's not just a runtime — it's a managed execution environment that handles memory, security, performance optimization, and platform abstraction. Understanding that Java programs run on the JVM (not directly on the OS) explains why Java apps are portable, why they use more memory than C programs, and why they get faster over time as the JIT compiler warms up.",
  },

  // ── SECTION 4: CORE CONCEPTS ─────────────────────────────────────
  coreConcepts: [
    {
      id: "oop-fundamentals",
      number: "4.1",
      title: "Object-Oriented Programming — The Four Pillars",
      icon: "🏛️",
      color: "blue",
      intro:
        "Java is built entirely around Object-Oriented Programming. Every Java program is a collection of objects — instances of classes — that interact with each other. The four OOP pillars — Encapsulation, Inheritance, Polymorphism, and Abstraction — are not just theoretical concepts. They are the design tools you use every day to write maintainable code, and they appear in virtually every Java interview at every level.",
      code: `// ── ENCAPSULATION — hide data, expose behavior ──────
public class BankAccount {
    private String accountNumber; // Private — can't access directly
    private double balance;       // Private — controlled access only
    private String owner;

    public BankAccount(String accountNumber, String owner, double initialBalance) {
        this.accountNumber = accountNumber;
        this.owner = owner;
        this.balance = Math.max(0, initialBalance); // Enforce business rule in constructor
    }

    // Controlled access through methods
    public double getBalance() { return balance; }
    public String getOwner() { return owner; }

    public void deposit(double amount) {
        if (amount <= 0) throw new IllegalArgumentException("Deposit must be positive");
        this.balance += amount;
    }

    public void withdraw(double amount) {
        if (amount <= 0) throw new IllegalArgumentException("Amount must be positive");
        if (amount > balance) throw new IllegalStateException("Insufficient funds");
        this.balance -= amount;
    }
}

// ── INHERITANCE — reuse and extend ──────────────────
public class SavingsAccount extends BankAccount {
    private double interestRate;

    public SavingsAccount(String accNum, String owner, double balance, double interestRate) {
        super(accNum, owner, balance); // Call parent constructor
        this.interestRate = interestRate;
    }

    public void applyInterest() {
        double interest = getBalance() * interestRate;
        deposit(interest); // Reuse parent's deposit method
    }
}

// ── POLYMORPHISM — many forms, one interface ─────────
public abstract class Shape {
    public abstract double area();    // Must be implemented by subclasses
    public abstract double perimeter();

    public void describe() { // Shared behavior — runs for any Shape
        System.out.printf("Area: %.2f, Perimeter: %.2f%n", area(), perimeter());
    }
}

public class Circle extends Shape {
    private double radius;
    public Circle(double radius) { this.radius = radius; }

    @Override
    public double area() { return Math.PI * radius * radius; }

    @Override
    public double perimeter() { return 2 * Math.PI * radius; }
}

public class Rectangle extends Shape {
    private double width, height;
    public Rectangle(double w, double h) { this.width = w; this.height = h; }

    @Override
    public double area() { return width * height; }

    @Override
    public double perimeter() { return 2 * (width + height); }
}

// Polymorphic usage — same code works for any Shape
List<Shape> shapes = List.of(new Circle(5), new Rectangle(4, 6), new Circle(3));
for (Shape shape : shapes) {
    shape.describe(); // Calls correct area() and perimeter() for each type
}

// ── ABSTRACTION — hide complexity ────────────────────
public interface PaymentGateway {
    PaymentResult charge(String userId, BigDecimal amount, String currency);
    RefundResult refund(String transactionId, BigDecimal amount);
    PaymentStatus getStatus(String transactionId);
}

// Multiple implementations — same interface
public class RazorpayGateway implements PaymentGateway { /* Razorpay API */ }
public class StripeGateway implements PaymentGateway { /* Stripe API */ }
public class PaytmGateway implements PaymentGateway { /* Paytm API */ }

// Service doesn't know or care which gateway — just uses the interface
public class PaymentService {
    private final PaymentGateway gateway; // Can be any implementation

    public PaymentService(PaymentGateway gateway) {
        this.gateway = gateway;
    }

    public void processPayment(Order order) {
        PaymentResult result = gateway.charge(order.getUserId(),
                                              order.getAmount(), "INR");
        if (!result.isSuccessful()) throw new PaymentFailedException(result.getMessage());
    }
}`,
      usage:
        "OOP is not abstract theory — it's how you design real systems. Encapsulation protects your data from being misused. Inheritance avoids code duplication across similar classes. Polymorphism allows frameworks like Spring to call your code without knowing its specific type. Abstraction (interfaces) lets you swap implementations — change payment gateways, databases, or notification providers without touching business logic.",
      mistake:
        "Overusing inheritance. The 'is-a' relationship must be real — a SavingsAccount IS-A BankAccount is correct. But deep inheritance hierarchies (5+ levels) create tight coupling that makes changes cascade everywhere. Prefer composition over inheritance when in doubt: a Car HAS-A Engine is better than Car extends Engine.",
    },
    {
      id: "java-collections",
      number: "4.2",
      title: "Collections Framework — The Data Structure Toolbox",
      icon: "🗂️",
      color: "emerald",
      intro:
        "The Java Collections Framework is a unified architecture for storing and manipulating groups of objects. Choosing the right collection type — List, Set, Map, Queue — directly affects your application's performance and correctness. This is one of the most heavily tested topics in every Java interview, from fresher to senior level.",
      code: `import java.util.*;
import java.util.stream.*;

// ── LIST — ordered, allows duplicates ───────────────
List<String> arrayList = new ArrayList<>();   // Backed by array — fast random access
List<String> linkedList = new LinkedList<>();  // Backed by nodes — fast insert/delete at ends
List<String> immutable = List.of("a", "b", "c"); // Java 9+ — unmodifiable

arrayList.add("Arjun");
arrayList.add("Priya");
arrayList.add("Arjun"); // Duplicates allowed
System.out.println(arrayList.get(0)); // "Arjun" — O(1) random access
arrayList.remove("Arjun"); // Removes first occurrence — O(n)

// ── SET — unique elements, no duplicates ─────────────
Set<String> hashSet = new HashSet<>();       // O(1) add/remove/contains — no order
Set<String> linkedHashSet = new LinkedHashSet<>(); // Insertion order maintained
Set<String> treeSet = new TreeSet<>();       // Sorted order — O(log n) operations

hashSet.add("Bangalore");
hashSet.add("Mumbai");
hashSet.add("Bangalore"); // Ignored — already exists
System.out.println(hashSet.size()); // 2

// ── MAP — key-value pairs ───────────────────────────
Map<String, Integer> hashMap = new HashMap<>();      // O(1) average — no order
Map<String, Integer> linkedHashMap = new LinkedHashMap<>(); // Insertion order
Map<String, Integer> treeMap = new TreeMap<>();      // Sorted by key — O(log n)

hashMap.put("apples", 5);
hashMap.put("bananas", 3);
hashMap.put("apples", 8); // Replaces existing value — key must be unique
System.out.println(hashMap.get("apples")); // 8
System.out.println(hashMap.getOrDefault("grapes", 0)); // 0 — safe get with default
hashMap.forEach((fruit, count) -> System.out.println(fruit + ": " + count));

// ── QUEUE & DEQUE ────────────────────────────────────
Queue<String> queue = new LinkedList<>(); // FIFO — process tasks in order
queue.offer("Task 1");
queue.offer("Task 2");
String next = queue.poll(); // "Task 1" — removes and returns head

Deque<String> stack = new ArrayDeque<>(); // Use as Stack — faster than java.util.Stack
stack.push("Page 1");
stack.push("Page 2");
String top = stack.pop(); // "Page 2" — LIFO

// ── CHOOSING THE RIGHT COLLECTION ───────────────────
// Need to look up by key?                    → HashMap
// Need sorted key order?                     → TreeMap
// Need insertion order?                      → LinkedHashMap
// Need unique elements?                      → HashSet
// Need sorted unique elements?               → TreeSet
// Need indexed access (get by position)?     → ArrayList
// Need fast insert/delete at both ends?      → ArrayDeque
// Need thread-safe operations?               → ConcurrentHashMap, CopyOnWriteArrayList

// ── COLLECTIONS UTILITY METHODS ──────────────────────
List<Integer> numbers = new ArrayList<>(Arrays.asList(5, 2, 8, 1, 9, 3));
Collections.sort(numbers);               // [1, 2, 3, 5, 8, 9]
Collections.reverse(numbers);           // [9, 8, 5, 3, 2, 1]
int max = Collections.max(numbers);     // 9
Collections.shuffle(numbers);           // Random order
Collections.frequency(numbers, 5);      // Count occurrences

// Sort with custom comparator
List<String> names = new ArrayList<>(Arrays.asList("Charlie", "Alice", "Bob"));
names.sort(Comparator.naturalOrder());              // Alphabetical
names.sort(Comparator.comparingInt(String::length)); // By length
names.sort(Comparator.comparingInt(String::length)
           .thenComparing(Comparator.naturalOrder())); // By length, then alphabetically`,
      usage:
        "Collections are the backbone of almost every Java program. A shopping cart is a List of CartItems. A dictionary is a Map<String, Definition>. A user's friends (unique) is a Set<User>. Task processing queues use Queue. Understanding time complexity for each — O(1) for HashMap.get(), O(n) for ArrayList.contains(), O(log n) for TreeMap.get() — is essential for writing efficient code and critical for senior interviews.",
      mistake:
        "Using a List when you need uniqueness, or a HashMap when you need insertion order. Using ArrayList.contains() in a loop is O(n²) — convert to HashSet first for O(1) lookup. Another common mistake: using the raw type (List without generics) which bypasses type safety and generates unchecked warnings.",
    },
    {
      id: "java8-features",
      number: "4.3",
      title: "Java 8+ Features — Lambdas, Streams & Optional",
      icon: "⚡",
      color: "primary",
      intro:
        "Java 8 (2014) was the most significant Java update in 20 years — introducing lambda expressions, the Stream API, Optional, and functional interfaces. These features didn't just add syntactic sugar; they changed how Java code is written. Modern Java codebases (Spring Boot, enterprise APIs) are written almost entirely in this style. If your Java knowledge stops before Java 8, you are not hireable in 2026.",
      code: `import java.util.*;
import java.util.stream.*;
import java.util.function.*;

// ── LAMBDA EXPRESSIONS ──────────────────────────────
// Old way — anonymous class
Runnable oldWay = new Runnable() {
    @Override
    public void run() { System.out.println("Running"); }
};

// Lambda — concise functional interface implementation
Runnable lambda = () -> System.out.println("Running");

// With parameters
Comparator<String> byLength = (s1, s2) -> s1.length() - s2.length();
BinaryOperator<Integer> add = (a, b) -> a + b;

// ── FUNCTIONAL INTERFACES ───────────────────────────
Function<String, Integer> strLength = String::length;  // Method reference
Function<String, String> toUpper = String::toUpperCase;
Function<String, String> lengthThenUpper = toUpper.compose(s -> s.substring(0, 3));

Predicate<String> isLong = s -> s.length() > 5;
Predicate<String> startsWithA = s -> s.startsWith("A");
Predicate<String> longAndStartsA = isLong.and(startsWithA); // Compose predicates

Consumer<String> printer = System.out::println;
Supplier<List<String>> listFactory = ArrayList::new;

// ── STREAM API — process collections declaratively ──
List<Employee> employees = List.of(
    new Employee("Arjun", "Engineering", 85000, "Bangalore"),
    new Employee("Priya", "Marketing", 72000, "Mumbai"),
    new Employee("Rahul", "Engineering", 95000, "Bangalore"),
    new Employee("Sunita", "HR", 68000, "Delhi"),
    new Employee("Vikram", "Engineering", 110000, "Bangalore")
);

// filter → map → collect
List<String> seniorEngineers = employees.stream()
    .filter(e -> e.getDepartment().equals("Engineering"))
    .filter(e -> e.getSalary() > 90000)
    .map(Employee::getName)
    .sorted()
    .collect(Collectors.toList());
// ["Rahul", "Vikram"]

// Average salary by department
Map<String, Double> avgSalaryByDept = employees.stream()
    .collect(Collectors.groupingBy(
        Employee::getDepartment,
        Collectors.averagingDouble(Employee::getSalary)
    ));
// {"Engineering": 96666.67, "Marketing": 72000.0, "HR": 68000.0}

// Total salary
double totalSalary = employees.stream()
    .mapToDouble(Employee::getSalary)
    .sum(); // More efficient than reduce for primitives

// Find highest paid in Engineering
Optional<Employee> topEng = employees.stream()
    .filter(e -> "Engineering".equals(e.getDepartment()))
    .max(Comparator.comparingDouble(Employee::getSalary));

// Statistics
DoubleSummaryStatistics stats = employees.stream()
    .mapToDouble(Employee::getSalary)
    .summaryStatistics();
System.out.println("Min: " + stats.getMin() + " Max: " + stats.getMax());

// Count per department
Map<String, Long> countByDept = employees.stream()
    .collect(Collectors.groupingBy(Employee::getDepartment, Collectors.counting()));

// ── OPTIONAL — eliminate NullPointerException ────────
Optional<Employee> found = employees.stream()
    .filter(e -> e.getName().equals("Priya"))
    .findFirst();

// Safe chaining — no NullPointerException
String city = found
    .map(Employee::getCity)
    .orElse("Unknown City");

// With default value
Employee emp = found.orElse(new Employee("Default", "None", 0, "Remote"));

// Throw if not found
Employee required = found.orElseThrow(() ->
    new RuntimeException("Employee not found"));

// Only execute if present
found.ifPresent(e -> System.out.println("Found: " + e.getName()));

// ── JAVA 11+ STRING METHODS ──────────────────────────
String text = "  Hello World  ";
text.strip();           // "Hello World" — Unicode-aware trim
text.isBlank();         // false
"".isBlank();           // true
"hello\nworld".lines()  // Stream<String> — one per line
    .collect(Collectors.toList());
"Java".repeat(3);       // "JavaJavaJava"`,
      usage:
        "Stream API is used in every Spring Boot application — transforming database results, filtering collections, computing aggregates. Optional replaces null returns in service methods — Spring Data's findById() returns Optional<T>. Lambdas are used in every forEach, sort, filter, and event handler. Without Java 8 features, you can't read modern Java codebases.",
      mistake:
        "Overusing Streams for simple operations. A Stream pipeline with a single filter and map is perfectly fine, but complex nested flatMap operations with side effects are harder to read and debug than a simple for loop. Streams are best for data transformation pipelines — not for replacing every loop. Also: never modify external state inside a stream operation (side effects in lambdas cause bugs).",
    },
    {
      id: "exception-handling",
      number: "4.4",
      title: "Exception Handling — Checked, Unchecked & Custom",
      icon: "🛡️",
      color: "orange",
      intro:
        "Java has a formal exception hierarchy that separates errors the programmer must handle (checked exceptions) from errors that indicate programming bugs (unchecked exceptions) from JVM errors (Error). Understanding this hierarchy and designing custom exceptions correctly is both a daily coding skill and one of the most common Java interview topics.",
      code: `// ── EXCEPTION HIERARCHY ─────────────────────────────
//
//           Throwable
//          /         \\
//        Error     Exception
//                 /         \\
//           Checked      RuntimeException (Unchecked)
//        (must handle)    (optional to handle)
//
// Checked: IOException, SQLException, ParseException
// Unchecked: NullPointerException, ArrayIndexOutOfBoundsException,
//            IllegalArgumentException, IllegalStateException

// ── CHECKED EXCEPTION — must be caught or declared ──
public void readFile(String path) throws IOException { // Declares checked exception
    try (BufferedReader reader = new BufferedReader(new FileReader(path))) {
        String line;
        while ((line = reader.readLine()) != null) {
            System.out.println(line);
        }
    } // try-with-resources — automatically closes BufferedReader
    // IOException is checked — caller MUST handle or propagate it
}

// ── UNCHECKED EXCEPTION — runtime, no forced handling
public double divide(double dividend, double divisor) {
    if (divisor == 0) {
        throw new ArithmeticException("Cannot divide by zero"); // Unchecked
    }
    return dividend / divisor;
}

// ── TRY-CATCH-FINALLY ───────────────────────────────
public User findUser(String id) {
    Connection conn = null;
    try {
        conn = dataSource.getConnection();
        // DB operation
        return queryUser(conn, id);
    } catch (SQLException e) {
        log.error("Database error finding user {}: {}", id, e.getMessage());
        throw new RuntimeException("Failed to find user", e); // Wrap checked in unchecked
    } catch (NumberFormatException e) {
        throw new IllegalArgumentException("Invalid user ID format: " + id, e);
    } finally {
        if (conn != null) {
            try { conn.close(); } catch (SQLException ignored) {}
        }
    }
}

// ── MULTI-CATCH ─────────────────────────────────────
try {
    riskyOperation();
} catch (IOException | ParseException e) { // Handle multiple exception types
    log.error("Operation failed: {}", e.getMessage());
}

// ── CUSTOM EXCEPTIONS — production design ────────────
// Base exception for your application domain
public class AppException extends RuntimeException { // Extend RuntimeException
    private final String errorCode;
    private final int httpStatus;

    public AppException(String message, String errorCode, int httpStatus) {
        super(message);
        this.errorCode = errorCode;
        this.httpStatus = httpStatus;
    }

    public AppException(String message, String errorCode, int httpStatus, Throwable cause) {
        super(message, cause); // Preserve original exception chain
        this.errorCode = errorCode;
        this.httpStatus = httpStatus;
    }

    public String getErrorCode() { return errorCode; }
    public int getHttpStatus() { return httpStatus; }
}

// Specific domain exceptions
public class ResourceNotFoundException extends AppException {
    public ResourceNotFoundException(String resource, Object id) {
        super(String.format("%s not found with id: %s", resource, id),
              "RESOURCE_NOT_FOUND", 404);
    }
}

public class InsufficientFundsException extends AppException {
    public InsufficientFundsException(double requested, double available) {
        super(String.format("Requested %.2f but only %.2f available", requested, available),
              "INSUFFICIENT_FUNDS", 422);
    }
}

// Usage — clean and informative
public Order processPayment(Long orderId, String userId) {
    Order order = orderRepository.findById(orderId)
        .orElseThrow(() -> new ResourceNotFoundException("Order", orderId));

    if (!order.getUserId().equals(userId)) {
        throw new AppException("Not authorized to pay for this order",
                               "UNAUTHORIZED_ACCESS", 403);
    }

    double balance = accountService.getBalance(userId);
    if (balance < order.getTotal()) {
        throw new InsufficientFundsException(order.getTotal(), balance);
    }

    return completeOrder(order);
}`,
      usage:
        "Exception design is how you communicate failure modes across your application. Good custom exceptions carry context (error code, HTTP status) that frameworks like Spring Boot use automatically. In interview coding rounds, proper exception handling — not swallowing exceptions, preserving cause chains, choosing checked vs unchecked correctly — separates strong candidates from weak ones.",
      mistake:
        "Catching Exception or Throwable at the top level and doing nothing (empty catch block). This silently hides errors, making debugging nearly impossible. Another common mistake: catching an exception just to print it and re-throw the same exception — you lose the original stack trace. When wrapping, always pass the original as the cause: throw new RuntimeException(message, originalException).",
    },
    {
      id: "generics-interfaces",
      number: "4.5",
      title: "Generics & Interfaces — Type Safety and Contracts",
      icon: "🔧",
      color: "purple",
      intro:
        "Generics allow you to write code that works with multiple types while maintaining compile-time type safety. Interfaces define contracts — the 'what' without the 'how'. Together, generics and interfaces are the foundation of every Java library and framework — from Java Collections to Spring's dependency injection. Understanding them is what separates developers who use frameworks from developers who build them.",
      code: `// ── GENERICS — type-safe reusable code ──────────────

// Generic class — works with any type T
public class Pair<T, U> {
    private final T first;
    private final U second;

    public Pair(T first, U second) {
        this.first = first;
        this.second = second;
    }

    public T getFirst() { return first; }
    public U getSecond() { return second; }

    @Override
    public String toString() {
        return "(" + first + ", " + second + ")";
    }
}

Pair<String, Integer> nameAge = new Pair<>("Arjun", 24);
Pair<String, String> cityCountry = new Pair<>("Bangalore", "India");
// Compile-time type safety — no casting, no ClassCastException at runtime

// Generic method
public static <T extends Comparable<T>> T findMax(List<T> list) {
    if (list.isEmpty()) throw new IllegalArgumentException("Empty list");
    T max = list.get(0);
    for (T item : list) {
        if (item.compareTo(max) > 0) max = item;
    }
    return max;
}

Integer maxInt = findMax(List.of(3, 7, 1, 9, 4)); // 9
String maxStr = findMax(List.of("banana", "apple", "cherry")); // "cherry"

// Bounded wildcards
public static double sumOfList(List<? extends Number> list) {
    return list.stream().mapToDouble(Number::doubleValue).sum();
}
sumOfList(List.of(1, 2, 3));          // Works with List<Integer>
sumOfList(List.of(1.5, 2.5, 3.5));    // Works with List<Double>

// ── INTERFACES — define contracts ────────────────────

// Interface with default and static methods (Java 8+)
public interface Sortable<T> {
    int compareTo(T other); // Abstract — must implement

    default boolean isGreaterThan(T other) { // Default implementation
        return compareTo(other) > 0;
    }

    static <T extends Sortable<T>> void bubbleSort(List<T> list) { // Static utility
        int n = list.size();
        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j < n - i - 1; j++) {
                if (list.get(j).isGreaterThan(list.get(j + 1))) {
                    T temp = list.get(j);
                    list.set(j, list.get(j + 1));
                    list.set(j + 1, temp);
                }
            }
        }
    }
}

// Generic Repository pattern — used in Spring Data JPA
public interface Repository<T, ID> {
    Optional<T> findById(ID id);
    List<T> findAll();
    T save(T entity);
    void deleteById(ID id);
    boolean existsById(ID id);
}

// Concrete implementation
public class UserRepository implements Repository<User, Long> {
    private final Map<Long, User> store = new HashMap<>();
    private long nextId = 1;

    @Override
    public Optional<User> findById(Long id) {
        return Optional.ofNullable(store.get(id));
    }

    @Override
    public User save(User user) {
        if (user.getId() == null) user.setId(nextId++);
        store.put(user.getId(), user);
        return user;
    }

    @Override
    public List<User> findAll() { return new ArrayList<>(store.values()); }

    @Override
    public void deleteById(Long id) { store.remove(id); }

    @Override
    public boolean existsById(Long id) { return store.containsKey(id); }
}

// Functional interface — can be used with lambdas
@FunctionalInterface
public interface Validator<T> {
    boolean validate(T input);

    default Validator<T> and(Validator<T> other) { // Compose validators
        return input -> this.validate(input) && other.validate(input);
    }
}

Validator<String> notEmpty = s -> !s.isEmpty();
Validator<String> validEmail = s -> s.contains("@") && s.contains(".");
Validator<String> emailValidator = notEmpty.and(validEmail);

System.out.println(emailValidator.validate("arjun@example.com")); // true
System.out.println(emailValidator.validate("notanemail"));         // false`,
      usage:
        "You use generics every time you write List<String> or Map<String, Integer>. Understanding why List<Integer> cannot be assigned to List<Number> (generics invariance) is a senior interview question. Interfaces enable the dependency inversion principle — code depends on abstractions (interfaces), not concrete implementations. Spring's entire IoC container is built on this principle.",
      mistake:
        "Using raw types (List without generics) to avoid type complexity. Raw types bypass the compiler's type checking — you get ClassCastException at runtime instead of a compile error. Always parameterize generic types. Another mistake: making interfaces too specific (one method per interface is fine — see Functional Interfaces) or too broad (one interface with 30 methods that can't be meaningfully mocked in tests).",
    },
    {
      id: "multithreading",
      number: "4.6",
      title: "Multithreading & Concurrency",
      icon: "🔀",
      color: "red",
      intro:
        "Modern servers handle thousands of simultaneous requests. Java's concurrency model — threads, synchronization, the java.util.concurrent package, and the ExecutorService — is how Java programs do multiple things at once. Concurrency concepts (race conditions, deadlocks, volatile, synchronized) appear in every senior Java interview and are required knowledge for any backend developer writing production code.",
      code: `import java.util.concurrent.*;
import java.util.concurrent.atomic.*;
import java.util.concurrent.locks.*;

// ── THREAD CREATION ──────────────────────────────────
// Method 1: Extend Thread (less preferred)
class MyThread extends Thread {
    @Override
    public void run() { System.out.println("Thread running: " + getName()); }
}

// Method 2: Implement Runnable (preferred — doesn't waste inheritance)
Thread t = new Thread(() -> System.out.println("Lambda thread"));
t.start(); // start() — creates new thread. run() — executes in current thread!

// ── EXECUTORSERVICE — managed thread pools ────────────
// Create thread pool — reuse threads instead of creating/destroying
ExecutorService executor = Executors.newFixedThreadPool(4); // 4 threads

// Submit tasks — returns Future for async results
Future<Integer> future = executor.submit(() -> {
    Thread.sleep(1000); // Simulate work
    return 42;
});

System.out.println("Doing other work...");
Integer result = future.get(); // Blocks until task completes — returns 42
executor.shutdown(); // Gracefully shut down — finish submitted tasks

// ── CALLABLE — task that returns a value ─────────────
List<Callable<String>> tasks = List.of(
    () -> fetchUserFromDB(1L),
    () -> fetchUserFromDB(2L),
    () -> fetchUserFromDB(3L)
);

ExecutorService pool = Executors.newFixedThreadPool(3);
List<Future<String>> futures = pool.invokeAll(tasks); // Run all in parallel
List<String> results = futures.stream()
    .map(f -> { try { return f.get(); } catch (Exception e) { return "error"; } })
    .collect(Collectors.toList());

// ── SYNCHRONIZATION — prevent race conditions ────────
public class SafeCounter {
    private int count = 0;
    private final Object lock = new Object();

    // synchronized — only one thread at a time
    public synchronized void increment() { count++; }
    public synchronized int getCount() { return count; }

    // synchronized block — finer granularity
    public void add(int amount) {
        synchronized (lock) {
            count += amount;
        }
    }
}

// ── ATOMIC CLASSES — lock-free thread safety ─────────
AtomicInteger atomicCounter = new AtomicInteger(0);
atomicCounter.incrementAndGet();          // Thread-safe increment
atomicCounter.compareAndSet(0, 1);        // CAS — conditional update
int val = atomicCounter.getAndAdd(10);    // Get current, then add

AtomicReference<String> atomicRef = new AtomicReference<>("initial");
atomicRef.compareAndSet("initial", "updated"); // Only updates if still "initial"

// ── VOLATILE — visibility guarantee ──────────────────
private volatile boolean running = true; // All threads see latest value

public void stop() { running = false; } // One thread sets to false
public void run() {
    while (running) { // Other thread sees the update immediately
        processNextItem();
    }
}

// ── REENTRANTLOCK — explicit locking ─────────────────
private final ReentrantLock lock = new ReentrantLock();

public void criticalSection() {
    lock.lock();
    try {
        // Protected code
    } finally {
        lock.unlock(); // ALWAYS unlock in finally — prevents deadlock on exception
    }
}

// ── CONCURRENTHASHMAP — thread-safe map ──────────────
ConcurrentHashMap<String, Integer> safeMap = new ConcurrentHashMap<>();
safeMap.put("key", 1);
safeMap.computeIfAbsent("key2", k -> expensiveComputation(k)); // Atomic operation

// ── COMPLETABLEFUTURE — async composition ─────────────
CompletableFuture<User> userFuture = CompletableFuture.supplyAsync(() -> fetchUser(1L));
CompletableFuture<List<Order>> ordersFuture = CompletableFuture.supplyAsync(() -> fetchOrders(1L));

CompletableFuture<DashboardData> dashboard = userFuture
    .thenCombine(ordersFuture, (user, orders) -> new DashboardData(user, orders))
    .exceptionally(ex -> DashboardData.empty()); // Fallback on failure

DashboardData data = dashboard.get(); // Wait for both to complete`,
      usage:
        "Every production Java server handles concurrent requests. Web servers like Tomcat use thread pools. Background job processors use ExecutorService. Caches and counters shared across threads need AtomicInteger or ConcurrentHashMap. Race conditions and deadlocks are real bugs that cause production outages. CompletableFuture is used in modern Spring Boot for parallel API calls.",
      mistake:
        "Calling thread.run() instead of thread.start(). run() executes the task in the current thread — it doesn't create a new thread. start() creates a new thread and calls run() in it. The second major mistake: not releasing locks in finally blocks — if an exception occurs between lock.lock() and lock.unlock(), the lock is never released and every subsequent thread waits forever (deadlock).",
    },
    {
      id: "design-patterns",
      number: "4.7",
      title: "Design Patterns — The Vocabulary of Good Code",
      icon: "🏗️",
      color: "yellow",
      intro:
        "Design patterns are proven, reusable solutions to common software design problems. In Java, they are not abstract theory — they appear constantly in the standard library (Iterator, Observer, Decorator), in frameworks (Spring's Singleton beans, Factory method for bean creation), and in every well-designed enterprise codebase. Interviewers ask about design patterns to gauge your software design thinking.",
      code: `// ── SINGLETON — one instance, global access ──────────
// Thread-safe Singleton using enum (Joshua Bloch's recommendation)
public enum DatabaseConnectionPool {
    INSTANCE;

    private final HikariDataSource dataSource;

    DatabaseConnectionPool() {
        HikariConfig config = new HikariConfig();
        config.setJdbcUrl("jdbc:mysql://localhost:3306/myapp");
        dataSource = new HikariDataSource(config);
    }

    public Connection getConnection() throws SQLException {
        return dataSource.getConnection();
    }
}
// Usage: DatabaseConnectionPool.INSTANCE.getConnection()

// Double-checked locking Singleton (common interview pattern)
public class ConfigService {
    private static volatile ConfigService instance; // volatile prevents instruction reordering

    private ConfigService() {}

    public static ConfigService getInstance() {
        if (instance == null) {
            synchronized (ConfigService.class) {
                if (instance == null) { // Double-check after acquiring lock
                    instance = new ConfigService();
                }
            }
        }
        return instance;
    }
}

// ── BUILDER — construct complex objects step by step ─
public class HttpRequest {
    private final String url;
    private final String method;
    private final Map<String, String> headers;
    private final String body;
    private final int timeout;

    private HttpRequest(Builder builder) {
        this.url = builder.url;
        this.method = builder.method;
        this.headers = Collections.unmodifiableMap(builder.headers);
        this.body = builder.body;
        this.timeout = builder.timeout;
    }

    public static class Builder {
        private final String url;
        private String method = "GET";
        private Map<String, String> headers = new HashMap<>();
        private String body;
        private int timeout = 30000;

        public Builder(String url) { this.url = url; }

        public Builder method(String method) { this.method = method; return this; }
        public Builder header(String key, String value) { headers.put(key, value); return this; }
        public Builder body(String body) { this.method = "POST"; this.body = body; return this; }
        public Builder timeout(int ms) { this.timeout = ms; return this; }

        public HttpRequest build() {
            if (url == null || url.isBlank()) throw new IllegalStateException("URL required");
            return new HttpRequest(this);
        }
    }
}

// Fluent builder usage
HttpRequest request = new HttpRequest.Builder("https://api.example.com/users")
    .method("POST")
    .header("Authorization", "Bearer " + token)
    .header("Content-Type", "application/json")
    .body("{\"name\": \"Arjun\"}")
    .timeout(5000)
    .build();

// ── FACTORY METHOD — delegate object creation ─────────
public interface NotificationSender {
    void send(String recipient, String message);
}

public class EmailSender implements NotificationSender {
    @Override
    public void send(String recipient, String message) {
        System.out.println("Email to " + recipient + ": " + message);
    }
}

public class SmsSender implements NotificationSender {
    @Override
    public void send(String recipient, String message) {
        System.out.println("SMS to " + recipient + ": " + message);
    }
}

public class NotificationFactory {
    public static NotificationSender create(String type) {
        return switch (type) { // Java 14+ switch expression
            case "EMAIL" -> new EmailSender();
            case "SMS" -> new SmsSender();
            case "PUSH" -> new PushNotificationSender();
            default -> throw new IllegalArgumentException("Unknown type: " + type);
        };
    }
}

// ── OBSERVER — event-driven communication ─────────────
public interface EventListener<T> {
    void onEvent(T event);
}

public class EventBus<T> {
    private final List<EventListener<T>> listeners = new CopyOnWriteArrayList<>();

    public void subscribe(EventListener<T> listener) { listeners.add(listener); }
    public void unsubscribe(EventListener<T> listener) { listeners.remove(listener); }

    public void publish(T event) {
        listeners.forEach(l -> l.onEvent(event));
    }
}

// Usage
EventBus<OrderEvent> orderBus = new EventBus<>();
orderBus.subscribe(event -> emailService.sendConfirmation(event.getUserEmail()));
orderBus.subscribe(event -> inventoryService.reduceStock(event.getProductId()));
orderBus.publish(new OrderEvent(orderId, userId, productId));`,
      usage:
        "Spring Boot's @Bean methods implement Factory Pattern. Spring's application context is a Singleton for each bean by default. Lombok's @Builder generates the Builder pattern. Java's Observer pattern is the foundation of event-driven systems. Understanding these patterns lets you read framework code, explain your design decisions in interviews, and recognize when to apply them in your own code.",
      mistake:
        "Applying design patterns where they're not needed — over-engineering. A simple utility class doesn't need to be a Singleton. A two-field object doesn't need a Builder. Pattern-matching the problem to a well-known pattern is a skill — so is recognizing when a simple approach is better. Interviewers penalize over-engineering as much as they reward pattern knowledge.",
    },
  ],

  // ── SECTION 5: PREREQUISITES ─────────────────────────────────────
  prerequisites: [
    { item: "Computer Fundamentals", done: true, note: "Basic understanding of how computers work", detail: "What a CPU, RAM, and storage are. What a program is. What a file is. Binary basics (not deep — just the concept). This is needed to understand why Java's JVM design matters." },
    { item: "JDK Installation", done: true, note: "Java Development Kit — your compiler and runtime", detail: "Install JDK 21 (LTS — Long Term Support). Download from adoptium.net (Eclipse Temurin) or oracle.com. Verify: java -version and javac -version in terminal both work." },
    { item: "IntelliJ IDEA", done: true, note: "The IDE every professional Java developer uses", detail: "Download IntelliJ IDEA Community Edition (free). Learn: create a project, write a class, run it, use the debugger. Eclipse is an alternative but IntelliJ has won the industry by a wide margin." },
    { item: "Maven Basics", done: true, note: "Build tool used by almost every Java project", detail: "Understand pom.xml, adding dependencies from Maven Central, running mvn clean install. You don't need to master Maven — just know how to add a library to your project." },
    { item: "Basic Mathematics", done: true, note: "Used in algorithms and data structures", detail: "Logarithms (log₂n for binary search complexity), basic set theory, modular arithmetic. Not deep math — just the intuition behind Big O notation." },
    { item: "Patience with Verbosity", done: false, note: "Java requires more code than Python or JavaScript", detail: "A Java program that does what 5 lines of Python do often takes 15–20 lines. This is the price of static typing and explicit structure. The payoff comes at scale — large Java codebases are dramatically easier to navigate than equivalent Python or JavaScript codebases." },
  ],

  // ── SECTION 6: ROADMAP ───────────────────────────────────────────
  roadmap: [
    {
      phase: "Beginner",
      label: "01",
      duration: "Weeks 1–6",
      color: "emerald",
      topics: [
        "Java syntax — variables, data types (primitive and wrapper), operators",
        "Control flow — if/else, switch, for, while, do-while, for-each",
        "Methods — parameters, return types, method overloading",
        "OOP fundamentals — classes, objects, constructors, this keyword",
        "The four pillars — encapsulation, inheritance, polymorphism, abstraction",
        "Interfaces and abstract classes",
        "Arrays — single-dimensional and multi-dimensional",
        "String manipulation — String, StringBuilder, StringBuffer",
        "Exception handling — try, catch, finally, throws, custom exceptions",
        "Basic I/O — Scanner, System.out, reading files",
      ],
      buildProjects: [
        "Bank Account System — accounts, deposit/withdraw, balance check (pure OOP)",
        "Student Grade Calculator — input grades, calculate GPA, assign letter grade",
        "Library Management System — books, members, issue and return books (no DB)",
        "Simple ATM Simulator — login with PIN, check balance, withdraw with limit",
      ],
    },
    {
      phase: "Intermediate",
      label: "02",
      duration: "Weeks 7–14",
      color: "primary",
      topics: [
        "Java Collections — List, Set, Map, Queue — which to use and when",
        "Java 8 — lambda expressions, functional interfaces, Stream API",
        "Optional — eliminate NullPointerException",
        "Generics — generic classes, methods, bounded wildcards",
        "Multithreading — Thread, Runnable, synchronized, volatile",
        "ExecutorService and thread pools",
        "File I/O — java.nio.file (Files, Path, Paths)",
        "JDBC — connect to MySQL, execute queries from Java",
        "Design Patterns — Singleton, Builder, Factory, Observer, Strategy",
        "Unit Testing — JUnit 5, Mockito basics",
      ],
      buildProjects: [
        "Multi-threaded Download Manager — download multiple files concurrently, show progress",
        "CSV Data Processor — read large CSV files with Stream API, filter, transform, write output",
        "JDBC CRUD Application — command-line inventory manager with real MySQL database",
        "Design Pattern Showcase — implement 5 patterns with real-world use cases",
      ],
    },
    {
      phase: "Advanced",
      label: "03",
      duration: "Weeks 15–24+",
      color: "purple",
      topics: [
        "Java memory model — heap, stack, PermGen/Metaspace, GC algorithms",
        "Advanced concurrency — ReentrantLock, ReadWriteLock, CountDownLatch, CompletableFuture",
        "Reflection API — inspect and manipulate classes at runtime",
        "Annotations — creating custom annotations with @Retention and @Target",
        "Java modules (Java 9+ JPMS)",
        "Performance profiling — JProfiler, async-profiler, JVM flags",
        "Spring Boot — the practical application of all Java knowledge",
        "Data structures and algorithms — Big O, sorting, searching, trees, graphs",
        "System design — scalability, CAP theorem, database design",
        "GraalVM — native image compilation",
      ],
      buildProjects: [
        "Custom DI Container — build a simplified version of Spring's IoC container from scratch",
        "Thread-safe LRU Cache implementation with ReentrantReadWriteLock",
        "Simple JVM profiler — track method execution time using Java Instrumentation API",
        "Mini ORM — map Java objects to database tables (simplified Hibernate) using Reflection",
      ],
    },
  ],

  // ── SECTION 7: USE CASES ─────────────────────────────────────────
  useCases: [
    { num: "01", title: "Enterprise Backend APIs and Microservices", body: "The backbone of Indian banking, insurance, and enterprise software. HDFC's NetBanking API, Paytm's wallet service, and Flipkart's inventory management are all built on Java. Spring Boot is the framework, but Java is the language — and strong Java fundamentals are what make Spring Boot developers truly effective." },
    { num: "02", title: "Android App Development", body: "Android runs on 3 billion devices. The Android SDK is Java-based — activities, fragments, services, and broadcast receivers are all Java classes. While Kotlin is now Google's preferred language, Kotlin runs on the JVM and is 100% interoperable with Java. Every Android developer benefits from Java knowledge." },
    { num: "03", title: "Big Data and Stream Processing", body: "Apache Kafka (event streaming), Apache Spark (distributed data processing), and Apache Hadoop (batch processing) are all written in Java/Scala (JVM languages). Data engineering roles at companies like Swiggy, Ola, and Meesho processing millions of events per day require JVM language fluency." },
    { num: "04", title: "Financial Trading Systems", body: "High-frequency trading systems and algorithmic trading platforms are built in Java because the JVM's JIT compiler, once warmed up, provides near-native performance. The NSE's trading platform, FIX protocol implementations, and order management systems in Indian capital markets run on Java." },
    { num: "05", title: "IT Services and Client Projects", body: "TCS, Infosys, Wipro, HCL, and Capgemini deliver the vast majority of their software projects in Java. Digital banking platforms, ERP integrations, insurance policy management, government e-governance portals — Java is the default choice for enterprise IT services engagements in India." },
    { num: "06", title: "Desktop Application Development", body: "IntelliJ IDEA, Eclipse, NetBeans, Minecraft, and many enterprise desktop tools are built with Java (using JavaFX or Swing). While desktop Java development is less common for new projects, maintaining and extending these applications requires Java expertise." },
    { num: "07", title: "Embedded Systems and IoT", body: "Java ME (Micro Edition) powers SIM cards, smart meters, and IoT devices. Oracle estimates Java runs on 3.5 billion devices beyond desktops — including ATMs, Blu-ray players, and industrial control systems. The JVM's portability makes Java viable for constrained embedded environments." },
  ],

  // ── SECTION 8: PROJECTS ──────────────────────────────────────────
  projects: {
    beginner: [
      { name: "Bank Account Management System", desc: "Create accounts (savings, current), deposit, withdraw with limit checks, transfer between accounts, view transaction history. All in-memory with proper OOP design.", teaches: "Encapsulation, inheritance (SavingsAccount extends BankAccount), exception handling for invalid operations, ArrayList for transaction history, object-oriented design" },
      { name: "Student Grade Management", desc: "Add students, record marks for multiple subjects, calculate GPA, rank students, generate grade report. Menu-driven console application.", teaches: "HashMap for student records, sorting with Comparator, Stream API for rankings and statistics, StringBuilder for report generation, method design" },
      { name: "Library Management System", desc: "Books, members, issue and return books, track due dates, calculate fines for overdue returns. Search books by title, author, and ISBN.", teaches: "ArrayList and HashMap combined, LocalDate for due date calculation, exception handling for unavailable books, object relationships (Book, Member, IssuedBook)" },
      { name: "Simple ATM Simulator", desc: "Login with account number and PIN (with 3 attempt limit), check balance, deposit, withdraw, view mini statement, change PIN.", teaches: "Encapsulation with private fields, authentication logic, ArrayList for transaction history, do-while loop for menu, input validation" },
    ],
    intermediate: [
      { name: "Multi-threaded File Download Manager", desc: "Download multiple URLs concurrently. Show download progress, speed, and ETA per file. Pause, resume, and cancel downloads. Retry on failure.", teaches: "ExecutorService thread pools, Future for tracking downloads, volatile for pause/resume flags, InputStream/OutputStream for file I/O, concurrent progress updates" },
      { name: "JDBC Product Inventory Manager", desc: "Full CRUD for products with real MySQL database. Categories, stock levels, price history, low-stock alerts. Search and filter with SQL.", teaches: "JDBC connection pool (HikariCP), PreparedStatement for SQL injection prevention, ResultSet mapping to Java objects, transaction management for bulk operations" },
      { name: "CSV Data Processing Pipeline", desc: "Read large CSV files (employee data, sales records) with Stream API. Filter, transform, aggregate, and write results to a new CSV. Handle 1 million+ rows efficiently.", teaches: "BufferedReader for memory-efficient reading, Stream API for transformation, Collectors.groupingBy for aggregation, Files.newBufferedWriter, performance with parallel streams" },
      { name: "Design Pattern Implementation Showcase", desc: "Implement 5 design patterns (Builder, Factory, Observer, Strategy, Decorator) with real-world scenarios: HTTP request builder, payment gateway factory, order event system.", teaches: "When and why each pattern is appropriate, composition over inheritance, interface-based design, how Spring uses these patterns internally" },
    ],
    advanced: [
      { name: "Custom Dependency Injection Container", desc: "Build a simplified Spring IoC container from scratch. Scan classes for annotations, resolve dependencies, create beans in correct order, handle circular dependencies.", teaches: "Reflection API, custom annotations with @Retention and @Target, topological sort for dependency ordering, how Spring Boot actually works internally" },
      { name: "Thread-safe LRU Cache", desc: "Implement a Least Recently Used cache with configurable capacity. Thread-safe with read/write lock (multiple concurrent readers, exclusive writer). O(1) get and put.", teaches: "LinkedHashMap for LRU ordering, ReentrantReadWriteLock, generics, time complexity optimization, cache eviction algorithms — a very common interview problem" },
      { name: "Simplified ORM (Mini Hibernate)", desc: "Map Java classes to database tables using annotations (@Table, @Column, @Id). Generate CREATE TABLE SQL from class structure. Implement find, save, update, delete using Reflection.", teaches: "Reflection API (Class.getDeclaredFields(), getAnnotation()), dynamic SQL generation, connection management, how Hibernate and JPA work under the hood" },
    ],
  },

  // ── SECTION 9: MISTAKES ──────────────────────────────────────────
  mistakes: [
    {
      title: "Using == to Compare Strings Instead of .equals()",
      explanation: "In Java, == compares object references (memory addresses), not content. Two String objects with the same content are usually different objects in memory — == returns false even when they look identical.",
      tip: "Always use .equals() for String comparison. For null-safe comparison: Objects.equals(str1, str2). String literals from the pool may compare equal with ==, but this is unreliable — don't depend on it.",
      wrong: 'if (userInput == "admin") { grantAccess(); } // Usually false even if content matches',
      correct: 'if ("admin".equals(userInput)) { grantAccess(); } // Safe — also handles null userInput',
    },
    {
      title: "Not Closing Resources — Resource Leaks",
      explanation: "Not closing database connections, file streams, or network sockets causes resource leaks. The connection pool gets exhausted, file handles accumulate, and eventually the application crashes or becomes unresponsive.",
      tip: "Use try-with-resources for any class implementing AutoCloseable. The compiler guarantees the resource is closed even if an exception occurs.",
      wrong: "FileReader fr = new FileReader(path); fr.read(); // Never closed if exception occurs",
      correct: "try (FileReader fr = new FileReader(path)) { fr.read(); } // Always closed automatically",
    },
    {
      title: "Calling thread.run() Instead of thread.start()",
      explanation: "run() executes the Runnable's code in the current thread — no new thread is created. start() creates a new OS thread and calls run() in it. Using run() in a 'multithreaded' program means everything is still single-threaded.",
      tip: "Always call start() to actually create a new thread. If you need the current thread to run the Runnable, just call run() on the Runnable directly — don't wrap it in a Thread.",
      wrong: "Thread t = new Thread(task); t.run(); // Same thread — no concurrency",
      correct: "Thread t = new Thread(task); t.start(); // New thread — actual concurrency",
    },
    {
      title: "NullPointerException — Not Checking for Null",
      explanation: "NPE is the most common runtime exception in Java. Accessing a method or field on a null reference throws it immediately. It's often caused by uninitialized fields, missing null checks, or collection methods that return null (like Map.get() when key doesn't exist).",
      tip: "Use Optional<T> for method return values that may be absent. Use Objects.requireNonNull() for constructor parameters. Use Map.getOrDefault() instead of Map.get(). Enable static analysis (IntelliJ's null analysis) to catch potential NPEs at compile time.",
      wrong: "String value = map.get(key); int length = value.length(); // NPE if key not found",
      correct: "String value = map.getOrDefault(key, \"\"); int length = value.length(); // Safe",
    },
    {
      title: "Mutable Static Fields — Hidden Global State",
      explanation: "Public or non-final static fields are global mutable state. In a multithreaded server, multiple requests modifying a static counter simultaneously cause race conditions. Static mutable state is almost always a design mistake.",
      tip: "Use AtomicInteger, AtomicLong for thread-safe counters. Use instance fields (not static) for state that belongs to an object. If you truly need a singleton, use an enum or Spring's @Service (which is singleton-scoped by default).",
      wrong: "public static int requestCount = 0; requestCount++; // Race condition in multi-threaded server",
      correct: "private final AtomicInteger requestCount = new AtomicInteger(0); requestCount.incrementAndGet();",
    },
    {
      title: "Catching Exception or Throwable Everywhere",
      explanation: "Catching the broad Exception or Throwable hides every possible problem — including OutOfMemoryError, StackOverflowError, and bugs you should fix. An empty catch block is the worst — errors disappear silently.",
      tip: "Catch the most specific exception type possible. If you must catch broadly, at least log the exception with a full stack trace. Never use an empty catch block — at minimum, log the error.",
      wrong: "try { riskyOp(); } catch (Exception e) { } // Silently swallows all errors",
      correct: "try { riskyOp(); } catch (SpecificException e) { log.error(\"Operation failed\", e); throw new AppException(e); }",
    },
    {
      title: "Concatenating Strings in a Loop with +",
      explanation: "Java Strings are immutable. Each + concatenation creates a new String object, copying all previous content. Concatenating N strings in a loop is O(N²) — with 10,000 strings it creates 10,000 intermediate objects.",
      tip: "Use StringBuilder for string concatenation in loops. For joining collections, use String.join() or Collectors.joining() in a stream. StringBuilder.append() is O(1) amortized.",
      wrong: "String result = \"\"; for (String s : list) { result += s; } // O(N²)",
      correct: "StringBuilder sb = new StringBuilder(); list.forEach(sb::append); String result = sb.toString(); // O(N)",
    },
    {
      title: "Using Raw Types Instead of Generics",
      explanation: "Raw types (List instead of List<String>) bypass Java's type safety. The compiler accepts any type, and you get a ClassCastException at runtime when the wrong type is retrieved. IDE warnings are silently generated and ignored.",
      tip: "Always parameterize generic types. If you see 'unchecked' warnings, don't suppress them — fix them by adding proper type parameters. The compiler is telling you there's a potential ClassCastException waiting to happen.",
      wrong: "List list = new ArrayList(); list.add(\"hello\"); list.add(42); String s = (String) list.get(1); // ClassCastException",
      correct: "List<String> list = new ArrayList<>(); list.add(\"hello\"); String s = list.get(0); // Compile-time safety",
    },
    {
      title: "Ignoring equals() and hashCode() Contract",
      explanation: "If you override equals() without overriding hashCode(), objects that are logically equal will have different hash codes. They won't work correctly in HashMap, HashSet, or any hash-based collection.",
      tip: "Always override both equals() AND hashCode() together — never one without the other. Use IntelliJ's 'Generate equals() and hashCode()' or Lombok's @EqualsAndHashCode. The contract: if a.equals(b) is true, then a.hashCode() must equal b.hashCode().",
      wrong: "@Override public boolean equals(Object o) { ... } // Without hashCode — breaks HashMap",
      correct: "@EqualsAndHashCode // Lombok generates both correctly, or generate via IDE",
    },
    {
      title: "Not Using StringBuilder for String Building",
      explanation: "Beyond string concatenation in loops, developers also build complex strings (SQL queries, HTML, JSON) with repeated + operators in non-loop contexts. Even outside loops, this creates unnecessary intermediate String objects.",
      tip: "For building strings from multiple parts, use StringBuilder. For generating structured text (SQL, templates), consider using String.format() or a template library. For SQL, never concatenate user input — use PreparedStatement.",
    },
    {
      title: "Shallow Copy When Deep Copy is Needed",
      explanation: "Cloning or copying an object only copies references to nested objects — not the objects themselves. Modifying a nested object in the copy also modifies the original. This causes subtle bugs when objects are shared unexpectedly.",
      tip: "Understand the difference: shallow copy copies references, deep copy recursively copies all nested objects. For collections, use new ArrayList<>(original) for a shallow copy of the list (new list, same object references). For deep copy, implement a copy constructor or use serialization.",
      wrong: "List<Order> copy = original; copy.add(newOrder); // Modifies original — same reference!",
      correct: "List<Order> copy = new ArrayList<>(original); copy.add(newOrder); // New list, safe",
    },
    {
      title: "Skipping Unit Tests and Test-Driven Development",
      explanation: "Developers who don't write tests ship brittle code that breaks on every change. Without tests, refactoring is terrifying — you can't be sure a change didn't break something else. Companies increasingly require test coverage metrics.",
      tip: "Write unit tests with JUnit 5 from the start. Test edge cases: null inputs, empty collections, boundary values. Aim for at least 70% code coverage on business logic. Use Mockito to mock dependencies so you test units in isolation.",
    },
  ],

  // ── SECTION 10: INTERVIEW QUESTIONS ─────────────────────────────
  interviewQuestions: {
    beginner: [
      { q: "What is Java and what is the JVM?", a: "Java is a statically typed, object-oriented, platform-independent programming language. The JVM (Java Virtual Machine) is the runtime environment that executes compiled Java bytecode. The JVM makes Java platform-independent — the same .class file runs on Windows, Linux, and macOS without recompilation. The JDK (Java Development Kit) includes the compiler (javac) and the JVM." },
      { q: "What is the difference between JDK, JRE, and JVM?", a: "JVM: executes bytecode — the runtime engine. JRE (Java Runtime Environment): JVM + standard class libraries — needed to run Java programs. JDK (Java Development Kit): JRE + compiler (javac) + development tools — needed to develop Java programs. Developers need JDK; end users only need JRE." },
      { q: "What are the four pillars of OOP in Java?", a: "Encapsulation: hiding internal data through private fields and public methods. Inheritance: a subclass extends a superclass, inheriting and potentially overriding its behavior. Polymorphism: a reference of a parent type can hold child objects; method calls resolve to the actual runtime type. Abstraction: hiding implementation details behind interfaces and abstract classes." },
      { q: "What is the difference between == and .equals() in Java?", a: "== compares object references (memory addresses) for objects, and values for primitives. .equals() compares object content. For Strings: 'hello' == 'hello' may be true for string literals (same pool object) but is unreliable. Always use .equals() for String and object comparison. Always use == for primitives (int, double, boolean)." },
      { q: "What is the difference between an interface and an abstract class?", a: "Abstract class: can have state (fields), constructors, and method implementations (abstract and concrete). Supports single inheritance. Use when subclasses share common implementation. Interface: no state (only constants), no constructors, all methods abstract by default (Java 8+ allows default and static methods). Supports multiple implementation. Use to define a contract. Choose interface when defining capability; abstract class when sharing code." },
      { q: "What are Java's primitive data types?", a: "8 primitives: byte (8-bit integer), short (16-bit integer), int (32-bit integer), long (64-bit integer), float (32-bit floating point), double (64-bit floating point), char (16-bit Unicode character), boolean (true/false). Everything else is an object. Wrapper classes (Integer, Double, Boolean) box primitives into objects — needed for collections." },
      { q: "What is the difference between ArrayList and LinkedList?", a: "ArrayList: backed by a dynamic array. O(1) random access (get/set by index), O(n) insert/delete in the middle, O(1) amortized add to end. LinkedList: doubly-linked nodes. O(n) random access, O(1) insert/delete at head and tail. Use ArrayList for most cases (better cache performance). Use LinkedList when you frequently insert/delete at both ends (as a Deque/Queue)." },
      { q: "What is a checked exception vs an unchecked exception?", a: "Checked exceptions: must be handled (try-catch) or declared (throws) — IOException, SQLException, ParseException. The compiler enforces this. Unchecked exceptions (RuntimeException subclasses): optional to handle — NullPointerException, IllegalArgumentException, ArrayIndexOutOfBoundsException. They indicate programming errors. Error (OutOfMemoryError, StackOverflowError) — JVM-level, should not be caught." },
      { q: "What is the difference between String, StringBuilder, and StringBuffer?", a: "String: immutable — every modification creates a new object. Safe to share, expensive to concatenate in loops. StringBuilder: mutable, not thread-safe, fast — use for single-threaded string building. StringBuffer: mutable, thread-safe (synchronized methods), slower — rarely needed; StringBuilder is almost always preferable. For string concatenation in loops: always use StringBuilder." },
      { q: "What is autoboxing and unboxing in Java?", a: "Autoboxing: automatic conversion from primitive to wrapper (int → Integer). Unboxing: wrapper to primitive (Integer → int). Java performs this automatically when primitives are added to collections or assigned to wrapper types. Caveat: unboxing a null Integer throws NullPointerException — always check for null before unboxing." },
    ],
    intermediate: [
      { q: "How does HashMap work internally in Java?", a: "HashMap uses an array of 'buckets'. The key's hashCode() determines the bucket index (index = hash % capacity). Multiple keys in the same bucket are stored as a linked list (Java 8+ converts to a balanced tree when bucket size > 8 for O(log n) worst-case). Get/put is O(1) average when hashCode distributes evenly. Requires both hashCode() and equals() to be correctly overridden for keys." },
      { q: "What is the Java Memory Model? Explain heap vs stack.", a: "Stack: per-thread, stores method frames, local variables, and references — LIFO, fast, automatically managed, finite size. Heap: shared across all threads, stores all objects — managed by Garbage Collector, much larger. Primitive local variables go on the stack. Objects always go on the heap; the stack holds a reference to them. Static fields go in the Metaspace (Java 8+, previously PermGen)." },
      { q: "Explain the Java Garbage Collector. What is GC tuning?", a: "GC automatically reclaims heap memory from objects no longer reachable from any GC root (thread stacks, static fields). Modern JVMs use generational collection: Young Generation (new objects, frequent minor GC), Old Generation (long-lived objects, infrequent major/full GC). G1GC is the default in Java 9+; ZGC and Shenandoah offer low-latency GC in Java 11+. Tuning involves setting heap size (-Xmx, -Xms), choosing GC algorithm, and minimizing object allocation." },
      { q: "What is the difference between volatile and synchronized?", a: "volatile: guarantees visibility — all threads see the latest value written by any thread. Does NOT prevent race conditions with compound operations (read-modify-write). synchronized: provides both visibility AND atomicity — only one thread executes the synchronized block at a time. Use volatile for simple flags (boolean, reference). Use synchronized (or atomic classes) when read-modify-write must be atomic." },
      { q: "What is a deadlock and how do you prevent it?", a: "Deadlock: two or more threads each hold a lock the other needs — both wait forever. Conditions: mutual exclusion, hold and wait, no preemption, circular wait. Prevention: always acquire locks in the same order across all threads (eliminates circular wait). Use tryLock() with timeout (ReentrantLock). Design stateless services (no shared mutable state → no locks needed)." },
      { q: "What is the Stream API and what is the difference between intermediate and terminal operations?", a: "Stream API processes collections declaratively. Intermediate operations (filter, map, sorted, distinct) are lazy — they build a pipeline but don't execute until a terminal operation is called. Terminal operations (collect, forEach, reduce, count, findFirst) trigger execution of the pipeline. Streams are not reusable — once a terminal operation is called, the stream is consumed." },
      { q: "What are generics and what is type erasure?", a: "Generics provide compile-time type safety for collections and classes — List<String> ensures only Strings can be added. Type erasure: at compile time, generic type information is removed — List<String> becomes List at runtime. This means you can't do instanceof List<String> at runtime, and reflection doesn't see generic types. Type erasure maintains backward compatibility with pre-Java-5 code." },
      { q: "What is the difference between Comparable and Comparator?", a: "Comparable: implemented by the class itself (implements Comparable<T>), defines the 'natural order' via compareTo(). Used when the class has one obvious sort order. Comparator: external comparator object, can be created as a lambda, defines custom sort orders. Used when you need multiple sort orders or can't modify the class. Collections.sort() and List.sort() accept both." },
      { q: "What is the Singleton design pattern and how do you make it thread-safe?", a: "Singleton ensures one instance of a class. Thread-safe implementations: (1) Enum singleton — serialization-safe, thread-safe by JVM guarantee, simplest. (2) Bill Pugh Singleton — static inner class, lazy initialization, thread-safe without synchronization. (3) Double-checked locking with volatile — lazy, thread-safe but complex. In Spring, every @Service/@Repository is a Singleton managed by Spring's container — no custom Singleton pattern needed." },
      { q: "What is the difference between fail-fast and fail-safe iterators?", a: "Fail-fast iterators (ArrayList, HashMap's iterators): throw ConcurrentModificationException if the collection is modified during iteration — by tracking a modCount. Fail-safe iterators (ConcurrentHashMap, CopyOnWriteArrayList): work on a snapshot or use concurrent structures, don't throw exceptions but may not reflect latest modifications. For thread-safe iteration, use fail-safe concurrent collections." },
    ],
    advanced: [
      { q: "Explain Java's memory model (JMM) and the happens-before relationship.", a: "JMM defines how threads interact through memory — when writes by one thread become visible to another. Happens-before relationship: if action A happens-before B, A's memory effects are visible to B. Established by: synchronized blocks, volatile reads/writes, thread.start(), thread.join(), and Lock.unlock() → Lock.lock(). Without happens-before, compiler and CPU can reorder instructions, causing threads to see stale values." },
      { q: "What are the differences between ReentrantLock and synchronized?", a: "ReentrantLock advantages: try to acquire with timeout (tryLock(timeout)), interruptible lock acquisition, fairness option (longest-waiting thread gets lock first), multiple Condition objects per lock. synchronized advantages: simpler syntax, JVM can optimize it aggressively. Use synchronized for simple mutual exclusion; ReentrantLock when you need advanced features (tryLock, fairness, multiple conditions)." },
      { q: "How does CompletableFuture work and when would you use it?", a: "CompletableFuture is a Future that can be explicitly completed, supports non-blocking callbacks (thenApply, thenCompose, thenCombine), and can compose multiple async computations. Use for: running tasks in parallel and combining results (thenCombine, allOf), chaining dependent async operations (thenCompose), handling failures gracefully (exceptionally, handle). Replaces the older Future.get() pattern which blocks." },
      { q: "What is ClassLoader and how does the class loading process work?", a: "ClassLoader loads .class files into the JVM. Three built-in loaders: Bootstrap ClassLoader (core Java classes — rt.jar), Extension ClassLoader (ext directory), Application ClassLoader (classpath). Delegation model: a class loader first delegates to its parent before trying to load itself — ensures core Java classes can't be overridden by user classes. Custom class loaders enable hot-reloading (application servers load new class files without restart)." },
      { q: "Explain the difference between G1GC, ZGC, and Shenandoah.", a: "G1GC (Java 9+ default): divides heap into equal regions, collects regions with most garbage first (Garbage First). Aims for predictable pause times. Good balance of throughput and latency. ZGC (Java 15+ production-ready): ultra-low latency GC, sub-millisecond pauses regardless of heap size (terabyte heaps), concurrent marking and compaction. Shenandoah: similar to ZGC, concurrent compaction, designed for low-pause-time applications. Use ZGC/Shenandoah for latency-sensitive services (trading systems, real-time APIs)." },
      { q: "What is the difference between JIT compilation and AOT compilation in Java?", a: "JIT (Just-In-Time): the JVM compiles frequently-executed bytecode to native machine code at runtime ('hot paths'). JVM warms up over minutes. Optimal for long-running server applications — performance improves over time. AOT (Ahead-Of-Time, GraalVM native image): compiles to native binary at build time. Starts instantly (milliseconds vs seconds), uses less memory, but no JIT optimization at runtime. Best for serverless functions and CLI tools where startup time matters." },
      { q: "How does Java serialization work and what are its security concerns?", a: "Java serialization (implements Serializable) converts objects to byte streams for storage or network transmission. ObjectOutputStream.writeObject() → ObjectInputStream.readObject(). Security concerns: deserialization of untrusted data can execute arbitrary code (gadget chains — Apache Commons Collections vulnerability). Mitigations: use Java 9+'s serialization filter (ObjectInputFilter), use safer alternatives (JSON with Jackson, Protocol Buffers, Kryo with allowlist). Only serialize internal objects you fully control." },
      { q: "What is Project Loom and how do virtual threads change Java concurrency?", a: "Project Loom (Java 21+ GA): introduces virtual threads — lightweight threads managed by the JVM (not OS threads). You can create millions of virtual threads without running out of OS thread resources. Virtual threads use the same Thread API — existing code works without changes. They are perfect for I/O-bound applications (web servers, database clients). One virtual thread per request model becomes viable at massive concurrency — eliminating the need for reactive programming (WebFlux) in many cases." },
      { q: "How would you find and fix a memory leak in a Java application?", a: "Identify: heap memory grows over time, eventually OutOfMemoryError. Tools: Java Flight Recorder (JFR), JProfiler, VisualVM — take heap snapshots over time, compare retained sizes. Common causes: static collections holding objects (static Map growing without eviction), unclosed resources in try blocks, event listeners not removed, ThreadLocal variables not removed in thread pool threads. Fix: clear references when done, use WeakHashMap for caches, always close resources, remove listeners on cleanup, call ThreadLocal.remove() in finally." },
      { q: "Explain the Java 9 Module System (JPMS).", a: "JPMS (Java Platform Module System) organizes code into modules — each declares what packages it exports and what other modules it requires. Provides strong encapsulation (packages not exported are inaccessible even via reflection), reliable configuration (missing dependencies fail at startup not runtime), improved security. Defined in module-info.java. Most relevant in large codebases and frameworks — most applications can use unnamed module (classpath) without adopting JPMS explicitly." },
      { q: "What is the difference between ExecutorService.submit() and execute()?", a: "execute(Runnable): fire-and-forget — no return value, exceptions are silently discarded (unless UncaughtExceptionHandler is set). submit(Callable): returns a Future<T> — you can get the result, and exceptions are captured and re-thrown when you call future.get(). Always use submit() when you need results or must handle task exceptions. execute() is for true fire-and-forget background tasks where you don't care about completion or exceptions." },
    ],
  },

  // ── SECTION 11: COMPARISON ───────────────────────────────────────
  comparison: {
    headers: ["Feature", "Java", "Python", "C++"],
    rows: [
      { feature: "Type System", react: "Static — compile-time type safety", vue: "Dynamic — runtime type checking", angular: "Static — manual memory + types" },
      { feature: "Memory Management", react: "Automatic — JVM Garbage Collector", vue: "Automatic — Reference counting + GC", angular: "Manual — new/delete (or smart pointers)" },
      { feature: "Performance", react: "High — JIT-optimized, warms up over time", vue: "Moderate — CPython is interpreted", angular: "Very High — native code, no GC overhead" },
      { feature: "Learning Curve", react: "Moderate — verbose but structured", vue: "Low — readable, minimal boilerplate", angular: "Very High — manual memory, complex syntax" },
      { feature: "Platform Independence", react: "Write Once, Run Anywhere (JVM)", vue: "Highly portable (CPython everywhere)", angular: "Compile per platform (cross-compilation)" },
      { feature: "Primary Use", react: "Enterprise backend, Android, big data", vue: "Data science, AI/ML, scripting, web", angular: "Systems programming, game engines, embedded" },
      { feature: "Concurrency", react: "Threads + ExecutorService + Virtual Threads", vue: "GIL limits true parallelism (asyncio for I/O)", angular: "True parallelism — full OS thread control" },
      { feature: "Job Market India", react: "Very High — IT services + enterprise", vue: "Very High — AI/ML, data, web", angular: "Moderate — embedded, gaming, systems" },
    ],
  },

  // ── SECTION 12: PROS & CONS ──────────────────────────────────────
  pros: [
    "Platform independence — JVM runs on any OS, eliminating deployment fragmentation",
    "Strong static typing — catch type errors at compile time, not in production at midnight",
    "Mature ecosystem — Maven Central, 500,000+ libraries, every enterprise problem is solved",
    "Excellent performance — JIT compilation makes long-running Java applications extremely fast",
    "Best-in-class tooling — IntelliJ IDEA's refactoring, debugging, and code analysis are unmatched",
    "Enterprise adoption — IT services companies run on Java, meaning the most job openings in India",
    "Backward compatibility — Java code from 2005 still compiles and runs in 2026, protecting investment",
  ],
  cons: [
    "Verbose — even with Lombok, Java requires more boilerplate than Python, Go, or Kotlin",
    "Slow startup — JVM initialization takes seconds; cold starts are a problem for serverless and CLI tools",
    "High memory footprint — a minimal Spring Boot app uses 200–500MB vs 50MB for Go or Node.js",
    "Complex concurrency — threads, locks, volatile, synchronized are powerful but easy to get wrong",
    "Checked exceptions — the debate never ends; many developers find them more hindrance than help",
    "Verbose generics syntax — Java's generics are more limited and syntactically noisier than Kotlin or C# generics",
    "Slow to adopt modern language features — compared to Kotlin, which has data classes, coroutines, and extension functions Java is catching up slowly",
  ],

  // ── SECTION 13: FUTURE SCOPE ─────────────────────────────────────
  futureScope: [
    "Java 21's Virtual Threads (Project Loom) are the most significant concurrency improvement in Java's history. The ability to create millions of lightweight threads eliminates the need for reactive programming in most applications — the same synchronous-looking code now scales to massive concurrency. Spring Boot 3.2+ with virtual threads is the next big migration wave for Indian enterprise teams.",
    "GraalVM Native Image is solving Java's startup time problem for serverless and CLI use cases. Spring Boot 3.x has first-class GraalVM support — applications that previously took 10 seconds to start now start in under 200 milliseconds and use 60% less memory. Serverless deployments (AWS Lambda with Java) become economically viable.",
    "Kotlin on the JVM continues to grow alongside Java. Kotlin compiles to JVM bytecode and is 100% interoperable with Java. Google officially recommends Kotlin for Android. Many new Spring Boot projects are being written in Kotlin. Java knowledge transfers completely to Kotlin — JVM mastery opens both ecosystems.",
    "Java's role in big data and AI infrastructure is growing. Apache Kafka (event streaming), Apache Spark (distributed computation), and Elasticsearch (search) — all JVM-based — are central to India's growing data engineering ecosystem. Companies like Swiggy, Meesho, and PhonePe processing hundreds of millions of events daily rely on JVM-based infrastructure.",
    "The Indian IT services industry's Java base is not going anywhere. TCS, Infosys, and Wipro have hundreds of thousands of Java developers and millions of lines of Java code in client systems. Maintenance, modernization, and new feature development on these systems will employ Java developers for the next 15–20 years. Java is the most stable long-term career investment in Indian software development.",
  ],

  // ── SECTION 14: ACTION PLAN ──────────────────────────────────────
  actionPlan: [
    { week: "Week 1–3", title: "Java Syntax and OOP Foundations", desc: "Install JDK 21 and IntelliJ IDEA Community. Learn variables, data types, operators, control flow (if/else, loops), methods. Then OOP: classes, objects, constructors, encapsulation. Build the Bank Account System — pure Java, no frameworks. Type every line of code yourself. Do not copy-paste." },
    { week: "Week 4–6", title: "OOP Deep Dive and Exception Handling", desc: "Inheritance, polymorphism, interfaces, abstract classes. Learn the difference — write examples for each. Exception handling: checked vs unchecked, try-with-resources, custom exception classes. Build the Library Management System. At this point you should be able to model any real-world domain in Java classes." },
    { week: "Week 7–9", title: "Collections Framework and Java 8 Features", desc: "Master List, Set, Map, Queue — know when to use each and their time complexities. Then Java 8: lambdas, Stream API (filter, map, reduce, collect, groupingBy), Optional. Build the Student Grade Management project using Stream API for all data manipulation. This is the point where Java starts feeling powerful." },
    { week: "Week 10–12", title: "Multithreading and Advanced Concepts", desc: "Threads, ExecutorService, synchronized, volatile, AtomicInteger, CompletableFuture. Build the Multi-threaded Download Manager. Study Generics and Design Patterns (Builder, Factory, Singleton, Observer). Write unit tests with JUnit 5 and Mockito for your existing projects." },
    { week: "Week 13–16", title: "Connect to Spring Boot", desc: "Everything you've learned is now the foundation for Spring Boot. Start the Spring Boot roadmap — your Java knowledge makes it dramatically easier. Build the Spring Boot Student API with MySQL database. The Controller-Service-Repository pattern is pure OOP applied to web development." },
    { week: "Week 17+", title: "Interview Preparation and Job Push", desc: "Practice LeetCode/HackerRank in Java — arrays, strings, HashMap-based problems, basic sorting. Study Java interview questions — the == vs .equals(), HashMap internals, GC, checked vs unchecked exceptions questions appear in every interview. Apply to Java developer, Java backend, and Spring Boot roles. IT services companies (TCS, Infosys, Wipro) run large Java hiring drives — these are your first target. Product startups with Java backends are your second. Deployed Spring Boot project + LeetCode practice + Java fundamentals = hireable." },
  ],
};
