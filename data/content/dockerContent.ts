import type { TechContent } from './types';

export const dockerContent: TechContent = {
  techId: 'docker',
  readTime: '30–35 min',
  difficulty: 'Beginner to Advanced',
  lastUpdated: '2026',

  // ── OPENING HOOK ─────────────────────────────────────────────────
  openingHook:
    "If there is one skill that every software developer — backend, frontend, full-stack, DevOps, or data engineer — is expected to know in 2026 regardless of their specialization, it is Docker. Not Kubernetes (that comes later). Not cloud certifications (valuable but layered on top). Docker. The ability to containerize an application, write a Dockerfile, spin up a multi-service environment with docker-compose, and push an image to a registry is now assumed knowledge at every Indian product company, every IT services firm delivering cloud projects, and every startup that runs its application anywhere other than a developer's laptop. The reason is simple: Docker solved the single most expensive problem in software deployment — 'it works on my machine'. Before Docker, a developer's local environment differed from staging, which differed from production. Dependencies mismatched. Configuration diverged. Debugging a production issue meant hoping you could reproduce it locally. Docker made environments reproducible by packaging the application and all its dependencies into a container — a self-contained, runnable unit that behaves identically on a developer's MacBook, a CI server in GitHub Actions, and a production server in AWS or GCP. In 2026, Docker knowledge is not a DevOps-only skill. It is the minimum viable deployment literacy for any developer who wants to ship code that actually runs. A developer who can containerize their application, wire up a database and Redis with docker-compose, and push to a container registry is immediately more hireable than one who cannot — at every level, in every domain. This is the complete, no-filler Docker roadmap from zero to production-confident.",

  // ── SECTION 1: INTRODUCTION ──────────────────────────────────────
  introText: [
    "Docker is an open-source platform for building, shipping, and running applications inside containers. A container is a lightweight, isolated, runnable unit that packages an application together with everything it needs to run — the runtime, libraries, configuration, and dependencies — into a single standardized artifact. Unlike a virtual machine (VM), which virtualizes an entire operating system including its kernel, a Docker container shares the host operating system's kernel and virtualizes only the user space. This makes containers start in milliseconds instead of minutes, use megabytes of memory instead of gigabytes, and run dozens on the same machine where a VM would run two. Docker was created by Solomon Hykes and released as an open-source project in 2013. Within three years it became the default containerization standard for the entire industry.",
    "The problem Docker solves is environmental inconsistency — the chronic mismatch between where software is developed, tested, and run. Before Docker, a Python 3.9 application developed on a MacBook with one version of a library would be deployed to a CentOS server running Python 3.7 with a different version of that library. The result was deployment failures, configuration drift, and the infamous 'works on my machine' excuse that cost engineering teams days of debugging per deployment. Docker packages the application, its runtime, its libraries, and its system configuration into an image — an immutable, versioned, portable artifact. That image runs identically on every machine that has Docker installed: developer laptops, CI servers, staging environments, and production clusters. The container itself is the unit of deployment, not a set of instructions for how to configure a server.",
    "Docker is not just a developer convenience tool — it is the foundational abstraction of modern cloud computing. Every major cloud platform — AWS ECS, AWS EKS, Google Cloud Run, Google GKE, Azure Container Instances, Azure AKS — deploys applications as Docker containers. Kubernetes, the dominant container orchestration platform, orchestrates Docker containers. GitHub Actions, GitLab CI, and every modern CI/CD platform run jobs inside Docker containers. Serverless platforms like AWS Lambda now support container images. In India's 2026 technology landscape, Docker knowledge is the prerequisite to cloud deployment, Kubernetes, CI/CD, microservices architecture, and DevOps as a discipline. It is not optional for any developer who intends to deploy software professionally.",
  ],

  realWorldUsages: [
    "Netflix — runs thousands of containerized microservices on Docker; Docker enables Netflix's engineering teams to deploy independently without coordinating shared server environments",
    "Uber — containerized their entire microservices fleet with Docker; reduced deployment times from hours to minutes and eliminated environment-related deployment failures",
    "Spotify — uses Docker containers for their microservices and data pipelines; Docker enabled Spotify to scale engineering teams to 200+ services with consistent deployment practices",
    "PayPal — migrated from a monolithic application to containerized microservices using Docker; reduced deployment failures by 90% and improved developer productivity significantly",
    "Google — uses container technology (Borg, the predecessor to Kubernetes) for everything; Google open-sourced Kubernetes which orchestrates Docker containers",
    "Swiggy and Zomato — containerized backends for their delivery and restaurant management microservices; Docker enables independent scaling of order processing, notifications, and analytics services",
    "Razorpay and PayTM — payment processing services, fraud detection APIs, and dashboard backends run in containers for consistent, auditable deployments",
    "TCS, Infosys, Wipro — containerize applications for client delivery projects across banking, insurance, and government sectors; Docker is the standard packaging format in enterprise DevOps pipelines",
    "ISRO and DRDO — use containerized environments for reproducible scientific computing and simulation workloads where exact software versions must be documented and reproduced years later",
    "Indian startups — virtually every Series A and above Indian startup runs its backend services as Docker containers on AWS, GCP, or Azure cloud infrastructure",
  ],

  // ── SECTION 2: WHY LEARN ─────────────────────────────────────────
  whyLearn: {
    demand:
      "Search any backend, DevOps, full-stack, or data engineering job description on Naukri or LinkedIn India in 2026 and Docker appears in over 70% of them — not as a nice-to-have but as a baseline expectation. This is because Docker is not a role-specific skill: backend developers use it to containerize APIs, data engineers use it to package pipelines, ML engineers use it to serve models, and DevOps engineers use it to build CI/CD systems. The only developer who doesn't need Docker is one who never deploys code to any environment other than their own laptop. In practice, that developer doesn't exist in professional software engineering. Docker is the lingua franca of application packaging — the universal format that every cloud platform, every CI/CD pipeline, and every orchestration system speaks. Knowing Docker is not a DevOps specialization in 2026; it is the minimum viable deployment literacy for any technical role.",
    jobRoles: [
      { role: "DevOps Engineer", desc: "The most Docker-intensive role — writes Dockerfiles, manages container registries, configures docker-compose for local dev, builds CI/CD pipelines with Docker, and manages container deployments on cloud platforms." },
      { role: "Backend Developer", desc: "Containerizes APIs (Django, FastAPI, Node.js, Spring Boot), writes docker-compose.yml for local development with database and cache, and understands how their application runs in production containers." },
      { role: "Site Reliability Engineer (SRE)", desc: "Manages container platforms (ECS, GKE, AKS), monitors containerized workloads, debugs container failures, and designs deployment strategies (blue-green, canary) for containerized services." },
      { role: "Cloud Engineer / Platform Engineer", desc: "Builds and maintains the container infrastructure — registries, orchestration clusters, networking, auto-scaling, and security policies for containerized workloads across cloud providers." },
      { role: "Data Engineer / MLOps Engineer", desc: "Packages data pipelines, ML training jobs, and model serving APIs in Docker containers for reproducible, portable execution on any compute platform — local, cloud VM, or Kubernetes." },
      { role: "Full-Stack Developer", desc: "Uses Docker Compose to run a complete local development environment (frontend, backend, database, cache, message queue) with a single command — eliminating onboarding friction for new team members." },
    ],
    whyCompanies: [
      { reason: "Eliminates environment-related failures", detail: "The container is the exact same artifact that passed CI tests and runs in production. 'Works in CI, fails in production' becomes impossible when the same image runs everywhere." },
      { reason: "Dramatically speeds up developer onboarding", detail: "A new engineer clones a repo, runs docker-compose up, and has a full running environment in minutes instead of days of dependency installation and configuration." },
      { reason: "Enables microservices architecture", detail: "Docker makes independent service deployment practical — each service has its own container, its own dependencies, and its own deployment lifecycle. Teams scale independently without coordination." },
      { reason: "Required for Kubernetes and cloud-native", detail: "Every container orchestration platform — Kubernetes, ECS, Cloud Run, Azure Container Apps — deploys Docker containers. Docker is the prerequisite to every cloud-native deployment model." },
    ],
    salaryRange: "₹5 LPA – ₹10 LPA (Freshers with Docker in portfolio) | ₹10 LPA – ₹25 LPA (Mid-Level DevOps/Backend, 2–4 years) | ₹25 LPA – ₹60 LPA (Senior SRE/Platform/Cloud, 4+ years)",
    careerNote:
      "Docker is not the destination — it is the gateway. Every high-value infrastructure role in 2026 starts with Docker and builds on it: Kubernetes (container orchestration), Helm (Kubernetes package manager), Terraform (infrastructure as code), ArgoCD (GitOps deployment), Prometheus + Grafana (container monitoring), and cloud-provider-specific container services (AWS ECS, GCP Cloud Run, Azure Container Apps). A developer who knows Docker deeply is one learning step away from every cloud-native technology. Senior platform engineers and SREs with Kubernetes expertise on top of Docker regularly earn ₹40–60 LPA at Indian product companies and ₹60–100 LPA at MNCs and global product companies with India offices.",
  },

  // ── SECTION 3: HOW IT WORKS ──────────────────────────────────────
  howItWorks: {
    intro:
      "Think of Docker like a standardized shipping container system for software. Before shipping containers, every shipment was different — different sizes, different loading procedures, different vehicles required. One shipping container standard transformed global trade: the same container can be loaded onto any ship, any truck, any crane. Docker does the same for software: instead of a different installation procedure for every application on every server, you have one standardized container format that runs on any machine with Docker installed. The Dockerfile is the blueprint for building the container. The image is the built, immutable shipping container. The running container is the container in transit — your application running in production.",
    vdomSteps: [
      { num: "1", title: "You Write a Dockerfile — the Build Blueprint", text: "A Dockerfile is a text file containing instructions for building a Docker image. Each instruction (FROM, RUN, COPY, CMD, EXPOSE, ENV) creates a layer in the final image. FROM specifies the base image (python:3.12-slim, node:20-alpine). RUN executes shell commands during build (installing dependencies). COPY adds your source code into the image. CMD specifies the default command to run when the container starts." },
      { num: "2", title: "Docker Build Creates an Image — the Immutable Artifact", text: "docker build -t myapp:1.0 . reads the Dockerfile instruction by instruction, executing each step to produce a layered image. Each layer is cached — if only your source code changed (the last COPY step), Docker reuses all previous layers (base OS, system packages, Python packages) and only rebuilds from the changed layer forward. The result is an immutable image stored in Docker's local image cache." },
      { num: "3", title: "Container Registry Stores and Distributes Images", text: "Docker Hub, AWS ECR, Google Artifact Registry, and GitHub Container Registry are registries — version-controlled repositories for Docker images. docker push uploads your image. docker pull downloads it. CI/CD pipelines push images after successful tests. Deployment platforms pull the image to run. The registry is the distribution mechanism that decouples build from deployment." },
      { num: "4", title: "Docker Run Creates a Container — the Running Instance", text: "docker run myapp:1.0 creates a container from the image — a running, isolated process with its own filesystem (from the image), its own network namespace, and its own process space. You can run multiple containers from the same image simultaneously. The container is isolated from the host and from other containers by Linux kernel features: namespaces (process, network, filesystem isolation) and cgroups (CPU/memory limits)." },
      { num: "5", title: "Docker Compose Orchestrates Multiple Containers", text: "Real applications need multiple services — a web server, a database, a cache, a message queue, a background worker. Docker Compose defines all of these in a single docker-compose.yml file and starts them together with docker compose up. Compose creates an internal network so services can communicate by name (the database is reachable at db:5432, Redis at redis:6379). This is how every team runs their full application stack locally." },
    ],
    componentCode: `# THE DOCKER WORKFLOW — from code to running container

# ── Step 1: Dockerfile ────────────────────────────────────────────────
# Build a production-ready Django application image

# Base image — official Python slim (smaller than full debian)
FROM python:3.12-slim

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    PYTHONFAULTHANDLER=1 \
    PORT=8000

# Set working directory inside the container
WORKDIR /app

# Install system dependencies first (cached if requirements.txt unchanged)
RUN apt-get update && apt-get install -y --no-install-recommends \
    gcc \
    libpq-dev \
    && rm -rf /var/lib/apt/lists/*

# Install Python dependencies — COPY requirements first for layer caching
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy application source code
COPY . .

# Collect static files
RUN python manage.py collectstatic --no-input

# Create non-root user for security
RUN addgroup --system appgroup && adduser --system --ingroup appgroup appuser
USER appuser

# Expose the port the app runs on
EXPOSE 8000

# Health check — Docker can monitor if the container is healthy
HEALTHCHECK --interval=30s --timeout=10s --start-period=60s --retries=3 \
    CMD curl -f http://localhost:8000/health/ || exit 1

# Default command — overridable at runtime
CMD ["gunicorn", "myproject.wsgi:application", "--bind", "0.0.0.0:8000", "--workers", "4"]

# ── Step 2: .dockerignore ─────────────────────────────────────────────
# .dockerignore — exclude files from the build context (speeds up builds)
# .git
# .venv
# __pycache__
# *.pyc
# *.pyo
# .env
# .env.*
# tests/
# docs/
# *.md
# node_modules/
# .DS_Store

# ── Step 3: docker-compose.yml ────────────────────────────────────────
# version: '3.9'
# services:
#   web:
#     build: .
#     ports:
#       - "8000:8000"
#     environment:
#       - DATABASE_URL=postgresql://postgres:password@db:5432/mydb
#     depends_on:
#       db:
#         condition: service_healthy
#   db:
#     image: postgres:16-alpine
#     environment:
#       - POSTGRES_DB=mydb
#       - POSTGRES_USER=postgres
#       - POSTGRES_PASSWORD=password
#     healthcheck:
#       test: ["CMD-SHELL", "pg_isready -U postgres"]
#       interval: 10s
#       timeout: 5s
#       retries: 5

# ── Step 4: Build, push, run ─────────────────────────────────────────
# docker build -t myapp:1.0 .           # Build the image
# docker run -p 8000:8000 myapp:1.0     # Run a container
# docker compose up --build             # Start all services
# docker push registry/myapp:1.0       # Push to registry`,
    renderCycle: [
      "Write Dockerfile → docker build reads instructions → creates layered image",
      "Each Dockerfile instruction = one image layer → layers are cached independently",
      "docker push → image stored in container registry (Docker Hub / ECR / GCR)",
      "Deployment platform calls docker pull → downloads image to host machine",
      "docker run / Kubernetes pod → container created from image → application starts",
      "Linux namespaces + cgroups → process, network, filesystem isolation + resource limits",
    ],
    closingNote:
      "This build-ship-run cycle is the heartbeat of modern software deployment. Once you understand that a Dockerfile is a build script, an image is a versioned artifact, and a container is a running instance of that artifact — every Docker command, every CI/CD pipeline step, and every cloud deployment concept becomes immediately readable. Everything else in the Docker ecosystem is an optimization or extension of this one cycle.",
  },

  // ── SECTION 4: CORE CONCEPTS ─────────────────────────────────────
  coreConcepts: [
    {
      id: "dockerfile-fundamentals",
      number: "4.1",
      title: "Dockerfile — Writing Production-Ready Build Instructions",
      icon: "📄",
      color: "blue",
      intro:
        "The Dockerfile is the source of truth for how your application is packaged. Every instruction creates a layer in the final image. The order of instructions determines build performance — Docker caches each layer and only rebuilds from the first changed instruction. Writing an efficient Dockerfile means placing frequently-changing instructions (COPY your code) after rarely-changing ones (RUN pip install) so dependency installation is cached across most rebuilds. Production Dockerfiles also minimize image size, run as a non-root user, and pass security scanning.",
      code: `# ── DOCKERFILE BEST PRACTICES — production-grade examples ────────────

# EXAMPLE 1: Python/Django API — optimized for build cache + small size
FROM python:3.12-slim AS base

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    PIP_NO_CACHE_DIR=1 \
    PIP_DISABLE_PIP_VERSION_CHECK=1

WORKDIR /app

# Install system deps (cached unless this changes)
RUN apt-get update && apt-get install -y --no-install-recommends \
    gcc libpq-dev curl \
    && rm -rf /var/lib/apt/lists/*

# Copy ONLY requirements first (cached unless requirements.txt changes)
COPY requirements.txt .
RUN pip install -r requirements.txt

# Copy source code last (invalidates cache on any code change)
COPY . .

# Non-root user — security best practice
RUN addgroup --system app && adduser --system --ingroup app app
USER app

EXPOSE 8000
CMD ["gunicorn", "myproject.wsgi:application", \
     "--bind", "0.0.0.0:8000", \
     "--workers", "4", \
     "--worker-class", "gthread", \
     "--threads", "2", \
     "--timeout", "30"]

# ─────────────────────────────────────────────────────────────────────

# EXAMPLE 2: Node.js/React — multi-stage build (build then serve)
# Stage 1: Build the React app
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json .
RUN npm ci --only=production             # ci is faster + deterministic than install
COPY . .
RUN npm run build                        # Produces /app/dist

# Stage 2: Serve with minimal Nginx image (no Node.js in final image)
FROM nginx:alpine AS production
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
# Final image: ~25MB instead of ~350MB with Node.js included

# ─────────────────────────────────────────────────────────────────────

# EXAMPLE 3: FastAPI with multi-stage — development vs production targets
FROM python:3.12-slim AS python-base
ENV PYTHONDONTWRITEBYTECODE=1 PYTHONUNBUFFERED=1
RUN pip install poetry
WORKDIR /app
COPY pyproject.toml poetry.lock .

# Development stage — includes dev dependencies
FROM python-base AS development
RUN poetry install --no-root           # Installs all deps including dev
COPY . .
CMD ["uvicorn", "main:app", "--reload", "--host", "0.0.0.0", "--port", "8000"]

# Production stage — only production dependencies
FROM python-base AS production
RUN poetry install --no-root --only=main  # No dev deps
COPY . .
RUN adduser --system --no-create-home appuser
USER appuser
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000", "--workers", "4"]

# Build specific target:
# docker build --target development -t myapp:dev .
# docker build --target production -t myapp:prod .

# ─────────────────────────────────────────────────────────────────────

# DOCKERFILE INSTRUCTIONS — complete reference
# FROM image:tag           — base image (always first, except ARG)
# ARG KEY=value            — build-time variable (before FROM for version matrix)
# ENV KEY=value            — runtime environment variable
# RUN command              — execute during build (creates a layer)
# COPY src dest            — copy files from build context into image
# ADD src dest             — like COPY but also handles URLs and tar extraction
# WORKDIR /path            — set working directory for subsequent instructions
# EXPOSE port              — document which port the app listens on (informational)
# USER username            — switch to this user for subsequent instructions
# VOLUME /path             — declare a mount point for persistent data
# HEALTHCHECK CMD ...      — command Docker runs to check if container is healthy
# ENTRYPOINT ["cmd"]       — fixed executable that is always run
# CMD ["args"]             — default arguments (overridable with docker run args)
# LABEL key=value          — metadata (maintainer, version, description)`,
      usage:
        "Multi-stage builds are the most impactful Dockerfile optimization: build your app in a full image with compilers and dev tools, then copy only the compiled output into a minimal runtime image. A React app with multi-stage builds produces a 25MB Nginx image instead of a 350MB Node.js image. A Python app that installs wheels from a builder stage avoids needing build tools in production. Smaller images mean faster pulls, faster deployments, and reduced attack surface.",
      mistake:
        "Putting COPY . . before RUN pip install -r requirements.txt in a Python Dockerfile. Every time any source file changes (which is every build), Docker invalidates the COPY layer and re-runs pip install from scratch — even if requirements.txt hasn't changed. Dependencies installation takes 2–5 minutes. Moving COPY requirements.txt . and RUN pip install before COPY . . makes dependencies cached across 95% of builds, reducing build time to under 10 seconds.",
    },
    {
      id: "docker-compose",
      number: "4.2",
      title: "Docker Compose — Multi-Service Local Environments",
      icon: "🔧",
      color: "emerald",
      intro:
        "Docker Compose is the tool that makes Docker genuinely useful for day-to-day development. Real applications are never a single process — they need a database, a cache, a message queue, a background worker, and sometimes multiple API services. Docker Compose defines all of these in a single YAML file and manages their lifecycle together. docker compose up starts everything. docker compose down stops and removes containers. One file replaces hours of README instructions for setting up a local development environment. Compose is also used in CI/CD pipelines and simple production deployments.",
      code: `# docker-compose.yml — full-stack Django + React + PostgreSQL + Redis + Celery

services:
  # ── Backend API ───────────────────────────────────────────────────
  api:
    build:
      context: ./backend
      target: development            # Use the dev stage of multi-stage Dockerfile
    container_name: myapp_api
    ports:
      - "8000:8000"
    environment:
      - DEBUG=True
      - DATABASE_URL=postgresql://postgres:devpassword@db:5432/myapp_dev
      - REDIS_URL=redis://redis:6379/0
      - SECRET_KEY=dev-secret-key-not-for-production
    volumes:
      - ./backend:/app               # Mount source — code changes reflect without rebuild
    depends_on:
      db:
        condition: service_healthy   # Wait until DB passes health check
      redis:
        condition: service_started
    command: python manage.py runserver 0.0.0.0:8000
    networks:
      - app_network
    restart: unless-stopped

  # ── Celery Worker ──────────────────────────────────────────────────
  celery_worker:
    build:
      context: ./backend
      target: development
    container_name: myapp_celery
    environment:
      - DATABASE_URL=postgresql://postgres:devpassword@db:5432/myapp_dev
      - REDIS_URL=redis://redis:6379/0
    volumes:
      - ./backend:/app
    depends_on:
      - redis
      - db
    command: celery -A myproject worker --loglevel=info --concurrency=2
    networks:
      - app_network

  # ── Celery Beat (Scheduler) ────────────────────────────────────────
  celery_beat:
    build:
      context: ./backend
      target: development
    container_name: myapp_beat
    environment:
      - DATABASE_URL=postgresql://postgres:devpassword@db:5432/myapp_dev
      - REDIS_URL=redis://redis:6379/0
    volumes:
      - ./backend:/app
    depends_on:
      - redis
    command: celery -A myproject beat --loglevel=info
    networks:
      - app_network

  # ── Frontend ───────────────────────────────────────────────────────
  frontend:
    build:
      context: ./frontend
      target: development
    container_name: myapp_frontend
    ports:
      - "5173:5173"
    volumes:
      - ./frontend:/app
      - /app/node_modules             # Prevent host node_modules from overriding
    environment:
      - VITE_API_URL=http://localhost:8000
    networks:
      - app_network

  # ── PostgreSQL Database ────────────────────────────────────────────
  db:
    image: postgres:16-alpine
    container_name: myapp_db
    ports:
      - "5432:5432"                   # Expose for local DB GUI tools
    environment:
      POSTGRES_DB: myapp_dev
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: devpassword
    volumes:
      - postgres_data:/var/lib/postgresql/data   # Named volume — persists across restarts
      - ./backend/scripts/init.sql:/docker-entrypoint-initdb.d/init.sql
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U postgres -d myapp_dev"]
      interval: 10s
      timeout: 5s
      retries: 5
      start_period: 30s
    networks:
      - app_network

  # ── Redis ──────────────────────────────────────────────────────────
  redis:
    image: redis:7-alpine
    container_name: myapp_redis
    ports:
      - "6379:6379"
    command: redis-server --appendonly yes --requirepass devredispassword
    volumes:
      - redis_data:/data
    networks:
      - app_network

  # ── Nginx (local proxy — mirrors production) ───────────────────────
  nginx:
    image: nginx:alpine
    container_name: myapp_nginx
    ports:
      - "80:80"
    volumes:
      - ./nginx/dev.conf:/etc/nginx/conf.d/default.conf
    depends_on:
      - api
      - frontend
    networks:
      - app_network

# Named volumes — data persists when containers are recreated
volumes:
  postgres_data:
  redis_data:

# Custom network — services communicate by service name
networks:
  app_network:
    driver: bridge

# ── COMPOSE COMMANDS ──────────────────────────────────────────────────
# docker compose up                  # Start all services (attached)
# docker compose up -d               # Start all services (detached/background)
# docker compose up --build          # Rebuild images then start
# docker compose down                # Stop and remove containers
# docker compose down -v             # Also remove named volumes (delete DB data)
# docker compose logs -f api         # Follow logs for the api service
# docker compose exec api bash       # Open shell inside running api container
# docker compose exec api python manage.py migrate   # Run manage.py in container
# docker compose ps                  # List running services and their status
# docker compose restart api         # Restart a specific service`,
      usage:
        "Every developer who joins a team with a docker-compose.yml file gets a fully running local environment with git clone + docker compose up. No README of 'install PostgreSQL 15, configure pg_hba.conf, create database, install Redis, set environment variables'. One command, full environment, identical across every team member's machine. This is the primary value proposition of Docker Compose in development workflows.",
      mistake:
        "Not using health checks on the database service and not using depends_on: condition: service_healthy on the API. Without a health check, Docker Compose starts the API container immediately when the database container starts — but the database process takes 5–15 seconds to be ready. The API fails to connect to the database, crashes, and you see a confusing 'connection refused' error. Always add a pg_isready health check to the PostgreSQL service and service_healthy condition to anything that depends on it.",
    },
    {
      id: "docker-images-layers",
      number: "4.3",
      title: "Images, Layers, and the Registry",
      icon: "📦",
      color: "purple",
      intro:
        "Understanding how Docker images are built, layered, and stored is essential for optimizing build times, reducing image sizes, and designing effective CI/CD pipelines. Every Dockerfile instruction creates an immutable layer. Layers are content-addressed (identified by SHA256 hash) and cached. When you push to a registry, only layers that don't already exist on the registry are uploaded — the same layer shared between two images is stored and transferred once.",
      code: `# UNDERSTANDING DOCKER IMAGES AND LAYERS

# ── Inspect image layers ──────────────────────────────────────────────
# docker image history myapp:1.0
# IMAGE          CREATED        CREATED BY                        SIZE
# a1b2c3d4e5f6   2 hours ago    CMD ["gunicorn"...]               0B
# b2c3d4e5f6a7   2 hours ago    USER app                          0B
# c3d4e5f6a7b8   2 hours ago    COPY . .                          1.2MB
# d4e5f6a7b8c9   3 days ago     RUN pip install -r requirements   145MB  (CACHED)
# e5f6a7b8c9d0   3 days ago     COPY requirements.txt .           2.1KB   (CACHED)
# f6a7b8c9d0e1   3 days ago     RUN apt-get install gcc...        52MB    (CACHED)
# a7b8c9d0e1f2   3 days ago     ENV PYTHONDONTWRITEBYTECODE=1     0B      (CACHED)
# b8c9d0e1f2a3   2 weeks ago    /bin/sh -c #(nop) WORKDIR /app    0B      (CACHED)
# c9d0e1f2a3b4   2 weeks ago    python:3.12-slim (base)           130MB   (CACHED)

# Result: Only COPY . . layer was rebuilt (1.2MB transferred)
# All other layers hit cache — build time: 3 seconds instead of 3 minutes

# ── Working with the Docker registry ─────────────────────────────────
# Tag image with registry prefix before pushing
# docker tag myapp:1.0 docker.io/myusername/myapp:1.0        # Docker Hub
# docker tag myapp:1.0 123456789.dkr.ecr.ap-south-1.amazonaws.com/myapp:1.0  # AWS ECR
# docker tag myapp:1.0 asia-south1-docker.pkg.dev/project/repo/myapp:1.0    # GCP

# Login and push
# docker login                                         # Docker Hub
# aws ecr get-login-password | docker login --username AWS --password-stdin <registry>
# docker push docker.io/myusername/myapp:1.0
# docker push 123456789.dkr.ecr.ap-south-1.amazonaws.com/myapp:1.0

# Pull and run from registry
# docker pull docker.io/myusername/myapp:1.0
# docker run -p 8000:8000 docker.io/myusername/myapp:1.0

# ── Image size optimization — before vs after ─────────────────────────
# BEFORE: naive Dockerfile
# FROM python:3.12                    # 1.02GB base
# COPY . .
# RUN pip install -r requirements.txt
# → Final image: 1.4GB

# AFTER: optimized Dockerfile
# FROM python:3.12-slim               # 130MB base (no build tools, docs, dev packages)
# RUN apt-get install --no-install-recommends ...  # minimal system packages
# → Use .dockerignore to exclude tests/, docs/, .git/
# → pip install --no-cache-dir        # Don't store pip cache in image
# → rm -rf /var/lib/apt/lists/*       # Clear apt cache after install
# → Multi-stage: compile wheels in builder, copy to slim runtime
# → Final image: 220MB (84% smaller)

# ── Image tagging strategy (production) ──────────────────────────────
# AVOID: latest tag — non-deterministic, no rollback
# USE: semantic version OR git commit SHA
# myapp:1.4.2                         # Semantic version — human-readable
# myapp:a7f3c89                       # Git commit SHA — immutable, traceable
# myapp:main-20260315                 # Branch + date — CI-generated

# Best practice: tag with both git SHA and semantic version
# docker build -t myapp:GIT_SHA -t myapp:1.4.2 -t myapp:latest .
# Push all three tags — SHA for deployment, semver for humans, latest for convenience

# ── docker image commands ─────────────────────────────────────────────
# docker images                       # List all local images
# docker image inspect myapp:1.0      # Full metadata (layers, env vars, entrypoint)
# docker image history myapp:1.0      # Show layer stack
# docker rmi myapp:old-tag            # Remove an image
# docker image prune                  # Remove dangling (untagged) images
# docker system prune -a              # Remove ALL unused images, containers, volumes
# docker image save myapp:1.0 | gzip > myapp.tar.gz   # Export image to file
# docker image load < myapp.tar.gz    # Import image from file (air-gapped deployment)`,
      usage:
        "The registry is the bridge between your build system and your deployment system. CI builds the image, pushes it with a git SHA tag, and the deployment system pulls it. Never deploy by SSHing into a server and running git pull — deploy by pulling a versioned image. The image contains the exact code, exact dependencies, and exact configuration that passed your CI tests. This is the Docker workflow that makes deployments reproducible and rollbacks instant (docker pull myapp:previous-sha).",
      mistake:
        "Always tagging images as :latest and never using version-specific tags. :latest is a mutable pointer — it changes with every push. Rolling back a deployment by pulling :latest might pull a different version than what was last deployed. Always tag images with an immutable identifier (git commit SHA or semantic version) in addition to :latest. Deployment pipelines should reference the specific SHA tag, not :latest.",
    },
    {
      id: "docker-networking-volumes",
      number: "4.4",
      title: "Networking, Volumes, and Container Communication",
      icon: "🌐",
      color: "yellow",
      intro:
        "Containers are isolated by default — they can't reach each other or persist data without explicit configuration. Docker's networking model defines how containers communicate: bridge networks for same-host container-to-container communication, host networking for maximum performance, overlay networks for multi-host (Swarm/Kubernetes) communication. Volumes solve the persistence problem: data written inside a container is lost when the container is removed, but data in a named volume persists independently of any container lifecycle.",
      code: `# DOCKER NETWORKING AND VOLUMES — complete reference

# ── NETWORKING ───────────────────────────────────────────────────────

# 1. Bridge network — default for docker-compose (recommended for dev)
# Containers on the same bridge network communicate by service name
# docker network create app_network
# docker run --network app_network --name api myapp:1.0
# docker run --network app_network --name db postgres:16
# Inside the api container: psql -h db -U postgres  ← 'db' resolves by container name

# 2. Expose ports to host machine
# -p host_port:container_port
docker run -p 8000:8000 myapp:1.0      # host:8000 → container:8000
docker run -p 127.0.0.1:5432:5432 postgres:16  # Bind to localhost only (secure)
docker run -p 0.0.0.0:5432:5432 postgres:16    # Bind to all interfaces (exposed)

# 3. Network types
# bridge (default): isolated virtual network, containers communicate by name
# host: container uses host machine's network directly (no isolation, max performance)
# none: no network connectivity (fully isolated)
# overlay: multi-host networking for Docker Swarm

# 4. Inspect container networking
docker network ls                     # List all networks
docker network inspect app_network    # Show containers attached + IP addresses
docker inspect myapp_api | grep -A 20 '"Networks"'  # Container's network config

# 5. DNS resolution in Docker Compose
# Service 'api' can reach service 'db' at hostname 'db'
# Service 'api' can reach service 'redis' at hostname 'redis'
# Service 'api' can reach service 'frontend' at hostname 'frontend'
# No /etc/hosts editing required — Docker's internal DNS handles this

# ── VOLUMES ───────────────────────────────────────────────────────────

# Problem: Container filesystem is ephemeral
# docker run postgres:16                 # Database starts
# docker stop postgres && docker rm postgres  # Container removed
# docker run postgres:16                 # NEW container — ALL DATA GONE

# Solution 1: Named volume — data managed by Docker, persists across containers
docker volume create postgres_data
docker run -v postgres_data:/var/lib/postgresql/data postgres:16
# Now data persists even when the container is removed and recreated

# Solution 2: Bind mount — host directory mapped into container (for development)
docker run -v $(pwd)/backend:/app -v $(pwd)/backend/media:/app/media myapp:dev
# Changes on host instantly visible inside container — live reload works
# WARNING: Use named volumes for databases in production, not bind mounts

# Solution 3: tmpfs mount — in-memory, not persisted (for sensitive temp data)
docker run --tmpfs /app/tmp:size=100m myapp:1.0

# Volume in docker-compose.yml:
# services:
#   db:
#     image: postgres:16-alpine
#     volumes:
#       - postgres_data:/var/lib/postgresql/data    # Named volume for DB data
#       - ./init.sql:/docker-entrypoint-initdb.d/init.sql  # Bind mount for init
#   api:
#     volumes:
#       - ./backend:/app                # Bind mount for live code reload in dev
#       - static_files:/app/staticfiles # Named volume for collected static files
#
# volumes:
#   postgres_data:
#   static_files:

# Volume commands
docker volume ls                       # List all volumes
docker volume inspect postgres_data    # Show volume details (mountpoint on host)
docker volume rm postgres_data         # Delete a volume (and all its data)
docker volume prune                    # Remove all unused volumes

# ── COMMON NETWORKING PATTERNS ────────────────────────────────────────

# Pattern 1: Separate networks for security (frontend can't reach DB directly)
# services:
#   nginx:
#     networks: [frontend, backend]   # Bridge between users and API
#   api:
#     networks: [backend, database]   # Access to DB, accessible from nginx
#   db:
#     networks: [database]            # Only accessible to services on 'database' network
#   frontend:
#     networks: [frontend]            # Only accessible from nginx

# Pattern 2: Connect to a running container's shell for debugging
docker exec -it myapp_api bash         # Interactive bash in running container
docker exec myapp_api python manage.py shell  # Django shell in running container
docker exec myapp_db psql -U postgres -d myapp_dev  # PostgreSQL shell

# Pattern 3: Copy files between host and container
docker cp myapp_api:/app/logs/error.log ./local_error.log
docker cp ./new_config.py myapp_api:/app/config.py`,
      usage:
        "Named volumes are how you persist database data between docker compose down and docker compose up — without them, every time you restart your environment your database is empty. Bind mounts are how you enable live code reload in development — changes in your IDE immediately appear inside the container without rebuilding the image. Use named volumes for data (databases, uploads), use bind mounts for source code in development.",
      mistake:
        "Binding database data to a host directory path (- ./postgres-data:/var/lib/postgresql/data) instead of a named volume. Host directory bind mounts have file permission issues, platform-specific path handling (Windows vs Mac vs Linux), and poor performance on macOS. Named volumes are managed by Docker, have correct permissions, and work identically on all platforms. Always use named volumes for database data and other persistent application state.",
    },
    {
      id: "docker-cicd",
      number: "4.5",
      title: "Docker in CI/CD Pipelines",
      icon: "🚀",
      color: "red",
      intro:
        "Docker's most impactful use is in CI/CD pipelines. Every modern CI platform — GitHub Actions, GitLab CI, Jenkins, CircleCI — runs jobs inside Docker containers. This means your tests run in an identical, reproducible environment every time. The standard CI/CD Docker workflow: build the image, run tests inside a container from that image, push the image to a registry if tests pass, then deploy the pushed image to production. The image that ran your tests is the exact image that runs in production — no environment discrepancies.",
      code: `# ── GitHub Actions CI/CD Pipeline with Docker ────────────────────────
# .github/workflows/deploy.yml

name: Build, Test, and Deploy

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

env:
  REGISTRY: ghcr.io
  IMAGE_NAME:  github.repository 

jobs:
  # ── Job 1: Run tests inside Docker container ─────────────────────
  test:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v3

      - name: Build test image
        uses: docker/build-push-action@v5
        with:
          context: .
          target: development
          push: false
          load: true
          tags: myapp:test
          cache-from: type=gha          # GitHub Actions cache for Docker layers
          cache-to: type=gha,mode=max

      - name: Run tests
        run: |
          docker run --rm \
            -e DATABASE_URL=postgresql://postgres:testpass@localhost:5432/testdb \
            -e REDIS_URL=redis://localhost:6379/0 \
            --network host \
            myapp:test \
            python -m pytest tests/ --tb=short -q --cov=. --cov-report=xml

      - name: Run security scan
        run: |
          docker run --rm -v /var/run/docker.sock:/var/run/docker.sock \
            aquasec/trivy image myapp:test --exit-code 1 --severity HIGH,CRITICAL

    services:
      postgres:
        image: postgres:16-alpine
        env:
          POSTGRES_DB: testdb
          POSTGRES_USER: postgres
          POSTGRES_PASSWORD: testpass
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
      redis:
        image: redis:7-alpine

  # ── Job 2: Build and push production image ────────────────────────
  build-and-push:
    runs-on: ubuntu-latest
    needs: test                         # Only runs if test job succeeds
    if: github.event_name == 'push' && github.ref == 'refs/heads/main'
    permissions:
      contents: read
      packages: write                   # Required to push to GHCR

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v3

      - name: Log in to Container Registry
        uses: docker/login-action@v3
        with:
          registry:  env.REGISTRY 
          username:  github.actor 
          password:  secrets.GITHUB_TOKEN 

      - name: Extract metadata for Docker
        id: meta
        uses: docker/metadata-action@v5
        with:
          images: env.REGISTRY /env.IMAGE_NAME 
          tags: |
            type=sha,prefix=sha-           # git SHA tag (immutable)
            type=ref,event=branch          # branch name tag
            type=semver,pattern={{version}} # version tag from git tags

      - name: Build and push production image
        uses: docker/build-push-action@v5
        with:
          context: .
          target: production
          push: true
          tags: steps.meta.outputs.tags 
          labels: steps.meta.outputs.labels 
          cache-from: type=gha
          cache-to: type=gha,mode=max

  # ── Job 3: Deploy to production ───────────────────────────────────
  deploy:
    runs-on: ubuntu-latest
    needs: build-and-push
    environment: production

    steps:
      - name: Deploy to Railway/Render via webhook
        run: |
          curl -X POST  secrets.DEPLOY_WEBHOOK_URL" \
               -H "Content-Type: application/json" \
               -d '{"image": "env.REGISTRY /$ env.IMAGE_NAME :sha- github.sha "}'

      # OR: Deploy to AWS ECS
      - name: Deploy to Amazon ECS
        uses: aws-actions/amazon-ecs-deploy-task-definition@v1
        with:
          task-definition: .aws/task-definition.json
          service: myapp-service
          cluster: myapp-cluster
          image:  env.REGISTRY / env.IMAGE_NAME :sha- github.sha `,
      usage:
        "The GitHub Actions cache for Docker layers (cache-from: type=gha) is the most impactful CI optimization you can make. Without it, every CI run rebuilds all layers from scratch — 5–10 minutes per run. With layer caching, only changed layers rebuild — 30–60 seconds for a code-only change. This single configuration change reduces your CI feedback loop by 80–90%.",
      mistake:
        "Not separating the test job from the build-and-push job. If you build the production image and push it before running tests, you may push a broken image to your registry. Always run tests first in a separate job that must pass before the build-and-push job proceeds. The needs: [test] dependency ensures tests gate the image push.",
    },
    {
      id: "docker-security",
      number: "4.6",
      title: "Docker Security — Production Hardening",
      icon: "🔐",
      color: "orange",
      intro:
        "Running containers in production without security hardening is a significant risk. Docker containers share the host kernel — a container running as root that escapes isolation has root access to the host. Production Docker security involves: non-root users, read-only filesystems, minimal base images, secret management (never ENV for passwords), image vulnerability scanning, and resource limits. These practices are not optional for any containerized application handling sensitive data.",
      code: `# DOCKER SECURITY BEST PRACTICES

# ── 1. NEVER run as root ──────────────────────────────────────────────
# BAD: Default behavior — process runs as root
FROM python:3.12-slim
COPY . .
CMD ["python", "app.py"]  # Runs as root — container escape = host root

# GOOD: Create and switch to non-root user
FROM python:3.12-slim
RUN addgroup --system --gid 1001 appgroup \
    && adduser --system --uid 1001 --ingroup appgroup --no-create-home appuser
COPY --chown=appuser:appgroup . .
USER appuser                  # All subsequent commands and CMD run as appuser
CMD ["python", "app.py"]

# ── 2. Use minimal base images ────────────────────────────────────────
# More packages = larger attack surface
FROM ubuntu:22.04              # 77MB — full OS, hundreds of packages
FROM debian:bookworm-slim      # 74MB — reduced package set
FROM python:3.12-slim          # 130MB — slim Python (fewer packages)
FROM python:3.12-alpine        # 57MB  — Alpine Linux (minimal, musl libc)
FROM gcr.io/distroless/python3 # 50MB  — no shell, no package manager, no attack surface

# ── 3. Read-only filesystem ───────────────────────────────────────────
# docker run --read-only --tmpfs /tmp --tmpfs /app/logs myapp:1.0
# Container filesystem is read-only — attacker can't write malware
# Provide writable tmpfs mounts only for directories the app needs to write to

# ── 4. NEVER pass secrets as ENV in Dockerfile ────────────────────────
# BAD: Visible in docker inspect, docker history, and image layers
ENV DATABASE_PASSWORD=mysecretpassword   # NEVER DO THIS
RUN pip install ...

# GOOD option 1: Pass at runtime via docker run
# docker run -e DATABASE_PASSWORD=$DATABASE_PASSWORD myapp:1.0

# GOOD option 2: Docker secrets (Swarm) or Kubernetes secrets
# docker run --secret id=db_password,src=/path/to/secret.txt myapp:1.0
# In Dockerfile: RUN --mount=type=secret,id=db_password pip install ...

# GOOD option 3: AWS Secrets Manager / GCP Secret Manager at startup
# App fetches secrets at runtime from cloud secret store — not baked into image

# ── 5. Image scanning ─────────────────────────────────────────────────
# Trivy — free, fast vulnerability scanner for container images
# docker run --rm aquasec/trivy image python:3.12-slim
# docker run --rm aquasec/trivy image myapp:1.0 --exit-code 1 --severity CRITICAL

# Grype — alternative vulnerability scanner
# grype myapp:1.0

# In CI — fail build on high/critical vulnerabilities:
# docker run aquasec/trivy image myapp:1.0 --exit-code 1 --severity HIGH,CRITICAL

# ── 6. Resource limits ────────────────────────────────────────────────
# Prevent a single container from consuming all host resources
docker run \
    --memory="512m" \              # Max 512MB RAM
    --memory-swap="1g" \           # Max 1GB RAM+swap total
    --cpus="1.5" \                 # Max 1.5 CPU cores
    --pids-limit=100 \             # Max 100 processes (prevents fork bombs)
    myapp:1.0

# In docker-compose.yml:
# services:
#   api:
#     deploy:
#       resources:
#         limits:
#           cpus: '1.0'
#           memory: 512M
#         reservations:
#           cpus: '0.25'
#           memory: 128M

# ── 7. .dockerignore — don't leak secrets into image ─────────────────
# Always include in .dockerignore:
# .env
# .env.*
# *.pem
# *.key
# secrets/
# .git/
# .aws/
# .ssh/
# Any file with credentials, tokens, or private keys

# ── 8. docker-compose secrets (for local dev) ─────────────────────────
# services:
#   api:
#     secrets:
#       - db_password
#     environment:
#       - DB_PASSWORD_FILE=/run/secrets/db_password
#
# secrets:
#   db_password:
#     file: ./secrets/db_password.txt  # gitignored file with actual password`,
      usage:
        "The non-root user rule is the single most impactful security improvement in a Dockerfile. Add it to every Dockerfile you write. Combined with read-only filesystem and resource limits, these three practices prevent the most common container security exploits. Image scanning with Trivy in CI catches known vulnerabilities in base images and dependencies before they reach production.",
      mistake:
        "Storing secrets in environment variables defined in the Dockerfile (ENV DATABASE_PASSWORD=...). These are baked into every image layer and visible to anyone who can pull the image, to docker inspect, and to docker history. Pass secrets at runtime only: via -e flags, docker secrets, or by having the application fetch secrets from a secrets manager (AWS Secrets Manager, HashiCorp Vault) at startup.",
    },
    {
      id: "docker-compose-production",
      number: "4.7",
      title: "Production Deployment Patterns",
      icon: "🌐",
      color: "teal",
      intro:
        "Deploying containerized applications to production follows a standard set of patterns regardless of the target platform. Single-server deployments use Docker Compose or Docker directly. Multi-server deployments use Kubernetes or managed container services (AWS ECS, Google Cloud Run, Azure Container Apps). Understanding the deployment patterns, health checks, rolling updates, and rollback strategies for containerized applications is what separates a Docker beginner from a Docker practitioner.",
      code: `# ── PRODUCTION DEPLOYMENT PATTERNS ──────────────────────────────────

# PATTERN 1: Single server with Docker Compose (small to medium apps)
# docker-compose.prod.yml
services:
  api:
    image: ghcr.io/myorg/myapp:sha-a7f3c89   # Exact version — no :latest
    restart: always
    environment:
      - DATABASE_URL=DATABASE_URL         # From .env on the server
      - REDIS_URL=REDIS_URL
      - SECRET_KEY=SECRET_KEY
      - DEBUG=False
      - ALLOWED_HOSTS=ALLOWED_HOSTS
    ports:
      - "127.0.0.1:8000:8000"               # Only bind to localhost — Nginx proxies
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:8000/health/"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 60s
    deploy:
      resources:
        limits:
          memory: 512M
    logging:
      driver: "json-file"
      options:
        max-size: "10m"
        max-file: "5"
    networks: [app_net]

  nginx:
    image: nginx:alpine
    restart: always
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx/prod.conf:/etc/nginx/conf.d/default.conf:ro
      - /etc/letsencrypt:/etc/letsencrypt:ro    # SSL certs
      - static_files:/app/staticfiles:ro
    depends_on:
      - api
    networks: [app_net]

  db:
    image: postgres:16-alpine
    restart: always
    environment:
      - POSTGRES_DB=POSTGRES_DB
     - POSTGRES_USER=POSTGRES_USER
     - POSTGRES_PASSWORD=POSTGRES_PASSWOR
    volumes:
      - postgres_data:/var/lib/postgresql/data
    networks: [app_net]

volumes:
  postgres_data:
  static_files:

networks:
  app_net:

# Deploy command on server:
# docker compose -f docker-compose.prod.yml pull   # Pull latest images
# docker compose -f docker-compose.prod.yml up -d  # Start/update services
# docker compose -f docker-compose.prod.yml exec api python manage.py migrate

# ─────────────────────────────────────────────────────────────────────

# PATTERN 2: Zero-downtime deployment with health checks
# Step 1: Pull new image
docker pull ghcr.io/myorg/myapp:sha-newversion

# Step 2: Start new container alongside old (different port)
docker run -d --name api_new -p 8001:8000 \
    --health-cmd "curl -f http://localhost:8000/health/" \
    --health-interval 10s \
    --health-retries 3 \
    ghcr.io/myorg/myapp:sha-newversion

# Step 3: Wait for new container to be healthy
until [ "$(docker inspect --format='{{.State.Health.Status}}' api_new)" = "healthy" ]; do
    sleep 5
done

# Step 4: Switch Nginx upstream to new container, reload Nginx
# Step 5: Stop and remove old container
docker stop api_old && docker rm api_old
docker rename api_new api

# ─────────────────────────────────────────────────────────────────────

# PATTERN 3: AWS ECS Task Definition (container config for managed deployment)
# {
#   "family": "myapp-api",
#   "networkMode": "awsvpc",
#   "containerDefinitions": [{
#     "name": "api",
#     "image": "123456.dkr.ecr.ap-south-1.amazonaws.com/myapp:sha-a7f3c89",
#     "portMappings": [{"containerPort": 8000, "protocol": "tcp"}],
#     "environment": [],
#     "secrets": [
#       {"name": "DATABASE_URL", "valueFrom": "arn:aws:secretsmanager:..."},
#       {"name": "SECRET_KEY", "valueFrom": "arn:aws:secretsmanager:..."}
#     ],
#     "healthCheck": {
#       "command": ["CMD-SHELL", "curl -f http://localhost:8000/health/ || exit 1"],
#       "interval": 30,
#       "timeout": 10,
#       "retries": 3
#     },
#     "logConfiguration": {
#       "logDriver": "awslogs",
#       "options": {"awslogs-group": "/ecs/myapp", "awslogs-region": "ap-south-1"}
#     },
#     "memory": 512,
#     "cpu": 256
#   }],
#   "requiresCompatibilities": ["FARGATE"],
#   "cpu": "256",
#   "memory": "512"
# }

# PATTERN 4: Google Cloud Run (serverless containers — simplest deployment)
# gcloud run deploy myapp \
#   --image ghcr.io/myorg/myapp:sha-a7f3c89 \
#   --platform managed \
#   --region asia-south1 \
#   --port 8000 \
#   --set-env-vars "DEBUG=False" \
#   --set-secrets "DATABASE_URL=myapp-db-url:latest" \
#   --min-instances 1 \
#   --max-instances 10`,
      usage:
        "Cloud Run is the simplest production deployment model for containerized applications — Google manages the infrastructure, auto-scales from zero to thousands of instances, and charges only for actual request processing time. For applications with persistent state (database connections, background workers), ECS on AWS or a single Docker Compose server on Railway/Render is more appropriate. Choose Cloud Run for stateless APIs; choose ECS or Compose for stateful applications.",
      mistake:
        "Using :latest tag in production deployments. When you docker pull myapp:latest on a new server or after a rollback, you get whatever was most recently pushed — which may be a broken version. Production deployments must reference immutable tags (git SHA). Rollback means changing the image tag in your deployment configuration from the broken SHA to the last known good SHA, then redeploying.",
    },
    {
      id: "docker-debugging",
      number: "4.8",
      title: "Debugging Containers — Logs, Exec, and Inspection",
      icon: "🔍",
      color: "blue",
      intro:
        "Container debugging is a distinct skill from application debugging. You cannot just open a file explorer and look at logs. The Docker CLI provides the tools to inspect running containers, access their filesystems, follow their logs, execute commands inside them, and monitor their resource usage. Every Docker practitioner needs these debugging commands as muscle memory — they are the tools you reach for when something breaks in any containerized environment.",
      code: `# DOCKER DEBUGGING — essential commands and patterns

# ── LOGS ──────────────────────────────────────────────────────────────
docker logs myapp_api                      # Show all logs since container started
docker logs myapp_api --follow             # Follow log output in real time
docker logs myapp_api --tail 100           # Last 100 lines
docker logs myapp_api --since 2h           # Logs from last 2 hours
docker logs myapp_api --since "2026-03-15T10:00:00"  # Logs since specific time
docker logs myapp_api 2>&1 | grep ERROR    # Filter for error lines

# docker-compose equivalent
docker compose logs api                   # Logs for 'api' service
docker compose logs -f api celery_worker  # Follow multiple services simultaneously
docker compose logs --tail=50 --timestamps  # With timestamps

# ── EXEC — run commands inside running containers ──────────────────────
docker exec -it myapp_api bash             # Interactive bash shell
docker exec -it myapp_api sh               # sh shell (for Alpine where bash isn't installed)
docker exec myapp_api python manage.py shell  # Django shell
docker exec myapp_api python manage.py migrate  # Run migrations
docker exec myapp_api python manage.py createsuperuser  # Create admin user
docker exec myapp_db psql -U postgres -d myapp_dev     # Database shell
docker exec myapp_redis redis-cli ping     # Redis health check
docker exec myapp_api env | sort           # List all environment variables

# ── INSPECT — detailed container/image/network metadata ───────────────
docker inspect myapp_api                   # Full JSON metadata
docker inspect myapp_api | python -m json.tool  # Pretty-printed
docker inspect --format='{{.State.Status}}' myapp_api        # Status only
docker inspect --format='{{.NetworkSettings.IPAddress}}' myapp_api  # IP address
docker inspect --format='{{.HostConfig.PortBindings}}' myapp_api    # Port mappings
docker inspect --format='{{range .Mounts}}{{.Source}} -> {{.Destination}}{{"\n"}}{{end}}' myapp_api

# ── STATS — resource usage monitoring ─────────────────────────────────
docker stats                               # Real-time resource usage (all containers)
docker stats myapp_api myapp_db            # Specific containers
docker stats --no-stream                   # One-time snapshot, no refresh

# CPU%   MEM USAGE / LIMIT   MEM%   NET I/O       BLOCK I/O
# 2.4%   128MiB / 512MiB    25%    1.2MB / 800KB  5.5MB / 2.1MB

# ── CONTAINER FILESYSTEM — inspect files without bash ─────────────────
docker cp myapp_api:/app/logs/error.log ./error.log    # Copy file from container
docker cp ./new_config.py myapp_api:/app/config.py    # Copy file into container
docker diff myapp_api                                  # Show filesystem changes since image

# ── DEBUGGING COMMON FAILURES ────────────────────────────────────────

# 1. Container exits immediately — check exit code and logs
docker ps -a                               # Show exited containers
docker logs myapp_api                      # Read the error output
# Common causes: missing env var, wrong CMD, app crash on startup

# 2. Container starts but is unhealthy
docker inspect --format='{{json .State.Health}}' myapp_api | python -m json.tool
# Shows health check output — why the health check is failing

# 3. Port conflict — container can't bind to port
docker ps --filter publish=8000            # What's already using port 8000
lsof -i :8000                              # What process on host is using it

# 4. Container can't connect to database
docker exec -it myapp_api bash
# Inside container:
ping db                                    # Can we reach the 'db' service by name?
nc -zv db 5432                             # Can we connect to port 5432?
env | grep DATABASE                        # Is DATABASE_URL set correctly?

# 5. Out of disk space — Docker taking too much space
docker system df                           # Show Docker disk usage by component
docker system prune                        # Remove stopped containers, unused networks, dangling images
docker system prune -a                     # Also remove unused images (frees most space)
docker volume prune                        # Remove unused volumes

# ── NETWORK DEBUGGING ─────────────────────────────────────────────────
docker network ls
docker network inspect myapp_app_network   # See which containers are attached
docker exec myapp_api nslookup db          # DNS resolution from inside container
docker exec myapp_api curl -v http://db:5432  # TCP connectivity test`,
      usage:
        "docker logs --follow and docker exec -it bash are the two most important debugging commands you will use. When a container is unhealthy or a service is not working, the answers are almost always in the logs or discoverable by running commands inside the container. docker stats reveals memory leaks and CPU spikes. docker system prune reclaims disk space. These five commands cover 90% of container debugging scenarios.",
      mistake:
        "SSHing into a production server and running docker exec to fix something manually. Changes made inside a running container are not preserved when the container restarts — and your container images and docker-compose.yml don't reflect the fix. Any manual change you make will be lost and the problem will recur. Fix things in the Dockerfile or source code, rebuild the image, and redeploy. Containers are disposable — treat them as such.",
    },
    {
      id: "docker-project-structure",
      number: "4.9",
      title: "Docker in a Real Project — Complete Setup",
      icon: "📁",
      color: "emerald",
      intro:
        "Understanding Docker in isolation is insufficient — understanding how Docker files integrate into a real project repository is what separates someone who has done tutorials from someone who can contribute to a team's containerized application on day one. This section shows the complete Docker-related file structure for a full-stack application with multiple services, development and production configurations, and a CI/CD pipeline.",
      code: `# ── COMPLETE PROJECT DOCKER STRUCTURE ────────────────────────────────
myproject/
├── backend/                           # Django/FastAPI application
│   ├── Dockerfile                     # Multi-stage: development + production targets
│   ├── .dockerignore                  # Exclude .env, .venv, __pycache__, tests/
│   ├── requirements.txt               # Or pyproject.toml
│   └── src/ ...
│
├── frontend/                          # React/Angular application
│   ├── Dockerfile                     # Multi-stage: node builder + nginx runtime
│   ├── .dockerignore                  # Exclude node_modules/, dist/, .env
│   ├── nginx.conf                     # Nginx config for serving built React app
│   └── src/ ...
│
├── nginx/                             # Nginx reverse proxy config
│   ├── dev.conf                       # Development proxy config
│   └── prod.conf                      # Production proxy config (with SSL)
│
├── docker-compose.yml                 # Development environment (all services)
├── docker-compose.prod.yml            # Production overrides (no bind mounts, prod images)
├── docker-compose.test.yml            # Test environment (in-memory DBs, no volumes)
│
├── .env.example                       # Template — committed to git
├── .env                               # Actual secrets — gitignored
│
├── Makefile                           # Shortcuts for common Docker commands
│   # make up        → docker compose up --build
│   # make down      → docker compose down
│   # make logs      → docker compose logs -f
│   # make migrate   → docker compose exec api python manage.py migrate
│   # make test      → docker compose -f docker-compose.test.yml run --rm api pytest
│   # make shell     → docker compose exec api python manage.py shell
│   # make psql      → docker compose exec db psql -U postgres -d myapp_dev
│
└── .github/
    └── workflows/
        ├── ci.yml                     # Test on every PR
        └── deploy.yml                 # Build + push + deploy on main merge

# ── Makefile content ──────────────────────────────────────────────────
# Makefile (no tabs shown, use actual tab characters)
# .PHONY: up down build logs shell test migrate psql clean

# up:
#     docker compose up --build -d && docker compose logs -f

# down:
#     docker compose down

# build:
#     docker compose build

# logs:
#     docker compose logs -f

# shell:
#     docker compose exec api python manage.py shell

# bash:
#     docker compose exec api bash

# test:
#     docker compose -f docker-compose.test.yml run --rm api pytest $(args)

# migrate:
#     docker compose exec api python manage.py migrate

# makemigrations:
#     docker compose exec api python manage.py makemigrations

# psql:
#     docker compose exec db psql -U postgres -d myapp_dev

# clean:
#     docker compose down -v --remove-orphans
#     docker system prune -f

# ── docker-compose.prod.yml — production overrides ────────────────────
# services:
#   api:
#     image: ghcr.io/myorg/myapp-api:IMAGE_TAG   # No build — use pre-built image
#     volumes: []                                     # No bind mounts in production
#     command: gunicorn myproject.wsgi:application --bind 0.0.0.0:8000 --workers 4
#   frontend:
#     image: ghcr.io/myorg/myapp-frontend:IMAGE_TAG
#     volumes: []

# Use with: IMAGE_TAG=sha-a7f3c89 docker compose -f docker-compose.yml \
#           -f docker-compose.prod.yml up -d`,
      usage:
        "The Makefile is the most underrated Docker developer experience improvement. Instead of remembering docker compose -f docker-compose.test.yml run --rm api pytest tests/ -v --tb=short, team members just run make test. Every developer uses the same commands. Onboarding documentation shrinks to make up, make migrate, make test. This pattern is used by professional engineering teams at every scale.",
      mistake:
        "Using the same docker-compose.yml for both development and production. Development Compose files have bind mounts (your source code on the host), build: context: (build from local Dockerfile), DEBUG=True environment variables, and exposed database ports. None of these belong in production. Always have separate docker-compose.yml (development) and docker-compose.prod.yml (production override) files — use docker compose -f base.yml -f prod.yml for production deployments.",
    },
  ],

  // ── SECTION 5: PREREQUISITES ─────────────────────────────────────
  prerequisites: [
    { item: "Command Line / Terminal Proficiency", done: false, note: "All Docker commands run in the terminal — no GUI alternative for professional use", detail: "Navigate directories (cd, ls, pwd), create and edit files, run commands, pipe output, use environment variables. Docker commands are all CLI-based — docker build, docker run, docker compose up. Terminal fluency is required, not optional." },
    { item: "Basic Linux/Unix Knowledge", done: false, note: "Docker containers run Linux — understanding Linux concepts makes Dockerfiles readable", detail: "File permissions (chmod, chown), users and groups (adduser, addgroup), package managers (apt-get, apk), environment variables, file paths (/app, /var, /etc). Every Dockerfile runs Linux commands — RUN apt-get install..., RUN adduser... require Linux knowledge to write correctly." },
    { item: "Any Programming Language (Python, Node.js, Java, etc.)", done: true, note: "You containerize applications you can write — at least one language is prerequisite", detail: "You need to understand what your application needs to run: its runtime (Python 3.12, Node.js 20, JDK 21), its dependencies (requirements.txt, package.json, pom.xml), and its start command (gunicorn, node server.js, java -jar). Without this, Dockerfile instructions don't make sense." },
    { item: "Understanding of Web Servers and HTTP", done: false, note: "Docker exposes ports — understanding ports and HTTP requests makes networking concepts clear", detail: "What a web server is (listens on a port, responds to HTTP requests), what port 80, 443, 8000, 5432 mean, what localhost vs 0.0.0.0 means. Docker's -p 8000:8000 flag is incomprehensible without understanding what ports are." },
    { item: "Git and Version Control", done: true, note: "Docker image tags reference git SHAs in CI/CD workflows", detail: "git add, git commit, git push, .gitignore (you'll need to gitignore .env files for Docker secrets). CI/CD Docker pipelines trigger on git events and tag images with git commit SHAs." },
    { item: "YAML Syntax Basics", done: false, note: "docker-compose.yml is YAML — indentation errors cause silent failures", detail: "YAML key-value pairs, lists (- items), nested objects, indentation rules (spaces not tabs), multi-line strings. docker-compose.yml is entirely YAML — a wrong indent level creates a configuration that silently ignores your settings." },
    { item: "Basic Networking Concepts", done: false, note: "Docker networking (ports, bridges, DNS) requires networking fundamentals", detail: "IP addresses, ports, DNS (hostname to IP resolution), TCP/UDP protocols, localhost vs external interfaces. Docker's internal DNS (containers reaching each other by service name) and port binding (-p host:container) require these concepts." },
  ],

  // ── SECTION 6: ROADMAP ───────────────────────────────────────────
  roadmap: [
    {
      phase: "Beginner",
      label: "01",
      duration: "Weeks 1–4",
      color: "emerald",
      topics: [
        "Docker installation — Docker Desktop (Mac/Windows), Docker Engine (Linux)",
        "Core concepts — images, containers, Dockerfile, registry, docker-compose",
        "Essential CLI commands — docker pull, run, stop, rm, ps, images, logs, exec",
        "Running pre-built images — docker run nginx, postgres, redis without writing a Dockerfile",
        "Writing your first Dockerfile — FROM, RUN, COPY, WORKDIR, CMD, EXPOSE",
        "Building and tagging images — docker build -t name:tag .",
        "Port publishing — -p host:container, understanding 0.0.0.0 vs 127.0.0.1 binding",
        "Environment variables — -e flag, ENV instruction, reading vars in app",
        ".dockerignore — excluding .env, node_modules, __pycache__, .git",
        "Layer caching — instruction order for fast rebuilds",
        "Docker Compose basics — services, image, build, ports, environment, volumes",
        "docker compose up/down/logs/exec — the four daily Compose commands",
        "Named volumes — persisting database data between container restarts",
        "Networks in Compose — service-name DNS resolution",
        "Health checks — depends_on with condition: service_healthy",
      ],
      buildProjects: [
        "Containerize a 'Hello World' web server in your language of choice — Dockerfile, build, run, verify in browser",
        "Run PostgreSQL + pgAdmin in Docker Compose — persist data with named volume, connect with pgAdmin",
        "Containerize an existing simple project (blog app, to-do API) — Dockerfile + docker-compose with DB service",
      ],
    },
    {
      phase: "Intermediate",
      label: "02",
      duration: "Weeks 5–12",
      color: "primary",
      topics: [
        "Multi-stage builds — builder stage + minimal runtime stage, build targets (--target)",
        "Image size optimization — slim vs alpine base images, --no-cache, no-install-recommends",
        "Non-root user — addgroup, adduser, USER instruction for security",
        "Docker Compose production patterns — overrides, .env files, no bind mounts",
        "Advanced volumes — bind mounts for dev, named volumes for prod, tmpfs",
        "Docker networking — bridge, host, none; custom networks; multi-network isolation",
        "Container registry — Docker Hub, GHCR (GitHub Container Registry), AWS ECR basics",
        "Image tagging strategy — git SHA, semantic versioning, avoiding :latest in production",
        "Docker secrets — not using ENV for passwords, runtime secret injection",
        "Resource limits — --memory, --cpus, --pids-limit in docker run and compose",
        "CI/CD with Docker — GitHub Actions: build → test → push → deploy workflow",
        "Layer cache in CI — GitHub Actions cache, BuildKit cache mounts",
        "Health checks in Dockerfile — HEALTHCHECK instruction, curl/wget commands",
        "Docker in Docker (DinD) — running Docker inside CI containers, socket mounting",
        "Container debugging — docker stats, docker diff, docker inspect, exec for shell access",
      ],
      buildProjects: [
        "Multi-stage Dockerfile for a React app — Node.js builder stage + Nginx runtime stage; compare image sizes",
        "Full-stack Docker Compose — backend API + frontend + PostgreSQL + Redis + Celery worker + Nginx",
        "GitHub Actions pipeline — build image, run tests inside container, push to GHCR on main merge",
        "Containerized ML model serving — FastAPI + PyTorch model, GPU-enabled Dockerfile, serve predictions",
      ],
    },
    {
      phase: "Advanced",
      label: "03",
      duration: "Weeks 13–22+",
      color: "purple",
      topics: [
        "Docker BuildKit — BuildKit syntax, cache mounts, secrets mounts, parallel stage builds",
        "Image vulnerability scanning — Trivy, Grype, Docker Scout; fail CI on HIGH/CRITICAL",
        "Distroless images — gcr.io/distroless base images, zero shell, minimal attack surface",
        "Docker Swarm basics — simple multi-node orchestration, services, rolling updates",
        "Kubernetes introduction — pods, deployments, services, the relationship to Docker",
        "Kubernetes deployment patterns — Deployment, Service, Ingress, ConfigMap, Secret",
        "Helm basics — package manager for Kubernetes, chart structure, values.yaml",
        "AWS ECS / Fargate — task definitions, services, clusters, ALB integration",
        "Google Cloud Run — serverless containers, auto-scaling, IAM, Cloud SQL connections",
        "Azure Container Apps — managed Kubernetes for containers, KEDA auto-scaling",
        "Container monitoring — Prometheus metrics from containers, Grafana dashboards, cAdvisor",
        "Log aggregation — Fluentd/Fluent Bit, centralized logging (ELK, CloudWatch, GCP Logging)",
        "Docker layer signing and provenance — SBOM, Sigstore/Cosign for supply chain security",
        "GitOps with ArgoCD — declarative deployments, automatic sync from Git to Kubernetes",
        "Advanced networking — service mesh (Istio/Linkerd), mTLS between containers",
      ],
      buildProjects: [
        "Zero-downtime deployment system — blue-green or rolling deployment with health check gating, automated rollback",
        "Complete Kubernetes deployment — multi-service app on local minikube with Helm chart, Ingress, ConfigMaps, Secrets",
        "Container monitoring stack — Prometheus + Grafana + cAdvisor, dashboard showing CPU/memory/request metrics per container",
        "GitOps pipeline — GitHub → GitHub Actions build + push → ArgoCD sync to Kubernetes cluster",
      ],
    },
  ],

  // ── SECTION 7: USE CASES ─────────────────────────────────────────
  useCases: [
    { num: "01", title: "Consistent Local Development Environments", body: "docker compose up gives every developer on a team — regardless of whether they use Mac, Windows, or Linux — an identical running environment. The new engineer who joins on Monday has a working database, Redis cache, backend API, and frontend running by Monday afternoon. No 'works on my machine' problems. No README of fifteen dependency installation steps. One file, one command, full environment. This alone justifies learning Docker." },
    { num: "02", title: "Microservices Architecture", body: "Each microservice — user service, payment service, notification service, analytics service — lives in its own Docker container with its own dependencies, runtime version, and deployment lifecycle. A team can update the payment service without touching the user service. Services can be written in different languages (Python, Node.js, Go) and still deploy through the same containerized pipeline. Docker is the enabling technology of practical microservices." },
    { num: "03", title: "CI/CD Pipelines and Automated Testing", body: "GitHub Actions, GitLab CI, and Jenkins run every test, lint check, and build inside Docker containers. This guarantees tests run in an identical environment on every developer's commit and on every CI server globally. The image that passed CI tests is the exact image deployed to production — no environment difference to cause production-only failures." },
    { num: "04", title: "Cloud Deployment on Any Platform", body: "AWS ECS, Google Cloud Run, Azure Container Apps, Railway, Render, and Fly.io all deploy Docker containers. Learning Docker once means you can deploy to any cloud platform — the deployment target is always a Docker image. Companies can switch cloud providers without rewriting deployment pipelines. This portability is one of Docker's most commercially valuable properties." },
    { num: "05", title: "Machine Learning Model Serving and MLOps", body: "ML models have exact dependency requirements — specific Python versions, CUDA versions, library versions. Docker packages the model, runtime, and all dependencies into a single container that runs identically on a developer's MacBook, a CI server, and a GPU production server. MLflow, BentoML, and every modern ML serving framework outputs Docker images as the deployment artifact." },
    { num: "06", title: "Database and Infrastructure Management", body: "Running multiple database versions, message queues, search engines, and cache servers without installing anything on the host machine. A developer working on three projects that need PostgreSQL 14, PostgreSQL 16, and MongoDB 7 runs each in a container — no version conflicts, no system-level installs, each with its own data volume. Infrastructure tools (pgAdmin, Kibana, Grafana) run in containers too." },
    { num: "07", title: "Reproducible Scientific Computing and Data Engineering", body: "Apache Spark, Airflow, Jupyter notebooks, and data processing pipelines need exact dependency versions to produce reproducible results. Docker packages the entire computational environment — Python version, library versions, system libraries — so a data pipeline run in 2024 can be reproduced exactly in 2028. ISRO, DRDO, and research institutions use Docker for this auditability requirement." },
  ],

  // ── SECTION 8: PROJECTS ──────────────────────────────────────────
  projects: {
    beginner: [
      { name: "Containerize an Existing Web App", desc: "Take a Flask/Django/Node.js app you've already built and write a Dockerfile for it. Build it, run it, verify it works identically to the non-containerized version.", teaches: "Dockerfile instructions (FROM, RUN, COPY, CMD), docker build and run commands, port publishing, layer caching order" },
      { name: "PostgreSQL + pgAdmin with Docker Compose", desc: "docker-compose.yml with PostgreSQL and pgAdmin services. Named volume for database persistence. Health check on PostgreSQL. Connect pgAdmin to the DB by service name.", teaches: "Docker Compose services, named volumes, health checks, inter-container networking by service name, environment variables" },
      { name: "Multi-Container Blog App", desc: "Django app + PostgreSQL + Redis in Docker Compose. Database migrations on startup. Static files served by Nginx in a third service.", teaches: "depends_on with health check conditions, running management commands in containers, Nginx as a reverse proxy in Compose" },
      { name: "Docker Image Size Challenge", desc: "Build the same Python app four ways: full python:3.12 image, python:3.12-slim, python:3.12-alpine, and multi-stage. Compare sizes. Document which tradeoffs matter.", teaches: "Base image selection, multi-stage builds, alpine vs slim, build context optimization, .dockerignore impact" },
    ],
    intermediate: [
      { name: "Full-Stack App with Docker Compose", desc: "React frontend + FastAPI backend + PostgreSQL + Redis + Celery worker + Nginx reverse proxy. Development Compose with bind mounts. Separate production Compose with versioned images.", teaches: "Multi-service Compose, development vs production configurations, Nginx proxying, named volumes, service dependencies" },
      { name: "GitHub Actions CI/CD Pipeline", desc: "On every push to main: build Docker image, run pytest inside a container (with PostgreSQL service), push image to GHCR with git SHA tag, deploy to Railway or Render via webhook.", teaches: "GitHub Actions workflow syntax, Docker layer caching in CI, container registry push, environment secrets, deployment automation" },
      { name: "Containerized ML Serving API", desc: "Train a scikit-learn model, save it, build a FastAPI serving container with the model included. Multi-stage: training stage + minimal serving stage. Test predictions via the containerized API.", teaches: "ML model containerization, multi-stage for ML, image size optimization for model artifacts, health check endpoint" },
      { name: "Docker Security Hardening", desc: "Take an existing Dockerfile and apply all security best practices: non-root user, read-only filesystem, distroless base, .dockerignore secrets exclusion, Trivy vulnerability scan in CI.", teaches: "Security-focused Dockerfile patterns, image scanning, secret management, minimal attack surface principles" },
    ],
    advanced: [
      { name: "Zero-Downtime Blue-Green Deployment", desc: "Script that builds new image, starts it alongside the old one, health-checks until new is healthy, switches Nginx upstream, then removes old container. Automated rollback on health check failure.", teaches: "Zero-downtime deployment patterns, health check polling, Nginx upstream switching, automated rollback logic" },
      { name: "Kubernetes Deployment with Helm", desc: "Deploy the full-stack app to local minikube with a Helm chart. Deployment, Service, Ingress, ConfigMap, Secret objects. values.yaml for environment-specific configuration.", teaches: "Kubernetes objects, Helm chart structure, values.yaml templating, kubectl commands, local Kubernetes with minikube" },
      { name: "Container Monitoring Stack", desc: "Prometheus + Grafana + cAdvisor in Docker Compose. Dashboard showing CPU, memory, network, and request metrics per container. Alert rules for memory threshold violations.", teaches: "Prometheus metric scraping, cAdvisor integration, Grafana dashboard creation, alert rules, container observability" },
      { name: "GitOps Pipeline with ArgoCD", desc: "GitHub Actions builds and pushes image on merge to main. ArgoCD watches a Helm chart repository and automatically syncs the Kubernetes cluster when the chart changes. Full audit trail in Git.", teaches: "GitOps principles, ArgoCD setup, sync policies, declarative deployment, separation of application and deployment repos" },
    ],
  },

  // ── SECTION 9: MISTAKES ──────────────────────────────────────────
  mistakes: [
    {
      title: "Wrong Order of Instructions — Breaking Layer Cache",
      explanation: "Putting COPY . . before RUN pip install -r requirements.txt means every code change triggers a full reinstall of all dependencies. Dependencies installation takes 2–5 minutes and runs on 100% of builds — even when only one line of source code changed.",
      tip: "Always copy dependency files first, install dependencies, then copy source code. COPY requirements.txt . → RUN pip install → COPY . . This ensures the dependency layer is cached for every build that doesn't change requirements.txt — reducing build time from 5 minutes to 10 seconds for most builds.",
      wrong: "COPY . .  # Invalidates ALL subsequent layers on any file change\nRUN pip install -r requirements.txt  # Reinstalls every time",
      correct: "COPY requirements.txt .  # Only invalidated when requirements.txt changes\nRUN pip install -r requirements.txt  # CACHED for most builds\nCOPY . .  # Only this layer rebuilds on code changes",
    },
    {
      title: "Running Containers as Root",
      explanation: "The default Docker container process runs as the root user. If an attacker exploits a vulnerability in your application running as root in a container, they may be able to escalate to root on the host machine. This is the most common Docker security mistake in production applications.",
      tip: "Always add a non-root user in your Dockerfile and switch to it with USER before CMD: RUN addgroup --system app && adduser --system --ingroup app app; USER app. This one change eliminates the most severe class of container escape vulnerabilities.",
      wrong: "FROM python:3.12-slim\nCOPY . .\nCMD [\"python\", \"app.py\"]  # Runs as root",
      correct: "FROM python:3.12-slim\nRUN addgroup --system app && adduser --system --ingroup app app\nCOPY --chown=app:app . .\nUSER app\nCMD [\"python\", \"app.py\"]  # Runs as non-root user",
    },
    {
      title: "Storing Secrets in Environment Variables in the Dockerfile",
      explanation: "ENV DATABASE_PASSWORD=secret in a Dockerfile permanently bakes the password into the image layer. Every image derived from this base, every developer who pulls the image, and every docker history command reveals the password in plain text.",
      tip: "Never set sensitive values in Dockerfile ENV instructions. Pass secrets at runtime via docker run -e or docker compose environment variables loaded from a .env file on the server. For production, fetch secrets from AWS Secrets Manager, GCP Secret Manager, or HashiCorp Vault at application startup.",
    },
    {
      title: "Not Using .dockerignore",
      explanation: "Without a .dockerignore, every docker build command sends your entire project directory — including .git history, node_modules (hundreds of MB), .venv, test files, .env secrets, and documentation — to the Docker daemon as the build context. Build context transfer takes 30–60 seconds before Docker even starts processing the first instruction.",
      tip: "Create a .dockerignore file in every project alongside the Dockerfile. Always include: .git, .env, .env.*, node_modules/, .venv/, venv/, __pycache__, *.pyc, tests/, docs/, *.md, .DS_Store. This reduces build context from hundreds of MB to just the files the Dockerfile actually needs.",
    },
    {
      title: "Using :latest Tag in Production Deployments",
      explanation: ":latest is mutable — it changes every time you push a new image. A deployment that references :latest cannot be reliably rolled back (you'd pull the latest broken version again), cannot be audited (which version is running?), and can change under you when a teammate pushes a new build.",
      tip: "Tag images with an immutable identifier in production — git commit SHA (myapp:sha-a7f3c89) or semantic version (myapp:1.4.2). Rollback means redeploying with the previous SHA tag. Auditing means checking which SHA is running. :latest is acceptable as an alias for convenience but should never be the primary production deployment reference.",
    },
    {
      title: "Not Adding Health Checks and Forgetting depends_on Conditions",
      explanation: "docker compose up starts all services simultaneously (respecting depends_on ordering but not readiness). The API container starts immediately when the database container starts — but PostgreSQL takes 5–15 seconds to be ready. Without a health check + service_healthy condition, the API sees 'connection refused' and crashes on startup.",
      tip: "Add HEALTHCHECK to your Dockerfile and a healthcheck block to database services in docker-compose.yml. Use depends_on: db: condition: service_healthy on services that need the database. This ensures the API only starts after PostgreSQL confirms it's ready to accept connections.",
    },
    {
      title: "Using Bind Mounts for Database Data",
      explanation: "volumes: - ./postgres-data:/var/lib/postgresql/data mounts a host directory as the PostgreSQL data directory. On macOS, this is 10–30x slower than a named volume (Docker Desktop filesystem virtualization overhead). It also has file permission issues on Windows and Linux CI.",
      tip: "Always use named volumes for database data: volumes: - postgres_data:/var/lib/postgresql/data. Named volumes are managed by Docker, have correct permissions, and perform at native speed on all platforms. Define named volumes at the bottom of docker-compose.yml under the top-level volumes: key.",
    },
    {
      title: "Building Large Images — Not Using Multi-Stage Builds",
      explanation: "A React application built with a full Node.js 20 image is 350MB. An Angular application with all Angular CLI tools is 400MB. These images must be pulled on every deployment — 5–10 minutes per pull on a typical CI server or cloud VM. They also have a large attack surface from build tools that aren't needed at runtime.",
      tip: "Use multi-stage builds: Stage 1 (builder) installs build tools and compiles the app. Stage 2 (runtime) uses nginx:alpine or python:3.12-slim and copies only the compiled output from Stage 1. The result for a React app: 25MB instead of 350MB. For Node.js APIs: 200MB instead of 500MB.",
    },
    {
      title: "Ignoring Container Resource Limits",
      explanation: "A container without memory limits can consume all available RAM on the host if the application has a memory leak or receives a traffic spike. This crashes other containers sharing the same host and can crash the host machine itself. In Kubernetes, pods without resource limits get no Quality of Service guarantees.",
      tip: "Set memory and CPU limits in docker-compose.yml (deploy.resources.limits) and in production container definitions (ECS task definition, Kubernetes resource limits). Start with reasonable estimates (512MB RAM, 0.5 CPU for a typical web API) and adjust based on production metrics.",
    },
    {
      title: "SSHing Into Production Containers to Fix Things",
      explanation: "Running docker exec -it production_api bash and making changes directly inside a running production container is the containerized equivalent of SSHing into a server and editing files. The change is lost when the container restarts, your image and docker-compose.yml don't reflect the fix, and no one on your team knows what changed.",
      tip: "Containers are immutable infrastructure. Fix bugs in source code, update the Dockerfile if the issue is environmental, rebuild the image, run tests in CI, and redeploy. Use docker exec only for diagnosis and investigation — never for applying fixes. If the change needs to persist, it belongs in the source code or Dockerfile.",
    },
    {
      title: "Not Separating Development and Production Docker Compose Configurations",
      explanation: "Development Compose has bind mounts that expose source code, DEBUG=True, exposed database ports on 0.0.0.0, and the build: context: instruction. Running this in production exposes your source code and database to the network and runs in debug mode.",
      tip: "Maintain two files: docker-compose.yml (development, bind mounts, local builds) and docker-compose.prod.yml (production overrides, versioned images, no bind mounts, ports bound to 127.0.0.1 only). Use docker compose -f docker-compose.yml -f docker-compose.prod.yml up -d for production deployments.",
    },
    {
      title: "Not Cleaning Up Docker Resources — Running Out of Disk Space",
      explanation: "Every docker build creates new image layers. Every docker run creates a new container (even after it exits). After weeks of development, unused images, stopped containers, and anonymous volumes can consume 20–100GB of disk space without warning.",
      tip: "Run docker system prune weekly during development to remove stopped containers, unused networks, and dangling images. docker system prune -a also removes unused images (the most space). docker volume prune removes unused volumes. Add --rm to docker run for test containers so they auto-delete on exit. Check disk usage with docker system df.",
    },
  ],

  // ── SECTION 10: INTERVIEW QUESTIONS ─────────────────────────────
  interviewQuestions: {
    beginner: [
      { q: "What is Docker and what problem does it solve?", a: "Docker is a platform for building, shipping, and running applications in containers. It solves the 'works on my machine' problem — the chronic mismatch between development, testing, and production environments. A Docker container packages the application, its runtime, libraries, and dependencies into a single portable artifact that runs identically on any machine with Docker installed, eliminating environment-related deployment failures." },
      { q: "What is the difference between a Docker image and a Docker container?", a: "An image is an immutable, built artifact — like a class definition or a blueprint. It contains the filesystem, code, runtime, and configuration needed to run an application. A container is a running instance of an image — like an object instantiated from a class. Multiple containers can run from the same image simultaneously. Containers are ephemeral — when stopped and removed, their state is lost (unless stored in a volume)." },
      { q: "What is a Dockerfile?", a: "A Dockerfile is a text file containing a series of instructions that Docker executes to build an image. Each instruction creates a layer in the final image. Key instructions: FROM (base image), RUN (execute commands during build), COPY (add files from build context), WORKDIR (set working directory), ENV (set environment variables), EXPOSE (document port), USER (switch to non-root user), and CMD (default command when container starts)." },
      { q: "What is Docker Compose and why is it used?", a: "Docker Compose is a tool for defining and running multi-container applications. A single docker-compose.yml file defines all services (web server, database, cache, background worker), their configuration, networking, and volumes. docker compose up starts all services together. It enables teams to run a complete application stack locally with a single command, eliminating manual service setup and configuration." },
      { q: "What is the difference between CMD and ENTRYPOINT in a Dockerfile?", a: "ENTRYPOINT defines the fixed executable that always runs when the container starts — it cannot be overridden with docker run arguments, only appended to. CMD provides default arguments that can be completely overridden by docker run arguments. Common pattern: ENTRYPOINT [\"/bin/sh\", \"-c\"] for a fixed shell, CMD [\"gunicorn server:app\"] for the overridable default command. If both are defined as exec form arrays, CMD arguments are appended to ENTRYPOINT." },
      { q: "What is a Docker registry?", a: "A Docker registry is a storage and distribution system for Docker images. Docker Hub is the default public registry. Private registries include AWS ECR (Elastic Container Registry), Google Artifact Registry, GitHub Container Registry (GHCR), and self-hosted registries. docker push uploads an image to a registry. docker pull downloads it. CI/CD pipelines push images after successful tests; deployment platforms pull images for deployment." },
      { q: "What is a Docker volume and why is it needed?", a: "A Docker volume is persistent storage that exists outside the container filesystem. Container filesystems are ephemeral — data written inside a container is lost when the container is removed. Named volumes (postgres_data:/var/lib/postgresql/data) persist database data independently of the container lifecycle. Bind mounts map a host directory into the container — used in development so code changes on the host immediately appear inside the container without rebuilding." },
      { q: "What is the purpose of .dockerignore?", a: ".dockerignore specifies files and directories to exclude from the Docker build context. Without it, docker build sends the entire project directory — including node_modules (100MB+), .git history, .env secrets, and test files — to the Docker daemon before processing begins, slowing builds significantly. Always exclude: .git, .env, node_modules/, venv/, __pycache__, tests/, and any sensitive credential files." },
      { q: "What does docker compose up -d do and how does it differ from docker compose up?", a: "docker compose up starts all services in the foreground — you see all container logs in the terminal and Ctrl+C stops all services. docker compose up -d (detached mode) starts all services in the background, returning the terminal immediately. Logs can be followed with docker compose logs -f. Use -d in production and when running multiple services you don't want to block the terminal." },
      { q: "How do containers communicate with each other in Docker Compose?", a: "Docker Compose creates an internal bridge network for all services in the same docker-compose.yml. Each service is reachable from other services using the service name as a hostname. If you have services named 'api' and 'db', the api service connects to PostgreSQL at host 'db', port 5432 — no IP addresses needed. This works because Docker's internal DNS resolves service names to container IP addresses automatically." },
    ],
    intermediate: [
      { q: "Explain Docker's layer caching mechanism and how to optimize for it.", a: "Every Dockerfile instruction creates a layer with a SHA256 hash. Docker checks if the instruction and all preceding layers are unchanged — if so, it reuses the cached layer (cache hit). The cache is invalidated for an instruction if: the instruction itself changed, a preceding layer changed, or a file copied with COPY/ADD changed. Optimization: put rarely-changing instructions (FROM, system package installs, dependency installs) before frequently-changing ones (COPY source code). This makes dependency installation hit cache on most code-only builds." },
      { q: "What is a multi-stage Docker build? Give a real example.", a: "Multi-stage builds use multiple FROM instructions, each starting a new stage. The final image can COPY files from intermediate stages, discarding everything else. Example: Stage 1 (node:20 builder) installs all dependencies and runs npm run build to compile React. Stage 2 (nginx:alpine) copies only the /dist output from Stage 1. Result: 25MB production image instead of 350MB — no Node.js, no build tools, no source code in production." },
      { q: "How do you handle database migrations in a containerized environment?", a: "Never run migrations as part of the main application container startup (CMD). This causes problems with horizontal scaling (multiple API containers running migrations simultaneously causes conflicts) and with health checks (container isn't healthy until migration finishes). Options: run migrations as a separate docker compose exec command after deployment, use an init container that runs migrations and completes before the API starts, or use migration tools that lock safely (Alembic, Django migrations)." },
      { q: "What is the difference between a bind mount and a named volume?", a: "Bind mount (./host/path:/container/path): maps a specific host filesystem path into the container. Changes on host immediately visible inside container — ideal for development live-reload. Platform-specific path issues on Windows. Named volume (volume_name:/container/path): Docker manages the storage location on the host. Portable across platforms, correct permissions, better performance on macOS. Use bind mounts for source code in development; named volumes for database data and persistent application state." },
      { q: "How do you pass secrets to containers securely in production?", a: "Never hardcode in Dockerfile ENV, never commit .env files. Options: Pass via docker run -e from CI/CD environment variables (encrypted in CI). Docker secrets (Swarm-native) mount secrets as files in /run/secrets/. Kubernetes Secrets (base64-encoded, stored in etcd). Cloud-native: AWS Secrets Manager / GCP Secret Manager — application fetches secrets at startup via SDK. HashiCorp Vault — centralized secrets management with dynamic credentials, fine-grained access control, and audit logs." },
      { q: "What is Docker's internal DNS and how does service discovery work?", a: "Docker's embedded DNS server resolves container/service names to IP addresses within the same network. In Docker Compose, every service name becomes a DNS hostname. The 'api' service connects to PostgreSQL at host 'db:5432' — Docker resolves 'db' to the PostgreSQL container's internal IP. This works because all Compose services are on the same default bridge network unless configured otherwise. Custom networks provide additional isolation: services on different networks cannot reach each other by name." },
      { q: "How do you debug a container that exits immediately after starting?", a: "1) docker ps -a to see exited containers. 2) docker logs container_name to read stdout/stderr from the crashed container. 3) Override the CMD to keep it alive: docker run -it myapp:1.0 bash — this drops into a shell instead of running the application, allowing you to investigate the filesystem and run commands manually. 4) docker inspect container_name for exit code and OOMKilled flag. 5) Check that required environment variables are set — many apps exit immediately on missing config." },
      { q: "How do you implement a CI/CD pipeline with Docker?", a: "Standard pipeline: 1) Checkout code. 2) Build Docker image (with layer cache). 3) Run tests inside a container from that image (with service containers for database and cache). 4) Run security scan (Trivy) on the image. 5) If tests pass and it's a merge to main: push image to registry with git SHA tag. 6) Deploy: update ECS task definition / Cloud Run revision / docker compose on server to use new SHA tag. The image that passed tests is exactly what runs in production." },
      { q: "What are Docker health checks and how do they affect deployments?", a: "HEALTHCHECK in a Dockerfile defines a command Docker runs periodically to verify the container is working correctly. Docker marks the container as healthy, unhealthy, or starting. Compose uses condition: service_healthy in depends_on to wait for a service to be healthy before starting dependent services. In production, orchestration platforms (ECS, Kubernetes) use health checks to: determine when a new deployment is ready to receive traffic, remove unhealthy containers from the load balancer, and restart containers that become unhealthy." },
      { q: "What is Docker BuildKit and why is it important?", a: "BuildKit is the modern Docker build backend (default since Docker 23.0). Key improvements over legacy builder: parallel stage building (multi-stage builds run in parallel, not sequentially), cache mounts (RUN --mount=type=cache,target=/root/.cache/pip pip install caches between builds without baking into image), secrets mounts (RUN --mount=type=secret,id=mysecret passes secrets to build without creating layers), better output with progress display, and SBOM/provenance attestations for supply chain security." },
      { q: "How do you optimize Docker image size?", a: "Use minimal base images (python:3.12-slim vs python:3.12 — saves 900MB). Multi-stage builds — don't include build tools in runtime image. Chain RUN commands: RUN apt-get update && apt-get install -y pkg && rm -rf /var/lib/apt/lists/* — single layer, no apt cache. pip install --no-cache-dir. Copy only needed files (good .dockerignore). Use .dockerignore to exclude tests, docs, .git. Consider distroless images (no shell, no package manager) for maximum security and minimal size." },
    ],
    advanced: [
      { q: "How would you architect a zero-downtime deployment system for a containerized application?", a: "Blue-green deployment: run old (blue) and new (green) containers simultaneously. New container goes through health checks. Once healthy, load balancer switches traffic from blue to green. Remove blue container. If health checks fail, keep blue running and alert. Rolling deployment (Kubernetes default): replace containers one by one — maintain n-1 healthy containers during deployment. Canary: route 5% of traffic to new version, monitor error rates, gradually increase to 100% if healthy. Requires: idempotent migrations (run before deployment), stateless containers, sticky sessions handled at load balancer." },
      { q: "Explain the relationship between Docker and Kubernetes.", a: "Docker packages applications as container images and runs individual containers. Kubernetes is an orchestration platform that manages containers at scale across a cluster of machines. Kubernetes doesn't run containers directly — it calls a container runtime (containerd, which is Docker's core runtime) to start containers. Kubernetes adds: declarative deployments (desired state), horizontal auto-scaling, rolling updates, self-healing (restart failed pods), service discovery, load balancing, and configuration management. Docker is the packaging standard. Kubernetes is the deployment and operations platform built on that standard." },
      { q: "What is a Docker build context and how does it affect build performance?", a: "The build context is the set of files sent to the Docker daemon when docker build runs. By default it's the entire directory specified (usually .). The daemon must receive the entire context before starting any instruction — large contexts (node_modules, .git, build artifacts) cause multi-minute delays before the first FROM even executes. Optimization: comprehensive .dockerignore, build from a minimal directory containing only needed files, use --build-context in BuildKit to provide named additional contexts. docker build -f Dockerfile .. sends context from the parent directory but uses the Dockerfile in the current directory." },
      { q: "How do you handle persistent storage for stateful applications in container environments?", a: "Stateful applications (databases, file storage) in containers require careful volume management. Local named volumes work for single-host deployments but don't work across multiple hosts. For multi-host: use cloud storage volumes (AWS EBS/EFS, GCP Persistent Disk) mounted to the specific node running the database container, or run databases outside the container cluster entirely (managed databases: RDS, Cloud SQL, Atlas) — the recommended approach for production. Object storage (S3, GCS) for uploaded files. Redis or DynamoDB for session state. Design for stateless application containers wherever possible." },
      { q: "What are container security scanning tools and how do you integrate them into CI?", a: "Trivy (free, fast, comprehensive): scans OS packages and application dependencies for known CVEs. Grype (Anchore, free): similar scope to Trivy. Docker Scout (Docker-native, paid tiers). Integration in CI: run scanner on the built image before pushing, exit with non-zero code on HIGH/CRITICAL vulnerabilities to fail the build. Set up base image update automation (Dependabot, Renovate) to get new base image versions when vulnerabilities are patched. Maintain SBOM (Software Bill of Materials) with docker build --sbom=true for supply chain auditability." },
      { q: "How do you implement container resource management in a multi-tenant environment?", a: "In Docker Compose: deploy.resources.limits (memory, cpus) and reservations. In Kubernetes: resources.limits and resources.requests per container — limits prevent runaway consumption, requests determine scheduling decisions. For true multi-tenancy: separate Kubernetes namespaces per tenant with ResourceQuota objects (total CPU/memory per namespace) and LimitRange objects (per-pod defaults and maxima). Network policies to prevent cross-tenant communication. cgroups v2 (default in modern Linux) provides more precise resource accounting than v1." },
      { q: "How does container networking work at the Linux kernel level?", a: "Docker uses Linux kernel features: network namespaces create isolated network stacks (each container has its own eth0 interface with its own IP). Virtual ethernet pairs (veth) connect the container namespace to the host namespace. A bridge (docker0 for default network, custom bridges for user-defined networks) connects all veth interfaces for containers on the same network. iptables rules handle NAT (port publishing: host:8000 → container:8000) and network policy. Overlay networks (Docker Swarm, Kubernetes) use VXLAN tunneling to extend layer-2 connectivity across physical hosts." },
      { q: "What is GitOps and how does it relate to Docker deployments?", a: "GitOps is a deployment methodology where the desired state of all infrastructure and applications is declared in Git repositories. Changes to deployed systems happen only through Git commits — no manual kubectl apply or SSH deployments. Implementation: a Git repository contains Kubernetes manifests or Helm chart values with specific image tags (SHA-based). ArgoCD or Flux watches the repository and automatically syncs the cluster to match. CI pipeline updates the image tag in the deployment repository after a successful build. The audit trail for any deployment change is a Git commit — who changed what, when, reviewed by whom." },
      { q: "How do you manage configuration and secrets across development, staging, and production container environments?", a: "Configuration per environment: environment-specific .env files (not committed), injected via CI/CD platform secrets (GitHub Actions secrets, GitLab CI variables). Kubernetes ConfigMaps for non-sensitive config, Secrets for sensitive values (base64-encoded in etcd, ideally encrypted at rest). Sealed Secrets for encrypting Kubernetes Secrets in Git. Centralized secrets management: HashiCorp Vault with Kubernetes auth backend (pods authenticate via service account), AWS Secrets Manager with IAM role (no credential needed), or GCP Secret Manager with Workload Identity. 12-factor app principle: all config comes from environment variables, never from code or images." },
      { q: "What are the key differences between Docker Swarm and Kubernetes?", a: "Docker Swarm: simple, built into Docker, low learning curve, adequate for smaller deployments (10–50 containers). Native docker-compose.yml-compatible (deploy section). Limited ecosystem — no Helm, no CRDs, no auto-scaling beyond replica counts. Kubernetes: complex, industry standard, enormous ecosystem (Helm, Operators, ArgoCD, Prometheus). Auto-scaling (HPA, KEDA), advanced scheduling, multi-cloud portability, comprehensive RBAC, extensible with Custom Resource Definitions. Kubernetes is the right choice for production scale. Swarm is the right choice for teams that need simple multi-container orchestration without Kubernetes complexity." },
    ],
  },

  // ── SECTION 11: COMPARISON ───────────────────────────────────────
  comparison: {
    headers: ["Feature", "Docker", "Virtual Machines (VMs)", "Bare Metal / Manual Deploy"],
    rows: [
      { feature: "Isolation Level", react: "Process-level (namespace + cgroups)", vue: "Full OS virtualization (hypervisor)", angular: "No isolation — shared OS" },
      { feature: "Startup Time", react: "Milliseconds to seconds", vue: "Minutes (full OS boot)", angular: "N/A (process start only, no image pull)" },
      { feature: "Memory Overhead", react: "MBs per container (shared kernel)", vue: "GBs per VM (full OS per VM)", angular: "Minimal (no virtualization overhead)" },
      { feature: "Portability", react: "Runs identically everywhere Docker is installed", vue: "Portable but large image files (GBs)", angular: "Not portable — tied to specific OS/config" },
      { feature: "Dependency Isolation", react: "Complete — each container has its own dependencies", vue: "Complete — each VM has its own OS", angular: "None — all apps share system dependencies" },
      { feature: "'Works on my machine' problem", react: "Eliminated — same image everywhere", vue: "Mostly eliminated — OS differences can still exist", angular: "Chronic — every environment diverges" },
      { feature: "Security Isolation", react: "Good — kernel shared (risk if container escapes)", vue: "Best — hypervisor separation", angular: "None — all processes share OS" },
      { feature: "Density (per host)", react: "Dozens to hundreds of containers", vue: "Typically 5–20 VMs", angular: "N/A — limited by OS process limits" },
      { feature: "CI/CD Integration", react: "Native — every CI platform speaks Docker", vue: "Heavy — VM imaging is slow in CI", angular: "Manual — scripts, SSH, configuration management" },
      { feature: "Cloud Compatibility", react: "Runs on every cloud via managed container services", vue: "Vendor-specific VM formats (AMI, VMDK)", angular: "Direct server management required" },
      { feature: "Learning Curve", react: "Moderate — 2–4 weeks to production confidence", vue: "High — OS administration, hypervisor knowledge", angular: "Low initially, high at scale (configuration management)" },
    ],
  },

  // ── SECTION 12: PROS & CONS ──────────────────────────────────────
  pros: [
    "Eliminates environment inconsistency — the container runs identically on every machine with Docker installed; 'works on my machine' becomes a historical curiosity",
    "Fast, lightweight, and dense — containers start in milliseconds, use MBs of memory overhead, and you can run dozens on hardware that would support 3–5 VMs",
    "Reproducible builds — a Dockerfile is deterministic; the same Dockerfile produces the same image; builds are auditable, versionable, and reproducible months or years later",
    "Universal CI/CD integration — every CI/CD platform speaks Docker; building, testing, and deploying containers is the standard workflow across GitHub Actions, GitLab CI, Jenkins, and every cloud platform",
    "Enables microservices — independent container per service means independent deployment, independent scaling, and independent language/runtime choice without configuration management complexity",
    "Kubernetes prerequisite — every Kubernetes deployment is a Docker container; learning Docker is the mandatory first step to every cloud-native architecture",
    "Developer experience transformation — docker compose up replaces hours of README-based local setup; onboarding a new developer becomes a git clone away from a full running environment",
    "Storage efficiency — Docker layers are shared; two images that share a base layer (python:3.12-slim) store that layer once; pulling a new version of an image only downloads the changed layers",
  ],
  cons: [
    "Linux-native — Docker Desktop on Mac and Windows is a Linux VM under the hood; bind mount performance on macOS is significantly slower than native Linux (partially mitigated by VirtioFS)",
    "Stateful application complexity — databases, message queues, and file systems require persistent volume management; Kubernetes makes this harder, not easier, compared to traditional server deployments",
    "Security if misconfigured — running as root, privileged containers, and exposed Docker socket (/var/run/docker.sock) create serious host-level security vulnerabilities if not explicitly prevented",
    "Learning curve for networking — Docker's networking model (namespaces, bridges, overlay networks, port publishing) is non-obvious and requires deliberate study to understand and troubleshoot",
    "Not suitable for every workload — GPU-accelerated workloads require NVIDIA Container Toolkit; GUI applications need X11/Wayland forwarding; some kernel-level operations require privileged mode",
    "Docker Desktop licensing — Docker Desktop is free for personal use but requires a paid subscription for commercial use in companies with revenue over $10M or 250+ employees (as of 2022)",
    "Resource overhead accumulates — without regular cleanup (docker system prune), unused images, stopped containers, and anonymous volumes silently consume 20–100GB of disk over weeks of development",
  ],

  // ── SECTION 13: FUTURE SCOPE ─────────────────────────────────────
  futureScope: [
    "Docker's role as the universal packaging standard is structural and permanent. Kubernetes, AWS ECS, Google Cloud Run, Azure Container Apps, Railway, Render, and Fly.io all deploy Docker containers. The Open Container Initiative (OCI) has standardized the image format, meaning even tools that don't use Docker directly (Podman, containerd, nerdctl) produce and consume the same image format. A developer who builds a Docker image today can run it on any compliant runtime for the foreseeable future. Docker's position as the packaging standard for cloud-native software is as secure as JavaScript's position as the language of the web.",
    "WebAssembly (Wasm) is emerging as a potential complement to Docker for specific use cases — serverless functions, edge computing, plugin systems — where Docker's Linux container model is too heavy. Docker Desktop already supports Wasm runtimes alongside traditional containers. But for long-running services, multi-process applications, and stateful workloads, Docker containers remain the right model. Wasm and Docker are more complementary than competitive for the foreseeable future.",
    "The Kubernetes ecosystem — which runs on Docker containers — is the primary growth area for Docker expertise. In India's technology market, Kubernetes is transitioning from an advanced skill to a standard expectation for senior backend and DevOps engineers. Managed Kubernetes services (GKE on Google Cloud, EKS on AWS, AKS on Azure) abstract the control plane complexity, making Kubernetes accessible to developers who previously needed specialized infrastructure knowledge. Docker-to-Kubernetes is the natural career progression for every developer who containerizes their applications — and it is the path to ₹40–60 LPA platform and SRE roles.",
    "Supply chain security and Software Bill of Materials (SBOM) are becoming regulatory requirements in financial services, healthcare, and government software. Docker BuildKit's --sbom and --provenance flags generate machine-readable records of every component in a container image. Sigstore/Cosign enables cryptographic signing of container images — verifying that an image came from a specific build pipeline and hasn't been tampered with. Indian banks, insurance companies, and government digital services will increasingly require SBOM and image signing as procurement requirements. Docker developers who understand these supply chain security features are positioned for the security-focused DevSecOps specialization.",
    "Platform engineering — the practice of building internal developer platforms that abstract infrastructure complexity from application developers — is the fastest-growing DevOps specialization in 2026. Platform engineers build the container deployment abstractions (internal CI/CD pipelines, self-service deployment portals, standardized Helm charts) that hundreds of application developers use daily. In India's large IT services companies and product companies, platform engineering teams use Docker, Kubernetes, Terraform, and ArgoCD as their core toolset. Senior platform engineers at Indian unicorns and MNC India offices regularly earn ₹50–80 LPA — the highest compensation tier reachable from a Docker foundation.",
  ],

  // ── SECTION 14: ACTION PLAN ──────────────────────────────────────
  actionPlan: [
    { week: "Week 1–2", title: "Install Docker and Learn by Running, Not Reading", desc: "Install Docker Desktop. Don't start with tutorials — start with running real containers. Run a PostgreSQL database: docker run -e POSTGRES_PASSWORD=test postgres:16. Connect to it. Run a Redis instance. Run an Nginx web server and visit it in your browser. Run a Jupyter notebook server. Every docker run command teaches you ports, volumes, environment variables, and image names by doing, not reading. Look up what each flag does as you use it." },
    { week: "Week 3–4", title: "Write Your First Dockerfiles and Push to a Registry", desc: "Take an application you've already built — a Django API, a FastAPI service, a Node.js app — and write a Dockerfile for it. Build it. Run it. Fix the errors. Then optimize: add .dockerignore, reorder instructions for cache efficiency, switch to a slim base image. Create a free Docker Hub account and push your image. The act of pushing to and pulling from a registry makes the build-ship-run cycle concrete." },
    { week: "Week 5–7", title: "Docker Compose for Your Full Application Stack", desc: "Write a docker-compose.yml that runs your application with its real dependencies — PostgreSQL, Redis, and your application service. Add health checks to the database, add depends_on with service_healthy to your app. Test that docker compose down -v followed by docker compose up starts everything cleanly. Add a Makefile with make up, make down, make migrate, make test shortcuts. Show this to every developer you know — the reaction will motivate the rest of the learning." },
    { week: "Week 8–12", title: "Multi-Stage Builds, Security, and CI/CD", desc: "Rebuild your Dockerfile as a multi-stage build with separate development and production targets. Add a non-root USER. Measure the before and after image size. Set up a GitHub Actions pipeline: build image → run tests in container → push to GHCR on merge to main. Add Trivy image scanning to the pipeline. Add layer cache with cache-from: type=gha. This pipeline is the foundation of every professional deployment workflow you'll build for the rest of your career." },
    { week: "Week 13–18", title: "Production Deployment and Advanced Patterns", desc: "Deploy your containerized application to a real cloud environment. Start with Railway or Render (simplest — native Docker support). Then try Google Cloud Run (serverless containers — surprisingly easy). Learn to pull a specific SHA-tagged image, confirm it runs, and roll back by redeploying the previous SHA. Learn docker logs, docker exec, docker stats as debugging tools. At this point you have genuine, deployment-tested Docker knowledge that belongs on a resume." },
    { week: "Week 19+", title: "Kubernetes Introduction and Job Readiness", desc: "Install minikube or kind for local Kubernetes. Deploy your containerized application as a Kubernetes Deployment with a Service and Ingress. Learn kubectl get, describe, logs, exec, apply. Docker knowledge is table stakes for most cloud and DevOps roles — Kubernetes knowledge is the differentiator. Study Docker interview questions: layer caching, multi-stage builds, networking, volumes, health checks, CI/CD integration, security best practices. Docker appears in 70%+ of backend and DevOps job descriptions — you are now prepared for every one of them." },
  ],
};
