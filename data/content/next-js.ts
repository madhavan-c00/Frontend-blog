import type { TechContent } from './types';

export const nextjsContent: TechContent = {
  techId: 'nextjs',
  readTime: '30–35 min',
  difficulty: 'Beginner to Advanced',
  lastUpdated: '2026',

  // ── OPENING HOOK ─────────────────────────────────────────────────
  openingHook:
    "If you want to be the developer that product companies, VC-backed startups, and high-growth SaaS businesses in India fight to hire in 2026, learn Next.js. Not because it's new — it's been the dominant React framework since 2019. But because Next.js is the framework that powers the software the world's fastest-growing companies ship every day: Y Combinator startups, Razorpay's merchant portals, Zepto's ops dashboards, and the SEO-hungry e-commerce platforms that rank on Google's first page. These companies don't pick Next.js by accident. They pick it because Next.js solves the problem React alone never could — SEO, performance, and full-stack capability in a single framework. Server-side rendering out of the box, API routes built in, file-based routing with zero configuration, image optimization, edge functions, and the App Router that makes server components the new default. The result: Next.js developers at product companies and funded startups consistently command higher salaries than vanilla React developers, join smaller teams with bigger impact, and build the kind of products that appear in TechCrunch. A solid Next.js developer with two deployed projects, strong understanding of the App Router, and Server Components knowledge is positioned for a ₹6–16 LPA role in 2026 — and ₹25–50 LPA within 3–4 years. This is not a framework overview. This is the complete, no-fluff Next.js roadmap — from zero concepts to job-ready developer.",

  // ── SECTION 1: INTRODUCTION ──────────────────────────────────────
  introText: [
    "Next.js is a React framework built by Vercel that transforms React from a client-side rendering library into a full-stack application platform. Where React answers only the question 'how do I render UI components efficiently?', Next.js answers every question a production web application needs answered: How do pages get served? How does the server communicate with the database? How do search engines index the content? How do images load fast? How does authentication work? How is the application deployed? Next.js ships with file-based routing, multiple rendering strategies (SSR, SSG, ISR, Server Components), API routes, middleware, image optimization, font optimization, metadata API for SEO, and a deployment platform (Vercel) that turns a git push into a live URL in 30 seconds.",
    "The distinction between React and Next.js is not just about features — it is about where code runs. React is purely client-side: JavaScript runs in the browser after HTML is delivered. Next.js blurs the client-server boundary by introducing React Server Components (RSC) — components that run on the server, have direct database access, never ship their JavaScript to the browser, and stream their HTML output to the client. This architecture, stabilized in Next.js 13 App Router and refined through Next.js 14 and 15, represents the biggest shift in React development since hooks. Developers who understand Server Components and the App Router are writing the React of the next decade — not just a version bump.",
    "Next.js has become the default framework for product-first companies building on React in India. Razorpay, Zepto, CRED, Groww, Meesho, and hundreds of high-growth startups use Next.js for their customer-facing interfaces. Global companies like Notion, Linear, Vercel, GitHub (in parts), TikTok's web presence, and Netflix's marketing sites run on Next.js. For Indian developers, Next.js is the primary skill that separates developers who work on internal dashboards at IT services companies from developers who build the consumer products that millions of Indians use daily. In 2026, Next.js is the single most valuable React skill for developers targeting product companies, remote roles, and the global freelance market.",
  ],

  realWorldUsages: [
    "Vercel — Next.js is built by Vercel; the Vercel dashboard, documentation, and deployment platform itself are Next.js applications",
    "Notion — the Notion marketing site, blog, and parts of the docs infrastructure are built with Next.js for SEO and performance",
    "Linear — the engineering-tool startup's marketing and changelog site use Next.js ISR for fast builds and dynamic content",
    "Razorpay — merchant documentation, product marketing pages, and developer portal built with Next.js for SEO and performance",
    "Groww — stock and mutual fund information pages, SEO-critical instrument detail pages, and blog content served via Next.js SSG",
    "CRED — marketing site, product landing pages, and blog infrastructure built with Next.js for speed and Google ranking",
    "Zepto — product catalog pages, city landing pages, and SEO-indexed grocery category pages built with Next.js SSG + ISR",
    "GitHub — GitHub's marketing and documentation site (docs.github.com) is a Next.js application with ISR-powered content",
    "HashiCorp — developer documentation, product sites, and landing pages for Terraform, Vault, and Consul all run on Next.js",
    "TikTok — TikTok's web profile pages, viral video embed pages, and web player built with Next.js for SEO indexability",
    "Twitch — parts of Twitch's marketing site and streamer landing pages use Next.js for edge-rendered performance",
    "Loom — the Loom marketing site, pricing pages, and public video share pages built with Next.js",
  ],

  // ── SECTION 2: WHY LEARN ─────────────────────────────────────────
  whyLearn: {
    demand:
      "Search 'Next.js developer' on LinkedIn India today and you'll find it is the single most requested React framework skill at product companies, funded startups, and remote-friendly Indian tech firms. The 2025 Stack Overflow Developer Survey listed Next.js as the most-used web framework among professional developers for the second consecutive year. In India's startup ecosystem, 'React developer' has evolved into 'Next.js developer' as the expected baseline — most product companies building on React have migrated or built new products on Next.js since 2023. The global remote job market (Toptal, Upwork, Arc.dev, Remote.com) lists Next.js in 60%+ of senior frontend and full-stack job descriptions. Lower competition than general React roles, premium salary positioning, and access to remote global opportunities make Next.js the highest-ROI frontend specialization for Indian developers in 2026.",
    jobRoles: [
      { role: "Next.js Developer", desc: "The most commonly listed specialized role — build SEO-optimized, performant web applications using the App Router, Server Components, and modern data fetching patterns. Deep expertise in rendering strategies (SSG, SSR, ISR, RSC) and deployment expected." },
      { role: "Frontend Engineer (React/Next.js)", desc: "Broader frontend role at product companies — component architecture, performance optimization, Core Web Vitals, API integration, and ownership of user-facing features. Next.js is the expected stack." },
      { role: "Full-Stack Developer (Next.js + Node/Prisma)", desc: "Own the complete product — Next.js frontend, API routes as backend, Prisma/Drizzle ORM for database, deployed on Vercel or AWS. The highest-value single-developer profile at early-stage startups." },
      { role: "Software Engineer (Product)", desc: "Mid-size product companies building consumer applications hire Next.js engineers to own specific features end-to-end — from database schema to UI component to deployment." },
      { role: "Growth/Marketing Engineer", desc: "Specialized role at SaaS and consumer companies — build SEO-optimized landing pages, A/B test UIs, instrument analytics, and ship CMS-integrated content sites using Next.js + a headless CMS (Contentful, Sanity, Strapi)." },
      { role: "Tech Lead / Senior Next.js Engineer", desc: "After 3–4 years: architect the App Router structure, define data fetching conventions, implement caching strategies, own Core Web Vitals metrics, lead migration from Pages Router to App Router in legacy codebases." },
    ],
    whyCompanies: [
      { reason: "SEO out of the box", detail: "React's SPA model renders blank HTML that Google's bot sees before JavaScript executes. Next.js renders full HTML on the server — product pages, blog posts, and e-commerce listings are fully indexed from day one. For any company that depends on organic search traffic, Next.js is not optional." },
      { reason: "Full-stack in one codebase", detail: "Next.js API routes and Server Actions allow backend logic to live in the same repository as the frontend. No separate Express server to deploy, no CORS issues between services, no separate backend team for simple endpoints. Small teams ship full features without DevOps overhead." },
      { reason: "Multiple rendering strategies", detail: "Static pages for marketing content (SSG — zero server cost), dynamic pages for user-specific data (SSR), incrementally updated content for catalog pages (ISR), server-side data fetching without client-side waterfalls (RSC). One framework covers every rendering requirement a product company has." },
      { reason: "Vercel deployment infrastructure", detail: "Push to main, app is live in 45 seconds with a CDN-backed URL, preview deployments on every PR, automatic image optimization, edge functions, and Web Analytics — all without DevOps configuration. Startups use Vercel as their entire deployment infrastructure. This velocity is why Next.js + Vercel is the standard startup stack in 2026." },
    ],
    salaryRange: "₹5 LPA – ₹14 LPA (Freshers with portfolio) | ₹14 LPA – ₹35 LPA (Mid-Level, 2–4 years) | ₹35 LPA – ₹80 LPA (Senior/Architect, 5+ years + Remote)",
    careerNote:
      "Next.js is not a ceiling — it's the product developer's foundation. Once you're solid in Next.js, you layer on TypeScript (already expected), Prisma or Drizzle ORM for full-stack capability, Tailwind CSS for rapid UI development, tRPC for end-to-end type-safe APIs, React Query for client-side data management, and Playwright for E2E testing. Senior Next.js engineers with strong Core Web Vitals knowledge and App Router architecture experience at Indian product companies and remote-first global startups regularly earn ₹40–80 LPA. The Next.js career path is the highest-compensation trajectory in Indian product-focused frontend development — especially for developers targeting remote global opportunities.",
  },

  // ── SECTION 3: HOW IT WORKS ──────────────────────────────────────
  howItWorks: {
    intro:
      "Think of Next.js like a smart restaurant with both a kitchen (server) and a dining area (client). Some dishes are pre-made in the morning and ready to serve instantly (Static Site Generation — SSG). Some are cooked fresh when a customer orders (Server-Side Rendering — SSR). Some are pre-made but refreshed periodically (Incremental Static Regeneration — ISR). The newest kitchen upgrade lets chefs (Server Components) prepare ingredients and send the plated dish to the table — the diner never sees the kitchen, the recipes stay private, and the food arrives faster than if the diner had to cook it themselves. Only interactive elements — choosing toppings, adjusting quantities — happen at the table (Client Components). This separation of where work happens is the core of Next.js's App Router architecture.",
    vdomSteps: [
      { num: "1", title: "Request Hits the Next.js Server", text: "A user visits a URL. Next.js receives the request. The App Router matches the URL to a segment in the app/ directory. Next.js checks if the matched page is statically generated (cached HTML served immediately from CDN), server-rendered (HTML generated fresh on this request), or a mix (RSC payload + cached shells). The routing decision happens in milliseconds." },
      { num: "2", title: "Server Components Execute on the Server", text: "For the matched page, Next.js runs the Server Component tree on the server. Server Components can directly await database queries (via Prisma, Drizzle, or raw SQL), read environment variables, call internal APIs, and access the filesystem — with none of this code ever shipping to the browser. The React component tree is computed, and an HTML stream begins flowing to the client." },
      { num: "3", title: "HTML Streams to the Browser", text: "Next.js uses React's streaming capability to send the page's outer HTML shell first — headers, nav, layout. Suspense boundaries act as placeholders for slower data. As server-side data fetching completes for each section, HTML chunks stream in and replace Suspense fallbacks. The user sees content progressively — no blank white screen waiting for a full page render." },
      { num: "4", title: "Client Components Hydrate", text: "After the HTML arrives, Next.js sends the JavaScript for Client Components — only those marked with 'use client'. React hydrates these interactive components on the browser, attaching event listeners and activating state. The rest of the page — all Server Components — has no JavaScript on the client. Smaller bundles, faster interaction readiness." },
      { num: "5", title: "Client-Side Navigation Takes Over", text: "After the initial load, Next.js's client-side router handles subsequent navigation. Clicking a link doesn't trigger a full page reload — Next.js fetches only the new page's RSC payload (a lightweight JSON-like format), applies it to the existing React tree, and re-renders only the changed parts. Navigation feels instant. Server state is preserved for layouts that don't change between routes." },
    ],
    componentCode: `// THE NEXT.JS APP ROUTER DATA FLOW — one complete feature, all concepts connected

// app/products/page.tsx — SERVER COMPONENT (default in App Router)
// This component runs on the server. No 'use client'. No useEffect. No loading spinners.
// Direct database access. Zero JS shipped to browser for this component.

import { Suspense } from 'react';
import { db } from '@/lib/db';                    // Prisma or Drizzle — direct DB access
import { ProductGrid } from '@/components/product-grid';
import { ProductFilters } from '@/components/product-filters';
import { ProductGridSkeleton } from '@/components/skeletons';
import type { SearchParams } from '@/types';

interface ProductsPageProps {
  searchParams: { category?: string; sort?: string; page?: string; q?: string };
}

// Server Component — async function, direct DB query, no client-side fetch
export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const { category = 'all', sort = 'newest', page = '1', q = '' } = searchParams;

  // generateMetadata runs separately — used for <head> SEO tags
  // No useEffect needed — just async/await

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      {/* ProductFilters is a Client Component — it needs interactivity */}
      <ProductFilters initialCategory={category} initialSort={sort} />
      {/* Suspense wraps async Server Component — shows skeleton while data loads */}
      <Suspense fallback={<ProductGridSkeleton />} key={JSON.stringify(searchParams)}>
        <ProductList category={category} sort={sort} page={Number(page)} query={q} />
      </Suspense>
    </main>
  );
}

// Async Server Component — fetches data directly from DB, streams HTML
async function ProductList({ category, sort, page, query }: SearchParams) {
  // Direct Prisma query — runs on the server, never exposed to the client
  const [products, total] = await Promise.all([
    db.product.findMany({
      where: {
        ...(category !== 'all' && { category }),
        ...(query && { name: { contains: query, mode: 'insensitive' } }),
      },
      orderBy: sort === 'price-asc' ? { price: 'asc' }
              : sort === 'price-desc' ? { price: 'desc' }
              : { createdAt: 'desc' },
      skip: (page - 1) * 12,
      take: 12,
      include: { images: { take: 1 }, seller: { select: { name: true } } },
    }),
    db.product.count({ where: { ...(category !== 'all' && { category }) } }),
  ]);

  if (!products.length) return <EmptyState query={query} />;
  return <ProductGrid products={products} total={total} page={page} />;
}

// app/products/page.tsx — generateMetadata for SEO
export async function generateMetadata({ searchParams }: ProductsPageProps) {
  const { category, q } = searchParams;
  const title = q
    ? \`Search results for "\${q}" | Products\`
    : category && category !== 'all'
      ? \`\${category.charAt(0).toUpperCase() + category.slice(1)} Products | ShopIndia\`
      : 'All Products | ShopIndia';
  return {
    title,
    description: \`Browse \${category !== 'all' ? category : 'all'} products on ShopIndia. Fast delivery, best prices.\`,
    openGraph: { title, type: 'website' },
  };
}

// components/product-filters.tsx — CLIENT COMPONENT (needs useState, router.push)
'use client';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useCallback, useTransition } from 'react';

const CATEGORIES = ['all', 'electronics', 'clothing', 'home', 'books', 'sports'];
const SORT_OPTIONS = [
  { value: 'newest', label: 'Newest First' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
];

export function ProductFilters({ initialCategory, initialSort }: {
  initialCategory: string;
  initialSort: string;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const updateFilter = useCallback((key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(key, value);
    params.set('page', '1');  // Reset to page 1 on filter change
    startTransition(() => {
      router.push(\`\${pathname}?\${params.toString()}\`);  // Triggers server re-render
    });
  }, [router, pathname, searchParams]);

  return (
    <div className={\`flex gap-4 mb-6 \${isPending ? 'opacity-60 pointer-events-none' : ''}\`}>
      <div className="flex gap-2">
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => updateFilter('category', cat)}
            className={\`px-4 py-2 rounded-full text-sm font-medium transition \${
              initialCategory === cat ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }\`}>
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>
      <select
        value={initialSort}
        onChange={e => updateFilter('sort', e.target.value)}
        className="ml-auto border rounded-lg px-3 py-2 text-sm">
        {SORT_OPTIONS.map(opt => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
    </div>
  );
}

// app/products/[id]/page.tsx — Dynamic route with generateStaticParams for SSG
export async function generateStaticParams() {
  // Pre-build the 100 most popular product pages at build time
  const products = await db.product.findMany({
    select: { id: true },
    orderBy: { viewCount: 'desc' },
    take: 100,
  });
  return products.map(p => ({ id: p.id }));
}
// Any product not in generateStaticParams is rendered on-demand and cached (ISR behavior)`,
    renderCycle: [
      "Request hits Next.js server → App Router matches URL to app/ directory segment",
      "Server Components execute on server → async/await DB queries → zero client JS for these components",
      "HTML streams to browser → outer shell first → Suspense boundaries filled progressively",
      "Client Components download JS → hydrate in browser → event listeners attach",
      "Client-side navigation → Next.js fetches RSC payload → patches React tree without full reload",
      "Caching layer → static pages served from CDN → dynamic pages revalidated on schedule or on-demand",
    ],
    closingNote:
      "This six-step cycle is the heartbeat of every Next.js application built on the App Router. Once you can trace any feature — product listing, user authentication, checkout form, blog post — through request → server component → streaming HTML → hydration → client navigation → cache, you understand Next.js deeply. Every pattern you learn after this — Server Actions, Route Handlers, Middleware, ISR revalidation, Parallel Routes — is just a specialization of one step in this cycle.",
  },

  // ── SECTION 4: CORE CONCEPTS ─────────────────────────────────────
  coreConcepts: [
    {
      id: "app-router-fundamentals",
      number: "4.1",
      title: "App Router and File-Based Routing — Next.js's Architecture Core",
      icon: "🗂️",
      color: "blue",
      intro:
        "Next.js's App Router (introduced in Next.js 13, stable in 13.4, refined through 14 and 15) replaces the legacy Pages Router with a new file-system-based routing paradigm built on React Server Components. Every folder in the app/ directory becomes a URL segment. Special files — page.tsx, layout.tsx, loading.tsx, error.tsx, not-found.tsx — define what renders at each segment. This is not just a routing change — it is a complete rethinking of how a React application is structured, where code runs, and how data flows from server to client.",
      code: `// APP ROUTER FILE STRUCTURE — every file has a specific purpose
app/
├── layout.tsx              // Root layout — wraps ALL pages (nav, footer, providers)
├── page.tsx                // Renders at '/' — your homepage
├── loading.tsx             // Shown while page.tsx is loading (React Suspense)
├── error.tsx               // Error boundary for this segment
├── not-found.tsx           // 404 for this segment
├── globals.css             // Global CSS imported in root layout
│
├── (marketing)/            // Route Group — groups routes WITHOUT adding URL segment
│   ├── about/page.tsx      // '/about' — same group as pricing
│   └── pricing/page.tsx    // '/pricing'
│
├── blog/
│   ├── layout.tsx          // Layout for all /blog/* routes (sidebar, breadcrumb)
│   ├── page.tsx            // '/blog' — blog index
│   └── [slug]/
│       ├── page.tsx        // '/blog/my-post-slug' — dynamic segment
│       └── opengraph-image.tsx  // Auto-generated OG image for this post
│
├── products/
│   ├── page.tsx            // '/products'
│   ├── loading.tsx         // Skeleton while products load
│   ├── [id]/
│   │   ├── page.tsx        // '/products/abc123'
│   │   └── @modal/         // Parallel Route — modal layer alongside main content
│   │       └── page.tsx
│   └── (...)intercepting/  // Intercepting Route — show modal on client, full page on direct visit
│
├── dashboard/
│   ├── layout.tsx          // Dashboard layout (sidebar nav) — wraps all dashboard pages
│   ├── page.tsx            // '/dashboard' — overview
│   ├── analytics/
│   │   └── page.tsx        // '/dashboard/analytics'
│   └── settings/
│       └── page.tsx        // '/dashboard/settings'
│
└── api/                    // Route Handlers — Next.js's API endpoints
    ├── auth/
    │   └── [...nextauth]/route.ts  // NextAuth.js catch-all route
    ├── products/
    │   ├── route.ts        // GET /api/products, POST /api/products
    │   └── [id]/route.ts   // GET, PATCH, DELETE /api/products/:id
    └── webhooks/
        └── stripe/route.ts // POST /api/webhooks/stripe

// app/layout.tsx — ROOT LAYOUT (required, always a Server Component)
import type { Metadata } from 'next';
import { Inter, Geist_Mono } from 'next/font/google';
import { Providers } from '@/components/providers';
import { Navbar } from '@/components/navbar';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' });

// Metadata object — generates <head> tags for SEO
export const metadata: Metadata = {
  title: { default: 'ShopIndia', template: '%s | ShopIndia' },  // '%s | ShopIndia' for child pages
  description: 'Best products at best prices. Fast delivery across India.',
  keywords: ['online shopping', 'india', 'best deals'],
  authors: [{ name: 'ShopIndia Team' }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://shopindia.com',
    siteName: 'ShopIndia',
  },
  twitter: { card: 'summary_large_image', creator: '@shopindia' },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={\`\${inter.variable} \${geistMono.variable}\`}>
      <body>
        <Providers>          {/* Client Component — wraps React Query, Auth, Theme providers */}
          <Navbar />         {/* Server Component — renders nav links, reads session server-side */}
          <main>{children}</main>
          <footer>...</footer>
        </Providers>
      </body>
    </html>
  );
}

// app/dashboard/layout.tsx — NESTED LAYOUT (only wraps /dashboard/* routes)
// This is a Server Component — reads session directly
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { DashboardSidebar } from '@/components/dashboard-sidebar';

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);
  if (!session) redirect('/login?callbackUrl=/dashboard');  // Server-side redirect

  return (
    <div className="flex h-screen">
      <DashboardSidebar user={session.user} />
      <main className="flex-1 overflow-auto p-8">{children}</main>
    </div>
  );
}`,
      usage:
        "The App Router's file-system conventions eliminate routing configuration entirely — add a folder, add a page.tsx, the route exists. Layouts persist across navigations without re-rendering (the sidebar doesn't flash). Loading states are automatic Suspense boundaries. Error boundaries are built in. Every Next.js project from a landing page to an enterprise SaaS uses this structure.",
      mistake:
        "Forgetting that layout.tsx does not re-render on navigation between its child pages — this is intentional and a performance feature, but it means state in a layout persists across child page navigations. If you need to reset state when a sub-route changes (like clearing a form), use the key prop on the child or use a Client Component with usePathname() to detect route changes.",
    },
    {
      id: "server-client-components",
      number: "4.2",
      title: "Server and Client Components — The Rendering Boundary",
      icon: "⚡",
      color: "purple",
      intro:
        "React Server Components (RSC) are the most important mental model shift in Next.js App Router. By default, every component in the app/ directory is a Server Component — it runs on the server, has access to databases and environment variables, and ships zero JavaScript to the browser. Client Components are opted in with the 'use client' directive — they run in the browser, can use useState, useEffect, event handlers, and browser APIs. Understanding where to place the 'use client' boundary — as low in the component tree as possible — is what separates Next.js beginners from skilled developers.",
      code: `// SERVER COMPONENT — the default in App Router
// No 'use client'. Runs only on server. Zero client JS.
// Can: async/await, direct DB access, environment variables, server-only packages
// Cannot: useState, useEffect, event handlers, browser APIs, React Context (as consumer)

// app/dashboard/page.tsx
import { db } from '@/lib/db';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { StatsCard } from '@/components/stats-card';         // Also a Server Component
import { RecentOrders } from '@/components/recent-orders';   // Also a Server Component
import { SalesChart } from '@/components/sales-chart';       // CLIENT Component (recharts)
import { notFound, redirect } from 'next/navigation';

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect('/login');

  // Direct Prisma query — no API call needed, no network hop
  const [stats, recentOrders, salesData] = await Promise.all([
    db.order.aggregate({
      _sum: { total: true },
      _count: true,
      where: { userId: session.user.id, createdAt: { gte: new Date(Date.now() - 30 * 86400000) } },
    }),
    db.order.findMany({
      where: { userId: session.user.id },
      orderBy: { createdAt: 'desc' },
      take: 5,
      include: { items: { include: { product: true } } },
    }),
    db.order.groupBy({
      by: ['createdAt'],
      _sum: { total: true },
      where: { userId: session.user.id },
    }),
  ]);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      {/* Server Components — receive serializable props, render on server */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <StatsCard title="Total Revenue" value={stats._sum.total ?? 0} type="currency" />
        <StatsCard title="Total Orders" value={stats._count} type="number" />
        <StatsCard title="Avg Order Value" value={(stats._sum.total ?? 0) / stats._count} type="currency" />
      </div>
      {/* Client Component — recharts needs browser. Receives serialized data from server. */}
      <SalesChart data={salesData} />
      <RecentOrders orders={recentOrders} />
    </div>
  );
}

// components/sales-chart.tsx — CLIENT COMPONENT
'use client';  // This directive makes it a Client Component — opts in to browser rendering
// Can: useState, useEffect, event handlers, browser APIs, recharts, animations
// Cannot: direct DB access, environment secrets, async component function

import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface SalesChartProps {
  data: { createdAt: Date; _sum: { total: number | null } }[];
}

export function SalesChart({ data }: SalesChartProps) {
  const [period, setPeriod] = useState<'7d' | '30d' | '90d'>('30d');

  const chartData = data.map(d => ({
    date: new Date(d.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' }),
    revenue: d._sum.total ?? 0,
  }));

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-lg">Revenue Trend</h2>
        <div className="flex gap-2">
          {(['7d', '30d', '90d'] as const).map(p => (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              className={\`px-3 py-1 rounded text-sm \${period === p ? 'bg-indigo-100 text-indigo-700' : 'text-gray-500'}\`}>
              {p}
            </button>
          ))}
        </div>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="date" tick={{ fontSize: 12 }} />
          <YAxis tickFormatter={v => \`₹\${v.toLocaleString('en-IN')}\`} tick={{ fontSize: 12 }} />
          <Tooltip formatter={(v: number) => [\`₹\${v.toLocaleString('en-IN')}\`, 'Revenue']} />
          <Line type="monotone" dataKey="revenue" stroke="#6366f1" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

// THE GOLDEN RULE: Push 'use client' as LOW as possible in the component tree
// WRONG pattern — makes entire page client-side, loses all RSC benefits:
// 'use client'; // TOP of a page file
// export default function ProductsPage() { ... }

// RIGHT pattern — keep page as Server Component, extract only interactive parts:
// app/products/page.tsx — Server Component (default)
// components/add-to-cart-button.tsx — 'use client' (just the button)
// components/quantity-selector.tsx — 'use client' (just the stepper)

// SERVER-ONLY PACKAGE — prevents accidental client-side import of server utilities
import 'server-only'; // Add to any file that should never run in the browser (e.g., db.ts, auth-utils.ts)`,
      usage:
        "The Server/Client Component distinction is the core skill of App Router development. Data fetching, authentication checks, database queries, and API calls all go in Server Components. Interactivity — forms, modals, dropdowns, state, animations — go in Client Components. Keep the client boundary as far down the tree as possible. A page component should almost always be a Server Component with small Client Component islands.",
      mistake:
        "Adding 'use client' to a component just because it receives a Server Component's data. 'use client' is only needed if the component uses hooks (useState, useEffect, useRef), event handlers (onClick, onChange), or browser-only APIs (localStorage, window). A component that only renders UI from props — even complex props — can remain a Server Component. 'use client' is a last resort, not a default.",
    },
    {
      id: "data-fetching-caching",
      number: "4.3",
      title: "Data Fetching, Caching, and Revalidation",
      icon: "🌊",
      color: "emerald",
      intro:
        "Data fetching in the App Router is radically different from Pages Router's getServerSideProps and getStaticProps. Server Components are async functions that fetch their own data directly — no prop drilling from page-level fetch functions, no API endpoints just for server-side props. Next.js extends the native fetch() API with caching controls, and the Request Memoization system automatically deduplicates identical fetch calls within a single render cycle. Understanding the cache, revalidate, and no-store options — and when to use Server Actions vs Route Handlers — is the most important data fetching skill in modern Next.js.",
      code: `// 1. SERVER COMPONENT DATA FETCHING — the App Router way
// No getServerSideProps. No getStaticProps. Just async components.

// STATIC (SSG equivalent) — cached indefinitely, rebuilt at build time or on-demand revalidation
async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await fetch(\`https://api.sanity.io/v1/data/query/production?query=*[slug.current=="\${params.slug}"][0]\`, {
    next: { revalidate: 3600 },   // ISR: revalidate every 1 hour
    // next: { tags: ['blog-post'] } // Tag-based revalidation (revalidateTag('blog-post') to bust)
  }).then(r => r.json());
  return <article>...</article>;
}

// DYNAMIC (SSR equivalent) — never cached, re-fetched on every request
async function UserDashboard() {
  const data = await fetch('/api/user/profile', {
    cache: 'no-store',   // Dynamic — always fresh data
  }).then(r => r.json());
  return <div>...</div>;
}

// PARALLEL DATA FETCHING — avoid sequential waterfalls
async function ProductDetailPage({ params }: { params: { id: string } }) {
  // WRONG — sequential: product loads, then reviews load (waterfall)
  // const product = await getProduct(params.id);
  // const reviews = await getReviews(params.id);

  // RIGHT — parallel: both requests fire simultaneously
  const [product, reviews, relatedProducts] = await Promise.all([
    db.product.findUnique({ where: { id: params.id }, include: { images: true, seller: true } }),
    db.review.findMany({ where: { productId: params.id }, take: 10, orderBy: { createdAt: 'desc' } }),
    db.product.findMany({ where: { category: product?.category, NOT: { id: params.id } }, take: 4 }),
  ]);
  // Note: Promise.all deduplication — if two Server Components in the tree fetch the same resource,
  // React's Request Memoization ensures only ONE fetch executes per render cycle.
  if (!product) notFound();
  return (...);
}

// 2. SERVER ACTIONS — the modern way to handle form submissions and mutations
// Server Actions are async functions that run on the server, callable from Client Components
// No API route needed. No fetch() from client. Direct server execution.

// app/actions/product-actions.ts
'use server';  // Every function in this file is a Server Action
import { revalidatePath, revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';
import { db } from '@/lib/db';
import { getServerSession } from 'next-auth';

const ProductSchema = z.object({
  name: z.string().min(2).max(100),
  price: z.number().positive().max(1000000),
  category: z.string(),
  description: z.string().min(10),
  stock: z.number().int().nonneg(),
});

export async function createProduct(formData: FormData) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.role !== 'seller') throw new Error('Unauthorized');

  const parsed = ProductSchema.safeParse({
    name: formData.get('name'),
    price: Number(formData.get('price')),
    category: formData.get('category'),
    description: formData.get('description'),
    stock: Number(formData.get('stock')),
  });

  if (!parsed.success) {
    return { error: parsed.error.flatten().fieldErrors };
  }

  const product = await db.product.create({
    data: { ...parsed.data, sellerId: session.user.id },
  });

  revalidatePath('/products');          // Bust the products listing page cache
  revalidateTag('featured-products');   // Bust all fetches tagged 'featured-products'
  redirect(\`/products/\${product.id}\`);  // Redirect to new product page
}

// Client Component — calls Server Action directly (no fetch, no API route)
'use client';
import { useFormState, useFormStatus } from 'react-dom';
import { createProduct } from '@/app/actions/product-actions';

const initialState = { error: null };

export function CreateProductForm() {
  const [state, formAction] = useFormState(createProduct, initialState);
  return (
    <form action={formAction}>
      <input name="name" placeholder="Product name" />
      {state?.error?.name && <p className="text-red-500">{state.error.name[0]}</p>}
      <input name="price" type="number" placeholder="Price (₹)" />
      <textarea name="description" />
      <SubmitButton />
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();  // Knows when the Server Action is in flight
  return <button type="submit" disabled={pending}>{pending ? 'Creating...' : 'Create Product'}</button>;
}

// 3. ROUTE HANDLERS — Next.js's API endpoints (replaces pages/api/)
// app/api/products/route.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category') ?? 'all';
  const page = Number(searchParams.get('page') ?? '1');

  const products = await db.product.findMany({
    where: category !== 'all' ? { category } : undefined,
    skip: (page - 1) * 12,
    take: 12,
  });
  return NextResponse.json({ products, page });
}

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const body = await request.json();
  const product = await db.product.create({ data: { ...body, sellerId: session.user.id } });

  revalidatePath('/products');
  return NextResponse.json(product, { status: 201 });
}`,
      usage:
        "Server Components for read-only data display (most of your app). Server Actions for form submissions, mutations, and user-triggered data changes. Route Handlers for webhook endpoints, external API integrations that need server-to-server auth, and endpoints that need to be called from outside your Next.js app. The combination of Server Components + Server Actions eliminates the need for a separate Express backend for most product use cases.",
      mistake:
        "Using Route Handlers to fetch data that could be fetched directly in a Server Component. Every Route Handler creates a network roundtrip from the server to itself — it's an unnecessary HTTP call when the component is already on the server. Fetch data directly in the Server Component with db.product.findMany() or a direct fetch() to an external API. Use Route Handlers only for endpoints that need to be publicly accessible via HTTP.",
    },
    {
      id: "rendering-strategies",
      number: "4.4",
      title: "Rendering Strategies — SSG, SSR, ISR, and PPR",
      icon: "📋",
      color: "yellow",
      intro:
        "Next.js is the only framework that provides four rendering strategies in a single application — Static Site Generation (SSG), Server-Side Rendering (SSR), Incremental Static Regeneration (ISR), and Partial Prerendering (PPR, introduced in Next.js 14). Choosing the right strategy for each route is a senior-level Next.js skill. Wrong choices cost you SEO rankings (SPA instead of SSR), money (SSR for content that should be static), or freshness (SSG for pages that change hourly). In Next.js interviews and take-home tasks, demonstrating this knowledge is the signal that separates mid-level from senior.",
      code: `// STRATEGY 1: STATIC SITE GENERATION (SSG) — built once, served from CDN
// Best for: marketing pages, blog posts, documentation, landing pages
// No database hit on request. Zero server cost per visit. Fastest possible load.

// app/blog/[slug]/page.tsx
export async function generateStaticParams() {
  // Tell Next.js which slugs to pre-build at build time
  const posts = await db.post.findMany({ select: { slug: true }, where: { published: true } });
  return posts.map(post => ({ slug: post.slug }));
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await fetch(\`https://your-cms.io/posts/\${params.slug}\`, {
    // No cache option = force-cache by default in Next.js = STATIC
    next: { tags: [\`post-\${params.slug}\`] }, // Optional: tag for on-demand revalidation
  }).then(r => r.json());
  return <article>...</article>;
}
// Result: /blog/my-post is a static HTML file, served from CDN globally

// STRATEGY 2: INCREMENTAL STATIC REGENERATION (ISR) — static + periodic refresh
// Best for: product pages, news articles, pricing pages, category listings
// Served from CDN (fast). Regenerated in background on schedule or on-demand.

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await fetch(\`/api/products/\${params.id}\`, {
    next: { revalidate: 3600 },  // ISR: regenerate this page every 60 minutes
  }).then(r => r.json());
  return <div>...</div>;
}
// Result: First visit builds page. Next visits served cached. After 60min, background rebuild.

// ON-DEMAND ISR — revalidate specific pages from a webhook (e.g., CMS content update)
// app/api/revalidate/route.ts
import { revalidatePath, revalidateTag } from 'next/cache';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const secret = request.headers.get('x-webhook-secret');
  if (secret !== process.env.REVALIDATION_SECRET) {
    return NextResponse.json({ error: 'Invalid secret' }, { status: 401 });
  }
  const { slug, tag } = await request.json();
  if (slug) revalidatePath(\`/blog/\${slug}\`);
  if (tag) revalidateTag(tag);
  return NextResponse.json({ revalidated: true });
}
// When a blog post is published in Sanity CMS, it calls /api/revalidate → page rebuilds instantly

// STRATEGY 3: SERVER-SIDE RENDERING (SSR) — rendered fresh on every request
// Best for: dashboards, personalized pages, real-time data, pages requiring auth
// Never cached (unless you explicitly add cache headers). Server runs for every visitor.

export default async function DashboardPage() {
  // Any of these patterns force dynamic (SSR) rendering:
  const session = await getServerSession();    // Auth — depends on request cookies
  const data = await fetch('/api/live', { cache: 'no-store' }); // Explicit no-cache
  const { cookies } = await import('next/headers');  // Accessing cookies forces dynamic
  cookies(); headers(); // These Next.js functions opt the route into dynamic rendering
  return <div>...</div>;
}

// STRATEGY 4: PARTIAL PRERENDERING (PPR) — experimental in Next.js 14, available in 15
// Best for: e-commerce pages where layout is static but cart/personalization is dynamic
// The shell (nav, product image, description) is STATIC (from CDN, instant)
// Dynamic parts (cart count, recommended items, personalized price) stream in via Suspense

// next.config.js
// experimental: { ppr: true }

// app/products/[id]/page.tsx with PPR
import { Suspense } from 'react';

export default async function ProductPage({ params }: { params: { id: string } }) {
  // This fetch is static — product name/description doesn't change often
  const product = await db.product.findUnique({ where: { id: params.id } });

  return (
    <div>
      {/* STATIC shell — served instantly from CDN */}
      <h1>{product.name}</h1>
      <ProductImages images={product.images} />
      <p>{product.description}</p>

      {/* DYNAMIC — personalized, streams in after static shell */}
      <Suspense fallback={<CartButtonSkeleton />}>
        <PersonalizedPrice productId={params.id} />    {/* Reads auth cookie — dynamic */}
      </Suspense>
      <Suspense fallback={<RecommendationsSkeleton />}>
        <RecommendedProducts productId={params.id} />  {/* ML-based, user-specific — dynamic */}
      </Suspense>
    </div>
  );
}

// CHOOSING THE RIGHT STRATEGY — decision matrix
// Marketing page / landing: SSG (next.config generateStaticParams or no dynamic data)
// Blog post: SSG + ISR (revalidate: 86400) + on-demand revalidation on publish
// Product catalog: SSG + ISR (revalidate: 3600) — prices/stock change hourly
// Product detail: SSG + ISR — or PPR for personalized add-to-cart
// User dashboard: SSR (cache: 'no-store') — always personalized
// Admin analytics: SSR — real-time data
// Public news feed: ISR (revalidate: 300) — 5-minute freshness`,
      usage:
        "The rendering strategy decision is made per-route. A single Next.js app simultaneously has static marketing pages, ISR-powered product listings, SSR dashboard pages, and Route Handler API endpoints. The default in App Router is static — opt into dynamic only when necessary. This default-static approach means your Next.js app is inherently CDN-friendly and scales to millions of visitors without server cost for static content.",
      mistake:
        "Using cache: 'no-store' (SSR) for pages where data changes hourly or daily. If a product's price changes every hour, ISR with revalidate: 3600 is the right choice — not SSR. SSR means every visitor triggers a server execution and database query. ISR means one execution per hour regardless of traffic. SSR costs multiply with traffic; ISR costs are flat. Default to ISR, escalate to SSR only when data must be real-time or personalized.",
    },
    {
      id: "nextjs-image-fonts",
      number: "4.5",
      title: "Image Optimization, Fonts, and Core Web Vitals",
      icon: "🖼️",
      color: "orange",
      intro:
        "Next.js's next/image and next/font are not convenience wrappers — they are Core Web Vitals performance tools. Google's ranking algorithm directly penalizes pages with poor LCP (Largest Contentful Paint), CLS (Cumulative Layout Shift), and FID/INP (Interaction to Next Paint). next/image automatically serves WebP/AVIF formats, sizes images to device dimensions, lazy-loads off-screen images, and eliminates CLS by reserving space before image load. next/font eliminates layout shift from custom fonts by preloading and embedding font declarations in the HTML. Together, they are the fastest path to a perfect Lighthouse score.",
      code: `// next/image — Core Web Vitals-optimized image component
import Image from 'next/image';

// HERO IMAGE — above the fold, should load immediately (priority prop)
function HeroSection() {
  return (
    <div className="relative w-full h-[600px]">
      <Image
        src="/hero-banner.jpg"
        alt="ShopIndia — Best Deals Online"  // Required alt for accessibility + SEO
        fill                        // fill: image fills the parent container (use with relative parent)
        priority                    // LCP image: preload, don't lazy-load
        quality={90}                // WebP/AVIF quality (default 75)
        className="object-cover object-center"
        sizes="100vw"               // Tells browser this image spans full viewport width
      />
    </div>
  );
}

// PRODUCT CARD IMAGE — below fold, lazy-load, fixed dimensions
function ProductCard({ product }: { product: Product }) {
  return (
    <div className="rounded-xl overflow-hidden">
      <div className="relative aspect-square">  {/* aspect-square prevents CLS */}
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          // sizes: tells Next.js which size to serve at each breakpoint
          // Next.js generates and caches: 320px, 640px, 750px, 828px, 1080px versions
        />
      </div>
      <div className="p-4">
        <h3 className="font-medium truncate">{product.name}</h3>
        <p className="text-lg font-bold text-indigo-600">₹{product.price.toLocaleString('en-IN')}</p>
      </div>
    </div>
  );
}

// EXTERNAL IMAGES — must whitelist domains in next.config.js
// next.config.js
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'res.cloudinary.com' },    // Cloudinary CDN
      { protocol: 'https', hostname: 'cdn.sanity.io' },          // Sanity CMS images
      { protocol: 'https', hostname: '*.amazonaws.com' },        // S3 buckets
      { protocol: 'https', hostname: 'lh3.googleusercontent.com' }, // Google profile photos
    ],
    formats: ['image/avif', 'image/webp'],  // Serve AVIF (smallest), fallback to WebP
  },
};

// DYNAMIC OG IMAGE — auto-generated social share images with @vercel/og
// app/blog/[slug]/opengraph-image.tsx
import { ImageResponse } from 'next/og';

export const runtime = 'edge';   // Run on edge for fastest generation
export const contentType = 'image/png';
export const size = { width: 1200, height: 630 };

export default async function OgImage({ params }: { params: { slug: string } }) {
  const post = await db.post.findUnique({ where: { slug: params.slug } });
  return new ImageResponse(
    <div style={{ display: 'flex', width: '100%', height: '100%', background: '#0f172a', alignItems: 'center', padding: 80 }}>
      <div>
        <p style={{ color: '#6366f1', fontSize: 24, marginBottom: 16 }}>ShopIndia Blog</p>
        <h1 style={{ color: '#f8fafc', fontSize: 64, fontWeight: 700, lineHeight: 1.1 }}>
          {post?.title}
        </h1>
        <p style={{ color: '#94a3b8', fontSize: 28, marginTop: 24 }}>{post?.excerpt}</p>
      </div>
    </div>
  );
}
// Next.js auto-serves this as /blog/my-slug/opengraph-image.png — referenced in <meta og:image>

// next/font — eliminates CLS from custom fonts, zero external network request
import { Geist, Geist_Mono } from 'next/font/google';
import localFont from 'next/font/local';

// Google Fonts — downloaded at build time, self-hosted on your domain (no Google request)
const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
  display: 'swap',      // Shows system font while loading — prevents invisible text flash
});

// Variable font for performance (one file covers all weights)
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' });

// Local font — for custom/paid fonts like Söhne, Graphik, etc.
const brandFont = localFont({
  src: [
    { path: '../fonts/brand-regular.woff2', weight: '400', style: 'normal' },
    { path: '../fonts/brand-bold.woff2',    weight: '700', style: 'normal' },
  ],
  variable: '--font-brand',
  display: 'swap',
});

// app/layout.tsx — apply font variables to html element
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={\`\${geist.variable} \${geistMono.variable} \${brandFont.variable}\`}>
      <body className="font-sans">{children}</body>  {/* font-sans → uses --font-geist via Tailwind config */}
    </html>
  );
}

// tailwind.config.ts — wire font variables to Tailwind
export default {
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
        brand: ['var(--font-brand)', 'sans-serif'],
      },
    },
  },
};`,
      usage:
        "Use next/image for every image on your site — external or local. Always provide the sizes prop for fill-mode images. Mark above-the-fold images with priority. Use next/font for all typefaces — it eliminates the FOUT (flash of unstyled text) that tanks Lighthouse CLS scores. These two components together are worth 20–30 Lighthouse Performance points on most sites.",
      mistake:
        "Using a regular <img> tag or a CSS background-image instead of next/image for important above-the-fold images. Google's LCP metric measures when the largest image is fully rendered. next/image preloads priority images with a <link rel=\"preload\"> tag — raw <img> tags don't get this treatment. The difference between a 72 and a 95 Lighthouse Performance score is often a single missing priority prop on the hero image.",
    },
    {
      id: "authentication-nextjs",
      number: "4.6",
      title: "Authentication with NextAuth.js (Auth.js)",
      icon: "🔐",
      color: "red",
      intro:
        "Authentication in Next.js is handled by Auth.js (formerly NextAuth.js v5), the standard authentication library for Next.js applications. Auth.js provides session management, OAuth (Google, GitHub, Twitter, LinkedIn), credentials (email/password), JWT or database sessions, and middleware-based route protection — all in a Next.js-native way. Understanding how Auth.js integrates with the App Router, Server Components, and Next.js Middleware is a near-universal requirement in Next.js job applications and take-home tasks.",
      code: `// COMPLETE NEXT.JS AUTHENTICATION SETUP — Auth.js v5 (App Router)

// auth.ts — root auth config (imported everywhere)
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { db } from '@/lib/db';
import bcrypt from 'bcryptjs';

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(db),     // Stores sessions in database (supports JWT too)
  session: { strategy: 'jwt' },   // JWT: no DB session lookup per request (faster)

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: 'credentials',
      credentials: { email: {}, password: {} },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;
        const user = await db.user.findUnique({ where: { email: credentials.email as string } });
        if (!user || !user.password) return null;
        const valid = await bcrypt.compare(credentials.password as string, user.password);
        if (!valid) return null;
        return { id: user.id, email: user.email, name: user.name, role: user.role };
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = (user as any).role;  // Extend JWT with role
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id as string;
      session.user.role = token.role as string;  // Expose role in session
      return session;
    },
  },

  pages: {
    signIn: '/login',      // Custom login page
    error: '/auth/error',  // Custom error page
  },
});

// Extend types — TypeScript knows about role
declare module 'next-auth' {
  interface Session { user: { id: string; role: string } & DefaultSession['user'] }
}

// app/api/auth/[...nextauth]/route.ts — expose Auth.js endpoints
import { handlers } from '@/auth';
export const { GET, POST } = handlers;

// middleware.ts — ROUTE PROTECTION at the edge (before any page renders)
import { auth } from '@/auth';
import { NextResponse } from 'next/server';

export default auth((req) => {
  const { pathname } = req.nextUrl;
  const isAuthenticated = !!req.auth;
  const isPublicRoute = ['/', '/login', '/register', '/blog'].some(p => pathname.startsWith(p));

  if (!isAuthenticated && !isPublicRoute) {
    return NextResponse.redirect(new URL(\`/login?callbackUrl=\${pathname}\`, req.url));
  }

  // Role-based access — only admins can access /admin routes
  if (pathname.startsWith('/admin') && req.auth?.user?.role !== 'admin') {
    return NextResponse.redirect(new URL('/unauthorized', req.url));
  }

  return NextResponse.next();
});

export const config = {
  // Run middleware on all routes except Next.js internals and static files
  matcher: ['/((?!_next/static|_next/image|favicon.ico|public/).*)'],
};

// READING SESSION IN SERVER COMPONENTS
// app/dashboard/page.tsx — Server Component
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

export default async function DashboardPage() {
  const session = await auth();    // Server-side session read — no useSession() hook
  if (!session) redirect('/login');

  return <div>Welcome, {session.user.name}!</div>;
}

// READING SESSION IN CLIENT COMPONENTS
'use client';
import { useSession, signOut, signIn } from 'next-auth/react';

export function UserMenu() {
  const { data: session, status } = useSession();

  if (status === 'loading') return <div className="w-8 h-8 rounded-full bg-gray-200 animate-pulse" />;
  if (!session) return <button onClick={() => signIn('google')}>Sign In</button>;

  return (
    <div className="relative group">
      <button className="flex items-center gap-2">
        <img src={session.user.image!} alt="" className="w-8 h-8 rounded-full" />
        <span className="text-sm font-medium">{session.user.name}</span>
      </button>
      <div className="absolute right-0 top-full mt-1 bg-white rounded-lg shadow-lg border p-1 opacity-0 group-hover:opacity-100 transition">
        <a href="/dashboard" className="block px-4 py-2 text-sm hover:bg-gray-50 rounded">Dashboard</a>
        <button onClick={() => signOut({ callbackUrl: '/' })} className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded">
          Sign Out
        </button>
      </div>
    </div>
  );
}

// app/providers.tsx — wrap app with SessionProvider (required for useSession in Client Components)
'use client';
import { SessionProvider } from 'next-auth/react';

export function Providers({ children }: { children: React.ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}`,
      usage:
        "NextAuth.js handles 95% of authentication use cases in Next.js — social OAuth, credentials, magic links, and multi-tenant setups. The Middleware-based route protection is the most performant approach — it runs at the CDN edge before any server processing. For simple apps: JWT sessions + Middleware protection + Google OAuth takes under 2 hours to implement. For production: add Prisma adapter for database sessions, email verification via Resend, and password reset flows.",
      mistake:
        "Doing authentication checks inside page.tsx Server Components instead of Middleware. If authentication is checked only in the component, the page's Server Component code runs (including any DB queries in the component) before the redirect happens. Middleware runs before any server-side code — unauthorized users are redirected at the edge, your database never receives the query.",
    },
    {
      id: "nextjs-seo",
      number: "4.7",
      title: "SEO Mastery — Metadata API, Structured Data, and Sitemaps",
      icon: "🔍",
      color: "teal",
      intro:
        "SEO is the primary reason product companies choose Next.js over create-react-app or Vite. Next.js's Metadata API, generateMetadata function, structured data support, automatic sitemap generation, and robots.txt configuration give Next.js apps a systematic SEO advantage. For developers building e-commerce platforms, blogs, documentation sites, SaaS marketing pages, or any content-driven product, Next.js SEO capabilities directly translate to business value — higher Google rankings, more organic traffic, better click-through rates. Understanding the full SEO toolset is expected at any Next.js role at a product company.",
      code: `// NEXT.JS METADATA API — complete SEO configuration

// 1. STATIC METADATA — for pages with fixed SEO data
// app/about/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | ShopIndia',
  description: 'Learn about ShopIndia — India\'s fastest growing online marketplace with 10M+ products.',
  keywords: ['about shopindia', 'online shopping india', 'indian marketplace'],
  authors: [{ name: 'ShopIndia Team', url: 'https://shopindia.com/team' }],
  creator: 'ShopIndia',
  publisher: 'ShopIndia Technologies Pvt Ltd',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: 'https://shopindia.com/about' },
  openGraph: {
    type: 'website',
    url: 'https://shopindia.com/about',
    title: 'About Us | ShopIndia',
    description: 'Learn about ShopIndia — India\'s fastest growing online marketplace.',
    siteName: 'ShopIndia',
    images: [{ url: 'https://shopindia.com/og/about.png', width: 1200, height: 630, alt: 'ShopIndia About' }],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | ShopIndia',
    description: 'India\'s fastest growing online marketplace.',
    images: ['https://shopindia.com/og/about.png'],
    creator: '@shopindia',
    site: '@shopindia',
  },
};

// 2. DYNAMIC METADATA — generated from data (for product pages, blog posts, user profiles)
// app/products/[id]/page.tsx
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const product = await db.product.findUnique({
    where: { id: params.id },
    select: { name: true, description: true, price: true, images: { take: 1 }, category: true },
  });

  if (!product) return { title: 'Product Not Found | ShopIndia' };

  const title = \`\${product.name} — Buy Online at Best Price | ShopIndia\`;
  const description = \`Buy \${product.name} online at ₹\${product.price.toLocaleString('en-IN')}. \${product.description.slice(0, 140)}...\`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      images: product.images[0] ? [{ url: product.images[0].url, width: 800, height: 600, alt: product.name }] : [],
    },
    twitter: { card: 'summary_large_image', title, description },
    alternates: { canonical: \`https://shopindia.com/products/\${params.id}\` },
  };
}

// 3. STRUCTURED DATA (JSON-LD) — tells Google what type of content this is
// Product schema, Article schema, BreadcrumbList — Google shows rich snippets in search results
function ProductStructuredData({ product }: { product: Product }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.images.map(img => img.url),
    sku: product.sku,
    brand: { '@type': 'Brand', name: product.brand },
    offers: {
      '@type': 'Offer',
      url: \`https://shopindia.com/products/\${product.id}\`,
      priceCurrency: 'INR',
      price: product.price,
      priceValidUntil: new Date(Date.now() + 30 * 86400000).toISOString().split('T')[0],
      availability: product.stock > 0 ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
      seller: { '@type': 'Organization', name: 'ShopIndia' },
    },
    aggregateRating: product.reviewCount > 0 ? {
      '@type': 'AggregateRating',
      ratingValue: product.averageRating,
      reviewCount: product.reviewCount,
      bestRating: 5,
      worstRating: 1,
    } : undefined,
  };
  // Inject into <head> — Server Component, so no useEffect needed
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}

// 4. AUTOMATIC SITEMAP GENERATION
// app/sitemap.ts
import type { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [products, posts, categories] = await Promise.all([
    db.product.findMany({ select: { id: true, updatedAt: true }, orderBy: { viewCount: 'desc' }, take: 10000 }),
    db.post.findMany({ select: { slug: true, updatedAt: true }, where: { published: true } }),
    db.category.findMany({ select: { slug: true } }),
  ]);

  const staticPages: MetadataRoute.Sitemap = [
    { url: 'https://shopindia.com', lastModified: new Date(), changeFrequency: 'daily', priority: 1 },
    { url: 'https://shopindia.com/products', lastModified: new Date(), changeFrequency: 'hourly', priority: 0.9 },
    { url: 'https://shopindia.com/about', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: 'https://shopindia.com/blog', lastModified: new Date(), changeFrequency: 'daily', priority: 0.8 },
  ];

  const productPages: MetadataRoute.Sitemap = products.map(p => ({
    url: \`https://shopindia.com/products/\${p.id}\`,
    lastModified: p.updatedAt,
    changeFrequency: 'daily',
    priority: 0.8,
  }));

  const blogPages: MetadataRoute.Sitemap = posts.map(p => ({
    url: \`https://shopindia.com/blog/\${p.slug}\`,
    lastModified: p.updatedAt,
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  return [...staticPages, ...productPages, ...blogPages];
}
// Automatically served at /sitemap.xml — submit to Google Search Console

// 5. ROBOTS.TXT
// app/robots.ts
import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: ['/dashboard/', '/admin/', '/api/', '/checkout/'] },
    ],
    sitemap: 'https://shopindia.com/sitemap.xml',
    host: 'https://shopindia.com',
  };
}`,
      usage:
        "Every page in a Next.js product should have a metadata export — either static or via generateMetadata. Product pages need structured data for Google's rich snippets (star ratings in search results drive 30% higher CTR). Sitemaps are submitted to Google Search Console to ensure all pages are indexed. This is 90% of SEO work in a Next.js application — the framework handles the HTML rendering that makes it all crawlable.",
      mistake:
        "Putting the canonical URL in metadata but making the page dynamic (SSR) without caching. If Google's bot hits a product page and it's SSR with no-store, it gets fresh HTML every time — which is correct. But if you accidentally also have ISR on the same page, Google might index a stale cached version. Match your rendering strategy to your content freshness requirements and ensure canonical URLs are consistent.",
    },
    {
      id: "nextjs-state-management",
      number: "4.8",
      title: "State Management — React Query, Zustand, and App Router Patterns",
      icon: "🔄",
      color: "purple",
      intro:
        "State management in Next.js App Router is a layered problem: server state (data from APIs and databases), global client state (cart, auth user, theme), and local UI state (modal open, tab active). The App Router's Server Components eliminate most traditional 'server state' management — data is fetched directly in components. TanStack Query (React Query) handles client-side server state and cache invalidation. Zustand handles lightweight global client state. Understanding when to use each tool — and recognizing that the App Router eliminates much of what Redux was used for — is the modern Next.js state management mental model.",
      code: `// STATE MANAGEMENT LAYERS IN NEXT.JS APP ROUTER

// LAYER 1: SERVER STATE in Server Components — no library needed
// The App Router's Server Components replace getServerSideProps + Redux for most data
// Direct DB query in the component = zero client state for this data
async function ProductsPage() {
  const products = await db.product.findMany({ take: 20 });  // Server state, no client library
  return <ProductGrid products={products} />;
}

// LAYER 2: CLIENT SERVER STATE — TanStack Query (React Query)
// For data that's fetched on the client, mutated, and needs cache invalidation
// Perfect for: search results, paginated data, user interactions that trigger refetches

// lib/react-query.tsx — Provider setup
'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';

export function ReactQueryProvider({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,       // Data is fresh for 1 minute — no refetch within this window
        retry: 1,                    // Retry failed requests once
        refetchOnWindowFocus: false, // Don't refetch when user tabs back
      },
    },
  }));
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

// hooks/use-products.ts — typed React Query hook
import { useQuery, useMutation, useQueryClient, useInfiniteQuery } from '@tanstack/react-query';

export const productKeys = {
  all: ['products'] as const,
  lists: () => [...productKeys.all, 'list'] as const,
  list: (filters: ProductFilters) => [...productKeys.lists(), filters] as const,
  detail: (id: string) => [...productKeys.all, 'detail', id] as const,
};

export function useProducts(filters: ProductFilters) {
  return useQuery({
    queryKey: productKeys.list(filters),
    queryFn: async () => {
      const params = new URLSearchParams(filters as Record<string, string>);
      const res = await fetch(\`/api/products?\${params}\`);
      if (!res.ok) throw new Error('Failed to fetch products');
      return res.json() as Promise<{ products: Product[]; total: number }>;
    },
  });
}

export function useProduct(id: string) {
  return useQuery({
    queryKey: productKeys.detail(id),
    queryFn: async () => {
      const res = await fetch(\`/api/products/\${id}\`);
      if (!res.ok) throw new Error('Product not found');
      return res.json() as Promise<Product>;
    },
    enabled: !!id,
  });
}

export function useCreateProduct() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (payload: CreateProductDto) => {
      const res = await fetch('/api/products', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
      if (!res.ok) throw new Error((await res.json()).error);
      return res.json() as Promise<Product>;
    },
    onSuccess: (newProduct) => {
      queryClient.invalidateQueries({ queryKey: productKeys.lists() });  // Bust product list cache
      queryClient.setQueryData(productKeys.detail(newProduct.id), newProduct);  // Seed detail cache
    },
  });
}

// Client Component using React Query
'use client';
export function ProductSearchPage() {
  const [filters, setFilters] = useState<ProductFilters>({ category: 'all', page: 1, q: '' });
  const { data, isLoading, isError, isFetching } = useProducts(filters);

  if (isLoading) return <ProductGridSkeleton />;
  if (isError) return <ErrorState />;

  return (
    <div>
      <div className={\`\${isFetching ? 'opacity-70' : ''} transition-opacity\`}>
        <ProductGrid products={data.products} />
        <Pagination total={data.total} page={filters.page} onPageChange={p => setFilters(f => ({ ...f, page: p }))} />
      </div>
    </div>
  );
}

// LAYER 3: GLOBAL CLIENT STATE — Zustand (cart, theme, sidebar open/close)
// For truly global client-only state that doesn't come from the server
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface CartState {
  items: CartItem[];
  addItem: (product: Product, qty?: number) => void;
  removeItem: (id: string) => void;
  updateQty: (id: string, qty: number) => void;
  clearCart: () => void;
  total: () => number;
  count: () => number;
}

export const useCartStore = create<CartState>()(
  persist(                                          // Persist to localStorage automatically
    (set, get) => ({
      items: [],
      addItem: (product, qty = 1) => set(state => {
        const existing = state.items.find(i => i.id === product.id);
        if (existing) {
          return { items: state.items.map(i => i.id === product.id ? { ...i, qty: i.qty + qty } : i) };
        }
        return { items: [...state.items, { ...product, qty }] };
      }),
      removeItem: (id) => set(state => ({ items: state.items.filter(i => i.id !== id) })),
      updateQty: (id, qty) => set(state => ({
        items: qty <= 0 ? state.items.filter(i => i.id !== id) : state.items.map(i => i.id === id ? { ...i, qty } : i)
      })),
      clearCart: () => set({ items: [] }),
      total: () => get().items.reduce((sum, i) => sum + i.price * i.qty, 0),
      count: () => get().items.reduce((sum, i) => sum + i.qty, 0),
    }),
    { name: 'cart-storage', storage: createJSONStorage(() => localStorage) }
  )
);

// Using Zustand in any Client Component — no Provider needed
'use client';
export function AddToCartButton({ product }: { product: Product }) {
  const addItem = useCartStore(state => state.addItem);  // Select only what you need
  return <button onClick={() => addItem(product)}>Add to Cart</button>;
}

export function CartIcon() {
  const count = useCartStore(state => state.count());
  return <div className="relative"><ShoppingBagIcon />{count > 0 && <span className="badge">{count}</span>}</div>;
}`,
      usage:
        "Server Components for all read data (zero client state libraries for most page content). React Query for client-side data that users interact with (search, pagination, real-time updates, mutations with optimistic updates). Zustand for truly global UI state that must persist (cart, auth UI state, theme). useState/useReducer for local component state. This layered model covers every Next.js application's state needs without Redux.",
      mistake:
        "Using React Query for data that could be fetched in a Server Component. If data doesn't need to be interactive, doesn't need client-side refetching, and isn't triggered by user action — fetch it in a Server Component. React Query's value is client-side caching, background refetching, and mutation management. For static dashboard stats or product details, a Server Component fetch is faster, simpler, and requires zero client JavaScript.",
    },
    {
      id: "nextjs-deployment",
      number: "4.9",
      title: "Deployment, Performance, and Production Readiness",
      icon: "🚀",
      color: "emerald",
      intro:
        "Deploying a Next.js application to production involves three layers: the application build (next build), the hosting infrastructure (Vercel, AWS, DigitalOcean, Railway), and the ongoing performance monitoring (Core Web Vitals, error tracking, analytics). Vercel — built by the creators of Next.js — is the path of least resistance for most projects and the standard at startups. Understanding next.config.js, environment variables, Vercel's deployment model, and how to measure and fix Core Web Vitals issues is expected knowledge at any senior Next.js role.",
      code: `// next.config.ts — production configuration
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // IMAGE CONFIGURATION
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      { protocol: 'https', hostname: 'cdn.sanity.io' },
      { protocol: 'https', hostname: '*.amazonaws.com' },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920], // Responsive breakpoints for srcset
    minimumCacheTTL: 86400,  // Cache optimized images for 24h
  },

  // SECURITY HEADERS
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' vercel.live",
              "style-src 'self' 'unsafe-inline' fonts.googleapis.com",
              "img-src 'self' blob: data: *.cloudinary.com *.amazonaws.com",
              "font-src 'self' fonts.gstatic.com",
              "connect-src 'self' vitals.vercel-insights.com *.sentry.io",
            ].join('; '),
          },
        ],
      },
    ];
  },

  // REDIRECTS — SEO-safe URL migrations
  async redirects() {
    return [
      { source: '/shop', destination: '/products', permanent: true },   // 301 redirect
      { source: '/item/:id', destination: '/products/:id', permanent: true },
      { source: '/old-blog/:slug', destination: '/blog/:slug', permanent: false },  // 302
    ];
  },

  // BUNDLE ANALYSIS — run with: ANALYZE=true npm run build
  ...(process.env.ANALYZE === 'true' && {
    webpack: (config, { isServer }) => {
      const { BundleAnalyzerPlugin } = require('@next/bundle-analyzer');
      config.plugins.push(new BundleAnalyzerPlugin({ analyzerMode: 'static' }));
      return config;
    },
  }),

  // COMPILER OPTIONS
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',  // Strip console.logs in prod
  },

  // EXPERIMENTAL
  experimental: {
    ppr: 'incremental',   // Partial Prerendering
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],  // Tree-shake icon libraries
  },
};

export default nextConfig;

// ENVIRONMENT VARIABLES — .env.local (never committed to git)
DATABASE_URL="postgresql://user:pass@host:5432/db"
NEXTAUTH_SECRET="your-secret-here"                 # openssl rand -base64 32
NEXTAUTH_URL="http://localhost:3000"               # Full URL in prod: https://yourdomain.com
GOOGLE_CLIENT_ID="xxx.apps.googleusercontent.com"
GOOGLE_CLIENT_SECRET="xxx"
NEXT_PUBLIC_BASE_URL="http://localhost:3000"       # NEXT_PUBLIC_ prefix = exposed to browser
NEXT_PUBLIC_RAZORPAY_KEY_ID="rzp_live_xxx"        # Public key (safe to expose)
RAZORPAY_KEY_SECRET="xxx"                          # Server-only — no NEXT_PUBLIC_

// VERCEL DEPLOYMENT — vercel.json (optional, for advanced config)
{
  "regions": ["bom1"],                  // Mumbai region (bom1) — closest to Indian users
  "functions": {
    "app/api/**": { "maxDuration": 30 } // 30s max for API routes (default 10s on hobby)
  },
  "headers": [
    {
      "source": "/api/(.*)",
      "headers": [{ "key": "Cache-Control", "value": "no-store" }]
    }
  ]
}

// PRISMA — production database setup
// package.json
{
  "scripts": {
    "dev": "next dev",
    "build": "prisma generate && next build",  // Always generate Prisma client before build
    "start": "next start",
    "postinstall": "prisma generate",          // Ensures Prisma client in deployed env
    "db:push": "prisma db push",
    "db:migrate": "prisma migrate deploy",     // Run migrations in CI/CD
    "db:seed": "tsx prisma/seed.ts"
  }
}

// SENTRY — error tracking in production
// next.config.ts — wrap with withSentryConfig
import { withSentryConfig } from '@sentry/nextjs';
export default withSentryConfig(nextConfig, {
  silent: true,
  hideSourceMaps: true,
  disableLogger: true,
});

// sentry.client.config.ts
import * as Sentry from '@sentry/nextjs';
Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate: 0.1,  // 10% of transactions traced (cost control)
  environment: process.env.NODE_ENV,
  integrations: [Sentry.replayIntegration({ maskAllText: true, blockAllMedia: false })],
  replaysSessionSampleRate: 0.01,  // 1% of sessions recorded
});

// CORE WEB VITALS MONITORING — Vercel Analytics + Speed Insights
// app/layout.tsx
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />      {/* Real-user analytics — page views, sessions */}
        <SpeedInsights />  {/* Real-user Core Web Vitals from production traffic */}
      </body>
    </html>
  );
}`,
      usage:
        "Vercel is the zero-config deployment target for Next.js — connect GitHub repo, set environment variables, push to main. For production: Mumbai region (bom1) for Indian user base, Sentry for error tracking, Vercel Speed Insights for real-user Core Web Vitals, and the security headers configuration as a baseline. The next.config.ts headers, redirects, and image configuration are applied on every project before launch.",
      mistake:
        "Committing .env.local to git. This exposes database credentials, API secrets, and authentication keys publicly. Add .env.local to .gitignore immediately on project creation. Use .env.example as a template showing variable names without values — commit this file so teammates know what to configure. Set production environment variables through Vercel's dashboard, not in code.",
    },
  ],

  // ── SECTION 5: PREREQUISITES ─────────────────────────────────────
  prerequisites: [
    { item: "JavaScript (ES6+)", done: false, note: "Mandatory — Next.js is JavaScript at its core", detail: "Arrow functions, destructuring, spread/rest, Promises, async/await, array methods (map, filter, reduce, find), ES6 modules (import/export), classes. Next.js documentation assumes fluent JavaScript. Spend time on async/await especially — nearly every data fetching pattern in Next.js uses it." },
    { item: "React Fundamentals", done: false, note: "Next.js is React — you must know React before Next.js", detail: "Components, JSX, props, useState, useEffect, useRef, useContext, event handlers, conditional rendering, list rendering with keys, component composition. Build two or three pure React applications before starting Next.js. Next.js adds to React — it does not replace React fundamentals." },
    { item: "TypeScript Basics", done: false, note: "Near-mandatory — all Next.js examples and new projects use TypeScript", detail: "Interfaces, types, generics, type assertions, optional types, union types. TypeScript is the default when you run npx create-next-app. Spending one week on TypeScript before Next.js will save weeks of compiler confusion. Focus on React + TypeScript specifically — typing props, state, event handlers, and async functions." },
    { item: "HTML and CSS", done: true, note: "For building Next.js templates and layouts", detail: "Semantic HTML, Flexbox, CSS Grid, responsive design. Tailwind CSS is the most common styling solution in Next.js projects — learn its utility class system in parallel with Next.js. Understanding CSS custom properties and media queries remains essential even with Tailwind." },
    { item: "Node.js and npm", done: true, note: "Next.js requires Node.js for its development server and build tools", detail: "Install Node.js 18+ (LTS). Understand npm install, package.json scripts, node_modules. You'll run npm run dev, npm run build, and npm run start for the Next.js development workflow. Understanding how Node.js modules work helps when writing Route Handlers and middleware." },
    { item: "REST APIs and HTTP", done: false, note: "For building and consuming APIs in Next.js Route Handlers", detail: "HTTP methods (GET, POST, PUT, PATCH, DELETE), status codes (200, 201, 400, 401, 403, 404, 500), request/response headers, JSON, and how fetch() works. Next.js Route Handlers are Node.js HTTP endpoints — you need to understand HTTP to write them correctly." },
    { item: "Git and Version Control", done: true, note: "Vercel deployment is triggered by git push — Git is part of the Next.js workflow", detail: "git init, add, commit, push, pull, branching, .gitignore. Vercel connects to your GitHub/GitLab/Bitbucket repository and deploys on every push. Understanding branches means every PR gets an automatic preview deployment — a cornerstone of the Next.js + Vercel development workflow." },
    { item: "Database Basics", done: false, note: "For full-stack Next.js — API routes and Server Components query databases", detail: "Understand relational databases (tables, rows, foreign keys, joins) and/or NoSQL (collections, documents). Prisma ORM — the most common database tool in Next.js — abstracts raw SQL but requires a schema understanding. Start with PostgreSQL or MongoDB before adding the ORM layer." },
    { item: "Browser DevTools", done: true, note: "For debugging Next.js apps, inspecting network requests, and measuring performance", detail: "Chrome DevTools for inspecting DOM, monitoring XHR/fetch in Network tab, debugging JavaScript. Lighthouse for Core Web Vitals measurement — critical for SEO-focused Next.js work. React DevTools extension for component tree inspection." },
    { item: "Postman or REST Client", done: true, note: "For testing Next.js API routes (Route Handlers) before connecting them to the frontend", detail: "Always test API routes in Postman before wiring them to your Next.js components. Verifies that the Route Handler returns the expected shape, handles errors correctly, and requires the right auth headers — before spending time building UI around a broken endpoint." },
  ],

  // ── SECTION 6: ROADMAP ───────────────────────────────────────────
  roadmap: [
    {
      phase: "Beginner",
      label: "01",
      duration: "Weeks 1–5",
      color: "emerald",
      topics: [
        "React review — components, hooks (useState, useEffect, useRef, useContext), props, JSX",
        "Next.js setup — npx create-next-app@latest with TypeScript + Tailwind, project structure",
        "App Router fundamentals — app/ directory, page.tsx, layout.tsx, loading.tsx, error.tsx",
        "File-based routing — static routes, dynamic routes ([id]), catch-all routes ([...slug])",
        "Server Components vs Client Components — default server-only, 'use client' directive",
        "Next.js Link and navigation — <Link>, useRouter, usePathname, useSearchParams",
        "next/image — Image component, fill, sizes, priority, alt text, remote patterns",
        "next/font — Google Fonts and local fonts, variable fonts, CSS variables",
        "Metadata API — static metadata export, title template, openGraph, twitter card",
        "Route Handlers — GET and POST in app/api/ directory, NextRequest, NextResponse",
        "Environment variables — .env.local, NEXT_PUBLIC_ prefix, process.env",
        "Static and dynamic rendering — default static behavior, dynamic = cookies()/headers()",
        "Tailwind CSS — utility classes, responsive prefixes, dark mode, custom configuration",
        "Deploying to Vercel — connect GitHub, environment variables, preview deployments",
      ],
      buildProjects: [
        "Personal Portfolio: Static pages (home, about, projects, contact), Next.js Image for project screenshots, generateMetadata for SEO, deployed on Vercel with custom domain",
        "Movie Search App: Route Handler proxying OMDB API, dynamic routes for movie detail, next/image for posters, URL-based search with useSearchParams",
        "Blog with Markdown: Static blog posts from .md files, generateStaticParams for all posts, generateMetadata per post, Tailwind prose styling",
      ],
    },
    {
      phase: "Intermediate",
      label: "02",
      duration: "Weeks 6–14",
      color: "primary",
      topics: [
        "Server Component data fetching — async components, direct DB queries, parallel fetch with Promise.all",
        "Suspense and streaming — Suspense boundaries, loading.tsx, skeleton components",
        "Server Actions — 'use server', form actions, useFormState, useFormStatus, revalidatePath",
        "Caching and revalidation — fetch cache options, revalidate, no-store, revalidateTag, revalidatePath",
        "ISR (Incremental Static Regeneration) — next: { revalidate }, on-demand revalidation webhooks",
        "generateStaticParams — pre-build dynamic routes, fallback behavior for un-built routes",
        "Prisma ORM — schema, migrations, CRUD queries, relations, Prisma Client in Next.js",
        "Auth.js (NextAuth.js v5) — Google OAuth, Credentials provider, JWT sessions, useSession",
        "Next.js Middleware — auth checks, redirects, geo-targeting, A/B testing, request rewriting",
        "Route Groups — (marketing), (dashboard) — organize without adding URL segments",
        "Parallel Routes and Intercepting Routes — @modal pattern, photo gallery modal pattern",
        "TanStack Query — useQuery, useMutation, queryClient.invalidateQueries, optimistic updates",
        "Structured data (JSON-LD) — Product schema, Article schema, BreadcrumbList for rich snippets",
        "API security — rate limiting with Upstash Redis, input validation with Zod, CORS in Route Handlers",
      ],
      buildProjects: [
        "Full-stack Todo/Task App: Prisma + PostgreSQL, Server Actions for CRUD, Auth.js authentication, optimistic UI updates with useOptimistic",
        "E-commerce store: Product listing with ISR, dynamic product pages (generateStaticParams), cart with Zustand, checkout form with Server Actions, Stripe payment integration",
        "Blog CMS: Sanity or Contentful headless CMS, ISR with on-demand revalidation webhooks, dynamic OG images with @vercel/og, full SEO with structured data",
        "Social app (Twitter clone): Auth.js + Prisma, infinite scroll with TanStack Query useInfiniteQuery, image uploads to Cloudinary, real-time-ish with revalidation",
      ],
    },
    {
      phase: "Advanced",
      label: "03",
      duration: "Weeks 15–26+",
      color: "purple",
      topics: [
        "Partial Prerendering (PPR) — static shell + dynamic islands, Suspense-based architecture",
        "React Server Components advanced — server-only imports, taint API for data security",
        "Edge Runtime — middleware, Route Handlers, and Server Components at the edge",
        "Streaming — React Suspense + Server Component streaming, loading granularity",
        "tRPC — end-to-end type-safe APIs without code generation, TanStack Query integration",
        "Drizzle ORM — type-safe SQL alternative to Prisma, schema-first design, migrations",
        "Multi-tenancy — subdomain routing in Middleware, per-tenant databases, tenant isolation",
        "Next.js with AI SDKs — Vercel AI SDK, streaming LLM responses with useChat, ai/rsc",
        "Testing — Jest + React Testing Library for unit tests, Playwright for E2E, MSW for API mocking",
        "Internationalization (i18n) — next-intl, locale-based routing, RTL support",
        "Micro-frontends with Next.js — Turborepo monorepo, shared packages, module federation",
        "Performance — bundle analysis, lazy loading, code splitting, preloading, Core Web Vitals optimization",
        "Observability — Sentry error tracking, Vercel Analytics, custom logging, distributed tracing",
        "Docker + self-hosting — Dockerfile for Next.js, standalone output mode, nginx reverse proxy",
        "CI/CD — GitHub Actions for test, build, and deploy, preview environments, database migrations in CI",
      ],
      buildProjects: [
        "SaaS platform: Multi-tenancy with subdomain routing, Stripe Billing (subscriptions + webhooks), tRPC APIs, Turborepo monorepo with shared UI package, E2E Playwright tests",
        "AI-powered app: Next.js + Vercel AI SDK, streaming chat interface, vector embeddings with pgvector, RAG pipeline for document Q&A, usage tracking and billing",
        "News/media platform: Partial Prerendering, edge-rendered personalization, Playwright E2E tests, i18n with next-intl, self-hosted with Docker on VPS",
      ],
    },
  ],

  // ── SECTION 7: USE CASES ─────────────────────────────────────────
  useCases: [
    { num: "01", title: "E-Commerce and Product Marketplaces", body: "Next.js is the dominant framework for modern e-commerce — from solo founders building niche stores to Zepto and Meesho scaling to millions of users. Product listing pages use ISR for fast CDN delivery with hourly price/stock updates. Product detail pages use generateStaticParams to pre-build the top 10,000 SKUs and on-demand ISR for the rest. Checkout is SSR for cart personalization. Structured data generates Google rich snippets with star ratings and pricing — directly driving click-through rates from organic search." },
    { num: "02", title: "SaaS Dashboards and B2B Applications", body: "Analytics dashboards, CRM systems, project management tools, and HR platforms built with Next.js combine SSR for personalized data, TanStack Query for real-time client updates, and Server Actions for mutations. The App Router's nested layouts perfectly model SaaS UI patterns — a persistent sidebar layout that wraps all dashboard pages, with each page fetching its own data independently. Next.js + Prisma + Auth.js + Stripe is the canonical solo-founder or small-team SaaS stack in 2026." },
    { num: "03", title: "Content and Media Sites", body: "News portals, blog platforms, documentation sites, and content marketing sites use Next.js's ISR and on-demand revalidation with headless CMSes (Sanity, Contentful, Strapi). Editors publish content in the CMS, the CMS fires a webhook to /api/revalidate, and the updated page is live within seconds — without a full rebuild. Dynamic OG images with @vercel/og generate branded social share images automatically for every article, improving social media CTR by 40–60% over generic preview images." },
    { num: "04", title: "Startup Marketing Sites and Landing Pages", body: "Y Combinator companies, Indian funded startups (CRED, Razorpay, Groww marketing), and product-led growth companies build their marketing sites on Next.js. Perfect Lighthouse scores, SSG-served pages loading in under 1 second globally, and the Vercel edge network give these sites competitive SEO from day one. The Vercel + Next.js combo lets a single engineer own the entire marketing infrastructure — no separate headless WordPress, no PHP, no separate CDN configuration." },
    { num: "05", title: "Developer Tools and Documentation", body: "Next.js's MDX support (Markdown with React components embedded), versioned docs architecture, and full-text search integration make it the standard for developer documentation. HashiCorp, Vercel, Supabase, PlanetScale, and hundreds of developer tools companies build their documentation on Next.js. The Algolia DocSearch integration works out of the box with Next.js static sites, providing instant search without server infrastructure." },
    { num: "06", title: "Fintech and Crypto Applications", body: "Next.js's TypeScript-first approach, SSR for real-time price data, and tight security model make it appropriate for fintech products. Groww uses Next.js for SEO-indexed instrument detail pages (mutual funds, stocks, ETFs). Crypto portfolio trackers, DeFi dashboards, and investment calculators use Next.js with real-time data via TanStack Query polling or WebSocket connections managed through custom React hooks. Route Handler API endpoints proxy financial data APIs to avoid exposing API keys." },
    { num: "07", title: "AI-Powered Applications", body: "The Vercel AI SDK — built specifically for Next.js — enables streaming AI responses, multi-step AI agents, and RAG (Retrieval-Augmented Generation) pipelines within the Next.js App Router. AI chat interfaces, document Q&A tools, AI writing assistants, and code generation tools are being built with Next.js + Vercel AI SDK + OpenAI/Anthropic APIs. The combination of Server Actions for AI calls, streaming responses via the useChat hook, and Vercel's edge infrastructure makes Next.js the leading framework for AI application development in 2026." },
  ],

  // ── SECTION 8: PROJECTS ──────────────────────────────────────────
  projects: {
    beginner: [
      { name: "Personal Portfolio with CMS", desc: "Multi-page portfolio with About, Projects, Blog, and Contact sections. Sanity or Contentful for blog content. Automatic OG images with @vercel/og. generateMetadata for all pages. Custom domain on Vercel.", teaches: "App Router basics, layout.tsx, page.tsx, generateMetadata, next/image, next/font, static rendering, Vercel deployment" },
      { name: "Movie Search App", desc: "Search movies and TV shows using OMDB or TMDB API. Dynamic routes for detail pages. ISR for popular movie pages. URL-based search with useSearchParams. Skeleton loading states.", teaches: "Dynamic routing, Route Handlers (API proxy to hide API key), next/image for posters, useSearchParams, loading.tsx" },
      { name: "Country Information App", desc: "Browse all countries with flag images, population, capital, currencies. Country detail pages with SSG. Filter by region and language. Link to neighboring countries.", teaches: "generateStaticParams for all country pages, next/image with external URLs, static rendering, responsive grid layout with Tailwind" },
      { name: "Markdown Blog", desc: "Blog with posts written in Markdown/MDX files. Dynamic routes for each post. Table of contents. Code syntax highlighting with rehype-pretty-code. Reading time estimate.", teaches: "MDX processing, generateStaticParams, generateMetadata per post, static rendering, Tailwind prose typography" },
    ],
    intermediate: [
      { name: "Full-Stack Task Manager", desc: "Auth with NextAuth.js (Google + credentials). Prisma + PostgreSQL for tasks. Server Actions for CRUD. Drag-to-reorder with optimistic UI. Due dates, priorities, tags, and team sharing.", teaches: "Auth.js, Prisma, Server Actions, useOptimistic, TanStack Query, revalidatePath, Middleware route protection" },
      { name: "E-Commerce Store", desc: "Product listing (ISR), product detail pages (generateStaticParams), cart (Zustand + localStorage persistence), Stripe checkout (webhooks + Server Actions), order history dashboard.", teaches: "ISR, generateStaticParams, Zustand, Stripe integration, webhook Route Handler, Server Actions, auth-protected dashboard" },
      { name: "Headless CMS Blog Platform", desc: "Sanity CMS for content, Next.js for frontend. On-demand revalidation via Sanity webhooks. Dynamic OG images per post. Full SEO suite. RSS feed. Newsletter signup via Resend.", teaches: "ISR on-demand revalidation, @vercel/og, Metadata API, Route Handlers, external API integration, Resend email" },
      { name: "Multi-User Note App", desc: "Rich text notes with Tiptap editor. Auth with NextAuth.js. Notes shared between users. Real-time collaboration indicator via polling. Organize by tags and folders. Export to PDF.", teaches: "Auth.js, Prisma, Server Actions, TanStack Query, optimistic updates, rich text editor integration, PDF generation" },
    ],
    advanced: [
      { name: "SaaS Starter (Production-Grade)", desc: "Multi-tenancy with subdomain routing (app.acme.com → tenant isolation), Stripe Billing (subscriptions, usage-based billing, webhooks), tRPC, Turborepo monorepo, Playwright E2E tests, team invitations via email, role-based access.", teaches: "Middleware routing, Stripe Billing, tRPC, Turborepo, Playwright, multi-tenancy architecture, email with Resend" },
      { name: "AI Document Q&A Platform", desc: "Upload PDFs, chunk and embed with OpenAI, store vectors in pgvector, RAG-powered Q&A with streaming responses. Vercel AI SDK useChat. Usage tracking per user. Billing per query.", teaches: "Vercel AI SDK, streaming with Server Actions, pgvector, OpenAI embeddings, RAG pipeline, usage metering" },
      { name: "Full-Stack Social Platform", desc: "Twitter-like feed with Next.js, infinite scroll (useInfiniteQuery), real-time notifications via Pusher, image uploads to Cloudinary, Algolia full-text search, i18n with next-intl (3 languages), E2E tested.", teaches: "TanStack Query infinite, Pusher real-time, Cloudinary, Algolia, next-intl, Playwright, performance optimization" },
    ],
  },

  // ── SECTION 9: MISTAKES ──────────────────────────────────────────
  mistakes: [
    {
      title: "Adding 'use client' to Every Component",
      explanation: "The most common Next.js App Router mistake is marking components as Client Components by default, either out of habit (every React component was client-side before App Router) or because TypeScript shows an error about async components. 'use client' causes the component and all its children to lose SSR benefits, ship JavaScript to the browser, and lose the ability to use async/await for data fetching. A page full of 'use client' components is a React SPA, not a Next.js application.",
      tip: "Default to Server Components. Only add 'use client' when you explicitly need useState, useEffect, event handlers (onClick, onChange), or browser APIs (localStorage, window, navigator). Extract those interactive parts into the smallest possible component and mark only that component with 'use client'.",
    },
    {
      title: "Fetching Data in Client Components with useEffect When a Server Component Would Do",
      explanation: "Writing useEffect(() => { fetch('/api/products').then(...) }, []) inside a page component replicates the old SPA pattern — blank HTML on initial load, spinner while JS executes, then data. Search engines see the spinner, not the products. Users on slow connections wait longer. There is no SEO benefit from Next.js if you render data client-side.",
      tip: "For any data that doesn't require user interaction to trigger, fetch in a Server Component with async/await directly. Reserve useEffect fetching for data that loads after a user action, data that changes live without page navigation, or data that depends on client-side state (like a user's local timezone).",
      wrong: "'use client';\nuseEffect(() => { fetch('/api/products').then(r => r.json()).then(setProducts); }, []);",
      correct: "// No 'use client'. Async Server Component.\nconst products = await db.product.findMany();  // Direct DB query",
    },
    {
      title: "Not Using next/image and Losing Core Web Vitals Points",
      explanation: "Using a regular <img> tag instead of Next.js's Image component for important images causes: no automatic WebP/AVIF conversion (images 3–5x larger than necessary), no responsive srcset (same large image served to mobile), no layout reservation (CLS — layout shift as images load), and no preloading for LCP images. A site with unoptimized images cannot score above 70 on Lighthouse Performance regardless of other optimizations.",
      tip: "Replace every <img> tag with the Next.js Image component. For above-the-fold images, add the priority prop. For images with unknown dimensions, use fill with a relative-positioned parent container. For external images, whitelist the domain in next.config.js remotePatterns.",
      wrong: "<img src={product.imageUrl} alt={product.name} className=\"w-full\" />",
      correct: "<div className=\"relative aspect-square\">\n  <Image src={product.imageUrl} alt={product.name} fill className=\"object-cover\" sizes=\"(max-width: 640px) 100vw, 25vw\" />\n</div>",
    },
    {
      title: "Forgetting to Add the 'use server' Directive in Server Action Files",
      explanation: "Server Actions require either 'use server' at the top of a .ts file (makes every export a Server Action) or inline on each async function. Without the directive, calling the function from a Client Component will throw an error — the function doesn't exist on the client. Worse: if you forget and accidentally call server-only code (Prisma, environment secrets) from the client, it fails cryptically at runtime rather than at build time.",
      tip: "Create a dedicated app/actions/ directory for Server Actions. Put 'use server' at the top of every file in that directory. Import and call these functions from Client Components. The separation makes it immediately clear which functions are Server Actions.",
    },
    {
      title: "Using Route Handlers for Data That Server Components Can Fetch Directly",
      explanation: "Creating a /api/products endpoint and then fetching it from a Server Component page adds a network roundtrip from server to server (the Server Component calls its own API route). This is slower than a direct database query, adds code duplication (database logic in the Route Handler, fetch logic in the component), and defeats the purpose of Server Components.",
      tip: "Server Components can query the database directly. Use Route Handlers only for: public APIs called by external services, webhooks (Stripe, GitHub, Sanity), endpoints consumed by mobile apps or third parties, and endpoints that Client Components call. For Server Component data needs: direct Prisma/Drizzle query or a shared data function in lib/.",
    },
    {
      title: "Not Configuring next/font and Suffering CLS From Custom Fonts",
      explanation: "Loading custom fonts via a <link> tag in a CSS file or layout causes FOUT (flash of unstyled text) — text renders in the system font, then re-renders in the custom font when it loads, causing a CLS (Cumulative Layout Shift) score penalty. Google penalizes CLS above 0.1 in its Core Web Vitals ranking factor.",
      tip: "Use next/font for all custom fonts. It downloads fonts at build time, self-hosts them on your domain (no Google Fonts network request), generates optimal font-face declarations, and embeds the font preload hint directly in the HTML — eliminating FOUT and CLS from fonts.",
    },
    {
      title: "Setting Cache to No-Store on Pages That Should Be ISR",
      explanation: "Using fetch(url, { cache: 'no-store' }) or accessing cookies()/headers() inside a page that shows content which changes hourly turns that page into a full SSR endpoint. Every visitor triggers a server execution and a database query. A product catalog page with 10,000 daily visitors at cache: no-store runs 10,000 database queries. The same page with revalidate: 3600 runs 24.",
      tip: "Match caching to data freshness requirements. Marketing pages: no revalidate (static forever). Blog posts: revalidate: 86400 (daily) + on-demand webhook revalidation on publish. Product pages: revalidate: 3600 (hourly). User dashboards: cache: 'no-store' (must be personalized, always fresh). Default to the longest tolerable cache duration, not the shortest.",
    },
    {
      title: "Exposing Secret Environment Variables to the Client",
      explanation: "Adding a database connection string, OpenAI API key, or Stripe secret key to a variable without NEXT_PUBLIC_ prefix keeps it server-only. Adding NEXT_PUBLIC_ exposes it in the browser's JavaScript bundle — visible to anyone who opens DevTools. A common mistake is copying the STRIPE_SECRET_KEY variable name and accidentally adding NEXT_PUBLIC_STRIPE_SECRET_KEY.",
      tip: "Rule: NEXT_PUBLIC_ prefix = visible to everyone on the internet. Only use it for keys intended to be public (Razorpay publishable key, analytics tracking IDs, Sentry DSN for client errors). Everything else — database URL, API secrets, private keys — stays without NEXT_PUBLIC_ and is server-only.",
      wrong: "NEXT_PUBLIC_DATABASE_URL=postgresql://...  // Entire DB URL visible in browser JS bundle",
      correct: "DATABASE_URL=postgresql://...             // Server-only. Never reaches the browser.",
    },
    {
      title: "Creating One Huge layout.tsx Instead of Nested Layouts",
      explanation: "Putting all layout logic (marketing nav, dashboard sidebar, auth checks, admin header) into the root layout.tsx means every page — including the login page — renders with the dashboard sidebar, and every page navigation re-renders the entire layout. This defeats Next.js's layout persistence optimization.",
      tip: "Use nested layouts: root layout.tsx (html/body, global providers, global nav), (marketing)/layout.tsx (marketing header/footer), dashboard/layout.tsx (auth check, sidebar), admin/layout.tsx (admin nav, role check). Each layout wraps only its segment's pages and persists across navigation within that segment.",
    },
    {
      title: "Skipping Zod Validation in Server Actions and Route Handlers",
      explanation: "Server Actions receive FormData or JSON from the client — which the user can tamper with. A product creation Server Action that takes price directly from formData without validation can receive a negative price, a string where a number is expected, or SQL injection payloads. Server-side validation is non-negotiable for any data that touches your database.",
      tip: "Validate all input in Server Actions and Route Handlers with Zod. Parse with schema.safeParse() — not schema.parse() — to get structured errors you can return to the UI without throwing. Return { error: parsed.error.flatten().fieldErrors } on validation failure so the client can display field-level error messages.",
      wrong: "export async function createProduct(fd: FormData) {\n  await db.product.create({ data: { name: fd.get('name'), price: Number(fd.get('price')) } });\n}",
      correct: "const schema = z.object({ name: z.string().min(2), price: z.number().positive() });\nconst result = schema.safeParse({ name: fd.get('name'), price: Number(fd.get('price')) });\nif (!result.success) return { error: result.error.flatten().fieldErrors };",
    },
    {
      title: "Not Handling Loading and Error States in App Router",
      explanation: "Not providing loading.tsx files for data-fetching pages means users see a blank screen while Server Components fetch data. Not providing error.tsx files means any uncaught error in a server component shows Next.js's default error page, breaking the application flow and confusing users.",
      tip: "For every major route segment with data fetching, create a loading.tsx with a skeleton UI that matches the expected layout. Create an error.tsx with a friendly error message and retry button (error.tsx is automatically a Client Component — it needs the reset function prop). The combination of loading.tsx + error.tsx makes your app feel production-ready.",
    },
  ],

  // ── SECTION 10: INTERVIEW QUESTIONS ─────────────────────────────
  interviewQuestions: {
    beginner: [
      { q: "What is Next.js and how does it differ from React?", a: "Next.js is a full-stack React framework built by Vercel. React is a UI rendering library — it only handles the component and rendering layer. Next.js adds everything React lacks: file-based routing, server-side rendering, static generation, API routes, image optimization, font optimization, and a build and deployment pipeline. Where React requires developers to choose and configure routing, data fetching, and optimization tools, Next.js provides opinionated built-in solutions for each." },
      { q: "What is the App Router in Next.js?", a: "The App Router (stable since Next.js 13.4) is Next.js's current routing system built on React Server Components. Routes are defined by the file system — folders in the app/ directory become URL segments. Special files (page.tsx, layout.tsx, loading.tsx, error.tsx) define the UI at each segment. It replaces the Pages Router (pages/ directory) and enables Server Components, streaming, Server Actions, and nested layouts." },
      { q: "What is the difference between Server Components and Client Components?", a: "Server Components (default in App Router) run only on the server — they can use async/await, access databases directly, and read environment variables, but can't use hooks, event handlers, or browser APIs. No JavaScript from Server Components reaches the browser. Client Components ('use client' directive) run in the browser — they can use useState, useEffect, event handlers, and browser APIs, but can't access server-only resources. The rule: server for data, client for interactivity." },
      { q: "What is the difference between SSR, SSG, and ISR in Next.js?", a: "SSG (Static Site Generation): HTML built at build time, served from CDN, no server on request. Fastest, zero server cost. SSR (Server-Side Rendering): HTML generated fresh on every request by the server. Always up-to-date, personalized, but server runs for every visitor. ISR (Incremental Static Regeneration): Static HTML like SSG but regenerated on a schedule (revalidate: 3600 = every hour) or on-demand via revalidatePath/revalidateTag. Combines SSG speed with SSR freshness." },
      { q: "What is next/image and why should you use it?", a: "next/image is Next.js's Image component that automatically: converts images to WebP or AVIF format (typically 50-80% smaller), generates responsive srcset for different device sizes, lazy-loads off-screen images by default, reserves space before load to prevent CLS (layout shift), and preloads LCP images when priority prop is added. Using <img> instead of next/image on important images directly costs Lighthouse Performance score and Core Web Vitals ranking." },
      { q: "How do you create an API endpoint in Next.js App Router?", a: "Create a route.ts file inside the app/api/ directory. Export named functions for each HTTP method: export async function GET(request: NextRequest), export async function POST(request: NextRequest), etc. Use NextResponse.json() to return JSON responses. Route Handlers have access to the full Node.js runtime by default, or can run on the Edge Runtime with export const runtime = 'edge'." },
      { q: "What is a Server Action in Next.js?", a: "Server Actions are async functions marked with 'use server' that run on the server but can be called from Client Components. They replace Route Handlers for form submissions and mutations — no separate API endpoint needed. Client Components pass a Server Action as a form's action prop or call it directly as a function. Server Actions can access the database directly, call revalidatePath to bust caches, and use redirect to navigate after mutations." },
      { q: "What is next/font and why does it matter?", a: "next/font is Next.js's font loading solution. It downloads Google Fonts at build time, self-hosts them on your domain (eliminating the Google Fonts network request), generates optimal font-face CSS, and injects preload hints into the HTML — all without any JavaScript on the client. This eliminates FOUT (flash of unstyled text) which causes CLS, a Core Web Vitals metric that Google uses as a ranking factor." },
      { q: "How does file-based routing work in Next.js App Router?", a: "Every folder inside app/ represents a URL segment. A page.tsx file makes the segment accessible. Dynamic segments use square brackets: [id] matches /products/any-id. Catch-all routes use [...slug]. Route groups use (name) and don't add to the URL. Layout.tsx wraps all pages in its segment and nested segments. Loading.tsx shows during page transitions. Error.tsx catches errors in the segment." },
      { q: "What is the purpose of layout.tsx in Next.js?", a: "layout.tsx defines UI that is shared across multiple pages in its directory and all nested directories. Unlike page.tsx which re-renders on every navigation, layout.tsx persists across client-side navigations within its scope — meaning the sidebar doesn't flash when navigating between dashboard pages. The root layout.tsx (required) wraps the entire application and must include the html and body tags." },
    ],
    intermediate: [
      { q: "Explain Next.js caching layers and how to control them.", a: "Next.js has four caching layers: Request Memoization (deduplicates identical fetch() calls within one render), Data Cache (persists fetch() results across requests — controlled by next: { revalidate } or cache: 'no-store'), Full Route Cache (stores rendered Server Component output at build time for static routes), and Router Cache (client-side cache of RSC payloads for visited routes — 30s for dynamic, 5min for static). Control: revalidatePath() busts Full Route Cache for a URL. revalidateTag() busts Data Cache by tag. cache: 'no-store' opts a fetch out of Data Cache." },
      { q: "When would you use a Server Action vs a Route Handler?", a: "Server Actions: form submissions from Client Components, mutations triggered by user interactions within the same Next.js app, operations that need revalidatePath or redirect after completion. Route Handlers: public API endpoints for external consumers (mobile apps, third-party services), webhooks (Stripe, GitHub — must be accessible via HTTP), endpoints that need specific HTTP status codes, SSE (Server-Sent Events) or WebSocket upgrade, and any endpoint that needs to be called with plain fetch() from outside the app." },
      { q: "How do you implement authentication in Next.js App Router?", a: "Use Auth.js (NextAuth.js v5): configure providers (Google, Credentials) in auth.ts, export handlers to app/api/auth/[...nextauth]/route.ts, read session in Server Components with await auth() (no hook needed), read in Client Components with useSession(), protect routes at scale with Middleware that reads the session from the JWT cookie at the edge before any page renders. Middleware is the most performant protection layer — it redirects unauthorized users before any Server Component code executes." },
      { q: "How does Partial Prerendering (PPR) work?", a: "PPR splits a page into a static outer shell and dynamic inner sections bounded by React Suspense. The static shell is generated at build time and served from CDN instantly — it loads in milliseconds. Dynamic sections (personalized content, cart, recommendations) stream in after the shell. Users see meaningful content immediately even before personalized sections load. PPR is the middle ground between SSG (no personalization) and SSR (wait for all data before showing anything)." },
      { q: "How do you handle errors in Next.js App Router?", a: "error.tsx files define error boundaries for route segments — Next.js automatically makes them Client Components with reset() and error props. The root app/error.tsx catches unhandled errors globally. For not-found errors, throw notFound() in a Server Component — Next.js renders the nearest not-found.tsx. For expected validation errors in Server Actions, return error objects rather than throwing — React's useFormState captures return values from Server Actions." },
      { q: "What is generateStaticParams and when do you use it?", a: "generateStaticParams defines which dynamic route segments to pre-build at build time. Return an array of params objects — Next.js generates a static HTML file for each. For routes not in generateStaticParams, behavior depends on the dynamicParams config: true (default) generates on-demand and caches, false returns 404. Use for: popular blog posts, featured product pages, stable reference pages. Skip for: user-specific pages, rarely-visited pages (let ISR handle them)." },
      { q: "How do you implement infinite scroll in Next.js?", a: "Use TanStack Query's useInfiniteQuery with a Route Handler that accepts a cursor parameter. The Route Handler returns a page of items plus a nextCursor. useInfiniteQuery calls getNextPageData with the cursor, accumulates pages, and exposes fetchNextPage and hasNextPage. Trigger loading via an Intersection Observer (react-intersection-observer package) watching a sentinel div at the bottom of the list. This pattern works fully client-side after the initial server-rendered page load." },
      { q: "How do you optimize bundle size in a Next.js application?", a: "Automatic code splitting per route is built-in. Manual optimization: use dynamic() import for large components only needed on interaction (code splits them), import icon libraries granularly (import { ChevronDown } from 'lucide-react' not the whole library), add optimizePackageImports in next.config.ts for icon/component libraries, analyze with ANALYZE=true npm run build, lazy-load heavy components below the fold, use next/font to load only needed font subsets." },
      { q: "What is middleware in Next.js and what are its common uses?", a: "Middleware (middleware.ts at project root) runs before every matched request, at the edge — before any Server Component, Route Handler, or static file is served. Uses: authentication (redirect if no session cookie), locale detection (read Accept-Language header, redirect to /en or /hi), A/B testing (assign and persist variant via cookie), geo-targeting (redirect based on Vercel's geo headers), bot protection, rate limiting (with edge-compatible Redis like Upstash)." },
      { q: "How do you implement optimistic UI updates in Next.js?", a: "With Server Actions: use React's useOptimistic hook — it immediately applies a pending state to the UI before the Server Action completes, then replaces it with the real result. For Client Components using TanStack Query: useMutation with onMutate callback that calls queryClient.cancelQueries and queryClient.setQueryData with the optimistic value, then onError to roll back via queryClient.setQueryData with the previous snapshot stored in onMutate context." },
      { q: "What is tRPC and how does it integrate with Next.js?", a: "tRPC (TypeScript Remote Procedure Call) creates end-to-end type-safe APIs — the client's TypeScript types for API calls are inferred directly from the server's router definition, with no code generation step. In Next.js: server router defined in server/trpc.ts, exposed via a Route Handler. Client uses TanStack Query under the hood — trpc.product.list.useQuery() is a regular React Query hook but with full TypeScript inference. Eliminates the type drift between Route Handler response shapes and client-side usage." },
    ],
    advanced: [
      { q: "How would you architect a Next.js application for a team of 20 engineers?", a: "Turborepo monorepo with packages: apps/web (Next.js), packages/ui (shared Radix UI + Tailwind components), packages/db (Prisma schema + client), packages/config (TypeScript, ESLint, Tailwind configs). Feature-based folder structure in apps/web: app/(dashboard)/orders/, app/(marketing)/pricing/. tRPC for API type safety. Server Components for read paths, Server Actions for write paths. Each team owns a feature folder. Storybook in packages/ui. Playwright E2E per major user flow. GitHub Actions: lint, test, build, deploy on PR." },
      { q: "How do you implement multi-tenancy in Next.js?", a: "Subdomain-based multi-tenancy: Middleware reads the host header (app.acme.com → tenant=app, customer.yoursaas.com → tenant=customer). Route to the same Next.js pages but with the tenant identifier passed via a rewritten URL or a context. Tenant resolution in Middleware: look up the custom domain in the database (Upstash Redis for edge-compatible lookup), resolve to tenant ID, rewrite request. Per-tenant database isolation: either separate databases per tenant (row-level security in PostgreSQL) or a tenantId field on all tables with Prisma row filtering middleware." },
      { q: "How do you implement streaming in Next.js App Router?", a: "React Suspense is the streaming primitive. Wrap slow data-fetching Server Components in <Suspense fallback={<Skeleton />}>. Next.js streams HTML chunks — the Suspense fallback appears first, then is replaced by the resolved component's HTML as it arrives. Use separate async Server Components for each data source (product info, reviews, recommendations) each in their own Suspense boundary — they load in parallel and stream independently. loading.tsx is syntactic sugar for a Suspense boundary around the page." },
      { q: "Describe the Next.js request lifecycle from client click to rendered HTML.", a: "1. User clicks a <Link> — Next.js client-side router intercepts. 2. Router checks if RSC payload is in Router Cache — serves it immediately if cached. 3. If not cached, fetch RSC payload from server (a special JSON-like React serialization, not full HTML). 4. Server receives RSC request, runs the matched Server Component tree, queries the database, renders HTML+RSC payload. 5. Streams response — outer shell first, then Suspense boundaries fill in. 6. Client receives RSC payload, patches the existing React tree (only changed parts). 7. Client Components in the new page hydrate. 8. RSC payload cached in Router Cache for 30s (dynamic) or 5min (static)." },
      { q: "How do you handle real-time features in Next.js?", a: "WebSockets: custom server or a third-party service (Pusher, Ably, PartyKit) — Next.js doesn't support WebSocket upgrades natively. Pusher is simplest: client-side useEffect subscribes to channel, server-side Server Action or Route Handler publishes on mutation. Server-Sent Events: Route Handler with a ReadableStream that keeps the connection open and writes events. Polling: TanStack Query's refetchInterval for low-frequency real-time needs. For collaborative features: Liveblocks or PartyKit provide ready-made infrastructure compatible with Next.js." },
      { q: "How do you implement Role-Based Access Control (RBAC) end-to-end in Next.js?", a: "1. Database: User model has role field (enum: USER, ADMIN, SELLER). 2. Auth.js: extend JWT callback to include role in token, session callback to expose role in session.user. 3. Middleware: read JWT, check role against route pattern — redirect /admin/* if role !== ADMIN. 4. Server Components: await auth(), check session.user.role — use notFound() or redirect() for unauthorized access. 5. Server Actions: check session at the start of every action — throw new Error('Unauthorized') or return error object. 6. UI: conditionally render admin UI based on session.user.role from useSession()." },
      { q: "How would you debug a Core Web Vitals issue in a Next.js application?", a: "LCP > 2.5s: Check if LCP element (usually hero image) has priority prop on next/image. Profile with WebPageTest to find actual LCP element. Check if server response time (TTFB) is slow — indicates SSR without caching. Check if fonts block rendering. CLS > 0.1: Look for images without dimensions or fill+parent, ads without reserved space, fonts not using next/font, dynamic content injected above existing content. INP > 200ms: Profile with Chrome DevTools Performance — identify long tasks in main thread. Virtualize long lists (react-virtual), defer non-critical client JS with dynamic()." },
      { q: "How do you implement search functionality in a Next.js application?", a: "Simple: URL-based with useSearchParams + Server Component re-render on URL change — no client state needed. Debounce in Client Component, push to URL, Server Component reads and queries DB. Algolia/Typesense: prebuilt search UI components (InstantSearch) + API keys set in Client Component environment variables. For large catalogs: index products in Algolia via webhook on product create/update. Hybrid: Server Component for initial results, TanStack Query for client-side search refinement as user types (debounced Route Handler calls)." },
      { q: "What is the React Cache API and how does it work with Next.js?", a: "React's cache() function wraps an async function and memoizes it per request — identical calls within one React render cycle execute the function only once. In Next.js, use it to create reusable data functions that auto-deduplicate: const getProduct = cache(async (id: string) => db.product.findUnique({ where: { id } })). If ProductPage and RelatedProducts both call getProduct('abc'), only one DB query runs. Unlike Next.js fetch() memoization which only works with fetch(), cache() works with any async function including Prisma queries." },
      { q: "How do you implement a headless CMS integration with Next.js?", a: "Sanity: use next-sanity, configure GROQ queries as shared functions, fetch in Server Components with sanity.fetch(), tag fetches for revalidation (next: { tags: ['post'] }), create /api/revalidate Route Handler with webhook secret validation, configure Sanity to call it on publish. Contentful: use @contentful/rich-text-react-renderer, typed SDK, similar ISR pattern. Key: put API tokens in server-only environment variables, fetch in Server Components (never client-side), use on-demand revalidation webhooks so content changes are live within seconds." },
      { q: "How do you implement database migrations safely in a production Next.js application?", a: "Prisma Migrate: maintain migration history in prisma/migrations/. On deployment, run prisma migrate deploy (not prisma db push — that's for development) before starting the Next.js server. In CI/CD: run migrations as a separate job before the Next.js build job. Backup database before migration. Use expand-contract pattern for zero-downtime: first deploy adds new column (nullable), second deploy migrates data, third deploy makes column required and removes old column. Never auto-migrate in production — always manual review." },
    ],
  },

  // ── SECTION 11: COMPARISON ───────────────────────────────────────
  comparison: {
    headers: ["Feature", "Next.js", "Remix", "Nuxt.js (Vue)", "SvelteKit"],
    rows: [
      { feature: "Language/Library", react: "React (TypeScript default)", vue: "React (TypeScript default)", angular: "Vue.js (TypeScript optional)", extra: "Svelte (TypeScript optional)" },
      { feature: "Rendering", react: "SSG + SSR + ISR + RSC + PPR", vue: "SSR-first, SSG, deferred loading", angular: "SSG + SSR + ISR", extra: "SSG + SSR, edge-first" },
      { feature: "Routing", react: "File-based App Router (app/)", vue: "File-based + nested layouts", angular: "File-based (pages/)", extra: "File-based (routes/)" },
      { feature: "Data Fetching", react: "Server Components, Server Actions, Route Handlers", vue: "loader + action functions", angular: "Server Components, Server Actions", extra: "load functions, form actions" },
      { feature: "Full-Stack", react: "Route Handlers, Server Actions (first-class)", vue: "Actions, loaders (first-class)", angular: "Route Handlers, Server Actions", extra: "Form actions, +server.ts" },
      { feature: "Caching", react: "Multi-layer (Data, Route, Router, Memoization)", vue: "Browser cache + HTTP headers", angular: "Nitro cache (flexible)", extra: "HTTP cache headers" },
      { feature: "Database", react: "Prisma, Drizzle, direct queries in RSC", vue: "Prisma, Drizzle (very common)", angular: "Prisma, Drizzle, Nitro server plugins", extra: "Prisma, Drizzle" },
      { feature: "Auth", react: "Auth.js (Auth/NextAuth) — mature ecosystem", vue: "Remix Auth, Auth.js (good)", angular: "Nuxt Auth, Auth.js", extra: "Auth.js, Lucia Auth" },
      { feature: "Deployment", react: "Vercel (first-class), AWS, Cloudflare, Docker", vue: "Fly.io, Vercel, Railway, Cloudflare", angular: "Vercel, Netlify, self-hosted", extra: "Vercel, Cloudflare, Netlify" },
      { feature: "Ecosystem", react: "Largest (React ecosystem + Next.js specific)", vue: "Growing (React ecosystem)", angular: "Large (Vue ecosystem)", extra: "Smaller but complete" },
      { feature: "Learning Curve", react: "Moderate — RSC and App Router are new mental models", vue: "Moderate — web standards focus", angular: "Moderate — Vue + Nuxt conventions", extra: "Lowest — Svelte is minimal" },
      { feature: "Best For", react: "SEO-critical products, SaaS, e-commerce, AI apps", vue: "Web-standards-focused apps, progressive enhancement", angular: "Vue developers, content sites", extra: "Performance-critical apps, indie devs" },
    ],
  },

  // ── SECTION 12: PROS & CONS ──────────────────────────────────────
  pros: [
    "Complete production platform — routing, rendering, image optimization, font optimization, API layer, authentication, deployment — all first-party and cohesive",
    "React Server Components — fetch data on the server, ship zero JavaScript for data display, achieve SEO + performance that was impossible with SPAs",
    "Multiple rendering strategies — SSG, SSR, ISR, and PPR in one application — pick the right strategy per route without changing frameworks",
    "Vercel deployment infrastructure — git push to live in 45 seconds, preview deployments on every PR, global CDN, edge functions — startup infrastructure for free",
    "Full-stack in TypeScript — Server Actions, Route Handlers, and Prisma together eliminate the need for a separate backend for 80% of product use cases",
    "Largest React ecosystem — every React library (TanStack Query, Zustand, Radix UI, Tailwind) works with Next.js; the community is the largest in frontend",
    "SEO superiority over SPAs — rendered HTML, Metadata API, generateSitemap, structured data, OG images — complete SEO toolkit built in",
    "Performance defaults — next/image, next/font, automatic code splitting, lazy hydration, Suspense streaming — production performance without manual optimization",
    "Fastest job market access — Next.js is the most requested React framework in product companies, startups, and remote global roles in 2026",
  ],
  cons: [
    "App Router learning curve — Server Components, 'use client', caching layers, and the RSC mental model are genuinely new concepts that take weeks to internalize",
    "Caching complexity — four caching layers with different invalidation APIs (revalidatePath, revalidateTag, cache: 'no-store') create subtle bugs when misconfigured",
    "Rapid evolution — App Router replaced Pages Router, PPR is in beta, React 19 changes the Server Actions API — documentation and community patterns shift quickly",
    "Vercel vendor affinity — some advanced Next.js features (PPR, image optimization in Middleware, ISR) work best on Vercel; self-hosting requires extra configuration",
    "Bundle size concerns — React itself is ~45KB min+gzip; with Next.js runtime, a minimal page starts at ~85KB before application code; not ideal for ultra-lightweight use cases",
    "Server Actions debugging — errors in Server Actions are harder to debug than Route Handler errors; the call stack crosses client-server boundaries",
    "Monolith at scale — Next.js works best as a single application; splitting into microservices or micro-frontends requires Turborepo + Module Federation complexity",
    "Pages Router to App Router migration — large existing codebases on Pages Router face a significant migration effort; both routers can coexist but the mixed setup adds complexity",
  ],

  // ── SECTION 13: FUTURE SCOPE ─────────────────────────────────────
  futureScope: [
    "Partial Prerendering (PPR) is the future of Next.js rendering. Stable in Next.js 15, PPR eliminates the forced choice between SSG (fast but static) and SSR (dynamic but slow) by splitting every page into a static CDN-served shell and dynamic Suspense islands. For Indian e-commerce applications where product images and descriptions are static but cart, pricing, and personalization are dynamic — PPR serves the static shell in milliseconds from Cloudflare's Mumbai edge while the dynamic sections stream in. This architecture will become the standard for all Next.js product pages by 2027.",
    "The Vercel AI SDK has positioned Next.js as the leading framework for AI application development. The combination of Server Components (run LLM inference server-side without exposing API keys), streaming with useChat and useCompletion hooks, and AI SDK's RSC helpers for server-side AI-driven UI generation makes Next.js uniquely capable for AI products. Indian developers building in the AI space — chatbots, document processing, AI-assisted workflows — are overwhelmingly choosing Next.js as their platform. This trend accelerates as LLM API costs drop and AI features become standard in every SaaS product.",
    "React 19 and Next.js 15 are reshaping form handling and data mutations. React's useActionState (formerly useFormState), useFormStatus, and useOptimistic — all stable in React 19 — work natively with Next.js Server Actions, making form-driven UIs dramatically simpler. The mental model of 'forms talk to servers directly, no API layer needed' becomes the default for simple data collection. This reduces the code volume for CRUD operations by 40-60% compared to the traditional Client Component + fetch() + API route pattern.",
    "Turborepo — Vercel's monorepo tool — is becoming the standard for multi-product Indian tech companies. As companies like Razorpay, CRED, and Zepto scale their engineering teams, the shared design system + shared API types + separate Next.js apps per product pattern requires a monorepo. Turborepo's remote caching (only rebuild changed packages in CI) and task pipeline configuration are specifically optimized for Next.js applications. Developers who understand both Next.js and Turborepo are positioned for senior roles at scaling product companies.",
    "Next.js's trajectory in India's developer market is tied to the broader startup ecosystem's maturation. As Indian SaaS companies target global markets (Browserstack, Freshworks, Zoho's newer products), the need for SEO-optimized, globally-fast web applications aligns perfectly with Next.js's capabilities. The RBI's and SEBI's digital infrastructure initiatives, the government's investment in open network protocols (ONDC, UPI 2.0 applications), and the explosion of D2C e-commerce brands — all create demand for developers who can build performant, SEO-indexed web products. Next.js is the skill that bridges product development capability with business growth outcomes.",
  ],

  // ── SECTION 14: ACTION PLAN ──────────────────────────────────────
  actionPlan: [
    { week: "Week 1–2", title: "React and TypeScript Fundamentals — Build Before Next.js", desc: "If you're new to React, spend one week building pure React applications — a todo app, a weather app, a movie search app. Understand useState, useEffect, useRef, useContext, and component composition before touching Next.js. Then spend 3 days on TypeScript: typing component props, async functions, and API responses. Next.js's App Router will make far more sense if you first understand what React provides and what it lacks. This investment eliminates confusion about which features belong to React and which to Next.js." },
    { week: "Week 3–5", title: "Learn Next.js App Router Fundamentals", desc: "Run npx create-next-app@latest with TypeScript and Tailwind. Build three projects: a personal portfolio (static pages, generateMetadata, next/image, Vercel deployment), a movie database app (dynamic routes, Route Handlers to proxy an API, ISR), and a markdown blog (generateStaticParams, MDX, static rendering). Focus on understanding Server Components vs Client Components — test what breaks when you add useState to a Server Component and when you try to async/await in a Client Component. These constraints reveal the mental model." },
    { week: "Week 6–9", title: "Full-Stack Next.js — Database, Auth, and Server Actions", desc: "Set up Prisma with PostgreSQL (free tier on Neon or Supabase). Build a simple CRUD app — task manager or note-taking app — with Server Actions for creating and updating, and Server Components for reading. Add Auth.js with Google OAuth and Credentials provider. Implement Middleware-based route protection. This is the moment the full-stack Next.js model clicks — one repository, one codebase, direct database access, no API layer for internal operations. The realization that you can build a full product alone is the Next.js moment." },
    { week: "Week 10–14", title: "Build Your Primary Portfolio Project", desc: "Build the E-Commerce Store from the intermediate projects list. ISR for product pages, Zustand for cart, Stripe for payments, Auth.js for accounts, Server Actions for orders. Deploy on Vercel with a custom domain (Namecheap domains are ₹700/year). Record a 2-minute demo video. Write a detailed README with architecture decisions, tech stack, and live URL. This project demonstrates every skill Next.js employers test: rendering strategies, full-stack capability, third-party integrations, and deployment. Make it real, make it look good." },
    { week: "Week 15–20", title: "Advanced Next.js — Performance, SEO, and Scale", desc: "Run Lighthouse on your portfolio project and fix every issue below 90. Add generateSitemap, robots.ts, structured data (JSON-LD), and dynamic OG images via @vercel/og to the e-commerce project. Learn TanStack Query for client-side data fetching patterns. Study Core Web Vitals — understand LCP, CLS, and INP with specific examples from your project. Add Playwright E2E tests for the checkout flow. This phase is what separates developers who know Next.js syntax from developers who can build production-quality Next.js applications." },
    { week: "Week 21+", title: "The Product Company Job Push", desc: "Apply to 10 Next.js, frontend engineer, or full-stack roles per week — prioritizing funded startups (AngelList India, YC company jobs), product companies with strong engineering cultures (Razorpay, CRED engineering team blogs list open roles), and remote-friendly global companies (Remotive.io, arc.dev, remote.com). Study Next.js interview questions: App Router vs Pages Router, Server vs Client Components, rendering strategies, caching layers, authentication patterns, and Core Web Vitals. Do 2–3 company-specific take-home tasks regardless of whether you pass — they are the fastest gap-identifier. A deployed Next.js project, strong App Router knowledge, and consistent applications typically close an offer within 8–12 weeks." },
  ],
};