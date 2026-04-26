import type { TechContent } from './types';

export const expressjsContent: TechContent = {
  techId: 'expressjs',
  readTime: '25–30 min',
  difficulty: 'Beginner to Advanced',
  lastUpdated: '2026',

  // ── OPENING HOOK ─────────────────────────────────────────────────
  openingHook:
    "Here's the truth nobody tells freshers: most backend job descriptions that say 'Node.js' actually mean 'Node.js + Express.js'. Express is the layer where real backend work happens — routing, middleware, API design, authentication, error handling. If Node.js is the engine, Express is the car. You can build a REST API in Express in under 20 minutes. You can land a ₹4–9 LPA backend role with Express as your core skill. And since it's been the dominant Node.js framework for over a decade, the job market is deep, the documentation is mature, and the patterns you learn here transfer directly to NestJS, Fastify, and every other Node framework. This Express.js tutorial for beginners starts from zero and gets you job-ready.",

  // ── SECTION 1: INTRODUCTION ──────────────────────────────────────
  introText: [
    "Express.js is a minimal, fast, and unopinionated web framework for Node.js. It was created by TJ Holowaychuk in 2010 and is maintained under the OpenJS Foundation. In plain terms: Express gives you a clean, structured way to build HTTP servers, REST APIs, and web applications on top of Node.js without writing hundreds of lines of low-level code.",
    "Without Express, building even a simple API in raw Node.js requires manually parsing URLs, reading request bodies, setting response headers, and handling different HTTP methods in a chain of if/else blocks. It's doable — but painful. Express wraps all of that and gives you clean, readable route definitions, a powerful middleware pipeline, and utilities that make the boring parts of backend development disappear.",
    "The problem Express solves is structure. Node.js gives you raw power but no opinions. Express gives you just enough structure — routes, middleware, error handling — without locking you into a rigid framework. That balance is why it's survived over a decade of JavaScript evolution and remains the most downloaded Node.js framework in 2026.",
  ],

  realWorldUsages: [
    "Uber — used Express to build their API infrastructure before migrating some services to custom frameworks",
    "IBM — uses Express.js across multiple internal tools and cloud APIs",
    "Accenture and TCS — Express is the default backend framework in JavaScript project stacks",
    "Thousands of Indian startups — Razorpay, Groww, CRED-style fintech apps use Express for their internal microservices",
    "Open-source backends — Ghost CMS, KeystoneJS, and Strapi all build on Express or were originally Express-based",
    "E-learning platforms — course APIs, user auth, video metadata APIs — Express powers most Node.js e-learning backends",
  ],

  // ── SECTION 2: WHY LEARN ─────────────────────────────────────────
  whyLearn: {
    demand:
      "Search 'Node.js developer' on LinkedIn India — 70% of those job descriptions mention Express.js explicitly. It's the default backend framework taught in every full-stack bootcamp, expected in every backend Node.js interview, and used in virtually every startup that runs a JavaScript backend. Learning Express.js step by step is the most efficient path to backend job-readiness for a JavaScript developer in 2026.",
    jobRoles: [
      { role: "Backend Developer", desc: "Build and maintain REST APIs using Express + MongoDB or PostgreSQL. Core skill in every JD." },
      { role: "Full-Stack Developer", desc: "React or Next.js on the front, Express on the back. The most common profile in Indian product startups." },
      { role: "API Developer", desc: "Design RESTful endpoints, handle auth, versioning, rate limiting — all Express territory." },
      { role: "Node.js Developer", desc: "Express is assumed. Any Node.js role expects Express knowledge as a baseline." },
      { role: "Software Engineer (Backend)", desc: "Mid-size product companies — B2B SaaS, fintech, healthtech — rely heavily on Express backends." },
    ],
    whyCompanies: [
      { reason: "Minimal and fast", detail: "Express adds almost no overhead. Your server starts in milliseconds and handles high concurrency efficiently." },
      { reason: "Massive ecosystem", detail: "Thousands of Express-compatible middleware packages on npm. Almost any feature has a ready-made solution." },
      { reason: "Easy onboarding", detail: "New developers ramp up in days. Express's conventions are intuitive — less time training, more time shipping." },
      { reason: "Battle-tested", detail: "Express has been in production at scale since 2010. Edge cases are documented, bugs are fixed, patterns are proven." },
    ],
    salaryRange: "₹3.5 LPA – ₹8 LPA (Freshers) | ₹8 LPA – ₹22 LPA (Mid-Level with system design knowledge)",
    careerNote:
      "Express is the gateway to the entire Node.js backend ecosystem. Once you know Express deeply, you can move to NestJS (Express-based, enterprise-grade), Fastify (performance-focused), or full-stack with Next.js API routes. The patterns are transferable — invest in Express and you invest in your entire backend career.",
  },

  // ── SECTION 3: HOW IT WORKS ──────────────────────────────────────
  howItWorks: {
    intro:
      "Think of an airport security checkpoint. Every passenger (HTTP request) entering the airport goes through a series of checkpoints — ticket scan, ID check, baggage X-ray — before reaching their gate (route handler). Each checkpoint can stop the passenger (send a response) or wave them through (call next()). That pipeline of checkpoints is exactly how Express middleware and routing works.",
    vdomSteps: [
      { num: "1", title: "Request Received", text: "A client sends an HTTP request (GET, POST, PUT, DELETE) to your Express server. Node's http module receives it and hands it to Express." },
      { num: "2", title: "Middleware Pipeline", text: "The request travels through your registered middleware functions in order — logging, JSON parsing, CORS headers, auth checks. Each middleware calls next() to pass control forward." },
      { num: "3", title: "Route Matching", text: "Express compares the request method and URL against your registered routes. The first match wins — its handler function executes." },
      { num: "4", title: "Handler Executes", text: "Your route handler runs business logic — queries the database, processes data, calls external APIs — then sends a response with res.json(), res.send(), or res.redirect()." },
      { num: "5", title: "Error Middleware", text: "If any middleware or handler calls next(err), Express skips to the 4-parameter error middleware which formats and sends the error response." },
    ],
    componentCode: `const express = require('express');
const app = express();

// Step 1: Global middleware runs first for every request
app.use(express.json());           // Parse JSON bodies
app.use(require('morgan')('dev')); // Log every request

// Step 2: Route-specific middleware (auth check)
const protect = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next(); // Pass through to route handler
};

// Step 3: Route handler — runs only if middleware passed
app.get('/api/profile', protect, async (req, res) => {
  const user = await User.findById(req.userId);
  res.json({ data: user }); // Step 4: Send response
});

// Step 5: Error handler — catches anything passed to next(err)
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ error: err.message });
});

app.listen(3000);`,
    renderCycle: [
      "Request arrives → Express receives it from Node's http server",
      "Global middleware runs in registration order (json parser, cors, logger)",
      "Route-level middleware runs (auth, validation) if attached to the route",
      "Route handler executes — business logic, DB queries, response sent",
      "If next(err) called anywhere → error middleware handles and responds",
    ],
    closingNote:
      "Once you internalize this pipeline — request → middleware → route → response (or error handler) — every Express concept clicks. Debugging becomes logical: if something's wrong, walk the pipeline. The issue is always in one of these steps.",
  },

  // ── SECTION 4: CORE CONCEPTS ─────────────────────────────────────
  coreConcepts: [
    {
      id: "routing",
      number: "4.1",
      title: "Routing — The Foundation",
      icon: "🗺️",
      color: "blue",
      intro:
        "Routing maps an HTTP method + URL pattern to a function that handles the request. It's the backbone of every Express API. Express supports exact paths, dynamic parameters, query strings, and wildcard patterns — giving you full control over your URL structure.",
      code: `const express = require('express');
const app = express();
app.use(express.json());

// Basic routes — HTTP method + path + handler
app.get('/api/products', (req, res) => {
  res.json({ products: [] });
});

app.post('/api/products', (req, res) => {
  const { name, price } = req.body;
  // Create product logic
  res.status(201).json({ message: 'Product created', name, price });
});

// Dynamic route parameter — :id is a placeholder
app.get('/api/products/:id', (req, res) => {
  const { id } = req.params; // Access as req.params.id
  res.json({ productId: id });
});

// Query string — /api/products/search?category=shoes&limit=10
app.get('/api/products/search', (req, res) => {
  const { category, limit = 10 } = req.query;
  res.json({ category, limit });
});

// Update and Delete
app.put('/api/products/:id', (req, res) => { /* update logic */ });
app.delete('/api/products/:id', (req, res) => { /* delete logic */ });

app.listen(3000);`,
      usage:
        "Every API you build starts here — mapping business operations (create user, get products, update order) to HTTP routes. Good route design follows REST conventions: nouns not verbs in URLs, correct HTTP methods, consistent naming.",
      mistake:
        "Defining a static route after a dynamic one with the same path prefix. app.get('/products/featured') placed after app.get('/products/:id') will never match — Express sees 'featured' as the :id value. Always put static routes before dynamic ones.",
    },
    {
      id: "express-router",
      number: "4.2",
      title: "Express Router — Organize at Scale",
      icon: "📁",
      color: "primary",
      intro:
        "As your API grows, putting every route in one file becomes unmanageable. Express Router lets you split routes into separate files by resource (users, products, orders), then mount them on the main app. This is how every production Express codebase is organized.",
      code: `// routes/users.js — User routes in isolation
const express = require('express');
const router = express.Router();
const { protect, adminOnly } = require('../middleware/auth');

router.get('/', protect, adminOnly, getAllUsers);
router.get('/me', protect, getMyProfile);
router.put('/me', protect, updateProfile);
router.delete('/:id', protect, adminOnly, deleteUser);

module.exports = router;

// routes/products.js
const router = express.Router();
router.get('/', getProducts);
router.post('/', protect, createProduct);
router.get('/:id', getProduct);
router.put('/:id', protect, updateProduct);
router.delete('/:id', protect, deleteProduct);
module.exports = router;

// app.js — Mount routers
const app = express();
app.use(express.json());

// Each router handles its own prefix
app.use('/api/users', require('./routes/users'));
app.use('/api/products', require('./routes/products'));
app.use('/api/orders', require('./routes/orders'));`,
      usage:
        "Every real production Express project uses this pattern. A single app.js file handles server setup and mounts routers. Each resource (users, products, orders) has its own router file. Controllers can be further separated into a /controllers directory. Clean, scalable, team-friendly.",
      mistake:
        "Putting all routes in app.js. It works for tutorials, but for anything beyond 5 routes it becomes unmaintainable. Apply the Router pattern from day one — it's a habit that directly signals seniority in code reviews.",
    },
    {
      id: "middleware",
      number: "4.3",
      title: "Middleware — The Pipeline Engine",
      icon: "🔗",
      color: "emerald",
      intro:
        "Middleware is any function with the signature (req, res, next). It runs between the incoming request and the final route handler. Express executes middleware in the order you register it. This is where cross-cutting concerns live — logging, auth, CORS, request parsing, rate limiting.",
      code: `// 1. Third-party middleware (installed via npm)
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');

app.use(morgan('dev'));        // Request logging
app.use(cors({ origin: process.env.CLIENT_URL })); // CORS
app.use(helmet());            // Security headers
app.use(express.json());      // JSON body parsing

// 2. Custom application-level middleware
const requestTimer = (req, res, next) => {
  req.startTime = Date.now();
  res.on('finish', () => {
    console.log(\`\${req.method} \${req.url} — \${Date.now() - req.startTime}ms\`);
  });
  next();
};
app.use(requestTimer);

// 3. Route-level middleware (only for specific routes)
const validateProduct = (req, res, next) => {
  const { name, price } = req.body;
  if (!name || !price) {
    return res.status(400).json({ error: 'Name and price are required' });
  }
  if (typeof price !== 'number' || price <= 0) {
    return res.status(400).json({ error: 'Price must be a positive number' });
  }
  next();
};

app.post('/api/products', protect, validateProduct, createProduct);

// 4. Error-handling middleware (always 4 parameters)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.statusCode || 500).json({
    success: false,
    error: err.message || 'Internal Server Error',
  });
});`,
      usage:
        "Middleware is what makes Express powerful. In production, a request typically passes through 5–8 middleware functions before hitting the route handler: CORS check, security headers, body parser, auth verification, rate limit check, request logger, input validator — then the actual business logic.",
      mistake:
        "Not calling next() in a middleware function (and not sending a response either). The request hangs indefinitely. The client waits, then times out. No error is thrown. This is one of the hardest bugs to spot — always ensure your middleware either calls next() or sends a response.",
    },
    {
      id: "auth-jwt",
      number: "4.4",
      title: "Authentication with JWT",
      icon: "🔐",
      color: "orange",
      intro:
        "JWT (JSON Web Token) authentication is the industry standard for securing Express REST APIs. The server creates a signed token on login, the client stores it, and sends it with every subsequent request. The server verifies the signature — no database lookup needed for every request.",
      code: `const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// REGISTER — hash password, save user
app.post('/api/auth/register', async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const hashed = await bcrypt.hash(password, 12);
    const user = await User.create({ name, email, password: hashed });
    
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );
    res.status(201).json({ token, user: { id: user._id, name, email } });
  } catch (err) { next(err); }
});

// LOGIN — verify password, issue token
app.post('/api/auth/login', async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select('+password');
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.json({ token });
  } catch (err) { next(err); }
});

// PROTECT MIDDLEWARE — verify token on protected routes
const protect = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Not authenticated' });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select('-password');
    next();
  } catch {
    res.status(401).json({ error: 'Token invalid or expired' });
  }
};

// ROLE-BASED ACCESS
const adminOnly = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Admin access required' });
  }
  next();
};

app.get('/api/admin/users', protect, adminOnly, getAllUsers);`,
      usage:
        "Every Express API with user accounts needs auth. Register → Login → Protected routes is the exact pattern in every production app: e-commerce user accounts, dashboard login, mobile app authentication. Nail this pattern and you've solved 60% of backend interview requirements.",
      mistake:
        "Storing the JWT secret as a hardcoded string in your code. Rotate it immediately if exposed. Use a long, random string in .env. Also — never store sensitive data (passwords, card numbers) in the JWT payload. It's base64-encoded, not encrypted — anyone can decode it.",
    },
    {
      id: "validation",
      number: "4.5",
      title: "Input Validation — Never Trust the Client",
      icon: "✅",
      color: "yellow",
      intro:
        "Input validation is non-negotiable in production APIs. Without it, malformed data crashes your server, corrupt data enters your database, and attackers can exploit injection vulnerabilities. Express doesn't include validation — you use express-validator or Joi, and both are interview-relevant.",
      code: `const { body, validationResult } = require('express-validator');

// Validation rules defined as an array of middleware
const registerRules = [
  body('name')
    .trim()
    .notEmpty().withMessage('Name is required')
    .isLength({ min: 2, max: 50 }).withMessage('Name must be 2–50 characters'),
  
  body('email')
    .isEmail().withMessage('Provide a valid email')
    .normalizeEmail(),
  
  body('password')
    .isLength({ min: 8 }).withMessage('Password must be at least 8 characters')
    .matches(/[A-Z]/).withMessage('Password must contain an uppercase letter')
    .matches(/[0-9]/).withMessage('Password must contain a number'),
];

// Middleware to check validation results
const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array().map(e => ({ field: e.path, message: e.msg })),
    });
  }
  next();
};

// Apply to route — rules run, then validate checks, then handler runs
app.post('/api/auth/register', registerRules, validate, registerUser);

// Joi alternative (popular in NestJS-style codebases)
const Joi = require('joi');
const productSchema = Joi.object({
  name: Joi.string().min(2).max(100).required(),
  price: Joi.number().positive().required(),
  category: Joi.string().valid('electronics', 'clothing', 'food').required(),
});

const validateWithJoi = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body, { abortEarly: false });
  if (error) return res.status(400).json({ errors: error.details });
  next();
};`,
      usage:
        "Validation goes on every POST, PUT, and PATCH route. User registration, product creation, order placement, profile updates — before touching the database, validate every field. This prevents 400-level errors from reaching your DB and keeps your data clean.",
      mistake:
        "Validating only on the frontend and skipping backend validation. The frontend can be bypassed with Postman, curl, or a simple script. Backend validation is mandatory. Frontend validation is a UX nicety — backend validation is a security requirement.",
    },
    {
      id: "error-handling",
      number: "4.6",
      title: "Error Handling — Centralized and Production-Safe",
      icon: "🛡️",
      color: "red",
      intro:
        "Production Express apps have two types of errors: operational (user sent bad data, resource not found) and programming (bugs you didn't anticipate). Handling both gracefully — without crashing the server or leaking internal details — is a mark of a senior developer and a frequent interview topic.",
      code: `// Custom error class — gives errors a status code
class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true; // Flag — we caused this intentionally
    Error.captureStackTrace(this, this.constructor);
  }
}

// Helper to throw common errors cleanly
const notFound = (resource) => new AppError(\`\${resource} not found\`, 404);
const badRequest = (msg) => new AppError(msg, 400);

// Route handler — throws AppError on known failure
app.get('/api/orders/:id', protect, async (req, res, next) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return next(notFound('Order'));
    if (order.userId.toString() !== req.user.id) {
      return next(new AppError('Not authorized to view this order', 403));
    }
    res.json({ data: order });
  } catch (err) {
    next(err); // Unexpected errors also forwarded
  }
});

// Centralized error handler — MUST be last app.use()
app.use((err, req, res, next) => {
  // Handle Mongoose validation errors
  if (err.name === 'ValidationError') {
    const messages = Object.values(err.errors).map(e => e.message);
    return res.status(400).json({ success: false, errors: messages });
  }
  // Handle MongoDB duplicate key
  if (err.code === 11000) {
    const field = Object.keys(err.keyValue)[0];
    return res.status(400).json({ error: \`\${field} already exists\` });
  }
  // Handle JWT errors
  if (err.name === 'JsonWebTokenError') {
    return res.status(401).json({ error: 'Invalid token' });
  }

  // Generic handler
  const status = err.statusCode || 500;
  const message = err.isOperational ? err.message : 'Something went wrong';
  
  if (process.env.NODE_ENV === 'development') {
    res.status(status).json({ error: message, stack: err.stack });
  } else {
    res.status(status).json({ error: message }); // Never expose stack in production
  }
});

// Handle unmatched routes — put after all routes
app.all('*', (req, res, next) => {
  next(new AppError(\`Route \${req.originalUrl} not found\`, 404));
});`,
      usage:
        "A centralized error handler is the difference between an API that crashes on unexpected input and one that handles failures gracefully. In production, this single middleware prevents server crashes, formats errors consistently for the frontend team, and hides internal details from attackers.",
      mistake:
        "Placing the error-handling middleware before your routes. It must be the last app.use() call — Express only routes to the 4-parameter middleware when next(err) is called, but it still respects registration order. Misplaced error handlers silently do nothing.",
    },
    {
      id: "file-uploads",
      number: "4.7",
      title: "File Uploads with Multer",
      icon: "📎",
      color: "purple",
      intro:
        "File uploads are a real-world requirement in almost every app — profile pictures, product images, document submissions, resume uploads. Express doesn't handle multipart/form-data natively. Multer is the standard middleware for this — used in virtually every Express project that accepts files.",
      code: `const multer = require('multer');
const path = require('path');
const sharp = require('sharp'); // Image processing

// Storage config — disk storage with custom filename
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Folder must exist
  },
  filename: (req, file, cb) => {
    const uniqueName = \`\${req.user.id}-\${Date.now()}\${path.extname(file.originalname)}\`;
    cb(null, uniqueName);
  },
});

// File filter — only allow images
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new AppError('Only image files are allowed', 400), false);
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB max
});

// Single file upload — field name must match client's FormData key
app.post('/api/users/avatar', protect, upload.single('avatar'), async (req, res, next) => {
  try {
    if (!req.file) return next(new AppError('Please upload a file', 400));
    
    // Resize image before saving (good practice)
    const resizedPath = \`uploads/resized-\${req.file.filename}\`;
    await sharp(req.file.path)
      .resize(200, 200)
      .toFormat('jpeg')
      .jpeg({ quality: 80 })
      .toFile(resizedPath);
    
    // Save path to user record
    await User.findByIdAndUpdate(req.user.id, { avatar: resizedPath });
    res.json({ success: true, avatar: resizedPath });
  } catch (err) { next(err); }
});

// Multiple files
app.post('/api/products/images', protect, upload.array('images', 5), (req, res) => {
  const paths = req.files.map(f => f.path);
  res.json({ uploaded: paths });
});`,
      usage:
        "Profile picture uploads, product image galleries, document verification (KYC in fintech), resume submissions in job portals — all use Multer. In production, you combine Multer with Cloudinary or AWS S3 instead of saving to disk — Multer handles the upload, you stream to cloud storage.",
      mistake:
        "Saving files directly to your server's disk in production. The disk fills up, files get lost on redeployment (containers are stateless), and you can't scale horizontally. Always pipe to cloud storage (Cloudinary, S3) in production. Use memoryStorage with Multer and stream the buffer.",
    },
  ],

  // ── SECTION 5: PREREQUISITES ─────────────────────────────────────
  prerequisites: [
    { item: "JavaScript (ES6+)", done: false, note: "Mandatory — Express code uses modern JS constantly", detail: "Arrow functions, destructuring, async/await, Promises, template literals, modules. Non-negotiable." },
    { item: "Node.js Basics", done: false, note: "Understand Node before Express", detail: "Event loop, require/modules, npm, fs module, http module basics. Build one raw Node server before touching Express." },
    { item: "HTTP Fundamentals", done: false, note: "Know GET, POST, PUT, DELETE and status codes", detail: "What a request/response looks like. REST principles. What 200, 201, 400, 401, 403, 404, 500 mean." },
    { item: "Command Line & npm", done: true, note: "You'll install packages and run scripts constantly", detail: "npm install, npm run dev, navigating directories. Basic terminal comfort." },
    { item: "Postman or Thunder Client", done: true, note: "Test your APIs without a frontend", detail: "Install Postman or the Thunder Client VS Code extension. You'll test every route you build." },
    { item: "Git Basics", done: true, note: "Version control before your first project", detail: "git init, add, commit, push. Required for any dev job — start this habit now." },
  ],

  // ── SECTION 6: ROADMAP ───────────────────────────────────────────
  roadmap: [
    {
      phase: "Beginner",
      label: "01",
      duration: "Weeks 1–3",
      color: "emerald",
      topics: [
        "Setting up Express — npm init, install express, create app.js",
        "Basic routing — GET, POST, PUT, DELETE",
        "Request object — req.params, req.query, req.body",
        "Response object — res.json(), res.send(), res.status()",
        "express.json() and express.urlencoded() middleware",
        "Express Router — split routes into files",
        "Serving static files with express.static()",
        "Environment variables with dotenv",
      ],
      buildProjects: [
        "Hello World API — basic GET/POST routes, test with Postman",
        "In-memory Notes API — full CRUD with array storage (no DB)",
        "Simple calculator API — POST body with two numbers, return result",
      ],
    },
    {
      phase: "Intermediate",
      label: "02",
      duration: "Weeks 4–9",
      color: "primary",
      topics: [
        "Custom middleware — logging, auth, validation",
        "MongoDB + Mongoose integration",
        "JWT authentication — register, login, protect routes",
        "Password hashing with bcrypt",
        "Input validation with express-validator",
        "Centralized error handling with custom AppError class",
        "File uploads with Multer",
        "Pagination, filtering, sorting in queries",
        "CORS configuration with cors package",
      ],
      buildProjects: [
        "Full Auth API — register, login, protected profile route, role-based admin route",
        "Blog REST API — users, posts, comments with full auth and relationships",
        "Product Catalog API — CRUD, image upload, pagination, search",
        "Task Manager API — teams, tasks, assignment, status updates with auth",
      ],
    },
    {
      phase: "Advanced",
      label: "03",
      duration: "Weeks 10–20+",
      color: "purple",
      topics: [
        "Rate limiting with express-rate-limit",
        "Security hardening — helmet, hpp, xss-clean, mongo-sanitize",
        "Caching with Redis (cache GET routes, invalidate on mutation)",
        "Email sending with Nodemailer (verification, password reset)",
        "Payment integration — Razorpay or Stripe webhook handling",
        "API versioning (/api/v1/, /api/v2/)",
        "Testing Express APIs with Jest and Supertest",
        "Docker — containerize your Express app",
        "Deployment — Railway, Render, AWS EC2 with PM2",
      ],
      buildProjects: [
        "E-Commerce Backend — products, cart, orders, Razorpay payments, email receipts",
        "Multi-tenant SaaS API — organizations, members, subscriptions, billing",
        "Real-time notification system — Express + Socket.io + Redis pub/sub",
      ],
    },
  ],

  // ── SECTION 7: USE CASES ─────────────────────────────────────────
  useCases: [
    { num: "01", title: "REST API Backend for Mobile Apps", body: "Every mobile app needs a backend API. Express is the fastest way to build one in JavaScript. Food delivery apps, fitness trackers, social apps — the pattern is always the same: Express routes, MongoDB storage, JWT auth." },
    { num: "02", title: "Authentication Servers", body: "Login systems for SaaS products — user registration, JWT issuance, password reset via email, OAuth callbacks from Google/GitHub. Express handles all of this with clean middleware chains." },
    { num: "03", title: "Admin Dashboards Backend", body: "The API layer behind admin panels — user management, content moderation, analytics data, role-based access control. Express's Router makes it easy to segment admin routes with a single adminOnly middleware." },
    { num: "04", title: "Webhook Receivers", body: "When Stripe, Razorpay, or GitHub sends a webhook, it's an HTTP POST to your server. Express handles webhook endpoints cleanly — verify the signature, parse the payload, trigger your logic." },
    { num: "05", title: "Microservice APIs", body: "In a microservices architecture, each service is a small Express app with a focused responsibility — user service, payment service, notification service. Express's minimal footprint makes it ideal for containerized microservices." },
    { num: "06", title: "BFF (Backend for Frontend) Layer", body: "Express sits between the React frontend and multiple backend services — aggregating data, shaping responses, and handling auth — so the frontend makes one clean API call instead of ten." },
    { num: "07", title: "File Processing Services", body: "Accept uploaded documents, resize images, convert formats, store on S3, return download URLs. Express + Multer + Sharp + AWS SDK is a production-grade file processing pipeline used in e-KYC and document management apps." },
  ],

  // ── SECTION 8: PROJECTS ──────────────────────────────────────────
  projects: {
    beginner: [
      { name: "Notes REST API (In-Memory)", desc: "Full CRUD API for notes stored in a JavaScript array. GET all, GET one, POST, PUT, DELETE.", teaches: "Express setup, all HTTP methods, req.params, req.body, res.json(), Postman testing" },
      { name: "Random Joke Generator API", desc: "Returns a random joke. Supports filtering by category via query string. Add/remove jokes.", teaches: "Express routing, req.query, arrays, clean JSON response design" },
      { name: "Calculator API", desc: "POST two numbers and an operation. Returns result. Handles division by zero and invalid inputs.", teaches: "Request body parsing, input validation, error responses, HTTP status codes" },
      { name: "Student Grade API", desc: "Store students and grades in memory. Calculate average, find highest/lowest scorer.", teaches: "CRUD operations, data transformation, query parameters for filtering" },
    ],
    intermediate: [
      { name: "JWT Authentication System", desc: "Register with hashed password, login to get JWT, access protected profile route, admin-only route.", teaches: "bcrypt, jsonwebtoken, protect middleware, role-based access, MongoDB, production auth flow" },
      { name: "Blog Platform API", desc: "Users write posts, others comment and like. Auth required for mutations. Pagination on list endpoints.", teaches: "Mongoose references, populate(), pagination, auth integration, RESTful design" },
      { name: "Product Catalog API", desc: "CRUD for products, image upload for each product, search by name/category, filter by price range.", teaches: "Multer, Cloudinary integration, MongoDB query operators, express-validator" },
      { name: "Task Manager API", desc: "Teams create workspaces, assign tasks with deadlines, update status. Admin vs member roles.", teaches: "Complex data modeling, RBAC, nested routes, real product thinking" },
    ],
    advanced: [
      { name: "E-Commerce Backend with Payments", desc: "Products, cart, checkout flow, Razorpay integration, order tracking, email receipts via Nodemailer.", teaches: "Payment gateway webhooks, transaction handling, Nodemailer, full order lifecycle" },
      { name: "Multi-Tenant SaaS API", desc: "Organizations, members, plans, usage limits. Each org's data isolated. Subscription status gating features.", teaches: "Multi-tenancy patterns, middleware for org context, subscription logic, API design at scale" },
      { name: "Tested and Deployed REST API", desc: "Take any of your APIs, write full Jest + Supertest test suite, containerize with Docker, deploy to Railway with CI/CD.", teaches: "Unit and integration testing, Docker, deployment pipelines, PM2 process management" },
    ],
  },

  // ── SECTION 9: MISTAKES ──────────────────────────────────────────
  mistakes: [
    {
      title: "Not Using express.json() Middleware",
      tip: "Add app.use(express.json()) before your routes. Without it, req.body is always undefined when clients send JSON.",
      wrong: "app.post('/users', (req, res) => { console.log(req.body); }); // undefined",
      correct: "app.use(express.json()); app.post('/users', (req, res) => { console.log(req.body); }); // works",
    },
    {
      title: "Putting Routes Before Middleware",
      tip: "Express executes middleware in registration order. Middleware must be registered before the routes that need it.",
      wrong: "app.get('/api/data', handler); app.use(express.json()); // Too late — json parser missed",
      correct: "app.use(express.json()); app.get('/api/data', handler); // Correct order",
    },
    {
      title: "Not Calling next() in Middleware",
      explanation: "If your middleware neither calls next() nor sends a response, the request hangs forever. The client waits, then times out with no error logged.",
      tip: "Every middleware must either call next(), next(err), or send a response. No exceptions.",
    },
    {
      title: "Defining Dynamic Routes Before Static Ones",
      tip: "app.get('/products/featured') placed after app.get('/products/:id') will match :id = 'featured' and never reach the featured handler. Always put specific static routes above dynamic ones.",
      wrong: "app.get('/users/:id', handler); app.get('/users/me', handler); // 'me' treated as :id",
      correct: "app.get('/users/me', handler); app.get('/users/:id', handler); // Correct order",
    },
    {
      title: "Missing Error Handler or Wrong Signature",
      tip: "Error middleware MUST have 4 parameters: (err, req, res, next). Express identifies it by parameter count. 3 params = regular middleware. Get it wrong and errors are silently swallowed.",
      wrong: "app.use((req, res, next) => { res.json({ error: err.message }); }); // err is undefined",
      correct: "app.use((err, req, res, next) => { res.status(500).json({ error: err.message }); });",
    },
    {
      title: "Not Handling Async Errors Properly",
      explanation: "Express 4 does not catch errors thrown in async route handlers. An unhandled rejected Promise crashes the process or silently hangs the request.",
      tip: "Wrap every async handler in try/catch and call next(err). Or use the express-async-errors package to automatically handle this.",
      wrong: "app.get('/users', async (req, res) => { const u = await User.find(); res.json(u); });",
      correct: "app.get('/users', async (req, res, next) => { try { const u = await User.find(); res.json(u); } catch(e) { next(e); } });",
    },
    {
      title: "Sending Responses After Headers Already Sent",
      explanation: "Calling res.json() or res.send() twice in the same handler throws 'Cannot set headers after they are sent'. Usually caused by missing return before an early response.",
      tip: "Always return when sending an early response: return res.status(400).json({error}). The return prevents execution continuing to the next res.send().",
      wrong: "if (!user) res.status(404).json({ error: 'Not found' }); res.json({ data: user }); // Runs both",
      correct: "if (!user) return res.status(404).json({ error: 'Not found' }); res.json({ data: user });",
    },
    {
      title: "No Input Validation on POST/PUT Routes",
      explanation: "Directly using req.body values in DB operations without validation allows injection attacks, crashes from unexpected types, and corrupt data.",
      tip: "Use express-validator or Joi on every mutating route. Validate types, lengths, formats, and required fields before touching the database.",
    },
    {
      title: "Returning Stack Traces in Production",
      tip: "Stack traces expose your file structure, dependencies, and internal logic to attackers. Check process.env.NODE_ENV in your error handler — send stack only in development.",
      wrong: "res.status(500).json({ error: err.message, stack: err.stack }); // Never in production",
      correct: "const isDev = process.env.NODE_ENV === 'development'; res.status(500).json({ error: err.message, ...(isDev && { stack: err.stack }) });",
    },
    {
      title: "No 404 Handler for Unmatched Routes",
      explanation: "If a client hits a route that doesn't exist, Express by default returns an HTML 'Cannot GET /xyz' response — useless for an API that should return JSON.",
      tip: "Add app.all('*', handler) after all routes to catch unmatched requests and return a clean JSON 404 response.",
      wrong: "// Missing — client gets HTML error page for unknown routes",
      correct: "app.all('*', (req, res) => res.status(404).json({ error: `Route ${req.originalUrl} not found` }));",
    },
    {
      title: "Hardcoding PORT and Secrets",
      tip: "PORT, database URLs, JWT secrets — all into .env. Use process.env everywhere. Add .env to .gitignore before your first git add. Exposed secrets require immediate rotation.",
      wrong: "app.listen(3000); mongoose.connect('mongodb+srv://admin:pass@cluster.net/db');",
      correct: "app.listen(process.env.PORT || 3000); mongoose.connect(process.env.MONGO_URI);",
    },
    {
      title: "All Routes in One app.js File",
      explanation: "A 600-line app.js with every route, every middleware, and every handler is unmaintainable. Interviewers and senior devs immediately judge this as a sign of inexperience.",
      tip: "Use Express Router from day one. Separate routes by resource. Separate controllers from routes. controllers/userController.js, routes/userRoutes.js, app.js — this is the expected structure.",
    },
  ],

  // ── SECTION 10: INTERVIEW QUESTIONS ─────────────────────────────
  interviewQuestions: {
    beginner: [
      { q: "What is Express.js and why use it over raw Node.js http module?", a: "Express is a minimal web framework for Node.js that adds routing, middleware, and utilities. The raw http module requires manual URL parsing, method checking, and body reading. Express wraps all of that — a route that takes 30 lines raw takes 3 in Express." },
      { q: "What is middleware in Express?", a: "A function with (req, res, next) signature that executes during the request-response cycle. Middleware can modify req/res, end the request, or call next() to pass control to the next middleware." },
      { q: "What is the difference between app.use() and app.get()?", a: "app.use() matches any HTTP method and any path starting with the specified prefix — used for middleware. app.get() only matches GET requests to the exact path — used for route handlers." },
      { q: "What are req.params, req.query, and req.body?", a: "req.params: named route parameters (/users/:id). req.query: URL query string values (?page=2&limit=10). req.body: data in the request body (requires express.json() middleware to parse)." },
      { q: "What does express.json() do?", a: "It's built-in middleware that parses incoming requests with JSON Content-Type headers and makes the parsed data available on req.body. Without it, req.body is undefined." },
      { q: "What HTTP status codes should a REST API return for these scenarios: success, created, bad input, unauthorized, not found, server error?", a: "200 OK, 201 Created, 400 Bad Request, 401 Unauthorized, 404 Not Found, 500 Internal Server Error. Correct status codes are part of API design fundamentals." },
      { q: "What is Express Router?", a: "A mini Express application — it has its own routes and middleware and can be mounted on the main app with app.use('/prefix', router). Used to organize routes into separate files by resource." },
      { q: "How do you serve static files in Express?", a: "With the built-in express.static() middleware: app.use(express.static('public')). Any file in the 'public' folder is served directly — HTML, CSS, images, client-side JS." },
      { q: "What is CORS and how do you fix it in Express?", a: "Cross-Origin Resource Sharing — a browser security policy that blocks requests from a different origin. Fix with the 'cors' npm package: app.use(cors({ origin: 'https://yourfrontend.com' }))." },
      { q: "How do you read environment variables in an Express app?", a: "Use the dotenv package: require('dotenv').config() at the top of app.js. Then access variables with process.env.VARIABLE_NAME. Never hardcode secrets — store them in .env and add .env to .gitignore." },
    ],
    intermediate: [
      { q: "What is the difference between application-level and route-level middleware?", a: "Application-level: registered with app.use() — runs for all routes. Route-level: passed as arguments to a specific route handler — runs only for that route. Example: app.get('/admin', authMiddleware, adminHandler)." },
      { q: "How do you handle errors in async Express route handlers?", a: "Wrap in try/catch and call next(err) to pass to the error-handling middleware. In Express 5 (stable in 2024+), async errors are caught automatically. In Express 4, try/catch is mandatory or use the express-async-errors package." },
      { q: "What is the error-handling middleware signature and why does it matter?", a: "It must have exactly 4 parameters: (err, req, res, next). Express identifies error-handling middleware by parameter count. With 3 parameters, Express treats it as regular middleware and won't route errors to it." },
      { q: "How would you implement JWT authentication in Express?", a: "On login, sign a JWT with user data and secret: jwt.sign({id: user._id}, secret, {expiresIn: '7d'}). On protected routes, middleware extracts the token from Authorization header, verifies it with jwt.verify(), attaches user to req.user, calls next()." },
      { q: "What is the difference between PUT and PATCH in REST APIs?", a: "PUT replaces the entire resource. PATCH applies a partial update — only the fields sent are changed. For updating a user's name only, PATCH is semantically correct. Most teams use PUT for simplicity in smaller APIs." },
      { q: "How do you implement pagination in an Express + MongoDB API?", a: "Accept page and limit as query params. Calculate skip = (page - 1) * limit. Use Model.find().skip(skip).limit(limit). Return total document count alongside results so the client knows total pages." },
      { q: "How do you secure an Express API?", a: "Use helmet (security headers), cors (restrict origins), express-rate-limit (prevent brute force), mongo-sanitize (prevent NoSQL injection), validate all inputs with express-validator, use HTTPS, never expose stack traces in production." },
      { q: "What is express-validator and when would you use Joi instead?", a: "express-validator: middleware-based, integrates directly into Express route definitions. Joi: schema-based, validation logic defined separately. Both work well — Joi is preferred in NestJS-style codebases and for complex nested schemas." },
      { q: "What is Multer and how does it handle file uploads?", a: "Multer is middleware for handling multipart/form-data (file uploads). It parses the request, applies file filters and size limits, and makes the file(s) available on req.file (single) or req.files (multiple). Configure storage as disk or memory." },
      { q: "How do you version an Express API?", a: "Mount different routers on versioned prefixes: app.use('/api/v1', v1Router), app.use('/api/v2', v2Router). V2 can add new routes and deprecate old ones without breaking existing v1 clients." },
    ],
    advanced: [
      { q: "How would you implement rate limiting in Express and why is it important?", a: "Use express-rate-limit: limit requests per IP per time window. Without it, a single user can hammer your API with thousands of requests — brute-forcing passwords, scraping data, or causing DoS. Apply stricter limits to auth routes." },
      { q: "What is the difference between session-based and token-based (JWT) authentication?", a: "Sessions: server stores session data, client holds session ID in cookie — stateful, requires shared storage (Redis) for horizontal scaling. JWT: server is stateless, all data in the token — scales horizontally but token revocation requires a blocklist." },
      { q: "How would you implement token refresh in a JWT auth system?", a: "Issue two tokens: short-lived access token (15 min) and long-lived refresh token (7 days) stored in httpOnly cookie. When access token expires, client calls /api/auth/refresh — server verifies refresh token, issues new access token without requiring re-login." },
      { q: "How do you test an Express API?", a: "Use Jest as the test runner with Supertest to make HTTP requests against your Express app. Create a separate test database. Write unit tests for middleware and controllers, integration tests for full request-response cycles. Mock external services." },
      { q: "What is a webhook and how do you handle one in Express?", a: "A webhook is an HTTP POST that an external service sends when an event occurs (e.g., Stripe sends payment.succeeded). In Express, define a POST route for the webhook URL. Verify the webhook signature from the header before processing to prevent spoofing." },
      { q: "How would you implement caching in an Express API?", a: "Use Redis. Before querying the DB, check Redis for cached data. On cache miss, query DB, store result in Redis with a TTL, return to client. On mutations, invalidate the relevant cache keys. Reduces DB load dramatically for frequently-read data." },
      { q: "What is helmet and what does it protect against?", a: "Helmet sets various HTTP security headers: Content-Security-Policy (XSS), X-Frame-Options (clickjacking), HSTS (forces HTTPS), X-Content-Type-Options (MIME sniffing). One app.use(helmet()) adds a layer of protection against common web attacks." },
      { q: "How do you handle database transactions in Express with MongoDB?", a: "Use Mongoose sessions: const session = await mongoose.startSession(); session.startTransaction(). Pass { session } to all operations in the transaction. On success: session.commitTransaction(). On error: session.abortTransaction(). Requires MongoDB replica set." },
      { q: "What is graceful shutdown and how do you implement it in Express?", a: "Listen for SIGTERM/SIGINT signals. Stop accepting new connections (server.close()), finish in-flight requests, close DB connections, then process.exit(). Prevents data corruption during Kubernetes rolling updates or PM2 restarts." },
      { q: "How do you implement multipart file upload to AWS S3 instead of disk in Express?", a: "Use multer with memoryStorage (stores file in buffer, not disk). In the route handler, use AWS SDK v3's PutObjectCommand with the buffer from req.file.buffer. Return the S3 object URL. This is the production pattern — never save to server disk." },
    ],
  },

  // ── SECTION 11: COMPARISON ───────────────────────────────────────
  comparison: {
    headers: ["Feature", "Express.js", "Fastify", "NestJS"],
    rows: [
      { feature: "Type", react: "Minimal Framework", vue: "Performance Framework", angular: "Full Framework (Express-based)" },
      { feature: "Performance", react: "High", vue: "Very High (~2x Express)", angular: "High (same as Express underneath)" },
      { feature: "Learning Curve", react: "Low", vue: "Low-Moderate", angular: "High (TypeScript + decorators)" },
      { feature: "Opinionation", react: "Unopinionated — you choose everything", vue: "Unopinionated + schema validation built in", angular: "Highly opinionated — Angular-style architecture" },
      { feature: "TypeScript Support", react: "Manual setup", vue: "First-class", angular: "First-class (required)" },
      { feature: "Validation", react: "External (express-validator, Joi)", vue: "Built-in JSON Schema", angular: "Built-in (class-validator)" },
      { feature: "Job Market", react: "Highest — baseline expectation", vue: "Growing — performance-focused teams", angular: "Enterprise, large product companies" },
      { feature: "Best For", react: "APIs, startups, learning backend", vue: "High-throughput microservices", angular: "Enterprise apps, teams from Angular world" },
    ],
  },

  // ── SECTION 12: PROS & CONS ──────────────────────────────────────
  pros: [
    "Minimal footprint — adds almost no overhead to Node.js, starts in milliseconds",
    "Huge ecosystem — thousands of Express-compatible middleware packages on npm",
    "Most job-relevant — expected baseline knowledge for any Node.js backend role",
    "Unopinionated — freedom to structure your project your way, pick your own libraries",
    "Excellent documentation and community — every problem has a Stack Overflow answer",
    "Gateway to advanced frameworks — NestJS, LoopBack, and Sails.js all build on Express patterns",
    "Ideal for learning — the explicitness forces you to understand what's actually happening",
  ],
  cons: [
    "No built-in structure — newcomers write messy, unmaintainable code without guidance",
    "Manual everything — validation, auth, error handling all require separate packages and manual wiring",
    "Express 4 doesn't auto-catch async errors — try/catch in every handler is tedious (fixed in Express 5)",
    "Slower than Fastify — for high-throughput microservices where every millisecond matters, Fastify wins",
    "No TypeScript by default — additional setup required; NestJS is better for TypeScript-first teams",
    "Callback/middleware debugging can be confusing — tracing why a request isn't reaching a handler requires understanding the pipeline order",
  ],

  // ── SECTION 13: FUTURE SCOPE ─────────────────────────────────────
  futureScope: [
    "Express 5.0 (officially stable in 2024) fixes the async error handling problem — async route handlers now automatically forward thrown errors to error middleware without try/catch. This removes the #1 complaint about Express 4.",
    "Express remains the dominant learning framework for Node.js. NestJS (which wraps Express) is growing fast in enterprise — and NestJS knowledge requires Express fundamentals. Learning Express today directly enables NestJS tomorrow.",
    "The rise of serverless and edge functions (Vercel, Cloudflare Workers, AWS Lambda) uses Express-compatible routing patterns. Express knowledge transfers directly to these environments — the mental model is the same.",
    "As microservices adoption grows in Indian product companies (Zomato, Meesho, Razorpay-scale), Express-based lightweight services are the standard pattern. Junior developers who understand Express middleware and routing deeply are ready for this architecture.",
    "Express + TypeScript + Prisma + PostgreSQL is becoming the preferred full-stack JS backend stack for 2026–2028 hiring — replacing the older MEAN stack. Express is still at the center of this modern stack.",
  ],

  // ── SECTION 14: ACTION PLAN ──────────────────────────────────────
  actionPlan: [
    { week: "Week 1", title: "Environment and First API", desc: "Install Node.js, create a project with npm init, install Express. Build a 5-route in-memory Notes API. Test every route with Postman. Understand req/res objects completely." },
    { week: "Week 2–3", title: "Structure and Middleware", desc: "Refactor your app using Express Router — separate routes into files. Add custom logging middleware. Add express.json(). Build the calculator and student grade APIs from the project list." },
    { week: "Week 4–5", title: "Database and Auth", desc: "Connect MongoDB with Mongoose. Model a User. Implement register with bcrypt + login with JWT + protect middleware. This is the most important pattern — get it solid." },
    { week: "Week 6–8", title: "Build a Real API", desc: "Build the Blog API or Task Manager from the intermediate projects. Add validation with express-validator. Add centralized error handling. Add pagination. Deploy it to Railway with a real MongoDB Atlas DB." },
    { week: "Week 9–11", title: "Harden and Test", desc: "Add helmet, cors, rate limiting. Add file upload to one route. Write at least 10 tests with Jest + Supertest. This is what distinguishes mid-level candidates from juniors." },
    { week: "Week 12+", title: "The Job Push", desc: "Polish your GitHub — two clean deployed projects with READMEs. Study Express.js interview questions (event loop, middleware order, async errors, auth patterns). Apply daily. Most Express developer roles in India don't require a CS degree — they require working, deployed code." },
  ],
};