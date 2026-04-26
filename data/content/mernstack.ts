import type { TechContent } from './types';

export const mernStackContent: TechContent = {
  techId: 'mern-stack',
  readTime: '30–35 min',
  difficulty: 'Beginner to Advanced',
  lastUpdated: '2026',

  // ── OPENING HOOK ─────────────────────────────────────────────────
  openingHook:
    "If there's one skill combination that Indian recruiters search for more than any other in 2026, it's MERN Stack. MongoDB, Express.js, React, and Node.js — four technologies that together let a single developer build a complete, production-ready web application from database to UI. Startups love it because one MERN developer can do the work of two specialists. Product companies love it because the hiring pool is large and the ecosystem is mature. And freshers love it because the learning path is linear — you already know JavaScript, and MERN is JavaScript all the way down. A solid MERN Stack portfolio with two deployed projects is the fastest way to break into a ₹4–10 LPA full-stack role in 2026. This is not a tutorial overview. This is the complete, no-fluff MERN Stack roadmap — from zero to job-ready.",

  // ── SECTION 1: INTRODUCTION ──────────────────────────────────────
  introText: [
    "MERN Stack is a combination of four open-source technologies — MongoDB, Express.js, React, and Node.js — that together form a complete JavaScript-based web development stack. Every layer, from the database to the user interface, is written in JavaScript. That's the core proposition: one language, full stack.",
    "Before MERN became popular, building a full web application meant context-switching between multiple languages — Python or PHP for the backend, SQL for the database, JavaScript for the frontend. Each had its own syntax, conventions, and mental models. MERN collapsed that into one ecosystem. A developer who knows JavaScript well can contribute to every layer of the application.",
    "The problem MERN solves is fragmentation. Hiring a Python backend developer, a React frontend developer, and a DBA separately is expensive. MERN enables full-stack JavaScript development — smaller teams, faster iteration, easier code sharing between layers. That's why it became the default stack for JavaScript-first startups globally, and why it remains one of the most hired skill sets in India's product and startup ecosystem.",
  ],

  realWorldUsages: [
    "Facebook — React was built internally at Facebook; their full stack uses JavaScript-first principles",
    "LinkedIn — migrated to a Node.js backend and uses React for their web frontend",
    "Airbnb — React frontend, Node.js API layer, document storage similar to MongoDB patterns",
    "Thousands of Indian startups — ed-tech, fintech, HR-tech, and health-tech startups built on MERN",
    "Open-source platforms — Ghost, Strapi, KeystoneJS all built on MERN-adjacent stacks",
    "E-learning platforms — Coursera-style platforms with React frontends and Node.js backends",
    "SaaS products — project management, CRM, and analytics dashboards built end-to-end with MERN",
  ],

  // ── SECTION 2: WHY LEARN ─────────────────────────────────────────
  whyLearn: {
    demand:
      "Search 'full stack developer' on Naukri, LinkedIn India, or Indeed India — over 65% of listings mention MERN Stack or its individual components (React + Node.js + MongoDB). It's the most sought-after full-stack combination for Indian product companies, startups, and service companies with digital transformation projects. Learning MERN Stack step by step is the single most efficient path to a full-stack job in 2026.",
    jobRoles: [
      { role: "Full-Stack Developer (MERN)", desc: "The most common role — build both React frontends and Node.js + Express backends, connect to MongoDB." },
      { role: "Frontend Developer (React)", desc: "Specialize on the React layer — components, state management, API integration, performance." },
      { role: "Backend Developer (Node.js)", desc: "Specialize on the Express + MongoDB layer — REST APIs, auth, database design, deployment." },
      { role: "JavaScript Developer", desc: "Generalist JS role common in startups — expected to contribute across the entire MERN stack." },
      { role: "Software Engineer (Product)", desc: "Mid-size product companies expect MERN proficiency for feature development across the full stack." },
    ],
    whyCompanies: [
      { reason: "One language, full stack", detail: "JavaScript everywhere — frontend, backend, scripts, tests. Smaller teams, less context switching." },
      { reason: "Massive talent pool", detail: "More JavaScript developers exist than any other language. Hiring is faster and cheaper." },
      { reason: "Speed of development", detail: "npm ecosystem, reusable components, shared TypeScript types — MERN teams ship faster." },
      { reason: "JSON native end-to-end", detail: "MongoDB stores JSON, Express serves JSON, React consumes JSON. No translation layers between tiers." },
    ],
    salaryRange: "₹4 LPA – ₹10 LPA (Freshers with portfolio) | ₹10 LPA – ₹25 LPA (Mid-Level, 2–4 years)",
    careerNote:
      "MERN is not a ceiling — it's a launchpad. Once you're solid in MERN, you move into Next.js (full-stack React), TypeScript (type safety across both layers), GraphQL (advanced API design), or system design (scaling MERN apps). Senior MERN developers with architecture knowledge regularly cross ₹30 LPA at Indian product companies.",
  },

  // ── SECTION 3: HOW IT WORKS ──────────────────────────────────────
  howItWorks: {
    intro:
      "Think of a restaurant. The customer (browser) sees only the dining room (React). They place an order with the waiter (Express.js + Node.js API). The waiter goes to the kitchen, retrieves ingredients from the pantry (MongoDB), prepares the dish, and delivers it back. The customer never sees the kitchen — they only see the result. Each layer has one job, and they communicate through a standard protocol (HTTP + JSON).",
    vdomSteps: [
      { num: "1", title: "User Interacts with React (Frontend)", text: "The user clicks a button, submits a form, or navigates to a page. React handles UI events, manages local state, and makes HTTP requests to the backend API using fetch or Axios." },
      { num: "2", title: "HTTP Request Hits Express (Backend)", text: "The request reaches the Express.js server running on Node.js. Express routes the request to the correct handler function based on the HTTP method and URL path." },
      { num: "3", title: "Middleware Pipeline Runs", text: "Before the handler, middleware functions execute in order — CORS validation, JWT auth check, request body parsing, input validation. Each calls next() or returns an error." },
      { num: "4", title: "Business Logic + MongoDB Query", text: "The route handler runs business logic and queries MongoDB via Mongoose — finding, creating, updating, or deleting documents. Mongoose converts results to JavaScript objects." },
      { num: "5", title: "JSON Response Returns to React", text: "Express sends a JSON response back to React. React receives the data, updates state with useState or a state manager, and re-renders the relevant components to show the user the result." },
    ],
    componentCode: `// THE MERN DATA FLOW — a single feature, end to end

// 1. REACT (Frontend) — user triggers a data fetch
const [products, setProducts] = useState([]);

const fetchProducts = async () => {
  const res = await axios.get('/api/products', {
    headers: { Authorization: \`Bearer \${token}\` }
  });
  setProducts(res.data.data); // React re-renders with new data
};

// 2. EXPRESS ROUTE (Backend) — receives and handles the request
router.get('/', protect, async (req, res, next) => {
  try {
    const products = await Product.find().populate('seller', 'name email');
    res.json({ success: true, data: products });
  } catch (err) { next(err); }
});

// 3. MONGOOSE MODEL (Database Layer) — defines data structure
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  seller: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now },
});
const Product = mongoose.model('Product', productSchema);

// 4. MONGODB stores the document as BSON (JSON-like)
// { "_id": "...", "name": "Laptop", "price": 45000, "seller": "userId..." }`,
    renderCycle: [
      "User action in React → Axios/fetch HTTP request to Express API",
      "Express receives request → middleware pipeline (auth, validation) runs",
      "Route handler executes → Mongoose queries MongoDB",
      "MongoDB returns documents → Mongoose converts to JS objects",
      "Express sends JSON response → React updates state → UI re-renders",
    ],
    closingNote:
      "This request-response cycle is the heartbeat of every MERN application. Once you can trace any feature — user registration, product listing, order placement — through all four layers, you understand MERN. Everything else is just building more of the same pattern.",
  },

  // ── SECTION 4: CORE CONCEPTS ─────────────────────────────────────
  coreConcepts: [
    {
      id: "mongodb-mongoose",
      number: "4.1",
      title: "MongoDB + Mongoose — The Data Layer",
      icon: "🗄️",
      color: "emerald",
      intro:
        "MongoDB is a NoSQL document database that stores data as JSON-like BSON documents. Instead of tables and rows, you have collections and documents. Mongoose is the ODM (Object Document Mapper) that sits on top — giving you schemas, validation, middleware hooks, and clean query syntax for working with MongoDB from Node.js.",
      code: `const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Product name is required'],
    trim: true,
    maxlength: [100, 'Name cannot exceed 100 characters'],
  },
  price: { type: Number, required: true, min: [0, 'Price cannot be negative'] },
  category: { type: String, enum: ['electronics', 'clothing', 'food'], required: true },
  seller: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  images: [{ type: String }],
  inStock: { type: Boolean, default: true },
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

// CRUD operations
const product = await Product.create({ name: 'Laptop', price: 45000, category: 'electronics', seller: userId });
const products = await Product.find({ category: 'electronics', inStock: true })
  .populate('seller', 'name email')
  .sort({ price: 1 })
  .limit(10)
  .skip(20);
const updated = await Product.findByIdAndUpdate(id, { price: 42000 }, { new: true, runValidators: true });
await Product.findByIdAndDelete(id);`,
      usage:
        "MongoDB + Mongoose is the data backbone of every MERN application. User accounts, product catalogs, blog posts, orders, chat messages — all stored as MongoDB documents. The schema validates data before it hits the database, preventing corrupt records.",
      mistake:
        "Using findById() without checking if the document exists. Mongoose returns null if no document matches. Accessing properties on null (null.name) throws a TypeError that crashes your route. Always check for null before proceeding.",
    },
    {
      id: "rest-api-express",
      number: "4.2",
      title: "REST API Design with Express",
      icon: "🚀",
      color: "primary",
      intro:
        "The Express backend is the bridge between React and MongoDB. It exposes a REST API — a set of HTTP endpoints that React calls to perform operations. Good REST API design follows predictable conventions: nouns in URLs, correct HTTP methods, consistent JSON responses, and proper status codes.",
      code: `// Consistent API response helper
const sendResponse = (res, statusCode, data, message = 'Success') => {
  res.status(statusCode).json({ success: true, message, data });
};

// RESTful product routes with pagination, filtering, and search
router.get('/', async (req, res, next) => {
  try {
    const { page = 1, limit = 10, category, search, minPrice, maxPrice } = req.query;
    const query = {};
    if (category) query.category = category;
    if (search) query.name = { $regex: search, $options: 'i' };
    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = Number(minPrice);
      if (maxPrice) query.price.$lte = Number(maxPrice);
    }

    const total = await Product.countDocuments(query);
    const products = await Product.find(query)
      .populate('seller', 'name')
      .sort({ createdAt: -1 })
      .limit(Number(limit))
      .skip((Number(page) - 1) * Number(limit));

    sendResponse(res, 200, {
      products,
      pagination: { total, page: Number(page), pages: Math.ceil(total / limit) },
    });
  } catch (err) { next(err); }
});

router.post('/', protect, validateProduct, async (req, res, next) => {
  try {
    const product = await Product.create({ ...req.body, seller: req.user.id });
    sendResponse(res, 201, product, 'Product created');
  } catch (err) { next(err); }
});`,
      usage:
        "Every MERN project is built around a set of REST API endpoints. Before writing a single line of code, define your API — what endpoints exist, what they accept, what they return. This API contract is the blueprint that React and Express both work to.",
      mistake:
        "Inconsistent response structures — sometimes returning { data: [] }, sometimes returning [] directly. React's data-fetching code becomes a mess of if-checks. Standardize your response shape from day one: { success, message, data }. Never deviate.",
    },
    {
      id: "react-api-integration",
      number: "4.3",
      title: "React + API Integration",
      icon: "⚛️",
      color: "blue",
      intro:
        "The React frontend consumes the Express API. In a MERN app, React doesn't hold data permanently — it fetches it from the backend on demand. Understanding how to fetch, display, and manage API data in React is the core full-stack skill. This means handling loading states, errors, and keeping UI in sync with server data.",
      code: `import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

// Configure Axios once — one place for your API base URL
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000',
});

// Auto-attach JWT token to every request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = \`Bearer \${token}\`;
  return config;
});

// Handle 401 globally — redirect to login when token expires
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Custom hook — reusable data fetching pattern
function useProducts(filters = {}) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({});

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const { data } = await api.get('/api/products', { params: filters });
      setProducts(data.data.products);
      setPagination(data.data.pagination);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to load products');
    } finally {
      setLoading(false);
    }
  }, [JSON.stringify(filters)]);

  useEffect(() => { fetchProducts(); }, [fetchProducts]);
  return { products, loading, error, pagination, refetch: fetchProducts };
}`,
      usage:
        "Every page in a MERN app that shows data follows this pattern: custom hook → fetch from API → loading/error/data states → render. Authentication, product listings, user profiles, order history — the same three-state pattern every time.",
      mistake:
        "Fetching data directly in components without custom hooks. When multiple components need the same data, you get duplicate fetch calls. Extract fetch logic into custom hooks — they're reusable, testable, and keep components clean.",
    },
    {
      id: "auth-full-stack",
      number: "4.4",
      title: "Full-Stack Authentication",
      icon: "🔐",
      color: "orange",
      intro:
        "Authentication in a MERN app spans all four layers — React manages auth state and protected routes, Express issues and verifies JWT tokens, MongoDB stores user accounts, and bcrypt hashes passwords. This end-to-end auth flow is the most commonly tested concept in MERN interviews and take-home tasks.",
      code: `// ── BACKEND: Express Auth Routes ──────────────────
router.post('/register', async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    if (await User.findOne({ email })) {
      return res.status(400).json({ error: 'Email already registered' });
    }
    const hashed = await bcrypt.hash(password, 12);
    const user = await User.create({ name, email, password: hashed });
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.status(201).json({ token, user: { id: user._id, name, email } });
  } catch (err) { next(err); }
});

router.post('/login', async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select('+password');
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.json({ token, user: { id: user._id, name: user.name, email } });
  } catch (err) { next(err); }
});

// ── FRONTEND: React Auth Context ───────────────────
const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem('user');
    return stored ? JSON.parse(stored) : null;
  });

  const login = async (email, password) => {
    const { data } = await api.post('/api/auth/login', { email, password });
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(data.user));
    setUser(data.user);
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuth: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

// Protected Route — redirects unauthenticated users
function ProtectedRoute({ children }) {
  const { isAuth } = useContext(AuthContext);
  return isAuth ? children : <Navigate to="/login" replace />;
}`,
      usage:
        "Every MERN app with user accounts uses this exact pattern. The JWT lives in localStorage. Every API request sends it in the Authorization header. The backend protect middleware verifies it. This flow appears in 90% of MERN interview take-home tasks.",
      mistake:
        "Not handling token expiry on the frontend. When the JWT expires, all API calls return 401. Without an Axios response interceptor catching 401s and redirecting to /login, users see a broken, data-less UI with no explanation of what happened.",
    },
    {
      id: "state-management",
      number: "4.5",
      title: "State Management — Context to Zustand",
      icon: "🔄",
      color: "purple",
      intro:
        "As MERN apps grow, managing shared state (logged-in user, cart items, notifications) across many components gets complex. React Context works for low-frequency global state. For frequently-updating or complex state, Zustand is cleaner and more performant. Knowing when to use which is a seniority signal.",
      code: `// Context API — good for auth, theme (low-frequency updates)
export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  const addItem = (product) => {
    setItems(prev => {
      const existing = prev.find(i => i._id === product._id);
      if (existing) return prev.map(i =>
        i._id === product._id ? { ...i, qty: i.qty + 1 } : i
      );
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeItem = (id) => setItems(prev => prev.filter(i => i._id !== id));
  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);
  const count = items.reduce((sum, i) => sum + i.qty, 0);

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, total, count }}>
      {children}
    </CartContext.Provider>
  );
}

// Zustand — better for frequent updates, no Provider needed
import { create } from 'zustand';

const useProductStore = create((set, get) => ({
  products: [],
  loading: false,
  filters: { category: '', search: '', page: 1 },

  setFilter: (key, value) => set(state => ({
    filters: { ...state.filters, [key]: value, page: 1 }
  })),

  fetchProducts: async () => {
    set({ loading: true });
    try {
      const { filters } = get();
      const { data } = await api.get('/api/products', { params: filters });
      set({ products: data.data.products, loading: false });
    } catch { set({ loading: false }); }
  },
}));`,
      usage:
        "Shopping carts, notification badges, filter state shared across pages, user preferences — these all need shared state. Use Context for 1–3 infrequent global values. Zustand for anything more complex or performance-sensitive. Avoid the mistake of one giant Context for everything.",
      mistake:
        "Putting all global state into a single monolithic Context. Every context value change re-renders all consumers. Split by concern — AuthContext, CartContext, ThemeContext — or switch to Zustand which provides selector-based subscriptions so components only re-render for the slice they care about.",
    },
    {
      id: "project-structure",
      number: "4.6",
      title: "MERN Project Structure — Scalable from Day One",
      icon: "📁",
      color: "yellow",
      intro:
        "How you organize a MERN project determines how maintainable it is as it grows. The recommended approach for interviews and production is a monorepo with /client and /server folders — frontend and backend clearly separated, independently deployable, with their own package.json and .env files.",
      code: `mern-project/
├── client/                    # React frontend (Vite)
│   ├── src/
│   │   ├── api/               # Axios instance + service functions
│   │   ├── components/
│   │   │   ├── common/        # Button, Input, Modal, Spinner
│   │   │   └── features/      # ProductCard, OrderItem
│   │   ├── context/           # AuthContext, CartContext
│   │   ├── hooks/             # useFetch, useAuth, useCart
│   │   ├── pages/             # Home, Login, Dashboard, ProductDetail
│   │   ├── store/             # Zustand stores (if used)
│   │   └── utils/             # formatCurrency, validators, constants
│   ├── .env                   # VITE_API_URL=http://localhost:5000
│   └── package.json
│
├── server/                    # Express + Node.js backend
│   ├── config/
│   │   └── db.js              # mongoose.connect()
│   ├── controllers/           # Route handler logic
│   │   ├── authController.js
│   │   ├── productController.js
│   │   └── orderController.js
│   ├── middleware/
│   │   ├── auth.js            # protect, adminOnly
│   │   ├── validate.js        # express-validator wrapper
│   │   └── errorHandler.js    # 4-param error middleware
│   ├── models/
│   │   ├── User.js
│   │   ├── Product.js
│   │   └── Order.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── productRoutes.js
│   │   └── orderRoutes.js
│   ├── utils/                 # AppError, sendEmail, generateToken
│   ├── .env                   # PORT, MONGO_URI, JWT_SECRET
│   ├── app.js                 # Express setup, middleware, routes
│   └── server.js              # DB connect + app.listen
│
└── package.json               # Root: "dev": "concurrently ..."`,
      usage:
        "This structure scales from a to-do app to a full e-commerce platform without reorganization. Interviewers and senior developers look at project structure as a proxy for engineering maturity. The controller/route separation signals you understand separation of concerns.",
      mistake:
        "Writing all route handlers inline in app.js. A 400-line app.js file with routes, logic, and database calls mixed together is unmaintainable and immediately signals a junior developer. Separate routes, controllers, and models from your very first project.",
    },
    {
      id: "deployment",
      number: "4.7",
      title: "Deployment — Taking MERN to Production",
      icon: "🌐",
      color: "red",
      intro:
        "A MERN project running on localhost is not a portfolio project. A deployed app with a live URL that a recruiter can visit — that is a portfolio project. The React frontend and Express backend deploy separately. React is a static site (Vercel or Netlify). The Express server needs a Node.js host (Railway or Render).",
      code: `// server/app.js — production-ready Express setup
const app = express();

app.use(helmet());
app.use(cors({
  origin: process.env.CLIENT_URL, // e.g. https://your-app.vercel.app
  credentials: true,
}));
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));
app.use(express.json({ limit: '10kb' }));

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/products', require('./routes/productRoutes'));

// Catch unmatched routes
app.all('*', (req, res, next) => {
  next(new AppError(\`Route \${req.originalUrl} not found\`, 404));
});

app.use(require('./middleware/errorHandler'));
module.exports = app;

// client/.env.production
// VITE_API_URL=https://your-backend.railway.app

// client/vite.config.js — dev proxy avoids CORS in local dev
export default defineConfig({
  server: {
    proxy: {
      '/api': 'http://localhost:5000',
    },
  },
});

/*
DEPLOYMENT CHECKLIST:
✅ MongoDB Atlas — free M0 cluster, get connection string
✅ Railway / Render — deploy Express, add all env vars in dashboard
✅ Vercel — deploy React (Vite), add VITE_API_URL env var
✅ CORS — set CLIENT_URL to your exact Vercel domain
✅ NODE_ENV=production — set on Railway/Render
✅ Test deployed API with Postman before connecting frontend
*/`,
      usage:
        "Every MERN project you build should end with deployment. Three platforms, all free tiers: MongoDB Atlas (database), Railway/Render (backend), Vercel (frontend). A deployed link in your GitHub README is the difference between a tutorial exercise and a real portfolio piece.",
      mistake:
        "Forgetting to update CORS origin when deploying. In development, frontend and backend are both on localhost. In production they're on different domains. Leaving CORS as '*' is a security issue — set it explicitly to your Vercel frontend URL via process.env.CLIENT_URL.",
    },
  ],

  // ── SECTION 5: PREREQUISITES ─────────────────────────────────────
  prerequisites: [
    { item: "JavaScript (ES6+)", done: false, note: "Mandatory — MERN is 100% JavaScript", detail: "Arrow functions, destructuring, Promises, async/await, array methods (map, filter, reduce), modules. Every layer uses these daily." },
    { item: "HTML & CSS Basics", done: true, note: "For building React UI", detail: "Flexbox, Grid, semantic elements. You'll style React components — basic CSS proficiency required." },
    { item: "React Fundamentals", done: false, note: "useState, useEffect, props, components, React Router", detail: "Build at least two React projects before starting full-stack. Be comfortable in React before adding the backend layer." },
    { item: "Node.js & Express Basics", done: false, note: "REST API fundamentals, middleware, routing", detail: "Build one Express REST API with CRUD endpoints before MERN. Understand req/res, Router, and async error handling." },
    { item: "MongoDB & Mongoose Basics", done: false, note: "Schema definition, CRUD operations, relationships", detail: "Connect to MongoDB Atlas, define a Mongoose schema, run find/create/update/delete. These become second nature in MERN." },
    { item: "Command Line, Git, npm", done: true, note: "Daily tools in any dev job", detail: "npm install, git workflows, terminal navigation. Non-negotiable for any development role." },
    { item: "Postman or Thunder Client", done: true, note: "Test APIs independently of React", detail: "Before connecting React, always verify your Express API works correctly in Postman. Saves hours of debugging." },
  ],

  // ── SECTION 6: ROADMAP ───────────────────────────────────────────
  roadmap: [
    {
      phase: "Beginner",
      label: "01",
      duration: "Weeks 1–5",
      color: "emerald",
      topics: [
        "JavaScript ES6+ review — async/await, destructuring, array methods",
        "React: components, props, useState, useEffect, React Router v6",
        "Node.js: modules, http module, npm, event loop basics",
        "Express: routing, middleware, req/res, express.json()",
        "MongoDB Atlas setup — Mongoose schema and CRUD",
        "Connecting Express to MongoDB Atlas",
        "dotenv — environment variable management",
        "Testing APIs with Postman before connecting React",
      ],
      buildProjects: [
        "To-Do app: React frontend + Express API + MongoDB (complete MERN, no auth)",
        "Notes app: Create, read, update, delete notes — full end-to-end MERN flow",
        "Simple blog reader: List posts fetched from Express + MongoDB backend in React",
      ],
    },
    {
      phase: "Intermediate",
      label: "02",
      duration: "Weeks 6–12",
      color: "primary",
      topics: [
        "JWT auth — backend register/login, frontend AuthContext + ProtectedRoute",
        "Password hashing with bcrypt",
        "Input validation with express-validator on backend",
        "Centralized error handling middleware in Express",
        "File uploads with Multer + Cloudinary",
        "Pagination, search, and multi-field filtering",
        "Axios instance with interceptors for auth headers + 401 handling",
        "Zustand or React Context for cart and global UI state",
        "Mongoose populate() for relational data",
      ],
      buildProjects: [
        "Full-stack auth system: Register, login, protected dashboard, profile update with avatar",
        "Blog platform: Auth users create posts, others comment — CRUD with relationships and pagination",
        "Product catalog: Listings, search/filter/sort, image upload, cart state with Zustand",
        "Task manager: Teams, tasks, assignment, priority — role-based access across full stack",
      ],
    },
    {
      phase: "Advanced",
      label: "03",
      duration: "Weeks 13–22+",
      color: "purple",
      topics: [
        "Payment integration — Razorpay or Stripe (webhooks, order lifecycle management)",
        "Real-time features with Socket.io (chat, live notifications, presence)",
        "Redis caching for expensive API endpoints",
        "Email workflows — Nodemailer (verification emails, password reset, receipts)",
        "API security hardening — helmet, mongo-sanitize, xss-clean, rate limiting",
        "TypeScript across both React and Express layers",
        "Testing — Jest + Supertest (backend), React Testing Library (frontend)",
        "Docker — containerize the full MERN application",
        "CI/CD with GitHub Actions — auto-deploy on push to main",
      ],
      buildProjects: [
        "E-commerce platform: Products, cart, Razorpay checkout, order tracking, admin panel",
        "Real-time chat: Rooms, DMs, typing indicators, online presence, message history",
        "SaaS multi-tenant dashboard: Organizations, subscription plans, analytics, team management",
      ],
    },
  ],

  // ── SECTION 7: USE CASES ─────────────────────────────────────────
  useCases: [
    { num: "01", title: "E-Commerce Platforms", body: "Product listings with filters, user auth, cart management, order placement, payment gateway integration, seller dashboards, admin panels — the complete e-commerce flow is a perfect MERN use case. Most Indian e-commerce startups at early stage run on MERN." },
    { num: "02", title: "Ed-Tech Platforms", body: "Course catalogs, video progress tracking, quiz engines, instructor dashboards, student analytics — platforms like smaller Udemy-style apps are built with React frontends and Node.js backends with MongoDB storing course content and progress." },
    { num: "03", title: "HR and Recruitment Tools", body: "Job boards, applicant tracking systems, resume uploads, interview scheduling — MERN's flexibility handles complex form workflows, document uploads, and role-based dashboards for candidates, recruiters, and admins." },
    { num: "04", title: "Real-Time Collaboration Tools", body: "Project management boards (Trello-style), shared editors, team chat — React handles real-time UI updates, Socket.io on the Express backend pushes live events, MongoDB stores persistent state." },
    { num: "05", title: "Fintech and Banking Apps", body: "Transaction dashboards, expense trackers, loan application portals, KYC document verification flows — MERN handles complex multi-step forms, secure auth, role-based access, and data visualization with Recharts." },
    { num: "06", title: "Healthcare Portals", body: "Patient dashboards, appointment booking, prescription management, doctor-patient communication — MERN's full-stack JavaScript enables rapid feature development in an industry digitizing fast across India." },
    { num: "07", title: "Social Networking Apps", body: "User profiles, follow/unfollow systems, feeds, likes, comments, notifications, media uploads — the social graph maps well to MongoDB's document model and React's component-based feed rendering." },
  ],

  // ── SECTION 8: PROJECTS ──────────────────────────────────────────
  projects: {
    beginner: [
      { name: "Full-Stack To-Do App", desc: "React frontend to add, complete, and delete tasks. Express + MongoDB backend stores tasks persistently. No auth — pure CRUD end-to-end.", teaches: "Complete MERN data flow, Axios GET/POST/DELETE, Mongoose CRUD, React state sync with backend" },
      { name: "Notes App with CRUD", desc: "Create, edit, and delete notes with title and body. All persisted in MongoDB. Edit inline in React.", teaches: "PUT requests, controlled form inputs, optimistic UI updates, complete MERN without auth" },
      { name: "Blog Reader App", desc: "React displays blog posts fetched from Express + MongoDB. Click to view full post. Search by title.", teaches: "React Router dynamic routes, useEffect data fetching, query parameters, MongoDB text search" },
      { name: "Expense Tracker", desc: "Add income and expense entries with category and amount. Chart shows breakdown. Backend stores all records.", teaches: "Aggregation queries in MongoDB, Chart.js or Recharts integration in React, category filtering" },
    ],
    intermediate: [
      { name: "Full Authentication System", desc: "Register, login, JWT, protected dashboard, profile update with avatar upload. Role-based admin view.", teaches: "End-to-end MERN auth flow, bcrypt, JWT, Multer + Cloudinary, AuthContext, ProtectedRoute" },
      { name: "Blog Platform", desc: "Auth users write, edit, delete posts. Others comment and like. Pagination on the feed. Author profile pages.", teaches: "Mongoose references and populate(), pagination pattern, auth-gated mutations, React Router nested routes" },
      { name: "E-Commerce Product Catalog", desc: "Product listings with search, category filter, price range. Add to cart with Zustand. Persistent cart.", teaches: "Complex MongoDB queries, Multer image uploads, Zustand store, Axios with query params" },
      { name: "Job Board", desc: "Companies post jobs, candidates apply with resume upload. Admin reviews applications. Three-role system.", teaches: "RBAC across full MERN stack, file uploads, complex data relationships, real product thinking" },
    ],
    advanced: [
      { name: "Full E-Commerce with Payments", desc: "Complete shopping flow — products, cart, Razorpay/Stripe checkout, order tracking, email receipts, inventory management, seller and admin dashboards.", teaches: "Payment webhooks, Nodemailer, order state machine, admin dashboard design, production deployment" },
      { name: "Real-Time Chat Application", desc: "User auth, chat rooms, direct messages, online presence, typing indicators, message history in MongoDB — Socket.io for real-time events.", teaches: "Socket.io events, room management, React real-time state, Redis pub/sub for multi-server scaling" },
      { name: "SaaS Multi-Tenant Platform", desc: "Organizations onboard, add members, subscribe to plans, access features gated by plan tier. Admin analytics dashboard with charts.", teaches: "Multi-tenancy architecture, Stripe subscription billing, role + plan gating, data isolation patterns" },
    ],
  },

  // ── SECTION 9: MISTAKES ──────────────────────────────────────────
  mistakes: [
    {
      title: "Learning All Four Technologies at the Same Time",
      explanation: "The biggest MERN beginner mistake. Trying to learn React, Node.js, Express, and MongoDB simultaneously means you don't know which layer is causing a bug — and most people give up before finishing.",
      tip: "Learn in order: JavaScript ES6+ → React → Node.js/Express → MongoDB. Build small projects at each stage. Then combine into MERN.",
    },
    {
      title: "Not Using Separate .env Files for Client and Server",
      tip: "React (Vite) uses VITE_ prefix for env vars. Express uses process.env. Keep two separate .env files and add both to .gitignore.",
      wrong: "// Single root-level .env — React can't read server vars, server can't read VITE_ vars",
      correct: "client/.env: VITE_API_URL=http://localhost:5000\nserver/.env: PORT=5000, MONGO_URI=..., JWT_SECRET=...",
    },
    {
      title: "CORS Errors When Connecting React to Express",
      explanation: "React on port 5173 calling Express on port 5000 — browsers block this cross-origin request without explicit CORS headers. This is the first wall every MERN beginner hits.",
      tip: "Install cors package. Add app.use(cors({ origin: 'http://localhost:5173' })) to Express before routes. In Vite dev mode, use the proxy config instead.",
    },
    {
      title: "Storing Passwords in Plain Text in MongoDB",
      explanation: "Saving req.body.password directly to the database stores it as readable plain text. A single database breach exposes every user's password instantly.",
      tip: "Always hash with bcrypt before saving. Use Mongoose's select: false on the password field to never return it in queries.",
      wrong: "await User.create({ email, password }); // Plain text — catastrophic",
      correct: "const hashed = await bcrypt.hash(password, 12); await User.create({ email, password: hashed });",
    },
    {
      title: "Making Fetch Calls Directly in JSX Without Custom Hooks",
      explanation: "Writing axios.get() calls inside component bodies or inline event handlers without state management leads to race conditions, duplicate requests, and components that are impossible to test.",
      tip: "Extract all API calls into custom hooks (useProducts, useAuth) or service files (api/productService.js). Components should call hooks and render — not contain network logic.",
    },
    {
      title: "Not Handling Loading and Error States in React",
      tip: "Rendering data.map() before the API responds throws 'Cannot read properties of undefined'. Always initialize state as empty array/null, show a loading spinner, and display an error message on failure.",
      wrong: "const [data, setData] = useState(); useEffect(() => { api.get('/products').then(r => setData(r.data)); }, []); return data.map(...); // Crashes immediately",
      correct: "const [data, setData] = useState([]); const [loading, setLoading] = useState(true); // Handle all 3 states",
    },
    {
      title: "Returning Sensitive Data in API Responses",
      tip: "Never return the hashed password, internal server paths, or JWT secrets in API responses. Use Mongoose's select: false and explicitly shape response objects.",
      wrong: "const user = await User.findById(id); res.json(user); // Returns hashed password field",
      correct: "const user = await User.findById(id).select('-password -__v'); res.json({ data: user });",
    },
    {
      title: "Not Validating MongoDB ObjectId Before Querying",
      explanation: "If req.params.id is not a valid MongoDB ObjectId format, Mongoose throws a CastError. Without handling this, the error bubbles up as an ugly 500 instead of a clean 400.",
      tip: "Add mongoose.isValidObjectId(req.params.id) check before any findById() call. Handle CastError in your centralized error middleware.",
      wrong: "const product = await Product.findById(req.params.id); // CastError on invalid ID",
      correct: "if (!mongoose.isValidObjectId(req.params.id)) return next(new AppError('Invalid ID format', 400));",
    },
    {
      title: "Hardcoding the API URL in React Components",
      tip: "When deployed, localhost:5000 doesn't exist. Use import.meta.env.VITE_API_URL and configure it per environment. Create a single Axios instance that all components import.",
      wrong: "const res = await axios.get('http://localhost:5000/api/products'); // Breaks in production",
      correct: "const api = axios.create({ baseURL: import.meta.env.VITE_API_URL }); const res = await api.get('/api/products');",
    },
    {
      title: "Skipping Backend Validation Because React Already Validates",
      explanation: "Frontend validation improves UX. Backend validation is a security requirement. Anyone can call your API with Postman, bypassing React entirely.",
      tip: "Validate every POST and PUT route with express-validator or Joi — independent of what the frontend checks. Both layers must validate.",
    },
    {
      title: "Deploying Without Setting Environment Variables on the Platform",
      explanation: "Pushing to Railway or Render without setting MONGO_URI, JWT_SECRET, and PORT in the platform's environment settings. The app deploys and immediately crashes trying to connect to nothing.",
      tip: "Before deploying, go to your hosting dashboard and add every variable from your .env file. Verify with Postman after deployment, before connecting the frontend.",
    },
    {
      title: "Mixing Business Logic Into Route Handlers",
      explanation: "A 150-line route handler that fetches data, transforms it, sends emails, and formats the response is untestable, unreadable, and unmaintainable. This is the most common structural mistake in MERN codebases.",
      tip: "Routes map URLs to controllers. Controllers contain business logic. Models handle data access. Keep each layer focused on one responsibility.",
    },
  ],

  // ── SECTION 10: INTERVIEW QUESTIONS ─────────────────────────────
  interviewQuestions: {
    beginner: [
      { q: "What does MERN stand for and what is each technology's role?", a: "MongoDB (document database), Express.js (web framework for Node.js), React (frontend UI library), Node.js (JavaScript server runtime). MongoDB stores data, Express + Node.js build the API, React renders the UI." },
      { q: "Why is MERN called a full-stack JavaScript stack?", a: "Because JavaScript runs at every layer — React on the frontend, Node.js and Express on the backend, Mongoose (JS library) communicating with MongoDB. One language, zero context-switching between layers." },
      { q: "What is MongoDB and how does it differ from MySQL?", a: "MongoDB is a NoSQL document database storing data as JSON-like BSON documents in collections. MySQL uses tables, rows, and strict schemas with SQL queries. MongoDB is schema-flexible — great for rapidly evolving data structures." },
      { q: "What is Mongoose and why use it over the raw MongoDB driver?", a: "Mongoose is an ODM that adds schemas, data validation, middleware hooks (pre/post save), relationship population, and clean query methods on top of MongoDB. The raw driver has none of these — it's just low-level CRUD." },
      { q: "What is a REST API and what HTTP methods does it use?", a: "An architectural style for APIs using HTTP. GET (read), POST (create), PUT/PATCH (update), DELETE (remove). URLs represent resources (/users, /products/:id). Data is exchanged as JSON." },
      { q: "How does React communicate with an Express backend in MERN?", a: "Through HTTP requests using Axios or fetch. React sends a request to an Express endpoint. Express processes it, queries MongoDB if needed, and returns JSON. React receives the JSON, updates state, and re-renders." },
      { q: "What is CORS and why do MERN developers encounter it?", a: "Cross-Origin Resource Sharing — browsers block requests between different origins (localhost:5173 to localhost:5000). Fix with the cors npm package on Express: app.use(cors({ origin: 'http://localhost:5173' }))." },
      { q: "What is JWT and how is it used for authentication in MERN?", a: "JSON Web Token — a signed token encoding user data. On login, Express creates and returns a JWT. React stores it in localStorage and sends it in Authorization: Bearer <token> headers. Express verifies the signature on protected routes." },
      { q: "What is the purpose of a .env file and why never commit it?", a: "Stores sensitive config (DB passwords, JWT secrets) outside the code. Committing exposes these publicly on GitHub — any viewer can access your database. Add .env to .gitignore and set variables in your hosting platform's dashboard." },
      { q: "What is the difference between useState and useEffect in React?", a: "useState stores data that triggers a re-render when changed. useEffect runs side effects (API calls, subscriptions) after render. In MERN, you typically fetch data in useEffect and store the result with useState." },
    ],
    intermediate: [
      { q: "Explain the complete request-response cycle in a MERN app.", a: "User action in React → Axios HTTP request → Express receives it → middleware runs (CORS, auth, body parse, validate) → route handler executes → Mongoose queries MongoDB → MongoDB returns docs → Express sends JSON → React updates state → component re-renders." },
      { q: "How do you implement protected routes in React?", a: "Create a ProtectedRoute component that checks auth state from Context or localStorage. If authenticated, render children. If not, use React Router's Navigate component to redirect to /login. Wrap protected pages in this component in route definitions." },
      { q: "What is the Mongoose populate() method?", a: "It replaces an ObjectId reference with the actual referenced document — like a JOIN in SQL. Example: Post.find().populate('author', 'name email') replaces the author ObjectId field with the full User object, but only the name and email fields." },
      { q: "How do you handle async errors in Express routes?", a: "Wrap await calls in try/catch and call next(err) to forward to the centralized 4-parameter error middleware. Or use express-async-errors package to automatically catch thrown async errors without try/catch in every handler." },
      { q: "How do you implement pagination in MERN?", a: "Backend: accept page and limit as query params. Use .skip((page-1)*limit).limit(limit) in Mongoose. Return total document count. Frontend: React tracks current page in state, passes it as Axios query param, renders pagination UI based on total pages from response." },
      { q: "What is an Axios interceptor and why is it useful in MERN?", a: "Middleware for Axios requests and responses. Request interceptor: auto-attach JWT from localStorage to every request's Authorization header. Response interceptor: catch all 401 responses and redirect to /login. Write once, applies globally." },
      { q: "How do you prevent NoSQL injection in a MERN app?", a: "Use mongo-sanitize middleware to strip $ and . from req.body and req.params before Mongoose queries. Mongoose type casting also helps — it converts user input to defined schema types, rejecting unexpected operators." },
      { q: "What is the difference between Mongoose save() and findByIdAndUpdate()?", a: "save() triggers schema validators and all middleware hooks (pre-save — useful for password hashing). findByIdAndUpdate() skips them by default — add { runValidators: true } to enable validation. Use save() when hooks must run." },
      { q: "How do you manage global state in a React MERN frontend?", a: "React Context for infrequent global state (auth user, theme). Zustand for frequently-updating state (cart, filters, notifications) — it's performant and requires no Provider boilerplate. React Query for server state — it handles caching and re-fetching automatically." },
      { q: "How do you deploy a MERN app?", a: "MongoDB Atlas (cloud database, free tier). Railway or Render (Express backend — add env vars in dashboard). Vercel (React frontend — add VITE_API_URL env var). Set CORS origin in Express to your Vercel domain. Test the deployed API with Postman before connecting React." },
    ],
    advanced: [
      { q: "How would you architect a MERN app to scale to 100,000 concurrent users?", a: "Horizontal scaling — multiple Node.js instances behind a load balancer (NGINX or AWS ALB). Redis for shared session storage and caching across instances. MongoDB Atlas with read replicas. CDN for React static assets. Rate limiting. Bull queues for background jobs. Stateless JWT auth." },
      { q: "What is the difference between CSR, SSR, and SSG? Where does MERN fit?", a: "CSR (MERN default): React renders in the browser — slower first load, faster subsequent navigation. SSR: server sends pre-rendered HTML (Next.js) — better SEO, faster first paint. SSG: HTML at build time — fastest, but static data. MERN is CSR; use Next.js for SSR/SSG benefits with the same stack." },
      { q: "How do you implement real-time features in a MERN app?", a: "Add Socket.io to Express. React connects via socket on mount in useEffect, disconnects on cleanup. Backend emits events on data changes, React listens and updates state. For multi-server horizontal scaling, use socket.io-redis adapter so events propagate across all instances." },
      { q: "What are MongoDB transactions and when are they necessary in MERN?", a: "Transactions ensure multiple operations across collections are atomic — all succeed or all roll back. Required when one business action spans multiple collections: placing an order should atomically reduce inventory AND create the order document. Use Mongoose sessions with startTransaction/commitTransaction." },
      { q: "How do you implement a password reset flow end-to-end in MERN?", a: "User requests reset → Express generates random token, hashes it, stores with 10-min expiry in User document, emails raw token via Nodemailer. User clicks link → React sends token to backend → Express hashes received token, compares with stored hash, checks expiry, if valid updates password and clears reset fields." },
      { q: "What is the N+1 query problem in Mongoose and how do you solve it?", a: "Fetching N documents then running a separate query per document for related data — N+1 total queries. Fix with populate() (single $lookup under the hood) or manually batch with $in — fetch all related IDs in one query, join in JavaScript." },
      { q: "How do you handle file uploads to cloud storage in a production MERN app?", a: "Multer with memoryStorage on Express — file goes to buffer, not disk. Stream the buffer to Cloudinary (cloudinary.uploader.upload_stream) or AWS S3 (PutObjectCommand with buffer). Store returned URL in MongoDB. Never save to server disk — containers are stateless and disks fill up." },
      { q: "What is React Query and when would you use it in a MERN app?", a: "TanStack Query manages server state — caching, background refetching, stale-while-revalidate, pagination, optimistic updates — automatically. useEffect + useState manages all this manually. For any MERN app beyond a tutorial, React Query reduces data-fetching code by 60–70% and eliminates most loading/error state bugs." },
      { q: "How would you implement role-based access control (RBAC) across the full MERN stack?", a: "Backend: User model has a role field (user/admin/seller). protect middleware attaches req.user. Role-checking middleware (adminOnly, sellerOnly) compares req.user.role. Frontend: AuthContext exposes user.role. React renders different UI or blocks navigation based on role. Never trust frontend role checks alone — backend must enforce." },
      { q: "How do you write tests for a full MERN application?", a: "Backend: Jest + Supertest — make real HTTP requests against Express with a test MongoDB database. Mock external services (email, payment). Frontend: React Testing Library + MSW (Mock Service Worker) to intercept API calls and return mock data. E2E: Playwright simulates full user journeys across both layers." },
    ],
  },

  // ── SECTION 11: COMPARISON ───────────────────────────────────────
  comparison: {
    headers: ["Feature", "MERN Stack", "MEAN Stack", "LAMP Stack"],
    rows: [
      { feature: "Languages Used", react: "JavaScript only (full stack)", vue: "JavaScript only (full stack)", angular: "PHP + SQL + HTML/CSS/JS" },
      { feature: "Frontend", react: "React", vue: "Angular", angular: "HTML/CSS/JS (any)" },
      { feature: "Backend", react: "Node.js + Express", vue: "Node.js + Express", angular: "Apache + PHP" },
      { feature: "Database", react: "MongoDB (NoSQL)", vue: "MongoDB (NoSQL)", angular: "MySQL / MariaDB (SQL)" },
      { feature: "Learning Curve", react: "Moderate (one language)", vue: "Higher (Angular is complex)", angular: "Moderate (PHP is approachable)" },
      { feature: "Performance", react: "High (non-blocking Node.js)", vue: "High (same Node.js backend)", angular: "Moderate (PHP is synchronous)" },
      { feature: "Best For", react: "Startups, SPAs, real-time apps", vue: "Enterprise teams using Angular", angular: "Traditional web apps, CMS systems" },
      { feature: "Job Market India", react: "Highest — most startup listings", vue: "High — enterprise product companies", angular: "Very High — legacy and service companies" },
    ],
  },

  // ── SECTION 12: PROS & CONS ──────────────────────────────────────
  pros: [
    "One language across all layers — JavaScript everywhere reduces context switching and enables code sharing",
    "JSON native end-to-end — MongoDB stores JSON, Express serves JSON, React consumes JSON — no translation layers",
    "Massive ecosystem — npm has packages for every problem; React and Node communities are the largest in web dev",
    "Fastest path to a deployable full-stack app — a working MERN prototype in hours, not days",
    "Highly hireable — the most requested full-stack skill in Indian product companies and startups in 2026",
    "Flexible architecture — add GraphQL, TypeScript, WebSockets, or microservices as the project grows",
    "Strong community — every MERN problem has a Stack Overflow answer and multiple tutorial resources",
  ],
  cons: [
    "MongoDB is not always the right database — complex relational data with many JOINs is better in PostgreSQL",
    "No built-in structure — four tools, not a framework. Beginners write messy, unscalable code without discipline",
    "JavaScript's flexibility is a liability at scale — TypeScript is essentially mandatory for large MERN codebases",
    "CPU-bound tasks hurt Node.js — heavy computation blocks the event loop; needs Worker Threads or separate services",
    "MongoDB's schema flexibility enables bad data modeling — without design discipline, data becomes inconsistent",
    "Four layers to debug — a bug could be in React, Express, Mongoose, or MongoDB; isolation requires experience",
    "State management complexity grows fast — React + async API data requires deliberate architectural decisions",
  ],

  // ── SECTION 13: FUTURE SCOPE ─────────────────────────────────────
  futureScope: [
    "MERN + TypeScript is the standard for 2026–2028. Shared TypeScript interfaces between React (request types) and Express (handler types) catch integration bugs at compile time. Companies increasingly require TypeScript across the full stack — learn it alongside MERN.",
    "Next.js is the natural MERN evolution. Server Components, App Router, and Server Actions collapse the React + Express separation — you write full-stack code in Next.js files. MERN knowledge transfers directly — same technologies, restructured. The MERN developer who learns Next.js has the most complete profile in 2026.",
    "React Query and tRPC are changing how MERN frontends fetch data. tRPC provides end-to-end type-safe communication between Express and React without REST boilerplate. Early adoption of these patterns is a differentiator in senior interviews.",
    "The demand for MERN developers in Indian product companies is accelerating with the growth of SaaS, fintech, and ed-tech. Zerodha, Razorpay, and Meesho-style companies are actively hiring MERN developers — the stack aligns with how they build internal tools and customer-facing products.",
    "AI-powered MERN apps are the next hiring wave. Express backends calling OpenAI or Claude APIs, React frontends streaming AI responses, MongoDB storing conversation history — MERN is the default architecture for AI application wrappers. Developers who combine MERN + AI API integration are the most hireable profile in 2026.",
  ],

  // ── SECTION 14: ACTION PLAN ──────────────────────────────────────
  actionPlan: [
    { week: "Week 1–2", title: "Sharpen JavaScript Fundamentals", desc: "Before touching MERN, be solid in async/await, Promises, destructuring, array methods (map, filter, reduce), and ES6 modules. Build one vanilla JS project using the browser's fetch API — a weather app or GitHub profile finder. If JS feels unclear, stop and fix it first." },
    { week: "Week 3–5", title: "Learn React and Express Independently", desc: "Build two small React projects (to-do, quiz app). Build one Express REST API with MongoDB (notes app with CRUD). Don't combine yet. Understand each layer individually — debug problems without the other layer confusing the picture." },
    { week: "Week 6–8", title: "Build Your First Complete MERN App", desc: "Build the to-do or notes app end-to-end — React frontend calling an Express + MongoDB backend. Focus on the data flow: form submit → POST → MongoDB insert → GET → React renders. Get this working and deployed. This is the foundational MERN pattern." },
    { week: "Week 9–12", title: "Add Authentication — The Critical Skill", desc: "Implement the full JWT auth flow — register, login, AuthContext in React, ProtectedRoute, protect middleware in Express. Add this to your existing MERN app. This pattern appears in 90% of MERN interview take-home tasks — get it solid." },
    { week: "Week 13–17", title: "Build a Real Portfolio Project", desc: "Build the Blog Platform or Task Manager from the intermediate projects list. Full CRUD, JWT auth, file upload, pagination, and search. Deploy the backend to Railway and frontend to Vercel. Write a clear README with the live link and tech stack. This is your primary portfolio piece." },
    { week: "Week 18+", title: "The Job Push", desc: "Apply to 10 MERN or full-stack roles per week. Study MERN interview questions — especially the request-response cycle, JWT auth, CORS, Mongoose populate(), error handling, and deployment. Do 2–3 take-home projects from actual job applications. The combination of deployed code + interview prep closes most MERN job searches within 6–10 weeks of consistent applications." },
  ],
};