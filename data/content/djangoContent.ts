import type { TechContent } from './types';

export const djangoContent: TechContent = {
  techId: 'django',
  readTime: '30–35 min',
  difficulty: 'Beginner to Advanced',
  lastUpdated: '2026',

  // ── OPENING HOOK ─────────────────────────────────────────────────
  openingHook:
    "If you want to build a complete, production-grade web application in Python — with a database, user authentication, an admin panel, REST APIs, file uploads, email workflows, and a security baseline — and you want to do it faster than any other backend framework allows, learn Django. Not because it is the newest framework (it is not). Not because it is the most minimal (it is the opposite). But because Django is the framework that Instagram, Pinterest, Disqus, and the Washington Post chose when they needed to go from zero to production at scale with a small team — and it delivered. Django's famous philosophy, 'the web framework for perfectionists with deadlines', is not marketing copy. It is a design decision baked into every layer: an ORM that writes SQL for you, a built-in admin panel that takes thirty minutes to configure and replaces thousands of lines of CRUD interface code, a user authentication system that handles password hashing, session management, and permission checking out of the box, and security defaults so strong that a beginner Django application is safer than an expert-built Node.js application that ignores security. For Indian developers targeting backend Python roles, Django is the fastest path to a deployed, full-featured web application in their portfolio — and the most common framework in Python backend job descriptions on Naukri and LinkedIn India. A Django developer with two deployed projects and solid ORM knowledge is positioned for a ₹5–12 LPA role in 2026. This is not a tutorial overview. This is the complete, no-filler Django roadmap — from zero to job-ready.",

  // ── SECTION 1: INTRODUCTION ──────────────────────────────────────
  introText: [
    "Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design. Created by Adrian Holovaty and Simon Willison in 2003 for a newspaper company in Lawrence, Kansas — and open-sourced in 2005 — Django was built for exactly the kind of problem India's software teams face in 2026: a small team with a tight deadline needing to ship a complete, secure, database-backed web application without reinventing every wheel. Django's architecture follows the Model-View-Template (MVT) pattern — Models define the database structure, Views contain the business logic, and Templates render the HTML. Everything connects through Django's URL router. The framework makes dozens of decisions for you: how to structure your project, how to interact with the database, how to handle user sessions, how to serve static files, and how to protect against SQL injection, CSRF, XSS, and clickjacking.",
    "The key insight behind Django's enduring success is that most web applications solve the same problems: user accounts, database CRUD, form processing, file storage, email sending, caching, search, and an admin interface for non-technical staff. Django solves all of these once, correctly, and makes them available to every application through a consistent, well-documented API. The django.contrib namespace — contrib.auth (user authentication), contrib.admin (automatic admin panel), contrib.sessions (session management), contrib.messages (one-time notification messages), contrib.staticfiles (static file serving) — is the most valuable collection of solved problems in any web framework. You install Django and immediately have more infrastructure than a Node.js team builds in their first month.",
    "Django powers the backend of some of the world's largest web applications. Instagram's 2 billion monthly active users are served by Django. Pinterest, one of the top 50 global websites, runs Django. The Washington Post, Mozilla, and Bitbucket all chose Django. In India's technology ecosystem, Django is the default Python web framework for fintech portals, health-tech platforms, ed-tech backends, government digital services, and SaaS products. It is the Python framework most commonly listed in Indian backend job descriptions and the framework most Python developers learn after writing their first scripts. In 2026, Django mastery combined with Django REST Framework (DRF) for APIs is the most hireable Python backend skill combination in India.",
  ],

  realWorldUsages: [
    "Instagram — serves over 2 billion monthly active users on a Django backend; one of the most-cited examples of Django at internet scale",
    "Pinterest — top 50 global website running Django; uses it for user boards, pins, recommendations, and the entire social graph",
    "Disqus — comment platform serving 500 million monthly visitors using Django; handled comment threading and real-time notifications at scale",
    "The Washington Post — editorial CMS, article serving, and subscription management built on Django",
    "Mozilla (Firefox) — addons.mozilla.org, support.mozilla.org, and developer documentation portals all built with Django",
    "Bitbucket — Atlassian's Git hosting platform used Django for its repository management, code review, and team collaboration features",
    "Eventbrite — event ticketing platform serving millions of events globally built on Django + PostgreSQL",
    "National Geographic — content management and media delivery platform uses Django as the backend CMS",
    "Indian government digital services — several state government portals, NPCI-adjacent fintech interfaces, and public sector digital initiatives use Django",
    "Indian startups — ed-tech platforms like Unacademy and BYJU's API layers, fintech backends at early-stage companies, and healthcare data portals commonly use Django",
  ],

  // ── SECTION 2: WHY LEARN ─────────────────────────────────────────
  whyLearn: {
    demand:
      "Search 'Django developer' or 'Python backend developer' on Naukri or LinkedIn India and you'll consistently find 8,000–15,000 active listings that mention Django explicitly. Add listings that mention 'Django REST Framework', 'DRF', or 'Python web framework' and the number exceeds 25,000 at any given time. Django dominates the Python backend job market in India because it aligns with the type of applications India's IT industry builds: content management systems, financial transaction portals, health records platforms, government service backends, and multi-tenant SaaS applications — all data-heavy, admin-intensive, and security-critical. Django is purpose-built for exactly this category of application. IT service companies (TCS, Infosys, Wipro) use Django for client delivery projects. Indian product companies (ClearTax, Razorpay, Nykaa) use Django for their core backend. Startups use it because it ships a working product in days instead of weeks. In 2026, Django fluency is the single most reliable path to a Python backend role in India.",
    jobRoles: [
      { role: "Django Backend Developer", desc: "The most common role — build Django models, views, URLs, and APIs. Own the database layer, authentication, and business logic for web applications." },
      { role: "Python Full-Stack Developer", desc: "Django backend combined with a JavaScript frontend (React or vanilla JS). Expected to build both the DRF REST API and consume it from the frontend." },
      { role: "Django REST Framework (DRF) Engineer", desc: "Specialize in building REST APIs with DRF — serializers, viewsets, routers, authentication, throttling, and permissions for mobile and SPA frontends." },
      { role: "Backend Engineer (Python/Django)", desc: "Title at mid-size product companies — owns multiple Django apps within a larger project, writes migrations, optimizes queries, implements background tasks with Celery." },
      { role: "Django CMS Developer", desc: "Build and maintain content management systems for publishing, marketing, and e-commerce platforms using Django's template system and third-party CMS packages." },
      { role: "Senior Django Developer / Tech Lead", desc: "After 3–4 years: architect multi-app Django projects, review migrations, set up CI/CD, implement caching strategies, mentor juniors, design the API contract." },
    ],
    whyCompanies: [
      { reason: "Ships fastest to production", detail: "Django's built-in admin, ORM, auth, and migrations reduce weeks of boilerplate to days. A funded startup's first production backend is frequently Django because speed-to-market is survival." },
      { reason: "Security defaults prevent common vulnerabilities", detail: "Django's template engine auto-escapes HTML (XSS prevention), ORM parameterizes queries (SQL injection prevention), CSRF middleware is on by default, and the SECRET_KEY system is built in. Security mistakes require active developer effort to make." },
      { reason: "Admin panel at zero marginal cost", detail: "django.contrib.admin auto-generates a full CRUD interface for every registered model. For internal tools, data management, and operations teams, this alone saves 2–4 weeks of development per project." },
      { reason: "Batteries included at enterprise scale", detail: "Authentication, permissions, sessions, caching (memcached/Redis), email, file uploads, internationalization, sitemaps, feeds, and content types — all first-party Django. Zero third-party library decisions for core functionality." },
    ],
    salaryRange: "₹5 LPA – ₹12 LPA (Freshers with portfolio) | ₹12 LPA – ₹28 LPA (Mid-Level, 2–4 years) | ₹28 LPA – ₹55 LPA (Senior/Lead, 4+ years)",
    careerNote:
      "Django is not a dead end — it is a well-paved onramp to the highest-value Python backend careers. Once solid in Django, you extend into Django REST Framework (API-first applications), Celery (distributed background tasks), Django Channels (WebSockets and real-time), PostgreSQL advanced features (jsonb, full-text search, window functions), and system design (scaling Django from 1,000 to 10 million users). Senior Django engineers at Indian fintech companies, healthcare platforms, and SaaS products regularly earn ₹30–55 LPA. Django knowledge also transfers directly to FastAPI — the models, migrations, and architectural patterns are analogous. Django is not a ceiling; it is the most productive Python backend foundation you can build.",
  },

  // ── SECTION 3: HOW IT WORKS ──────────────────────────────────────
  howItWorks: {
    intro:
      "Think of Django as a well-run Indian railway system. When a passenger (HTTP request) arrives at the station (your server), the ticket counter (URL dispatcher) reads the destination and routes the passenger to the correct platform (view function). The platform staff (view) consults the train schedule database (models via ORM) to get the information needed, assembles the ticket (context dictionary), and hands it to the printing machine (template engine) which produces the final ticket (HTML response). If the passenger needs to buy food from the pantry (static files) or check their booking (session), the railway system has dedicated services for those too. Every piece of the system is well-defined, maintainable separately, and connects through standard protocols — that is Django's MVT architecture.",
    vdomSteps: [
      { num: "1", title: "HTTP Request Arrives at Django's WSGI/ASGI Server", text: "A browser or API client sends an HTTP request to the server. Django runs behind a WSGI server (Gunicorn) or ASGI server (Uvicorn/Daphne) in production. The server passes the request to Django's request handler, which wraps it in an HttpRequest object containing the method, headers, body, cookies, and session data." },
      { num: "2", title: "Middleware Stack Processes the Request", text: "Django passes the request through each middleware in MIDDLEWARE settings from top to bottom. SecurityMiddleware (HTTPS, HSTS), SessionMiddleware (loads session), AuthenticationMiddleware (attaches request.user), CommonMiddleware (URL normalization), CSRFViewMiddleware (validates CSRF token on POST) — each middleware can short-circuit and return a response or pass the request forward." },
      { num: "3", title: "URL Dispatcher Matches the Route", text: "Django's URL dispatcher compares the request path against urlpatterns in urls.py using regex or path converters. It finds the matching URL pattern, extracts any URL parameters (pk, slug, username), and calls the associated view function or class-based view. If no pattern matches, Django returns a 404 response." },
      { num: "4", title: "View Executes Business Logic with the ORM", text: "The view function (or class-based view method) receives the HttpRequest and URL parameters. It uses Django's ORM (Object-Relational Mapper) to query the database — Product.objects.filter(category='electronics').select_related('seller') generates and executes the correct SQL automatically. The view assembles a context dictionary with the queried data." },
      { num: "5", title: "Template Renders HTML — or Serializer Returns JSON", text: "For traditional Django: the template engine receives the context, substitutes template variables, renders template tags and filters, and returns an HttpResponse with the HTML string. For Django REST Framework APIs: the serializer converts the queryset to Python primitives, then to JSON, and DRF returns a Response object with the correct Content-Type and status code." },
    ],
    componentCode: `# DJANGO REQUEST CYCLE — one complete feature across all layers

# 1. models.py — defines database structure; Django writes the SQL
from django.db import models
from django.contrib.auth.models import User

class Category(models.Model):
    name = models.CharField(max_length=100, unique=True)
    slug = models.SlugField(unique=True)

    def __str__(self) -> str:
        return self.name

    class Meta:
        verbose_name_plural = "categories"
        ordering = ["name"]

class Product(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    category = models.ForeignKey(Category, on_delete=models.PROTECT, related_name="products")
    seller = models.ForeignKey(User, on_delete=models.CASCADE, related_name="products")
    image = models.ImageField(upload_to="products/%Y/%m/", blank=True, null=True)
    stock = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["-created_at"]
        indexes = [
            models.Index(fields=["category", "is_active"]),
            models.Index(fields=["seller", "-created_at"]),
        ]

    def __str__(self) -> str:
        return f"{self.name} (₹{self.price})"

    @property
    def price_with_gst(self) -> float:
        return float(self.price) * 1.18

# 2. urls.py — maps URLs to views
from django.urls import path
from . import views

app_name = "products"
urlpatterns = [
    path("", views.ProductListView.as_view(), name="list"),
    path("<int:pk>/", views.ProductDetailView.as_view(), name="detail"),
    path("new/", views.ProductCreateView.as_view(), name="create"),
    path("<int:pk>/edit/", views.ProductUpdateView.as_view(), name="update"),
    path("<int:pk>/delete/", views.ProductDeleteView.as_view(), name="delete"),
]

# 3. views.py — business logic; queries ORM, returns response
from django.views.generic import ListView, DetailView, CreateView, UpdateView, DeleteView
from django.contrib.auth.mixins import LoginRequiredMixin, UserPassesTestMixin
from django.urls import reverse_lazy
from django.db.models import QuerySet
from .models import Product
from .forms import ProductForm

class ProductListView(ListView):
    model = Product
    template_name = "products/list.html"
    context_object_name = "products"
    paginate_by = 12

    def get_queryset(self) -> QuerySet:
        qs = Product.objects.filter(is_active=True).select_related("category", "seller")
        category = self.request.GET.get("category")
        search = self.request.GET.get("q")
        if category:
            qs = qs.filter(category__slug=category)
        if search:
            qs = qs.filter(name__icontains=search)
        return qs

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["categories"] = Category.objects.all()
        return context

class ProductDetailView(DetailView):
    model = Product
    template_name = "products/detail.html"
    context_object_name = "product"
    queryset = Product.objects.filter(is_active=True).select_related("category", "seller")

class ProductCreateView(LoginRequiredMixin, CreateView):
    model = Product
    form_class = ProductForm
    template_name = "products/form.html"
    success_url = reverse_lazy("products:list")

    def form_valid(self, form):
        form.instance.seller = self.request.user  # Attach logged-in user
        return super().form_valid(form)

# 4. Template — products/list.html (abbreviated)
# {% extends "base.html" %}
# {% block content %}
#   {% for product in products %}
#     <div class="card">
#       <h3>{{ product.name }}</h3>
#       <p>₹{{ product.price }}</p>
#       <p>{{ product.category }}</p>
#     </div>
#   {% empty %}
#     <p>No products found.</p>
#   {% endfor %}
#   {% include "pagination.html" with page_obj=page_obj %}
# {% endblock %}`,
    renderCycle: [
      "HTTP request → WSGI/ASGI server → Django HttpRequest object created",
      "Middleware stack processes request top-to-bottom (security, session, auth, CSRF)",
      "URL dispatcher matches path → calls view function or class-based view",
      "View uses Django ORM → SQL query executes against PostgreSQL/SQLite",
      "Template engine renders HTML with context OR DRF serializer returns JSON",
      "Middleware processes response bottom-to-top → HTTP response sent to client",
    ],
    closingNote:
      "This six-step MVT cycle is the heartbeat of every Django application — from a simple blog to a multi-tenant SaaS platform. Once you can trace any feature — user registration, product listing, order checkout — through URL → middleware → view → ORM → template, you understand Django. Everything else — class-based views, DRF serializers, Celery tasks, caching — is a specialization of one step in this cycle.",
  },

  // ── SECTION 4: CORE CONCEPTS ─────────────────────────────────────
  coreConcepts: [
    {
      id: "django-models-orm",
      number: "4.1",
      title: "Django Models and the ORM",
      icon: "🗄️",
      color: "emerald",
      intro:
        "Django's ORM (Object-Relational Mapper) is the most powerful feature in the framework. You define your database schema as Python classes — each class is a database table, each class attribute is a column. Django generates and executes the correct SQL automatically. The ORM supports PostgreSQL, MySQL, SQLite, and Oracle without changing application code. Migrations track schema changes over time, like version control for your database. Mastering the ORM — especially select_related, prefetch_related, annotate, and aggregate — is the single most important Django skill for writing performant applications.",
      code: `# models.py — complete data model for an e-commerce application
from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.text import slugify
from django.core.validators import MinValueValidator

# CUSTOM USER — always define this before your first migration
class User(AbstractUser):
    phone = models.CharField(max_length=15, blank=True)
    avatar = models.ImageField(upload_to="avatars/", blank=True, null=True)
    bio = models.TextField(blank=True)
    is_seller = models.BooleanField(default=False)

    class Meta:
        db_table = "users"

# settings.py
# AUTH_USER_MODEL = "accounts.User"  # Must be set before first migrate

class Category(models.Model):
    name = models.CharField(max_length=100, unique=True)
    slug = models.SlugField(unique=True, blank=True)
    parent = models.ForeignKey(
        "self", null=True, blank=True,
        on_delete=models.SET_NULL, related_name="children"
    )

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)

class Product(models.Model):
    class Status(models.TextChoices):
        DRAFT = "draft", "Draft"
        ACTIVE = "active", "Active"
        ARCHIVED = "archived", "Archived"

    name = models.CharField(max_length=200)
    slug = models.SlugField(unique=True, blank=True)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2,
                                validators=[MinValueValidator(0)])
    compare_price = models.DecimalField(max_digits=10, decimal_places=2,
                                        null=True, blank=True)
    category = models.ForeignKey(Category, on_delete=models.PROTECT,
                                  related_name="products")
    seller = models.ForeignKey("accounts.User", on_delete=models.CASCADE,
                                related_name="products")
    status = models.CharField(max_length=10, choices=Status.choices,
                               default=Status.DRAFT)
    stock = models.PositiveIntegerField(default=0)
    tags = models.ManyToManyField("Tag", blank=True, related_name="products")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["-created_at"]
        indexes = [
            models.Index(fields=["status", "category"]),
            models.Index(fields=["seller", "-created_at"]),
        ]

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)

# ── ORM QUERIES — the most important patterns ────────────────────────

# SELECT with filter, exclude, order
active_electronics = Product.objects.filter(
    status=Product.Status.ACTIVE,
    category__name="Electronics",       # Follow FK with __
    price__lte=50000,                   # price <= 50000
).exclude(stock=0).order_by("price")

# select_related — JOIN for ForeignKey (one query instead of N+1)
products = Product.objects.select_related("category", "seller").filter(status="active")
for p in products:
    print(p.seller.email)  # No extra query — seller already fetched

# prefetch_related — separate query for ManyToMany / reverse FK
products = Product.objects.prefetch_related("tags", "images").filter(status="active")

# annotate + aggregate — add computed columns
from django.db.models import Count, Avg, Sum, F, Q

products_with_stats = Product.objects.annotate(
    review_count=Count("reviews"),
    avg_rating=Avg("reviews__rating"),
    discounted_price=F("price") * 0.9,   # F() references a column
)

# Q objects — complex OR/AND filters
from django.db.models import Q

results = Product.objects.filter(
    Q(name__icontains="laptop") | Q(description__icontains="laptop"),
    Q(price__lte=80000) & Q(status="active"),
)

# aggregate — compute totals
from django.db.models import Sum, Count
stats = Product.objects.filter(seller=user).aggregate(
    total_products=Count("id"),
    total_revenue=Sum(F("price") * F("stock")),
)

# values() and values_list() — avoid loading full model instances
category_counts = (
    Product.objects.filter(status="active")
    .values("category__name")
    .annotate(count=Count("id"))
    .order_by("-count")
)`,
      usage:
        "The ORM is how every Django view, every DRF serializer, every admin panel, and every management command accesses the database. Understanding select_related (for ForeignKey relationships) and prefetch_related (for ManyToMany and reverse ForeignKeys) is the single most impactful query optimization skill — it eliminates N+1 query bugs that make Django apps slow in production. Master these before adding any other Django knowledge.",
      mistake:
        "Accessing a ForeignKey attribute inside a loop without select_related: for product in Product.objects.all(): print(product.category.name). This executes one extra SQL query per product to fetch the category — N+1 queries. With 1,000 products, that's 1,001 database queries for one page render. Always add .select_related('category') to the queryset when you'll access FK attributes.",
    },
    {
      id: "django-views-urls",
      number: "4.2",
      title: "Views, URLs, and Class-Based Views",
      icon: "🗺️",
      color: "blue",
      intro:
        "Django views are Python functions or classes that receive an HttpRequest and return an HttpResponse. Django offers both function-based views (FBV) — simple, explicit, and great for beginners — and class-based views (CBV) — reusable, composable, and how experienced Django developers write less code. Django's generic class-based views (ListView, DetailView, CreateView, UpdateView, DeleteView, FormView) provide complete CRUD functionality with minimal code. Mastering both FBV and CBV, and knowing when to use which, is core Django knowledge.",
      code: `# views.py — function-based vs class-based views

from django.shortcuts import render, get_object_or_404, redirect
from django.contrib.auth.decorators import login_required, permission_required
from django.views.generic import (
    ListView, DetailView, CreateView, UpdateView, DeleteView, TemplateView
)
from django.contrib.auth.mixins import LoginRequiredMixin, UserPassesTestMixin
from django.contrib import messages
from django.urls import reverse_lazy
from django.http import HttpRequest, HttpResponse, JsonResponse
from django.db.models import Q
from .models import Product
from .forms import ProductForm

# ── FUNCTION-BASED VIEW (FBV) — explicit, readable, good for custom logic
@login_required
def product_create(request: HttpRequest) -> HttpResponse:
    if request.method == "POST":
        form = ProductForm(request.POST, request.FILES)
        if form.is_valid():
            product = form.save(commit=False)   # Don't save to DB yet
            product.seller = request.user       # Set seller to current user
            product.save()
            form.save_m2m()                     # Save ManyToMany (tags)
            messages.success(request, f"Product '{product.name}' created successfully!")
            return redirect("products:detail", pk=product.pk)
        messages.error(request, "Please correct the errors below.")
    else:
        form = ProductForm()
    return render(request, "products/form.html", {"form": form, "action": "Create"})

# ── CLASS-BASED VIEW (CBV) — less code, more reusable
class ProductListView(ListView):
    model = Product
    template_name = "products/list.html"
    context_object_name = "products"
    paginate_by = 12

    def get_queryset(self):
        qs = (
            Product.objects.filter(status="active")
            .select_related("category", "seller")
            .prefetch_related("tags")
        )
        q = self.request.GET.get("q", "").strip()
        category = self.request.GET.get("category")
        min_price = self.request.GET.get("min_price")
        max_price = self.request.GET.get("max_price")

        if q:
            qs = qs.filter(Q(name__icontains=q) | Q(description__icontains=q))
        if category:
            qs = qs.filter(category__slug=category)
        if min_price:
            qs = qs.filter(price__gte=min_price)
        if max_price:
            qs = qs.filter(price__lte=max_price)
        return qs

    def get_context_data(self, **kwargs):
        ctx = super().get_context_data(**kwargs)
        ctx["categories"] = Category.objects.all()
        ctx["query"] = self.request.GET.get("q", "")
        return ctx

class ProductDetailView(DetailView):
    model = Product
    template_name = "products/detail.html"
    queryset = Product.objects.select_related("category", "seller").prefetch_related("tags", "reviews")

class ProductCreateView(LoginRequiredMixin, CreateView):
    model = Product
    form_class = ProductForm
    template_name = "products/form.html"

    def form_valid(self, form):
        form.instance.seller = self.request.user
        messages.success(self.request, "Product created successfully!")
        return super().form_valid(form)

    def get_success_url(self):
        return reverse_lazy("products:detail", kwargs={"pk": self.object.pk})

class ProductUpdateView(LoginRequiredMixin, UserPassesTestMixin, UpdateView):
    model = Product
    form_class = ProductForm
    template_name = "products/form.html"

    def test_func(self) -> bool:
        product = self.get_object()
        return self.request.user == product.seller or self.request.user.is_staff

class ProductDeleteView(LoginRequiredMixin, UserPassesTestMixin, DeleteView):
    model = Product
    template_name = "products/confirm_delete.html"
    success_url = reverse_lazy("products:list")

    def test_func(self) -> bool:
        return self.get_object().seller == self.request.user

# ── urls.py — clean URL configuration
from django.urls import path, include
from . import views

app_name = "products"
urlpatterns = [
    path("", views.ProductListView.as_view(), name="list"),
    path("new/", views.ProductCreateView.as_view(), name="create"),
    path("<slug:slug>/", views.ProductDetailView.as_view(), name="detail"),
    path("<int:pk>/edit/", views.ProductUpdateView.as_view(), name="update"),
    path("<int:pk>/delete/", views.ProductDeleteView.as_view(), name="delete"),
]

# project/urls.py — root URL configuration
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("admin/", admin.site.urls),
    path("accounts/", include("accounts.urls", namespace="accounts")),
    path("products/", include("products.urls", namespace="products")),
    path("api/", include("api.urls", namespace="api")),
]`,
      usage:
        "FBVs are best for complex, non-standard logic — checkout flows, webhook handlers, custom form processing. CBVs are best for standard CRUD — list, detail, create, update, delete — because they reduce 40 lines of FBV to 10 lines of CBV. LoginRequiredMixin and UserPassesTestMixin replace the @login_required and ownership-check decorator boilerplate in CBVs. Use FBVs when you're struggling to fit your logic into a CBV — never fight the framework.",
      mistake:
        "Not namespacing your URL configurations. Without app_name = 'products' in urls.py, all URL names are global — two apps with a 'list' view name collide silently. Always define app_name in each app's urls.py and use namespaced URL names: reverse('products:list'), {% url 'products:detail' pk=product.pk %}, and redirect('products:list').",
    },
    {
      id: "django-forms",
      number: "4.3",
      title: "Django Forms and ModelForms",
      icon: "📋",
      color: "purple",
      intro:
        "Django's forms system handles the full lifecycle of user input: rendering HTML form fields, parsing submitted POST data, validating inputs, converting types, and saving to the database. ModelForm is Django's most productive tool — it auto-generates a form with all the right fields and validators from a Model definition. Custom validators, clean() methods, and widget customization give you complete control. Forms are central to every Django application that accepts user input.",
      code: `# forms.py — complete Django forms implementation
from django import forms
from django.core.exceptions import ValidationError
from django.contrib.auth.forms import UserCreationForm
from .models import Product, Category, User

# ModelForm — auto-generates fields from Model
class ProductForm(forms.ModelForm):
    class Meta:
        model = Product
        fields = ["name", "description", "price", "compare_price",
                  "category", "stock", "image", "tags", "status"]
        widgets = {
            "description": forms.Textarea(attrs={"rows": 4, "class": "form-control"}),
            "price": forms.NumberInput(attrs={"step": "0.01", "min": "0"}),
            "tags": forms.CheckboxSelectMultiple(),
        }
        labels = {
            "compare_price": "Original Price (before discount)",
        }
        help_texts = {
            "image": "Upload a product image. Supported formats: JPG, PNG, WebP",
        }

    def clean_price(self) -> float:
        """Custom field-level validation."""
        price = self.cleaned_data.get("price")
        if price is not None and price <= 0:
            raise ValidationError("Price must be a positive number.")
        return price

    def clean(self) -> dict:
        """Cross-field validation — compare_price must be >= price."""
        cleaned_data = super().clean()
        price = cleaned_data.get("price")
        compare_price = cleaned_data.get("compare_price")
        if price and compare_price and compare_price < price:
            raise ValidationError({
                "compare_price": "Original price must be higher than the selling price."
            })
        return cleaned_data

# Custom registration form extending Django's built-in
class UserRegistrationForm(UserCreationForm):
    email = forms.EmailField(required=True)
    phone = forms.CharField(
        max_length=15,
        required=False,
        widget=forms.TextInput(attrs={"placeholder": "+91 98765 43210"})
    )
    agree_to_terms = forms.BooleanField(
        required=True,
        error_messages={"required": "You must agree to the Terms of Service."}
    )

    class Meta(UserCreationForm.Meta):
        model = User
        fields = ("username", "email", "phone", "password1", "password2")

    def clean_email(self) -> str:
        email = self.cleaned_data.get("email", "").lower().strip()
        if User.objects.filter(email=email).exists():
            raise ValidationError("An account with this email already exists.")
        return email

    def save(self, commit: bool = True) -> User:
        user = super().save(commit=False)
        user.email = self.cleaned_data["email"]
        user.phone = self.cleaned_data.get("phone", "")
        if commit:
            user.save()
        return user

# Form without a Model — contact form, search form
class ProductSearchForm(forms.Form):
    query = forms.CharField(
        max_length=200,
        required=False,
        widget=forms.TextInput(attrs={"placeholder": "Search products..."})
    )
    category = forms.ModelChoiceField(
        queryset=Category.objects.all(),
        required=False,
        empty_label="All Categories"
    )
    min_price = forms.DecimalField(required=False, min_value=0, decimal_places=2)
    max_price = forms.DecimalField(required=False, min_value=0, decimal_places=2)
    in_stock_only = forms.BooleanField(required=False, initial=False)

    def clean(self) -> dict:
        cleaned = super().clean()
        min_p = cleaned.get("min_price")
        max_p = cleaned.get("max_price")
        if min_p and max_p and min_p > max_p:
            raise ValidationError("Minimum price cannot exceed maximum price.")
        return cleaned

# Using forms in view — the standard pattern
def product_search(request):
    form = ProductSearchForm(request.GET or None)
    products = Product.objects.filter(status="active")

    if form.is_valid():
        q = form.cleaned_data.get("query")
        category = form.cleaned_data.get("category")
        min_price = form.cleaned_data.get("min_price")
        max_price = form.cleaned_data.get("max_price")

        if q:
            products = products.filter(Q(name__icontains=q) | Q(description__icontains=q))
        if category:
            products = products.filter(category=category)
        if min_price:
            products = products.filter(price__gte=min_price)
        if max_price:
            products = products.filter(price__lte=max_price)

    return render(request, "products/search.html", {"form": form, "products": products})`,
      usage:
        "Every Django application that accepts user input uses forms. Registration, login (Django's built-in AuthenticationForm), product creation, profile updates, checkout, contact forms — all Django forms. ModelForm with clean() methods eliminates manual validation code. The form.is_valid() → form.cleaned_data pattern is the most important Django form workflow to internalize.",
      mistake:
        "Not using form.save(commit=False) when you need to add extra data before saving to the database. Without commit=False, Django saves the form immediately — you have no chance to set fields like seller = request.user that aren't part of the form. Always use commit=False when the model has fields not in the form, add the extra data, then call save().",
    },
    {
      id: "drf-apis",
      number: "4.4",
      title: "Django REST Framework — Building APIs",
      icon: "🚀",
      color: "yellow",
      intro:
        "Django REST Framework (DRF) is the standard library for building REST APIs with Django. It adds serializers (the API equivalent of forms — validate and transform data to/from JSON), viewsets (CBVs for APIs), routers (auto-generate URL patterns for viewsets), authentication backends (JWT, token, session), throttling, and permissions on top of Django. In 2026, Django without DRF is a template-rendering server. Django with DRF is a full API backend for React, Angular, Vue, or mobile frontends.",
      code: `# serializers.py — the heart of DRF
from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import Product, Category, Review

User = get_user_model()

class UserBriefSerializer(serializers.ModelSerializer):
    """Minimal user data — for embedding in other serializers."""
    class Meta:
        model = User
        fields = ["id", "username", "email", "avatar"]
        read_only_fields = ["id", "email"]

class CategorySerializer(serializers.ModelSerializer):
    product_count = serializers.SerializerMethodField()

    class Meta:
        model = Category
        fields = ["id", "name", "slug", "product_count"]

    def get_product_count(self, obj) -> int:
        return obj.products.filter(status="active").count()

class ProductSerializer(serializers.ModelSerializer):
    seller = UserBriefSerializer(read_only=True)       # Nested read serializer
    category_name = serializers.CharField(source="category.name", read_only=True)
    price_with_gst = serializers.FloatField(read_only=True)
    is_in_stock = serializers.SerializerMethodField()

    class Meta:
        model = Product
        fields = [
            "id", "name", "slug", "description", "price", "price_with_gst",
            "compare_price", "category", "category_name", "seller",
            "stock", "is_in_stock", "image", "status", "created_at",
        ]
        read_only_fields = ["id", "slug", "seller", "created_at"]

    def get_is_in_stock(self, obj) -> bool:
        return obj.stock > 0

    def validate_price(self, value):
        if value <= 0:
            raise serializers.ValidationError("Price must be a positive number.")
        return value

    def validate(self, data):
        price = data.get("price")
        compare_price = data.get("compare_price")
        if price and compare_price and compare_price < price:
            raise serializers.ValidationError(
                {"compare_price": "Original price must be higher than selling price."}
            )
        return data

# views.py (API) — ViewSets for CRUD APIs
from rest_framework import viewsets, permissions, filters, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.pagination import PageNumberPagination
from django_filters.rest_framework import DjangoFilterBackend
from .models import Product
from .serializers import ProductSerializer

class StandardPagination(PageNumberPagination):
    page_size = 12
    page_size_query_param = "page_size"
    max_page_size = 100

class IsSellerOrReadOnly(permissions.BasePermission):
    """Allow sellers to modify own products; all others read-only."""
    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True
        return obj.seller == request.user

class ProductViewSet(viewsets.ModelViewSet):
    serializer_class = ProductSerializer
    pagination_class = StandardPagination
    permission_classes = [permissions.IsAuthenticatedOrReadOnly, IsSellerOrReadOnly]
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ["category", "status", "seller"]
    search_fields = ["name", "description", "category__name"]
    ordering_fields = ["price", "created_at", "stock"]
    ordering = ["-created_at"]

    def get_queryset(self):
        return (
            Product.objects.filter(status="active")
            .select_related("category", "seller")
            .prefetch_related("tags")
        )

    def perform_create(self, serializer):
        serializer.save(seller=self.request.user)  # Set seller automatically

    # Custom action — endpoint: POST /api/products/{pk}/toggle_status/
    @action(detail=True, methods=["post"],
            permission_classes=[permissions.IsAuthenticated])
    def toggle_status(self, request, pk=None):
        product = self.get_object()
        if product.seller != request.user:
            return Response({"error": "Not your product."}, status=403)
        new_status = "archived" if product.status == "active" else "active"
        product.status = new_status
        product.save(update_fields=["status"])
        return Response({"status": new_status})

    # Custom list action — endpoint: GET /api/products/my_products/
    @action(detail=False, methods=["get"],
            permission_classes=[permissions.IsAuthenticated])
    def my_products(self, request):
        qs = Product.objects.filter(seller=request.user).select_related("category")
        page = self.paginate_queryset(qs)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)
        serializer = self.get_serializer(qs, many=True)
        return Response(serializer.data)

# urls.py (API) — DRF Router auto-generates all URLs
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r"products", views.ProductViewSet, basename="product")
router.register(r"categories", views.CategoryViewSet, basename="category")

urlpatterns = [path("", include(router.urls))]
# Generated URLs:
# GET/POST    /api/products/
# GET/PUT/PATCH/DELETE /api/products/{pk}/
# POST        /api/products/{pk}/toggle_status/
# GET         /api/products/my_products/`,
      usage:
        "DRF is the reason Django remains the most hired Python backend framework in India in 2026. Almost every Django project now exposes a DRF REST API for a React/Angular/Vue frontend or a mobile app. The ModelViewSet + Router pattern provides full CRUD with filtering, pagination, and permissions in ~30 lines. Custom actions (@action decorator) add non-CRUD endpoints (toggle_status, bulk_delete, export_csv) cleanly.",
      mistake:
        "Not using select_related and prefetch_related in ViewSet get_queryset(). DRF will serialize nested data like seller.email or category.name — each nested FK access without select_related causes an extra SQL query per object. A paginated response of 12 products with 3 FK relationships each = 37 SQL queries instead of 3. Always optimize the queryset in get_queryset() before it reaches the serializer.",
    },
    {
      id: "django-auth",
      number: "4.5",
      title: "Django Authentication and Permissions",
      icon: "🔐",
      color: "orange",
      intro:
        "Django's built-in authentication system handles user registration, login, logout, password hashing (PBKDF2 with SHA256), password change, password reset via email, and session management out of the box. For APIs, JWT (JSON Web Tokens) via djangorestframework-simplejwt is the standard. Django's permission system — object-level permissions, group permissions, and the @permission_required decorator — provides role-based access control at every layer of the application.",
      code: `# DJANGO AUTHENTICATION — complete implementation

# accounts/models.py — always extend AbstractUser
from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    phone = models.CharField(max_length=15, blank=True)
    avatar = models.ImageField(upload_to="avatars/%Y/", blank=True, null=True)
    is_seller = models.BooleanField(default=False)
    email_verified = models.BooleanField(default=False)

    EMAIL_FIELD = "email"
    REQUIRED_FIELDS = ["email"]

    class Meta:
        db_table = "users"

# settings.py
# AUTH_USER_MODEL = "accounts.User"

# accounts/views.py — authentication views
from django.contrib.auth import login, logout, authenticate
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from django.shortcuts import render, redirect
from .forms import UserRegistrationForm, LoginForm

def register_view(request):
    if request.user.is_authenticated:
        return redirect("dashboard")
    form = UserRegistrationForm(request.POST or None)
    if request.method == "POST" and form.is_valid():
        user = form.save()
        login(request, user)
        messages.success(request, f"Welcome, {user.username}! Your account is created.")
        return redirect("products:list")
    return render(request, "accounts/register.html", {"form": form})

def login_view(request):
    if request.user.is_authenticated:
        return redirect("dashboard")
    form = LoginForm(request, data=request.POST or None)
    if request.method == "POST" and form.is_valid():
        user = form.get_user()
        login(request, user)
        next_url = request.GET.get("next", "dashboard")
        return redirect(next_url)
    return render(request, "accounts/login.html", {"form": form})

@login_required
def logout_view(request):
    if request.method == "POST":
        logout(request)
        return redirect("home")

# JWT AUTHENTICATION FOR DRF (djangorestframework-simplejwt)
# pip install djangorestframework-simplejwt

# settings.py
from datetime import timedelta

REST_FRAMEWORK = {
    "DEFAULT_AUTHENTICATION_CLASSES": [
        "rest_framework_simplejwt.authentication.JWTAuthentication",
    ],
    "DEFAULT_PERMISSION_CLASSES": [
        "rest_framework.permissions.IsAuthenticatedOrReadOnly",
    ],
    "DEFAULT_PAGINATION_CLASS": "rest_framework.pagination.PageNumberPagination",
    "PAGE_SIZE": 12,
    "DEFAULT_THROTTLE_CLASSES": [
        "rest_framework.throttling.AnonRateThrottle",
        "rest_framework.throttling.UserRateThrottle",
    ],
    "DEFAULT_THROTTLE_RATES": {
        "anon": "100/hour",
        "user": "1000/hour",
    },
}

SIMPLE_JWT = {
    "ACCESS_TOKEN_LIFETIME": timedelta(minutes=60),
    "REFRESH_TOKEN_LIFETIME": timedelta(days=7),
    "ROTATE_REFRESH_TOKENS": True,
    "BLACKLIST_AFTER_ROTATION": True,
}

# api/views.py — JWT auth API endpoints
from rest_framework import generics, permissions, status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate

class RegisterAPIView(generics.CreateAPIView):
    serializer_class = UserRegisterSerializer
    permission_classes = [permissions.AllowAny]

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        refresh = RefreshToken.for_user(user)
        return Response({
            "user": UserSerializer(user).data,
            "access": str(refresh.access_token),
            "refresh": str(refresh),
        }, status=status.HTTP_201_CREATED)

class LoginAPIView(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        email = request.data.get("email", "").lower()
        password = request.data.get("password", "")
        user = authenticate(request, username=email, password=password)
        if not user:
            return Response({"error": "Invalid credentials."}, status=401)
        refresh = RefreshToken.for_user(user)
        return Response({
            "user": UserSerializer(user).data,
            "access": str(refresh.access_token),
            "refresh": str(refresh),
        })

# CUSTOM DRF PERMISSION
class IsOwnerOrReadOnly(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True
        return obj.user == request.user or request.user.is_staff

# ROLE-BASED PERMISSION
class IsSeller(permissions.BasePermission):
    message = "Only seller accounts can perform this action."
    def has_permission(self, request, view):
        return bool(request.user and request.user.is_authenticated and request.user.is_seller)`,
      usage:
        "Django's session-based auth is the correct choice for traditional Django apps with templates. JWT via simplejwt is the standard for DRF APIs consumed by React/Angular/mobile frontends. Always extend AbstractUser before your first migration — changing the User model after the first migrate is extremely painful. Custom permissions (IsOwnerOrReadOnly, IsSeller) are cleaner and more reusable than permission logic scattered across views.",
      mistake:
        "Not extending AbstractUser before the first migration. Django's default User model cannot be replaced after the initial migration without a complex and error-prone database surgery. Even if you don't need custom fields today, always define AUTH_USER_MODEL = 'accounts.User' and create an AbstractUser subclass in accounts/models.py as the first thing you do in any new Django project.",
    },
    {
      id: "django-admin",
      number: "4.6",
      title: "Django Admin — The Killer Feature",
      icon: "⚙️",
      color: "red",
      intro:
        "Django's admin panel is the framework's most underrated competitive advantage. By registering a model with the admin site, you instantly get a full CRUD interface with list views, search, filtering, bulk actions, and inline editing — auto-generated, zero front-end code required. For internal tools, data management, customer support dashboards, and content moderation interfaces, the Django admin replaces weeks of development time. Customizing the admin beyond the basics — list_display, list_filter, search_fields, inlines, actions, and ModelAdmin — is an essential Django skill.",
      code: `# admin.py — production-quality Django admin configuration
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.utils.html import format_html
from django.db.models import Sum, Count
from django.urls import reverse
from .models import User, Product, Category, Order, OrderItem

# CUSTOM USER ADMIN
@admin.register(User)
class UserAdmin(BaseUserAdmin):
    list_display = ["username", "email", "phone", "is_seller", "is_active", "date_joined"]
    list_filter = ["is_seller", "is_active", "is_staff", "date_joined"]
    search_fields = ["username", "email", "phone", "first_name", "last_name"]
    ordering = ["-date_joined"]
    # Add custom fields to the edit form
    fieldsets = BaseUserAdmin.fieldsets + (
        ("Profile", {"fields": ("phone", "avatar", "bio", "is_seller")}),
    )

# INLINE — edit related objects within parent admin page
class OrderItemInline(admin.TabularInline):
    model = OrderItem
    extra = 0                           # Don't show empty extra rows
    readonly_fields = ["product", "price", "quantity", "subtotal"]
    can_delete = False

    def subtotal(self, obj):
        return f"₹{obj.price * obj.quantity:,.2f}"

# PRODUCT ADMIN — comprehensive, production-ready
@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = [
        "name", "price_display", "category", "seller_link",
        "stock", "status_badge", "created_at"
    ]
    list_filter = ["status", "category", "created_at"]
    search_fields = ["name", "description", "seller__username", "seller__email"]
    list_editable = ["status"]          # Edit status directly in list view
    list_per_page = 25
    date_hierarchy = "created_at"
    ordering = ["-created_at"]
    prepopulated_fields = {"slug": ("name",)}  # Auto-fill slug from name
    autocomplete_fields = ["category", "seller"]  # Searchable FK fields
    filter_horizontal = ["tags"]        # Better ManyToMany widget

    fieldsets = (
        ("Basic Information", {
            "fields": ("name", "slug", "description", "category", "tags")
        }),
        ("Pricing", {
            "fields": ("price", "compare_price"),
            "classes": ("wide",),
        }),
        ("Inventory", {
            "fields": ("stock", "status"),
        }),
        ("Media", {
            "fields": ("image",),
            "classes": ("collapse",),
        }),
    )

    readonly_fields = ["created_at", "updated_at"]

    # Custom column: formatted price
    @admin.display(description="Price", ordering="price")
    def price_display(self, obj):
        return f"₹{obj.price:,.2f}"

    # Custom column: clickable seller link
    @admin.display(description="Seller")
    def seller_link(self, obj):
        url = reverse("admin:accounts_user_change", args=[obj.seller.pk])
        return format_html('<a href="{}">{}</a>', url, obj.seller.username)

    # Custom column: colored status badge
    @admin.display(description="Status")
    def status_badge(self, obj):
        colors = {"active": "green", "draft": "orange", "archived": "red"}
        color = colors.get(obj.status, "grey")
        return format_html(
            '<span style="color: white; background: {}; padding: 2px 8px; '
            'border-radius: 4px; font-size: 11px;">{}</span>',
            color, obj.get_status_display()
        )

    # Custom admin action — bulk activate products
    @admin.action(description="Activate selected products")
    def activate_products(self, request, queryset):
        count = queryset.update(status="active")
        self.message_user(request, f"{count} products activated.")

    actions = ["activate_products"]

    # Optimize queryset for list view
    def get_queryset(self, request):
        return super().get_queryset(request).select_related("category", "seller")

@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ["id", "user", "total_display", "status", "created_at"]
    list_filter = ["status", "created_at"]
    search_fields = ["user__username", "user__email", "id"]
    inlines = [OrderItemInline]         # Edit order items on the order page
    readonly_fields = ["created_at", "updated_at", "total"]

    @admin.display(description="Total")
    def total_display(self, obj):
        return f"₹{obj.total:,.2f}"

    def get_queryset(self, request):
        return super().get_queryset(request).select_related("user").prefetch_related("items")`,
      usage:
        "The Django admin is the fastest way to build an internal operations tool. Configuring list_display, list_filter, and search_fields takes 5 minutes and replaces a week of frontend development for an admin panel. Inlines let you edit related objects (order items on the order page) without a separate admin page. Custom @admin.display columns and @admin.action bulk actions make the admin panel into a real operations tool.",
      mistake:
        "Registering models with admin.site.register(Product) and no ModelAdmin class. This gives you a bare-bones admin with zero usability — one field displayed, no search, no filter, no optimization. Always create a ModelAdmin class with list_display, list_filter, and search_fields at minimum. And always add .select_related() in get_queryset() to prevent N+1 queries in the admin list view.",
    },
    {
      id: "celery-tasks",
      number: "4.7",
      title: "Celery — Background Tasks and Scheduled Jobs",
      icon: "⚙️",
      color: "teal",
      intro:
        "Web requests must respond in under 500ms. Sending emails, processing images, generating PDF reports, sending SMS notifications, importing CSV files, calling third-party APIs with retry logic, and running nightly data aggregations cannot happen in the request/response cycle. Celery is Django's standard solution for background task processing — tasks are queued in Redis (or RabbitMQ), picked up by separate worker processes, and executed asynchronously. Celery Beat adds cron-style scheduled task execution.",
      code: `# celery.py — Celery configuration for Django
import os
from celery import Celery
from celery.schedules import crontab

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "myproject.settings")

app = Celery("myproject")
app.config_from_object("django.conf:settings", namespace="CELERY")
app.autodiscover_tasks()  # Finds tasks.py in every INSTALLED_APPS

# settings.py — Celery + Redis configuration
CELERY_BROKER_URL = "redis://localhost:6379/0"
CELERY_RESULT_BACKEND = "redis://localhost:6379/0"
CELERY_ACCEPT_CONTENT = ["json"]
CELERY_TASK_SERIALIZER = "json"
CELERY_RESULT_SERIALIZER = "json"
CELERY_TIMEZONE = "Asia/Kolkata"
CELERY_TASK_TRACK_STARTED = True
CELERY_TASK_TIME_LIMIT = 30 * 60       # Kill tasks running over 30 minutes

# CELERY BEAT — scheduled tasks
CELERY_BEAT_SCHEDULE = {
    "send-daily-sales-report": {
        "task": "orders.tasks.send_daily_sales_report",
        "schedule": crontab(hour=8, minute=0),  # Every day at 8:00 AM
    },
    "cleanup-expired-sessions": {
        "task": "accounts.tasks.cleanup_expired_sessions",
        "schedule": crontab(hour=2, minute=0, day_of_week="sunday"),  # Sundays 2 AM
    },
    "update-product-stats": {
        "task": "products.tasks.update_product_stats",
        "schedule": crontab(minute="*/15"),  # Every 15 minutes
    },
}

# products/tasks.py — Celery tasks
from celery import shared_task
from celery.utils.log import get_task_logger
from django.core.mail import send_mail
from django.template.loader import render_to_string
from django.utils import timezone
from datetime import timedelta

logger = get_task_logger(__name__)

@shared_task(
    bind=True,
    max_retries=3,
    default_retry_delay=60,            # Retry after 60 seconds
    autoretry_for=(Exception,),        # Auto-retry on any exception
)
def send_order_confirmation_email(self, order_id: int) -> str:
    """Send order confirmation email — async, outside request cycle."""
    from orders.models import Order
    try:
        order = Order.objects.select_related("user").prefetch_related("items__product").get(pk=order_id)
        html_message = render_to_string("emails/order_confirmation.html", {"order": order})
        send_mail(
            subject=f"Order #{order.id} Confirmed — Thank You!",
            message=f"Your order #{order.id} has been confirmed.",
            html_message=html_message,
            from_email="orders@myshop.com",
            recipient_list=[order.user.email],
            fail_silently=False,
        )
        logger.info(f"Order confirmation sent for order #{order_id}")
        return f"Email sent for order #{order_id}"
    except Order.DoesNotExist:
        logger.error(f"Order #{order_id} not found — skipping email")
        return f"Order #{order_id} not found"
    except Exception as exc:
        logger.error(f"Failed to send email for order #{order_id}: {exc}")
        raise self.retry(exc=exc)

@shared_task(bind=True)
def process_product_image(self, product_id: int) -> str:
    """Resize and optimize product image after upload."""
    from PIL import Image
    from products.models import Product
    from django.core.files.storage import default_storage
    product = Product.objects.get(pk=product_id)
    if not product.image:
        return "No image to process"
    img = Image.open(product.image.path)
    img.thumbnail((800, 800), Image.LANCZOS)
    img.save(product.image.path, optimize=True, quality=85)
    return f"Image processed for product #{product_id}"

@shared_task
def send_daily_sales_report() -> str:
    """Daily sales report task triggered by Celery Beat."""
    from orders.models import Order
    from django.db.models import Sum, Count
    yesterday = timezone.now().date() - timedelta(days=1)
    stats = Order.objects.filter(
        created_at__date=yesterday,
        status="completed"
    ).aggregate(
        total_orders=Count("id"),
        total_revenue=Sum("total"),
    )
    send_mail(
        subject=f"Daily Sales Report — {yesterday}",
        message=f"Orders: {stats['total_orders']}, Revenue: ₹{stats['total_revenue'] or 0:,.2f}",
        from_email="reports@myshop.com",
        recipient_list=["admin@myshop.com"],
    )
    return f"Daily report sent for {yesterday}"

# views.py — fire tasks from views (non-blocking)
from .tasks import send_order_confirmation_email, process_product_image

def place_order(request):
    # ... create order ...
    send_order_confirmation_email.delay(order.id)  # .delay() = async execution
    return redirect("orders:confirmation", pk=order.id)

# Run workers:
# celery -A myproject worker --loglevel=info --concurrency=4
# celery -A myproject beat --loglevel=info  # For scheduled tasks`,
      usage:
        "Every production Django application uses Celery. Order confirmation emails, invoice PDF generation, bulk import processing, third-party API calls with retry logic, daily report generation, cache warming, and search index updates — all Celery tasks. The .delay() call returns immediately; the task runs in a separate worker process. This keeps all web responses under 200ms regardless of how heavy the background work is.",
      mistake:
        "Importing Django models at the module level in tasks.py rather than inside the task function. When Celery workers start, they import all task modules before Django is fully initialized. Module-level ORM imports cause AppRegistryNotReady errors. Always import models inside the task function body, not at the top of tasks.py.",
    },
    {
      id: "django-caching",
      number: "4.8",
      title: "Caching, Static Files, and Performance",
      icon: "⚡",
      color: "purple",
      intro:
        "A Django application that hits the database for every request doesn't scale. Caching — storing computed results in fast memory (Redis) for subsequent requests — is how Django applications serve millions of requests from a small fleet of servers. Django's cache framework supports per-view caching, low-level cache API, template fragment caching, and database query caching with a consistent API. Combined with database query optimization and static file serving, these techniques are the difference between a slow demo and a fast production app.",
      code: `# settings.py — Redis cache configuration
CACHES = {
    "default": {
        "BACKEND": "django.core.cache.backends.redis.RedisCache",
        "LOCATION": "redis://127.0.0.1:6379/1",
        "OPTIONS": {
            "socket_connect_timeout": 5,
            "socket_timeout": 5,
        },
        "KEY_PREFIX": "myapp",          # Namespace cache keys
        "TIMEOUT": 300,                 # Default: 5 minutes
    }
}

# 1. PER-VIEW CACHING — cache the entire view response
from django.views.decorators.cache import cache_page
from django.views.decorators.vary import vary_on_headers

@cache_page(60 * 15)  # Cache for 15 minutes
def product_list(request):
    products = Product.objects.filter(status="active").select_related("category")
    return render(request, "products/list.html", {"products": products})

# For CBVs — use in urls.py
from django.views.decorators.cache import cache_page
urlpatterns = [
    path("products/", cache_page(60 * 10)(ProductListView.as_view()), name="list"),
]

# 2. LOW-LEVEL CACHE API — cache specific expensive operations
from django.core.cache import cache
from django.db.models import Count, Sum

def get_category_stats():
    """Returns category statistics — expensive query cached for 1 hour."""
    cache_key = "category_stats_v1"
    stats = cache.get(cache_key)
    if stats is None:
        stats = list(
            Category.objects.annotate(
                product_count=Count("products"),
                total_revenue=Sum("products__price"),
            ).values("name", "product_count", "total_revenue")
        )
        cache.set(cache_key, stats, timeout=60 * 60)  # 1 hour
    return stats

# Cache invalidation — clear on model save
from django.db.models.signals import post_save, post_delete
from django.dispatch import receiver

@receiver([post_save, post_delete], sender=Product)
def invalidate_product_cache(sender, instance, **kwargs):
    """Clear relevant caches when a product changes."""
    cache.delete("category_stats_v1")
    cache.delete(f"product_detail_{instance.pk}")
    cache.delete_pattern("product_list_*")  # Requires django-redis

# 3. TEMPLATE FRAGMENT CACHING — cache expensive template blocks
# In template:
# {% load cache %}
# {% cache 600 product_card product.pk %}    <!-- cache 10 min, key includes product.pk -->
#   <div class="card">{{ product.name }} ₹{{ product.price }}</div>
# {% endcache %}

# 4. DATABASE QUERY OPTIMIZATION — beyond select_related
from django.db.models import Prefetch, prefetch_related_objects

# Prefetch with custom queryset
products = Product.objects.prefetch_related(
    Prefetch(
        "reviews",
        queryset=Review.objects.filter(is_approved=True).order_by("-created_at")[:3],
        to_attr="top_reviews"  # Access as product.top_reviews
    )
).select_related("category", "seller")

# only() — fetch only needed fields (reduces data transfer)
products = Product.objects.only("id", "name", "price", "category_id").filter(status="active")

# defer() — fetch all fields EXCEPT the named ones (for large text fields)
products = Product.objects.defer("description", "long_spec").filter(status="active")

# 5. STATIC FILES — production setup
# settings.py
STATIC_URL = "/static/"
STATIC_ROOT = BASE_DIR / "staticfiles"   # Where collectstatic puts files
STATICFILES_DIRS = [BASE_DIR / "static"]  # Your project static files

MEDIA_URL = "/media/"
MEDIA_ROOT = BASE_DIR / "media"           # User-uploaded files

# Run before deployment: python manage.py collectstatic
# Serve with WhiteNoise (simple) or nginx + S3 (production)

# pip install whitenoise
MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",
    "whitenoise.middleware.WhiteNoiseMiddleware",  # Right after SecurityMiddleware
    # ...
]
STATICFILES_STORAGE = "whitenoise.storage.CompressedManifestStaticFilesStorage"

# 6. DATABASE INDEXES — critical for query performance
class Product(models.Model):
    # ...
    class Meta:
        indexes = [
            models.Index(fields=["status", "category"]),          # Composite index
            models.Index(fields=["seller", "-created_at"]),       # For seller dashboard
            models.Index(fields=["price"]),                        # For price range filter
        ]

# Check slow queries with Django Debug Toolbar (dev)
# INSTALLED_APPS += ["debug_toolbar"]
# python manage.py shell: from django.db import connection; connection.queries`,
      usage:
        "Cache category statistics, popular product lists, and any queryset that is expensive to compute and changes infrequently. Invalidate caches via Django signals when the underlying data changes. Use only() or defer() when list views show 2–3 fields from models with 15+ columns. Always add database indexes on fields used in filter(), order_by(), and select_related() calls before going to production.",
      mistake:
        "Caching per-user data with a shared cache key. If you cache a user's order list at cache key 'user_orders', every user gets the first user's orders. Always include the user ID in cache keys: f'user_{request.user.pk}_orders'. And never cache data that contains sensitive information (passwords, payment details, PII) — use database sessions or encrypted storage instead.",
    },
    {
      id: "django-project-structure",
      number: "4.9",
      title: "Django Project Structure — Production-Ready Organization",
      icon: "📁",
      color: "yellow",
      intro:
        "Django's 'apps' system is its structural foundation. Each app is a self-contained module with its own models, views, URLs, templates, and static files. A well-structured Django project separates concerns by app — accounts, products, orders, payments — rather than by layer. This makes the codebase navigable, makes apps reusable across projects, and makes individual teams responsible for individual apps. Understanding project structure is what separates a Django developer who can maintain a team codebase from one who can only write tutorials.",
      code: `# ── PRODUCTION DJANGO PROJECT STRUCTURE ──────────────────────────────
myproject/
├── myproject/                         # Project configuration package
│   ├── __init__.py
│   ├── settings/                      # Split settings for different environments
│   │   ├── __init__.py
│   │   ├── base.py                    # Common settings — INSTALLED_APPS, ORM, etc.
│   │   ├── development.py             # DEBUG=True, SQLite or local Postgres
│   │   ├── production.py              # DEBUG=False, PostgreSQL, Redis, S3, email
│   │   └── testing.py                 # In-memory SQLite, no email, fast passwords
│   ├── urls.py                        # Root URL configuration — includes app URLs
│   ├── wsgi.py                        # WSGI entry point (Gunicorn)
│   └── asgi.py                        # ASGI entry point (Uvicorn, Django Channels)
│
├── apps/                              # All Django apps live here
│   ├── accounts/                      # User management
│   │   ├── migrations/
│   │   ├── templates/accounts/
│   │   │   ├── login.html
│   │   │   ├── register.html
│   │   │   └── profile.html
│   │   ├── __init__.py
│   │   ├── admin.py
│   │   ├── apps.py
│   │   ├── forms.py
│   │   ├── models.py                  # Custom User (AbstractUser)
│   │   ├── serializers.py             # DRF serializers for JWT auth API
│   │   ├── signals.py                 # Post-save signals (welcome email on register)
│   │   ├── tasks.py                   # Celery tasks (email verification, cleanup)
│   │   ├── tests/
│   │   │   ├── test_models.py
│   │   │   ├── test_views.py
│   │   │   └── test_api.py
│   │   ├── urls.py
│   │   └── views.py
│   │
│   ├── products/                      # Product catalog
│   │   ├── migrations/
│   │   ├── templates/products/
│   │   ├── admin.py                   # ProductAdmin with custom display
│   │   ├── filters.py                 # django-filter FilterSet
│   │   ├── forms.py                   # ProductForm (ModelForm)
│   │   ├── models.py                  # Product, Category, Tag, Review
│   │   ├── serializers.py             # ProductSerializer, CategorySerializer
│   │   ├── tasks.py                   # Image processing, stock alerts
│   │   ├── tests/
│   │   ├── urls.py                    # Template-rendered product views
│   │   └── views.py                   # ProductListView, ProductDetailView, etc.
│   │
│   ├── orders/                        # Order management
│   ├── payments/                      # Payment gateway integration
│   ├── notifications/                 # Email + SMS + push notifications
│   └── api/                           # DRF API — includes sub-routers from each app
│       ├── urls.py                    # Aggregates all DRF routers
│       └── versioning.py              # API versioning (/api/v1/, /api/v2/)
│
├── templates/                         # Project-wide base templates
│   ├── base.html                      # Master layout with nav, footer
│   ├── 404.html
│   ├── 500.html
│   └── emails/                        # Email templates (HTML + text)
│       ├── order_confirmation.html
│       └── password_reset.html
│
├── static/                            # Project-wide static files
│   ├── css/
│   │   ├── main.css
│   │   └── admin_custom.css
│   ├── js/
│   │   └── main.js
│   └── images/
│
├── media/                             # User-uploaded files (gitignored)
├── staticfiles/                       # collectstatic output (gitignored)
│
├── manage.py
├── requirements/
│   ├── base.txt                       # Django, DRF, psycopg2, Pillow, celery
│   ├── development.txt                # -r base.txt; django-debug-toolbar, coverage
│   └── production.txt                 # -r base.txt; gunicorn, whitenoise, sentry-sdk
├── .env                               # SECRET_KEY, DATABASE_URL, etc. — gitignored
├── .env.example                       # Template with placeholder values
├── Dockerfile
├── docker-compose.yml                 # Django + PostgreSQL + Redis for local dev
├── Makefile                           # make migrate, make test, make deploy
└── README.md

# settings/base.py — core settings pattern
from pathlib import Path
import environ

BASE_DIR = Path(__file__).resolve().parent.parent.parent
env = environ.Env()
environ.Env.read_env(BASE_DIR / ".env")

SECRET_KEY = env("SECRET_KEY")
ALLOWED_HOSTS = env.list("ALLOWED_HOSTS", default=["localhost"])
AUTH_USER_MODEL = "accounts.User"

INSTALLED_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    # Third-party
    "rest_framework",
    "rest_framework_simplejwt",
    "corsheaders",
    "django_filters",
    "celery",
    # Local apps
    "apps.accounts",
    "apps.products",
    "apps.orders",
    "apps.payments",
]`,
      usage:
        "The apps/ folder structure keeps each domain (accounts, products, orders) self-contained with its own models, views, serializers, tasks, and tests. Split settings (base/development/production) prevent accidentally running debug settings in production. Separate requirements files let CI install only production dependencies for deployments. This is the structure that Django codebases at real companies use.",
      mistake:
        "Putting all models in a single models.py at the project root or in a single app. A 1,500-line models.py file with User, Product, Category, Order, OrderItem, Review, Coupon, and Notification is unmaintainable. Separate by domain: accounts app (User), products app (Product, Category, Tag), orders app (Order, OrderItem), etc. Each app should be conceptually independent.",
    },
  ],

  // ── SECTION 5: PREREQUISITES ─────────────────────────────────────
  prerequisites: [
    { item: "Python 3.11+ Fundamentals", done: false, note: "Mandatory — Django is Python; all Django code is Python code", detail: "Functions, classes, decorators, list comprehensions, context managers (with statement), modules and packages, virtual environments. A minimum of 4 weeks writing Python before starting Django is strongly recommended. Django's ORM uses Python class syntax; its views are Python functions or classes; its forms are Python classes." },
    { item: "HTML and CSS Basics", done: true, note: "For writing Django templates and understanding rendered output", detail: "HTML document structure, semantic elements, forms (input, select, textarea, button), and enough CSS to style a simple page. Django's template engine generates HTML — you need to understand what you're generating." },
    { item: "SQL and Relational Database Basics", done: false, note: "Django's ORM generates SQL — understanding SQL makes ORM queries intuitive", detail: "SELECT, FROM, WHERE, JOIN (INNER, LEFT), GROUP BY, ORDER BY, INSERT, UPDATE, DELETE. When Django's ORM generates slow queries, you debug with SQL. Install PostgreSQL locally or use Django's default SQLite for development." },
    { item: "HTTP Fundamentals", done: false, note: "Django is an HTTP framework — understanding the protocol is required", detail: "HTTP methods (GET, POST, PUT, DELETE), status codes (200, 201, 400, 401, 403, 404, 500), request headers (Content-Type, Authorization), URL structure, cookies, and sessions. Every Django view receives an HTTP request and returns an HTTP response." },
    { item: "Virtual Environments and pip", done: false, note: "All Django projects must run in isolated virtual environments", detail: "python -m venv venv, source venv/bin/activate, pip install django, pip freeze > requirements.txt. Django and its dependencies are installed via pip into a project-specific virtual environment — never into the global Python." },
    { item: "Git and Command Line", done: true, note: "Django's manage.py commands run in the terminal; Git manages project versions", detail: "manage.py commands (startproject, startapp, makemigrations, migrate, runserver, shell, collectstatic), terminal navigation, and git workflows. Django development is command-line-centric — you'll run manage.py commands dozens of times per day." },
    { item: "JSON and REST API Basics", done: true, note: "Required for Django REST Framework — the most common Django extension", detail: "What JSON is, how it represents data (objects, arrays, strings, numbers), and what REST APIs do. Once you know Django's template-based views, DRF adds the JSON API layer on top — you'll need to understand what JSON requests and responses look like." },
  ],

  // ── SECTION 6: ROADMAP ───────────────────────────────────────────
  roadmap: [
    {
      phase: "Beginner",
      label: "01",
      duration: "Weeks 1–6",
      color: "emerald",
      topics: [
        "Django installation and project creation — django-admin startproject, manage.py startapp",
        "Project structure — settings.py, urls.py, wsgi.py, apps.py, manage.py",
        "Django settings — INSTALLED_APPS, DATABASES, TEMPLATES, STATIC_URL, SECRET_KEY",
        "Models basics — fields (CharField, IntegerField, DateTimeField, ForeignKey, ManyToMany), Meta class",
        "Migrations — makemigrations, migrate, migration files, squashmigrations",
        "Django ORM basics — create(), get(), filter(), exclude(), all(), order_by(), delete()",
        "Django shell — python manage.py shell, testing ORM queries interactively",
        "Function-based views (FBV) — HttpRequest, HttpResponse, render, redirect, get_object_or_404",
        "URL patterns — path(), include(), URL namespacing, path converters (<int:pk>, <slug:slug>)",
        "Django templates — template language, variables, tags (for, if, include, extends, block), filters",
        "Template inheritance — base.html, {% extends %}, {% block %}, {% include %}",
        "Static files — STATICFILES_DIRS, STATIC_URL, {% load static %}, {% static 'path' %}",
        "Django forms — Form, ModelForm, form rendering in templates, form validation",
        "django.contrib.admin — register(), ModelAdmin basics, list_display",
        "Django dev server — runserver, DEBUG=True, error pages",
      ],
      buildProjects: [
        "Blog application: posts with title, content, author, published date — full CRUD with templates, no auth yet",
        "To-do list: tasks with title, completed flag, due date — ModelForm, FBV CRUD, template rendering",
        "Book catalog: books, authors, categories — ForeignKey relationships, template filters, admin registration",
      ],
    },
    {
      phase: "Intermediate",
      label: "02",
      duration: "Weeks 7–15",
      color: "primary",
      topics: [
        "Authentication — django.contrib.auth, AbstractUser, LoginView, LogoutView, login_required decorator",
        "Class-based views (CBV) — ListView, DetailView, CreateView, UpdateView, DeleteView",
        "Mixins — LoginRequiredMixin, UserPassesTestMixin, PermissionRequiredMixin",
        "Advanced ORM — select_related, prefetch_related, annotate, aggregate, Q objects, F expressions",
        "Django REST Framework (DRF) — Serializers, ModelSerializer, APIView, GenericAPIView, ViewSet",
        "DRF authentication — Token auth, JWT with simplejwt, session auth",
        "DRF permissions — IsAuthenticated, IsAuthenticatedOrReadOnly, custom permissions",
        "DRF filtering, pagination, and throttling — PageNumberPagination, django-filter",
        "File uploads — ImageField, FileField, Pillow, upload_to, serving media files",
        "Django signals — post_save, pre_save, post_delete, custom signals",
        "Custom management commands — BaseCommand, add_arguments, handle()",
        "Email — send_mail, EmailMessage, HTML emails, email backends (console, SMTP)",
        "Environment variables — python-dotenv or django-environ, separating config from code",
        "Testing — TestCase, Client, APIClient, fixtures, factory_boy, coverage.py",
        "PostgreSQL — installing psycopg2, migrating from SQLite, DATABASES config",
      ],
      buildProjects: [
        "E-commerce product catalog: Auth, DRF API, image upload, search, pagination, admin panel with custom display",
        "Blog platform with comments: AbstractUser, DRF API for React frontend, JWT auth, tag system, rich text editor",
        "Job board: company posts jobs, candidates apply with CV upload, admin manages applications, email notifications",
        "Social media feed: User follow/unfollow, post CRUD, like system, timeline query optimization with select_related",
      ],
    },
    {
      phase: "Advanced",
      label: "03",
      duration: "Weeks 16–26+",
      color: "purple",
      topics: [
        "Celery + Redis — task queue setup, @shared_task, .delay(), .apply_async(), Celery Beat for scheduling",
        "Advanced caching — Redis cache backend, cache_page, low-level cache API, template fragment cache",
        "Django Channels — WebSockets, ASGI, real-time features (chat, live notifications)",
        "Custom middleware — writing process_request / process_response middleware classes",
        "Multi-tenancy — per-tenant schemas with django-tenants or row-level isolation patterns",
        "Payment integration — Razorpay or Stripe with Django: webhooks, order lifecycle, idempotency",
        "Elasticsearch with django-elasticsearch-dsl — full-text search for product catalogs and content",
        "API versioning — URL versioning (/api/v1/, /api/v2/), header versioning, migration strategies",
        "Docker + docker-compose — containerizing Django + PostgreSQL + Redis + Celery for local dev",
        "Deployment — Gunicorn, Nginx, PostgreSQL on Railway/Render; environment variables, collectstatic",
        "CI/CD with GitHub Actions — run tests, linting, collectstatic, auto-deploy on push to main",
        "Advanced testing — pytest-django, factory_boy, Faker, mock, integration tests with APIClient",
        "Performance profiling — Django Debug Toolbar, query analysis, EXPLAIN ANALYZE in PostgreSQL",
        "Sentry — error monitoring and alerting for production Django applications",
        "django-storages + AWS S3 — cloud media file storage for production deployments",
      ],
      buildProjects: [
        "Full e-commerce platform: DRF API, JWT auth, Celery email tasks, Redis caching, Razorpay payments, admin dashboard, Docker, deployed",
        "Real-time chat application: Django Channels WebSockets, Redis channel layer, user presence, message history",
        "Multi-tenant SaaS: Separate tenant schemas, subscription plans with Stripe, feature gating, per-tenant admin panels",
      ],
    },
  ],

  // ── SECTION 7: USE CASES ─────────────────────────────────────────
  useCases: [
    { num: "01", title: "E-Commerce and Marketplace Platforms", body: "Product catalogs with thousands of SKUs, shopping cart management, order workflows, payment gateway integration (Razorpay, Stripe), inventory management, seller dashboards, and customer support admin panels — Django's ORM, admin panel, and Celery task queue make it the default choice for Indian e-commerce startups and D2C brands that need to go from product to production quickly." },
    { num: "02", title: "SaaS Web Applications", body: "Multi-tenant business applications — CRM systems, project management tools, HR platforms, accounting software, and analytics dashboards — are Django's natural habitat. Django's app system enables clean multi-tenant architecture. DRF provides the API layer. Celery handles background processing. The admin panel provides an operations interface. Django powers hundreds of Indian B2B SaaS products." },
    { num: "03", title: "Content Management Systems and Publishing Platforms", body: "News portals, media companies, educational content platforms, and corporate websites use Django for its templating system, admin-based content editing, rich text field support, and static file management. Django powers The Washington Post, National Geographic, and numerous Indian news and education portals. Wagtail and django-cms extend Django into production-grade CMS platforms." },
    { num: "04", title: "Fintech and Banking Backends", body: "Transaction processing APIs, KYC verification portals, loan origination systems, investment platforms, and financial reporting dashboards benefit from Django's security defaults, database migration discipline, and audit-trail-friendly ORM. Django's built-in CSRF protection, SQL injection prevention, and session security make it a responsible choice for financial data handling." },
    { num: "05", title: "Healthcare and Government Digital Services", body: "Patient portals, appointment booking systems, health record management, and government service portals use Django for its compliance-friendly security defaults, admin panel for operations teams, and straightforward form handling for complex government data collection requirements. Django's stability and long-term support make it attractive for public sector projects with multi-year maintenance horizons." },
    { num: "06", title: "Social Networking and Community Platforms", body: "User profiles, follow systems, content feeds, comments, reactions, notifications, direct messaging, and content moderation — Django's User model, ORM relationships, signals for notifications, and Channels for real-time features cover the entire social platform feature set. India's ed-tech and community platforms frequently choose Django for this reason." },
    { num: "07", title: "API Backends for Mobile and SPA Applications", body: "The most common Django use case in 2026: a DRF REST API consumed by a React, Angular, or Vue frontend or a Flutter/React Native mobile app. Django handles the data layer and business logic. DRF exposes it as a typed, documented, throttled REST API. The admin panel provides the operations interface. This Django + DRF + React architecture powers hundreds of Indian product company backends." },
  ],

  // ── SECTION 8: PROJECTS ──────────────────────────────────────────
  projects: {
    beginner: [
      { name: "Blog Application", desc: "Create, read, update, delete blog posts with title, content, author, and published date. Template-based CRUD. Category filtering. No auth.", teaches: "Django models, ORM CRUD, FBVs, templates, URL routing, Django admin registration, static files, ModelForm" },
      { name: "To-Do List with Categories", desc: "Tasks with title, completion status, due date, and category. Full CRUD via templates. Mark complete via a toggle view. Filter by category.", teaches: "ModelForm, FBV patterns, redirect, get_object_or_404, template inheritance, Django template tags and filters" },
      { name: "Book Library Catalog", desc: "Books with authors (ForeignKey), genres (ManyToMany), ratings, and cover image upload. Browse by genre. Search by title and author.", teaches: "ForeignKey and ManyToMany relationships, ImageField with Pillow, template filters, URL namespacing, select_related" },
      { name: "Restaurant Menu with Admin", desc: "Menu items with category, price, image, and availability. Admin panel for restaurant owner to manage items. Public-facing menu template.", teaches: "Django admin customization (list_display, list_filter, search_fields), ImageField, CSS styling in templates, boolean field toggle" },
    ],
    intermediate: [
      { name: "E-Commerce Product Catalog with DRF API", desc: "Products, categories, reviews. JWT auth. Image uploads to Cloudinary. DRF ViewSet API with filtering, search, pagination. Admin panel with custom ModelAdmin.", teaches: "DRF, JWT simplejwt, ModelViewSet, Router, Serializer validation, custom permissions, django-filter, admin customization" },
      { name: "Job Board with Email Notifications", desc: "Companies post jobs, candidates register and apply with resume PDF upload. Admin reviews applications. Status update emails via Celery.", teaches: "AbstractUser with roles, FileField, Celery + Redis for email tasks, ModelForm, DRF API, admin with inlines, signals" },
      { name: "Blog Platform with Comments and Tags", desc: "Auth users create posts with tags, rich text, and cover image. Readers comment. Like system. Pagination. DRF API for React frontend.", teaches: "Full auth flow, ManyToMany tags, DRF nested serializers, queryset optimization with select_related + prefetch_related, signals for notifications" },
      { name: "Social Media Feed (Mini-Twitter)", desc: "User profiles, follow/unfollow, post feed showing followed users' posts, likes, reposts, hashtags. Real-time like count update.", teaches: "Complex ORM queries (feed aggregation), Q objects, annotate, CBVs, AbstractUser, follow relationship modeling" },
    ],
    advanced: [
      { name: "Full E-Commerce Platform with Payments", desc: "Complete shopping flow — products, cart, Razorpay/Stripe checkout with webhooks, order lifecycle management, email confirmation via Celery, inventory management, seller dashboard, admin analytics. Redis caching for product catalog.", teaches: "Payment webhooks, Celery tasks, Redis caching, order state machine, Django signals, production deployment with Gunicorn + Nginx" },
      { name: "Multi-Tenant SaaS Platform", desc: "Organizations onboard, invite team members, manage subscription plans via Stripe, access features gated by plan. Per-tenant data isolation. Admin for operations team. Celery for billing workflows.", teaches: "Multi-tenancy architecture, Stripe subscription webhooks, django-environ split settings, feature gating, advanced admin customization" },
      { name: "Real-Time Notification System with Channels", desc: "Django Channels for WebSocket connections, Redis channel layer, real-time notifications across browser tabs, live order status updates, typing indicators for support chat.", teaches: "Django Channels, ASGI, WebSocket consumers, Redis channel layer, async Django views, real-time architecture" },
    ],
  },

  // ── SECTION 9: MISTAKES ──────────────────────────────────────────
  mistakes: [
    {
      title: "Not Extending AbstractUser Before the First Migration",
      explanation: "Django's default User model is embedded deep in the database schema. Replacing it after the initial migration requires a complex and error-prone database surgery — deleting all migrations, dropping all auth tables, and recreating from scratch. Developers who skip this step spend days fixing it later.",
      tip: "On every new Django project, do this before running your first migrate: create an accounts app, define class User(AbstractUser): pass in accounts/models.py, set AUTH_USER_MODEL = 'accounts.User' in settings.py, then run makemigrations and migrate. Even if you never add a custom field, this gives you a concrete User model you can safely extend later.",
    },
    {
      title: "N+1 Query Problem — Accessing FK Attributes in Loops",
      explanation: "for product in Product.objects.all(): print(product.seller.email) — this executes one extra SQL query per product to fetch the seller. With 100 products, that's 101 database queries for one page render. In production with thousands of rows, this is the most common cause of slow Django pages.",
      tip: "Add select_related() for ForeignKey access: Product.objects.select_related('seller', 'category'). Add prefetch_related() for ManyToMany and reverse FK: Product.objects.prefetch_related('tags', 'reviews'). Use Django Debug Toolbar in development to see exactly how many queries each view executes.",
      wrong: "products = Product.objects.all()  # Then: for p in products: print(p.category.name)  // N+1 queries",
      correct: "products = Product.objects.select_related('category', 'seller')  # 1 query with JOIN",
    },
    {
      title: "Using form.save() Without commit=False When Extra Fields Are Needed",
      explanation: "When a model has fields that aren't part of the form — like seller = request.user or created_by = request.user — calling form.save() immediately commits to the database without those fields, causing IntegrityError if they're required.",
      tip: "Always use commit=False when the model has required fields not in the form: instance = form.save(commit=False); instance.seller = request.user; instance.save(). For ManyToMany fields, call form.save_m2m() after the instance.save() call.",
      wrong: "if form.is_valid(): form.save()  # Fails if 'seller' is required but not in form",
      correct: "if form.is_valid(): product = form.save(commit=False); product.seller = request.user; product.save(); form.save_m2m()",
    },
    {
      title: "Hardcoding SECRET_KEY and Database Credentials in settings.py",
      explanation: "SECRET_KEY = 'django-insecure-abc123' committed to a public GitHub repository means any attacker can forge session cookies, CSRF tokens, and password reset links for your application. Database credentials in settings.py means anyone with repo access can access your production database.",
      tip: "Store all secrets in .env files using python-dotenv or django-environ. Set SECRET_KEY = env('SECRET_KEY') and DATABASES = {'default': env.db('DATABASE_URL')}. Add .env to .gitignore immediately. Commit a .env.example with placeholder values. Set real values in your hosting platform's environment variables dashboard.",
    },
    {
      title: "Running Expensive Operations Synchronously in Views",
      explanation: "Sending emails, processing uploaded images, calling third-party APIs, generating PDFs, and sending SMS — all in the view function — means the user waits for every operation before seeing a response. A view that sends 5 emails takes 3–10 seconds. Users abandon pages that take this long.",
      tip: "Move all time-consuming operations to Celery tasks. In the view: call .delay() and return the response immediately. The user sees a fast response; the background worker processes the email or PDF asynchronously. Set up Celery with Redis as the broker — this is not an advanced topic, it's a requirement for any production Django application.",
    },
    {
      title: "Not Using URL Namespaces",
      explanation: "Two Django apps with a view named 'detail' create a name collision in the URL routing. reverse('detail', pk=1) is ambiguous — which app's detail view? This causes silent routing bugs that are extremely hard to track down in larger projects.",
      tip: "Always define app_name in every app's urls.py. Use namespaced URL names everywhere: reverse('products:detail', kwargs={'pk': 1}), {% url 'products:detail' pk=product.pk %}, and redirect('products:list'). This is non-negotiable in any project with more than one app.",
      wrong: "# urls.py (no app_name): urlpatterns = [path('<pk>/', views.detail, name='detail')]",
      correct: "# urls.py: app_name = 'products'; urlpatterns = [path('<pk>/', views.detail, name='detail')]",
    },
    {
      title: "Not Optimizing Django Admin Querysets",
      explanation: "The Django admin's default list view doesn't use select_related — every row in the admin list with a ForeignKey display column fires an extra SQL query. An admin list of 100 products showing category and seller = 201 SQL queries per page load.",
      tip: "Override get_queryset() in every ModelAdmin that displays FK data: def get_queryset(self, request): return super().get_queryset(request).select_related('category', 'seller'). This is one of the most impactful, least-known Django admin optimizations.",
    },
    {
      title: "Mixing Business Logic Into Views",
      explanation: "A view function that fetches data, validates business rules, calculates prices, sends emails, updates inventory, and generates PDFs is 200 lines long, untestable, and unmaintainable. When the same business logic is needed in a management command, Celery task, or API view, it gets duplicated.",
      tip: "Views should only: validate input, call a service function or ORM method, and return a response. Extract business logic into service functions in services.py (or a services/ package): def place_order(user, cart_items) -> Order. Both views and Celery tasks call the same service function. Test services independently of the HTTP layer.",
    },
    {
      title: "Using SQLite in Production",
      explanation: "Django ships with SQLite as the default database for development convenience. SQLite is a file-based database with no concurrent write support, no network access, and no production reliability guarantees. Deployments to Render or Railway that use SQLite will lose data when the container restarts.",
      tip: "Use PostgreSQL in production without exception. Set up a free PostgreSQL instance on Railway, Render, Supabase, or ElephantSQL. Use the DATABASE_URL environment variable pattern with django-environ or dj-database-url. Develop locally with PostgreSQL too — SQLite and PostgreSQL have subtle behavioral differences that cause production surprises.",
    },
    {
      title: "Not Writing Tests",
      explanation: "A Django project with no tests is one migration away from a broken production deployment. Django's ORM migrations change database schema — without tests, you don't know if the migration broke any existing queries. DRF API changes — without tests, you don't know if the endpoint contract changed.",
      tip: "Write at minimum: model tests (field constraints, clean() validators, __str__), view tests (Django TestCase with self.client), and DRF API tests (APIClient, status code and response shape assertions). Use factory_boy to create test data programmatically. Run pytest-django in CI on every pull request.",
    },
    {
      title: "Serving Media Files Through Django in Production",
      explanation: "Django can serve media files (user uploads) in development via django.contrib.staticfiles, but this is single-threaded and blocks the application server. In production, every image request goes through Python — dramatically reducing throughput for even modest traffic.",
      tip: "In production: serve media files via Nginx (if self-hosted) or store them in AWS S3/Cloudinary with django-storages. S3 or Cloudinary with django-storages is the simplest production solution — media files go directly to cloud storage on upload, served directly from the CDN without touching your Django app server.",
    },
    {
      title: "Creating Migrations in Production Without Testing Them First",
      explanation: "Running python manage.py migrate in production with an untested migration that adds a non-nullable column to a table with millions of rows can lock the table for minutes, causing a production outage. Some PostgreSQL migrations require special handling for large tables.",
      tip: "Test all migrations on a copy of production data before running in production. For large tables, use django.db.migrations.RunSQL with concurrent index creation. For non-nullable column additions, always provide a default. Consider zero-downtime migration patterns: add nullable first, backfill with a management command, then add the NOT NULL constraint.",
    },
  ],

  // ── SECTION 10: INTERVIEW QUESTIONS ─────────────────────────────
  interviewQuestions: {
    beginner: [
      { q: "What is Django and what problem does it solve?", a: "Django is a high-level Python web framework that solves the problem of building complete, secure, database-backed web applications quickly. It follows the 'batteries included' philosophy — providing an ORM, admin panel, authentication system, form validation, template engine, and URL routing out of the box. This lets small teams ship production-ready applications without building foundational infrastructure from scratch." },
      { q: "Explain Django's MVT architecture.", a: "Model: Python classes that define the database structure and business rules — Django's ORM converts them to SQL tables. View: Python functions or classes that receive HTTP requests, use Models to query data, and return HTTP responses. Template: HTML files with Django template language tags ({% %}) and variables ({{ }}) that render dynamic HTML. Unlike MVC, Django's 'Controller' is the URL dispatcher itself — it routes requests to the correct view." },
      { q: "What is the Django ORM and why use it instead of raw SQL?", a: "The ORM (Object-Relational Mapper) lets you interact with the database using Python code instead of SQL strings. Product.objects.filter(price__lte=50000) generates SELECT * FROM products WHERE price <= 50000 automatically. Benefits: database-agnostic code (same Python works with PostgreSQL, MySQL, SQLite), automatic SQL injection prevention via parameterized queries, Python objects instead of raw tuples, and migration tracking. Raw SQL is still possible with raw() or cursor.execute() when needed." },
      { q: "What is a Django migration and why is it important?", a: "A migration is a Python file that describes a change to the database schema — adding a table, adding a column, changing a field type. makemigrations creates the migration file from your model changes. migrate applies it to the database. Migrations are version control for your database schema — they track every change, allow rollbacks, and ensure all developers and all environments have the same database structure." },
      { q: "What is the difference between a FunctionBasedView and a ClassBasedView?", a: "FBVs are Python functions: def product_list(request): ... — explicit, readable, and flexible. CBVs are Python classes: class ProductListView(ListView): ... — more reusable, leverage inheritance and mixins, and Django's generic CBVs (ListView, DetailView, CreateView) provide complete CRUD functionality with less code. Use FBVs for complex custom logic; use CBVs for standard CRUD that fits generic patterns." },
      { q: "What is Django's admin panel and how do you register a model with it?", a: "Django admin is an auto-generated CRUD interface for your database models, accessible at /admin/. Register models with @admin.register(Product) decorator on a ModelAdmin class, or admin.site.register(Product). Customize with list_display (visible columns), list_filter (sidebar filters), search_fields (search bar), and prepopulated_fields (auto-fill slug from name)." },
      { q: "What is CSRF and how does Django protect against it?", a: "Cross-Site Request Forgery — an attacker tricks a logged-in user's browser into sending a malicious POST request to your site using the user's active session. Django prevents it with CsrfViewMiddleware (enabled by default) — every HTML form must include {% csrf_token %} which embeds a hidden token. Django validates this token on every POST request, rejecting requests without a valid token." },
      { q: "What is the difference between CharField and TextField in Django models?", a: "CharField requires a max_length parameter and maps to VARCHAR in SQL — use for short strings: names, titles, emails, phone numbers. TextField has no max_length and maps to TEXT — use for long content: blog post body, product description, user bio. In Django admin, CharField renders as a single-line input; TextField renders as a multi-line textarea." },
      { q: "How does Django handle static files and media files?", a: "Static files are CSS, JavaScript, and images bundled with your project code. Configured via STATICFILES_DIRS and STATIC_URL. Run collectstatic to gather all static files for production serving. Media files are user uploads (ImageField, FileField). Configured via MEDIA_ROOT and MEDIA_URL. In development, add url patterns to serve them. In production, serve via Nginx or cloud storage (S3/Cloudinary)." },
      { q: "What is Django's request/response cycle?", a: "HTTP request arrives → WSGI server (Gunicorn) passes to Django → middleware stack processes request top-to-bottom (security, session, auth, CSRF) → URL dispatcher matches pattern → view function/class executes with ORM queries → template renders HTML (or DRF serializer returns JSON) → middleware processes response bottom-to-top → HTTP response returned to client." },
    ],
    intermediate: [
      { q: "Explain the N+1 query problem and how to fix it with Django ORM.", a: "N+1 occurs when you fetch N objects and then access a FK attribute inside a loop — generating 1 initial query + N additional queries. for p in Product.objects.all(): p.seller.email executes 1 + N queries. Fix with select_related('seller') for ForeignKey (single JOIN query) and prefetch_related('tags') for ManyToMany or reverse FK (2 queries total). Use Django Debug Toolbar to detect N+1 in development." },
      { q: "What is Django REST Framework and what are its core components?", a: "DRF is a toolkit for building REST APIs with Django. Core components: Serializers (validate and convert model instances to/from JSON), ViewSets (class-based views for CRUD API endpoints), Routers (auto-generate URL patterns for viewsets), Authentication backends (JWT, Token, Session), Permissions (IsAuthenticated, IsOwnerOrReadOnly), Throttling (rate limiting), Pagination (PageNumberPagination), and Filtering (django-filter integration)." },
      { q: "What is a Django serializer and how does it differ from a Django form?", a: "Both validate data and convert between Python objects and other formats. Forms: validate POST data from HTML forms, render HTML input widgets, save to models. Serializers: validate JSON data from API requests, convert model instances to JSON for API responses, used with DRF. Serializers also handle nested data (related model serialization) and explicit read_only/write_only field configuration that forms don't need." },
      { q: "How do you implement custom permissions in Django REST Framework?", a: "Create a class inheriting permissions.BasePermission and implement has_permission(self, request, view) for view-level checks and has_object_permission(self, request, view, obj) for object-level checks. Return True to allow, False to deny. Example: IsOwnerOrReadOnly returns True for GET requests (read-only), returns True for write methods only if obj.owner == request.user. Apply with permission_classes = [IsAuthenticated, IsOwnerOrReadOnly] on a ViewSet." },
      { q: "What is Django's signal system? Give a real-world example.", a: "Signals are a publish/subscribe mechanism — code can send a signal when something happens, and registered receivers respond. Built-in signals: post_save (after a model is saved), pre_save (before save), post_delete. Example: @receiver(post_save, sender=Order) def send_confirmation_email(sender, instance, created, **kwargs): if created: send_order_confirmation_email.delay(instance.pk). Signals decouple the Order model from email-sending logic." },
      { q: "How do Q objects and F expressions work in Django ORM?", a: "Q objects enable complex filter logic: Product.objects.filter(Q(name__icontains='laptop') | Q(description__icontains='laptop')). Q supports AND (&), OR (|), and NOT (~). F expressions reference a database column in queries without fetching the value to Python: Product.objects.filter(stock__lt=F('min_stock_alert')) compares two columns in SQL. F() is also used for atomic updates: Product.objects.filter(pk=id).update(stock=F('stock') - 1) prevents race conditions." },
      { q: "Explain Django's authentication system — how does login/logout work?", a: "Authentication uses sessions: django.contrib.auth.authenticate() verifies credentials, django.contrib.auth.login(request, user) creates a session and sets SESSION_COOKIE on the response. On subsequent requests, Django's SessionMiddleware loads the session and AuthenticationMiddleware sets request.user. logout(request) flushes the session. AbstractUser lets you extend the User model. For APIs, JWT replaces session cookies — simplejwt issues signed tokens that clients send in the Authorization header." },
      { q: "What is select_related vs prefetch_related and when do you use each?", a: "select_related uses SQL JOIN — fetches the related object in the same query. Use for ForeignKey and OneToOne relationships (single object per row): Product.objects.select_related('category', 'seller'). prefetch_related uses a second SQL query — fetches all related objects and joins them in Python. Use for ManyToMany, reverse ForeignKey, and GenericRelation: Product.objects.prefetch_related('tags', 'reviews'). Rule: ForeignKey → select_related; ManyToMany/reverse FK → prefetch_related." },
      { q: "How do you write tests for a Django REST Framework API?", a: "Use APIClient from rest_framework.test: client = APIClient(). Authenticate with client.force_authenticate(user=user) (for unit tests) or client.post('/api/auth/login/', ...) for integration tests. Call client.get('/api/products/'), client.post('/api/products/', data, format='json'). Assert response.status_code, response.data shape and values. Use TestCase.setUp() with factory_boy to create test data. Run with pytest-django for better output and fixture management." },
      { q: "What is Celery and how does it integrate with Django?", a: "Celery is a distributed task queue. Workers (separate processes) pick up tasks from a message broker (Redis/RabbitMQ) and execute them asynchronously. Integration: create celery.py in project root, configure CELERY_BROKER_URL in settings.py, decorate functions with @shared_task, call task.delay() from views. Celery Beat handles periodic tasks. Use .delay() for fire-and-forget, .apply_async() for delayed or scheduled execution, .get() (with caution) to wait for results." },
      { q: "How do migrations work internally in Django? What happens during migrate?", a: "Each migration file has dependencies (what previous migration it builds on), operations (AddField, CreateModel, RunSQL, etc.), and is Python code that describes schema changes. migrate reads the django_migrations table to find which migrations have been applied, then applies unapplied ones in dependency order. Each operation calls the database backend's schema editor to generate and execute the correct SQL (CREATE TABLE, ALTER TABLE, etc.). Forward migrations run upgrade(); rollback runs downgrade() with the --fake flag." },
    ],
    advanced: [
      { q: "How would you scale a Django application from 1,000 to 1 million users?", a: "Horizontal scaling: multiple Gunicorn workers behind Nginx load balancer, auto-scaled via Docker/Kubernetes. Database: PostgreSQL read replicas for read-heavy queries, PgBouncer for connection pooling. Caching: Redis for database query caching, per-view caching, session storage. CDN: CloudFront/Cloudflare for static/media files. Celery: move background work to separate worker fleet. Async: Django Channels for WebSockets. Database: add indexes on all filter/order fields, optimize slow queries with EXPLAIN ANALYZE. Search: Elasticsearch for product catalog search." },
      { q: "Explain Django Channels and how it enables real-time features.", a: "Django Channels extends Django to handle WebSockets, long polling, and background tasks via an ASGI interface. The channel layer (backed by Redis) routes messages between consumers (WebSocket handler classes, similar to Django views). A WebSocketConsumer defines connect(), disconnect(), and receive() methods. Real-time patterns: broadcast (all connected clients receive event), room-based routing (per-chat-room channel groups), user-specific channels (notify specific user). Use django-channels with Daphne (ASGI server) instead of Gunicorn (WSGI)." },
      { q: "How do you implement multi-tenancy in Django?", a: "Schema isolation: django-tenants creates a separate PostgreSQL schema per tenant — complete data isolation, no cross-tenant leakage, slightly complex routing. Row-level isolation: every model has an organization ForeignKey; a custom middleware sets the tenant from the request domain; a custom manager filters all queries by organization. Schema isolation is more secure and simpler for large enterprises; row-level is simpler to implement for most SaaS products." },
      { q: "How do you handle database migrations for a large production table with millions of rows?", a: "Adding a non-nullable column: first add as nullable (no table lock), backfill with a management command or Celery batch task, then add NOT NULL constraint with a short lock. Adding an index: use CREATE INDEX CONCURRENTLY (PostgreSQL) via RunSQL migration — doesn't lock the table. Renaming a column: add new column, dual-write both old and new, migrate reads, drop old column across three deployments. Always run migrations on a production data copy first. Consider django-postgres-extra for safe migrations." },
      { q: "What is the Django content types framework and what is it used for?", a: "django.contrib.contenttypes provides a GenericForeignKey — a FK that can point to any model. Use cases: a Comment model that can attach to any content type (Article, Product, Video) without separate comment tables per model; a Like model reused across content types; audit log entries pointing to any changed object; notification system where any event type produces a notification. Access: ContentType.objects.get_for_model(Product) returns the ContentType instance for Product." },
      { q: "How do you implement a custom Django authentication backend?", a: "Create a class with authenticate(request, **credentials) method and optionally get_user(user_id). authenticate() returns a user or None. Example: EmailBackend that allows login with email instead of username — queries User.objects.get(email=username). Register in settings: AUTHENTICATION_BACKENDS = ['accounts.backends.EmailBackend', 'django.contrib.auth.backends.ModelBackend']. Django tries backends in order, uses the first that returns a user." },
      { q: "What is Django's cache framework? Explain the different cache backends and when to use each.", a: "Django cache framework provides a unified API (cache.get, cache.set, cache.delete) over multiple backends. Memcached: fast, simple, no persistence — use for pure caching (session data, query results) where loss on restart is acceptable. Redis: fast, persistent, supports expiry, pub/sub, sorted sets — use for caching + Celery broker + Django Channels channel layer (one service). Database: slow, no added value — only for platforms without Redis/Memcached. Filesystem: for development only. Dummy: for testing (all operations are no-ops)." },
      { q: "How would you debug a slow Django API endpoint?", a: "1) Django Debug Toolbar in development — shows query count, query time, and SQL per request. 2) Log slow queries: set LOGGING config to log queries over 100ms. 3) Add query analysis: .explain() on the queryset. 4) EXPLAIN ANALYZE in PostgreSQL directly for the generated SQL. 5) Check for missing indexes on filter/order fields. 6) Check for N+1 queries — add select_related/prefetch_related. 7) Check for non-indexed full-table scans. 8) In production, use Sentry performance monitoring and py-spy sampling profiler." },
      { q: "Explain Django's middleware system and write a custom middleware.", a: "Middleware is a hook into Django's request/response processing. Each middleware can process the request before it reaches the view (__call__ or process_request), and the response after the view returns (process_response). MIDDLEWARE is a list — order matters. Example custom middleware: class RequestLoggingMiddleware: def __init__(self, get_response): self.get_response = get_response; def __call__(self, request): import time; start = time.time(); response = self.get_response(request); duration = time.time() - start; logger.info(f'{request.method} {request.path} {response.status_code} {duration:.3f}s'); return response." },
      { q: "How do you implement full-text search in Django?", a: "PostgreSQL full-text search via django.contrib.postgres.search: SearchVector to index fields, SearchQuery for the query, SearchRank for relevance ordering. Product.objects.annotate(rank=SearchRank(SearchVector('name', 'description'), SearchQuery(q))).filter(rank__gte=0.1).order_by('-rank'). Add SearchVectorField with a trigger or signal for pre-computed search vectors on large tables. For more advanced needs: Elasticsearch with django-elasticsearch-dsl — full-text, faceted search, autocomplete, and analytics across any scale." },
      { q: "What are Django's database transactions and when do you need them?", a: "Transactions ensure a set of database operations all succeed or all roll back atomically. Use cases: place_order() must atomically create the Order AND reduce inventory — if either fails, both revert. Django wraps each request in a transaction by default (ATOMIC_REQUESTS=True) or use @transaction.atomic decorator on specific functions. For long transactions, use transaction.atomic() context manager. Celery tasks should NOT run inside database transactions — database connections are not shared across processes." },
    ],
  },

  // ── SECTION 11: COMPARISON ───────────────────────────────────────
  comparison: {
    headers: ["Feature", "Django", "FastAPI", "Flask"],
    rows: [
      { feature: "Type", react: "Full-stack web framework (batteries included)", vue: "Modern async API framework", angular: "Minimal microframework" },
      { feature: "Philosophy", react: "Opinionated — enforced conventions, everything included", vue: "Fast, typed, async-first, API-focused", angular: "Minimalist — you choose every component" },
      { feature: "Built-in ORM", react: "Yes — powerful Django ORM with migrations", vue: "No — use SQLAlchemy separately", angular: "No — use SQLAlchemy separately" },
      { feature: "Admin Panel", react: "Yes — auto-generated, full CRUD, zero code", vue: "No — build your own or use third-party", angular: "No — build your own or use third-party" },
      { feature: "Authentication", react: "Yes — full session auth, password hashing, reset built-in", vue: "No — implement manually", angular: "No — implement manually" },
      { feature: "REST APIs", react: "Via DRF (Django REST Framework) — mature, feature-complete", vue: "Native — type hints, Pydantic, OpenAPI auto-docs", angular: "Via Flask-RESTful or marshmallow — manual" },
      { feature: "Async Support", react: "ASGI + Django Channels for WebSockets; async views in Django 4.1+", vue: "Native async/await — full async from the ground up", angular: "Limited — Flask is fundamentally synchronous" },
      { feature: "Performance", react: "Good — optimized ORM, caching, async views; slower than FastAPI for pure I/O", vue: "Excellent — near-Node.js throughput on async I/O", angular: "Good — lightweight, low overhead" },
      { feature: "Learning Curve", react: "Moderate-high — many concepts (ORM, admin, CBVs, DRF, migrations)", vue: "Moderate — Python types, Pydantic, async model", angular: "Low — minimal, just Python and HTTP basics" },
      { feature: "Best For", react: "Full web apps, admin-heavy tools, SaaS backends, CMS, fintech", vue: "API-only backends, ML serving, microservices, high-concurrency", angular: "Prototypes, microservices, simple APIs, learning" },
      { feature: "Job Market India (2026)", react: "Highest — most Python backend job listings mention Django", vue: "Fast-growing — ML serving, modern API roles", angular: "Lower — mostly small projects and prototypes" },
    ],
  },

  // ── SECTION 12: PROS & CONS ──────────────────────────────────────
  pros: [
    "Batteries included — ORM, admin, auth, sessions, forms, email, caching, sitemaps all built-in; zero third-party library decisions for foundational functionality",
    "Auto-generated admin panel — the most underrated feature in web frameworks; replaces weeks of CRUD interface development with thirty minutes of ModelAdmin configuration",
    "Security by default — CSRF protection, SQL injection prevention, XSS-safe templates, clickjacking protection, HTTPS enforcement, and secure password hashing all enabled by default",
    "Mature and battle-tested — Django has powered Instagram, Pinterest, and Disqus at internet scale for over a decade; its security vulnerabilities and performance bottlenecks are well-understood and solved",
    "Excellent documentation — Django's official documentation is considered the best in any web framework: comprehensive, well-organized, with real-world examples for every feature",
    "DRF adds complete API layer — Django REST Framework transforms Django into a full API backend with serializers, viewsets, authentication, throttling, and auto-generated Swagger documentation",
    "Highest Python backend demand in India — Django appears in more Python backend job descriptions than any other Python web framework on Naukri and LinkedIn India",
    "Migrations system — django-migrations is the most mature database schema versioning system in any web framework; tracks changes, supports rollbacks, and handles complex schema evolution",
  ],
  cons: [
    "Monolithic by default — Django's structure encourages a single large application rather than microservices; decomposing a large Django app into services requires significant architectural work",
    "Steep initial learning curve — ORM, admin, CBVs, forms, migrations, DRF, signals, and middleware all at once overwhelms beginners who haven't mastered Python first",
    "Synchronous core — Django was designed for synchronous request handling; while async views exist (Django 4.1+), the ORM is not fully async without workarounds, making FastAPI the better choice for pure async API workloads",
    "Over-engineered for simple APIs — if you only need a JSON API without an admin panel, forms, or templates, Django's overhead is unnecessary; FastAPI is leaner and faster for this use case",
    "Template system less powerful for SPAs — Django templates are excellent for server-side rendering but become unused overhead when the frontend is React or Angular consuming a DRF API",
    "Admin panel is not production UI — the Django admin is an internal operations tool; using it as a customer-facing dashboard requires significant customization that often becomes more work than building a custom interface",
    "Database migration complexity at scale — while migrations are Django's strength for routine changes, complex migrations on large production tables (renaming columns, adding indexes, changing field types) require careful zero-downtime planning",
  ],

  // ── SECTION 13: FUTURE SCOPE ─────────────────────────────────────
  futureScope: [
    "Django's async story is maturing rapidly. Django 4.1 introduced async class-based views. Django 5.x is progressively adding async ORM support (async model saves, async queryset evaluation). The eventual fully-async Django — where models, views, and middleware all support async/await natively — will allow Django applications to match FastAPI's throughput without switching frameworks. Python developers who invest in Django now will seamlessly adopt async Django as it matures, rather than rewriting in FastAPI.",
    "Django REST Framework's dominance in the Indian Python backend market is accelerating, not declining, despite FastAPI's rise. DRF's maturity — thorough documentation, stable versioning, battle-tested authentication backends, and comprehensive filtering/pagination/throttling — makes it the responsible default for production API development at companies that need reliability over cutting-edge performance. DRF will remain the most-requested Python API skill in Indian job descriptions through at least 2028.",
    "Django's role in the AI-integrated backend is growing. AI-powered Django applications — chatbot admin interfaces, AI-assisted content moderation in the admin, LLM-generated product descriptions, RAG-powered customer support APIs — are being built with Django as the infrastructure layer and Python AI libraries (LangChain, Anthropic SDK) as the AI layer. A Django developer who adds LLM API integration skills has the most complete profile for India's enterprise AI adoption wave.",
    "Django's position in India's government and public sector technology stack is uniquely strong. The National Informatics Centre (NIC) has standardized on Python/Django for several digital India initiatives. State government portal modernization projects, which will run through 2026–2030 under the Digital India programme, predominantly use Django. IT service companies delivering these projects hire Django developers in volume. This creates a government-driven demand floor for Django talent that is immune to startup hiring cycles.",
    "Wagtail — the open-source Django CMS built on top of Django — is seeing explosive adoption among India's media companies, educational publishers, and corporate website teams. Wagtail is listed on Naukri alongside Django in an increasing number of developer job descriptions. Django developers who add Wagtail to their skills have a specialized, less competitive market position in the content management and digital publishing segment, where Wagtail's structured content model and headless CMS capabilities are increasingly preferred over WordPress.",
  ],

  // ── SECTION 14: ACTION PLAN ──────────────────────────────────────
  actionPlan: [
    { week: "Week 1–3", title: "Python First — Django Cannot Be Learned Without It", desc: "Before touching Django, ensure you are comfortable writing Python: functions with *args/**kwargs, classes with __init__ and methods, decorators, list comprehensions, context managers, and modules. Build one Python project with classes — a bank account simulator or a library management CLI. Django views are Python functions. Django models are Python classes. Django decorators (@login_required, @admin.register) are Python decorators. Without Python fluency, Django syntax will be opaque." },
    { week: "Week 4–7", title: "Django Fundamentals — Models, Views, Templates, Admin", desc: "Work through Django's official tutorial (polls app) completely. Then immediately rebuild it from memory as a simple blog: define Post and Category models, makemigrations and migrate, write FBV list and detail views, wire URLs, write templates with extends and block, register models in admin. Run manage.py shell and practice every ORM query type: create, get, filter, exclude, order_by, delete. The Django shell is your most important learning tool in this phase." },
    { week: "Week 8–11", title: "Authentication, Forms, and Class-Based Views", desc: "Implement the full registration and login flow using AbstractUser (extend it first — always), LoginRequiredMixin, and UserPassesTestMixin. Build three ModelForms with clean() validation methods. Rewrite your FBVs as CBVs using ListView, DetailView, CreateView, UpdateView, DeleteView. Add file upload (ImageField + Pillow) to one model. Practice URL namespacing in every app. By the end of this phase, you should be able to build a complete CRUD web application with auth from scratch without referencing documentation for every step." },
    { week: "Week 12–16", title: "Django REST Framework — Add the API Layer", desc: "Install and configure DRF. Build serializers for your existing models — start with ModelSerializer, then add nested serializers and SerializerMethodFields. Rewrite your CRUD views as ModelViewSets. Configure a DefaultRouter. Add JWT authentication with simplejwt. Add custom permissions (IsOwnerOrReadOnly). Add pagination and filtering (django-filter). Test every endpoint in Postman before connecting any frontend. DRF fluency is the skill that takes Django from 'web framework knowledge' to 'full backend developer' on a resume." },
    { week: "Week 17–21", title: "Build and Deploy a Real Portfolio Project", desc: "Build the E-Commerce Product Catalog or Job Board from the intermediate projects list — full auth, DRF API, image upload, Celery email tasks, Redis caching, admin panel with custom ModelAdmin. Deploy on Railway or Render: PostgreSQL database, environment variables in the hosting dashboard, run collectstatic, Gunicorn as the server. Write a GitHub README with the live URL, tech stack, and screenshots. A deployed Django project with a live URL is the dividing line between a learner and a candidate. Do not skip deployment." },
    { week: "Week 22+", title: "The Job Push — Apply With Deployed Code and Deep ORM Knowledge", desc: "Apply to 10 Django or Python backend roles per week — targeting startups, fintech companies, IT services firms, and SaaS products. Study Django interview questions by level: fundamentals (MVT, migrations, ORM basics), intermediate (N+1 problem, select_related, DRF serializers, authentication, signals), and advanced (scaling Django, Celery, caching, multi-tenancy). The most common take-home task for Django roles is: build a REST API for a simple domain (products, tasks, users) — practice this until you can build a clean, tested DRF API in 3 hours. Most Django job searches with a deployed project and strong ORM knowledge close within 6–10 weeks of consistent applications." },
  ],
};
