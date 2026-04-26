import type { TechContent } from './types';

export const pythonContent: TechContent = {
  techId: 'python',
  readTime: '30–35 min',
  difficulty: 'Beginner to Advanced',
  lastUpdated: '2026',

  // ── OPENING HOOK ─────────────────────────────────────────────────
  openingHook:
    "If there is one programming language that every Indian developer — from a first-year engineering student in Coimbatore to a senior architect at a Bangalore unicorn — should know in 2026, it is Python. Not because it is easy (though it is). Not because it is popular (though it dominates every index). But because Python is the language of the decade's most consequential technologies: artificial intelligence, machine learning, data science, backend APIs, automation, and financial engineering. The companies defining the next ten years of technology — OpenAI, Google DeepMind, NVIDIA, Anthropic — build their most critical infrastructure in Python. The Indian companies racing to embed AI into their products — Zerodha, Razorpay, Swiggy, Meesho, and CRED — hire Python engineers across data, backend, and ML roles. A fresher with solid Python fundamentals, two data projects, and one deployed FastAPI or Django backend is positioned for a ₹4–10 LPA role in 2026. A Python developer who adds machine learning or data science earns ₹12–30 LPA within three years. A Python ML engineer at a product company or research lab crosses ₹40–80 LPA. No other language offers this breadth of high-paying career paths from a single foundation. This is not a Python tutorial. This is the complete, no-filler Python roadmap — from syntax to job-ready.",

  // ── SECTION 1: INTRODUCTION ──────────────────────────────────────
  introText: [
    "Python is a high-level, interpreted, general-purpose programming language created by Guido van Rossum and first released in 1991. Its design philosophy — explicit is better than implicit, readability counts, simple is better than complex — is encoded in PEP 20, the Zen of Python. Python's syntax reads closer to English pseudocode than any other mainstream language. Where Java requires four lines to print 'Hello, World', Python needs one. That readability is not a beginner's crutch — it scales. Google's internal codebase, Netflix's recommendation engine, Instagram's backend, and NASA's scientific computing pipelines are all Python. The language that feels simple to learn is the same language running the internet's largest systems.",
    "Python's dominance in 2026 stems from one strategic decision made in the early 2010s: the scientific computing community chose Python as their language. NumPy gave Python fast array operations. SciPy added scientific algorithms. Matplotlib enabled visualization. Then pandas arrived for data manipulation, scikit-learn for machine learning, and finally TensorFlow and PyTorch for deep learning. Python became the universal language of data — every statistician, every researcher, every data scientist, every ML engineer was already writing Python. When the AI wave arrived in 2022–2026, Python was the only reasonable choice for building on top of it. Today, every major AI model, every ML framework, every data pipeline, and every analytics platform has a Python API first. Other languages are afterthoughts.",
    "The problem Python solves is versatility without fragmentation. In most technology stacks, you need different people — a data scientist who knows R, a backend engineer who knows Java, a DevOps engineer who knows Bash — all working on different parts of the same problem. Python collapses that. The same Python developer can write the data pipeline that processes raw data, the machine learning model that learns from it, the FastAPI backend that serves predictions, the automation script that monitors the production system, and the Jupyter notebook that explains the results to business stakeholders. In India's product companies and startups, where small teams need to move fast across multiple layers, Python's versatility is not a nice-to-have — it is a competitive requirement.",
  ],

  realWorldUsages: [
    "Google — Python is one of Google's three official server-side languages (alongside Java and Go); used in Google Search, YouTube, Google Maps, and Google Cloud",
    "Instagram — Instagram's backend runs entirely on Django (Python web framework); serves over 2 billion monthly active users",
    "Netflix — uses Python for data science, recommendation algorithms, security tooling, and CDN automation at global scale",
    "Dropbox — built their desktop client and significant portions of server infrastructure in Python; Guido van Rossum worked at Dropbox for several years",
    "Spotify — Python powers data pipelines, backend microservices, and the machine learning models behind playlist recommendations",
    "NASA and CERN — scientific computing, particle physics simulations, and space mission analysis run on Python with NumPy and SciPy",
    "OpenAI — ChatGPT, DALL-E, and the entire OpenAI API infrastructure are built with Python; PyTorch (Python) trains every major OpenAI model",
    "Zerodha — Kite platform backend, trading algorithm infrastructure, and quantitative analysis tools are Python-based",
    "Swiggy and Zomato — data science teams, demand forecasting, delivery route optimization, and recommendation engines use Python",
    "ISRO — orbital mechanics calculations, satellite data processing, and mission planning use Python in scientific computing pipelines",
    "Razorpay and PhonePe — fraud detection models, transaction analytics, and risk scoring systems are Python ML workloads",
  ],

  // ── SECTION 2: WHY LEARN ─────────────────────────────────────────
  whyLearn: {
    demand:
      "Search 'Python developer', 'data engineer Python', 'ML engineer', or 'backend Python' on Naukri or LinkedIn India — combined, Python-related roles outnumber any other language in India's tech job market by a factor of two. Python appears in job descriptions across five distinct and well-paying career tracks simultaneously: backend web development (Django, FastAPI, Flask), data science and analytics (pandas, NumPy, Matplotlib), machine learning and AI (scikit-learn, PyTorch, TensorFlow), data engineering (Spark, Airflow, Kafka Python clients), and automation/DevOps (scripting, Ansible, AWS Lambda). No other language covers five high-demand, high-paying career tracks from a single syntax foundation. In 2026, Python proficiency is not a specialization — it is a prerequisite for any technology role that touches data, AI, or modern backend systems.",
    jobRoles: [
      { role: "Python Backend Developer", desc: "Build REST APIs and web applications using Django, FastAPI, or Flask. Databases, authentication, deployment, and API integration are core responsibilities." },
      { role: "Data Scientist", desc: "Analyze datasets, build statistical models, generate business insights, and communicate findings. Python (pandas, NumPy, scikit-learn, Matplotlib) is the entire toolchain." },
      { role: "Machine Learning Engineer", desc: "Design, train, evaluate, and deploy ML models in production. PyTorch or TensorFlow for deep learning, scikit-learn for classical ML, MLflow for experiment tracking." },
      { role: "Data Engineer", desc: "Build and maintain data pipelines, ETL workflows, data warehouses, and streaming architectures. PySpark, Apache Airflow, dbt, and cloud data platforms — all Python." },
      { role: "AI/GenAI Engineer", desc: "The fastest-growing Python role in 2026 — build LLM-powered applications, RAG pipelines, AI agents, and prompt engineering systems using LangChain, LlamaIndex, and OpenAI/Anthropic APIs." },
      { role: "Automation/DevOps Engineer", desc: "Write infrastructure scripts, deployment automation, monitoring tools, and CI/CD pipelines in Python. Boto3 for AWS, Ansible for configuration management, Fabric for deployment." },
      { role: "Quantitative Developer (Quant)", desc: "Build algorithmic trading systems, financial models, risk analysis tools, and backtesting frameworks. Python with NumPy, pandas, and QuantLib at fintech companies and hedge funds." },
    ],
    whyCompanies: [
      { reason: "Dominates AI and ML tooling", detail: "Every major ML framework — PyTorch, TensorFlow, Keras, Hugging Face Transformers — has Python as its primary interface. Companies building AI products have no practical alternative to Python." },
      { reason: "Fastest time to working code", detail: "Python's concise syntax, rich standard library, and massive PyPI ecosystem (500,000+ packages) mean less boilerplate, faster prototyping, and shorter development cycles." },
      { reason: "Readable code reduces maintenance cost", detail: "Python's enforced indentation and expressive syntax mean code written by a developer three years ago is readable to a new hire today. This reduces the long-term maintenance cost at scale." },
      { reason: "Unified data and application layer", detail: "Python handles data processing, API serving, model training, and scripting in one language. One Python developer can own an entire data-to-production pipeline without language boundaries." },
    ],
    salaryRange: "₹4 LPA – ₹10 LPA (Freshers with portfolio) | ₹10 LPA – ₹25 LPA (Mid-Level, 2–4 years) | ₹25 LPA – ₹80 LPA (Senior/ML/Data, 4+ years)",
    careerNote:
      "Python is the widest career ladder in technology. Start with backend development (Django/FastAPI) to build fundamentals, then branch into data science (pandas, NumPy, ML), data engineering (Airflow, Spark), or GenAI engineering (LangChain, RAG, agents). Each branch compounds the value of the Python foundation you built. Senior Python engineers who combine backend depth with ML knowledge are among the highest-paid developers in India's product ecosystem — regularly crossing ₹40–60 LPA at fintech, healthtech, and AI companies. Python ML researchers at FAANG-equivalent Indian operations and global AI labs command ₹80 LPA and above.",
  },

  // ── SECTION 3: HOW IT WORKS ──────────────────────────────────────
  howItWorks: {
    intro:
      "Think of Python as a highly organized Swiss Army knife. The knife itself (the Python interpreter) processes whatever blade you insert (your .py file). You can insert a blade for web servers (Django/FastAPI), data crunching (pandas), mathematical computation (NumPy), machine learning (PyTorch), or system automation (os, subprocess). Each blade uses the same handle (Python syntax) and the same sharpening stone (PyPI package manager). The Python interpreter reads your code line by line (interpreted), checks it against Python's grammar rules, and executes each instruction. Unlike compiled languages (Java, C++), there is no build step — write the code, run the code. That immediacy is why Python is the fastest prototyping environment in software engineering.",
    vdomSteps: [
      { num: "1", title: "Python Interpreter Reads the Source File", text: "When you run python main.py, the CPython interpreter (the standard Python implementation) reads the .py source file character by character. It tokenizes the text — breaking it into keywords, operators, identifiers, and literals — then parses those tokens into an Abstract Syntax Tree (AST), a structured representation of your program's logic." },
      { num: "2", title: "Compilation to Bytecode (.pyc)", text: "Python compiles the AST to bytecode — a lower-level, platform-independent instruction set stored in .pyc files inside the __pycache__ directory. This bytecode is not machine code — it's instructions for the Python Virtual Machine (PVM). If the source file hasn't changed since the last run, Python skips this step and reuses the cached bytecode." },
      { num: "3", title: "Python Virtual Machine Executes Bytecode", text: "The Python Virtual Machine (PVM) — a stack-based interpreter — executes the bytecode instructions one by one. It manages the call stack (tracking which function called which), the heap (allocating memory for objects), and the Global Interpreter Lock (GIL) which ensures only one thread executes Python bytecode at a time." },
      { num: "4", title: "Objects, References, and Garbage Collection", text: "Everything in Python is an object — integers, strings, functions, classes, modules. Variables are names that reference objects, not containers that hold values. When you write x = 5, Python creates an integer object with value 5 and binds the name 'x' to it. Python's garbage collector uses reference counting plus a cyclic garbage collector to free memory when objects are no longer referenced." },
      { num: "5", title: "Standard Library and PyPI Packages", text: "When you import a module (import os, import json, import requests), Python searches sys.path — a list of directories including the standard library, installed packages (site-packages), and your project directory. pip install adds packages to site-packages. Virtual environments (venv) isolate per-project dependencies so different projects don't conflict with each other." },
    ],
    componentCode: `# PYTHON EXECUTION MODEL — from source to running application

# 1. EVERYTHING IS AN OBJECT
x = 42                    # int object, x is a name bound to it
name = "Alice"            # str object
items = [1, 2, 3]         # list object
func = lambda n: n * 2    # function object — yes, functions are objects too

print(type(x))            # <class 'int'>
print(id(x))              # Memory address of the int object

# 2. DYNAMIC TYPING — type is determined at runtime, not declaration
def process(data):
    if isinstance(data, list):
        return sum(data)
    elif isinstance(data, str):
        return data.upper()
    return data

process([1, 2, 3])        # Returns 6
process("hello")          # Returns "HELLO"

# 3. FIRST-CLASS FUNCTIONS — functions as arguments and return values
def apply(func, values):
    return [func(v) for v in values]

result = apply(lambda x: x ** 2, [1, 2, 3, 4, 5])  # [1, 4, 9, 16, 25]

# 4. MODULES AND IMPORTS
import os                          # Standard library module
import json                        # Built-in JSON encoding/decoding
from pathlib import Path           # Object-oriented filesystem paths
from typing import Optional, List  # Type hints for documentation + type checkers

# 5. CLASSES AND OBJECTS
class Product:
    category_count: dict[str, int] = {}  # Class-level attribute

    def __init__(self, name: str, price: float, category: str):
        self.name = name
        self.price = price
        self.category = category
        Product.category_count[category] = Product.category_count.get(category, 0) + 1

    def __repr__(self) -> str:
        return f"Product(name={self.name!r}, price={self.price})"

    def apply_discount(self, percent: float) -> 'Product':
        return Product(self.name, self.price * (1 - percent / 100), self.category)

    @property
    def price_with_gst(self) -> float:
        return self.price * 1.18

    @classmethod
    def from_dict(cls, data: dict) -> 'Product':
        return cls(data['name'], data['price'], data['category'])

p = Product("Laptop", 45000, "electronics")
print(p.price_with_gst)   # 53100.0
print(repr(p))            # Product(name='Laptop', price=45000)

# 6. VIRTUAL ENVIRONMENT — project dependency isolation
# python -m venv venv          # Create virtual environment
# source venv/bin/activate      # Activate (Linux/Mac)
# venv\\Scripts\\activate        # Activate (Windows)
# pip install fastapi uvicorn   # Install packages into this venv
# pip freeze > requirements.txt # Save dependency list`,
    renderCycle: [
      "Write .py source file → Python tokenizer and parser produce AST",
      "AST compiles to bytecode (.pyc) → cached in __pycache__",
      "Python Virtual Machine executes bytecode → objects created on heap",
      "import statement → Python searches sys.path → loads module or installed package",
      "Garbage collector tracks reference counts → frees unreachable objects automatically",
    ],
    closingNote:
      "Once you understand that Python is an interpreted language where everything is an object and names are references — not containers — the behavior of mutable default arguments, aliasing bugs, and module caching becomes predictable. These concepts underpin every Python interview question about how the language actually works. Master the execution model early, and you will never be surprised by Python again.",
  },

  // ── SECTION 4: CORE CONCEPTS ─────────────────────────────────────
  coreConcepts: [
    {
      id: "python-fundamentals",
      number: "4.1",
      title: "Python Fundamentals — Syntax, Data Structures, and Control Flow",
      icon: "🐍",
      color: "emerald",
      intro:
        "Python's fundamentals are deceptively deep. The syntax is simple to read but richly expressive. Lists, tuples, dictionaries, and sets are not just data containers — they are first-class objects with powerful built-in methods. Comprehensions, unpacking, and the ternary operator let you write concise, readable code that communicates intent clearly. These fundamentals underpin every Python interview, every data science notebook, and every Django view function.",
      code: `# DATA STRUCTURES — built-ins every Python developer must master

# LIST — ordered, mutable, allows duplicates
products = ["Laptop", "Phone", "Tablet"]
products.append("Watch")
products.insert(1, "Keyboard")
products.remove("Tablet")
last = products.pop()                   # Removes and returns last item
sliced = products[1:3]                  # Slicing — returns new list
reversed_list = products[::-1]          # Reverse slice

# LIST COMPREHENSIONS — the Python way to transform lists
prices = [45000, 12000, 8000, 3500]
expensive = [p for p in prices if p > 10000]           # Filter
with_tax = [round(p * 1.18, 2) for p in prices]       # Transform
matrix = [[i * j for j in range(1, 4)] for i in range(1, 4)]  # Nested

# DICTIONARY — key-value pairs, ordered (Python 3.7+), mutable
user = {
    "name": "Priya",
    "email": "priya@example.com",
    "age": 28,
    "skills": ["Python", "SQL", "ML"],
}
user["city"] = "Bangalore"                              # Add key
user.get("phone", "Not provided")                      # Safe get with default
keys = list(user.keys())
values = list(user.values())
items = list(user.items())                              # List of (key, value) tuples

# DICT COMPREHENSION
score_map = {name: score for name, score in [("Alice", 95), ("Bob", 87), ("Carol", 92)]}
filtered = {k: v for k, v in score_map.items() if v >= 90}

# TUPLE — ordered, immutable, hashable (can be dict key or set element)
coordinates = (19.0760, 72.8777)      # Mumbai lat/lng — immutable
lat, lng = coordinates                # Tuple unpacking
first, *rest = [1, 2, 3, 4, 5]       # Extended unpacking: first=1, rest=[2,3,4,5]

# SET — unordered, unique elements, O(1) lookup
skills_a = {"Python", "SQL", "ML"}
skills_b = {"Python", "React", "Node"}
common = skills_a & skills_b          # Intersection: {"Python"}
all_skills = skills_a | skills_b      # Union
only_a = skills_a - skills_b          # Difference: {"SQL", "ML"}

# CONTROL FLOW — clean Python patterns
status = "active"
label = "Active User" if status == "active" else "Inactive User"  # Ternary

# MATCH STATEMENT (Python 3.10+) — structural pattern matching
def handle_command(command: dict) -> str:
    match command:
        case {"action": "buy", "item": item, "qty": qty}:
            return f"Buying {qty} of {item}"
        case {"action": "sell", "item": item}:
            return f"Selling {item}"
        case {"action": "quit"}:
            return "Goodbye"
        case _:
            return "Unknown command"

# ENUMERATE AND ZIP — the correct way to iterate
fruits = ["apple", "banana", "cherry"]
for index, fruit in enumerate(fruits, start=1):
    print(f"{index}. {fruit}")

names = ["Alice", "Bob"]
scores = [95, 87]
for name, score in zip(names, scores):
    print(f"{name}: {score}")`,
      usage:
        "These fundamentals appear in every Python interview's first 15 minutes and in every real-world Python script. List comprehensions alone eliminate 30% of boilerplate loops. Dictionary methods (get, items, update) are used in every API handler and data processing function. Master these before moving to any framework or library.",
      mistake:
        "Using a mutable default argument (list or dict) in a function definition: def add_item(item, items=[]). Python creates the default list ONCE when the function is defined, not on each call. Every call that uses the default appends to the same list. Use def add_item(item, items=None) and items = items if items is not None else [] inside the function body.",
    },
    {
      id: "functions-closures",
      number: "4.2",
      title: "Functions, Decorators, and Closures",
      icon: "🎯",
      color: "blue",
      intro:
        "Python treats functions as first-class objects — they can be passed as arguments, returned from other functions, assigned to variables, and stored in data structures. This enables decorators: a powerful pattern that wraps functions to add behavior (logging, authentication, caching, rate limiting) without modifying the original function. Decorators are how Django and FastAPI define routes, authentication, and permissions — understanding them deeply separates beginner Python developers from professionals.",
      code: `# FUNCTIONS — Python's most powerful building block

# *args and **kwargs — variable arguments
def log_event(event_type: str, *args, **kwargs) -> None:
    """Accepts any number of positional and keyword arguments."""
    print(f"[{event_type}]", *args)
    for key, value in kwargs.items():
        print(f"  {key}: {value}")

log_event("PURCHASE", "item_sold", user_id=42, amount=1500, currency="INR")

# CLOSURES — functions that capture their enclosing scope
def make_multiplier(factor: int):
    """Returns a new function that multiplies by factor."""
    def multiplier(x: int) -> int:
        return x * factor          # 'factor' is captured from outer scope
    return multiplier

double = make_multiplier(2)
triple = make_multiplier(3)
print(double(5))   # 10
print(triple(5))   # 15

# DECORATORS — the pattern that powers frameworks
import functools
import time
from typing import Callable, Any

# 1. Simple decorator — add logging to any function
def log_calls(func: Callable) -> Callable:
    @functools.wraps(func)          # Preserves original function's name and docstring
    def wrapper(*args, **kwargs) -> Any:
        print(f"Calling {func.__name__}({args}, {kwargs})")
        result = func(*args, **kwargs)
        print(f"{func.__name__} returned {result}")
        return result
    return wrapper

# 2. Decorator with arguments — a decorator factory
def retry(max_attempts: int = 3, delay: float = 1.0):
    """Retries a function up to max_attempts times on exception."""
    def decorator(func: Callable) -> Callable:
        @functools.wraps(func)
        def wrapper(*args, **kwargs) -> Any:
            for attempt in range(1, max_attempts + 1):
                try:
                    return func(*args, **kwargs)
                except Exception as e:
                    if attempt == max_attempts:
                        raise
                    print(f"Attempt {attempt} failed: {e}. Retrying in {delay}s...")
                    time.sleep(delay)
        return wrapper
    return decorator

# 3. Class-based decorator — for stateful decorators
class RateLimit:
    def __init__(self, max_calls: int, period: float):
        self.max_calls = max_calls
        self.period = period
        self.calls: list[float] = []

    def __call__(self, func: Callable) -> Callable:
        @functools.wraps(func)
        def wrapper(*args, **kwargs) -> Any:
            now = time.time()
            self.calls = [t for t in self.calls if now - t < self.period]
            if len(self.calls) >= self.max_calls:
                raise RuntimeError(f"Rate limit: max {self.max_calls} calls per {self.period}s")
            self.calls.append(now)
            return func(*args, **kwargs)
        return wrapper

# USING DECORATORS
@log_calls
@retry(max_attempts=3, delay=0.5)
def fetch_user_data(user_id: int) -> dict:
    """Fetch user from API — logged and retried on failure."""
    # ... actual API call ...
    return {"id": user_id, "name": "Priya"}

@RateLimit(max_calls=5, period=60.0)
def send_otp(phone: str) -> bool:
    """Send OTP — rate limited to 5 calls per minute."""
    print(f"OTP sent to {phone}")
    return True

# GENERATOR FUNCTIONS — lazy evaluation for large datasets
def fibonacci_sequence(limit: int):
    """Yields Fibonacci numbers up to limit — no large list created."""
    a, b = 0, 1
    while a < limit:
        yield a
        a, b = b, a + b

for num in fibonacci_sequence(100):
    print(num, end=" ")   # 0 1 1 2 3 5 8 13 21 34 55 89

# Generator expression — memory-efficient version of list comprehension
total_sales = sum(order['amount'] for order in large_orders_list if order['status'] == 'completed')`,
      usage:
        "Decorators are how you add cross-cutting concerns (logging, caching, authentication, rate limiting) to functions without modifying them. In Django, @login_required, @permission_required, and @cache_page are all decorators. In FastAPI, @app.get('/endpoint') is a decorator. In pytest, @pytest.mark.parametrize is a decorator. Understanding how decorators work makes every Python framework immediately comprehensible.",
      mistake:
        "Forgetting @functools.wraps(func) inside a decorator's wrapper function. Without it, the decorated function loses its original __name__ and __doc__ attributes — debugging becomes confusing because all decorated functions appear as 'wrapper' in stack traces and help() output. Always include @functools.wraps(func) as the first line of every wrapper function.",
    },
    {
      id: "oop-python",
      number: "4.3",
      title: "Object-Oriented Programming in Python",
      icon: "🏗️",
      color: "purple",
      intro:
        "Python supports full object-oriented programming with classes, inheritance, polymorphism, and encapsulation — but applies OOP pragmatically rather than dogmatically. Python classes use special dunder methods (__init__, __repr__, __str__, __eq__, __hash__, __len__, __getitem__) to integrate custom objects seamlessly with Python's built-in operations. Dataclasses and Pydantic (the foundation of FastAPI) reduce class boilerplate dramatically. Understanding Python OOP is required for every Django model, every FastAPI schema, and every ML pipeline class.",
      code: `from dataclasses import dataclass, field
from abc import ABC, abstractmethod
from typing import Optional
import pydantic  # pip install pydantic

# 1. DATACLASS — auto-generates __init__, __repr__, __eq__
@dataclass
class Address:
    street: str
    city: str
    state: str
    pincode: str

    def __post_init__(self):
        # Validation after auto-generated __init__
        if len(self.pincode) != 6 or not self.pincode.isdigit():
            raise ValueError(f"Invalid pincode: {self.pincode}")

@dataclass
class User:
    name: str
    email: str
    age: int
    addresses: list[Address] = field(default_factory=list)  # Mutable default — safe
    is_active: bool = True

    def add_address(self, address: Address) -> None:
        self.addresses.append(address)

    def __repr__(self) -> str:
        return f"User(name={self.name!r}, email={self.email!r})"

# 2. INHERITANCE AND POLYMORPHISM
class Animal(ABC):
    def __init__(self, name: str, species: str):
        self.name = name
        self.species = species

    @abstractmethod
    def speak(self) -> str:
        """Every animal must implement speak."""
        ...

    def describe(self) -> str:
        return f"{self.name} is a {self.species} that says: {self.speak()}"

class Dog(Animal):
    def speak(self) -> str:
        return "Woof!"

class Cat(Animal):
    def speak(self) -> str:
        return "Meow!"

animals: list[Animal] = [Dog("Bruno", "dog"), Cat("Whiskers", "cat")]
for animal in animals:
    print(animal.describe())  # Polymorphism — each calls its own speak()

# 3. PYDANTIC MODELS — FastAPI uses these for request/response validation
from pydantic import BaseModel, EmailStr, Field, validator

class ProductCreate(BaseModel):
    name: str = Field(..., min_length=2, max_length=100, description="Product name")
    price: float = Field(..., gt=0, description="Price must be positive")
    category: str = Field(..., pattern="^(electronics|clothing|food|books)$")
    stock: int = Field(default=0, ge=0)
    seller_email: EmailStr

    @validator('name')
    def name_must_not_be_empty(cls, v: str) -> str:
        return v.strip()

    class Config:
        json_schema_extra = {
            "example": {
                "name": "MacBook Pro",
                "price": 150000.00,
                "category": "electronics",
                "stock": 10,
                "seller_email": "seller@shop.com"
            }
        }

class ProductResponse(ProductCreate):
    id: int
    created_at: str

    class Config:
        from_attributes = True  # Allows ORM model → Pydantic model conversion

# 4. DUNDER METHODS — make custom classes behave like built-ins
class ShoppingCart:
    def __init__(self):
        self._items: dict[str, int] = {}  # product_id: quantity

    def __len__(self) -> int:
        return sum(self._items.values())  # Total item count

    def __contains__(self, product_id: str) -> bool:
        return product_id in self._items  # 'in' operator

    def __iter__(self):
        return iter(self._items.items())  # for item in cart

    def __repr__(self) -> str:
        return f"ShoppingCart({len(self)} items)"

    def add(self, product_id: str, qty: int = 1) -> None:
        self._items[product_id] = self._items.get(product_id, 0) + qty

cart = ShoppingCart()
cart.add("laptop_001", 1)
print(len(cart))              # 1
print("laptop_001" in cart)   # True
for product_id, qty in cart:
    print(f"{product_id}: {qty}")`,
      usage:
        "Python OOP powers every Django Model, every FastAPI Pydantic schema, every scikit-learn Estimator, and every PyTorch nn.Module. Understanding dataclasses eliminates boilerplate. Understanding Pydantic is required for any FastAPI project. Understanding ABC and abstract methods is needed for writing clean, testable backend service layers.",
      mistake:
        "Using class-level mutable attributes as instance defaults: class Cart: items = []. All Cart instances share the same items list — adding to one Cart adds to ALL Cart instances. Always initialize mutable attributes in __init__ with self.items = [] or use dataclasses with field(default_factory=list).",
    },
    {
      id: "fastapi-backend",
      number: "4.4",
      title: "FastAPI — Modern Python Backend Development",
      icon: "⚡",
      color: "yellow",
      intro:
        "FastAPI is Python's fastest-growing web framework in 2026 — used by Uber, Netflix, Microsoft, and every serious Python API team. It combines Python type hints, Pydantic validation, and async/await into a framework that auto-generates OpenAPI documentation, validates request bodies, serializes responses, and runs with near-Node.js performance. For new Python backends, FastAPI is the correct choice over Flask (outdated, no type hints) and Django REST Framework (heavy, overkill for APIs).",
      code: `# FastAPI complete backend — authentication, CRUD, async database
from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from sqlalchemy.ext.asyncio import AsyncSession, create_async_engine, async_sessionmaker
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column
from pydantic import BaseModel, EmailStr
from datetime import datetime, timedelta
from typing import Optional, Annotated
import jwt, bcrypt, uvicorn
from contextlib import asynccontextmanager

# DATABASE SETUP — async SQLAlchemy
DATABASE_URL = "postgresql+asyncpg://user:password@localhost/dbname"
engine = create_async_engine(DATABASE_URL, echo=False)
AsyncSessionLocal = async_sessionmaker(engine, expire_on_commit=False)

class Base(DeclarativeBase):
    pass

class UserModel(Base):
    __tablename__ = "users"
    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    name: Mapped[str] = mapped_column(nullable=False)
    email: Mapped[str] = mapped_column(unique=True, index=True)
    hashed_password: Mapped[str] = mapped_column(nullable=False)
    role: Mapped[str] = mapped_column(default="user")
    created_at: Mapped[datetime] = mapped_column(default=datetime.utcnow)

# PYDANTIC SCHEMAS
class UserCreate(BaseModel):
    name: str
    email: EmailStr
    password: str

class UserResponse(BaseModel):
    id: int
    name: str
    email: EmailStr
    role: str
    model_config = {"from_attributes": True}

class TokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"

# DEPENDENCY INJECTION
async def get_db() -> AsyncSession:
    async with AsyncSessionLocal() as session:
        yield session

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/api/auth/login")

async def get_current_user(
    token: Annotated[str, Depends(oauth2_scheme)],
    db: Annotated[AsyncSession, Depends(get_db)]
) -> UserModel:
    try:
        payload = jwt.decode(token, settings.JWT_SECRET, algorithms=["HS256"])
        user_id: int = payload.get("sub")
    except jwt.InvalidTokenError:
        raise HTTPException(status_code=401, detail="Invalid token")

    from sqlalchemy import select
    result = await db.execute(select(UserModel).where(UserModel.id == user_id))
    user = result.scalar_one_or_none()
    if not user:
        raise HTTPException(status_code=401, detail="User not found")
    return user

# APP AND ROUTERS
@asynccontextmanager
async def lifespan(app: FastAPI):
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)
    yield

app = FastAPI(title="My API", version="1.0.0", lifespan=lifespan)
app.add_middleware(CORSMiddleware, allow_origins=["http://localhost:3000"],
                   allow_methods=["*"], allow_headers=["*"], allow_credentials=True)

from fastapi import APIRouter
from sqlalchemy import select

auth_router = APIRouter(prefix="/api/auth", tags=["Auth"])

@auth_router.post("/register", response_model=UserResponse, status_code=201)
async def register(payload: UserCreate, db: Annotated[AsyncSession, Depends(get_db)]):
    result = await db.execute(select(UserModel).where(UserModel.email == payload.email))
    if result.scalar_one_or_none():
        raise HTTPException(400, detail="Email already registered")
    hashed = bcrypt.hashpw(payload.password.encode(), bcrypt.gensalt()).decode()
    user = UserModel(name=payload.name, email=payload.email, hashed_password=hashed)
    db.add(user)
    await db.commit()
    await db.refresh(user)
    return user

@auth_router.post("/login", response_model=TokenResponse)
async def login(
    form: Annotated[OAuth2PasswordRequestForm, Depends()],
    db: Annotated[AsyncSession, Depends(get_db)]
):
    result = await db.execute(select(UserModel).where(UserModel.email == form.username))
    user = result.scalar_one_or_none()
    if not user or not bcrypt.checkpw(form.password.encode(), user.hashed_password.encode()):
        raise HTTPException(401, detail="Invalid credentials")
    token = jwt.encode(
        {"sub": user.id, "exp": datetime.utcnow() + timedelta(days=7)},
        settings.JWT_SECRET, algorithm="HS256"
    )
    return {"access_token": token}

@auth_router.get("/me", response_model=UserResponse)
async def get_me(current_user: Annotated[UserModel, Depends(get_current_user)]):
    return current_user

app.include_router(auth_router)

# Run: uvicorn main:app --reload
# Docs: http://localhost:8000/docs (auto-generated Swagger UI)`,
      usage:
        "FastAPI is now the first choice for new Python REST APIs — at startups, product companies, and ML serving layers. Its auto-generated Swagger docs at /docs eliminate the need to write API documentation separately. Pydantic validation means no manual request parsing. Async database queries handle high concurrency without blocking. Every Python backend developer in 2026 should know FastAPI.",
      mistake:
        "Using synchronous database calls (SQLAlchemy blocking sessions) in an async FastAPI route. A single blocking db.query() call blocks the entire event loop — no other requests are served while it runs. Use async SQLAlchemy (asyncpg + async_sessionmaker) for all database operations, or run sync database calls in a thread pool with run_in_executor().",
    },
    {
      id: "data-science-python",
      number: "4.5",
      title: "Data Science — pandas, NumPy, and Matplotlib",
      icon: "📊",
      color: "orange",
      intro:
        "The pandas + NumPy + Matplotlib trinity is the foundation of data science in Python. NumPy provides fast array arithmetic (written in C under the hood). pandas provides labeled data structures (DataFrame and Series) with SQL-like manipulation capabilities. Matplotlib (and Seaborn on top of it) provides publication-quality visualizations. These three libraries together are how every Indian data analyst, data scientist, and ML engineer explores, cleans, and understands data before building models.",
      code: `import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# ── NUMPY — fast numerical arrays ────────────────────────────────────
arr = np.array([1, 2, 3, 4, 5], dtype=np.float64)
matrix = np.zeros((3, 4))                   # 3x4 matrix of zeros
identity = np.eye(3)                         # 3x3 identity matrix
random_arr = np.random.normal(loc=0, scale=1, size=(1000,))  # Normal distribution

# Array operations — vectorized (no Python loops needed)
prices = np.array([45000, 12000, 8000, 3500, 25000])
with_gst = prices * 1.18
discounted = np.where(prices > 10000, prices * 0.9, prices)  # Conditional vectorized
print(f"Mean: {np.mean(prices):.2f}, Std: {np.std(prices):.2f}, Max: {np.max(prices)}")

# Matrix operations
A = np.array([[1, 2], [3, 4]])
B = np.array([[5, 6], [7, 8]])
product = A @ B                              # Matrix multiplication
eigenvalues, eigenvectors = np.linalg.eig(A)

# ── PANDAS — labeled data manipulation ───────────────────────────────
# Load data
df = pd.read_csv("sales_data.csv", parse_dates=["date"])
# or: df = pd.read_excel(), pd.read_json(), pd.read_sql()

# Exploration
print(df.shape)           # (rows, cols)
print(df.dtypes)          # Column types
print(df.describe())      # Statistical summary
print(df.isnull().sum())  # Missing value counts per column

# Selection
product_names = df["product_name"]             # Single column (Series)
subset = df[["product_name", "price", "qty"]]  # Multiple columns (DataFrame)
filtered = df[df["price"] > 10000]             # Boolean filter
loc_result = df.loc[df["category"] == "electronics", ["name", "price"]]
iloc_result = df.iloc[0:10, 2:5]               # Position-based

# Data cleaning — the most time-consuming real-world task
df["price"] = pd.to_numeric(df["price"], errors="coerce")  # Convert, set invalid to NaN
df.dropna(subset=["price", "product_name"], inplace=True)  # Drop rows where these are NaN
df["category"] = df["category"].str.lower().str.strip()    # Normalize strings
df["date"] = pd.to_datetime(df["date"])
df.drop_duplicates(subset=["order_id"], keep="first", inplace=True)

# Feature engineering
df["month"] = df["date"].dt.month
df["day_of_week"] = df["date"].dt.day_name()
df["revenue"] = df["price"] * df["qty"]
df["price_tier"] = pd.cut(df["price"], bins=[0, 5000, 20000, np.inf],
                           labels=["budget", "mid", "premium"])

# GroupBy — SQL GROUP BY equivalent
monthly_revenue = (
    df.groupby(df["date"].dt.to_period("M"))
    .agg(
        total_revenue=("revenue", "sum"),
        avg_order=("revenue", "mean"),
        order_count=("order_id", "count"),
    )
    .reset_index()
)

# Merge — SQL JOIN equivalent
customers = pd.read_csv("customers.csv")
merged = df.merge(customers, on="customer_id", how="left")

# Pivot table
pivot = df.pivot_table(
    values="revenue",
    index="category",
    columns="month",
    aggfunc="sum",
    fill_value=0
)

# ── MATPLOTLIB + SEABORN — visualization ─────────────────────────────
fig, axes = plt.subplots(2, 2, figsize=(14, 10))

# Line chart — revenue over time
monthly_revenue.plot(x="date", y="total_revenue", ax=axes[0, 0],
                     title="Monthly Revenue", color="#2563eb", linewidth=2)
axes[0, 0].set_xlabel("Month")
axes[0, 0].yaxis.set_major_formatter(plt.FuncFormatter(lambda x, _: f"₹{x/1e6:.1f}M"))

# Bar chart — revenue by category
category_rev = df.groupby("category")["revenue"].sum().sort_values(ascending=False)
sns.barplot(x=category_rev.values, y=category_rev.index, ax=axes[0, 1], palette="viridis")
axes[0, 1].set_title("Revenue by Category")

# Histogram — price distribution
sns.histplot(df["price"], bins=30, kde=True, ax=axes[1, 0], color="#7c3aed")
axes[1, 0].set_title("Price Distribution")

# Heatmap — monthly category heatmap
sns.heatmap(pivot, annot=True, fmt=".0f", cmap="YlOrRd", ax=axes[1, 1])
axes[1, 1].set_title("Revenue Heatmap (Category × Month)")

plt.tight_layout()
plt.savefig("sales_dashboard.png", dpi=150, bbox_inches="tight")
plt.show()`,
      usage:
        "pandas is the single most important library for any data-touching Python role. Even pure ML engineers spend 70% of their time cleaning and preparing data with pandas. Every data science interview includes a pandas manipulation problem. Every business analyst using Python uses pandas daily. Learn it thoroughly before moving to scikit-learn or PyTorch.",
      mistake:
        "Using iterrows() to loop through a DataFrame: for index, row in df.iterrows(). This is a Python loop over a pandas structure — it's 100–1000x slower than vectorized pandas operations. Always use vectorized operations (df['col'].apply(), df['col'] * 2, np.where()), groupby, or merge instead of any Python loop over DataFrame rows.",
    },
    {
      id: "machine-learning",
      number: "4.6",
      title: "Machine Learning with scikit-learn and PyTorch",
      icon: "🤖",
      color: "red",
      intro:
        "Python's machine learning ecosystem is the most complete in any programming language. scikit-learn covers classical ML — linear regression, random forests, SVMs, clustering, dimensionality reduction, pipelines, and model evaluation — with a consistent fit/predict API. PyTorch is the dominant deep learning framework for research and production in 2026. Together, they cover 95% of real-world ML requirements from a business analyst's churn model to a deep learning computer vision system.",
      code: `# MACHINE LEARNING WORKFLOW — classification with scikit-learn
import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split, cross_val_score, GridSearchCV
from sklearn.preprocessing import StandardScaler, LabelEncoder, OneHotEncoder
from sklearn.pipeline import Pipeline
from sklearn.compose import ColumnTransformer
from sklearn.ensemble import RandomForestClassifier, GradientBoostingClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import (classification_report, confusion_matrix,
                              roc_auc_score, roc_curve)
from sklearn.impute import SimpleImputer
import joblib

# 1. LOAD AND SPLIT DATA
df = pd.read_csv("customer_churn.csv")
X = df.drop("churned", axis=1)
y = df["churned"]
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y  # stratify preserves class balance
)

# 2. PREPROCESSING PIPELINE — the correct way to handle mixed feature types
numeric_features = ["age", "tenure_months", "monthly_charges", "total_charges"]
categorical_features = ["contract_type", "payment_method", "internet_service"]

numeric_transformer = Pipeline(steps=[
    ("imputer", SimpleImputer(strategy="median")),     # Fill NaN with median
    ("scaler", StandardScaler()),                       # Normalize to mean=0, std=1
])

categorical_transformer = Pipeline(steps=[
    ("imputer", SimpleImputer(strategy="most_frequent")),
    ("onehot", OneHotEncoder(handle_unknown="ignore", sparse_output=False)),
])

preprocessor = ColumnTransformer(transformers=[
    ("num", numeric_transformer, numeric_features),
    ("cat", categorical_transformer, categorical_features),
])

# 3. FULL PIPELINE — preprocessing + model
model_pipeline = Pipeline(steps=[
    ("preprocessor", preprocessor),
    ("classifier", RandomForestClassifier(n_estimators=200, class_weight="balanced",
                                           random_state=42, n_jobs=-1)),
])

# 4. HYPERPARAMETER TUNING with cross-validation
param_grid = {
    "classifier__n_estimators": [100, 200, 300],
    "classifier__max_depth": [5, 10, None],
    "classifier__min_samples_split": [2, 5],
}
grid_search = GridSearchCV(model_pipeline, param_grid, cv=5, scoring="roc_auc",
                            n_jobs=-1, verbose=1)
grid_search.fit(X_train, y_train)
best_model = grid_search.best_estimator_

# 5. EVALUATION
y_pred = best_model.predict(X_test)
y_proba = best_model.predict_proba(X_test)[:, 1]
print(classification_report(y_test, y_pred, target_names=["Retained", "Churned"]))
print(f"ROC-AUC Score: {roc_auc_score(y_test, y_proba):.4f}")
print(f"Best params: {grid_search.best_params_}")

# 6. SAVE MODEL
joblib.dump(best_model, "churn_model.pkl")
loaded_model = joblib.load("churn_model.pkl")


# ── DEEP LEARNING WITH PyTorch ────────────────────────────────────────
import torch
import torch.nn as nn
from torch.utils.data import Dataset, DataLoader

# Custom Dataset
class ProductDataset(Dataset):
    def __init__(self, features: np.ndarray, labels: np.ndarray):
        self.features = torch.FloatTensor(features)
        self.labels = torch.LongTensor(labels)

    def __len__(self) -> int:
        return len(self.features)

    def __getitem__(self, idx: int) -> tuple:
        return self.features[idx], self.labels[idx]

# Neural Network
class ProductClassifier(nn.Module):
    def __init__(self, input_dim: int, num_classes: int):
        super().__init__()
        self.network = nn.Sequential(
            nn.Linear(input_dim, 256),
            nn.BatchNorm1d(256),
            nn.ReLU(),
            nn.Dropout(0.3),
            nn.Linear(256, 128),
            nn.BatchNorm1d(128),
            nn.ReLU(),
            nn.Dropout(0.2),
            nn.Linear(128, num_classes),
        )

    def forward(self, x: torch.Tensor) -> torch.Tensor:
        return self.network(x)

# Training loop
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
model = ProductClassifier(input_dim=20, num_classes=5).to(device)
optimizer = torch.optim.AdamW(model.parameters(), lr=1e-3, weight_decay=1e-4)
scheduler = torch.optim.lr_scheduler.ReduceLROnPlateau(optimizer, patience=3)
criterion = nn.CrossEntropyLoss()

for epoch in range(50):
    model.train()
    for features, labels in train_loader:
        features, labels = features.to(device), labels.to(device)
        optimizer.zero_grad()
        outputs = model(features)
        loss = criterion(outputs, labels)
        loss.backward()
        nn.utils.clip_grad_norm_(model.parameters(), max_norm=1.0)
        optimizer.step()

    # Validation
    model.eval()
    with torch.no_grad():
        val_correct = sum(
            (model(f.to(device)).argmax(1) == l.to(device)).sum().item()
            for f, l in val_loader
        )
    val_acc = val_correct / len(val_dataset)
    scheduler.step(1 - val_acc)

torch.save(model.state_dict(), "product_classifier.pt")`,
      usage:
        "scikit-learn's Pipeline + ColumnTransformer pattern is the most important ML workflow to internalize — it prevents data leakage during cross-validation and packages preprocessing with the model for deployment. PyTorch's Dataset + DataLoader + training loop pattern is the foundation for every neural network you'll ever train. These two patterns cover 90% of ML engineering work.",
      mistake:
        "Fitting the scaler on the entire dataset before splitting into train/test: scaler.fit(X); X_train, X_test = train_test_split(X_scaled). This is data leakage — the scaler has seen test data statistics during training. Always split first, then fit the scaler only on X_train, transform both X_train and X_test with it. scikit-learn Pipeline handles this automatically when used correctly.",
    },
    {
      id: "genai-python",
      number: "4.7",
      title: "GenAI Engineering — LLMs, RAG, and AI Agents with Python",
      icon: "🧠",
      color: "teal",
      intro:
        "The fastest-growing Python specialty in 2026 is GenAI engineering — building production applications on top of large language models (LLMs). Python is the exclusive language for this work: LangChain, LlamaIndex, OpenAI's SDK, Anthropic's SDK, Hugging Face Transformers, and ChromaDB all have Python as their primary interface. RAG (Retrieval-Augmented Generation) pipelines, AI agents, and multi-modal applications are now expected skills at AI-forward Indian companies.",
      code: `# GenAI ENGINEERING — RAG pipeline + AI agent with Python

# pip install openai anthropic langchain langchain-community
# pip install chromadb sentence-transformers tiktoken

# ── 1. DIRECT LLM API USAGE ──────────────────────────────────────────
from anthropic import Anthropic
from openai import OpenAI

# Anthropic Claude
client = Anthropic()

def ask_claude(question: str, system_prompt: str = "") -> str:
    message = client.messages.create(
        model="claude-sonnet-4-20250514",
        max_tokens=1024,
        system=system_prompt or "You are a helpful assistant.",
        messages=[{"role": "user", "content": question}],
    )
    return message.content[0].text

# Streaming response
with client.messages.stream(
    model="claude-sonnet-4-20250514",
    max_tokens=1024,
    messages=[{"role": "user", "content": "Explain quantum computing in 3 sentences"}],
) as stream:
    for text in stream.text_stream:
        print(text, end="", flush=True)

# ── 2. RAG PIPELINE — Retrieval-Augmented Generation ─────────────────
from langchain_community.document_loaders import PyPDFLoader, DirectoryLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_community.embeddings import HuggingFaceEmbeddings
from langchain_community.vectorstores import Chroma
from langchain.chains import RetrievalQA
from langchain_anthropic import ChatAnthropic

class RAGPipeline:
    def __init__(self, docs_path: str, persist_dir: str = "./chroma_db"):
        self.persist_dir = persist_dir
        self.embeddings = HuggingFaceEmbeddings(
            model_name="sentence-transformers/all-MiniLM-L6-v2"
        )
        self.llm = ChatAnthropic(model="claude-sonnet-4-20250514", temperature=0)

    def ingest_documents(self, docs_path: str) -> int:
        loader = DirectoryLoader(docs_path, glob="**/*.pdf", loader_cls=PyPDFLoader)
        documents = loader.load()

        splitter = RecursiveCharacterTextSplitter(
            chunk_size=1000,
            chunk_overlap=200,
            separators=["\n\n", "\n", ".", "!", "?", " "],
        )
        chunks = splitter.split_documents(documents)

        self.vectorstore = Chroma.from_documents(
            documents=chunks,
            embedding=self.embeddings,
            persist_directory=self.persist_dir,
        )
        return len(chunks)

    def load_existing(self) -> None:
        self.vectorstore = Chroma(
            persist_directory=self.persist_dir,
            embedding_function=self.embeddings
        )

    def query(self, question: str, k: int = 4) -> dict:
        retriever = self.vectorstore.as_retriever(
            search_type="mmr",       # Maximum Marginal Relevance — diverse results
            search_kwargs={"k": k, "fetch_k": 20}
        )

        qa_chain = RetrievalQA.from_chain_type(
            llm=self.llm,
            chain_type="stuff",
            retriever=retriever,
            return_source_documents=True,
        )

        result = qa_chain.invoke({"query": question})
        return {
            "answer": result["result"],
            "sources": [
                {"page": doc.metadata.get("page", 0), "content": doc.page_content[:200]}
                for doc in result["source_documents"]
            ],
        }

# ── 3. AI AGENT WITH TOOLS ────────────────────────────────────────────
from anthropic import Anthropic
import json

def get_weather(city: str) -> dict:
    # In real app: call weather API
    return {"city": city, "temp": 28, "condition": "Partly cloudy", "humidity": 72}

def search_products(query: str, max_price: float = None) -> list[dict]:
    # In real app: query database
    return [{"name": "Laptop", "price": 45000, "rating": 4.5}]

tools = [
    {
        "name": "get_weather",
        "description": "Get current weather for a city",
        "input_schema": {
            "type": "object",
            "properties": {"city": {"type": "string", "description": "City name"}},
            "required": ["city"],
        },
    },
    {
        "name": "search_products",
        "description": "Search for products by query and optional max price",
        "input_schema": {
            "type": "object",
            "properties": {
                "query": {"type": "string"},
                "max_price": {"type": "number", "description": "Maximum price in INR"},
            },
            "required": ["query"],
        },
    },
]

TOOL_MAP = {"get_weather": get_weather, "search_products": search_products}

def run_agent(user_message: str) -> str:
    client = Anthropic()
    messages = [{"role": "user", "content": user_message}]

    while True:
        response = client.messages.create(
            model="claude-sonnet-4-20250514",
            max_tokens=4096,
            tools=tools,
            messages=messages,
        )

        messages.append({"role": "assistant", "content": response.content})

        if response.stop_reason == "end_turn":
            # Extract text response
            return next(b.text for b in response.content if hasattr(b, "text"))

        # Process tool calls
        tool_results = []
        for block in response.content:
            if block.type == "tool_use":
                tool_func = TOOL_MAP.get(block.name)
                result = tool_func(**block.input) if tool_func else {"error": "Unknown tool"}
                tool_results.append({
                    "type": "tool_result",
                    "tool_use_id": block.id,
                    "content": json.dumps(result),
                })

        messages.append({"role": "user", "content": tool_results})

# result = run_agent("What's the weather in Mumbai and show me laptops under ₹50,000?")`,
      usage:
        "RAG pipelines are the architecture behind every enterprise AI chatbot that answers questions from company documents — HR portals, compliance systems, customer support bots. AI agents with tool use are the architecture behind every AI assistant that can take real-world actions (search, book, calculate, query). These two patterns are the core of GenAI engineering in 2026.",
      mistake:
        "Chunking documents too large (chunk_size=5000) or too small (chunk_size=100). Large chunks overwhelm the LLM's context window and introduce noise. Small chunks lose context — a sentence without surrounding paragraphs is meaningless. Start with chunk_size=800–1200 with chunk_overlap=150–200 and tune based on retrieval quality. Always evaluate RAG quality with test questions before deploying.",
    },
    {
      id: "async-python",
      number: "4.8",
      title: "Async Python — asyncio, aiohttp, and Concurrency",
      icon: "🔄",
      color: "blue",
      intro:
        "Python's asyncio library enables concurrent I/O-bound operations without threads — the same event loop model that made Node.js famous. In 2026, async Python is not advanced knowledge — it is a prerequisite for FastAPI backends, async database drivers (asyncpg, Motor), concurrent web scraping, and real-time WebSocket applications. Understanding the event loop, async/await syntax, and when to use asyncio vs threading vs multiprocessing is expected knowledge at mid-level Python interviews.",
      code: `import asyncio
import aiohttp
import time
from typing import Any

# 1. BASIC ASYNC/AWAIT — non-blocking I/O
async def fetch_url(session: aiohttp.ClientSession, url: str) -> dict:
    """Fetch a URL asynchronously — does not block the event loop while waiting."""
    async with session.get(url) as response:
        response.raise_for_status()
        return await response.json()

async def fetch_multiple_apis() -> list[dict]:
    """Fetch 10 APIs concurrently — total time ≈ slowest request, not sum of all."""
    urls = [
        "https://api.github.com/users/octocat",
        "https://jsonplaceholder.typicode.com/todos/1",
        "https://httpbin.org/json",
    ]
    async with aiohttp.ClientSession() as session:
        tasks = [fetch_url(session, url) for url in urls]
        results = await asyncio.gather(*tasks, return_exceptions=True)
        return [r for r in results if not isinstance(r, Exception)]

# Compare: sequential takes 3x longer than concurrent
async def sequential_fetch():
    start = time.perf_counter()
    async with aiohttp.ClientSession() as session:
        for url in urls:
            await fetch_url(session, url)     # Awaits each one before the next
    print(f"Sequential: {time.perf_counter() - start:.2f}s")  # ~3.0s

async def concurrent_fetch():
    start = time.perf_counter()
    await fetch_multiple_apis()               # All three fire at once
    print(f"Concurrent: {time.perf_counter() - start:.2f}s")  # ~1.0s

# 2. ASYNC CONTEXT MANAGERS AND GENERATORS
async def read_large_file_async(path: str):
    """Async file reading — useful for very large files."""
    import aiofiles
    async with aiofiles.open(path, mode='r') as f:
        async for line in f:                   # Yields lines without blocking
            yield line.strip()

async def process_file(path: str):
    async for line in read_large_file_async(path):
        await process_line(line)

# 3. SEMAPHORE — limit concurrent operations (respect API rate limits)
async def fetch_with_semaphore(semaphore: asyncio.Semaphore,
                                session: aiohttp.ClientSession,
                                url: str) -> dict:
    async with semaphore:                      # Max 5 concurrent requests
        return await fetch_url(session, url)

async def fetch_100_urls(urls: list[str]) -> list[dict]:
    semaphore = asyncio.Semaphore(5)           # Max 5 simultaneous connections
    async with aiohttp.ClientSession() as session:
        tasks = [fetch_with_semaphore(semaphore, session, url) for url in urls]
        return await asyncio.gather(*tasks, return_exceptions=True)

# 4. ASYNCIO vs THREADING vs MULTIPROCESSING — when to use which
"""
asyncio     → I/O-bound tasks: HTTP calls, database queries, file reading
              Single thread, event loop switches between coroutines on await
              Best for: FastAPI, web scraping, async database operations

threading   → I/O-bound tasks where asyncio integration is difficult
              True OS threads but limited by Python's GIL for CPU work
              Best for: blocking I/O libraries that have no async alternative

multiprocessing → CPU-bound tasks: data processing, ML inference, image encoding
                  True parallelism — bypasses GIL by using separate processes
                  Best for: NumPy heavy computation, video processing, model inference
"""

# CPU-bound: use multiprocessing
from concurrent.futures import ProcessPoolExecutor

def cpu_intensive_task(data: list[float]) -> float:
    return sum(x ** 2 for x in data)  # Simulate heavy computation

async def parallel_cpu_work(chunks: list[list[float]]) -> list[float]:
    loop = asyncio.get_running_loop()
    with ProcessPoolExecutor(max_workers=4) as executor:
        tasks = [
            loop.run_in_executor(executor, cpu_intensive_task, chunk)
            for chunk in chunks
        ]
        return await asyncio.gather(*tasks)

# 5. FASTAPI WEBSOCKET — real-time async communication
from fastapi import FastAPI, WebSocket, WebSocketDisconnect

app = FastAPI()
connected_clients: list[WebSocket] = []

@app.websocket("/ws/{client_id}")
async def websocket_endpoint(websocket: WebSocket, client_id: str):
    await websocket.accept()
    connected_clients.append(websocket)
    try:
        while True:
            data = await websocket.receive_text()
            # Broadcast to all connected clients
            for client in connected_clients:
                await client.send_text(f"[{client_id}]: {data}")
    except WebSocketDisconnect:
        connected_clients.remove(websocket)`,
      usage:
        "Async Python is required for any Python backend that serves concurrent users. FastAPI is fully async. Async database drivers (asyncpg for PostgreSQL, Motor for MongoDB) are standard at scale. Web scraping with aiohttp is 10–50x faster than synchronous requests for large link sets. Learn async Python before building any FastAPI application that hits a real database.",
      mistake:
        "Running blocking I/O inside an async function without running it in an executor: async def get_data(): return requests.get(url).json(). Synchronous requests.get() blocks the entire event loop — no other requests are processed while it runs. Use aiohttp for async HTTP, asyncpg for async PostgreSQL, or loop.run_in_executor() to offload unavoidably blocking calls to a thread pool.",
    },
    {
      id: "python-project-structure",
      number: "4.9",
      title: "Python Project Structure — Production-Ready Organization",
      icon: "📁",
      color: "purple",
      intro:
        "How you organize a Python project signals your engineering maturity. A well-structured Python project — whether a FastAPI backend, a ML pipeline, or a data science repository — follows consistent conventions: virtual environments, pyproject.toml or requirements.txt, a src/ layout, separate config from code, and test files mirroring source structure. Interviewers and senior engineers evaluate project structure as a proxy for collaboration readiness.",
      code: `# ── FASTAPI BACKEND PROJECT ──────────────────────────────────────────
my-api/
├── src/
│   └── myapp/
│       ├── __init__.py
│       ├── main.py                  # FastAPI app instance + middleware + router includes
│       ├── config.py                # Settings via pydantic-settings: BaseSettings
│       ├── database.py              # SQLAlchemy engine, session factory
│       ├── models/                  # SQLAlchemy ORM models
│       │   ├── __init__.py
│       │   ├── user.py
│       │   └── product.py
│       ├── schemas/                 # Pydantic request/response schemas
│       │   ├── __init__.py
│       │   ├── user.py
│       │   └── product.py
│       ├── routers/                 # APIRouter per domain
│       │   ├── __init__.py
│       │   ├── auth.py
│       │   ├── products.py
│       │   └── orders.py
│       ├── services/                # Business logic — no HTTP, no DB directly
│       │   ├── auth_service.py
│       │   └── product_service.py
│       ├── dependencies/            # FastAPI Depends — current_user, get_db, pagination
│       │   └── auth.py
│       └── utils/                   # Pure helpers — email, file upload, token generation
│           ├── email.py
│           └── security.py
│
├── tests/
│   ├── conftest.py                  # pytest fixtures — test DB, test client, mock user
│   ├── unit/
│   │   ├── test_auth_service.py
│   │   └── test_product_service.py
│   └── integration/
│       ├── test_auth_routes.py
│       └── test_product_routes.py
│
├── alembic/                         # Database migrations
│   ├── versions/
│   └── alembic.ini
│
├── .env                             # DATABASE_URL, JWT_SECRET, etc. — gitignored
├── .env.example                     # Template .env — committed to git
├── pyproject.toml                   # Dependencies + build config (modern Python standard)
├── requirements.txt                 # Or: pip freeze > requirements.txt
├── Dockerfile
├── docker-compose.yml               # App + PostgreSQL + Redis for local dev
└── README.md

# ── ML PROJECT ────────────────────────────────────────────────────────
churn-prediction/
├── data/
│   ├── raw/                         # Original, immutable data — never edit
│   ├── processed/                   # Cleaned, feature-engineered data
│   └── external/                    # Third-party reference data
├── notebooks/
│   ├── 01_eda.ipynb                 # Exploratory data analysis
│   ├── 02_feature_engineering.ipynb
│   └── 03_model_selection.ipynb
├── src/
│   └── churn/
│       ├── data/
│       │   ├── load_data.py
│       │   └── preprocess.py
│       ├── features/
│       │   └── build_features.py
│       ├── models/
│       │   ├── train.py
│       │   ├── evaluate.py
│       │   └── predict.py
│       └── visualization/
│           └── plots.py
├── models/                          # Saved model artifacts (.pkl, .pt files)
├── reports/
│   └── figures/                     # Saved plots for reports
├── tests/
├── configs/
│   └── model_config.yaml            # Hyperparameters, feature lists
├── Makefile                         # make train, make evaluate, make serve
├── pyproject.toml
└── README.md

# pyproject.toml — modern Python project definition
[tool.poetry]
name = "my-api"
version = "0.1.0"
python = "^3.11"

[tool.poetry.dependencies]
fastapi = "^0.115.0"
uvicorn = {extras = ["standard"], version = "^0.32.0"}
sqlalchemy = {extras = ["asyncio"], version = "^2.0.0"}
asyncpg = "^0.29.0"
pydantic = {extras = ["email"], version = "^2.9.0"}
pydantic-settings = "^2.6.0"
python-jose = {extras = ["cryptography"], version = "^3.3.0"}
bcrypt = "^4.2.0"
alembic = "^1.13.0"

[tool.poetry.group.dev.dependencies]
pytest = "^8.3.0"
pytest-asyncio = "^0.24.0"
httpx = "^0.27.0"
ruff = "^0.7.0"         # Fast linter + formatter
mypy = "^1.13.0"        # Static type checker`,
      usage:
        "The src/ layout prevents import confusion and forces clean module design. Separate schemas/ from models/ so Pydantic shapes never mix with SQLAlchemy ORM classes. Separate services/ from routers/ so business logic has no FastAPI dependency — making it testable in isolation. This structure applies whether your Python project is a FastAPI backend, a ML pipeline, or a data processing tool.",
      mistake:
        "Putting all Python code in a single main.py file. A 600-line main.py with routes, models, database setup, business logic, and utility functions is unmaintainable and unsearchable. Even a small FastAPI project should have separate files for models, schemas, routes, services, and database configuration from the very first day.",
    },
  ],

  // ── SECTION 5: PREREQUISITES ─────────────────────────────────────
  prerequisites: [
    { item: "Basic Computer Skills and Terminal", done: true, note: "Command line navigation, file management, running commands", detail: "Navigate directories (cd, ls/dir), create files, run commands in terminal/PowerShell. Install Python from python.org and verify with python --version. You'll use the terminal for every Python workflow." },
    { item: "Programming Logic Fundamentals", done: true, note: "Variables, conditions, loops — language-agnostic concepts", detail: "If you've never written any code, spend 2–3 days on programming logic concepts first: variables, conditionals (if/else), loops (for, while), and functions. Python will be your first language to express these concepts — they transfer to every language." },
    { item: "Python 3 Syntax Basics", done: false, note: "The foundation before any library or framework", detail: "Data types, variables, operators, control flow, functions, classes, modules. Python 3.11+ is the standard in 2026. Never learn Python 2 — it is officially dead and has been unsupported since 2020." },
    { item: "Git and Version Control", done: true, note: "Required for every Python project and team", detail: "git init, git add, git commit, git push, branching, .gitignore (exclude venv/, __pycache__/, .env, *.pyc). Python projects need .gitignore for virtual environment folders and sensitive config files." },
    { item: "Virtual Environments (venv / conda)", done: false, note: "Mandatory for every Python project — no exceptions", detail: "python -m venv venv, source venv/bin/activate, pip install, pip freeze > requirements.txt. Every Python project needs an isolated virtual environment. Developers who install packages globally into the system Python create dependency conflicts that take days to debug." },
    { item: "pip and PyPI Package Management", done: false, note: "Installing and managing Python dependencies", detail: "pip install package-name, pip install -r requirements.txt, pip show, pip uninstall. Understand that PyPI (Python Package Index) at pypi.org hosts 500,000+ installable packages — the answer to 'does Python do X' is almost always yes." },
    { item: "Basic SQL", done: false, note: "Required for data science, backend, and data engineering paths", detail: "SELECT, WHERE, JOIN, GROUP BY, ORDER BY. Every Python data role uses SQL. Django ORM and SQLAlchemy generate SQL under the hood — understanding SQL makes ORM queries intuitive and helps you debug slow queries." },
    { item: "JSON and REST API Basics", done: true, note: "For backend and data collection work", detail: "What JSON is, how to parse it in Python (json.loads, json.dumps), what HTTP methods are (GET, POST, PUT, DELETE), and how to call an API with the requests library. This is prerequisite knowledge for FastAPI, web scraping, and any API-consuming Python script." },
  ],

  // ── SECTION 6: ROADMAP ───────────────────────────────────────────
  roadmap: [
    {
      phase: "Beginner",
      label: "01",
      duration: "Weeks 1–6",
      color: "emerald",
      topics: [
        "Python syntax — variables, data types (int, float, str, bool), operators, type conversion",
        "Control flow — if/elif/else, for loops, while loops, break/continue/pass",
        "Functions — def, parameters, return, *args, **kwargs, default values, scope",
        "Data structures — list, tuple, dict, set — methods, slicing, comprehensions",
        "String manipulation — f-strings, methods (split, join, strip, replace, format)",
        "File I/O — open(), read/write/append, with statement, pathlib.Path",
        "Error handling — try/except/finally, exception types, raising exceptions, custom exceptions",
        "Modules and packages — import, from...import, __name__, standard library (os, sys, json, datetime, math)",
        "OOP basics — classes, __init__, instance methods, class methods, static methods, inheritance",
        "Virtual environments — python -m venv, activation, pip install, requirements.txt",
        "pip and PyPI — installing packages, managing dependencies",
      ],
      buildProjects: [
        "Number guessing game: loops, conditionals, random module, user input — pure Python, no libraries",
        "Contact book CLI: dict-based storage, CRUD operations via terminal, file persistence with json",
        "Calculator with history: functions, exception handling, file I/O to save session history",
        "Text file analyzer: count words, sentences, most common words using Counter from collections",
      ],
    },
    {
      phase: "Intermediate",
      label: "02",
      duration: "Weeks 7–16",
      color: "primary",
      topics: [
        "Advanced OOP — dunder methods, properties, abstract classes (ABC), dataclasses",
        "Decorators — closure fundamentals, functools.wraps, decorator factories, class decorators",
        "Generators and iterators — yield, generator expressions, custom __iter__/__next__",
        "Type hints and mypy — Optional, List, Dict, Union, Callable, TypeVar, Literal (Python 3.10+)",
        "Context managers — with statement, __enter__/__exit__, contextlib.contextmanager",
        "Regular expressions — re module: match, search, findall, groups, substitution",
        "Web scraping — requests, BeautifulSoup4, lxml, handling pagination, respecting robots.txt",
        "FastAPI or Django — pick one backend framework; build CRUD API with auth and database",
        "SQLAlchemy ORM — models, sessions, queries, relationships, migrations with Alembic",
        "pytest — unit testing, fixtures, parametrize, mocking with unittest.mock, coverage",
        "pandas basics — DataFrame, Series, read_csv, selection, filtering, groupby, merge",
        "Async basics — asyncio, async/await, aiohttp, asyncio.gather, event loop understanding",
        "Environment variables — python-dotenv, pydantic-settings, never hardcode secrets",
        "Docker — Dockerfile for Python apps, docker-compose for local dev with PostgreSQL",
      ],
      buildProjects: [
        "REST API with FastAPI: Full CRUD, JWT auth, PostgreSQL with async SQLAlchemy, Alembic migrations, pytest tests",
        "Web scraper: Scrape job listings from a website, store in SQLite with SQLAlchemy, schedule with APScheduler",
        "Data analysis project: Clean and analyze a real Kaggle dataset with pandas, generate 5 insights with Matplotlib",
        "CLI tool: Click-based CLI that does something useful — bulk file renaming, API wrapper, CSV transformer",
      ],
    },
    {
      phase: "Advanced",
      label: "03",
      duration: "Weeks 17–28+",
      color: "purple",
      topics: [
        "Machine learning with scikit-learn — preprocessing pipelines, cross-validation, hyperparameter tuning, model evaluation",
        "Deep learning with PyTorch — nn.Module, custom Dataset, DataLoader, training loop, GPU acceleration",
        "Data engineering — Apache Airflow (DAGs, operators, sensors), PySpark for large-scale processing",
        "GenAI engineering — LangChain, LlamaIndex, RAG pipelines, AI agents, OpenAI/Anthropic SDKs",
        "Advanced async — asyncio task groups, semaphores, WebSockets, HTTPX async client",
        "Redis with Python — caching, session storage, pub/sub, rate limiting with aioredis",
        "Celery — distributed task queue, periodic tasks, Redis/RabbitMQ broker, result backend",
        "Performance optimization — profiling (cProfile, py-spy), C extensions (Cython, Numba), memory optimization",
        "Python packaging — pyproject.toml, building distributable packages, publishing to PyPI",
        "MLflow — experiment tracking, model registry, model serving",
        "Kubernetes and cloud — deploy FastAPI on AWS ECS or GCP Cloud Run, auto-scaling",
        "Advanced testing — property-based testing (Hypothesis), load testing (Locust), contract testing",
        "System design for Python — microservices, message queues, API gateways, database sharding patterns",
      ],
      buildProjects: [
        "ML production pipeline: End-to-end — data collection, EDA, feature engineering, model training, FastAPI serving endpoint, MLflow tracking, deployed on Render",
        "GenAI RAG chatbot: Document ingestion, ChromaDB vector store, LangChain retrieval chain, FastAPI streaming API, React or Angular frontend",
        "Real-time data pipeline: Kafka producers/consumers in Python, PySpark processing, PostgreSQL sink, Grafana dashboard",
        "Full SaaS platform: Django + Celery + Redis + PostgreSQL + Stripe payments + Pytest test suite + Docker + CI/CD",
      ],
    },
  ],

  // ── SECTION 7: USE CASES ─────────────────────────────────────────
  useCases: [
    { num: "01", title: "Backend APIs and Web Applications", body: "FastAPI, Django, and Flask power Python backend services across every industry. FastAPI is the modern choice for high-performance REST APIs — used by Uber, Netflix, and every new Python API project in 2026. Django powers content platforms, e-commerce backends, and admin-heavy applications (Instagram, Disqus). Python backend developers are hired at every Indian product company, startup, and IT services firm." },
    { num: "02", title: "Data Science and Business Analytics", body: "Python with pandas, NumPy, Matplotlib, Seaborn, and Plotly is the universal language of data analysis in India's corporate sector. BFSI companies, e-commerce platforms, healthcare firms, and any company with a data team use Python for exploratory analysis, dashboarding, and business intelligence. Python data scientists at mid-size companies earn ₹12–25 LPA within 2 years of starting." },
    { num: "03", title: "Machine Learning and Artificial Intelligence", body: "Python is the exclusive language of ML/AI in 2026. scikit-learn for classical ML, PyTorch for deep learning, Hugging Face for pre-trained models, and MLflow for experiment management. Indian AI companies — Sarvam, Krutrim, Mad Street Den — as well as global companies' India AI teams (Google DeepMind India, Microsoft Research India, Amazon AI) hire Python ML engineers as their primary technical profile." },
    { num: "04", title: "GenAI Application Development", body: "Building applications on top of LLMs — RAG systems, AI agents, chatbots, document processors, code generators — is the hottest Python specialty of 2026. Every Indian enterprise that is 'adding AI' to their product is hiring Python GenAI engineers who can work with LangChain, LlamaIndex, vector databases, and LLM APIs. This role didn't exist in 2022; it now commands ₹15–40 LPA for 2–3 years experience." },
    { num: "05", title: "Data Engineering and ETL Pipelines", body: "Python is the primary language for data engineering — building the infrastructure that moves, transforms, and loads data. Apache Airflow (scheduling), PySpark (distributed processing), dbt (transformations), and Kafka Python clients form the modern Python data engineering stack. At data-mature Indian companies like Flipkart, Ola, and Swiggy, data engineers are often the highest-paid engineering role." },
    { num: "06", title: "Automation, Scripting, and DevOps", body: "Python replaces Bash for complex automation: deployment scripts, infrastructure provisioning (Boto3 for AWS), CI/CD pipeline logic, monitoring and alerting, report generation, and database maintenance tasks. Every DevOps and SRE team at an Indian tech company has Python scripts managing critical operations." },
    { num: "07", title: "Quantitative Finance and Algorithmic Trading", body: "Zerodha's Kite platform, hedge funds, and quantitative trading desks use Python for algorithmic trading, backtesting, risk modeling, and portfolio optimization. NumPy for matrix operations, pandas for time series, matplotlib for charting, and custom C extensions for microsecond-latency execution. Quant Python developers at hedge funds and prop trading firms are among the highest-paid Python engineers globally." },
  ],

  // ── SECTION 8: PROJECTS ──────────────────────────────────────────
  projects: {
    beginner: [
      { name: "Contact Book CLI Application", desc: "Terminal-based contact manager — add, search, update, delete contacts. Persist data to JSON file. Case-insensitive search.", teaches: "Python fundamentals: dicts, file I/O, functions, error handling, json module, input validation — zero external libraries" },
      { name: "Web Scraper for Job Listings", desc: "Scrape software job listings from a job portal. Extract company, role, location, salary. Save to CSV. Handle pagination.", teaches: "requests library, BeautifulSoup4, CSV with csv module, error handling for network failures, time.sleep for rate limiting" },
      { name: "Weather CLI with OpenWeatherMap API", desc: "Fetch current weather and 5-day forecast by city name or GPS coordinates. Display with colored terminal output.", teaches: "requests, JSON parsing, API key management with dotenv, argument parsing with argparse, formatting output" },
      { name: "Text Analyzer and Word Frequency Counter", desc: "Analyze any text file: word count, sentence count, most frequent words, reading time estimate, readability score.", teaches: "File I/O, string methods, Counter from collections, regular expressions, functions, formatted output" },
    ],
    intermediate: [
      { name: "FastAPI REST API with Auth", desc: "CRUD API with user registration and login (JWT), PostgreSQL via async SQLAlchemy, Alembic migrations, role-based access, Pydantic schemas, pytest tests, Swagger docs.", teaches: "FastAPI, Pydantic, async SQLAlchemy, Alembic, JWT with python-jose, bcrypt, pytest with httpx, project structure" },
      { name: "Data Analysis Dashboard", desc: "Analyze a real Kaggle dataset (e-commerce orders, IPL stats, or Zomato reviews). 5+ insights with pandas. Interactive visualizations with Plotly. Export to PDF report.", teaches: "pandas data cleaning, groupby aggregations, merge, Plotly interactive charts, Jupyter notebooks, storytelling with data" },
      { name: "ML Churn Prediction Model", desc: "Predict customer churn from a telecom dataset. EDA, feature engineering, scikit-learn Pipeline, comparison of 3 models, hyperparameter tuning, evaluation report, saved model with joblib.", teaches: "scikit-learn Pipeline + ColumnTransformer, cross-validation, GridSearchCV, classification metrics, feature importance, model persistence" },
      { name: "Async Web Scraper with Rate Limiting", desc: "Scrape 1000+ product prices from an e-commerce site concurrently. asyncio + aiohttp with semaphore for rate limiting. Store in SQLite. Schedule daily runs.", teaches: "asyncio, aiohttp, semaphore for concurrency control, async context managers, APScheduler, error handling at scale" },
    ],
    advanced: [
      { name: "ML Production Pipeline with MLflow", desc: "End-to-end: data pipeline with pandas, feature store, scikit-learn + PyTorch model training, MLflow experiment tracking and model registry, FastAPI serving endpoint with request validation, Dockerfile, deployed on Render/Railway.", teaches: "MLflow, model serving with FastAPI, Docker, production ML best practices, A/B testing infrastructure" },
      { name: "GenAI RAG Document Q&A System", desc: "PDF document ingestion, chunking strategy, HuggingFace embeddings, ChromaDB vector store, LangChain retrieval chain, Anthropic/OpenAI LLM, FastAPI streaming API, React frontend with real-time token streaming.", teaches: "RAG architecture, vector databases, embeddings, LangChain chains, FastAPI Server-Sent Events, prompt engineering" },
      { name: "Real-Time Data Pipeline", desc: "Kafka producer streams clickstream events, Python consumer processes with PySpark, aggregated metrics to PostgreSQL, FastAPI real-time API, Grafana dashboard with live metrics.", teaches: "Apache Kafka with confluent-kafka, PySpark streaming, streaming architectures, monitoring, distributed systems" },
      { name: "Django SaaS Platform with Payments", desc: "Multi-tenant SaaS — organizations, subscription plans (Stripe), feature gating, Celery background tasks, Redis caching, comprehensive pytest suite, Docker Compose, GitHub Actions CI.", teaches: "Django advanced (signals, middleware, multi-tenancy), Stripe integration, Celery, Redis, advanced pytest patterns, CI/CD" },
    ],
  },

  // ── SECTION 9: MISTAKES ──────────────────────────────────────────
  mistakes: [
    {
      title: "Using Mutable Default Arguments in Function Definitions",
      explanation: "def add_tag(tag, tags=[]) — Python creates the default list ONCE when the function is defined. Every call that uses the default appends to the same list across all calls. This is one of Python's most famous gotchas, asked in nearly every Python interview.",
      tip: "Always use None as the default for mutable arguments: def add_tag(tag, tags=None). Then inside the function: if tags is None: tags = []. This creates a fresh list for each call.",
      wrong: "def add_item(item, items=[]): items.append(item); return items  # Shares list across calls",
      correct: "def add_item(item, items=None): items = [] if items is None else items; items.append(item); return items",
    },
    {
      title: "Not Using Virtual Environments",
      explanation: "Installing all packages globally with pip install damages the system Python and creates version conflicts between projects. When two projects require different versions of the same library, one breaks. Every Python project must have its own isolated virtual environment.",
      tip: "Run python -m venv venv in every new project directory. Activate it before pip install. Add venv/ to .gitignore. Add a requirements.txt with pip freeze > requirements.txt. Never install project-specific packages globally.",
    },
    {
      title: "Using iterrows() to Process DataFrames",
      explanation: "for index, row in df.iterrows() is a Python loop over a pandas C-optimized structure. It's 100–1000x slower than vectorized operations. A 1-million-row DataFrame that takes 2 seconds with vectorized pandas takes 20–30 minutes with iterrows().",
      tip: "Use vectorized operations: df['col'] * 2, df['col'].apply(func), np.where(), groupby().agg(). If you need element-wise logic that seems to require a loop, df.apply(func, axis=1) is always faster than iterrows(). Profile before assuming you need a loop.",
      wrong: "for idx, row in df.iterrows(): df.at[idx, 'total'] = row['price'] * row['qty']  // Extremely slow",
      correct: "df['total'] = df['price'] * df['qty']  // Vectorized — 1000x faster",
    },
    {
      title: "Fitting the Scaler on the Entire Dataset Before Train/Test Split",
      explanation: "Scaling or encoding the entire dataset before splitting into train/test leaks test set statistics into the training process. The model indirectly learns from test data distribution, resulting in optimistically inflated evaluation metrics that don't generalize to real production data.",
      tip: "Always split data first, then fit preprocessing only on the training set. Use scikit-learn Pipeline — it fits the entire pipeline (including scalers) only on training data, transforms both, and prevents leakage automatically.",
      wrong: "scaler.fit_transform(X); X_train, X_test = train_test_split(X_scaled)  # Data leakage",
      correct: "X_train, X_test = train_test_split(X); pipeline.fit(X_train, y_train); pipeline.predict(X_test)  # Correct",
    },
    {
      title: "Hardcoding Secrets and Credentials in Source Code",
      explanation: "API_KEY = 'sk-abc123' or DATABASE_URL = 'postgresql://user:password@host/db' committed to a public GitHub repository exposes your credentials to the entire internet within minutes — automated scanners find them instantly.",
      tip: "Store all secrets in .env files. Use python-dotenv or pydantic-settings to load them at runtime. Add .env to .gitignore immediately after creating it. Commit a .env.example with placeholder values to document the required variables.",
      wrong: "API_KEY = 'sk-real-secret-key-abc123'  # In source code — catastrophic if pushed to GitHub",
      correct: "import os; API_KEY = os.getenv('API_KEY')  # Loaded from .env via python-dotenv",
    },
    {
      title: "Catching Bare Exception: except Exception or except:",
      explanation: "try: ...; except: pass silently swallows all errors — including KeyboardInterrupt (Ctrl+C), SystemExit, and MemoryError. Bugs become invisible. The program appears to work while silently failing. This is the Python equivalent of ignoring all compiler warnings.",
      tip: "Always catch specific exception types: except ValueError, except FileNotFoundError, except httpx.HTTPStatusError. If you genuinely need to catch all exceptions, use except Exception as e: and at minimum log the error with logging.error() or print(e).",
      wrong: "try: result = risky_operation(); except: pass  # Silently ignores ALL errors including system signals",
      correct: "try: result = risky_operation(); except (ValueError, TypeError) as e: logger.error(f'Failed: {e}'); raise",
    },
    {
      title: "Not Using async Database Calls in FastAPI Routes",
      explanation: "Using synchronous SQLAlchemy (Session, db.query()) in an async FastAPI route blocks the entire event loop. While one request waits for the database, no other requests can be served. This eliminates FastAPI's concurrency advantage entirely.",
      tip: "Use async SQLAlchemy with asyncpg for PostgreSQL: create_async_engine, AsyncSession, await db.execute(select(...)). Or use Tortoise ORM or SQLModel which both have full async support. Alternatively, run synchronous DB calls in a thread pool with run_in_executor().",
    },
    {
      title: "Ignoring Type Hints and mypy",
      explanation: "Python is dynamically typed but type hints (def add(x: int, y: int) -> int) are not optional decoration in production code — they are the primary way Python catches type errors before runtime and serves as documentation for team members. Codebases without type hints become unmaintainable in teams.",
      tip: "Add type hints to every function signature from the first line of code. Run mypy --strict periodically. Use Pydantic's BaseModel for all data structures that cross function boundaries. Tools like Pylance in VS Code provide real-time type checking if you write type-annotated Python.",
    },
    {
      title: "Not Understanding Python's GIL for Concurrency",
      explanation: "Python's Global Interpreter Lock (GIL) means only one thread executes Python bytecode at a time, even on multi-core CPUs. Developers who use threading for CPU-bound work (image processing, NumPy operations) see no performance improvement — or even slowdown from threading overhead.",
      tip: "asyncio for I/O-bound concurrent tasks (HTTP calls, DB queries). multiprocessing or ProcessPoolExecutor for CPU-bound parallel work (data processing, model inference). threading only for I/O-bound work that can't use async. NumPy and PyTorch release the GIL during C-level operations — they achieve true parallelism.",
    },
    {
      title: "Writing Jupyter Notebook Code That Depends on Cell Execution Order",
      explanation: "A notebook where the correct output only appears if cells are run in a specific non-sequential order is a reproducibility disaster. Sharing such a notebook means the recipient has to guess execution order or debug mysterious errors.",
      tip: "Design notebooks so they run correctly from Kernel → Restart & Run All. Use relative paths (pathlib.Path) not absolute paths. Never depend on variables from cells that aren't upstream. Treat notebooks as executable documents — if it doesn't run cleanly from scratch, it's broken.",
    },
    {
      title: "Not Writing Tests",
      explanation: "Python code without tests is technical debt. A FastAPI backend with zero tests is untestable by definition — any refactor could break everything, and you'll only know in production. Data science code without tests produces unreproducible results.",
      tip: "Write at least one pytest test for every function that has business logic. For FastAPI, use pytest + httpx.AsyncClient for integration tests. For pandas transforms, test with small known DataFrames. Aim for >70% coverage on business logic. pytest is fast to write — a basic test takes 10 lines.",
    },
    {
      title: "Rewriting Functionality That Already Exists in the Standard Library",
      explanation: "Python's standard library is enormous. Developers who don't know it write custom implementations of things that already exist: JSON parsing, date arithmetic, file path handling, HTTP servers, CSV reading, random sampling, base64 encoding, URL parsing, and more.",
      tip: "Before writing any utility function, check the Python standard library. Key modules to know: pathlib (filesystem), datetime (dates and times), collections (Counter, defaultdict, deque), itertools (combinations, permutations, chain), functools (lru_cache, partial), contextlib, json, csv, re, hashlib, uuid, typing.",
    },
  ],

  // ── SECTION 10: INTERVIEW QUESTIONS ─────────────────────────────
  interviewQuestions: {
    beginner: [
      { q: "What is Python and why is it so popular in 2026?", a: "Python is a high-level, interpreted, dynamically-typed general-purpose programming language. It's popular because: readable English-like syntax reduces learning curve, one language covers web development (FastAPI/Django), data science (pandas/NumPy), machine learning (PyTorch/scikit-learn), and automation, massive ecosystem (PyPI with 500,000+ packages), and it's the exclusive language of AI/ML tooling." },
      { q: "What is the difference between a list and a tuple in Python?", a: "Lists are mutable (can be changed after creation) and use square brackets: [1, 2, 3]. Tuples are immutable (cannot be changed) and use parentheses: (1, 2, 3). Tuples are hashable and can be used as dictionary keys or set elements. Lists have more methods (append, remove, sort). Use tuples for data that shouldn't change (coordinates, RGB colors, database records)." },
      { q: "What is a Python decorator and how does it work?", a: "A decorator is a function that wraps another function to add behavior without modifying it. It takes a function as argument, defines a wrapper function that adds behavior before/after calling the original, and returns the wrapper. Used via @decorator_name syntax above a function definition. Powers @login_required in Django, @app.get() in FastAPI, and @pytest.mark.parametrize in pytest." },
      { q: "Explain list comprehension vs a for loop with append.", a: "List comprehension: [x * 2 for x in range(10) if x % 2 == 0] — faster (C-optimized), more Pythonic, concise. For loop: squares = []; for x in range(10): if x % 2 == 0: squares.append(x * 2) — more readable for complex logic, necessary for multiple statements per iteration. Use comprehensions for simple transformations and filters." },
      { q: "What is the difference between deep copy and shallow copy?", a: "Shallow copy (copy.copy() or list[:]) creates a new object but references the same nested objects. Modifying a nested list in the copy affects the original. Deep copy (copy.deepcopy()) creates a completely independent copy — all nested objects are also copied. Use deep copy when you need to modify nested structures independently." },
      { q: "What are *args and **kwargs in Python?", a: "*args captures any number of positional arguments as a tuple. **kwargs captures any number of keyword arguments as a dictionary. def func(*args, **kwargs) accepts any combination of arguments. *args for variable positional: func(1, 2, 3). **kwargs for variable keyword: func(name='Alice', age=25). Both are commonly used in decorators to forward arguments to the wrapped function." },
      { q: "What is the difference between == and 'is' in Python?", a: "== checks value equality — do two objects have the same value? 'is' checks identity — are two names bound to the exact same object in memory? 5 == 5.0 is True (same value), but 5 is 5.0 is False (different objects). A common bug: using 'is' to compare strings or integers outside Python's small integer cache (-5 to 256). Always use == for value comparison." },
      { q: "What is a virtual environment and why is it mandatory?", a: "A virtual environment is an isolated Python installation with its own site-packages directory. It prevents version conflicts between projects — Project A needs Django 4.2 and Project B needs Django 3.2 can coexist because each project has its own virtualenv. Created with python -m venv venv, activated with source venv/bin/activate. Without it, all projects share one Python installation and inevitably conflict." },
      { q: "What is the GIL in Python and what does it affect?", a: "The Global Interpreter Lock (GIL) is a mutex in CPython that allows only one thread to execute Python bytecode at a time. This means Python threads don't provide true parallelism for CPU-bound tasks — even on multi-core processors. The GIL does NOT affect I/O-bound operations (HTTP calls, file reads). For CPU parallelism, use multiprocessing. NumPy and PyTorch release the GIL during heavy C-level operations." },
      { q: "How does Python's garbage collection work?", a: "Python uses reference counting as the primary memory management strategy — every object has a count of references to it; when it reaches zero, the memory is freed immediately. A cyclic garbage collector handles reference cycles (object A references B, B references A — both have non-zero counts but are unreachable). The gc module exposes the cyclic collector. Memory leaks in Python usually mean keeping references alive unintentionally." },
    ],
    intermediate: [
      { q: "Explain Python's data model and dunder methods.", a: "Python's data model defines how objects behave with built-in operations via dunder (double underscore) methods. __len__ makes len(obj) work. __getitem__ enables obj[key]. __iter__ and __next__ enable for loops. __eq__ and __hash__ define equality and dict key behavior. __enter__/__exit__ enable the with statement. Implementing these makes custom classes integrate seamlessly with Python's syntax and built-in functions." },
      { q: "What is a generator and when should you use one instead of a list?", a: "A generator is a function that uses yield instead of return — it returns values lazily, one at a time, rather than computing all values upfront. Use generators for large datasets that don't fit in memory, infinite sequences, and data pipelines. A list of 10 million integers takes ~400MB; a generator producing them uses ~100 bytes. Generator expressions: (x**2 for x in range(10**6)) vs list comprehension which loads all into RAM." },
      { q: "What is the difference between @staticmethod, @classmethod, and an instance method?", a: "Instance method: first parameter is self (the instance) — accesses and modifies instance state. @classmethod: first parameter is cls (the class) — accesses class-level attributes, used for alternative constructors (Product.from_dict(data)). @staticmethod: no self or cls — a regular function logically grouped in the class, doesn't access instance or class state. Used for utility functions related to the class." },
      { q: "How does asyncio work? What is the event loop?", a: "asyncio implements cooperative multitasking with a single-threaded event loop. When a coroutine hits await, it suspends and yields control back to the event loop. The loop picks the next ready coroutine to run. When the awaited I/O completes (HTTP response, DB query result), the event loop schedules the suspended coroutine to resume. This enables thousands of concurrent I/O operations without threads — no GIL issues, no thread synchronization overhead." },
      { q: "What is data leakage in machine learning and how do you prevent it?", a: "Data leakage occurs when information from the test set influences model training, producing optimistically inflated evaluation metrics that don't generalize. Common causes: fitting scalers on entire dataset before splitting, target encoding with full dataset statistics, feature selection using test labels. Prevention: use scikit-learn Pipeline which fits preprocessing only on training data, always split before any transformation, be careful with time-series data (respect temporal ordering)." },
      { q: "Explain the difference between SQL and NoSQL databases and when to use each with Python.", a: "SQL (PostgreSQL, MySQL): structured relational data, ACID transactions, complex queries with JOINs. Use for user accounts, orders, financial records — anything with relationships and consistency requirements. Python: SQLAlchemy, psycopg2, asyncpg. NoSQL (MongoDB): flexible schema, horizontal scaling, document storage. Use for product catalogs, user activity logs, chat messages — unstructured or semi-structured data. Python: PyMongo, Motor (async)." },
      { q: "How do you test FastAPI endpoints with pytest?", a: "Use httpx.AsyncClient with the FastAPI app as the transport. Create a test database with conftest.py fixtures — override the get_db dependency to use a test database. Use pytest-asyncio for async test functions. Test: status codes, response shapes, database state after mutations, authentication flows, edge cases. Example: async with AsyncClient(app=app, base_url='http://test') as client: response = await client.post('/users', json={...}); assert response.status_code == 201." },
      { q: "What are Python metaclasses?", a: "A metaclass is a class whose instances are classes themselves. When Python processes a class definition, it calls the metaclass to create the class object. By default, the metaclass is type. Custom metaclasses intercept class creation: you can modify class attributes, enforce naming conventions, register classes automatically, or inject methods. Django's ORM uses metaclasses to turn class attributes into database columns. Rarely needed — if you're asking 'should I use a metaclass?', the answer is usually no." },
      { q: "What is Pydantic and why is it used in FastAPI?", a: "Pydantic is a data validation and serialization library using Python type hints. It validates that input data matches declared types (including nested models, custom validators), converts types automatically (string '42' → int 42), and serializes Python objects to JSON. FastAPI uses Pydantic models for request body parsing/validation, response serialization, and auto-generating OpenAPI documentation. Together, they eliminate manual request parsing, manual validation, and API documentation writing." },
      { q: "How do you handle database migrations in a Python backend project?", a: "Alembic is the standard database migration tool for SQLAlchemy projects. It autogenerates migration scripts by comparing your current SQLAlchemy models to the current database schema (alembic revision --autogenerate -m 'add user table'). Migrations are Python files with upgrade() and downgrade() functions. Apply with alembic upgrade head. Django has its own built-in migrations system (python manage.py makemigrations + migrate). Always commit migration files to git." },
      { q: "Explain the difference between multiprocessing, threading, and asyncio in Python.", a: "asyncio: single thread, event loop, cooperative multitasking via coroutines — best for I/O-bound concurrency (HTTP, DB, file I/O). threading: multiple OS threads in one process, GIL limits CPU parallelism — use for I/O-bound work with blocking libraries. multiprocessing: multiple separate Python processes, true CPU parallelism — use for CPU-bound work (ML inference, image processing, data computation). asyncio scales to millions of connections; multiprocessing scales to CPU core count." },
    ],
    advanced: [
      { q: "How would you architect a Python-based ML serving system for 10,000 requests per second?", a: "FastAPI with async endpoints and async ML inference where possible. Model loaded once at startup (lifespan event), not per request. PyTorch with TorchScript or ONNX for CPU optimization; TensorRT for GPU. Redis cache for repeated predictions. Horizontal scaling with multiple FastAPI replicas behind NGINX/Traefik load balancer. Request batching for GPU inference. Celery for heavy background processing. Separate feature computation from inference. Monitor with Prometheus + Grafana." },
      { q: "What is RAG (Retrieval-Augmented Generation) and how do you build a production RAG pipeline?", a: "RAG combines vector search (retrieval) with LLM generation. Pipeline: document chunking with overlap, embedding with a sentence transformer model, vector storage in ChromaDB or Pinecone, semantic similarity search at query time (MMR for diversity), context assembly, LLM generation with retrieved context. Production concerns: chunking strategy for your document type, embedding model selection (quality vs cost), query expansion, reranking retrieved chunks, evaluation with RAGAS or TruLens, caching embeddings." },
      { q: "How do you prevent and diagnose memory leaks in a long-running Python process?", a: "Profile with tracemalloc (built-in) or memory_profiler. Common causes: references kept alive in module-level collections (caches, registries), closures capturing large objects, cycles not collected, unclosed file/network connections, appending to lists indefinitely. Fix: use weakref for caches, explicitly del large objects, use generators instead of lists for large data, ensure async resources are properly closed (async with), use object pools. Monitor process RSS memory in production with Prometheus." },
      { q: "Explain Python's descriptor protocol.", a: "A descriptor is an object that defines __get__, __set__, or __delete__ — controlling attribute access on the class that contains it. When you access obj.attr, Python calls type(obj).__dict__['attr'].__get__(obj, type(obj)) if the attribute implements the descriptor protocol. This is how @property works, how functions become bound methods, how Django ORM fields work, and how SQLAlchemy's Column() creates database-mapped attributes. Custom descriptors enable lazy loading, validation on assignment, and computed properties." },
      { q: "How do you profile and optimize a slow Python function?", a: "Profile first — never optimize blind. cProfile: python -m cProfile -s cumulative script.py (call tree). line_profiler: @profile decorator on the suspect function (pip install line-profiler). py-spy: sampling profiler for production (no code modification). Common fixes: replace Python loops with NumPy vectorized operations, use __slots__ to reduce memory in classes with many instances, use lru_cache for expensive repeated computations, move hot paths to Cython or Numba, use bisect for sorted searches instead of linear scan." },
      { q: "What are Python's concurrency primitives and how do you coordinate async tasks?", a: "asyncio.gather: run multiple coroutines concurrently, collect all results. asyncio.TaskGroup (Python 3.11+): structured concurrency — all tasks cancelled if any fails. asyncio.Semaphore: limit concurrent operations (rate limiting). asyncio.Event: signal between coroutines. asyncio.Queue: producer-consumer coordination. asyncio.Lock: mutual exclusion for shared state. asyncio.timeout (Python 3.11+): cancel operations that take too long. Use TaskGroup over gather for better error handling and structured lifecycle." },
      { q: "How do you design a Python microservices architecture?", a: "Each service is a FastAPI application in its own Docker container. Communication: synchronous inter-service calls via httpx (HTTP), asynchronous via Kafka or RabbitMQ (Python producers/consumers with aiokafka). Service discovery: Docker Compose for dev, Kubernetes for production. Shared code: published as a private PyPI package (common types, utilities). Distributed tracing: OpenTelemetry Python SDK → Jaeger. Each service has its own database. Authentication: JWT validated at API gateway, not per-service." },
      { q: "What is Python's import system and how does sys.path work?", a: "When you import a module, Python searches sys.path in order: built-ins first, then the script's directory, then PYTHONPATH environment variable entries, then site-packages (pip-installed packages). import mymodule: Python looks for mymodule.py or mymodule/__init__.py. Circular imports are resolved by partially-initialized modules — avoid by moving imports inside functions or restructuring code. Custom importers can be registered via sys.meta_path hooks (how coverage.py and import-time patching work)." },
      { q: "How do you implement a distributed task queue with Celery in Python?", a: "Celery uses a broker (Redis or RabbitMQ) for task queuing and an optional result backend (Redis, PostgreSQL) for storing results. Define tasks with @celery_app.task decorator. Send tasks asynchronously with task.delay() or task.apply_async(). Workers run in separate processes: celery -A myapp worker --loglevel=info. Scheduled tasks via Celery Beat: celery -A myapp beat. Key patterns: task retries with autoretry_for, task routing to specialized queues, idempotency for reliability, chord/group/chain for task workflows." },
      { q: "How do you evaluate and improve a machine learning model in production?", a: "Monitor data drift (feature distribution changes) with tools like Evidently or WhyLogs. Track prediction drift (output distribution changes). Log all predictions and true labels for offline evaluation. A/B test new models against the baseline with traffic splitting. Set up automated retraining triggers when drift exceeds threshold. Use shadow mode deployment — run new model in parallel without affecting production. Key metrics beyond accuracy: latency percentiles (p95, p99), memory usage, throughput, and business metrics (not just ML metrics)." },
      { q: "What is Python's __slots__ and when should you use it?", a: "__slots__ = ['x', 'y'] in a class definition prevents Python from creating a per-instance __dict__, storing attributes in a fixed-size array instead. Benefits: 30–50% memory reduction for classes with many instances (Point, Vertex, trade record classes), slightly faster attribute access. Costs: cannot add new attributes dynamically, no default values without __init__, inheritance complications. Use when creating millions of small objects — NumPy alternatives are usually better for numerical data." },
    ],
  },

  // ── SECTION 11: COMPARISON ───────────────────────────────────────
  comparison: {
    headers: ["Feature", "Python", "JavaScript (Node.js)", "Java"],
    rows: [
      { feature: "Primary Use Cases", react: "ML/AI, data science, backend APIs, automation, scripting", vue: "Web frontend, backend APIs, full-stack (MERN/MEAN), serverless", angular: "Enterprise backend, Android, big data (Spark), Spring microservices" },
      { feature: "Typing System", react: "Dynamic + optional type hints (mypy)", vue: "Dynamic + optional TypeScript", angular: "Static — strongly typed, compile-time checks" },
      { feature: "Performance", react: "Moderate — interpreted, GIL limits CPU concurrency", vue: "High — V8 JIT, excellent async I/O concurrency", angular: "Highest — JVM JIT, true multi-threading" },
      { feature: "ML/AI Ecosystem", react: "Best-in-class — PyTorch, TensorFlow, scikit-learn, all AI APIs", vue: "Limited — TensorFlow.js (subset of Python capabilities)", angular: "Good — DL4J, Weka, but far behind Python ecosystem" },
      { feature: "Data Science", react: "Industry standard — pandas, NumPy, Jupyter, Matplotlib", vue: "Not used for data science", angular: "Academic use — Apache Spark (Java/Scala API), limited" },
      { feature: "Backend APIs", react: "Excellent — FastAPI, Django, Flask; async with asyncio", vue: "Excellent — Express, Fastify, NestJS; native async", angular: "Excellent — Spring Boot; most mature enterprise API framework" },
      { feature: "Learning Curve", react: "Gentlest — most readable syntax of the three", vue: "Moderate — async model, prototype chain, callback patterns", angular: "Steepest — verbose syntax, complex build system, JVM quirks" },
      { feature: "Concurrency Model", react: "asyncio (event loop) + multiprocessing for CPU", vue: "Event loop (V8) + Worker threads", angular: "True multi-threading — Java thread pool, CompletableFuture" },
      { feature: "Job Market India (2026)", react: "Highest combined demand — ML, AI, data, backend", vue: "Highest for web/full-stack — MERN/MEAN startups", angular: "Highest for enterprise — banking, IT services, ERP" },
      { feature: "Best For", react: "AI/ML, data science, GenAI, scripting, backend APIs", vue: "Startups, web applications, real-time apps, full-stack", angular: "Enterprise systems, banking, insurance, IT services" },
    ],
  },

  // ── SECTION 12: PROS & CONS ──────────────────────────────────────
  pros: [
    "Readable, English-like syntax — the shortest path from idea to running code of any major programming language",
    "Unmatched AI/ML ecosystem — PyTorch, TensorFlow, scikit-learn, Hugging Face, LangChain — every AI tool has Python first",
    "Breadth of career paths — one language, five well-paying tracks: backend, data science, ML, data engineering, GenAI",
    "Largest package ecosystem for data — pandas, NumPy, Matplotlib, Plotly, and SciPy have no comparable equivalents in other languages",
    "Rapid prototyping — REPL, Jupyter notebooks, and minimal boilerplate make Python the fastest language from idea to working code",
    "Dominant in India's highest-growth sectors — fintech data, healthtech ML, edtech analytics, and AI startups all predominantly hire Python",
    "Standard in scientific computing — academia, research labs, ISRO, pharma, and financial engineering use Python universally",
    "Batteries included — rich standard library (os, json, csv, datetime, pathlib, urllib, hashlib, itertools) reduces external dependencies",
  ],
  cons: [
    "Global Interpreter Lock (GIL) — limits true CPU-level parallelism in multi-threaded Python programs; CPU-bound work needs multiprocessing",
    "Slower execution than compiled languages — Python is 10–100x slower than C++, Go, or Rust for CPU-intensive tasks (mitigated by NumPy, PyTorch, and Cython)",
    "Dynamic typing at scale — large codebases without type hints become unmaintainable; mypy and type annotations are practically mandatory for team projects",
    "High memory usage — Python objects have significant overhead; a pandas DataFrame uses 5–10x the memory of equivalent raw data",
    "Mobile development gap — Python has no mainstream mobile framework (unlike JavaScript/React Native or Kotlin/Swift) — not suitable for mobile apps",
    "Packaging complexity — pip, venv, conda, poetry, pyenv, and pyproject.toml form an ecosystem that confuses beginners and occasionally breaks experts",
    "Not ideal for web frontends — Python does not run in browsers; frontend work always requires JavaScript or TypeScript alongside Python",
    "Startup time for serverless — Python cold starts on AWS Lambda can be 500ms–2s, longer than Node.js or compiled languages in serverless architectures",
  ],

  // ── SECTION 13: FUTURE SCOPE ─────────────────────────────────────
  futureScope: [
    "Python's position as the language of AI and ML is not a temporary trend — it is structural. Every major AI lab (OpenAI, Anthropic, Google DeepMind, Meta AI) has built their training infrastructure, model serving, and developer tooling in Python. The Hugging Face model hub, LangChain, LlamaIndex, and every vector database have Python as their primary SDK. As India's AI investment accelerates through 2026–2030 — with NASSCOM projecting 1 million AI jobs in India by 2027 — Python proficiency will be a baseline expectation for any technical role at any data-driven Indian company.",
    "The removal of the GIL is coming. Python 3.13 (released October 2024) introduced an optional free-threaded mode (no-GIL) as an experimental flag. Python 3.14 and beyond are expected to make free-threaded Python the default, enabling true multi-core parallelism without multiprocessing overhead. This is the most significant performance change in Python's history and will make Python competitive with Node.js for concurrent server workloads without requiring async/await everywhere. Python developers who understand this transition are positioned to architect the next generation of Python backend systems.",
    "FastAPI has won the Python web framework war for new APIs. Its combination of Python type hints, Pydantic validation, async support, and auto-generated OpenAPI documentation has made it the default choice for new Python REST APIs globally and in India. Django remains essential for admin-heavy applications, existing large codebases, and content management systems — but FastAPI is the right default for 2026 greenfield API projects. Python developers who know FastAPI deeply, including Pydantic v2, async SQLAlchemy 2.0, and dependency injection patterns, are the most hireable backend Python engineers in 2026.",
    "GenAI engineering is a new, standalone Python career track that didn't exist before 2023 and is now one of the most in-demand and highest-compensated Python specializations in India. Companies from Infosys and TCS (building enterprise AI assistants for clients) to Zerodha (building trading AI tools) to 200+ Indian AI startups are hiring Python engineers who can build RAG pipelines, multi-modal applications, AI agents, and production LLM serving systems. A Python developer who adds GenAI engineering skills — LangChain, LlamaIndex, vector databases, prompt engineering, and LLM evaluation — to a solid Python backend foundation has the rarest and most valuable technical profile in India's 2026 technology market.",
    "Python's role in data engineering is growing, not shrinking. Apache Airflow (written in Python, orchestrated in Python DAGs) is the standard workflow orchestration tool for data teams globally. dbt (data build tool) integrates Python models alongside SQL. PySpark is the Python interface for Apache Spark, the standard big data processing framework. As India's data infrastructure matures — more companies moving from ad-hoc analytics to production data pipelines — the demand for Python data engineers who can build reliable, monitored, tested data pipelines will grow significantly through 2030.",
  ],

  // ── SECTION 14: ACTION PLAN ──────────────────────────────────────
  actionPlan: [
    { week: "Week 1–3", title: "Python Fundamentals — The Foundation Cannot Be Rushed", desc: "Install Python 3.12+ and VS Code. Work through Python syntax methodically: data types, control flow, functions, OOP basics. Build three small projects — a contact book CLI, a number guessing game, and a file-based task manager. Focus entirely on core Python — no libraries yet. The developers who later write clean pandas code and clean FastAPI code are the ones who internalized Python fundamentals here. Don't skip this phase." },
    { week: "Week 4–6", title: "Intermediate Python — Decorators, OOP, and the Standard Library", desc: "Learn decorators (write three from scratch: logging, timing, retry), generators, context managers, type hints with mypy, and the most useful standard library modules (pathlib, collections, itertools, json, csv). Build a web scraper (requests + BeautifulSoup) and a data transformation CLI tool. These concepts appear in every framework you'll use — understanding them makes FastAPI, pandas, and scikit-learn immediately readable." },
    { week: "Week 7–12", title: "Choose Your Primary Track and Go Deep", desc: "Now pick the career track that most excites you: Backend (FastAPI + PostgreSQL), Data Science (pandas + Matplotlib + scikit-learn), or GenAI (LangChain + RAG). Go deep for 6 weeks on that track specifically. Build one substantial project: a FastAPI REST API with auth and tests, or a complete ML project from EDA to deployed model, or a working RAG chatbot. Depth on one track is more valuable than shallow exposure to all three." },
    { week: "Week 13–18", title: "Deploy and Expand", desc: "Deploy your primary project: FastAPI to Railway/Render, ML model to a serving endpoint, RAG API to Hugging Face Spaces. Learn Docker (Dockerfile + docker-compose) for your project type. Add at least 5 pytest tests to your project. Start learning the adjacent skills: if you did backend, learn pandas basics; if you did ML, learn FastAPI for serving; if you did GenAI, learn async Python. Deployed code with a live URL and a clean README is a portfolio. Local code in a folder is not." },
    { week: "Week 19–24", title: "Build a Second Project Across Two Track Boundaries", desc: "Build the ML production pipeline or GenAI RAG project from the advanced projects list — these intentionally combine Python backend (FastAPI) with data/ML/GenAI skills. This cross-domain project is the most compelling portfolio piece for Indian employers because it demonstrates you understand Python end-to-end: not just ML or just API, but how they connect in real product architectures. This is where most Python developers differentiate from the average candidate." },
    { week: "Week 25+", title: "The Job Push — Apply With Confidence", desc: "Apply to 10 Python roles per week — targeting your chosen track: backend (FastAPI/Django), data science, ML engineering, or GenAI engineering. Tailor your resume to the track. Study Python interview questions by level: fundamentals (mutable defaults, list vs tuple, GIL), intermediate (decorators, generators, async model, data leakage), and advanced (profiling, descriptors, concurrency primitives, ML production patterns). Do 2–3 take-home projects from actual applications. Most Python job searches for candidates with deployed projects and solid interview preparation close within 6–10 weeks of consistent, focused applications." },
  ],
};
