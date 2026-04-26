import type { TechContent } from './types';

export const meanStackContent: TechContent = {
  techId: 'mean-stack',
  readTime: '30–35 min',
  difficulty: 'Beginner to Advanced',
  lastUpdated: '2026',

  // ── OPENING HOOK ─────────────────────────────────────────────────
  openingHook:
    "If there's one full-stack combination that enterprise product companies, MNCs, and large-scale Indian startups search for in 2026, it's MEAN Stack — MongoDB, Express.js, Angular, and Node.js. While MERN dominates startup job boards, MEAN owns the enterprise tier: banking platforms, insurance portals, government tech initiatives, and large-scale SaaS products overwhelmingly favor Angular's structured, opinionated architecture over React's do-it-yourself flexibility. Angular enforces discipline — TypeScript by default, dependency injection built in, a clear module system, and a CLI that generates production-ready boilerplate. For companies building teams of 15+ developers on a single codebase, that structure is not a limitation — it's the product. A MEAN Stack developer with two deployed, Angular-grade projects is the fastest path to a ₹5–12 LPA role at product companies, IT majors, and fintech startups in 2026. This is not a tour of the stack. This is the complete, no-filler MEAN Stack roadmap — from first principles to job-ready.",

  // ── SECTION 1: INTRODUCTION ──────────────────────────────────────
  introText: [
    "MEAN Stack is a combination of four open-source technologies — MongoDB, Express.js, Angular, and Node.js — that together form a complete JavaScript/TypeScript-based web development stack. Like MERN, every layer uses JavaScript. But MEAN distinguishes itself in one critical dimension: Angular is not just a UI library — it is a full application framework. Where React gives you components and lets you choose everything else, Angular gives you routing, HTTP client, form validation, dependency injection, and state management out of the box. That opinionated completeness is why Angular and, by extension, MEAN Stack is the default choice for large engineering teams that need consistency and maintainability across hundreds of components.",
    "Before MEAN became popular, enterprise web development meant Java or .NET backends serving server-rendered pages, with jQuery or plain JavaScript bolted onto the frontend. MEAN collapsed that into a single JavaScript ecosystem — one language from database query to UI template. It brought the speed of modern JavaScript development to enterprise-grade application requirements. The single-page application (SPA) model that Angular pioneered changed how users experience web software — no page reloads, instant navigation, desktop-application responsiveness in a browser.",
    "The problem MEAN solves is scale-without-chaos. When a startup grows from 5 to 50 engineers, React codebases without strict conventions fragment into inconsistent patterns. Angular's mandatory structure — modules, components, services, interfaces, decorators — means a developer joining a team on day one already knows where to find business logic (services), UI (components), and routing configuration (AppRoutingModule). That predictability is why TCS, Infosys, Wipro, and product companies like Razorpay, PhonePe, and Freshworks have Angular in their frontend stacks. MEAN is the enterprise full-stack answer to MERN's startup-speed proposition.",
  ],

  realWorldUsages: [
    "Google — Angular was created by Google and is used in Google's own products including Google Cloud Console and Firebase UI",
    "Microsoft — uses Angular extensively in Azure DevOps, Office 365 web interfaces, and internal tooling",
    "Forbes and The Guardian — content publishing platforms with Angular frontends and Node.js backends",
    "PayPal — migrated to Node.js backend serving an Angular frontend; credited Node.js with significant performance gains",
    "IBM — enterprise Angular applications across IBM Cloud and Watson tooling",
    "Upwork — uses Angular for their freelancer and client dashboards backed by Node.js services",
    "Indian fintech and insurance companies — HDFC, ICICI, and SBI digital banking portals built on Angular",
    "IT service majors (TCS, Infosys, Wipro) — Angular is the default frontend for enterprise delivery projects",
    "Government digital initiatives — MyGov, UMANG, and state-level portals built with Angular-based stacks",
  ],

  // ── SECTION 2: WHY LEARN ─────────────────────────────────────────
  whyLearn: {
    demand:
      "Search 'Angular developer' or 'MEAN Stack developer' on Naukri, LinkedIn India, or Indeed — you'll find the second-largest volume of full-stack listings, particularly at companies above ₹1,000 crore revenue. Angular dominates enterprise hiring: banking, insurance, healthcare IT, and large-scale SaaS. IT service companies (TCS, Infosys, Capgemini) that place thousands of developers annually standardize on Angular because its enforced structure makes onboarding predictable. For developers targeting stable, high-package enterprise roles rather than early-stage startup risk, MEAN Stack in 2026 is the most strategic investment.",
    jobRoles: [
      { role: "Full-Stack Developer (MEAN)", desc: "The core role — build Angular frontends with services, modules, and RxJS; and Node.js + Express backends connected to MongoDB." },
      { role: "Frontend Developer (Angular)", desc: "Specialize on the Angular layer — components, RxJS observables, forms, routing, lazy loading, performance optimization." },
      { role: "Backend Developer (Node.js/Express)", desc: "Own the Express + MongoDB layer — REST or GraphQL APIs, authentication, database design, deployment, and server-side optimization." },
      { role: "Enterprise JavaScript Developer", desc: "Common at IT majors and large product companies — expected to work across MEAN in structured, team-based codebases with strict conventions." },
      { role: "Software Engineer (Product/Platform)", desc: "Mid-to-large product companies expect MEAN fluency for feature development across the entire application stack." },
      { role: "Angular Developer", desc: "Specialized role at companies with large Angular codebases — deep expertise in RxJS, Angular CDK, NgRx, and performance profiling." },
    ],
    whyCompanies: [
      { reason: "Enforced structure at scale", detail: "Angular's mandatory architecture — modules, services, DI, typed interfaces — keeps large codebases maintainable as teams grow." },
      { reason: "TypeScript from day one", detail: "Angular requires TypeScript. Compile-time type checking catches integration bugs before runtime, critical in financial and healthcare apps." },
      { reason: "Built-in enterprise features", detail: "Angular ships with HTTP client, forms module, routing, lazy loading, and i18n. No library selection debates — the team ships features immediately." },
      { reason: "Long-term Google stewardship", detail: "Angular is maintained by Google with a clear versioning roadmap and LTS (Long-Term Support) releases — predictability enterprises require." },
    ],
    salaryRange: "₹5 LPA – ₹12 LPA (Freshers with portfolio) | ₹12 LPA – ₹28 LPA (Mid-Level, 2–4 years)",
    careerNote:
      "MEAN is not a ceiling — it's the enterprise foundation. Solid MEAN skills open doors to Next.js + Node.js (full-stack TypeScript), NestJS (enterprise Node.js framework), GraphQL + Apollo (typed API layer), NgRx (Redux-inspired state management), and system design. Senior Angular + Node.js developers at banking and fintech companies regularly cross ₹35–50 LPA. The Angular skill is deeply valued and relatively less common than React — meaning less supply competition for more enterprise demand.",
  },

  // ── SECTION 3: HOW IT WORKS ──────────────────────────────────────
  howItWorks: {
    intro:
      "Think of a hospital system. The patient (browser user) interacts with the reception desk (Angular). The receptionist collects information, validates it (Angular forms + services), and sends it to the records department via an internal memo (HTTP request). The records clerk (Express.js + Node.js) processes the memo, retrieves or updates the patient file from the filing cabinet (MongoDB), and sends back a confirmation. The patient never sees the filing cabinet — they only see what the receptionist shows them. Each layer has a defined role, and Angular's strict structure ensures every receptionist (developer) follows the same protocol.",
    vdomSteps: [
      { num: "1", title: "User Interacts with Angular (Frontend)", text: "The user clicks, submits a form, or navigates via the Angular Router. Angular's component tree detects the event, runs validation if it's a form, and calls a service method to communicate with the backend. Angular's change detection then updates the DOM based on new state." },
      { num: "2", title: "Angular Service Makes HTTP Request", text: "Angular's HttpClient (from @angular/common/http) sends an HTTP request to the Express API. Unlike React's loose fetch calls, HttpClient returns an RxJS Observable — a stream of data that Angular components subscribe to. The service layer encapsulates all API communication logic." },
      { num: "3", title: "Express Middleware Pipeline Processes the Request", text: "The request hits the Express server running on Node.js. Middleware runs in order — CORS validation, JWT authentication (passport.js or manual), request body parsing, input validation (express-validator). Each middleware calls next() or terminates with an error response." },
      { num: "4", title: "Controller + Mongoose Query Executes", text: "The matching route handler runs business logic and queries MongoDB via Mongoose — find, create, update, or delete documents. Mongoose schemas enforce data types and validation before writes reach the database. Results are converted to JavaScript objects." },
      { num: "5", title: "Observable Emission Updates Angular UI", text: "Express sends a JSON response. The Angular HttpClient Observable emits the data. The component's subscription handler receives it, updates the component's properties, and Angular's change detection re-renders the affected DOM. The async pipe in templates handles Observable subscriptions declaratively." },
    ],
    componentCode: `// THE MEAN DATA FLOW — one feature across all four layers

// 1. ANGULAR COMPONENT — declares the UI and delegates logic to service
@Component({
  selector: 'app-product-list',
  template: \`
    <div *ngIf="loading">Loading products...</div>
    <div *ngIf="error" class="error">{{ error }}</div>
    <app-product-card
      *ngFor="let product of products$ | async"
      [product]="product">
    </app-product-card>
  \`
})
export class ProductListComponent implements OnInit {
  products$!: Observable<Product[]>;
  loading = false;
  error = '';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products$ = this.productService.getProducts().pipe(
      catchError(err => {
        this.error = err.message;
        return of([]);
      })
    );
  }
}

// 2. ANGULAR SERVICE — centralized HTTP logic with RxJS
@Injectable({ providedIn: 'root' })
export class ProductService {
  private apiUrl = \`\${environment.apiUrl}/products\`;

  constructor(private http: HttpClient) {}

  getProducts(filters?: ProductFilters): Observable<Product[]> {
    const params = new HttpParams({ fromObject: { ...(filters || {}) } });
    return this.http.get<ApiResponse<Product[]>>(this.apiUrl, { params }).pipe(
      map(response => response.data),
      retry(1),
      shareReplay(1)
    );
  }
}

// 3. EXPRESS ROUTE + CONTROLLER (Backend) — handles the request
router.get('/', protect, async (req, res, next) => {
  try {
    const products = await Product.find().populate('seller', 'name email');
    res.json({ success: true, data: products });
  } catch (err) { next(err); }
});

// 4. MONGOOSE MODEL (Data Layer) — schema and CRUD
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  seller: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now },
});
const Product = mongoose.model('Product', productSchema);

// 5. MONGODB stores as BSON
// { "_id": "...", "name": "Laptop", "price": 45000, "seller": "userId..." }`,
    renderCycle: [
      "User action in Angular component → service method called with RxJS Observable",
      "HttpClient sends HTTP request → Angular HTTP interceptor attaches auth token",
      "Express receives request → middleware pipeline (CORS, auth, body parse, validate) runs",
      "Route handler executes → Mongoose queries MongoDB → documents returned",
      "Express sends JSON → Observable emits data → Angular change detection → UI re-renders",
    ],
    closingNote:
      "This Observable-based request cycle is what sets MEAN apart from MERN. Angular's RxJS layer means data is treated as a stream — you can transform, combine, cancel, debounce, and retry it with operators. Once you understand how a user interaction flows through an Angular component, through a service Observable, through Express middleware, into MongoDB, and back — you understand MEAN. Everything else is building more pipelines.",
  },

  // ── SECTION 4: CORE CONCEPTS ─────────────────────────────────────
  coreConcepts: [
    {
      id: "angular-architecture",
      number: "4.1",
      title: "Angular Architecture — Modules, Components, Services",
      icon: "🔺",
      color: "red",
      intro:
        "Angular is a framework, not a library. That distinction is fundamental. Angular enforces a specific application architecture: NgModules organize features, Components handle UI rendering, Services contain business logic and API calls, and Dependency Injection wires everything together. This structure makes Angular applications predictable and maintainable at any team size — which is precisely why enterprises adopt it.",
      code: `// app.module.ts — root NgModule declares, imports, and bootstraps
@NgModule({
  declarations: [AppComponent, ProductListComponent, ProductCardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,           // Custom shared module for reusable UI
    ProductsModule,         // Lazy-loaded feature module
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

// product.component.ts — "smart" (container) component
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush, // Performance optimization
})
export class ProductListComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  loading = false;
  private destroy$ = new Subject<void>();

  constructor(
    private productService: ProductService,  // DI — Angular provides this
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.productService.getAll()
      .pipe(takeUntil(this.destroy$))          // Auto-unsubscribe on destroy
      .subscribe({
        next: products => { this.products = products; this.cdr.markForCheck(); },
        error: err => console.error(err),
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

// product.service.ts — "dumb" service, only handles data + API
@Injectable({ providedIn: 'root' })
export class ProductService {
  private api = \`\${environment.apiUrl}/products\`;
  constructor(private http: HttpClient) {}

  getAll(params?: Partial<ProductQuery>): Observable<Product[]> {
    return this.http.get<ApiResponse<Product[]>>(this.api, { params: params as any })
      .pipe(map(r => r.data));
  }

  create(payload: CreateProductDto): Observable<Product> {
    return this.http.post<ApiResponse<Product>>(this.api, payload)
      .pipe(map(r => r.data));
  }
}`,
      usage:
        "Every Angular feature is a module. Every screen is a component. Every API call is a service. This three-layer separation — module/component/service — is the pattern you follow for every single feature in a MEAN application. Once internalized, you can build any Angular feature without architectural debate.",
      mistake:
        "Putting HTTP calls directly inside components instead of services. Component becomes fat, logic is untestable, and multiple components sharing the same data make duplicate HTTP calls. Services are singletons — inject once, share everywhere. Move ALL HttpClient calls into services.",
    },
    {
      id: "rxjs-observables",
      number: "4.2",
      title: "RxJS — Reactive Programming in Angular",
      icon: "🌊",
      color: "blue",
      intro:
        "RxJS (Reactive Extensions for JavaScript) is Angular's core data-handling layer. Everything in Angular that involves async data — HTTP calls, user events, routing events, form value changes — is an Observable stream. Mastering RxJS operators is the single biggest differentiator between a junior and mid-level Angular developer, and it's the most commonly probed area in Angular interviews.",
      code: `// ESSENTIAL RxJS PATTERNS FOR MEAN STACK

// 1. switchMap — cancel previous, start new (search/filter)
@Component({ ... })
export class ProductSearchComponent implements OnInit {
  searchControl = new FormControl('');

  products$ = this.searchControl.valueChanges.pipe(
    debounceTime(400),                // Wait 400ms after last keystroke
    distinctUntilChanged(),           // Skip if same value
    filter(term => term.length > 2),  // Ignore short terms
    switchMap(term =>                 // Cancel prev request, start new
      this.productService.search(term).pipe(catchError(() => of([])))
    )
  );
}

// 2. combineLatest — merge multiple observables (filter + sort)
export class ProductListComponent {
  private category$ = this.route.queryParams.pipe(
    map(params => params['category'] || 'all')
  );
  private sort$ = new BehaviorSubject<string>('price-asc');

  products$ = combineLatest([this.category$, this.sort$]).pipe(
    switchMap(([category, sort]) =>
      this.productService.getAll({ category, sort })
    ),
    shareReplay(1)
  );
}

// 3. forkJoin — parallel HTTP calls (dashboard data)
loadDashboard(): Observable<DashboardData> {
  return forkJoin({
    products: this.productService.getAll(),
    orders: this.orderService.getRecent(),
    stats: this.analyticsService.getSummary(),
  }); // All three fire simultaneously, result arrives when ALL complete
}

// 4. HTTP Interceptor — attach token + handle errors globally
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.auth.getToken();
    const authReq = token
      ? req.clone({ setHeaders: { Authorization: \`Bearer \${token}\` } })
      : req;

    return next.handle(authReq).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) this.auth.logout();
        return throwError(() => new Error(error.error?.message || 'API Error'));
      })
    );
  }
}

// 5. async pipe in template — zero subscription management
// product-list.component.html
// <ng-container *ngIf="products$ | async as products; else loading">
//   <app-product-card *ngFor="let p of products" [product]="p" />
// </ng-container>
// <ng-template #loading><app-spinner /></ng-template>`,
      usage:
        "RxJS is unavoidable in Angular. The async pipe alone eliminates subscription management bugs. switchMap eliminates race conditions in search. forkJoin parallelizes dashboard API calls. HTTP interceptors centralize auth token injection and 401 handling. Learn these five patterns and you handle 90% of real-world async scenarios.",
      mistake:
        "Subscribing manually in components and forgetting to unsubscribe. Every manual .subscribe() that isn't cleaned up is a memory leak — the subscription keeps firing even after the component is destroyed. Use the async pipe in templates, or the takeUntil(destroy$) pattern for manual subscriptions.",
    },
    {
      id: "angular-forms",
      number: "4.3",
      title: "Angular Reactive Forms",
      icon: "📋",
      color: "emerald",
      intro:
        "Angular has two form systems — Template-Driven and Reactive. In a MEAN application, you always use Reactive Forms for anything beyond a trivial input. Reactive Forms are defined entirely in TypeScript, not in HTML — making them testable, type-safe, and dynamically composable. In enterprise apps with complex multi-step forms (loan applications, KYC, registration wizards), Reactive Forms' FormGroup and FormArray are the only viable approach.",
      code: `// reactive-form.component.ts — complete form with validation
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      passwords: this.fb.group(
        {
          password: ['', [Validators.required, Validators.minLength(8), this.strongPasswordValidator]],
          confirmPassword: ['', Validators.required],
        },
        { validators: this.passwordMatchValidator }
      ),
      address: this.fb.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        pincode: ['', [Validators.required, Validators.pattern(/^[1-9][0-9]{5}$/)]],
      }),
    });
  }

  // Custom validator — cross-field password match
  private passwordMatchValidator(group: AbstractControl): ValidationErrors | null {
    const pass = group.get('password')?.value;
    const confirm = group.get('confirmPassword')?.value;
    return pass === confirm ? null : { passwordMismatch: true };
  }

  // Custom validator — password strength
  private strongPasswordValidator(control: AbstractControl): ValidationErrors | null {
    const val = control.value as string;
    if (!val) return null;
    const hasUpper = /[A-Z]/.test(val);
    const hasNumber = /[0-9]/.test(val);
    const hasSpecial = /[!@#$%^&*]/.test(val);
    return hasUpper && hasNumber && hasSpecial ? null : { weakPassword: true };
  }

  // Dynamic form array — multiple phone numbers
  get phones(): FormArray {
    return this.registerForm.get('phones') as FormArray;
  }
  addPhone(): void {
    this.phones.push(this.fb.control('', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]));
  }

  onSubmit(): void {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }
    this.auth.register(this.registerForm.value).subscribe({
      next: () => this.router.navigate(['/dashboard']),
      error: err => console.error(err),
    });
  }
}

// register.component.html — error display pattern
// <input formControlName="email" />
// <div *ngIf="registerForm.get('email')?.invalid && registerForm.get('email')?.touched">
//   <span *ngIf="registerForm.get('email')?.errors?.['required']">Email is required</span>
//   <span *ngIf="registerForm.get('email')?.errors?.['email']">Enter a valid email</span>
// </div>`,
      usage:
        "Every MEAN project with user input uses Reactive Forms. Login, registration, product creation, checkout, profile updates — all Reactive Forms. The FormBuilder pattern, custom validators, and FormArray for dynamic inputs appear in 85% of Angular take-home interview tasks and senior interview questions.",
      mistake:
        "Not calling markAllAsTouched() before checking form validity on submit. Angular only shows validation errors after a user touches a field. If the user clicks Submit without touching fields, no errors show. Call registerForm.markAllAsTouched() at the start of onSubmit() to surface all errors immediately.",
    },
    {
      id: "express-api-mean",
      number: "4.4",
      title: "Express REST API for Angular",
      icon: "🚀",
      color: "yellow",
      intro:
        "The Express backend in a MEAN app has the same responsibility as in MERN: expose a REST API that Angular's HttpClient consumes. What differs is the contract. Angular is strongly typed — it expects predictable JSON shapes that match TypeScript interfaces. Consistent, well-documented API responses are more important in MEAN than in loosely-typed MERN codebases. The backend must be reliable enough for Angular's strict service layer.",
      code: `// Typed API response helper — mirrors Angular's expected interface
interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
  pagination?: PaginationMeta;
}

const sendResponse = <T>(res: Response, statusCode: number, data: T, message = 'Success') => {
  const response: ApiResponse<T> = { success: true, message, data };
  res.status(statusCode).json(response);
};

// Typed Express route with full pagination, filtering, sorting
router.get('/', protect, async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const {
      page = '1', limit = '10', category, search, minPrice, maxPrice, sortBy = 'createdAt', order = 'desc'
    } = req.query as Record<string, string>;

    const query: Record<string, unknown> = {};
    if (category && category !== 'all') query.category = category;
    if (search) query.name = { $regex: search, $options: 'i' };
    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) (query.price as Record<string, number>).$gte = Number(minPrice);
      if (maxPrice) (query.price as Record<string, number>).$lte = Number(maxPrice);
    }

    const sortOrder = order === 'asc' ? 1 : -1;
    const total = await Product.countDocuments(query);
    const products = await Product
      .find(query)
      .populate('seller', 'name email avatar')
      .sort({ [sortBy]: sortOrder })
      .limit(Number(limit))
      .skip((Number(page) - 1) * Number(limit))
      .lean();                                    // .lean() returns plain JS object — faster

    sendResponse(res, 200, {
      products,
      pagination: {
        total,
        page: Number(page),
        limit: Number(limit),
        pages: Math.ceil(total / Number(limit)),
      },
    });
  } catch (err) { next(err); }
});

// Centralized error handler — Angular expects consistent error shape
const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  const status = err.statusCode || 500;
  res.status(status).json({
    success: false,
    message: err.message || 'Internal Server Error',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  });
};`,
      usage:
        "Angular's HttpClient and services assume a consistent API. Before writing any Angular service, design and test the full Express API in Postman. The TypeScript interfaces in Angular must mirror the JSON shape your Express routes return. This contract-first approach is standard in MEAN enterprise teams.",
      mistake:
        "Returning different data shapes from different routes — arrays from some, objects from others, errors without a consistent structure. Angular services that handle inconsistent APIs become if-else nightmares. Standardize every response as { success, message, data } and every error as { success: false, message } from day one.",
    },
    {
      id: "mean-auth",
      number: "4.5",
      title: "Full-Stack Authentication — JWT with Angular Guards",
      icon: "🔐",
      color: "orange",
      intro:
        "Authentication in MEAN spans all four layers, but Angular adds two critical components missing in simpler frameworks: Route Guards (canActivate, canLoad) that block unauthorized navigation at the router level, and HTTP Interceptors that automatically attach JWTs to every outgoing request. This architecture is cleaner and more centralized than React's ad-hoc ProtectedRoute pattern.",
      code: `// ── BACKEND: Express auth routes (TypeScript) ──────────────────
router.post('/register', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, email, password } = req.body as RegisterDto;
    if (await User.findOne({ email })) {
      return next(new AppError('Email already registered', 400));
    }
    const hashed = await bcrypt.hash(password, 12);
    const user = await User.create({ name, email, password: hashed });
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET!, { expiresIn: '7d' });
    res.status(201).json({ success: true, token, user: { id: user._id, name, email, role: user.role } });
  } catch (err) { next(err); }
});

// ── ANGULAR AUTH SERVICE ────────────────────────────────────────
@Injectable({ providedIn: 'root' })
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(this.getStoredUser());
  currentUser$ = this.currentUserSubject.asObservable();

  private getStoredUser(): User | null {
    const stored = localStorage.getItem('user');
    return stored ? JSON.parse(stored) : null;
  }

  get isAuthenticated(): boolean { return !!this.currentUserSubject.value; }
  get currentUser(): User | null { return this.currentUserSubject.value; }
  getToken(): string | null { return localStorage.getItem('token'); }

  login(email: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(\`\${environment.apiUrl}/auth/login\`, { email, password }).pipe(
      tap(response => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', JSON.stringify(response.user));
        this.currentUserSubject.next(response.user);
      })
    );
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.currentUserSubject.next(null);
    this.router.navigate(['/login']);
  }
}

// ── ANGULAR ROUTE GUARD ─────────────────────────────────────────
@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(): boolean { return this.checkAuth(); }
  canLoad(): boolean { return this.checkAuth(); }

  private checkAuth(): boolean {
    if (this.auth.isAuthenticated) return true;
    this.router.navigate(['/login'], { queryParams: { returnUrl: this.router.url } });
    return false;
  }
}

// Role guard — blocks routes by user role
@Injectable({ providedIn: 'root' })
export class RoleGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const required = route.data['roles'] as string[];
    const userRole = this.auth.currentUser?.role;
    if (required.includes(userRole!)) return true;
    this.router.navigate(['/unauthorized']);
    return false;
  }
}

// app-routing.module.ts — applying guards at route level
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canLoad: [AuthGuard],
    canActivate: [AuthGuard, RoleGuard],
    data: { roles: ['admin'] },
  },
];`,
      usage:
        "Route Guards replace React's ProtectedRoute with a framework-level navigation guard that fires before a component even mounts. The HTTP Interceptor replaces per-request header attachment. Together, these two patterns make MEAN authentication centralised, DRY, and immediately recognizable to any Angular developer joining your team.",
      mistake:
        "Using canActivate but not canLoad. canActivate guards a route when the user navigates to it — but canLoad also prevents the lazy-loaded module's JavaScript from downloading to unauthorized users. Always apply both guards to admin and premium feature modules.",
    },
    {
      id: "ngrx-state",
      number: "4.6",
      title: "State Management — NgRx for Enterprise Angular",
      icon: "🔄",
      color: "purple",
      intro:
        "As MEAN applications grow, component and service-level state becomes insufficient. NgRx — Angular's Redux implementation — provides a single, immutable state tree with strict unidirectional data flow: Actions describe events, Reducers update state, Selectors query state, and Effects handle async operations (API calls). NgRx is the industry standard for large Angular apps and is explicitly asked about in senior MEAN developer interviews.",
      code: `// NgRx — complete feature store for products

// 1. STATE INTERFACE
export interface ProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
  filters: ProductFilters;
  pagination: PaginationMeta;
}

// 2. ACTIONS — describe what happened
export const loadProducts = createAction('[Products] Load Products', props<{ filters: ProductFilters }>());
export const loadProductsSuccess = createAction('[Products] Load Success', props<{ products: Product[]; pagination: PaginationMeta }>());
export const loadProductsFailure = createAction('[Products] Load Failure', props<{ error: string }>());
export const addProduct = createAction('[Products] Add Product', props<{ product: CreateProductDto }>());
export const addProductSuccess = createAction('[Products] Add Success', props<{ product: Product }>());
export const setFilter = createAction('[Products] Set Filter', props<{ key: keyof ProductFilters; value: string | number }>());

// 3. REDUCER — pure function, no side effects
export const productReducer = createReducer(
  initialState,
  on(loadProducts, state => ({ ...state, loading: true, error: null })),
  on(loadProductsSuccess, (state, { products, pagination }) => ({
    ...state, products, pagination, loading: false,
  })),
  on(loadProductsFailure, (state, { error }) => ({ ...state, loading: false, error })),
  on(setFilter, (state, { key, value }) => ({
    ...state, filters: { ...state.filters, [key]: value },
  })),
  on(addProductSuccess, (state, { product }) => ({
    ...state, products: [product, ...state.products],
  }))
);

// 4. SELECTORS — memoized state queries
export const selectProductFeature = createFeatureSelector<ProductState>('products');
export const selectAllProducts = createSelector(selectProductFeature, s => s.products);
export const selectProductsLoading = createSelector(selectProductFeature, s => s.loading);
export const selectProductFilters = createSelector(selectProductFeature, s => s.filters);

// 5. EFFECTS — handle async operations (API calls)
@Injectable()
export class ProductEffects {
  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadProducts),
      switchMap(({ filters }) =>
        this.productService.getAll(filters).pipe(
          map(({ products, pagination }) => loadProductsSuccess({ products, pagination })),
          catchError(error => of(loadProductsFailure({ error: error.message })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private productService: ProductService) {}
}

// 6. COMPONENT — selects from store, dispatches actions
@Component({ ... })
export class ProductListComponent {
  products$ = this.store.select(selectAllProducts);
  loading$ = this.store.select(selectProductsLoading);

  constructor(private store: Store) {
    this.store.dispatch(loadProducts({ filters: {} }));
  }

  onFilterChange(key: keyof ProductFilters, value: string): void {
    this.store.dispatch(setFilter({ key, value }));
  }
}`,
      usage:
        "NgRx is the standard for MEAN applications with complex shared state: admin dashboards, multi-step wizards, real-time data feeds, and products with heavily-filtered list views. For simpler MEAN apps, Angular Services with BehaviorSubject provide 80% of the benefit without NgRx's boilerplate. Know both; choose based on complexity.",
      mistake:
        "Using NgRx for every single piece of state. Form state, local UI toggles (open/close modal), transient component state — these do not belong in NgRx. Over-using NgRx creates massive boilerplate for trivial operations. Apply it to genuinely shared, cross-component state: auth user, cart, global notifications, and paginated server data.",
    },
    {
      id: "mean-project-structure",
      number: "4.7",
      title: "MEAN Project Structure — Scalable from Day One",
      icon: "📁",
      color: "teal",
      intro:
        "MEAN project structure differs from MERN in one important dimension: the Angular frontend has its own opinionated structure enforced by the Angular CLI. The server side follows the same controller/service/model pattern as MERN. Understanding both structures, and how they integrate in a monorepo, is the organizational foundation of every MEAN application.",
      code: `mean-project/
├── client/                          # Angular frontend (Angular CLI)
│   ├── src/
│   │   ├── app/
│   │   │   ├── core/                # Singleton services, guards, interceptors
│   │   │   │   ├── guards/          # AuthGuard, RoleGuard
│   │   │   │   ├── interceptors/    # AuthInterceptor, ErrorInterceptor
│   │   │   │   └── services/        # AuthService, NotificationService
│   │   │   ├── shared/              # Shared module — reusable components/pipes/directives
│   │   │   │   ├── components/      # SpinnerComponent, ModalComponent, PaginationComponent
│   │   │   │   ├── directives/      # HasRoleDirective, LazyImgDirective
│   │   │   │   └── pipes/           # CurrencyInrPipe, TruncatePipe, TimeAgoPipe
│   │   │   ├── features/            # Feature modules (lazy-loaded)
│   │   │   │   ├── auth/            # LoginComponent, RegisterComponent
│   │   │   │   │   └── auth.module.ts
│   │   │   │   ├── products/        # ProductListComponent, ProductDetailComponent
│   │   │   │   │   ├── store/       # NgRx: actions, reducers, selectors, effects
│   │   │   │   │   └── products.module.ts
│   │   │   │   └── dashboard/
│   │   │   ├── app-routing.module.ts
│   │   │   └── app.module.ts
│   │   ├── environments/
│   │   │   ├── environment.ts        # apiUrl: 'http://localhost:5000'
│   │   │   └── environment.prod.ts   # apiUrl: 'https://api.yourdomain.com'
│   │   └── styles/
│   │       ├── _variables.scss       # Design tokens, color palette
│   │       └── styles.scss
│   ├── angular.json
│   └── package.json
│
├── server/                           # Express + Node.js backend (TypeScript)
│   ├── src/
│   │   ├── config/
│   │   │   └── db.ts                 # mongoose.connect()
│   │   ├── controllers/              # Route handler logic
│   │   │   ├── authController.ts
│   │   │   ├── productController.ts
│   │   │   └── orderController.ts
│   │   ├── middleware/
│   │   │   ├── auth.ts               # protect, adminOnly
│   │   │   ├── validate.ts           # express-validator wrapper
│   │   │   └── errorHandler.ts       # 4-param error middleware
│   │   ├── models/
│   │   │   ├── User.ts
│   │   │   ├── Product.ts
│   │   │   └── Order.ts
│   │   ├── routes/
│   │   │   ├── authRoutes.ts
│   │   │   ├── productRoutes.ts
│   │   │   └── orderRoutes.ts
│   │   ├── types/                    # Shared TypeScript interfaces
│   │   │   ├── auth.types.ts
│   │   │   └── product.types.ts
│   │   ├── utils/                    # AppError, sendEmail, generateToken
│   │   ├── app.ts                    # Express setup, middleware, routes
│   │   └── server.ts                 # DB connect + app.listen
│   ├── tsconfig.json
│   └── package.json
│
└── package.json                      # Root: "dev": "concurrently ..."`,
      usage:
        "The Angular CLI enforces the client-side structure automatically. The server side mirrors the MERN pattern — controllers, routes, models, middleware. The types/ folder in the server can be shared with the client in a monorepo setup (using TypeScript path aliases), enabling the same interfaces to describe API contracts on both sides.",
      mistake:
        "Putting all feature code in AppModule instead of creating lazy-loaded feature modules. A single AppModule that imports all components means the entire app JavaScript is loaded on first visit — even pages the user may never visit. Lazy-load every feature module: the Angular Router downloads it only when the user navigates to that route.",
    },
    {
      id: "mean-deployment",
      number: "4.8",
      title: "Deployment — MEAN Stack in Production",
      icon: "🌐",
      color: "red",
      intro:
        "MEAN deployment follows the same three-platform pattern as MERN — MongoDB Atlas, a Node.js host for Express, and a static host for the Angular build. Angular-specific deployment requires understanding the ng build output (a /dist folder of static HTML/CSS/JS) and handling Angular's HTML5 routing in production (404s when refreshing on non-root routes).",
      code: `// server/src/app.ts — production-ready Express + Angular static serving
import express from 'express';
import path from 'path';
import helmet from 'helmet';
import cors from 'cors';
import rateLimit from 'express-rate-limit';

const app = express();

app.use(helmet({ contentSecurityPolicy: false })); // Disable for Angular inline scripts
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));
app.use(express.json({ limit: '10kb' }));

// API routes first
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

// Serve Angular build — only in production (monorepo: dist built into server/public)
if (process.env.NODE_ENV === 'production') {
  const distPath = path.join(__dirname, '..', 'public', 'browser'); // Angular 17+ output
  app.use(express.static(distPath));
  // Handle Angular HTML5 routing — send index.html for all non-API routes
  app.get('*', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });
}

app.use(errorHandler);
export default app;

// client/src/environments/environment.prod.ts
export const environment = {
  production: true,
  apiUrl: 'https://your-backend.railway.app', // or relative '/api' if serving from same Express
};

// angular.json — build configuration
// "outputPath": "dist/client/browser"
// ng build --configuration production

// server/tsconfig.json — TypeScript compiler for Express
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "resolveJsonModule": true
  }
}

/*
MEAN DEPLOYMENT CHECKLIST:
✅ MongoDB Atlas — free M0 cluster, whitelist Railway/Render IP (or 0.0.0.0/0 for simplicity)
✅ ng build --configuration production — creates /dist with optimized, tree-shaken bundle
✅ Railway / Render — deploy Express, set NODE_ENV=production, MONGO_URI, JWT_SECRET, CLIENT_URL
✅ Two deployment options:
   Option A (Separate): Deploy Angular dist to Vercel, Express to Railway. Set CORS.
   Option B (Combined): Copy /dist into Express /public, serve both from Railway.
✅ Angular routing fix — add catch-all route in Express AFTER API routes (see above)
✅ Environment files — set correct apiUrl in environment.prod.ts before ng build
✅ Test API in Postman after backend deployment, then test Angular app navigation after frontend deployment
*/`,
      usage:
        "Angular's ng build --configuration production bundles, tree-shakes, and minifies the entire application into a /dist folder. That folder is a static site — deploy it anywhere that serves static files (Vercel, Netlify, Firebase Hosting, or right from Express with express.static). The catch-all route fix for Angular's client-side router is the single most common production bug MEAN developers forget.",
      mistake:
        "Forgetting the catch-all route in Express. When you deploy Angular and refresh on a non-root URL (/products/123), the server receives that request. Without the catch-all, Express returns a 404 — the Angular router never runs. Add app.get('*', (req, res) => res.sendFile(path.join(distPath, 'index.html'))) after all API routes.",
    },
  ],

  // ── SECTION 5: PREREQUISITES ─────────────────────────────────────
  prerequisites: [
    { item: "JavaScript (ES6+)", done: false, note: "Mandatory — MEAN is JavaScript/TypeScript throughout", detail: "Arrow functions, destructuring, Promises, async/await, array methods (map, filter, reduce), ES6 modules. Angular's code is TypeScript, which is a superset of JavaScript." },
    { item: "TypeScript Fundamentals", done: false, note: "Angular requires TypeScript — not optional", detail: "Interfaces, types, generics, decorators, enums, access modifiers. Angular is built in TypeScript and you cannot write production Angular code without it. Invest a week here before Angular." },
    { item: "HTML & CSS (with SCSS)", done: true, note: "For building Angular templates and component styles", detail: "Flexbox, Grid, semantic HTML. Angular uses SCSS by default in the CLI — basic SCSS nesting and variables save significant styling time." },
    { item: "Angular Basics", done: false, note: "Components, services, modules, routing, HttpClient, RxJS basics", detail: "Build at least two standalone Angular apps before connecting to a backend. Be comfortable with component lifecycle, data binding, and service injection before adding the backend layer." },
    { item: "Node.js & Express Basics", done: false, note: "REST API design, middleware, routing, async error handling", detail: "Build one Express REST API with CRUD endpoints. Understand req/res, middleware pipeline, Router. Since both frontend and backend use TypeScript in MEAN, configuring ts-node for Express is a prerequisite skill." },
    { item: "MongoDB & Mongoose Basics", done: false, note: "Schema definition, CRUD operations, populate(), indexes", detail: "Connect to MongoDB Atlas, define typed Mongoose schemas (compatible with TypeScript interfaces), run find/create/update/delete queries." },
    { item: "RxJS Basics", done: false, note: "Observables, Subjects, map, filter, switchMap, async pipe", detail: "Angular's HttpClient returns Observables. You cannot work with Angular's HTTP layer without basic RxJS. Focus on subscribe, pipe, common operators, and the async pipe before anything else." },
    { item: "Command Line, Git, npm/Angular CLI", done: true, note: "Daily tools in any development role", detail: "ng generate component/service/module, npm install, git workflows, terminal navigation. The Angular CLI is your primary scaffold tool — know its generate commands." },
    { item: "Postman or Thunder Client", done: true, note: "Test Express APIs before connecting Angular", detail: "Always verify your Express API returns correct JSON before connecting Angular services. Postman debugging is faster and simpler than debugging inside Angular's Observable chain." },
  ],

  // ── SECTION 6: ROADMAP ───────────────────────────────────────────
  roadmap: [
    {
      phase: "Beginner",
      label: "01",
      duration: "Weeks 1–6",
      color: "emerald",
      topics: [
        "TypeScript fundamentals — interfaces, types, generics, decorators, enums",
        "Angular CLI — ng new, ng generate, ng serve, ng build",
        "Angular architecture — NgModules, components, templates, data binding",
        "Angular directives — *ngIf, *ngFor, ngClass, ngStyle, custom attribute directives",
        "Angular services and Dependency Injection — @Injectable, providedIn: 'root'",
        "Angular Router — Routes, RouterLink, ActivatedRoute, query params, route guards basics",
        "HttpClient module — GET/POST/PUT/DELETE, Observable subscription, async pipe",
        "Node.js + Express basics — routing, middleware, req/res, express.json()",
        "MongoDB Atlas setup — Mongoose schemas with TypeScript interfaces",
        "dotenv — environment variables in both Angular (environments/) and Express (.env)",
        "Connecting Angular HttpClient to Express REST API — CORS setup",
        "Postman API testing before connecting Angular",
      ],
      buildProjects: [
        "Task manager: Angular frontend + Express API + MongoDB — complete MEAN CRUD flow, no auth",
        "Notes app: Create, read, update, delete notes — full end-to-end MEAN with typed models",
        "Blog reader: List and view blog posts fetched from Express + MongoDB in Angular with routing",
      ],
    },
    {
      phase: "Intermediate",
      label: "02",
      duration: "Weeks 7–14",
      color: "primary",
      topics: [
        "Angular Reactive Forms — FormGroup, FormControl, FormBuilder, custom validators, FormArray",
        "HTTP Interceptors — AuthInterceptor (JWT), ErrorInterceptor (global error handling)",
        "JWT authentication — Express register/login, Angular AuthService with BehaviorSubject",
        "Route Guards — AuthGuard (canActivate, canLoad), RoleGuard",
        "Password hashing with bcrypt on Express backend",
        "RxJS intermediate — switchMap, combineLatest, forkJoin, takeUntil, shareReplay",
        "Lazy loading Angular feature modules — loadChildren in router config",
        "File uploads — Multer + Cloudinary on Express, Angular file input handling",
        "Pagination, search, and filtering — Angular UI + Express query params + Mongoose skip/limit",
        "Angular ChangeDetectionStrategy.OnPush — performance optimization",
        "express-validator — backend input validation",
        "Mongoose populate() — relational data across collections",
        "SCSS component styles — ViewEncapsulation, variables, BEM naming",
      ],
      buildProjects: [
        "Full-stack auth system: Register, login, route guards, JWT interceptor, profile update with avatar",
        "Blog platform: Auth authors create posts, others comment — CRUD, populate(), pagination, lazy modules",
        "Product catalog: Listings, RxJS-powered search/filter, file upload, cart service with BehaviorSubject",
        "Task manager with teams: Role-based access (admin/member), NgRx for task store, real-time count badge",
      ],
    },
    {
      phase: "Advanced",
      label: "03",
      duration: "Weeks 15–24+",
      color: "purple",
      topics: [
        "NgRx — actions, reducers, selectors, effects, entity adapter, DevTools",
        "Angular CDK — virtual scrolling, drag-and-drop, overlays for large data tables",
        "Payment integration — Razorpay or Stripe in Angular + Express webhooks",
        "Real-time with Socket.io — Angular service wrapping socket.io-client, Express socket server",
        "Angular PWA — service workers, offline support, push notifications via @angular/pwa",
        "Server-Side Rendering with Angular Universal — SEO-optimized MEAN apps",
        "Redis caching for expensive Express endpoints",
        "Email workflows — Nodemailer (verification, password reset, transactional emails)",
        "NestJS migration path — TypeScript-first Node.js framework built for Angular-style teams",
        "Testing — Jest + Supertest (backend), Jasmine + Karma or Jest (Angular), Cypress E2E",
        "Docker — containerize the full MEAN stack (Angular build + Express + MongoDB)",
        "CI/CD with GitHub Actions — ng build, ts-node compile, auto-deploy on push to main",
        "Angular micro-frontends with Module Federation — for enterprise multi-team architectures",
      ],
      buildProjects: [
        "E-commerce platform: NgRx cart store, Razorpay checkout, order lifecycle, admin panel, Angular CDK virtual scroll for large product lists",
        "Real-time dashboard: Socket.io data feeds, Angular Material charts, multi-user collaboration, live notifications",
        "Enterprise SaaS: Multi-tenancy, NgRx, Stripe subscriptions, Angular Universal for SEO, role matrix, analytics",
      ],
    },
  ],

  // ── SECTION 7: USE CASES ─────────────────────────────────────────
  useCases: [
    { num: "01", title: "Enterprise Banking and Fintech Portals", body: "Internet banking dashboards, loan application portals, investment platforms, and KYC verification flows — Angular's TypeScript-first approach, strict form validation, and enterprise change detection make it the default choice for financial institutions. HDFC NetBanking, Axis Mobile, and numerous fintech startups are Angular-powered." },
    { num: "02", title: "Insurance and Healthcare Platforms", body: "Policy management dashboards, claims portals, patient record systems, and appointment booking — Angular's module system enables multiple teams to own independent feature modules (claims module, policy module, admin module) in a single codebase without conflicts." },
    { num: "03", title: "Government Digital Services", body: "The MEAN stack — particularly Angular — powers numerous national and state-level digital governance initiatives in India. Complex eligibility forms, document uploads, status tracking, and citizen dashboards all benefit from Angular's form validation and TypeScript's reliability." },
    { num: "04", title: "Large-Scale SaaS Products", body: "CRM platforms, ERP dashboards, HR management systems, and project management tools — products with 100+ views across multiple user roles (admin, manager, agent, customer) are ideal for Angular's lazy-loading, route guards, and NgRx global state." },
    { num: "05", title: "IT Service Company Deliveries", body: "TCS, Infosys, Wipro, HCL, and Capgemini build the majority of their custom enterprise web applications on Angular. MEAN Stack proficiency is a standard requirement for frontend and full-stack roles at these companies across all major delivery centers in India." },
    { num: "06", title: "E-Commerce and Retail Platforms", body: "Product catalogs, checkout flows, seller dashboards, inventory management — Angular's reactive forms handle complex checkout wizards, RxJS manages real-time stock updates, and NgRx maintains cart state across sessions and pages." },
    { num: "07", title: "Real-Time Analytics and Reporting Tools", body: "Business intelligence dashboards with live data feeds, chart libraries (D3, Chart.js, Highcharts), filtered data tables with virtual scrolling for thousands of rows — the Angular CDK and OnPush change detection make real-time dashboards performant at enterprise scale." },
  ],

  // ── SECTION 8: PROJECTS ──────────────────────────────────────────
  projects: {
    beginner: [
      { name: "Full-Stack Task Manager", desc: "Angular frontend to create, complete, and delete tasks. Express + MongoDB backend stores tasks persistently. No auth — pure CRUD with typed Mongoose models and Angular reactive component.", teaches: "Complete MEAN data flow, HttpClient GET/POST/DELETE, Mongoose CRUD with TypeScript, Angular component lifecycle" },
      { name: "Notes App with CRUD", desc: "Create, edit, and delete notes with title and body. Full Angular form validation. All persisted in MongoDB via Express API.", teaches: "Angular Reactive Forms, PUT requests, ActivatedRoute for dynamic routing, complete MEAN without auth" },
      { name: "Blog Reader with Angular Router", desc: "Angular displays blog posts fetched from Express + MongoDB. Angular Router for detail view. Search by title using debounced Angular form control.", teaches: "Angular Router, ActivatedRoute, query params, RxJS debounceTime + switchMap for search, paramMap Observable" },
      { name: "Budget Tracker", desc: "Add income and expense entries with category and amount. Recharts or Chart.js breakdown. All records in MongoDB with aggregation queries.", teaches: "MongoDB aggregation pipeline, Angular component communication, chart integration, category-based filtering" },
    ],
    intermediate: [
      { name: "Full Authentication System", desc: "Register, login, JWT, HTTP interceptors, Angular route guards, profile update with avatar upload. Role-based admin view.", teaches: "End-to-end MEAN auth, bcrypt, JWT, AuthGuard, RoleGuard, HTTP Interceptors, Multer + Cloudinary, BehaviorSubject" },
      { name: "Blog Platform with Author System", desc: "Auth users write, edit, delete posts. Others comment and like. Pagination with Angular component. Author profile pages.", teaches: "Mongoose references and populate(), pagination with Angular UI, auth-gated mutations, lazy-loaded feature modules" },
      { name: "Product Catalog with Angular Material", desc: "Product listings with Angular Material UI, search (RxJS debounce + switchMap), category filter, price range. Cart service with BehaviorSubject.", teaches: "Angular Material, complex RxJS pipelines, BehaviorSubject cart state, Axios-equivalent HttpClient patterns" },
      { name: "Job Board with Three-Role Access", desc: "Companies post jobs, candidates apply with resume upload. Admin reviews applications. Three-role system with route guards.", teaches: "RBAC across full MEAN stack, file uploads, complex data relationships, RoleGuard, real product thinking" },
    ],
    advanced: [
      { name: "E-Commerce with NgRx + Payments", desc: "Complete shopping flow — products, NgRx cart store, Razorpay/Stripe checkout, order tracking, email receipts, inventory management, seller and admin dashboards with Angular CDK virtual scroll.", teaches: "NgRx entity store, payment webhooks, Nodemailer, Angular CDK, OnPush change detection, production deployment" },
      { name: "Real-Time Collaboration Dashboard", desc: "Auth users, shared boards/tasks, Socket.io live updates, typing indicators, online presence, Angular Material data tables with live data refresh.", teaches: "Socket.io in Angular service, NgRx effects for real-time state, Angular Material table with streaming data" },
      { name: "Enterprise Multi-Tenant SaaS", desc: "Organizations onboard, add members, subscribe to plans, access features gated by plan. Angular Universal for SEO. NgRx throughout. Admin analytics with Chart.js.", teaches: "Angular Universal (SSR), multi-tenancy architecture, Stripe subscriptions, NgRx advanced patterns, data isolation" },
    ],
  },

  // ── SECTION 9: MISTAKES ──────────────────────────────────────────
  mistakes: [
    {
      title: "Learning Angular Without TypeScript First",
      explanation: "Angular is built in TypeScript. Decorators, interfaces, generics, and strict typing are not optional extras — they're the core of every Angular file. Developers who skip TypeScript and jump into Angular struggle with every component, service, and module definition.",
      tip: "Spend one week on TypeScript before Angular: interfaces, types, generics, decorators, access modifiers (public/private/readonly). Build one small TypeScript project. Then start Angular.",
    },
    {
      title: "Putting Business Logic and HTTP Calls Inside Components",
      explanation: "A component that contains Mongoose query logic, API calls, and DOM manipulation is untestable, non-reusable, and violates Angular's core design principle. Angular's dependency injection system exists to solve exactly this problem.",
      tip: "Components should only handle template binding and user events. All HTTP calls go in services. All data transformations go in services or pipes. Components call service methods and bind to their Observables.",
    },
    {
      title: "Not Unsubscribing from Observables",
      explanation: "Every .subscribe() call that isn't cleaned up is a memory leak. When the component is destroyed, the subscription keeps listening — causing ghost state updates, duplicate side effects, and memory growth over long sessions.",
      tip: "Use the async pipe in templates (auto-unsubscribes). For manual subscriptions, use the takeUntil(this.destroy$) pattern with a Subject in ngOnDestroy. In Angular 16+, use the takeUntilDestroyed() operator from @angular/core/rxjs-interop.",
      wrong: "ngOnInit() { this.service.getData().subscribe(d => this.data = d); } // Never cleaned up",
      correct: "ngOnInit() { this.service.getData().pipe(takeUntil(this.destroy$)).subscribe(d => this.data = d); }",
    },
    {
      title: "Using Template-Driven Forms for Complex Enterprise Forms",
      explanation: "Template-Driven Forms hide form logic in the HTML, making it hard to test, hard to make dynamic (add/remove fields conditionally), and impossible to type-check. They work for trivial two-field forms and break down immediately for anything real.",
      tip: "Use Reactive Forms for all forms in a MEAN application. The FormBuilder API is clean, TypeScript-compatible, testable, and scales from 2 fields to 40. Learn Reactive Forms properly — it's an explicit Angular interview topic.",
    },
    {
      title: "Forgetting the Catch-All Route for Angular's Client-Side Router",
      explanation: "When Angular handles routing (HTML5 pushState), refreshing a non-root URL sends that URL to the Express server. Without a catch-all route, Express returns a 404 — Angular never loads. This breaks every deep-linked URL in production.",
      tip: "Add app.get('*', (req, res) => res.sendFile(path.join(distPath, 'index.html'))) after all your API routes in Express. Without this, every Angular route except '/' returns a 404 in production.",
      wrong: "// Express serves API only — refreshing /products/123 in browser returns Express 404",
      correct: "app.get('*', (req, res) => res.sendFile(path.join(distPath, 'index.html'))); // After all /api routes",
    },
    {
      title: "Not Lazy-Loading Feature Modules",
      explanation: "Loading all Angular modules eagerly on app start means users download JavaScript for every feature — including admin pages they'll never visit. A 2MB JavaScript bundle destroys first-load performance.",
      tip: "Lazy-load every feature module with loadChildren in the router config. Angular downloads the module bundle only when the user navigates to that route. An app with 10 lazy-loaded modules cuts initial bundle size by 60–80%.",
      wrong: "{ path: 'admin', component: AdminComponent } // Loaded in AppModule — all users download admin code",
      correct: "{ path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }",
    },
    {
      title: "Not Setting environment.prod.ts apiUrl Before ng build",
      explanation: "Building Angular with ng build --configuration production while apiUrl still points to localhost:5000 produces a deployed app that calls a non-existent server. The error only surfaces after deployment — when it's least convenient.",
      tip: "Always update src/environments/environment.prod.ts with your live backend URL before running ng build --configuration production. The CLI automatically swaps environment.ts for environment.prod.ts in production builds.",
      wrong: "environment.prod.ts: apiUrl: 'http://localhost:5000' // Deployed app calls localhost — broken",
      correct: "environment.prod.ts: apiUrl: 'https://your-backend.railway.app' // Live backend URL",
    },
    {
      title: "Putting All Feature Components in AppModule",
      explanation: "Declaring all 50 components in AppModule creates a single, unscalable module. The app loads everything upfront, compilation is slow, and multiple teams cannot work independently on features without merge conflicts in AppModule.",
      tip: "Create a feature module for every major feature area: ProductsModule, AuthModule, AdminModule, OrdersModule. Import SharedModule for common components. Lazy-load feature modules in the router. AppModule should import only CoreModule and AppRoutingModule.",
    },
    {
      title: "Hardcoding MongoDB ObjectIds or Not Validating Them in Express",
      explanation: "If req.params.id is not a valid MongoDB ObjectId format, Mongoose throws a CastError that crashes the route unless handled. This is extremely common when Angular sends malformed IDs from URL params.",
      tip: "Add mongoose.isValidObjectId(req.params.id) before every findById() call. Handle CastError in centralized error middleware to return a clean 400 response instead of a 500.",
      wrong: "const product = await Product.findById(req.params.id); // CastError if Angular sends bad ID",
      correct: "if (!mongoose.isValidObjectId(req.params.id)) return next(new AppError('Invalid ID', 400));",
    },
    {
      title: "Not Using ChangeDetectionStrategy.OnPush for List Components",
      explanation: "Angular's default change detection checks every component on every event. A product list with 100 items re-renders all 100 cards on every keypress elsewhere in the app. This destroys performance in data-heavy MEAN dashboards.",
      tip: "Add changeDetection: ChangeDetectionStrategy.OnPush to list components and data display components. Angular only re-renders them when their @Input references change or an Observable they subscribe to emits. Use the async pipe — it triggers OnPush detection automatically.",
    },
    {
      title: "Skipping Backend Validation Because Angular Forms Already Validate",
      explanation: "Angular form validators run in the browser. Anyone with Postman can call your Express API directly, sending any data, bypassing Angular entirely. Frontend validation is UX; backend validation is security.",
      tip: "Validate every POST and PUT route with express-validator or Joi on the Express backend, independent of what Angular validates. Both layers must validate. The API is a public interface — treat it as one.",
    },
    {
      title: "Over-Engineering with NgRx for Simple State",
      explanation: "NgRx requires actions, reducers, selectors, and effects for every data operation — 5+ files for a feature that a BehaviorSubject in a service resolves in 20 lines. Premature NgRx adoption slows small MEAN apps to a crawl of boilerplate.",
      tip: "Use BehaviorSubject in Angular services for simple shared state. Introduce NgRx only when state becomes genuinely complex: multiple components reading and writing the same state, complex async sequences, or when debugging with time-travel is valuable.",
    },
  ],

  // ── SECTION 10: INTERVIEW QUESTIONS ─────────────────────────────
  interviewQuestions: {
    beginner: [
      { q: "What does MEAN stand for and what is each technology's role?", a: "MongoDB (document database), Express.js (Node.js web framework), Angular (frontend application framework), Node.js (JavaScript server runtime). MongoDB stores data, Express + Node.js build the REST API, Angular renders the SPA frontend with TypeScript." },
      { q: "How is Angular different from React in the MEAN vs MERN comparison?", a: "React is a UI library — you choose your own routing, HTTP client, state management, and form handling. Angular is a complete framework that ships with all of these: Router, HttpClient, ReactiveFormsModule, and DI system. Angular enforces architectural structure; React gives flexibility. Enterprise teams prefer Angular's consistency." },
      { q: "What is TypeScript and why does Angular require it?", a: "TypeScript is a typed superset of JavaScript that compiles to plain JS. Angular requires it because decorators (@Component, @Injectable, @NgModule) are a TypeScript feature. TypeScript's compile-time type checking catches bugs before runtime — critical for large Angular applications." },
      { q: "What is an Observable in Angular?", a: "An Observable is an RxJS stream that emits values over time. Angular's HttpClient returns Observables for HTTP calls. Components subscribe to receive data. Unlike Promises (single value), Observables can emit multiple values and support operators like map, filter, switchMap to transform streams." },
      { q: "What is an Angular Module (NgModule)?", a: "A class decorated with @NgModule that declares components, directives, pipes (declarations), imports other modules (imports), exports components for other modules (exports), and registers services (providers). AppModule is the root — every feature should have its own module, ideally lazy-loaded." },
      { q: "What is Dependency Injection in Angular?", a: "Angular's DI system provides instances of services to components automatically. When a component declares a service in its constructor, Angular's injector looks it up and provides the singleton instance. This decouples components from service creation and makes testing trivial via mock injection." },
      { q: "What is the difference between Template-Driven and Reactive Forms?", a: "Template-Driven forms define logic in HTML with two-way binding [(ngModel)] — simple but hard to test and type-check. Reactive Forms define the form model in TypeScript with FormGroup and FormControl — testable, type-safe, and composable. Always use Reactive Forms in production MEAN apps." },
      { q: "What is CORS and how do you fix it in a MEAN project?", a: "Cross-Origin Resource Sharing — browsers block requests from Angular (localhost:4200) to Express (localhost:5000) without explicit CORS headers. Install the cors npm package on Express: app.use(cors({ origin: 'http://localhost:4200' })). In production, set origin to the Angular app's deployed domain." },
      { q: "What is an Angular HTTP Interceptor?", a: "A service that implements HttpInterceptor to intercept outgoing HTTP requests or incoming responses. Used to attach JWT tokens to every request (AuthInterceptor), handle 401 errors globally (redirect to login), log API timing, or transform responses. Define once in AppModule providers — applies automatically to all HttpClient calls." },
      { q: "What is a Route Guard in Angular?", a: "A class implementing CanActivate, CanLoad, or CanDeactivate that Angular Router calls before allowing navigation. AuthGuard blocks unauthenticated users from protected routes. RoleGuard restricts routes by user role. canLoad prevents lazy-loaded module bundles from even downloading for unauthorized users." },
    ],
    intermediate: [
      { q: "Explain the complete request-response cycle in a MEAN app.", a: "User action in Angular component → service method called → HttpClient creates HTTP request → AuthInterceptor attaches JWT → request reaches Express → middleware pipeline runs (CORS, auth verify, body parse, validate) → route handler executes → Mongoose queries MongoDB → Express sends JSON → Observable emits → Angular component subscription handler updates state → template re-renders via change detection." },
      { q: "What is the async pipe and why should you prefer it over manual subscribe?", a: "The async pipe subscribes to an Observable in the template and auto-unsubscribes when the component is destroyed, eliminating memory leaks. It also triggers OnPush change detection automatically. Manual subscribe requires explicit ngOnDestroy cleanup with takeUntil or Subscription.unsubscribe()." },
      { q: "What is the difference between switchMap, mergeMap, and concatMap?", a: "switchMap: cancels the previous inner Observable when a new emission arrives — ideal for HTTP search (only last query matters). mergeMap: runs all inner Observables concurrently — for parallel independent operations. concatMap: queues inner Observables sequentially — for ordered operations like uploading files one by one." },
      { q: "How do you implement pagination in MEAN?", a: "Backend: accept page and limit query params, use Mongoose .skip((page-1)*limit).limit(limit), return total count. Frontend: Angular component tracks currentPage in a BehaviorSubject, passes it as HttpParams, subscribes to paginated results, renders Angular Material Paginator or custom pagination UI." },
      { q: "How does Mongoose populate() work and what SQL concept is it equivalent to?", a: "populate() replaces an ObjectId reference field with the actual referenced document — equivalent to a SQL JOIN. Post.find().populate('author', 'name email') replaces the author ObjectId with the full User object containing only name and email. Multiple populations are possible in one query." },
      { q: "What is ChangeDetectionStrategy.OnPush and when should you use it?", a: "OnPush tells Angular to only re-render a component when its @Input references change or an Observable it subscribes to emits (via async pipe). Default change detection checks every component on every event, which is expensive. Apply OnPush to list items, data display components, and any component that doesn't need to react to external events." },
      { q: "How do you handle global errors in a MEAN application?", a: "Express: centralized 4-parameter error middleware catches all next(err) calls and returns consistent JSON error shapes. Angular: ErrorInterceptor (HTTP Interceptor) catches all HTTP errors globally — shows toasts for 4xx, redirects for 401, logs for 5xx. Angular's ErrorHandler class can catch runtime Angular errors globally." },
      { q: "What is lazy loading in Angular and how does it improve performance?", a: "Lazy loading delays downloading a feature module's JavaScript until the user navigates to that route. The initial bundle only contains AppModule and immediately-needed code. A 10-feature app might reduce initial bundle from 2MB to 400KB. Configure with loadChildren in the router — Angular CLI automatically creates separate chunks." },
      { q: "How do you share TypeScript interfaces between Angular and Express in a MEAN app?", a: "In a monorepo, create a /shared folder with interfaces (Product, User, ApiResponse). Angular imports from '../../shared/types' and Express imports from '../shared/types'. Both compile to JavaScript separately, but development-time type checking uses the same interface definitions." },
      { q: "How do you handle token expiry in an Angular MEAN application?", a: "HTTP Interceptor catches all 401 responses globally. In the error handler: clear token from localStorage, call AuthService.logout() which sets currentUser BehaviorSubject to null, and navigate to /login. This ensures any expired-token API call across any service in the app triggers the same clean logout flow." },
    ],
    advanced: [
      { q: "How would you architect a MEAN app for a team of 30 Angular developers?", a: "Monorepo with Nx. Core feature module pattern — each team owns a lazy-loaded feature module with its own routing, NgRx store slice, services, and components. Shared module for reusable UI. CoreModule for singletons (auth, logging, notification). Strict linting (Angular ESLint), module boundary enforcement, shared TypeScript path aliases, and CI that runs affected tests only." },
      { q: "Explain NgRx — why use it and what are its core building blocks?", a: "NgRx implements Redux for Angular: single immutable state tree, unidirectional data flow. Actions: plain objects describing events. Reducers: pure functions that compute new state from action + current state. Selectors: memoized state queries. Effects: RxJS-based async operations (API calls). Use NgRx when state is shared across unrelated components, mutations come from multiple sources, or debugging with time-travel is valuable." },
      { q: "What is Angular Universal and why use it in a MEAN app?", a: "Angular Universal adds Server-Side Rendering (SSR) — Node.js pre-renders Angular components to HTML before sending to the browser. Benefits: SEO (search engines see real content not empty HTML), faster First Contentful Paint. MEAN apps with Angular Universal run the Angular app on the Express server for first render, then hydrate the browser app. Required for marketing pages and content-driven MEAN apps." },
      { q: "How would you implement real-time features in a MEAN application?", a: "Add Socket.io to Express. Create an Angular SocketService that wraps socket.io-client — connect in the service, expose typed Observables using fromEvent(). Components inject SocketService and subscribe to room-specific or user-specific event streams. NgRx Effects can dispatch actions on socket emissions to update the global store. For horizontal scaling, use socket.io-redis adapter." },
      { q: "How do you implement multi-tenancy in a MEAN Stack application?", a: "User documents contain an orgId field. Every Mongoose query is scoped with { orgId: req.user.orgId }. A tenant middleware attaches orgId from the JWT to req. At the Angular level, the auth token carries orgId and Angular guards prevent cross-tenant navigation. Data isolation is enforced at the MongoDB query layer — never trust Angular-sent tenant IDs alone." },
      { q: "What is the N+1 query problem in Mongoose and how do you solve it?", a: "Fetching N documents and running a separate query per document for related data results in N+1 queries. Fix with populate() (MongoDB $lookup under the hood — one query). For aggregations, use the $lookup stage in MongoDB's aggregation pipeline. For many-to-many relationships, batch with $in instead of individual findById calls." },
      { q: "How do you write comprehensive tests for a MEAN application?", a: "Backend: Jest + Supertest — make real HTTP requests against Express, use a test MongoDB database (mongodb-memory-server), mock external services. Frontend: Angular Testing Module for unit tests (component + service isolation with TestBed), HttpClientTestingModule to mock HTTP calls. E2E: Cypress or Playwright for full user flow tests across the deployed stack." },
      { q: "How do you migrate a large Angular codebase from NgModules to Standalone Components?", a: "Angular 14+ standalone components remove NgModule dependency. Migration: add standalone: true to components, replace NgModule imports with direct imports in the component decorator, update routing to use loadComponent for lazy loading. Angular's ng generate now creates standalone by default. NgRx and HttpClient work with standalone — use importProvidersFrom in bootstrapApplication." },
      { q: "How would you scale a MEAN API to handle 500,000 daily active users?", a: "Horizontal Node.js scaling with PM2 cluster mode or Kubernetes pods behind NGINX load balancer. MongoDB Atlas with read replicas — route read-heavy queries to replicas. Redis for session caching, rate limiting state, and frequently-queried data. Bull queues for background jobs (email, reports, webhooks). CDN for Angular static assets. Database indexes on all filter fields. Connection pooling. Circuit breakers for downstream services." },
      { q: "What is the difference between BehaviorSubject, Subject, and ReplaySubject?", a: "Subject: emits to current subscribers only — new subscribers miss previous emissions. BehaviorSubject: requires an initial value, emits the last value to new subscribers immediately — ideal for auth state, current user, cart count. ReplaySubject(n): replays the last n emissions to new subscribers — useful for caching the last n events or UI notifications that late-rendered components need to display." },
    ],
  },

  // ── SECTION 11: COMPARISON ───────────────────────────────────────
  comparison: {
    headers: ["Feature", "MEAN Stack", "MERN Stack", "LAMP Stack"],
    rows: [
      { feature: "Languages Used", react: "TypeScript + JavaScript (full stack)", vue: "JavaScript (full stack)", angular: "PHP + SQL + HTML/CSS/JS" },
      { feature: "Frontend", react: "Angular (full framework)", vue: "React (UI library)", angular: "HTML/CSS/JS (any)" },
      { feature: "Backend", react: "Node.js + Express", vue: "Node.js + Express", angular: "Apache + PHP" },
      { feature: "Database", react: "MongoDB (NoSQL)", vue: "MongoDB (NoSQL)", angular: "MySQL / MariaDB (SQL)" },
      { feature: "Architecture", react: "Highly opinionated — enforced conventions", vue: "Flexible — developer-defined structure", angular: "Traditional MVC server-rendered" },
      { feature: "TypeScript Support", react: "Native — TypeScript is mandatory", vue: "Optional — add-on via tsconfig", angular: "N/A (PHP)" },
      { feature: "State Management", react: "NgRx (Redux) or BehaviorSubject", vue: "Zustand, Redux, or Context API", angular: "Not applicable" },
      { feature: "Learning Curve", react: "Higher — RxJS + DI + Angular CLI + NgModules", vue: "Moderate — one language, flexible", angular: "Moderate — PHP is approachable" },
      { feature: "Performance", react: "High — OnPush + lazy loading + tree-shaking", vue: "High — non-blocking Node.js", angular: "Moderate — synchronous PHP" },
      { feature: "Best For", react: "Enterprise, large teams, banking, government, SaaS", vue: "Startups, SPAs, rapid prototyping", angular: "Traditional web apps, CMS, legacy" },
      { feature: "Job Market India", react: "High — IT majors, enterprise, banking sector", vue: "Highest — startup and product company listings", angular: "Very High — legacy service companies" },
    ],
  },

  // ── SECTION 12: PROS & CONS ──────────────────────────────────────
  pros: [
    "TypeScript throughout — Angular mandates TypeScript, making MEAN the most type-safe JavaScript full-stack combination available",
    "Complete framework — Angular ships with router, HTTP client, form validation, DI, and testing utilities — no library paralysis",
    "Enforced architecture — Angular's opinionated structure makes large codebases maintainable and onboarding predictable across teams",
    "One language, full stack — JavaScript/TypeScript everywhere eliminates context switching; shared interfaces between Angular and Express",
    "Google-backed with long-term support — Angular's LTS releases and clear versioning roadmap give enterprise teams upgrade confidence",
    "RxJS reactive programming — Observable streams make complex async sequences (search, real-time, parallel API calls) clean and declarative",
    "Highly hireable in enterprise India — IT majors, banking, insurance, and government tech initiatives standardize on Angular",
    "Angular CLI productivity — ng generate produces components, services, modules, guards with correct boilerplate in seconds",
  ],
  cons: [
    "Steep learning curve — RxJS, dependency injection, NgModules, decorators, and change detection are significant concepts to learn simultaneously",
    "Verbose boilerplate — Angular requires more code per feature than React or Vue; a simple data-fetching component takes 3+ files",
    "Bundle size — Angular's framework code adds to initial bundle; requires disciplined lazy loading and tree-shaking to keep performant",
    "MongoDB is not ideal for all data — complex relational data with many JOINs is better served by PostgreSQL",
    "RxJS complexity — switchMap, mergeMap, and memory-leak prevention require deliberate study; misuse causes subtle, hard-to-debug bugs",
    "Over-engineering risk — NgRx, Angular Universal, CDK, and multiple interceptors can be premature for simple MEAN applications",
    "Slower iteration in early stages — Angular's structure is an advantage at scale but slows prototyping compared to React's flexibility",
    "Angular version upgrades — major versions (every 6 months) sometimes require migration effort; staying current requires maintenance discipline",
  ],

  // ── SECTION 13: FUTURE SCOPE ─────────────────────────────────────
  futureScope: [
    "Angular's Signals (stable in Angular 17+) are fundamentally changing change detection. Instead of RxJS Observables for local state, Signals provide a simpler, more performant reactive primitive. MEAN developers who add Signals knowledge alongside their RxJS foundation are positioned for the Angular standard of 2026–2028. The two systems interoperate — RxJS for complex async streams, Signals for component-level state.",
    "Standalone Components are now the Angular default (Angular 17+), deprecating NgModules for most use cases. New MEAN projects start with standalone components, bootstrapApplication(), and functional guards. Legacy NgModule knowledge remains required for maintaining existing enterprise codebases — making MEAN developers who know both patterns exceptionally hireable at IT majors transitioning existing applications.",
    "NestJS is becoming the natural backend complement to Angular in MEAN teams. NestJS is Express under the hood but adds Angular-style decorators, modules, dependency injection, and TypeScript conventions to the server. Full-stack TypeScript teams at Indian product companies increasingly use Angular + NestJS + MongoDB — Angular developers who learn NestJS can own the entire stack in the same mental model.",
    "The demand for MEAN developers at Indian banks, insurance companies, and government digital initiatives is accelerating with the push to modernize legacy J2EE and .NET systems. RBI-regulated fintech, IRDAI-compliant insurance portals, and Ministry of Electronics initiatives all consume Angular + Node.js talent. This public sector demand is counter-cyclical — it grows even in startup downturns.",
    "Angular + AI API integration is an emerging 2026 hire profile. Financial advisory chatbots, insurance claim analyzers, government document processors — all built as Angular frontends calling Node.js backends that orchestrate OpenAI, Gemini, or Claude APIs. MEAN developers who understand how to stream AI responses (Server-Sent Events in Angular), display them progressively, and store conversation context in MongoDB have the rarest combination of enterprise Angular and AI skills in the current market.",
  ],

  // ── SECTION 14: ACTION PLAN ──────────────────────────────────────
  actionPlan: [
    { week: "Week 1–2", title: "TypeScript and JavaScript ES6+ Foundation", desc: "Before touching Angular or Express, be solid in TypeScript: interfaces, types, generics, decorators, access modifiers, enums. Build one TypeScript project with strict mode enabled — a typed to-do CLI or weather API wrapper. If TypeScript feels unclear, stop and fix it. Every Angular file is TypeScript — there is no workaround." },
    { week: "Week 3–6", title: "Learn Angular and Express Independently", desc: "Build two standalone Angular apps (to-do, quiz app) — components, services, routing, Reactive Forms, RxJS basics, HttpClient with async pipe. Simultaneously, build one Express + MongoDB REST API (notes app with CRUD, TypeScript configured). Don't combine yet. Debug each layer's issues without the other layer confusing the picture." },
    { week: "Week 7–9", title: "Build Your First Complete MEAN App", desc: "Build the task manager or notes app end-to-end — Angular frontend calling an Express + MongoDB backend. Focus on the full data flow: Reactive Form submit → Angular service → HttpClient POST → Express route → Mongoose create → GET Observable → async pipe renders. Wire CORS correctly. Deploy to MongoDB Atlas + Railway + Vercel. This is the foundational MEAN pattern." },
    { week: "Week 10–14", title: "Add Authentication — The Critical MEAN Pattern", desc: "Implement the complete JWT flow — Express register/login, Angular AuthService with BehaviorSubject, AuthInterceptor for token attachment, ErrorInterceptor for 401 handling, AuthGuard with canActivate + canLoad, RoleGuard for admin routes. This full auth architecture appears in 90% of MEAN interview take-home tasks. Get it solid and reusable." },
    { week: "Week 15–20", title: "Build a Real Portfolio Project", desc: "Build the Blog Platform or Product Catalog from the intermediate projects list. Full CRUD, JWT auth, Angular Material UI, Reactive Forms with custom validators, file upload, pagination with RxJS, lazy-loaded modules, route guards. Deploy backend to Railway and Angular app to Vercel (or serve both from Express). Write a clear README with the live URL, tech stack, and feature list. This is your primary portfolio piece." },
    { week: "Week 21+", title: "The Enterprise Job Push", desc: "Apply to 10 MEAN, Angular, or full-stack roles per week — targeting IT majors, fintech, insurance, and mid-size product companies. Study MEAN interview questions deeply: the Observable cycle, RxJS operators (switchMap, combineLatest), Angular DI, route guards, HTTP interceptors, Mongoose populate(), lazy loading, and change detection. Do 2–3 take-home tasks from actual applications. The combination of a deployed Angular portfolio project and solid interview preparation closes most MEAN job searches within 6–10 weeks of consistent applications." },
  ],
};