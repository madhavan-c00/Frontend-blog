import type { TechContent } from './types';

export const javascriptContent: TechContent = {
  techId: 'javascript',
  readTime: '30–35 min',
  difficulty: 'Beginner to Advanced',
  lastUpdated: '2026',

  // ── OPENING HOOK ─────────────────────────────────────────────────
  openingHook:
    "Every single technology in this learning platform — React, Node.js, Express, MERN Stack — has one thing in common: they are all JavaScript. You cannot skip JavaScript and jump to frameworks. Developers who do that hit a wall within weeks. They copy-paste code they don't understand, can't debug anything, and fail every technical interview the moment someone asks them to write code from scratch. JavaScript is the only programming language that runs natively in every browser and on every server via Node.js. It is the most used programming language on GitHub for the 11th consecutive year. In India, JavaScript knowledge is the entry requirement for frontend, backend, and full-stack roles. Every ₹4–25 LPA web development job expects JavaScript. This is not just another tutorial — this is the JavaScript foundation you need to stop struggling and start building.",

  // ── SECTION 1: INTRODUCTION ──────────────────────────────────────
  introText: [
    "JavaScript is a high-level, interpreted programming language originally created by Brendan Eich at Netscape in 1995 — in just 10 days. It was designed to add interactivity to static HTML pages. What started as a simple scripting tool has evolved into the most versatile and widely deployed programming language on the planet.",
    "For decades, JavaScript was limited to the browser — handling clicks, form validation, and DOM manipulation. That changed in 2009 when Ryan Dahl created Node.js, allowing JavaScript to run on servers. Today, JavaScript powers browser UIs (React, Vue, Angular), server APIs (Node.js, Express), mobile apps (React Native), desktop apps (Electron), command-line tools, cloud functions, and even machine learning (TensorFlow.js).",
    "The problem JavaScript solves is ubiquity. Instead of learning Python for backend, Swift for mobile, Java for desktop, and JavaScript for frontend — one language handles every layer of modern software. That is why every major company from Google and Meta to Razorpay and Zerodha runs significant parts of their stack on JavaScript. And that is why learning JavaScript is the single highest-ROI skill investment for any developer starting in 2026.",
  ],

  realWorldUsages: [
    "Google — Gmail, Google Docs, and Google Maps are built with JavaScript on the frontend",
    "Facebook and Instagram — React (JavaScript) powers their entire web UI",
    "Netflix — JavaScript handles their UI layer; Node.js serves API data to millions simultaneously",
    "Razorpay, Zerodha, CRED — Indian fintech products built on JavaScript full-stack",
    "WhatsApp Web — built with React; real-time messaging powered by JavaScript on both ends",
    "VS Code — Microsoft's most popular editor is an Electron app — written entirely in JavaScript",
    "Flipkart, Swiggy, Zomato — React frontends and Node.js backends powering millions of daily transactions",
  ],

  // ── SECTION 2: WHY LEARN ─────────────────────────────────────────
  whyLearn: {
    demand:
      "JavaScript is the most requested skill across every web development job category in India. Frontend developer, backend developer, full-stack developer, React developer, Node.js developer — every single one of these roles requires JavaScript as the baseline. Stack Overflow's 2025 Developer Survey found JavaScript the most used language for the 12th year running. There is no web development career in 2026 that doesn't start with JavaScript. Learning JavaScript step by step is not optional — it is the prerequisite for everything else.",
    jobRoles: [
      { role: "Frontend Developer", desc: "JavaScript is the language of the browser. Every frontend role expects strong JS fundamentals alongside React or Vue." },
      { role: "Full-Stack Developer (MERN/MEAN)", desc: "JavaScript on both frontend (React) and backend (Node.js). One language covers the entire stack." },
      { role: "Backend Developer (Node.js)", desc: "JavaScript runs on the server via Node.js. Express APIs, database queries, authentication — all in JavaScript." },
      { role: "React / Vue / Angular Developer", desc: "All major frontend frameworks are JavaScript. Framework knowledge without JS fundamentals collapses under pressure." },
      { role: "JavaScript Automation Engineer", desc: "Test automation (Playwright, Cypress), scripting, web scraping — JavaScript is the language of browser automation." },
    ],
    whyCompanies: [
      { reason: "Universal runtime", detail: "Browser, server, mobile, desktop — JavaScript runs everywhere. Companies prefer it for maximum code reuse." },
      { reason: "Huge talent pool", detail: "More JavaScript developers exist than any other language. Hiring is faster and the ecosystem is more mature." },
      { reason: "npm ecosystem", detail: "1.5 million packages. Whatever your product needs, someone has already built a JavaScript library for it." },
      { reason: "JSON native", detail: "APIs, databases, config files — all JSON. JavaScript handles JSON natively without parsing overhead." },
    ],
    salaryRange: "₹3 LPA – ₹7 LPA (Freshers with JS + one framework) | ₹8 LPA – ₹22 LPA (Mid-Level with React/Node.js depth)",
    careerNote:
      "JavaScript is the base layer of your entire web development career. Get it right and every framework, every library, every job interview becomes dramatically easier. Shortcuts here cost months of confusion later. Invest the time in real JavaScript fundamentals before touching any framework.",
  },

  // ── SECTION 3: HOW IT WORKS ──────────────────────────────────────
  howItWorks: {
    intro:
      "Think of a restaurant kitchen with one chef who works incredibly fast. The chef (JavaScript engine) takes orders (code) one at a time, but instead of standing idle while an oven preheats (waiting for data from a server), they start preparing the next dish. When the oven is ready, a timer goes off and the chef returns to finish the first dish. This is JavaScript's single-threaded, non-blocking, event-driven model — one thread, never idle, handling many tasks through smart scheduling.",
    vdomSteps: [
      { num: "1", title: "Parsing", text: "The JavaScript engine (V8 in Chrome/Node.js, SpiderMonkey in Firefox) reads your source code and converts it into an Abstract Syntax Tree (AST) — a structured representation of your code's logic." },
      { num: "2", title: "Compilation (JIT)", text: "Modern engines use Just-In-Time compilation. Rather than interpreting line-by-line, they compile frequently-run code ('hot code') to optimized machine code on the fly — making JavaScript far faster than traditional interpreters." },
      { num: "3", title: "Execution + Call Stack", text: "Code executes in the Call Stack — a LIFO (Last In, First Out) data structure. Function calls push frames onto the stack; returns pop them off. Synchronous code runs here, one operation at a time." },
      { num: "4", title: "Web APIs + Callback Queue", text: "Async operations (setTimeout, fetch, DOM events) are handed to Web APIs (in browsers) or libuv (in Node.js). When they complete, their callbacks are placed in the Callback Queue (or Microtask Queue for Promises)." },
      { num: "5", title: "Event Loop", text: "The Event Loop constantly checks: is the Call Stack empty? If yes, it picks the next callback from the queue and pushes it onto the stack. This is what enables non-blocking async behavior on a single thread." },
    ],
    componentCode: `// Visualizing the JavaScript execution model

console.log('1 — synchronous, runs immediately');

setTimeout(() => {
  console.log('3 — async, runs after call stack clears');
}, 0); // Even with 0ms delay, goes through the event loop

Promise.resolve().then(() => {
  console.log('2.5 — microtask, runs before setTimeout callback');
});

console.log('2 — synchronous, runs immediately');

// Output order:
// 1 — synchronous, runs immediately
// 2 — synchronous, runs immediately
// 2.5 — microtask, runs before setTimeout callback
// 3 — async, runs after call stack clears

// Why? Call Stack runs sync code first (1, 2)
// Then Microtask Queue drains (Promises — 2.5)
// Then Callback Queue runs (setTimeout — 3)`,
    renderCycle: [
      "Source code → parsed into Abstract Syntax Tree by JS engine",
      "AST → compiled to bytecode (and hot paths to machine code via JIT)",
      "Synchronous code → executes on the Call Stack, top to bottom",
      "Async operations → handed off to Web APIs / libuv, stack continues",
      "Async callbacks → queued (Microtask or Callback queue) → Event Loop pushes to stack when clear",
    ],
    closingNote:
      "You don't need to memorize every detail of this process. But understanding that JavaScript is single-threaded, that async code runs after synchronous code, and that Promises resolve before setTimeout callbacks — this knowledge explains 80% of the confusing bugs JavaScript developers encounter. The event loop is not magic; it's a predictable scheduling system.",
  },

  // ── SECTION 4: CORE CONCEPTS ─────────────────────────────────────
  coreConcepts: [
    {
      id: "variables-types",
      number: "4.1",
      title: "Variables, Data Types & Type Coercion",
      icon: "📦",
      color: "blue",
      intro:
        "JavaScript has three ways to declare variables: var (old, avoid it), let (block-scoped, reassignable), and const (block-scoped, not reassignable — use by default). JavaScript is dynamically typed — variables don't have fixed types, values do. This flexibility is powerful but causes subtle bugs through type coercion — JavaScript's automatic type conversion.",
      code: `// Variable declarations
const name = 'Arjun';       // Can't reassign — use for most things
let score = 0;              // Can reassign — use when value changes
var oldWay = 'avoid this';  // Function-scoped, hoisted — legacy code only

// JavaScript's 7 primitive types
const str = 'hello';           // String
const num = 42;                // Number (integers AND floats — one type)
const big = 9007199254740993n; // BigInt — for very large integers
const bool = true;             // Boolean
const nothing = null;          // Intentional absence of value
const notDefined = undefined;  // Variable declared but not assigned
const id = Symbol('userId');   // Unique identifier — rarely needed as beginner

// typeof operator
console.log(typeof 'hello');    // 'string'
console.log(typeof 42);         // 'number'
console.log(typeof null);       // 'object' — famous JavaScript bug, not fixable now
console.log(typeof undefined);  // 'undefined'
console.log(typeof function(){}); // 'function'

// Type Coercion — JavaScript's automatic type conversion (learn this well)
console.log(1 + '2');    // '12' — number coerced to string (concatenation)
console.log('5' - 2);   // 3 — string coerced to number (subtraction)
console.log(true + 1);  // 2 — true is 1, false is 0
console.log('' == false); // true — loose equality with coercion (avoid this)
console.log('' === false); // false — strict equality, no coercion (use this)

// Rule: ALWAYS use === for comparison. Never use ==.
const age = '25';
if (age === 25) { } // false — different types, no coercion
if (age == 25) { }  // true — coerces string to number, dangerous`,
      usage:
        "Variable declaration and type handling appear in every JavaScript program. Understanding const vs let prevents accidental reassignment bugs. Understanding type coercion explains why '5' - 3 is 2 but '5' + 3 is '53'. These are the kinds of questions that appear in every JavaScript interview at every level.",
      mistake:
        "Using var in modern JavaScript. var is function-scoped (not block-scoped) and hoisted to the top of its function, creating confusing bugs in loops and conditionals. Always use const by default, and let when you need to reassign. var is only relevant when reading legacy code.",
    },
    {
      id: "functions",
      number: "4.2",
      title: "Functions — Declarations, Expressions & Arrow Functions",
      icon: "⚙️",
      color: "primary",
      intro:
        "Functions are the fundamental unit of code organization in JavaScript. There are three ways to define them — each with different behavior around hoisting and the 'this' keyword. Arrow functions are the modern default, but understanding all three is critical because real codebases have all of them.",
      code: `// 1. Function Declaration — hoisted, can call before definition
function greet(name) {
  return \`Hello, \${name}!\`;
}
console.log(greet('Arjun')); // Works even if called before the function definition

// 2. Function Expression — not hoisted, assigned to a variable
const greetExpression = function(name) {
  return \`Hello, \${name}!\`;
};

// 3. Arrow Function — modern, concise, NO own 'this'
const greetArrow = (name) => \`Hello, \${name}!\`; // Implicit return for single expression

// Arrow function with body
const add = (a, b) => {
  const result = a + b;
  return result; // Explicit return needed with curly braces
};

// Default parameters
const createUser = (name, role = 'user', active = true) => ({ name, role, active });
console.log(createUser('Priya')); // { name: 'Priya', role: 'user', active: true }

// Rest parameters — collect remaining args into an array
const sum = (...numbers) => numbers.reduce((total, n) => total + n, 0);
console.log(sum(1, 2, 3, 4, 5)); // 15

// Higher-order functions — functions that take/return functions
const multiply = (factor) => (number) => number * factor; // Closure + currying
const double = multiply(2);
const triple = multiply(3);
console.log(double(5));  // 10
console.log(triple(5));  // 15

// The 'this' difference — critical to understand
const obj = {
  name: 'Obj',
  regularFn: function() { return this.name; }, // 'this' = obj
  arrowFn: () => this?.name,                   // 'this' = outer scope (not obj!)
};
console.log(obj.regularFn()); // 'Obj'
console.log(obj.arrowFn());   // undefined — arrow functions don't bind 'this'`,
      usage:
        "Functions are everywhere — React components are functions, Express route handlers are functions, array methods like map/filter take callback functions. Understanding the difference between regular and arrow functions is critical for React class components, event handlers, and any code that uses 'this'.",
      mistake:
        "Using arrow functions as object methods when you need 'this'. Arrow functions inherit 'this' from their surrounding scope — they don't create their own. In a React class component or an object method that needs to reference the object itself, use regular function syntax.",
    },
    {
      id: "arrays-objects",
      number: "4.3",
      title: "Arrays & Objects — The Core Data Structures",
      icon: "🗂️",
      color: "emerald",
      intro:
        "Arrays and objects are JavaScript's two primary data structures. Almost all real data — API responses, database results, user inputs — comes as objects or arrays of objects. Mastering the modern syntax (destructuring, spread, rest) and array methods (map, filter, reduce) is non-negotiable for any JavaScript job.",
      code: `// ── OBJECTS ────────────────────────────────────────
const user = {
  id: 1,
  name: 'Priya Sharma',
  email: 'priya@example.com',
  address: { city: 'Bangalore', state: 'Karnataka' },
};

// Destructuring — extract properties into variables
const { name, email, address: { city } } = user;
console.log(name, city); // 'Priya Sharma', 'Bangalore'

// Destructuring with rename and default
const { id: userId, role = 'user' } = user;
console.log(userId, role); // 1, 'user'

// Spread operator — shallow copy / merge objects
const updatedUser = { ...user, email: 'new@example.com', role: 'admin' };
// Original user is unchanged — spread creates a new object

// Computed property names
const field = 'email';
const patch = { [field]: 'patched@example.com' }; // { email: 'patched@...' }

// Object methods
console.log(Object.keys(user));    // ['id', 'name', 'email', 'address']
console.log(Object.values(user));  // [1, 'Priya Sharma', ...]
console.log(Object.entries(user)); // [['id', 1], ['name', 'Priya ...'], ...]

// ── ARRAYS ─────────────────────────────────────────
const products = [
  { id: 1, name: 'Laptop', price: 45000, category: 'electronics', inStock: true },
  { id: 2, name: 'Phone', price: 15000, category: 'electronics', inStock: false },
  { id: 3, name: 'Shirt', price: 999, category: 'clothing', inStock: true },
  { id: 4, name: 'Headphones', price: 2500, category: 'electronics', inStock: true },
];

// map — transform every element, returns new array
const names = products.map(p => p.name);
// ['Laptop', 'Phone', 'Shirt', 'Headphones']

// filter — keep elements matching a condition, returns new array
const inStock = products.filter(p => p.inStock);
const electronics = products.filter(p => p.category === 'electronics');

// reduce — fold array into a single value
const totalValue = products.reduce((sum, p) => sum + p.price, 0); // 63499

// find — first matching element (or undefined)
const laptop = products.find(p => p.name === 'Laptop');

// some / every — boolean checks
const anyOutOfStock = products.some(p => !p.inStock);   // true
const allInStock = products.every(p => p.inStock);       // false

// Chaining — combine multiple array methods
const affordableElectronics = products
  .filter(p => p.category === 'electronics' && p.inStock)
  .filter(p => p.price < 10000)
  .map(p => ({ name: p.name, price: p.price }));
// [{ name: 'Headphones', price: 2500 }]

// Spread with arrays
const first = [1, 2, 3];
const second = [4, 5, 6];
const combined = [...first, ...second]; // [1, 2, 3, 4, 5, 6]
const copy = [...first]; // Shallow copy — not the same reference`,
      usage:
        "API responses are almost always arrays of objects. Every React component that renders a list uses .map(). Every search/filter feature uses .filter(). Every calculation (cart total, analytics sum) uses .reduce(). Mastering these five methods (map, filter, reduce, find, some/every) is the difference between a junior and a competent JS developer.",
      mistake:
        "Mutating arrays and objects directly instead of creating new ones. Methods like .push(), .splice(), and direct property assignment modify the original. In React, this prevents re-renders. Use spread operator or array methods (map, filter) that return new arrays/objects instead of mutating.",
    },
    {
      id: "async-js",
      number: "4.4",
      title: "Asynchronous JavaScript — Callbacks, Promises & Async/Await",
      icon: "⚡",
      color: "yellow",
      intro:
        "Asynchronous programming is where most JavaScript beginners get stuck. JavaScript is single-threaded — it can't literally do two things at once. But it can schedule work and handle it when it's ready, without blocking. Understanding the three patterns — callbacks (old), Promises (ES6), and async/await (ES2017) — is mandatory for any real JavaScript work.",
      code: `// ── CALLBACKS (Old Way — understand to read legacy code) ──
function fetchUserData(userId, callback) {
  setTimeout(() => { // Simulating API delay
    callback(null, { id: userId, name: 'Arjun' }); // Error-first convention
  }, 1000);
}

fetchUserData(1, (err, user) => {
  if (err) return console.error(err);
  console.log(user.name);
});
// Problem: Nesting callbacks creates "callback hell" — deeply nested, unreadable

// ── PROMISES (ES6) ───────────────────────────────────
const fetchUser = (id) => new Promise((resolve, reject) => {
  setTimeout(() => {
    if (id > 0) resolve({ id, name: 'Arjun' });
    else reject(new Error('Invalid user ID'));
  }, 1000);
});

// Promise chaining — cleaner than nested callbacks
fetchUser(1)
  .then(user => {
    console.log(user.name);
    return fetchUser(2); // Return another promise to chain
  })
  .then(secondUser => console.log(secondUser.name))
  .catch(err => console.error('Error:', err.message))
  .finally(() => console.log('Done — always runs'));

// Promise.all — run multiple promises in parallel (faster)
const [user1, user2, user3] = await Promise.all([
  fetchUser(1), fetchUser(2), fetchUser(3)
]);
// All three run simultaneously — total time = slowest single request

// Promise.allSettled — get results even if some fail
const results = await Promise.allSettled([fetchUser(1), fetchUser(-1)]);
// [{ status: 'fulfilled', value: {...} }, { status: 'rejected', reason: Error }]

// ── ASYNC/AWAIT (Modern — what you should write) ─────
async function loadDashboardData(userId) {
  try {
    const user = await fetchUser(userId);           // Waits here
    const posts = await fetch(\`/api/posts?user=\${userId}\`).then(r => r.json());
    const notifications = await fetch('/api/notifications').then(r => r.json());

    return { user, posts, notifications };
  } catch (err) {
    console.error('Dashboard load failed:', err.message);
    throw err; // Re-throw so the caller can handle it
  }
}

// COMMON MISTAKE — sequential when they could be parallel
async function slow() {
  const user = await fetchUser(1);    // Wait 1s
  const posts = await fetchPosts(1);  // Wait 1s more — total: 2s
}

async function fast() {
  const [user, posts] = await Promise.all([
    fetchUser(1), fetchPosts(1)       // Both run at once — total: 1s
  ]);
}`,
      usage:
        "Every interaction with the outside world in JavaScript is async — fetching API data, reading files in Node.js, querying a database, setting a timer. Async/await is the modern standard. Understanding Promise.all for parallel requests is the optimization question interviewers love to ask.",
      mistake:
        "Writing await calls sequentially when the operations are independent. If user data and product data don't depend on each other, fetching them one after another is double the wait time. Use Promise.all for independent parallel async operations. This is a very common performance interview question.",
    },
    {
      id: "closures-scope",
      number: "4.5",
      title: "Closures & Scope — The Most Interviewed Concept",
      icon: "🔒",
      color: "purple",
      intro:
        "Closures are one of the most powerful and most misunderstood concepts in JavaScript. A closure is a function that remembers the variables from its outer scope even after that scope has finished executing. This isn't just theory — closures power React hooks, module patterns, memoization, and currying. Almost every senior interview includes a closure question.",
      code: `// Scope — where variables are accessible
let globalVar = 'I am global';

function outer() {
  let outerVar = 'I am in outer';

  function inner() {
    let innerVar = 'I am in inner';
    // Can access: innerVar, outerVar, globalVar (scope chain)
    console.log(outerVar); // Works — inner has access to outer's scope
  }

  // Cannot access innerVar here — it's local to inner()
}

// CLOSURE — function that captures its surrounding scope
function createCounter(initialValue = 0) {
  let count = initialValue; // This variable is "closed over"

  return {
    increment: () => ++count,
    decrement: () => --count,
    reset: () => { count = initialValue; },
    getCount: () => count,
  };
}

const counter = createCounter(10);
console.log(counter.increment()); // 11
console.log(counter.increment()); // 12
console.log(counter.decrement()); // 11
// count is private — only accessible through the returned methods

// Closure for data privacy — module pattern
function createUserService() {
  const users = []; // Private — not accessible outside

  return {
    addUser: (user) => { users.push(user); return user; },
    getUsers: () => [...users], // Return copy, not reference
    getUserById: (id) => users.find(u => u.id === id),
    count: () => users.length,
  };
}

const userService = createUserService();
userService.addUser({ id: 1, name: 'Arjun' });
console.log(userService.count()); // 1
// userService.users — undefined, it's private!

// CLOSURE IN LOOPS — classic interview trap
// Bad (var)
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100); // Logs: 3, 3, 3 — var shares scope!
}

// Fixed with let (block scope)
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100); // Logs: 0, 1, 2 — let creates new scope per iteration
}

// Practical closure — memoization
function memoize(fn) {
  const cache = {}; // Closed over — persists between calls
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache[key] !== undefined) {
      console.log('Cache hit!');
      return cache[key];
    }
    cache[key] = fn(...args);
    return cache[key];
  };
}

const expensiveCalc = memoize((n) => {
  // Imagine this takes 2 seconds
  return n * n;
});

expensiveCalc(5);  // Calculates, caches result
expensiveCalc(5);  // Cache hit! Returns immediately`,
      usage:
        "React's useState hook is implemented with closures — state values are 'remembered' between renders. Event listeners in the browser capture variables via closures. The counter, module pattern, and memoize examples above are literal interview questions. If you understand closures, you understand JavaScript's memory model.",
      mistake:
        "The var-in-loop bug. Using var in a for loop creates ONE variable shared across all iterations. By the time the async callbacks run (setTimeout, event listeners), the loop has finished and var i is its final value. Use let, which creates a new binding per loop iteration. This appears in almost every senior JS interview.",
    },
    {
      id: "dom-manipulation",
      number: "4.6",
      title: "DOM Manipulation & Events",
      icon: "🖥️",
      color: "orange",
      intro:
        "The DOM (Document Object Model) is the browser's representation of your HTML page as a tree of objects. JavaScript manipulates this tree to make pages interactive — changing text, adding elements, responding to clicks. While React abstracts DOM manipulation, every JavaScript developer must understand it directly — it's what React is doing under the hood.",
      code: `// ── SELECTING ELEMENTS ─────────────────────────────
const title = document.getElementById('main-title');
const buttons = document.querySelectorAll('.btn');    // NodeList of all matches
const firstBtn = document.querySelector('.btn');      // First match only
const form = document.querySelector('form#signup');   // CSS selector syntax

// ── READING AND MODIFYING CONTENT ──────────────────
title.textContent = 'New Title';      // Safe — treats as text, no HTML parsing
title.innerHTML = '<strong>Bold</strong>'; // Can parse HTML — XSS risk if user input!

// ── MODIFYING STYLES AND CLASSES ───────────────────
const card = document.querySelector('.card');
card.style.backgroundColor = '#f0f0f0'; // Inline style (avoid for complex styling)
card.classList.add('active');
card.classList.remove('hidden');
card.classList.toggle('expanded');        // Add if absent, remove if present
card.classList.contains('active');        // true/false check

// ── CREATING AND INSERTING ELEMENTS ────────────────
function createProductCard(product) {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.dataset.id = product.id; // Sets data-id attribute

  card.innerHTML = \`
    <img src="\${product.image}" alt="\${product.name}">
    <h3>\${product.name}</h3>
    <p>₹\${product.price.toLocaleString('en-IN')}</p>
    <button class="add-to-cart" data-product-id="\${product.id}">Add to Cart</button>
  \`;

  return card;
}

const grid = document.querySelector('.product-grid');
const products = [{ id: 1, name: 'Laptop', price: 45000, image: '/laptop.jpg' }];

// Efficient: build all at once, one DOM operation
const fragment = document.createDocumentFragment();
products.forEach(p => fragment.appendChild(createProductCard(p)));
grid.appendChild(fragment); // One reflow, not N reflows

// ── EVENT HANDLING ──────────────────────────────────
// Direct event listener
const addBtn = document.querySelector('#add-to-cart');
addBtn.addEventListener('click', (event) => {
  event.preventDefault(); // Stop default browser behavior
  event.stopPropagation(); // Stop event bubbling up to parents
  console.log('Button clicked!');
});

// Event delegation — handle many children with one listener on the parent
document.querySelector('.product-grid').addEventListener('click', (event) => {
  const btn = event.target.closest('.add-to-cart'); // Find closest matching ancestor
  if (!btn) return; // Click was somewhere else on the grid

  const productId = btn.dataset.productId;
  addToCart(productId);
});
// One listener handles ALL product card buttons — even dynamically added ones`,
      usage:
        "DOM manipulation is what React does automatically — but knowing it directly is what makes you understand why React exists and how to debug React apps. Event delegation is a genuine interview topic. Building a to-do list, a modal, a dropdown — all require direct DOM skills if you're building without a framework.",
      mistake:
        "Not using event delegation for dynamically added elements. Adding event listeners inside a loop (one per element) is inefficient and breaks for dynamically added elements. One listener on the parent that uses event.target to identify which child was clicked handles all current and future children.",
    },
    {
      id: "es6-modern",
      number: "4.7",
      title: "Modern JavaScript (ES6+) — The Features You Use Every Day",
      icon: "✨",
      color: "red",
      intro:
        "ES6 (2015) and subsequent yearly releases transformed JavaScript from a scripting language into a serious development platform. These features are not optional extras — they are the daily syntax of React, Node.js, and every modern JavaScript codebase. You will use every one of these in your first week on any JavaScript job.",
      code: `// ── TEMPLATE LITERALS ──────────────────────────────
const name = 'Priya';
const greeting = \`Hello, \${name}! Today is \${new Date().toDateString()}.\`;
const multiLine = \`
  Line 1
  Line 2
  Line 3
\`; // No more string concatenation with +

// ── DESTRUCTURING ──────────────────────────────────
// Object destructuring
const { title, author: { name: authorName }, publishedAt } = bookData;

// Array destructuring
const [first, second, ...rest] = [1, 2, 3, 4, 5];
// first=1, second=2, rest=[3,4,5]

// Function parameter destructuring (very common in React)
function UserCard({ name, email, role = 'user', avatar }) {
  return \`<div>\${name} (\${role})</div>\`;
}

// ── SPREAD & REST ───────────────────────────────────
// Spread — expand iterables
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]
const obj1 = { a: 1 };
const obj2 = { ...obj1, b: 2 }; // { a: 1, b: 2 }

// Clone arrays/objects (shallow)
const arrCopy = [...arr1];
const objCopy = { ...obj1 };

// ── OPTIONAL CHAINING & NULLISH COALESCING ──────────
const user = { profile: { avatar: null } };

// Old way — crashes if profile is undefined
const avatar = user && user.profile && user.profile.avatar;

// Optional chaining — short-circuits to undefined instead of crashing
const safeAvatar = user?.profile?.avatar; // null (doesn't crash)
const cityName = user?.address?.city; // undefined (not null.city error)

// Nullish coalescing — fallback only for null/undefined (not 0 or '')
const displayName = user?.name ?? 'Anonymous'; // 'Anonymous' if null/undefined
const itemCount = cartCount ?? 0; // 0 if null, but keeps 0 if count is 0

// ── MODULES (ES Modules) ────────────────────────────
// math.js — named exports
export const PI = 3.14159;
export function add(a, b) { return a + b; }
export function subtract(a, b) { return a - b; }

// Default export — one per file
export default function multiply(a, b) { return a * b; }

// Importing
import multiply, { add, PI } from './math.js'; // Default + named
import * as MathUtils from './math.js';          // Import all as namespace

// ── SHORT-CIRCUIT EVALUATION ────────────────────────
const isAdmin = true;
const adminPanel = isAdmin && <AdminPanel />; // Renders only if true (React pattern)
const value = null || 'default';              // 'default' — || returns first truthy

// ── OBJECT SHORTHAND ───────────────────────────────
const x = 10, y = 20;
const point = { x, y }; // { x: 10, y: 20 } — instead of { x: x, y: y }

const createUser = (name, email) => ({ name, email, createdAt: new Date() });`,
      usage:
        "These aren't advanced features — they're baseline modern JavaScript. Destructuring appears in every React component (props and useState). Spread is used in every Redux/Zustand state update. Optional chaining prevents 80% of 'Cannot read properties of undefined' errors. Template literals replace string concatenation everywhere.",
      mistake:
        "Confusing optional chaining (?.) with nullish coalescing (??). Optional chaining is for property access — stops at undefined/null instead of throwing. Nullish coalescing is for providing defaults — returns the right side only when the left is null or undefined (unlike || which also triggers on 0, '', false).",
    },
  ],

  // ── SECTION 5: PREREQUISITES ─────────────────────────────────────
  prerequisites: [
    { item: "Basic Computer Skills", done: true, note: "Comfortable using a computer and browser", detail: "File management, using a browser, basic typing. JavaScript is your first programming language for many — that's completely fine." },
    { item: "HTML Fundamentals", done: true, note: "Understand the structure of a webpage", detail: "Tags, attributes, nesting, forms, semantic elements. JavaScript manipulates HTML — you need to know what you're manipulating." },
    { item: "CSS Basics", done: true, note: "Know how to style elements", detail: "Selectors, box model, Flexbox basics. JavaScript adds and removes CSS classes — understanding CSS helps." },
    { item: "A Code Editor", done: true, note: "VS Code is the industry standard", detail: "Install VS Code. Add extensions: Prettier (formatting), ESLint (error checking), Quokka.js (live JS evaluation). These are what professional developers use." },
    { item: "Browser Developer Tools", done: true, note: "Your primary debugging tool", detail: "Open DevTools (F12) in Chrome. Learn the Console, Sources, and Network tabs. console.log is your best friend when learning." },
    { item: "Willingness to Debug", done: false, note: "Real skill, not optional", detail: "JavaScript errors are normal. Reading error messages, using debugger statements, and stepping through code are skills to develop alongside syntax. Most beginners skip this — don't." },
  ],

  // ── SECTION 6: ROADMAP ───────────────────────────────────────────
  roadmap: [
    {
      phase: "Beginner",
      label: "01",
      duration: "Weeks 1–4",
      color: "emerald",
      topics: [
        "Variables — const, let (avoid var)",
        "Data types — string, number, boolean, null, undefined",
        "Operators — arithmetic, comparison (===), logical (&&, ||, !)",
        "Control flow — if/else, ternary, switch",
        "Loops — for, while, for...of, for...in",
        "Functions — declarations, expressions, arrow functions",
        "Arrays — create, access, push/pop, map, filter, reduce",
        "Objects — create, access, methods, shorthand",
        "DOM selection — getElementById, querySelector",
        "DOM events — addEventListener, click, submit, input",
      ],
      buildProjects: [
        "Calculator — button clicks update display, evaluate expressions",
        "To-Do List — add, complete, delete tasks (DOM manipulation only)",
        "Random Quote Generator — fetch from an array, display on click",
        "Color Flipper — click to change background to a random color",
      ],
    },
    {
      phase: "Intermediate",
      label: "02",
      duration: "Weeks 5–10",
      color: "primary",
      topics: [
        "Closures and lexical scope",
        "The 'this' keyword and binding",
        "Prototypes and prototype chain",
        "ES6+ — destructuring, spread, template literals, modules",
        "Promises and the Promise API (all, allSettled, race)",
        "Async/await and error handling with try/catch",
        "Fetch API — GET, POST with headers and body",
        "Local Storage and Session Storage",
        "Error handling — try/catch/finally, custom Error classes",
        "Regular expressions basics",
        "Array and Object methods deep dive",
      ],
      buildProjects: [
        "Weather App — fetch from OpenWeather API, display 5-day forecast",
        "GitHub User Search — fetch from GitHub API, display repos and stats",
        "Shopping Cart — add/remove items, calculate total, persist in localStorage",
        "Infinite Scroll — fetch paginated API data as user scrolls",
      ],
    },
    {
      phase: "Advanced",
      label: "03",
      duration: "Weeks 11–20+",
      color: "purple",
      topics: [
        "Event loop deep dive — microtasks, macrotasks, call stack",
        "Design patterns — Module, Factory, Observer, Singleton",
        "Functional programming — pure functions, immutability, composition",
        "TypeScript fundamentals — types, interfaces, generics",
        "JavaScript performance — memory leaks, profiling, optimization",
        "Testing — Jest, unit tests, integration tests",
        "Web APIs — Intersection Observer, Web Workers, Service Workers",
        "Security — XSS, CSRF, Content Security Policy",
        "Build tools — Vite, Webpack basics, Babel",
        "Node.js JavaScript — differences from browser JS",
      ],
      buildProjects: [
        "Custom Promise implementation — build your own Promise from scratch",
        "Virtual DOM implementation — understand what React does internally",
        "Observable/reactive system — implement an event emitter from scratch",
        "JavaScript testing suite — write unit tests for a utility library",
      ],
    },
  ],

  // ── SECTION 7: USE CASES ─────────────────────────────────────────
  useCases: [
    { num: "01", title: "Interactive Web UIs", body: "Every button click, form submission, dropdown, modal, and carousel on the web is JavaScript. Before React, developers wrote raw DOM manipulation JavaScript for these. Understanding vanilla JS for interactivity is what separates developers who debug React from those who just copy-paste it." },
    { num: "02", title: "REST API Consumption", body: "The Fetch API and Axios (JavaScript library) are how every frontend communicates with backends. Every weather app, GitHub dashboard, e-commerce frontend — they all call APIs using JavaScript's async primitives. The fetch → await → update state pattern is the heartbeat of modern web apps." },
    { num: "03", title: "Form Validation and User Input Processing", body: "Real-time validation (password strength, email format checking, phone number formatting) is pure JavaScript. Libraries like Yup and Zod are JavaScript. Understanding regex, event handling, and state tracking is what makes form validation possible." },
    { num: "04", title: "Browser Storage and State Persistence", body: "localStorage, sessionStorage, and IndexedDB are JavaScript APIs. Persisting a shopping cart between page refreshes, saving user preferences, caching API responses in the browser — all JavaScript. React apps use localStorage through JavaScript code." },
    { num: "05", title: "Node.js Server-Side Programming", body: "JavaScript runs on servers via Node.js. The same language, different runtime. File system operations, HTTP servers, database drivers, CLI tools — all written in JavaScript. The language knowledge transfers completely; only the available APIs differ." },
    { num: "06", title: "Browser Automation and Testing", body: "Playwright and Cypress — the dominant browser testing tools — are written in JavaScript and run tests in JavaScript. Puppeteer for web scraping, Jest for unit testing, Vitest for component testing — the entire JavaScript testing ecosystem." },
    { num: "07", title: "Real-Time Applications", body: "WebSockets — real-time chat, live scoreboards, collaborative editing — are native browser APIs accessed through JavaScript. Socket.io (a JavaScript library) provides an abstraction. The event-driven nature of JavaScript is exactly what real-time applications need." },
  ],

  // ── SECTION 8: PROJECTS ──────────────────────────────────────────
  projects: {
    beginner: [
      { name: "Interactive Calculator", desc: "A functional calculator with keyboard and button support. Handles decimals, negative numbers, and clears correctly.", teaches: "DOM manipulation, event handling, string-to-number conversion, operator logic, edge case thinking" },
      { name: "To-Do List App", desc: "Add, complete, delete, and filter tasks. Persist tasks in localStorage so they survive page refresh.", teaches: "DOM CRUD operations, event delegation, localStorage API, data modeling in JavaScript arrays" },
      { name: "Weather App (Vanilla JS)", desc: "Fetch weather by city name using the OpenWeather API. Display temperature, conditions, and a 5-day forecast.", teaches: "Fetch API, async/await, JSON parsing, DOM updates with API data, error handling for failed requests" },
      { name: "Quiz App", desc: "Multiple choice questions with timer, score tracking, and results screen. Randomize question order.", teaches: "State management without a framework, array shuffle, setInterval, conditional rendering in vanilla JS" },
    ],
    intermediate: [
      { name: "GitHub Profile Search", desc: "Search any GitHub username, display profile, repos, followers. Click a repo to see details. Handle not-found errors.", teaches: "Async/await, API chaining (profile → repos in sequence), error states, dynamic DOM generation, debouncing search input" },
      { name: "Infinite Scroll News Feed", desc: "Fetch paginated news articles from NewsAPI. Load more as user scrolls to the bottom using Intersection Observer.", teaches: "Intersection Observer API, pagination state, async loading patterns, debounce/throttle" },
      { name: "Drag and Drop Kanban Board", desc: "Three columns (To Do, In Progress, Done). Drag tasks between columns. Persist board state in localStorage.", teaches: "HTML5 Drag and Drop API, complex state management, localStorage serialization, event coordination" },
      { name: "Real-Time Chat UI (Mock Backend)", desc: "Chat interface with message bubbles, timestamps, typing indicator. Mock WebSocket with setInterval for demo.", teaches: "DOM insertion patterns, scroll management, date formatting, simulating real-time updates" },
    ],
    advanced: [
      { name: "Custom Promise Implementation", desc: "Build a MyPromise class from scratch that supports then, catch, finally, and Promise.all — without using the built-in Promise.", teaches: "JavaScript engine internals, microtask queue, state machines, callback patterns — genuinely hard and impressive in interviews" },
      { name: "Minimal Frontend Framework", desc: "Build a tiny component system with state, re-rendering, and a virtual DOM diffing algorithm. Understand what React solves.", teaches: "Virtual DOM concept, reconciliation algorithm, closure-based state, the real cost of DOM operations" },
      { name: "JavaScript Testing Library", desc: "Write a utility library (date formatting, string manipulation, array helpers) with full Jest test coverage — 100 tests minimum.", teaches: "Test-driven development, edge case thinking, Jest setup, mocking, coverage reports — portfolio-grade open source project" },
    ],
  },

  // ── SECTION 9: MISTAKES ──────────────────────────────────────────
  mistakes: [
    {
      title: "Using == Instead of ===",
      tip: "Always use strict equality (===). Loose equality (==) performs type coercion, producing counterintuitive results.",
      wrong: "if (0 == false) // true | if ('' == null) // false | if (1 == '1') // true",
      correct: "if (0 === false) // false | if ('' === null) // false | if (1 === '1') // false — predictable",
    },
    {
      title: "Not Understanding var, let, and const Scoping",
      explanation: "var is function-scoped and hoisted. let and const are block-scoped. Using var in a for loop creates one shared variable — all closures in that loop reference the same value.",
      tip: "Never use var in modern JavaScript. Use const by default. Use let only when you need to reassign. The for loop closure bug with var is a top interview question.",
      wrong: "for (var i = 0; i < 3; i++) { setTimeout(() => console.log(i)); } // 3, 3, 3",
      correct: "for (let i = 0; i < 3; i++) { setTimeout(() => console.log(i)); } // 0, 1, 2",
    },
    {
      title: "Mutating Arrays and Objects Directly",
      explanation: "JavaScript passes objects and arrays by reference. Directly modifying them (push, splice, direct property assignment) also modifies every other variable pointing to the same object. In React, this prevents re-renders.",
      tip: "Use spread operator or non-mutating methods. .map(), .filter(), .reduce() all return new arrays. {...obj, newProp: value} returns a new object.",
      wrong: "const updated = state; updated.count++; setState(updated); // Same reference — React won't re-render",
      correct: "setState(prev => ({ ...prev, count: prev.count + 1 })); // New object reference — React re-renders",
    },
    {
      title: "Forgetting that typeof null === 'object'",
      explanation: "A 27-year-old JavaScript bug that will never be fixed for backwards compatibility. Checking typeof myVar === 'object' returns true for both objects AND null.",
      tip: "Always check for null explicitly before checking typeof: if (myVar !== null && typeof myVar === 'object'). Or just check if (myVar) for most use cases.",
      wrong: "if (typeof data === 'object') data.forEach(...); // Crashes if data is null",
      correct: "if (data !== null && typeof data === 'object') data.forEach(...);",
    },
    {
      title: "Not Handling Promise Rejection",
      explanation: "An unhandled Promise rejection causes a warning in browsers and crashes Node.js processes (in newer versions). Every Promise chain needs a .catch() or every async function needs try/catch.",
      tip: "Every async function: wrap await calls in try/catch. Every .then() chain: end with .catch(). Add a global handler: window.addEventListener('unhandledrejection', handler).",
      wrong: "fetch('/api/data').then(r => r.json()).then(setData); // Unhandled if fetch fails",
      correct: "fetch('/api/data').then(r => r.json()).then(setData).catch(err => setError(err.message));",
    },
    {
      title: "Using innerHTML with User Input",
      explanation: "Setting element.innerHTML with unsanitized user-provided content is an XSS (Cross-Site Scripting) vulnerability. Users can inject script tags that execute malicious JavaScript.",
      tip: "Use textContent for user-provided text — it's always treated as plain text, never as HTML. Only use innerHTML with static, trusted content you control.",
      wrong: "element.innerHTML = userInput; // XSS vulnerability if input is '<script>alert(document.cookie)</script>'",
      correct: "element.textContent = userInput; // Safe — displays as text, never executes as HTML",
    },
    {
      title: "Awaiting in a Loop Sequentially When Parallel is Better",
      explanation: "Using await inside a for loop runs each async operation after the previous one completes. For N independent operations, this is N times slower than running them in parallel.",
      tip: "Use Promise.all() with .map() for parallel execution. Only use sequential await when each operation depends on the previous one's result.",
      wrong: "for (const id of ids) { const user = await fetchUser(id); } // Sequential — N * latency",
      correct: "const users = await Promise.all(ids.map(id => fetchUser(id))); // Parallel — 1 * latency",
    },
    {
      title: "Not Understanding 'this' in Different Contexts",
      explanation: "'this' in JavaScript depends on HOW a function is called, not where it is defined. In a regular function, 'this' is the calling object. In arrow functions, it's the outer scope. In strict mode, it's undefined in non-method functions.",
      tip: "When 'this' behavior matters, use regular functions for methods (they bind 'this' to the object). Use arrow functions when you want to capture the outer 'this'. Use .bind(), .call(), or .apply() to explicitly set 'this'.",
    },
    {
      title: "Skipping Error Handling in Async Code",
      explanation: "When a fetch fails (network error, 404, 500), the Promise rejects. When await is used without try/catch, the error propagates silently or crashes the function. The UI shows no data and no error message.",
      tip: "Every async function that touches the network needs try/catch/finally. In the catch block, set error state. In finally, set loading to false. Never skip all three.",
    },
    {
      title: "console.log Debugging Instead of Using the Debugger",
      explanation: "Scattering console.log statements is time-consuming and leaves temporary code in your codebase. Chrome DevTools has a full debugger with breakpoints, variable inspection, and step-through execution.",
      tip: "Add the debugger statement in your code or click the line number in Chrome DevTools Sources tab. Step through execution, inspect variables. This is 10x faster than console.log for complex bugs.",
    },
    {
      title: "Blocking the Main Thread with Synchronous Heavy Computation",
      explanation: "JavaScript is single-threaded. A synchronous loop that runs for 5 seconds freezes the entire page — no clicks, no scroll, no UI updates. This is the source of 'janky' user interfaces.",
      tip: "Break heavy computation into chunks using setTimeout to yield to the event loop. Use Web Workers for truly heavy tasks (image processing, complex algorithms) — they run on a separate thread.",
    },
    {
      title: "Not Using Strict Mode",
      explanation: "Without 'use strict', JavaScript silently ignores many errors — undeclared variables become global, duplicate parameters are allowed. Strict mode turns these silent failures into thrown errors.",
      tip: "Add 'use strict' at the top of your scripts (or files). ES6 modules and classes are automatically in strict mode. Node.js modules with 'type: module' are also strict.",
      wrong: "x = 5; // Silently creates a global variable without 'use strict'",
      correct: "'use strict'; x = 5; // ReferenceError: x is not defined — caught immediately",
    },
  ],

  // ── SECTION 10: INTERVIEW QUESTIONS ─────────────────────────────
  interviewQuestions: {
    beginner: [
      { q: "What is JavaScript and what is it primarily used for?", a: "JavaScript is a high-level, interpreted programming language originally designed for browser interactivity. Today it runs in browsers (frontend), on servers (Node.js), in mobile apps (React Native), and desktop apps (Electron). It is the most used programming language in the world." },
      { q: "What is the difference between let, const, and var?", a: "var is function-scoped and hoisted — avoid it. let is block-scoped and reassignable. const is block-scoped and cannot be reassigned (though object properties can still be mutated). Use const by default; let when you need reassignment; never use var in new code." },
      { q: "What is the difference between == and ===?", a: "== is loose equality — performs type coercion before comparing (1 == '1' is true). === is strict equality — no coercion, compares both value and type (1 === '1' is false). Always use ===." },
      { q: "What are JavaScript data types?", a: "7 primitives: string, number, bigint, boolean, null, undefined, symbol. And one complex type: object (which includes arrays, functions, and plain objects). typeof null returns 'object' — this is a known bug." },
      { q: "What is the difference between null and undefined?", a: "undefined means a variable was declared but not assigned a value. null is an intentional absence of value — you explicitly assign it. typeof undefined is 'undefined'. typeof null is 'object' (JavaScript bug)." },
      { q: "What is hoisting in JavaScript?", a: "JavaScript moves function declarations and var declarations to the top of their scope during compilation. Function declarations are fully hoisted (callable before the definition). var is hoisted but initialized to undefined. let and const are hoisted but not initialized — accessing them before declaration throws a ReferenceError (Temporal Dead Zone)." },
      { q: "What is an arrow function? How does it differ from a regular function?", a: "Arrow functions have shorter syntax and don't create their own 'this' binding — they inherit 'this' from the surrounding scope. They also can't be used as constructors and don't have the 'arguments' object. Use arrow functions for callbacks and non-method functions; regular functions when you need 'this' to refer to the calling object." },
      { q: "What is the difference between Array.map(), Array.filter(), and Array.reduce()?", a: "map() transforms every element and returns a new array of the same length. filter() returns a new array containing only elements that pass a condition. reduce() accumulates elements into a single value (sum, count, object). All three return new arrays/values without mutating the original." },
      { q: "What is a callback function?", a: "A function passed as an argument to another function, to be called later. The foundation of asynchronous JavaScript. Array methods like map and filter take callback functions. Event listeners receive callback functions. The term 'callback hell' refers to deeply nested callbacks." },
      { q: "What is the DOM?", a: "Document Object Model — the browser's structured, programmable representation of an HTML page as a tree of nodes. JavaScript uses the DOM API (document.getElementById, querySelector, createElement, etc.) to read and modify page content dynamically." },
    ],
    intermediate: [
      { q: "What is a closure and give a real-world example?", a: "A closure is a function that has access to variables from its outer scope even after that scope has returned. Real example: a counter function returns increment/decrement functions that share and remember a private count variable. React's useState hook is implemented using closures." },
      { q: "Explain the JavaScript Event Loop.", a: "JavaScript is single-threaded. Synchronous code runs on the Call Stack. Async operations (fetch, setTimeout) are handled by Web APIs/libuv. Their callbacks are placed in the Callback Queue (or Microtask Queue for Promises). The Event Loop moves callbacks to the Call Stack when it's empty. Microtasks (Promises) drain before macrotasks (setTimeout)." },
      { q: "What is the difference between Promise.all() and Promise.allSettled()?", a: "Promise.all() rejects immediately if any promise rejects — fast-fail. Promise.allSettled() waits for all promises to finish regardless of outcome, returning an array of { status: 'fulfilled'|'rejected', value|reason } objects. Use all() when you need all or nothing; allSettled() when you need results from all even if some fail." },
      { q: "What is the prototype chain?", a: "Every JavaScript object has an internal [[Prototype]] link to another object. When you access a property, JS looks in the object, then its prototype, then the prototype's prototype — up the chain until it reaches null. This is how methods like .toString() on your objects come from Object.prototype." },
      { q: "What is the 'this' keyword and how is its value determined?", a: "The value of 'this' depends on how a function is called: (1) Regular function called as a method — 'this' is the object. (2) Regular function called alone — 'this' is global (or undefined in strict mode). (3) Arrow function — 'this' is from the outer scope. (4) Constructor with new — 'this' is the new object. (5) .call()/.apply()/.bind() — 'this' is explicitly set." },
      { q: "What is event delegation?", a: "Attaching one event listener to a parent element to handle events from all its children, using event.target to identify which child triggered the event. Benefits: one listener instead of many, handles dynamically added children, better memory performance. Used heavily in vanilla JS for dynamic lists." },
      { q: "What is the difference between synchronous and asynchronous code?", a: "Synchronous code blocks execution — the next line waits until the current one finishes. Asynchronous code doesn't block — the operation is scheduled, JS continues executing, and the callback/promise resolution runs when the operation completes. Network requests, file reads, and timers are always async in JavaScript." },
      { q: "What are Promises and why were they introduced?", a: "Promises represent an eventual result of an async operation — pending, fulfilled, or rejected. They were introduced to solve callback hell (nested callbacks), providing .then()/.catch() chaining and eventually enabling async/await syntax. Promises make async code more readable and maintainable." },
      { q: "What is the spread operator and what can it do?", a: "... spreads an iterable (array, object, string) into individual elements. Uses: copy arrays ([...arr]), merge arrays ([...a, ...b]), copy objects ({...obj}), merge objects ({...a, ...b}), pass array as function arguments (fn(...arr)). Creates shallow copies — nested objects still share references." },
      { q: "What is optional chaining (?.) and why is it useful?", a: "It safely accesses nested object properties by short-circuiting to undefined if any part of the chain is null or undefined, instead of throwing a TypeError. user?.address?.city returns undefined if address is null, rather than crashing. Dramatically reduces defensive null-checking code." },
    ],
    advanced: [
      { q: "What is the difference between microtasks and macrotasks in the event loop?", a: "Microtasks (Promise .then callbacks, queueMicrotask, MutationObserver) run before the next macrotask — the microtask queue drains completely before the event loop picks the next macrotask. Macrotasks (setTimeout, setInterval, I/O) are processed one per event loop tick. This is why Promise callbacks always run before setTimeout(fn, 0)." },
      { q: "Explain how garbage collection works in JavaScript.", a: "JavaScript uses mark-and-sweep garbage collection. The GC starts from 'roots' (global variables, current call stack), marks everything reachable, then sweeps unmarked objects as garbage. Memory leaks happen when objects are still reachable (in closures, event listeners, or global variables) but no longer needed — the GC can't collect them." },
      { q: "What is a memory leak in JavaScript and how do you identify one?", a: "Unintentional retention of objects in memory that are no longer needed. Common causes: global variables, forgotten event listeners, closures holding large objects, timers not cleared. Identify with Chrome DevTools Memory tab — take heap snapshots over time and look for growing retained sizes. Fix by removing listeners, clearing timers, and nullifying references." },
      { q: "What is the Temporal Dead Zone (TDZ)?", a: "The period between entering a block scope and the let/const declaration being initialized. Accessing a let or const variable in this window throws a ReferenceError. This is why let/const are 'hoisted but not initialized' — they exist in scope but aren't accessible until their declaration line executes." },
      { q: "What are WeakMap and WeakSet and when would you use them?", a: "WeakMap and WeakSet hold weak references — if there are no other references to a key/value, it can be garbage collected. Unlike Map/Set, they don't prevent GC. Use WeakMap for attaching metadata to objects without preventing their cleanup (e.g., storing DOM node data). Not iterable — you can't list their contents." },
      { q: "Explain JavaScript's module system — CommonJS vs ES Modules.", a: "CommonJS (Node.js default): synchronous require(), module.exports, evaluated at runtime. ES Modules: async import/export, statically analyzed (enables tree-shaking), deferred execution. ESM is the standard for browser and modern Node.js. Key difference: ESM imports are live bindings (they reflect current value); CJS exports are copies." },
      { q: "What is memoization and how do you implement it?", a: "Caching the result of expensive function calls keyed by their arguments, so identical calls return cached results. Implement with a closure holding a cache object: function memoize(fn) { const cache = {}; return (...args) => { const key = JSON.stringify(args); return cache[key] !== undefined ? cache[key] : (cache[key] = fn(...args)); }; }. React's useMemo is memoization for component renders." },
      { q: "What is currying and what problem does it solve?", a: "Transforming a function that takes multiple arguments into a sequence of functions each taking one argument: add(2)(3) instead of add(2, 3). Enables partial application — create specialized functions from general ones: const addTax = add(0.18); addTax(100) returns 118. Useful for creating reusable, configurable utility functions." },
      { q: "How does JavaScript handle concurrency given it's single-threaded?", a: "Through the event loop and async non-blocking I/O. I/O operations (network, file system) are handled by the OS or thread pool (via libuv in Node.js) outside the main thread. JavaScript's single thread only runs JS code — it delegates I/O and gets notified via callbacks when complete. For CPU-heavy work, use Web Workers (browser) or worker_threads (Node.js) for true parallelism." },
      { q: "What is the difference between deep copy and shallow copy in JavaScript?", a: "Shallow copy duplicates the top-level properties — nested objects/arrays still share the same reference. Deep copy recursively duplicates everything — completely independent. Shallow: spread operator ({...obj}, [...arr]), Object.assign(). Deep: structuredClone(obj) (modern, built-in), JSON.parse(JSON.stringify(obj)) (loses functions/undefined/Date), or lodash's _.cloneDeep()." },
    ],
  },

  // ── SECTION 11: COMPARISON ───────────────────────────────────────
  comparison: {
    headers: ["Feature", "JavaScript", "TypeScript", "Python"],
    rows: [
      { feature: "Type System", react: "Dynamic — types checked at runtime", vue: "Static — types checked at compile time", angular: "Dynamic — types checked at runtime" },
      { feature: "Learning Curve", react: "Low-Moderate", vue: "Moderate (superset of JS)", angular: "Low (readable syntax)" },
      { feature: "Runtime", react: "Browser + Node.js", vue: "Browser + Node.js (compiled)", angular: "Server only (CPython, PyPy)" },
      { feature: "Primary Use", react: "Web (frontend + backend)", vue: "Large-scale web projects", angular: "Data science, AI/ML, scripting, backend" },
      { feature: "Async Model", react: "Event loop (async/await)", vue: "Same as JS (compiles to JS)", angular: "async/await + asyncio" },
      { feature: "Job Market (India)", react: "Highest — every web role", vue: "Growing fast — enterprise teams", angular: "Very High — AI, data, Django, scripting" },
      { feature: "Ecosystem", react: "npm (1.5M packages)", vue: "Same npm ecosystem", angular: "PyPI (massive, ML-focused)" },
      { feature: "Error Detection", react: "At runtime — bugs found when code runs", vue: "At compile time — bugs caught before running", angular: "At runtime — similar to JS" },
    ],
  },

  // ── SECTION 12: PROS & CONS ──────────────────────────────────────
  pros: [
    "Runs everywhere — browser, server (Node.js), mobile (React Native), desktop (Electron), cloud functions",
    "Most used language in the world — largest community, most Stack Overflow answers, most npm packages",
    "No compilation step — write code, refresh browser, see result instantly",
    "Extremely flexible — functional, object-oriented, or mixed paradigm — use what fits the problem",
    "JSON native — no parsing overhead; works seamlessly with REST APIs and MongoDB",
    "Gateway to the entire web ecosystem — React, Node.js, Next.js, Vue, Electron all require JavaScript",
    "High earning potential — JavaScript developers are among the most hired and best paid in the Indian market",
  ],
  cons: [
    "Dynamic typing causes runtime bugs — a function receives a string when it expects a number, crashes at 2 AM in production",
    "Type coercion is confusing — '5' - 3 = 2, but '5' + 3 = '53'. New developers are bitten by this constantly",
    "Single-threaded — CPU-heavy tasks block the event loop, freezing the UI or degrading server performance",
    "JavaScript fatigue — too many frameworks, tools, and patterns. The ecosystem moves fast; keeping up is exhausting",
    "Inconsistent behavior across environments — browser JS, Node.js, and Deno all have different APIs and globals",
    "No built-in type safety — TypeScript solves this, but adds a compilation step and learning overhead",
    "The 'this' keyword is genuinely confusing — its behavior changes based on call site, tripping up even experienced developers",
  ],

  // ── SECTION 13: FUTURE SCOPE ─────────────────────────────────────
  futureScope: [
    "TypeScript adoption is accelerating across the entire JavaScript ecosystem. React 19, Node.js, Deno, and Bun all have first-class TypeScript support. Learning JavaScript fundamentals first and then TypeScript is the career-optimal path — TypeScript is JavaScript with types, not a separate language.",
    "JavaScript runtimes are diversifying beyond Node.js. Deno (from Node's creator) and Bun (3–4x faster) are production-ready alternatives. All three use JavaScript/TypeScript. JavaScript runtime knowledge transfers completely — only the APIs differ at the edges.",
    "WebAssembly (Wasm) is bringing near-native performance to the browser — written in Rust or C++, but called from JavaScript. JavaScript developers will increasingly use Wasm modules for performance-critical operations like image processing and video encoding, while the glue code remains JavaScript.",
    "JavaScript is the language of AI-powered web applications. Every LLM API wrapper, chat interface, streaming AI response, and function-calling integration is built in JavaScript. Vercel AI SDK, LangChain.js, and the OpenAI JavaScript SDK make JavaScript developers first-class citizens in the AI application layer.",
    "Edge computing is growing rapidly — Cloudflare Workers, Vercel Edge Functions, and Deno Deploy run JavaScript at the network edge, globally distributed. This is the next evolution of serverless computing, and JavaScript is the primary (often only) supported language.",
  ],

  // ── SECTION 14: ACTION PLAN ──────────────────────────────────────
  actionPlan: [
    { week: "Week 1–2", title: "Core Syntax and Data Structures", desc: "Variables (const/let), all data types, operators, if/else, loops, functions (all three styles), arrays (map/filter/reduce), objects (destructuring, spread). Build the calculator and color flipper projects. Read error messages — don't just google them immediately." },
    { week: "Week 3–4", title: "DOM Manipulation and Events", desc: "Select elements, modify content and styles, create and insert elements, handle click/submit/input events, event delegation. Build the to-do list with localStorage. This is JavaScript in the browser — the foundation of everything visual." },
    { week: "Week 5–6", title: "Async JavaScript and APIs", desc: "Understand the event loop conceptually, master Promises and async/await, use the Fetch API to call a real external API. Build the weather app. Handle loading and error states. This is the skill that unlocks every real-world project." },
    { week: "Week 7–8", title: "ES6+ Deep Dive and Closures", desc: "Closures, modules, optional chaining, nullish coalescing, template literals, destructuring, spread/rest mastery. Understand 'this' binding. Read one chapter of You Don't Know JS (free online) per day. Build the GitHub search project." },
    { week: "Week 9–10", title: "Choose Your Path and Go Deep", desc: "JavaScript is now your launchpad. Pick: React (frontend), Node.js/Express (backend), or both (MERN). Your JavaScript fundamentals make every framework concept click faster. Build one more vanilla JS project to solidify before frameworks — the shopping cart or drag-and-drop kanban." },
    { week: "Week 11+", title: "Framework + Job Push", desc: "Apply JavaScript deeply through your chosen framework (React/Node.js). Study JavaScript interview questions — closures, event loop, this, prototype chain, async patterns. These questions appear in every frontend and backend interview. With solid JavaScript fundamentals, you answer them from understanding, not memorization." },
  ],
};
