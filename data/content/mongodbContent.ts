import type { TechContent } from './types';

export const mongodbContent: TechContent = {
  techId: 'mongodb',
  readTime: '30–35 min',
  difficulty: 'Beginner to Advanced',
  lastUpdated: '2026',

  // ── OPENING HOOK ─────────────────────────────────────────────────
  openingHook:
    "If you want to build the backends that India's fastest-growing product companies run on — learn MongoDB. Not because it's the only database. Not because SQL doesn't matter. But because MongoDB is the database that powers the majority of India's Node.js-backed startup infrastructure, and understanding it deeply is the difference between being a developer who connects to a database and a developer who designs one. Swiggy stores its restaurant menus in MongoDB — and those menus look nothing alike across a Bengaluru biryani place and a Mumbai sushi bar. Zepto stores its dark store product catalog in MongoDB — where a kilogram of atta and a Bluetooth speaker have completely different attributes that no SQL table could hold cleanly. Meesho stores its seller listings in MongoDB — where a silk saree and a phone case have nothing in common structurally. These companies didn't choose MongoDB by accident. They chose it because their data is hierarchical, their schemas are evolving, and their access patterns say 'give me the whole product' — not 'join six tables to reconstruct what a product is.' This is MongoDB's genius: model your data the way your application thinks about it, not the way a 1970s mathematical theory says it should be structured. But MongoDB is not magic. A developer who embeds the wrong things, skips indexes, writes unbounded arrays into documents, or chooses MongoDB when PostgreSQL is the right answer will build a system that starts fast and becomes a disaster. The skill is not just knowing how to use MongoDB — it's knowing when to use it, how to model data correctly for your access patterns, how to write the aggregation pipelines that power your analytics, and how to index queries so they run in 2 milliseconds instead of 20 seconds. A MongoDB developer who can design production schemas, write complex aggregation pipelines, optimize slow queries with explain(), and articulate the embedding vs referencing decision is positioned for a ₹6–16 LPA role in 2026 — and ₹25–55 LPA within 3–4 years. This is not a MongoDB tutorial. This is the complete, no-fluff MongoDB roadmap — from document fundamentals to production-grade database engineer.",

  // ── SECTION 1: INTRODUCTION ──────────────────────────────────────
  introText: [
    "MongoDB is a document-oriented NoSQL database developed by MongoDB Inc. (formerly 10gen) and first released in 2009. Where a relational database organizes data into tables of rows and columns — every row in a table has identical columns — MongoDB organizes data into collections of documents. A document is a JSON-like object (stored internally as BSON — Binary JSON) that can contain nested objects, arrays, and mixed data types. The critical insight: every document in a collection can have a completely different structure. A 'products' collection can simultaneously hold a document for a smartphone (with processor, RAM, storage fields) and a document for a cotton saree (with fabric, weave, blouse_piece fields) without any schema conflict. This document model aligns with how modern application code thinks about data — as objects, not as normalized table rows that must be reconstructed with joins.",
    "MongoDB's design is driven by one principle: optimize for the application's data access patterns, not for mathematical normalization theory. In a relational database, a customer record is split across customers, addresses, and phone_numbers tables, and reconstructing a complete customer requires three JOIN operations. In MongoDB, the complete customer — with their embedded addresses and phone numbers — lives in a single document. A single read operation retrieves the complete data. This is the document model's primary performance advantage: when your most common operation is 'get me everything about this entity,' a single document read is faster than a multi-table join. The trade-off: updates that span many documents are harder to make atomic, and relationships that are genuinely many-to-many don't embed naturally.",
    "In India's developer ecosystem, MongoDB has a unique position. It is simultaneously the most beginner-friendly database (JSON-like documents, JavaScript-native queries via Mongoose, no schema migration required) and a battle-tested production database running at Swiggy, Meesho, Zepto, and hundreds of funded startups. The MERN stack (MongoDB, Express, React, Node.js) is the most commonly listed full-stack combination in Indian startup job descriptions. For a developer entering the field, MongoDB is the fastest path from zero to a working data layer. For a senior developer, MongoDB expertise — schema design, aggregation pipelines, indexing strategy, replica sets — is a distinct competitive advantage in India's backend job market.",
  ],

  realWorldUsages: [
    "Swiggy — restaurant menus (deeply nested: categories → items → variants → customizations), real-time order state machine, delivery partner profiles with geospatial data, and restaurant analytics stored in MongoDB",
    "Meesho — seller product listings where sarees, electronics, and kitchenware have completely different attribute sets, social commerce post data, and reseller network graph stored in MongoDB",
    "Zepto — dark store product catalog with category-specific attributes, inventory state per dark store, order fulfillment tracking, and customer shopping sessions in MongoDB",
    "ShareChat — user-generated content posts (text, video, audio with varying metadata), follower graph references, content moderation state, and real-time engagement counters in MongoDB",
    "Airbnb — property listings with highly variable amenity sets (beach house vs city apartment), booking availability calendars, and user review documents stored in MongoDB",
    "Forbes — article content management, author profiles, topic tagging, and content version history stored in MongoDB Atlas",
    "Adobe — Creative Cloud asset metadata, user workspace configurations, and product usage analytics stored in MongoDB",
    "eBay — catalog data for billions of product listings with category-specific attributes across electronics, fashion, collectibles, and automotive",
    "Urban Company — service provider profiles (plumber vs electrician vs beautician have different credentials), booking documents with embedded service details, and review history",
    "Dunzo — hyperlocal delivery product catalogs with store-specific inventory, order documents with multi-vendor items, and delivery partner location history",
    "PharmEasy — medicine catalog with complex pharmaceutical attributes (composition, dosage, interactions), prescription documents, and order tracking in MongoDB",
    "Razorpay Dashboard — merchant analytics events, webhook delivery logs, and payment link configurations with flexible metadata stored in MongoDB",
  ],

  // ── SECTION 2: WHY LEARN ─────────────────────────────────────────
  whyLearn: {
    demand:
      "MongoDB is the most requested database skill in India's startup and product company job market for Node.js and full-stack roles. A 2025 analysis of Indian tech job postings found MongoDB in 68% of Node.js role descriptions, 71% of MERN stack listings, and 45% of full-stack developer descriptions. The MongoDB ecosystem in India is uniquely positioned: the MERN stack — which MongoDB anchors on the data layer — is the most commonly listed full-stack combination at companies between 10 and 500 employees. For developers entering the job market or transitioning from frontend roles, MongoDB is the database most associated with Node.js and JavaScript backend development. MongoDB Atlas — the managed cloud database service — has dramatically lowered the operational barrier: a production-grade MongoDB cluster is available in minutes without a DBA, making it the default database choice for developers who own their entire stack. The combination of JavaScript-native syntax (Mongoose queries read like JavaScript), schema flexibility for rapidly evolving products, and a large ecosystem of learning resources makes MongoDB the highest-velocity database for developers who are simultaneously learning backend development.",
    jobRoles: [
      { role: "Backend Developer (MERN Stack)", desc: "The most common MongoDB role — build Express APIs that read and write MongoDB via Mongoose. Schema design, CRUD operations, aggregation for analytics, indexing for performance, and Atlas deployment are the core competencies." },
      { role: "Full-Stack Developer", desc: "Own the complete MERN stack from MongoDB schema to React component. Design the document model, write the Mongoose models, build the Express API, and consume it from React. The most self-sufficient and highest-demand profile at Indian startups." },
      { role: "Node.js Backend Engineer", desc: "Deeper backend role at product companies — advanced aggregation pipelines for analytics features, performance optimization with explain(), replica set management, and schema evolution strategies for growing data volumes." },
      { role: "Database Architect / Tech Lead", desc: "Design MongoDB schemas for new products, migrate existing schemas as requirements evolve, establish indexing strategies, configure Atlas clusters with appropriate tier and region, and define data retention and archival policies." },
      { role: "Data Engineer (MongoDB to Analytics)", desc: "Build pipelines from MongoDB operational data to analytics stores — MongoDB Atlas Data Federation, MongoDB Connector for Kafka, change streams for real-time data sync, and aggregation pipelines that transform operational data for reporting." },
      { role: "DevOps / SRE (MongoDB Operations)", desc: "Manage MongoDB Atlas infrastructure, configure monitoring and alerting, handle backup and restore procedures, optimize connection pool settings, and respond to performance incidents using Atlas Performance Advisor and Query Profiler." },
    ],
    whyCompanies: [
      { reason: "Schema flexibility accelerates product development", detail: "Adding a new field to a MongoDB document requires changing application code — not a database migration script. During early product development when requirements change weekly, this means a team can ship a new feature that adds a 'loyalty_tier' field to user documents without coordinating a database migration, writing down-migration scripts, or worrying about null values in existing rows. Meesho's product catalog evolved from simple listings to complex multi-attribute documents through dozens of iterations without a single blocking database migration." },
      { reason: "Document model matches application object model", detail: "When a developer creates an order object in Node.js, it looks like { userId, items: [{ productId, qty, price }], address: { street, city } }. In MongoDB, that's exactly how it's stored — one document, one read, one write. In PostgreSQL, the same data requires orders, order_items, and addresses tables with foreign keys. For applications where entities are hierarchical and retrieved as units, the document model eliminates the object-relational impedance mismatch." },
      { reason: "Horizontal scaling is native", detail: "MongoDB was designed for horizontal scaling from the beginning. Sharding — distributing data across multiple servers — is built into MongoDB's architecture. When a startup's user base grows from 100,000 to 10 million, MongoDB sharding scales out by adding more servers. PostgreSQL horizontal scaling requires significant engineering effort (Citus, application-level sharding). For startups that anticipate rapid growth, MongoDB's native sharding story is operationally simpler." },
      { reason: "Atlas simplifies operations at every scale", detail: "MongoDB Atlas provides fully managed clusters on AWS, GCP, or Azure with automatic backups, point-in-time recovery, auto-scaling, global distribution, and a built-in Performance Advisor that recommends indexes based on query patterns. A startup team without a DBA can run a production-grade MongoDB deployment on Atlas with appropriate security, monitoring, and reliability guarantees. This operational simplicity is a significant competitive advantage for small teams." },
    ],
    salaryRange: "₹4.5 LPA – ₹12 LPA (Freshers with MERN stack portfolio) | ₹12 LPA – ₹28 LPA (Mid-Level, 2–4 years) | ₹28 LPA – ₹55 LPA (Senior with schema design + aggregation expertise, 5+ years)",
    careerNote:
      "MongoDB expertise is the data layer of the most common Indian startup technical stack. Once you're solid in MongoDB, the career path expands naturally: deeper aggregation pipeline work for analytics features (immediately valuable to any startup building dashboards), Atlas Search for full-text search features (replacing dedicated Elasticsearch for many use cases), MongoDB Realm for mobile sync, and change streams for real-time event-driven architecture. Senior MongoDB engineers who understand schema design for scale, aggregation pipeline optimization, and Atlas cluster management are sought by every company that has outgrown tutorial-level database usage. The path to ₹30–55 LPA at Indian product companies runs directly through demonstrated ability to design schemas that perform at millions of documents and write aggregation pipelines that power real-time analytics.",
  },

  // ── SECTION 3: HOW IT WORKS ──────────────────────────────────────
  howItWorks: {
    intro:
      "Think of MongoDB like a filing cabinet for a modern startup versus a government records office. The government records office (relational database) has standardized forms — every citizen fills in the exact same fields in the exact same order. Relationships between forms are maintained through ID numbers written on each form. Finding a complete record requires going to multiple cabinets (tables), collecting forms (rows), and manually assembling the picture. A modern startup's filing cabinet (MongoDB) works differently: each file (document) contains everything relevant to that entity — a customer file has their contact info, their addresses, their preferences, all in one place. The structure of each file adapts to what the entity actually has. A product file for an iPhone has processor specs; a product file for a book has ISBN. Each file cabinet (collection) holds thousands of these flexible files. Finding a complete record means opening one file drawer (reading one document). The trade-off: if you want to find all customers who live in a specific city, you need either an index on address.city or a scan of every file. The design skill is arranging your filing cabinet so the most common operations are the fastest ones.",
    vdomSteps: [
      { num: "1", title: "Client Sends an Operation to mongod", text: "Your Node.js application (via Mongoose or the MongoDB Node.js driver) opens a connection to mongod — the MongoDB daemon process. Operations are serialized as BSON (Binary JSON) and sent over a TCP connection. The MongoDB driver maintains a connection pool — typically 5–10 open connections reused across requests — avoiding the overhead of creating a new connection per operation. The operation reaches mongod's query engine for processing." },
      { num: "2", title: "Query Engine Parses and Plans the Operation", text: "For find() and aggregate() operations, MongoDB's query planner analyzes the query shape and checks for applicable indexes. If multiple indexes could serve the query, the planner runs a 'race' between candidate plans on a small sample of documents and caches the winner for repeated similar queries. The execution plan is recorded and can be inspected with explain('executionStats'). For write operations, MongoDB routes the operation to the primary replica." },
      { num: "3", title: "Index Lookup or Collection Scan", text: "If an index covers the query fields, MongoDB traverses the B-tree index structure to find matching document pointers in O(log n) time. Without an index, MongoDB performs a COLLSCAN — reading every document in the collection sequentially. The difference: an indexed query on a 10-million-document collection reads perhaps 500 documents. A collection scan reads all 10 million. Index coverage is the single most impactful performance decision in MongoDB operation." },
      { num: "4", title: "Documents Retrieved from WiredTiger Storage Engine", text: "MongoDB uses the WiredTiger storage engine (default since MongoDB 3.2) for document storage. WiredTiger stores data in a B-tree file on disk, organized by _id. Frequently accessed documents reside in WiredTiger's cache (up to 50% of available RAM by default). Cache hits serve documents from memory in microseconds; cache misses trigger disk reads. The ratio of cache hits to disk reads is a primary performance metric for MongoDB deployments." },
      { num: "5", title: "Result Set Assembled and Returned", text: "For find() operations, MongoDB assembles matching documents into a cursor — a server-side iterator. The client retrieves documents from the cursor in batches (default 101 documents for the first batch). For aggregate() operations, documents pass through each pipeline stage in sequence, with memory limits per stage (100MB default, configurable with allowDiskUse: true). The final result set is serialized as BSON and sent back to the client, where the driver deserializes it into JavaScript objects." },
    ],
    componentCode: `// MONGODB FUNDAMENTALS — the complete CRUD and design mental model

// ── DOCUMENT MODEL — what MongoDB stores ─────────────────────────
// A MongoDB document is a BSON object — think: a rich JavaScript object
// Collections hold documents; databases hold collections
// Unlike SQL: no predefined schema, no required columns, flexible per document

// A product document in the 'products' collection
{
  "_id": ObjectId("507f1f77bcf86cd799439011"),  // Auto-generated unique ID (12-byte BSON)
  "name": "OnePlus 12 5G",
  "slug": "oneplus-12-5g",
  "price": 64999,
  "category": "smartphones",
  "brand": "OnePlus",
  "sellerId": ObjectId("507f1f77bcf86cd799439099"),  // REFERENCE to users collection
  "isActive": true,

  // EMBEDDED SUBDOCUMENTS — part of this document, no separate collection needed
  "specs": {
    "processor": "Snapdragon 8 Gen 3",
    "ram": "12GB",
    "storage": "256GB",
    "camera": "50MP + 48MP + 64MP",
    "battery": "5400mAh",
    "display": "6.82 inch AMOLED 120Hz"
  },

  // EMBEDDED ARRAY — bounded, always retrieved with the product
  "images": [
    { "url": "https://cdn.example.com/op12-black-front.jpg", "alt": "Front black", "isPrimary": true },
    { "url": "https://cdn.example.com/op12-black-back.jpg",  "alt": "Back black",  "isPrimary": false },
    { "url": "https://cdn.example.com/op12-green-front.jpg", "alt": "Front green", "isPrimary": false }
  ],

  // EMBEDDED ARRAY OF OBJECTS — variants, bounded (max ~10)
  "variants": [
    { "color": "Silky Black", "storage": "256GB", "priceModifier": 0,    "stock": 45 },
    { "color": "Flowy Emerald", "storage": "256GB", "priceModifier": 0,  "stock": 23 },
    { "color": "Silky Black", "storage": "512GB", "priceModifier": 5000, "stock": 18 }
  ],

  // DENORMALIZED AGGREGATE — fast to read, must be kept in sync
  "ratings": { "average": 4.4, "count": 1872 },

  "tags": ["5G", "flagship", "fast-charging", "AMOLED"],  // Array of primitives

  "createdAt": ISODate("2025-01-15T09:30:00Z"),
  "updatedAt": ISODate("2025-06-20T14:45:00Z")
}

// The SAME collection — a book document (completely different shape)
{
  "_id": ObjectId("507f1f77bcf86cd799439022"),
  "name": "The Alchemist",
  "price": 299,
  "category": "books",
  "brand": "HarperCollins",
  // specs is completely different — MongoDB doesn't care
  "specs": {
    "author": "Paulo Coelho",
    "isbn": "978-0062315007",
    "pages": 208,
    "language": "English",
    "edition": "25th Anniversary"
  },
  "ratings": { "average": 4.7, "count": 89234 }
}

// ── CRUD OPERATIONS in Mongoose (Node.js ODM) ─────────────────────
import mongoose, { Schema, Document, Model } from 'mongoose';

// 1. DEFINE SCHEMA — structure, types, validation, defaults, indexes
const productSchema = new Schema({
  name:        { type: String,  required: true, trim: true, maxlength: 200 },
  slug:        { type: String,  required: true, unique: true, lowercase: true },
  price:       { type: Number,  required: true, min: 0 },
  category:    { type: String,  required: true, enum: ['smartphones','books','clothing','home','sports'] },
  brand:       { type: String,  trim: true },
  sellerId:    { type: Schema.Types.ObjectId, ref: 'User', required: true },
  isActive:    { type: Boolean, default: true },
  specs:       { type: Schema.Types.Mixed },  // Flexible — different per category
  images:      [{ url: String, alt: String, isPrimary: { type: Boolean, default: false } }],
  variants:    [{ color: String, storage: String, priceModifier: { type: Number, default: 0 }, stock: { type: Number, default: 0, min: 0 } }],
  ratings:     { average: { type: Number, default: 0 }, count: { type: Number, default: 0 } },
  tags:        [String],
}, { timestamps: true });

// Define indexes for query performance
productSchema.index({ category: 1, price: 1 });           // Category + price filter
productSchema.index({ sellerId: 1 });                      // All products by seller
productSchema.index({ slug: 1 }, { unique: true });        // URL lookup
productSchema.index({ tags: 1 });                          // Tag search
productSchema.index({ name: 'text', 'specs.author': 'text' }); // Full-text search
productSchema.index({ isActive: 1, category: 1, price: 1 }); // Active products by category + price
productSchema.index({ 'ratings.average': -1 });            // Top-rated products
productSchema.index({ 'variants.stock': 1 }, { sparse: true }); // Low stock alert

// 2. COMPILE MODEL
const Product = mongoose.model('Product', productSchema);

// 3. CREATE — insert one document
const newProduct = await Product.create({
  name: 'OnePlus 12 5G',
  slug: 'oneplus-12-5g',
  price: 64999,
  category: 'smartphones',
  brand: 'OnePlus',
  sellerId: new mongoose.Types.ObjectId('507f1f77bcf86cd799439099'),
  specs: { processor: 'Snapdragon 8 Gen 3', ram: '12GB', storage: '256GB' },
  images: [{ url: 'https://cdn.example.com/op12.jpg', alt: 'OnePlus 12', isPrimary: true }],
  variants: [{ color: 'Silky Black', storage: '256GB', priceModifier: 0, stock: 45 }],
  tags: ['5G', 'flagship'],
});
// Returns: Mongoose Document with _id, createdAt, updatedAt auto-populated

// 4. READ — various find patterns
// Find one by ID
const product = await Product.findById('507f1f77bcf86cd799439011');

// Find with filter — returns array
const smartphonesUnder10k = await Product
  .find({ category: 'smartphones', price: { $lte: 10000 }, isActive: true })
  .sort({ price: 1 })            // Sort ascending by price
  .skip(0).limit(20)             // Pagination
  .select('name price images.0 ratings')  // Project only needed fields
  .lean();                       // Return plain objects (2-5x faster, no Mongoose overhead)

// Find with populate — replace sellerId with actual seller document
const productWithSeller = await Product
  .findById('507f1f77bcf86cd799439011')
  .populate('sellerId', 'name email shopName');  // Only fetch name, email, shopName from User

// 5. UPDATE — various update patterns
// Update specific fields (use $set — never update without operators on production)
await Product.findByIdAndUpdate(
  '507f1f77bcf86cd799439011',
  {
    $set:  { price: 62999, 'ratings.average': 4.5 },
    $inc:  { 'ratings.count': 1 },           // Increment counter atomically
    $push: { tags: 'AMOLED' },               // Add to array
  },
  { new: true, runValidators: true }         // Return updated doc, run schema validation
);

// Update nested array element with $elemMatch + $ positional operator
await Product.updateOne(
  { _id: '507f1f77bcf86cd799439011', 'variants.color': 'Silky Black' },
  { $inc: { 'variants.$.stock': -1 } }       // Decrement stock of matching variant
);

// 6. DELETE
await Product.findByIdAndDelete('507f1f77bcf86cd799439011');  // Hard delete
await Product.findByIdAndUpdate(id, { $set: { isActive: false } }); // Soft delete (preferred)`,
    renderCycle: [
      "Driver serializes operation to BSON → TCP connection to mongod → connection pool reuse",
      "Query planner checks index cache → selects optimal index via plan competition",
      "Index B-tree traversal → document pointer lookup → O(log n) vs O(n) full scan",
      "WiredTiger storage engine → cache check → memory hit (μs) or disk read (ms)",
      "Cursor assembled → batched result returned → BSON deserialized to JavaScript objects",
      "Write operations → journal (WAL) entry → memory update → async flush to disk",
    ],
    closingNote:
      "This five-step request cycle — serialize → plan → index → retrieve → return — is the engine of every MongoDB operation. Once you understand how the query planner uses indexes to avoid collection scans, how WiredTiger's cache determines whether a query is fast or slow, and how the cursor batches results, you can predict and prevent every common MongoDB performance problem. explain('executionStats') is your window into this cycle — learn to read it and you understand what MongoDB is actually doing with your queries.",
  },

  // ── SECTION 4: CORE CONCEPTS ─────────────────────────────────────
  coreConcepts: [
    {
      id: "schema-design",
      number: "4.1",
      title: "Schema Design — Embedding vs Referencing",
      icon: "📐",
      color: "blue",
      intro:
        "Schema design is the most important skill in MongoDB. A well-designed schema makes queries fast, keeps documents manageable, and matches your application's access patterns. A poorly designed schema makes queries slow, grows documents without bound, and requires expensive aggregation pipelines to answer basic questions. The foundational decision is embedding vs referencing: should related data live inside the same document (embedding) or in a separate collection connected by ID (referencing)? The answer depends entirely on your access patterns — how you read and write the data.",
      code: `// EMBEDDING vs REFERENCING — the core schema design decision

// ── RULE OF THUMB ─────────────────────────────────────────────────
// EMBED when:
//   • "Has a" relationship (a product HAS images — images don't exist without the product)
//   • Data is always retrieved together (you always fetch product WITH its images)
//   • The embedded array is bounded (max 10–50 items — not growing indefinitely)
//   • 1:few relationship (one product, few variants)
//
// REFERENCE when:
//   • Data is accessed independently (reviews are listed on a product page AND on a user's profile)
//   • The sub-collection grows without bound (a product could have 50,000 reviews)
//   • Many-to-many relationship (a product has many tags; a tag has many products)
//   • 1:many relationship where "many" is large (one seller, millions of products)

// ── EXAMPLE 1: E-COMMERCE PRODUCT — correct embedding ────────────
// Q: What do you always fetch when you load a product page?
// A: The product + its images + its specs + its variants + its ratings summary
// Decision: EMBED all of these — they're always needed together, bounded in size

const productDoc = {
  _id: ObjectId(),
  name: "Noise ColorFit Pro 4 Alpha",
  price: 2499,
  // EMBEDDED ✅ — always shown on product page, max ~8 images
  images: [
    { url: "https://cdn.example.com/img1.jpg", isPrimary: true },
    { url: "https://cdn.example.com/img2.jpg", isPrimary: false }
  ],
  // EMBEDDED ✅ — always shown, different per category (flexible)
  specs: { display: "1.78 inch AMOLED", battery: "7 days", sensors: "SpO2" },
  // EMBEDDED ✅ — always shown on product page, max ~5 variants
  variants: [
    { color: "Midnight Black", stock: 120 },
    { color: "Lilac Purple",   stock: 45 }
  ],
  // EMBEDDED ✅ — aggregate counts only (not individual reviews)
  ratings: { average: 4.2, count: 8934 },
  // REFERENCED ✅ — seller exists independently, accessed on seller's own profile page too
  sellerId: ObjectId("..."),
  // REFERENCED ✅ — reviews grow without bound, also shown on user's review history
  // reviews are in a SEPARATE 'reviews' collection with productId field
};

// ── EXAMPLE 2: REVIEWS — must be referenced (unbounded) ──────────
// ❌ WRONG: Embedding reviews in product
const productWithEmbeddedReviews = {
  _id: ObjectId(),
  name: "OnePlus 12",
  reviews: [
    { userId: ObjectId(), text: "Amazing phone!", rating: 5 },
    { userId: ObjectId(), text: "Great camera",   rating: 4 },
    // ... potentially 50,000 reviews → 16MB document limit hit, performance degrades
  ]
};

// ✅ CORRECT: Separate reviews collection
// reviews collection documents:
const reviewDoc = {
  _id: ObjectId(),
  productId: ObjectId("..."),  // Index this field!
  userId: ObjectId("..."),     // Index this field!
  rating: 5,
  title: "Best flagship under 70K",
  body: "Using it for 3 months. Camera is outstanding...",
  isVerifiedPurchase: true,
  helpfulVotes: 234,
  createdAt: new Date()
};
// Indexes: { productId: 1, createdAt: -1 } for product reviews sorted by date
//          { userId: 1 }                   for user's review history

// ── EXAMPLE 3: ORDER — hybrid embedding + denormalization ─────────
// This is the most important pattern: snapshot data at creation time
const orderDoc = {
  _id: ObjectId(),
  userId: ObjectId("..."),    // REFERENCE — user exists independently

  // EMBEDDED + DENORMALIZED ✅ — snapshot product data at order time
  // WHY DENORMALIZE: product name and price can change after order.
  // Order must always show what was purchased at the price it was purchased at.
  // DO NOT reference productId and look up price — prices change!
  items: [
    {
      productId: ObjectId("..."),    // Keep reference for linking back
      name: "OnePlus 12 5G",        // Snapshot — immutable
      imageUrl: "https://cdn.example.com/op12.jpg",  // Snapshot
      price: 64999,                  // Snapshot — what they actually paid
      quantity: 1,
      variant: { color: "Silky Black", storage: "256GB" }
    }
  ],

  // EMBEDDED ✅ — tightly coupled to this order
  shippingAddress: {
    name: "Arjun Kumar",
    street: "123 Brigade Road",
    city: "Bengaluru",
    state: "Karnataka",
    pincode: "560001",
    phone: "9876543210"
  },

  // EMBEDDED ✅ — payment state belongs to this order
  payment: {
    method: "razorpay",
    razorpayOrderId: "order_xxx",
    razorpayPaymentId: "pay_xxx",
    status: "paid",
    paidAt: new Date()
  },

  status: "delivered",
  totalAmount: 64999,
  createdAt: new Date()
};

// ── EXAMPLE 4: USER PROFILE — what to embed vs reference ─────────
const userDoc = {
  _id: ObjectId(),
  email: "arjun@example.com",
  name: "Arjun Kumar",
  passwordHash: "...",
  role: "buyer",

  // EMBEDDED ✅ — max 5 addresses, always shown in checkout
  addresses: [
    { label: "Home", street: "123 Brigade Rd", city: "Bengaluru", pincode: "560001", isDefault: true },
    { label: "Office", street: "456 MG Road", city: "Bengaluru", pincode: "560008", isDefault: false }
  ],

  // EMBEDDED ✅ — small, always needed for personalization
  preferences: { language: "en", currency: "INR", notifications: { email: true, sms: false } },

  // REFERENCED — orders are many and accessed independently
  // orders are in a separate 'orders' collection with userId field
  // DO NOT embed orders in user document

  createdAt: new Date()
};

// ── SCHEMA PATTERNS FOR COMMON PROBLEMS ──────────────────────────

// PATTERN: Bucket Pattern — time-series data
// Problem: IoT device sends temperature every minute → 1.4M documents/year per device
// Solution: Bucket documents — one doc per hour with array of measurements
const temperatureBucketDoc = {
  deviceId: "sensor-001",
  date: ISODate("2025-06-20T14:00:00Z"),  // Hour bucket
  count: 60,
  measurements: [
    { ts: ISODate("2025-06-20T14:00:00Z"), value: 24.5 },
    { ts: ISODate("2025-06-20T14:01:00Z"), value: 24.7 },
    // ... up to 60 measurements per document (one per minute in this hour)
  ],
  stats: { min: 24.1, max: 25.3, avg: 24.6 }  // Pre-computed for fast range queries
};
// Result: 1.4M documents/year → 24K bucket documents/year — 98% reduction

// PATTERN: Extended Reference — embed frequently-needed reference fields
// Problem: Product listing shows "Seller: Arjun's Electronics"
//         fetching seller name requires either populate() or $lookup for every product
// Solution: Embed the fields you need from the reference
const productWithExtendedRef = {
  _id: ObjectId(),
  name: "Samsung Galaxy S24",
  sellerId: ObjectId("..."),
  // EXTENDED REFERENCE: embed frequently-read seller fields
  sellerName: "Arjun's Electronics",  // Denormalized from users collection
  sellerRating: 4.8,
  // Trade-off: must update these when seller updates their name/rating
};`,
      usage:
        "Apply the access pattern test before every schema decision: 'What do I read together? What do I write together?' Data that is always read together belongs embedded. Data that is sometimes read independently belongs referenced. Always snapshot mutable data in order items — product prices change, but a historical order must preserve what the customer actually paid. The extended reference pattern (embed key fields from the reference) is the most practical optimization for eliminating $lookup on read-heavy paths.",
      mistake:
        "Designing a MongoDB schema that mirrors a relational database one-to-one — creating a separate collection for every entity and referencing everything with foreign-key-style IDs. If you need a $lookup for every query, you are negating MongoDB's primary performance advantage (single document reads) and adding $lookup's cost on top. The correct question is not 'should I normalize this?' but 'will I ever need to access this data independently of its parent?' If the answer is no — embed it.",
    },
    {
      id: "query-operators",
      number: "4.2",
      title: "Query Operators — Finding Documents with Precision",
      icon: "🔍",
      color: "emerald",
      intro:
        "MongoDB's query language is expressed as JSON/BSON objects rather than SQL strings. Every operation — filtering, projection, sorting, limiting — is a structured document. Understanding the full set of query operators is what enables you to express complex filtering logic: range queries, array matching, nested document queries, text search, and geospatial queries. These operators are the building blocks of both direct queries and aggregation pipeline $match stages.",
      code: `// MONGODB QUERY OPERATORS — complete reference

// ── COMPARISON OPERATORS ──────────────────────────────────────────
db.products.find({
  price: { $eq: 64999 },             // Equal (same as price: 64999)
  price: { $ne: 0 },                 // Not equal
  price: { $gt: 5000 },              // Greater than
  price: { $gte: 5000 },             // Greater than or equal
  price: { $lt: 100000 },            // Less than
  price: { $lte: 100000 },           // Less than or equal
  category: { $in: ['smartphones', 'tablets'] },  // In array of values
  category: { $nin: ['clothing'] },  // Not in array
});

// ── LOGICAL OPERATORS ─────────────────────────────────────────────
db.products.find({
  $and: [                            // All conditions must match
    { price: { $gte: 5000 } },
    { price: { $lte: 50000 } },
    { isActive: true }
  ],
  // Shorthand AND (implicit) — same as above:
  // price: { $gte: 5000, $lte: 50000 }, isActive: true

  $or: [                             // At least one condition must match
    { category: 'smartphones' },
    { category: 'tablets' }
  ],

  $nor: [                            // None of the conditions must match
    { isActive: false },
    { price: { $lt: 0 } }
  ],

  $not: { price: { $lt: 1000 } },    // Negates the condition
});

// ── ELEMENT OPERATORS ─────────────────────────────────────────────
db.products.find({
  imageUrl: { $exists: true },       // Field exists in document
  description: { $exists: false },   // Field does NOT exist
  price: { $type: 'number' },        // Field is of BSON type 'number' (or type number 16)
});

// ── ARRAY OPERATORS ───────────────────────────────────────────────
db.products.find({
  // Simple: array contains this value
  tags: '5G',                        // products where tags array contains '5G'

  // All values in array
  tags: { $all: ['5G', 'flagship'] }, // products with BOTH '5G' AND 'flagship' in tags

  // Array size
  images: { $size: 3 },              // products with exactly 3 images

  // Array element matching — use $elemMatch for multi-condition on same element
  // WRONG: { 'variants.color': 'Silky Black', 'variants.stock': { $gt: 10 } }
  // ↑ matches if ANY element has color='Silky Black' AND ANY element has stock>10
  // (could be different elements!)

  // CORRECT: $elemMatch — conditions apply to the SAME array element
  variants: { $elemMatch: { color: 'Silky Black', stock: { $gt: 10 } } },
  // Only matches if a SINGLE variant has both color='Silky Black' AND stock>10
});

// ── NESTED DOCUMENT QUERIES — use dot notation ────────────────────
db.products.find({
  'specs.ram': '12GB',               // Exact match on nested field
  'specs.battery': { $gte: 5000 },   // Numeric comparison on nested field
  'ratings.average': { $gte: 4.0 },  // Nested object field
  'images.isPrimary': true,          // Field in array of embedded docs
  'shippingAddress.city': 'Bengaluru',
});

// ── EVALUATION OPERATORS ──────────────────────────────────────────
// $regex — pattern matching (use indexes on the field for performance)
db.products.find({
  name: { $regex: /oneplus/i },      // Case-insensitive regex
  name: { $regex: '^OnePlus', $options: 'i' },  // Starts with (uses index if anchored at start)
});

// $where — evaluate JavaScript expression (AVOID — no index use, security risk)
// db.products.find({ $where: "this.price > this.compareAtPrice" }); // ← Never in production

// $expr — use aggregation expressions in query (MongoDB 3.6+)
db.products.find({
  $expr: {
    $gt: ['$ratings.count', 1000]    // Find products with more than 1000 ratings
  }
});

// Compare two fields in the same document
db.products.find({
  $expr: { $lt: ['$price', '$compareAtPrice'] }  // price < compareAtPrice (on sale)
});

// ── PROJECTION — control which fields are returned ────────────────
// Inclusion projection (1 = include, default 0 for all others)
db.products.find(
  { category: 'smartphones' },
  { name: 1, price: 1, 'images.$': 1, ratings: 1 }  // Only return these fields
  // _id is included by default — explicitly exclude: { _id: 0 }
);

// Exclusion projection (0 = exclude, default 1 for all others)
db.products.find(
  { isActive: true },
  { passwordHash: 0, __v: 0 }        // Exclude sensitive/internal fields
);

// $slice — return a subset of an array
db.products.find(
  { category: 'smartphones' },
  { images: { $slice: 1 } }          // Only return the first image
);

// ── TEXT SEARCH — full-text search with text index ─────────────────
// First create: db.products.createIndex({ name: 'text', description: 'text' })
db.products.find(
  { $text: { $search: 'oneplus flagship camera' } },
  { score: { $meta: 'textScore' } }   // Include relevance score
).sort({ score: { $meta: 'textScore' } });  // Sort by relevance

// ── GEOSPATIAL QUERIES ────────────────────────────────────────────
// First create: db.restaurants.createIndex({ location: '2dsphere' })
// location field: { type: 'Point', coordinates: [longitude, latitude] }

// Find restaurants within 2km of a point
db.restaurants.find({
  location: {
    $nearSphere: {
      $geometry: { type: 'Point', coordinates: [77.5946, 12.9716] },  // Bengaluru coordinates
      $maxDistance: 2000   // 2km in meters
    }
  }
});

// ── MONGOOSE QUERY CHAIN ──────────────────────────────────────────
// Mongoose wraps MongoDB queries in a chainable, Promise-based API
const results = await Product
  .find({
    category: { $in: ['smartphones', 'tablets'] },
    price: { $gte: 10000, $lte: 80000 },
    isActive: true,
    'ratings.average': { $gte: 4.0 }
  })
  .select('name price images ratings brand')  // Projection
  .sort({ 'ratings.average': -1, price: 1 })  // Sort
  .skip((page - 1) * limit)                   // Pagination
  .limit(limit)                               // Page size
  .populate('sellerId', 'name shopName')      // Join with users
  .lean();                                    // Return plain objects (faster)`,
      usage:
        "Use $elemMatch whenever you filter on multiple conditions on array elements — without it, MongoDB matches documents where different array elements satisfy different conditions (often not what you want). Use dot notation (specs.ram) for nested field queries — it works at any depth. For text search, always create a text index first and use $text rather than $regex for better performance and multi-word support. Use lean() in Mongoose for read-only operations — it returns plain JavaScript objects instead of Mongoose Documents, which are 2–5x faster.",
      mistake:
        "Using $regex with a pattern that doesn't anchor at the start of the string on a large collection. db.products.find({ name: { $regex: /oneplus/i } }) on a 1-million-document collection performs a full collection scan even if there's an index on name — because a regex that can match anywhere in the string can't use a B-tree index efficiently. A left-anchored regex (/^onePlus/i) CAN use an index. For full-text search, create a text index and use $text instead.",
    },
    {
      id: "aggregation-pipeline",
      number: "4.3",
      title: "Aggregation Pipeline — Analytics and Data Transformation",
      icon: "🌊",
      color: "purple",
      intro:
        "The MongoDB Aggregation Pipeline is the most powerful feature in MongoDB beyond basic CRUD. It is MongoDB's answer to SQL's GROUP BY, JOINs, window functions, and subqueries — combined into a composable sequence of document transformation stages. Every analytics feature, every dashboard, every reporting endpoint in a MongoDB-backed application uses the aggregation pipeline. Understanding the core stages ($match, $group, $project, $lookup, $unwind, $sort, $limit, $addFields, $facet) and knowing how to chain them efficiently is the skill that separates MongoDB beginners from professional backend engineers.",
      code: `// AGGREGATION PIPELINE — the complete analytics toolkit

// ── STAGE REFERENCE ───────────────────────────────────────────────
// $match   → filter documents (like SQL WHERE) — put first to reduce document count
// $group   → aggregate by key (like SQL GROUP BY)
// $project → reshape documents (include/exclude/compute fields)
// $sort    → order results
// $limit   → return first N results
// $skip    → skip N results (for pagination)
// $unwind  → deconstruct array into multiple documents
// $lookup  → join with another collection (expensive — model to avoid when possible)
// $addFields → add new computed fields without removing existing
// $count   → count matching documents
// $facet   → multiple aggregations in parallel
// $bucket  → group by numeric range

// ── EXAMPLE 1: Sales Analytics Dashboard ─────────────────────────
db.orders.aggregate([
  // Stage 1: Filter — only delivered orders in last 30 days
  { $match: {
    status: 'delivered',
    createdAt: { $gte: new Date(Date.now() - 30 * 86400000) }
  }},

  // Stage 2: Unwind items array — one document per order item
  { $unwind: '$items' },

  // Stage 3: Group by product to get sales metrics
  { $group: {
    _id: '$items.productId',
    productName:  { $first: '$items.name' },    // Take first occurrence
    totalRevenue: { $sum: { $multiply: ['$items.price', '$items.quantity'] } },
    totalUnitsSold: { $sum: '$items.quantity' },
    orderCount:   { $sum: 1 },
    avgOrderValue: { $avg: { $multiply: ['$items.price', '$items.quantity'] } },
  }},

  // Stage 4: Add rank field
  { $sort: { totalRevenue: -1 } },

  // Stage 5: Only top 20 products
  { $limit: 20 },
]);

// ── EXAMPLE 2: $lookup — JOIN with users collection ───────────────
db.orders.aggregate([
  { $match: { status: 'pending', createdAt: { $gte: new Date('2025-06-01') } } },

  // $lookup: join orders with users
  { $lookup: {
    from: 'users',              // Join from this collection
    localField: 'userId',       // Field in current collection
    foreignField: '_id',        // Field in joined collection
    as: 'user',                 // Output array field name
    pipeline: [                 // Optional: filter/project in the joined collection
      { $project: { name: 1, email: 1, phone: 1 } }  // Only fetch needed fields
    ]
  }},

  // $unwind to convert user array to single object (1:1 join)
  { $unwind: { path: '$user', preserveNullAndEmpty: true } },

  { $project: {
    _id: 1,
    totalAmount: 1,
    createdAt: 1,
    'user.name': 1,
    'user.email': 1,
    itemCount: { $size: '$items' }
  }}
]);

// ── EXAMPLE 3: $facet — Multiple aggregations in ONE query ─────────
// Perfect for: search results with filter sidebar (category counts, price ranges, brands)
db.products.aggregate([
  { $match: {
    isActive: true,
    $text: { $search: 'wireless headphones' }
  }},

  { $facet: {
    // Main results (paginated)
    products: [
      { $sort: { score: { $meta: 'textScore' }, 'ratings.average': -1 } },
      { $skip: 0 },
      { $limit: 20 },
      { $project: { name: 1, price: 1, 'images': { $slice: ['$images', 1] }, ratings: 1 } }
    ],

    // Category counts for filter sidebar
    byCategory: [
      { $group: { _id: '$category', count: { $sum: 1 } } },
      { $sort: { count: -1 } }
    ],

    // Brand counts
    byBrand: [
      { $group: { _id: '$brand', count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 10 }
    ],

    // Price distribution buckets
    priceRanges: [
      { $bucket: {
        groupBy: '$price',
        boundaries: [0, 1000, 5000, 15000, 50000, 100000],
        default: 'Other',
        output: { count: { $sum: 1 }, minPrice: { $min: '$price' }, maxPrice: { $max: '$price' } }
      }}
    ],

    // Total count for pagination
    totalCount: [{ $count: 'count' }]
  }}
]);
// Returns ONE document with all facets — replaces 5 separate queries!

// ── EXAMPLE 4: Complex Business Analytics ────────────────────────
// Monthly revenue with month-over-month growth (requires $setWindowFields — MongoDB 5.0+)
db.orders.aggregate([
  { $match: { status: 'delivered' } },

  // Group by month
  { $group: {
    _id: { $dateToString: { format: '%Y-%m', date: '$createdAt' } },
    revenue: { $sum: '$totalAmount' },
    orders: { $sum: 1 },
    uniqueCustomers: { $addToSet: '$userId' }
  }},

  // Add customer count (size of set)
  { $addFields: { uniqueCustomerCount: { $size: '$uniqueCustomers' } } },

  { $unset: 'uniqueCustomers' },  // Remove the large set array

  { $sort: { _id: 1 } },

  // Window function: add previous month revenue for MoM comparison (MongoDB 5.0+)
  { $setWindowFields: {
    sortBy: { _id: 1 },
    output: {
      prevMonthRevenue: {
        $shift: { output: '$revenue', by: -1 }  // Previous document's revenue
      }
    }
  }},

  // Compute growth percentage
  { $addFields: {
    growthPct: {
      $cond: {
        if: { $ifNull: ['$prevMonthRevenue', false] },
        then: {
          $multiply: [
            { $divide: [{ $subtract: ['$revenue', '$prevMonthRevenue'] }, '$prevMonthRevenue'] },
            100
          ]
        },
        else: null
      }
    }
  }},

  { $project: {
    month: '$_id',
    revenue: 1,
    orders: 1,
    uniqueCustomerCount: 1,
    prevMonthRevenue: 1,
    growthPct: { $round: ['$growthPct', 2] }
  }}
]);

// ── MONGOOSE AGGREGATION ──────────────────────────────────────────
// Mongoose's aggregate() method — accepts array of pipeline stages
const salesReport = await Order.aggregate([
  { $match: { status: 'delivered', createdAt: { $gte: thirtyDaysAgo } } },
  { $unwind: '$items' },
  { $group: {
    _id: '$items.productId',
    totalRevenue: { $sum: { $multiply: ['$items.price', '$items.quantity'] } },
    unitsSold: { $sum: '$items.quantity' }
  }},
  { $sort: { totalRevenue: -1 } },
  { $limit: 10 }
]);
// Returns plain JavaScript objects (not Mongoose Documents)`,
      usage:
        "Always put $match as the first stage to reduce documents before expensive stages. Use $facet when a search page needs both results and filter counts — one aggregation replaces five queries. Use $unwind + $group to analyze array contents (order items, product variants). Use $lookup sparingly — it's expensive and signals a schema that might benefit from embedding or extended references. For analytics on large collections, consider Atlas Charts or Data Federation instead of running heavy aggregations on your operational cluster.",
      mistake:
        "Putting $sort or $group before $match. Every document that passes $group or $sort must be processed even if it would be eliminated by a later $match. The pipeline processes documents left-to-right — always filter first (smallest document set), then transform, then sort, then limit. A $match at the start of the pipeline can use indexes; a $match after $group or $unwind cannot.",
    },
    {
      id: "indexes-performance",
      number: "4.4",
      title: "Indexes and Query Performance Optimization",
      icon: "⚡",
      color: "orange",
      intro:
        "Database indexes are the single most impactful performance tool in MongoDB. A query that scans 10 million documents without an index takes seconds. The same query using an index finds matching documents in milliseconds. Understanding index types, compound index field ordering, the ESR rule (Equality-Sort-Range), how to read explain() output, and how to identify slow queries with the MongoDB profiler is the skill that transforms good MongoDB developers into great ones.",
      code: `// MONGODB INDEXING — complete reference with performance analysis

// ── INDEX TYPES ───────────────────────────────────────────────────

// 1. SINGLE FIELD INDEX — index on one field
db.products.createIndex({ sellerId: 1 });             // Ascending (1) — for range, sort, equality
db.products.createIndex({ 'ratings.average': -1 });   // Descending (-1) — for DESC sort
// Use 1 or -1 depending on your sort direction to enable covered queries

// 2. COMPOUND INDEX — index on multiple fields
// CRITICAL: Field order matters. The ESR Rule: Equality → Sort → Range
// Fields used in equality conditions come FIRST
// Fields used in sort come NEXT
// Fields used in range conditions come LAST
db.products.createIndex({ category: 1, isActive: 1, price: 1 });
// Supports queries like:
//   { category: 'smartphones', isActive: true }                           ✅ Uses index
//   { category: 'smartphones', isActive: true, price: { $gte: 5000 } }   ✅ Uses index
//   { category: 'smartphones', isActive: true }.sort({ price: 1 })       ✅ Uses index
//   { isActive: true }                                                     ❌ Index not used (first field missing)
//   { price: { $gte: 5000 } }                                             ❌ Index not used

// 3. MULTIKEY INDEX — automatically created when indexed field is an array
db.products.createIndex({ tags: 1 });                 // Enables: find({ tags: '5G' })
// MongoDB creates one index entry per array element
// Note: Cannot create a compound index with two array fields

// 4. TEXT INDEX — full-text search
db.products.createIndex({
  name: 'text',
  description: 'text',
  'specs.brand': 'text'
}, {
  weights: { name: 10, description: 5, 'specs.brand': 3 },  // Relevance weighting
  default_language: 'english',
  name: 'product_text_index'
});
// One text index per collection (can include multiple fields)

// 5. 2DSPHERE INDEX — geospatial queries
db.restaurants.createIndex({ location: '2dsphere' });
// location must be GeoJSON: { type: 'Point', coordinates: [lng, lat] }

// 6. PARTIAL INDEX — index only documents matching a filter (smaller, faster)
db.products.createIndex(
  { price: 1, category: 1 },
  { partialFilterExpression: { isActive: true } }  // Only index active products
);
// Much smaller than full index if most products are active

// 7. SPARSE INDEX — only index documents where the field exists
db.products.createIndex({ couponCode: 1 }, { sparse: true });
// Skips documents where couponCode doesn't exist — smaller index

// 8. UNIQUE INDEX
db.users.createIndex({ email: 1 }, { unique: true });
db.products.createIndex({ slug: 1 }, { unique: true });

// 9. TTL INDEX — automatically delete documents after expiration
db.sessions.createIndex(
  { createdAt: 1 },
  { expireAfterSeconds: 86400 }  // Delete sessions 24 hours after createdAt
);
// Perfect for: sessions, OTP codes, temporary tokens, cache documents

// ── THE EXPLAIN() METHOD — understand what MongoDB is doing ───────
const plan = await db.products.find({
  category: 'smartphones',
  isActive: true,
  price: { $gte: 10000 }
}).explain('executionStats');

// KEY FIELDS TO READ:
// executionStats.nReturned          — documents returned (should match your expectation)
// executionStats.totalDocsExamined  — documents examined (want this ≈ nReturned)
// executionStats.totalKeysExamined  — index keys scanned
// executionStats.executionTimeMillis — actual execution time

// GOOD explain output (index used):
// {
//   "winningPlan": { "stage": "FETCH", "inputStage": { "stage": "IXSCAN", "indexName": "category_1_isActive_1_price_1" } }
//   "nReturned": 45,
//   "totalDocsExamined": 45,    ← Same as nReturned — perfect index selectivity
//   "totalKeysExamined": 45,
//   "executionTimeMillis": 2
// }

// BAD explain output (collection scan):
// {
//   "winningPlan": { "stage": "COLLSCAN" }   ← No index used!
//   "nReturned": 45,
//   "totalDocsExamined": 1000000,  ← Scanned 1M docs to find 45 — terrible
//   "executionTimeMillis": 3400    ← 3.4 seconds for a simple query
// }

// ── SLOW QUERY PROFILER ───────────────────────────────────────────
// Enable profiling for queries taking > 100ms
db.setProfilingLevel(1, { slowms: 100 });

// View slow queries
db.system.profile.find().sort({ ts: -1 }).limit(10).pretty();
// Key fields: millis (execution time), ns (namespace), command (the query), planSummary

// MongoDB Atlas: Built-in Performance Advisor automatically recommends indexes
// Atlas Query Profiler: shows all slow queries with visual plan analysis

// ── COMMON PERFORMANCE PATTERNS ──────────────────────────────────

// COVERING INDEX — query answered entirely from the index (no document fetch)
// Create index that includes all fields used in query AND projection
db.products.createIndex({ category: 1, isActive: 1, price: 1, name: 1 });

// This query is covered — never fetches documents from disk
db.products.find(
  { category: 'smartphones', isActive: true },
  { name: 1, price: 1, _id: 0 }   // _id: 0 is required for covered query
);
// explain() shows: "stage": "PROJECTION_COVERED" — fastest possible query

// PAGINATION: Cursor-based is faster than skip() for deep pages
// Problem with skip(50000): MongoDB must scan and discard 50,000 documents
// Solution: use _id > lastId as cursor

// Page 1:
const page1 = await Product
  .find({ category: 'smartphones', isActive: true })
  .sort({ _id: 1 })
  .limit(20)
  .lean();
const lastId = page1[page1.length - 1]._id;

// Page 2 (cursor-based):
const page2 = await Product
  .find({ category: 'smartphones', isActive: true, _id: { $gt: lastId } })
  .sort({ _id: 1 })
  .limit(20)
  .lean();
// Always O(log n) regardless of page depth`,
      usage:
        "Apply the ESR rule (Equality-Sort-Range) for all compound indexes: put equality fields first, sort fields in the middle, range fields last. Always run explain('executionStats') on new queries and check totalDocsExamined vs nReturned — they should be equal or close. Create a TTL index for any collection that stores temporary data (sessions, OTP codes, cache entries). Use the Atlas Performance Advisor in production — it automatically analyzes your query patterns and recommends the exact indexes you need.",
      mistake:
        "Not running explain() before deploying a new query to production. A query that is fast on your development machine with 1,000 test documents may be catastrophically slow on production with 10 million documents. The query pattern that looked fine locally does a COLLSCAN on production and takes 45 seconds. Always test queries with explain() on a production-size dataset before deployment. If you can't test on production data, test on a representative sample (at least 100,000 documents) with the same index configuration.",
    },
    {
      id: "mongoose-advanced",
      number: "4.5",
      title: "Mongoose ODM — Advanced Patterns and Production Usage",
      icon: "🔧",
      color: "teal",
      intro:
        "Mongoose is the most widely used Node.js ODM (Object Document Mapper) for MongoDB. It adds schema validation, type casting, middleware (pre/post hooks), virtuals, instance methods, static methods, and plugins on top of the MongoDB Node.js driver. Understanding Mongoose's advanced features — middleware hooks for pre-save password hashing, virtuals for computed properties, population for reference resolution, and the lean() optimization — is daily work for any Node.js developer building MongoDB-backed APIs.",
      code: `// MONGOOSE ADVANCED PATTERNS — production-ready ODM usage

import mongoose, { Schema, Document, Model, Types } from 'mongoose';

// ── 1. SCHEMA WITH ALL FEATURES ───────────────────────────────────
interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: 'buyer' | 'seller' | 'admin';
  isActive: boolean;
  refreshToken?: string;
  passwordResetToken?: string;
  passwordResetExpires?: Date;
  // Virtual
  displayName: string;
  // Methods
  comparePassword(candidatePassword: string): Promise<boolean>;
  generatePasswordResetToken(): string;
}

interface IUserModel extends Model<IUser> {
  // Static method
  findByEmail(email: string): Promise<IUser | null>;
}

const userSchema = new Schema<IUser, IUserModel>({
  name:  { type: String, required: [true, 'Name is required'], trim: true, minlength: 2, maxlength: 100 },
  email: { type: String, required: true, unique: true, lowercase: true,
           validate: { validator: (v: string) => /\S+@\S+\.\S+/.test(v), message: 'Invalid email' } },
  password: { type: String, required: true, minlength: 8, select: false },  // select:false — never returned by default
  role:  { type: String, enum: ['buyer', 'seller', 'admin'], default: 'buyer' },
  isActive: { type: Boolean, default: true },
  refreshToken: { type: String, select: false },
  passwordResetToken: { type: String, select: false },
  passwordResetExpires: { type: Date, select: false },
}, {
  timestamps: true,              // Adds createdAt and updatedAt
  toJSON: { virtuals: true },    // Include virtuals in JSON output
  toObject: { virtuals: true },
});

// ── 2. INDEXES ────────────────────────────────────────────────────
userSchema.index({ email: 1 }, { unique: true });
userSchema.index({ role: 1 });
userSchema.index({ 'seller.shopSlug': 1 }, { sparse: true });

// ── 3. VIRTUAL PROPERTIES — computed fields, not stored in DB ─────
userSchema.virtual('displayName').get(function () {
  return this.name.split(' ')[0];  // First name only
});

userSchema.virtual('orders', {   // Virtual populate — fetch orders without embedding
  ref: 'Order',
  localField: '_id',
  foreignField: 'userId',
  justOne: false,
});

// ── 4. PRE/POST HOOKS (Middleware) ────────────────────────────────
import bcrypt from 'bcryptjs';
import crypto from 'crypto';

// Pre-save: hash password before storing
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();  // Only hash if password changed
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

// Pre-save: update updatedAt (handled by timestamps: true, but pattern is useful)
userSchema.pre('findOneAndUpdate', function (next) {
  this.set({ updatedAt: new Date() });
  next();
});

// Post hook: log after deletion
userSchema.post('findOneAndDelete', function (doc) {
  if (doc) console.log(User {doc.email} deleted);
});

// ── 5. INSTANCE METHODS — methods on document instances ──────────
userSchema.methods.comparePassword = async function (candidatePassword: string): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password);
};

userSchema.methods.generatePasswordResetToken = function (): string {
  const resetToken = crypto.randomBytes(32).toString('hex');
  this.passwordResetToken = crypto.createHash('sha256').update(resetToken).digest('hex');
  this.passwordResetExpires = new Date(Date.now() + 10 * 60 * 1000);  // 10 minutes
  return resetToken;  // Return the plain token (store hashed in DB)
};

// ── 6. STATIC METHODS — methods on the Model class ───────────────
userSchema.statics.findByEmail = function (email: string) {
  return this.findOne({ email: email.toLowerCase() });
};

const User = mongoose.model<IUser, IUserModel>('User', userSchema);

// ── 7. POPULATION — resolving references ─────────────────────────
// Simple populate
const order = await Order.findById(id).populate('userId', 'name email');

// Nested populate
const order2 = await Order
  .findById(id)
  .populate({
    path: 'items.productId',
    select: 'name images ratings',
    populate: {             // Nested populate: product → seller
      path: 'sellerId',
      select: 'name shopName'
    }
  });

// Virtual populate — populate orders on user
const userWithOrders = await User
  .findById(userId)
  .populate({
    path: 'orders',
    match: { status: { $ne: 'cancelled' } },
    options: { sort: { createdAt: -1 }, limit: 5 }
  });

// ── 8. TRANSACTIONS — multi-document atomic operations ────────────
// Requires MongoDB replica set (even a single-node replica set for dev)
const session = await mongoose.startSession();
session.startTransaction();
try {
  // Both operations succeed or both roll back
  const order = await Order.create([{
    userId, items, totalAmount, shippingAddress, status: 'confirmed'
  }], { session });

  // Decrement stock for each item atomically
  for (const item of items) {
    const result = await Product.findOneAndUpdate(
      { _id: item.productId, 'variants.color': item.color, 'variants.stock': { $gte: item.quantity } },
      { $inc: { 'variants.$.stock': -item.quantity } },
      { session, new: true }
    );
    if (!result) throw new Error(Insufficient stock for product {item.productId});
  }

  await session.commitTransaction();
  return order[0];
} catch (error) {
  await session.abortTransaction();
  throw error;
} finally {
  session.endSession();
}

// ── 9. LEAN() — performance optimization for read operations ─────
// Mongoose Document objects have methods, getters, and virtual properties
// Plain JavaScript objects (lean) are much faster for read-only operations

// SLOW: Returns Mongoose Documents (with all overhead)
const products = await Product.find({ isActive: true });
// products[0] is a Mongoose Document — has save(), toJSON(), virtuals, etc.

// FAST: Returns plain JavaScript objects (2-5x faster, less memory)
const products2 = await Product.find({ isActive: true }).lean();
// products2[0] is a plain object — faster serialization, smaller memory footprint
// Trade-off: no methods, no virtuals, no automatic type casting

// Rule: Use lean() for all read operations that don't need save() or Mongoose methods`,
      usage:
        "Use pre-save middleware for password hashing and data normalization — it runs consistently regardless of which code path creates/updates the document. Use select: false on sensitive fields (password, refreshToken, resetToken) — they're never returned in queries unless explicitly requested. Use lean() for all read-only API endpoints — the performance improvement is measurable (2–5x) for large result sets. Use transactions for any operation that must atomically modify multiple documents (order creation + stock decrement).",
      mistake:
        "Calling Document.save() in a loop to update multiple documents. Saving 100 documents in a loop generates 100 separate MongoDB write operations, each with a network round trip. Use Model.bulkWrite() for batch operations or Model.updateMany() when applying the same update to multiple documents. A bulkWrite with 100 operations sends one request to MongoDB instead of 100 — dramatically faster and less error-prone.",
    },
    {
      id: "mongodb-atlas",
      number: "4.6",
      title: "MongoDB Atlas — Cloud Deployment and Operations",
      icon: "☁️",
      color: "blue",
      intro:
        "MongoDB Atlas is the official managed cloud database service for MongoDB, running on AWS, Google Cloud, and Azure. For the vast majority of developers and companies in India, Atlas is the right way to run MongoDB in production. It provides automatic backups, point-in-time recovery, auto-scaling, global distribution, built-in monitoring, and a Performance Advisor that automatically recommends indexes based on your actual query patterns. Understanding how to deploy, configure, secure, and monitor a MongoDB Atlas cluster is a practical production skill.",
      code: `// MONGODB ATLAS — connection, configuration, and best practices

// ── CONNECTION STRING ─────────────────────────────────────────────
// Atlas provides your connection string in: Cluster → Connect → Drivers
// Format: mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/dbname

// Basic connection (production)
import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI!; // Store in environment variable — never hardcode!

export async function connectDatabase(): Promise<void> {
  const MAX_RETRIES = 5;
  let retries = 0;

  while (retries < MAX_RETRIES) {
    try {
      await mongoose.connect(MONGODB_URI, {
        // Connection pool settings
        maxPoolSize: 10,              // Maximum connections in pool
        minPoolSize: 2,               // Minimum connections maintained
        // Timeout settings
        serverSelectionTimeoutMS: 5000,   // How long to try to connect
        socketTimeoutMS: 45000,           // How long to wait for a response
        connectTimeoutMS: 10000,          // How long for initial connection
        // Heartbeat
        heartbeatFrequencyMS: 10000,
      });

      console.log('✅ MongoDB Atlas connected');

      // Monitor connection events
      mongoose.connection.on('disconnected', () => {
        console.warn('⚠️ MongoDB disconnected. Attempting reconnect...');
      });
      mongoose.connection.on('reconnected', () => {
        console.log('✅ MongoDB reconnected');
      });
      mongoose.connection.on('error', (err) => {
        console.error('❌ MongoDB connection error:', err);
      });

      return;
    } catch (error) {
      retries++;
      console.error(\`MongoDB connection attempt \${retries} failed:\`, error);
      if (retries === MAX_RETRIES) {
        console.error('All MongoDB connection attempts failed. Exiting...');
        process.exit(1);
      }
      await new Promise(resolve => setTimeout(resolve, 5000 * retries)); // Exponential backoff
    }
  }
}

// ── ATLAS SECURITY CONFIGURATION ─────────────────────────────────

// 1. DATABASE USER (Atlas UI → Database Access)
// Create a user with principle of least privilege:
// - readWrite on specific database only (not admin)
// - Use strong auto-generated password
// - Rotate passwords periodically

// 2. NETWORK ACCESS (Atlas UI → Network Access)
// Production: Add specific IP addresses (your server's static IP or VPC CIDR range)
// Development: Add your current IP (Atlas: "Add Current IP Address" button)
// NEVER: 0.0.0.0/0 (allow from anywhere) in production — security risk

// 3. CONNECTION STRING SECURITY
// Store connection string in environment variable
// For Node.js: process.env.MONGODB_URI
// For Vercel/Railway/Render: set in deployment environment variables

// ── ATLAS TIERS AND SIZING ────────────────────────────────────────
// M0 (Free): 512MB storage — perfect for development and small projects
// M2/M5: Shared clusters — good for small production apps, limited ops/second
// M10: $0.09/hour — 2GB RAM, 10GB storage — first dedicated tier, recommended start
// M20: $0.19/hour — 4GB RAM, 20GB storage — high-traffic production
// M30: $0.34/hour — 8GB RAM, 40GB storage — data-heavy production

// Auto-scaling: Atlas M10+ can scale up automatically when CPU/memory thresholds hit

// ── ATLAS MONITORING AND PERFORMANCE ADVISOR ─────────────────────
// Atlas UI → Performance Advisor:
// - Shows slow queries (default: queries > 100ms)
// - Automatically recommends compound indexes based on query patterns
// - Click "Create Index" to apply recommendation with zero downtime (rolling build)

// Atlas UI → Real-Time Performance Panel:
// - Operations per second (ops/sec) — your throughput
// - Query targeting ratio — ratio of documents scanned to returned
//   (should be close to 1:1 — high ratio = missing indexes)
// - Cache utilization — percentage of reads served from RAM
//   (target > 80% — low means working set exceeds RAM)

// ── MONGOOSE CONNECTION IN EXPRESS APP ───────────────────────────
// server.ts — connect before starting HTTP server
import { connectDatabase } from './config/database';
import { createApp } from './app';

async function bootstrap() {
  // Connect to MongoDB first
  await connectDatabase();

  const app = createApp();
  const PORT = process.env.PORT ?? 5000;

  const server = app.listen(PORT, () => {
    console.log(\`Server running on port \${PORT}\`);
  });

  // Graceful shutdown — close DB connections before process exits
  const shutdown = async (signal: string) => {
    console.log(\`\${signal} received. Graceful shutdown...\`);
    server.close(async () => {
      await mongoose.connection.close();
      console.log('MongoDB connection closed.');
      process.exit(0);
    });
    // Force shutdown after 10 seconds if graceful shutdown takes too long
    setTimeout(() => { console.error('Forced shutdown'); process.exit(1); }, 10000);
  };

  process.on('SIGTERM', () => shutdown('SIGTERM'));
  process.on('SIGINT', () => shutdown('SIGINT'));
  process.on('unhandledRejection', (reason) => {
    console.error('Unhandled Rejection:', reason);
  });
}

bootstrap();

// ── ATLAS SEARCH — full-text search powered by Lucene ────────────
// Atlas Search is a full-text search engine built into Atlas
// More powerful than MongoDB text indexes: typo tolerance, autocomplete, facets
// Configure in Atlas UI → Search → Create Search Index

// Define Atlas Search index (atlas-search-index.json):
// {
//   "mappings": {
//     "dynamic": false,
//     "fields": {
//       "name": [{ "type": "string", "analyzer": "lucene.standard" }, { "type": "autocomplete" }],
//       "description": { "type": "string", "analyzer": "lucene.standard" },
//       "brand": { "type": "string" },
//       "category": { "type": "string" },
//       "price": { "type": "number" },
//       "ratings.average": { "type": "number" }
//     }
//   }
// }

// Atlas Search query
const searchResults = await Product.aggregate([
  { $search: {
    index: 'products_search',      // Name of the Atlas Search index
    compound: {
      must: [{
        text: {
          query: 'oneplus flagship',
          path: ['name', 'description'],
          fuzzy: { maxEdits: 1 }  // Allow 1 character typo tolerance
        }
      }],
      filter: [{
        range: { path: 'price', gte: 10000, lte: 100000 }
      }]
    }
  }},
  { $limit: 20 },
  { $project: { name: 1, price: 1, images: { $slice: ['$images', 1] }, score: { $meta: 'searchScore' } } }
]);`,
      usage:
        "Always store your MongoDB URI in an environment variable — never in code or git. Start with M0 (free tier) for development, M10 for production (first dedicated tier with guaranteed performance). Configure IP allowlist immediately — don't use 0.0.0.0/0 in production. Enable Atlas Performance Advisor from day one and create the recommended indexes — it monitors your actual query patterns and gives you the exact composite indexes you need. Use Atlas Search instead of $text indexes for any production full-text search feature.",
      mistake:
        "Setting maxPoolSize to 1 or using default connection settings without understanding connection pooling. A Node.js application that handles 100 concurrent requests needs more than 1 database connection. The default maxPoolSize in Mongoose is 5. For an API server that handles significant traffic, increase to 10–20 connections. Too few connections causes request queuing; too many overwhelms the MongoDB server. For serverless/edge functions (Vercel, AWS Lambda), use the mongoose connection caching pattern to reuse connections across function invocations.",
    },
    {
      id: "change-streams-realtime",
      number: "4.7",
      title: "Change Streams and Real-Time Features",
      icon: "📡",
      color: "yellow",
      intro:
        "MongoDB Change Streams allow applications to subscribe to real-time notifications of changes to collections, databases, or entire deployments. They are MongoDB's built-in event sourcing mechanism — every insert, update, replace, and delete triggers an event that your application can react to. Change streams power real-time features like live order tracking, inventory update notifications, live leaderboards, and event-driven microservice communication without polling. Understanding change streams is increasingly expected for senior MongoDB developers building event-driven architectures.",
      code: `// MONGODB CHANGE STREAMS — real-time event processing

import mongoose from 'mongoose';
import { ChangeStreamDocument } from 'mongodb';

// ── BASIC CHANGE STREAM ───────────────────────────────────────────
// Watch a collection for all changes
const orderCollection = mongoose.connection.collection('orders');

const changeStream = orderCollection.watch([], {
  fullDocument: 'updateLookup',  // Include the full document after updates (not just diff)
  fullDocumentBeforeChange: 'whenAvailable',  // Include document before change (requires preAndPostImages)
});

changeStream.on('change', (change: ChangeStreamDocument) => {
  console.log('Change detected:', change.operationType);

  switch (change.operationType) {
    case 'insert':
      // New order created
      const newOrder = change.fullDocument;
      notifyOrderCreated(newOrder);
      break;

    case 'update':
      // Order updated — e.g., status changed
      const orderId = change.documentKey._id;
      const updatedFields = change.updateDescription?.updatedFields;
      if (updatedFields?.status) {
        notifyOrderStatusChange(orderId, updatedFields.status);
      }
      break;

    case 'delete':
      console.log('Order deleted:', change.documentKey._id);
      break;
  }
});

// ── FILTERED CHANGE STREAM — only watch relevant changes ─────────
// Watch for order status changes only
const statusChangeStream = orderCollection.watch([
  {
    $match: {
      operationType: { $in: ['update', 'replace'] },
      'updateDescription.updatedFields.status': { $exists: true }
    }
  },
  {
    $project: {
      'documentKey._id': 1,
      'updateDescription.updatedFields.status': 1,
      'fullDocument.userId': 1,
    }
  }
], { fullDocument: 'updateLookup' });

statusChangeStream.on('change', async (change: any) => {
  const orderId = change.documentKey._id;
  const newStatus = change.updateDescription?.updatedFields?.status;
  const userId = change.fullDocument?.userId;

  if (newStatus && userId) {
    // Notify the customer via WebSocket or push notification
    await notifyUser(userId, {
      type: 'ORDER_STATUS_UPDATE',
      orderId,
      status: newStatus,
      message: getStatusMessage(newStatus)
    });
  }
});

// ── CHANGE STREAM WITH SOCKET.IO — real-time order tracking ───────
import { Server as SocketServer } from 'socket.io';

export function setupOrderTracking(io: SocketServer): void {
  const orderCollection = mongoose.connection.collection('orders');

  const changeStream = orderCollection.watch([
    { $match: { operationType: { $in: ['insert', 'update'] } } }
  ], { fullDocument: 'updateLookup' });

  changeStream.on('change', (change: any) => {
    const order = change.fullDocument;
    if (!order) return;

    // Emit to customer tracking this order
    io.to(\`order:\${order._id}\`).emit('order:update', {
      orderId: order._id,
      status: order.status,
      updatedAt: order.updatedAt
    });

    // Emit to customer's personal room for notification
    io.to(\`user:\${order.userId}\`).emit('notification', {
      type: 'order-update',
      message: \`Your order is now \${order.status}\`,
      orderId: order._id
    });
  });

  // Resume stream on error with retry token
  changeStream.on('error', async (error) => {
    console.error('Change stream error:', error);
    // Restart with resume token to avoid missing events
    await restartChangeStream(io);
  });
}

// ── RESUME TOKEN — recover from interruptions without missing events ──
// MongoDB assigns a resumeAfter token to each change event
// Store the last processed resume token to restart from that point if the stream breaks

let lastResumeToken: unknown = null;

function startChangeStream() {
  const stream = mongoose.connection.collection('orders').watch(
    [],
    {
      resumeAfter: lastResumeToken ?? undefined,  // Resume from last processed position
      fullDocument: 'updateLookup'
    }
  );

  stream.on('change', (change: any) => {
    lastResumeToken = change._id;  // Update resume token on each event
    processChange(change);
  });

  stream.on('error', async (err) => {
    console.error('Stream error, resuming from token:', lastResumeToken);
    stream.close();
    setTimeout(() => startChangeStream(), 2000);  // Restart after 2s
  });

  return stream;
}

// ── TRANSACTIONAL OUTBOX PATTERN — guaranteed event delivery ──────
// Problem: Update DB + publish event — what if the event publish fails?
// Solution: Write event to an 'outbox' collection in the SAME transaction
// A separate process reads the outbox and publishes to Kafka/Redis

const session = await mongoose.startSession();
session.startTransaction();
try {
  // 1. Business operation
  await Order.findByIdAndUpdate(orderId, { $set: { status: 'shipped' } }, { session });

  // 2. Write to outbox in same transaction
  await OutboxEvent.create([{
    aggregateType: 'Order',
    aggregateId: orderId,
    eventType: 'ORDER_SHIPPED',
    payload: { orderId, shippedAt: new Date(), trackingNumber: 'TRK123' },
    status: 'pending',
  }], { session });

  await session.commitTransaction();
} catch (err) {
  await session.abortTransaction();
  throw err;
} finally {
  session.endSession();
}

// Separate process reads outbox and publishes events
// (can use change stream on the outbox collection!)
mongoose.connection.collection('outbox_events').watch([
  { $match: { operationType: 'insert' } }
]).on('change', async (change: any) => {
  const event = change.fullDocument;
  // Publish to Kafka, Redis Pub/Sub, SQS, etc.
  await publishEvent(event);
  await OutboxEvent.findByIdAndUpdate(event._id, { $set: { status: 'published', publishedAt: new Date() } });
});`,
      usage:
        "Use change streams for real-time order tracking, live inventory updates, and event-driven microservice communication. Always store the resume token (change._id) and restart the stream with resumeAfter to avoid missing events during restarts. Use filtered change streams (pipeline stages before watching) to reduce the volume of events your application processes. The transactional outbox pattern is the most reliable way to couple database changes with event publishing — it ensures events are never lost even if the event broker is temporarily unavailable.",
      mistake:
        "Opening a change stream without error handling and resume logic. Change streams can break for various reasons: network interruptions, replica set elections, Atlas auto-scaling events. A change stream without error handling and resumption logic means your application silently stops receiving events. Always implement: (1) error handler that stores the last resume token, (2) restart logic that uses resumeAfter to continue from the last processed event, (3) monitoring/alerting if the stream has been down for more than N seconds.",
    },
    {
      id: "replica-sets-transactions",
      number: "4.8",
      title: "Replica Sets, Transactions, and High Availability",
      icon: "🔒",
      color: "red",
      intro:
        "A MongoDB replica set is a group of mongod processes that maintain the same data. Replica sets provide high availability (automatic failover if the primary goes down), data redundancy (copies on multiple nodes), and read scaling (distribute read operations across secondaries). Multi-document ACID transactions — allowing atomic operations across multiple documents and collections — require a replica set. Understanding replica sets, write concerns, read preferences, and transactions is essential for building MongoDB-backed applications that are both reliable and consistent.",
      code: `// REPLICA SETS, WRITE CONCERNS, AND TRANSACTIONS

// ── REPLICA SET ARCHITECTURE ──────────────────────────────────────
// A replica set consists of:
// PRIMARY: Accepts all write operations. One primary at a time.
// SECONDARY: Replicates data from primary. Can serve reads (with caveats).
// ARBITER: Votes in elections but holds no data (for even-node sets).
//
// Typical MongoDB Atlas cluster: 3 nodes (1 primary + 2 secondaries)
// Minimum for transactions: 1 member replica set (rs.initiate() in single-node dev setup)

// ── WRITE CONCERNS — how many nodes must acknowledge a write ──────
// Configured per operation or at connection level

// Default write concern in MongoDB 5.0+: majority
// w: 1 — only primary acknowledges (fastest, less durable)
// w: 'majority' — majority of nodes acknowledge (slower, more durable)
// w: 0 — fire and forget (no acknowledgment — use only for logging)
// j: true — write is committed to journal (disk) before acknowledgment (most durable)

await Order.create({ userId, items, totalAmount }, {
  // writeConcern via Mongoose session or direct driver
});

// For financial data — require majority + journal
const financialCollection = mongoose.connection.db.collection('transactions');
await financialCollection.insertOne(transactionDoc, {
  writeConcern: { w: 'majority', j: true }
});

// ── READ PREFERENCES — which nodes to read from ──────────────────
// primary (default) — always read from primary (most up-to-date)
// primaryPreferred — primary if available, else secondary
// secondary — always read from secondary (may be slightly stale)
// secondaryPreferred — secondary if available, else primary (default for reads)
// nearest — lowest network latency node

// For product listings (can tolerate slight staleness), read from secondary
const products = await mongoose.connection.db
  .collection('products')
  .withReadPreference('secondaryPreferred')
  .find({ isActive: true })
  .toArray();

// For user balance / payment confirmation — always read from primary
const balance = await mongoose.connection.db
  .collection('accounts')
  .withReadPreference('primary')
  .findOne({ userId });

// Mongoose connection-level read preference
mongoose.connect(MONGODB_URI, {
  readPreference: 'primaryPreferred',  // Default for all queries
});

// ── MULTI-DOCUMENT TRANSACTIONS ───────────────────────────────────
// IMPORTANT: Transactions require a replica set (even a 1-node RS for local dev)
// For local dev: run MongoDB with --replSet rs0, then rs.initiate()
// For Atlas: all clusters are replica sets automatically

// Transaction pattern in Mongoose
async function createOrderWithStockDecrement(
  userId: string,
  cartItems: CartItem[],
  shippingAddress: Address
): Promise<Order> {
  const session = await mongoose.startSession();
  session.startTransaction({
    readConcern: { level: 'snapshot' },      // Read consistent snapshot
    writeConcern: { w: 'majority' },         // Wait for majority acknowledgment
    readPreference: 'primary',               // Always read from primary in transactions
  });

  try {
    // 1. Verify all products have sufficient stock (within transaction)
    for (const item of cartItems) {
      const product = await Product.findOne(
        { _id: item.productId, 'variants.color': item.color, 'variants.stock': { $gte: item.quantity } },
        null,
        { session }
      );
      if (!product) {
        throw new Error(\`Insufficient stock for product \${item.productId} (color: \${item.color})\`);
      }
    }

    // 2. Create the order
    const [order] = await Order.create([{
      userId,
      items: cartItems.map(item => ({
        productId: item.productId,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        variant: { color: item.color, storage: item.storage },
        imageUrl: item.imageUrl,
      })),
      shippingAddress,
      status: 'pending',
      totalAmount: cartItems.reduce((sum, i) => sum + i.price * i.quantity, 0),
    }], { session });

    // 3. Decrement stock for each item atomically
    for (const item of cartItems) {
      await Product.findOneAndUpdate(
        { _id: item.productId, 'variants.color': item.color },
        { $inc: { 'variants.$.stock': -item.quantity } },
        { session }
      );
    }

    // 4. Clear the user's cart
    await Cart.findOneAndUpdate(
      { userId },
      { $set: { items: [] } },
      { session }
    );

    // All operations succeeded — commit
    await session.commitTransaction();
    return order;

  } catch (error) {
    // Any error — roll back ALL changes
    await session.abortTransaction();
    throw error;
  } finally {
    // Always end the session
    session.endSession();
  }
}

// ── HANDLING TRANSIENT TRANSACTION ERRORS ────────────────────────
// MongoDB transactions can fail with transient errors (WriteConflict, network issues)
// These should be retried automatically

async function withRetryTransaction<T>(
  operation: (session: mongoose.ClientSession) => Promise<T>,
  maxRetries = 3
): Promise<T> {
  const session = await mongoose.startSession();
  let retries = 0;

  while (retries < maxRetries) {
    session.startTransaction();
    try {
      const result = await operation(session);
      await session.commitTransaction();
      return result;
    } catch (error: any) {
      await session.abortTransaction();

      // Retry on transient transaction errors
      if (
        error.hasErrorLabel?.('TransientTransactionError') ||
        error.hasErrorLabel?.('UnknownTransactionCommitResult')
      ) {
        retries++;
        if (retries < maxRetries) {
          await new Promise(r => setTimeout(r, 100 * retries));  // Backoff
          continue;
        }
      }
      throw error;
    }
  }
  session.endSession();
  throw new Error('Transaction failed after maximum retries');
}`,
      usage:
        "Use write concern w: 'majority' for any data that matters — orders, payments, user accounts. Use w: 1 only for analytics events or logs where occasional data loss is acceptable. Use transactions for operations that must atomically modify multiple documents (order creation + stock decrement). Always include retry logic for transactions — MongoDB's transient transaction errors are expected under contention and should be retried. In Atlas, all clusters are replica sets — transactions work out of the box.",
      mistake:
        "Holding transactions open for external network calls. A transaction that starts, makes a database query, then calls an external API (Razorpay, Twilio), then commits holds locks on all modified documents for the duration of the API call — which can be seconds. Other requests trying to read or write those documents are blocked. Rule: complete all external API calls BEFORE starting the transaction. Within the transaction, do only database operations. Keep transactions as short as possible.",
    },
    {
      id: "data-modeling-patterns",
      number: "4.9",
      title: "Advanced Data Modeling Patterns",
      icon: "🏗️",
      color: "purple",
      intro:
        "Beyond the basic embedding vs referencing decision, MongoDB has a set of named data modeling patterns that solve specific recurring problems: the Bucket Pattern for time-series and IoT data, the Polymorphic Pattern for collections with variant structures, the Computed Pattern for pre-aggregated analytics, the Outlier Pattern for skewed data distributions, and the Versioning Pattern for document history. Understanding these patterns signals advanced MongoDB engineering capability and is increasingly tested in senior backend interviews at Indian product companies.",
      code: `// ADVANCED MONGODB DATA MODELING PATTERNS

// ── PATTERN 1: POLYMORPHIC PATTERN ───────────────────────────────
// Problem: Multiple entity types share some fields but have unique attributes
// Examples: products (book, phone, clothing), notifications (email, SMS, push), payments
// Solution: Store all types in one collection with a discriminator field

// ❌ WRONG: Separate collections for each product type
// db.books, db.phones, db.clothing — different collections, hard to query across all

// ✅ RIGHT: Polymorphic documents in one 'products' collection
const bookDoc = {
  _id: ObjectId(), type: 'book',
  name: 'The Alchemist', price: 299, category: 'books',
  // Book-specific fields
  details: { author: 'Paulo Coelho', isbn: '978-0062315007', pages: 208, publisher: 'HarperCollins' }
};

const phoneDoc = {
  _id: ObjectId(), type: 'smartphone',
  name: 'OnePlus 12', price: 64999, category: 'smartphones',
  // Phone-specific fields
  details: { processor: 'Snapdragon 8 Gen 3', ram: '12GB', camera: '50MP', battery: '5400mAh' }
};

// Shared query works across all types:
// db.products.find({ price: { $lte: 1000 } }) — books + budget phones in one query

// Type-specific index:
// db.products.createIndex({ type: 1, 'details.isbn': 1 }, { sparse: true })

// ── PATTERN 2: BUCKET PATTERN ────────────────────────────────────
// Problem: IoT / event data — millions of small events per day
// Naive: one document per event → 86,400 documents/device/day → billions in a year
// Solution: Bucket documents by time period

// One bucket = all events for one device in one hour
const sensorBucketSchema = new Schema({
  deviceId:    { type: String, required: true, index: true },
  date:        { type: Date,   required: true },   // Truncated to hour
  type:        { type: String, required: true },   // 'temperature', 'pressure', etc.
  count:       { type: Number, default: 0 },        // Number of measurements in bucket
  // Pre-computed stats (avoid recalculating on each query)
  stats: {
    min:  Number,
    max:  Number,
    avg:  Number,
    sum:  Number,
  },
  // Array of individual measurements (bounded by bucket period)
  measurements: [{
    timestamp: Date,
    value:     Number,
  }],
}, { timestamps: true });

// Upsert pattern: add measurement to existing bucket or create new bucket
await SensorBucket.findOneAndUpdate(
  {
    deviceId: 'sensor-001',
    type: 'temperature',
    date: new Date(Math.floor(Date.now() / 3600000) * 3600000), // Truncate to current hour
    count: { $lt: 60 }  // Bucket not full (max 60 measurements = 1 per minute)
  },
  {
    $push: { measurements: { timestamp: new Date(), value: 24.7 } },
    $inc:  { count: 1, 'stats.sum': 24.7 },
    $min:  { 'stats.min': 24.7 },   // Update min if this value is smaller
    $max:  { 'stats.max': 24.7 },   // Update max if this value is larger
    $set:  { 'stats.avg': 24.7 }    // Will recalculate properly in application
  },
  { upsert: true, new: true }        // Create new bucket if none matches filter
);

// ── PATTERN 3: COMPUTED PATTERN ──────────────────────────────────
// Problem: Expensive aggregation re-computed on every request
// Example: Product average rating recalculated from thousands of reviews on each page load
// Solution: Pre-compute and store the aggregate result, update incrementally

// On product page load — instant read from stored aggregate
const product = await Product.findById(id).select('name price ratings');
// product.ratings = { average: 4.4, count: 1872 } — pre-computed, no aggregation needed

// When a new review is added — update the aggregate incrementally
async function addReview(productId: string, rating: number) {
  // 1. Create the review
  await Review.create({ productId, rating, ... });

  // 2. Recalculate and update the product's rating aggregate atomically
  // Get new stats from reviews collection (only when a new review is added)
  const stats = await Review.aggregate([
    { $match: { productId: new Types.ObjectId(productId) } },
    { $group: {
      _id: null,
      average: { $avg: '$rating' },
      count:   { $sum: 1 }
    }}
  ]);

  await Product.findByIdAndUpdate(productId, {
    $set: {
      'ratings.average': Math.round(stats[0].average * 10) / 10,  // Round to 1 decimal
      'ratings.count':   stats[0].count
    }
  });
}
// Result: product page reads pre-computed rating (O(1)) instead of aggregating all reviews

// ── PATTERN 4: SUBSET PATTERN ────────────────────────────────────
// Problem: Document contains large array but only first N elements shown
// Example: Show only 3 most recent reviews on product page; all reviews on separate page
// Solution: Store most recent subset in main document + full list in separate collection

const productWithSubset = {
  _id: ObjectId(),
  name: "OnePlus 12",
  // SUBSET: Top 3 reviews embedded (for instant display on product page)
  recentReviews: [
    { userId: ObjectId(), rating: 5, text: "Amazing phone!", createdAt: new Date() },
    { userId: ObjectId(), rating: 4, text: "Great value",    createdAt: new Date() },
    { userId: ObjectId(), rating: 5, text: "Best camera",    createdAt: new Date() }
    // Max 3 items — always trimmed when new review added
  ],
  ratings: { average: 4.4, count: 1872 }
};

// When new review added: insert to reviews collection AND update subset in product
async function addReviewWithSubset(productId: string, reviewData: ReviewInput) {
  const review = await Review.create({ productId, ...reviewData });

  // Update product: push to subset and trim to last 3
  await Product.findByIdAndUpdate(productId, {
    $push: {
      recentReviews: {
        $each:     [{ ...reviewData, createdAt: new Date() }],
        $sort:     { createdAt: -1 },  // Sort by newest first
        $slice:    3                   // Keep only 3 most recent
      }
    }
  });
}

// ── PATTERN 5: VERSIONING PATTERN ────────────────────────────────
// Problem: Need to track history of document changes (price history, content edits)
// Solution: Store current state in main collection + version history in separate collection

const productPriceHistoryDoc = {
  _id: ObjectId(),
  productId: ObjectId("..."),  // Reference to current product
  version: 5,
  price: 67999,                // Price at this version
  changedBy: ObjectId("..."),  // User who made the change
  changeReason: "Festive season discount",
  createdAt: new Date("2025-10-01")
};

async function updateProductPrice(productId: string, newPrice: number, reason: string, userId: string) {
  const product = await Product.findById(productId);
  if (!product) throw new AppError('Product not found', 404);

  // Save version history
  await ProductHistory.create({
    productId: product._id,
    version: product.__v,
    price: product.price,  // The OLD price
    changedBy: userId,
    changeReason: reason,
  });

  // Update current document
  await Product.findByIdAndUpdate(productId, {
    $set:  { price: newPrice },
    $inc:  { __v: 1 }  // Increment version
  });
}`,
      usage:
        "Apply the Computed Pattern for any aggregate (rating average, total orders, product view count) that is read far more often than it's updated — pre-compute once on write, read instantly. Use the Subset Pattern for any large array where you typically show only the first N items — embed the most recent N in the main document and store the full list separately. Use the Bucket Pattern for any time-series or event-stream data where individual events are small and numerous.",
      mistake:
        "Not considering the write amplification of the Computed Pattern. Pre-computing aggregates requires updating the computed field every time source data changes. If 1,000 users simultaneously submit reviews for a viral product, 1,000 concurrent updates to the same product document's ratings field creates lock contention. Solutions: use MongoDB's atomic $inc and $set operators for incremental updates (instead of re-aggregating from scratch), or use a background job to batch-update computed fields periodically.",
    },
  ],

  // ── SECTION 5: PREREQUISITES ─────────────────────────────────────
  prerequisites: [
    { item: "JavaScript (ES6+)", done: false, note: "MongoDB queries and Mongoose code are written in JavaScript — fluency is essential", detail: "Arrow functions, async/await, Promises, destructuring, spread operator, array methods (map, filter, reduce), template literals. Every MongoDB operation in Node.js returns a Promise — understanding async/await is non-negotiable. Mongoose's chainable query API uses method chaining — understanding how method chains work in JavaScript makes Mongoose intuitive." },
    { item: "Node.js and npm basics", done: false, note: "Mongoose and the MongoDB Node.js driver run on Node.js", detail: "npm install mongoose, understanding package.json, running node scripts. The Mongoose ODM is an npm package — you install it, import it, and use it in Node.js code. Understanding Node.js's module system (require vs import) is needed to use Mongoose in your project." },
    { item: "JSON and nested data structures", done: true, note: "MongoDB documents ARE JSON objects — deep JSON literacy is the foundation", detail: "If you can look at { user: { name: 'Arjun', addresses: [{ city: 'Bengaluru', pincode: '560001' }] } } and navigate to user.addresses[0].city, you understand the structure of a MongoDB document. Nested objects, arrays of objects, and arrays of primitives — these are the building blocks of document design." },
    { item: "Basic database concepts", done: false, note: "Understanding what a database, collection, and document are before diving into advanced concepts", detail: "A database holds collections. Collections hold documents. Documents hold fields. If you've used any SQL database or even read about databases, this maps to: database → database, collection → table, document → row, field → column. The key difference: every document in a collection can have different fields (no fixed schema)." },
    { item: "Express.js basics", done: false, note: "Mongoose is used inside Express API routes — building an Express API is the practical context for learning MongoDB", detail: "Express app setup, route handlers (app.get, app.post), req/res objects, middleware (app.use). Most MongoDB tutorials build a REST API with Express + Mongoose — having Express basics means you can follow along and build real applications from the start rather than toy scripts." },
    { item: "REST API concepts", done: false, note: "Understanding what you're building before building it — MongoDB powers REST API backends", detail: "HTTP methods (GET/POST/PUT/PATCH/DELETE), status codes (200/400/404/500), request/response cycle, JSON as the data format for APIs. MongoDB is used to store and retrieve the data that your REST API reads and writes. Understanding the API layer helps you design MongoDB schemas for the access patterns your API requires." },
    { item: "Command line / terminal", done: true, note: "mongosh CLI for exploring data, running queries, and managing indexes during development", detail: "MongoDB Shell (mongosh) is a JavaScript REPL for interacting with MongoDB directly. You'll use it for: exploring your data structure, testing queries before writing application code, creating indexes, and debugging. Basic terminal navigation (cd, ls) is sufficient." },
    { item: "Git basics", done: true, note: "For version-controlling Mongoose models and tracking schema evolution over time", detail: "git init, add, commit — your Mongoose model files define your data structure and should be version-controlled. Understanding .gitignore (exclude .env which contains your MongoDB URI, exclude node_modules) is important for not accidentally committing database credentials to GitHub." },
  ],

  // ── SECTION 6: ROADMAP ───────────────────────────────────────────
  roadmap: [
    {
      phase: "Beginner",
      label: "01",
      duration: "Weeks 1–5",
      color: "emerald",
      topics: [
        "MongoDB fundamentals — collections, documents, BSON types (ObjectId, Date, String, Number, Boolean, Array, Embedded Document)",
        "Setting up MongoDB — MongoDB Atlas (cloud) setup, mongosh CLI, MongoDB Compass GUI",
        "CRUD operations — insertOne, insertMany, findOne, find, updateOne, updateMany, deleteOne, deleteMany",
        "Query operators — comparison ($eq, $ne, $gt, $lt, $gte, $lte, $in, $nin), logical ($and, $or, $not, $nor)",
        "Array and element operators — $exists, $type, $size, $all, $elemMatch",
        "Dot notation queries — querying nested documents and array elements",
        "Update operators — $set, $unset, $inc, $push, $pull, $addToSet, $pop",
        "Projection — selecting which fields to return (inclusion and exclusion)",
        "Sort, limit, and skip — cursor operations for pagination",
        "Mongoose setup — Schema, Model, connect(), basic CRUD with async/await",
        "Mongoose schema types, required, unique, default, enum, validate",
        "Mongoose validation — built-in validators, custom validators, error messages",
        "ObjectId — what it is, when MongoDB generates it, how to use it in queries",
        "Connecting to MongoDB Atlas from Node.js — connection strings, environment variables",
      ],
      buildProjects: [
        "Notes REST API: Mongoose models for Notes with categories, full CRUD endpoints with Express, all operations tested in Postman. No authentication yet.",
        "Product Catalog: Products with embedded images and specs (flexible per category), Category model, filter by category/price, sort by price/rating. Text search with $regex.",
        "User + Posts App: Users and Posts models with reference (userId on Post), populate() to get author name, user's posts endpoint, basic validation.",
      ],
    },
    {
      phase: "Intermediate",
      label: "02",
      duration: "Weeks 6–14",
      color: "primary",
      topics: [
        "Schema design principles — embedding vs referencing, 1:1, 1:few, 1:many, many-to-many relationships",
        "Denormalization — when and why to duplicate data, snapshot pattern in orders",
        "MongoDB aggregation pipeline — $match, $group, $project, $sort, $limit, $skip",
        "Aggregation operators — $sum, $avg, $count, $first, $last, $push, $addToSet",
        "$unwind — deconstructing arrays for analysis",
        "$lookup — joining collections (with pipeline sub-stages)",
        "$addFields, $set — computing new fields in the pipeline",
        "$facet — parallel aggregation pipelines for search facets",
        "$bucket, $bucketAuto — range-based grouping",
        "Indexing fundamentals — single field, compound, multikey, text, 2dsphere indexes",
        "Compound index field order — the ESR rule (Equality → Sort → Range)",
        "explain('executionStats') — reading query plans, COLLSCAN vs IXSCAN",
        "Partial indexes, sparse indexes, TTL indexes",
        "Mongoose advanced — virtuals, pre/post hooks, instance methods, static methods",
        "Mongoose populate — deep populate, virtual populate, populate with filters",
        "Mongoose lean() — when and why to use it for read operations",
        "MongoDB transactions — replica set requirement, session.startTransaction(), retry on transient errors",
        "Atlas Performance Advisor — interpreting recommendations, applying indexes",
      ],
      buildProjects: [
        "E-Commerce API with proper schema: Products (embedded images/variants/specs), Orders (snapshot items at purchase time), Reviews (separate collection), Rating aggregate (computed pattern), Seller dashboard aggregation.",
        "Analytics API: Aggregation pipeline for daily revenue chart, top-selling products, customer acquisition report, category performance, $facet for multi-metric dashboard.",
        "Social Platform: Users, Posts (with embedded reactions count), Comments (separate), Follows (many-to-many with references), User feed aggregation (lookup + sort), trending posts by engagement.",
      ],
    },
    {
      phase: "Advanced",
      label: "03",
      duration: "Weeks 15–26+",
      color: "purple",
      topics: [
        "Advanced schema patterns — Bucket, Computed, Subset, Polymorphic, Versioning, Extended Reference, Outlier",
        "Change streams — watching collection changes, filtered streams, resume tokens, error handling",
        "MongoDB Atlas Search — index configuration, compound queries, fuzzy matching, autocomplete",
        "Aggregation pipeline optimization — $match first rule, index usage in pipelines, $allowDiskUse",
        "$setWindowFields — sliding window aggregations (MongoDB 5.0+)",
        "Geospatial queries — 2dsphere indexes, $nearSphere, $geoWithin, $geoIntersects",
        "Atlas Data Federation — querying across MongoDB, S3, and Atlas Data Lake",
        "MongoDB Connector for Apache Kafka — real-time change data capture to Kafka",
        "Multi-tenancy patterns — one database per tenant, one collection per tenant, tenant field",
        "Mongoose plugins — custom reusable schema functionality (pagination, soft-delete, audit)",
        "Connection pooling — maxPoolSize, minPoolSize, serverless connection patterns",
        "Sharding — shard key selection, hashed vs range sharding, zone sharding",
        "Backup and restore — Atlas automated backups, mongodump/mongorestore, point-in-time recovery",
        "Security — field-level encryption, RBAC, audit logging, network access controls",
      ],
      buildProjects: [
        "Real-time Delivery Tracking System: Change streams for live order updates, Socket.io integration, geospatial queries for nearby drivers, Atlas Search for restaurant search with fuzzy matching.",
        "Analytics Platform: $setWindowFields for running totals and moving averages, time-series with Bucket Pattern, Atlas Charts integration, aggregation pipeline optimization with explain().",
        "Multi-tenant SaaS: Tenant isolation strategy, per-tenant index optimization, Atlas Data Federation for cross-tenant reporting, connection pooling for serverless deployments.",
      ],
    },
  ],

  // ── SECTION 7: USE CASES ─────────────────────────────────────────
  useCases: [
    { num: "01", title: "Product Catalogs with Variable Attributes", body: "MongoDB's document model is the ideal fit for e-commerce product catalogs where items across categories have radically different attribute sets. Zepto's grocery items have weight, unit, and nutritional information; their electronics have processor specs and warranty details. In a PostgreSQL table, this requires either dozens of nullable columns (wasteful and awkward) or a complex EAV (Entity-Attribute-Value) pattern that's hard to query. In MongoDB, each product document contains exactly the attributes it has — nothing more, nothing less. The polymorphic pattern stores all product types in one collection, enabling cross-category queries (all products under ₹500) while preserving category-specific attribute richness." },
    { num: "02", title: "User-Generated Content and Social Feeds", body: "ShareChat, Instagram, Twitter-like platforms, and community apps store posts, comments, reactions, and social graph data in MongoDB. Posts are naturally document-shaped: variable content types (text, image, video, poll), variable metadata, embedded reaction counts, and author reference. The social graph (followers/following) uses the reference pattern — two-collection design with indexes optimized for 'get all followers of user X' and 'get all users followed by X'. Feed generation — the complex operation of assembling a personalized feed from thousands of followed users' posts — uses $lookup with pipeline or application-level fan-out depending on scale." },
    { num: "03", title: "Real-Time Order Tracking and State Management", body: "Swiggy, Zomato, Zepto, and every delivery platform use MongoDB for order state management. An order document is a perfect document model: userId, items (embedded snapshot), shippingAddress, payment info, and a status field that transitions through a lifecycle. The status field changes frequently (pending → confirmed → preparing → picked_up → out_for_delivery → delivered), and change streams on the orders collection power real-time tracking — when the status field updates, a Socket.io notification is pushed to the customer's browser. No polling, no separate event table, no additional infrastructure — just MongoDB change streams." },
    { num: "04", title: "Content Management Systems", body: "Blog platforms, documentation systems, news portals, and any content-heavy application use MongoDB for its flexible document model. A blog post document can contain text content, embedded media blocks, author references, categories, tags array, and custom fields that vary per content type — without schema migrations when new content types are added. Forbes and other major publishers use MongoDB Atlas for their CMS. The ability to add new fields to documents without altering the collection schema is the operational advantage that content teams appreciate: a new 'podcast_transcript' field on some post documents requires zero database changes." },
    { num: "05", title: "IoT Data and Time-Series Applications", body: "Industrial IoT, smart home platforms, and sensor networks generate continuous streams of small data points. The Bucket Pattern makes MongoDB efficient for time-series: instead of one document per measurement (millions per day), group measurements into hour-long or day-long buckets. This dramatically reduces document count, enables pre-computed statistics per bucket, and makes time-range queries highly efficient. MongoDB's native time-series collection type (introduced in MongoDB 5.0) provides additional storage and query optimization for this pattern, with automatic bucketing and specialized indexes for time-range queries." },
    { num: "06", title: "Configuration and Feature Flags", body: "Application configuration stores, feature flag systems, A/B test configurations, and dynamic settings benefit from MongoDB's flexible document model and instant updates. A/B test configurations look different per experiment — some have two variants, others have five, some include targeting rules by user segment. Storing these as JSON documents in MongoDB means the application reads the configuration as a native JavaScript object. Change streams make feature flag changes propagate to all running application instances in real time — push a change to the MongoDB document, all app servers pick it up within milliseconds without restart." },
    { num: "07", title: "Developer Tools and Event Logging", body: "Razorpay uses MongoDB for payment event logs, webhook delivery logs, and merchant analytics events. Logging and event systems benefit from MongoDB's write throughput, flexible document structure (each event type has different fields), and TTL indexes for automatic old event deletion. A webhook delivery log document contains the payload, headers, response code, response body, retry count, and timestamps — all variable in structure. TTL indexes automatically delete logs older than 90 days. The aggregation pipeline powers the 'webhook analytics' dashboard — delivery success rate, average response time, error distribution by status code." },
  ],

  // ── SECTION 8: PROJECTS ──────────────────────────────────────────
  projects: {
    beginner: [
      { name: "Notes REST API", desc: "Full CRUD API for notes with categories. Notes have title, content, tags array, and priority. Filter notes by category and priority. Search by title with $regex. Sort by created date or priority. All operations tested with Postman collection.", teaches: "Mongoose Schema, Model CRUD, query operators ($in, $regex, $gte), sort and pagination, ObjectId references, input validation with Mongoose validators" },
      { name: "Movie Database API", desc: "Movies with embedded cast array (name, role, photoUrl), genres array, rating, and year. Directors in separate collection (referenced). Filter by genre, year range, minimum rating. Full-text search on title and plot. Top 10 by rating endpoint.", teaches: "Embedded arrays, array query operators ($all, $elemMatch), text index and $text search, $regex for partial matching, populate() for director reference, projection" },
      { name: "Recipe Finder App", desc: "Recipes with embedded ingredients (name, quantity, unit), instructions array, dietary tags (vegetarian, gluten-free), cuisine type, prep time, cook time. Search by ingredient, filter by dietary restrictions and cuisine. Sort by total time.", teaches: "Nested document queries (dot notation), multiple array fields, combined filter queries, $in for dietary tags, aggregation $avg for average cooking time by cuisine" },
      { name: "Student Tracker", desc: "Students with grades embedded (subject, score, term), attendance records, and teacher references. Endpoints: class average per subject, students below passing grade, top performers, attendance summary per student. All with aggregation.", teaches: "Aggregation pipeline basics ($match, $group, $avg, $sum), $unwind for grades array, $project, $sort with $limit, conditional aggregation ($cond)" },
    ],
    intermediate: [
      { name: "E-Commerce Platform API", desc: "Products (embedded images, specs, variants with stock), Categories (hierarchical with parent reference), Orders (snapshot items at purchase with transaction for stock decrement), Reviews (separate collection + computed ratings on product), Seller dashboard with aggregation pipeline.", teaches: "Full schema design decision making, transactions for order + stock atomicity, Computed Pattern for ratings, $facet for product search with filters, aggregation for seller analytics, TTL index for sessions, compound indexes" },
      { name: "Social Media Platform API", desc: "Users, Posts (polymorphic: text/image/video with different embedded metadata), Comments (separate with parentId for threading), Follows (many-to-many), Likes (with atomic $inc). Feed generation with $lookup + sort. Trending algorithm with sorted set pattern.", teaches: "Polymorphic Pattern, threaded comments with recursive design, change streams for real-time notification, $setWindowFields for trending score, virtual populate for user's posts" },
      { name: "Food Delivery App API", desc: "Restaurants with embedded menu (categories → items → customizations), Orders with geospatial delivery address, Driver location tracking with geospatial index, Real-time order status with change streams + Socket.io, Rating system with Computed Pattern.", teaches: "Deeply nested document design, 2dsphere geospatial index, $nearSphere for nearby restaurants, change streams for real-time tracking, TTL index for live location documents" },
      { name: "Analytics Dashboard API", desc: "Implement 8 analytics endpoints using aggregation pipeline: daily active users (unique $addToSet), revenue trend (monthly $group + $dateToString), cohort retention (multi-stage pipeline), top products by revenue ($unwind items + $group), customer segments ($bucket by spend), geographic distribution.", teaches: "Complex multi-stage aggregation, $setWindowFields for running totals, $bucket for segments, $facet for parallel metrics, performance optimization with $match before $group" },
    ],
    advanced: [
      { name: "Real-Time Order Platform with Change Streams", desc: "Full delivery platform: geospatial restaurant search (Atlas Search with location filter), order lifecycle with change streams driving Socket.io notifications, driver location updates with TTL index, transactional outbox pattern for event publishing, Bucket Pattern for delivery analytics time-series.", teaches: "Atlas Search full-text + geo, change streams with resume token, transactional outbox, Bucket Pattern implementation, performance profiling with Atlas Query Profiler, index strategy for the full application" },
      { name: "Multi-Tenant SaaS Backend", desc: "B2B SaaS with tenant isolation (tenantId on all documents + compound indexes), per-tenant analytics with aggregation, Atlas Search per tenant, connection pooling optimized for serverless (Vercel/Lambda), schema versioning with Versioning Pattern, Atlas Data Federation for cross-tenant reporting.", teaches: "Multi-tenancy design patterns, compound index optimization, serverless MongoDB connection pattern, Versioning Pattern, Data Federation query, Atlas performance monitoring" },
      { name: "IoT Data Platform", desc: "Device registry, time-series sensor data with Bucket Pattern (auto-bucketing per hour), pre-computed statistics per bucket, change streams for real-time alerting when value exceeds threshold, Atlas Charts integration for dashboards, data retention with TTL indexes and archival pipeline.", teaches: "Bucket Pattern full implementation, $setWindowFields for rolling averages, Atlas Time Series collections, change stream filtering on numeric thresholds, data lifecycle management" },
    ],
  },

  // ── SECTION 9: MISTAKES ──────────────────────────────────────────
  mistakes: [
    {
      title: "Embedding Unbounded Arrays in Documents",
      explanation: "Adding new items to an embedded array indefinitely is the most common MongoDB schema mistake. A product document with an embedded reviews array grows forever — 50,000 reviews pushes the document to MongoDB's 16MB limit. More practically, performance degrades well before the limit: MongoDB must load the entire document (including all 50,000 reviews) every time you query the product, even if you only need the product name and price.",
      tip: "Apply the 'unbounded array test': can this array grow without a known maximum? If yes, it must be a separate collection. Reviews, comments, activity logs, order history, messages — all unbounded, all should reference the parent document by ID. Only embed arrays that are inherently bounded and small (product images: max 10, product variants: max 20, user addresses: max 5).",
    },
    {
      title: "Not Indexing Foreign Key Fields",
      explanation: "A 'foreign key' in MongoDB is an ObjectId field in one document that references the _id of another document (e.g., userId on an order document, productId on a review document). MongoDB does not automatically create indexes on these reference fields. Without an index on userId in the orders collection, finding all orders for a user requires scanning every order document — a collection scan that gets catastrophically slow as orders grow.",
      tip: "After defining every reference field in your Mongoose schema, immediately add an index: orderSchema.index({ userId: 1 }), reviewSchema.index({ productId: 1, createdAt: -1 }). This single habit prevents the majority of 'my API was fast with 1,000 records but is now slow with 100,000 records' performance regressions.",
    },
    {
      title: "Using .find().then(doc => doc[0]) Instead of .findOne()",
      explanation: "db.collection.find({ email: 'a@b.com' }) returns a cursor that can iterate all matching documents. Using .find() to get a single document by a unique field then accessing index [0] is both semantically incorrect and potentially slower — it retrieves all matches (there might be more than one if the unique constraint isn't enforced) and doesn't limit to one. It also reads as 'get all matching' rather than 'get the one matching.'",
      tip: "Use findOne() when you expect a single result. Use findById() for _id lookups. Use find() only when you genuinely want multiple results. In Mongoose: Product.findOne({ slug: 'iphone-15' }) — clearly communicates intent and returns the first matching document (or null) rather than an array.",
      wrong: "const users = await User.find({ email: req.body.email }); const user = users[0];",
      correct: "const user = await User.findOne({ email: req.body.email });",
    },
    {
      title: "Forgetting to Use .lean() for Read-Only Queries",
      explanation: "Mongoose Documents are full-featured objects with Mongoose methods, getters, setters, and event emitters attached. When you query for 100 products to return as a JSON API response, you get 100 Mongoose Documents — heavy objects with methods you'll never use. For a listing endpoint that returns 100 products, not using .lean() uses significantly more memory and is 2–5x slower than necessary.",
      tip: "Add .lean() to every Mongoose query where you will not call .save(), will not use instance methods, and will not need virtuals. This means: almost every GET endpoint. The rule: if you're just reading data to return it as JSON, use lean(). Reserve full Mongoose Documents (without lean()) for when you need to modify and save.",
      wrong: "const products = await Product.find({ isActive: true }); // Returns full Mongoose Documents",
      correct: "const products = await Product.find({ isActive: true }).lean(); // 2-5x faster plain objects",
    },
    {
      title: "Running Aggregation Pipelines with $group Before $match",
      explanation: "A pipeline that starts with $group processes every document in the collection before filtering. A pipeline that starts with $match filters documents first, then groups only the matching subset. For a collection with 10 million orders and a query for 'orders from the last 30 days,' starting with $match filters to ~100,000 documents before $group. Starting with $group processes all 10 million before filtering — 100x more work.",
      tip: "The golden rule: $match first, $group second. $match at the beginning of the pipeline can use indexes; $match after $group cannot. Similarly, $sort before $limit allows MongoDB to avoid sorting the entire result set. Always arrange pipeline stages to minimize documents as early as possible: filter ($match) → transform ($addFields, $project) → sort ($sort) → limit ($limit).",
      wrong: "db.orders.aggregate([ { $group: { _id: '$userId', total: { $sum: '$amount' } } }, { $match: { createdAt: { $gte: last30Days } } } ])",
      correct: "db.orders.aggregate([ { $match: { createdAt: { $gte: last30Days } } }, { $group: { _id: '$userId', total: { $sum: '$amount' } } } ])",
    },
    {
      title: "Choosing MongoDB When PostgreSQL Is the Right Tool",
      explanation: "MongoDB is the wrong choice for financial transaction records, systems requiring complex multi-document ACID consistency across many related entities, or data that is fundamentally relational (e.g., a scheduling system with complex constraint rules). Using MongoDB for a payment ledger and implementing double-entry bookkeeping guarantees in application code is significantly harder than using PostgreSQL where the database enforces ACID constraints natively.",
      tip: "Choose MongoDB for: variable-schema data (product catalogs), hierarchical data read as a unit (orders with embedded items), high-volume event streams (logs, activity feeds). Choose PostgreSQL for: financial transactions, systems with complex inter-entity relationships and joins, data requiring strict schema enforcement. In many real products, both are correct: MongoDB for the product catalog, PostgreSQL for the payment ledger.",
    },
    {
      title: "Updating Documents Without Using Atomic Operators",
      explanation: "Fetching a document, modifying it in application code, and saving it back is a read-modify-write cycle that has a race condition. If two requests simultaneously fetch and modify the same document, the second write silently overwrites the first. For counter increments (view count, stock level, like count), this means lost increments — a product viewed 1,000 times might only show 250 views.",
      tip: "Use MongoDB's atomic update operators instead of read-modify-write: $inc for counters (Product.updateOne({ _id }, { $inc: { 'ratings.count': 1 } })), $push/$pull for arrays, $set for field updates. These operations are atomic at the document level — MongoDB applies them without a read. For complex multi-document atomicity, use transactions.",
      wrong: "const product = await Product.findById(id); product.stock -= 1; await product.save(); // Race condition",
      correct: "await Product.findByIdAndUpdate(id, { $inc: { stock: -1 } }, { new: true }); // Atomic",
    },
    {
      title: "Not Handling Mongoose Validation Errors in the Global Error Handler",
      explanation: "When Mongoose schema validation fails (required field missing, value outside enum, string too long), Mongoose throws a ValidationError. If your Express global error handler doesn't specifically handle this error type, it falls through to the generic 500 handler and returns 'Internal Server Error' to the client — even though the real problem is invalid client input (which should be a 400 error).",
      tip: "In your Express global error handler, check for err.name === 'ValidationError' and return a 400 with field-level error messages: const errors = Object.values(err.errors).map(e => e.message). Also handle: CastError (invalid ObjectId format → 400), code 11000 (duplicate unique key → 409), and JsonWebTokenError (invalid token → 401). These four checks cover 90% of MongoDB/Mongoose error types.",
    },
    {
      title: "Storing User Passwords or Secrets in Plain Text",
      explanation: "Storing passwords, payment card numbers, or API secrets as plain fields in MongoDB documents is a critical security vulnerability. A MongoDB database breach (misconfigured Atlas access, stolen credentials) immediately exposes every user's password. This is not a MongoDB-specific problem, but MongoDB's flexible document model makes it easy to accidentally store sensitive fields.",
      tip: "Passwords: always hash with bcrypt before storing (bcrypt.hash(password, 12)). Use select: false in Mongoose schema to prevent password fields from being returned in queries. Payment data: never store card numbers — use Razorpay/Stripe tokenization and store only the token. API secrets: store only hashed versions. Use MongoDB Atlas Field-Level Encryption for regulatory compliance (HIPAA, PCI-DSS) when you must store sensitive data.",
    },
    {
      title: "Not Using the Snapshot Pattern for Order Items",
      explanation: "Referencing productId in order items instead of embedding a snapshot of the product data is a common beginner mistake. If a product's price changes after an order is placed, querying the current product to display order history shows the wrong price. If a product is deleted, order history for that product breaks entirely.",
      tip: "Always embed a snapshot of product data in order items at the time of purchase: name, price, imageUrl, and variant details. Keep the productId for linking back to the current product (for 'buy again' functionality), but never rely on the referenced product's current data for historical order display. The snapshot is immutable — it preserves what the customer actually ordered at the price they actually paid.",
    },
    {
      title: "Using MongoDB Transactions Everywhere",
      explanation: "MongoDB transactions are powerful but have overhead — they require at least two network round trips (begin + commit), use more server resources, and timeout after 60 seconds by default. Wrapping every single-document operation in a transaction adds unnecessary latency and complexity. A single document update ($set on an order's status) is atomic by default in MongoDB without a transaction.",
      tip: "Use transactions only when you genuinely need to modify multiple documents atomically (order creation + stock decrement, transfer between two accounts, multi-collection update). Single-document operations — including updates with multiple $set fields — are atomic by default. MongoDB's atomic update operators ($set, $inc, $push) handle the vast majority of concurrent update scenarios without transactions.",
    },
    {
      title: "Not Setting maxPoolSize for Node.js Applications",
      explanation: "The default maxPoolSize in Mongoose is 5 connections. A Node.js API server handling 100 concurrent requests that all need database access will queue 95 of them waiting for one of the 5 connections to free up. This creates a performance bottleneck that looks like database slowness but is actually connection pool exhaustion.",
      tip: "Set maxPoolSize based on your workload. For a typical API server: maxPoolSize: 10 (good starting point). For high-concurrency: maxPoolSize: 20–50. For serverless functions (Vercel, Lambda): use the cached connection pattern and set maxPoolSize: 5 (each function instance creates its own pool, many instances run in parallel). Monitor 'current operations' in Atlas to verify pool size is adequate.",
    },
  ],

  // ── SECTION 10: INTERVIEW QUESTIONS ─────────────────────────────
  interviewQuestions: {
    beginner: [
      { q: "What is MongoDB and how does it differ from a relational database like PostgreSQL?", a: "MongoDB is a document-oriented NoSQL database that stores data as flexible JSON-like documents in collections. Unlike PostgreSQL (which uses tables with fixed columns and rows), MongoDB documents in the same collection can have different fields. MongoDB doesn't require schema definition before inserting data and doesn't support JOINs natively — instead, related data is either embedded in the same document or referenced by ObjectId. MongoDB is better for variable-schema data and hierarchical data read as a unit; PostgreSQL is better for complex relationships, ACID transactions across many tables, and financial data." },
      { q: "What is a MongoDB document and what is BSON?", a: "A MongoDB document is a JSON-like data structure with key-value pairs, where values can be strings, numbers, booleans, arrays, nested objects, or special BSON types. BSON (Binary JSON) is the binary serialization format MongoDB uses internally — it extends JSON with additional types: ObjectId (12-byte unique ID), Date (UTC datetime), Decimal128 (high-precision decimals for financial data), Binary (for file data), and Regular Expression. BSON is more space-efficient than JSON and supports types that JSON doesn't have natively." },
      { q: "What is Mongoose and why do developers use it with MongoDB?", a: "Mongoose is an ODM (Object Document Mapper) for Node.js that provides schema definition, validation, type casting, middleware (pre/post hooks), virtuals, and query helper methods on top of the MongoDB Node.js driver. Developers use Mongoose because MongoDB itself doesn't enforce schema — Mongoose adds the structure that makes large Node.js codebases maintainable: required fields are checked before saving, enum values are validated, related documents can be populated automatically, and passwords can be hashed in pre-save hooks. It also provides a cleaner Promise-based API than raw driver operations." },
      { q: "What is an ObjectId in MongoDB?", a: "An ObjectId is MongoDB's default primary key type — a 12-byte BSON value that is globally unique. It encodes: 4 bytes of timestamp (seconds since epoch), 5 bytes of random value (process ID + random bytes), and 3 bytes of incrementing counter. This structure means ObjectIds are roughly sortable by insertion time (the first 4 bytes are the timestamp). In Mongoose, every document automatically gets an _id field of type ObjectId unless you specify otherwise. When filtering by ID in Mongoose, use findById(id) or findOne({ _id: id }) — Mongoose automatically handles the string-to-ObjectId conversion." },
      { q: "What is the difference between find() and findOne()?", a: "find() returns a cursor that can iterate all matching documents — use it when you expect multiple results. It returns an array (after .exec() or awaiting) of all documents matching the filter. findOne() returns the first matching document (or null if none found) — use it when you expect zero or one result (e.g., finding a user by email, finding a product by slug). findById(id) is a convenience method equivalent to findOne({ _id: id }) and is the fastest way to fetch a specific document by its primary key." },
      { q: "What is the embedding vs referencing decision in MongoDB schema design?", a: "Embedding means storing related data inside the same document (e.g., product images stored as an array within the product document). Referencing means storing related data in a separate collection and storing an ObjectId reference (e.g., reviews stored in a separate 'reviews' collection with a productId field). Embed when: data is always read together, the relationship is 1:few (bounded array size), and data doesn't need to be accessed independently. Reference when: the sub-collection can grow without bound (like reviews), the data is accessed independently by different parts of the app, or the relationship is many-to-many." },
      { q: "What are update operators in MongoDB? Name the most common ones.", a: "$set: sets the value of a field (or adds it if it doesn't exist). $unset: removes a field from a document. $inc: atomically increments a numeric field by a specified amount. $push: adds a value to an array. $pull: removes elements from an array matching a condition. $addToSet: adds a value to an array only if it doesn't already exist (like a set). $pop: removes the first or last element from an array. The key insight: always use these operators for updates — never fetch a document, modify it, and save it back (race condition). Atomic operators are applied by MongoDB server-side without a read." },
      { q: "What is the aggregation pipeline in MongoDB?", a: "The aggregation pipeline is MongoDB's framework for data processing and analytics. It's an array of stages where each stage transforms a stream of documents. Common stages: $match (filter documents like SQL WHERE), $group (aggregate by a key like SQL GROUP BY), $project (reshape documents — include/exclude/compute fields), $sort, $limit, $skip, $unwind (deconstruct arrays), $lookup (join with another collection), and $addFields (add computed fields). The pipeline is the correct tool for analytics, reports, dashboards, and any query more complex than a simple filter." },
      { q: "What is a MongoDB index and why is it important?", a: "An index is a data structure (B-tree) that MongoDB maintains on a field to enable fast document lookup by that field's value. Without an index, MongoDB performs a COLLSCAN (collection scan) — reading every document in the collection to find matches. With an index, MongoDB uses the B-tree to find matching documents in O(log n) time. For a collection with 1 million documents, an indexed query might read 100 documents; an unindexed query reads all 1 million. Missing indexes are the most common cause of slow MongoDB queries in production." },
      { q: "What does the .lean() method do in Mongoose and when should you use it?", a: "lean() makes Mongoose return plain JavaScript objects instead of full Mongoose Document objects. Without lean(), query results are Mongoose Documents — they have all Mongoose methods (save(), toJSON(), etc.), getters, setters, and event emitters attached. This overhead adds memory usage and slows down serialization. lean() returns plain objects — faster and smaller. Use lean() for any read-only query where you won't call save(), don't need instance methods, and don't need virtuals. For a GET endpoint returning a list of products, always use lean() — you're just reading and returning data, never modifying the documents." },
    ],
    intermediate: [
      { q: "Explain the $elemMatch operator and when it's necessary.", a: "$elemMatch ensures that multiple conditions apply to the same element of an array. Without it: { 'variants.color': 'Black', 'variants.stock': { $gt: 0 } } matches documents where ANY variant has color='Black' AND ANY variant has stock>0 — they could be different variants. With $elemMatch: { variants: { $elemMatch: { color: 'Black', stock: { $gt: 0 } } } } — matches only documents where a SINGLE variant has BOTH color='Black' AND stock>0. Use $elemMatch whenever you need to match multiple conditions on the same element of an embedded document array." },
      { q: "What is the correct compound index field order using the ESR rule?", a: "ESR stands for Equality, Sort, Range — the correct order for compound index fields: Equality fields first (fields compared with exact values: category: 'smartphones'), Sort fields next (fields used in .sort(): price: 1), Range fields last (fields compared with $gt, $lt, $gte, $lte, $in). Example: query { category: 'smartphones', isActive: true, price: { $gte: 10000 } }.sort({ price: 1 }) needs index { category: 1, isActive: 1, price: 1 } — category and isActive are equality fields first, price is both sort and range field last. Wrong field order creates indexes that are partially useful or not useful at all." },
      { q: "What is the purpose of explain('executionStats') and what do you look for?", a: "explain('executionStats') reveals how MongoDB executed a query — which execution plan it chose and the actual performance metrics. Key things to check: (1) winningPlan.stage — IXSCAN means an index was used (good), COLLSCAN means full collection scan (bad for large collections). (2) totalDocsExamined vs nReturned — should be close to equal (high ratio means poor index selectivity). (3) executionTimeMillis — actual execution time. A healthy query has IXSCAN, totalDocsExamined ≈ nReturned, and fast execution. A problematic query has COLLSCAN, totalDocsExamined >> nReturned, and slow execution." },
      { q: "How do MongoDB transactions work and when should you use them?", a: "MongoDB transactions allow atomic operations across multiple documents and collections. They require a replica set. Usage pattern: const session = await mongoose.startSession(); session.startTransaction(); then pass { session } to all operations inside the transaction; finally await session.commitTransaction() on success or session.abortTransaction() on failure. Use transactions when: creating an order AND decrementing stock (both must succeed or both fail), transferring funds between two account documents, creating a post AND updating a counter on the user document. Don't use transactions for single-document operations — those are atomic by default." },
      { q: "What is the Computed Pattern in MongoDB and when would you use it?", a: "The Computed Pattern pre-calculates expensive aggregated values and stores them directly in the document, updating them incrementally when source data changes. Example: storing ratings.average and ratings.count on a product document. Without the pattern: every product page request triggers an aggregation across potentially thousands of reviews. With the pattern: product page reads the pre-computed average instantly; only when a review is added does an aggregation run to update the stored value. Use when: a value is read far more often than it changes (read/write ratio > 10:1), and the aggregation to compute it is expensive." },
      { q: "What is the $facet stage in the aggregation pipeline and what problem does it solve?", a: "$facet runs multiple aggregation pipelines in parallel on the same input documents, returning all results in a single response. It solves the problem of search pages that need both paginated results AND filter sidebar counts (by category, brand, price range) — without $facet, this requires 5 separate database queries. With $facet, one aggregation returns { products: [...], byCategory: [...], byBrand: [...], priceRanges: [...], totalCount: [...] }. The performance advantage: MongoDB processes the input documents once and distributes them to each sub-pipeline — more efficient than 5 separate queries." },
      { q: "How would you design a MongoDB schema for a food delivery app like Swiggy?", a: "Collections: restaurants (embedded menu structure: categories → items → customizations, geolocation as GeoJSON Point for $nearSphere queries, ratings aggregate), users (embedded addresses array, max 5), orders (embedded snapshot of ordered items with prices at order time, embedded address, embedded payment info, status field for lifecycle, reference to restaurant and user), delivery_partners (current location as GeoJSON with TTL index, availability status). Reviews in separate collection (productId/restaurantId reference). Key indexes: restaurants(location: '2dsphere'), orders(userId: 1, createdAt: -1), orders(restaurantId: 1, status: 1), delivery_partners(location: '2dsphere') for nearby driver queries." },
      { q: "What are MongoDB change streams and what are they used for?", a: "Change streams allow applications to subscribe to real-time notifications when documents in a collection change (inserts, updates, deletes). They're built on MongoDB's oplog (operation log). Used for: real-time order status updates (watch orders collection → push via Socket.io to customer), inventory alerts (watch products → notify when stock hits 0), audit logging (watch sensitive collections → write changes to audit log), and event-driven microservices (watch for events → publish to Kafka). Change streams require a replica set. Always store the resume token (change._id) to restart from the last position if the stream is interrupted." },
      { q: "How do TTL indexes work in MongoDB?", a: "A TTL (Time-To-Live) index on a Date field automatically deletes documents when the current time exceeds the document's date value plus the configured expiry seconds. db.sessions.createIndex({ createdAt: 1 }, { expireAfterSeconds: 86400 }) deletes session documents 24 hours after their createdAt time. MongoDB's TTL background process runs every 60 seconds to clean up expired documents — deletion is not instant but happens within a minute of expiration. Use cases: user sessions, OTP verification codes (expireAfterSeconds: 600 for 10-minute codes), password reset tokens, temporary cache entries, rate limit tracking documents." },
      { q: "What is the difference between $lookup with a pipeline and simple $lookup?", a: "Simple $lookup matches on equality of two fields (like a SQL JOIN). Pipeline $lookup (MongoDB 3.6+) allows running a full aggregation pipeline on the joined collection — enabling range conditions, filtering, projection, and nested lookups on the joined data. Simple: { from: 'users', localField: 'userId', foreignField: '_id', as: 'user' } — joins every matching user. Pipeline: adds pipeline: [{ $match: { isActive: true } }, { $project: { name: 1 } }] — only returns active users with just the name field. Pipeline $lookup is significantly more flexible and can reduce the amount of joined data returned." },
      { q: "How do you implement cursor-based pagination in MongoDB and why is it better than skip() pagination?", a: "Skip-based pagination: db.products.find().skip(10000).limit(20) — MongoDB must scan and skip 10,000 documents before returning 20. For deep pages (page 500 of 1,000), this becomes catastrophically slow. Cursor-based: use the last document's _id (or a sort field value) as the cursor. Next page: db.products.find({ _id: { $gt: lastId } }).sort({ _id: 1 }).limit(20) — uses the index to jump directly to the cursor position. O(log n) regardless of page depth. Trade-off: cursor-based pagination doesn't support jumping to an arbitrary page number, only next/previous navigation." },
    ],
    advanced: [
      { q: "Design the MongoDB schema for a real-time food delivery platform like Zepto serving 5 million orders per day.", a: "Restaurants: { location: GeoJSON 2dsphere, menu: embedded (categories.items.customizations), ratings: {avg, count} — computed pattern, operationalStatus: 'open'|'closed'|'busy' }. Products/Menu items: embedded in restaurant to avoid $lookup on every order screen. Orders: { userId ref, restaurantId ref, driverId ref, items: snapshot array (name+price+qty embedded), address: embedded, payment: embedded, status: enum with change stream for real-time updates, totalAmount, estimatedDelivery }. OrderEvents (for analytics): { orderId, eventType, timestamp, metadata } — separate collection, TTL 90 days. Drivers: { location: GeoJSON, isAvailable, lastLocationAt (TTL 5min on driver location) }. Indexes: restaurants(location '2dsphere'), orders(userId,createdAt-1), orders(driverId,status), orders(restaurantId,createdAt-1), drivers(location '2dsphere', isAvailable=true partial index)." },
      { q: "How would you optimize a MongoDB aggregation pipeline that is running slowly on a collection with 50 million documents?", a: "(1) Ensure $match is first and uses an index — run db.orders.explain('executionStats') on just the $match stage to verify IXSCAN. (2) Reduce documents early — more selective $match conditions earlier in the pipeline. (3) If $lookup is present, check if it can be replaced with embedding or extended reference pattern. (4) If $unwind is present, can it be combined with $lookup using a pipeline to filter before unwinding? (5) For $group with large result sets, use allowDiskUse: true. (6) Consider pre-aggregating results with the Computed Pattern — if this aggregation runs frequently, store the result. (7) Check if Atlas Performance Advisor recommends a different index. (8) For reporting that runs infrequently, move it to a secondary read preference to avoid impacting the primary." },
      { q: "How do you handle schema evolution in MongoDB as application requirements change?", a: "MongoDB doesn't enforce schema, so you have several strategies: (1) Lazy migration: new code handles both old and new document shapes. Add new field, write new documents with it, use $ifNull in queries to handle documents missing the field. Old documents get updated when they're next modified. (2) Background migration: a script that finds documents missing the new field and updates them in batches with a delay between batches to avoid impacting production. (3) Versioned schema: add a schemaVersion field, write code that handles each version. (4) Dual write: write to both old and new field during transition. The choice depends on urgency, document count, and whether the application can tolerate mixed document shapes during migration." },
      { q: "What is the MongoDB Aggregation Pipeline's $setWindowFields stage and how does it replace application-level calculation?", a: "$setWindowFields (MongoDB 5.0+) adds window function capabilities to the aggregation pipeline — similar to SQL window functions. It computes a value for each document based on a window (group) of documents. Uses: $sum over a window for running totals (cumulative revenue to date), $avg for moving averages (7-day rolling average), $rank for ranking documents within a group, $shift for accessing previous/next document values (month-over-month growth calculation). Before $setWindowFields: sort in MongoDB → return to application → calculate running total in JavaScript → return to client. With $setWindowFields: entire calculation in one aggregation pipeline, no application code needed." },
      { q: "Explain MongoDB Atlas Search and when you would use it instead of the $text operator.", a: "Atlas Search is built on Apache Lucene (same engine as Elasticsearch) integrated into MongoDB Atlas. Advantages over $text: (1) Typo tolerance (fuzzy search): 'onplus' finds 'OnePlus' with maxEdits:1. (2) Autocomplete: returns results as user types. (3) Compound queries: combine text search with numeric range filters, boolean conditions, and geo queries in one operation. (4) Relevance scoring: sophisticated BM25 scoring with field weighting. (5) Multiple languages: 70+ language analyzers. Use Atlas Search when: building a real product search with typo tolerance, implementing autocomplete, needing faceted search with text matching, or needing relevance-ranked results. Use $text for simple full-text search in development or when Atlas isn't available." },
      { q: "How would you implement a multi-tenant MongoDB architecture?", a: "Three approaches: (1) Database-per-tenant: each tenant has their own MongoDB database. Complete data isolation, separate backups, can scale tenant independently. Operational overhead increases with tenant count. Best for regulated industries. (2) Collection-per-tenant: one database, separate collection per tenant (tenant_abc_products). Good isolation, manageable up to ~1,000 tenants. (3) Shared collection with tenantId: all tenants share collections, every document has tenantId field, every index includes tenantId. Most resource-efficient. Risk: bugs that omit tenantId filter expose cross-tenant data. Mitigation: Mongoose middleware that automatically injects tenantId into every query. Index strategy for option 3: all indexes must be compound with tenantId as the first field — { tenantId: 1, ...otherFields } — without tenantId first, queries touch documents from all tenants." },
      { q: "How do you prevent N+1 queries in a MongoDB/Mongoose application?", a: "N+1 occurs when fetching N documents triggers N additional queries for related data. Solution: (1) populate() in Mongoose: Order.find().populate('userId', 'name email') fetches all referenced users in ONE additional query using $in, not N individual queries. (2) $lookup in aggregation pipeline: join in the database, return pre-assembled result. (3) Extended Reference Pattern: embed the frequently-needed fields (user name, seller name) in the document — zero additional queries. (4) Batch loading with DataLoader (for GraphQL): collect all IDs from a batch of requests, make one query for all. Identify N+1: query logging shows many identical queries with different _id values — the signature of N+1." },
      { q: "What are the trade-offs between using MongoDB's native transactions vs the application-level atomicity provided by atomic operators?", a: "Atomic operators ($set, $inc, $push, $pull) are atomic at the single-document level — MongoDB applies them server-side without a read-modify-write cycle. They have zero transaction overhead and work in standalone MongoDB. Transactions span multiple documents/collections but require a replica set, have two network round trips (begin+commit) overhead, hold locks on modified documents during the transaction (causing contention under high write load), and timeout after 60 seconds. Use atomic operators when possible (single document changes, counter increments, array modifications). Use transactions only for genuinely multi-document atomicity requirements (order + stock decrement, fund transfer between accounts). Overusing transactions creates unnecessary contention and latency." },
      { q: "How do you monitor and debug production MongoDB performance issues on Atlas?", a: "(1) Atlas Performance Advisor: automatically identifies slow queries and recommends indexes based on your actual query patterns. Click 'Create Index' to apply without downtime. (2) Real-Time Performance Panel: shows current ops/sec, query targeting ratio (documents scanned:returned — should be close to 1), and cache hit ratio (target >80%). (3) Profiler: enable for queries >100ms in staging to capture slow query logs. (4) Query Profiler: in Atlas UI, shows a flame chart of recent slow queries with visual execution plan. (5) Metrics tab: CPU%, Connections, Opcounters — spike in these correlates with application-level issues. Process: identify slow query from metrics → find in Profiler → run explain('executionStats') → identify COLLSCAN or high keysExamined:nReturned ratio → add appropriate index." },
    ],
  },

  // ── SECTION 11: COMPARISON ───────────────────────────────────────
  comparison: {
    headers: ["Feature", "MongoDB", "PostgreSQL", "MySQL", "Redis"],
    rows: [
      { feature: "Data Model", react: "Document (BSON, flexible schema)", vue: "Relational (tables, fixed schema)", angular: "Relational (tables, fixed schema)", extra: "Key-Value, Hash, List, Set, Sorted Set" },
      { feature: "Schema Flexibility", react: "High — documents can differ in same collection", vue: "Low — all rows must match table schema", angular: "Low — all rows must match table schema", extra: "No schema — any value for any key" },
      { feature: "ACID Transactions", react: "Multi-doc ACID (v4.0+, replica set required)", vue: "Full multi-table ACID, first-class", angular: "Full multi-table ACID (InnoDB)", extra: "Single-command atomic, no multi-key txn" },
      { feature: "JOINs / Relations", react: "$lookup (expensive, use sparingly), embed instead", vue: "First-class JOINs (INNER, LEFT, SELF, etc.)", angular: "First-class JOINs", extra: "No JOINs — single data structure" },
      { feature: "Horizontal Scaling", react: "Native sharding — built-in from day one", vue: "Complex (Citus, application sharding)", angular: "MySQL Cluster, ProxySQL sharding", extra: "Built-in clustering and Sentinel" },
      { feature: "Query Language", react: "MongoDB Query Language (JSON-based + aggregation)", vue: "SQL (40+ years, standardized)", angular: "SQL (MySQL flavor)", extra: "Commands (GET, SET, ZADD, etc.)" },
      { feature: "Indexing", react: "B-tree, text, 2dsphere, TTL, partial, multikey", vue: "B-tree, GIN, GiST, BRIN, partial, covering", angular: "B-tree, Full-text, spatial", extra: "No traditional indexes (in-memory structures)" },
      { feature: "Best Use Cases", react: "Variable-schema data, hierarchical data, real-time apps, catalogs", vue: "Financial data, complex relationships, analytics, reporting", angular: "Web apps, CMS, high-read workloads", extra: "Caching, sessions, rate limiting, real-time counters" },
      { feature: "Change Streams", react: "Built-in (oplog-based) — real-time document change notifications", vue: "NOTIFY/LISTEN, logical replication slots", angular: "Binlog replication, MySQL triggers", extra: "Pub/Sub built-in (channel-based)" },
      { feature: "Full-Text Search", react: "Text indexes + Atlas Search (Lucene-powered)", vue: "Built-in tsvector/tsquery — powerful", angular: "Built-in FULLTEXT index", extra: "No full-text search (use with Elasticsearch)" },
      { feature: "Managed Cloud", react: "MongoDB Atlas — best-in-class managed offering", vue: "AWS RDS, Supabase, Neon, Google Cloud SQL", angular: "AWS RDS MySQL, PlanetScale, TiDB Cloud", extra: "AWS ElastiCache, Upstash Redis, Redis Cloud" },
      { feature: "India Startup Adoption", react: "Dominant for MERN stack — Swiggy, Zepto, Meesho, ShareChat", vue: "Fintech, SaaS — Razorpay, Groww, Freshworks", angular: "Legacy apps, CMS, ShareChat back-end mix", extra: "Universal — Razorpay, Swiggy, Zepto all use Redis" },
    ],
  },

  // ── SECTION 12: PROS & CONS ──────────────────────────────────────
  pros: [
    "Schema flexibility — add fields to documents without migrations; rapidly evolving products ship faster when new data attributes don't require ALTER TABLE",
    "Document model matches application object model — a product in your Node.js code looks exactly like a product in MongoDB; no object-relational mapping impedance mismatch",
    "Native horizontal scaling — built-in sharding distributes data across multiple servers with official tooling; no Citus extension or application sharding required",
    "Rich aggregation pipeline — $match, $group, $lookup, $unwind, $facet, and $setWindowFields provide SQL-equivalent analytics power in a composable, testable format",
    "MongoDB Atlas — fully managed clusters with automatic backups, auto-scaling, built-in Performance Advisor, and Atlas Search; production-grade database without a DBA",
    "Real-time built-in — change streams provide native event streaming from database changes; power real-time features without additional infrastructure",
    "Geospatial support — 2dsphere indexes and $nearSphere, $geoWithin operators built-in; location-based features (nearby restaurants, driver tracking) work out of the box",
    "JavaScript-native — Mongoose queries and aggregation pipelines are JavaScript objects; full-stack JavaScript teams own the entire data layer in their primary language",
  ],
  cons: [
    "No enforced schema — flexible schema means a missing application validation lets malformed data into the database; data consistency relies entirely on application code correctness",
    "No true JOINs — $lookup is MongoDB's join equivalent but is expensive and signals a schema modeling problem; data that genuinely needs frequent joins belongs in PostgreSQL",
    "Multi-document transactions require replica sets — ACID transactions across multiple documents add overhead and require a replica set setup even in development",
    "Wrong tool for financial data — complex multi-table ACID consistency, foreign key constraints, and complex reporting are PostgreSQL's strengths; MongoDB's flexible model works against financial data integrity",
    "16MB document size limit — unbounded embedded arrays hit this limit; requires the Outlier Pattern or separate collection design for potentially large documents",
    "Memory-hungry — MongoDB's WiredTiger engine works best when the working set fits in RAM; cold queries on large collections require disk I/O, and RAM is the primary scaling knob",
    "Aggregation pipeline learning curve — $unwind + $group + $project pipeline composition requires significant practice before it becomes intuitive; SQL GROUP BY is more immediately readable for many developers",
    "Opinionated on replication — change streams and transactions require a replica set even for development; running a single-node replica set locally adds configuration overhead compared to a standalone PostgreSQL instance",
  ],

  // ── SECTION 13: FUTURE SCOPE ─────────────────────────────────────
  futureScope: [
    "MongoDB Atlas is evolving into a multi-model data platform beyond just documents. Atlas Vector Search — launched in 2024 and rapidly adopted in 2025–2026 — stores and queries high-dimensional embeddings (the numerical representations generated by AI models) alongside regular document data. Indian developers building AI-powered applications — product recommendation engines, semantic search, customer support chatbots with RAG (Retrieval-Augmented Generation) — can now store operational data AND vector embeddings in the same Atlas cluster. This eliminates the need for a separate vector database (Pinecone, Weaviate) for many AI application use cases, making MongoDB Atlas the primary data store for the AI application generation.",
    "MongoDB Atlas Stream Processing (launched 2024, maturing through 2026) brings real-time data stream processing — filtering, aggregating, and transforming data streams — directly into the Atlas platform using the familiar MongoDB aggregation pipeline syntax. Instead of running Apache Kafka + Flink or Kafka Streams for real-time data processing, teams can build event pipelines entirely within Atlas. For Indian startups building real-time analytics, fraud detection, or IoT data processing, Atlas Stream Processing lowers the operational complexity of real-time systems significantly — the same team that manages MongoDB can manage the streaming pipeline.",
    "The convergence of MongoDB's flexible document model with TypeScript's type system is creating the safest developer experience for document databases in 2026. Mongoose 8's TypeScript support, combined with Zod schema validation (where the TypeScript type and the MongoDB validation schema are derived from the same Zod definition), means that every document shape is validated at runtime AND type-checked at compile time. The next evolution — MongoDB's own TypeScript SDK improvements and potential Prisma-style type generation from MongoDB schemas — will make MongoDB-TypeScript as type-safe as Prisma-PostgreSQL.",
    "MongoDB's MERN stack position in India is strengthening rather than weakening despite competition from PostgreSQL + Prisma and Next.js + Supabase patterns. The reason: India's startup ecosystem is dominated by companies that built on MERN during the 2018–2022 wave and are now scaling those systems. The engineering teams at Swiggy, Zepto, Meesho, and the next generation of startups they spawn — where ex-Swiggy and ex-Zepto engineers start new companies — carry MongoDB expertise and architectural patterns with them. The MERN stack is not just a technical choice; it's a talent ecosystem that self-perpetuates through India's startup talent network.",
    "The MongoDB Developer Data Platform strategy — combining Atlas (operational database), Atlas Search (full-text search), Atlas Vector Search (AI/ML), Atlas Stream Processing (real-time events), and Atlas Charts (visualization) — positions MongoDB to compete with multi-tool stacks (PostgreSQL + Elasticsearch + Kafka + Grafana). For teams that want to minimize operational complexity and tooling diversity, Atlas as a single platform with all these capabilities is a compelling proposition. For Indian startups with small teams and without dedicated infrastructure engineers, this consolidation reduces the number of moving parts they need to understand and operate, making MongoDB Atlas increasingly attractive as team size shrinks and ambition grows.",
  ],

  // ── SECTION 14: ACTION PLAN ──────────────────────────────────────
  actionPlan: [
    { week: "Week 1–2", title: "MongoDB Fundamentals — Think in Documents, Not Tables", desc: "Create a free MongoDB Atlas account and set up an M0 cluster. Install MongoDB Compass for a visual interface and mongosh for the CLI. Spend the first three days doing everything in mongosh — insert documents, query them, update them, delete them. The goal: feel the difference between a structured SQL table and a flexible document. Then build the Notes API project: Mongoose Schema, Model, full CRUD with Express, all endpoints tested in Postman. Focus on: understanding what a schema does (validation, not rigid structure), what ObjectId is, and how find() with query operators works." },
    { week: "Week 3–4", title: "Schema Design — Make the Embedding Decision Consciously", desc: "This is the most important week. Take the Product Catalog project and design the schema before writing code. Answer these questions: What do I read together when I load a product page? (Embed those.) What could grow without bound? (Reference those.) What will I need independently? (Reference those.) Build the E-Commerce schema: Products with embedded images/specs/variants, separate Reviews collection with productId reference, computed ratings on product document. Implement the order creation with snapshot items. Compare your schema to the mistakes listed in this guide and fix any violations. Schema design intuition is built through practice — design before you code." },
    { week: "Week 5–7", title: "Aggregation Pipeline — Power of the Analytics Layer", desc: "The aggregation pipeline is where MongoDB expertise separates beginner from mid-level. Spend one full week exclusively on aggregation: $match + $group for revenue analytics, $unwind for array analysis, $lookup for joining collections, $facet for parallel results. Build the Analytics Dashboard project — implement all 8 analytics endpoints using only aggregation pipelines. For each, first write the plain English description of what you want ('revenue grouped by day for last 30 days'), then translate to pipeline stages. Use MongoDB Compass's aggregation builder for visual experimentation before writing code." },
    { week: "Week 8–10", title: "Indexing and Performance — Make Every Query Fast", desc: "Run explain('executionStats') on every query from your previous projects. Find all COLLSCAN results. Add indexes. Run explain() again and verify IXSCAN. Enable the Atlas Performance Advisor on your M0 cluster and implement all recommendations. Study the ESR rule and redesign any compound indexes that aren't in ESR order. Implement the cursor-based pagination pattern to replace skip(). Add TTL indexes to your session collection. After this week, you should never deploy a new MongoDB query to production without first checking its explain() output." },
    { week: "Week 11–14", title: "Advanced Patterns and Your Showcase Project", desc: "Implement the Computed Pattern (pre-computed ratings), the Snapshot Pattern (order items), and the Subset Pattern (recent reviews on product page) in your E-Commerce project. Then implement change streams with Socket.io for real-time order status notifications. Set up a development replica set (required for transactions) and implement the order creation transaction (order + stock decrement atomic). Deploy your full application to a production environment: Express API on Railway or Render, MongoDB Atlas M10. This project demonstrates every MongoDB skill employers test: schema design, aggregation, indexing, transactions, and real-time features." },
    { week: "Week 15+", title: "The Backend Job Push", desc: "Your GitHub should now have at least 2 deployed projects with MongoDB Atlas backends. Prepare for interviews by studying the aggregation pipeline deeply — interviewers regularly ask candidates to write or debug aggregation pipelines on a whiteboard or shared editor. Practice the schema design questions: 'Design a MongoDB schema for Swiggy', 'Design a MongoDB schema for Twitter', 'Design a MongoDB schema for a ride-sharing app'. For each, articulate your embedding vs referencing decisions. Study the common mistakes list — interviewers ask about these to distinguish developers who have deployed MongoDB to production from those who have only done tutorials. Apply to 10 MERN stack, Node.js backend, or full-stack roles per week. Most MongoDB developers in India find their first product company role within 8–12 weeks of consistent applications after completing this roadmap." },
  ],
};
