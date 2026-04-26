import type { TechContent } from './types';

export const nodejsContent: TechContent = {
  techId: 'nodejs',
  readTime: '30–35 min',
  difficulty: 'Beginner to Advanced',
  lastUpdated: '2026',

  // ── OPENING HOOK ─────────────────────────────────────────────────
  openingHook:
    "If you want to be the developer that gets hired as a backend engineer, full-stack developer, or API architect at every company in India's technology sector in 2026 — from a 3-person startup to a 100,000-person IT services giant — learn Node.js. Not because it's the only server-side technology. Java, Python, and Go all have their place. But because Node.js is the server-side technology that the majority of India's product companies, funded startups, and modern IT projects have standardized on for building APIs, microservices, and backend systems. Razorpay processes billions of rupees in transactions through Node.js APIs. Swiggy's order management backend runs on Node.js. Meesho's seller platform, Zepto's inventory service, ShareChat's content APIs — all Node.js. These companies chose Node.js because it lets JavaScript developers — already the most abundant developer type — own the entire stack from database to browser. TypeScript, the language that makes large Node.js codebases maintainable, runs on Node.js. NestJS, the Angular-inspired framework that's become the enterprise Node.js standard, runs on Node.js. tRPC, the end-to-end type-safe API layer that's transforming how React and Node.js communicate, runs on Node.js. The result: a Node.js backend developer with solid Express or NestJS knowledge, real database integration experience (MongoDB or PostgreSQL with Prisma), and authentication implementation is positioned for a ₹5–15 LPA role in 2026 — and ₹20–50 LPA as a senior backend or full-stack engineer within 3–4 years. This is not a Node.js overview. This is the complete, no-fluff Node.js roadmap — from JavaScript runtime fundamentals to production-ready API engineer.",

  // ── SECTION 1: INTRODUCTION ──────────────────────────────────────
  introText: [
    "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine that lets you run JavaScript outside the browser — on a server, on your local machine, or in a cloud function. Created by Ryan Dahl in 2009, Node.js made a single, transformative claim: the same language you write in the browser (JavaScript) can run on the server. This meant web developers could stop context-switching between frontend JavaScript and backend Python, Ruby, or Java. One language, one ecosystem, one team owning the full stack. That promise — still the most powerful developer productivity argument in software — is why Node.js became the dominant server-side technology for web APIs within a decade.",
    "Node.js's technical architecture is what makes it uniquely suited for API servers and real-time applications. Unlike traditional server-side languages that spawn a new thread for each incoming request (Apache's thread-per-request model), Node.js runs on a single thread with a non-blocking, event-driven I/O model. When Node.js makes a database query, it doesn't wait idly for the response — it registers a callback and moves on to handle the next request. When the database responds, the event loop picks up the callback and processes the result. This model means a single Node.js process can handle tens of thousands of concurrent connections with minimal memory — making it exceptionally efficient for the I/O-heavy workloads that API servers face (database queries, file reads, HTTP calls to external services).",
    "In India's developer ecosystem, Node.js occupies a uniquely valuable position. It is simultaneously the most beginner-accessible backend technology (JavaScript knowledge from frontend development transfers directly) and a production-grade backend runtime used at India's most successful technology companies. For a frontend developer who knows React or Next.js, Node.js is the natural next step to full-stack capability. For a backend developer, Node.js offers the largest ecosystem (npm — over 2 million packages), the most active community, and TypeScript support that matches or exceeds any compiled language's developer experience. In 2026, Node.js with TypeScript, Express or NestJS, Prisma or Mongoose, and JWT authentication is the most direct path from zero to a full-stack developer role in India.",
  ],

  realWorldUsages: [
    "Netflix — Node.js handles Netflix's user interface data layer, API gateway, and server-side rendering infrastructure, serving millions of requests per second globally",
    "LinkedIn — LinkedIn migrated its mobile backend from Ruby on Rails to Node.js in 2012, reducing server count from 30 to 3 and doubling performance",
    "Razorpay — India's leading payment gateway runs its core API infrastructure, webhook processing, and merchant dashboard backend on Node.js",
    "Swiggy — order management, restaurant APIs, real-time order tracking, and delivery partner coordination services run on Node.js microservices",
    "Meesho — the social commerce platform's seller APIs, product catalog services, and order processing backend are Node.js services",
    "Zepto — rapid grocery delivery's inventory management, order fulfillment, and real-time stock update services built on Node.js",
    "Uber — Uber's dispatch system, trip matching, and real-time location processing APIs use Node.js for its event-driven, high-concurrency capabilities",
    "PayPal — migrated from Java to Node.js and saw 35% faster response times with the same hardware; processes payment transactions in real time",
    "NASA — uses Node.js for its Open MCT mission control framework and data archival APIs for the Apollo mission EVA suit digitization project",
    "Microsoft — Azure Cloud Shell, Visual Studio Code's extension host, GitHub Codespaces, and multiple Azure services are built on Node.js",
    "ShareChat and Moj — content delivery APIs, recommendation engine interfaces, and creator monetization backends run on Node.js",
    "Freshworks — CRM APIs, customer support platform backends, and integration middleware across Freshdesk, Freshsales, and FreshService",
  ],

  // ── SECTION 2: WHY LEARN ─────────────────────────────────────────
  whyLearn: {
    demand:
      "Node.js is the most in-demand backend technology in India's startup and product company ecosystem. A search for 'Node.js developer' on Naukri.com returns more listings than Python backend, Java Spring, or any other backend framework in the sub-5-year experience range. LinkedIn India shows Node.js as the top backend skill requested by companies with 50–1000 employees — the exact size range of India's funded startup and growth-stage company market. The 2025 Stack Overflow Developer Survey listed Node.js as the most used non-browser runtime for the seventh consecutive year. Critically, Node.js is the backend technology that pairs most naturally with React, Next.js, and Angular — the dominant frontend frameworks. Companies that build their frontend in JavaScript naturally gravitate to Node.js backends, creating a massive and growing job market that shows no signs of cooling. For developers who want to move from frontend-only to full-stack — the highest-compensation bracket in Indian product development — Node.js is the fastest, most employer-recognized path.",
    jobRoles: [
      { role: "Node.js Backend Developer", desc: "The most common specialized listing — build and maintain REST or GraphQL APIs using Express or NestJS, integrate databases, implement authentication, write unit and integration tests. Mid-level candidates expected to own features end-to-end from API design to deployment." },
      { role: "Full-Stack Developer (MERN/MEAN)", desc: "Own both the React/Angular frontend and the Node.js backend. The MERN stack (MongoDB, Express, React, Node) is the most commonly listed full-stack combination in India's startup job descriptions. Developers who own both layers command premium compensation at small to mid-size teams." },
      { role: "Backend Engineer (Microservices)", desc: "Build and maintain individual services in a microservices architecture. Node.js services communicate over REST, GraphQL, or message queues (Kafka, RabbitMQ). Expected to understand service contracts, distributed system patterns, and observability." },
      { role: "API Engineer", desc: "Specialized role at API-first companies (Razorpay, Postman, Hasura, Treblle) — design, build, document, version, and maintain public and internal APIs. Deep knowledge of REST conventions, OpenAPI/Swagger, rate limiting, and SDK generation." },
      { role: "DevOps-Capable Backend Engineer", desc: "At small teams and startups — write the Node.js API and also containerize it with Docker, deploy to AWS/GCP/Railway, configure CI/CD pipelines, set up monitoring. The 'full-ownership' profile that startup CTOs search for." },
      { role: "Tech Lead / Senior Backend Engineer", desc: "After 3–4 years: design system architecture, evaluate technology choices (which database, which messaging system, monolith vs microservices), set coding standards, mentor juniors, own reliability and performance of backend systems." },
    ],
    whyCompanies: [
      { reason: "JavaScript everywhere", detail: "Frontend developers already know JavaScript. Node.js lets them own the backend without learning a new language. Teams ship features faster, communication overhead between frontend and backend decreases, and a single developer can build an entire feature from database schema to UI component. This is the MERN/MEAN stack argument that has driven Node.js adoption in startup India for a decade." },
      { reason: "npm ecosystem depth", detail: "npm is the largest software registry in the world with over 2.1 million packages. Every integration a company needs — Stripe, Razorpay, Twilio, SendGrid, AWS SDK, Firebase Admin, Cloudinary, Redis, MongoDB, PostgreSQL — has a maintained, TypeScript-typed npm package. Building integrations in Node.js means starting from well-tested foundations." },
      { reason: "Exceptional I/O performance", detail: "Node.js's non-blocking I/O handles 10,000+ concurrent connections on a single thread with minimal RAM. For API servers that are mostly I/O-bound (database queries, HTTP calls, file operations), Node.js performance is comparable to Go and significantly better than synchronous runtimes (Python, Ruby). Razorpay and PayPal's public benchmarks have confirmed this in production." },
      { reason: "TypeScript and modern tooling", detail: "TypeScript on Node.js delivers compile-time type safety, IDE autocomplete for database schemas (Prisma), end-to-end type safety from database to frontend (tRPC), and refactoring confidence across large codebases. The TypeScript-first Node.js ecosystem (NestJS, Prisma, tRPC, Hono) rivals any statically-typed backend framework for developer experience." },
    ],
    salaryRange: "₹5 LPA – ₹14 LPA (Freshers with deployed projects) | ₹14 LPA – ₹32 LPA (Mid-Level, 2–4 years) | ₹32 LPA – ₹65 LPA (Senior/Architect, 5+ years) | ₹50–100 LPA (Remote global roles, 4+ years)",
    careerNote:
      "Node.js is the backend foundation for the highest-value full-stack profiles in India's tech market. Once you're solid in Node.js with Express or NestJS, TypeScript, and database integration, the career path branches powerfully: NestJS for large-scale enterprise backends, GraphQL for API-first products, microservices architecture with Docker and Kubernetes for senior backend roles, and tRPC + Next.js for full-stack TypeScript product engineering. Senior Node.js engineers with system design knowledge, microservices experience, and production operations skills at Indian product companies regularly earn ₹40–65 LPA. The global remote market for senior Node.js backend engineers is among the most accessible to Indian developers — companies in the US and Europe actively hire remotely for Node.js skills at $120,000–$180,000 USD, representing the largest salary arbitrage opportunity in Indian backend engineering.",
  },

  // ── SECTION 3: HOW IT WORKS ──────────────────────────────────────
  howItWorks: {
    intro:
      "Think of Node.js like a highly efficient single-window government counter that serves hundreds of citizens simultaneously. A traditional counter (multi-threaded server) has one employee per citizen — 100 citizens means 100 employees, most of whom are idle while waiting for paperwork to be processed. Node.js's counter has one employee (single thread) who hands each citizen a token and moves to the next one. When a citizen's paperwork is ready (I/O operation completes), the notification system (event loop) calls them back. The one employee handles thousands of token holders simultaneously because they spend almost no time waiting — they only work when there's actual work to do (CPU processing), not while waiting for the filing cabinet (database), photocopier (file system), or external office (HTTP request). This is the non-blocking, event-driven model that makes Node.js extraordinary for API servers: the single thread is almost never idle, and memory usage stays flat regardless of how many concurrent requests are in flight.",
    vdomSteps: [
      { num: "1", title: "Node.js Starts the Process", text: "When you run node server.js, V8 (Chrome's JavaScript engine) initializes and compiles your JavaScript to machine code. The libuv library initializes the event loop and thread pool (default 4 threads for CPU-bound operations like crypto, file compression, and DNS). Your Express/Fastify application registers route handlers, connects to the database, and calls server.listen() — which tells the OS to start accepting TCP connections on the specified port." },
      { num: "2", title: "Request Arrives — Event Loop Picks It Up", text: "An HTTP request arrives. The OS receives it and places it in a queue. Node.js's event loop — constantly cycling through phases (timers, I/O callbacks, idle, poll, check, close) — picks up the request in the poll phase. The request is matched to a registered route handler. The handler function starts executing synchronously on the main thread." },
      { num: "3", title: "Async Operations Are Offloaded", text: "The route handler needs data — it calls db.findOne(), fs.readFile(), or fetch() to an external API. These I/O operations are non-blocking: Node.js hands them to libuv (which uses OS async I/O or its internal thread pool), registers a callback, and immediately returns control to the event loop. The main thread is now free to handle other incoming requests while waiting for the I/O to complete." },
      { num: "4", title: "Callback Fires When I/O Completes", text: "The database responds. libuv places the completion callback in the I/O callbacks phase queue. On the next event loop iteration, Node.js picks up the callback, executes the continuation of the route handler (the .then() or the code after an await), processes the data, and continues until the response is ready." },
      { num: "5", title: "Response Is Sent", text: "The route handler calls res.json(data) or res.send(html). Node.js serializes the response, hands it to the OS network stack, and the bytes travel back to the client. The entire request has been handled on the single main thread but for zero of the wall-clock time spent waiting for the database — that waiting happened in libuv's background, freeing the thread to serve thousands of other requests during the same interval." },
    ],
    componentCode: `// THE NODE.JS + EXPRESS DATA FLOW — one complete REST API feature, all concepts connected

// 1. TYPES — TypeScript interfaces for the entire data model
// types/product.types.ts
export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  imageUrl: string;
  sellerId: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateProductDto {
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  imageUrl?: string;
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
  pagination?: { total: number; page: number; pages: number; limit: number };
}

// 2. MONGOOSE MODEL — MongoDB schema with TypeScript
// models/product.model.ts
import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IProduct extends Product, Document {}

const productSchema = new Schema<IProduct>({
  name: { type: String, required: [true, 'Product name is required'], trim: true, maxlength: [200, 'Name cannot exceed 200 characters'] },
  description: { type: String, required: true, maxlength: 2000 },
  price: { type: Number, required: true, min: [0, 'Price cannot be negative'] },
  category: { type: String, required: true, enum: ['electronics', 'clothing', 'home', 'books', 'sports', 'other'] },
  stock: { type: Number, required: true, min: 0, default: 0 },
  imageUrl: { type: String, default: '' },
  sellerId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  isActive: { type: Boolean, default: true },
}, { timestamps: true });

// Index for performance — queries that filter/sort by these fields are fast
productSchema.index({ category: 1, price: 1 });
productSchema.index({ name: 'text', description: 'text' });  // Full-text search

export const ProductModel: Model<IProduct> = mongoose.model<IProduct>('Product', productSchema);

// 3. SERVICE LAYER — all business logic, zero HTTP concern
// services/product.service.ts
import { ProductModel, IProduct } from '../models/product.model';
import { CreateProductDto } from '../types/product.types';
import { AppError } from '../utils/app-error';

export class ProductService {
  async getAll(filters: {
    category?: string;
    search?: string;
    minPrice?: number;
    maxPrice?: number;
    page: number;
    limit: number;
    sort: string;
  }) {
    const query: Record<string, unknown> = { isActive: true };

    if (filters.category) query.category = filters.category;
    if (filters.minPrice || filters.maxPrice) {
      query.price = {};
      if (filters.minPrice) (query.price as Record<string, number>).$gte = filters.minPrice;
      if (filters.maxPrice) (query.price as Record<string, number>).$lte = filters.maxPrice;
    }
    if (filters.search) {
      query.$text = { $search: filters.search };
    }

    const sortMap: Record<string, Record<string, number>> = {
      'price-asc': { price: 1 },
      'price-desc': { price: -1 },
      'newest': { createdAt: -1 },
      'oldest': { createdAt: 1 },
    };

    const [products, total] = await Promise.all([
      ProductModel
        .find(query)
        .sort(sortMap[filters.sort] || { createdAt: -1 })
        .skip((filters.page - 1) * filters.limit)
        .limit(filters.limit)
        .populate('sellerId', 'name email')
        .lean(),  // .lean() returns plain objects (faster — no Mongoose overhead)
      ProductModel.countDocuments(query),
    ]);

    return {
      products,
      total,
      page: filters.page,
      pages: Math.ceil(total / filters.limit),
    };
  }

  async getById(id: string) {
    const product = await ProductModel.findById(id).populate('sellerId', 'name email').lean();
    if (!product) throw new AppError('Product not found', 404);
    return product;
  }

  async create(data: CreateProductDto, sellerId: string) {
    const product = await ProductModel.create({ ...data, sellerId });
    return product;
  }

  async update(id: string, data: Partial<CreateProductDto>, sellerId: string) {
    const product = await ProductModel.findById(id);
    if (!product) throw new AppError('Product not found', 404);
    if (product.sellerId.toString() !== sellerId) throw new AppError('Not authorized to update this product', 403);
    Object.assign(product, data);
    await product.save();
    return product;
  }

  async delete(id: string, sellerId: string) {
    const product = await ProductModel.findById(id);
    if (!product) throw new AppError('Product not found', 404);
    if (product.sellerId.toString() !== sellerId) throw new AppError('Not authorized', 403);
    product.isActive = false;  // Soft delete
    await product.save();
  }
}

// 4. CONTROLLER — handles HTTP, calls service, formats response
// controllers/product.controller.ts
import { Request, Response, NextFunction } from 'express';
import { ProductService } from '../services/product.service';

const productService = new ProductService();

export const getProducts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { category, search, minPrice, maxPrice, page = '1', limit = '12', sort = 'newest' } = req.query;
    const result = await productService.getAll({
      category: category as string,
      search: search as string,
      minPrice: minPrice ? Number(minPrice) : undefined,
      maxPrice: maxPrice ? Number(maxPrice) : undefined,
      page: Number(page),
      limit: Math.min(Number(limit), 100),  // Cap at 100 per page
      sort: sort as string,
    });
    res.json({ success: true, message: 'Products fetched', data: result.products, pagination: result });
  } catch (error) { next(error); }
};

export const createProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const product = await productService.create(req.body, req.user!.id);
    res.status(201).json({ success: true, message: 'Product created', data: product });
  } catch (error) { next(error); }
};

// 5. MIDDLEWARE + ROUTES — validation, auth, routing
// middleware/validate.ts
import { z, ZodSchema } from 'zod';

export const validate = (schema: ZodSchema) => (req: Request, res: Response, next: NextFunction) => {
  const result = schema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({ success: false, message: 'Validation failed', errors: result.error.flatten().fieldErrors });
  }
  req.body = result.data;
  next();
};

const createProductSchema = z.object({
  name: z.string().min(2).max(200),
  description: z.string().min(10).max(2000),
  price: z.number().positive().max(10000000),
  category: z.enum(['electronics', 'clothing', 'home', 'books', 'sports', 'other']),
  stock: z.number().int().nonnegative(),
});

// routes/product.routes.ts
import { Router } from 'express';
import { authenticate, authorize } from '../middleware/auth';

const router = Router();

router.get('/', getProducts);
router.get('/:id', getProductById);
router.post('/', authenticate, authorize('seller', 'admin'), validate(createProductSchema), createProduct);
router.patch('/:id', authenticate, authorize('seller', 'admin'), updateProduct);
router.delete('/:id', authenticate, authorize('seller', 'admin'), deleteProduct);

export default router;`,
    renderCycle: [
      "Request arrives at OS → event loop picks up from poll queue → route matched to handler",
      "Middleware chain executes (CORS, auth, rate limit, validation) → synchronous, sequential",
      "Controller calls service method → service builds DB query → Mongoose sends async query",
      "Event loop free to handle other requests while DB query is in flight (non-blocking I/O)",
      "DB responds → callback fires → service processes result → throws AppError or returns data",
      "Controller formats ApiResponse → res.json() serializes → bytes sent to client",
    ],
    closingNote:
      "This six-step request cycle — event loop pickup → middleware chain → controller → service → database → response — is the heartbeat of every Express API. Once you can trace any feature — user registration, product listing, order creation, file upload — through this cycle, you understand Node.js backend architecture. Every pattern you learn after — NestJS modules, GraphQL resolvers, WebSocket handlers, message queue consumers — is a specialization of this same pattern with different transport or organization layers.",
  },

  // ── SECTION 4: CORE CONCEPTS ─────────────────────────────────────
  coreConcepts: [
    {
      id: "express-api",
      number: "4.1",
      title: "Express.js — Building Production REST APIs",
      icon: "🚂",
      color: "emerald",
      intro:
        "Express.js is the minimal, unopinionated Node.js web framework that has been the foundation of Node.js API development since 2010. It provides routing, middleware, request/response abstractions, and a plugin ecosystem — nothing more. Every other Node.js web framework either builds on Express or was created as a response to its design choices. Understanding Express deeply — middleware chaining, error handling, route organization, request parsing — is the prerequisite for every other Node.js backend skill. Even if you eventually move to NestJS or Fastify, Express patterns transfer directly.",
      code: `// COMPLETE EXPRESS.JS API SETUP — production-ready structure

import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import mongoSanitize from 'express-mongo-sanitize';
import compression from 'compression';
import { errorHandler } from './middleware/error-handler';
import { notFound } from './middleware/not-found';
import productRoutes from './routes/product.routes';
import userRoutes from './routes/user.routes';
import authRoutes from './routes/auth.routes';
import orderRoutes from './routes/order.routes';

export function createApp(): Application {
  const app = express();

  // ── SECURITY MIDDLEWARE ──────────────────────────────────────────
  app.use(helmet());  // Sets 15 security-related HTTP headers (X-Frame-Options, CSP, etc.)

  app.use(cors({
    origin: process.env.NODE_ENV === 'production'
      ? ['https://yourdomain.com', 'https://app.yourdomain.com']
      : ['http://localhost:3000', 'http://localhost:5173'],
    credentials: true,               // Allow cookies in cross-origin requests
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  }));

  // Rate limiting — prevent brute force and DDoS
  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,       // 15-minute window
    max: 100,                        // 100 requests per window per IP
    standardHeaders: true,
    legacyHeaders: false,
    message: { success: false, message: 'Too many requests, please try again later' },
  });
  app.use('/api/', limiter);

  // Stricter limit for auth routes — prevent brute force
  const authLimiter = rateLimit({ windowMs: 60 * 60 * 1000, max: 10 });
  app.use('/api/auth/', authLimiter);

  // ── REQUEST PARSING ──────────────────────────────────────────────
  app.use(express.json({ limit: '10kb' }));        // Parse JSON body (max 10KB to prevent huge payloads)
  app.use(express.urlencoded({ extended: true, limit: '10kb' }));
  app.use(mongoSanitize());          // Strip $ and . from request body/params (prevent NoSQL injection)
  app.use(compression());            // Gzip response bodies > 1KB

  // ── LOGGING ─────────────────────────────────────────────────────
  if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));           // Colorized: METHOD /path STATUS - ms
  } else {
    app.use(morgan('combined', {     // Apache-style: IP - - [date] "METHOD /path" STATUS bytes
      skip: (req) => req.url === '/health',  // Don't log health checks
    }));
  }

  // ── HEALTH CHECK ─────────────────────────────────────────────────
  app.get('/health', (req: Request, res: Response) => {
    res.json({ status: 'ok', uptime: process.uptime(), timestamp: new Date().toISOString() });
  });

  // ── ROUTES ───────────────────────────────────────────────────────
  app.use('/api/v1/auth', authRoutes);
  app.use('/api/v1/users', userRoutes);
  app.use('/api/v1/products', productRoutes);
  app.use('/api/v1/orders', orderRoutes);

  // ── ERROR HANDLING (must be last) ────────────────────────────────
  app.use(notFound);                 // 404 for unmatched routes
  app.use(errorHandler);             // Global error handler

  return app;
}

// middleware/error-handler.ts — centralized error processing
import { AppError } from '../utils/app-error';

export const errorHandler = (err: Error, req: Request, res: Response, _next: NextFunction) => {
  // Operational errors (expected — invalid input, not found, unauthorized)
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
      ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
    });
  }

  // Mongoose validation error
  if (err.name === 'ValidationError') {
    const errors = Object.values((err as any).errors).map((e: any) => e.message);
    return res.status(400).json({ success: false, message: 'Validation error', errors });
  }

  // Mongoose duplicate key error
  if ((err as any).code === 11000) {
    const field = Object.keys((err as any).keyValue)[0];
    return res.status(400).json({ success: false, message: \`\${field} already exists\` });
  }

  // Mongoose cast error (invalid ObjectId format)
  if (err.name === 'CastError') {
    return res.status(400).json({ success: false, message: 'Invalid ID format' });
  }

  // JWT errors
  if (err.name === 'JsonWebTokenError') {
    return res.status(401).json({ success: false, message: 'Invalid token' });
  }
  if (err.name === 'TokenExpiredError') {
    return res.status(401).json({ success: false, message: 'Token expired' });
  }

  // Programming/unexpected errors — don't leak details in production
  console.error('UNHANDLED ERROR:', err);
  res.status(500).json({
    success: false,
    message: process.env.NODE_ENV === 'production' ? 'Internal server error' : err.message,
  });
};

// utils/app-error.ts — custom error class
export class AppError extends Error {
  constructor(
    public message: string,
    public statusCode: number = 500,
    public isOperational: boolean = true,
  ) {
    super(message);
    this.name = 'AppError';
    Error.captureStackTrace(this, this.constructor);
  }
}

// server.ts — process-level setup separate from app
import { createApp } from './app';
import { connectDatabase } from './config/database';

async function bootstrap() {
  await connectDatabase();

  const app = createApp();
  const PORT = process.env.PORT ?? 5000;

  const server = app.listen(PORT, () => {
    console.log(\`Server running on port \${PORT} in \${process.env.NODE_ENV} mode\`);
  });

  // Graceful shutdown — finish in-flight requests before exiting
  const shutdown = (signal: string) => {
    console.log(\`\${signal} received. Graceful shutdown...\`);
    server.close(async () => {
      await mongoose.connection.close();
      console.log('Server and DB connections closed.');
      process.exit(0);
    });
    setTimeout(() => { console.error('Forced shutdown'); process.exit(1); }, 10000);
  };

  process.on('SIGTERM', () => shutdown('SIGTERM'));
  process.on('SIGINT', () => shutdown('SIGINT'));
  process.on('unhandledRejection', (reason) => { console.error('Unhandled Rejection:', reason); });
  process.on('uncaughtException', (error) => { console.error('Uncaught Exception:', error); process.exit(1); });
}

bootstrap();`,
      usage:
        "The app factory pattern (createApp()) separates app configuration from server startup, making the app testable without starting a real server (supertest can call createApp() directly). Security middleware (helmet, cors, rate-limit, mongoSanitize) must be applied before routes. The global error handler must be registered last. Graceful shutdown ensures database connections close cleanly before the process exits — critical for zero-downtime deployments.",
      mistake:
        "Putting all route handlers in a single server.js file. When every route, middleware, and business logic function lives in one file, the codebase becomes unmaintainable past 20 routes. Separate concerns from day one: routes in routes/, business logic in services/, database models in models/, middleware in middleware/. The Service layer is the most important — controllers that contain Mongoose queries are the most common architectural mistake in Node.js codebases.",
    },
    {
      id: "authentication-nodejs",
      number: "4.2",
      title: "Authentication and Authorization — JWT, Sessions, and RBAC",
      icon: "🔐",
      color: "red",
      intro:
        "Authentication and authorization are the most security-critical parts of any Node.js API, and the most commonly asked-about topics in backend interviews. The standard in 2026 is JWT (JSON Web Tokens) for stateless authentication, bcrypt for password hashing, and role-based access control (RBAC) implemented through middleware. Understanding the complete auth flow — registration, login, token issuance, token verification, refresh tokens, and role guards — from scratch is a non-negotiable skill for any Node.js backend developer.",
      code: `// COMPLETE JWT AUTHENTICATION SYSTEM

// 1. TYPES
// types/auth.types.ts
export interface JwtPayload {
  id: string;
  email: string;
  role: 'user' | 'seller' | 'admin';
  iat?: number;
  exp?: number;
}

// Extend Express Request to include authenticated user
declare global {
  namespace Express {
    interface Request {
      user?: JwtPayload;
    }
  }
}

// 2. UTILITY FUNCTIONS
// utils/jwt.ts
import jwt from 'jsonwebtoken';
import type { JwtPayload } from '../types/auth.types';

const JWT_SECRET = process.env.JWT_SECRET!;
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET!;

export function signAccessToken(payload: Omit<JwtPayload, 'iat' | 'exp'>): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '15m' });  // Short-lived
}

export function signRefreshToken(payload: Omit<JwtPayload, 'iat' | 'exp'>): string {
  return jwt.sign(payload, JWT_REFRESH_SECRET, { expiresIn: '7d' });
}

export function verifyAccessToken(token: string): JwtPayload {
  return jwt.verify(token, JWT_SECRET) as JwtPayload;
}

export function verifyRefreshToken(token: string): JwtPayload {
  return jwt.verify(token, JWT_REFRESH_SECRET) as JwtPayload;
}

// 3. USER MODEL WITH BCRYPT
// models/user.model.ts
import mongoose, { Schema, Document } from 'mongoose';
import bcrypt from 'bcryptjs';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: 'user' | 'seller' | 'admin';
  isActive: boolean;
  refreshToken?: string;
  passwordResetToken?: string;
  passwordResetExpires?: Date;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true, minlength: 8, select: false },  // select: false — never returned by default
  role: { type: String, enum: ['user', 'seller', 'admin'], default: 'user' },
  isActive: { type: Boolean, default: true },
  refreshToken: { type: String, select: false },
  passwordResetToken: { type: String, select: false },
  passwordResetExpires: { type: Date, select: false },
}, { timestamps: true });

// Hash password before saving — Mongoose pre-save hook
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();  // Only hash if password changed
  this.password = await bcrypt.hash(this.password, 12);  // Salt rounds: 12 is strong but not too slow
  next();
});

// Instance method for password comparison
userSchema.methods.comparePassword = async function (candidatePassword: string): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password);
};

export const UserModel = mongoose.model<IUser>('User', userSchema);

// 4. AUTH SERVICE
// services/auth.service.ts
export class AuthService {
  async register(data: { name: string; email: string; password: string; role?: string }) {
    const existing = await UserModel.findOne({ email: data.email });
    if (existing) throw new AppError('Email already registered', 400);

    const user = await UserModel.create(data);

    const payload = { id: user._id.toString(), email: user.email, role: user.role };
    const accessToken = signAccessToken(payload);
    const refreshToken = signRefreshToken(payload);

    // Store hashed refresh token — so DB compromise doesn't expose valid tokens
    user.refreshToken = await bcrypt.hash(refreshToken, 10);
    await user.save({ validateBeforeSave: false });

    return { user: { id: user._id, name: user.name, email: user.email, role: user.role }, accessToken, refreshToken };
  }

  async login(email: string, password: string) {
    const user = await UserModel.findOne({ email, isActive: true }).select('+password +refreshToken');
    if (!user) throw new AppError('Invalid email or password', 401);  // Don't reveal which field is wrong

    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) throw new AppError('Invalid email or password', 401);

    const payload = { id: user._id.toString(), email: user.email, role: user.role };
    const accessToken = signAccessToken(payload);
    const refreshToken = signRefreshToken(payload);

    user.refreshToken = await bcrypt.hash(refreshToken, 10);
    await user.save({ validateBeforeSave: false });

    return { user: { id: user._id, name: user.name, email: user.email, role: user.role }, accessToken, refreshToken };
  }

  async refresh(refreshToken: string) {
    let payload: JwtPayload;
    try {
      payload = verifyRefreshToken(refreshToken);
    } catch {
      throw new AppError('Invalid or expired refresh token', 401);
    }

    const user = await UserModel.findById(payload.id).select('+refreshToken');
    if (!user || !user.refreshToken) throw new AppError('User not found or logged out', 401);

    const isTokenValid = await bcrypt.compare(refreshToken, user.refreshToken);
    if (!isTokenValid) throw new AppError('Invalid refresh token', 401);

    const newAccessToken = signAccessToken({ id: user._id.toString(), email: user.email, role: user.role });
    return { accessToken: newAccessToken };
  }

  async logout(userId: string) {
    await UserModel.findByIdAndUpdate(userId, { $unset: { refreshToken: 1 } });
  }
}

// 5. AUTH MIDDLEWARE
// middleware/auth.ts
export const authenticate = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader?.startsWith('Bearer ')) {
      throw new AppError('No token provided', 401);
    }
    const token = authHeader.split(' ')[1];
    const payload = verifyAccessToken(token);
    req.user = payload;  // Attach to request — available in all subsequent middleware/controllers
    next();
  } catch (error) {
    next(error);  // Passes to global error handler — handles TokenExpiredError and JsonWebTokenError
  }
};

// Role-based access control — factory function returns middleware
export const authorize = (...roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) return next(new AppError('Not authenticated', 401));
    if (!roles.includes(req.user.role)) {
      return next(new AppError(\`Role '\${req.user.role}' is not authorized to access this route\`, 403));
    }
    next();
  };
};

// 6. AUTH ROUTES
// routes/auth.routes.ts
router.post('/register', validate(registerSchema), authController.register);
router.post('/login', validate(loginSchema), authController.login);
router.post('/refresh', authController.refresh);
router.post('/logout', authenticate, authController.logout);
router.post('/forgot-password', authController.forgotPassword);
router.patch('/reset-password/:token', authController.resetPassword);
router.get('/me', authenticate, authController.getMe);
router.patch('/update-password', authenticate, authController.updatePassword);`,
      usage:
        "Use short-lived access tokens (15 minutes) and long-lived refresh tokens (7 days) — this limits the damage window if an access token is intercepted while keeping users logged in. Store refresh tokens hashed in the database — if the database is compromised, plain refresh tokens can't be replayed. The authorize() middleware factory is the cleanest RBAC pattern — router.post('/products', authenticate, authorize('seller', 'admin'), createProduct) reads like a sentence.",
      mistake:
        "Storing plain-text passwords or using MD5/SHA1 for password hashing. bcrypt is the correct choice — it includes a salt automatically (preventing rainbow table attacks), and its work factor is adjustable (salt rounds: 12 is the recommended default in 2026, making brute force impractical). Never store plain passwords, never use fast hashing algorithms (SHA256 is fast — it's designed for speed, not security). Additionally, never return the password field in API responses — use select: false on the Mongoose schema field.",
    },
    {
      id: "database-integration",
      number: "4.3",
      title: "Database Integration — MongoDB with Mongoose and PostgreSQL with Prisma",
      icon: "🗄️",
      color: "blue",
      intro:
        "Node.js developers work with two dominant database ecosystems: MongoDB (document database, schema-flexible, excellent for rapidly-evolving data models) via Mongoose, and PostgreSQL (relational database, ACID-compliant, excellent for complex relationships and financial data) via Prisma. Understanding both — when to choose each, how to model data correctly, how to query efficiently, and how to handle migrations — is the full-stack backend skillset that separates junior from mid-level Node.js developers. In 2026, Prisma has become the preferred ORM for PostgreSQL due to its TypeScript-first design and excellent developer experience.",
      code: `// PART 1: MONGODB WITH MONGOOSE

// config/database.ts — connection with retry logic
import mongoose from 'mongoose';

export async function connectDatabase(): Promise<void> {
  const MONGO_URI = process.env.MONGODB_URI!;
  const MAX_RETRIES = 5;
  let retries = 0;

  while (retries < MAX_RETRIES) {
    try {
      await mongoose.connect(MONGO_URI, {
        maxPoolSize: 10,        // Max concurrent connections in the pool
        serverSelectionTimeoutMS: 5000,
        socketTimeoutMS: 45000,
      });
      console.log('MongoDB connected');
      return;
    } catch (error) {
      retries++;
      console.error(\`MongoDB connection attempt \${retries} failed. Retrying in 5s...\`);
      if (retries === MAX_RETRIES) throw error;
      await new Promise(resolve => setTimeout(resolve, 5000));
    }
  }
}

// ADVANCED MONGOOSE PATTERNS

// 1. SCHEMA WITH VIRTUAL FIELDS AND INSTANCE METHODS
const orderSchema = new Schema<IOrder>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  items: [{
    productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
    name: String,           // Denormalized — snapshot at order time
    price: Number,          // Snapshot — not affected by future price changes
    quantity: { type: Number, min: 1 },
  }],
  status: { type: String, enum: ['pending', 'confirmed', 'shipped', 'delivered', 'cancelled'], default: 'pending' },
  shippingAddress: { street: String, city: String, state: String, pincode: String },
  paymentStatus: { type: String, enum: ['pending', 'paid', 'failed', 'refunded'], default: 'pending' },
  razorpayOrderId: String,
  razorpayPaymentId: String,
}, { timestamps: true });

// Virtual — computed from stored data, not stored itself
orderSchema.virtual('total').get(function () {
  return this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
});
orderSchema.set('toJSON', { virtuals: true });  // Include virtuals in JSON output

// Static method — query shortcut
orderSchema.statics.findByUser = function (userId: string) {
  return this.find({ userId }).populate('items.productId', 'name imageUrl').sort({ createdAt: -1 });
};

// 2. EFFICIENT QUERY PATTERNS
// Pagination with cursor-based (better than skip() for large datasets)
async function getProductsCursor(lastId?: string, limit = 20) {
  const query = lastId ? { _id: { $gt: lastId }, isActive: true } : { isActive: true };
  return ProductModel.find(query).limit(limit).sort({ _id: 1 }).lean();
}

// Aggregation pipeline — analytics, grouping, complex transformations
async function getOrderStats(userId: string) {
  return OrderModel.aggregate([
    { $match: { userId: new mongoose.Types.ObjectId(userId) } },
    { $group: {
      _id: '$status',
      count: { $sum: 1 },
      totalValue: { $sum: { $reduce: {
        input: '$items',
        initialValue: 0,
        in: { $add: ['$$value', { $multiply: ['$$this.price', '$$this.quantity'] }] }
      }}},
    }},
    { $sort: { count: -1 } },
  ]);
}

// ─────────────────────────────────────────────────────────────────────────────

// PART 2: POSTGRESQL WITH PRISMA

// prisma/schema.prisma — database schema as code
/*
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id           String    @id @default(cuid())
  name         String
  email        String    @unique
  password     String
  role         Role      @default(USER)
  isActive     Boolean   @default(true)
  products     Product[]
  orders       Order[]
  refreshToken String?
  createdAt    DateTime  @default(now())
  updatedAt    DateTime  @updatedAt
}

model Product {
  id          String   @id @default(cuid())
  name        String
  description String
  price       Decimal  @db.Decimal(10, 2)
  category    Category
  stock       Int      @default(0)
  imageUrl    String?
  isActive    Boolean  @default(true)
  seller      User     @relation(fields: [sellerId], references: [id])
  sellerId    String
  orderItems  OrderItem[]
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  @@index([category, price])
  @@index([name])
}

model Order {
  id              String      @id @default(cuid())
  user            User        @relation(fields: [userId], references: [id])
  userId          String
  items           OrderItem[]
  status          OrderStatus @default(PENDING)
  paymentStatus   PaymentStatus @default(PENDING)
  razorpayOrderId String?
  shippingAddress Json
  createdAt       DateTime    @default(now())
  updatedAt       DateTime    @updatedAt
}

model OrderItem {
  id        String  @id @default(cuid())
  order     Order   @relation(fields: [orderId], references: [id])
  orderId   String
  product   Product @relation(fields: [productId], references: [id])
  productId String
  name      String
  price     Decimal @db.Decimal(10, 2)
  quantity  Int
}

enum Role { USER SELLER ADMIN }
enum Category { ELECTRONICS CLOTHING HOME BOOKS SPORTS OTHER }
enum OrderStatus { PENDING CONFIRMED SHIPPED DELIVERED CANCELLED }
enum PaymentStatus { PENDING PAID FAILED REFUNDED }
*/

// lib/prisma.ts — singleton client
import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };
export const prisma = globalForPrisma.prisma ?? new PrismaClient({
  log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
});
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

// PRISMA QUERY PATTERNS
// services/product.service.ts (Prisma version)
export class ProductService {
  async getAll(filters: ProductFilters) {
    const where = {
      isActive: true,
      ...(filters.category && { category: filters.category as Category }),
      ...(filters.search && { name: { contains: filters.search, mode: 'insensitive' as const } }),
      ...((filters.minPrice || filters.maxPrice) && {
        price: {
          ...(filters.minPrice && { gte: filters.minPrice }),
          ...(filters.maxPrice && { lte: filters.maxPrice }),
        },
      }),
    };

    const [products, total] = await prisma.$transaction([
      prisma.product.findMany({
        where,
        orderBy: filters.sort === 'price-asc' ? { price: 'asc' }
                : filters.sort === 'price-desc' ? { price: 'desc' }
                : { createdAt: 'desc' },
        skip: (filters.page - 1) * filters.limit,
        take: filters.limit,
        include: { seller: { select: { id: true, name: true, email: true } } },
      }),
      prisma.product.count({ where }),
    ]);

    return { products, total, page: filters.page, pages: Math.ceil(total / filters.limit) };
  }

  async create(data: CreateProductDto, sellerId: string) {
    return prisma.product.create({
      data: { ...data, sellerId },
      include: { seller: { select: { id: true, name: true } } },
    });
  }
}

// TRANSACTION — atomic operations (order creation + stock decrement)
async function createOrder(userId: string, items: CartItem[], address: Address) {
  return prisma.$transaction(async (tx) => {
    // 1. Verify all products have sufficient stock
    for (const item of items) {
      const product = await tx.product.findUnique({ where: { id: item.productId } });
      if (!product || product.stock < item.quantity) {
        throw new Error(\`Insufficient stock for \${product?.name ?? item.productId}\`);
      }
    }
    // 2. Create the order
    const order = await tx.order.create({
      data: {
        userId,
        shippingAddress: address,
        items: {
          create: items.map(item => ({
            productId: item.productId,
            name: item.name,
            price: item.price,
            quantity: item.quantity,
          })),
        },
      },
      include: { items: true },
    });
    // 3. Decrement stock for each item
    await Promise.all(
      items.map(item =>
        tx.product.update({
          where: { id: item.productId },
          data: { stock: { decrement: item.quantity } },
        })
      )
    );
    return order;  // If any step throws, all changes are rolled back automatically
  });
}`,
      usage:
        "MongoDB + Mongoose for: user-generated content, product catalogs with varied attributes, real-time feeds, logs. PostgreSQL + Prisma for: financial transactions, order management systems, anything requiring ACID guarantees and complex joins. Prisma's type safety (every query result is fully typed) is its primary advantage. The transaction pattern is critical for financial operations — stock decrements and order creation must be atomic.",
      mistake:
        "Not adding database indexes for fields used in queries. Every field you filter, sort, or search on in production needs an index — otherwise MongoDB or PostgreSQL performs a full collection/table scan that becomes catastrophically slow as data grows. Check query performance with MongoDB's .explain('executionStats') or PostgreSQL's EXPLAIN ANALYZE. Index: every foreign key, every field in WHERE clauses, every field in ORDER BY, every field used in text search.",
    },
    {
      id: "middleware-validation",
      number: "4.4",
      title: "Middleware, Validation, and File Uploads",
      icon: "🔧",
      color: "purple",
      intro:
        "Express middleware is the backbone of request processing pipelines. Every request passes through a chain of middleware functions before reaching the route handler. Understanding how to write custom middleware, validate incoming data with Zod, handle file uploads with Multer, implement request logging, and build reusable middleware factories is what separates developers who know Express's API from those who can build production-grade APIs.",
      code: `// 1. CUSTOM MIDDLEWARE PATTERNS

// Request ID middleware — attach unique ID to every request for tracing
import { v4 as uuidv4 } from 'uuid';

export const requestId = (req: Request, res: Response, next: NextFunction) => {
  req.id = req.headers['x-request-id'] as string ?? uuidv4();
  res.setHeader('x-request-id', req.id);
  next();
};

// Async error wrapper — eliminates try/catch in every async route handler
export const asyncHandler = (fn: (req: Request, res: Response, next: NextFunction) => Promise<unknown>) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};
// Usage: router.get('/products', asyncHandler(getProducts))  — no try/catch needed in controller

// Resource ownership middleware — verify user owns the requested resource
export const checkOwnership = (Model: mongoose.Model<any>, field = 'userId') => {
  return asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const resource = await Model.findById(req.params.id);
    if (!resource) throw new AppError('Resource not found', 404);
    if (resource[field].toString() !== req.user!.id && req.user!.role !== 'admin') {
      throw new AppError('Not authorized to access this resource', 403);
    }
    req.resource = resource;  // Attach to request for use in controller
    next();
  });
};

// Cache middleware — Redis-based response caching
import { createClient } from 'redis';
const redis = createClient({ url: process.env.REDIS_URL });

export const cache = (ttlSeconds: number) => {
  return asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    if (req.method !== 'GET') return next();  // Only cache GET requests

    const key = \`cache:\${req.originalUrl}\`;
    const cached = await redis.get(key);
    if (cached) {
      res.setHeader('x-cache', 'HIT');
      return res.json(JSON.parse(cached));
    }

    // Override res.json to intercept and cache the response
    const originalJson = res.json.bind(res);
    res.json = (data: unknown) => {
      redis.setEx(key, ttlSeconds, JSON.stringify(data));
      res.setHeader('x-cache', 'MISS');
      return originalJson(data);
    };
    next();
  });
};
// Usage: router.get('/products', cache(300), asyncHandler(getProducts))  // Cache for 5 minutes

// 2. ZOD VALIDATION MIDDLEWARE
import { z, ZodSchema, ZodError } from 'zod';

type ValidateTarget = 'body' | 'query' | 'params';

export const validate = (schema: ZodSchema, target: ValidateTarget = 'body') => {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req[target]);
    if (!result.success) {
      const formatted = result.error.flatten();
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: formatted.fieldErrors,
      });
    }
    req[target] = result.data;  // Replace with parsed (and potentially transformed) data
    next();
  };
};

// COMMON ZOD SCHEMAS
const paginationSchema = z.object({
  page: z.coerce.number().int().positive().default(1),      // coerce: converts '1' string to number 1
  limit: z.coerce.number().int().positive().max(100).default(12),
  sort: z.enum(['newest', 'oldest', 'price-asc', 'price-desc']).default('newest'),
});

const mongoIdSchema = z.object({
  id: z.string().regex(/^[0-9a-fA-F]{24}$/, 'Invalid MongoDB ID'),
});

const createProductSchema = z.object({
  name: z.string().trim().min(2).max(200),
  description: z.string().trim().min(10).max(2000),
  price: z.number().positive().max(10_000_000),
  category: z.enum(['electronics', 'clothing', 'home', 'books', 'sports', 'other']),
  stock: z.number().int().nonnegative(),
  imageUrl: z.string().url().optional(),
});

// Usage:
router.get('/products', validate(paginationSchema, 'query'), asyncHandler(getProducts));
router.get('/products/:id', validate(mongoIdSchema, 'params'), asyncHandler(getProductById));
router.post('/products', authenticate, validate(createProductSchema), asyncHandler(createProduct));

// 3. FILE UPLOADS WITH MULTER + CLOUDINARY
import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Upload directly to Cloudinary (no local disk storage)
const cloudinaryStorage = new CloudinaryStorage({
  cloudinary,
  params: async (req, file) => ({
    folder: 'shopindia/products',
    allowed_formats: ['jpg', 'jpeg', 'png', 'webp'],
    transformation: [{ width: 800, height: 800, crop: 'limit', quality: 'auto:good' }],
  }),
});

const upload = multer({
  storage: cloudinaryStorage,
  limits: { fileSize: 5 * 1024 * 1024 },  // 5MB max
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
    if (!allowedTypes.includes(file.mimetype)) {
      return cb(new AppError('Only JPEG, PNG, and WebP images are allowed', 400));
    }
    cb(null, true);
  },
});

// Multi-file upload endpoint (product with up to 5 images)
router.post(
  '/products/:id/images',
  authenticate,
  authorize('seller', 'admin'),
  upload.array('images', 5),
  asyncHandler(async (req: Request, res: Response) => {
    const files = req.files as Express.Multer.File[];
    const imageUrls = files.map(f => (f as any).path);  // Cloudinary URL
    await ProductModel.findByIdAndUpdate(req.params.id, { $push: { images: { $each: imageUrls } } });
    res.json({ success: true, message: 'Images uploaded', data: imageUrls });
  })
);

// 4. API VERSIONING MIDDLEWARE
app.use('/api/v1', v1Router);
app.use('/api/v2', v2Router);

// Deprecation header for old versions
app.use('/api/v1', (req: Request, res: Response, next: NextFunction) => {
  res.setHeader('Deprecation', 'true');
  res.setHeader('Sunset', 'Sat, 31 Dec 2026 23:59:59 GMT');
  res.setHeader('Link', '</api/v2>; rel="successor-version"');
  next();
});`,
      usage:
        "The asyncHandler wrapper eliminates try/catch in every controller — all async errors propagate to the global error handler automatically. Validate query params (pagination, filters) separately from body params. The cache middleware pattern (override res.json) is a clean way to add Redis caching without touching controller code. File uploads go directly to Cloudinary — never store uploaded files on your server's disk in production (ephemeral in containers).",
      mistake:
        "Not validating query parameters and trusting user-provided page/limit values directly. Without validation, a client sending ?limit=1000000 will cause your database to return millions of rows, crashing your server. Zod's z.coerce.number() converts query string values (always strings) to numbers, and .max(100) caps the limit. Always validate and sanitize query parameters the same way you validate body parameters.",
    },
    {
      id: "real-time-nodejs",
      number: "4.5",
      title: "Real-Time Features — WebSockets and Socket.io",
      icon: "⚡",
      color: "yellow",
      intro:
        "Real-time features — live notifications, chat, order tracking, collaborative editing, live auction bids, sports score updates — are a core Node.js capability that distinguishes it from synchronous server runtimes. Socket.io is the standard Node.js library for WebSocket-based real-time communication, providing auto-reconnection, room management, event acknowledgments, and a fallback to long-polling for environments where WebSockets aren't available. Understanding Socket.io's room-based messaging pattern and how to integrate it with authentication is expected knowledge for any Node.js developer building consumer applications.",
      code: `// SOCKET.IO — COMPLETE REAL-TIME SETUP

// socket/index.ts — Socket.io server initialization
import { Server as HttpServer } from 'http';
import { Server as SocketServer, Socket } from 'socket.io';
import { verifyAccessToken } from '../utils/jwt';
import type { JwtPayload } from '../types/auth.types';

// Extend Socket to include authenticated user
interface AuthenticatedSocket extends Socket {
  user: JwtPayload;
}

export function initializeSocket(httpServer: HttpServer): SocketServer {
  const io = new SocketServer(httpServer, {
    cors: {
      origin: process.env.CORS_ORIGIN?.split(',') ?? ['http://localhost:3000'],
      credentials: true,
    },
    pingTimeout: 60000,    // Wait 60s for pong before disconnecting
    pingInterval: 25000,   // Send ping every 25s to keep connection alive
  });

  // AUTHENTICATION MIDDLEWARE — verify JWT before any socket event
  io.use((socket: any, next) => {
    const token = socket.handshake.auth.token ?? socket.handshake.headers.authorization?.split(' ')[1];
    if (!token) return next(new Error('Authentication required'));
    try {
      socket.user = verifyAccessToken(token);
      next();
    } catch {
      next(new Error('Invalid or expired token'));
    }
  });

  io.on('connection', (socket: AuthenticatedSocket | any) => {
    const s = socket as AuthenticatedSocket;
    console.log(\`User \${s.user.id} connected: \${s.id}\`);

    // Auto-join user-specific room on connection — for targeted notifications
    s.join(\`user:\${s.user.id}\`);

    // ── ORDER TRACKING ────────────────────────────────────────────
    s.on('order:track', async (orderId: string) => {
      const order = await OrderModel.findById(orderId);
      if (!order || order.userId.toString() !== s.user.id) {
        return s.emit('error', { message: 'Order not found or access denied' });
      }
      s.join(\`order:\${orderId}\`);  // Join room for this specific order
      s.emit('order:status', { orderId, status: order.status });
    });

    s.on('order:untrack', (orderId: string) => {
      s.leave(\`order:\${orderId}\`);
    });

    // ── CHAT / SUPPORT ────────────────────────────────────────────
    s.on('chat:join', (roomId: string) => {
      s.join(\`chat:\${roomId}\`);
      io.to(\`chat:\${roomId}\`).emit('chat:user-joined', { userId: s.user.id, name: s.user.email });
    });

    s.on('chat:message', async (data: { roomId: string; message: string }) => {
      const msg = await MessageModel.create({
        roomId: data.roomId,
        senderId: s.user.id,
        content: data.message,
      });
      // Broadcast to everyone in the room (including sender)
      io.to(\`chat:\${data.roomId}\`).emit('chat:message', {
        id: msg._id,
        senderId: s.user.id,
        content: msg.content,
        timestamp: msg.createdAt,
      });
    });

    // ── DELIVERY TRACKING ─────────────────────────────────────────
    // Delivery partner updates their location
    s.on('delivery:location', async (data: { orderId: string; lat: number; lng: number }) => {
      // Update location in Redis (fast, ephemeral) instead of MongoDB (persistent)
      await redis.setEx(\`delivery:\${data.orderId}:location\`, 300, JSON.stringify({ lat: data.lat, lng: data.lng }));
      // Broadcast to customer tracking this order
      io.to(\`order:\${data.orderId}\`).emit('delivery:location-update', { lat: data.lat, lng: data.lng });
    });

    s.on('disconnect', (reason: string) => {
      console.log(\`User \${s.user.id} disconnected: \${reason}\`);
    });
  });

  return io;
}

// server.ts — attach Socket.io to the same HTTP server as Express
import http from 'http';
const app = createApp();
const httpServer = http.createServer(app);
const io = initializeSocket(httpServer);

// Make io accessible in route handlers for server-initiated events
app.set('io', io);

// EMITTING FROM ROUTE HANDLERS (server-initiated events)
// When order status changes (from admin panel or automated system)
export const updateOrderStatus = asyncHandler(async (req: Request, res: Response) => {
  const order = await OrderService.updateStatus(req.params.id, req.body.status);

  // Emit to the order's specific room — all tracking clients receive this
  const io: SocketServer = req.app.get('io');
  io.to(\`order:\${order._id}\`).emit('order:status', { orderId: order._id, status: order.status });

  // Also send a push notification to the user's personal room
  io.to(\`user:\${order.userId}\`).emit('notification', {
    type: 'order-update',
    title: 'Order Update',
    message: \`Your order #\${order._id} is now \${order.status}\`,
    orderId: order._id,
  });

  res.json({ success: true, message: 'Status updated', data: order });
});

// CLIENT-SIDE USAGE (React)
// import { io } from 'socket.io-client';
// const socket = io('http://localhost:5000', { auth: { token: localStorage.getItem('accessToken') } });
// socket.on('order:status', ({ status }) => setOrderStatus(status));
// socket.emit('order:track', orderId);`,
      usage:
        "Socket.io rooms are the key pattern — join users to user-specific rooms (user:userId) on connection, order rooms (order:orderId) when they start tracking. Emit from route handlers when server-side events occur (payment confirmed → emit order status). Use Redis adapter (@socket.io/redis-adapter) when scaling to multiple Node.js processes — allows any process to emit to any room regardless of which process the client connected to.",
      mistake:
        "Not authenticating Socket.io connections. By default, Socket.io accepts any connection. Without the authentication middleware (io.use()), any client can join any room and receive any event. The authentication middleware (io.use) runs once per connection and is the correct place to verify the JWT token — not inside each event handler. Reject unauthenticated connections before they reach the event handlers.",
    },
    {
      id: "nestjs",
      number: "4.6",
      title: "NestJS — Enterprise-Grade Node.js Framework",
      icon: "🏗️",
      color: "red",
      intro:
        "NestJS is a progressive Node.js framework built with TypeScript that uses decorators, modules, dependency injection, and an opinionated project structure inspired by Angular. Where Express gives you a blank canvas, NestJS gives you a complete architecture: modules for feature organization, decorators for routing and validation (@Controller, @Get, @Post, @Body, @Param), providers for dependency injection (@Injectable), guards for authentication, interceptors for response transformation, and pipes for input validation. In 2026, NestJS is the standard framework for enterprise Node.js development — IT services companies, large fintech platforms, and any team that values consistency and maintainability at scale.",
      code: `// NESTJS — COMPLETE FEATURE MODULE (Products)

// products/dto/create-product.dto.ts — Data Transfer Object with validation
import { IsString, IsNumber, IsEnum, IsOptional, IsUrl, Min, Max, MinLength, MaxLength } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateProductDto {
  @IsString()
  @MinLength(2)
  @MaxLength(200)
  name: string;

  @IsString()
  @MinLength(10)
  @MaxLength(2000)
  description: string;

  @IsNumber()
  @Min(0)
  @Transform(({ value }) => Number(value))  // Auto-transform string to number
  price: number;

  @IsEnum(['electronics', 'clothing', 'home', 'books', 'sports', 'other'])
  category: string;

  @IsNumber()
  @Min(0)
  @Transform(({ value }) => Number(value))
  stock: number;

  @IsOptional()
  @IsUrl()
  imageUrl?: string;
}

// products/products.service.ts — Business logic with dependency injection
import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async findAll(filters: { category?: string; page: number; limit: number }) {
    const qb = this.productRepository.createQueryBuilder('product')
      .leftJoinAndSelect('product.seller', 'seller')
      .where('product.isActive = :isActive', { isActive: true });

    if (filters.category) {
      qb.andWhere('product.category = :category', { category: filters.category });
    }

    const [products, total] = await qb
      .orderBy('product.createdAt', 'DESC')
      .skip((filters.page - 1) * filters.limit)
      .take(filters.limit)
      .getManyAndCount();

    return { products, total, page: filters.page, pages: Math.ceil(total / filters.limit) };
  }

  async findOne(id: string): Promise<Product> {
    const product = await this.productRepository.findOne({
      where: { id, isActive: true },
      relations: ['seller'],
    });
    if (!product) throw new NotFoundException(\`Product #\${id} not found\`);
    return product;
  }

  async create(dto: CreateProductDto, sellerId: string): Promise<Product> {
    const product = this.productRepository.create({ ...dto, sellerId });
    return this.productRepository.save(product);
  }

  async update(id: string, dto: Partial<CreateProductDto>, userId: string): Promise<Product> {
    const product = await this.findOne(id);
    if (product.sellerId !== userId) throw new ForbiddenException('Not authorized');
    Object.assign(product, dto);
    return this.productRepository.save(product);
  }
}

// products/products.controller.ts — HTTP layer with decorators
import {
  Controller, Get, Post, Patch, Delete, Param, Body, Query,
  UseGuards, Request, HttpCode, HttpStatus, ParseUUIDPipe,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('products')  // All routes prefixed with /products
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async findAll(
    @Query('category') category?: string,
    @Query('page') page = '1',
    @Query('limit') limit = '12',
  ) {
    return this.productsService.findAll({ category, page: +page, limit: Math.min(+limit, 100) });
  }

  @Get(':id')
  async findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.productsService.findOne(id);
  }

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('seller', 'admin')
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() dto: CreateProductDto, @Request() req: any) {
    return this.productsService.create(dto, req.user.id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: Partial<CreateProductDto>,
    @Request() req: any,
  ) {
    return this.productsService.update(id, dto, req.user.id);
  }
}

// products/products.module.ts — Feature module bundles all related providers
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],  // Register Product entity for this module
  controllers: [ProductsController],
  providers: [ProductsService],
  exports: [ProductsService],  // Export for use in other modules (e.g., OrdersModule)
})
export class ProductsModule {}

// app.module.ts — Root module wires everything together
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        url: config.get('DATABASE_URL'),
        autoLoadEntities: true,
        synchronize: config.get('NODE_ENV') !== 'production',  // Sync only in dev
        ssl: config.get('NODE_ENV') === 'production' ? { rejectUnauthorized: false } : false,
      }),
      inject: [ConfigService],
    }),
    ThrottlerModule.forRoot([{ ttl: 60000, limit: 100 }]),  // Rate limiting
    ProductsModule,
    UsersModule,
    AuthModule,
    OrdersModule,
  ],
})
export class AppModule {}

// main.ts — bootstrap NestJS application
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/v1');

  // Global validation pipe — transforms and validates all DTOs automatically
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,          // Strip unknown properties from request body
    forbidNonWhitelisted: true, // Throw error if unknown properties sent
    transform: true,          // Auto-transform primitives (string to number)
    transformOptions: { enableImplicitConversion: true },
  }));

  // Swagger API documentation — auto-generated from decorators
  const config = new DocumentBuilder()
    .setTitle('ShopIndia API')
    .setDescription('E-commerce platform REST API documentation')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(process.env.PORT ?? 5000);
  console.log(\`Application running on: \${await app.getUrl()}\`);
}
bootstrap();`,
      usage:
        "NestJS's module system maps perfectly to team organization — each feature module (ProductsModule, OrdersModule, AuthModule) can be owned by a separate developer or team. The dependency injection container makes testing trivial — replace real services with mock providers in the test module. The automatic Swagger documentation from decorators eliminates manual API documentation maintenance. Use NestJS for any project with 5+ developers or 20+ API endpoints where consistency and discoverability matter.",
      mistake:
        "Making services call other services across modules without going through the module's exports. NestJS modules define explicit public APIs via exports — a ProductsService used by OrdersModule must be exported from ProductsModule and imported in OrdersModule. Bypassing this by directly instantiating services breaks the DI container's lifecycle management and makes the module boundary invisible. Respect the module system — it exists to enforce architectural boundaries.",
    },
    {
      id: "nodejs-testing",
      number: "4.7",
      title: "Testing Node.js APIs — Jest, Supertest, and Integration Tests",
      icon: "🧪",
      color: "teal",
      intro:
        "Testing a Node.js API has three levels: unit tests for services and utility functions (pure logic, no database), integration tests for route handlers with a real test database (the most valuable test type for APIs), and end-to-end tests for critical flows. The Node.js testing stack in 2026 is: Jest (or Vitest) as the test runner, Supertest for HTTP integration tests, an in-memory MongoDB (mongodb-memory-server) or a separate test PostgreSQL database for database tests, and careful use of mocks for external services (Stripe, Razorpay, email). Writing tests is the professional differentiator — Node.js developers who test are hired at product companies.",
      code: `// NODE.JS API TESTING — complete test patterns

// test/setup.ts — global test configuration
import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';

let mongod: MongoMemoryServer;

beforeAll(async () => {
  mongod = await MongoMemoryServer.create();
  await mongoose.connect(mongod.getUri());
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await mongod.stop();
});

afterEach(async () => {
  // Clear all collections between tests — clean state for each test
  const collections = mongoose.connection.collections;
  for (const key in collections) {
    await collections[key].deleteMany({});
  }
});

// test/helpers.ts — test utility functions
import request from 'supertest';
import { createApp } from '../src/app';
import { UserModel } from '../src/models/user.model';
import { signAccessToken } from '../src/utils/jwt';

export const app = createApp();  // Real Express app, no HTTP server

export async function createTestUser(overrides: Partial<IUser> = {}) {
  return UserModel.create({
    name: 'Test User',
    email: 'test@example.com',
    password: 'Password123!',
    role: 'user',
    ...overrides,
  });
}

export function getAuthHeader(user: IUser) {
  const token = signAccessToken({ id: user._id.toString(), email: user.email, role: user.role });
  return { Authorization: \`Bearer \${token}\` };
}

export async function createAuthenticatedUser(role = 'user') {
  const user = await createTestUser({ role });
  const headers = getAuthHeader(user);
  return { user, headers };
}

// ── UNIT TESTS — pure business logic ─────────────────────────────
// tests/services/auth.service.test.ts
describe('AuthService', () => {
  let authService: AuthService;

  beforeEach(() => { authService = new AuthService(); });

  describe('register', () => {
    it('should create a new user with hashed password', async () => {
      const result = await authService.register({
        name: 'Arjun Kumar',
        email: 'arjun@test.com',
        password: 'SecurePass123!',
      });

      expect(result.user.email).toBe('arjun@test.com');
      expect(result.accessToken).toBeDefined();
      expect(result.refreshToken).toBeDefined();

      // Verify password is hashed in DB — never store plain text
      const dbUser = await UserModel.findById(result.user.id).select('+password');
      expect(dbUser!.password).not.toBe('SecurePass123!');
      expect(dbUser!.password).toMatch(/^\$2[ayb]\$.{56}$/);  // bcrypt format
    });

    it('should throw AppError if email already exists', async () => {
      await createTestUser({ email: 'arjun@test.com' });
      await expect(
        authService.register({ name: 'Arjun', email: 'arjun@test.com', password: 'Pass123!' })
      ).rejects.toThrow(new AppError('Email already registered', 400));
    });
  });

  describe('login', () => {
    it('should return tokens for valid credentials', async () => {
      await createTestUser({ email: 'test@test.com', password: 'Pass123!' });
      const result = await authService.login('test@test.com', 'Pass123!');
      expect(result.accessToken).toBeDefined();
    });

    it('should throw for invalid password', async () => {
      await createTestUser({ email: 'test@test.com' });
      await expect(authService.login('test@test.com', 'WrongPass!')).rejects.toThrow('Invalid email or password');
    });

    it('should throw generic message (not reveal which field is wrong)', async () => {
      await expect(authService.login('nouser@test.com', 'any')).rejects.toThrow('Invalid email or password');
      // Same message whether email OR password is wrong — prevents email enumeration
    });
  });
});

// ── INTEGRATION TESTS — HTTP routes with real DB ─────────────────
// tests/integration/products.test.ts
describe('Products API', () => {
  describe('GET /api/v1/products', () => {
    beforeEach(async () => {
      const { user } = await createAuthenticatedUser('seller');
      await ProductModel.create([
        { name: 'iPhone 15', category: 'electronics', price: 79999, stock: 10, sellerId: user._id },
        { name: 'Samsung S24', category: 'electronics', price: 69999, stock: 5, sellerId: user._id },
        { name: 'Running Shoes', category: 'sports', price: 3999, stock: 50, sellerId: user._id },
      ]);
    });

    it('should return paginated product list', async () => {
      const res = await request(app).get('/api/v1/products').expect(200);

      expect(res.body.success).toBe(true);
      expect(res.body.data).toHaveLength(3);
      expect(res.body.pagination.total).toBe(3);
    });

    it('should filter by category', async () => {
      const res = await request(app).get('/api/v1/products?category=electronics').expect(200);
      expect(res.body.data).toHaveLength(2);
      res.body.data.forEach((p: Product) => expect(p.category).toBe('electronics'));
    });

    it('should respect pagination', async () => {
      const res = await request(app).get('/api/v1/products?page=1&limit=2').expect(200);
      expect(res.body.data).toHaveLength(2);
      expect(res.body.pagination.pages).toBe(2);
    });
  });

  describe('POST /api/v1/products', () => {
    const validProduct = { name: 'Test Product', description: 'A test product desc', price: 999, category: 'electronics', stock: 10 };

    it('should create product for authenticated seller', async () => {
      const { headers } = await createAuthenticatedUser('seller');
      const res = await request(app).post('/api/v1/products').set(headers).send(validProduct).expect(201);
      expect(res.body.data.name).toBe('Test Product');
    });

    it('should return 401 for unauthenticated request', async () => {
      await request(app).post('/api/v1/products').send(validProduct).expect(401);
    });

    it('should return 403 for user without seller role', async () => {
      const { headers } = await createAuthenticatedUser('user');
      await request(app).post('/api/v1/products').set(headers).send(validProduct).expect(403);
    });

    it('should return 400 for invalid product data', async () => {
      const { headers } = await createAuthenticatedUser('seller');
      const res = await request(app).post('/api/v1/products').set(headers)
        .send({ ...validProduct, price: -100 }).expect(400);
      expect(res.body.success).toBe(false);
      expect(res.body.errors.price).toBeDefined();
    });
  });
});

// ── MOCKING EXTERNAL SERVICES ────────────────────────────────────
// tests/mocks/razorpay.mock.ts
jest.mock('razorpay', () => {
  return jest.fn().mockImplementation(() => ({
    orders: {
      create: jest.fn().mockResolvedValue({ id: 'order_test123', amount: 99900, currency: 'INR' }),
    },
    payments: {
      fetch: jest.fn().mockResolvedValue({ id: 'pay_test123', status: 'captured' }),
    },
  }));
});

// tests/integration/orders.test.ts — test order creation with mocked payment
describe('Orders API', () => {
  it('should create order and Razorpay order', async () => {
    const { headers } = await createAuthenticatedUser();
    const res = await request(app)
      .post('/api/v1/orders')
      .set(headers)
      .send({ items: [{ productId: testProductId, quantity: 1 }], shippingAddress: testAddress })
      .expect(201);

    expect(res.body.data.razorpayOrderId).toBe('order_test123');
  });
});`,
      usage:
        "Integration tests (HTTP route tests with Supertest + mongodb-memory-server) are the highest-value tests for an API — they test the actual HTTP layer, middleware, database interactions, and response shapes together. Run them in CI on every pull request. Unit test services that contain complex business logic (price calculations, discount rules, validation logic). Mock all external services (Stripe, Razorpay, SendGrid) in tests — never call real payment APIs in test suites.",
      mistake:
        "Writing integration tests against a shared development database instead of an isolated test database. Tests that share state produce flaky results — a test that checks for 0 products fails if another test left products in the database. mongodb-memory-server spins up a real in-memory MongoDB instance for tests, and clearing collections in afterEach ensures perfect test isolation. Always use a separate test database or in-memory database for tests.",
    },
    {
      id: "nodejs-performance",
      number: "4.8",
      title: "Performance, Caching, and Production Optimization",
      icon: "🚀",
      color: "orange",
      intro:
        "Node.js performance in production requires understanding both the runtime's characteristics (single-threaded, non-blocking, event loop) and the application-level patterns that maximize throughput. The most impactful performance improvements come in this order: correct database indexing (often 100x improvement), Redis caching for repeated queries (10x), connection pooling (5x), and clustering for CPU-bound work (Nx where N is CPU cores). Understanding how to profile a Node.js application, identify bottlenecks, and apply the correct solution is a senior-level skill that directly affects business metrics.",
      code: `// NODE.JS PERFORMANCE TOOLKIT

// 1. REDIS CACHING — the highest-impact single optimization
import { createClient, RedisClientType } from 'redis';

class CacheService {
  private client: RedisClientType;

  constructor() {
    this.client = createClient({ url: process.env.REDIS_URL }) as RedisClientType;
    this.client.on('error', err => console.error('Redis error:', err));
    this.client.connect();
  }

  async get<T>(key: string): Promise<T | null> {
    const value = await this.client.get(key);
    return value ? JSON.parse(value) : null;
  }

  async set(key: string, value: unknown, ttlSeconds: number): Promise<void> {
    await this.client.setEx(key, ttlSeconds, JSON.stringify(value));
  }

  async del(key: string): Promise<void> { await this.client.del(key); }

  async delByPattern(pattern: string): Promise<void> {
    const keys = await this.client.keys(pattern);
    if (keys.length) await this.client.del(keys);
  }
}

export const cache = new CacheService();

// Cache-aside pattern in service layer
export class ProductService {
  async getAll(filters: ProductFilters) {
    const cacheKey = \`products:\${JSON.stringify(filters)}\`;
    const cached = await cache.get<ProductListResult>(cacheKey);
    if (cached) return cached;  // Cache hit — returns in <1ms vs 50ms DB query

    const result = await this.queryDatabase(filters);  // Cache miss — query DB

    await cache.set(cacheKey, result, 300);  // Cache for 5 minutes
    return result;
  }

  async create(data: CreateProductDto, sellerId: string) {
    const product = await ProductModel.create({ ...data, sellerId });
    await cache.delByPattern('products:*');  // Bust all product list caches on new product
    return product;
  }
}

// 2. DATABASE CONNECTION POOLING — reuse connections instead of creating new ones
// Mongoose connection pool (already handles this with maxPoolSize)
await mongoose.connect(MONGO_URI, { maxPoolSize: 10, minPoolSize: 2 });

// PostgreSQL with pg (raw) — explicit pool
import { Pool } from 'pg';
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: 20,              // Maximum connections in pool
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

// Prisma — manages its own connection pool
// Set pool size via connection string: postgresql://user:pass@host:5432/db?connection_limit=10

// 3. CLUSTERING — utilize all CPU cores (Node.js is single-threaded per process)
import cluster from 'cluster';
import os from 'os';

if (cluster.isPrimary) {
  const numCPUs = os.cpus().length;
  console.log(\`Master process \${process.pid} spawning \${numCPUs} workers\`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code) => {
    console.log(\`Worker \${worker.process.pid} died with code \${code}. Restarting...\`);
    cluster.fork();  // Auto-restart crashed workers
  });
} else {
  // Worker process — start the actual Express server
  const { createApp } = await import('./app');
  const app = createApp();
  app.listen(process.env.PORT ?? 5000, () => {
    console.log(\`Worker \${process.pid} listening on port \${process.env.PORT ?? 5000}\`);
  });
}
// Note: In production, use PM2 (pm2 start dist/server.js -i max) instead of manual clustering

// 4. WORKER THREADS — CPU-intensive tasks off the main thread
import { Worker, isMainThread, parentPort, workerData } from 'worker_threads';
import path from 'path';

// CPU-intensive task that would block the event loop for 500ms+
async function generateProductReport(productIds: string[]): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const worker = new Worker(path.join(__dirname, 'workers/pdf-generator.worker.js'), {
      workerData: { productIds },
    });
    worker.on('message', (pdfBuffer: Buffer) => resolve(pdfBuffer));
    worker.on('error', reject);
    worker.on('exit', code => { if (code !== 0) reject(new Error(\`Worker exited with code \${code}\`)); });
  });
}

// workers/pdf-generator.worker.js — runs in separate thread
if (!isMainThread) {
  const { productIds } = workerData;
  // Do heavy PDF generation work here — doesn't block main thread event loop
  const products = await fetchProducts(productIds);
  const pdfBuffer = await generatePDF(products);
  parentPort!.postMessage(pdfBuffer);
}

// 5. STREAMING — handle large data without loading everything into memory
import { pipeline } from 'stream/promises';
import { createReadStream, createWriteStream } from 'fs';

// Stream a large CSV export — handles 1 million rows without memory issues
router.get('/admin/products/export', authenticate, authorize('admin'), async (req, res) => {
  res.setHeader('Content-Type', 'text/csv');
  res.setHeader('Content-Disposition', 'attachment; filename="products.csv"');

  const cursor = ProductModel.find({ isActive: true }).lean().cursor();  // MongoDB cursor
  res.write('id,name,price,category,stock\n');

  for await (const product of cursor) {
    res.write(\`\${product._id},"\${product.name}",\${product.price},\${product.category},\${product.stock}\n\`);
  }
  res.end();
  // Memory usage: O(1) regardless of dataset size — each document is processed and released
});

// 6. ENVIRONMENT-SPECIFIC CONFIGURATION
// config/index.ts — centralized, validated config
import { z } from 'zod';

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  PORT: z.coerce.number().default(5000),
  MONGODB_URI: z.string().url(),
  JWT_SECRET: z.string().min(32),
  JWT_REFRESH_SECRET: z.string().min(32),
  REDIS_URL: z.string().url().optional(),
  RAZORPAY_KEY_ID: z.string().optional(),
  RAZORPAY_KEY_SECRET: z.string().optional(),
  CLOUDINARY_CLOUD_NAME: z.string().optional(),
  FRONTEND_URL: z.string().url().default('http://localhost:3000'),
});

const parsed = envSchema.safeParse(process.env);
if (!parsed.success) {
  console.error('Invalid environment variables:', parsed.error.flatten().fieldErrors);
  process.exit(1);  // Fail fast — don't start with invalid config
}

export const config = parsed.data;`,
      usage:
        "Profile before optimizing — use Node.js's built-in --prof flag or clinic.js to identify actual bottlenecks. Most Node.js performance issues are database-related (missing indexes, N+1 queries) and are solved at the database layer, not the Node.js layer. Redis caching is the single most impactful application-level optimization. Use PM2 in production instead of node directly — it provides clustering, auto-restart, log management, and monitoring.",
      mistake:
        "Running CPU-intensive operations (PDF generation, image processing, large CSV parsing, bcrypt with too-high salt rounds) synchronously on the main thread. A single synchronous operation that takes 500ms blocks every incoming request for 500ms — at 100 req/s, each request is delayed by up to 50 seconds. Move CPU-intensive work to Worker Threads, offload to external services (Cloudinary for image processing), or use async libraries that use libuv's thread pool (bcrypt already does this correctly).",
    },
    {
      id: "nodejs-deployment",
      number: "4.9",
      title: "Deployment, Docker, and Production Infrastructure",
      icon: "🐳",
      color: "blue",
      intro:
        "Deploying a Node.js API to production involves containerizing with Docker, configuring environment variables securely, setting up a reverse proxy (nginx), enabling HTTPS, configuring process management (PM2), and establishing CI/CD pipelines. Understanding this deployment pipeline — from git push to live production API — is the difference between a developer who can build APIs and a developer who can own them in production. In 2026, Docker is non-negotiable knowledge for any backend developer targeting product companies or senior roles.",
      code: `// COMPLETE PRODUCTION DEPLOYMENT SETUP

// 1. DOCKERFILE — multi-stage build for minimal production image
# Build stage
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci                           # ci: uses package-lock.json exactly (faster, reproducible)
COPY . .
RUN npm run build                    # TypeScript compilation: tsc → dist/

# Production stage — only runtime dependencies, no build tools
FROM node:20-alpine AS production
WORKDIR /app
ENV NODE_ENV=production

# Create non-root user for security
RUN addgroup --system --gid 1001 nodejs && adduser --system --uid 1001 nodeuser

COPY package*.json ./
RUN npm ci --only=production && npm cache clean --force  # Production deps only

COPY --from=builder /app/dist ./dist   # Copy compiled JS from builder
COPY --from=builder /app/prisma ./prisma  # Prisma schema (if using Prisma)

RUN chown -R nodeuser:nodejs /app
USER nodeuser                          # Run as non-root

EXPOSE 5000
HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \\
  CMD wget -qO- http://localhost:5000/health || exit 1

CMD ["node", "dist/server.js"]

# Result: ~150MB image (vs 1GB+ without multi-stage and Alpine)

// 2. DOCKER COMPOSE — local development environment
# docker-compose.yml
version: '3.9'
services:
  api:
    build: .
    ports:
      - '5000:5000'
    environment:
      - NODE_ENV=development
      - MONGODB_URI=mongodb://mongo:27017/shopindia
      - REDIS_URL=redis://redis:6379
    env_file: .env
    depends_on:
      mongo:
        condition: service_healthy
      redis:
        condition: service_healthy
    volumes:
      - ./src:/app/src              # Hot reload in development
    command: npm run dev

  mongo:
    image: mongo:7
    ports:
      - '27017:27017'
    volumes:
      - mongo_data:/data/db
    healthcheck:
      test: ['CMD', 'mongosh', '--eval', 'db.adminCommand("ping")']
      interval: 10s
      timeout: 5s
      retries: 5

  redis:
    image: redis:7-alpine
    ports:
      - '6379:6379'
    volumes:
      - redis_data:/data
    healthcheck:
      test: ['CMD', 'redis-cli', 'ping']
      interval: 10s

  mongo-express:            # MongoDB admin UI for development
    image: mongo-express
    ports:
      - '8081:8081'
    environment:
      - ME_CONFIG_MONGODB_SERVER=mongo
    depends_on:
      - mongo

volumes:
  mongo_data:
  redis_data:

// 3. GITHUB ACTIONS CI/CD
# .github/workflows/deploy.yml
name: CI/CD Pipeline

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    services:
      mongodb:
        image: mongo:7
        ports:
          - 27017:27017

    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: '20', cache: 'npm' }
      - run: npm ci
      - run: npm run lint
      - run: npm run type-check           # tsc --noEmit — TypeScript errors fail the build
      - run: npm test
        env:
          MONGODB_URI: mongodb://localhost:27017/test
          JWT_SECRET: test-secret-32-chars-minimum-here
          JWT_REFRESH_SECRET: test-refresh-secret-32-chars-here
      - name: Upload coverage
        uses: codecov/codecov-action@v3
        if: success()

  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main' && github.event_name == 'push'

    steps:
      - uses: actions/checkout@v4

      - name: Build and push Docker image
        uses: docker/build-push-action@v5
        with:
          context: .
          push: true
          tags: ghcr.io/ github.repository:latest
          cache-from: type=registry,ref=ghcr.io/ github.repository :buildcache
          cache-to: type=registry,ref=ghcr.io/ github.repository:buildcache,mode=max

      - name: Deploy to Railway/Render
        run: curl -X POST " secrets.DEPLOY_WEBHOOK_URL "
        # Or deploy to DigitalOcean, AWS ECS, GCP Cloud Run

// 4. PM2 ECOSYSTEM FILE — process management in production
# ecosystem.config.js
module.exports = {
  apps: [{
    name: 'shopindia-api',
    script: 'dist/server.js',
    instances: 'max',             // Use all CPU cores
    exec_mode: 'cluster',
    watch: false,
    max_memory_restart: '500M',   // Restart if memory exceeds 500MB
    env: { NODE_ENV: 'production', PORT: 5000 },
    error_file: 'logs/err.log',
    out_file: 'logs/out.log',
    log_file: 'logs/combined.log',
    time: true,
  }],
};
# pm2 start ecosystem.config.js
# pm2 monit          — real-time dashboard
# pm2 logs           — tail logs
# pm2 reload all     — zero-downtime reload

// 5. ENVIRONMENT VARIABLES — .env structure
# .env.example (committed)
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/shopindia
REDIS_URL=redis://localhost:6379
JWT_SECRET=                    # Min 32 chars — generate: openssl rand -hex 32
JWT_REFRESH_SECRET=            # Different from JWT_SECRET
RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
SMTP_HOST=smtp.resend.com
SMTP_PORT=465
SMTP_USER=resend
SMTP_PASS=
FRONTEND_URL=http://localhost:3000
SENTRY_DSN=                    # Error tracking`,
      usage:
        "Multi-stage Docker builds reduce image size by 80–90% — the builder stage has all dev dependencies and TypeScript compiler; the production stage has only compiled JS and production dependencies. Always run Node.js containers as non-root users. Use Railway, Render, or DigitalOcean App Platform for the fastest path to production — they support Docker images and have free tiers. Use PM2 for bare-metal or VPS deployments.",
      mistake:
        "Committing .env files with real secrets to git. Once a secret is in git history, it must be considered compromised — even after deletion, git history reveals it. Use .gitignore to exclude .env, use .env.example as a template with empty values, and manage production secrets through your deployment platform's environment variable system (Railway, Render, AWS Secrets Manager, or GitHub Actions secrets). Validate all required environment variables at startup (Zod schema) to fail fast rather than failing mysteriously mid-request.",
    },
  ],

  // ── SECTION 5: PREREQUISITES ─────────────────────────────────────
  prerequisites: [
    { item: "JavaScript (ES6+)", done: false, note: "The most critical prerequisite — Node.js runs JavaScript", detail: "Arrow functions, destructuring, spread/rest, Promises and async/await, array methods (map/filter/reduce), ES6 modules (import/export), classes, optional chaining. Every Node.js API pattern — route handlers, middleware, service methods — is a JavaScript function. Weak JavaScript is the single biggest obstacle to learning Node.js." },
    { item: "Asynchronous JavaScript (Promises, async/await)", done: false, note: "Node.js's non-blocking I/O model is fundamentally async — this is non-negotiable", detail: "Understand the difference between synchronous and asynchronous code, how Promises work (resolve, reject, .then/.catch), what async/await is syntactic sugar for, and why you can't just call a function and immediately use its return value when it's async. Every database query, file read, and HTTP call in Node.js is async." },
    { item: "HTTP and REST API Concepts", done: false, note: "You're building HTTP servers — you need to understand HTTP", detail: "HTTP methods (GET/POST/PUT/PATCH/DELETE), status codes (200/201/400/401/403/404/500), request headers (Content-Type, Authorization, Accept), JSON format, URL structure (path, query params, path params). Use Postman to interact with existing APIs before building your own — this builds intuition for what a well-designed REST API looks like." },
    { item: "TypeScript Basics", done: false, note: "All professional Node.js projects use TypeScript — learn it before or alongside Node.js", detail: "Types, interfaces, classes, generics, decorators (for NestJS), type assertions. TypeScript in Node.js provides autocomplete for database query results, typed route handlers, and compile-time errors for wrong property names. The investment is worth it — untyped Node.js codebases at scale are maintenance nightmares." },
    { item: "Database Basics", done: false, note: "Node.js APIs almost always read from and write to a database", detail: "Understand what a database is, the difference between SQL (tables, rows, relationships, JOINs) and NoSQL (collections, documents), and basic CRUD operations. You'll use MongoDB or PostgreSQL — understanding at least one before adding an ORM (Mongoose, Prisma) reduces confusion about what the ORM is abstracting." },
    { item: "Command Line / Terminal", done: true, note: "Node.js development happens entirely in the terminal", detail: "Navigate directories (cd, ls/dir), create files (touch/New-Item), run commands (npm install, npm run dev), understand exit codes. Every npm script, Docker command, git operation, and server deployment happens via the terminal. Comfort here compounds across your entire career." },
    { item: "Git and Version Control", done: true, note: "For tracking changes and deploying via CI/CD (GitHub Actions)", detail: "git init, add, commit, push, pull, branching, .gitignore (include node_modules, .env, dist). CI/CD pipelines deploy your Node.js API automatically on git push — understanding Git is part of the deployment workflow." },
    { item: "Postman or REST Client", done: true, note: "For testing your API endpoints while building them", detail: "You'll use Postman to send HTTP requests to your Node.js API before writing frontend code. Learn: setting request method and URL, sending JSON bodies (Content-Type: application/json), adding Authorization headers (Bearer token), and saving requests in collections. This is how you develop and debug your API in isolation." },
    { item: "Node.js and npm basics", done: false, note: "Understanding what Node.js is and how npm manages packages", detail: "Install Node.js 20+ LTS. Understand package.json (name, version, scripts, dependencies, devDependencies), node_modules, npm install, npm run dev, npm run build. Know what process.env is (how Node.js reads environment variables) and what require/import does in Node.js context." },
    { item: "Basic Linux / Shell Commands", done: false, note: "Server deployment happens on Linux servers — basic shell knowledge is required", detail: "File permissions (chmod), process management (ps aux, kill), environment variables (export, printenv), package management (apt), SSH (ssh user@host). You don't need to be a Linux expert, but you need to not be confused by a terminal session on an Ubuntu server." },
  ],

  // ── SECTION 6: ROADMAP ───────────────────────────────────────────
  roadmap: [
    {
      phase: "Beginner",
      label: "01",
      duration: "Weeks 1–5",
      color: "emerald",
      topics: [
        "JavaScript async/await review — Promises, async functions, error handling, Promise.all",
        "Node.js runtime — what Node.js is, V8 engine, event loop concept, process object",
        "Node.js built-in modules — http, fs, path, os, crypto, events, stream",
        "npm ecosystem — package.json, npm install, devDependencies, scripts, semantic versioning",
        "Express.js basics — app.use(), app.get/post/put/delete, req, res, next",
        "Route parameters — req.params, req.query, req.body (with express.json())",
        "Middleware concept — what middleware is, writing custom middleware, middleware order",
        "Error handling in Express — try/catch in routes, error-handling middleware (4 params)",
        "Environment variables — dotenv, process.env, .env file, .gitignore",
        "MongoDB basics — collections, documents, CRUD in MongoDB Shell",
        "Mongoose fundamentals — Schema, Model, create, findOne, findById, find, save, deleteOne",
        "REST API design — resource naming conventions, HTTP methods, status codes, response structure",
        "CORS — what it is, why it matters, cors middleware configuration",
        "Postman — testing GET, POST, PUT, DELETE requests, setting headers, saving collections",
      ],
      buildProjects: [
        "Notes API: CRUD endpoints for notes (create, read all, read one, update, delete) with MongoDB + Mongoose, no auth, Postman tested",
        "URL Shortener: POST to create short URL, GET to redirect. MongoDB stores original/short URL pair. Returns analytics (hit count).",
        "Todo API with categories: Multiple MongoDB collections (todos, categories), populate() for references, filter by category and status",
      ],
    },
    {
      phase: "Intermediate",
      label: "02",
      duration: "Weeks 6–14",
      color: "primary",
      topics: [
        "TypeScript in Node.js — ts-node, tsc, tsconfig.json, typing Express req/res, DTO interfaces",
        "JWT authentication — jsonwebtoken, bcryptjs, sign, verify, access + refresh token pattern",
        "Authentication middleware — Bearer token extraction, token verification, req.user attachment",
        "Role-based access control — authorize() middleware factory, route-level role checking",
        "Input validation with Zod — schema definitions, safeParse, validate middleware, query validation",
        "Service layer pattern — separate business logic from controllers, AppError class",
        "Advanced Mongoose — virtuals, instance/static methods, pre/post hooks, populate(), lean()",
        "Mongoose aggregation pipeline — $match, $group, $lookup, $project, $sort",
        "File uploads — Multer, Cloudinary integration, multer-storage-cloudinary, file type validation",
        "Email service — Nodemailer, Resend, email templates with Handlebars, password reset flow",
        "Payment integration — Razorpay Node.js SDK, order creation, payment verification, webhooks",
        "Redis basics — get, set, setEx, del, keys patterns — via ioredis or node-redis",
        "Pagination patterns — skip/limit, cursor-based pagination, total count optimization",
        "API testing — Jest + Supertest, mongodb-memory-server, test factories, mocking external services",
      ],
      buildProjects: [
        "Full Auth API: Register, login, refresh tokens, logout, forgot/reset password via email, profile update, role-based routes",
        "E-Commerce REST API: Products (CRUD + search/filter/pagination), orders (with stock management transaction), Razorpay payment, Cloudinary image uploads",
        "Blog Platform API: Posts, comments (nested), tags, categories, rich search, email notifications on new comments, Redis caching for popular posts",
        "Task Management API: Projects, tasks with subtasks, team members, file attachments, activity log, WebSocket notifications for task updates",
      ],
    },
    {
      phase: "Advanced",
      label: "03",
      duration: "Weeks 15–26+",
      color: "purple",
      topics: [
        "NestJS — modules, controllers, services, providers, guards, interceptors, pipes, decorators",
        "NestJS with TypeORM or Prisma — entity definitions, repository pattern, migrations",
        "GraphQL with Apollo Server or Mercurius — schema, resolvers, mutations, subscriptions, DataLoader",
        "Socket.io advanced — rooms, namespaces, Redis adapter for multi-process scaling, acknowledgments",
        "Message queues — BullMQ (Redis-based) for job queues, background tasks, scheduled jobs",
        "PostgreSQL advanced — transactions, indexes, EXPLAIN ANALYZE, full-text search, partitioning",
        "Microservices — service communication via REST/gRPC/message queues, service discovery",
        "Docker and docker-compose — Dockerfile best practices, multi-stage builds, volume mounting",
        "CI/CD with GitHub Actions — lint, test, type-check, build, Docker push, deploy on merge",
        "Observability — Sentry for error tracking, Pino or Winston for structured logging, Prometheus + Grafana metrics",
        "Security hardening — OWASP Top 10, SQL/NoSQL injection prevention, rate limiting, security headers",
        "Node.js performance profiling — clinic.js, --prof flag, identifying event loop blocking",
        "gRPC — Protocol Buffers, bidirectional streaming, performance advantages over REST",
        "tRPC — end-to-end type safety with React, router setup, context, protected procedures",
      ],
      buildProjects: [
        "NestJS E-Commerce Platform: Full NestJS implementation, TypeORM + PostgreSQL, JWT auth, WebSocket order tracking, BullMQ for email/notification queues, Docker + CI/CD",
        "Real-Time Chat API: Socket.io with Redis adapter, multi-room support, message history (MongoDB), typing indicators, read receipts, file sharing",
        "Microservices Architecture: 3 services (user, product, order) communicating via RabbitMQ, API Gateway in Express, Docker Compose for local dev, GitHub Actions CI per service",
      ],
    },
  ],

  // ── SECTION 7: USE CASES ─────────────────────────────────────────
  useCases: [
    { num: "01", title: "REST API Backends for Web and Mobile Apps", body: "The dominant use case for Node.js in India — building the API layer that React, Angular, or React Native frontends consume. Every product company building a web or mobile application needs a backend API, and Node.js with Express or NestJS is the most common choice for JavaScript-centric teams. The express/middleware/service/model architecture scales from a 10-endpoint MVP API to a 500-endpoint enterprise API without fundamental restructuring. A Node.js REST API handles authentication, business logic, database operations, file uploads, payment processing, and email sending — the complete backend requirements of most products." },
    { num: "02", title: "Real-Time Applications and Live Features", body: "Swiggy's live order tracking, Zepto's delivery ETA updates, ShareChat's live streaming chat, sports score update APIs, stock price tickers, collaborative document editing — Node.js's event-driven architecture and Socket.io make real-time features a natural fit. No other runtime handles 10,000 concurrent WebSocket connections as efficiently as Node.js on the same hardware. Indian consumer apps increasingly require real-time features (live order tracking has become table stakes for any delivery application), making Node.js's real-time capability a direct business requirement." },
    { num: "03", title: "Microservices and API Gateways", body: "India's scaling tech companies — Razorpay, Meesho, Swiggy, and Zepto — have all moved from monoliths to microservices architectures. Node.js is the dominant language for individual microservices in these architectures: lightweight, fast to start, and easy to containerize. Node.js is particularly well-suited as an API Gateway — the single entry point that routes, authenticates, rate-limits, and aggregates calls to downstream services. Its non-blocking model handles the high fan-out of gateway-to-service calls without thread-per-connection overhead." },
    { num: "04", title: "Payment Processing Backends", body: "Razorpay, Paytm, and BharatPe's backend API infrastructure processes billions of rupees through Node.js. Payment processing requires: high concurrency (many payments simultaneously), reliable webhook processing (Razorpay sends payment confirmation webhooks that must be processed exactly once), cryptographic signature verification (idempotency), and real-time status updates to customers. Node.js handles all of these requirements — non-blocking I/O for concurrency, event-driven design for webhooks, and the Node.js crypto module for signature verification." },
    { num: "05", title: "CLI Tools and Developer Tooling", body: "Node.js is the runtime of choice for developer tools — not just web servers. npm itself runs on Node.js. The Angular CLI, Create React App, Vite, ESLint, Prettier, Jest, TypeScript compiler — all Node.js programs. Indian developer tool companies (BrowserStack, PostHog India office) build their CLI tooling and SDK wrappers in Node.js. For developers who want to contribute to open-source tooling or build internal developer tools, Node.js is the correct choice." },
    { num: "06", title: "Serverless Functions and Edge Computing", body: "AWS Lambda, Google Cloud Functions, Vercel Edge Functions, Cloudflare Workers — all support Node.js (or a JavaScript runtime compatible with Node.js APIs). The serverless architecture model — where individual API endpoints are deployed as stateless functions — fits perfectly with Express route handler patterns. Indian startups increasingly use Vercel's serverless functions (backed by Next.js) or AWS Lambda for APIs that need to scale to zero when unused and to thousands of instances during traffic spikes without infrastructure management." },
    { num: "07", title: "BFF (Backend for Frontend) Layer", body: "The Backend for Frontend pattern — a dedicated Node.js server that aggregates and transforms data from multiple microservices specifically for a given frontend's needs — is increasingly common at scaling Indian product companies. The BFF handles API composition (call user service + product service + recommendation service and combine the results), response transformation (convert internal data formats to what the UI needs), and frontend-specific authorization. Node.js's non-blocking model makes BFFs highly efficient at this fan-out pattern." },
  ],

  // ── SECTION 8: PROJECTS ──────────────────────────────────────────
  projects: {
    beginner: [
      { name: "URL Shortener API", desc: "POST /shorten receives a long URL and returns a short code. GET /:code redirects to the original URL. Track click count per short URL. GET /:code/stats returns analytics.", teaches: "Express routing, MongoDB CRUD, redirect (res.redirect), query design (unique indexes), environment variables, basic error handling" },
      { name: "Notes API with Categories", desc: "Full CRUD for notes. Notes belong to categories (separate collection). GET /notes?category=work filters by category. Notes have title, body, and tags (array). Full-text search via query param.", teaches: "Mongoose Schema with references, .populate(), array fields, query filtering, pagination with skip/limit, Postman collection for testing all endpoints" },
      { name: "Simple Blog API", desc: "Posts with author name, title, body, and published status. Comments on posts. GET /posts returns only published posts. PATCH /posts/:id/publish to change status.", teaches: "Multiple related collections, nested comments array vs separate collection tradeoffs, filtering by status, date-based sorting, Mongoose virtuals for comment count" },
      { name: "Expense Tracker API", desc: "Track income and expense entries with categories, amounts, dates, and descriptions. GET /summary returns totals by category and month. CSV export endpoint.", teaches: "MongoDB aggregation pipeline ($group, $match, $project), date range filtering, generating CSV responses with correct headers, data validation with Zod" },
    ],
    intermediate: [
      { name: "Full Authentication API", desc: "Register, login with JWT (access + refresh tokens), logout (invalidate refresh), forgot/reset password via email (Nodemailer/Resend), update profile, change password, Google OAuth. Tested with Jest + Supertest.", teaches: "Complete JWT flow, bcrypt, email with tokens, OAuth with Passport.js, Supertest integration tests, rate limiting on auth routes" },
      { name: "E-Commerce REST API", desc: "Products (CRUD, search, pagination, Cloudinary images), cart, orders (with stock decrement transaction), Razorpay payment integration (order creation + webhook verification), order status tracking, seller dashboard endpoints.", teaches: "Mongoose transactions, Razorpay Node.js SDK, webhook signature verification, file uploads to Cloudinary, role-based routes, Redis caching for product listings" },
      { name: "Real-Time Chat API", desc: "Socket.io chat rooms, user presence (online/offline), message history (MongoDB), typing indicators, read receipts, file/image sharing via Cloudinary, JWT authentication for WebSocket connections.", teaches: "Socket.io rooms, authentication middleware for Socket.io, real-time events, MongoDB for message persistence, combining REST (history) + WebSockets (live)" },
      { name: "Job Board API", desc: "Companies post jobs, candidates apply with resume (PDF upload), hiring managers review applications, advance through stages. Email notifications on status changes. Search by skills, location, salary range.", teaches: "Complex RBAC (3 roles), file upload validation (PDF only), email queuing with BullMQ, full-text search in MongoDB, pagination with filters" },
    ],
    advanced: [
      { name: "NestJS SaaS API Platform", desc: "Complete NestJS implementation: TypeORM + PostgreSQL, JWT auth, multi-tenancy (per-tenant schema isolation), Stripe Billing (subscriptions + webhooks), BullMQ for async jobs, Socket.io for notifications, Swagger documentation, Docker + GitHub Actions CI/CD.", teaches: "NestJS architecture, TypeORM migrations, Stripe billing, BullMQ job queues, multi-tenancy, complete deployment pipeline" },
      { name: "Microservices System (3 Services)", desc: "User service (auth, profile), Product service (catalog, inventory), Order service (checkout, payment). API Gateway in Express routes and aggregates. Services communicate via RabbitMQ events. Each service has its own database. Docker Compose for local dev.", teaches: "Microservices communication, event-driven architecture with AMQP, API Gateway pattern, service isolation, distributed tracing with correlation IDs" },
      { name: "tRPC Full-Stack API", desc: "tRPC backend with Next.js frontend. End-to-end type safety. Protected procedures with Auth.js. Prisma + PostgreSQL. React Query integration on frontend. Zod validation on all inputs. Deployed to Vercel (frontend) + Railway (backend).", teaches: "tRPC router, context, middleware, Prisma integration, end-to-end types, monorepo setup with shared types package" },
    ],
  },

  // ── SECTION 9: MISTAKES ──────────────────────────────────────────
  mistakes: [
    {
      title: "Putting Business Logic Directly in Route Handlers",
      explanation: "A route handler that contains Mongoose queries, business logic, validation, and response formatting is simultaneously doing the job of a controller, service, and data access layer. It cannot be unit-tested (it requires an HTTP request to run), cannot be reused from other routes or jobs, and grows into an unreadable 200-line function as requirements evolve. This is the most common architectural mistake in beginner Node.js codebases.",
      tip: "Three-layer architecture without exception: Route Handler → Controller (HTTP only: parse req, call service, format res) → Service (business logic only: no req/res objects) → Model/Repository (database only). Services are plain TypeScript classes with no Express dependencies — testable with jest without spinning up a server.",
    },
    {
      title: "Not Handling Async Errors — Unhandled Promise Rejections",
      explanation: "An async route handler that throws or rejects without being caught crashes the current request and produces an 'UnhandledPromiseRejectionWarning'. In Node.js versions before 15, unhandled rejections were warnings. From Node.js 15 onwards, they crash the process. A single uncaught async error in a route handler can take down your entire API.",
      tip: "Every async route handler needs either try/catch or the asyncHandler wrapper. Build asyncHandler once: it wraps an async function and calls next(error) on rejection — routing to the global error handler. Then never write try/catch in route handlers again. The global error handler, registered last in your app, handles all errors centrally.",
      wrong: "app.get('/products', async (req, res) => { const products = await ProductModel.find(); res.json(products); }); // Unhandled rejection crashes process",
      correct: "app.get('/products', asyncHandler(async (req, res) => { const products = await ProductModel.find(); res.json(products); })); // asyncHandler catches rejection → next(error)",
    },
    {
      title: "Storing Plain-Text Passwords",
      explanation: "Storing user passwords as plain text in the database means a database breach exposes every user's password immediately. This has caused some of the most catastrophic security incidents in tech history. MD5 and SHA1 are equally wrong — they're fast hashing algorithms designed for checksums, not password storage, and are trivially reversible with rainbow tables.",
      tip: "Always hash passwords with bcrypt before storing. bcrypt's work factor is the key property: bcrypt.hash(password, 12) performs 2^12 (4096) rounds of hashing, making brute force computationally expensive. Use the Mongoose pre-save hook to ensure passwords are always hashed before reaching the database — this makes it impossible to save a plain-text password even if a developer forgets to hash manually.",
      wrong: "user.password = req.body.password;  // Plain text — never do this",
      correct: "userSchema.pre('save', async function() { if (this.isModified('password')) this.password = await bcrypt.hash(this.password, 12); });",
    },
    {
      title: "Using 403 Instead of 404 for Resources the User Doesn't Own",
      explanation: "When a user requests /api/orders/abc123 and that order belongs to a different user, returning 403 Forbidden tells the attacker that the order exists — they can then enumerate all order IDs to discover which orders exist in the system. This is an information leakage vulnerability called IDOR (Insecure Direct Object Reference).",
      tip: "For resources the user doesn't own or that don't exist, return 404 Not Found — not 403. Only return 403 for operations the user's role isn't permitted to perform (a 'user' trying to access an 'admin' route). For their own resources, return 404 for not-found, 200/204 for success. This prevents order/user ID enumeration attacks.",
      wrong: "if (order.userId !== req.user.id) throw new AppError('Access denied', 403);  // Reveals order exists",
      correct: "const order = await OrderModel.findOne({ _id: id, userId: req.user.id }); if (!order) throw new AppError('Order not found', 404);  // Same response whether not found or not owned",
    },
    {
      title: "Not Validating Request Input",
      explanation: "Trusting client-provided data without validation leads to type errors when a string is expected but a number arrives, NoSQL injection when a MongoDB operator like $gt is passed as a value, application crashes when a required field is missing, and security vulnerabilities when a user sends a crafted payload. An API that doesn't validate its inputs will eventually be crashed or exploited.",
      tip: "Validate every input at the boundary — request body, query params, URL params — before it touches your service or database. Use Zod for TypeScript-first schema validation. Create a validate middleware that calls schema.safeParse() and returns 400 with field-level error messages on failure. Never access req.body.someField without first validating that it exists and is the correct type.",
    },
    {
      title: "Blocking the Event Loop with Synchronous Operations",
      explanation: "Node.js runs on a single thread. Any synchronous operation that takes longer than a few milliseconds (reading a large file with fs.readFileSync(), parsing a large JSON with JSON.parse() on a 10MB body, computing bcrypt with too-high salt rounds synchronously, or a complex synchronous loop) blocks every other request from being processed during that time.",
      tip: "Use async versions of all I/O operations (fs.promises.readFile, not fs.readFileSync). Limit request body size (express.json({ limit: '10kb' })). Use bcrypt asynchronously (bcrypt.hash() not bcrypt.hashSync()). Move CPU-intensive work to Worker Threads. Identify event loop blocking with clinic.js or autocannon + Node.js --prof.",
      wrong: "app.get('/file', (req, res) => { const content = fs.readFileSync('/large-file.txt'); res.send(content); }); // Blocks all requests for file read duration",
      correct: "app.get('/file', async (req, res) => { const content = await fs.promises.readFile('/large-file.txt'); res.send(content); }); // Non-blocking",
    },
    {
      title: "Leaking Sensitive Data in API Responses",
      explanation: "Returning the full Mongoose document — including the password field, internal fields, refresh tokens, or reset tokens — in API responses exposes sensitive data to the client. A common pattern: res.json(user) on a user document that was fetched without explicitly excluding the password field.",
      tip: "Use select: false on sensitive schema fields — they won't be included unless explicitly requested. Create explicit response DTOs or use .select('-password -refreshToken -passwordResetToken') in queries. Never return the raw Mongoose document — return a plain object with only the fields the client needs: { id, name, email, role }. Audit your API responses in Postman regularly.",
      wrong: "const user = await UserModel.findById(id); res.json(user); // Returns password hash, refreshToken, etc.",
      correct: "const user = await UserModel.findById(id).select('-password -refreshToken'); res.json({ id: user._id, name: user.name, email: user.email, role: user.role });",
    },
    {
      title: "Not Implementing Rate Limiting on Authentication Endpoints",
      explanation: "An API without rate limiting on /auth/login allows an attacker to attempt thousands of password combinations per second (brute force attack). Razorpay's public bug bounty reports have multiple examples of Indian APIs vulnerable to credential stuffing due to missing rate limits on login endpoints.",
      tip: "Apply express-rate-limit to all auth routes with strict limits: 10 requests per hour per IP on /auth/login, /auth/register, and /auth/forgot-password. Apply a looser limit (100 per 15 minutes) on all API routes generally. Use Redis store (rate-limit-redis) for the counter in multi-process or clustered deployments — in-memory counters don't share across processes.",
    },
    {
      title: "Connecting to MongoDB Without Error Handling or Retry Logic",
      explanation: "Calling mongoose.connect() once at startup and not handling connection errors means a transient database unavailability (common during deployment, database restart, or network blip) silently breaks your API. Requests continue to arrive but all database operations fail — often with unhandled rejections.",
      tip: "Implement retry logic in your connectDatabase() function — retry up to 5 times with exponential backoff before giving up. Listen to mongoose.connection.on('disconnected') and attempt reconnection. Set appropriate timeout values (serverSelectionTimeoutMS, socketTimeoutMS). Handle the initial connection failure by crashing the process (fail fast) rather than starting the server without a database.",
    },
    {
      title: "Ignoring the .env File in Development But Using Hardcoded Values",
      explanation: "Developers who hardcode database URIs, JWT secrets, or API keys directly in code, or who use different variable names locally vs production, create deployment failures and security incidents. A JWT_SECRET of 'secret' or 'mysecret' in development that gets deployed to production is broken by design — any attacker who knows your secret can forge tokens.",
      tip: "Use dotenv from day one. Create .env.example with all required variable names (no values). Validate all environment variables at startup with Zod (fail fast if any are missing or wrong format). Use a strong, randomly-generated JWT_SECRET (openssl rand -hex 32) even in development — it builds the correct habit and prevents accidental deployment of weak secrets.",
    },
    {
      title: "Writing Tests Only After the Code Is 'Finished'",
      explanation: "Developers who defer testing until the 'end' of a feature never actually write tests — there's always another feature to build. Untested Node.js codebases accumulate technical debt silently: a refactor that breaks authentication is discovered in production, not in CI. Companies that hire for quality specifically look for test coverage in portfolio projects.",
      tip: "Write integration tests (Supertest + mongodb-memory-server) for every route as you build it, not after. Follow the pattern: build the route → test it manually in Postman → translate that Postman test to a Supertest test. This takes 10–15 minutes per route and creates a regression safety net immediately. A portfolio project with tests demonstrates professional discipline that most other candidates lack.",
    },
    {
      title: "Not Using Consistent Error Response Shape Across the API",
      explanation: "An API where some errors return { error: 'message' }, others return { message: 'error' }, and others return { msg: 'err', code: 400 } forces frontend developers to write conditional parsing logic for every endpoint. When an API consumer (a React developer or a mobile developer) can't predict the error response shape, they write defensive code that's harder to maintain.",
      tip: "Standardize your error response shape from day one: { success: false, message: 'Human-readable message', errors?: Record<string, string[]> }. Your global error handler is the single place to enforce this shape — all errors pass through it. Document the shape in your README. The errors field is optional and only present for validation errors (field-level messages).",
    },
  ],

  // ── SECTION 10: INTERVIEW QUESTIONS ─────────────────────────────
  interviewQuestions: {
    beginner: [
      { q: "What is Node.js and how does it differ from browser JavaScript?", a: "Node.js is a JavaScript runtime built on Chrome's V8 engine that runs JavaScript outside the browser — on servers, in CLIs, and in build tools. Differences: Node.js has no DOM or browser APIs (no window, document, localStorage), but has access to the file system (fs), network (http), OS (os), and child processes. Node.js uses CommonJS modules (require) historically but supports ESM (import) since Node.js 12+. Node.js has the global object instead of window." },
      { q: "What is the Event Loop in Node.js?", a: "The event loop is Node.js's mechanism for handling async operations on a single thread. When an async operation (DB query, file read, HTTP call) is initiated, Node.js offloads it to libuv, registers a callback, and immediately continues processing other work. When the async operation completes, libuv places the callback in the appropriate queue. The event loop continuously checks these queues (timers, I/O callbacks, poll, check, close callbacks) and executes callbacks in order. This is what makes Node.js non-blocking — the thread is never idle waiting for I/O." },
      { q: "What is the difference between synchronous and asynchronous code in Node.js?", a: "Synchronous code executes sequentially — each line blocks until complete. fs.readFileSync() waits for the file to be read before the next line executes. In Node.js, synchronous code blocks the event loop — no other requests can be processed during that time. Asynchronous code registers a callback and returns immediately — the actual work happens in the background. fs.promises.readFile() returns a Promise, Node.js offloads the I/O to libuv, and the callback runs when complete. Always use async APIs in Node.js server code." },
      { q: "What is Express.js and what does it add over the built-in http module?", a: "Express.js is a minimal web framework for Node.js. Node's built-in http module gives you raw HTTP handling — you parse URLs, headers, and bodies manually, match routes manually, and write raw HTTP responses. Express adds: declarative routing (app.get('/users', handler)), middleware (composable functions that process requests), request/response helpers (res.json(), req.params, req.query, req.body), and a plugin ecosystem. Express eliminates ~80% of the boilerplate code you'd write with raw http." },
      { q: "What is middleware in Express.js?", a: "Middleware is a function with (req, res, next) parameters that runs in the request pipeline before route handlers. Middleware can: modify req/res (add headers, parse body), end the request (send an error response), or call next() to pass control to the next middleware. Middleware is registered with app.use() and runs for all routes, or it can be route-specific. Order matters — middleware runs in the order it's registered. Common middleware: cors(), helmet(), express.json() (body parser), authentication checker." },
      { q: "What is the difference between req.params, req.query, and req.body?", a: "req.params: URL path parameters — GET /products/:id where id is a param. Accessed as req.params.id. Part of the URL path. req.query: URL query string parameters — GET /products?category=electronics&page=2. Accessed as req.query.category. After the ? in the URL. Always strings. req.body: Request body — for POST/PUT/PATCH requests. Contains the JSON or form data sent in the request body. Requires express.json() or express.urlencoded() middleware to parse. Not available on GET requests." },
      { q: "What is a Mongoose Schema and Model?", a: "A Schema defines the structure of documents in a MongoDB collection — field names, types, validation rules, default values, and options. const productSchema = new Schema({ name: { type: String, required: true }, price: Number }). A Model is a constructor compiled from a Schema that provides an interface to MongoDB — ProductModel.find(), ProductModel.create(), ProductModel.findById(). Schema describes the shape; Model is the query interface. One Schema → one Model → one MongoDB collection." },
      { q: "What is JWT and how is it used for authentication in Node.js?", a: "JWT (JSON Web Token) is a compact, URL-safe token format that encodes a payload (user ID, role, expiry) as a signed string. In Node.js: on login, sign a JWT with the user's data and a secret key (jsonwebtoken.sign(payload, secret, { expiresIn: '15m' })). Send the token to the client. On subsequent requests, client sends Authorization: Bearer <token>. Verify with jwt.verify(token, secret) — if valid, returns the payload. If tampered or expired, throws an error. No session storage needed — the token itself carries authentication state." },
      { q: "What is the purpose of .env files in Node.js projects?", a: ".env files store environment-specific configuration that shouldn't be hardcoded in code — database connection strings, API keys, JWT secrets, port numbers. The dotenv package reads this file and loads variables into process.env. .env files are listed in .gitignore — never committed to version control — so secrets aren't exposed in the repository. Different environments (development, test, production) have different .env values. .env.example is committed as a template showing which variables are needed without their values." },
      { q: "What HTTP status codes should a REST API use for common scenarios?", a: "200 OK: successful GET or PATCH. 201 Created: successful POST that created a resource. 204 No Content: successful DELETE. 400 Bad Request: invalid input, validation failure. 401 Unauthorized: not authenticated (no token or invalid token). 403 Forbidden: authenticated but insufficient permissions. 404 Not Found: resource doesn't exist. 409 Conflict: duplicate resource (email already exists). 422 Unprocessable Entity: valid format but business rule violation. 429 Too Many Requests: rate limit exceeded. 500 Internal Server Error: unexpected server error." },
    ],
    intermediate: [
      { q: "Explain the difference between authentication and authorization.", a: "Authentication is verifying who you are — confirming your identity. In Node.js: the authenticate middleware verifies the JWT token and attaches req.user to the request. Authorization is verifying what you're allowed to do — confirming your permissions. In Node.js: the authorize middleware checks req.user.role against the required roles for the route. They're separate concerns: you can be authenticated (valid token) but unauthorized (wrong role). The order matters: authenticate always runs before authorize." },
      { q: "What is an N+1 query problem and how do you solve it in Mongoose?", a: "N+1 occurs when fetching N records triggers N additional queries. Example: fetch 20 orders (1 query), then loop and fetch each order's user (20 queries) = 21 total queries. Solution: use Mongoose's .populate() to fetch related documents in a second efficient query (2 total queries instead of 21). For deeply nested relationships: use aggregation with $lookup. For very large datasets: denormalize by embedding frequently-needed fields directly (store product name and price in order items at creation time — no join needed)." },
      { q: "How does the Service Layer pattern improve a Node.js codebase?", a: "The Service Layer separates business logic from HTTP concerns. Controllers handle: parsing req.body, calling service methods, formatting res.json(). Services handle: business rules, database queries, external API calls. Benefits: (1) Services are testable without an HTTP server — call service.createOrder() directly in unit tests. (2) Services are reusable — the same order creation logic called from a REST route, a Socket.io event, or a scheduled job. (3) Controllers stay thin and readable. (4) Separation of concerns makes debugging easier — an HTTP 400 is a controller problem; a business rule failure is a service problem." },
      { q: "How do you handle file uploads in Node.js and store them in production?", a: "Use Multer for parsing multipart/form-data requests. For production storage: never save to local disk (ephemeral in containers, not shared across multiple server instances). Use Cloudinary (images/videos) or AWS S3 (any file type) with a streaming upload approach. multer-storage-cloudinary uploads directly to Cloudinary from the multer middleware — the file is never written to disk. Validate file type (MIME type check in fileFilter) and size (limits.fileSize) in Multer. Store the returned CDN URL in your database, not the file itself." },
      { q: "What is the difference between Mongoose's .lean() and regular queries?", a: "A regular Mongoose query returns Mongoose Document objects — they have methods (.save(), .validate()), getters, setters, virtual properties, and the full Mongoose overhead. .lean() returns plain JavaScript objects — no Mongoose methods, no overhead. Performance difference: lean queries are 2–5x faster and use significantly less memory. Use .lean() for: read-only data that you'll serialize to JSON (API responses). Don't use .lean() for: documents you need to modify and .save(), or documents where you need Mongoose virtuals or methods." },
      { q: "How do you implement pagination in a Node.js API?", a: "Offset pagination (skip/limit): calculate skip = (page - 1) * limit. Simple to implement, but slow for large offsets (MongoDB must scan and skip documents). Always return total count with Promise.all([Model.find().skip(skip).limit(limit), Model.countDocuments()]). Cursor-based pagination: instead of skip, filter by _id > lastId. Efficient regardless of dataset size (uses index). Better for infinite scroll. Return a nextCursor (the last ID) that the client sends in the next request. Use offset for page-number UIs (page 1, 2, 3); cursor for infinite scroll." },
      { q: "How do you secure a Node.js API against common vulnerabilities?", a: "NoSQL injection: use express-mongo-sanitize (strips $ and . from inputs). XSS: helmet() sets security headers (X-Content-Type-Options, etc.), sanitize user-generated content before rendering. CSRF: use CSRF tokens for cookie-based sessions (not needed for JWT in Authorization header). Rate limiting: express-rate-limit on all endpoints, stricter on auth. SQL injection (for PostgreSQL): use parameterized queries (Prisma and pg both do this by default — never string-concatenate SQL). DOS: limit request body size (express.json({ limit: '10kb' })), rate limit." },
      { q: "What is Redis and what problems does it solve in a Node.js API?", a: "Redis is an in-memory data store (much faster than a database). Node.js use cases: (1) Caching — store expensive query results (product listings, user profiles) for 5 minutes. Reduces DB load 10x for read-heavy APIs. (2) Session storage — store JWT refresh tokens or server-side sessions. (3) Rate limiting counters — cross-process-safe increment (in-memory per-process counters don't work with clustering). (4) Job queues — BullMQ uses Redis as a reliable queue backend. (5) Pub/Sub — Socket.io Redis adapter allows multi-process WebSocket broadcasting." },
      { q: "How do you implement background jobs in Node.js?", a: "Use BullMQ (built on Redis) for reliable job queues. Create a queue: const queue = new Queue('emails', { connection: redisConnection }). Add jobs: queue.add('send-order-confirmation', { orderId, email }). Process jobs in a worker: const worker = new Worker('emails', async (job) => { await sendEmail(job.data) }, { connection: redisConnection }). BullMQ handles: retry on failure, delayed jobs, scheduled (cron) jobs, job priorities, concurrency control, and job completion events. Use cases: sending emails, generating reports, processing images, sending notifications." },
      { q: "What is the difference between monolithic and microservices architecture for Node.js?", a: "Monolith: one Node.js application contains all features (auth, products, orders, payments). Simple to develop, deploy, and debug. One database. Appropriate for: MVP, small teams, early-stage products. Microservices: separate Node.js services per domain (UserService, ProductService, OrderService), each deployed independently with its own database. Services communicate via REST, gRPC, or message queues. Appropriate for: large teams (each team owns a service), independent scaling (scale ProductService without scaling UserService), and fault isolation. Don't start with microservices — extract services from a well-structured monolith when team size or scaling requirements demand it." },
      { q: "How do you handle database transactions in Mongoose and Prisma?", a: "Mongoose: await mongoose.startSession(), session.startTransaction(), pass { session } to all operations in the transaction, session.commitTransaction() or session.abortTransaction() in the catch. Requires a MongoDB replica set (even a 1-member replica set for local dev). Prisma: prisma.$transaction(async (tx) => { ... }). Pass tx (the transactional client) to all operations inside. If any operation throws, all changes roll back automatically. Use transactions for: any multi-document/multi-table operation that must be atomic (order creation + stock decrement, payment + order status update)." },
      { q: "How do you write testable Node.js services?", a: "Design services as plain TypeScript classes with no Express dependencies (no req/res objects). Inject dependencies (the database model, other services, external API clients) through the constructor or as parameters — this enables injecting mocks in tests. Example: class OrderService { constructor(private db: typeof OrderModel, private emailService: EmailService) {} }. In tests: new OrderService(mockOrderModel, mockEmailService). Services should throw AppError for expected errors (not found, unauthorized) — tests can assert on these with expect().rejects.toThrow(). Use mongodb-memory-server for integration tests that need a real database." },
    ],
    advanced: [
      { q: "How does Node.js handle CPU-intensive tasks given its single-threaded model?", a: "Node.js's single thread is ideal for I/O-bound work (most API work) but blocking for CPU-bound work. Options: (1) Worker Threads (worker_threads module) — spawn separate threads for CPU work, communicate via postMessage. (2) Child Processes — spawn separate Node.js processes for truly independent CPU work. (3) Cluster — multiple Node.js processes sharing the same port, leveraging all CPU cores. (4) Offload to external service — send image processing to Cloudinary, PDF generation to a Lambda function, heavy computation to a microservice. Most API servers don't encounter CPU-bound work at all — profile first." },
      { q: "How would you architect a Node.js application to handle 100,000 concurrent users?", a: "Horizontal scaling: multiple Node.js instances behind a load balancer (nginx, AWS ALB). Stateless app: JWT tokens (no server sessions), Redis for shared state (rate limit counters, socket rooms). Caching: Redis cache for read-heavy endpoints, CDN for static assets. Database optimization: read replicas for queries, proper indexing, connection pooling (max 10–20 per process). Async operations: message queues (BullMQ/Kafka) for work that can be deferred. PM2 cluster mode (one process per CPU) + horizontal scaling + Redis for shared state is the Node.js scalability pattern." },
      { q: "Explain how you would design a rate limiting system for a public API.", a: "Sliding window rate limiting (most accurate, prevents boundary bursts): for each request, store timestamps in a Redis sorted set (ZADD with score = timestamp). Count entries within the window (ZCOUNT from now-window to now). If count >= limit, reject with 429. Remove old entries (ZREMRANGEBYSCORE). Alternatively, use token bucket: bucket starts full (max tokens), each request consumes a token, tokens refill at a fixed rate. For a public API: different limits per tier (free: 100/hour, pro: 10000/hour), keyed by API key not IP, return Retry-After header on 429. Use Lua scripts in Redis for atomic check-and-increment." },
      { q: "How do you implement event-driven architecture in Node.js?", a: "Internal: Node.js's built-in EventEmitter for in-process events. An OrderService emits 'order.created'; EmailService, InventoryService, and AnalyticsService listen and react independently — decoupled. External: message brokers for cross-service events. RabbitMQ (AMQP): durable queues, message acknowledgment, dead-letter queues for failures. Apache Kafka: high-throughput event streaming, consumer groups, message replay from any offset. BullMQ: job queues backed by Redis. Choose by scale: EventEmitter for in-process, BullMQ for async jobs, Kafka for high-throughput event streams, RabbitMQ for reliable message delivery between services." },
      { q: "How do you handle database migrations in production Node.js applications?", a: "Prisma Migrate: define schema in schema.prisma, run prisma migrate dev (development) to generate SQL migration files, prisma migrate deploy (production) to apply pending migrations. Migrations are committed to git and run in CI before deploying the application. TypeORM: synchronize: false in production, use migrations directory with Up/Down methods. Mongoose: no built-in migration system — use migrate-mongo or mongodb-migrate. Key principles: migrations run before code deployment (not after), always idempotent, tested in staging first, have a rollback plan (Down migration), never run synchronize: true or autoMigrate in production." },
      { q: "What is tRPC and how does it change the Node.js + TypeScript developer experience?", a: "tRPC (TypeScript Remote Procedure Call) creates end-to-end type safety between a Node.js backend and a TypeScript frontend with no code generation. Define procedures on the server (input schema with Zod, output type inferred). Import the router type on the client — client calls are fully typed with input validation and return type inference. The client uses React Query under the hood. Trpc.product.list.useQuery() is a typed React Query hook. Eliminates: REST endpoint documentation (types are the docs), client-side type definitions duplicating server types, runtime type mismatch bugs. Trade-off: requires TypeScript on both ends, not suitable for public APIs consumed by non-TypeScript clients." },
      { q: "How do you implement comprehensive observability in a Node.js API?", a: "Three pillars: (1) Logs — structured JSON logging with Pino (fast, low overhead). Log every request with ID, method, path, status, duration. Log errors with stack traces. Ship to a log aggregator (Datadog, Loki, CloudWatch). (2) Metrics — expose a /metrics endpoint with Prometheus counters, histograms, gauges. Track: request rate, error rate, response duration (P50/P95/P99), active connections, event loop lag. Visualize with Grafana. (3) Traces — distributed tracing with OpenTelemetry. Each request gets a trace ID that spans across services, showing the full call graph. Essential for microservices. Correlate logs to traces via the trace ID." },
      { q: "How do you prevent and detect memory leaks in Node.js?", a: "Common sources: event listeners never removed (use emitter.on and store the reference to call .off() in cleanup), closures keeping large objects alive, global Maps/Sets that grow without bounds, connection leaks (database connections not released), module-level caches that grow indefinitely. Detection: monitor process.memoryUsage().heapUsed in metrics. Memory that grows and never decreases is a leak. Use Node.js's --inspect flag + Chrome DevTools Memory tab for heap snapshots — compare two snapshots to find objects that grew. Use clinic.js heapprofiler for automated heap analysis. Fix: explicitly remove event listeners, implement LRU cache instead of unbounded Map, use weak references (WeakMap/WeakSet) for caches." },
      { q: "Explain how you would implement a multi-tenant SaaS backend in Node.js.", a: "Tenant isolation strategies: (1) Database per tenant — each tenant has their own MongoDB database or PostgreSQL database. Complete isolation. Prisma: switch database URL per request based on tenant. High operational overhead. (2) Schema per tenant (PostgreSQL) — each tenant has their own schema in one database. Good isolation, manageable overhead. (3) Row-level isolation — single database, tenantId field on every table, every query filters by tenantId. Simplest to implement, lowest cost. Tenant resolution: subdomain (tenant1.app.com → extract 'tenant1' in middleware, look up tenant in DB), JWT claim (token includes tenantId), API key header. Middleware attaches tenant to req.tenant; all service methods receive and filter by tenant. Most critical: ensure every query includes the tenantId filter — a missing filter is a data leak." },
      { q: "How do you design API versioning for a public Node.js API?", a: "URL versioning (/api/v1, /api/v2) is the most explicit and widely used: clients always know their version, easy to route to different handlers. Header versioning (Accept: application/vnd.api.v2+json) is cleaner but harder to debug and test. Strategy: mount v1 and v2 routers separately. When making breaking changes: create v2 router with the new behavior, keep v1 running. Set deprecation headers on v1 (Deprecation: true, Sunset: date). Give clients 6–12 months migration window. Never make breaking changes within a version. Breaking changes: removing fields, changing field types, changing status codes, removing endpoints, changing authentication mechanism." },
      { q: "How does Prisma improve over Mongoose for large TypeScript Node.js projects?", a: "Prisma advantages over Mongoose: (1) Type safety — every query result is fully typed from the schema, no casting or any types needed. (2) Schema-first — schema.prisma is the single source of truth; TypeScript types auto-generated. (3) Migrations — first-class migration system with SQL migration files in version control. (4) Relations — Prisma's include/select syntax for joins is type-safe and explicit; Mongoose's populate is loosely typed. (5) Prisma Studio — visual database editor. Mongoose advantages: simpler for MongoDB-specific features (array operators, embedded documents, aggregation pipeline), schema flexibility that PostgreSQL can't match. Choose Prisma for: PostgreSQL, TypeScript-first projects. Mongoose for: MongoDB with complex document structures or aggregation-heavy workloads." },
    ],
  },

  // ── SECTION 11: COMPARISON ───────────────────────────────────────
  comparison: {
    headers: ["Feature", "Node.js (Express/NestJS)", "Python (Django/FastAPI)", "Java (Spring Boot)", "Go"],
    rows: [
      { feature: "Language", react: "JavaScript / TypeScript", vue: "Python", angular: "Java / Kotlin", extra: "Go" },
      { feature: "Performance", react: "Very high (non-blocking I/O)", vue: "Moderate (GIL, sync by default)", angular: "High (JVM optimized, multi-threaded)", extra: "Highest (compiled, lightweight goroutines)" },
      { feature: "Concurrency Model", react: "Single-threaded event loop (non-blocking)", vue: "Multi-threaded (sync) or async (FastAPI)", angular: "Multi-threaded (thread pool per request)", extra: "Goroutines (M:N threading)" },
      { feature: "Ecosystem", react: "Largest (npm, 2.1M packages)", vue: "Very large (PyPI, ML/data science strength)", angular: "Very large (Maven, enterprise standards)", extra: "Growing (modules, good std library)" },
      { feature: "Learning Curve", react: "Low for JS devs (same language as frontend)", vue: "Low for Python devs, beginner-friendly", angular: "High (JVM, verbose syntax, enterprise patterns)", extra: "Moderate (explicit, minimal syntax)" },
      { feature: "TypeScript/Types", react: "First-class TypeScript, excellent tooling", vue: "Type hints (optional), mypy", angular: "Statically typed by default", extra: "Statically typed by default" },
      { feature: "Database Options", react: "All (MongoDB/Mongoose, PostgreSQL/Prisma, Redis)", vue: "All (Django ORM, SQLAlchemy, psycopg2)", angular: "All (Hibernate, JPA, Spring Data)", extra: "All (GORM, sqlx, pgx)" },
      { feature: "Deployment", react: "Docker, Vercel, Railway, AWS Lambda (JS runtime)", vue: "Docker, AWS Lambda (Python runtime), Heroku", angular: "Docker, Kubernetes, AWS ECS (JVM memory overhead)", extra: "Docker (tiny images ~10MB), Kubernetes" },
      { feature: "Best For", react: "APIs, real-time apps, full-stack JS teams, startups", vue: "ML backends, data APIs, Django admin apps", angular: "Banking, insurance, enterprise with Java teams", extra: "High-performance microservices, CLI tools, infrastructure" },
      { feature: "India Job Market", react: "Widest — all company types and sizes", vue: "Strong — data companies, large enterprises", angular: "Very strong — IT services (TCS/Wipro), banking", extra: "Growing — infrastructure, DevOps-adjacent roles" },
      { feature: "Startup Adoption India", react: "Dominant — MERN stack is the default startup stack", vue: "Growing — data-heavy startups, ML platforms", angular: "Rare at early-stage, common at growth-stage", extra: "Niche — fintech infrastructure, developer tool companies" },
    ],
  },

  // ── SECTION 12: PROS & CONS ──────────────────────────────────────
  pros: [
    "JavaScript everywhere — frontend developers can own the backend without learning a new language; one team, full stack, faster feature delivery",
    "Non-blocking I/O — handles 10,000+ concurrent connections on a single thread; ideal for the API-server workload that most Node.js applications actually are",
    "npm ecosystem — 2.1 million packages; every third-party service (Razorpay, Stripe, Twilio, AWS, Firebase, Cloudinary) has a maintained, TypeScript-typed npm SDK",
    "TypeScript support — first-class TypeScript with Prisma (typed queries), NestJS (typed DI), tRPC (end-to-end types); the TypeScript-Node.js combination rivals any compiled language's developer experience",
    "Real-time built-in — Socket.io and WebSocket handling are natural in Node.js's event-driven model; real-time features are not an afterthought",
    "Vercel/Serverless — Node.js runtime is supported by every serverless platform (Vercel, AWS Lambda, Cloudflare Workers); scale to zero and to millions without server management",
    "NestJS enterprise framework — Angular-style architecture for Node.js; modules, DI, decorators, and guards give large teams the structure that Express alone doesn't enforce",
    "Fastest job market entry — JavaScript developers transition to Node.js backend faster than to any other backend technology; same language, same tooling, new runtime",
  ],
  cons: [
    "Single-threaded CPU limitation — one heavy synchronous operation blocks all requests; CPU-intensive tasks require Worker Threads, clustering, or external offloading",
    "Callback/async complexity — before Promises and async/await, callback hell was notorious; even with modern syntax, complex async flows (race conditions, parallel error handling) require care",
    "No built-in structure — Express gives you nothing beyond routing; architecture decisions (service layer, validation, error handling) are left entirely to the developer, leading to inconsistent codebases without discipline",
    "Type system is optional — JavaScript's dynamic typing means type errors in Node.js APIs surface at runtime unless TypeScript is used; TypeScript adoption has a learning curve",
    "npm security surface — 2.1 million packages means a large attack surface; supply chain attacks (event-stream incident) and vulnerable transitive dependencies are a real concern managed via npm audit",
    "Memory leaks are silent — event listeners, closures, and global caches that grow without bounds cause gradual memory growth that only manifests in production under sustained load",
    "Not ideal for ML/AI workloads — Python dominates machine learning; Node.js is the wrong choice for inference servers, model training, or data processing pipelines that need NumPy/PyTorch",
    "Weaker at strong consistency requirements — Node.js with MongoDB is a common pairing, but MongoDB's eventual consistency model can surprise developers from SQL backgrounds; Prisma + PostgreSQL is the correct choice for financial applications requiring ACID guarantees",
  ],

  // ── SECTION 13: FUTURE SCOPE ─────────────────────────────────────
  futureScope: [
    "Bun, the new JavaScript runtime that runs Node.js code but with a native TypeScript compiler, native test runner, and 3–10x faster performance on benchmarks, is seeing significant adoption in 2026. Bun is compatible with most npm packages and uses the same APIs as Node.js. Developers who understand Node.js deeply can immediately use Bun — it's the same JavaScript/TypeScript knowledge with better performance. The runtime competition (Bun, Deno, Node.js 22+) is ultimately good for the JavaScript backend ecosystem — it's driving improvements to Node.js itself (native test runner, native .env support, --watch flag) that reduce the need for external tooling. Node.js skills remain fully transferable.",
    "tRPC has fundamentally changed how TypeScript full-stack applications are built. The elimination of the API contract layer — no OpenAPI spec to write, no client SDK to generate, no type definitions to duplicate — makes TypeScript teams dramatically more productive. As Next.js and React continue to dominate the frontend, and Node.js continues to dominate the backend, tRPC's full-stack TypeScript model becomes increasingly attractive. Indian developers building greenfield products in 2026 who combine Next.js + tRPC + Prisma + PostgreSQL have a developer experience and type-safety level that was previously only available in compiled languages like Go or Rust.",
    "AI-integrated backends are creating a new category of Node.js development. The Vercel AI SDK (for both Next.js and standalone Node.js servers), LangChain.js, and direct integration with OpenAI, Anthropic, and Google AI APIs via their Node.js SDKs make Node.js the dominant backend language for AI-powered application development. Indian developers building AI-powered SaaS products — document Q&A, customer service automation, personalization engines, content generation tools — are predominantly using Node.js backends. This category will continue growing as LLM API costs decrease and AI features become standard in every product.",
    "The Node.js job market in India in 2026 benefits from a unique structural advantage: the ongoing digitization of India's financial services, healthcare, and government sectors creates massive demand for API backend developers, and Node.js is the skill those projects are being built with. The shift from legacy monolithic Java systems to modern REST API microservices — happening at every major Indian bank, insurance company, and healthcare platform — requires Node.js developers at scale. Simultaneously, India's growing cohort of global-remote engineers are finding that Node.js backend skills combined with strong system design knowledge is the most accessible path to $120,000+ USD remote roles at American and European product companies.",
    "NestJS's continued maturation is consolidating enterprise Node.js development around a single framework with Angular-compatible mental models. The overlap between Angular (India's most popular enterprise frontend framework) and NestJS (using the same decorators, DI concepts, and module system on the backend) means that enterprise frontend teams are uniquely positioned to transition to full-stack TypeScript development. An organization with Angular frontend developers can onboard them to NestJS backends with a fraction of the learning curve of a different backend technology. This convergence is creating demand for 'TypeScript full-stack engineers' fluent in both Angular and NestJS — a uniquely premium profile in India's enterprise technology sector.",
  ],

  // ── SECTION 14: ACTION PLAN ──────────────────────────────────────
  actionPlan: [
    { week: "Week 1–2", title: "JavaScript Async Mastery — The Foundation Everything Else Rests On", desc: "Before touching Node.js or Express, spend one week becoming fluent with asynchronous JavaScript. Build 5 programs that all involve async operations: a file reader using fs.promises, a function that fetches 3 APIs in parallel with Promise.all, an async queue that processes items sequentially, a retry function with exponential backoff, and a timeout wrapper for any promise. Every Node.js backend concept — route handlers, database queries, middleware, service methods — is an async function. Developers who struggle with async/await spend their Node.js learning time fighting JavaScript, not Node.js." },
    { week: "Week 3–5", title: "Express Fundamentals and First API", desc: "Build a complete Notes CRUD API: POST /notes (create), GET /notes (all, with query filter), GET /notes/:id (one), PUT /notes/:id (update), DELETE /notes/:id (delete). Add MongoDB with Mongoose. Add input validation with Zod. Add a global error handler. Test every endpoint in Postman and save the collection. No authentication yet — focus purely on the request/response cycle, middleware chaining, and the controller → service → model architecture. This project teaches the skeleton that every future Node.js API will follow." },
    { week: "Week 6–8", title: "Authentication and TypeScript", desc: "Convert your API to TypeScript (rename .js to .ts, add tsconfig.json, type all handlers and models). Then implement the complete authentication flow: register (Zod validation + bcrypt hash), login (compare hash + issue JWT), refresh token endpoint, logout, and protected routes with authenticate middleware. Implement a simple role system (user, admin) with authorize middleware. Write Jest + Supertest integration tests for every auth endpoint. This week's work is the authentication system you'll reuse in every future project." },
    { week: "Week 9–13", title: "Build Your Primary Portfolio Project — E-Commerce API", desc: "Build the E-Commerce REST API from the intermediate projects list. Products (CRUD, search, pagination, Cloudinary image uploads), cart, orders with MongoDB transaction for stock decrement, Razorpay payment integration (order creation + webhook verification), complete auth with seller and buyer roles. Deploy to Railway or Render with a MongoDB Atlas database. Write a Postman collection with all endpoints documented. Write integration tests with 60%+ meaningful coverage. This is the project that 80% of Node.js hiring managers will evaluate. Make every endpoint handle errors correctly, validate all inputs, and return consistent response shapes." },
    { week: "Week 14–19", title: "NestJS, Advanced Patterns, and the Second Project", desc: "Rebuild a smaller version of your API in NestJS — this forces you to learn the framework properly rather than just reading about it. Add Socket.io for real-time order status updates. Learn BullMQ for background email sending. Add Redis caching to your Express API's product listing endpoint and measure the performance difference. Start the Real-Time Chat API project from the intermediate list. Learn Docker — containerize your API with a multi-stage Dockerfile and test it with docker-compose (Node.js + MongoDB + Redis)." },
    { week: "Week 20+", title: "The Backend Job Push", desc: "Apply to 10 Node.js developer, backend developer, or full-stack developer roles per week — prioritizing startups on AngelList India and LinkedIn (Meesho, Zepto, Razorpay, and similar), and remote-friendly global companies on remote.com, weworkremotely.com, and arc.dev. Study system design basics (database choice, caching strategies, API design decisions, scaling patterns) — this is tested at mid-level and above. Master Node.js interview questions: event loop, async patterns, JWT auth flow, database transactions, N+1 queries, rate limiting, and the service layer pattern. Your GitHub should have at least 2 deployed API projects with READMEs linking to the live Postman documentation. Most Node.js developers in India find their first product company backend role within 8–14 weeks of consistent applications post this roadmap." },
  ],
};
