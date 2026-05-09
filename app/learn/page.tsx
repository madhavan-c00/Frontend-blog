import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { technologies } from "@/data/tech-data";
import { contentRegistry } from "@/data/content";

export const metadata: Metadata = {
  title: "Learn In-Demand Technologies | FreshersFlow",
  description:
    "Structured guides to help you become job-ready. Explore Frontend, Backend, Database, DevOps, and Full-Stack technologies.",
};

const CATEGORY_ORDER = ["Frontend", "Backend", "Database", "DevOps", "Stack"] as const;

const CATEGORY_LABELS: Record<string, string> = {
  Frontend: "Frontend Development",
  Backend: "Backend Development",
  Database: "Databases",
  DevOps: "DevOps & Cloud",
  Stack: "Full-Stack Paths",
};

const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  Frontend: "Build stunning, responsive user interfaces using modern JavaScript frameworks.",
  Backend: "Power your apps with robust server-side logic, APIs, and business rules.",
  Database: "Store, query, and manage data efficiently for any application.",
  DevOps: "Ship faster with containers, CI/CD pipelines, and cloud infrastructure.",
  Stack: "End-to-end learning paths that combine multiple technologies into production-grade apps.",
};

const CATEGORY_ICONS: Record<string, string> = {
  Frontend: "🎨",
  Backend: "⚙️",
  Database: "🗄️",
  DevOps: "🚀",
  Stack: "🔷",
};

export default function LearnPage() {
  const availableTechs = technologies.filter(t => 
    Object.keys(contentRegistry).includes(t.id)
  );

  const grouped = CATEGORY_ORDER.reduce<Record<string, typeof technologies>>(
    (acc, cat) => {
      acc[cat] = availableTechs.filter((t) => t.category === cat);
      return acc;
    },
    {}
  );

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />
        </div>
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              Structured Learning Paths
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Learn{" "}
              <span className="text-gradient">In-Demand</span>{" "}
              Technologies
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Structured guides, interview prep, and coding challenges to help
              you become job-ready — from beginner to advanced.
            </p>
          </div>

          {/* Stats row */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { label: "Technologies", value: `${technologies.length}+` },
              { label: "Interview Questions", value: "500+" },
              { label: "Coding Challenges", value: "200+" },
              { label: "Articles", value: "100+" },
            ].map((s) => (
              <div
                key={s.label}
                className="glass-card p-5 text-center"
              >
                <span className="block text-2xl font-bold text-slate-900 mb-1">
                  {s.value}
                </span>
                <span className="text-xs text-slate-500 uppercase tracking-widest font-semibold">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Category Sections */}
      <section className="pb-24">
        <Container>
          <div className="space-y-20">
            {CATEGORY_ORDER.map((cat) => {
              const techs = grouped[cat];
              if (!techs?.length) return null;
              return (
                <div key={cat}>
                  {/* Category Header */}
                  <div className="flex items-start gap-4 mb-8">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-2xl flex-shrink-0">
                      {CATEGORY_ICONS[cat]}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-slate-900 mb-1">
                        {CATEGORY_LABELS[cat]}
                      </h2>
                      <p className="text-slate-500 text-sm">
                        {CATEGORY_DESCRIPTIONS[cat]}
                      </p>
                    </div>
                  </div>

                  {/* Tech Cards Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                    {techs.map((tech) => (
                      <TechCard key={tech.id} tech={tech} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}

/* ─── Inline TechCard component ─────────────────────────────────────────── */
function TechCard({ tech }: { tech: (typeof technologies)[number] }) {
  const card = (
    <div className="relative group glass-card p-6 flex flex-col h-full overflow-hidden">
      {/* Glow */}
      <div className="absolute -right-6 -top-6 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />

      {/* Coming Soon badge */}
      {tech.comingSoon && (
        <span className="absolute top-4 right-4 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full bg-slate-100 text-slate-400 border border-slate-200">
          Coming Soon
        </span>
      )}

      {/* Icon + category */}
      <div className="flex items-start justify-between mb-5">
        <div className="w-10 h-10 flex items-center justify-center">
          {tech.icon.startsWith('http') ? (
            <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
          ) : (
            <span className="text-4xl">{tech.icon}</span>
          )}
        </div>
        <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-500 text-[10px] font-bold uppercase tracking-wider border border-slate-200">
          {tech.category}
        </span>
      </div>

      {/* Name */}
      <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">
        {tech.name}
      </h3>

      {/* Description */}
      <p className="text-slate-500 text-sm leading-relaxed mb-5 flex-1 line-clamp-2">
        {tech.description}
      </p>

      {/* Stats */}
      <div className="flex items-center gap-5 pt-4 border-t border-slate-100">
        <StatPill value={tech.stats.blogs} label="Articles" />
        <StatPill value={tech.stats.questions} label="Q&A" />
        <StatPill value={tech.stats.challenges} label="Tasks" />
      </div>
    </div>
  );

  if (tech.comingSoon) {
    return <div className="cursor-not-allowed opacity-75">{card}</div>;
  }

  return (
    <Link href={`/learn/${tech.id}`} className="block h-full">
      {card}
    </Link>
  );
}

function StatPill({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col">
      <span className="text-sm font-bold text-slate-900">{value}</span>
      <span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">{label}</span>
    </div>
  );
}
