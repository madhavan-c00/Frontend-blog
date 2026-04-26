import type { TechContent } from './types';

export const reactContent: TechContent = {
  techId: 'react',
  readTime: '30–35 min',
  difficulty: 'Beginner to Advanced',
  lastUpdated: '2026',

  // ── OPENING HOOK ─────────────────────────────────────────────────
  openingHook:
    "If you want to be the developer that every tech company in India — from a 5-person funded startup to a 50,000-person IT major — will interview for in 2026, learn React. Not because it's perfect. Not because it solves every problem. But because React is the undisputed lingua franca of modern frontend development. The numbers are unambiguous: React powers 42% of all websites using a JavaScript framework globally. In India specifically, React is listed in more job descriptions than Angular, Vue, and Svelte combined. Flipkart, Swiggy, Zepto, Paytm, MakeMyTrip, ShareChat, PhonePe, Meesho, BrowserStack, Freshworks — the products that hundreds of millions of Indians use every day are React applications. These companies don't all pick React because it's the best framework for every job. They pick React because it has the largest talent pool, the largest ecosystem, and the most battle-tested patterns for building complex UIs at scale. React's component model, the hooks API, and the ecosystem of libraries built on top of it have become the default vocabulary of frontend engineering. A developer who deeply understands React — not just how to use it, but why it works the way it does, what problems it solves, and what its limitations are — is employable anywhere from Bengaluru to Berlin to San Francisco. A React developer with two strong deployed projects, solid hooks knowledge, and real API integration experience is positioned for a ₹5–14 LPA role in 2026 — and ₹20–45 LPA within 3–4 years. This is not a React overview. This is the complete, no-fluff React roadmap — from zero concepts to job-ready developer.",

  // ── SECTION 1: INTRODUCTION ──────────────────────────────────────
  introText: [
    "React is a JavaScript library for building user interfaces, created by Facebook (now Meta) in 2013 and open-sourced in the same year. The key word is 'library' — React deliberately solves one problem and solves it extremely well: how to build reusable UI components and efficiently update the DOM when application state changes. Everything else — routing, data fetching, state management, form handling, testing — is handled by the ecosystem of libraries built around React. This philosophy of doing one thing well and delegating the rest is both React's greatest strength and its steepest onboarding curve.",
    "React introduced two ideas that changed frontend development permanently. First, the component model: UIs are built from isolated, composable, reusable pieces of code that combine data (props) and behavior (state) into a single unit. Second, the declarative rendering model: instead of manually manipulating the DOM ('find element with id X and change its text to Y'), you describe what the UI should look like given the current state, and React figures out the minimal DOM changes needed. These two ideas — components and declarative rendering — are now universal across every modern frontend framework. Angular, Vue, Svelte, and Solid all implement variations of these ideas. Understanding React teaches you the foundation of all modern frontend development.",
    "In India's developer market, React is the frontend skill with the widest applicability. Product companies building consumer apps (Swiggy, Zepto, Meesho), fintech platforms (Razorpay, Zerodha, Groww), SaaS companies building B2B tools (Freshworks, Chargebee, Postman), and even IT service companies with modern frontend practices all hire React developers. The global remote job market is even more skewed toward React — platforms like Toptal, Andela, and Arc.dev list React as the required skill in the majority of senior frontend and full-stack positions. In 2026, React knowledge is table stakes for any serious frontend developer role in India, and deep React knowledge — hooks, performance optimization, state management patterns, testing — is what differentiates a ₹8 LPA developer from a ₹25 LPA one.",
  ],

  realWorldUsages: [
    "Meta (Facebook, Instagram, WhatsApp Web) — React was built at Facebook; Facebook.com, Instagram's web app, and WhatsApp Web are all React applications",
    "Netflix — Netflix's web player, member sign-up flow, and the browsing interface are React applications optimized for performance across thousands of device types",
    "Airbnb — the entire Airbnb booking experience — search, listing detail, checkout, host dashboard — is a React SPA",
    "Flipkart — India's largest e-commerce platform runs React for its product listing, search, and checkout experiences",
    "Swiggy — the Swiggy web app and internal operations dashboards are built with React",
    "Zepto — the rapid grocery delivery platform's web ordering interface is React",
    "Paytm — Paytm's payment flow, merchant dashboard, and web mini-apps are React applications",
    "MakeMyTrip — flight search, hotel booking, and itinerary management interfaces built with React",
    "Freshworks — CRM, customer support, and ITSM SaaS products built entirely on React",
    "BrowserStack — the developer testing platform's dashboard, session management, and reporting UI are React applications",
    "Atlassian — Jira, Confluence, Trello, and Bitbucket web interfaces are React applications",
    "GitHub — GitHub's pull request review interface, code editor, and Actions dashboard use React components",
  ],

  // ── SECTION 2: WHY LEARN ─────────────────────────────────────────
  whyLearn: {
    demand:
      "React is the most in-demand frontend skill in India in 2026 by a significant margin. A Naukri.com search for 'React developer' returns 3–4x more listings than 'Angular developer' and 8–10x more than 'Vue developer'. LinkedIn India shows React as the top-requested frontend skill across all company sizes — from seed-stage startups to listed IT companies. The 2025 Stack Overflow Developer Survey found React to be the most used web framework among professional developers for the fourth consecutive year. What makes React's job market particularly valuable for Indian developers is its dual applicability: deep React knowledge is the entry point for product company roles (higher salary, better culture, more ownership) and is also the skill required for accessing remote global opportunities on platforms like Toptal, Arc.dev, and Contra. A senior React developer with TypeScript, testing knowledge, and performance optimization skills commands premium compensation in both India's domestic market and the global remote market.",
    jobRoles: [
      { role: "React Developer / Frontend Developer", desc: "The most common listing — build and maintain React applications, implement UI designs, integrate APIs, write component tests. Deep knowledge of hooks, component patterns, and state management expected at mid-level and above." },
      { role: "Full-Stack Developer (MERN)", desc: "Own both the React frontend and the Node.js/Express backend. The MERN stack (MongoDB, Express, React, Node) is the most common full-stack combination listed in Indian startup and product company job descriptions. The highest-value profile for small teams." },
      { role: "Frontend Engineer (Product)", desc: "At product companies — own specific product features end-to-end from design handoff to production deployment. React expertise expected alongside TypeScript, performance tooling, and A/B testing infrastructure." },
      { role: "UI Engineer / Design System Engineer", desc: "Build and maintain component libraries and design systems in React. Storybook, accessibility (a11y), TypeScript generics for flexible components, and visual regression testing are key skills. Rare but very well-compensated." },
      { role: "React Native Developer", desc: "Apply React knowledge to mobile — build iOS and Android apps using React Native. For developers who learn React well, React Native is a low-friction transition that doubles the job market accessible to them." },
      { role: "Tech Lead / Senior React Engineer", desc: "After 3–4 years: architect the component library, define state management patterns, establish testing conventions, mentor junior developers, own performance budgets, lead migration efforts (class components to hooks, Redux to Zustand)." },
    ],
    whyCompanies: [
      { reason: "Largest talent pool", detail: "React has more developers than any other frontend framework globally. When a company picks React, they can hire from the widest possible candidate pool — critical for fast-growing teams that need to hire 10 frontend engineers in a quarter." },
      { reason: "Ecosystem depth", detail: "Every UI problem React developers face has a battle-tested library solution: React Query for server state, Zustand for client state, React Hook Form for forms, Radix UI for accessible components, Recharts for data visualization, Framer Motion for animations. No other framework ecosystem is this deep." },
      { reason: "React Native for mobile", detail: "Companies that build React web applications can reuse component logic, hooks, state management patterns, and developer knowledge for their React Native mobile apps. One core team, multiple platforms. This is a significant engineering efficiency gain." },
      { reason: "Meta backing and long-term stability", detail: "React is used by Meta across billions of users on Facebook and Instagram. The framework is not going away — Meta's continued investment ensures React remains modern and well-maintained. React 18 (Concurrent Mode), React 19 (Server Components), and the ongoing compiler work (React Compiler/Forget) demonstrate an active development roadmap." },
    ],
    salaryRange: "₹4.5 LPA – ₹12 LPA (Freshers with strong portfolio) | ₹12 LPA – ₹28 LPA (Mid-Level, 2–4 years) | ₹28 LPA – ₹60 LPA (Senior/Staff, 5+ years) | ₹40–90 LPA (Remote global roles, 4+ years)",
    careerNote:
      "React is the foundation, not the ceiling. Once you're solid in React, the career path branches powerfully: Next.js for full-stack web (the most common progression), React Native for mobile, and TypeScript + testing + system design for senior engineering roles at product companies. Developers who combine React with Next.js, TypeScript, Tailwind CSS, and a backend (Node.js + Prisma or Node.js + MongoDB) become full-stack product engineers — the highest-value profile at early-stage startups and a premium hire at growth-stage companies. Senior React engineers with performance optimization and testing depth at Indian product companies regularly earn ₹35–60 LPA. The global remote market for senior React developers paying $120,000–$180,000 USD is accessible to Indian developers with strong portfolios — the most significant salary arbitrage opportunity in Indian tech in 2026.",
  },

  // ── SECTION 3: HOW IT WORKS ──────────────────────────────────────
  howItWorks: {
    intro:
      "Think of React like a smart television display system. The screen (DOM) shows what's currently playing. React is the director who decides what the screen should look like at any moment. When you change the channel (update state), the director doesn't repaint the entire screen — they compare the new script (Virtual DOM) to what's currently showing, identify only the scenes that changed (diffing), and tell the screen to update only those specific parts (reconciliation). The actors (components) are reusable — the same 'News Ticker' component runs identically on the sports channel and the business channel, just with different data (props). Directors within directors (component composition) means complex productions are broken into manageable, independently rehearsable scenes. This combination of reusable components, efficient DOM updates, and declarative descriptions of what should show — rather than instructions for how to update — is the foundation of every React application.",
    vdomSteps: [
      { num: "1", title: "JSX Compiles to React.createElement Calls", text: "You write JSX — HTML-like syntax in JavaScript. Babel (or React's new compiler) transforms this into React.createElement() calls. <ProductCard product={item} /> becomes React.createElement(ProductCard, { product: item }). The result is a plain JavaScript object — a React Element — describing what should render: its type, props, and children. This is the Virtual DOM — a lightweight JavaScript representation of the actual DOM." },
      { num: "2", title: "React Builds a Fiber Tree", text: "React maintains an internal tree structure called the Fiber tree — one Fiber node per component instance. Each Fiber stores the component's type, current props, state, effect list, and links to parent/child/sibling Fibers. This Fiber architecture (introduced in React 16) enables work to be paused, prioritized, and resumed — the foundation of Concurrent Mode and automatic batching in React 18." },
      { num: "3", title: "State Update Triggers Re-render", text: "When state changes (via useState setter, useReducer dispatch, or an external store), React schedules a re-render for that component. In React 18, multiple state updates within the same event are automatically batched into one re-render. React calls the component function again with the new state — producing a new Virtual DOM tree (React Elements) describing what the UI should now look like." },
      { num: "4", title: "Diffing Compares Old and New Trees", text: "React's reconciler compares the previous Fiber tree to the new Element tree — the 'diffing' algorithm. It uses two heuristics: elements of different types produce different trees (if a div becomes a span, rebuild the whole subtree), and keys identify which list items are which across renders (enable efficient list reordering). The output is a list of DOM operations: create, update, or delete nodes." },
      { num: "5", title: "Commit Phase Updates the Real DOM", text: "React applies the minimal set of DOM mutations identified by diffing. This is the only point where the actual browser DOM is touched. React also runs effects — useEffect, useLayoutEffect — after the commit. Layout effects (useLayoutEffect) run synchronously after DOM mutations but before the browser paints. Regular effects (useEffect) run after the browser paints. After commit, React yields control back to the browser for painting." },
    ],
    componentCode: `// THE REACT DATA FLOW — one complete feature, all major concepts connected

// 1. TYPES — TypeScript interfaces define the data shape
interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  inStock: boolean;
  imageUrl: string;
  rating: number;
  reviewCount: number;
}

interface ApiState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

// 2. CUSTOM HOOK — encapsulates data fetching logic, reusable across components
function useProducts(filters: { category: string; search: string; page: number }) {
  const [state, setState] = useState<ApiState<{ products: Product[]; total: number }>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    let cancelled = false;   // Cleanup flag — prevents state update on unmounted component

    setState(prev => ({ ...prev, loading: true, error: null }));

    const params = new URLSearchParams({
      category: filters.category,
      search: filters.search,
      page: String(filters.page),
    });

    fetch(\`/api/products?\${params}\`)
      .then(res => {
        if (!res.ok) throw new Error(\`HTTP \${res.status}: \${res.statusText}\`);
        return res.json();
      })
      .then(data => {
        if (!cancelled) setState({ data, loading: false, error: null });
      })
      .catch(err => {
        if (!cancelled) setState({ data: null, loading: false, error: err.message });
      });

    return () => { cancelled = true; };  // Cleanup on unmount or filter change
  }, [filters.category, filters.search, filters.page]);  // Re-run when filters change

  return state;
}

// 3. CONTEXT — global state without prop drilling (auth, theme, cart)
const CartContext = createContext<CartContextValue | null>(null);

function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = useCallback((product: Product) => {
    setItems(prev => {
      const existing = prev.find(i => i.id === product.id);
      if (existing) return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...product, qty: 1 }];
    });
  }, []);

  const removeItem = useCallback((id: string) => {
    setItems(prev => prev.filter(i => i.id !== id));
  }, []);

  const total = useMemo(() => items.reduce((sum, i) => sum + i.price * i.qty, 0), [items]);
  const count = useMemo(() => items.reduce((sum, i) => sum + i.qty, 0), [items]);

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, total, count }}>
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}

// 4. SMART CONTAINER COMPONENT — fetches data, manages filter state
function ProductsPage() {
  const [filters, setFilters] = useState({ category: 'all', search: '', page: 1 });
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const { data, loading, error } = useProducts({ ...filters, search: debouncedSearch });

  // Debounce search input — avoid API call on every keystroke
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearch(filters.search), 400);
    return () => clearTimeout(timer);
  }, [filters.search]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters(prev => ({ ...prev, search: e.target.value, page: 1 }));
  };

  const handleCategoryChange = (category: string) => {
    setFilters(prev => ({ ...prev, category, page: 1 }));
  };

  if (error) return <ErrorState message={error} onRetry={() => setFilters(f => ({ ...f }))} />;

  return (
    <div className="container mx-auto px-4 py-8">
      <SearchBar value={filters.search} onChange={handleSearchChange} />
      <CategoryFilter selected={filters.category} onChange={handleCategoryChange} />
      {loading ? (
        <ProductGridSkeleton />
      ) : (
        <ProductGrid
          products={data?.products ?? []}
          total={data?.total ?? 0}
          page={filters.page}
          onPageChange={page => setFilters(prev => ({ ...prev, page }))}
        />
      )}
    </div>
  );
}

// 5. DUMB PRESENTATIONAL COMPONENT — receives data via props, emits events
const ProductCard = React.memo(function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();  // Context — no prop drilling needed

  return (
    <div className="rounded-xl border bg-white shadow-sm hover:shadow-md transition-shadow">
      <img src={product.imageUrl} alt={product.name} className="w-full aspect-square object-cover rounded-t-xl" loading="lazy" />
      <div className="p-4">
        <h3 className="font-semibold truncate">{product.name}</h3>
        <p className="text-lg font-bold text-indigo-600 mt-1">
          ₹{product.price.toLocaleString('en-IN')}
        </p>
        <div className="flex items-center gap-1 mt-1 text-sm text-gray-500">
          <span>⭐ {product.rating}</span>
          <span>({product.reviewCount.toLocaleString()})</span>
        </div>
        <button
          onClick={() => addItem(product)}
          disabled={!product.inStock}
          className="mt-3 w-full py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium disabled:opacity-50 hover:bg-indigo-700 transition-colors">
          {product.inStock ? 'Add to Cart' : 'Out of Stock'}
        </button>
      </div>
    </div>
  );
});
// React.memo: re-renders only when product prop changes (reference equality check)`,
    renderCycle: [
      "JSX compiled to React.createElement() → plain JavaScript objects describing UI (Virtual DOM)",
      "React builds Fiber tree → one Fiber per component, stores state, props, effects",
      "State update triggered → React schedules re-render → component function called again",
      "Diffing algorithm → compares previous Fiber tree to new Element tree → computes minimal DOM operations",
      "Commit phase → applies DOM mutations → runs layout effects (useLayoutEffect) → browser paints",
      "useEffect runs after paint → data fetching, subscriptions, timers → cleanup on unmount or deps change",
    ],
    closingNote:
      "This six-step cycle — JSX → Virtual DOM → Fiber tree → state update → diffing → commit — is the engine of every React application. Once you can trace any feature through this cycle, you understand why React behaves the way it does: why state updates are asynchronous, why you need cleanup in useEffect, why keys matter in lists, why React.memo works, and why infinite render loops happen. Every advanced React topic — Concurrent Mode, Suspense, Server Components — is a refinement of one step in this cycle.",
  },

  // ── SECTION 4: CORE CONCEPTS ─────────────────────────────────────
  coreConcepts: [
    {
      id: "hooks-deep",
      number: "4.1",
      title: "React Hooks — The Complete Foundation",
      icon: "🪝",
      color: "blue",
      intro:
        "Hooks are functions that let you 'hook into' React's state and lifecycle from function components. Introduced in React 16.8, hooks replaced class components as the standard way to write React. Every React developer is expected to deeply understand the core hooks — useState, useEffect, useRef, useMemo, useCallback, useContext, useReducer — and know when each is appropriate. The majority of React interview questions at any level revolve around hooks: their rules, their mental models, and their common mistakes.",
      code: `// THE COMPLETE HOOKS REFERENCE — every hook you need in production React

// 1. useState — synchronous state for simple values
const [count, setCount] = useState(0);
const [user, setUser] = useState<User | null>(null);
const [filters, setFilters] = useState({ category: 'all', search: '', page: 1 });

// Functional update form — use when new state depends on previous state
setCount(prev => prev + 1);  // Correct — uses latest state
setFilters(prev => ({ ...prev, page: 1 }));  // Correct — spread then override

// 2. useEffect — synchronize with external systems (APIs, subscriptions, timers)
useEffect(() => {
  // Effect runs AFTER render and after browser paint
  let cancelled = false;

  fetchUser(userId).then(data => {
    if (!cancelled) setUser(data);  // Guard against unmounted component
  });

  // CLEANUP FUNCTION — runs before next effect and on unmount
  return () => { cancelled = true; };
}, [userId]);  // DEPENDENCY ARRAY — re-run only when userId changes
// [] — run once after first render (component did mount)
// [dep] — run after first render AND after any render where dep changed
// No array — run after EVERY render (almost never correct)

// 3. useRef — mutable value that doesn't trigger re-render; also DOM access
const inputRef = useRef<HTMLInputElement>(null);
const timerRef = useRef<number | null>(null);
const prevValueRef = useRef(value);  // Store previous value without re-render

useEffect(() => {
  inputRef.current?.focus();  // DOM access — only after mount
}, []);

// Stable timer that doesn't cause stale closures
function startTimer() {
  timerRef.current = window.setInterval(() => tick(), 1000);
}
function stopTimer() {
  if (timerRef.current) clearInterval(timerRef.current);
}

// 4. useMemo — memoize expensive computed values (recompute only when deps change)
const sortedProducts = useMemo(() => {
  return [...products].sort((a, b) =>
    sortOrder === 'price-asc' ? a.price - b.price : b.price - a.price
  );
}, [products, sortOrder]);
// WITHOUT useMemo: re-sorts on every render (even unrelated state changes)
// WITH useMemo: re-sorts only when products or sortOrder changes
// Rule: only add useMemo when the computation is expensive (sort >1000 items, filter large arrays)

// 5. useCallback — memoize function references (stable identity across renders)
const handleAddToCart = useCallback((product: Product) => {
  dispatch({ type: 'ADD_ITEM', payload: product });
}, [dispatch]);  // Only recreates if dispatch changes (it won't — useReducer dispatch is stable)
// WITHOUT useCallback: new function reference on every render → React.memo child re-renders anyway
// WITH useCallback + React.memo child: child only re-renders when handler logic changes

// 6. useContext — consume context without prop drilling
const theme = useContext(ThemeContext);
const { user, logout } = useContext(AuthContext);
// Best practice: never put raw useContext in components — wrap in custom hook:
function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}

// 7. useReducer — complex state with multiple sub-values and related transitions
type CartAction =
  | { type: 'ADD_ITEM'; payload: Product }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QTY'; payload: { id: string; qty: number } }
  | { type: 'CLEAR' };

function cartReducer(state: CartItem[], action: CartAction): CartItem[] {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.find(i => i.id === action.payload.id);
      if (existing) return state.map(i => i.id === action.payload.id ? { ...i, qty: i.qty + 1 } : i);
      return [...state, { ...action.payload, qty: 1 }];
    }
    case 'REMOVE_ITEM': return state.filter(i => i.id !== action.payload);
    case 'UPDATE_QTY': return state.map(i => i.id === action.payload.id ? { ...i, qty: action.payload.qty } : i);
    case 'CLEAR': return [];
    default: return state;
  }
}

const [cart, dispatch] = useReducer(cartReducer, []);
// useReducer over useState when: multiple related state fields, state transitions have names,
// next state depends on previous in complex ways, you want testable pure reducer functions

// 8. useId — stable unique IDs for accessibility (React 18+)
const id = useId();
return (
  <>
    <label htmlFor={\`\${id}-email\`}>Email</label>
    <input id={\`\${id}-email\`} type="email" />
  </>
);

// 9. useTransition — mark state updates as non-urgent (React 18+)
const [isPending, startTransition] = useTransition();
function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
  setInputValue(e.target.value);        // Urgent — input updates immediately
  startTransition(() => {
    setSearchQuery(e.target.value);     // Non-urgent — can be interrupted by more urgent updates
  });
}

// 10. useDeferredValue — defer re-rendering of expensive component (React 18+)
const deferredQuery = useDeferredValue(searchQuery);  // Lags behind searchQuery
// <ExpensiveSearchResults query={deferredQuery} /> — renders with stale data while urgent update processes
// Shows old results while typing (no spinner) → updates when browser is idle

// CUSTOM HOOK PATTERN — extract reusable logic
function useDebounce<T>(value: T, delay: number): T {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  return debounced;
}

function useLocalStorage<T>(key: string, initialValue: T) {
  const [stored, setStored] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch { return initialValue; }
  });
  const setValue = (value: T | ((prev: T) => T)) => {
    const toStore = value instanceof Function ? value(stored) : value;
    setStored(toStore);
    localStorage.setItem(key, JSON.stringify(toStore));
  };
  return [stored, setValue] as const;
}

// Usage: replaces useState but persists to localStorage
const [theme, setTheme] = useLocalStorage('theme', 'light');`,
      usage:
        "useState for all component-local state. useEffect for data fetching, subscriptions, and DOM side effects — always with cleanup. useRef for DOM access and mutable values that shouldn't trigger re-renders. useMemo for expensive computations. useCallback for stable function references passed to memoized children. useReducer when state transitions become complex or have names. Custom hooks for any logic you find yourself duplicating across components.",
      mistake:
        "Missing dependencies in useEffect's dependency array — the most common React bug. If you use a variable inside useEffect but don't include it in the dependency array, the effect closes over a stale value. The ESLint rule exhaustive-deps catches this. The fix is almost always to add the missing dependency — not to suppress the warning. The exception: if adding a dependency causes an infinite loop, restructure the effect (use useRef for the value, or move the value inside the effect).",
    },
    {
      id: "component-patterns",
      number: "4.2",
      title: "Component Patterns — Building Scalable React UIs",
      icon: "🧱",
      color: "emerald",
      intro:
        "React components can be composed in many ways, but experienced React developers recognize a set of patterns that solve recurring architecture problems. Compound Components eliminate prop drilling in complex UI. Render Props and Higher-Order Components were the predecessors to hooks for logic sharing. Controlled vs Uncontrolled components is a foundational distinction for forms. The Container/Presenter split is the most important pattern for keeping components testable. Knowing these patterns — and when to reach for each — is what senior React interviewers test.",
      code: `// PATTERN 1: CONTROLLED vs UNCONTROLLED COMPONENTS
// Controlled: React state is the source of truth — required for validation, dependent inputs
function ControlledInput() {
  const [value, setValue] = useState('');
  return (
    <input
      value={value}                  // React controls the value
      onChange={e => setValue(e.target.value)}  // React updates on every keystroke
      placeholder="Controlled input"
    />
  );
}
// Uncontrolled: DOM is the source of truth — use ref to read value on demand
function UncontrolledForm() {
  const nameRef = useRef<HTMLInputElement>(null);
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(nameRef.current?.value);  // Read only when needed (submit)
  };
  return <form onSubmit={onSubmit}><input ref={nameRef} defaultValue="" /></form>;
}

// PATTERN 2: COMPOUND COMPONENTS — components that work together, sharing implicit state
// Consumer doesn't need to manage open/close state or pass it as props
// Example: Select, Tabs, Accordion, Menu

const TabsContext = createContext<{ active: string; setActive: (id: string) => void } | null>(null);

function Tabs({ defaultTab, children }: { defaultTab: string; children: React.ReactNode }) {
  const [active, setActive] = useState(defaultTab);
  return <TabsContext.Provider value={{ active, setActive }}>{children}</TabsContext.Provider>;
}

Tabs.List = function TabList({ children }: { children: React.ReactNode }) {
  return <div role="tablist" className="flex border-b">{children}</div>;
};

Tabs.Tab = function Tab({ id, children }: { id: string; children: React.ReactNode }) {
  const { active, setActive } = useContext(TabsContext)!;
  return (
    <button
      role="tab"
      aria-selected={active === id}
      onClick={() => setActive(id)}
      className={\`px-4 py-2 text-sm font-medium border-b-2 \${active === id ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700'}\`}>
      {children}
    </button>
  );
};

Tabs.Panel = function TabPanel({ id, children }: { id: string; children: React.ReactNode }) {
  const { active } = useContext(TabsContext)!;
  if (active !== id) return null;
  return <div role="tabpanel">{children}</div>;
};

// Usage — clean, no state management needed by consumer
function ProductDetailTabs({ product }: { product: Product }) {
  return (
    <Tabs defaultTab="description">
      <Tabs.List>
        <Tabs.Tab id="description">Description</Tabs.Tab>
        <Tabs.Tab id="specs">Specifications</Tabs.Tab>
        <Tabs.Tab id="reviews">Reviews</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel id="description"><p>{product.description}</p></Tabs.Panel>
      <Tabs.Panel id="specs"><SpecsTable specs={product.specs} /></Tabs.Panel>
      <Tabs.Panel id="reviews"><ReviewsList productId={product.id} /></Tabs.Panel>
    </Tabs>
  );
}

// PATTERN 3: RENDER PROPS / CHILDREN AS FUNCTION
// Shares stateful logic with any component via a render function
function MouseTracker({ children }: { children: (position: { x: number; y: number }) => React.ReactNode }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  return (
    <div onMouseMove={e => setPosition({ x: e.clientX, y: e.clientY })} className="relative w-full h-full">
      {children(position)}
    </div>
  );
}
// Usage:
// <MouseTracker>{({ x, y }) => <Tooltip x={x} y={y} />}</MouseTracker>
// Note: Custom hooks solve most render prop use cases more cleanly today

// PATTERN 4: FORWARDING REFS — pass ref through component to underlying DOM element
const Input = forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  function Input({ className, ...props }, ref) {
    return (
      <input
        ref={ref}               // Passes ref down to the native <input>
        className={\`border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 \${className}\`}
        {...props}
      />
    );
  }
);
// Now parent can do: const inputRef = useRef<HTMLInputElement>(null); <Input ref={inputRef} />
// Required for any reusable input/form component that parent might need to focus programmatically

// PATTERN 5: POLYMORPHIC COMPONENTS — component that can render as any HTML element or component
interface BoxProps<T extends React.ElementType = 'div'> {
  as?: T;
  children?: React.ReactNode;
  className?: string;
}

function Box<T extends React.ElementType = 'div'>({
  as,
  children,
  className,
  ...props
}: BoxProps<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof BoxProps<T>>) {
  const Component = as ?? 'div';
  return <Component className={className} {...props}>{children}</Component>;
}
// Usage: <Box>div</Box>  |  <Box as="section">section</Box>  |  <Box as={Link} href="/about">Link</Box>

// PATTERN 6: HIGHER-ORDER COMPONENTS (HOC) — wraps component to add behavior
// Used today mainly for cross-cutting concerns: logging, auth, feature flags
function withAuth<P extends object>(WrappedComponent: React.ComponentType<P>) {
  return function AuthenticatedComponent(props: P) {
    const { user, loading } = useAuth();
    if (loading) return <PageSkeleton />;
    if (!user) return <Navigate to="/login" />;
    return <WrappedComponent {...props} />;
  };
}
const ProtectedDashboard = withAuth(DashboardPage);

// PATTERN 7: CONTAINER / PRESENTER — the most universally applicable pattern
// Container: handles data fetching, state, side effects — no styling concerns
function ProductListContainer() {
  const [page, setPage] = useState(1);
  const { data, loading, error } = useProducts({ page });
  if (loading) return <ProductListSkeleton />;
  if (error) return <ErrorMessage error={error} />;
  return <ProductListPresenter products={data!.products} total={data!.total} page={page} onPageChange={setPage} />;
}

// Presenter: pure rendering — given same props, always renders same output. No hooks except style-related.
function ProductListPresenter({ products, total, page, onPageChange }: ProductListPresenterProps) {
  return (
    <div>
      <div className="grid grid-cols-4 gap-6">
        {products.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
      <Pagination total={total} page={page} onChange={onPageChange} />
    </div>
  );
}`,
      usage:
        "Controlled components for all form inputs that need validation, conditional behavior, or derived state. Compound Components for complex UI elements (tabs, accordions, multi-step forms) where sub-components need shared state but consumers shouldn't manage it. forwardRef for every reusable form input component. Container/Presenter split for all data-fetching components — makes both the data logic and the rendering independently testable.",
      mistake:
        "Building deeply nested prop-drilling trees instead of using Context or component composition. When a prop is passed through 3+ component levels without being used by intermediate components, it's a sign to either lift it to Context or restructure composition. However, the opposite error is also common — putting everything in Context 'to avoid prop drilling' when a small component tree doesn't warrant it. Props are the right tool when the relationship is direct; Context is the right tool when the relationship is distant.",
    },
    {
      id: "state-management-react",
      number: "4.3",
      title: "State Management — From useState to Zustand",
      icon: "🔄",
      color: "purple",
      intro:
        "State management is the most debated topic in the React ecosystem, and the right answer has shifted multiple times over React's history: Flux → Redux → Redux Toolkit → Context + hooks → Zustand/Jotai/Recoil → TanStack Query + lightweight global store. In 2026, the consensus is clear: TanStack Query for server state (data that comes from an API), Zustand for global client state (cart, auth, theme), and useState/useReducer for local component state. Understanding this layered model — and why Redux is no longer the default — is a senior-level React signal.",
      code: `// THE 2026 REACT STATE MANAGEMENT HIERARCHY

// LAYER 1: LOCAL STATE — useState and useReducer
// For state that only one component (and its children) cares about
function FilterPanel() {
  const [isOpen, setIsOpen] = useState(false);     // UI state — local only
  const [selected, setSelected] = useState('all'); // Form state — local until submitted
  return (...);
}

// LAYER 2: SERVER STATE — TanStack Query (React Query)
// For data that lives on a server: products, user profile, orders, search results
// Handles caching, background refresh, loading, error states, and mutations automatically

// queries/product-queries.ts — centralized query definitions
import { useQuery, useMutation, useQueryClient, useInfiniteQuery } from '@tanstack/react-query';

export const productKeys = {
  all: ['products'] as const,
  lists: () => [...productKeys.all, 'list'] as const,
  list: (filters: ProductFilters) => [...productKeys.lists(), filters] as const,
  detail: (id: string) => [...productKeys.all, 'detail', id] as const,
};

// Reading data — automatic caching, deduplication, background refresh
export function useProducts(filters: ProductFilters) {
  return useQuery({
    queryKey: productKeys.list(filters),
    queryFn: async () => {
      const params = new URLSearchParams(filters as Record<string, string>);
      const res = await fetch(\`/api/products?\${params}\`);
      if (!res.ok) throw new Error('Failed to fetch products');
      return res.json() as Promise<{ products: Product[]; total: number }>;
    },
    staleTime: 5 * 60 * 1000,      // Data is 'fresh' for 5 minutes — no background refetch
    placeholderData: keepPreviousData,  // Show old data while new page/filter loads (no flash)
  });
}

// Mutations — create/update/delete with automatic cache invalidation
export function useCreateProduct() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: CreateProductDto) =>
      fetch('/api/products', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
        .then(res => res.json()),
    onSuccess: (newProduct) => {
      // Invalidate product lists — triggers background refetch
      queryClient.invalidateQueries({ queryKey: productKeys.lists() });
      // Seed the detail cache — no extra fetch for the new product detail page
      queryClient.setQueryData(productKeys.detail(newProduct.id), newProduct);
    },
  });
}

// Optimistic updates — UI updates before server confirms
export function useToggleWishlist() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (productId: string) =>
      fetch(\`/api/wishlist/\${productId}\`, { method: 'POST' }).then(r => r.json()),
    onMutate: async (productId) => {
      await queryClient.cancelQueries({ queryKey: ['wishlist'] });
      const previous = queryClient.getQueryData(['wishlist']);
      queryClient.setQueryData(['wishlist'], (old: string[]) =>
        old.includes(productId) ? old.filter(id => id !== productId) : [...old, productId]
      );
      return { previous };  // Snapshot for rollback
    },
    onError: (err, _, context) => {
      queryClient.setQueryData(['wishlist'], context?.previous);  // Rollback on error
    },
  });
}

// Infinite scroll / pagination
export function useInfiniteProducts(filters: Omit<ProductFilters, 'page'>) {
  return useInfiniteQuery({
    queryKey: [...productKeys.lists(), 'infinite', filters],
    queryFn: ({ pageParam = 1 }) =>
      fetch(\`/api/products?page=\${pageParam}&\${new URLSearchParams(filters as any)}\`)
        .then(r => r.json()),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.hasMore ? allPages.length + 1 : undefined,
  });
}

// LAYER 3: GLOBAL CLIENT STATE — Zustand
// For state that doesn't come from a server: cart, sidebar open/closed, theme, notifications
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

interface CartStore {
  items: CartItem[];
  addItem: (product: Product, qty?: number) => void;
  removeItem: (id: string) => void;
  updateQty: (id: string, qty: number) => void;
  clearCart: () => void;
  // Derived state as getters
  get totalItems(): number;
  get totalPrice(): number;
}

export const useCartStore = create<CartStore>()(
  persist(
    immer((set, get) => ({
      items: [],
      addItem: (product, qty = 1) => set(state => {
        const existing = state.items.find(i => i.id === product.id);
        if (existing) { existing.qty += qty; }
        else { state.items.push({ ...product, qty }); }
        // Immer lets you mutate directly — no spread operators needed
      }),
      removeItem: (id) => set(state => {
        state.items = state.items.filter(i => i.id !== id);
      }),
      updateQty: (id, qty) => set(state => {
        const item = state.items.find(i => i.id === id);
        if (item) item.qty = qty;
        if (qty <= 0) state.items = state.items.filter(i => i.id !== id);
      }),
      clearCart: () => set(state => { state.items = []; }),
      get totalItems() { return get().items.reduce((sum, i) => sum + i.qty, 0); },
      get totalPrice() { return get().items.reduce((sum, i) => sum + i.price * i.qty, 0); },
    })),
    { name: 'cart-storage' }  // Persists to localStorage under key 'cart-storage'
  )
);

// Using Zustand — no Provider needed, no prop drilling, select only what you need
function CartIcon() {
  const totalItems = useCartStore(state => state.totalItems);  // Only re-renders when totalItems changes
  return <button className="relative"><BagIcon />{totalItems > 0 && <span className="badge">{totalItems}</span>}</button>;
}

function AddToCartButton({ product }: { product: Product }) {
  const addItem = useCartStore(state => state.addItem);  // Stable reference — no re-render on cart change
  return <button onClick={() => addItem(product)}>Add to Cart</button>;
}

// WHEN TO REACH FOR WHAT:
// useState          → local UI state (modal open, input value, tab selected)
// useReducer        → complex local state with named transitions
// Context           → global auth user, theme, locale — low-frequency updates
// TanStack Query    → any data from an API (read + write)
// Zustand           → cart, notifications, sidebar state, wizard step — no API
// Redux Toolkit     → only for codebases already on Redux, or teams requiring time-travel debugging`,
      usage:
        "TanStack Query replaces useEffect + fetch for all API data — it handles loading, error, caching, background refresh, and mutations in less code than a manual implementation. Zustand replaces both Context (for frequently-updated global state) and Redux (for most use cases) with 90% less boilerplate. useState remains the right tool for component-local state. This combination covers 100% of real-world React state management without Redux's ceremony.",
      mistake:
        "Fetching data in useEffect and manually managing loading/error/data state for every API call. This pattern — three useState variables (data, loading, error), a useEffect with a fetch(), and cleanup logic — is 20+ lines of code that re-implements a subset of what TanStack Query gives you out of the box. Once you've written it three times, add TanStack Query to your project.",
    },
    {
      id: "react-forms",
      number: "4.4",
      title: "Forms — React Hook Form and Validation",
      icon: "📋",
      color: "orange",
      intro:
        "Forms are where React applications spend most of their UI complexity budget. Every login, registration, checkout, settings page, and admin form involves controlled inputs, validation, error messages, async submission, and often multi-step logic. React Hook Form is the standard form library in 2026 — it uses uncontrolled inputs under the hood for performance (no re-render on every keystroke), integrates with Zod for schema-based validation, and handles form state with a fraction of the code of manual implementations. Understanding React Hook Form + Zod is expected knowledge in most React take-home tasks and interviews.",
      code: `// REACT HOOK FORM + ZOD — the 2026 standard for React forms

import { useForm, useFieldArray, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

// 1. ZOD SCHEMA — validation rules as TypeScript types
const registerSchema = z.object({
  firstName: z.string().min(2, 'Minimum 2 characters').max(50),
  lastName: z.string().min(2, 'Minimum 2 characters'),
  email: z.string().email('Enter a valid email address'),
  phone: z.string().regex(/^[6-9]\d{9}$/, 'Enter a valid 10-digit Indian mobile number'),
  password: z
    .string()
    .min(8, 'Minimum 8 characters')
    .regex(/[A-Z]/, 'Must contain an uppercase letter')
    .regex(/[0-9]/, 'Must contain a number')
    .regex(/[!@#$%^&*]/, 'Must contain a special character'),
  confirmPassword: z.string(),
  dob: z.string().refine(val => {
    const age = new Date().getFullYear() - new Date(val).getFullYear();
    return age >= 18;
  }, 'Must be at least 18 years old'),
  role: z.enum(['buyer', 'seller', 'admin']),
  addresses: z.array(z.object({
    street: z.string().min(5),
    city: z.string().min(2),
    state: z.string().min(2),
    pincode: z.string().regex(/^[1-9][0-9]{5}$/, 'Invalid PIN code'),
    isDefault: z.boolean(),
  })).min(1, 'Add at least one address'),
  newsletter: z.boolean().optional(),
}).refine(data => data.password === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword'],  // Which field gets the error
});

type RegisterFormData = z.infer<typeof registerSchema>;  // TypeScript type from schema — no duplication

// 2. FORM COMPONENT
function RegisterForm() {
  const {
    register,       // Connects input to form (registers name, validation)
    handleSubmit,   // Wraps onSubmit — calls validation first
    formState: { errors, isSubmitting, isDirty, isValid },
    watch,          // Subscribe to a field's current value
    setError,       // Set a server-side validation error on a field
    reset,          // Reset form to default values
    control,        // For Controller component (used with custom inputs)
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),  // Zod handles all validation
    defaultValues: {
      role: 'buyer',
      addresses: [{ street: '', city: '', state: '', pincode: '', isDefault: true }],
      newsletter: false,
    },
    mode: 'onBlur',  // Validate on blur (not on every keystroke) — good UX default
  });

  // Dynamic field array — add/remove address fields
  const { fields, append, remove } = useFieldArray({ control, name: 'addresses' });

  const password = watch('password');  // Watch password to show strength indicator

  async function onSubmit(data: RegisterFormData) {
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const error = await res.json();
        // Set server-side validation errors on specific fields
        if (error.field === 'email') {
          setError('email', { type: 'server', message: 'This email is already registered' });
        }
        return;
      }
      reset();  // Clear form on success
      router.push('/dashboard');
    } catch (err) {
      setError('root', { type: 'server', message: 'Registration failed. Please try again.' });
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">

      {/* Root-level server error */}
      {errors.root && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-sm text-red-700">
          {errors.root.message}
        </div>
      )}

      {/* Text input — register() attaches ref, onChange, onBlur, and name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
        <input
          {...register('firstName')}  // Spreads ref, name, onChange, onBlur
          className={\`w-full border rounded-lg px-3 py-2 \${errors.firstName ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-indigo-500'} focus:outline-none focus:ring-2\`}
          placeholder="Enter first name"
        />
        {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>}
      </div>

      {/* Select — register works on selects too */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
        <select {...register('role')} className="w-full border border-gray-300 rounded-lg px-3 py-2">
          <option value="buyer">Buyer</option>
          <option value="seller">Seller</option>
        </select>
      </div>

      {/* Checkbox with Controller — for custom or third-party inputs */}
      <Controller
        name="newsletter"
        control={control}
        render={({ field }) => (
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" checked={field.value} onChange={field.onChange} className="rounded" />
            <span className="text-sm text-gray-700">Subscribe to newsletter</span>
          </label>
        )}
      />

      {/* Dynamic address fields */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="font-medium">Addresses</h3>
          <button type="button" onClick={() => append({ street: '', city: '', state: '', pincode: '', isDefault: false })}
            className="text-sm text-indigo-600 hover:text-indigo-700">
            + Add Address
          </button>
        </div>
        {fields.map((field, index) => (
          <div key={field.id} className="border rounded-lg p-4 space-y-3">
            <input {...register(\`addresses.\${index}.street\`)} placeholder="Street address" className="w-full border rounded px-3 py-2" />
            {errors.addresses?.[index]?.street && <p className="text-sm text-red-600">{errors.addresses[index]?.street?.message}</p>}
            <div className="grid grid-cols-2 gap-3">
              <input {...register(\`addresses.\${index}.city\`)} placeholder="City" className="border rounded px-3 py-2" />
              <input {...register(\`addresses.\${index}.pincode\`)} placeholder="PIN code" className="border rounded px-3 py-2" />
            </div>
            {fields.length > 1 && (
              <button type="button" onClick={() => remove(index)} className="text-sm text-red-600">Remove</button>
            )}
          </div>
        ))}
      </div>

      <button
        type="submit"
        disabled={isSubmitting || !isDirty}
        className="w-full py-3 bg-indigo-600 text-white rounded-lg font-medium disabled:opacity-50 hover:bg-indigo-700 transition-colors">
        {isSubmitting ? 'Creating account...' : 'Create Account'}
      </button>
    </form>
  );
}`,
      usage:
        "React Hook Form + Zod is the standard form stack for React in 2026. Zod schema defines both the TypeScript type and all validation rules — no duplication. zodResolver bridges them. register() attaches to native inputs with zero re-renders. Controller wraps custom/third-party inputs. useFieldArray handles dynamic lists. setError() puts server validation errors on the right fields. This pattern handles 100% of form scenarios from a login form to a 10-step wizard.",
      mistake:
        "Using controlled inputs (useState + onChange for every field) for complex forms with 10+ fields. Every keystroke causes a re-render of the entire form. With 15 fields, a user typing a paragraph into a textarea triggers hundreds of re-renders. React Hook Form's uncontrolled approach eliminates this — inputs only trigger re-renders when validation state changes. The performance difference is invisible on simple forms but significant on complex ones.",
    },
    {
      id: "react-router",
      number: "4.5",
      title: "React Router v6 — Client-Side Navigation",
      icon: "🗺️",
      color: "yellow",
      intro:
        "React Router v6 is the standard client-side routing library for React applications not using Next.js. Understanding React Router — Routes, nested routes, URL params, query params, programmatic navigation, protected routes, and the data router (loaders and actions from v6.4+) — is foundational for any React developer building a multi-page SPA. Every React interview take-home task involves routing.",
      code: `// REACT ROUTER v6 — COMPLETE ROUTING SETUP

import { createBrowserRouter, RouterProvider, Outlet, Navigate, useNavigate, useParams, useSearchParams, useLocation } from 'react-router-dom';

// 1. ROUTER CONFIGURATION — React Router v6.4+ data router
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,     // Persistent layout (nav, footer)
    errorElement: <RootErrorPage />,  // Error boundary for this level
    children: [
      { index: true, element: <HomePage /> },  // Renders at '/'

      // PUBLIC ROUTES
      { path: 'login', element: <LoginPage /> },
      { path: 'register', element: <RegisterPage /> },

      // DATA ROUTER — loader pre-fetches before render (v6.4+)
      {
        path: 'products',
        element: <ProductsPage />,
        loader: async ({ request }) => {
          const url = new URL(request.url);
          const category = url.searchParams.get('category') ?? 'all';
          const res = await fetch(\`/api/products?category=\${category}\`);
          if (!res.ok) throw new Response('Not found', { status: 404 });
          return res.json();
        },
      },
      {
        path: 'products/:id',
        element: <ProductDetailPage />,
        loader: async ({ params }) => {
          const res = await fetch(\`/api/products/\${params.id}\`);
          if (!res.ok) throw new Response('Product not found', { status: 404 });
          return res.json();
        },
      },

      // PROTECTED ROUTES — wrapper component checks auth
      {
        element: <RequireAuth />,  // Checks auth, renders <Outlet /> if OK
        children: [
          { path: 'dashboard', element: <DashboardPage /> },
          { path: 'orders', element: <OrdersPage /> },
          { path: 'profile', element: <ProfilePage /> },
          {
            path: 'checkout',
            element: <CheckoutLayout />,  // Nested layout for checkout
            children: [
              { index: true, element: <Navigate to="cart" replace /> },
              { path: 'cart', element: <CartStep /> },
              { path: 'address', element: <AddressStep /> },
              { path: 'payment', element: <PaymentStep /> },
              { path: 'confirm', element: <ConfirmStep /> },
            ],
          },
        ],
      },

      // ADMIN ROUTES — role check
      {
        element: <RequireRole role="admin" />,
        children: [
          { path: 'admin', element: <AdminLayout />,
            children: [
              { index: true, element: <AdminDashboard /> },
              { path: 'products', element: <AdminProducts /> },
              { path: 'products/new', element: <NewProductForm /> },
              { path: 'products/:id/edit', element: <EditProductForm /> },
              { path: 'users', element: <AdminUsers /> },
            ],
          },
        ],
      },

      // CATCH-ALL
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

// 2. LAYOUTS
function RootLayout() {
  return (
    <>
      <Navbar />
      <Outlet />   {/* Child routes render here */}
      <Footer />
    </>
  );
}

// 3. PROTECTED ROUTE COMPONENT
function RequireAuth() {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) return <PageSkeleton />;
  if (!user) return <Navigate to={\`/login?next=\${location.pathname}\`} replace />;
  return <Outlet />;
}

function RequireRole({ role }: { role: string }) {
  const { user } = useAuth();
  if (!user || user.role !== role) return <Navigate to="/unauthorized" replace />;
  return <Outlet />;
}

// 4. NAVIGATION HOOKS IN COMPONENTS
function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();           // /products/:id → id = 'abc123'
  const [searchParams, setSearchParams] = useSearchParams();  // URL query string
  const navigate = useNavigate();
  const location = useLocation();                       // Current location object

  const tab = searchParams.get('tab') ?? 'description';
  const handleTabChange = (newTab: string) => {
    setSearchParams({ tab: newTab });  // Updates URL: /products/abc?tab=reviews
  };

  const { product } = useLoaderData() as { product: Product };  // Data from loader

  return (
    <div>
      <h1>{product.name}</h1>
      <button onClick={() => navigate(-1)}>Back</button>
      <button onClick={() => navigate(\`/products/\${id}/edit\`, { state: { product } })}>Edit</button>
      {/* Access state in destination: const { state } = useLocation(); state.product */}
    </div>
  );
}

// 5. LINK COMPONENTS
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <NavLink                          // NavLink adds 'active' class/style when route matches
        to="/products"
        className={({ isActive }) => isActive ? 'font-bold text-indigo-600' : 'text-gray-600'}>
        Products
      </NavLink>
      <Link to="/dashboard" state={{ from: 'navbar' }}>Dashboard</Link>
    </nav>
  );
}

// 6. PROGRAMMATIC NAVIGATION PATTERNS
function LoginPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const next = searchParams.get('next') ?? '/dashboard';

  async function handleLogin(data: LoginData) {
    await authService.login(data);
    navigate(next, { replace: true });  // replace: true removes login from history
  }
}`,
      usage:
        "React Router v6's data router (createBrowserRouter) with loaders and actions is the modern standard — it separates data fetching concerns from component rendering. Protected routes using RequireAuth and RequireRole wrapper components with Outlet are the cleanest pattern for role-based access. useParams for dynamic segments, useSearchParams for filter/sort/pagination state in the URL (enables bookmarkable, shareable filtered views).",
      mistake:
        "Putting navigation state (selected tab, current step in a wizard, active filter) in useState instead of URL params. State in useState is lost on page refresh, can't be bookmarked, and can't be shared. State in URL params (useSearchParams) persists across refreshes, can be bookmarked, can be shared, and enables the browser back button to navigate between filter states. Default to URL for any state that represents a shareable view.",
    },
    {
      id: "performance-react",
      number: "4.6",
      title: "React Performance Optimization",
      icon: "⚡",
      color: "red",
      intro:
        "React is fast by default for most use cases, but data-heavy dashboards, large lists, complex animations, and frequently-updating real-time interfaces require deliberate optimization. The five most impactful React performance techniques are: React.memo for expensive component memoization, useMemo and useCallback for stable references, lazy loading with React.lazy for code splitting, virtualization for large lists, and profiling with React DevTools to identify actual bottlenecks before optimizing. The most important rule: measure before optimizing — premature optimization adds complexity without benefit.",
      code: `// REACT PERFORMANCE TOOLKIT — every technique with correct usage

// 1. React.memo — prevent re-render when props haven't changed
// Use for: list item components, complex display components, components with expensive renders
const ProductCard = React.memo(function ProductCard({ product, onAddToCart }: ProductCardProps) {
  // Re-renders ONLY when product or onAddToCart reference changes
  return (...);
});
// Critical: React.memo does shallow comparison. { name: 'x' } !== { name: 'x' } (new object each render)
// If parent passes a new object/array each render, React.memo provides zero benefit
// Fix: memoize the prop with useMemo, or restructure to avoid creating new objects

// 2. useMemo — expensive computations
const expensiveResult = useMemo(() => {
  return largeProductArray
    .filter(p => p.category === selectedCategory && p.inStock)
    .sort((a, b) => a.price - b.price)
    .slice(0, 50);
}, [largeProductArray, selectedCategory]);
// Only recalculates when largeProductArray or selectedCategory changes
// DO NOT add useMemo to every computation — only for arrays >1000 items or operations >1ms

// 3. useCallback — stable function references for React.memo children
const handleAddToCart = useCallback((product: Product) => {
  dispatch({ type: 'ADD_ITEM', payload: product });
}, [dispatch]);  // dispatch from useReducer is always stable — this callback never recreates
// Without useCallback: new function on every parent render → React.memo on child is useless

// 4. React.lazy + Suspense — code-split heavy components (load only when needed)
const RichTextEditor = React.lazy(() => import('./components/rich-text-editor'));
const DataVisualization = React.lazy(() => import('./components/charts'));
const AdminPanel = React.lazy(() => import('./pages/admin'));

function App() {
  return (
    <Suspense fallback={<div className="animate-pulse bg-gray-100 rounded-lg h-64" />}>
      <Routes>
        <Route path="/write" element={<RichTextEditor />} />  {/* Editor JS only downloads on /write */}
        <Route path="/analytics" element={<DataVisualization />} />
        <Route path="/admin/*" element={<AdminPanel />} />
      </Routes>
    </Suspense>
  );
}
// Initial bundle is smaller. Each lazy component downloads only when first rendered.
// Recharts, Tiptap, Monaco Editor — large libraries that should always be lazy-loaded

// 5. VIRTUAL SCROLLING — render only visible items in large lists
import { useVirtualizer } from '@tanstack/react-virtual';

function VirtualProductList({ products }: { products: Product[] }) {
  const parentRef = useRef<HTMLDivElement>(null);

  const rowVirtualizer = useVirtualizer({
    count: products.length,       // Total item count
    getScrollElement: () => parentRef.current,
    estimateSize: () => 80,       // Estimated item height in pixels
    overscan: 5,                  // Render 5 items above/below the visible window
  });

  return (
    <div ref={parentRef} className="overflow-auto" style={{ height: '600px' }}>
      {/* Total scrollable height — creates the scroll position */}
      <div style={{ height: rowVirtualizer.getTotalSize() + 'px', width: '100%', position: 'relative' }}>
        {rowVirtualizer.getVirtualItems().map(virtualItem => (
          <div
            key={virtualItem.key}
            data-index={virtualItem.index}
            ref={rowVirtualizer.measureElement}  // Auto-measures actual heights
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', transform: \`translateY(\${virtualItem.start}px)\` }}>
            <ProductCard product={products[virtualItem.index]} />
          </div>
        ))}
      </div>
    </div>
  );
}
// Renders ~20 DOM nodes regardless of whether products has 100 or 100,000 items

// 6. AVOIDING EXPENSIVE RENDERS IN CONTEXT
// Problem: every Context value change re-renders ALL consumers
// Solution 1: Split contexts by update frequency
const UserContext = createContext<User | null>(null);          // Changes on login/logout
const UserActionsContext = createContext<UserActions | null>(null);  // Never changes (memoized)

// Solution 2: Memoize the context value
function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const login = useCallback(async (creds: Credentials) => { /* ... */ }, []);
  const logout = useCallback(() => { /* ... */ }, []);

  const value = useMemo(() => ({ user, login, logout }), [user, login, logout]);
  // Without useMemo: new object on every render → all consumers re-render even when user didn't change

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// 7. REACT COMPILER (React 19) — automatic memoization
// In React 19 with the React Compiler, you may not need manual useMemo/useCallback
// The compiler automatically memoizes components and hooks at the bytecode level
// Check if your project has React Compiler enabled:
// babel.config.js: plugins: [['babel-plugin-react-compiler', { target: '18' }]]
// With compiler enabled: less manual useMemo/useCallback needed — write natural React code

// 8. PROFILING WITH REACT DEVTOOLS
// 1. Install React Developer Tools browser extension
// 2. Open DevTools → Profiler tab
// 3. Click Record, perform the slow action, stop recording
// 4. Flame graph shows every component render and how long each took
// 5. "Why did this render?" shows which prop or state changed
// 6. Ranked chart shows most expensive renders sorted by time
// Look for: components rendering with same props (candidate for React.memo),
//           components rendering 50+ times per second (stale closure or unstable dependency)

// 9. KEY PATTERN — force component remount to reset state
function ProductEditor({ productId }: { productId: string }) {
  return (
    <Editor key={productId} />  // When productId changes, Editor unmounts and remounts fresh
    // Without key: Editor keeps stale state from previous product
    // With key: React destroys old instance and creates clean new one
  );
}`,
      usage:
        "Profile first with React DevTools Profiler — identify which components are slow and why before adding any optimization. Apply React.memo + useCallback as a pair to list item components. Use React.lazy for any import that adds >50KB to the bundle (Recharts, Tiptap, heavy UI libraries). Use @tanstack/react-virtual for any list longer than 100 items. Most React apps need zero manual optimization — premature optimization is the most common React anti-pattern.",
      mistake:
        "Wrapping every component in React.memo and every function in useCallback 'for performance'. React.memo only helps when re-renders are expensive AND props change less often than the parent re-renders. useCallback only helps when the callback is passed to a React.memo child. Both add cognitive overhead (dependency arrays to maintain) and memory usage. Measure first — React.memo on a component that renders in 0.1ms saves 0.1ms and adds maintenance cost.",
    },
    {
      id: "react-testing",
      number: "4.7",
      title: "Testing React — RTL, Jest, and MSW",
      icon: "🧪",
      color: "teal",
      intro:
        "Testing is the professional differentiator in React development. Developers who write tests get hired at product companies. Developers who don't get hired at agencies. The React testing stack in 2026 is: Jest (or Vitest) as the test runner, React Testing Library (RTL) for component tests, and MSW (Mock Service Worker) for API mocking. React Testing Library's guiding philosophy — test behavior, not implementation — produces tests that survive refactoring and catch real bugs. Understanding how to write tests that follow this philosophy is a senior-level React skill.",
      code: `// REACT TESTING LIBRARY — testing philosophy and patterns

// CORE PHILOSOPHY: Test what users see and do, not component internals
// BAD: checking component state, implementation details, or internal methods
// GOOD: checking what's rendered, what happens when users interact

// 1. BASIC COMPONENT TEST
import { render, screen, userEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

// Component to test:
function Counter({ initialCount = 0, onCountChange }: CounterProps) {
  const [count, setCount] = useState(initialCount);
  const increment = () => { setCount(c => c + 1); onCountChange?.(count + 1); };
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

describe('Counter', () => {
  it('renders initial count', () => {
    render(<Counter initialCount={5} />);
    expect(screen.getByText('Count: 5')).toBeInTheDocument();
  });

  it('increments count when button is clicked', async () => {
    const user = userEvent.setup();
    render(<Counter />);
    await user.click(screen.getByRole('button', { name: 'Increment' }));
    expect(screen.getByText('Count: 1')).toBeInTheDocument();
  });

  it('calls onCountChange with new count', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(<Counter onCountChange={handleChange} />);
    await user.click(screen.getByRole('button', { name: 'Increment' }));
    expect(handleChange).toHaveBeenCalledWith(1);
  });
});

// 2. TESTING ASYNC COMPONENTS — data fetching and loading states
import { waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import { server } from '../mocks/server';  // MSW server
import { http, HttpResponse } from 'msw';

describe('ProductList', () => {
  it('shows loading skeleton then renders products', async () => {
    render(<ProductList />);

    // Loading state is visible immediately
    expect(screen.getByTestId('product-skeleton')).toBeInTheDocument();

    // Wait for loading to finish and products to appear
    await waitForElementToBeRemoved(() => screen.queryByTestId('product-skeleton'));

    // Products are now visible (from MSW mock)
    expect(screen.getByText('iPhone 15 Pro')).toBeInTheDocument();
    expect(screen.getByText('Samsung Galaxy S24')).toBeInTheDocument();
  });

  it('shows error state when API fails', async () => {
    // Override the default MSW handler for this specific test
    server.use(
      http.get('/api/products', () => HttpResponse.json({ error: 'Server error' }, { status: 500 }))
    );

    render(<ProductList />);

    await waitFor(() => {
      expect(screen.getByRole('alert')).toBeInTheDocument();
      expect(screen.getByText(/failed to load/i)).toBeInTheDocument();
    });
  });
});

// 3. MSW SETUP — intercept real network requests in tests
// mocks/handlers.ts — define your mock API
import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('/api/products', ({ request }) => {
    const url = new URL(request.url);
    const category = url.searchParams.get('category');
    const products = mockProducts.filter(p => !category || category === 'all' || p.category === category);
    return HttpResponse.json({ products, total: products.length });
  }),

  http.get('/api/products/:id', ({ params }) => {
    const product = mockProducts.find(p => p.id === params.id);
    if (!product) return new HttpResponse(null, { status: 404 });
    return HttpResponse.json(product);
  }),

  http.post('/api/products', async ({ request }) => {
    const body = await request.json();
    const newProduct = { id: 'new-id', ...body };
    return HttpResponse.json(newProduct, { status: 201 });
  }),
];

// mocks/server.ts
import { setupServer } from 'msw/node';
import { handlers } from './handlers';
export const server = setupServer(...handlers);

// test-setup.ts
import { beforeAll, afterEach, afterAll } from 'vitest';
import { server } from './mocks/server';
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());  // Reset per-test overrides after each test
afterAll(() => server.close());

// 4. TESTING FORMS
describe('RegisterForm', () => {
  it('shows validation errors on empty submit', async () => {
    const user = userEvent.setup();
    render(<RegisterForm />);

    await user.click(screen.getByRole('button', { name: /create account/i }));

    expect(await screen.findByText(/minimum 2 characters/i)).toBeInTheDocument();
    expect(screen.getByText(/enter a valid email/i)).toBeInTheDocument();
  });

  it('submits form with valid data', async () => {
    const user = userEvent.setup();
    const onSuccess = vi.fn();
    render(<RegisterForm onSuccess={onSuccess} />);

    await user.type(screen.getByLabelText(/first name/i), 'Arjun');
    await user.type(screen.getByLabelText(/email/i), 'arjun@example.com');
    await user.type(screen.getByLabelText(/password/i), 'SecurePass123!');
    await user.click(screen.getByRole('button', { name: /create account/i }));

    await waitFor(() => expect(onSuccess).toHaveBeenCalled());
  });
});

// 5. TESTING WITH CONTEXT PROVIDERS — wrap with necessary providers
function renderWithProviders(ui: React.ReactElement, options?: RenderOptions) {
  function Wrapper({ children }: { children: React.ReactNode }) {
    return (
      <QueryClientProvider client={new QueryClient({ defaultOptions: { queries: { retry: false } } })}>
        <CartProvider>
          <AuthProvider>
            {children}
          </AuthProvider>
        </CartProvider>
      </QueryClientProvider>
    );
  }
  return render(ui, { wrapper: Wrapper, ...options });
}

// Use instead of render() for components that need providers:
it('adds item to cart', async () => {
  const user = userEvent.setup();
  const { getByRole, getByText } = renderWithProviders(<ProductCard product={mockProduct} />);
  await user.click(getByRole('button', { name: /add to cart/i }));
  expect(getByText('1 item in cart')).toBeInTheDocument();
});

// 6. QUERY PRIORITIES — use accessible queries (what users perceive)
// PRIORITY ORDER (use highest available):
// 1. getByRole — most accessible: getByRole('button', { name: 'Submit' })
// 2. getByLabelText — form inputs: getByLabelText('Email address')
// 3. getByPlaceholderText — inputs without labels: getByPlaceholderText('Search...')
// 4. getByText — visible text: getByText('Submit Order')
// 5. getByAltText — images: getByAltText('Product photo')
// 6. getByTitle — title attribute
// 7. getByTestId — LAST RESORT: getByTestId('submit-button') — use only when no accessible query works`,
      usage:
        "Write tests in this order of priority: (1) critical user flows (login, checkout, form submission), (2) components with complex conditional rendering, (3) custom hooks with complex logic. Use MSW for all HTTP mocking — it works in both tests and browser (useful for development without a backend). The custom renderWithProviders wrapper saves hours of boilerplate across a large test suite.",
      mistake:
        "Testing implementation details — component state, internal method calls, prop drilling paths. Tests that assert on component.state.isLoading or spy on setCount() break every time you refactor. Tests that assert on what the user sees (screen.getByText('Loading...')) survive any internal refactor. Write tests from the user's perspective, not the component's perspective.",
    },
    {
      id: "react-typescript",
      number: "4.8",
      title: "TypeScript with React — Types, Generics, and Patterns",
      icon: "🔷",
      color: "blue",
      intro:
        "TypeScript is not optional in professional React development in 2026. Every product company, funded startup, and well-run engineering team uses TypeScript. React + TypeScript unlocks typed props, typed hooks, typed event handlers, and typed custom hooks that document their own APIs. The learning investment is front-loaded — the first two weeks feel slow — but the payback is immediate: TypeScript catches prop type mismatches at compile time, autocompletes component API in the editor, and makes refactoring safe across large codebases. Knowing how to type React correctly — especially generic components, event handlers, and custom hooks — is a signal of professional-grade React experience.",
      code: `// TYPESCRIPT + REACT — complete reference for professional React code

// 1. COMPONENT PROPS — explicit interface, never React.FC (it adds implicit children)
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'destructive';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
  className?: string;
}

// Function declaration, NOT const arrow function (better error messages in stack traces)
function Button({ variant = 'primary', size = 'md', isLoading, leftIcon, children, className, ...props }: ButtonProps) {
  const baseStyles = 'inline-flex items-center gap-2 font-medium rounded-lg transition-colors';
  const variantStyles = { primary: 'bg-indigo-600 text-white hover:bg-indigo-700', secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200', ghost: 'text-gray-700 hover:bg-gray-100', destructive: 'bg-red-600 text-white hover:bg-red-700' };
  const sizeStyles = { sm: 'px-3 py-1.5 text-sm', md: 'px-4 py-2 text-sm', lg: 'px-6 py-3 text-base' };

  return (
    <button className={\`\${baseStyles} \${variantStyles[variant!]} \${sizeStyles[size!]} \${className ?? ''}\`} disabled={isLoading || props.disabled} {...props}>
      {isLoading ? <Spinner className="w-4 h-4" /> : leftIcon}
      {children}
    </button>
  );
}

// 2. EXTENDING NATIVE ELEMENT PROPS — for wrapper components
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  helperText?: string;
}

// Extends all native <input> props — supports all HTML input attributes automatically
const Input = forwardRef<HTMLInputElement, InputProps>(function Input({ label, error, helperText, className, ...props }, ref) {
  const id = useId();
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-sm font-medium text-gray-700">{label}</label>
      <input id={id} ref={ref} className={\`border rounded-lg px-3 py-2 \${error ? 'border-red-500' : 'border-gray-300'} \${className ?? ''}\`} {...props} />
      {error && <p className="text-sm text-red-600">{error}</p>}
      {helperText && !error && <p className="text-sm text-gray-500">{helperText}</p>}
    </div>
  );
});

// 3. GENERIC COMPONENTS — type-safe reusable components
interface SelectProps<T extends { id: string | number; label: string }> {
  options: T[];
  value: T | null;
  onChange: (option: T) => void;
  renderOption?: (option: T) => React.ReactNode;  // Custom render
  placeholder?: string;
}

function Select<T extends { id: string | number; label: string }>({ options, value, onChange, renderOption, placeholder }: SelectProps<T>) {
  return (
    <select value={value?.id ?? ''} onChange={e => {
      const selected = options.find(o => String(o.id) === e.target.value);
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
}

// 4. TYPING EVENT HANDLERS
// Mouse events
const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => { e.preventDefault(); };
const handleDivClick = (e: React.MouseEvent<HTMLDivElement>) => { };

// Form events
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => { console.log(e.target.value); };
const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => { console.log(e.target.value); };
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { e.preventDefault(); };

// Keyboard events
const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
  if (e.key === 'Enter') handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>);
};

// 5. TYPING useState
const [user, setUser] = useState<User | null>(null);      // Can be null initially
const [products, setProducts] = useState<Product[]>([]);   // Typed array
const [count, setCount] = useState(0);                     // Inferred as number
const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');  // Union type

// 6. TYPING useRef
const inputRef = useRef<HTMLInputElement>(null);            // DOM ref — starts null
const countRef = useRef<number>(0);                        // Mutable ref — starts 0

// 7. TYPING CUSTOM HOOKS
function useAsync<T>(asyncFn: () => Promise<T>, deps: React.DependencyList = []) {
  const [state, setState] = useState<{
    data: T | null;
    loading: boolean;
    error: Error | null;
  }>({ data: null, loading: true, error: null });

  useEffect(() => {
    let cancelled = false;
    setState(s => ({ ...s, loading: true, error: null }));
    asyncFn()
      .then(data => { if (!cancelled) setState({ data, loading: false, error: null }); })
      .catch(error => { if (!cancelled) setState({ data: null, loading: false, error }); });
    return () => { cancelled = true; };
  }, deps);  // eslint-disable-line react-hooks/exhaustive-deps

  return state;
}

// Usage — TypeScript infers T = Product[] from the async function return type
const { data: products, loading, error } = useAsync(() => fetchProducts(), [page]);

// 8. DISCRIMINATED UNIONS for complex state
type RequestState<T> =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; error: string };

const [state, setState] = useState<RequestState<Product[]>>({ status: 'idle' });

// TypeScript narrows the type in each branch — no non-null assertions needed
if (state.status === 'success') {
  state.data.map(p => p.name);  // TypeScript knows data is Product[] here
}
if (state.status === 'error') {
  console.error(state.error);   // TypeScript knows error is string here
}`,
      usage:
        "Always type component props with an explicit interface — never use any, never use React.FC (it adds implicit children which is wrong in React 18+). Use React.ComponentPropsWithoutRef to extend native element props in wrapper components. Type all event handlers. Use discriminated unions for state that has multiple mutually exclusive shapes (loading/success/error). The more specific your types, the more TypeScript can help you catch bugs at compile time.",
      mistake:
        "Using 'as any' to silence TypeScript errors. 'as any' turns off TypeScript's type checker for that value — the equivalent of wearing earplugs to silence an alarm. The alarm exists because there's a real type mismatch. Fix the type, don't suppress the warning. The only acceptable uses of 'any' are during incremental migration of a JavaScript codebase to TypeScript, where typing everything at once is impractical.",
    },
    {
      id: "react-project-structure",
      number: "4.9",
      title: "Project Structure and Code Organization",
      icon: "📁",
      color: "teal",
      intro:
        "How you structure a React project determines how maintainable it is when it grows from 10 components to 100. Two structures dominate the React community: Feature-based organization (group by domain — products/, auth/, dashboard/) and Type-based organization (group by file type — components/, hooks/, services/). The community has largely converged on Feature-based for large applications and Type-based for small ones. Understanding both, and knowing when to choose each, is expected at mid-level and above.",
      code: `// FEATURE-BASED STRUCTURE — recommended for applications with multiple distinct domains
// Every feature folder contains all code for that feature (components, hooks, types, API calls)
// High cohesion within features, low coupling between features

src/
├── app/                             # Application-level setup (not a feature)
│   ├── App.tsx                      # Root component, router setup
│   ├── main.tsx                     # Entry point — ReactDOM.createRoot
│   ├── router.tsx                   # createBrowserRouter configuration
│   └── providers.tsx                # Compose all Providers (Query, Store, Auth, Theme)
│
├── features/                        # Each folder = one product domain
│   ├── auth/
│   │   ├── components/
│   │   │   ├── LoginForm.tsx
│   │   │   ├── RegisterForm.tsx
│   │   │   └── OAuthButtons.tsx
│   │   ├── hooks/
│   │   │   ├── useAuth.ts           # Auth state, login, logout
│   │   │   └── useRequireAuth.ts    # Redirect if not authenticated
│   │   ├── api/
│   │   │   └── auth-api.ts          # All auth API calls (login, register, refresh)
│   │   ├── store/
│   │   │   └── auth-store.ts        # Zustand store for auth state
│   │   ├── types/
│   │   │   └── auth.types.ts        # User, Session, LoginCredentials interfaces
│   │   └── index.ts                 # Barrel export — public API of this feature
│   │
│   ├── products/
│   │   ├── components/
│   │   │   ├── ProductCard.tsx
│   │   │   ├── ProductGrid.tsx
│   │   │   ├── ProductFilters.tsx
│   │   │   ├── ProductDetail.tsx
│   │   │   └── ProductCardSkeleton.tsx
│   │   ├── hooks/
│   │   │   ├── useProducts.ts       # TanStack Query hook for product list
│   │   │   ├── useProduct.ts        # TanStack Query hook for single product
│   │   │   └── useProductFilters.ts # URL-synced filter state
│   │   ├── api/
│   │   │   └── products-api.ts      # All product API functions
│   │   ├── types/
│   │   │   └── product.types.ts
│   │   └── index.ts
│   │
│   ├── cart/
│   │   ├── components/
│   │   │   ├── CartDrawer.tsx
│   │   │   ├── CartItem.tsx
│   │   │   └── CartIcon.tsx
│   │   ├── hooks/
│   │   │   └── useCart.ts
│   │   ├── store/
│   │   │   └── cart-store.ts        # Zustand cart store with persistence
│   │   └── index.ts
│   │
│   ├── checkout/
│   ├── dashboard/
│   └── admin/
│
├── components/                      # Truly shared, domain-agnostic components
│   ├── ui/                          # Primitive UI components (no business logic)
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Modal.tsx
│   │   ├── Skeleton.tsx
│   │   ├── Badge.tsx
│   │   ├── Pagination.tsx
│   │   └── EmptyState.tsx
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── Sidebar.tsx
│   │   └── PageWrapper.tsx
│   └── feedback/
│       ├── Toast.tsx
│       ├── ErrorBoundary.tsx
│       └── LoadingSpinner.tsx
│
├── hooks/                           # Shared hooks not belonging to a feature
│   ├── useDebounce.ts
│   ├── useLocalStorage.ts
│   ├── useMediaQuery.ts
│   ├── useClickOutside.ts
│   └── useDocumentTitle.ts
│
├── lib/                             # Third-party library configuration
│   ├── query-client.ts              # TanStack Query client setup
│   ├── axios.ts                     # Axios instance with interceptors
│   └── utils.ts                     # cn() helper (clsx + tailwind-merge)
│
├── types/                           # Shared TypeScript types
│   ├── api.types.ts                 # ApiResponse<T>, PaginatedResponse<T>
│   └── common.types.ts              # ID, DateString, etc.
│
├── constants/                       # App-wide constants
│   ├── routes.ts                    # ROUTES.HOME = '/', ROUTES.PRODUCTS = '/products'
│   └── config.ts                    # API_URL, ITEMS_PER_PAGE, etc.
│
├── mocks/                           # MSW mock handlers for tests and development
│   ├── handlers.ts
│   └── server.ts
│
├── styles/
│   └── index.css                    # Tailwind directives + global CSS
│
└── tests/                           # Test utilities and setup
    ├── test-utils.tsx               # Custom render with providers
    └── setup.ts                     # jest/vitest setup (MSW, @testing-library/jest-dom)

// BARREL EXPORTS — clean imports
// features/products/index.ts
export { ProductCard } from './components/ProductCard';
export { ProductGrid } from './components/ProductGrid';
export { useProducts } from './hooks/useProducts';
export type { Product, ProductFilters } from './types/product.types';

// Usage — clean, location-agnostic import
import { ProductCard, useProducts } from '@/features/products';
// NOT: import { ProductCard } from '../../features/products/components/ProductCard'

// tsconfig.json — path aliases for clean imports
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]  // @/features, @/components, @/hooks
    }
  }
}`,
      usage:
        "Feature-based structure scales from 5 features to 50. Each feature is a self-contained vertical slice — a new developer can understand the entire auth feature by looking at one folder. Barrel exports (index.ts) provide a clean public API for each feature and hide internal organization. Path aliases (@/) eliminate ../../../../ relative imports. The components/ui folder contains primitive components with no business logic — reusable across every feature.",
      mistake:
        "Mixing business logic into UI components. A ProductCard that fetches its own data, checks auth, dispatches to a store, and handles routing in the same component is untestable, non-reusable, and unmaintainable. UI components should render data they receive via props. Data fetching, state management, and side effects belong in hooks and containers. The separation is what makes components reusable and tests simple.",
    },
  ],

  // ── SECTION 5: PREREQUISITES ─────────────────────────────────────
  prerequisites: [
    { item: "JavaScript (ES6+)", done: false, note: "The most important prerequisite — React is JavaScript", detail: "Arrow functions, destructuring (object + array), spread/rest operator, Promises and async/await, array methods (map, filter, reduce, find, some, every), ES6 modules (import/export), classes, optional chaining (?.), nullish coalescing (??). React hooks, JSX, and the entire component model are built on JavaScript fundamentals. Weak JS knowledge is the single biggest predictor of struggling with React." },
    { item: "HTML and CSS", done: true, note: "For writing JSX (which looks like HTML) and styling components", detail: "Semantic HTML (article, section, nav, main, header, footer), form elements (input, select, textarea), Flexbox and CSS Grid, responsive design with media queries, CSS custom properties. JSX is HTML-in-JavaScript — you write HTML elements directly in React components. Tailwind CSS (used with most React projects) is utility classes applied to standard HTML elements." },
    { item: "Node.js and npm/yarn", done: true, note: "React projects require Node.js for the development server (Vite) and npm for package management", detail: "Install Node.js 18+ LTS. Understand npm install, package.json, package-lock.json, node_modules, and npm scripts (npm run dev, npm run build, npm test). Every React library you'll use (React Router, TanStack Query, Zustand, React Hook Form) is an npm package." },
    { item: "Git and Version Control", done: true, note: "For managing code changes and collaboration on React projects", detail: "git init, add, commit, push, pull, branching, merging, .gitignore (include node_modules, .env). Every React take-home task and portfolio project should be version-controlled on GitHub. Employers review GitHub profiles — a clean commit history demonstrates professional workflow." },
    { item: "Browser DevTools", done: true, note: "For debugging React apps, inspecting component props, and monitoring API calls", detail: "Chrome DevTools console, Elements panel, Network tab for monitoring XHR/fetch calls. React Developer Tools browser extension — inspect the component tree, view component props and state, profile renders. This extension is essential for React debugging." },
    { item: "TypeScript Basics", done: false, note: "Required for professional React development — all modern React projects use TypeScript", detail: "Basic types (string, number, boolean, array, object), interfaces and type aliases, union types, optional properties (?), generics (T), type assertions (as). Spend one week on TypeScript basics before or alongside learning React. The investment compounds — typed props, typed hooks, and typed event handlers make React far less confusing." },
    { item: "REST APIs and HTTP", done: false, note: "React applications consume REST APIs — you need to understand what you're consuming", detail: "HTTP methods (GET/POST/PUT/PATCH/DELETE), status codes (200/201/400/401/403/404/500), JSON format, request headers (Content-Type, Authorization). Use Postman to test APIs before building React UI around them. Understanding async/await and how Promise chains work is critical for data fetching in React." },
    { item: "Package Manager (npm or yarn)", done: true, note: "For installing React libraries and running development scripts", detail: "npm install, npm run dev, npm run build, npm run test. Understanding what's in package.json (scripts, dependencies, devDependencies). Knowing how to read a library's npm page and basic documentation to understand installation." },
    { item: "Postman or REST Client", done: true, note: "Test backend APIs before building React components that consume them", detail: "Always test API endpoints in Postman before writing useEffect/TanStack Query hooks for them. Confirms the response shape, identifies authentication requirements, and catches 404s before you spend time debugging React hooks for a URL that doesn't exist." },
    { item: "Code Editor (VS Code)", done: true, note: "VS Code with the right extensions makes React development dramatically more productive", detail: "Required extensions: ES7+ React/Redux/React-Native snippets (component boilerplate), Prettier (code formatting), ESLint (lint errors in editor), TypeScript and JavaScript Language Features (built-in). Optional: Tailwind CSS IntelliSense, Auto Rename Tag, GitLens." },
  ],

  // ── SECTION 6: ROADMAP ───────────────────────────────────────────
  roadmap: [
    {
      phase: "Beginner",
      label: "01",
      duration: "Weeks 1–5",
      color: "emerald",
      topics: [
        "JavaScript ES6+ review — arrow functions, destructuring, spread, async/await, array methods, modules",
        "React setup — create-next-app or Vite (npm create vite@latest), project structure, dev server",
        "JSX — HTML-in-JavaScript, JSX expressions {}, conditional rendering (&&, ternary), lists with .map()",
        "Components — function components, naming conventions (PascalCase), default exports",
        "Props — passing data, prop types with TypeScript interfaces, children prop",
        "useState — local state, state updates, functional updates (prev => prev + 1)",
        "Event handling — onClick, onChange, onSubmit, preventDefault, event types",
        "Conditional rendering — if/else, ternary operator, short-circuit &&",
        "List rendering — .map() with key prop, why keys matter",
        "useEffect — data fetching, cleanup functions, dependency array",
        "Forms — controlled inputs, form submission, basic validation",
        "Component composition — breaking UI into components, passing props down",
        "Styling — Tailwind CSS utility classes, className, conditional classes with template literals",
        "Fetching data — fetch() API, async/await in useEffect, loading and error states",
      ],
      buildProjects: [
        "Counter with history: useState, multiple state variables, conditional rendering, list rendering for history",
        "Weather App: fetch OpenWeatherMap API in useEffect, loading/error/success states, city search, temperature toggle (°C/°F)",
        "Movie Search: controlled input, debounced search, list rendering of results, click to view detail (useState for selected movie)",
      ],
    },
    {
      phase: "Intermediate",
      label: "02",
      duration: "Weeks 6–14",
      color: "primary",
      topics: [
        "TypeScript with React — component prop types, useState types, event handler types, forwardRef",
        "React Router v6 — Routes, Route, Link, NavLink, useParams, useSearchParams, useNavigate",
        "Protected routes — RequireAuth component, redirect to login, route nesting",
        "Context API — createContext, useContext, Provider pattern, custom hooks for context",
        "useReducer — reducer function, dispatch, when to use over useState",
        "useMemo and useCallback — when and why, dependency arrays, React.memo pairing",
        "Custom hooks — extracting stateful logic, naming conventions (use prefix), reusable patterns",
        "TanStack Query — useQuery, useMutation, queryKeys, invalidateQueries, loading/error states",
        "React Hook Form + Zod — register, handleSubmit, errors, zodResolver, useFieldArray",
        "Zustand — create, persist, immer middleware, selective subscriptions",
        "Error boundaries — class-based ErrorBoundary, react-error-boundary library",
        "React.lazy and Suspense — code splitting, lazy loading routes and heavy components",
        "Performance basics — React.memo, useCallback + React.memo pattern, React DevTools Profiler",
        "Component patterns — controlled/uncontrolled, compound components, forwardRef",
      ],
      buildProjects: [
        "Full Auth Flow: React Router protected routes, login/register with React Hook Form + Zod validation, JWT storage, auth context, redirect after login",
        "E-Commerce Catalog: TanStack Query for products, URL-based filters with useSearchParams, Zustand cart with persistence, product detail page, cart drawer",
        "Blog Platform: TanStack Query CRUD, React Hook Form for post creation/editing, rich text editor (Tiptap), React Router nested routes, auth-protected writer dashboard",
        "Dashboard with Charts: Recharts or Nivo charts, TanStack Query for data, Zustand for date range filter, React.lazy for chart components, skeleton loading states",
      ],
    },
    {
      phase: "Advanced",
      label: "03",
      duration: "Weeks 15–26+",
      color: "purple",
      topics: [
        "Advanced TypeScript — generic components, discriminated unions, conditional types, utility types (Partial, Pick, Omit, Record)",
        "Testing — React Testing Library, Jest/Vitest, MSW for API mocking, custom renderWithProviders",
        "React 18 features — automatic batching, useTransition, useDeferredValue, useId",
        "React 19 features — useActionState, useFormStatus, useOptimistic, React Compiler awareness",
        "Virtual scrolling — @tanstack/react-virtual for large lists, variable height rows",
        "Advanced patterns — polymorphic components, render props, HOCs, compound components with generics",
        "Accessibility (a11y) — ARIA roles, focus management, keyboard navigation, axe-core testing",
        "Animation — Framer Motion, React Spring, CSS transitions, AnimatePresence for exit animations",
        "Drag and drop — dnd-kit for sortable lists, kanban boards, file drop zones",
        "Micro-frontend architecture — Module Federation, shared state between micro-frontends",
        "CI/CD with GitHub Actions — lint, test, build on PR, deploy to Vercel/Netlify",
        "Storybook — component documentation, interaction testing, visual regression with Chromatic",
        "Design systems — building a component library with Radix UI primitives + CVA (Class Variance Authority)",
        "WebSockets in React — Socket.io client, real-time state updates with TanStack Query or Zustand",
      ],
      buildProjects: [
        "Real-time Collaboration Tool: Socket.io real-time updates, Zustand for presence, dnd-kit drag-and-drop kanban, RTL + MSW test suite, Storybook for UI components",
        "Component Design System: Radix UI + CVA + Tailwind, Storybook documentation, TypeScript generics throughout, axe-core accessibility tests, npm-publishable package",
        "Full-Scale E-Commerce: React Testing Library test suite (60%+ coverage), performance audit with Lighthouse, @tanstack/react-virtual product list, Framer Motion animations, CI/CD pipeline",
      ],
    },
  ],

  // ── SECTION 7: USE CASES ─────────────────────────────────────────
  useCases: [
    { num: "01", title: "Consumer Product Web Applications", body: "The majority of India's consumer internet is built with React. Swiggy's order tracking UI, Zepto's grocery selection interface, Paytm's payment flow, MakeMyTrip's flight search results — all React SPAs. React's component model makes it straightforward to build the kind of responsive, interactive UIs that consumer products require: real-time price updates, cart management, multi-step checkout flows, and search-as-you-type experiences. The ability to compose complex UIs from small, testable components is what makes React the default choice for product teams building consumer-facing applications." },
    { num: "02", title: "SaaS Dashboards and B2B Tools", body: "CRM dashboards, analytics platforms, project management tools, HR portals, and internal operations tools are React's sweet spot for the B2B market. Freshworks (CRM, support, ITSM), Chargebee (subscription billing), Postman (API testing), and Hasura (database tools) all build their core product interfaces in React. The rich ecosystem of charting libraries (Recharts, Nivo, Chart.js), data table libraries (TanStack Table), and form libraries (React Hook Form) means B2B tools can be built with high-quality, polished UI components without starting from scratch." },
    { num: "03", title: "Fintech and Trading Interfaces", body: "Zerodha Kite, Groww's portfolio view, Razorpay's merchant analytics, and India's new wave of neobanks all use React for their trading interfaces, portfolio dashboards, and transaction flows. React's performance model — fine-grained re-renders via useState and memoization — handles the frequent price updates and real-time data streams that financial UIs require without janky scrolling or frozen inputs. TypeScript adds the compile-time safety required for financial calculations where a wrong type means wrong numbers." },
    { num: "04", title: "Content Platforms and Media", body: "ShareChat, Josh, Moj, and India's regional content platforms use React for their web interfaces. Global content platforms like Medium, Twitter's web app, and Reddit's UI are React applications. React's virtual DOM makes scroll-heavy, media-rich feeds performant by minimizing DOM updates when new posts load or videos autoplay. The infinite scroll pattern — useInfiniteQuery from TanStack Query + IntersectionObserver for load triggers — is a fundamental React pattern for content platforms." },
    { num: "05", title: "Developer Tools and Documentation", body: "Vercel's dashboard, GitHub's PR interface, Netlify's deployment console, and Supabase's database studio are React applications. Developer tools tend to be data-dense, interaction-heavy, and require complex state management — exactly the profile where React's ecosystem depth (virtual tables, code editors, data visualization) is most valuable. CodeSandbox, StackBlitz, and Replit all build their browser-based IDEs with React." },
    { num: "06", title: "E-Commerce and Marketplaces", body: "Flipkart, Meesho, Nykaa, Myntra, and India's D2C brands use React for their product catalog, search, and checkout interfaces. React's component model maps naturally to e-commerce UI patterns: product card (reusable across listing, search, and recommendations), cart drawer (Context-powered), checkout stepper (React Router nested routes), and filter sidebar (URL-synced state with useSearchParams). React's ecosystem includes battle-tested solutions for every e-commerce UI challenge." },
    { num: "07", title: "Internal Tools and Admin Panels", body: "Companies of all sizes build internal tools — inventory management, operations dashboards, customer support interfaces, logistics tracking — with React. The combination of React + TypeScript + TanStack Table (for complex data grids) + React Hook Form (for data entry) + TanStack Query (for CRUD operations) covers 90% of internal tool UI requirements. Retool and Appsmith (the low-code internal tool builders) are themselves React applications." },
  ],

  // ── SECTION 8: PROJECTS ──────────────────────────────────────────
  projects: {
    beginner: [
      { name: "GitHub Profile Finder", desc: "Search any GitHub username and display profile stats (followers, repos, bio) and repository list with stars, forks, and language. Handle loading, error, and empty states. Link to profiles.", teaches: "useEffect for API calls, controlled input, conditional rendering, list rendering with keys, async/await error handling, TypeScript interface for API response" },
      { name: "Expense Tracker", desc: "Add income and expense entries, see running balance, filter by category, persist to localStorage. Tailwind styled.", teaches: "useState with arrays, useReducer for complex state transitions, localStorage persistence, filtering with useMemo, form handling with controlled inputs, TypeScript discriminated union for transaction types" },
      { name: "Weather App", desc: "Search city weather, 5-day forecast cards, humidity and wind speed display. Toggle Celsius/Fahrenheit. Remember last city in localStorage.", teaches: "useEffect with cleanup, async/await fetch, multiple useState, conditional rendering for weather icons, useLocalStorage custom hook, TypeScript for API response typing" },
      { name: "Markdown Note App", desc: "Create, edit, and delete notes with Markdown preview. Notes persist to localStorage. Search through notes. Tag notes by category.", teaches: "Controlled textarea, react-markdown for rendering, localStorage with JSON, list rendering, edit/view mode toggle, basic CRUD with useState" },
    ],
    intermediate: [
      { name: "Full Authentication App", desc: "Login, register, forgot password with React Hook Form + Zod validation. JWT stored securely. Protected routes with React Router. Profile update with avatar upload. Auth context for global auth state.", teaches: "React Hook Form + Zod, useContext for auth, React Router protected routes, JWT handling, custom useAuth hook, TypeScript generics for API responses" },
      { name: "E-Commerce Storefront", desc: "Product listing with category/price/rating filters (URL-synced), product detail page, add to cart, cart drawer, quantity management, Zustand cart store with localStorage persistence. Responsive with Tailwind.", teaches: "TanStack Query for products, useSearchParams for filters, Zustand with persist middleware, React Router dynamic routes, React.memo for product cards, skeleton loading states" },
      { name: "Project Management (Trello Clone)", desc: "Kanban board with columns and cards. Drag-and-drop with dnd-kit. Add/edit/delete cards. Card detail modal. Board persists to backend API. Auth-protected.", teaches: "dnd-kit drag-and-drop, useReducer for board state, TanStack Query mutations, modal with portal, forwardRef for drag handles, optimistic updates" },
      { name: "Social Feed App", desc: "Post feed with likes, comments, and reposts. Infinite scroll. User profiles. Follow/unfollow. Real-time notification count. Image upload for posts.", teaches: "TanStack Query useInfiniteQuery, IntersectionObserver for infinite scroll, optimistic updates for likes, file upload with FormData, useCallback for stable handlers" },
    ],
    advanced: [
      { name: "Full-Stack MERN App with Tests", desc: "Complete React app with Express backend, MongoDB database, React Testing Library + MSW test suite (60%+ coverage), Storybook for component documentation, CI/CD GitHub Actions pipeline, Docker containerization.", teaches: "Complete testing pyramid (unit, integration, E2E), MSW handlers, custom renderWithProviders, GitHub Actions, Storybook, Docker compose" },
      { name: "Real-Time Collaboration Tool", desc: "Socket.io real-time updates, live user presence, collaborative document editing, dnd-kit kanban, notification system, TanStack Query with socket invalidation, performance-optimized with React.memo + useCallback throughout.", teaches: "Socket.io React integration, Zustand for presence state, dnd-kit advanced patterns, performance optimization, virtual scrolling for activity feed" },
      { name: "Design System and Component Library", desc: "Radix UI + CVA + Tailwind component library. Full Storybook documentation. TypeScript generics for flexible components. axe-core accessibility tests. Publishable npm package. Chromatic visual regression.", teaches: "CVA for variant management, generic TypeScript components, compound component patterns, accessibility testing, Storybook interaction tests, npm publishing" },
    ],
  },

  // ── SECTION 9: MISTAKES ──────────────────────────────────────────
  mistakes: [
    {
      title: "Mutating State Directly Instead of Creating New References",
      explanation: "React's state update detection is based on reference equality — React re-renders when the state reference changes. Mutating an array or object directly (arr.push(), obj.name = 'new') doesn't change the reference — React doesn't detect the change and doesn't re-render. The bug appears as: 'I updated the state but the UI didn't update.'",
      tip: "Always create a new reference when updating state. For arrays: setItems([...items, newItem]) or items.filter(), items.map(). For objects: setUser({ ...user, name: 'new name' }). For nested: setUser(prev => ({ ...prev, address: { ...prev.address, city: 'new city' } })). Immer (via Zustand's immer middleware or use-immer) lets you mutate in a draft and handles the reference creation automatically.",
      wrong: "const addItem = (item) => { items.push(item); setItems(items); }  // Same reference — no re-render",
      correct: "const addItem = (item) => { setItems(prev => [...prev, item]); }  // New array reference — re-renders",
    },
    {
      title: "Creating Stale Closures in useEffect",
      explanation: "useEffect captures the values of variables from the surrounding scope at the time the effect runs. If you don't include a variable in the dependency array but use it inside the effect, the effect holds a stale reference to the initial value — even when the variable updates. Classic symptom: an interval or subscription that always uses the initial value of a state variable.",
      tip: "Include every variable used inside useEffect in the dependency array. The exhaustive-deps ESLint rule catches this automatically. If adding a dependency causes an infinite loop, the real problem is usually that a function or object is being recreated on every render — fix with useCallback or useMemo, or move the value inside the effect.",
      wrong: "useEffect(() => { const id = setInterval(() => console.log(count), 1000); return () => clearInterval(id); }, []); // count is always 0",
      correct: "useEffect(() => { const id = setInterval(() => console.log(count), 1000); return () => clearInterval(id); }, [count]); // count is current",
    },
    {
      title: "Not Cleaning Up useEffect Subscriptions",
      explanation: "useEffect runs after every render (based on dependencies). If you start an async operation (fetch), subscription (WebSocket, EventListener, setInterval), or timer and don't cancel/cleanup in the return function, you get: memory leaks, state updates on unmounted components ('Warning: Can't perform a React state update on unmounted component'), duplicate subscriptions when effects re-run.",
      tip: "Every useEffect that starts something asynchronous needs to return a cleanup function that stops it. For fetch: use an isCancelled flag or AbortController. For timers: clearInterval/clearTimeout in cleanup. For event listeners: removeEventListener in cleanup. For WebSocket subscriptions: socket.off() or socket.disconnect() in cleanup.",
      wrong: "useEffect(() => { fetch('/api/data').then(r => r.json()).then(setData); }, [id]);",
      correct: "useEffect(() => { const controller = new AbortController(); fetch('/api/data', { signal: controller.signal }).then(r => r.json()).then(setData).catch(() => {}); return () => controller.abort(); }, [id]);",
    },
    {
      title: "Using Array Index as Key in Dynamic Lists",
      explanation: "When items can be reordered, deleted, or inserted at positions other than the end, using the index as key tells React the wrong information about which items changed. If you delete item at index 1, React sees that every item from index 1 onwards has a 'different' key — it may destroy and recreate the wrong DOM nodes, causing animation glitches, lost input focus, or incorrect form values.",
      tip: "Always use a stable, unique identifier as the key — typically the database ID (product.id, user.id, order._id). Only use index as key when the list is static (never reordered or filtered) and items have no unique ID. If your data truly has no unique ID, generate one with crypto.randomUUID() when the data is created.",
      wrong: "{products.map((p, index) => <ProductCard key={index} product={p} />)}",
      correct: "{products.map(p => <ProductCard key={p.id} product={p} />)}",
    },
    {
      title: "Overusing useEffect for Derived State",
      explanation: "A common pattern in class-component-era React: use componentDidUpdate (now useEffect) to update one state variable when another changes. In hooks, this creates extra render cycles, potential infinite loops, and code that's harder to trace. If a value can be computed from existing state or props, it doesn't need to be stored in state at all.",
      tip: "Compute derived values directly in the component body (or with useMemo if expensive). Full name from first + last name: const fullName = firstName + ' ' + lastName — no useEffect. Filtered list: const filtered = useMemo(() => products.filter(...), [products, filters]) — no useEffect + setState. The rule: if you find yourself doing setState inside useEffect to update a value that's derived from other state, derive it directly instead.",
      wrong: "const [fullName, setFullName] = useState(''); useEffect(() => { setFullName(first + ' ' + last); }, [first, last]);",
      correct: "const fullName = first + ' ' + last;  // Derived directly — zero useEffect needed",
    },
    {
      title: "Prop Drilling Instead of Context or Component Composition",
      explanation: "Passing a prop through 4 intermediate components that don't use it — only the leaf component does — is prop drilling. It creates invisible coupling: every intermediate component now has an API surface it doesn't own or understand. Adding, renaming, or removing the prop requires touching every layer. Symptoms: components with props they never use in their own JSX, only pass to children.",
      tip: "For props that skip levels: use Context (for global state like auth, theme, cart) or component composition (lift the final consumer up and pass it as a prop or children). For props that are used at every level: prop passing is correct. The distinction: is this prop relevant to every component it passes through? If yes: props. If no: context or composition.",
    },
    {
      title: "Writing useEffect Instead of Event Handlers for User Actions",
      explanation: "useEffect is for synchronizing with external systems — not for responding to user actions. Writing useEffect(() => { submitOrder() }, [isSubmitClicked]) creates complex, hard-to-trace code. The isSubmitClicked boolean causes the effect to fire, then you need another mechanism to reset it. This is a misuse of the effect mental model.",
      tip: "User actions trigger event handlers, not effects. Button clicks call onClick handlers directly. Form submissions call onSubmit handlers. If a user action needs to cause a side effect (API call, navigation), put that logic directly in the event handler. Effects are for synchronizing: setting up subscriptions, syncing with localStorage, responding to prop changes that represent external system state.",
      wrong: "const [submitted, setSubmitted] = useState(false); useEffect(() => { if (submitted) { submitOrder(); setSubmitted(false); } }, [submitted]);",
      correct: "const handleSubmit = async () => { await submitOrder(); };  // Direct event handler",
    },
    {
      title: "Not Understanding React's Batching Behavior",
      explanation: "In React 18, multiple setState calls within an event handler, setTimeout, or Promise are automatically batched into one re-render. Developers sometimes write code assuming each setState triggers a re-render, leading to bugs where they read state immediately after setting it (state updates are asynchronous — the new value is available on the next render, not immediately after the setter call).",
      tip: "Never read state immediately after calling a setter — the update is scheduled, not instant. If you need to compute the next value based on the current value, use the functional update form: setCount(prev => prev + 1). If you need to do something after a state update, use useEffect with the state variable as a dependency — it runs after the render that includes the new state.",
      wrong: "setCount(count + 1); console.log(count); // Logs old value — state hasn't updated yet",
      correct: "setCount(prev => prev + 1); // Use functional update if dependent on prev value",
    },
    {
      title: "Forgetting to Handle Loading, Error, and Empty States",
      explanation: "Components that only render the 'happy path' — when data is loaded and present — produce broken UIs that show nothing, crash, or display undefined for real users who experience slow connections, API errors, or empty data sets. A product catalog page that doesn't handle the case of zero products shows a blank div with no feedback. A user profile page that doesn't handle the loading state flashes undefined for the user's name.",
      tip: "For every component that fetches data or receives optional data, explicitly handle all states: loading (skeleton UI or spinner), error (friendly message with retry action), empty (empty state illustration with call to action), and the happy path (actual data). TanStack Query makes this easier — isLoading, isError, and data are always explicitly available without manual tracking.",
    },
    {
      title: "Not Using ESLint with React Hooks Rules",
      explanation: "The two rules of hooks — only call hooks at the top level (never in conditions, loops, or nested functions), and only call hooks from React functions (not regular JavaScript functions) — are easy to violate accidentally. Violations cause unpredictable bugs that are extremely difficult to debug because React's hook state is tracked by call order.",
      tip: "Install and enable the eslint-plugin-react-hooks package (it comes configured by default with Create React App and Vite). The two rules (rules-of-hooks and exhaustive-deps) will catch hook rule violations and missing effect dependencies in your editor before they reach runtime. Never suppress these warnings — they exist because the bugs they prevent are genuinely hard to debug.",
    },
    {
      title: "Building Without TypeScript and Regretting It at 50+ Components",
      explanation: "React applications built without TypeScript feel fine at 10 components and 5 hooks. At 50 components, you can't remember what props ProductCard accepts. At 100 components, refactoring an API response shape breaks 20 components that you discover only at runtime (or worse, in production). The prop-passing chains that React uses as its primary component API are invisible without TypeScript.",
      tip: "Start every new React project with TypeScript (Vite defaults to TypeScript, create-next-app prompts for it). Type all component props with interfaces, type all useState with generics, type all event handlers. The initial overhead is 10–15% slower. The long-term benefit is autocomplete everywhere, catches type errors before runtime, and fearless refactoring. If you're on a JavaScript React project: you can convert one file at a time by renaming .jsx to .tsx.",
    },
    {
      title: "Reaching for Redux Before Exhausting Simpler State Solutions",
      explanation: "Redux adds: actions, reducers, selectors, action creators, the store, middleware (for async), and potentially RTK Query (for server state). For a startup-size React application, this is enormous boilerplate for the problem 'I need to share cart state across components'. The same problem is solved in 10 lines with Zustand and 15 minutes of setup.",
      tip: "State management decision tree: Local component concern? useState. Complex local state with named transitions? useReducer. Data from an API? TanStack Query. Global client state (cart, theme, auth UI)? Zustand. Existing large Redux codebase? Redux Toolkit to modernize it. Starting from scratch in 2026? Redux is almost never the right first choice.",
    },
  ],

  // ── SECTION 10: INTERVIEW QUESTIONS ─────────────────────────────
  interviewQuestions: {
    beginner: [
      { q: "What is React and what problem does it solve?", a: "React is a JavaScript library for building user interfaces, created by Meta. It solves two problems: (1) efficiently updating the DOM when data changes — React's Virtual DOM and diffing algorithm apply minimal DOM mutations, avoiding expensive full-page repaints, and (2) code organization — React's component model lets you break UIs into reusable, self-contained pieces that combine data (props) and behavior (state)." },
      { q: "What is JSX?", a: "JSX (JavaScript XML) is a syntax extension that lets you write HTML-like code in JavaScript. It's not HTML — it compiles to React.createElement() calls. JSX allows embedding JavaScript expressions with curly braces {}. React components return JSX. JSX elements must have one root element (or use a Fragment <>), all tags must be closed (including self-closing like <img />), and class becomes className because class is a reserved JavaScript keyword." },
      { q: "What is the difference between props and state?", a: "Props are read-only data passed from a parent component to a child — the child cannot modify its own props. State is mutable data managed within a component that, when changed, causes the component to re-render. Props flow down (parent to child). State changes happen within a component via useState setters. Data that multiple components need can be 'lifted up' to their shared ancestor and passed down as props." },
      { q: "What is the Virtual DOM?", a: "The Virtual DOM is React's lightweight JavaScript representation of the actual browser DOM — a tree of plain JavaScript objects. When state changes, React creates a new Virtual DOM tree, compares it to the previous one (diffing), and computes the minimum set of DOM operations needed to update the real DOM. This avoids expensive direct DOM manipulation and batches updates for performance." },
      { q: "What are the rules of hooks?", a: "Two rules: (1) Only call hooks at the top level — never inside conditions, loops, or nested functions. React tracks hooks by call order — conditions would change the order between renders and cause bugs. (2) Only call hooks from React function components or custom hooks — never from regular JavaScript functions. The eslint-plugin-react-hooks enforces these rules automatically." },
      { q: "What is the difference between useEffect with no dependency array, empty array [], and [dep]?", a: "No dependency array: effect runs after every render — almost always unintentional. Empty array []: effect runs once after the first render (equivalent to componentDidMount) — use for initialization, one-time subscriptions. [dep]: effect runs after first render and after any render where dep changed — use for effects that depend on a specific value (like re-fetching when a userId changes)." },
      { q: "What is the key prop and why is it important?", a: "The key prop is a unique identifier that React uses during list rendering to track which items have changed, been added, or been removed between renders. Without keys (or with index keys in dynamic lists), React may incorrectly reuse DOM nodes for different list items, causing UI bugs like incorrect component state or animation glitches. Keys should be stable, unique IDs — never use array indices for dynamic lists." },
      { q: "What is the difference between controlled and uncontrolled components?", a: "Controlled components: React state is the single source of truth for the input value. value prop + onChange handler — React controls what the input displays. Required for real-time validation, conditional forms, and derived state. Uncontrolled components: the DOM manages the input value; React reads it via ref when needed (e.g., on submit). Simpler for basic forms but can't do real-time validation." },
      { q: "What does React.StrictMode do?", a: "StrictMode is a development tool that detects potential problems. In development only (not production), it renders components twice to detect side effects that aren't safe to interrupt, warns about deprecated lifecycle methods and legacy string refs, warns about unexpected side effects in render, and logs warnings about missing useEffect cleanup. It has no visual output and adds zero overhead in production." },
      { q: "How do you conditionally render a component in React?", a: "Three patterns: (1) Ternary operator: {condition ? <ComponentA /> : <ComponentB />} — use when you need to render one of two components. (2) Short-circuit &&: {condition && <Component />} — renders Component only when condition is truthy. Caution: {0 && <Comp />} renders '0', not nothing — use {!!count && <Comp />}. (3) Early return in the component function — return null to render nothing." },
    ],
    intermediate: [
      { q: "Explain the useCallback and useMemo hooks and when you'd use them.", a: "useMemo memoizes the result of a computation — recalculates only when dependencies change. Use for expensive computations (filtering/sorting >1000 items) to avoid recalculation on every render. useCallback memoizes a function reference — returns the same function object across renders (when deps don't change). Use when passing a callback to a React.memo child component — without useCallback, a new function reference on each parent render defeats React.memo's optimization. Both are performance tools — only add them when you've measured a performance issue, not preemptively." },
      { q: "What is the difference between useEffect and useLayoutEffect?", a: "Both run after render, but at different phases of the browser lifecycle. useEffect runs asynchronously after the browser has painted — non-blocking, the user sees the updated DOM before the effect runs. useLayoutEffect runs synchronously after DOM mutations but before the browser paints — blocking, runs before the user sees the update. Use useLayoutEffect only when you need to read DOM layout (getBoundingClientRect) and make synchronous DOM updates before the user sees the initial paint — for animations and tooltip positioning. useEffect for everything else." },
      { q: "How does Context API work and what are its performance implications?", a: "Context provides a way to pass data through the component tree without prop drilling. createContext() creates a context. Provider wraps components that need access. useContext() reads the value in any descendant. Performance implication: when a Context value changes, every component that calls useContext() for that context re-renders — even if the specific part of the value it uses didn't change. Mitigation: split contexts by update frequency (AuthContext separate from AuthActionsContext), memoize the provider value with useMemo, or use Zustand which has built-in selector-based subscriptions." },
      { q: "What is TanStack Query (React Query) and why is it better than useEffect + fetch?", a: "TanStack Query is a server state management library that handles caching, background refetching, loading states, error states, request deduplication, and mutations with cache invalidation. Compared to manual useEffect + fetch: it caches responses (no redundant API calls for the same data), background refreshes stale data, automatically retries failed requests, shares data between components without prop drilling, and handles optimistic updates. Code that takes 50 lines manually (loading state, error state, cleanup, caching) takes 5 lines with TanStack Query." },
      { q: "What is the difference between useState and useReducer?", a: "useState is for simple, independent state values. useReducer is for complex state with multiple related sub-values, state transitions with names (dispatch({ type: 'ADD_ITEM' })), or when the next state depends on the previous in non-trivial ways. The reducer pattern makes state transitions explicit and testable (pure functions), matches Redux patterns for teams familiar with it, and scales better for state machines (loading/success/error). Rule of thumb: start with useState, switch to useReducer when you find yourself writing if/else or switch logic inside event handlers to manage multiple related state fields." },
      { q: "How do you prevent re-renders in React?", a: "Four techniques: (1) React.memo — wraps a component; skips re-render if props haven't changed (shallow comparison). Effective only when parent re-renders with the same props. (2) useMemo — memoizes objects/arrays passed as props so their reference is stable. (3) useCallback — memoizes functions passed as props to React.memo children. (4) Context splitting — split a large context into multiple smaller ones so components only subscribe to what they need. Measure before applying — premature optimization adds complexity without guaranteed benefit." },
      { q: "What is the Component Error Boundary in React?", a: "Error boundaries are React components that catch JavaScript errors in their child component tree and display a fallback UI instead of crashing the entire app. They must be class components (with componentDidCatch and getDerivedStateFromError static methods) or use the react-error-boundary library for a function component wrapper. Error boundaries catch errors during rendering, in lifecycle methods, and in constructor — but not in event handlers (use try/catch there) or async code." },
      { q: "How does React's reconciliation algorithm work?", a: "Reconciliation is React's algorithm for determining what changed between renders. Two heuristics: (1) Element type — if the type changes (div to span, ComponentA to ComponentB), React tears down the old tree and builds a new one from scratch. (2) Keys — in lists, keys identify which item is which across renders, enabling reuse of DOM nodes for unchanged items. Without keys, React assumes items at the same position are the same item — correct for static lists, wrong for dynamic ones." },
      { q: "Explain the difference between class components and function components with hooks.", a: "Class components use ES6 classes with lifecycle methods (componentDidMount, componentDidUpdate, componentWillUnmount) and this.state. Function components with hooks (since React 16.8) achieve the same with simpler syntax: useState replaces this.state, useEffect replaces lifecycle methods, useRef replaces instance variables. The React team recommends hooks for new code — they're easier to test (pure functions), enable better logic sharing (custom hooks), avoid the this binding confusion, and produce smaller bundles. Class components still work but receive no new features." },
      { q: "What is prop drilling and how do you solve it?", a: "Prop drilling is passing a prop through intermediate components that don't use it themselves — only the leaf component needs it. Solutions in order of complexity: (1) Component composition — restructure so the leaf component is rendered by the component that owns the data, passing it as children or a render prop. (2) Context API — for genuinely global state (auth user, theme) that many components at different levels need. (3) Zustand or other global stores — for frequently-updated shared state where Context would cause performance issues." },
      { q: "How do you optimize a React application's performance?", a: "In order of impact:\n\n1. Identify actual bottlenecks with React DevTools Profiler — don't optimize blindly.\n2. Code split with React.lazy + Suspense — reduce initial bundle size.\n3. React.memo on expensive list item components with stable props.\n4. useMemo for expensive computations.\n5. Virtual scrolling for lists >100 items with @tanstack/react-virtual.\n6. useTransition for non-urgent state updates.\n7. Image optimization — lazy loading, correct sizes.\n\nMost apps need items 1 and 2 only." },
    ],
    advanced: [
      { q: "Explain React 18's Concurrent Features — what problems do they solve?", a: "React 18 introduced concurrent rendering — the ability to prepare multiple versions of the UI simultaneously and interrupt, pause, and resume renders based on priority. useTransition marks a state update as non-urgent — React can interrupt it to handle higher-priority updates (user typing, clicks). useDeferredValue defers the re-rendering of a slow component while keeping the input it shows from current. Suspense for data fetching (with TanStack Query or Relay) enables 'render-as-you-fetch' — start fetching before the component renders. Together: UIs that never block on non-urgent work, enabling fast input + progressive rendering of slow content." },
      { q: "How would you architect a React application for a 20-person engineering team?", a: "Feature-based monorepo structure: src/features/ for domain-specific code, src/components/ui/ for design system primitives. TanStack Query for all server state (centralized query key factory per feature). Zustand for global client state. React Hook Form + Zod for all forms. Path aliases (@/) for clean imports. ESLint + Prettier + TypeScript strict mode enforced in CI. MSW for test mocking. Storybook for component documentation. Each team owns a feature folder — no feature imports from another feature's internals. RTL + Vitest for testing. GitHub Actions for lint, test, build on every PR. Feature flags for safe incremental rollouts." },
      { q: "How do you implement code splitting in React and what are its trade-offs?", a: "React.lazy(() => import('./Component')) splits that component into a separate JavaScript chunk downloaded on first use. Suspense provides the loading fallback while the chunk downloads. Route-based splitting (lazy loading each page/route) is the highest-impact use — reduces initial bundle by putting page-specific code in separate chunks. Component-level splitting for heavy components (Recharts, TipTap, Monaco Editor) used conditionally. Trade-off: the first load of a lazy component shows the fallback while downloading. Mitigate with preloading: on hover of a navigation link, trigger the dynamic import early — by the time they click, it's ready." },
      { q: "How do you handle complex forms with dynamic validation in React?", a: "React Hook Form with zodResolver for schema-based validation. useFieldArray for dynamic field lists (multiple addresses, phone numbers). watch() for cross-field dependencies (show/hide fields based on another field's value). setError() for server-side validation errors on specific fields. useFormContext for deeply nested form components that need access to the form state without prop drilling. For multi-step forms: maintain a steps array, track currentStep in useState, validate only the current step's fields on next-step click (trigger(['field1', 'field2']) validates specific fields without submitting the form)." },
      { q: "What are React Server Components and how do they differ from client-side React?", a: "React Server Components (RSC) run exclusively on the server — they have access to databases, file systems, and environment variables but can't use state, effects, or event handlers. They ship zero JavaScript to the browser. Standard React components (now called Client Components, marked 'use client' in Next.js) run in the browser. RSC enables: fetching data directly in the component tree without API endpoints, keeping secrets server-side, and reducing bundle size by keeping data-fetching logic off the client. The App Router in Next.js 13+ is built on RSC — components are server-by-default, opt into client with 'use client'." },
      { q: "How do you implement a real-time feature (live notifications, collaborative editing) in React?", a: "WebSocket/Socket.io: create a connection in a top-level component or Zustand store, expose a subscription method, components subscribe to relevant events. TanStack Query integration: on socket event, call queryClient.invalidateQueries() or queryClient.setQueryData() to update cached data — the UI reacts automatically. For collaborative editing: operational transforms or CRDT (Conflict-free Replicated Data Type) via Yjs + a WebSocket provider, React hook to get the shared doc. Real-time notifications: socket event updates a Zustand notifications store, NotificationBell component subscribes and shows count." },
      { q: "Explain how you'd write a large-scale test suite for a React application.", a: "Three-layer testing pyramid: Unit tests (Vitest + RTL) for individual component behavior — test interactions, rendering, conditional logic. Integration tests (RTL + MSW) for feature flows — test realistic user journeys through multiple components with mocked API calls (login flow, add to cart + checkout). E2E tests (Playwright) for critical business paths — run against real browser + real backend in CI. Custom renderWithProviders wraps all tests with React Query, Router, and store providers. queryByRole-first query strategy ensures tests are accessibility-aware. Factory functions for test data generation. Target: unit + integration for all features, E2E for checkout, auth, and payment flows only." },
      { q: "How do you build and maintain a component design system in React?", a: "Build on Radix UI primitives for accessible, unstyled components. Class Variance Authority (CVA) for variant-based styling (size, variant, intent). TypeScript generics for flexible props. Storybook for documentation — stories cover all variants and states, interaction tests verify behavior, accessibility addon runs axe-core. Chromatic for visual regression — screenshots every story, alerts on visual changes. Publish as a monorepo package (packages/ui). Semantic versioning with changesets. Components expose both controlled and uncontrolled APIs via forwardRef and defaultValue patterns." },
      { q: "What is the React Compiler (React Forget) and how does it change how you write React?", a: "The React Compiler (stable in React 19) automatically inserts useMemo and useCallback at the bytecode level — it analyzes component code and memoizes values and functions that it determines won't change between renders. With the compiler enabled, you no longer need to manually add useMemo/useCallback for performance — write natural React code and the compiler handles memoization. The compiler also enforces the rules of React (no mutation of props, stable hook calls) and produces compile-time errors for violations. Impact: simpler code, fewer performance footguns, but you still need to understand memoization to debug compiler output and for cases the compiler can't handle." },
      { q: "How do you implement accessibility (a11y) in React applications?", a: "Semantic HTML first — use button for clickable actions (not div onClick), nav for navigation, main for main content, role=alert for dynamic announcements. ARIA attributes when semantics aren't sufficient: aria-label for icon-only buttons, aria-expanded for toggles, aria-live for live regions, aria-describedby to associate error messages with inputs (the id approach: <input aria-describedby={errorId}> + <p id={errorId}>Error</p>). Focus management: when modals open, focus the first interactive element (useRef + focus()). Keyboard navigation: all interactive elements reachable by Tab, all actions triggerable by Enter/Space. Testing: axe-core (jest-axe) for automated checks, manual keyboard navigation testing." },
      { q: "How do you optimize the Largest Contentful Paint (LCP) in a React SPA?", a: "The fundamental LCP problem with SPAs: the browser receives an empty HTML shell, downloads React + JS bundle, executes JS, renders components, then fetches data — LCP element appears only after all these steps. Solutions: (1) Use Next.js/Remix for SSR — HTML includes content, LCP is immediate. (2) For a pure SPA: critical above-fold images should have fetchPriority='high' and explicit width/height. Use font-display: swap. Inline critical CSS. (3) Preload data: include a JSON blob in the HTML for above-fold data instead of waiting for a fetch. (4) Code split and preload route chunks. (5) Use a CDN — TTFB matters for LCP." },
    ],
  },

  // ── SECTION 11: COMPARISON ───────────────────────────────────────
  comparison: {
    headers: ["Feature", "React", "Angular", "Vue.js", "Svelte"],
    rows: [
      { feature: "Type", react: "UI library (build your own stack)", vue: "Full framework (opinionated)", angular: "Progressive framework (gradual adoption)", extra: "Compiler-based (no runtime framework)" },
      { feature: "Language", react: "JavaScript/TypeScript (optional)", vue: "TypeScript (mandatory)", angular: "JavaScript/TypeScript (optional)", extra: "JavaScript/TypeScript (optional)" },
      { feature: "Learning Curve", react: "Moderate (hooks + ecosystem choices)", vue: "Steepest (DI + RxJS + NgModules)", angular: "Gentlest (HTML-familiar)", extra: "Lowest (compile-time magic)" },
      { feature: "Architecture", react: "Choose your own (flexible)", vue: "Opinionated (enforced conventions)", angular: "Flexible with conventions", extra: "Minimal (compiler handles optimization)" },
      { feature: "Routing", react: "External (React Router, TanStack Router)", vue: "Built-in Angular Router", angular: "Vue Router (official)", extra: "SvelteKit routing (if using SvelteKit)" },
      { feature: "State Management", react: "useState + TanStack Query + Zustand", vue: "NgRx or BehaviorSubject services", angular: "Pinia (Vue 3) or Vuex (Vue 2)", extra: "Built-in stores (Svelte stores)" },
      { feature: "Forms", react: "React Hook Form + Zod (external)", vue: "Reactive Forms (built-in, powerful)", angular: "VeeValidate or native (external)", extra: "Two-way binding (simple) or SvelteKit forms" },
      { feature: "Performance", react: "Very good (manual optimization required)", vue: "Very good (OnPush + Signals)", angular: "Excellent (compiler eliminates virtual DOM)", extra: "Excellent (no virtual DOM at all)" },
      { feature: "Bundle Size", react: "Medium (~45KB React + React DOM, tree-shakeable deps)", vue: "Larger (~130KB framework overhead)", angular: "Smallest Vue (~23KB min+gzip)", extra: "Smallest (near-zero framework overhead)" },
      { feature: "Ecosystem", react: "Largest (most libraries, most answered questions)", vue: "Large (mature)", angular: "Large (growing)", extra: "Growing (smaller but improving)" },
      { feature: "Job Market India", react: "Widest — all company types", vue: "Enterprise, banking, IT services", angular: "Startups, product companies", extra: "Niche, emerging" },
      { feature: "Best For", react: "Everything — consumer apps, SaaS, design systems, React Native mobile", vue: "Enterprise with large teams, regulated industries", angular: "Content sites, SPAs, rapid prototyping", extra: "Performance-critical, minimal apps" },
    ],
  },

  // ── SECTION 12: PROS & CONS ──────────────────────────────────────
  pros: [
    "Largest ecosystem — a library exists for every UI problem (tables, charts, animations, drag-and-drop, forms, rich text), all battle-tested by millions of developers",
    "Component model — reusable, composable UI pieces that combine data and behavior are universally applicable to every type of application",
    "React Native — React knowledge transfers directly to cross-platform mobile development, doubling the developer's job market and product surface area",
    "Flexibility — React makes no decisions about routing, state management, styling, or data fetching; developers choose the best tool for each problem",
    "Meta backing — used across Facebook and Instagram at billions of users scale; the framework receives sustained investment and has no risk of abandonment",
    "Largest talent pool — easier to hire, largest community for help, more answered StackOverflow questions, more tutorials and courses than any other frontend framework",
    "Hooks model — useEffect, useState, useCallback, and custom hooks provide a clean, composable model for all stateful logic without class complexity",
    "TypeScript support — first-class TypeScript support with well-maintained types, generic component patterns, and full IDE autocomplete for all React APIs",
    "Path to Next.js — React is the required foundation for Next.js, the most popular full-stack framework; React skills directly unlock the highest-value full-stack roles",
  ],
  cons: [
    "Not opinionated — React's flexibility means every team makes different choices; joining a new React project requires learning that team's specific stack (their router, state management, form library, styling approach)",
    "Ecosystem fragmentation — too many competing libraries for the same problem (Redux vs Zustand vs Jotai vs Recoil) creates decision fatigue, especially for beginners",
    "Performance footguns — stale closures, missing effect dependencies, incorrect key usage, and context over-subscription are common mistakes that require React-specific knowledge to debug",
    "No built-in routing or data fetching — React alone cannot build a multi-page application; developers must learn React Router or Next.js in addition to React itself",
    "JSX learning curve — mixing JavaScript and HTML-like syntax is unfamiliar initially; some developers from HTML/CSS backgrounds find it unintuitive",
    "Re-render optimization complexity — understanding when React re-renders, how to prevent unnecessary re-renders with memo/useMemo/useCallback, and how Context causes re-renders requires significant experience",
    "Hooks mental model — useEffect's dependency array, stale closures, and the rules of hooks have a steep conceptual learning curve that produces many subtle bugs for new developers",
    "Rapid evolution — React 16 (hooks), React 18 (concurrent), React 19 (compiler, server components) — the 'correct' way to write React has changed multiple times; older tutorials and Stack Overflow answers teach deprecated patterns",
  ],

  // ── SECTION 13: FUTURE SCOPE ─────────────────────────────────────
  futureScope: [
    "The React Compiler (React 19, stable) is the most significant change to React since hooks. The compiler analyzes React code and automatically inserts memoization — eliminating the need for manual useMemo, useCallback, and React.memo in most cases. Developers write straightforward, natural React code; the compiler handles performance. This eliminates React's most common category of bugs (stale closures, missing memoization) and removes a major source of cognitive complexity. Developers who understand what the compiler does and doesn't handle will be able to write the most efficient React code in 2026 and beyond.",
    "React Server Components are production-stable in Next.js 14 and 15, and the React team has finalized the RSC specification for other frameworks. RSC represents a fundamental shift: React is no longer just a browser rendering library — it is a full-stack UI framework where components can run on the server with direct database access, zero client JavaScript, and streaming HTML delivery. Indian developers who add RSC and Next.js App Router knowledge to their React foundation are positioned for the most in-demand and highest-paid roles — full-stack product engineers at companies building on this architecture.",
    "React Native's New Architecture (JSI + Fabric + TurboModules, stable in React Native 0.73+) eliminates the old JS bridge that caused performance issues on mobile. The new architecture gives React Native performance characteristics close to native apps. For React web developers, this lowers the barrier to mobile development further — the same React component model, hooks, and TypeScript patterns apply. Companies that build React Native in addition to React web (Airbnb returning to React Native, Microsoft's React Native investment, Meta's continued bet) validate the mobile path for React developers.",
    "The Indian developer market for React skills continues to grow on two parallel tracks. The domestic market — funded startups (Meesho, Zepto, ShareChat, and the next generation), fintech products (Razorpay, CRED, Groww), and consumer internet (Swiggy, MakeMyTrip) — continues to hire aggressively for React talent. The global remote market — US and European product companies hiring Indian developers at $100–$180K USD via platforms like Toptal, Arc.dev, Contra, and direct applications — is increasingly accessible to React developers with strong portfolios and communication skills. The salary differential (2–4x Indian market rates for equivalent global remote roles) makes React + strong portfolio the highest-ROI technical investment for Indian developers in 2026.",
    "AI-assisted development is reshaping how React code is written but not what skills are valued. GitHub Copilot, Cursor, and other AI coding assistants generate React boilerplate effectively — but they generate the patterns their training data contains. Developers who understand React deeply (why hooks have rules, how reconciliation works, when to memoize, how to test effectively) use AI tools as force multipliers. Developers who only know React surface-level use AI tools as crutches that produce technically correct but architecturally poor code. Deep React understanding remains valuable precisely because AI makes shallow React knowledge commoditized.",
  ],

  // ── SECTION 14: ACTION PLAN ──────────────────────────────────────
  actionPlan: [
    { week: "Week 1–2", title: "JavaScript ES6+ Foundation — Build Before React", desc: "If you're not fluent in modern JavaScript, spend one week here before touching React. Build 5 small JavaScript programs using: arrow functions, destructuring, spread/rest, async/await with fetch(), array methods (map, filter, reduce), and ES6 modules. React is JavaScript — every concept in React (components are functions, props are function arguments, state updates are function calls) maps directly to JavaScript you already know. Developers who skip this step spend their React learning time confused by JavaScript, not React." },
    { week: "Week 3–5", title: "Core React Fundamentals — Components, State, Effects", desc: "Start with the official React documentation (react.dev — rebuilt in 2023 and excellent). Build three projects without any libraries: a counter with history (useState, list rendering, conditional rendering), a weather app (useEffect for API calls, async/await, loading/error states), and a multi-step form (controlled inputs, useState for step management). Resist adding React Router or any other library — understand pure React first. The goal is to feel comfortable with JSX, props, useState, and useEffect before adding complexity." },
    { week: "Week 6–8", title: "TypeScript, React Router, and TanStack Query", desc: "Add TypeScript to your workflow — type every component's props, every useState, every event handler. Then add React Router for a multi-page application. Then add TanStack Query to replace your manual useEffect data fetching — the difference will be immediately obvious. Build a GitHub repository browser: React Router for navigation, TanStack Query for the GitHub API, TypeScript throughout. This project introduces the core libraries that appear in every professional React codebase." },
    { week: "Week 9–12", title: "Build Your Primary Portfolio Project", desc: "Build the E-Commerce Storefront from the intermediate projects list. Complete CRUD, React Hook Form + Zod for checkout, Zustand cart with persistence, React Router with protected routes, TanStack Query for products, TypeScript throughout. Deploy to Vercel (free). Write a clear README with live URL and GIF demo. Add this to your GitHub profile pinned repositories. This is the project you will talk about in 80% of your interviews. Make it real, handle all edge cases, and spend time on the styling." },
    { week: "Week 13–18", title: "Testing, Performance, and Advanced Patterns", desc: "Add a test suite to your portfolio project: React Testing Library for all major components, MSW for API mocking, Vitest as the test runner. Aim for 60% coverage on meaningful behavior (not just coverage for its own sake). Run Lighthouse on your app and fix the top 3 issues. Learn React DevTools Profiler and identify one performance issue in your app (there will be one — find it and fix it). Build a second portfolio project from the intermediate list — Project Management app or Social Feed — with a different tech focus." },
    { week: "Week 19+", title: "The Tech Job Push", desc: "Apply to 10 React, frontend, or full-stack roles per week — prioritizing product companies (AngelList India for startups, LinkedIn for mid-size product companies), companies whose products you use (more compelling cover letters and interview motivation), and remote-friendly global companies. Study React interview questions deeply: reconciliation, hooks rules, memoization, Context performance implications, TanStack Query vs useEffect, and testing philosophy. Do 2–3 take-home tasks from actual job applications — they reveal exactly what senior engineers look for. Publish a technical blog post about something you learned building your projects — it differentiates you from the majority of candidates and demonstrates genuine understanding. Most React developers in India land their first product company offer within 8–14 weeks of consistent, targeted applications after completing this roadmap." },
  ],
};
