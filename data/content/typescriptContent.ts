import type { TechContent } from './types';

export const typescriptContent: TechContent = {
  techId: 'typescript',
  readTime: '30–35 min',
  difficulty: 'Beginner to Advanced',
  lastUpdated: '2026',

  // ── OPENING HOOK ─────────────────────────────────────────────────
  openingHook:
    "If you want to go from a developer who writes code that works most of the time to a developer who writes code that works — learn TypeScript. Not because it makes you slower. Not because it adds syntax you have to memorize. But because TypeScript is what happens when the JavaScript ecosystem looked at ten years of production bugs — undefined is not a function, cannot read property 'name' of null, expected string but got number — and decided to solve them at compile time instead of discovering them at 2 AM when your production API is returning 500s. Every company in India that has grown past the 'move fast and break things' phase has adopted TypeScript. Razorpay's entire Node.js backend is TypeScript. Every new React and Next.js project at product companies starts in TypeScript by default. Angular mandates TypeScript. NestJS is TypeScript-first. tRPC — the end-to-end type-safe API layer — requires TypeScript on both ends. Prisma generates TypeScript types from your database schema. The message from the ecosystem is unambiguous: professional JavaScript development in 2026 is TypeScript development. The question is not whether you should learn TypeScript. The question is whether you will learn it shallowly — adding type annotations to please the compiler — or deeply, understanding generics, conditional types, mapped types, and the type inference engine well enough to write library-quality TypeScript that provides genuine safety guarantees. Shallow TypeScript catches some bugs. Deep TypeScript catches all of them. A developer who understands TypeScript's type system deeply is immediately recognized as senior-level by any interviewer who knows the language. TypeScript knowledge alone, applied to React, Node.js, or any JavaScript project, increases compensation by 20–40% relative to equivalent JavaScript-only developers. A TypeScript-proficient full-stack developer with React and Node.js experience is positioned for ₹8–18 LPA in 2026 — and ₹30–70 LPA within 3–4 years. This is not a TypeScript syntax guide. This is the complete, no-fluff TypeScript roadmap — from type annotations to advanced type programming.",

  // ── SECTION 1: INTRODUCTION ──────────────────────────────────────
  introText: [
    "TypeScript is a statically typed superset of JavaScript, developed and maintained by Microsoft, that compiles to plain JavaScript. 'Superset' means every valid JavaScript program is also a valid TypeScript program — you don't throw away existing JavaScript knowledge, you augment it. 'Statically typed' means that types are checked at compile time (when you run tsc or your build tool) rather than at runtime (when the code executes in the browser or Node.js). The TypeScript compiler reads your code, verifies that you're using values correctly according to their declared types, and either produces JavaScript output or emits errors that must be fixed before the code runs. This compile-time checking is TypeScript's core value: it finds entire categories of bugs before your code ever executes.",
    "TypeScript's type system is structural, not nominal. Two types are compatible if they have the same shape — the same properties with the same types — regardless of whether they were declared with the same name. A function that expects an object with { name: string; age: number } will accept any object that has at least those two properties, regardless of what class or interface it was created from. This structural typing makes TypeScript practical for JavaScript's dynamic nature: you don't have to declare interfaces for every object that flows through your program, TypeScript infers them. The type inference engine — which automatically deduces types from context — means you often get full type safety without writing a single explicit type annotation.",
    "In India's developer ecosystem, TypeScript has crossed the adoption threshold from 'progressive enhancement' to 'expected baseline'. The 2025 Stack Overflow Developer Survey found TypeScript in the top 5 most used languages globally, ahead of Python in several professional developer segments. In India specifically, every frontend framework team at product companies starts new projects in TypeScript, every Node.js backend team that has experienced the maintenance cost of a large untyped codebase has migrated, and every technical interview for mid-level and above roles will include questions about TypeScript. More practically: if you submit a portfolio project or take-home assignment in plain JavaScript in 2026, you are immediately signaling junior-level professional standards to the interviewer. TypeScript is the professional watermark.",
  ],

  realWorldUsages: [
    "Microsoft — TypeScript was built at Microsoft; VS Code (the world's most popular editor), Azure DevOps, and major Office 365 web applications are all TypeScript codebases",
    "Google — Angular mandates TypeScript; Google Cloud Console and Google's internal tools use TypeScript at massive scale",
    "Airbnb — migrated their entire JavaScript codebase (hundreds of thousands of lines) to TypeScript and documented preventing 38% of bugs that reached production in JavaScript",
    "Slack — the Slack web client and Electron desktop app are TypeScript applications; found hundreds of existing bugs when they first ran the TypeScript compiler on their JavaScript code",
    "Razorpay — the entire Node.js backend API infrastructure and React frontend are TypeScript; mandatory for all new code at India's leading payment gateway",
    "Atlassian — Jira, Confluence, and Bitbucket front-end codebases are TypeScript; the Atlassian Design System is a TypeScript component library",
    "Stripe — Stripe's API SDK, dashboard frontend, and documentation site are TypeScript; Stripe's TypeScript SDK is considered the gold standard for developer-facing TypeScript library design",
    "Prisma — the database ORM that auto-generates TypeScript types from your database schema is itself written in TypeScript and has pushed TypeScript-first database access mainstream",
    "Vercel — the Next.js framework (maintained by Vercel), Vercel's dashboard, and all official Vercel tooling are TypeScript",
    "NestJS — the enterprise Node.js framework is built entirely on TypeScript's decorator system; Angular-style patterns brought to the backend",
    "Freshworks — CRM and customer support platform frontends and the Freshworks CLI developer tooling are TypeScript",
    "tRPC — the end-to-end type-safe API framework requires TypeScript on both client and server; has driven TypeScript adoption for full-stack teams worldwide",
  ],

  // ── SECTION 2: WHY LEARN ─────────────────────────────────────────
  whyLearn: {
    demand:
      "TypeScript has achieved universal adoption in India's product company frontend ecosystem and is rapidly consuming the backend. A 2025 analysis of 8,000 Indian tech job descriptions found TypeScript listed as a required or preferred skill in 71% of React roles, 68% of Angular roles, 58% of Node.js roles, and 81% of full-stack roles targeting mid-level and above. The trend is directional: three years ago, TypeScript appeared in 30% of these listings. It now appears in the majority. More meaningfully, TypeScript proficiency is one of the clearest signals hiring managers use to separate senior engineers from mid-level ones in frontend and full-stack interviews. A candidate who can explain structural typing, write a generic constraint, or implement a mapped type demonstrates a depth of JavaScript ecosystem understanding that plain JavaScript developers cannot demonstrate equivalently. The salary premium for TypeScript proficiency over JavaScript-only is 20–35% at most Indian product companies — the highest ROI language extension in frontend/backend development.",
    jobRoles: [
      { role: "Frontend Engineer (React/Angular/Next.js)", desc: "TypeScript is the expected language for all professional React, Angular, and Next.js work. Component props, hook return types, API response shapes, event handlers — all typed. Interviewers specifically test TypeScript knowledge: generic components, conditional props, type narrowing." },
      { role: "Backend Engineer (Node.js/NestJS)", desc: "TypeScript Node.js APIs have fully typed request/response objects, service method signatures, database query results (via Prisma), and configuration. NestJS requires TypeScript for its decorator-based architecture. Backend TypeScript developers command a significant premium over JavaScript-only." },
      { role: "Full-Stack TypeScript Developer", desc: "The highest-value profile in 2026's startup market — a developer who writes TypeScript from database schema (Prisma) through API (tRPC/NestJS) to UI (React/Next.js) with end-to-end type safety. tRPC especially makes this profile exceptional: the server's return types are automatically available on the client." },
      { role: "Library/SDK Author", desc: "Every developer tool, npm package, or API SDK that targets TypeScript developers requires excellent TypeScript type definitions. Stripe, Prisma, and tRPC set the bar. Writing a TypeScript library that provides excellent autocompletion and type safety is a highly specialized and valued skill." },
      { role: "Platform/Infrastructure Engineer", desc: "Build tooling, CI/CD scripts, CLIs, code generators, and infrastructure automation written in TypeScript — the TypeScript compiler itself is used as a static analysis tool. Nx, Turborepo, and many build tools are TypeScript projects." },
      { role: "Tech Lead / Senior Engineer", desc: "Defining TypeScript coding standards, establishing type patterns for shared code, reviewing PRs for type correctness, migrating JavaScript codebases to TypeScript, and writing shared utility types that make the entire team's code safer are tech lead responsibilities that require deep TypeScript expertise." },
    ],
    whyCompanies: [
      { reason: "Catches entire categories of production bugs at compile time", detail: "Airbnb's study found TypeScript would have prevented 38% of their production JavaScript bugs. The most common: calling a method on undefined, accessing a property that doesn't exist on a type, passing the wrong argument type to a function. TypeScript makes these impossible — the code won't compile if you make these mistakes. The ROI calculation is simple: developer time finding and fixing runtime bugs vs the cost of TypeScript's learning curve." },
      { reason: "IDE integration transforms developer productivity", detail: "TypeScript's type information powers VS Code's IntelliSense — autocompletion, inline documentation, parameter hints, and go-to-definition. When you type user., VS Code shows every property the user object has, their types, and their documentation. When you pass the wrong type to a function, the error appears immediately in the editor, not minutes later when you run the code. This feedback loop tightens from minutes to milliseconds." },
      { reason: "Large codebase maintainability", detail: "The bigger a JavaScript codebase gets, the harder it is to refactor safely. Rename a function? grep for all usages, hope you didn't miss any. Change a function's parameters? manually trace all call sites. In TypeScript: rename with F2 (VS Code renames every usage), change a function signature and the compiler immediately lists every broken call site. TypeScript scales codebases from one developer to one hundred without losing confidence in refactoring." },
      { reason: "Self-documenting code replaces outdated comments", detail: "function processOrder(orderId, userId, options) {} tells you nothing. function processOrder(orderId: string, userId: string, options: { expedite?: boolean; coupon?: string }): Promise<Order> {} tells you everything — argument types, which are optional, and return type. TypeScript types are documentation that is enforced to stay accurate (unlike JSDoc comments which go stale). This reduces onboarding time for new developers and eliminates 'what does this function return?' questions." },
    ],
    salaryRange: "₹5 LPA – ₹14 LPA (Freshers with TypeScript in portfolio) | ₹14 LPA – ₹35 LPA (Mid-Level TypeScript proficiency, 2–4 years) | ₹35 LPA – ₹75 LPA (Senior with advanced type programming, 5+ years) | ₹50–100 LPA (Remote global, deep TypeScript expertise)",
    careerNote:
      "TypeScript is a force multiplier on every other skill in your stack. React + TypeScript is more valuable than React alone. Node.js + TypeScript is more valuable than Node.js alone. The combination of TypeScript with any major framework puts you in the top 30% of candidates by demonstrated professional standards. Senior engineers who can write advanced TypeScript — utility types, generic constraints, conditional types, discriminated unions — are in the top 5% of frontend/full-stack engineers in India and are aggressively recruited at compensation levels that reflect their rarity. The global remote market for senior TypeScript engineers is among the most accessible to Indian developers: $120,000–$180,000 USD for 4+ years of experience is achievable via platforms like Toptal, Arc.dev, and direct applications to US/European product companies.",
  },

  // ── SECTION 3: HOW IT WORKS ──────────────────────────────────────
  howItWorks: {
    intro:
      "Think of TypeScript as a strict editor at a publishing house who reviews every manuscript (your JavaScript code) before it goes to print. The editor doesn't change what the story says — the published book (compiled JavaScript) is identical to what the author intended. But before printing, the editor checks: are all the characters (variables) who appear in chapter 5 introduced properly in earlier chapters? Does the plot reference an event that was never established? Does a character claim to be a doctor but have no medical knowledge? The editor finds these inconsistencies at review time (compile time) rather than having confused readers discover them (runtime errors). When the editor approves the manuscript, you can be confident the story is internally consistent. When the TypeScript compiler reports zero errors, you can be confident your JavaScript code uses all values according to their declared contracts.",
    vdomSteps: [
      { num: "1", title: "You Write TypeScript Source Code (.ts / .tsx)", text: "You write .ts or .tsx files with type annotations — interfaces, type aliases, generics, and decorators in addition to standard JavaScript. These type annotations are TypeScript syntax — they don't exist in JavaScript and will be stripped at compile time. VS Code reads these files in real-time via the TypeScript Language Server and shows errors, autocompletion, and hover documentation as you type, before you even run the compiler." },
      { num: "2", title: "tsc (TypeScript Compiler) Reads tsconfig.json", text: "When you run tsc (or when your build tool — Vite, Webpack, esbuild — invokes TypeScript), the compiler reads tsconfig.json to find all source files (include/exclude patterns), understand the target JavaScript version (target: 'ES2022'), configure module resolution (moduleResolution: 'bundler'), and determine how strict the type checking should be (strict: true). tsconfig.json is the control center for the entire TypeScript compilation process." },
      { num: "3", title: "Type Checking — The Core Value", text: "The compiler builds a type graph for your entire codebase. For every variable, it infers or reads the declared type. For every function call, it checks that the arguments match the parameter types. For every property access, it verifies the property exists on the type. For every assignment, it confirms the assigned value is compatible with the variable's type. Any mismatch is a type error — reported with the file, line, and a description of the problem. Type errors do not prevent JavaScript output by default (noEmitOnError: true changes this)." },
      { num: "4", title: "Type Erasure — Types Are Stripped", text: "After type checking, the compiler erases all TypeScript-specific syntax. Interface declarations disappear. Type annotations on function parameters disappear. Generic type parameters disappear. Decorators may be transformed (for Angular/NestJS use cases with emitDecoratorMetadata). What remains is plain JavaScript — the same JavaScript you could have written manually, but verified to be type-correct. The compiled output is what runs in the browser or Node.js. TypeScript adds zero runtime overhead." },
      { num: "5", title: "JavaScript Output — What Actually Runs", text: "The output .js files are standard JavaScript that runs in any environment. TypeScript's compilation can target ES5 (old browsers), ES2015–ES2022, or ESNext. Import/export statements can be compiled to CommonJS (require) for Node.js or kept as ESModules for modern bundlers. Declaration files (.d.ts) can be emitted alongside the JavaScript for libraries — they contain only type information and allow TypeScript consumers of your library to get full type safety without your TypeScript source code." },
    ],
    componentCode: `// TYPESCRIPT'S TYPE SYSTEM — from basics to advanced, all connected

// 1. PRIMITIVE TYPES and INFERENCE
// TypeScript infers types — you don't always need to annotate
const name = 'Arjun';            // inferred: string
const age = 28;                  // inferred: number
const isActive = true;           // inferred: boolean
let score: number;               // declared but not assigned — number
let result: string | null = null; // union type — string or null

// 2. INTERFACES — describe object shapes
interface User {
  readonly id: string;           // readonly — cannot be reassigned after creation
  email: string;
  name: string;
  age?: number;                  // optional — may or may not be present
  role: 'user' | 'seller' | 'admin'; // literal union type
  address?: {                    // nested optional object
    street: string;
    city: string;
    pincode: string;
  };
  createdAt: Date;
}

// 3. TYPE ALIASES — for unions, primitives, and complex types
type UserId = string;                        // semantic alias
type Status = 'pending' | 'active' | 'banned'; // string literal union
type Nullable<T> = T | null;                 // generic type alias
type ApiResponse<T> = {                      // generic response wrapper
  success: boolean;
  message: string;
  data: T;
  pagination?: PaginationMeta;
};

// Interface vs Type Alias:
// Interface: extendable (can be merged, can use extends), better for objects
// Type: more flexible (unions, intersections, mapped types, conditional types)
// Rule of thumb: Interface for object shapes, Type for everything else

// 4. FUNCTIONS — typed parameters and return types
function createUser(email: string, name: string, role: User['role'] = 'user'): User {
  return {
    id: crypto.randomUUID(),
    email,
    name,
    role,
    createdAt: new Date(),
  };
}

// Arrow function with explicit return type
const formatPrice = (amount: number, currency: string = 'INR'): string => {
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency }).format(amount);
};

// Function with optional and rest parameters
function log(message: string, level: 'info' | 'warn' | 'error' = 'info', ...tags: string[]): void {
  console[level](\`[\${level.toUpperCase()}] [\${tags.join(', ')}] \${message}\`);
}

// Async function — return type is always Promise<T>
async function fetchUser(id: string): Promise<User> {
  const res = await fetch(\`/api/users/\${id}\`);
  if (!res.ok) throw new Error(\`Failed to fetch user \${id}\`);
  return res.json() as Promise<User>;
}

// 5. GENERICS — parameterize types for reusability
// Without generics: duplicate types for every data type
// With generics: one type that works for any data type

function getFirst<T>(arr: T[]): T | undefined {
  return arr[0];
}
const firstUser = getFirst<User>(users);   // T = User → returns User | undefined
const firstNum  = getFirst([1, 2, 3]);    // T inferred as number → returns number | undefined

// Generic function with constraint — T must have an id property
function findById<T extends { id: string }>(items: T[], id: string): T | undefined {
  return items.find(item => item.id === id);
}

// Generic interface — reusable CRUD repository pattern
interface Repository<T extends { id: string }> {
  findById(id: string): Promise<T | null>;
  findAll(filters?: Partial<T>): Promise<T[]>;
  create(data: Omit<T, 'id' | 'createdAt'>): Promise<T>;
  update(id: string, data: Partial<Omit<T, 'id'>>): Promise<T>;
  delete(id: string): Promise<void>;
}

// 6. TYPE NARROWING — TypeScript narrows types based on runtime checks
function processInput(input: string | number | null): string {
  if (input === null) {
    return 'No input provided';           // TypeScript knows: input is null here
  }
  if (typeof input === 'number') {
    return input.toFixed(2);              // TypeScript knows: input is number here
  }
  return input.toUpperCase();            // TypeScript knows: input is string here
}

// typeof narrowing
// instanceof narrowing
function formatError(error: unknown): string {
  if (error instanceof Error) {
    return error.message;                 // TypeScript knows: error is Error here
  }
  if (typeof error === 'string') {
    return error;
  }
  return 'An unknown error occurred';
}

// Discriminated union narrowing — the most powerful pattern
type Shape =
  | { kind: 'circle'; radius: number }
  | { kind: 'rectangle'; width: number; height: number }
  | { kind: 'triangle'; base: number; height: number };

function getArea(shape: Shape): number {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2;      // TypeScript knows: shape has radius
    case 'rectangle':
      return shape.width * shape.height;       // TypeScript knows: shape has width, height
    case 'triangle':
      return 0.5 * shape.base * shape.height;  // TypeScript knows: shape has base, height
    default:
      // Exhaustiveness check — if a new shape is added without a case, TypeScript errors here
      const _exhaustiveCheck: never = shape;
      throw new Error(\`Unhandled shape: \${_exhaustiveCheck}\`);
  }
}

// 7. UTILITY TYPES — TypeScript's built-in type transformations
interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  stock: number;
  sellerId: string;
  isActive: boolean;
  createdAt: Date;
}

type CreateProductDto = Omit<Product, 'id' | 'createdAt'>;            // Remove fields
type UpdateProductDto = Partial<Omit<Product, 'id' | 'createdAt'>>;   // All optional
type ProductPreview = Pick<Product, 'id' | 'name' | 'price'>;         // Select fields
type ReadonlyProduct = Readonly<Product>;                              // All readonly
type ProductRecord = Record<string, Product>;                          // key-value map

// ReturnType, Parameters, Awaited — extract types from functions
type FetchUserReturn = Awaited<ReturnType<typeof fetchUser>>;  // User
type CreateUserParams = Parameters<typeof createUser>;         // [string, string, User['role']]`,
    renderCycle: [
      "Write .ts/.tsx files with type annotations → TypeScript Language Server shows errors in real-time in editor",
      "Build tool (Vite/tsc/ts-node) invokes TypeScript compiler → reads tsconfig.json for project configuration",
      "Type checker builds type graph → infers types from context → checks all assignments, calls, and access",
      "Type errors reported with file/line/description → must be fixed before confident deployment",
      "Type erasure phase → all TypeScript syntax stripped → plain JavaScript output produced",
      "JavaScript runs in browser/Node.js → zero TypeScript runtime overhead → same performance as plain JS",
    ],
    closingNote:
      "This six-step cycle — write → language server checks → compile → type check → erase → run — is the TypeScript development workflow. The magic is in step 2: the Language Server runs the type checker continuously as you type, giving you compile-time safety as a live feedback loop rather than a batch process at build time. Once you've internalized this workflow — write code, see type errors immediately, fix them before running — you will find returning to untyped JavaScript intolerable. The absence of immediate type feedback will feel like writing in the dark.",
  },

  // ── SECTION 4: CORE CONCEPTS ─────────────────────────────────────
  coreConcepts: [
    {
      id: "type-system-foundations",
      number: "4.1",
      title: "Type System Foundations — Structural Typing and Type Inference",
      icon: "🏛️",
      color: "blue",
      intro:
        "TypeScript's type system has two properties that distinguish it from most statically typed languages: it is structural (types are compatible based on shape, not name) and it has powerful type inference (you rarely need to write explicit type annotations because TypeScript deduces them). Understanding these two properties changes how you think about TypeScript: it's not about satisfying the compiler with declarations, it's about describing the shapes of data that flow through your program and letting TypeScript verify the flow is consistent.",
      code: `// STRUCTURAL TYPING — compatibility is based on shape, not name

interface HasName { name: string; }
interface HasEmail { email: string; }

// These two interfaces are different names but could be compatible
interface User { name: string; email: string; age: number; }
interface Contact { name: string; email: string; phone?: string; }

// Structural compatibility: User is assignable to HasName because User has 'name: string'
function greet(person: HasName): string {
  return \`Hello, \${person.name}!\`;
}
const user: User = { name: 'Arjun', email: 'a@b.com', age: 28 };
greet(user);  // ✅ Works — User has name: string (structural match)
// No need to declare "User implements HasName" like in Java/C#

// Excess property checking — only applies to object literals
const contact: HasName = { name: 'Priya', email: 'p@b.com' }; // ❌ Error on literal
const obj = { name: 'Priya', email: 'p@b.com' };
const contact2: HasName = obj; // ✅ Works — variable assignment is structurally checked

// ── TYPE INFERENCE ────────────────────────────────────────────────

// TypeScript infers from initial value
const count = 0;                  // inferred: number
const message = 'Hello';         // inferred: string
const active = true;             // inferred: boolean
const items = [1, 2, 3];        // inferred: number[]
const pairs = [['a', 1]];        // inferred: (string | number)[][]
const user2 = { name: 'Arjun', age: 28 }; // inferred: { name: string; age: number }

// TypeScript infers function return types
function add(a: number, b: number) {
  return a + b;                  // return type inferred: number
}

function findUser(id: string) {
  if (id === '') return null;    // TypeScript infers: User | null
  return { id, name: 'Arjun' };
}
// Hover in VS Code: "function findUser(id: string): { id: string; name: string; } | null"

// Generic inference — TypeScript infers T from usage
function identity<T>(value: T): T { return value; }
const s = identity('hello');     // T inferred as string, returns string
const n = identity(42);          // T inferred as number, returns number

// ── WIDENING vs NARROWING ─────────────────────────────────────────
// TypeScript widens types unless you hint otherwise

const direction1 = 'left';       // inferred: string (widened)
const direction2 = 'left' as const; // inferred: 'left' (literal — narrowed with as const)

const config = {
  host: 'localhost',
  port: 5432,
} as const;
// config.host: 'localhost' (literal type, not string)
// config.port: 5432 (literal type, not number)
// Useful for: configuration objects, action type maps, route definitions

// ── DECLARATION MERGING — unique to TypeScript interfaces ─────────
interface Window {
  myCustomProperty: string; // Adds to the global Window interface
}

interface User {
  id: string;
  name: string;
}
interface User {
  email: string;    // TypeScript merges: User now has id, name, AND email
}
// Note: Type aliases CANNOT be merged — only interfaces

// ── typeof and keyof — derive types from values ────────────────────
const ROUTES = {
  HOME: '/',
  PRODUCTS: '/products',
  DASHBOARD: '/dashboard',
  ADMIN: '/admin',
} as const;

type Route = typeof ROUTES[keyof typeof ROUTES];
// Route = '/' | '/products' | '/dashboard' | '/admin'
// Automatically stays in sync when ROUTES is updated

// keyof — get union of all keys of a type
type UserKeys = keyof User;
// UserKeys = 'id' | 'name' | 'email' | 'role' | ...

// Access type by key
type UserName = User['name'];     // string
type UserRole = User['role'];     // 'user' | 'seller' | 'admin'
type UserOrUndefined = User[keyof User]; // All possible value types in User

// ── CONST ASSERTIONS — preserve literal types ─────────────────────
const HTTP_METHODS = ['GET', 'POST', 'PUT', 'DELETE'] as const;
// Without as const: string[]
// With as const: readonly ['GET', 'POST', 'PUT', 'DELETE']
type HttpMethod = typeof HTTP_METHODS[number];
// HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'`,
      usage:
        "Use as const for configuration objects and constant arrays to preserve literal types — this makes the derived union types precise rather than widened primitives. Use keyof to derive a union of an object's keys — this is essential for generic functions that accept a key of an object and return the corresponding value type. Rely on TypeScript's inference for local variables; add explicit type annotations primarily for function parameters, return types, and public API surfaces.",
      mistake:
        "Over-annotating by adding explicit type annotations everywhere. const name: string = 'Arjun' is redundant — TypeScript already infers string from the string literal. Over-annotation adds noise without safety benefit. The rule: annotate function parameters (TypeScript cannot infer them), annotate when the inferred type is too wide (let x = null should be let x: User | null = null), and let TypeScript infer everything else. Less annotation, not more, is the TypeScript idiom.",
    },
    {
      id: "generics",
      number: "4.2",
      title: "Generics — Writing Reusable, Type-Safe Code",
      icon: "🔧",
      color: "purple",
      intro:
        "Generics are TypeScript's mechanism for writing code that works with multiple types while maintaining type safety. Without generics, you choose between two bad options: use any (loses type safety) or duplicate code for every type (loses reusability). With generics, you write the logic once and parameterize the type — just as function parameters let you pass different values, generic type parameters let you pass different types. Understanding generics — basic syntax, constraints (extends), default type parameters, and inferring generic types — is the most important step from beginner to intermediate TypeScript.",
      code: `// GENERICS — from basic to advanced patterns

// ── BASIC GENERIC FUNCTION ────────────────────────────────────────
// Without generics: must choose between 'any' or duplicating
function firstOfArray(arr: any[]): any { return arr[0]; }  // ❌ Loses type safety

// With generics: type-safe AND reusable
function first<T>(arr: T[]): T | undefined { return arr[0]; }

const firstUser = first<User>(users);  // T = User → User | undefined
const firstNum  = first([1, 2, 3]);   // T inferred as number → number | undefined
// TypeScript infers T from the argument — you rarely need to specify it explicitly

// ── MULTIPLE TYPE PARAMETERS ──────────────────────────────────────
function pair<K, V>(key: K, value: V): [K, V] {
  return [key, value];
}
const p = pair('id', 42);  // [string, number] — inferred

// Transform/map between types
function mapValues<T, R>(arr: T[], transform: (item: T) => R): R[] {
  return arr.map(transform);
}
const prices = mapValues(products, p => p.price);        // R inferred as number
const names  = mapValues(users, u => u.name.toUpperCase()); // R inferred as string

// ── GENERIC CONSTRAINTS — T must satisfy certain conditions ───────
// extends constrains what types T can be

// T must have an 'id' property — works for User, Product, Order, etc.
function findById<T extends { id: string }>(items: T[], id: string): T | undefined {
  return items.find(item => item.id === id);
}

// T must be a key of U — property access is type-safe
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
const userName = getProperty(user, 'name');  // returns string (User['name'])
const userAge  = getProperty(user, 'age');   // returns number (User['age'])
// getProperty(user, 'nonExistent'); // ❌ Error: 'nonExistent' is not a key of User

// ── GENERIC INTERFACES AND CLASSES ───────────────────────────────
interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    total: number;
    page: number;
    limit: number;
    pages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

// Generic class — typed state container
class Store<T> {
  private state: T;

  constructor(initialState: T) {
    this.state = initialState;
  }

  getState(): T {
    return this.state;
  }

  setState(updater: (prev: T) => T): void {
    this.state = updater(this.state);
  }
}

const userStore = new Store<User | null>(null);
userStore.setState(prev => prev ? { ...prev, name: 'Updated' } : null);

// ── GENERIC DEFAULT PARAMETERS ────────────────────────────────────
interface ApiOptions<TError = Error> {
  retries?: number;
  timeout?: number;
  onError?: (err: TError) => void;
}
// TError defaults to Error if not specified
function createApiClient(options?: ApiOptions) {}           // TError = Error
function createApiClient2(options?: ApiOptions<string>) {}  // TError = string

// ── INFERRING WITHIN GENERICS — the infer keyword ─────────────────
// Extract the resolved type of a Promise
type Awaited2<T> = T extends Promise<infer R> ? R : T;
type ResolvedUser = Awaited2<Promise<User>>;   // User
type ResolvedStr  = Awaited2<string>;           // string (not a Promise)

// Extract return type of a function
type ReturnType2<T> = T extends (...args: any[]) => infer R ? R : never;
type CreateOrderReturn = ReturnType2<typeof createOrder>; // Promise<Order>

// Extract element type of an array
type ElementType<T> = T extends (infer E)[] ? E : never;
type UserElement = ElementType<User[]>;  // User

// ── REAL-WORLD GENERIC PATTERNS ───────────────────────────────────

// API response wrapper — consistent shape for all endpoints
async function apiCall<T>(url: string, options?: RequestInit): Promise<ApiResponse<T>> {
  const res = await fetch(url, options);
  const body = await res.json();
  if (!res.ok) throw new ApiError(body.message, res.status);
  return body as ApiResponse<T>;
}
// Usage:
const { data: users2 } = await apiCall<User[]>('/api/users');
// data is User[] — fully typed, no casting needed

// Generic hook in React
function useLocalStorage<T>(key: string, initial: T): [T, (val: T) => void] {
  const [value, setValue] = useState<T>(() => {
    try {
      const stored = localStorage.getItem(key);
      return stored ? (JSON.parse(stored) as T) : initial;
    } catch { return initial; }
  });
  const setStored = (val: T) => {
    setValue(val);
    localStorage.setItem(key, JSON.stringify(val));
  };
  return [value, setStored];
}
// Usage:
const [cart, setCart] = useLocalStorage<CartItem[]>('cart', []);
// cart is CartItem[], setCart accepts only CartItem[]`,
      usage:
        "Write generic functions when you find yourself duplicating the same logic for different types. The constraint T extends { id: string } is the most commonly needed — it lets you write utilities that work with any identifiable entity. Use infer inside conditional types to extract types from other types. The ApiResponse<T> and PaginatedResponse<T> patterns replace dozens of manually typed response interfaces with a single generic.",
      mistake:
        "Using generic type parameters when specific types would do. function log<T>(value: T): void is not better than function log(value: unknown): void — the generic T is unused in the return type or in any constraint, so it provides no additional type safety. Generics are justified when the type parameter appears in multiple places: the relationship between input type and output type (first<T>(arr: T[]): T), or a constraint (T extends { id: string }). A T that appears only once is better replaced with unknown, any, or a specific type.",
    },
    {
      id: "advanced-types",
      number: "4.3",
      title: "Advanced Types — Utility Types, Conditional Types, and Mapped Types",
      icon: "⚙️",
      color: "orange",
      intro:
        "TypeScript's built-in utility types (Partial, Required, Pick, Omit, Record, Exclude, Extract, ReturnType, Parameters) and the ability to write your own type transformations with mapped types and conditional types are what elevate TypeScript from a 'JavaScript with annotations' tool to a genuine type programming language. Understanding these advanced type features is what separates intermediate TypeScript developers from senior ones — and it is specifically tested in senior-level TypeScript interviews.",
      code: `// BUILT-IN UTILITY TYPES — the TypeScript standard library for types

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  stock: number;
  category: string;
  sellerId: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Partial<T> — all properties optional (for update DTOs)
type UpdateProductDto = Partial<Product>;
// { id?: string; name?: string; price?: number; ... }

// Required<T> — all properties required (reverse of Partial)
type RequiredConfig = Required<Config>; // No optional properties remain

// Pick<T, Keys> — select a subset of properties
type ProductCard = Pick<Product, 'id' | 'name' | 'price' | 'isActive'>;
// { id: string; name: string; price: number; isActive: boolean; }

// Omit<T, Keys> — remove specific properties
type CreateProductDto = Omit<Product, 'id' | 'createdAt' | 'updatedAt'>;
// Product without id, createdAt, updatedAt

// Record<Keys, Type> — map type over a set of keys
type CategoryMap = Record<string, Product[]>;
// { [category: string]: Product[] }

type StatusIcon = Record<'pending' | 'active' | 'banned', string>;
// { pending: string; active: string; banned: string; }

// Exclude<T, U> — remove types from a union
type NonNullableValue = Exclude<string | null | undefined, null | undefined>;
// string

// Extract<T, U> — keep only types assignable to U
type StringOrNumber = Extract<string | number | boolean, string | number>;
// string | number

// NonNullable<T> — removes null and undefined
type DefinitelyUser = NonNullable<User | null | undefined>;
// User

// ReturnType<T> — extract the return type of a function type
type FetchResult = ReturnType<typeof fetchUser>;
// Promise<User>

// Awaited<T> — unwrap Promise types (TypeScript 4.5+)
type ResolvedUser = Awaited<ReturnType<typeof fetchUser>>;
// User

// Parameters<T> — extract parameter types as tuple
type CreateUserParams = Parameters<typeof createUser>;
// [email: string, name: string, role?: 'user' | 'seller' | 'admin']

// ── MAPPED TYPES — transform every property in a type ─────────────
// Syntax: { [K in keyof T]: TransformedType }

// Make all properties readonly (same as Readonly<T>)
type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K];
};

// Make all properties nullable
type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};

// Optional keys with different value type (add loading states)
type LoadableState<T> = {
  [K in keyof T]: { value: T[K]; isLoading: boolean; error: string | null };
};

// Filter properties by value type — keep only string properties
type StringProperties<T> = {
  [K in keyof T as T[K] extends string ? K : never]: T[K];
};
type ProductStringProps = StringProperties<Product>;
// { id: string; name: string; description: string; category: string; sellerId: string; }

// Rename properties with template literal types
type Getters<T> = {
  [K in keyof T as \`get\${Capitalize<string & K>}\`]: () => T[K];
};
type UserGetters = Getters<Pick<User, 'name' | 'email'>>;
// { getName: () => string; getEmail: () => string; }

// ── CONDITIONAL TYPES — type-level if-else ────────────────────────
// T extends U ? TrueType : FalseType

// IsArray — does this type look like an array?
type IsArray<T> = T extends any[] ? true : false;
type A = IsArray<string[]>;  // true
type B = IsArray<string>;    // false

// UnwrapArray — get the element type of an array (or T if not an array)
type UnwrapArray<T> = T extends (infer E)[] ? E : T;
type C = UnwrapArray<User[]>;   // User
type D = UnwrapArray<string>;   // string

// DeepPartial — recursively make all nested properties optional
type DeepPartial<T> = T extends object
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : T;

type PartialConfig = DeepPartial<{
  database: { host: string; port: number; ssl: { enabled: boolean; cert: string } };
  redis: { url: string; ttl: number };
}>;
// All nested properties are optional

// ── DISCRIMINATED UNIONS — the most important advanced pattern ─────
type ApiState<T> =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: T; timestamp: Date }
  | { status: 'error'; error: string; code: number };

function renderProductState(state: ApiState<Product[]>): string {
  switch (state.status) {
    case 'idle':    return 'Ready to load';
    case 'loading': return 'Loading products...';
    case 'success': return \`Loaded \${state.data.length} products\`; // state.data is Product[]
    case 'error':   return \`Error \${state.code}: \${state.error}\`;  // state.error is string
    // TypeScript would error here if we added a new status without a case
  }
}

// ── TEMPLATE LITERAL TYPES — string manipulation at the type level ─
type EventName = 'click' | 'focus' | 'blur' | 'change';
type HandlerName = \`on\${Capitalize<EventName>}\`;
// 'onClick' | 'onFocus' | 'onBlur' | 'onChange'

type ApiRoute = '/users' | '/products' | '/orders';
type VersionedRoute = \`/api/v1\${ApiRoute}\`;
// '/api/v1/users' | '/api/v1/products' | '/api/v1/orders'

// Enforce naming conventions at the type level
type CSSProperty = 'color' | 'background' | 'border';
type CSSVar = \`--\${string}\`;
type CSSValue = string | number | CSSVar;

// ── SATISFIES OPERATOR (TypeScript 4.9+) ─────────────────────────
// Validates an expression against a type while preserving the inferred type
const palette = {
  red:   [255, 0, 0],
  green: '#00ff00',  // string, not number[]
  blue:  [0, 0, 255],
} satisfies Record<string, string | number[]>;
// TypeScript validates all values are string | number[]
// But palette.red is still number[] (not string | number[])
// and palette.green is still string (not string | number[])`,
      usage:
        "Omit and Pick are the most commonly used utility types in day-to-day TypeScript: Omit<Product, 'id' | 'createdAt'> for create DTOs, Pick<Product, 'id' | 'name'> for display types. Discriminated unions (with a 'kind' or 'status' literal field) are the correct model for any state that has multiple mutually exclusive shapes — API request states, action types in reducers, event payloads. The satisfies operator (TypeScript 4.9+) is the modern replacement for the pattern of declaring a const and then asserting its type.",
      mistake:
        "Using any to escape type errors instead of using the correct type transformation. The most common escape: type UpdateDto = any instead of type UpdateDto = Partial<Omit<Product, 'id'>>. any disables all type checking for that value — it propagates through the codebase, infecting every function that receives it. unknown is the safe version of any: it requires you to narrow the type before using it. If you find yourself writing as any, stop and find the correct type transformation instead.",
    },
    {
      id: "typescript-classes",
      number: "4.4",
      title: "Classes, Decorators, and Object-Oriented TypeScript",
      icon: "🏗️",
      color: "emerald",
      intro:
        "TypeScript classes extend JavaScript classes with access modifiers (public, private, protected), readonly properties, abstract classes, and decorators. Classes in TypeScript serve a different purpose than in languages like Java: they are primarily useful when you need to encapsulate state and behavior together, when you want to use inheritance patterns, or when a framework requires them (NestJS uses class-based services, Angular uses class-based components). Understanding TypeScript's class features is essential for working with Angular, NestJS, and any codebase that uses the class-based OOP pattern.",
      code: `// TYPESCRIPT CLASSES — complete OOP with type safety

// ── ACCESS MODIFIERS ─────────────────────────────────────────────
class BankAccount {
  public readonly id: string;           // Public + readonly — accessible, immutable after construction
  public owner: string;                 // Public — accessible from anywhere
  private balance: number;              // Private — only accessible within BankAccount class
  protected transactionLog: string[];   // Protected — accessible in BankAccount and subclasses

  constructor(owner: string, initialBalance: number = 0) {
    this.id = crypto.randomUUID();
    this.owner = owner;
    this.balance = initialBalance;
    this.transactionLog = [];
  }

  // Shorthand constructor — TypeScript unique syntax
  // These params become class properties automatically
  // constructor(
  //   public readonly id: string,
  //   public owner: string,
  //   private balance: number,
  // ) {}

  deposit(amount: number): void {
    if (amount <= 0) throw new Error('Deposit amount must be positive');
    this.balance += amount;
    this.transactionLog.push(\`Deposit: +₹\${amount}\`);
  }

  withdraw(amount: number): void {
    if (amount > this.balance) throw new Error('Insufficient funds');
    this.balance -= amount;
    this.transactionLog.push(\`Withdrawal: -₹\${amount}\`);
  }

  getBalance(): number {
    return this.balance;  // Controlled read access to private field
  }
}

// ── ABSTRACT CLASSES — cannot be instantiated, must be extended ───
abstract class BaseRepository<T extends { id: string }> {
  protected items: Map<string, T> = new Map();

  // Concrete method — shared implementation
  findById(id: string): T | undefined {
    return this.items.get(id);
  }

  getAll(): T[] {
    return Array.from(this.items.values());
  }

  // Abstract method — subclasses MUST implement this
  abstract create(data: Omit<T, 'id' | 'createdAt'>): T;
  abstract validate(data: unknown): data is T;
}

class UserRepository extends BaseRepository<User> {
  create(data: Omit<User, 'id' | 'createdAt'>): User {
    const user: User = { ...data, id: crypto.randomUUID(), createdAt: new Date() };
    this.items.set(user.id, user);
    return user;
  }

  validate(data: unknown): data is User {
    return (
      typeof data === 'object' && data !== null &&
      'id' in data && typeof (data as any).id === 'string' &&
      'email' in data && typeof (data as any).email === 'string'
    );
  }

  // UserRepository-specific method
  findByEmail(email: string): User | undefined {
    return this.getAll().find(u => u.email === email);
  }
}

// ── INTERFACES WITH CLASSES — implementing contracts ─────────────
interface Serializable<T> {
  serialize(): string;
  deserialize(data: string): T;
}

interface Validatable {
  validate(): { isValid: boolean; errors: string[] };
}

// A class can implement multiple interfaces
class OrderModel implements Serializable<OrderModel>, Validatable {
  constructor(
    public readonly id: string,
    public userId: string,
    public items: CartItem[],
    public status: 'pending' | 'confirmed' | 'shipped' | 'delivered',
    public total: number,
  ) {}

  serialize(): string {
    return JSON.stringify(this);
  }

  deserialize(data: string): OrderModel {
    const parsed = JSON.parse(data);
    return new OrderModel(parsed.id, parsed.userId, parsed.items, parsed.status, parsed.total);
  }

  validate(): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];
    if (!this.userId) errors.push('userId is required');
    if (this.items.length === 0) errors.push('Order must have at least one item');
    if (this.total <= 0) errors.push('Order total must be positive');
    return { isValid: errors.length === 0, errors };
  }
}

// ── DECORATORS — metadata-driven programming (NestJS / Angular) ──
// Requires: "experimentalDecorators": true in tsconfig.json
// TypeScript 5.0+ has Stage 3 decorators without the experimental flag

// Class decorator — adds metadata to the class
function Entity(tableName: string) {
  return function <T extends new (...args: any[]) => {}>(constructor: T) {
    Reflect.defineMetadata('tableName', tableName, constructor);
    return constructor;
  };
}

// Method decorator — measures execution time
function MeasureTime() {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const original = descriptor.value;
    descriptor.value = async function (...args: any[]) {
      const start = performance.now();
      const result = await original.apply(this, args);
      const duration = performance.now() - start;
      console.log(\`\${propertyKey} took \${duration.toFixed(2)}ms\`);
      return result;
    };
    return descriptor;
  };
}

// Parameter decorator — NestJS uses this pattern for @Body(), @Param()
function Body() {
  return function (target: Object, key: string | symbol, index: number) {
    Reflect.defineMetadata('bodyParam', index, target, key);
  };
}

// NestJS-style service using decorators
@Injectable()  // Class decorator — registers this as a NestJS provider
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly repo: Repository<Product>,
  ) {}

  @MeasureTime()  // Method decorator
  async findAll(): Promise<Product[]> {
    return this.repo.find({ where: { isActive: true } });
  }
}

// ── GETTER AND SETTER PROPERTIES ─────────────────────────────────
class Circle {
  private _radius: number;

  constructor(radius: number) {
    this._radius = radius;
  }

  get radius(): number {
    return this._radius;
  }

  set radius(value: number) {
    if (value < 0) throw new Error('Radius must be non-negative');
    this._radius = value;
  }

  get area(): number {
    return Math.PI * this._radius ** 2;
  }

  get circumference(): number {
    return 2 * Math.PI * this._radius;
  }
}

const circle = new Circle(5);
console.log(circle.area);        // 78.54 — computed property
circle.radius = 10;              // Uses setter with validation
circle.radius = -1;              // ❌ Throws Error`,
      usage:
        "Use classes when you need object-oriented encapsulation (private state with controlled access), when implementing a design pattern that naturally maps to class hierarchies (Repository, Strategy, Observer), or when a framework requires it (NestJS services, Angular components). Use abstract classes to define contracts that force subclasses to implement specific methods while sharing common implementation. For purely functional code, interfaces and type aliases are almost always the better choice over classes in TypeScript.",
      mistake:
        "Using classes everywhere because that's what other object-oriented languages taught you. TypeScript's most idiomatic code is often functional: plain objects, function composition, and types rather than class hierarchies. A ProductService class with a single create method is better expressed as a function createProduct(data: CreateProductDto): Promise<Product>. Reserve classes for when you genuinely need state encapsulation, inheritance, or framework integration.",
    },
    {
      id: "typescript-react",
      number: "4.5",
      title: "TypeScript with React — Typing Components, Hooks, and Events",
      icon: "⚛️",
      color: "blue",
      intro:
        "TypeScript and React are a natural pair: React's component model (props in, UI out) maps perfectly to TypeScript's function type system (typed parameters in, typed return value out). Typing React correctly — component props, event handlers, hooks, context, and refs — is the daily work of a professional React developer. This section covers the patterns that appear in every React + TypeScript codebase and every React TypeScript interview.",
      code: `// REACT + TYPESCRIPT — complete reference for professional React code

import React, {
  useState, useEffect, useCallback, useMemo, useRef,
  useContext, createContext, forwardRef, ComponentProps,
  ReactNode, ReactElement, CSSProperties, ChangeEvent,
  MouseEvent, FormEvent, KeyboardEvent, FC,
} from 'react';

// ── COMPONENT PROPS ───────────────────────────────────────────────
// Never use React.FC — it adds implicit children and is deprecated
// Never use JSX.Element — ReactNode is more flexible

interface ButtonProps {
  // Content
  children: ReactNode;                    // any renderable content
  // Behavior
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  isLoading?: boolean;
  // Appearance
  variant?: 'primary' | 'secondary' | 'destructive' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  // Extension
  className?: string;
}

// Function declaration — better stack traces than arrow function
export function Button({
  children,
  onClick,
  type = 'button',
  disabled = false,
  isLoading = false,
  variant = 'primary',
  size = 'md',
  className,
}: ButtonProps): ReactElement {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={\`btn btn--\${variant} btn--\${size} \${className ?? ''}\`}>
      {isLoading ? <Spinner /> : children}
    </button>
  );
}

// ── EXTENDING NATIVE ELEMENT PROPS ───────────────────────────────
// ComponentProps<'input'> includes all native <input> HTML attributes
interface InputProps extends ComponentProps<'input'> {
  label: string;
  error?: string;
  helperText?: string;
}

// forwardRef — necessary for ref forwarding, typed explicitly
export const Input = forwardRef<HTMLInputElement, InputProps>(
  function Input({ label, error, helperText, className, ...nativeProps }, ref) {
    const id = React.useId();
    return (
      <div className="field">
        <label htmlFor={id}>{label}</label>
        <input
          id={id}
          ref={ref}
          className={\`input \${error ? 'input--error' : ''} \${className ?? ''}\`}
          aria-describedby={error ? \`\${id}-error\` : helperText ? \`\${id}-helper\` : undefined}
          aria-invalid={!!error}
          {...nativeProps}
        />
        {error    && <p id={\`\${id}-error\`}   role="alert">{error}</p>}
        {helperText && !error && <p id={\`\${id}-helper\`}>{helperText}</p>}
      </div>
    );
  }
);

// ── TYPED EVENT HANDLERS ──────────────────────────────────────────
// Never use 'event: any' for event handlers

function FormExample() {
  const [text, setText] = useState('');
  const [selected, setSelected] = useState('');
  const [files, setFiles] = useState<FileList | null>(null);

  // ChangeEvent<T> — for input, textarea, select
  const handleTextChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setText(e.target.value);
  };

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    setSelected(e.target.value);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setFiles(e.target.files);
  };

  // FormEvent<T> — for form onSubmit
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    // process formData
  };

  // MouseEvent<T> — for click handlers on specific elements
  const handleButtonClick = (e: MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
  };

  // KeyboardEvent<T> — for key press
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter' && !e.shiftKey) {
      handleSubmit(e as unknown as FormEvent<HTMLFormElement>);
    }
  };
}

// ── TYPED HOOKS ───────────────────────────────────────────────────
// useState — explicit type when initial value doesn't reveal the type
const [user, setUser] = useState<User | null>(null);
const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
const [products, setProducts] = useState<Product[]>([]);

// useRef — explicit type for DOM refs
const inputRef = useRef<HTMLInputElement>(null);
const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

// Custom hook — always specify return type
interface UseAsyncState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

function useAsync<T>(fn: () => Promise<T>): UseAsyncState<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const execute = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await fn();
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  }, [fn]);

  useEffect(() => { execute(); }, [execute]);

  return { data, loading, error, refetch: execute };
}

// ── TYPED CONTEXT ─────────────────────────────────────────────────
interface AuthContextValue {
  user: User | null;
  isAuthenticated: boolean;
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => Promise<void>;
  isLoading: boolean;
}

// Never initialize context with null unless you handle it at every usage
const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const login = useCallback(async (credentials: LoginCredentials) => {
    const loggedUser = await authService.login(credentials);
    setUser(loggedUser);
  }, []);

  const logout = useCallback(async () => {
    await authService.logout();
    setUser(null);
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({ user, isAuthenticated: !!user, login, logout, isLoading }),
    [user, login, logout, isLoading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Custom hook with null guard
export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}

// ── GENERIC COMPONENTS ────────────────────────────────────────────
interface SelectProps<T extends { id: string; label: string }> {
  options: T[];
  value: T | null;
  onChange: (option: T) => void;
  renderOption?: (option: T) => ReactNode;
  placeholder?: string;
  disabled?: boolean;
}

// Generic component — TypeScript infers T from the options prop
function Select<T extends { id: string; label: string }>({
  options, value, onChange, renderOption, placeholder, disabled,
}: SelectProps<T>): ReactElement {
  return (
    <select
      value={value?.id ?? ''}
      disabled={disabled}
      onChange={e => {
        const selected = options.find(o => o.id === e.target.value);
        if (selected) onChange(selected);
      }}>
      {placeholder && <option value="">{placeholder}</option>}
      {options.map(option => (
        <option key={option.id} value={option.id}>
          {renderOption ? renderOption(option) : option.label}
        </option>
      ))}
    </select>
  );
}`,
      usage:
        "Use ComponentProps<'element'> to extend native HTML element props — this gives your wrapper component all the native attributes for free without manual listing. Use the explicit event types (ChangeEvent<HTMLInputElement>, FormEvent<HTMLFormElement>) instead of event: any — the generic parameter is the element type. Always specify the return type of custom hooks. The generic component pattern (Select<T extends { id: string }>) lets one component work for any data type with type safety.",
      mistake:
        "Using React.FC<Props> (React.FunctionComponent) to type function components. React.FC has three problems: it adds implicit children prop (wrong in React 18+ where children must be explicit), it doesn't narrow the return type well, and it makes the component signature harder to read. Just use a regular function declaration with explicit Props interface — it's cleaner, more readable, and more correct.",
    },
    {
      id: "typescript-node",
      number: "4.6",
      title: "TypeScript with Node.js — Typing APIs, Middleware, and Services",
      icon: "⚙️",
      color: "teal",
      intro:
        "TypeScript in Node.js transforms API development from 'hope the data looks right' to 'the compiler guarantees the data shape'. Typing Express request/response objects, service method signatures, database query results with Prisma, and configuration objects with Zod + TypeScript creates a fully type-safe API where every data transformation is verified at compile time. This section covers the patterns used in production Node.js + TypeScript codebases at Indian product companies.",
      code: `// TYPESCRIPT + NODE.JS — production patterns

// ── EXTENDING EXPRESS TYPES ───────────────────────────────────────
// express.d.ts (in src/@types/ or as a module augmentation)
declare global {
  namespace Express {
    interface Request {
      user?: JwtPayload;        // Attached by authenticate middleware
      requestId?: string;       // Attached by requestId middleware
      startTime?: number;       // Attached by timing middleware
    }
  }
}

// Request with typed params, query, and body
import { Request, Response, NextFunction, RequestHandler } from 'express';

interface GetProductParams { id: string; }
interface GetProductsQuery { category?: string; page?: string; limit?: string; sort?: string; }
interface CreateProductBody {
  name: string; price: number; category: string; description: string; stock: number;
}

// Typed route handler — Request<Params, ResBody, ReqBody, Query>
const getProduct: RequestHandler<GetProductParams, ApiResponse<Product>, never, never> = async (
  req, res, next
) => {
  try {
    const product = await productService.findById(req.params.id);
    res.json({ success: true, message: 'Product fetched', data: product });
  } catch (error) { next(error); }
};

// ── ZOD + TYPESCRIPT — runtime validation with compile-time types ─
import { z } from 'zod';

// Define the schema once — TypeScript type is derived automatically
const createProductSchema = z.object({
  name: z.string().min(2).max(200),
  price: z.number().positive().max(10_000_000),
  category: z.enum(['electronics', 'clothing', 'home', 'books', 'sports']),
  description: z.string().min(10).max(2000),
  stock: z.number().int().nonnegative(),
  imageUrl: z.string().url().optional(),
});

// Type is inferred from the schema — single source of truth
type CreateProductDto = z.infer<typeof createProductSchema>;
// { name: string; price: number; category: 'electronics' | 'clothing' | ... }

// Zod validation middleware — typed output
export function validate<T extends z.ZodType>(schema: T) {
  return (req: Request, res: Response, next: NextFunction): void => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: result.error.flatten().fieldErrors,
      });
      return;
    }
    req.body = result.data as z.infer<T>;  // Typed parsed data
    next();
  };
}

// ── TYPED SERVICE LAYER ───────────────────────────────────────────
interface ProductFilters {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  search?: string;
  page: number;
  limit: number;
  sort: 'newest' | 'oldest' | 'price-asc' | 'price-desc';
}

interface ProductListResult {
  products: Product[];
  total: number;
  page: number;
  pages: number;
}

class ProductService {
  // Prisma auto-generates types — findMany return type is Product[]
  async getAll(filters: ProductFilters): Promise<ProductListResult> {
    const where: Prisma.ProductWhereInput = {
      isActive: true,
      ...(filters.category && { category: filters.category as Category }),
      ...(filters.search && { name: { contains: filters.search, mode: 'insensitive' } }),
      ...((filters.minPrice || filters.maxPrice) && {
        price: {
          ...(filters.minPrice && { gte: new Prisma.Decimal(filters.minPrice) }),
          ...(filters.maxPrice && { lte: new Prisma.Decimal(filters.maxPrice) }),
        },
      }),
    };

    const orderBy: Prisma.ProductOrderByWithRelationInput =
      filters.sort === 'price-asc'  ? { price: 'asc' } :
      filters.sort === 'price-desc' ? { price: 'desc' } :
      filters.sort === 'oldest'     ? { createdAt: 'asc' } :
      { createdAt: 'desc' };

    const [products, total] = await prisma.$transaction([
      prisma.product.findMany({ where, orderBy, skip: (filters.page - 1) * filters.limit, take: filters.limit }),
      prisma.product.count({ where }),
    ]);

    return { products, total, page: filters.page, pages: Math.ceil(total / filters.limit) };
  }

  async getById(id: string): Promise<Product> {
    const product = await prisma.product.findUnique({ where: { id } });
    if (!product) throw new AppError('Product not found', 404);
    return product;  // TypeScript knows this is Product (not Product | null) after the null check
  }
}

// ── ENVIRONMENT VARIABLES — typed and validated ───────────────────
const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  PORT: z.coerce.number().default(5000),
  DATABASE_URL: z.string().url(),
  JWT_SECRET: z.string().min(32, 'JWT_SECRET must be at least 32 characters'),
  JWT_REFRESH_SECRET: z.string().min(32),
  REDIS_URL: z.string().url().optional(),
  RAZORPAY_KEY_ID: z.string().optional(),
  RAZORPAY_KEY_SECRET: z.string().optional(),
  CLOUDINARY_CLOUD_NAME: z.string().optional(),
  FRONTEND_URL: z.string().url().default('http://localhost:3000'),
});

type Env = z.infer<typeof envSchema>;

const parsed = envSchema.safeParse(process.env);
if (!parsed.success) {
  console.error('❌ Invalid environment variables:', parsed.error.flatten().fieldErrors);
  process.exit(1);
}

export const config: Env = parsed.data;
// config.PORT is number (not string) — coerce.number() handled it
// config.JWT_SECRET is string — TypeScript knows it exists

// ── ERROR HANDLING WITH DISCRIMINATED UNIONS ──────────────────────
type ServiceResult<T> =
  | { success: true; data: T }
  | { success: false; error: string; code: number };

class UserService {
  async findByEmail(email: string): Promise<ServiceResult<User>> {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return { success: false, error: 'User not found', code: 404 };
    return { success: true, data: user };
  }
}

// In the controller:
const result = await userService.findByEmail(req.body.email);
if (!result.success) {
  // TypeScript knows: result.error is string, result.code is number
  return res.status(result.code).json({ success: false, message: result.error });
}
// TypeScript knows: result.data is User
res.json({ success: true, data: result.data });`,
      usage:
        "Use Zod for runtime validation and derive TypeScript types from Zod schemas with z.infer<typeof schema>. This single-source-of-truth approach eliminates the drift between your validation logic and your TypeScript types. Validate all environment variables at startup with Zod — the typed config object replaces string-typed process.env access throughout your codebase. The ServiceResult<T> discriminated union pattern replaces thrown errors with typed return values that force callers to handle both success and failure cases.",
      mistake:
        "Casting API request body to a type without runtime validation: req.body as CreateProductDto. TypeScript's as assertion is a compile-time override — it doesn't validate the actual runtime value. A user who sends { price: 'not a number' } will get past the TypeScript compiler with an as cast. Always use Zod (or class-validator) to validate the shape of data that enters your system from the outside (HTTP requests, environment variables, external API responses).",
    },
    {
      id: "typescript-config",
      number: "4.7",
      title: "tsconfig.json — Mastering TypeScript Configuration",
      icon: "⚙️",
      color: "yellow",
      intro:
        "tsconfig.json is the control panel for the entire TypeScript compilation process. Understanding what each compiler option does — especially the strictness options — is the difference between TypeScript that catches all your bugs and TypeScript that lulls you into a false sense of safety. The strict: true flag enables five sub-options that together prevent the most common categories of TypeScript bugs. Every professional TypeScript project should use strict: true, and every developer should understand what it enables.",
      code: `// tsconfig.json — complete reference for modern TypeScript projects

// ── BASE CONFIGURATION FOR A NODE.JS BACKEND ─────────────────────
{
  "compilerOptions": {
    // TARGET OUTPUT
    "target": "ES2022",              // Output JS version — ES2022 for modern Node.js
    "module": "NodeNext",            // Module system — NodeNext for Node.js ESM support
    "moduleResolution": "NodeNext",  // How imports are resolved — must match "module"
    "lib": ["ES2022"],               // Type definitions to include
    "outDir": "./dist",              // Where compiled JS goes
    "rootDir": "./src",              // Where TypeScript source lives

    // STRICTNESS — always enable all of these
    "strict": true,                  // Enables ALL strict options below:
    // "strictNullChecks": true,     // null/undefined are separate from all types
    // "strictFunctionTypes": true,  // Function parameter types checked contravariantly
    // "strictBindCallApply": true,  // bind/call/apply are type-checked
    // "strictPropertyInitialization": true, // Class properties must be initialized
    // "noImplicitAny": true,        // Error when TypeScript infers 'any' type
    // "noImplicitThis": true,       // Error when 'this' has implicit 'any' type
    // "useUnknownInCatchVariables": true, // catch(e) — e is unknown, not any (TS 4.4+)

    // ADDITIONAL STRICTNESS — highly recommended
    "noUncheckedIndexedAccess": true,  // array[0] is T | undefined, not T
    "noImplicitReturns": true,         // All code paths in a function must return
    "noFallthroughCasesInSwitch": true, // switch cases must have break/return/throw
    "exactOptionalPropertyTypes": true, // { a?: string } means string, not string | undefined
    "noPropertyAccessFromIndexSignature": true, // Require bracket notation for index signatures

    // EMIT OPTIONS
    "declaration": true,             // Generate .d.ts files (for libraries)
    "declarationMap": true,          // Generate .d.ts.map files (for library debugging)
    "sourceMap": true,               // Generate .map files for debugging
    "removeComments": false,         // Keep comments in output (true for production)
    "noEmitOnError": true,           // Don't emit JS if there are type errors

    // MODULE RESOLUTION
    "baseUrl": ".",                  // Base for non-relative imports
    "paths": {                       // Path aliases (use with tsconfig-paths or bundler)
      "@/*": ["./src/*"],
      "@models/*": ["./src/models/*"],
      "@services/*": ["./src/services/*"]
    },
    "resolveJsonModule": true,       // Import .json files as typed modules
    "esModuleInterop": true,         // Better compatibility with CommonJS modules
    "allowSyntheticDefaultImports": true, // import X from 'module' for CommonJS

    // DIAGNOSTICS
    "skipLibCheck": true,            // Skip type checking of .d.ts files (faster builds)
    "forceConsistentCasingInFileNames": true  // Enforce consistent file name casing

    // DECORATORS (for NestJS / Angular)
    // "experimentalDecorators": true,
    // "emitDecoratorMetadata": true,
  },
  "include": ["src/**/*"],           // Files to compile
  "exclude": ["node_modules", "dist", "**/*.test.ts", "**/*.spec.ts"]
}

// ── TSCONFIG FOR NEXT.JS / REACT ─────────────────────────────────
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["dom", "dom.iterable", "ES2022"],  // DOM types for browser environment
    "jsx": "preserve",               // Next.js handles JSX transform
    "module": "ESNext",
    "moduleResolution": "bundler",   // Modern bundler resolution (Vite, Next.js)
    "allowJs": true,
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "baseUrl": ".",
    "paths": { "@/*": ["./*"] },
    "plugins": [{ "name": "next" }],  // Next.js TypeScript plugin
    "incremental": true,
    "skipLibCheck": true
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}

// ── WHAT strict: true ENABLES — explained with examples ───────────

// 1. strictNullChecks — null and undefined are not assignable to other types
let name1: string = null;      // ❌ Error: Type 'null' is not assignable to type 'string'
let name2: string | null = null; // ✅ — explicit null union

function getUser1(): User {
  return null;  // ❌ Error
}
function getUser2(): User | null {
  return null;  // ✅
}

// 2. noImplicitAny — every variable must have a determinable type
function process(data) {         // ❌ Error: Parameter 'data' implicitly has an 'any' type
  return data.name;
}
function process2(data: unknown) { // ✅
  if (typeof data === 'object' && data && 'name' in data) {
    return (data as { name: string }).name;
  }
}

// 3. noUncheckedIndexedAccess — array and object index access returns T | undefined
const arr = [1, 2, 3];
const first1 = arr[0];          // Without flag: number  | With flag: number | undefined
const first2: number = arr[0]!; // ✅ Non-null assertion when you KNOW it exists

// 4. exactOptionalPropertyTypes — optional props are exactly T, not T | undefined
interface Config {
  theme?: 'light' | 'dark';     // With exactOptionalPropertyTypes:
}
const config2: Config = { theme: undefined }; // ❌ Error — undefined ≠ 'light' | 'dark'
const config3: Config = {};                  // ✅ — not set is different from set to undefined

// ── PATH ALIASES — clean imports ─────────────────────────────────
// Without aliases:
import { UserService } from '../../../../services/user.service';
import { ApiError } from '../../../utils/api-error';

// With @/ alias:
import { UserService } from '@/services/user.service';
import { ApiError } from '@/utils/api-error';

// For Node.js: use tsconfig-paths package or ts-node -r tsconfig-paths/register
// For Vite: resolve.alias in vite.config.ts
// For Next.js: configured automatically from tsconfig.json paths`,
      usage:
        "Always start with strict: true. If you're adding TypeScript to an existing JavaScript codebase, enable it in a new tsconfig.strict.json and progressively migrate files. Use noUncheckedIndexedAccess: true — it's not part of strict: true but catches a significant class of off-by-one and array access bugs. Use path aliases (@/) from day one to avoid ../../../../ import paths that break when you restructure folders.",
      mistake:
        "Starting with strict: false or // @ts-nocheck to 'just get it working' and planning to enable strictness later. In practice, 'later' never comes — the codebase grows, the non-strict patterns multiply, and enabling strict becomes a days-long migration. Start strict from day one on every new project. On existing codebases, enable strictness incrementally using // @ts-ignore on specific lines (not // @ts-nocheck on whole files) and track the count down to zero.",
    },
    {
      id: "typescript-patterns",
      number: "4.8",
      title: "TypeScript Design Patterns and Best Practices",
      icon: "🎯",
      color: "red",
      intro:
        "Beyond type annotations and generic functions, TypeScript enables specific design patterns that provide safety and developer experience benefits impossible in plain JavaScript. The builder pattern with TypeScript fluent interfaces, the factory function pattern, discriminated union state machines, and the module augmentation pattern are TypeScript-native patterns used in production codebases at companies from Razorpay to Stripe. Understanding these patterns signals advanced TypeScript proficiency.",
      code: `// TYPESCRIPT DESIGN PATTERNS — production-grade patterns

// ── 1. BUILDER PATTERN — fluent API with type safety ─────────────
class QueryBuilder<T extends Record<string, unknown>> {
  private conditions: Partial<T> = {};
  private _limit = 20;
  private _offset = 0;
  private _orderBy: Partial<Record<keyof T, 'asc' | 'desc'>> = {};

  where<K extends keyof T>(key: K, value: T[K]): this {
    this.conditions[key] = value;
    return this;  // Returns 'this' — enables method chaining with correct type
  }

  limit(n: number): this {
    this._limit = n;
    return this;
  }

  offset(n: number): this {
    this._offset = n;
    return this;
  }

  orderBy<K extends keyof T>(key: K, direction: 'asc' | 'desc' = 'asc'): this {
    this._orderBy[key] = direction;
    return this;
  }

  build(): { conditions: Partial<T>; limit: number; offset: number; orderBy: Partial<Record<keyof T, 'asc' | 'desc'>> } {
    return { conditions: this.conditions, limit: this._limit, offset: this._offset, orderBy: this._orderBy };
  }
}

// Usage — fully type-checked at every step
const query = new QueryBuilder<Product>()
  .where('category', 'electronics')  // ✅ 'electronics' satisfies Product['category']
  .where('isActive', true)            // ✅ true satisfies Product['isActive']
  .where('price', 'cheap')            // ❌ Error: 'cheap' is not assignable to number
  .limit(20)
  .orderBy('price', 'asc')
  .build();

// ── 2. FACTORY FUNCTIONS — type-safe object creation ─────────────
// Better than classes for simple value objects with validation

type OrderStatus = 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled';

interface Order {
  readonly id: string;
  readonly userId: string;
  readonly items: ReadonlyArray<CartItem>;
  readonly status: OrderStatus;
  readonly total: number;
  readonly createdAt: Date;
}

// Factory with validation and readonly output
function createOrder(
  userId: string,
  items: CartItem[],
): Order {
  if (items.length === 0) throw new Error('Order must have at least one item');
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return Object.freeze({
    id: crypto.randomUUID(),
    userId,
    items: Object.freeze([...items]),
    status: 'pending' as const,
    total,
    createdAt: new Date(),
  });
}

// ── 3. TYPE GUARD FUNCTIONS — custom type narrowing ──────────────
// is syntax — function that narrows the type of its parameter
function isUser(value: unknown): value is User {
  return (
    typeof value === 'object' &&
    value !== null &&
    'id' in value &&
    'email' in value &&
    'name' in value &&
    typeof (value as any).id === 'string' &&
    typeof (value as any).email === 'string'
  );
}

// Usage — TypeScript narrows to User after the guard
function processValue(value: unknown): string {
  if (isUser(value)) {
    return value.name;  // TypeScript knows: value is User
  }
  return 'Not a user';
}

// Assertion function — throws if condition not met (TypeScript 3.7+)
function assertIsUser(value: unknown): asserts value is User {
  if (!isUser(value)) throw new TypeError('Expected a User object');
}

function updateUserProfile(data: unknown) {
  assertIsUser(data);
  // After assertIsUser, TypeScript knows data is User
  return \`Updating \${data.name}\`;
}

// ── 4. BRANDED TYPES — prevent mixing semantically different IDs ──
// Problem: function transferFunds(from: string, to: string) —
//   accidentally calling transferFunds(toId, fromId) is a silent bug

type Brand<T, Brand extends string> = T & { readonly _brand: Brand };

type UserId    = Brand<string, 'UserId'>;
type ProductId = Brand<string, 'ProductId'>;
type OrderId   = Brand<string, 'OrderId'>;

// Brand constructor
function userId(id: string): UserId {
  return id as UserId;
}

function transferFunds(fromUserId: UserId, toUserId: UserId, amount: number): void {
  // implementation
}

const uid1 = userId('user-abc');
const uid2 = userId('user-xyz');
const pid  = 'product-123' as ProductId;

transferFunds(uid1, uid2, 5000);    // ✅ Both are UserId
transferFunds(uid1, pid, 5000);     // ❌ Error: ProductId is not assignable to UserId

// ── 5. OPTION TYPE — explicit handling of absence ─────────────────
type Option<T> = { isSome: true; value: T } | { isSome: false };

function Some<T>(value: T): Option<T> { return { isSome: true, value }; }
function None<T>(): Option<T> { return { isSome: false }; }

function findProductById(id: string): Option<Product> {
  const product = products.find(p => p.id === id);
  return product ? Some(product) : None();
}

const result = findProductById('abc123');
if (result.isSome) {
  console.log(result.value.name);  // TypeScript knows value exists here
} else {
  console.log('Product not found');
}

// ── 6. FLUENT VALIDATION CHAIN ────────────────────────────────────
class Validator<T> {
  private errors: string[] = [];
  constructor(private value: T, private fieldName: string) {}

  minLength(n: number): this {
    if (typeof this.value === 'string' && this.value.length < n) {
      this.errors.push(\`\${this.fieldName} must be at least \${n} characters\`);
    }
    return this;
  }

  positive(): this {
    if (typeof this.value === 'number' && this.value <= 0) {
      this.errors.push(\`\${this.fieldName} must be positive\`);
    }
    return this;
  }

  required(): this {
    if (this.value === null || this.value === undefined || this.value === '') {
      this.errors.push(\`\${this.fieldName} is required\`);
    }
    return this;
  }

  get isValid(): boolean { return this.errors.length === 0; }
  get validationErrors(): string[] { return [...this.errors]; }
}

// Usage
const nameValidator = new Validator('', 'name').required().minLength(2);
if (!nameValidator.isValid) console.log(nameValidator.validationErrors);`,
      usage:
        "Branded types are the most underused TypeScript feature in production code — they prevent entire categories of 'wrong argument order' bugs at zero runtime cost. Use them for all ID types in financial or safety-critical systems. Type guards (is User) are essential for validating data from external sources. The builder pattern works particularly well in TypeScript because the chained methods return this, preserving the full type of the specific subclass.",
      mistake:
        "Using type assertions (as User) instead of type guards (if isUser(value)) when processing external data. A type assertion tells the compiler to trust you — it bypasses type checking. If the runtime data doesn't match, you get silent corruption instead of a clear error. Type guards (value is User) encode the validation logic that justifies the narrowing. The compiler trusts you only where the guard function returns true — which is exactly where the runtime validation has passed.",
    },
    {
      id: "typescript-migration",
      number: "4.9",
      title: "Migrating JavaScript to TypeScript and Working with Declaration Files",
      icon: "🔄",
      color: "purple",
      intro:
        "Most TypeScript work in India's product companies involves adding TypeScript to existing JavaScript codebases — not starting from scratch. Understanding the incremental migration strategy, how to use // @ts-check in JavaScript files without full TypeScript, how to write declaration files (.d.ts) for untyped libraries, and how to configure allowJs for a gradual migration is a practical senior-level TypeScript skill. This section covers the professional approach to JavaScript-to-TypeScript migration that preserves team velocity while improving type safety progressively.",
      code: `// JAVASCRIPT TO TYPESCRIPT MIGRATION — the professional approach

// ── STEP 1: tsconfig.json with allowJs — compile JS and TS together ──
{
  "compilerOptions": {
    "allowJs": true,                // Compile .js files alongside .ts files
    "checkJs": false,               // Don't type-check .js files yet (too many errors)
    "strict": false,                // Relax strictness for migration period
    "outDir": "./dist",
    "target": "ES2022"
  },
  "include": ["src/**/*.{ts,tsx,js,jsx}"]
}

// ── STEP 2: @ts-check in individual JS files (zero friction start) ──
// Add to the top of any JS file to enable type checking without renaming
// @ts-check

/** @type {import('./types').Product} */  // JSDoc type annotation
const product = {
  id: '123',
  name: 'iPhone',
  price: 79999,
};

// JSDoc generic annotation
/**
 * @template T
 * @param {T[]} arr
 * @returns {T | undefined}
 */
function first(arr) {
  return arr[0];
}

// ── STEP 3: Rename files incrementally ────────────────────────────
// Strategy: rename files from .js to .ts one at a time
// Start with: utilities and pure functions (least dependencies, easiest)
// Then: data models and types (foundational)
// Then: service layer (depends on models)
// Then: controllers and route handlers (depends on services)
// Last: entry points and framework configuration

// When you rename utils/format.js → utils/format.ts:
// TypeScript will show errors — fix them one by one
// Use 'as any' temporarily for complex types you'll fix later
// Track remaining 'any' usages with ESLint: '@typescript-eslint/no-explicit-any'

// ── STEP 4: Enable strict options progressively ───────────────────
// Migrate to strict TypeScript gradually using tsconfig inheritance
// tsconfig.base.json (shared config)
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "esModuleInterop": true,
    "skipLibCheck": true
  }
}

// tsconfig.json (current production — moderate strictness)
{
  "extends": "./tsconfig.base.json",
  "compilerOptions": {
    "strict": true,              // Enable once old files are migrated
    "strictNullChecks": true
  }
}

// ── DECLARATION FILES (.d.ts) — type untyped libraries ───────────
// When a library has no @types package and no bundled types,
// write a declaration file to type it

// Before: const myLib = require('untyped-library'); — any
// After: typed by your declaration file

// src/@types/untyped-library/index.d.ts
declare module 'untyped-library' {
  interface LibOptions {
    host: string;
    port: number;
    timeout?: number;
  }

  interface LibClient {
    connect(): Promise<void>;
    disconnect(): void;
    send(data: string): Promise<{ success: boolean; id: string }>;
    on(event: 'connect' | 'disconnect' | 'error', handler: (data: unknown) => void): void;
  }

  function createClient(options: LibOptions): LibClient;

  export = createClient;
}

// Now: import createClient from 'untyped-library'; — fully typed

// ── GLOBAL AUGMENTATION — adding to global types ─────────────────
// src/@types/globals.d.ts
declare global {
  // Extend the global Window interface
  interface Window {
    analytics: {
      track(event: string, properties?: Record<string, unknown>): void;
      identify(userId: string, traits?: Record<string, unknown>): void;
    };
    __APP_VERSION__: string;
  }

  // Add global utility types
  type Nullable<T> = T | null;
  type Optional<T> = T | undefined;
  type MaybePromise<T> = T | Promise<T>;
}

// Needed for global augmentation: export {}
export {};

// ── MIGRATING A COMMON PATTERN: callback-style to typed async ─────
// JavaScript (before):
function getUserById(id, callback) {
  db.query('SELECT * FROM users WHERE id = ?', [id], (err, rows) => {
    if (err) callback(err, null);
    else callback(null, rows[0]);
  });
}

// TypeScript (after):
interface User { id: string; email: string; name: string; }

async function getUserById(id: string): Promise<User | null> {
  const rows = await db.query<User[]>('SELECT * FROM users WHERE id = $1', [id]);
  return rows[0] ?? null;
}

// ── COMMON MIGRATION PATTERNS ─────────────────────────────────────

// 1. Replace 'arguments' with rest parameters
// Before: function sum() { return Array.from(arguments).reduce((a, b) => a + b, 0); }
function sum(...numbers: number[]): number {
  return numbers.reduce((a, b) => a + b, 0);
}

// 2. Replace prototype-based patterns with classes or objects
// Before: function Animal(name) { this.name = name; } Animal.prototype.speak = function() {}
interface Animal { name: string; speak(): string; }
function createAnimal(name: string): Animal {
  return { name, speak: () => \`\${name} speaks\` };
}

// 3. Replace dynamic requires with static imports
// Before: const middleware = require(\`./middleware/\${name}\`);
// After: explicit imports with a type-safe registry
const middlewareRegistry = {
  auth: authenticateMiddleware,
  rate: rateLimitMiddleware,
  cors: corsMiddleware,
} as const;
type MiddlewareName = keyof typeof middlewareRegistry;
function getMiddleware(name: MiddlewareName) {
  return middlewareRegistry[name];
}`,
      usage:
        "Migrate JavaScript to TypeScript incrementally — rename one file at a time, starting from the leaves (pure utilities) toward the roots (entry points and framework config). Enable strict: true only after the majority of files are migrated. Use // @ts-check in JavaScript files for zero-cost type checking improvements before full migration. Write .d.ts declaration files for any untyped npm package your codebase depends on — adding types prevents the untyped infection from spreading.",
      mistake:
        "Doing a 'big bang' JavaScript to TypeScript migration — renaming all files to .ts simultaneously and then trying to fix all errors at once. This creates a migration branch that diverges from main for weeks, accumulates merge conflicts, and demoralizes the team. The incremental approach (rename one file, fix its errors, merge, repeat) keeps the migration visible in progress reports, keeps the codebase always in a working state, and distributes the fix work across the team over time.",
    },
  ],

  // ── SECTION 5: PREREQUISITES ─────────────────────────────────────
  prerequisites: [
    { item: "JavaScript (ES6+)", done: false, note: "TypeScript is a superset of JavaScript — you must know JavaScript first", detail: "Arrow functions, destructuring, spread/rest, Promises, async/await, classes, modules (import/export), array methods. TypeScript adds types to JavaScript — if you don't understand the JavaScript, the TypeScript syntax on top will be confusing. Spend at least 4–6 weeks writing real JavaScript before starting TypeScript." },
    { item: "Node.js and npm basics", done: true, note: "For installing TypeScript, running tsc, and managing tsconfig.json", detail: "npm install -g typescript, npx tsc --init, npx ts-node file.ts — all of TypeScript's tooling runs through Node.js and npm. Understanding npm scripts, devDependencies (typescript goes in devDependencies), and package.json is required to set up TypeScript projects." },
    { item: "VS Code (recommended)", done: true, note: "TypeScript's value multiplies dramatically with VS Code's IntelliSense powered by the TypeScript Language Server", detail: "VS Code has built-in TypeScript support via the TypeScript Language Server — hover to see inferred types, red underlines for type errors, Ctrl+Space for autocompletion, F12 for go-to-definition, F2 for rename-with-all-usages. These editor integrations are where TypeScript's productivity benefits are most tangible. Other editors (WebStorm, Vim with COC) also support TypeScript but VS Code's integration is deepest." },
    { item: "Basic OOP Concepts", done: false, note: "For understanding classes, interfaces, and inheritance in TypeScript", detail: "Understand what a class is (template for creating objects), what an interface is (a contract describing a shape), what inheritance means (a subclass gets all properties of its superclass), and what a constructor is. These concepts are used in TypeScript's class syntax, NestJS's decorator-based architecture, and Angular's component system." },
    { item: "React or Node.js (contextual)", done: false, note: "TypeScript is learned most effectively in the context of a real framework", detail: "Abstract TypeScript concepts become concrete when you're typing React component props or Express route handlers. Learn TypeScript alongside React (if frontend focused) or Node.js/Express (if backend focused). The combination reinforces both skills — TypeScript teaches you to think precisely about data shapes, and the framework gives you a real context to apply that precision." },
    { item: "Understanding of JSON and data shapes", done: true, note: "TypeScript types describe the shape of data — you need to understand data shapes to model them", detail: "If you can look at an API response like { user: { id: '123', name: 'Arjun', email: 'a@b.com' }, token: 'eyJ...' } and say 'user has id (string), name (string), email (string) and token is a string', you understand data shapes and are ready to write TypeScript interfaces for them." },
    { item: "Git and version control", done: true, note: "For managing TypeScript projects and tsconfig.json versioning", detail: "TypeScript projects have a tsconfig.json (the compiler configuration), a package.json, and .d.ts files that should all be in version control. Understanding git add, commit, push, and .gitignore (node_modules should be ignored, tsconfig.json should NOT be ignored) is expected." },
    { item: "Command line / terminal basics", done: true, note: "For running tsc, ts-node, and TypeScript build tools", detail: "npx tsc (compile TypeScript), npx ts-node src/index.ts (run TypeScript directly), npx tsc --watch (compile on file change) — all run in the terminal. Understanding how to read compiler error output (file, line number, error message) is essential for the TypeScript development workflow." },
  ],

  // ── SECTION 6: ROADMAP ───────────────────────────────────────────
  roadmap: [
    {
      phase: "Beginner",
      label: "01",
      duration: "Weeks 1–4",
      color: "emerald",
      topics: [
        "TypeScript setup — npm install typescript, npx tsc --init, tsconfig.json basics",
        "Primitive types — string, number, boolean, null, undefined, symbol, bigint",
        "Type inference — when TypeScript infers types, when to annotate explicitly",
        "Type annotations — variables, function parameters, return types",
        "Arrays and tuples — number[], string[][], [string, number] tuple types",
        "Objects and interfaces — interface declarations, optional and readonly properties",
        "Type aliases — type keyword, union types (string | number), intersection types (&)",
        "Literal types — 'left' | 'right' | 'center', 42, true as types",
        "Enums — const enum vs regular enum, when to use vs literal union types",
        "Functions — typed parameters, optional params, rest params, overloads",
        "Type narrowing — typeof, instanceof, truthiness, equality narrowing",
        "The 'unknown' type vs 'any' — when to use each",
        "Non-null assertion operator (!) — when it's safe and when it's wrong",
        "as const — preserve literal types in arrays and objects",
      ],
      buildProjects: [
        "Type the Todo App: Take a plain JavaScript Todo app and add TypeScript types — Todo interface, useState<Todo[]>, event handler types. Shows the before/after of TypeScript.",
        "Typed Utility Library: Write 10 common utility functions (debounce, throttle, deepClone, formatCurrency, generateId) with full TypeScript types. No any allowed.",
        "API Response Types: Create TypeScript interfaces for 3 real REST APIs (GitHub, OpenWeather, JSONPlaceholder). Practice reading JSON responses and writing matching interfaces.",
      ],
    },
    {
      phase: "Intermediate",
      label: "02",
      duration: "Weeks 5–12",
      color: "primary",
      topics: [
        "Generics — generic functions, generic interfaces, generic classes, constraints (extends)",
        "Generic utility types — Partial, Required, Pick, Omit, Record, Exclude, Extract, NonNullable",
        "ReturnType, Parameters, Awaited — extract types from functions",
        "typeof, keyof, indexed access types (T[K]) — derive types from values and other types",
        "Mapped types — transform properties of an existing type",
        "Conditional types — T extends U ? TrueType : FalseType",
        "Template literal types — string manipulation at the type level",
        "Discriminated unions — pattern for state machines and event handling",
        "Type guards — function-based narrowing with 'is' predicate",
        "TypeScript with React — component props, forwardRef, typed hooks, context",
        "TypeScript with Express/Node.js — typed middleware, typed request/response",
        "Zod + TypeScript — runtime validation with inferred types (z.infer)",
        "Declaration files (.d.ts) — typing untyped libraries",
        "Strict mode — understanding each strict option and why it matters",
      ],
      buildProjects: [
        "Typed React Component Library: Build 10 reusable components (Button, Input, Select, Modal, Table, Card) with full TypeScript generics and proper forwardRef. No any allowed.",
        "Typed REST API (Express + TypeScript): Full Express API with typed middleware, Zod validation, typed service layer, typed Prisma queries. Demonstrate end-to-end type safety.",
        "Generic State Management: Build a type-safe Zustand store and custom React hooks (useAsync, useLocalStorage, useDebounce) with full generics. Consumer code should have zero any.",
      ],
    },
    {
      phase: "Advanced",
      label: "03",
      duration: "Weeks 13–20+",
      color: "purple",
      topics: [
        "Advanced conditional types — infer keyword, recursive conditional types",
        "Advanced mapped types — remapping keys (as clause), filtering properties",
        "Variance and soundness — covariance, contravariance, bivariance in function types",
        "Decorator patterns — class, method, parameter, property decorators (NestJS/Angular)",
        "Module augmentation — extending third-party types without modifying node_modules",
        "Branded types — preventing semantic type confusion (UserId vs ProductId)",
        "The satisfies operator (TypeScript 4.9+) — validate without widening",
        "Using TypeScript for DSL design — fluent builder APIs, query builders",
        "TypeScript compiler API — programmatic access to the AST and type checker",
        "Writing TypeScript libraries — designing public APIs, publishing declaration files",
        "JavaScript to TypeScript migration strategies — incremental migration patterns",
        "Performance in TypeScript — avoiding slow type instantiation, type complexity",
        "TypeScript with tRPC — end-to-end type safety across client and server",
        "TypeScript with Prisma — generated types, extending Prisma types",
      ],
      buildProjects: [
        "Type-Safe tRPC API + Next.js: Full-stack application where React Query hooks on the frontend use types inferred from tRPC router on the backend. No type assertions anywhere.",
        "TypeScript Library: Publish an npm package with a fully typed public API, generic types, and excellent IntelliSense. Goal: consumers never need to read documentation for basic usage.",
        "JavaScript-to-TypeScript Migration: Take a real open-source JavaScript project (small Express API or React app) and migrate it to strict TypeScript. Document the process and bugs found.",
      ],
    },
  ],

  // ── SECTION 7: USE CASES ─────────────────────────────────────────
  useCases: [
    { num: "01", title: "Large-Scale Frontend Applications", body: "Every React or Angular application above 20 components and 3 developers benefits from TypeScript. The component prop types become a self-documenting API — junior developers know exactly what to pass to a ProductCard without reading the implementation. Refactoring a prop from string to string[] propagates as a type error to every component that uses it — find all 23 usages in 2 seconds with F2 rename instead of grep. The VS Code IntelliSense powered by TypeScript types makes feature development 30–40% faster in large React codebases. Every product company in India that has a large frontend codebase uses TypeScript." },
    { num: "02", title: "Node.js Backend APIs with End-to-End Type Safety", body: "A TypeScript Node.js API with Prisma and Zod achieves something remarkable: the database schema (Prisma schema) generates TypeScript types, the API validation (Zod) generates TypeScript types, and the combination means a change to the database schema propagates as compile errors to every service that uses the changed model. Razorpay's backend TypeScript codebase catches integration bugs between services at compile time that would only appear at runtime in a JavaScript codebase. The tRPC framework extends this to the frontend — the server's TypeScript types are available in the React client with zero code generation." },
    { num: "03", title: "Shared Type Packages in Monorepos", body: "In a Turborepo or Nx monorepo with a React frontend and Node.js backend, a packages/types package contains all shared interfaces — User, Product, Order, ApiResponse<T>. Both the frontend and backend import from this package. A change to the User interface propagates as errors to both the frontend components and the backend services simultaneously. This eliminates the 'frontend and backend have different ideas of what a User looks like' class of integration bugs that costs hours of debugging in untyped JavaScript stacks. Freshworks, Razorpay, and every company with a TypeScript monorepo follows this pattern." },
    { num: "04", title: "Developer Tools, CLIs, and Build Tooling", body: "The Angular CLI, Nx, Turborepo, Prisma CLI, and VS Code are all TypeScript programs. TypeScript's static analysis capabilities make it uniquely suited for programs that manipulate code: AST transformations, code generation, plugin systems. A TypeScript CLI that reads a configuration file and generates code can use TypeScript types to verify that the configuration file matches the expected schema, that the generated code is syntactically valid, and that the output types are consistent. The TypeScript compiler API provides programmatic access to the type checker — enabling custom lint rules, code transformers, and static analysis tools." },
    { num: "05", title: "Design System and Component Library Development", body: "Radix UI, Shadcn/ui, and every professional React component library is written in TypeScript. The TypeScript types for a component library are as important as the components themselves — they define the public API. A Button component with TypeScript generics can accept a polymorphic 'as' prop (render as a button, a link, or a custom component) while maintaining full type safety. The JSDoc + TypeScript combination generates API documentation automatically. Atlassian Design System, GitHub's Primer, and Freshworks' component library are TypeScript component libraries that Indian developers use and contribute to." },
    { num: "06", title: "Financial Calculations and Validation Logic", body: "TypeScript's type system can encode domain constraints that prevent financial errors at compile time. Branded types (type Rupees = Brand<number, 'Rupees'>) prevent accidentally mixing currency values with inventory counts. Discriminated unions model state machines (OrderStatus: 'pending' → 'confirmed' → 'shipped') and the exhaustiveness check ensures every case is handled. Razorpay's payment flow, Groww's order placement logic, and every fintech's transaction processing layer benefits from the precision of TypeScript types for financial domain modeling." },
    { num: "07", title: "Migrating Legacy JavaScript Codebases", body: "India's technology sector has massive amounts of JavaScript technical debt — Express APIs written in 2018 without TypeScript, React codebases from the create-react-app era with no types, Node.js scripts that are impossible to refactor safely. TypeScript's incremental migration path — allowJs, @ts-check, rename one file at a time — means that any JavaScript codebase can be progressively migrated. Every company that has undergone this migration reports the same outcome: dozens to hundreds of pre-existing bugs discovered during the migration, faster development velocity after, and dramatically easier onboarding for new team members." },
  ],

  // ── SECTION 8: PROJECTS ──────────────────────────────────────────
  projects: {
    beginner: [
      { name: "Typed Utility Library", desc: "Write 15 typed utility functions: debounce, throttle, deepClone, formatCurrency (INR), groupBy, sortBy, chunk, zip, omit, pick, deepEqual, parseDate, formatDate, generateId, retry. Zero any. Full generics where appropriate.", teaches: "Generic functions, overloads, conditional return types, rest parameters, readonly parameters, Record<K,V>, type inference" },
      { name: "TypeScript Todo App", desc: "Convert a plain JavaScript Todo app to TypeScript. Todo interface (id, text, completed, priority, dueDate?), typed useState, typed event handlers, filter and sort with typed predicates. Add Zod validation for new todo creation.", teaches: "Interface declarations, useState<T>, event handler types (ChangeEvent, FormEvent), Omit<T, K> for create DTO, type narrowing, discriminated union for filter state" },
      { name: "API Type Definitions", desc: "Write TypeScript interfaces for 5 real public APIs: GitHub REST API (user, repo, issue), OpenWeatherMap (current weather, forecast), Razorpay webhooks (payment, order, refund events), Twitter/X v2 (tweet, user, media), Stripe (customer, invoice, payment intent).", teaches: "Complex nested interfaces, optional fields, discriminated unions for webhook event types, generic response wrappers, Date vs string for timestamps" },
      { name: "Config Schema Validator", desc: "Build a configuration file validator: define a schema with Zod for an app's config (database, redis, auth, email settings), validate a .json config file against it, output clear error messages for invalid configs. TypeScript infers the config type from the schema.", teaches: "Zod schemas, z.infer for type derivation, nested object schemas, union types, coerce for string-to-number, default values, environment-aware config" },
    ],
    intermediate: [
      { name: "Typed React Component Library", desc: "Build 12 typed React components: Button (polymorphic 'as' prop), Input (forwardRef, extends InputHTMLAttributes), Select (generic T), Table (generic T with sortable columns), Modal (portal + focus trap), Toast, Badge, Skeleton, Avatar, DatePicker, FileUpload, RichText. Zero any.", teaches: "Generic components, forwardRef with generics, ComponentProps<'element'> extension, discriminated union for variants, template literal types for className, satisfies operator" },
      { name: "Full-Stack TypeScript API", desc: "Express API with TypeScript: typed middleware (authenticate, validate, asyncHandler), Zod schemas for all inputs, Prisma for database with generated types, typed service layer (no req/res in services), typed error hierarchy (AppError extends Error). End-to-end: zero any from route to database.", teaches: "Module augmentation for Express Request, z.infer, Prisma type generation, ReturnType for service typing, discriminated union for service results, declaration merging" },
      { name: "Type-Safe State Machine", desc: "Implement a payment flow state machine using discriminated unions: PaymentState (idle → selecting → processing → success | failure → refunding). Each state has different allowed data and different allowed transitions. TypeScript enforces you handle every state in rendering.", teaches: "Discriminated unions, exhaustive checks with never, mapped types for transition table, conditional types for state-specific data, useReducer with typed actions" },
      { name: "TypeScript Migration Project", desc: "Take a real open-source Express.js + React.js application from GitHub (choose one with 500+ lines) and migrate it to strict TypeScript. Document every bug found during migration. Enable strict: true by the end.", teaches: "allowJs migration strategy, @ts-check, @ts-ignore vs fixing, declaration files for untyped deps, common migration patterns (callback → async, prototype → class/function)" },
    ],
    advanced: [
      { name: "tRPC Full-Stack Application", desc: "Next.js + tRPC + Prisma + TypeScript. Server router with protected procedures, input validation with Zod, context with session. Client with React Query hooks from tRPC. Type flows from DB schema → Prisma type → tRPC router → React Query hook → component props. Zero as-casts anywhere.", teaches: "tRPC router, context, middleware, createCallerFactory for testing, Prisma type extensions, propagating types end-to-end, TanStack Query + tRPC integration" },
      { name: "TypeScript npm Library", desc: "Publish a typed npm library (a small query builder, a validation library, or a date utility). Full TypeScript source, .d.ts output, JSDoc on every public API, zero any in public types, playground with TS config examples, README with typed usage examples.", teaches: "Publishing declaration files, designing generic APIs, avoiding type footguns, satisfies for type validation, template literal types for DSL design, semantic versioning with breaking type changes" },
      { name: "Compiler Plugin / Custom Transform", desc: "Write a TypeScript transformer that: validates that all API route handlers have Zod validation (custom lint rule), OR generates runtime type checkers from TypeScript interfaces, OR creates a type-safe event bus from discriminated union definitions. Uses the TypeScript compiler API.", teaches: "TypeScript compiler API (ts.createProgram, TypeChecker), AST traversal, custom diagnostics, transformer pipeline, real-world metaprogramming with TypeScript" },
    ],
  },

  // ── SECTION 9: MISTAKES ──────────────────────────────────────────
  mistakes: [
    {
      title: "Using 'any' to Silence Type Errors Instead of Fixing Them",
      explanation: "as any is TypeScript's ejector seat. It doesn't fix the type error — it makes the compiler stop checking that value entirely. Any code that receives the any-typed value also loses type checking. 'any' propagates through the codebase silently, infecting every function that touches the any-typed value. A codebase with dozens of any annotations is not safer than JavaScript — it has the complexity of TypeScript's syntax with none of its safety benefits.",
      tip: "When you feel the urge to write as any, stop. The error exists because there's a genuine type mismatch. Find the correct type transformation: Partial<T>, Omit<T, K>, unknown with a type guard, a discriminated union, or a generic parameter. The only legitimate uses of any: gradual migration (mark files with eslint-disable and track the count down to zero), accessing truly dynamic data from external sources (use unknown and narrow it), or interoperating with legacy code that has no types.",
      wrong: "function processData(data: any) { return data.user.name; }  // No type checking — runtime error if data is null",
      correct: "function processData(data: unknown): string { if (!isUser(data)) throw new TypeError('Invalid data'); return data.name; }",
    },
    {
      title: "Not Enabling strict: true",
      explanation: "TypeScript without strict: true catches obvious errors but misses the most insidious ones. Without strictNullChecks, null and undefined are assignable to every type — the type system cannot prevent 'cannot read property x of null'. Without noImplicitAny, TypeScript silently accepts any-typed values wherever types can't be inferred. A TypeScript project without strict mode provides a fraction of the safety a properly configured TypeScript project does.",
      tip: "Enable strict: true in tsconfig.json from day one on every new project. On existing projects: enable strictNullChecks first (the most impactful option), fix all errors, then enable the remaining strict options one at a time. The errors that surface when you enable strict are pre-existing bugs in your codebase — TypeScript is revealing them, not creating them.",
    },
    {
      title: "Writing Redundant Type Annotations Where Inference Handles It",
      explanation: "const name: string = 'Arjun' — TypeScript already infers string from 'Arjun'. const users: User[] = await fetchUsers() — TypeScript infers the return type of fetchUsers(). These redundant annotations add noise without adding safety. More insidiously, redundant annotations can hide real problems: const result: string = someFunction() might hide the fact that someFunction() actually returns string | null — the annotation silences the error but doesn't fix it.",
      tip: "Let TypeScript infer types for local variables. Add explicit annotations only where inference is insufficient: function parameters (TypeScript cannot infer these), complex initial values where the inferred type is too wide (let x = null should be let x: User | null = null), and public API surfaces (exported function return types). The ESLint rule @typescript-eslint/no-inferrable-types flags redundant annotations.",
      wrong: "const name: string = 'Arjun'; const count: number = 0; const users: User[] = [];",
      correct: "const name = 'Arjun'; const count = 0; const users: User[] = [];  // Only the empty array needs explicit typing",
    },
    {
      title: "Using Type Assertions Instead of Type Guards for External Data",
      explanation: "const user = JSON.parse(response) as User — this is a lie. The runtime value might be anything. TypeScript believes you without checking. If the server returns a different shape, your code will fail at runtime with cryptic errors. Type assertions (as T) are promises to the compiler, not validation. Using them on external data (API responses, JSON.parse results, localStorage reads) bypasses all safety.",
      tip: "Use Zod to validate external data and derive TypeScript types from Zod schemas. const user = userSchema.parse(JSON.parse(response)) — Zod validates at runtime AND TypeScript knows the type from z.infer<typeof userSchema>. The combination of runtime validation (Zod) and compile-time typing (TypeScript) covers both safety dimensions.",
      wrong: "const user = JSON.parse(response) as User;  // No validation — runtime error if response is malformed",
      correct: "const user = userSchema.parse(JSON.parse(response));  // Zod validates, TypeScript infers",
    },
    {
      title: "Misunderstanding When to Use Interface vs Type Alias",
      explanation: "Developers from other languages sometimes use interface for everything (Java habit) or type for everything (functional programming habit). The TypeScript community has converged on clear conventions: interfaces for object shapes that might be extended or merged, type aliases for everything else (unions, intersections, mapped types, conditional types, template literals, primitives).",
      tip: "Use interface when: defining the shape of an object, defining a contract a class implements, when consumers might need to extend it. Use type when: creating union types (type Status = 'a' | 'b'), intersection types (A & B), mapped types, conditional types, template literal types, or type aliases for primitive types. The practical rule: if it involves the | or & operators, use type. If it's a plain object shape, use interface.",
    },
    {
      title: "Ignoring TypeScript Errors with // @ts-ignore Instead of Fixing Them",
      explanation: "@ts-ignore tells TypeScript to skip the next line entirely. Unlike as any which loses type information for one value, @ts-ignore removes all type checking for an entire line. In a code review, @ts-ignore is a red flag that signals 'this line has a type error we couldn't be bothered to fix'. TypeScript errors are not compiler complaints — they are bugs the compiler found. Ignoring them doesn't fix the bugs.",
      tip: "Every @ts-ignore must have a comment explaining why it's unavoidable and a linked issue to track removal. Prefer @ts-expect-error (TypeScript 3.9+) over @ts-ignore — @ts-expect-error becomes a type error itself if the suppressed error is ever fixed, preventing stale suppressions. Track the count of @ts-ignore and @ts-expect-error in your CI pipeline and require it to decrease over time.",
    },
    {
      title: "Not Using Discriminated Unions for Multi-State Values",
      explanation: "Storing a 'kind' discriminant field and the associated data in separate variables — let kind = 'loading'; let data = null; let error = null — creates impossible states. (kind === 'success' and data === null should be impossible, but the type system doesn't know this.) The result: runtime null checks everywhere, defensive programming, and subtle bugs when state transitions leave inconsistent combinations.",
      tip: "Model multi-state values as discriminated unions: type ApiState<T> = { status: 'idle' } | { status: 'loading' } | { status: 'success'; data: T } | { status: 'error'; error: string }. TypeScript narrows the state in switch/case branches — data is guaranteed available in the 'success' branch. Impossible state combinations are unrepresentable. This pattern applies to API states, wizard steps, order status, user authentication state.",
    },
    {
      title: "Using String Enums Instead of Const Enums or Union Types",
      explanation: "TypeScript enums compile to verbose JavaScript objects. A simple enum Direction { Left = 'left', Right = 'right' } compiles to a multi-line object declaration that appears in the runtime bundle. Regular enums also have surprising behavior: they're not compatible with the string values they represent (a function accepting Direction doesn't accept the string 'left' directly). This surprises developers and creates friction.",
      tip: "Use literal union types instead of enums for simple string constants: type Direction = 'left' | 'right'. This compiles to nothing — the type is erased. It's compatible with string literals. Use const enum for numeric enums where the values need to be documented. The only case for regular enums is when you need reverse mapping (Direction[0] === 'left') or when you're working with a codebase that already uses enums consistently.",
      wrong: "enum Status { Pending = 'pending', Active = 'active', Banned = 'banned' }",
      correct: "type Status = 'pending' | 'active' | 'banned';  // Compiles to nothing, works exactly the same",
    },
    {
      title: "Typing Event Handlers as (event: any) => void",
      explanation: "Function components that handle browser events (onClick, onChange, onSubmit) often typed as (event: any) => void lose all type safety for the event object. You can call event.target.nonExistent without TypeScript complaining. The specific event type contains important properties: e.target.value for ChangeEvent, e.currentTarget.form for FormEvent, e.key for KeyboardEvent.",
      tip: "Use the specific React event types: (e: React.ChangeEvent<HTMLInputElement>) for input onChange, (e: React.FormEvent<HTMLFormElement>) for form onSubmit, (e: React.MouseEvent<HTMLButtonElement>) for button onClick, (e: React.KeyboardEvent<HTMLInputElement>) for keyboard events. The generic parameter is the element type — this gives you properly typed e.target and e.currentTarget.",
      wrong: "const handleChange = (e: any) => { setValue(e.target.value); }",
      correct: "const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => { setValue(e.target.value); }",
    },
    {
      title: "Not Understanding the Difference Between 'type' and 'interface' Declaration Merging",
      explanation: "Interfaces support declaration merging — two interface declarations with the same name are automatically combined into one. This is used to extend third-party types (adding to the global Window interface, extending Express's Request type). Type aliases do not support merging — declaring type User twice is an error. Developers who use type aliases for everything cannot use the module augmentation pattern to extend framework types.",
      tip: "For module augmentation (extending third-party types), you must use interface. The global Express.Request extension, the Next.js session type extension, and the global Window extension all use interface declaration merging. Write these augmentations in a src/@types/ directory with .d.ts files. For all other type definitions, follow the interface-for-objects, type-for-everything-else convention.",
    },
    {
      title: "Forgetting to Handle the 'unknown' Type in Catch Blocks",
      explanation: "With useUnknownInCatchVariables (part of TypeScript 4.4+, included in strict mode), catch(e) gives e the type unknown, not any. Code that worked in older TypeScript: catch(e) { console.log(e.message) } now errors because e is unknown and might not have a message property. The pre-TypeScript-4.4 behavior was wrong — catch blocks can receive anything, including strings, numbers, and objects that aren't Error instances.",
      tip: "Always check the type of caught values: if (e instanceof Error) { console.log(e.message) } else { console.log(String(e)) }. Write a type guard function once: function isError(e: unknown): e is Error { return e instanceof Error }. The AppError class pattern from Node.js APIs makes this cleaner — create a custom error class and check instanceof AppError in catch blocks.",
      wrong: "catch (e) { res.status(500).json({ message: e.message }); }  // e is unknown — .message errors in strict mode",
      correct: "catch (e) { const message = e instanceof Error ? e.message : 'Unknown error'; res.status(500).json({ message }); }",
    },
    {
      title: "Writing Complex Types That No One on the Team Can Read",
      explanation: "TypeScript's type system is Turing-complete — you can write recursive types, complex conditional type chains, and mapped type compositions that are impressive demonstrations of type gymnastics but impossible for teammates to understand or maintain. A type that requires 10 minutes to parse is not a good type, regardless of how clever it is.",
      tip: "Complex types should be built from named intermediate types. Each intermediate type should have a clear name and a one-line comment explaining what it represents. If a type is too complex to explain in one sentence, break it into smaller named types. Write a TypeScript type comment with an @example showing what the type resolves to. The goal of a type is to be useful — a type that confuses is counterproductive.",
    },
  ],

  // ── SECTION 10: INTERVIEW QUESTIONS ─────────────────────────────
  interviewQuestions: {
    beginner: [
      { q: "What is TypeScript and how does it differ from JavaScript?", a: "TypeScript is a statically typed superset of JavaScript developed by Microsoft. It adds optional static typing, interfaces, generics, enums, and decorators to JavaScript. TypeScript compiles to plain JavaScript — no TypeScript syntax runs in browsers or Node.js directly. The key difference: TypeScript catches type errors at compile time (before running), while JavaScript discovers them at runtime (often in production). TypeScript adds zero runtime overhead — the compiled JavaScript is identical to what you'd write manually." },
      { q: "What is type inference in TypeScript?", a: "Type inference is TypeScript's ability to automatically determine the type of a value from context without an explicit annotation. const count = 0 — TypeScript infers number. const name = 'Arjun' — infers string. const arr = [1, 2, 3] — infers number[]. const first = (arr: number[]) => arr[0] — infers return type number | undefined. Inference works for variables, function return types, and generic type parameters. TypeScript's inference is strong enough that most local variables don't need explicit annotations." },
      { q: "What is the difference between 'interface' and 'type' in TypeScript?", a: "Both describe the shape of an object. Differences: interfaces support declaration merging (two interface User declarations are combined into one) and classes can implement them. Type aliases are more flexible: they can define union types (string | number), intersection types (A & B), mapped types, and conditional types. Interfaces cannot express these. Convention: use interface for object shapes and class contracts, use type for unions, intersections, and complex type compositions." },
      { q: "What does 'strict: true' do in tsconfig.json?", a: "strict: true enables a group of strict type-checking options: strictNullChecks (null and undefined are not assignable to other types), noImplicitAny (error when TypeScript infers any), strictFunctionTypes (function types checked correctly), strictPropertyInitialization (class properties must be initialized), and others. The most impactful is strictNullChecks — it prevents 'cannot read property x of null' errors by forcing you to check for null/undefined before accessing properties. Always enable strict: true from day one." },
      { q: "What is the difference between 'unknown' and 'any'?", a: "Both represent 'I don't know this type'. The difference: any disables all type checking — you can call any method, access any property, assign to anything. unknown requires you to narrow the type before using it — you must check typeof, instanceof, or use a type guard to convince TypeScript what the value is. any is unsafe (TypeScript trusts your claim). unknown is safe (TypeScript requires you to prove the claim). Use unknown for external data (API responses, JSON.parse results), use any only when migrating legacy code." },
      { q: "What is a union type and when would you use it?", a: "A union type (A | B | C) says a value can be one of several types. type Status = 'pending' | 'active' | 'banned' means status can only be those three strings. function formatInput(input: string | number) accepts either type. type SearchResult = User | Product | null means the result could be a User, Product, or null. Union types with a discriminant field (same property with different literal values, like { kind: 'circle' } | { kind: 'square' }) are called discriminated unions and are TypeScript's most powerful pattern for state modeling." },
      { q: "What are generics in TypeScript?", a: "Generics are type parameters that make functions, interfaces, and classes work with any type while maintaining type safety. function first<T>(arr: T[]): T | undefined returns the same type as the array elements — if you pass User[], you get User | undefined. Without generics, you'd either use any (loses types) or write a separate function for each type (loses reusability). Generics parameterize types just as function parameters parameterize values: same code, different types." },
      { q: "What are TypeScript decorators and where are they used?", a: "Decorators are a TypeScript (and ES proposal) feature for adding metadata and modifying class behavior at declaration time using @decorator syntax. TypeScript requires experimentalDecorators: true in tsconfig.json (or TypeScript 5+ for Stage 3 decorators). They're used heavily in: Angular (@Component, @Injectable, @NgModule), NestJS (@Controller, @Get, @Injectable, @Body), and TypeORM/Prisma (@Entity, @Column). Decorators wrap or modify the class/method/property they decorate, enabling frameworks to add routing, dependency injection, and database mapping declaratively." },
      { q: "What is type narrowing in TypeScript?", a: "Type narrowing is TypeScript's ability to refine a type to a more specific type within a code block based on a conditional check. typeof input === 'string' narrows input from string | number to string in the true branch. x instanceof Error narrows x from unknown to Error. if (value !== null) narrows value from T | null to T. Discriminated union narrowing: if (shape.kind === 'circle') narrows shape to { kind: 'circle'; radius: number }. TypeScript tracks these narrowings and knows the more specific type within each branch." },
      { q: "What is the non-null assertion operator (!) and when should you use it?", a: "The non-null assertion operator (!) after a value tells TypeScript 'I guarantee this is not null or undefined — trust me'. document.getElementById('app')! tells TypeScript the element definitely exists. It's useful when TypeScript can't infer that a value is non-null but you know it is. Overuse is dangerous: if you're wrong, you get a runtime null dereference. Use it only when you're certain the value exists and TypeScript can't verify it. Prefer explicit checks (if (x !== null)) or optional chaining (x?.property) when possible." },
    ],
    intermediate: [
      { q: "Explain the difference between Partial<T>, Required<T>, Pick<T, K>, and Omit<T, K>.", a: "Partial<T> makes all properties optional — useful for update DTOs where you only send changed fields. Required<T> makes all properties required — reverse of Partial. Pick<T, K> selects a subset of properties — Pick<User, 'id' | 'name'> creates a type with only id and name. Omit<T, K> removes properties — Omit<Product, 'id' | 'createdAt'> creates a type without id and createdAt, useful for create DTOs. All four are built-in mapped types that transform existing types without duplication." },
      { q: "What is a discriminated union and what problem does it solve?", a: "A discriminated union is a union type where each variant has a 'discriminant' property with a unique literal value. type Shape = { kind: 'circle'; radius: number } | { kind: 'rectangle'; width: number; height: number }. TypeScript uses the discriminant (kind) to narrow the type in switch/case or if statements. It solves the 'impossible states' problem: without discriminated unions, you might have { isLoading: boolean; data: User | null; error: string | null } where (isLoading: false, data: null, error: null) is representable but should be impossible. A discriminated union makes impossible states unrepresentable." },
      { q: "What is the 'infer' keyword in TypeScript conditional types?", a: "infer introduces a type variable inside a conditional type's extends clause that is 'inferred' from the type being checked. type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never — if T is a function type, R captures its return type. type ElementType<T> = T extends (infer E)[] ? E : never — if T is an array, E captures the element type. infer enables extracting parts of complex types: the return type of a function, the element type of an array, the resolved value of a Promise." },
      { q: "How does TypeScript's structural typing work compared to nominal typing?", a: "Structural typing means compatibility is determined by shape (the properties and their types), not by the declared name or class hierarchy. interface A { x: number } and interface B { x: number } are structurally identical — a value of type A can be assigned to a variable of type B even though they have different names. This differs from nominal typing (Java/C#) where you'd need explicit compatibility declarations. Structural typing makes TypeScript practical for JavaScript's dynamic patterns: any object with the right shape satisfies an interface without explicit declaration." },
      { q: "What is the difference between 'keyof' and 'typeof' in TypeScript?", a: "typeof extracts the TypeScript type of a JavaScript value — typeof user is User (if user is declared as User), typeof config returns the object type with all inferred literal types. keyof extracts a union of all known property names of a type — keyof User is 'id' | 'email' | 'name' | ... They combine powerfully: typeof config returns the literal-typed object shape, keyof typeof config returns the union of its keys as literal types. This enables type-safe property access: function getConfig<K extends keyof typeof config>(key: K): typeof config[K]." },
      { q: "How do you write a type guard function in TypeScript?", a: "A type guard function uses the 'is' keyword in its return type: function isUser(value: unknown): value is User. The function's return type is a type predicate — when it returns true, TypeScript narrows the argument to User in the calling scope. The implementation must do actual runtime checking to justify the narrowing. Common pattern: check typeof, check required properties, check their types. Type guards are the type-safe alternative to as assertions for external data." },
      { q: "What are mapped types and give a real-world example?", a: "Mapped types transform the properties of an existing type using the syntax { [K in keyof T]: TransformedType }. Real-world examples: Partial<T> is { [K in keyof T]?: T[K] }, Readonly<T> is { readonly [K in keyof T]: T[K] }, a form state type { [K in keyof User]: { value: User[K]; error: string | null } }, a loading state type { [K in keyof T]: { value: T[K]; isLoading: boolean } }. TypeScript 4.1+ adds key remapping: { [K in keyof T as Capitalize<string & K>]: T[K] } renames all keys to their capitalized versions." },
      { q: "How do you extend third-party types in TypeScript without modifying node_modules?", a: "Module augmentation — declare the module and add your types inside. For global types (Window, Array): create a .d.ts file in src/@types/ and use declare global { interface Window { myProp: string } }. For specific modules (Express Request): declare module 'express-serve-static-core' { interface Request { user?: JwtPayload } }. The key requirement: the augmentation file must export at least one thing (export {} works) to be a module, or it will be treated as a global script and may cause conflicts. Always use interface for augmentation — interfaces can be merged, type aliases cannot." },
      { q: "What is the difference between 'as const' and 'Readonly<T>'?", a: "Readonly<T> is a type transformation that makes all properties of T readonly at the type level. as const is an assertion that infers all properties as readonly literal types and infers arrays as readonly tuples. Key difference: Readonly<{ status: string }> gives { readonly status: string }. { status: 'active' } as const gives { readonly status: 'active' } (literal, not widened to string). as const preserves exact literal types; Readonly<T> only adds readonly, the values are still widened. Use as const for configuration objects and constant arrays where you want literal types." },
      { q: "How does conditional typing with distributive behavior work?", a: "Conditional types distribute over union types when the checked type is a bare type parameter. type IsArray<T> = T extends any[] ? true : false. Applied to string | number[], TypeScript distributes: (string extends any[] ? true : false) | (number[] extends any[] ? true : false) = false | true = boolean. To prevent distribution, wrap the type parameter in a tuple: type IsArray<T> = [T] extends [any[]] ? true : false — now [string | number[]] is checked as a single unit. Understanding distributive conditional types is essential for writing generic type utilities." },
      { q: "What are declaration files (.d.ts) and when do you write them?", a: "Declaration files contain only type information — no JavaScript implementation. They tell TypeScript about the types of JavaScript values without TypeScript source. When to write them: (1) For an npm library written in JavaScript with no @types package — write a .d.ts in src/@types/library-name/ to type its exports. (2) For a library you're publishing — tsc with declaration: true auto-generates .d.ts from your TypeScript source. (3) For global augmentation (extending Window, Array, or third-party module types). For 90% of npm packages, @types/package-name provides the declarations — check before writing your own." },
    ],
    advanced: [
      { q: "Explain variance in TypeScript's function types and why it matters.", a: "Variance describes how type compatibility flows through type constructors. In TypeScript, function parameter types are checked bivariantly by default (both covariantly and contravariantly) for practical compatibility, but with strictFunctionTypes: true, method-position functions are bivariant while standalone function types are contravariant in parameter types. Practically: a function (animal: Animal) => void is assignable to a position expecting (dog: Dog) => void (contravariant — accepting a supertype is safe). A function () => Dog is assignable to () => Animal (covariant return types). Understanding this matters when writing generic callback types — wrong variance allows unsafe assignments that cause runtime errors." },
      { q: "How would you implement a type-safe event emitter in TypeScript?", a: "Use a generic interface mapping event names to their payload types: interface EventMap { 'user:login': { userId: string; ip: string }; 'order:created': { orderId: string; total: number } }. Then generic on, emit, off methods constrained to keyof EventMap: class TypedEventEmitter<T extends Record<string, unknown>> { on<K extends keyof T>(event: K, handler: (payload: T[K]) => void): void; emit<K extends keyof T>(event: K, payload: T[K]): void }. Instantiated as new TypedEventEmitter<EventMap>() — all events and their payloads are fully typed. Emitting 'user:login' with { total: 100 } would be a type error." },
      { q: "What is the TypeScript Compiler API and what can you build with it?", a: "The TypeScript Compiler API provides programmatic access to TypeScript's parser, type checker, and emitter. You can: traverse the AST (Abstract Syntax Tree) to analyze code structure, use the TypeChecker to resolve types of any expression, create custom transformers that modify the AST during compilation, implement custom lint rules that understand TypeScript semantics (not just syntax), write code generators that produce TypeScript from schemas (Prisma does this). Applications: custom code generators, architectural enforcement (no direct imports between feature modules), migration tools (find all usages of deprecated APIs)." },
      { q: "How do you design a TypeScript API that provides good IntelliSense to consumers?", a: "Several techniques: (1) Use overloads to provide different completions based on argument types — TypeScript shows the matching overload in IntelliSense. (2) Use template literal types for string parameters — type EventName = 'user:' + string provides completion for known prefixes. (3) Use generics that infer from arguments — consumers get correctly typed return values without specifying T explicitly. (4) Add JSDoc @param and @returns comments — they appear in IntelliSense hover tooltips. (5) Use discriminated unions with known variants — TypeScript suggests specific values for the discriminant. (6) Provide @example tags in JSDoc — VS Code shows examples in hover documentation." },
      { q: "Explain how Prisma's type generation works and how to extend Prisma types.", a: "Prisma generates TypeScript types from your schema.prisma file during npx prisma generate. For each model, Prisma generates a model type (Product), create/update input types (Prisma.ProductCreateInput), where clauses (Prisma.ProductWhereInput), and order by types (Prisma.ProductOrderByWithRelationInput). These types are fully generated from the schema — changing the schema regenerates the types. To extend Prisma types: use Prisma's validator() for type-safe query arguments, use namespace merging to add computed properties, or create wrapper types (type ProductWithSeller = Product & { seller: User }). For model extensions with methods, use prisma.$extends()." },
      { q: "How do you implement recursive types in TypeScript and what are their limitations?", a: "TypeScript supports recursive type aliases since TypeScript 3.7. type JSONValue = string | number | boolean | null | JSONValue[] | { [key: string]: JSONValue }. For recursive mapped types: type DeepPartial<T> = T extends object ? { [K in keyof T]?: DeepPartial<T[K]> } : T. Limitations: TypeScript limits instantiation depth to prevent infinite recursion — complex recursive types can hit the 'Type instantiation is excessively deep' error. Workaround: add a depth counter generic parameter to halt recursion, or restructure to avoid deeply recursive type checking. Infinite recursive types (without a base case) are a compile error." },
      { q: "What is the 'satisfies' operator and how does it differ from type assertion?", a: "The satisfies operator (TypeScript 4.9+) validates that a value satisfies a type without widening the value's type. const config = { theme: 'dark', fontSize: 14 } satisfies AppConfig — TypeScript validates config has all required AppConfig properties, but config.theme is still string literal 'dark' (not widened to string as it would be with const config: AppConfig = ...). With : AppConfig annotation, config.theme is widened to the type's string. With satisfies, the narrower inferred type is preserved. Use satisfies when you want validation without losing literal type information." },
      { q: "How do you write type-safe dependency injection without a framework?", a: "Two patterns: (1) Constructor injection with interfaces — define IUserService and IProductService interfaces, inject via constructor: class OrderService { constructor(private users: IUserService, private products: IProductService) {} }. In tests: new OrderService(mockUserService, mockProductService). (2) Generic service locator — type Container<T extends Record<string, unknown>> = { get<K extends keyof T>(key: K): T[K] }. Define the service registry type: type Services = { userService: UserService; productService: ProductService }. const container: Container<Services> — container.get('userService') returns UserService. TypeScript enforces both the key exists and the return type is correct." },
      { q: "How do branded/nominal types work and when would you use them?", a: "TypeScript's structural typing means string and string are always compatible, so function transfer(from: string, to: string) can't distinguish between user IDs and product IDs at the type level. Branded types create nominal-like types: type UserId = string & { readonly _brand: 'UserId' }. Now function transfer(from: UserId, to: UserId) rejects plain strings and ProductIds at compile time, preventing the wrong-argument-order bug. Implementation: a brand factory function function userId(s: string): UserId { return s as UserId } validates input. Cost: zero runtime overhead (the _brand property doesn't exist at runtime — it's a type fiction that TypeScript uses for checking)." },
      { q: "Describe a strategy for migrating a 50,000-line JavaScript codebase to TypeScript.", a: "Phase 1 (1 week): Add TypeScript infrastructure. tsconfig.json with allowJs: true, checkJs: false, strict: false. Rename one utility file to .ts, fix its errors. Add @typescript-eslint rules to track any usage. Phase 2 (4–8 weeks): Migrate leaves to roots. Start with shared types (create types/ directory), then utilities, then data access layer, then services, then controllers. Enable checkJs: true on migrated files. Track any count in CI — it must decrease each sprint. Phase 3 (2 weeks): Enable strict options. Enable strictNullChecks first (most impactful), fix errors. Then noImplicitAny, then the remaining strict options. Phase 4 (ongoing): Enable noUncheckedIndexedAccess, exactOptionalPropertyTypes. Every PR review checks for new any usage. Measure bugs found per migration sprint — the team motivation." },
    ],
  },

  // ── SECTION 11: COMPARISON ───────────────────────────────────────
  comparison: {
    headers: ["Feature", "TypeScript", "JavaScript", "Flow", "JSDoc Types"],
    rows: [
      { feature: "Type System", react: "Static, structural, sound (with strict)", vue: "Dynamic (runtime only)", angular: "Static, structural, Facebook-developed", extra: "Inline documentation, partial checking" },
      { feature: "Compile-time checking", react: "Yes — full program analysis", vue: "No — runtime errors only", angular: "Yes — similar depth to TypeScript", extra: "Partial — only files with @ts-check enabled" },
      { feature: "Inference Power", react: "Excellent — infers complex types automatically", vue: "N/A", angular: "Good — similar to TypeScript", extra: "Limited — requires manual @type annotations" },
      { feature: "Generics", react: "Full generics with constraints, defaults, infer", vue: "N/A", angular: "Full generics (similar)", extra: "Basic generics via JSDoc @template" },
      { feature: "IDE Support", react: "Exceptional — best-in-class autocomplete/hover", vue: "Good — basic autocompletion only", angular: "Good — Flow Language Server", extra: "Good in VS Code with @ts-check" },
      { feature: "Ecosystem Adoption", react: "Dominant — most major frameworks first-class TS", vue: "Universal baseline", angular: "Declining — most projects migrating to TypeScript", extra: "Niche — used in some Node.js projects" },
      { feature: "React Support", react: "Excellent — @types/react, JSX support", vue: "N/A", angular: "Good but declining use in React", extra: "Adequate with @ts-check" },
      { feature: "Node.js Support", react: "Excellent — @types/node, full ecosystem", vue: "N/A", angular: "Good", extra: "Adequate" },
      { feature: "Bundle Impact", react: "Zero — types fully erased at compile time", vue: "Zero", angular: "Zero — types erased", extra: "Zero — JSDoc is comments" },
      { feature: "Learning Curve", react: "Moderate — 2–3 weeks for fundamentals, months for advanced", vue: "None (already JavaScript)", angular: "Moderate — similar to TypeScript", extra: "Low — gradual annotation of existing JS" },
      { feature: "India Job Market", react: "Dominant and growing — required at most product companies", vue: "Universal baseline requirement", angular: "Declining — being replaced by TypeScript", extra: "Not mentioned in job descriptions" },
    ],
  },

  // ── SECTION 12: PROS & CONS ──────────────────────────────────────
  pros: [
    "Catches entire categories of production bugs at compile time — null dereferences, wrong argument types, missing properties — before the code runs",
    "IDE IntelliSense transforms developer productivity — autocompletion, hover documentation, go-to-definition, and instant inline error display with VS Code",
    "Enables fearless large-scale refactoring — rename a function parameter and the compiler instantly shows every broken callsite across the entire codebase",
    "Self-documenting code — function signatures with types replace outdated comments and separate documentation that goes stale",
    "Zero runtime overhead — TypeScript types are fully erased at compile time; the output JavaScript is identical in performance to manually written JavaScript",
    "Gradual adoption — start with allowJs and add TypeScript incrementally; existing JavaScript remains valid TypeScript",
    "Largest typed ecosystem — @types packages for virtually every npm library; Prisma, tRPC, and major frameworks generate TypeScript types from schemas",
    "Universal professional standard in 2026 — expected at every product company above 20 developers; TypeScript proficiency signals professional-grade development",
  ],
  cons: [
    "Learning curve for advanced features — generics, conditional types, mapped types, and infer require significant investment before they become intuitive",
    "Build step required — TypeScript must be compiled before running; adds tooling complexity vs running JavaScript directly with Node.js",
    "Verbose in some scenarios — complex generic constraints, union type definitions, and advanced type utilities can be more verbose than the equivalent dynamic JavaScript",
    "False sense of security with as casts and any — improperly used type assertions bypass all safety guarantees without any runtime protection",
    "Type definition maintenance — @types packages can be outdated or incorrect; library type changes can break your build without any application code changes",
    "Compiler performance at scale — very large TypeScript codebases (100,000+ lines with complex types) can have slow type checking; requires tsconfig project references to manage",
    "Advanced type errors are cryptic — TypeScript's error messages for complex generic types can be extremely long and difficult to parse, especially for beginners",
    "Not JavaScript — TypeScript adds a cognitive overhead of thinking in two languages simultaneously (the type level and the value level), which takes time to become natural",
  ],

  // ── SECTION 13: FUTURE SCOPE ─────────────────────────────────────
  futureScope: [
    "The React Compiler (React 19) relies on TypeScript's type information to perform safe automatic memoization. Components with correct TypeScript types are optimized more aggressively than untyped components — TypeScript proficiency directly improves application performance in the React 19+ world. The React team's increasing reliance on TypeScript for their compilation infrastructure signals that TypeScript is not just a developer experience layer but a fundamental part of the React execution model going forward.",
    "tRPC's adoption is accelerating the 'TypeScript everywhere' philosophy in India's startup stack. As more teams adopt tRPC (or similar tools like ts-rest), the entire API surface from database schema to React component is represented in one TypeScript type system. A change to a database column propagates as a Prisma type change, which propagates as a tRPC router type change, which propagates as a React Query hook type change, which propagates as a React component prop change — all caught at compile time with zero runtime cost. This end-to-end type safety is the most compelling TypeScript use case for full-stack teams in 2026.",
    "TypeScript's type system as a specification language is an emerging use case in the developer tools space. Zod, Valibot, and ArkType — validation libraries built around TypeScript types — are making TypeScript types the primary way developers specify data contracts. Instead of writing a TypeScript type AND a validation schema (two things that must be kept in sync), you write one thing and derive the other. This convergence of TypeScript types and runtime validation is the biggest practical improvement in TypeScript developer experience since strict mode.",
    "The AI-assisted development wave is raising, not lowering, the value of TypeScript expertise. AI coding assistants (GitHub Copilot, Cursor, Claude) generate more accurate and useful suggestions when the codebase has explicit TypeScript types — the AI's context is richer and more unambiguous. Conversely, developers who understand TypeScript deeply can better evaluate and correct AI-generated code, catching type errors that AI tools occasionally introduce. TypeScript expertise becomes a multiplier on AI-assisted development productivity.",
    "In India's developer market, TypeScript's salary premium over JavaScript continues to grow as the supply of deeply proficient TypeScript developers remains constrained relative to demand. Companies that have migrated to TypeScript find that the primary bottleneck to maintaining and extending their TypeScript codebase is developers with deep TypeScript knowledge — particularly the ability to write generic types, understand complex type errors, and design type systems that scale. The 20–35% compensation premium for senior TypeScript developers over senior JavaScript developers reflects genuine scarcity. This premium will increase as more of India's technology sector adopts TypeScript and the demand for deep TypeScript expertise grows faster than the supply.",
  ],

  // ── SECTION 14: ACTION PLAN ──────────────────────────────────────
  actionPlan: [
    { week: "Week 1–2", title: "TypeScript Fundamentals — Build on Your JavaScript Foundation", desc: "Install TypeScript (npm install -g typescript), run npx tsc --init, and set strict: true immediately. Spend the first week re-implementing 5 JavaScript programs you already know in TypeScript — don't learn new algorithms, just add types to familiar code. A counter app with typed state, a fetch function with a typed response, a form validator with typed rules. The goal: understand how TypeScript type errors feel, how inference works, and when you need to add annotations. Use the TypeScript Playground (typescriptlang.org/play) for quick experiments." },
    { week: "Week 3–4", title: "Apply TypeScript to Your Existing React or Node.js Project", desc: "Take your best existing portfolio project (React or Node.js) and add TypeScript. If React: rename all .js/.jsx to .ts/.tsx, add explicit types to all component props, type all useState and useEffect dependencies, type all event handlers. If Node.js: type all Express route handlers and middleware, add interfaces for your database models. This will surface real TypeScript errors — fix each one instead of using as any. By the end of week 4, your existing project should have zero type errors and zero explicit any usages." },
    { week: "Week 5–7", title: "Generics and Utility Types — The Intermediate Leap", desc: "Work through generic functions, interfaces, and classes systematically. The key exercise: take your API layer and create a generic ApiResponse<T> wrapper that all endpoints use. Then create a generic useAsync<T> hook. Then create a generic Repository<T extends { id: string }> class. These three exercises teach generics in the most practical context. Then study all 12 built-in utility types (Partial, Required, Pick, Omit, Record, Exclude, Extract, NonNullable, ReturnType, Parameters, Awaited, InstanceType) with one real-world example each." },
    { week: "Week 8–10", title: "Advanced Types and the TypeScript + Zod Pattern", desc: "Learn mapped types, conditional types, and discriminated unions. For each, build something real: a DeepPartial utility type, a form state type derived from your form schema, a state machine for a checkout flow using discriminated unions. Then adopt Zod for all input validation in your Node.js API — define Zod schemas and derive TypeScript types from them with z.infer<>. This is the pattern used in production at Razorpay, Freshworks, and every serious TypeScript Node.js project. Build the typed REST API project from the intermediate list." },
    { week: "Week 11–14", title: "TypeScript in the Full Stack — Build the Portfolio Project", desc: "Build the tRPC Full-Stack Application from the advanced projects list. This forces you to understand TypeScript from database schema (Prisma) through API (tRPC router) to frontend (React Query hooks from tRPC). The entire data flow is typed with zero manual type annotations on the frontend — types flow automatically from server to client. This project demonstrates senior-level TypeScript proficiency in a single codebase. Add it to your GitHub with a detailed README explaining the type safety features." },
    { week: "Week 15+", title: "TypeScript Interviews and the Job Market", desc: "TypeScript is tested in interviews at two levels: (1) practical — write a generic function, type an event handler, fix a type error, or add types to an untyped function; (2) conceptual — explain the difference between interface and type, what strict mode enables, what any vs unknown means, when to use generics. Study both levels. Review the interview questions in this guide. On the portfolio side: every project in your portfolio should be TypeScript with strict: true and zero any. GitHub repositories with TypeScript tell a story of professional development standards that JavaScript-only repositories cannot. Most TypeScript roles report that candidates who demonstrate both practical TypeScript ability and conceptual understanding receive offers 2–3 weeks faster than JavaScript-only candidates." },
  ],
};
