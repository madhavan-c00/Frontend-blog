import type { TechContent } from './types';

export const angularContent: TechContent = {
    techId: 'angular',
    readTime: '30–35 min',
    difficulty: 'Beginner to Advanced',
    lastUpdated: '2026',

    // ── OPENING HOOK ─────────────────────────────────────────────────
    openingHook:
        "If you want to be the developer that enterprise companies, IT majors, and large fintech startups fight to hire in 2026, learn Angular. Not because it's the trendiest framework — React holds that crown. But because Angular is the framework that powers the software Indians interact with every day: bank portals, insurance platforms, government digital services, and the internal tools at TCS, Infosys, Wipro, and Capgemini. These companies don't pick Angular by accident. They pick it because Angular enforces structure at scale. TypeScript by default, dependency injection built in, a CLI that generates correct boilerplate, and an opinionated module system that keeps 50-developer codebases maintainable for years. The result: Angular roles at enterprise companies consistently pay more, stay open longer, and require less competition from the flooded React market. A solid Angular developer with two deployed projects and strong RxJS understanding is positioned for a ₹5–14 LPA role in 2026 — and ₹20–40 LPA within 3–4 years. This is not a framework overview. This is the complete, no-fluff Angular roadmap — from zero concepts to job-ready developer.",

    // ── SECTION 1: INTRODUCTION ──────────────────────────────────────
    introText: [
        "Angular is a platform and framework for building single-page client applications using HTML and TypeScript. Developed and maintained by Google, Angular is not a library that you sprinkle into a page — it is a complete, opinionated application development platform. It ships with everything a large-scale application needs: a powerful component system, a hierarchical dependency injection container, a reactive forms module, a built-in HTTP client, a client-side router, a CLI for code generation, and an internationalization (i18n) framework. When you choose Angular, you are choosing an ecosystem, not just a tool.",
        "The distinction between Angular and other frontend frameworks like React or Vue is architectural intentionality. React is a UI rendering library — it solves one problem (how to update the DOM efficiently) and delegates every other decision to the developer. Angular is a framework — it solves the entire application problem. Routing, HTTP, forms, testing utilities, state management patterns, build tooling, and code generation all come with the package. This means more to learn upfront but dramatically less decision fatigue and architectural drift over time. A developer who has worked on one large Angular codebase knows exactly where to look in a different large Angular codebase on day one.",
        "Angular was built for the enterprise, and enterprise India has adopted it wholesale. Every major Indian IT services company — TCS, Infosys, Wipro, HCL, Capgemini, Accenture India — uses Angular as the standard frontend framework for client delivery projects. Indian banks including HDFC, ICICI, Axis, and SBI run Angular-powered digital banking portals. The government's major digital initiatives — UMANG, DigiLocker integrations, MyGov — are Angular-based. The health-tech, insurance-tech, and HR-tech products that emerged from the 2020–2024 digitization wave predominantly chose Angular. In 2026, knowing Angular is the single most reliable way to land a stable, well-paying frontend or full-stack role in India's corporate technology sector.",
    ],

    realWorldUsages: [
        "Google — Angular is built by Google's Angular team; Google Cloud Console, Firebase Console, and Google's own internal tools run on Angular",
        "Microsoft — Azure DevOps, Microsoft Teams web client, and multiple Office 365 web applications are built with Angular",
        "Deutsche Bank and JPMorgan — internal trading dashboards, risk management portals, and client-facing banking apps use Angular for its TypeScript strictness",
        "HDFC, ICICI, and Axis Bank — internet banking platforms, loan origination systems, and investment portals are Angular-powered SPAs",
        "TCS, Infosys, Wipro — Angular is the mandated frontend standard across thousands of enterprise delivery projects in India",
        "Upwork — freelancer and client dashboards, complex filtering and search interfaces built with Angular",
        "IBM — IBM Cloud Console, Watson tooling, and enterprise collaboration products use Angular for complex form-driven interfaces",
        "Government of India digital services — UMANG super-app, DigiLocker, and various ministry portals are Angular-based",
        "Razorpay and PhonePe — merchant dashboards, payment analytics, and internal operations tools built on Angular",
        "Samsung and LG — smart appliance management consoles and IoT device dashboards use Angular for data-dense UIs",
    ],

    // ── SECTION 2: WHY LEARN ─────────────────────────────────────────
    whyLearn: {
        demand:
            "Search 'Angular developer' on Naukri.com today and you'll find more open listings than for any other frontend framework in the enterprise segment. LinkedIn India shows Angular as the top-requested frontend skill at companies above 500 employees — banking, insurance, healthcare IT, HR-tech, and IT services. The key difference from React's job market: Angular roles stay open longer because fewer candidates have depth. A React developer with a portfolio competes with thousands; a strong Angular developer with real RxJS and form validation knowledge competes with hundreds. Lower supply, comparable or higher compensation, and more stable employment at established companies — Angular's market position in 2026 India is unique.",
        jobRoles: [
            { role: "Angular Developer", desc: "The most common specialized role — build, maintain, and optimize Angular SPAs. Deep expertise in components, services, RxJS, routing, and forms is expected." },
            { role: "Frontend Developer (Angular)", desc: "Broader frontend role at companies that use Angular as their primary UI framework — component architecture, state management, performance, and API integration." },
            { role: "Full-Stack Developer (MEAN/Angular + Node)", desc: "Own both the Angular frontend and the Node.js/Express backend — the highest-value profile for small-to-mid teams at product companies." },
            { role: "UI/Frontend Engineer (Enterprise)", desc: "Role title at IT majors and banking clients — Angular proficiency is expected, often alongside Angular Material or a design system." },
            { role: "Software Engineer (Product)", desc: "Mid-size product companies building internal tools, dashboards, and SaaS platforms hire Angular engineers to own specific feature modules end-to-end." },
            { role: "Tech Lead / Senior Angular Developer", desc: "After 3–4 years: architect Angular module structure, establish coding standards, review PRs, mentor juniors, own NgRx implementation across the codebase." },
        ],
        whyCompanies: [
            { reason: "Enforced consistency at scale", detail: "Angular's module system, DI container, and strict conventions mean every developer on a 30-person team writes code that looks the same. Onboarding time drops. Code reviews focus on logic, not structure." },
            { reason: "TypeScript is non-negotiable", detail: "Angular mandates TypeScript. At banks, insurance companies, and regulated fintech, the compile-time safety TypeScript provides is a compliance and reliability requirement — not a preference." },
            { reason: "Built-in everything", detail: "Routing, HTTP client, forms, animations, i18n, PWA support, SSR — all first-party. Zero time spent evaluating third-party libraries for core functionality. Teams ship faster." },
            { reason: "Long-term Google support", detail: "Angular follows a strict versioning schedule (major release every 6 months, LTS for 18 months). Enterprise procurement requires roadmap predictability — Angular provides it; smaller frameworks don't." },
        ],
        salaryRange: "₹4.5 LPA – ₹12 LPA (Freshers with portfolio) | ₹12 LPA – ₹30 LPA (Mid-Level, 2–4 years) | ₹30 LPA – ₹60 LPA (Senior/Architect, 5+ years)",
        careerNote:
            "Angular is not a ceiling — it's the enterprise foundation. Once you're solid in Angular, you layer on NgRx (Redux-based state management), Angular Universal (server-side rendering for SEO), Angular CDK (component development kit), NestJS (Angular-style backend framework that pairs naturally with Angular frontends), and system design for scalable SPAs. Senior Angular architects at Indian banks, MNCs, and product companies regularly earn ₹35–60 LPA. The enterprise Angular career path is the most stable high-compensation trajectory in Indian frontend development.",
    },

    // ── SECTION 3: HOW IT WORKS ──────────────────────────────────────
    howItWorks: {
        intro:
            "Think of Angular like a well-run government department. The minister (AppModule) has authority over everything and delegates to specialized departments (feature modules). Each department has a public counter (component) that citizens (users) interact with, a team of clerks (services) that do the actual work, and a filing cabinet (state) that stores the records. Citizens never go to the back office — they only interact with the counter. The counter knows which clerk to call (dependency injection), and the clerk knows how to find the files (Mongoose/HTTP). Every department follows the same rules, uses the same forms (TypeScript interfaces), and reports to the same minister. That uniformity is what makes Angular scale.",
        vdomSteps: [
            { num: "1", title: "Angular Bootstraps the Application", text: "The browser loads index.html, which loads main.ts. Angular's bootstrapApplication() (or bootstrapModule() in NgModule mode) starts the Angular runtime, registers the root component, and initializes the dependency injection container with all provided services. The router reads the initial URL and activates the matching route." },
            { num: "2", title: "Router Activates a Component Tree", text: "Angular Router matches the current URL to a route configuration. If the route's module is lazy-loaded, Angular downloads that JavaScript chunk first. The matched component is created — Angular's DI system resolves all constructor dependencies and injects service instances. The component's template is compiled and inserted into the DOM inside <router-outlet>." },
            { num: "3", title: "Change Detection Runs", text: "Angular's change detection engine (Zone.js or Signals in newer versions) monitors the component tree. On any async event — user click, setTimeout, HTTP response, Observable emission — Angular checks which component properties changed and updates the DOM accordingly. With ChangeDetectionStrategy.OnPush, a component only re-checks when its @Input references change or an Observable emits." },
            { num: "4", title: "Component Delegates to Service via DI", text: "Components never contain business logic or HTTP calls. When a component needs data, it calls a service method injected via the constructor. Angular's hierarchical DI container resolves the service — either the root singleton or a component-scoped instance. The service uses HttpClient to make the HTTP request, returning an Observable." },
            { num: "5", title: "Observable Emits, Template Updates", text: "The HTTP response arrives. The RxJS Observable emits the data. The component subscription (or async pipe in the template) receives it. The component property is updated. Angular's change detection picks up the change and surgically updates only the affected DOM nodes. The user sees the data — no page reload, instant update." },
        ],
        componentCode: `// THE ANGULAR DATA FLOW — one complete feature, all concepts connected

// 1. INTERFACES — TypeScript contracts shared between component and service
export interface Product {
  _id: string;
  name: string;
  price: number;
  category: string;
  inStock: boolean;
  seller: { name: string; email: string };
  createdAt: string;
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
  pagination?: { total: number; page: number; pages: number };
}

// 2. SERVICE — all HTTP logic, zero UI concern
@Injectable({ providedIn: 'root' })
export class ProductService {
  private readonly apiUrl = \`\${environment.apiUrl}/products\`;

  constructor(private http: HttpClient) {}

  getProducts(filters: Partial<ProductFilters> = {}): Observable<ApiResponse<Product[]>> {
    const params = new HttpParams({ fromObject: filters as Record<string, string> });
    return this.http.get<ApiResponse<Product[]>>(this.apiUrl, { params }).pipe(
      retry({ count: 1, delay: 1000 }),
      shareReplay(1)
    );
  }

  createProduct(payload: Omit<Product, '_id' | 'createdAt'>): Observable<ApiResponse<Product>> {
    return this.http.post<ApiResponse<Product>>(this.apiUrl, payload);
  }
}

// 3. COMPONENT — delegates to service, manages template state
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  loading = false;
  error = '';
  private destroy$ = new Subject<void>();

  // Reactive filter stream
  filterControl = new FormControl('');
  filteredProducts$ = this.filterControl.valueChanges.pipe(
    debounceTime(300),
    distinctUntilChanged(),
    startWith(''),
    switchMap(search => this.productService.getProducts({ search: search ?? '' }).pipe(
      map(r => r.data),
      catchError(() => of([]))
    )),
    takeUntil(this.destroy$)
  );

  constructor(private productService: ProductService) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

// 4. TEMPLATE — async pipe handles subscription and unsubscription
// <input [formControl]="filterControl" placeholder="Search products..." />
//
// <ng-container *ngIf="filteredProducts$ | async as products; else loadingTpl">
//   <app-product-card
//     *ngFor="let product of products; trackBy: trackById"
//     [product]="product"
//     (addToCart)="onAddToCart($event)">
//   </app-product-card>
//   <p *ngIf="!products.length">No products found.</p>
// </ng-container>
//
// <ng-template #loadingTpl><app-spinner /></ng-template>`,
        renderCycle: [
            "Browser loads index.html → main.ts bootstraps Angular → DI container initialized",
            "Router reads URL → lazy-loads matching feature module → creates component tree",
            "Component constructor → Angular DI injects services → ngOnInit lifecycle hook fires",
            "Component calls service method → service uses HttpClient → returns RxJS Observable",
            "Observable emits HTTP response → async pipe / subscription updates component state",
            "Change detection runs → Angular compares old vs new DOM → patches only changed nodes",
        ],
        closingNote:
            "This six-step cycle is the heartbeat of every Angular application. Once you can trace any feature — login, product listing, form submission, real-time update — through bootstrap → route → component → service → Observable → DOM, you understand Angular. Every pattern you learn after this — NgRx, Signals, lazy loading, guards, interceptors — is just a specialization of one step in this cycle.",
    },

    // ── SECTION 4: CORE CONCEPTS ─────────────────────────────────────
    coreConcepts: [
        {
            id: "components-templates",
            number: "4.1",
            title: "Components and Templates — Angular's UI Building Blocks",
            icon: "🧱",
            color: "red",
            intro:
                "In Angular, every piece of UI is a Component — a TypeScript class decorated with @Component that has a template (HTML), optional styles (CSS/SCSS), and a selector (the custom HTML tag that renders it). Components communicate through @Input() (parent to child data) and @Output() (child to parent events). Understanding the component lifecycle — particularly ngOnInit, ngOnChanges, and ngOnDestroy — is foundational to writing correct Angular code.",
            code: `// product-card.component.ts — a reusable "dumb" (presentational) component
@Component({
  selector: 'app-product-card',
  template: \`
    <div class="card" [class.out-of-stock]="!product.inStock">
      <img [src]="product.imageUrl" [alt]="product.name" loading="lazy" />
      <div class="card-body">
        <h3>{{ product.name }}</h3>
        <p class="price">{{ product.price | currency:'INR':'symbol':'1.0-0' }}</p>
        <p class="category">{{ product.category | titlecase }}</p>
        <span class="badge" [ngClass]="product.inStock ? 'badge-success' : 'badge-danger'">
          {{ product.inStock ? 'In Stock' : 'Out of Stock' }}
        </span>
      </div>
      <div class="card-footer">
        <button
          (click)="onAddToCart()"
          [disabled]="!product.inStock"
          class="btn-primary">
          Add to Cart
        </button>
        <button (click)="onViewDetail()">View Details</button>
      </div>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent implements OnChanges {
  @Input({ required: true }) product!: Product;         // Parent passes product data
  @Output() addToCart = new EventEmitter<Product>();     // Child emits event to parent
  @Output() viewDetail = new EventEmitter<string>();

  discountedPrice = 0;

  // ngOnChanges fires whenever @Input values change
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['product']) {
      this.discountedPrice = this.product.price * 0.9; // Compute derived values here
    }
  }

  onAddToCart(): void {
    this.addToCart.emit(this.product);    // Bubble event up to parent
  }

  onViewDetail(): void {
    this.viewDetail.emit(this.product._id);
  }
}

// LIFECYCLE HOOKS — execution order
// constructor()        → DI injection, no DOM yet
// ngOnChanges()        → @Input changed (fires before ngOnInit too)
// ngOnInit()           → component initialized, @Inputs available — do data fetching here
// ngAfterViewInit()    → child components and ViewChild available
// ngOnDestroy()        → cleanup: unsubscribe Observables, clear timers

// SMART vs DUMB component pattern
// Smart (Container): fetches data, manages state, injects services
// Dumb (Presentational): receives data via @Input, emits events via @Output, pure display`,
            usage:
                "Every Angular application is a tree of components. Smart container components at route level fetch data and manage state. Dumb presentational components receive data via @Input and emit user actions via @Output. This separation makes components reusable, testable, and trivially predictable. Build every UI this way from your first project.",
            mistake:
                "Injecting services directly into presentational components and making HTTP calls there. Presentational components should be pure — given the same @Input, they always render the same output. The moment a dumb component fetches its own data, it becomes impossible to reuse in different contexts and hard to test.",
        },
        {
            id: "dependency-injection",
            number: "4.2",
            title: "Dependency Injection and Services",
            icon: "💉",
            color: "blue",
            intro:
                "Angular's Dependency Injection (DI) system is the backbone of the framework. It automatically provides instances of services to components and other services that declare them in their constructor. Services decorated with @Injectable({ providedIn: 'root' }) are singletons — one instance shared across the entire application. This is where all business logic, HTTP calls, and shared state live. DI is what makes Angular code testable and modular at scale.",
            code: `// product.service.ts — singleton service, the correct place for all data logic
@Injectable({ providedIn: 'root' })  // One instance for the whole app
export class ProductService {
  private readonly apiUrl = \`\${environment.apiUrl}/products\`;

  constructor(private http: HttpClient) {}  // Angular injects HttpClient automatically

  getAll(filters?: ProductFilters): Observable<Product[]> {
    const params = filters
      ? new HttpParams({ fromObject: filters as Record<string, string> })
      : undefined;
    return this.http.get<ApiResponse<Product[]>>(this.apiUrl, { params })
      .pipe(map(r => r.data));
  }

  getById(id: string): Observable<Product> {
    return this.http.get<ApiResponse<Product>>(\`\${this.apiUrl}/\${id}\`)
      .pipe(map(r => r.data));
  }

  create(payload: CreateProductDto): Observable<Product> {
    return this.http.post<ApiResponse<Product>>(this.apiUrl, payload)
      .pipe(map(r => r.data));
  }

  update(id: string, payload: Partial<CreateProductDto>): Observable<Product> {
    return this.http.patch<ApiResponse<Product>>(\`\${this.apiUrl}/\${id}\`, payload)
      .pipe(map(r => r.data));
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(\`\${this.apiUrl}/\${id}\`);
  }
}

// NOTIFICATION SERVICE — cross-component communication pattern
@Injectable({ providedIn: 'root' })
export class NotificationService {
  private toastSubject = new Subject<Toast>();
  toasts$ = this.toastSubject.asObservable();

  success(message: string): void {
    this.toastSubject.next({ type: 'success', message, id: Date.now() });
  }
  error(message: string): void {
    this.toastSubject.next({ type: 'error', message, id: Date.now() });
  }
}

// COMPONENT — declares service dependency in constructor; Angular provides it
@Component({ ... })
export class ProductListComponent {
  constructor(
    private productService: ProductService,     // Angular resolves this
    private notificationService: NotificationService,
    private router: Router
  ) {}

  deleteProduct(id: string): void {
    this.productService.delete(id).subscribe({
      next: () => {
        this.notificationService.success('Product deleted successfully');
        this.router.navigate(['/products']);
      },
      error: err => this.notificationService.error(err.message),
    });
  }
}`,
            usage:
                "Every CRUD operation, authentication check, cart management, notification dispatch, and analytics call goes through a service. The DI pattern means you write service logic once and inject it wherever needed — components, other services, guards, interceptors. It also means you can mock services in tests by swapping the real implementation for a fake one.",
            mistake:
                "Creating service instances manually with new ProductService() inside a component. This bypasses Angular's DI container entirely — you get a different instance each time, lose the singleton behavior, and make the component impossible to test with mock services. Always declare services in the constructor and let Angular inject them.",
        },
        {
            id: "rxjs-deep",
            number: "4.3",
            title: "RxJS — Reactive Programming Mastery",
            icon: "🌊",
            color: "purple",
            intro:
                "RxJS (Reactive Extensions for JavaScript) is Angular's async data layer. Every HTTP call, every router event, every form value change, every user event that needs transformation is an Observable stream. Mastering the ten most important RxJS operators is the single biggest differentiator between a junior Angular developer and a mid-level one. This section covers the operators that appear in every real Angular project and every senior interview.",
            code: `// THE 10 RXJS OPERATORS EVERY ANGULAR DEVELOPER MUST KNOW

// 1. map — transform emitted values
this.http.get<ApiResponse<User>>('/api/me').pipe(
  map(response => response.data)  // Extract just the data from the wrapper
)

// 2. switchMap — cancel previous inner Observable on new emission (search, navigation)
searchControl.valueChanges.pipe(
  debounceTime(400),
  distinctUntilChanged(),
  switchMap(term => this.productService.search(term).pipe(catchError(() => of([]))))
)
// When user types fast, only the LAST search request is active — others are cancelled

// 3. combineLatest — emit when ANY source emits, with latest from all
combineLatest([
  this.categoryFilter$,       // BehaviorSubject<string>
  this.sortOrder$,            // BehaviorSubject<string>
  this.pagination.page$,      // BehaviorSubject<number>
]).pipe(
  debounceTime(50),           // Batch rapid simultaneous emissions
  switchMap(([category, sort, page]) => this.productService.getAll({ category, sort, page }))
)

// 4. forkJoin — wait for ALL Observables to complete (parallel API calls)
forkJoin({
  products: this.productService.getAll(),
  categories: this.categoryService.getAll(),
  userProfile: this.authService.getProfile(),
}).subscribe(({ products, categories, userProfile }) => {
  // All three arrived simultaneously — one render pass
});

// 5. takeUntil — auto-unsubscribe when a trigger emits (memory leak prevention)
private destroy$ = new Subject<void>();

ngOnInit(): void {
  this.dataService.getLiveData()
    .pipe(takeUntil(this.destroy$))  // Unsubscribes when destroy$ emits
    .subscribe(data => this.data = data);
}
ngOnDestroy(): void { this.destroy$.next(); this.destroy$.complete(); }

// 6. catchError — handle errors within a stream without breaking it
getProducts(): Observable<Product[]> {
  return this.http.get<ApiResponse<Product[]>>('/api/products').pipe(
    map(r => r.data),
    catchError((err: HttpErrorResponse) => {
      this.notif.error(err.error?.message || 'Failed to load products');
      return of([]);  // Return empty array — stream continues without crashing
    })
  );
}

// 7. BehaviorSubject — stateful Observable with a current value
@Injectable({ providedIn: 'root' })
export class CartService {
  private cartItems = new BehaviorSubject<CartItem[]>([]);
  cartItems$ = this.cartItems.asObservable();
  cartCount$ = this.cartItems$.pipe(map(items => items.reduce((sum, i) => sum + i.qty, 0)));

  addItem(product: Product): void {
    const current = this.cartItems.getValue();
    const existing = current.find(i => i._id === product._id);
    if (existing) {
      this.cartItems.next(current.map(i =>
        i._id === product._id ? { ...i, qty: i.qty + 1 } : i
      ));
    } else {
      this.cartItems.next([...current, { ...product, qty: 1 }]);
    }
  }
}

// 8. shareReplay — cache Observable result, share with multiple subscribers
products$ = this.productService.getAll().pipe(shareReplay(1));
// Multiple components subscribing get the cached result — no duplicate HTTP calls

// 9. startWith — emit an initial value before the source emits
loading$ = merge(
  this.loadStart$.pipe(mapTo(true)),
  this.loadEnd$.pipe(mapTo(false))
).pipe(startWith(false));

// 10. retry / retryWhen — retry failed HTTP calls
this.http.get('/api/critical-data').pipe(
  retry({ count: 3, delay: 2000 })  // Retry up to 3 times, 2s apart
)`,
            usage:
                "switchMap for search and navigation. combineLatest for filter combinations. forkJoin for dashboard parallel loads. takeUntil for subscription cleanup. catchError for graceful error handling. BehaviorSubject for shared reactive state. shareReplay for cached HTTP calls. These seven patterns cover 90% of real Angular async scenarios.",
            mistake:
                "Using switchMap when you need mergeMap (or vice versa). For HTTP search — switchMap is correct (cancel stale requests). For parallel independent file uploads — mergeMap is correct (run all concurrently). Using switchMap for sequential form submissions will cancel pending saves when a new save triggers. Know which flattening operator matches your use case.",
        },
        {
            id: "reactive-forms-deep",
            number: "4.4",
            title: "Reactive Forms — Enterprise-Grade Form Handling",
            icon: "📋",
            color: "emerald",
            intro:
                "Angular's Reactive Forms system is one of its most powerful and most tested features. Every complex enterprise UI — loan applications, KYC flows, multi-step checkout, dynamic survey builders — is built with Reactive Forms. FormGroup, FormControl, FormArray, and custom validators give you complete, type-safe programmatic control over every aspect of your form. In Angular interviews, Reactive Forms is the most tested topic after RxJS.",
            code: `// COMPLETE REACTIVE FORMS PATTERN — multi-step registration with dynamic fields

@Component({ selector: 'app-register', templateUrl: './register.component.html' })
export class RegisterComponent implements OnInit {
  step = 1;
  form!: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      // Step 1: Personal info
      personal: this.fb.group({
        firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
        lastName: ['', [Validators.required, Validators.minLength(2)]],
        dob: ['', [Validators.required, this.ageValidator(18)]],
        gender: ['', Validators.required],
      }),
      // Step 2: Account credentials
      account: this.fb.group({
        email: ['', [Validators.required, Validators.email], [this.emailExistsValidator()]],
        phone: ['', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]],
        password: ['', [Validators.required, Validators.minLength(8), this.strongPasswordValidator]],
        confirmPassword: ['', Validators.required],
      }, { validators: this.passwordMatchValidator }),
      // Step 3: Dynamic phone numbers (FormArray)
      addresses: this.fb.array([this.createAddressGroup()]),
      // Step 4: Preferences
      preferences: this.fb.group({
        newsletter: [false],
        notifications: [true],
        language: ['en', Validators.required],
      }),
    });

    // Cross-field reactivity — disable confirmPassword until password has value
    this.accountGroup.get('password')!.valueChanges.subscribe(val => {
      if (!val) this.accountGroup.get('confirmPassword')!.disable();
      else this.accountGroup.get('confirmPassword')!.enable();
    });
  }

  get personalGroup(): FormGroup { return this.form.get('personal') as FormGroup; }
  get accountGroup(): FormGroup { return this.form.get('account') as FormGroup; }
  get addressesArray(): FormArray { return this.form.get('addresses') as FormArray; }

  createAddressGroup(): FormGroup {
    return this.fb.group({
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      pincode: ['', [Validators.required, Validators.pattern(/^[1-9][0-9]{5}$/)]],
      type: ['home', Validators.required],
    });
  }

  addAddress(): void { this.addressesArray.push(this.createAddressGroup()); }
  removeAddress(i: number): void { if (this.addressesArray.length > 1) this.addressesArray.removeAt(i); }

  // SYNCHRONOUS CUSTOM VALIDATOR — age must be >= minAge
  ageValidator(minAge: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) return null;
      const today = new Date();
      const dob = new Date(control.value);
      const age = today.getFullYear() - dob.getFullYear();
      return age >= minAge ? null : { underage: { required: minAge, actual: age } };
    };
  }

  // SYNCHRONOUS CROSS-FIELD VALIDATOR — passwords match
  passwordMatchValidator(group: AbstractControl): ValidationErrors | null {
    const pass = group.get('password')?.value;
    const confirm = group.get('confirmPassword')?.value;
    return pass === confirm ? null : { passwordMismatch: true };
  }

  strongPasswordValidator(control: AbstractControl): ValidationErrors | null {
    const val = control.value as string;
    if (!val) return null;
    const errors: ValidationErrors = {};
    if (!/[A-Z]/.test(val)) errors['noUppercase'] = true;
    if (!/[0-9]/.test(val)) errors['noNumber'] = true;
    if (!/[!@#$%^&*]/.test(val)) errors['noSpecial'] = true;
    return Object.keys(errors).length ? errors : null;
  }

  // ASYNC VALIDATOR — check email uniqueness against API
  emailExistsValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.auth.checkEmailExists(control.value).pipe(
        debounceTime(400),
        map(exists => exists ? { emailTaken: true } : null),
        catchError(() => of(null))
      );
    };
  }

  nextStep(): void {
    const stepGroup = this.form.get(\`step\${this.step}\`);
    if (stepGroup?.invalid) { stepGroup.markAllAsTouched(); return; }
    this.step++;
  }

  onSubmit(): void {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.loading = true;
    this.auth.register(this.form.value).subscribe({
      next: () => this.router.navigate(['/dashboard']),
      error: () => { this.loading = false; },
    });
  }
}

// TEMPLATE error display helper — reusable pattern
// <div class="field-error"
//   *ngIf="form.get('account.email')?.invalid && form.get('account.email')?.touched">
//   <span *ngIf="form.get('account.email')?.errors?.['required']">Email is required</span>
//   <span *ngIf="form.get('account.email')?.errors?.['email']">Enter a valid email</span>
//   <span *ngIf="form.get('account.email')?.errors?.['emailTaken']">Email already registered</span>
// </div>`,
            usage:
                "Multi-step registration forms, KYC document collection, loan application workflows, employee onboarding — all built with Reactive Forms. The FormArray pattern for dynamic fields (multiple addresses, phone numbers, beneficiaries) is the most common complex form requirement in enterprise Angular. Custom sync and async validators eliminate backend round-trips for common validations.",
            mistake:
                "Not calling markAllAsTouched() on form submit when the form is invalid. Angular only shows field-level errors after a user has 'touched' (clicked into and out of) a field. Without markAllAsTouched(), a user who clicks Submit on an empty form sees no error messages — the form appears to do nothing. Always markAllAsTouched() first, then bail if invalid.",
        },
        {
            id: "angular-router",
            number: "4.5",
            title: "Angular Router — Navigation, Guards, and Lazy Loading",
            icon: "🗺️",
            color: "yellow",
            intro:
                "Angular's built-in Router is one of the most powerful client-side routing systems in frontend development. It handles URL-to-component mapping, lazy loading of feature modules, navigation guards that control access, route resolvers that pre-fetch data, and nested routing for complex layouts. Understanding the full Router API is what separates Angular developers who can build simple SPAs from those who can build enterprise applications.",
            code: `// app-routing.module.ts — complete router configuration
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },

  // Lazy-loaded feature modules — bundle downloaded only on navigation
  {
    path: 'products',
    loadChildren: () => import('./features/products/products.module').then(m => m.ProductsModule),
    // products.module.ts has its own sub-routes: '', ':id', 'new', ':id/edit
  },

  // Protected route — requires authentication
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],           // Blocks if not authenticated
    canDeactivate: [UnsavedChangesGuard], // Warns if leaving with unsaved changes
    resolve: { dashboardData: DashboardResolver }, // Pre-fetches data before component init
    data: { title: 'Dashboard', breadcrumb: 'Home > Dashboard' }
  },

  // Role-protected admin section — lazy loaded, double-guarded
  {
    path: 'admin',
    loadChildren: () => import('./features/admin/admin.module').then(m => m.AdminModule),
    canLoad: [AuthGuard],               // Prevents bundle download for non-admins
    canActivate: [AuthGuard, RoleGuard],
    data: { roles: ['admin', 'superadmin'] }
  },

  // Nested routes with shared layout
  {
    path: 'account',
    component: AccountLayoutComponent, // Contains a nested <router-outlet>
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'profile', pathMatch: 'full' },
      { path: 'profile', component: ProfileComponent },
      { path: 'orders', component: OrderHistoryComponent },
      { path: 'settings', component: SettingsComponent },
    ],
  },

  { path: '**', component: NotFoundComponent },
];

// AUTH GUARD
@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean | UrlTree {
    if (this.auth.isAuthenticated) return true;
    return this.router.createUrlTree(['/login'], {
      queryParams: { returnUrl: this.router.url }
    });
  }

  canLoad(route: Route): boolean {
    if (this.auth.isAuthenticated) return true;
    this.router.navigate(['/login']);
    return false;
  }
}

// ROLE GUARD
@Injectable({ providedIn: 'root' })
export class RoleGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const required: string[] = route.data['roles'];
    if (required.includes(this.auth.currentUser?.role ?? '')) return true;
    this.router.navigate(['/unauthorized']);
    return false;
  }
}

// RESOLVER — pre-fetch data before component loads (no loading spinners in template)
@Injectable({ providedIn: 'root' })
export class ProductDetailResolver implements Resolve<Product> {
  constructor(private productService: ProductService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Product> {
    return this.productService.getById(route.params['id']).pipe(
      catchError(() => {
        this.router.navigate(['/404']);
        return EMPTY;  // Prevents component from activating on error
      })
    );
  }
}

// ACCESSING ROUTE DATA IN COMPONENT
@Component({ ... })
export class ProductDetailComponent implements OnInit {
  product!: Product;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // From resolver — synchronous, data is ready before component mounts
    this.product = this.route.snapshot.data['product'];

    // From URL params — Observable (reacts to URL changes without component recreation)
    this.route.paramMap.pipe(
      switchMap(params => this.productService.getById(params.get('id')!))
    ).subscribe(product => this.product = product);
  }
}`,
            usage:
                "Every Angular application beyond a landing page needs routing. Lazy loading is non-negotiable for performance — it's the difference between a 500KB initial bundle and a 3MB one. Guards enforce security at the navigation layer. Resolvers make data available before a component renders, eliminating loading states on page entry. These four Router patterns appear in every enterprise Angular project.",
            mistake:
                "Using canActivate without canLoad for admin routes. canActivate blocks navigation to a route, but the lazy-loaded module bundle is already downloaded. An attacker can inspect network traffic and download admin module code. canLoad prevents the bundle download entirely — use both on sensitive feature modules.",
        },
        {
            id: "http-interceptors",
            number: "4.6",
            title: "HTTP Interceptors and HttpClient",
            icon: "🔌",
            color: "orange",
            intro:
                "Angular's HttpClient module and the HTTP Interceptor pattern are what make enterprise Angular applications production-ready. HttpClient provides a typed, Observable-based HTTP API. Interceptors are middleware for all HTTP traffic — they can attach authentication tokens, log requests, handle errors globally, show/hide loading indicators, and retry failed requests, all in one place. Every senior Angular developer is expected to write custom interceptors.",
            code: `// 1. AUTH INTERCEPTOR — attach JWT to every outgoing request
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.auth.getToken();

    // Don't attach token to public endpoints
    const isPublic = req.url.includes('/auth/login') || req.url.includes('/auth/register');
    if (!token || isPublic) return next.handle(req);

    const authReq = req.clone({
      setHeaders: { Authorization: \`Bearer \${token}\` }
    });
    return next.handle(authReq);
  }
}

// 2. ERROR INTERCEPTOR — handle HTTP errors globally
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private auth: AuthService,
    private notif: NotificationService,
    private router: Router
  ) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        switch (error.status) {
          case 0:
            this.notif.error('No internet connection. Please check your network.');
            break;
          case 401:
            this.auth.logout();  // Token expired — log out and redirect
            break;
          case 403:
            this.router.navigate(['/unauthorized']);
            break;
          case 404:
            this.notif.error('Resource not found.');
            break;
          case 422:
            // Validation errors — let the component handle these
            break;
          case 500:
          default:
            this.notif.error('Server error. Our team has been notified.');
            break;
        }
        return throwError(() => error);
      })
    );
  }
}

// 3. LOADING INTERCEPTOR — auto show/hide global spinner
@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  private activeRequests = 0;
  constructor(private loading: LoadingService) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.activeRequests === 0) this.loading.show();
    this.activeRequests++;

    return next.handle(req).pipe(
      finalize(() => {
        this.activeRequests--;
        if (this.activeRequests === 0) this.loading.hide();
      })
    );
  }
}

// 4. CACHE INTERCEPTOR — cache GET responses to avoid redundant API calls
@Injectable()
export class CacheInterceptor implements HttpInterceptor {
  private cache = new Map<string, HttpResponse<unknown>>();

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (req.method !== 'GET') return next.handle(req);

    const cached = this.cache.get(req.url);
    if (cached) return of(cached.clone());

    return next.handle(req).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          this.cache.set(req.url, event.clone());
        }
      })
    );
  }
}

// app.module.ts — register ALL interceptors (order matters — auth before error)
providers: [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
]`,
            usage:
                "Every production Angular application needs AuthInterceptor and ErrorInterceptor at minimum. The LoadingInterceptor eliminates the need to track loading state per-request — the spinner appears automatically for any HTTP call. Register interceptors in AppModule providers in the order they should run (auth token first, so error interceptor sees the authed request).",
            mistake:
                "Attaching the JWT token to requests going to third-party APIs (weather APIs, payment gateways, analytics). Your backend JWT means nothing to external services, and some will reject requests with unexpected Authorization headers. Check the request URL in the interceptor and skip token attachment for non-API-server domains.",
        },
        {
            id: "state-management-angular",
            number: "4.7",
            title: "State Management — BehaviorSubject to NgRx",
            icon: "🔄",
            color: "teal",
            intro:
                "Angular applications manage state at multiple levels: local component state (TypeScript class properties), shared service state (BehaviorSubject in injectable services), and global application state (NgRx). Knowing which tool to reach for at which scale is a seniority signal. BehaviorSubject covers most real-world needs in small-to-mid apps. NgRx is the standard for large applications with complex, shared, frequently-mutated state.",
            code: `// LEVEL 1: LOCAL STATE — just a component property
@Component({ ... })
export class CounterComponent {
  count = 0;                              // Local — only this component cares
  increment(): void { this.count++; }
}

// LEVEL 2: SHARED SERVICE STATE — BehaviorSubject
@Injectable({ providedIn: 'root' })
export class CartService {
  private _items = new BehaviorSubject<CartItem[]>([]);

  // Expose read-only Observable — consumers can't call next() directly
  items$ = this._items.asObservable();
  count$ = this.items$.pipe(map(items => items.reduce((s, i) => s + i.qty, 0)));
  total$ = this.items$.pipe(map(items => items.reduce((s, i) => s + i.price * i.qty, 0)));

  add(product: Product): void {
    const items = this._items.getValue();
    const existing = items.find(i => i._id === product._id);
    this._items.next(
      existing
        ? items.map(i => i._id === product._id ? { ...i, qty: i.qty + 1 } : i)
        : [...items, { ...product, qty: 1 }]
    );
  }

  remove(id: string): void {
    this._items.next(this._items.getValue().filter(i => i._id !== id));
  }

  clear(): void { this._items.next([]); }
}

// LEVEL 3: NgRx — for complex multi-source, cross-component global state

// actions/product.actions.ts
export const loadProducts = createAction('[Products Page] Load', props<{ filters: ProductFilters }>());
export const loadProductsSuccess = createAction('[Products API] Load Success',
  props<{ products: Product[]; total: number }>());
export const loadProductsFailure = createAction('[Products API] Load Failure', props<{ error: string }>());
export const deleteProduct = createAction('[Product Detail] Delete', props<{ id: string }>());
export const deleteProductSuccess = createAction('[Products API] Delete Success', props<{ id: string }>());

// reducers/product.reducer.ts
const initialState: ProductState = {
  entities: {},         // EntityAdapter for normalized state
  ids: [],
  loading: false,
  error: null,
  filters: { category: 'all', search: '', page: 1 },
  total: 0,
};

export const productReducer = createReducer(
  initialState,
  on(loadProducts, state => ({ ...state, loading: true, error: null })),
  on(loadProductsSuccess, (state, { products, total }) =>
    adapter.setAll(products, { ...state, loading: false, total })
  ),
  on(loadProductsFailure, (state, { error }) => ({ ...state, loading: false, error })),
  on(deleteProductSuccess, (state, { id }) => adapter.removeOne(id, state))
);

// selectors/product.selectors.ts
const selectFeature = createFeatureSelector<ProductState>('products');
export const { selectAll, selectTotal } = adapter.getSelectors(selectFeature);
export const selectLoading = createSelector(selectFeature, s => s.loading);
export const selectFilters = createSelector(selectFeature, s => s.filters);

// effects/product.effects.ts
@Injectable()
export class ProductEffects {
  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadProducts),
      switchMap(({ filters }) =>
        this.productService.getAll(filters).pipe(
          map(({ products, total }) => loadProductsSuccess({ products, total })),
          catchError(err => of(loadProductsFailure({ error: err.message })))
        )
      )
    )
  );

  deleteSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteProductSuccess),
      tap(() => this.notif.success('Product deleted'))
    ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private productService: ProductService,
    private notif: NotificationService
  ) {}
}`,
            usage:
                "Use component properties for local-only state. Use BehaviorSubject in services for shared state (cart, auth user, theme, notifications) — it covers 80% of real-world Angular needs without NgRx boilerplate. Introduce NgRx when: multiple unrelated components read and write the same state, you need time-travel debugging, or your team needs a strict pattern to prevent state mutation inconsistencies.",
            mistake:
                "Putting every piece of state into NgRx from the start. Auth user → NgRx is fine. Cart state → BehaviorSubject is simpler. Whether a modal is open → component property. Whether a tab is active → component property. NgRx for local UI state creates dozens of files to manage what a 3-line class property handles. Match the tool to the complexity.",
        },
        {
            id: "angular-performance",
            number: "4.8",
            title: "Performance Optimization in Angular",
            icon: "⚡",
            color: "yellow",
            intro:
                "Angular performance is a recurring senior interview topic and a real-world concern in data-heavy enterprise apps. The five most impactful Angular performance techniques are: OnPush change detection, lazy loading, trackBy in ngFor, virtual scrolling for large lists, and bundle optimization with the Angular CLI. Understanding when and why each technique helps is what separates mid-level from senior developers.",
            code: `// 1. OnPush CHANGE DETECTION — Angular only checks component when @Input changes or Observable emits
@Component({
  selector: 'app-product-card',
  template: \`...\`,
  changeDetection: ChangeDetectionStrategy.OnPush,  // Default checks on every event; OnPush only when needed
})
export class ProductCardComponent {
  @Input() product!: Product;
  // Angular re-renders ONLY when:
  // - product @Input reference changes (product = {...newData}) — not product.price = newPrice
  // - async pipe emits a new value
  // - markForCheck() is explicitly called
}

// 2. trackBy IN *ngFor — prevents full list re-render on data change
@Component({
  template: \`
    <app-product-card
      *ngFor="let product of products; trackBy: trackByProductId"
      [product]="product">
    </app-product-card>
  \`
})
export class ProductListComponent {
  products: Product[] = [];
  // Without trackBy: Angular destroys and recreates ALL DOM nodes on any array change
  // With trackBy: Angular reuses DOM nodes for items whose ID hasn't changed
  trackByProductId(index: number, product: Product): string { return product._id; }
}

// 3. VIRTUAL SCROLLING — render only visible rows in a 10,000-row table
// (requires @angular/cdk)
// <cdk-virtual-scroll-viewport itemSize="72" style="height: 600px">
//   <div *cdkVirtualFor="let item of items; trackBy: trackById" class="row">
//     {{ item.name }} — {{ item.price | currency }}
//   </div>
// </cdk-virtual-scroll-viewport>

// 4. LAZY LOADING — download feature module only on navigation
// Moves product page JS from initial 2MB bundle into separate 200KB chunk
{ path: 'products', loadChildren: () => import('./features/products/products.module').then(m => m.ProductsModule) }

// 5. MEMOIZED SELECTORS (NgRx) — recompute only when input changes
export const selectFilteredProducts = createSelector(
  selectAllProducts,
  selectActiveFilter,
  (products, filter) => products.filter(p => !filter || p.category === filter)
  // Recomputes ONLY when products array or filter string changes — memoized otherwise
);

// 6. PURE PIPES — computed values in template without method calls
// Method calls in templates re-execute on every change detection cycle
// Pure pipes re-execute ONLY when input reference changes

@Pipe({ name: 'inrFormat', pure: true })
export class InrFormatPipe implements PipeTransform {
  transform(value: number): string {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 })
      .format(value);
  }
}
// In template: {{ product.price | inrFormat }}  — NOT {{ formatPrice(product.price) }}

// 7. PRELOADING STRATEGY — lazy-load modules proactively after app is idle
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,  // Load all lazy modules in background after app loads
  })],
})
export class AppRoutingModule {}

// 8. Angular Signals (Angular 17+) — fine-grained reactivity without Zone.js overhead
import { signal, computed, effect } from '@angular/core';

@Component({
  template: \`<p>Count: {{ count() }}</p><p>Double: {{ doubled() }}</p>\`
})
export class SignalsComponent {
  count = signal(0);                          // Writable signal
  doubled = computed(() => this.count() * 2); // Derived signal — recomputes only when count changes

  increment(): void { this.count.update(c => c + 1); }

  constructor() {
    effect(() => {
      console.log(\`Count changed to \${this.count()}\`); // Runs when count signal changes
    });
  }
}`,
            usage:
                "Apply OnPush to every list item and data display component as a default habit. Always use trackBy in *ngFor lists. Lazy-load every feature module. Use virtual scrolling for lists above 100 items. Use pure pipes instead of method calls in templates. These five habits applied consistently to every Angular project will prevent 90% of performance problems before they occur.",
            mistake:
                "Calling methods in Angular templates: <p>{{ formatCurrency(product.price) }}</p>. Angular re-executes every method call in a template on every change detection cycle — which can be hundreds of times per second in an active app. Use pure pipes or pre-compute values in ngOnInit and ngOnChanges instead.",
        },
        {
            id: "angular-project-structure",
            number: "4.9",
            title: "Angular Project Structure — Enterprise Architecture",
            icon: "📁",
            color: "red",
            intro:
                "How you structure an Angular project determines how maintainable it is when the team grows from 1 to 10 to 50 developers. The Angular community has converged on a Core/Shared/Features architecture that scales from a portfolio project to an enterprise application without reorganization. Understanding this pattern is expected knowledge in mid-level Angular interviews.",
            code: `src/
├── app/
│   ├── core/                          # Singleton services, app-wide concerns
│   │   ├── guards/
│   │   │   ├── auth.guard.ts          # AuthGuard (canActivate + canLoad)
│   │   │   └── role.guard.ts          # RoleGuard (canActivate with route.data.roles)
│   │   ├── interceptors/
│   │   │   ├── auth.interceptor.ts    # Attach JWT to requests
│   │   │   ├── error.interceptor.ts   # Global HTTP error handling
│   │   │   └── loading.interceptor.ts # Auto spinner
│   │   ├── services/
│   │   │   ├── auth.service.ts        # currentUser$, login(), logout(), isAuthenticated
│   │   │   ├── notification.service.ts # Success/error toasts
│   │   │   └── storage.service.ts     # Typed localStorage wrapper
│   │   ├── models/                    # TypeScript interfaces and enums
│   │   │   ├── user.model.ts
│   │   │   ├── product.model.ts
│   │   │   └── api-response.model.ts
│   │   └── core.module.ts             # Imports HttpClientModule, registers interceptors
│   │
│   ├── shared/                        # Shared module — reusable across all feature modules
│   │   ├── components/
│   │   │   ├── spinner/               # Global loading spinner
│   │   │   ├── pagination/            # Reusable pagination component
│   │   │   ├── modal/                 # Reusable modal wrapper
│   │   │   ├── empty-state/           # No results found UI
│   │   │   └── breadcrumb/            # Dynamic breadcrumb from route data
│   │   ├── directives/
│   │   │   ├── has-role.directive.ts  # *appHasRole="['admin']" structural directive
│   │   │   ├── auto-focus.directive.ts
│   │   │   └── click-outside.directive.ts
│   │   ├── pipes/
│   │   │   ├── inr-format.pipe.ts     # ₹ currency formatting
│   │   │   ├── time-ago.pipe.ts       # "2 hours ago" relative time
│   │   │   └── truncate.pipe.ts
│   │   └── shared.module.ts           # Declares + exports all shared components/directives/pipes
│   │
│   ├── features/                      # Lazy-loaded feature modules
│   │   ├── auth/
│   │   │   ├── pages/
│   │   │   │   ├── login/
│   │   │   │   └── register/
│   │   │   ├── services/
│   │   │   │   └── auth-api.service.ts
│   │   │   └── auth.module.ts         # Own routes: /login, /register
│   │   │
│   │   ├── products/
│   │   │   ├── pages/
│   │   │   │   ├── product-list/
│   │   │   │   ├── product-detail/
│   │   │   │   └── product-form/
│   │   │   ├── components/
│   │   │   │   ├── product-card/
│   │   │   │   └── product-filters/
│   │   │   ├── services/
│   │   │   │   └── product.service.ts
│   │   │   ├── store/                 # NgRx (if used) — actions, reducers, effects, selectors
│   │   │   └── products.module.ts
│   │   │
│   │   ├── dashboard/
│   │   └── admin/
│   │
│   ├── app-routing.module.ts          # Root routes — mostly loadChildren
│   ├── app.component.ts               # Root component: nav, router-outlet
│   └── app.module.ts                  # Imports CoreModule; no feature modules (they're lazy)
│
├── environments/
│   ├── environment.ts                 # { production: false, apiUrl: 'http://localhost:5000' }
│   └── environment.prod.ts            # { production: true, apiUrl: 'https://api.yourdomain.com' }
│
├── styles/
│   ├── _variables.scss                # Color palette, spacing, typography tokens
│   ├── _mixins.scss                   # Reusable SCSS mixins
│   └── styles.scss                    # Global styles, Angular Material theme
│
├── assets/
│   └── icons/, images/, fonts/
│
├── angular.json                       # CLI config — builders, styles, assets, environments
└── tsconfig.json                      # TypeScript config — strict: true`,
            usage:
                "The Core/Shared/Features pattern is the standard for Angular projects from a 5-page portfolio app to a 200-screen enterprise platform. AppModule imports only CoreModule. Features are lazy-loaded. SharedModule exports reusable UI. CoreModule registers singleton services and interceptors. This structure means zero reorganization as the app grows.",
            mistake:
                "Importing SharedModule into AppModule and then into every feature module. This causes SharedModule's components to be bundled into the initial app chunk rather than each lazy feature chunk that needs them. Import SharedModule inside each lazy feature module instead — each feature bundle gets what it needs without polluting the initial bundle.",
        },
    ],

    // ── SECTION 5: PREREQUISITES ─────────────────────────────────────
    prerequisites: [
        { item: "JavaScript (ES6+)", done: false, note: "Mandatory — Angular is JavaScript under TypeScript", detail: "Arrow functions, destructuring, Promises, async/await, array methods (map, filter, reduce), ES6 modules, classes and prototypal inheritance. Angular's source code and documentation assume deep JS knowledge." },
        { item: "TypeScript Fundamentals", done: false, note: "Angular requires TypeScript — not optional, non-negotiable", detail: "Interfaces, types, generics, decorators (how @Component, @Injectable, @NgModule work), access modifiers (public/private/readonly), enums, type assertions, optional chaining. Spend at least one week on TypeScript before starting Angular." },
        { item: "HTML & CSS (with SCSS basics)", done: true, note: "For building Angular templates and component styles", detail: "Semantic HTML, Flexbox, CSS Grid, responsive design. Angular CLI generates SCSS by default — learn SCSS nesting, variables, and mixins. Angular's component styling system uses SCSS or CSS files with ViewEncapsulation." },
        { item: "RxJS Fundamentals", done: false, note: "Observables, subscribe, map, filter, async pipe — before Angular", detail: "Angular's HttpClient, Router, and Forms all return Observables. Understanding what an Observable is, how subscribe works, and why the async pipe is preferred over manual subscribe — learn these before writing Angular services." },
        { item: "Node.js and npm", done: true, note: "Angular CLI requires Node.js; npm manages all Angular dependencies", detail: "Install Node.js (LTS version), understand npm install, package.json, and node_modules. The Angular CLI (ng command) is an npm global package. You'll use the terminal for every Angular workflow." },
        { item: "Angular CLI", done: false, note: "ng new, ng generate, ng serve, ng build — daily workflow tools", detail: "Install @angular/cli globally. Learn ng generate component, ng generate service, ng generate module, ng serve, ng build --configuration production. The CLI generates correct boilerplate — use it for every new file, not manual creation." },
        { item: "Browser DevTools", done: true, note: "For debugging Angular apps and inspecting network requests", detail: "Chrome DevTools for inspecting DOM, debugging TypeScript source maps, monitoring XHR/fetch calls in the Network tab. Angular DevTools browser extension for component tree inspection and change detection profiling." },
        { item: "Git and Version Control", done: true, note: "Team development on any Angular project requires Git", detail: "Branching, merging, pull requests, .gitignore (include node_modules, dist, .env). Enterprise Angular projects follow Git Flow or trunk-based development — understanding basic Git is expected on day one." },
        { item: "Postman or REST Client", done: true, note: "Test backend APIs before building Angular services", detail: "When integrating an API, always verify the endpoint returns the expected JSON in Postman before writing the Angular service. Saves hours of debugging Angular Observables for problems that are actually backend issues." },
    ],

    // ── SECTION 6: ROADMAP ───────────────────────────────────────────
    roadmap: [
        {
            phase: "Beginner",
            label: "01",
            duration: "Weeks 1–6",
            color: "emerald",
            topics: [
                "TypeScript — interfaces, types, generics, decorators, access modifiers, enums",
                "RxJS basics — Observable, subscribe, of, from, map, filter, catchError, async pipe",
                "Angular CLI — ng new, ng generate, ng serve, ng build, project structure overview",
                "Components — @Component, selector, templateUrl, styleUrls, interpolation, property binding",
                "Angular directives — *ngIf, *ngFor, *ngSwitch, ngClass, ngStyle, [class], [style]",
                "Data binding — one-way [property], event (click), two-way [(ngModel)]",
                "Component communication — @Input(), @Output(), EventEmitter",
                "Component lifecycle hooks — ngOnInit, ngOnChanges, ngOnDestroy",
                "Angular Services and Dependency Injection — @Injectable, providedIn: 'root'",
                "Angular Router basics — Routes, RouterModule, RouterLink, RouterLinkActive, router-outlet",
                "ActivatedRoute — accessing URL params (paramMap), query params (queryParamMap)",
                "HttpClient module — GET/POST/PUT/DELETE, subscribe, async pipe",
                "Environments — environment.ts vs environment.prod.ts, apiUrl configuration",
                "Angular Material basics — MatButtonModule, MatCardModule, MatInputModule, MatToolbarModule",
            ],
            buildProjects: [
                "To-Do app: Angular components + Angular Material + LocalStorage (no backend) — master component communication and *ngFor/*ngIf",
                "GitHub Profile Finder: HttpClient + RxJS to call GitHub API, display repos, handle loading/error states",
                "Product Listing Page: Mock JSON data, Angular Router, component tree (list → card → detail), SCSS styling",
            ],
        },
        {
            phase: "Intermediate",
            label: "02",
            duration: "Weeks 7–14",
            color: "primary",
            topics: [
                "Reactive Forms — FormGroup, FormControl, FormBuilder, Validators, FormArray",
                "Custom synchronous validators — ValidatorFn, AbstractControl, ValidationErrors",
                "Custom async validators — AsyncValidatorFn, Observable<ValidationErrors | null>",
                "Angular Router advanced — lazy loading (loadChildren), route guards (canActivate, canLoad)",
                "Route resolvers — Resolve interface, pre-fetching data before component loads",
                "HTTP Interceptors — HttpInterceptor, intercept(), HttpRequest.clone(), HTTP_INTERCEPTORS",
                "Auth interceptor — JWT token attachment, 401 handling",
                "RxJS intermediate — switchMap, combineLatest, forkJoin, takeUntil, BehaviorSubject, shareReplay",
                "ChangeDetectionStrategy.OnPush — when and why, markForCheck(), detectChanges()",
                "Angular pipes — built-in pipes (date, currency, async, json), creating custom pure pipes",
                "Content projection — ng-content, multi-slot projection for reusable layout components",
                "ViewChild and ContentChild — accessing child component instances and DOM elements",
                "Angular Animations — @angular/animations, trigger, state, transition, animate",
                "SCSS architecture — component encapsulation, ::ng-deep for child overrides, global styles",
            ],
            buildProjects: [
                "Authentication system: Register with Reactive Forms + async email validator, login, JWT, AuthGuard, role-based nav",
                "Blog platform: CRUD posts, Reactive Form editor, lazy-loaded auth + blog modules, HTTP interceptors, pagination",
                "E-commerce catalog: Angular Material, RxJS-powered search (debounce + switchMap), filters (combineLatest), BehaviorSubject cart",
                "Admin dashboard: Route guards, RoleGuard, data tables with sorting/filtering/pagination, forkJoin for stats widgets",
            ],
        },
        {
            phase: "Advanced",
            label: "03",
            duration: "Weeks 15–26+",
            color: "purple",
            topics: [
                "NgRx — actions, reducers, selectors, effects, createEntityAdapter, DevTools, testing NgRx",
                "Angular Signals — signal(), computed(), effect(), toSignal(), toObservable(), Signal inputs",
                "Angular Universal (SSR) — @angular/ssr, server-side rendering for SEO, hydration",
                "Angular CDK — virtual scrolling, drag-and-drop, overlay, focus trap, breakpoint observer",
                "Custom Structural Directives — *appHasRole, *appFeatureFlag using TemplateRef + ViewContainerRef",
                "Dynamic Components — ComponentRef, ViewContainerRef.createComponent() for runtime-rendered UI",
                "Micro-frontends with Module Federation — Webpack Module Federation for multi-team Angular apps",
                "Angular PWA — @angular/pwa, service workers, offline support, Web App Manifest",
                "Internationalization (i18n) — @angular/localize, xliff translation files, multi-language builds",
                "Testing Angular — TestBed, ComponentFixture, HttpClientTestingModule, SpyOn, Jasmine/Jest matchers",
                "E2E Testing with Cypress or Playwright — full user flow testing for Angular apps",
                "Angular DevTools profiling — flame graphs, change detection cycles, component re-render counts",
                "Docker — containerize an Angular + Node.js application",
                "CI/CD with GitHub Actions — ng build, ng test, auto-deploy to Firebase/Vercel on push",
                "NestJS — Angular-style Node.js framework; transition full-stack TypeScript developer path",
            ],
            buildProjects: [
                "E-commerce platform: NgRx cart + orders, Angular CDK virtual scroll, Razorpay integration, Angular Universal for product SEO, admin panel",
                "Real-time collaboration tool: Socket.io + NgRx effects for live state, Angular CDK drag-and-drop for kanban, Signals for UI state",
                "Enterprise SaaS: Multi-tenancy, Stripe subscriptions, NgRx entity store, Angular i18n, Module Federation for separate team features",
            ],
        },
    ],

    // ── SECTION 7: USE CASES ─────────────────────────────────────────
    useCases: [
        { num: "01", title: "Internet Banking and Fintech Portals", body: "Angular is the dominant frontend framework for internet banking in India. HDFC NetBanking, Axis Mobile Web, and numerous neo-banking platforms use Angular for their customer dashboards. Angular's TypeScript strictness prevents type-related runtime errors in financial calculations. Reactive Forms handle complex loan application and KYC flows. Route guards enforce role-based access between customer and relationship manager views." },
        { num: "02", title: "Insurance and Healthcare Platforms", body: "Policy management portals, claims submission systems, patient record dashboards, and appointment booking platforms are Angular's sweet spot. Multi-step Reactive Forms with dynamic field validation handle complex eligibility workflows. Angular's module system lets separate teams own the claims module, underwriting module, and admin module in the same codebase without interference." },
        { num: "03", title: "Enterprise HR and ERP Systems", body: "Employee portals, payroll dashboards, leave management systems, performance review tools — all built with Angular for its data-table performance, complex form handling, and role-based access control. The Angular CDK's virtual scrolling makes 50,000-row employee directories performant. OnPush change detection keeps dashboards responsive even with hundreds of data-bound components." },
        { num: "04", title: "Government Digital Services", body: "UMANG, DigiLocker, various Ministry of Electronics initiatives, and state-level e-governance portals are Angular applications. Angular's i18n support handles India's 22 official languages. The accessibility features in Angular Material comply with government digital accessibility mandates. Angular's stable versioning and Google backing provide the procurement-approval predictability that government projects require." },
        { num: "05", title: "IT Service Company Client Deliveries", body: "TCS, Infosys, Wipro, HCL, Capgemini, and Cognizant standardize on Angular for enterprise client delivery projects. An Angular developer at these companies works on banking portals, logistics dashboards, retail inventory systems, and telecom management tools. Angular's enforced structure means any developer from any project can be rotated into any other Angular project within days." },
        { num: "06", title: "E-Commerce and Retail Platforms", body: "Product catalogs with thousands of SKUs, multi-step checkout flows, vendor management dashboards, and inventory management tools are all Angular use cases. The Angular CDK virtual scroll handles large product lists without performance degradation. NgRx manages cart state, recently viewed products, and wishlist across navigation. Angular Universal generates SEO-friendly product pages." },
        { num: "07", title: "SaaS Dashboards and Analytics Tools", body: "Business intelligence platforms, CRM dashboards, marketing analytics tools, and operational command centers — data-dense UIs with real-time charts, filterable tables, and multi-panel layouts. Angular's OnPush change detection and Signals (Angular 17+) make dashboards that update every second without browser jank. The Angular CDK overlay and dialog systems handle complex modal-heavy analyst UIs." },
    ],

    // ── SECTION 8: PROJECTS ──────────────────────────────────────────
    projects: {
        beginner: [
            { name: "GitHub Profile Finder", desc: "Search GitHub username, display profile stats and repositories using GitHub's public API. Handle loading, error, and empty states.", teaches: "HttpClient, async pipe, *ngIf, *ngFor, ActivatedRoute query params, RxJS switchMap for search, error handling with catchError" },
            { name: "Task Manager (Angular Material)", desc: "Create, complete, and delete tasks with categories and priority. Angular Material UI. All data in localStorage via a typed service.", teaches: "Component communication (@Input, @Output), Angular Material (MatChip, MatList), TypeScript service with localStorage, custom pipes" },
            { name: "Weather Dashboard", desc: "Current weather and 5-day forecast by city search. OpenWeatherMap API. Debounced search with RxJS. Celsius/Fahrenheit toggle.", teaches: "HttpClient, RxJS debounceTime, switchMap, Angular pipes, ngClass for weather icons, environment variables for API keys" },
            { name: "Blog Reader with Angular Router", desc: "List and read blog posts from a mock JSON API. Angular Router with paramMap for detail view. Search by title with reactive form control.", teaches: "Angular Router, ActivatedRoute paramMap Observable, Reactive Forms FormControl, *ngFor, *ngIf, RouterLink" },
        ],
        intermediate: [
            { name: "Full Authentication System", desc: "Register with Reactive Forms + async email validator, login, JWT storage, HTTP interceptors, AuthGuard, RoleGuard, profile update with avatar upload.", teaches: "Reactive Forms, custom validators, async validators, HTTP Interceptors, AuthGuard (canActivate + canLoad), BehaviorSubject auth state, protected routes" },
            { name: "E-Commerce Product Catalog", desc: "Angular Material product cards, RxJS-powered search (debounce + switchMap), category and price range filters (combineLatest), BehaviorSubject cart with count badge, cart drawer.", teaches: "combineLatest for multiple filters, switchMap, BehaviorSubject cart service, Angular Material, OnPush change detection, custom pipes" },
            { name: "Blog Platform with CMS", desc: "Auth users create and publish posts with a rich text editor. Others comment and like. Pagination. Author profile pages. Lazy-loaded modules.", teaches: "Lazy loading, route guards, Mongoose populate() patterns in the API, FormArray for tag inputs, pagination component, NgModule architecture" },
            { name: "Job Board with Applicant Tracking", desc: "Companies post jobs, candidates apply with resume PDF upload. Admin reviews and advances applications through stages. Three-role system.", teaches: "RBAC with RoleGuard, file upload in Angular (FormData), complex data relationships, multi-step Reactive Forms, custom structural directive" },
        ],
        advanced: [
            { name: "E-Commerce with NgRx + Payments", desc: "NgRx entity store for products and cart, Angular CDK virtual scroll for large catalogs, Razorpay/Stripe checkout, order tracking, email receipts, Angular Universal for product page SEO, admin analytics dashboard.", teaches: "NgRx createEntityAdapter, Angular CDK, Angular Universal SSR, payment webhooks, OnPush everywhere, Signals for UI state" },
            { name: "Real-Time Project Management Tool", desc: "Kanban boards with Angular CDK drag-and-drop, Socket.io live updates via NgRx effects, team member presence, real-time comment feeds, Signals for typing indicators.", teaches: "Angular CDK drag-and-drop, Socket.io integration in Angular service, NgRx effects for real-time state, Signals, complex Observable composition" },
            { name: "Multi-Language Enterprise SaaS", desc: "Multi-tenant organizations, Stripe subscription billing, Angular i18n (3 languages), NgRx throughout, Angular Universal, module federation for separate team features, end-to-end Cypress tests.", teaches: "Angular i18n, Module Federation, multi-tenancy architecture, Stripe Angular integration, Cypress, CI/CD with GitHub Actions" },
        ],
    },

    // ── SECTION 9: MISTAKES ──────────────────────────────────────────
    mistakes: [
        {
            title: "Starting Angular Without Knowing TypeScript",
            explanation: "Angular's entire API surface — @Component, @Injectable, @Input, interfaces, generics — is TypeScript. Developers who skip TypeScript and jump directly into Angular spend more time fighting compiler errors than learning Angular. Every file they generate is incomprehensible without TypeScript context.",
            tip: "Invest one dedicated week in TypeScript before Angular. Build one strictly-typed project (a to-do CLI or a typed API wrapper). Learn interfaces, generics, decorators, and access modifiers. Then start Angular — the compiler will be a guide, not an obstacle.",
        },
        {
            title: "Memory Leaks from Unsubscribed Observables",
            explanation: "Every .subscribe() call in a component that isn't cleaned up keeps the Observable alive even after the component is destroyed. In a long Angular session, this causes ghost state updates, duplicate API calls, and browser memory growth. This is the most common Angular bug in production.",
            tip: "Use the async pipe in templates — it auto-unsubscribes on component destruction. For manual subscriptions, use the takeUntil(this.destroy$) pattern in every component. In Angular 16+, use takeUntilDestroyed() from @angular/core/rxjs-interop for cleaner syntax.",
            wrong: "ngOnInit() { this.service.getData().subscribe(d => this.data = d); } // Leaks — never cleaned up",
            correct: "ngOnInit() { this.service.getData().pipe(takeUntil(this.destroy$)).subscribe(d => this.data = d); }",
        },
        {
            title: "Making HTTP Calls Inside Components Instead of Services",
            explanation: "A component that injects HttpClient directly and makes API calls is untestable (you'd need to mock HttpClient, not a service), non-reusable (two components that need the same data make duplicate calls), and violates Angular's core architecture principles.",
            tip: "Inject HttpClient only in services, never in components. Components inject services. Services inject HttpClient. This rule is non-negotiable in any Angular codebase that will be reviewed by a senior developer.",
        },
        {
            title: "Not Using OnPush Change Detection",
            explanation: "Angular's default change detection runs on every async event (click, setTimeout, HTTP response, scroll) and checks every component in the tree. In a product list with 50 cards, every click elsewhere re-checks all 50 cards. Default change detection is a performance liability in data-heavy Angular apps.",
            tip: "Apply ChangeDetectionStrategy.OnPush to every component as a default. Ensure @Input values are immutable (replace the object reference, don't mutate). Use the async pipe for Observables — it triggers OnPush detection automatically.",
        },
        {
            title: "Calling Methods in Angular Templates",
            explanation: "{{ formatCurrency(product.price) }} or *ngIf=\"isEligible(product)\" — Angular re-calls these methods on every change detection cycle. If change detection runs 30 times per second and you have 50 products, that's 1,500 formatCurrency() calls per second for a simple number format.",
            tip: "Use pure pipes instead of methods for value transformations. Pre-compute derived values in ngOnChanges or ngOnInit and store them as component properties. Never call functions in template expressions except for simple event handlers.",
            wrong: "<!-- Template --> <p>{{ formatPrice(product.price) }}</p>  // Called on every CD cycle",
            correct: "<!-- Use a pure pipe --> <p>{{ product.price | inrFormat }}</p>  // Called only when price changes",
        },
        {
            title: "Not Lazy-Loading Feature Modules",
            explanation: "Importing all feature modules into AppModule means the entire application's JavaScript is downloaded on the very first page load — even for features the user may never visit. A 10-feature Angular app without lazy loading can have a 3–4MB initial bundle.",
            tip: "Every feature module must use loadChildren in the router config. Angular CLI creates lazy-loadable modules by default when you run ng generate module feature --route feature --module app.module. Measure bundle sizes with ng build --stats-json and webpack-bundle-analyzer.",
        },
        {
            title: "Using Template-Driven Forms for Complex Enterprise Forms",
            explanation: "Template-Driven forms hide form logic in the HTML, making it untestable (you need the DOM to test them), hard to make dynamic, and impossible to type-check strictly. They appear simpler initially but become unmanageable for multi-step or dynamically-structured forms.",
            tip: "Use Reactive Forms for all forms beyond a single-field search input. FormGroup, FormControl, FormArray — learn these properly. Reactive Forms are 100% TypeScript, fully testable, synchronously accessable, and scale to any complexity.",
        },
        {
            title: "Skipping markAllAsTouched() on Form Submit",
            explanation: "Angular only shows field validation errors after the user has touched (interacted with) a field. If a user clicks Submit without touching any field, all required field errors are invisible — the form appears broken.",
            tip: "At the start of every onSubmit() method: if (this.form.invalid) { this.form.markAllAsTouched(); return; }. This surfaces all validation errors immediately so the user knows exactly what to fix.",
            wrong: "onSubmit() { if (this.form.invalid) return; ... } // User sees nothing when they click Submit on untouched form",
            correct: "onSubmit() { if (this.form.invalid) { this.form.markAllAsTouched(); return; } ... } // All errors shown",
        },
        {
            title: "Using canActivate Without canLoad on Lazy-Loaded Admin Routes",
            explanation: "canActivate prevents a user from navigating to a route, but the lazy-loaded module's JavaScript bundle is downloaded regardless — even for unauthorized users. An attacker can inspect network traffic and read your admin module's source code.",
            tip: "Always pair canLoad with canActivate on lazy-loaded feature modules that contain sensitive routes. canLoad prevents the bundle download entirely — Angular won't even request the chunk from the server for unauthorized users.",
        },
        {
            title: "Forgetting environment.prod.ts Before ng build",
            explanation: "Building with ng build --configuration production while apiUrl still points to localhost:5000 in environment.prod.ts produces a deployed app that calls a non-existent server. The error only surfaces in production — after deployment.",
            tip: "Before every production build, open environment.prod.ts and confirm apiUrl is set to your live backend URL. The Angular CLI automatically swaps environment.ts for environment.prod.ts in production builds — make sure the prod file is correct.",
            wrong: "environment.prod.ts: apiUrl: 'http://localhost:5000'  // Deployed Angular calls localhost — broken",
            correct: "environment.prod.ts: apiUrl: 'https://api.yourdomain.com'  // Live backend URL",
        },
        {
            title: "Putting Shared Components in AppModule Instead of SharedModule",
            explanation: "Declaring reusable components (SpinnerComponent, PaginationComponent, ModalComponent) in AppModule means they're included in the initial bundle. Lazy-loaded feature modules can't access them either, because AppModule declarations aren't exported. This breaks the entire component sharing model.",
            tip: "Create SharedModule that declares and exports all reusable components, directives, and pipes. Import SharedModule inside each lazy-loaded feature module. AppModule should only import CoreModule and AppRoutingModule.",
        },
        {
            title: "Not Using trackBy in *ngFor with Dynamic Lists",
            explanation: "Without trackBy, Angular destroys and recreates every DOM node in the list whenever the data array changes — even if only one item was added or removed. A 100-item product list without trackBy re-renders 100 items on every filter change.",
            tip: "Always provide a trackBy function to *ngFor: *ngFor=\"let item of items; trackBy: trackByItemId\". The trackBy function returns a unique identifier (item._id or item.id). Angular reuses DOM nodes for unchanged items and only creates/destroys nodes for genuinely added/removed items.",
            wrong: "<app-card *ngFor=\"let p of products\">  // Full DOM rebuild on every data change",
            correct: "<app-card *ngFor=\"let p of products; trackBy: trackById\">  // DOM reuse for unchanged items",
        },
    ],

    // ── SECTION 10: INTERVIEW QUESTIONS ─────────────────────────────
    interviewQuestions: {
        beginner: [
            { q: "What is Angular and how does it differ from React?", a: "Angular is a full application framework maintained by Google — it ships with routing, HTTP client, forms module, DI container, animations, and testing utilities. React is a UI rendering library — it only handles the view layer; developers choose their own solutions for everything else. Angular enforces structure through TypeScript and NgModules; React gives flexibility with less convention." },
            { q: "What is TypeScript and why does Angular require it?", a: "TypeScript is a statically-typed superset of JavaScript that compiles to plain JS. Angular uses TypeScript's decorators (@Component, @Injectable, @NgModule) — a TypeScript feature. TypeScript's compile-time type checking catches integration bugs before runtime, which is critical in Angular's large-scale target applications." },
            { q: "What is a Component in Angular?", a: "A TypeScript class decorated with @Component that has a selector (the custom HTML tag), a template (HTML), optional styles (CSS/SCSS), and logic. Components are the UI building blocks — every Angular application is a tree of components starting from AppComponent at the root." },
            { q: "What is Dependency Injection in Angular?", a: "A design pattern where Angular's DI container provides instances of services to components and other services that declare them in their constructor. Services decorated with @Injectable({ providedIn: 'root' }) are singletons — Angular creates one instance and injects the same one everywhere it's needed." },
            { q: "What is an Observable and how is it used in Angular?", a: "An RxJS Observable is a lazy stream that emits values over time. Angular's HttpClient returns Observables for HTTP calls. Components subscribe to receive data. Unlike Promises, Observables can emit multiple values, be cancelled, and transformed with operators like map, filter, and switchMap before subscribing." },
            { q: "What is the difference between *ngIf and *ngFor?", a: "*ngIf is a structural directive that conditionally adds or removes an element from the DOM based on a boolean expression. *ngFor is a structural directive that renders a template for each item in a collection. Both are structural directives — they change the DOM structure, not just appearance." },
            { q: "What is Angular's data binding? Explain all four types.", a: "Interpolation {{ value }} — renders component property in template. Property binding [property]='value' — sets DOM property from component. Event binding (event)='handler()' — listens to DOM events. Two-way binding [(ngModel)]='value' — synchronizes component property with input in both directions (requires FormsModule)." },
            { q: "What is the async pipe and why is it preferred?", a: "The async pipe subscribes to an Observable or Promise in the template and automatically unsubscribes when the component is destroyed — preventing memory leaks. It also triggers OnPush change detection when new values emit. Using it eliminates the need to manually subscribe, store subscriptions, and unsubscribe in ngOnDestroy." },
            { q: "What is the Angular CLI and what are its most useful commands?", a: "Angular CLI is a command-line tool for Angular development. Key commands: ng new (create project), ng generate component/service/module/guard/pipe (create files with boilerplate), ng serve (development server with hot reload), ng build --configuration production (optimized production build), ng test (run unit tests)." },
            { q: "What is the difference between Template-Driven and Reactive Forms?", a: "Template-Driven forms define form logic in HTML using NgModel — simpler for small forms, hard to test and type-check. Reactive Forms define the form model in TypeScript using FormGroup and FormControl — testable, type-safe, better for complex/dynamic forms. Always use Reactive Forms in production Angular applications." },
        ],
        intermediate: [
            { q: "Explain Angular's change detection and how OnPush improves performance.", a: "Angular's default change detection (Zone.js-based) checks every component in the tree on every async event. OnPush tells Angular to check a component ONLY when its @Input references change or an Observable it subscribes to emits a new value. Applied to list components, OnPush can reduce change detection calls from thousands to dozens per second." },
            { q: "What is an HTTP Interceptor? Write an auth interceptor.", a: "An HTTP Interceptor implements HttpInterceptor and intercepts all outgoing requests and incoming responses. Registered in AppModule providers with { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }. Auth interceptor: clones the request, adds Authorization: Bearer token header, returns next.handle(authReq). Error interceptor: catchError on the response stream, handles 401 (logout), 403 (redirect), 500 (notify)." },
            { q: "What is the difference between canActivate and canLoad route guards?", a: "canActivate fires when a user navigates to a route — it can block navigation but the lazy-loaded module JavaScript is already downloaded. canLoad fires before a lazy-loaded module's bundle is downloaded — it prevents unauthorized users from even downloading the module code. Both should be applied to sensitive lazy-loaded routes." },
            { q: "What is the difference between switchMap, mergeMap, concatMap, and exhaustMap?", a: "switchMap: cancels the previous inner Observable when a new emission arrives — ideal for search. mergeMap: runs all inner Observables concurrently — parallel independent operations. concatMap: queues inner Observables sequentially — ordered operations like serial uploads. exhaustMap: ignores new emissions while an inner Observable is active — prevents duplicate form submissions." },
            { q: "How does lazy loading work in Angular? Why is it important?", a: "Lazy loading uses loadChildren in the router to split the app into chunks. The initial bundle contains only AppModule code. Feature module chunks are downloaded only when the user navigates to that route for the first time. This can reduce initial bundle size by 60–80% for large apps, dramatically improving first-page load time." },
            { q: "What is ViewEncapsulation in Angular?", a: "ViewEncapsulation controls how Angular scopes component CSS. Emulated (default): Angular adds unique attributes to elements and rewrites selectors to scope styles to the component — styles don't leak out or in. None: global CSS — styles affect all components. ShadowDom: uses native browser Shadow DOM for true style isolation." },
            { q: "What is the difference between BehaviorSubject and Subject?", a: "Subject: emits to current subscribers only — new subscribers miss previous emissions. BehaviorSubject: requires an initial value; emits the current value immediately to new subscribers. In Angular, BehaviorSubject is used for shared state (auth user, cart) because new components that subscribe immediately receive the current state, not an empty Observable." },
            { q: "How do you share data between unrelated components in Angular?", a: "Through a shared service with a BehaviorSubject (or Subject for events). The service is a singleton (providedIn: 'root'). Any component can inject the service and subscribe to its Observable or call its methods. This is Angular's pub/sub pattern — the foundation of all cross-component communication that doesn't use @Input/@Output." },
            { q: "What is trackBy in *ngFor and when should you use it?", a: "trackBy provides *ngFor with a function that returns a unique identifier for each item. Without it, Angular destroys and recreates all DOM nodes when the array changes. With trackBy, Angular reuses DOM nodes for items whose identifier hasn't changed and only creates/destroys nodes for genuinely added/removed items. Use it for all dynamic lists, especially with OnPush components." },
            { q: "How do you test an Angular component?", a: "Using TestBed.configureTestingModule to create a testing module with the component and its dependencies (real or mocked). ComponentFixture wraps the component instance and provides detectChanges() to trigger change detection. Inject services with TestBed.inject(), use jasmine.createSpyObj to mock them. HttpClientTestingModule mocks HTTP calls. Assert against the compiled DOM via fixture.nativeElement." },
        ],
        advanced: [
            { q: "What is NgRx and when should you use it over BehaviorSubject services?", a: "NgRx implements Redux for Angular: single immutable state tree, actions (events), reducers (pure state transitions), selectors (memoized queries), effects (async operations). Use NgRx when: multiple unrelated components need to read and write the same state, mutation sources are complex, you need time-travel debugging with DevTools, or your team needs a strict contract to prevent state bugs. For simpler shared state, BehaviorSubject in services is less boilerplate and equally effective." },
            { q: "What are Angular Signals and how do they differ from RxJS Observables?", a: "Signals (stable in Angular 17+) are synchronous reactive primitives — signal() holds a value, computed() derives a value, effect() reacts to changes. Unlike Observables, Signals are always synchronous, always have a current value, and don't require subscription management. Signals are ideal for component UI state and computed values. RxJS Observables remain superior for async streams, HTTP calls, time-based operators, and complex event composition. Use both." },
            { q: "How do you implement Angular Universal (SSR) and why?", a: "Angular Universal adds server-side rendering using @angular/ssr package. The Express server runs Angular to generate HTML on the server, sends it to the browser, then Angular hydrates the static HTML into a fully interactive app. Reasons: SEO (search bots see real content), faster First Contentful Paint (no blank HTML flash). Key challenge: server-only code (no browser APIs like localStorage — use PLATFORM_ID and isPlatformBrowser to guard them)." },
            { q: "How do custom structural directives work?", a: "Structural directives use TemplateRef (the template to stamp) and ViewContainerRef (where to stamp it). *appHasRole directive injects AuthService and the TemplateRef — in ngOnInit, it checks the user's role and either calls viewContainerRef.createEmbeddedView(templateRef) to show it or viewContainerRef.clear() to hide it. The * syntax is sugar for <ng-template [appHasRole]>. Re-evaluating on role changes requires subscribing to auth state." },
            { q: "How would you architect an Angular app for a 30-person engineering team?", a: "Monorepo with Nx. Core/Shared/Features architecture — each team owns a lazy-loaded feature module with its own NgRx slice, routing, services, and components. Shared module for common UI. CoreModule for singletons. Strict eslint with module boundary rules (a feature module cannot import another feature module directly). Shared TypeScript interfaces for API contracts. Storybook for component documentation. CI that runs only affected tests on PRs." },
            { q: "What is Module Federation in Angular and what problem does it solve?", a: "Module Federation (Webpack 5 feature, integrated into Angular with @angular-architects/module-federation) allows multiple independently-deployed Angular applications to share components and services at runtime — each micro-frontend is owned by a different team, deployed on its own schedule, but composed into a single shell application. Solves the problem of 10 teams trying to merge code into one Angular repo before every release." },
            { q: "How do you optimize the initial bundle size of an Angular application?", a: "Lazy-load all feature modules. Use differential loading (Angular CLI default — ES2015 bundle for modern browsers, ES5 for legacy). Tree-shake unused Angular Material components (import only used modules). Audit with ng build --stats-json + webpack-bundle-analyzer. Preload strategy for likely-visited routes. Code-split large libraries (Moment.js → date-fns). Use standalone components (Angular 14+) to eliminate NgModule overhead." },
            { q: "How do you implement role-based access control in Angular end-to-end?", a: "Backend: user has role field, JWT encodes role, route middleware checks it. Angular: JWT decoded on login, role stored in AuthService. RoleGuard reads route.data.roles, compares to auth user's role. Custom *appHasRole structural directive shows/hides UI elements. Never trust frontend RBAC alone — backend must enforce independently. The UI RBAC is UX; the backend RBAC is security." },
            { q: "What is the difference between a pure and impure pipe?", a: "Pure pipe (default): Angular only re-executes the transform() when the input value reference changes. Fast, memoized. Impure pipe: Angular re-executes on every change detection cycle regardless of input change. Required for pipes that depend on mutable data or external state (like a FilterPipe filtering an array that mutates in place). Impure pipes are a performance risk — prefer pure pipes and immutable data patterns." },
            { q: "How do you handle large data tables (100,000 rows) in Angular?", a: "Angular CDK's CdkVirtualScrollViewport with *cdkVirtualFor renders only the rows visible in the viewport — 20 DOM nodes for 100,000 data rows. Pair with server-side pagination for truly large datasets. OnPush on the row component to prevent full-table re-renders on filter changes. Backend indexed queries for sorting and filtering instead of client-side operations on the full dataset." },
            { q: "How do you write an end-to-end test for an Angular application with Cypress?", a: "Install Cypress, configure with ng add @cypress/schematic. Write spec files in cypress/e2e/. cy.visit() navigates to the app URL. cy.get('[data-cy=login-email]').type() interacts with elements (use data-cy attributes, not CSS classes). cy.intercept() mocks API calls with fixture data. cy.get('[data-cy=dashboard]').should('be.visible') asserts outcomes. Run with ng e2e in CI after ng build." },
        ],
    },

    // ── SECTION 11: COMPARISON ───────────────────────────────────────
    comparison: {
        headers: ["Feature", "Angular", "React", "Vue.js"],
        rows: [
            { feature: "Type", react: "Full framework", vue: "UI library", angular: "Progressive framework" },
            { feature: "Language", react: "TypeScript (mandatory)", vue: "JavaScript + optional TypeScript", angular: "JavaScript + optional TypeScript" },
            { feature: "Architecture", react: "Opinionated — enforced conventions", vue: "Flexible — developer-defined", angular: "Flexible with conventions" },
            { feature: "Learning Curve", react: "Steepest — RxJS + DI + TypeScript + CLI + NgModules", vue: "Moderate — JSX + hooks", angular: "Gentlest — gradual HTML-first approach" },
            { feature: "State Management", react: "NgRx (built for Angular) or BehaviorSubject", vue: "Redux, Zustand, Context, Jotai", angular: "Pinia (official), Vuex" },
            { feature: "HTTP Client", react: "Built-in (HttpClient + RxJS Observables)", vue: "External (Axios, fetch, React Query)", angular: "External (Axios, fetch, Vue Query)" },
            { feature: "Forms", react: "Built-in (Reactive Forms + Template-Driven)", vue: "External (React Hook Form, Formik)", angular: "Built-in (VeeValidate or native)" },
            { feature: "Routing", react: "Built-in Angular Router", vue: "React Router (external)", angular: "Vue Router (official)" },
            { feature: "Performance", react: "High — OnPush + Signals + lazy loading", vue: "High — Virtual DOM + Concurrent Mode", angular: "High — reactivity system + Composition API" },
            { feature: "Bundle Size", react: "Larger (~130KB framework overhead, tree-shakeable)", vue: "Medium (React + dependencies)", angular: "Smallest framework overhead (~23KB min+gzip)" },
            { feature: "Enterprise Adoption India", react: "Highest — IT majors, banking, government", vue: "High — startups, product companies", angular: "Growing — startups, product companies" },
            { feature: "Best For", react: "Enterprise teams, large codebases, regulated industries", vue: "Startups, SPAs, rapid prototyping, solo devs", angular: "SPAs, startups, developer-experience focused teams" },
        ],
    },

    // ── SECTION 12: PROS & CONS ──────────────────────────────────────
    pros: [
        "Complete framework — routing, HTTP, forms, DI, animations, testing all built-in — no library selection debates, ship features immediately",
        "TypeScript mandatory — compile-time type safety catches bugs before production, critical in financial and regulated applications",
        "Enforced architecture — Angular's conventions make large codebases maintainable and new developer onboarding predictable",
        "Google-backed with LTS — clear versioning roadmap, 18-month long-term support releases, enterprise procurement-friendly",
        "Angular CLI — ng generate creates correct boilerplate instantly, ng build produces highly optimized production bundles",
        "RxJS reactive programming — Observable streams make complex async scenarios (search, real-time, parallel loads) clean and declarative",
        "Angular Material — a comprehensive, accessible, Google-designed component library that covers 90% of enterprise UI needs",
        "OnPush + Signals — fine-grained change detection makes data-heavy dashboards and large list UIs performant without extra effort",
        "Enterprise India market — Angular is the dominant framework for IT services, banking, insurance, and government tech in India",
    ],
    cons: [
        "Steep learning curve — TypeScript + RxJS + DI + NgModules + lifecycle hooks + CLI + decorators all at once overwhelms beginners",
        "Verbose boilerplate — a simple data-fetching feature requires a component, service, module, and interface — more files than React or Vue",
        "RxJS complexity — memory leaks from unsubscribed Observables, switchMap vs mergeMap confusion, and Observable composition bugs are common",
        "Bundle size overhead — Angular's framework code adds ~130KB (tree-shakeable) before application code; disciplined lazy loading is essential",
        "Over-engineering risk — NgRx, interceptors, guards, resolvers, and CDK used everywhere creates excessive complexity for simple applications",
        "Slower initial velocity — Angular's structure is an advantage at scale but slows down prototyping and experimentation compared to React",
        "NgModule complexity (legacy) — while Standalone Components (Angular 14+) are the future, most existing large codebases still use NgModules, and understanding both is required",
        "Version migrations — Angular's 6-month major release cycle occasionally requires migration effort; apps that skip versions face larger migrations",
    ],

    // ── SECTION 13: FUTURE SCOPE ─────────────────────────────────────
    futureScope: [
        "Angular Signals are redefining how Angular handles reactivity. Stable since Angular 17, Signals provide a synchronous, fine-grained reactive primitive — signal(), computed(), effect() — that works without Zone.js. Angular 18 and 19 introduced zoneless change detection, where an Angular app can run entirely on Signals without Zone.js overhead. Angular developers who add Signals to their RxJS knowledge are writing the Angular of 2026–2030. The two systems interoperate cleanly: toSignal() converts Observables to Signals; toObservable() does the reverse.",
        "Standalone Components are now the Angular default. Angular 17 deprecated NgModules as the primary building block in favor of standalone: true components that declare their own imports. New projects created with ng new in 2026 use standalone architecture by default. This reduces boilerplate significantly — no more AppModule declarations array, no more feature modules for simple features. Angular developers who understand both standalone and NgModule patterns are the most valuable — the majority of existing enterprise codebases still use NgModules and will for years.",
        "NestJS is becoming the natural backend complement for Angular teams. Built by Google engineer Kamil Mysliwiec, NestJS uses Angular's exact patterns — decorators, DI containers, modules, services — on Node.js. A full-stack TypeScript developer who knows Angular + NestJS + MongoDB has the rarest and most hireable profile in Indian enterprise development in 2026. The mental model transfer from Angular to NestJS is near-zero — the same @Injectable, @Module, and @Controller decorators work the same way.",
        "Angular's performance trajectory is accelerating. The Ivy compiler (default since Angular 9) already produces smaller bundles than any previous Angular compiler. Angular 17+ with Signals and optional Zone.js removal represents a step-change in runtime performance. Angular applications in 2026 are measurably faster than React applications of comparable complexity in real-world lighthouse benchmarks — a narrative shift from Angular's historically negative performance reputation that is changing enterprise decision-making.",
        "The Indian enterprise market for Angular developers is counter-cyclical to startup hiring. When startup funding dries up, enterprise hiring continues — banks still need digital portals, insurance companies still need claims platforms, and IT majors still deliver government contracts. Angular developers are specifically immune to startup hiring volatility. Additionally, as India's financial sector deepens digitization under RBI and SEBI mandates, the demand for Angular-proficient developers at regulated institutions will grow regardless of the broader tech hiring climate.",
    ],

    // ── SECTION 14: ACTION PLAN ──────────────────────────────────────
    actionPlan: [
        { week: "Week 1–2", title: "TypeScript and RxJS Foundation — Non-Negotiable Prerequisites", desc: "Before touching Angular, spend one week on TypeScript: interfaces, types, generics, decorators, access modifiers, enums, optional chaining. Build one strictly-typed project with tsc --strict. Then spend 3 days on RxJS fundamentals: what an Observable is, how subscribe works, the async pipe, map, filter, and catchError. These two investments make every subsequent Angular concept immediately comprehensible." },
        { week: "Week 3–5", title: "Learn Angular Fundamentals with the CLI", desc: "Install the Angular CLI (npm install -g @angular/cli). Build three small Angular apps: a GitHub profile finder (HttpClient + async pipe), a task manager (component communication, Angular Material), and a multi-page blog reader (Angular Router + ActivatedRoute). Don't connect to a real backend yet. Master components, services, directives, pipes, routing, and basic RxJS before adding complexity." },
        { week: "Week 6–8", title: "Reactive Forms and HTTP Interceptors", desc: "Build a Reactive Forms-based registration and login flow with custom validators and async validators. Implement an AuthInterceptor (JWT token attachment) and ErrorInterceptor (global 401/500 handling). These two skills appear in almost every Angular interview take-home task. Once you've built them once from scratch, rebuilding them for any project takes 30 minutes." },
        { week: "Week 9–12", title: "Build Your First Full Portfolio Project", desc: "Build the E-Commerce Product Catalog or Blog Platform from the intermediate projects list. Full CRUD, Reactive Forms, Angular Material, lazy-loaded modules, AuthGuard, RxJS-powered search, BehaviorSubject cart service. Deploy the Angular build to Vercel, the Express API to Railway. Write a clear GitHub README with the live URL and a GIF demo. This is your primary portfolio piece — make it real." },
        { week: "Week 13–18", title: "Advanced Angular and NgRx", desc: "Learn OnPush change detection deeply and apply it to your portfolio project. Learn NgRx: build a small shopping cart with NgRx (actions, reducers, selectors, effects). This is the most complex Angular concept — take two weeks. Study Angular routing advanced patterns: nested routes, resolvers, canDeactivate. Start one advanced project (real-time dashboard or e-commerce with NgRx)." },
        { week: "Week 19+", title: "The Enterprise Job Push", desc: "Apply to 10 Angular, frontend, or full-stack roles per week — prioritizing IT majors, fintech, insurance, banking portals, and mid-size product companies. Study Angular interview questions in depth: change detection (OnPush vs default), HTTP interceptors, RxJS operators (switchMap vs mergeMap), lazy loading, guards (canActivate vs canLoad), ViewEncapsulation, and NgRx fundamentals. Do 2–3 take-home tasks from actual job applications — these are the fastest way to identify gaps. The combination of a deployed Angular project, strong RxJS knowledge, and interview preparation closes most Angular job searches within 6–10 weeks of consistent applications." },
    ],
};