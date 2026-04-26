import type { TechContent } from './types';

export const springbootContent: TechContent = {
  techId: 'spring-boot',
  readTime: '30–35 min',
  difficulty: 'Beginner to Advanced',
  lastUpdated: '2026',

  // ── OPENING HOOK ─────────────────────────────────────────────────
  openingHook:
    "If you want a backend job at a bank, an insurance company, a large product company like Infosys, Wipro, TCS, or any enterprise-grade tech team in India, there is one framework that appears in more job descriptions than any other: Spring Boot. While JavaScript developers chase startup roles with Node.js, the enterprise world — which employs the vast majority of Indian software engineers — runs on Java and Spring Boot. It powers the payment processing systems at HDFC, the trading engines at NSE, the policy management at LIC, and the microservices architecture at Flipkart's backend. Spring Boot is the framework that took Java's notorious verbosity and reduced it to something genuinely productive. A fresher with solid Spring Boot knowledge and two deployed REST APIs walks into interviews that pay ₹5–14 LPA. A mid-level Spring Boot developer with microservices experience is looking at ₹18–35 LPA. This Spring Boot tutorial for beginners is your complete roadmap — from Java prerequisites to job-ready.",

  // ── SECTION 1: INTRODUCTION ──────────────────────────────────────
  introText: [
    "Spring Boot is an opinionated, convention-over-configuration framework built on top of the Spring Framework for Java. It was created by Pivotal (now VMware Tanzu) and released in 2014. Its core promise: build production-ready Spring applications with minimal configuration. Before Spring Boot, setting up a Spring application required hundreds of lines of XML configuration. Spring Boot eliminated almost all of that.",
    "The Spring Framework itself has been the dominant Java enterprise framework since 2003 — handling dependency injection, transaction management, data access, and web MVC. Spring Boot does not replace Spring; it auto-configures it. When you add a dependency for a database, Spring Boot automatically configures a connection pool. When you add web dependencies, it automatically starts an embedded Tomcat server. You write business logic — Spring Boot handles the plumbing.",
    "The problem Spring Boot solves is the setup-to-productivity ratio. Traditional Java enterprise development meant days of configuration before writing a single line of business logic. Spring Boot reduces that to minutes. It also packages your entire application — including the web server — into a single executable JAR file. No separate Tomcat installation, no deployment XML, no container configuration. Run java -jar myapp.jar and your API is live.",
  ],

  realWorldUsages: [
    "Netflix — uses Spring Boot for many of its backend microservices handling metadata and user preferences",
    "Amazon — internal services and AWS SDK integrations use Spring Boot extensively",
    "HDFC Bank, ICICI Bank — core banking services, payment APIs, and customer portals built on Spring Boot",
    "Flipkart — microservices for catalog, inventory, pricing, and order management on Spring Boot",
    "Infosys, Wipro, TCS — enterprise digital transformation projects delivered on Spring Boot stack",
    "PhonePe, Paytm — payment processing and wallet management services powered by Spring Boot",
    "MakeMyTrip, Cleartrip — booking engines, fare aggregation, and inventory services on Spring Boot",
  ],

  // ── SECTION 2: WHY LEARN ─────────────────────────────────────────
  whyLearn: {
    demand:
      "Spring Boot is the most demanded backend Java framework in India across every category of employer — IT services giants, banks and NBFCs, insurance companies, e-commerce, and product startups that have chosen Java as their backend language. Naukri.com consistently lists 80,000+ active Spring Boot job postings. LinkedIn India shows Spring Boot in the top 5 most requested skills for backend roles. The Spring Boot roadmap 2026 is one of the most searched developer learning paths in India, reflecting just how central this framework is to the Indian software job market.",
    jobRoles: [
      { role: "Java Backend Developer", desc: "The most common role — build REST APIs, service layers, and database integrations using Spring Boot." },
      { role: "Full-Stack Java Developer", desc: "Spring Boot backend with Angular or React frontend — the most common enterprise full-stack combination." },
      { role: "Microservices Developer", desc: "Design and build independent deployable services using Spring Boot, Docker, and Kubernetes." },
      { role: "Software Engineer (Backend)", desc: "Product companies — fintech, ed-tech, e-commerce — backend feature development in Spring Boot." },
      { role: "Java Developer (Enterprise)", desc: "IT services companies — Infosys, Wipro, Accenture — deliver client projects built on Spring Boot." },
    ],
    whyCompanies: [
      { reason: "Enterprise-grade reliability", detail: "Spring Boot's ecosystem is battle-tested across 20+ years. Banks and financial institutions trust it for mission-critical systems." },
      { reason: "Built-in production features", detail: "Security, caching, transaction management, health checks, metrics — all built in via Spring's ecosystem." },
      { reason: "Massive talent pool", detail: "Java has been the #1 enterprise language for 25 years. Hiring Spring Boot developers is easier than any other backend stack." },
      { reason: "Microservices ecosystem", detail: "Spring Cloud — built on Spring Boot — provides service discovery, circuit breakers, API gateways, and distributed tracing out of the box." },
    ],
    salaryRange: "₹4 LPA – ₹10 LPA (Freshers) | ₹12 LPA – ₹30 LPA (Mid-Level, 3–5 years with microservices)",
    careerNote:
      "Spring Boot is the entry point to the entire Java enterprise ecosystem. Once solid, you grow into Spring Cloud (microservices), Apache Kafka (event streaming), Redis (caching), Kubernetes (orchestration), and system design at scale. Senior Spring Boot architects at product companies and banks in India regularly command ₹35–60 LPA. The ceiling is genuinely high.",
  },

  // ── SECTION 3: HOW IT WORKS ──────────────────────────────────────
  howItWorks: {
    intro:
      "Think of Spring Boot as a smart hotel concierge versus a blank apartment. With a blank apartment (raw Java), you set up everything yourself — internet, furniture, utilities, security. With a hotel concierge (Spring Boot), you walk in and everything is already set up based on what you asked for. Want a database? Your connection pool is configured. Want a web server? Tomcat is already running on port 8080. Spring Boot reads your dependencies and auto-configures sensible defaults. You override only what you need to change.",
    vdomSteps: [
      { num: "1", title: "Application Startup", text: "You call SpringApplication.run(). Spring Boot scans your classpath, reads your dependencies, and begins auto-configuration based on what it finds." },
      { num: "2", title: "Auto-Configuration", text: "Spring Boot's @EnableAutoConfiguration (included in @SpringBootApplication) checks 100+ auto-configuration classes. If spring-data-jpa is on the classpath and a datasource is configured, it auto-wires a JPA EntityManager. If spring-web is present, it starts an embedded Tomcat server." },
      { num: "3", title: "Component Scanning", text: "Spring scans the package of your main class and all sub-packages for @Component, @Service, @Repository, @Controller annotations — registering them as beans in the Application Context (the IoC container)." },
      { num: "4", title: "Dependency Injection", text: "Spring's IoC container wires beans together. A @Service that needs a @Repository gets it injected automatically — no manual object creation. Constructor injection is the recommended approach." },
      { num: "5", title: "Request Handling", text: "HTTP requests arrive at the embedded Tomcat server, are routed by DispatcherServlet to the correct @RestController method based on URL and HTTP method, processed through any filters and interceptors, and a response is returned." },
    ],
    componentCode: `// A complete Spring Boot REST API in under 50 lines

@SpringBootApplication // Combines @Configuration + @EnableAutoConfiguration + @ComponentScan
public class ProductApplication {
    public static void main(String[] args) {
        SpringApplication.run(ProductApplication.class, args); // Starts embedded Tomcat
    }
}

// Entity — maps to a database table
@Entity
@Table(name = "products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private Double price;
    private String category;
    // Lombok @Data generates getters, setters, toString, equals, hashCode
}

// Repository — data access layer (Spring Data JPA generates implementation)
public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findByCategory(String category);       // Auto-implemented!
    List<Product> findByPriceLessThan(Double maxPrice);  // Auto-implemented!
}

// Service — business logic layer
@Service
public class ProductService {
    private final ProductRepository productRepository; // Constructor injection

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<Product> getAllProducts() { return productRepository.findAll(); }
    public Product createProduct(Product product) { return productRepository.save(product); }
    public Product getProduct(Long id) {
        return productRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Product not found: " + id));
    }
}

// Controller — HTTP layer
@RestController
@RequestMapping("/api/products")
public class ProductController {
    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping
    public List<Product> getAll() { return productService.getAllProducts(); }

    @PostMapping
    public ResponseEntity<Product> create(@RequestBody @Valid Product product) {
        return ResponseEntity.status(HttpStatus.CREATED).body(productService.createProduct(product));
    }

    @GetMapping("/{id}")
    public Product getOne(@PathVariable Long id) { return productService.getProduct(id); }
}`,
    renderCycle: [
      "HTTP request arrives → DispatcherServlet receives it → routes to matching @RestController method",
      "@RestController method calls @Service → Service applies business logic",
      "@Service calls @Repository → Repository executes query against database via JPA/Hibernate",
      "Database returns data → JPA maps rows to entity objects → Service returns to Controller",
      "Controller returns object → Spring converts to JSON (Jackson) → HTTP response sent to client",
    ],
    closingNote:
      "This three-layer architecture — Controller → Service → Repository — is the standard pattern in every production Spring Boot application. Once you understand this flow and the annotations that wire it together, every Spring Boot concept builds naturally on top of it.",
  },

  // ── SECTION 4: CORE CONCEPTS ─────────────────────────────────────
  coreConcepts: [
    {
      id: "dependency-injection",
      number: "4.1",
      title: "Dependency Injection & IoC Container",
      icon: "🔗",
      color: "blue",
      intro:
        "Dependency Injection (DI) is Spring Boot's foundational concept. Instead of creating objects manually with 'new', you declare what you need and Spring's IoC (Inversion of Control) container creates and provides it. This removes coupling between classes, makes code testable, and lets Spring manage object lifecycles. Constructor injection is the recommended style — it makes dependencies explicit and enables immutability.",
      code: `// ❌ Without Dependency Injection — tightly coupled, untestable
public class OrderService {
    private PaymentService paymentService = new PaymentService(); // Hard dependency
    private EmailService emailService = new EmailService();       // Can't mock in tests

    public Order placeOrder(OrderRequest req) {
        paymentService.charge(req.getAmount()); // Always uses real payment service
        emailService.sendConfirmation(req.getEmail());
        return new Order(req);
    }
}

// ✅ With Dependency Injection — loosely coupled, testable
@Service
public class OrderService {
    private final PaymentService paymentService;
    private final EmailService emailService;
    private final OrderRepository orderRepository;

    // Constructor injection — Spring provides all dependencies automatically
    public OrderService(PaymentService paymentService,
                        EmailService emailService,
                        OrderRepository orderRepository) {
        this.paymentService = paymentService;
        this.emailService = emailService;
        this.orderRepository = orderRepository;
    }

    @Transactional // Spring manages the database transaction
    public Order placeOrder(OrderRequest req) {
        paymentService.charge(req.getUserId(), req.getAmount());
        Order order = orderRepository.save(new Order(req));
        emailService.sendConfirmation(req.getEmail(), order.getId());
        return order;
    }
}

// In tests — inject a mock instead of real implementation
@ExtendWith(MockitoExtension.class)
class OrderServiceTest {
    @Mock PaymentService paymentService;   // Mock — doesn't charge real cards
    @Mock EmailService emailService;
    @Mock OrderRepository orderRepository;
    @InjectMocks OrderService orderService; // Spring injects mocks

    @Test
    void placeOrder_shouldSaveAndNotify() {
        // Test without real payment or email systems
    }
}`,
      usage:
        "Every Spring Boot application uses DI. Your controllers depend on services, services depend on repositories, repositories depend on the EntityManager — Spring wires all of this together. In interviews, explaining DI and its benefits (loose coupling, testability, single responsibility) shows deep understanding of why Spring exists.",
      mistake:
        "Using @Autowired field injection instead of constructor injection. Field injection hides dependencies (you can't see them in the constructor), makes testing harder (you can't inject mocks without Spring context), and doesn't allow fields to be final (immutable). Always prefer constructor injection.",
    },
    {
      id: "rest-controller",
      number: "4.2",
      title: "REST Controllers — Building APIs",
      icon: "🚀",
      color: "primary",
      intro:
        "Spring Boot's @RestController annotation combines @Controller and @ResponseBody — every method returns data serialized directly to the HTTP response body as JSON (via Jackson). Paired with @RequestMapping and HTTP method annotations, you define a complete REST API with minimal code. Understanding request binding annotations is essential.",
      code: `@RestController
@RequestMapping("/api/v1/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    // GET /api/v1/users?page=0&size=10&sortBy=name
    @GetMapping
    public ResponseEntity<Page<UserDTO>> getUsers(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "id") String sortBy) {
        return ResponseEntity.ok(userService.getUsers(page, size, sortBy));
    }

    // GET /api/v1/users/42
    @GetMapping("/{id}")
    public ResponseEntity<UserDTO> getUser(@PathVariable Long id) {
        return ResponseEntity.ok(userService.findById(id));
    }

    // POST /api/v1/users  (body: {"name":"Arjun","email":"arjun@example.com"})
    @PostMapping
    public ResponseEntity<UserDTO> createUser(
            @RequestBody @Valid CreateUserRequest request) { // @Valid triggers Bean Validation
        UserDTO created = userService.create(request);
        URI location = URI.create("/api/v1/users/" + created.getId());
        return ResponseEntity.created(location).body(created); // 201 Created with Location header
    }

    // PUT /api/v1/users/42
    @PutMapping("/{id}")
    public ResponseEntity<UserDTO> updateUser(
            @PathVariable Long id,
            @RequestBody @Valid UpdateUserRequest request) {
        return ResponseEntity.ok(userService.update(id, request));
    }

    // DELETE /api/v1/users/42
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        userService.delete(id);
        return ResponseEntity.noContent().build(); // 204 No Content
    }

    // GET /api/v1/users/search?email=arjun@example.com
    @GetMapping("/search")
    public ResponseEntity<UserDTO> findByEmail(@RequestParam String email) {
        return ResponseEntity.ok(userService.findByEmail(email));
    }
}`,
      usage:
        "Every Spring Boot project starts with @RestController. Product APIs, admin APIs, mobile backend APIs — all built this way. ResponseEntity gives you full control over status codes and headers. DTOs (Data Transfer Objects) separate your API contract from your database model — a critical production pattern.",
      mistake:
        "Returning entity objects directly from controllers instead of DTOs. Entities expose database fields (including sensitive ones like passwords), create circular serialization issues with bidirectional JPA relationships, and tightly couple your API contract to your database schema. Always map entities to DTOs before returning from controllers.",
    },
    {
      id: "spring-data-jpa",
      number: "4.3",
      title: "Spring Data JPA — Database the Right Way",
      icon: "🗄️",
      color: "emerald",
      intro:
        "Spring Data JPA provides a repository abstraction over JPA (Java Persistence API) and Hibernate (the most used JPA implementation). You define an interface extending JpaRepository, declare method signatures following naming conventions, and Spring generates the implementation automatically. No SQL required for common operations.",
      code: `// Entity with JPA annotations
@Entity
@Table(name = "orders")
@Data                   // Lombok — generates getters, setters, toString, equals, hashCode
@NoArgsConstructor      // Lombok — no-args constructor (required by JPA)
@AllArgsConstructor     // Lombok — all-args constructor
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String status; // "PENDING", "CONFIRMED", "SHIPPED", "DELIVERED"

    @Column(nullable = false)
    private BigDecimal totalAmount;

    @ManyToOne(fetch = FetchType.LAZY) // Don't load user unless accessed
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<OrderItem> items = new ArrayList<>();

    @CreationTimestamp  // Hibernate — auto-set on insert
    private LocalDateTime createdAt;

    @UpdateTimestamp    // Hibernate — auto-set on update
    private LocalDateTime updatedAt;
}

// Repository — Spring generates ALL implementations automatically
public interface OrderRepository extends JpaRepository<Order, Long> {

    // Spring generates: SELECT * FROM orders WHERE user_id = ?
    List<Order> findByUserId(Long userId);

    // SELECT * FROM orders WHERE status = ? ORDER BY created_at DESC
    List<Order> findByStatusOrderByCreatedAtDesc(String status);

    // SELECT * FROM orders WHERE user_id = ? AND status = ?
    Optional<Order> findByIdAndUserId(Long id, Long userId);

    // SELECT * FROM orders WHERE total_amount BETWEEN ? AND ?
    List<Order> findByTotalAmountBetween(BigDecimal min, BigDecimal max);

    // Custom JPQL query when naming convention isn't enough
    @Query("SELECT o FROM Order o JOIN FETCH o.items WHERE o.user.id = :userId AND o.status = :status")
    List<Order> findByUserIdAndStatusWithItems(@Param("userId") Long userId,
                                               @Param("status") String status);

    // Native SQL for complex queries
    @Query(value = "SELECT * FROM orders WHERE created_at >= NOW() - INTERVAL 30 DAY",
           nativeQuery = true)
    List<Order> findOrdersInLast30Days();

    // Pagination support
    Page<Order> findByUserId(Long userId, Pageable pageable);

    // Aggregation
    @Query("SELECT COUNT(o) FROM Order o WHERE o.status = :status")
    long countByStatus(@Param("status") String status);
}

// Service using the repository
@Service
@Transactional // All public methods are transactional by default
public class OrderService {

    private final OrderRepository orderRepository;
    private final UserRepository userRepository;

    public OrderService(OrderRepository orderRepository, UserRepository userRepository) {
        this.orderRepository = orderRepository;
        this.userRepository = userRepository;
    }

    public Page<OrderDTO> getUserOrders(Long userId, int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.by("createdAt").descending());
        return orderRepository.findByUserId(userId, pageable)
                              .map(OrderDTO::fromEntity); // Map each entity to DTO
    }
}`,
      usage:
        "Spring Data JPA is how every Spring Boot application talks to a relational database. E-commerce order systems, HR management platforms, banking transaction records — all built with JPA entities and repositories. The query derivation from method names eliminates boilerplate SQL for 80% of use cases.",
      mistake:
        "Using FetchType.EAGER on associations by default. EAGER loading fetches related entities in the same query — loading a list of 100 orders would also load all users and all items for each order in a massive N+1 query problem. Always use FetchType.LAZY and fetch relationships explicitly when needed with JOIN FETCH in JPQL queries.",
    },
    {
      id: "spring-security",
      number: "4.4",
      title: "Spring Security — Authentication & Authorization",
      icon: "🔐",
      color: "orange",
      intro:
        "Spring Security is the most comprehensive security framework in the Java ecosystem. It handles authentication (who are you?), authorization (what can you do?), CSRF protection, session management, password encoding, and JWT token validation. In Spring Boot, it auto-configures basic security on startup — your job is to customize it for your application's needs.",
      code: `// Spring Security Configuration (Spring Boot 3.x / Spring Security 6.x)
@Configuration
@EnableWebSecurity
@EnableMethodSecurity // Enables @PreAuthorize on service methods
public class SecurityConfig {

    private final JwtAuthFilter jwtAuthFilter;
    private final UserDetailsService userDetailsService;

    public SecurityConfig(JwtAuthFilter jwtAuthFilter,
                          UserDetailsService userDetailsService) {
        this.jwtAuthFilter = jwtAuthFilter;
        this.userDetailsService = userDetailsService;
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        return http
            .csrf(csrf -> csrf.disable()) // Disabled for stateless REST API
            .sessionManagement(session ->
                session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/auth/**").permitAll()         // Public endpoints
                .requestMatchers("/api/admin/**").hasRole("ADMIN")   // Admin only
                .requestMatchers(HttpMethod.GET, "/api/products/**").permitAll() // Public reads
                .anyRequest().authenticated()                         // Everything else needs auth
            )
            .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class)
            .build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder(12); // Strength factor 12
    }

    @Bean
    public AuthenticationManager authenticationManager(
            AuthenticationConfiguration config) throws Exception {
        return config.getAuthenticationManager();
    }
}

// JWT Authentication Filter
@Component
public class JwtAuthFilter extends OncePerRequestFilter {

    private final JwtService jwtService;
    private final UserDetailsService userDetailsService;

    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain filterChain)
            throws ServletException, IOException {

        String authHeader = request.getHeader("Authorization");
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            filterChain.doFilter(request, response); // No token — skip
            return;
        }

        String token = authHeader.substring(7);
        String username = jwtService.extractUsername(token);

        if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
            UserDetails userDetails = userDetailsService.loadUserByUsername(username);
            if (jwtService.isTokenValid(token, userDetails)) {
                UsernamePasswordAuthenticationToken authToken =
                    new UsernamePasswordAuthenticationToken(
                        userDetails, null, userDetails.getAuthorities());
                authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                SecurityContextHolder.getContext().setAuthentication(authToken);
            }
        }
        filterChain.doFilter(request, response);
    }
}

// Auth Controller — login and register
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @PostMapping("/register")
    public ResponseEntity<AuthResponse> register(@RequestBody @Valid RegisterRequest req) {
        return ResponseEntity.ok(authService.register(req));
    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@RequestBody @Valid LoginRequest req) {
        return ResponseEntity.ok(authService.login(req));
    }
}

// Method-level security on service
@Service
public class UserService {

    @PreAuthorize("hasRole('ADMIN') or #userId == authentication.principal.id")
    public UserDTO getUser(Long userId) { // Admin OR the user themselves
        return userRepository.findById(userId).map(UserDTO::fromEntity)
               .orElseThrow(() -> new ResourceNotFoundException("User not found"));
    }

    @PreAuthorize("hasRole('ADMIN')")
    public void deleteUser(Long userId) {
        userRepository.deleteById(userId);
    }
}`,
      usage:
        "Every production Spring Boot API needs Spring Security. Register/login flows, JWT protection, role-based access (admin vs user vs moderator), method-level security — this is what separates a tutorial project from a production-ready one. Banks, fintech apps, and enterprise SaaS all use Spring Security at their core.",
      mistake:
        "Storing passwords in plain text or using weak hashing (MD5, SHA-1). Always use BCryptPasswordEncoder with a cost factor of at least 10. BCrypt is adaptive — you can increase the cost factor over time as hardware gets faster. Never store or log passwords in any form.",
    },
    {
      id: "exception-handling",
      number: "4.5",
      title: "Exception Handling — Global and Consistent",
      icon: "🛡️",
      color: "red",
      intro:
        "Spring Boot's default error responses are HTML error pages or inconsistent JSON — useless for REST API clients. @ControllerAdvice combined with @ExceptionHandler gives you a single class that handles all exceptions from all controllers, returning consistent, informative JSON error responses with correct HTTP status codes.",
      code: `// Custom exception classes
public class ResourceNotFoundException extends RuntimeException {
    private final String resourceName;
    private final Long resourceId;

    public ResourceNotFoundException(String resourceName, Long resourceId) {
        super(String.format("%s not found with id: %d", resourceName, resourceId));
        this.resourceName = resourceName;
        this.resourceId = resourceId;
    }
}

public class BusinessException extends RuntimeException {
    private final String errorCode;

    public BusinessException(String message, String errorCode) {
        super(message);
        this.errorCode = errorCode;
    }
}

// Standard error response DTO
@Data
@AllArgsConstructor
public class ErrorResponse {
    private int status;
    private String error;
    private String message;
    private String path;
    private LocalDateTime timestamp;
    private List<String> details; // For validation errors
}

// Global Exception Handler — catches exceptions from ALL controllers
@RestControllerAdvice
@Slf4j
public class GlobalExceptionHandler {

    // 404 — Resource not found
    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<ErrorResponse> handleNotFound(
            ResourceNotFoundException ex, HttpServletRequest request) {
        log.warn("Resource not found: {}", ex.getMessage());
        return ResponseEntity.status(HttpStatus.NOT_FOUND)
            .body(new ErrorResponse(404, "Not Found", ex.getMessage(),
                                    request.getRequestURI(), LocalDateTime.now(), null));
    }

    // 400 — Validation errors from @Valid
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ErrorResponse> handleValidation(
            MethodArgumentNotValidException ex, HttpServletRequest request) {
        List<String> errors = ex.getBindingResult().getFieldErrors().stream()
            .map(fe -> fe.getField() + ": " + fe.getDefaultMessage())
            .toList();
        return ResponseEntity.status(HttpStatus.BAD_REQUEST)
            .body(new ErrorResponse(400, "Validation Failed",
                                    "Input validation failed", request.getRequestURI(),
                                    LocalDateTime.now(), errors));
    }

    // 409 — Duplicate resource
    @ExceptionHandler(DataIntegrityViolationException.class)
    public ResponseEntity<ErrorResponse> handleDuplicateKey(
            DataIntegrityViolationException ex, HttpServletRequest request) {
        return ResponseEntity.status(HttpStatus.CONFLICT)
            .body(new ErrorResponse(409, "Conflict",
                                    "Resource already exists", request.getRequestURI(),
                                    LocalDateTime.now(), null));
    }

    // 403 — Access denied
    @ExceptionHandler(AccessDeniedException.class)
    public ResponseEntity<ErrorResponse> handleAccessDenied(
            AccessDeniedException ex, HttpServletRequest request) {
        return ResponseEntity.status(HttpStatus.FORBIDDEN)
            .body(new ErrorResponse(403, "Forbidden",
                                    "You don't have permission", request.getRequestURI(),
                                    LocalDateTime.now(), null));
    }

    // 500 — Catch all unexpected exceptions
    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorResponse> handleGeneral(
            Exception ex, HttpServletRequest request) {
        log.error("Unexpected error at {}: {}", request.getRequestURI(), ex.getMessage(), ex);
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
            .body(new ErrorResponse(500, "Internal Server Error",
                                    "Something went wrong", request.getRequestURI(),
                                    LocalDateTime.now(), null));
    }
}`,
      usage:
        "Every production Spring Boot API uses a @RestControllerAdvice for centralized exception handling. Without it, Spring Boot returns stack traces to clients (security risk) or inconsistent error formats that frontend teams can't reliably parse. One handler class, consistent JSON errors, correct HTTP status codes — this is the production standard.",
      mistake:
        "Catching exceptions inside every service method with try-catch and swallowing them (empty catch blocks). This hides errors from logs and returns incorrect HTTP status codes. Let exceptions propagate up to the @RestControllerAdvice — it handles them uniformly. Only catch exceptions when you have specific recovery logic.",
    },
    {
      id: "application-properties",
      number: "4.6",
      title: "Configuration — application.properties & Profiles",
      icon: "⚙️",
      color: "yellow",
      intro:
        "Spring Boot's externalized configuration system lets you configure every aspect of your application through properties files, environment variables, or command-line arguments — without changing code. Spring Profiles let you have different configurations for development, testing, and production environments. This is how real enterprise applications manage environment-specific settings.",
      code: `# application.properties — base configuration (all environments)
spring.application.name=product-service
server.port=8080

# Database — H2 in-memory for development (overridden per profile)
spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.driver-class-name=org.h2.Driver

# JPA / Hibernate
spring.jpa.hibernate.ddl-auto=validate  # validate, update, create, create-drop
spring.jpa.show-sql=false               # Don't log SQL in production
spring.jpa.properties.hibernate.format_sql=true

# Application-specific custom properties
app.jwt.secret=JWT_SECRET            # Read from environment variable
app.jwt.expiration=86400000             # 24 hours in milliseconds
app.upload.max-file-size=5MB
app.cors.allowed-origins=https://myapp.com

# Actuator — health checks and metrics (for production monitoring)
management.endpoints.web.exposure.include=health,info,metrics
management.endpoint.health.show-details=when-authorized

---
# application-dev.properties — development overrides
spring.datasource.url=jdbc:mysql://localhost:3306/myapp_dev
spring.datasource.username=root
spring.datasource.password=password123
spring.jpa.hibernate.ddl-auto=update   # Auto-create/update tables in dev
spring.jpa.show-sql=true               # Log SQL in development
logging.level.com.myapp=DEBUG

---
# application-prod.properties — production settings
spring.datasource.url=DB_URL         # From environment variable
spring.datasource.username=DB_USER
spring.datasource.password=DB_PASS
spring.jpa.hibernate.ddl-auto=validate # Never auto-modify schema in production
spring.jpa.show-sql=false
logging.level.root=WARN
server.ssl.enabled=true

// Binding custom properties to a class
@Configuration
@ConfigurationProperties(prefix = "app.jwt")
@Data
public class JwtProperties {
    private String secret;         // app.jwt.secret
    private long expiration;       // app.jwt.expiration
    private String issuer = "myapp"; // app.jwt.issuer (with default)
}

// Using in a service
@Service
public class JwtService {
    private final JwtProperties jwtProperties; // Injected automatically

    public String generateToken(UserDetails userDetails) {
        return Jwts.builder()
            .setSubject(userDetails.getUsername())
            .setIssuer(jwtProperties.getIssuer())
            .setExpiration(new Date(System.currentTimeMillis() + jwtProperties.getExpiration()))
            .signWith(getSignKey())
            .compact();
    }
}

// Activate profiles:
// Development: java -jar app.jar --spring.profiles.active=dev
// Production:  SPRING_PROFILES_ACTIVE=prod java -jar app.jar
// Tests:       @ActiveProfiles("test") on your test class`,
      usage:
        "Every Spring Boot application uses profiles — dev (H2 in-memory database, debug logging, SQL shown), prod (real MySQL/PostgreSQL, error logging only, connection pool tuned). In Docker/Kubernetes deployments, configuration comes entirely from environment variables via ${ENV_VAR} placeholders. This is how enterprise applications manage environment-specific configuration.",
      mistake:
        "Hardcoding database credentials, JWT secrets, or API keys in application.properties and committing them to Git. Use environment variable placeholders (${DB_PASSWORD}) in properties files. The actual values go in environment variables set on the server or in Kubernetes Secrets — never in source code.",
    },
    {
      id: "spring-boot-testing",
      number: "4.7",
      title: "Testing — Unit, Integration, and Slice Tests",
      icon: "🧪",
      color: "purple",
      intro:
        "Spring Boot has first-class testing support. @SpringBootTest loads the full application context for integration tests. @WebMvcTest loads only the web layer (controllers + security) for controller tests. @DataJpaTest loads only the JPA layer for repository tests. This 'test slicing' makes tests fast and focused — testing exactly what needs testing without loading the entire application.",
      code: `// 1. UNIT TEST — test service logic in isolation (fast, no Spring context)
@ExtendWith(MockitoExtension.class)
class OrderServiceTest {

    @Mock private OrderRepository orderRepository;
    @Mock private PaymentService paymentService;
    @InjectMocks private OrderService orderService;

    @Test
    void placeOrder_shouldSaveOrderAndChargePayment() {
        // Arrange
        OrderRequest request = new OrderRequest(1L, List.of(new OrderItem(1L, 2)));
        Order savedOrder = new Order(1L, "CONFIRMED", BigDecimal.valueOf(90000));
        when(orderRepository.save(any(Order.class))).thenReturn(savedOrder);

        // Act
        Order result = orderService.placeOrder(request);

        // Assert
        assertThat(result.getStatus()).isEqualTo("CONFIRMED");
        verify(paymentService, times(1)).charge(eq(1L), any(BigDecimal.class));
        verify(orderRepository, times(1)).save(any(Order.class));
    }

    @Test
    void getOrder_whenNotFound_shouldThrowException() {
        when(orderRepository.findById(99L)).thenReturn(Optional.empty());
        assertThrows(ResourceNotFoundException.class, () -> orderService.getOrder(99L));
    }
}

// 2. CONTROLLER TEST — test HTTP layer only (@WebMvcTest — no DB)
@WebMvcTest(UserController.class)
class UserControllerTest {

    @Autowired private MockMvc mockMvc;
    @Autowired private ObjectMapper objectMapper;
    @MockBean private UserService userService; // Mock the service

    @Test
    @WithMockUser(roles = "ADMIN")
    void getUser_shouldReturnUserDTO() throws Exception {
        UserDTO dto = new UserDTO(1L, "Arjun", "arjun@example.com");
        when(userService.findById(1L)).thenReturn(dto);

        mockMvc.perform(get("/api/v1/users/1")
                .contentType(MediaType.APPLICATION_JSON))
               .andExpect(status().isOk())
               .andExpect(jsonPath("$.name").value("Arjun"))
               .andExpect(jsonPath("$.email").value("arjun@example.com"));
    }

    @Test
    void createUser_withInvalidEmail_shouldReturn400() throws Exception {
        CreateUserRequest req = new CreateUserRequest("Arjun", "not-an-email");

        mockMvc.perform(post("/api/v1/users")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(req)))
               .andExpect(status().isBadRequest())
               .andExpect(jsonPath("$.error").value("Validation Failed"));
    }
}

// 3. REPOSITORY TEST — test JPA queries with a real DB (@DataJpaTest)
@DataJpaTest // Uses in-memory H2, rolls back after each test
class OrderRepositoryTest {

    @Autowired private OrderRepository orderRepository;
    @Autowired private TestEntityManager entityManager;

    @Test
    void findByUserId_shouldReturnUserOrders() {
        User user = entityManager.persistAndFlush(new User("test@example.com"));
        entityManager.persistAndFlush(new Order("CONFIRMED", BigDecimal.TEN, user));
        entityManager.persistAndFlush(new Order("PENDING", BigDecimal.ONE, user));

        List<Order> orders = orderRepository.findByUserId(user.getId());

        assertThat(orders).hasSize(2);
        assertThat(orders).extracting("status").containsExactlyInAnyOrder("CONFIRMED", "PENDING");
    }
}

// 4. INTEGRATION TEST — full application context with real DB
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@ActiveProfiles("test")
class UserIntegrationTest {

    @Autowired private TestRestTemplate restTemplate;

    @Test
    void registerAndLogin_shouldReturnJwtToken() {
        RegisterRequest req = new RegisterRequest("Arjun", "arjun@test.com", "Password1!");
        ResponseEntity<AuthResponse> response = restTemplate
            .postForEntity("/api/auth/register", req, AuthResponse.class);

        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(response.getBody().getToken()).isNotBlank();
    }
}`,
      usage:
        "Testing is what companies actually check in take-home assignments and senior interviews. Unit tests for service logic, @WebMvcTest for controllers, @DataJpaTest for custom queries, @SpringBootTest for end-to-end flows. A project with comprehensive test coverage immediately stands out from tutorial-level submissions.",
      mistake:
        "Writing only @SpringBootTest tests for everything. Loading the full Spring context for every test is slow — a 200-test suite can take 10+ minutes if each test loads the context. Use test slices (@WebMvcTest, @DataJpaTest) for focused tests and @SpringBootTest only for true integration scenarios.",
    },
  ],

  // ── SECTION 5: PREREQUISITES ─────────────────────────────────────
  prerequisites: [
    { item: "Core Java (OOP Fundamentals)", done: false, note: "Non-negotiable — Spring Boot is Java", detail: "Classes, objects, inheritance, polymorphism, interfaces, abstract classes. Java Collections (List, Map, Set). Exception handling. Generics basics. Spend at least 4–6 weeks here before Spring Boot." },
    { item: "Java 8+ Features", done: false, note: "Lambda expressions, Streams, Optional are everywhere in Spring Boot code", detail: "Lambda syntax, functional interfaces, Stream API (map, filter, collect), Optional for null safety, method references. Modern Spring Boot code uses these extensively." },
    { item: "Maven or Gradle", done: true, note: "Build tools for Java projects", detail: "Understand pom.xml (Maven) — adding dependencies, running builds. Most Spring Boot projects use Maven. You don't need to master it — just understand how to add dependencies and run mvn clean install." },
    { item: "SQL and Relational Databases", done: false, note: "Spring Data JPA generates queries but you must understand them", detail: "Basic SQL — SELECT, INSERT, UPDATE, DELETE, JOIN. Table design, primary keys, foreign keys. Understand what a one-to-many and many-to-many relationship means before trying to model it in JPA." },
    { item: "HTTP and REST Fundamentals", done: true, note: "Know what you're building", detail: "HTTP methods (GET, POST, PUT, PATCH, DELETE), status codes (200, 201, 400, 401, 403, 404, 500), request/response structure, JSON format, what a REST API is." },
    { item: "IntelliJ IDEA", done: true, note: "The IDE every professional Java developer uses", detail: "Install IntelliJ IDEA Community Edition (free). Learn basic shortcuts — build, run, debug, navigate to class. The Spring Initializr is accessible directly from IntelliJ." },
  ],

  // ── SECTION 6: ROADMAP ───────────────────────────────────────────
  roadmap: [
    {
      phase: "Beginner",
      label: "01",
      duration: "Weeks 1–5",
      color: "emerald",
      topics: [
        "Spring Initializr — generate a project at start.spring.io",
        "@SpringBootApplication, @RestController, @GetMapping, @PostMapping",
        "Request binding — @PathVariable, @RequestParam, @RequestBody",
        "ResponseEntity — control status codes and headers",
        "Spring Data JPA — @Entity, JpaRepository, basic CRUD",
        "H2 in-memory database for development",
        "application.properties configuration basics",
        "Bean Validation — @Valid, @NotNull, @Size, @Email",
        "Lombok — @Data, @Builder, @NoArgsConstructor",
      ],
      buildProjects: [
        "Student Management API — CRUD for students with H2 database and basic validation",
        "Library Book API — manage books and authors, search by title and author",
        "Task Tracker API — create tasks, update status, filter by priority",
      ],
    },
    {
      phase: "Intermediate",
      label: "02",
      duration: "Weeks 6–12",
      color: "primary",
      topics: [
        "MySQL / PostgreSQL integration with real database",
        "JPA relationships — @OneToMany, @ManyToOne, @ManyToMany",
        "Spring Security — JWT authentication and authorization",
        "Custom queries — @Query JPQL and native SQL",
        "Global exception handling — @RestControllerAdvice",
        "DTOs and MapStruct for entity-to-DTO mapping",
        "Spring Profiles — dev, test, prod configurations",
        "Pagination and sorting with Pageable",
        "Unit testing with JUnit 5, Mockito, @WebMvcTest",
        "Actuator — health endpoints and metrics",
      ],
      buildProjects: [
        "E-Commerce REST API — products, users, orders, JWT auth, role-based access",
        "Blog Platform API — posts, comments, tags, auth, pagination, full test suite",
        "HR Management API — employees, departments, leave management, reporting",
        "Hospital Management API — patients, doctors, appointments, prescription records",
      ],
    },
    {
      phase: "Advanced",
      label: "03",
      duration: "Weeks 13–22+",
      color: "purple",
      topics: [
        "Spring Cloud — Eureka service discovery, API Gateway",
        "Microservices — split monolith into independent services",
        "Apache Kafka — event-driven communication between services",
        "Redis — caching with @Cacheable, session management",
        "Docker — containerize Spring Boot apps",
        "Kubernetes basics — deploy containers to clusters",
        "Distributed tracing — Spring Cloud Sleuth + Zipkin",
        "Circuit breakers — Resilience4j for fault tolerance",
        "Integration testing — @SpringBootTest with TestContainers",
        "API documentation — Springdoc OpenAPI (Swagger UI)",
      ],
      buildProjects: [
        "Microservices e-commerce — auth service, product service, order service, API gateway",
        "Real-time notification system — Spring Boot + Kafka + WebSocket",
        "Multi-tenant SaaS backend — tenant isolation, subscription management, admin panel",
      ],
    },
  ],

  // ── SECTION 7: USE CASES ─────────────────────────────────────────
  useCases: [
    { num: "01", title: "Core Banking and Fintech APIs", body: "Account management, transaction processing, balance enquiry, fund transfers — HDFC, ICICI, Axis Bank, and almost every Indian bank's digital banking backend runs on Spring Boot. The framework's transactional support (@Transactional), auditing, and security features align perfectly with financial compliance requirements." },
    { num: "02", title: "E-Commerce Backend Services", body: "Flipkart, Meesho, and Myntra use Spring Boot for catalog management, inventory, pricing engines, order management, and logistics coordination. Spring Boot's ability to handle high-concurrent reads for product listings while maintaining ACID transactions for orders is exactly what e-commerce needs." },
    { num: "03", title: "Enterprise Microservices", body: "Large enterprises break their monolithic applications into dozens of Spring Boot microservices — each responsible for one business domain (user, payment, notification, reporting). Spring Cloud provides the infrastructure: service discovery, API gateway, circuit breakers, and distributed configuration." },
    { num: "04", title: "API Gateways and BFF Services", body: "Spring Cloud Gateway (built on Spring Boot) sits in front of microservices — routing, rate limiting, authentication, request/response transformation. Companies like Paytm use Spring-based gateways to handle millions of payment API requests daily." },
    { num: "05", title: "Healthcare Information Systems", body: "Hospital management systems, patient records, appointment scheduling, insurance claim processing — healthcare companies in India (Apollo, Max, Manipal) use Spring Boot for its compliance-ready security, audit logging capabilities, and data integrity through transaction management." },
    { num: "06", title: "HR and ERP Systems", body: "SAP, Oracle ERP integrations, payroll processing, leave management, attendance tracking — enterprise IT services companies (TCS, Infosys, Wipro) deliver these on Spring Boot because the enterprise Java ecosystem integrates seamlessly with existing Java-based ERP systems." },
    { num: "07", title: "Batch Processing Systems", body: "Spring Batch (built on Spring Boot) handles large-scale data processing — end-of-day banking statements, monthly salary disbursements, bulk data migrations, report generation. Tasks that process millions of records on a schedule are Spring Batch use cases across Indian banking and insurance." },
  ],

  // ── SECTION 8: PROJECTS ──────────────────────────────────────────
  projects: {
    beginner: [
      { name: "Student Management REST API", desc: "CRUD operations for students with fields: name, email, phone, course, grade. H2 in-memory database. Basic validation with @Valid.", teaches: "Spring Initializr setup, @RestController, Spring Data JPA, H2 database, Bean Validation, ResponseEntity, Lombok" },
      { name: "Library Management API", desc: "Manage books (title, author, ISBN, copies) and borrowing records. Check availability, issue book, return book, list overdue.", teaches: "JPA relationships (@OneToMany), custom queries, date handling, business logic in service layer" },
      { name: "Employee Directory API", desc: "CRUD for employees with department, designation, salary. Filter by department and designation. Search by name.", teaches: "Pagination with Pageable, custom JPQL queries, query parameters, Spring Profiles with dev/prod config" },
      { name: "Product Catalog API", desc: "Products with categories, images, pricing, and stock levels. Add to inventory, update stock, search and filter.", teaches: "Enum types in JPA, file handling basics, nested resources, comprehensive validation" },
    ],
    intermediate: [
      { name: "E-Commerce REST API (Full)", desc: "Users, products, cart, orders, JWT auth, role-based access (admin/seller/buyer), order status lifecycle, pagination everywhere.", teaches: "Spring Security + JWT end-to-end, JPA relationships, DTOs with MapStruct, global exception handling, full test suite with Mockito and @WebMvcTest" },
      { name: "Blog Platform API", desc: "Auth users create posts with tags. Others comment and react. Soft delete posts. Full-text search on title and content. Paginated feeds.", teaches: "@ManyToMany for tags, soft delete with @SQLDelete, Spring Data JPA Specifications for dynamic filtering, Spring profiles" },
      { name: "Hospital Appointment System", desc: "Patients, doctors (with specializations and schedules), appointment booking, prescription management, admin dashboard endpoints.", teaches: "Complex JPA modeling, date/time handling with Java Time, business rule validation in service layer, Actuator for health checks" },
      { name: "Banking Transaction API", desc: "Accounts, deposits, withdrawals, fund transfers between accounts. Transaction history with filters. Balance calculation.", teaches: "@Transactional for atomic transfers, pessimistic locking to prevent race conditions, audit logging, integration testing" },
    ],
    advanced: [
      { name: "Microservices E-Commerce System", desc: "Auth Service, Product Service, Order Service, Notification Service, and API Gateway — each a separate Spring Boot app. Services communicate via REST and Kafka events.", teaches: "Spring Cloud Eureka, Spring Cloud Gateway, Kafka producer/consumer, inter-service communication, Docker Compose for local development" },
      { name: "Multi-Tenant SaaS Platform", desc: "Organizations, members, subscription plans, feature flags per plan, admin panel. Tenant data isolation. Stripe billing webhooks.", teaches: "Multi-tenancy patterns (schema-per-tenant vs discriminator column), Kafka for async billing events, Redis for caching tenant config, Docker deployment" },
      { name: "Real-Time Monitoring Dashboard Backend", desc: "Collect metrics from multiple services, store time-series data, expose WebSocket endpoints for live updates, generate scheduled reports.", teaches: "Spring WebSocket, @Scheduled tasks, Spring Batch for reports, Redis for real-time state, TestContainers for integration tests" },
    ],
  },

  // ── SECTION 9: MISTAKES ──────────────────────────────────────────
  mistakes: [
    {
      title: "Using Field Injection (@Autowired) Instead of Constructor Injection",
      explanation: "Field injection hides dependencies, prevents making fields final (immutability), makes testing harder (can't inject mocks without Spring context), and creates circular dependency issues that are hard to diagnose.",
      tip: "Always use constructor injection. If a class has too many constructor parameters (more than 3–4), it's a sign the class has too many responsibilities — split it.",
      wrong: "@Autowired private UserRepository userRepository; // Field injection — avoid",
      correct: "public UserService(UserRepository userRepository) { this.userRepository = userRepository; } // Constructor injection",
    },
    {
      title: "Exposing JPA Entities Directly from Controllers",
      explanation: "Returning @Entity objects from @RestController methods exposes your entire database schema, creates circular serialization issues with bidirectional relationships (infinite JSON recursion), and tightly couples your API to your data model.",
      tip: "Always create DTO classes for API responses. Use MapStruct for automatic entity-to-DTO mapping. Your API contract and database schema should be independent.",
      wrong: "@GetMapping public List<User> getUsers() { return userRepository.findAll(); } // Exposes entity",
      correct: "@GetMapping public List<UserDTO> getUsers() { return userService.findAll(); } // Returns DTO",
    },
    {
      title: "Using FetchType.EAGER on JPA Relationships",
      explanation: "EAGER loading fetches related entities immediately, even when you don't need them. Fetching a list of 100 orders with EAGER user relationship runs 101 queries (N+1 problem) and loads massive amounts of unnecessary data.",
      tip: "Always use FetchType.LAZY (the default for @OneToMany and @ManyToMany). Fetch relationships explicitly in your JPQL query with JOIN FETCH when you actually need them.",
      wrong: "@ManyToOne(fetch = FetchType.EAGER) private User user; // Loads user for every order",
      correct: "@ManyToOne(fetch = FetchType.LAZY) private User user; // Load only when accessed",
    },
    {
      title: "Putting Business Logic in Controllers",
      explanation: "Controllers should only handle HTTP concerns — binding request data, calling services, returning responses. Business rules in controllers can't be reused, tested without HTTP setup, or maintained cleanly.",
      tip: "Controllers call services. Services contain business logic. Repositories handle data access. This three-layer architecture is the standard Spring Boot pattern — follow it from your first project.",
    },
    {
      title: "Not Using @Transactional Correctly",
      explanation: "A service method that performs multiple database operations without @Transactional is not atomic — if the second operation fails, the first is already committed. This causes data inconsistency.",
      tip: "Put @Transactional on service methods that perform multiple database operations that must succeed or fail together. Don't put it on repository methods (Spring Data already handles this) or controller methods.",
      wrong: "// Fund transfer without @Transactional — debit may succeed, credit may fail",
      correct: "@Transactional public void transfer(Long from, Long to, BigDecimal amount) { debit(from, amount); credit(to, amount); }",
    },
    {
      title: "Hardcoding Credentials in application.properties",
      explanation: "Committing database passwords, JWT secrets, or API keys to Git exposes them to anyone with repository access. In enterprise environments, this is a security incident.",
      tip: "Use ${ENV_VARIABLE_NAME} placeholders in application.properties. Set actual values as environment variables on the server, in Docker/Kubernetes secrets, or via a secrets manager like Vault.",
      wrong: "spring.datasource.password=MyPassword123",
      correct: "spring.datasource.password=${DB_PASSWORD}",
    },
    {
      title: "Not Handling spring.jpa.hibernate.ddl-auto Correctly",
      explanation: "Using ddl-auto=create or create-drop in production drops and recreates all tables on every startup — destroying all data. Using update in production can cause schema changes that are hard to reverse.",
      tip: "Use create or update in development, validate in production. Use database migration tools (Flyway or Liquibase) for production schema changes — they give you versioned, repeatable, rollback-able migrations.",
      wrong: "spring.jpa.hibernate.ddl-auto=create # NEVER in production",
      correct: "# Dev: spring.jpa.hibernate.ddl-auto=update\n# Prod: spring.jpa.hibernate.ddl-auto=validate + Flyway migrations",
    },
    {
      title: "Writing Only @SpringBootTest Integration Tests",
      explanation: "Loading the full Spring context for every test is extremely slow. A suite of 200 tests where each loads the full application can take 15–20 minutes. Developers stop running tests because they're too slow.",
      tip: "Use unit tests (no Spring context) for service logic with Mockito. @WebMvcTest for controllers. @DataJpaTest for repositories. @SpringBootTest only for true end-to-end flows. This combination is fast and comprehensive.",
    },
    {
      title: "Not Implementing Pagination for List Endpoints",
      explanation: "A GET /products endpoint that returns all products works fine with 100 products. With 100,000 products, it fetches everything from the database, serializes it all to JSON, and crashes the server or times out.",
      tip: "Every list endpoint must support pagination from day one. Add Pageable parameter to your controller method and repository method. Return Page<T> with content, totalElements, and totalPages.",
      wrong: "@GetMapping public List<Product> getAll() { return repo.findAll(); }",
      correct: "@GetMapping public Page<ProductDTO> getAll(@PageableDefault(size=20) Pageable p) { return service.findAll(p); }",
    },
    {
      title: "Ignoring Spring Boot Actuator in Production",
      explanation: "Without Actuator, you have no visibility into your running application — no health checks, no metrics, no environment info. Operations teams can't monitor or troubleshoot the application.",
      tip: "Add spring-boot-starter-actuator. Expose /actuator/health for load balancer health checks. Integrate with Prometheus and Grafana via the metrics endpoint for production monitoring.",
    },
    {
      title: "Creating New EntityManager or SessionFactory Manually",
      explanation: "Spring Boot auto-configures JPA completely. Manually creating EntityManager or SessionFactory duplicates infrastructure, bypasses Spring's transaction management, and creates hard-to-debug issues.",
      tip: "Never create JPA infrastructure manually. Use @Repository interfaces extending JpaRepository. If you need EntityManager for advanced queries, inject it with @PersistenceContext — never instantiate it yourself.",
    },
    {
      title: "Skipping Input Validation",
      explanation: "Trusting @RequestBody data without validation allows invalid data (negative prices, empty names, malformed emails) into your database and causes NullPointerExceptions in service logic.",
      tip: "Add Bean Validation annotations to your request DTOs: @NotNull, @NotBlank, @Email, @Min, @Max, @Size. Use @Valid in the controller parameter. The @RestControllerAdvice handles MethodArgumentNotValidException automatically.",
      wrong: "@PostMapping public Product create(@RequestBody Product p) { return repo.save(p); }",
      correct: "@PostMapping public Product create(@RequestBody @Valid CreateProductRequest req) { return service.create(req); }",
    },
  ],

  // ── SECTION 10: INTERVIEW QUESTIONS ─────────────────────────────
  interviewQuestions: {
    beginner: [
      { q: "What is Spring Boot and how is it different from the Spring Framework?", a: "Spring Framework is a comprehensive Java framework for dependency injection, data access, and web MVC — but requires extensive XML/Java configuration. Spring Boot is built on top of Spring and provides auto-configuration (configures Spring automatically based on classpath), embedded server (Tomcat included), and opinionated defaults. You write business logic; Spring Boot handles the plumbing." },
      { q: "What is @SpringBootApplication and what annotations does it include?", a: "@SpringBootApplication is a convenience annotation that combines three annotations: @Configuration (marks as configuration class), @EnableAutoConfiguration (enables Spring Boot's auto-configuration), and @ComponentScan (scans the current package and sub-packages for Spring components)." },
      { q: "What is Dependency Injection and why is it important?", a: "DI is a design pattern where objects receive their dependencies from an external source (Spring's IoC container) rather than creating them internally. Benefits: loose coupling (classes don't depend on concrete implementations), testability (inject mocks), and single responsibility (components focus on their logic, not dependency management)." },
      { q: "What is the difference between @Component, @Service, @Repository, and @Controller?", a: "All four are specializations of @Component — they all register the class as a Spring bean. @Service marks business logic layer. @Repository marks data access layer (also adds exception translation). @Controller marks web layer (with @ResponseBody added by @RestController). Specialization improves code readability and enables specific behavior (like @Repository's exception translation)." },
      { q: "What is Spring Data JPA and what does JpaRepository provide?", a: "Spring Data JPA is an abstraction over JPA (Hibernate) that generates repository implementations automatically. JpaRepository provides: findAll(), findById(), save(), deleteById(), count(), and existsById() — plus query derivation from method names (findByEmail(), findByStatusOrderByCreatedAtDesc()) without writing any implementation code." },
      { q: "What is the difference between @GetMapping, @PostMapping, @PutMapping, @PatchMapping, and @DeleteMapping?", a: "They are shortcuts for @RequestMapping(method = RequestMethod.X). @GetMapping for reading data, @PostMapping for creating, @PutMapping for full update (replace), @PatchMapping for partial update, @DeleteMapping for deletion. Using correct HTTP methods is a REST API design convention." },
      { q: "What is @RequestBody, @PathVariable, and @RequestParam?", a: "@RequestBody binds the HTTP request body (JSON) to a Java object. @PathVariable extracts values from the URL path (/users/{id} → @PathVariable Long id). @RequestParam extracts values from the query string (/users?page=0 → @RequestParam int page)." },
      { q: "What is Lombok and why is it used in Spring Boot projects?", a: "Lombok is a Java library that generates boilerplate code at compile time via annotations. @Data generates getters, setters, equals, hashCode, toString. @Builder creates a builder pattern. @NoArgsConstructor and @AllArgsConstructor generate constructors. Reduces Java's verbosity significantly." },
      { q: "What is application.properties used for?", a: "It's Spring Boot's externalized configuration file — store server port, database connection details, JPA settings, logging levels, and custom application properties. Different profiles (application-dev.properties, application-prod.properties) allow environment-specific overrides." },
      { q: "What is Bean Validation and how do you use it in Spring Boot?", a: "Bean Validation (javax.validation) lets you add constraints to DTO fields: @NotNull, @NotBlank, @Email, @Min, @Max, @Size, @Pattern. Add @Valid to the @RequestBody parameter in your controller to trigger validation. Invalid input throws MethodArgumentNotValidException, caught by @RestControllerAdvice." },
    ],
    intermediate: [
      { q: "Explain the difference between constructor injection, setter injection, and field injection. Which is preferred?", a: "Constructor injection: dependencies passed through the constructor — preferred. Makes dependencies explicit, allows final fields (immutability), works without Spring (testable in isolation). Setter injection: via @Autowired on setters — use for optional dependencies. Field injection: @Autowired directly on fields — avoid. Hides dependencies, prevents final fields, requires Spring context for testing." },
      { q: "What is @Transactional and what happens if it's not used?", a: "@Transactional wraps a method in a database transaction — all operations either commit together or roll back together on exception. Without it, each repository operation auto-commits independently. A transfer method debiting one account and crediting another without @Transactional can debit successfully and then fail the credit, leaving money lost." },
      { q: "What is the N+1 query problem and how do you solve it in Spring Data JPA?", a: "When fetching N entities, each entity triggers an additional query to load its relationship — N+1 total queries. Example: loading 100 orders where each order separately loads its user. Solve with JOIN FETCH in JPQL: @Query('SELECT o FROM Order o JOIN FETCH o.user') — fetches orders and users in one query. Or use @EntityGraph to specify relationships to load eagerly per query." },
      { q: "What is the difference between FetchType.LAZY and FetchType.EAGER?", a: "LAZY: related entity is loaded only when explicitly accessed — a proxy is used initially. EAGER: related entity is loaded in the same query as the parent. LAZY is the default for @OneToMany and @ManyToMany. EAGER is default for @ManyToOne and @OneToOne. Always use LAZY and fetch explicitly with JOIN FETCH when needed to avoid performance issues." },
      { q: "How does Spring Security work at a high level?", a: "Spring Security adds a filter chain before your servlet. Each request passes through configured filters — the most important is the authentication filter (e.g., JwtAuthFilter). If authentication succeeds, the SecurityContext is populated with the user's details and authorities. @PreAuthorize and security rules then check authorities against the request's required permissions." },
      { q: "What is @RestControllerAdvice and how does it differ from @ControllerAdvice?", a: "@ControllerAdvice applies to @Controller classes and requires @ResponseBody on exception handler methods to return JSON. @RestControllerAdvice combines both — it applies to @RestController classes and automatically serializes return values as JSON. @RestControllerAdvice is the standard for REST API global exception handling." },
      { q: "How do you implement pagination in Spring Boot?", a: "Add Pageable parameter to the controller method and repository method. Pass a Pageable instance (PageRequest.of(page, size, Sort)) to the repository. Repository extends JpaRepository<T, ID> and the method returns Page<T>. Page contains content (the actual data), totalElements, totalPages, and current page info." },
      { q: "What is the difference between @Query with JPQL and nativeQuery = true?", a: "JPQL (Java Persistence Query Language) queries operate on entities and fields (database-independent). nativeQuery = true uses actual SQL (table and column names, database-specific syntax). Use JPQL for portability; native queries for complex operations JPQL can't express (window functions, CTEs, complex aggregations)." },
      { q: "What is Spring Profiles and how do you use them?", a: "Spring Profiles allow different configurations for different environments. Create application-dev.properties, application-prod.properties. Activate with spring.profiles.active=dev (property), --spring.profiles.active=prod (command line), or SPRING_PROFILES_ACTIVE=prod (environment variable). Beans can also be profile-specific with @Profile('dev')." },
      { q: "What are DTOs (Data Transfer Objects) and why are you supposed to use them?", a: "DTOs are plain Java objects that represent the data shape for API requests and responses, separate from JPA entities. They prevent exposing sensitive fields (passwords), avoid JSON serialization issues with JPA relationships, allow API versioning without changing the database model, and improve security by controlling exactly what data is exposed." },
    ],
    advanced: [
      { q: "How would you design a microservices architecture using Spring Boot and Spring Cloud?", a: "Each business domain becomes a separate Spring Boot service. Spring Cloud Eureka handles service registration and discovery. Spring Cloud Gateway acts as the API gateway — routing, rate limiting, auth. Services communicate synchronously via REST (RestTemplate/WebClient) or asynchronously via Kafka events. Spring Cloud Sleuth adds distributed tracing. Resilience4j provides circuit breakers." },
      { q: "What is the difference between optimistic and pessimistic locking in JPA?", a: "Optimistic locking: assumes conflicts are rare. Uses a @Version field — on update, checks if version matches. If another transaction modified the record, throws OptimisticLockException. Good for high-read, low-conflict scenarios. Pessimistic locking: locks the database row on read (SELECT FOR UPDATE). Prevents concurrent modifications. Use for high-conflict scenarios like inventory deduction or bank balance updates." },
      { q: "How do you implement caching in Spring Boot?", a: "Add spring-boot-starter-cache. Add @EnableCaching to configuration. Annotate service methods: @Cacheable('products') caches the return value, @CacheEvict('products') clears cache on update/delete, @CachePut updates the cache. Configure Redis as the cache provider for distributed caching across multiple instances. Cache is hit before the method executes." },
      { q: "What is Flyway and why is it better than ddl-auto=update in production?", a: "Flyway is a database migration tool. You write versioned SQL scripts (V1__create_users.sql, V2__add_phone_column.sql). Flyway applies them in order, tracks which have run in a schema_version table, and never re-runs completed migrations. ddl-auto=update is unpredictable — it may add columns but won't handle renames, drops, or data migrations safely." },
      { q: "How would you implement circuit breakers in a Spring Boot microservices system?", a: "Use Resilience4j's @CircuitBreaker annotation. Circuit breaker has three states: CLOSED (normal, all requests pass), OPEN (too many failures — requests fail fast with fallback), HALF_OPEN (testing recovery — some requests pass). Configure failure rate threshold (e.g., 50% failure rate opens the circuit) and wait duration before trying again." },
      { q: "How do you handle distributed transactions across microservices?", a: "JPA @Transactional only works within a single database. Across services: use the Saga pattern. Choreography-based Saga: each service publishes domain events to Kafka, other services react and publish their own events. Compensation transactions handle rollback. Orchestration-based Saga: a central orchestrator (e.g., another Spring Boot service) coordinates the workflow." },
      { q: "What is Spring WebFlux and when would you use it instead of Spring MVC?", a: "Spring WebFlux is Spring's reactive web framework — non-blocking, built on Project Reactor (Mono/Flux). Use it when: you need to handle very high concurrency (100k+ connections), you're calling many external services concurrently, or you need streaming data. For typical CRUD APIs, Spring MVC is simpler and sufficient. WebFlux requires a reactive mindset throughout — reactive databases, reactive security." },
      { q: "How do you implement multi-tenancy in a Spring Boot application?", a: "Three strategies: (1) Database-per-tenant: each tenant has a separate database — use AbstractRoutingDataSource to switch datasource based on tenant ID. (2) Schema-per-tenant: one database, separate schemas per tenant — switch schema per request. (3) Row-level isolation: all tenants in one schema, every table has a tenant_id column — use Hibernate filters to auto-filter by tenant." },
      { q: "What is TestContainers and how does it improve integration testing?", a: "TestContainers is a Java library that runs real Docker containers for your tests — a real MySQL, real Redis, real Kafka. This eliminates the gap between H2 (in-memory, not 100% MySQL compatible) and production database behavior. Add @Testcontainers to your test class, declare containers with @Container, and Spring Boot auto-connects to them." },
      { q: "How do you profile and optimize a slow Spring Boot application?", a: "Start with Spring Boot Actuator metrics — identify slow endpoints. Enable Hibernate SQL logging to find N+1 queries (spring.jpa.show-sql=true in dev). Use JProfiler or async-profiler for CPU profiling. Common fixes: add database indexes for query columns, fix N+1 with JOIN FETCH, add @Cacheable for expensive repeated queries, use connection pool tuning (HikariCP), add pagination to unbounded list queries." },
    ],
  },

  // ── SECTION 11: COMPARISON ───────────────────────────────────────
  comparison: {
    headers: ["Feature", "Spring Boot", "Node.js + Express", "Django (Python)"],
    rows: [
      { feature: "Language", react: "Java", vue: "JavaScript", angular: "Python" },
      { feature: "Type System", react: "Static — compile-time safety", vue: "Dynamic (TypeScript optional)", angular: "Dynamic (type hints optional)" },
      { feature: "Performance", react: "Very High (JVM optimized)", vue: "High (non-blocking I/O)", angular: "Moderate (GIL limitations)" },
      { feature: "Learning Curve", react: "High — Java + OOP + Spring ecosystem", vue: "Low (if you know JS)", angular: "Low-Moderate (Python is readable)" },
      { feature: "Ecosystem", react: "Maven/Gradle, Spring ecosystem, Java EE", vue: "npm (1.5M packages)", angular: "PyPI (massive, esp. ML/data)" },
      { feature: "Best For", react: "Enterprise, banking, large-scale backends", vue: "Startups, real-time, full-stack JS", angular: "Data-heavy apps, AI/ML, scripting" },
      { feature: "Job Market India", react: "Very High — IT services + enterprise", vue: "Very High — product startups", angular: "High — AI/ML + service companies" },
      { feature: "Concurrency", react: "Thread-per-request (MVC) or reactive (WebFlux)", vue: "Event loop (non-blocking)", angular: "Thread-based (async with asyncio)" },
      { feature: "Microservices", react: "Best — Spring Cloud ecosystem", vue: "Good — lightweight services", angular: "Good — but less tooling" },
    ],
  },

  // ── SECTION 12: PROS & CONS ──────────────────────────────────────
  pros: [
    "Auto-configuration eliminates hundreds of lines of XML configuration — production-ready in minutes",
    "Embedded server (Tomcat/Jetty) — single executable JAR, deploy anywhere Java runs",
    "Spring ecosystem breadth — Security, Data, Cloud, Batch, WebSocket, Cache — all integrated",
    "Enterprise-grade reliability — battle-tested in banks, insurance, and large-scale systems for 20+ years",
    "Excellent testing support — unit, slice (@WebMvcTest, @DataJpaTest), and integration testing built in",
    "Static typing (Java) — compile-time error detection, excellent IDE support (IntelliJ autocomplete)",
    "Highest paying backend skill in Indian enterprise market — senior Spring Boot roles command premium salaries",
  ],
  cons: [
    "Java verbosity — even with Lombok and Spring Boot, more boilerplate than Python or JavaScript",
    "Steep learning curve — requires Java OOP, Spring DI, JPA, Maven before writing your first API",
    "Slow startup time — Spring Boot apps typically start in 5–30 seconds (vs milliseconds for Node.js) — though GraalVM native images improve this",
    "Memory footprint — a minimal Spring Boot app uses 200–500MB RAM vs 50MB for a Node.js equivalent",
    "Overwhelming ecosystem — Spring's breadth is also its complexity. Too many options for every use case",
    "Heavy for simple services — for simple CRUD microservices, Spring Boot's overhead may outweigh its benefits vs lighter Java frameworks (Micronaut, Quarkus)",
    "Framework upgrades can break things — Spring Boot 3.x (Spring 6) had significant breaking changes from 2.x",
  ],

  // ── SECTION 13: FUTURE SCOPE ─────────────────────────────────────
  futureScope: [
    "GraalVM Native Image is transforming Spring Boot's startup time problem. Spring Boot 3.x has first-class GraalVM support — compiling Spring Boot apps to native executables that start in milliseconds and use 50% less memory. This directly addresses the main criticism of Spring Boot for microservices and serverless deployment.",
    "Spring Boot remains the dominant backend framework in the Indian enterprise and IT services market for the foreseeable future. The enormous installed base of Spring Boot applications across Indian banks, insurance companies, and large product companies means Spring Boot developers will be in demand for the next 10+ years regardless of new framework trends.",
    "Spring Cloud's microservices ecosystem is maturing as Indian companies adopt cloud-native architecture. Kubernetes-native Spring Boot deployment, Spring Cloud Gateway as API gateway, and Apache Kafka integration for event-driven architecture are becoming standard skills expected alongside basic Spring Boot knowledge in mid-level interviews.",
    "Virtual Threads (Project Loom) in Java 21 bring Node.js-style concurrency efficiency to Java — without the complexity of reactive programming (WebFlux). Spring Boot 3.2+ supports virtual threads natively, making Spring Boot applications handle high concurrency with thread-per-request simplicity but non-blocking performance. This is a major shift.",
    "AI integration is arriving in the Java ecosystem. Spring AI (an official Spring project) provides abstractions for integrating LLMs (OpenAI, Anthropic, Ollama) into Spring Boot applications. Java developers can now build AI-powered features — chat interfaces, RAG pipelines, vector search — within the familiar Spring Boot programming model.",
  ],

  // ── SECTION 14: ACTION PLAN ──────────────────────────────────────
  actionPlan: [
    { week: "Week 1–3", title: "Strengthen Core Java", desc: "OOP (classes, inheritance, interfaces, polymorphism), Collections (ArrayList, HashMap, HashSet), Exception handling, Java 8 features (lambdas, Stream API, Optional). Build 3 small Java programs (bank account system, student grade calculator, library management in pure Java). Do not skip this — Spring Boot is Java first." },
    { week: "Week 4–5", title: "First Spring Boot Application", desc: "Use Spring Initializr (start.spring.io) to generate a project. Build the Student Management API with full CRUD, H2 database, Lombok, and Bean Validation. Test every endpoint with Postman. Understand the Controller → Service → Repository architecture. Run the app, see Tomcat start, make your first API call." },
    { week: "Week 6–8", title: "Real Database and JPA Relationships", desc: "Switch from H2 to MySQL. Model JPA relationships (@OneToMany, @ManyToOne, @ManyToMany) — a blog with users, posts, and comments. Add custom JPQL queries. Add pagination with Pageable. Add Spring Profiles for dev (H2) and prod (MySQL)." },
    { week: "Week 9–11", title: "Security and Production Patterns", desc: "Implement Spring Security with JWT — register, login, protect endpoints, role-based access. Add @RestControllerAdvice for global exception handling. Add DTOs with MapStruct. Write unit tests with Mockito and @WebMvcTest tests. Deploy to Railway or AWS EC2. This phase builds the project that goes on your resume." },
    { week: "Week 12–15", title: "Build Your Portfolio Project", desc: "Build the E-Commerce REST API or Banking Transaction API from the intermediate projects. Full CRUD, JWT auth, relationships, pagination, exception handling, validation, test suite, and deployment with documentation (Swagger/OpenAPI). This is your anchor portfolio project — spend time making it production-quality." },
    { week: "Week 16+", title: "Interview Preparation and Job Push", desc: "Study Spring Boot interview questions — DI, @Transactional, N+1 problem, FetchType, Spring Security filter chain. Practice on HackerRank and LeetCode (Java). Apply to 10 Java backend roles per week. Target IT services companies (TCS, Infosys, Wipro digital) and product startups. A deployed API on Railway + a GitHub with tests + clear README closes most Spring Boot fresher interviews." },
  ],
};
